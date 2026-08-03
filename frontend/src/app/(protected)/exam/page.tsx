"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AppLoading } from "@/components/AppLoading";
import { BrandLogo } from "@/components/BrandLogo";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { ExamBriefing } from "@/components/ExamBriefing";
import { QuestionCard } from "@/components/QuestionCard";
import { ExamNavigation } from "@/components/ExamNavigation";
import { ExamTimer } from "@/components/ExamTimer";
import { ResultsPanel } from "@/components/ResultsPanel";
import {
  calculateScore,
  parseModuleQuizCount,
  selectQuestions,
  shuffleAllQuestionOptions,
} from "@/lib/exam-engine";
import {
  clearExamReplay,
  dismissExamReplayStorage,
  loadQuestionsByIds,
  peekExamReplay,
  startExamRetry,
} from "@/lib/exam-replay";
import {
  buildExamAttemptKey,
  clearExamDraft,
  loadExamDraft,
  saveExamDraft,
} from "@/lib/exam-draft";
import { localizeQuestions } from "@/lib/localize";
import { isDontKnow, isUnanswered } from "@/lib/answers";
import { saveHistory } from "@/services/historyService";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  AnswerRecord,
  ExamConfig,
  ExamResult,
  EXAM_PRESETS,
  resolveExamTiming,
  LocalizedQuestion,
  ModuleId,
  Question,
} from "@/types/exam";

function ExamContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { tr, locale } = useLanguage();
  const { accessToken } = useAuth();
  const accessTokenRef = useRef(accessToken);
  accessTokenRef.current = accessToken;

  const [questions, setQuestions] = useState<LocalizedQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [reviewRevealed, setReviewRevealed] = useState(false);
  const [config, setConfig] = useState<ExamConfig | null>(null);
  const [sessionSeed, setSessionSeed] = useState<number | null>(null);
  const [examStarted, setExamStarted] = useState(false);

  // Prevent JWT/token or locale flicker from wiping an in-progress attempt.
  const examStartedRef = useRef(false);
  const submittedRef = useRef(false);
  examStartedRef.current = examStarted;
  submittedRef.current = submitted;

  const isReviewMode = config?.mode === "review";
  /** Once a timed (or module) attempt has started, leaving is locked — like the official exam. */
  const navigationLocked =
    examStarted && !submitted && !isReviewMode;

  useEffect(() => {
    // Token refresh / remount must never reset answers mid-exam.
    if (examStartedRef.current && !submittedRef.current) {
      return;
    }

    const attemptKey = buildExamAttemptKey(searchParams);
    const draft = loadExamDraft(attemptKey);
    const replayParam = searchParams.get("replay");
    const presetId = searchParams.get("preset");
    const moduleParam = searchParams.get("module") as ModuleId | null;
    const countParam = searchParams.get("count");
    const forceEnglish =
      searchParams.get("lang") === "en" ||
      searchParams.get("forceEnglish") === "1";

    let cancelled = false;

    function applyPreparedExam(
      examConfig: ExamConfig,
      selected: Question[],
      seed: number,
      restore?: {
        answers: (number | null)[];
        currentIndex: number;
        startedAt: number;
        totalSeconds: number;
      }
    ) {
      const examLocale =
        examConfig.forceEnglish || forceEnglish ? "en" : locale;
      const dontKnowLabel =
        examLocale === "en" ? "I don't know" : tr.exam.dontKnow;
      const localized = localizeQuestions(selected, examLocale);
      const shuffled = shuffleAllQuestionOptions(
        localized,
        seed,
        dontKnowLabel
      );

      setConfig(examConfig);
      setSessionSeed(seed);
      setQuestions(shuffled);

      if (restore) {
        const elapsed = Math.floor((Date.now() - restore.startedAt) / 1000);
        const remaining = Math.max(0, restore.totalSeconds - elapsed);
        setAnswers(restore.answers);
        setCurrentIndex(
          Math.min(Math.max(0, restore.currentIndex), shuffled.length - 1)
        );
        setTotalSeconds(restore.totalSeconds);
        setRemainingSeconds(remaining);
        setStartedAt(restore.startedAt);
        setExamStarted(true);
        setSubmitted(false);
        setResult(null);
        setReviewRevealed(false);
      } else {
        const duration = examConfig.durationMinutes * 60;
        setAnswers(new Array(shuffled.length).fill(null));
        setRemainingSeconds(duration);
        setTotalSeconds(duration);
        setExamStarted(false);
        setStartedAt(null);
        setSubmitted(false);
        setResult(null);
        setCurrentIndex(0);
        setReviewRevealed(false);
      }

      if (replayParam) {
        dismissExamReplayStorage();
      } else {
        clearExamReplay();
      }
    }

    async function boot() {
      // Resume mid-exam draft (F5 / remount) before selecting a new question set.
      if (draft?.questionIds?.length) {
        const restored = loadQuestionsByIds(draft.questionIds);
        if (
          restored.length === draft.questionIds.length &&
          draft.answers.length === draft.questionIds.length
        ) {
          if (cancelled) return;
          applyPreparedExam(draft.config, restored, draft.sessionSeed, {
            answers: draft.answers,
            currentIndex: draft.currentIndex,
            startedAt: draft.startedAt,
            totalSeconds: draft.totalSeconds,
          });
          return;
        }
        clearExamDraft();
      }

      let examConfig: ExamConfig;
      let selected;
      let seed: number;

      if (replayParam) {
        const replay = peekExamReplay();
        if (!replay) {
          router.replace("/");
          return;
        }
        examConfig = replay.config;
        selected = loadQuestionsByIds(replay.questionIds);
        seed = replay.sessionSeed;
        if (selected.length === 0) {
          clearExamReplay();
          router.replace("/");
          return;
        }
      } else if (moduleParam) {
        const questionCount = parseModuleQuizCount(moduleParam, countParam);
        if (questionCount === 0) {
          router.replace("/modules");
          return;
        }
        examConfig = {
          mode: "module",
          questionCount,
          durationMinutes: 0,
          modules: [moduleParam],
          forceEnglish,
        };
        selected = selectQuestions(examConfig);
        seed = Date.now();
        examConfig = resolveExamTiming(examConfig, selected.length);
      } else if (presetId) {
        const preset = EXAM_PRESETS.find((p) => p.id === presetId);
        if (!preset) {
          router.replace("/");
          return;
        }
        examConfig = {
          ...preset.config,
          presetId: preset.id,
          forceEnglish: forceEnglish || preset.id === "full-exam" && searchParams.get("lang") === "en",
        };

        if (
          presetId === "redo-mistakes" ||
          presetId === "weak-modules" ||
          presetId === "spaced-review"
        ) {
          const { loadHistory } = await import("@/services/historyService");
          const {
            getMistakeQuestionIds,
            getWeakModules,
          } = await import("@/lib/learning-analytics");
          const {
            getDueSrsQuestionIds,
            seedSrsFromMistakeIds,
            getDueSrsCount,
          } = await import("@/lib/spaced-repetition");

          const { items } = await loadHistory(accessTokenRef.current);
          let questionIds: string[] = [];
          let modules: ModuleId[] | undefined;

          if (presetId === "redo-mistakes") {
            questionIds = getMistakeQuestionIds(items, examConfig.questionCount);
            if (questionIds.length === 0) {
              router.replace("/?need=mistakes");
              return;
            }
            examConfig = {
              ...examConfig,
              questionIds,
              questionCount: questionIds.length,
              mode: "review",
              showExplanations: true,
            };
          } else if (presetId === "spaced-review") {
            const mistakes = getMistakeQuestionIds(items, 80);
            seedSrsFromMistakeIds(mistakes);
            questionIds = getDueSrsQuestionIds(new Date(), examConfig.questionCount);
            if (questionIds.length === 0) {
              // Fallback: recent mistakes if nothing due yet
              questionIds = mistakes.slice(0, examConfig.questionCount);
            }
            if (questionIds.length === 0) {
              router.replace("/?need=spaced");
              return;
            }
            examConfig = {
              ...examConfig,
              questionIds,
              questionCount: questionIds.length,
              mode: "review",
              showExplanations: true,
            };
            void getDueSrsCount;
          } else {
            // weak-modules
            const weak = getWeakModules(items, 4, 3);
            modules =
              weak.length > 0
                ? weak.map((w) => w.moduleId)
                : (["crm", "sales", "accounting", "inventory"] as ModuleId[]);
            examConfig = {
              ...examConfig,
              modules,
              mode: "quick",
            };
          }
        }

        selected = selectQuestions(examConfig);
        seed = Date.now();
        examConfig = resolveExamTiming(examConfig, selected.length);
      } else {
        router.replace("/");
        return;
      }

      if (cancelled) return;

      if (!selected || selected.length === 0) {
        router.replace("/");
        return;
      }

      applyPreparedExam(examConfig, selected, seed);
    }

    void boot();
    return () => {
      cancelled = true;
    };
    // accessToken intentionally omitted: JWT refresh must not reboot the exam.
  }, [searchParams, router, locale, tr.exam.dontKnow]);

  const handleStartExam = useCallback(() => {
    clearExamReplay();
    const now = Date.now();
    setExamStarted(true);
    setStartedAt(now);
  }, []);

  const handleSubmit = useCallback(() => {
    if (submittedRef.current) return;
    if (!config || !startedAt || sessionSeed === null) return;
    submittedRef.current = true;

    const examLocale: "en" | "fr" =
      config.forceEnglish ? "en" : locale;

    const answerRecords: AnswerRecord[] = questions.map((q, i) => {
      const selected = answers[i];
      let outcome: AnswerRecord["outcome"] = "unanswered";
      if (isUnanswered(selected)) {
        outcome = "unanswered";
      } else if (isDontKnow(selected, q.dontKnowIndex)) {
        outcome = "dontKnow";
      } else if (selected === q.correctIndex) {
        outcome = "correct";
      } else {
        outcome = "wrong";
      }
      return {
        questionId: q.id,
        selectedIndex: selected,
        outcome,
        correctIndex: q.correctIndex,
        module: q.module,
        options: [...q.options],
        text: q.text,
        explanation: q.explanation,
        dontKnowIndex: q.dontKnowIndex,
      };
    });

    const scoreData = calculateScore(questions, answerRecords);
    const examResult: ExamResult = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      mode: config.mode,
      totalQuestions: questions.length,
      durationUsedSeconds: Math.floor((Date.now() - startedAt) / 1000),
      sessionMeta: {
        presetId: config.presetId,
        modules: config.modules,
        questionCount: config.questionCount,
        durationMinutes: config.durationMinutes,
        sessionSeed,
        questionIds: questions.map((q) => q.id),
        locale: examLocale,
      },
      answers: answerRecords,
      ...scoreData,
    };

    clearExamDraft();
    setResult(examResult);
    setSubmitted(true);
    void saveHistory(examResult, accessToken);
    void import("@/lib/spaced-repetition")
      .then(({ updateSrsFromResult }) => updateSrsFromResult(examResult))
      .catch(() => undefined);
    setShowConfirm(false);
  }, [config, startedAt, sessionSeed, questions, answers, accessToken, locale]);

  // Persist mid-exam draft so F5 / token remounts do not lose answers.
  useEffect(() => {
    if (
      !navigationLocked ||
      !config ||
      sessionSeed === null ||
      !startedAt ||
      questions.length === 0
    ) {
      return;
    }
    saveExamDraft({
      attemptKey: buildExamAttemptKey(searchParams),
      config,
      sessionSeed,
      questionIds: questions.map((q) => q.id),
      answers,
      currentIndex,
      remainingSeconds,
      totalSeconds,
      startedAt,
      examLocale: config.forceEnglish ? "en" : locale,
      savedAt: Date.now(),
    });
  }, [
    navigationLocked,
    config,
    sessionSeed,
    startedAt,
    questions,
    answers,
    currentIndex,
    remainingSeconds,
    totalSeconds,
    searchParams,
    locale,
  ]);

  // Block tab close / refresh while a locked attempt is running.
  useEffect(() => {
    if (!navigationLocked) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [navigationLocked]);

  useEffect(() => {
    if (!config || !examStarted || submitted || isReviewMode || remainingSeconds <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [config, examStarted, submitted, isReviewMode, remainingSeconds, handleSubmit]);

  // Time already expired when restoring a draft → submit immediately.
  useEffect(() => {
    if (
      !config ||
      !examStarted ||
      submitted ||
      isReviewMode ||
      config.durationMinutes <= 0 ||
      remainingSeconds > 0
    ) {
      return;
    }
    handleSubmit();
  }, [
    config,
    examStarted,
    submitted,
    isReviewMode,
    remainingSeconds,
    handleSubmit,
  ]);

  const handleSelect = (index: number) => {
    if (submitted) return;
    const updated = [...answers];
    updated[currentIndex] = index;
    setAnswers(updated);
    if (isReviewMode) setReviewRevealed(true);
  };

  const handleNext = () => {
    if (isReviewMode) setReviewRevealed(false);
    setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    if (isReviewMode) setReviewRevealed(false);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  if (!config || questions.length === 0) {
    return <AppLoading message={tr.exam.loading} />;
  }

  if (!examStarted) {
    return (
      <div className="odoo-content-reveal">
        <ExamBriefing
          config={config}
          questionCount={questions.length}
          onStart={handleStartExam}
        />
      </div>
    );
  }

  if (submitted && result) {
    return (
      <div className="min-h-screen bg-odoo-bg py-8 odoo-content-reveal">
        <ResultsPanel
          result={result}
          onRetry={() => startExamRetry(result, router.push)}
        />
      </div>
    );
  }

  const blankCount = answers.filter(isUnanswered).length;
  const dontKnowCount = answers.filter(
    (a, i) => isDontKnow(a, questions[i]?.dontKnowIndex)
  ).length;
  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-odoo-bg odoo-content-reveal">
      <header className="odoo-exam-bar sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 min-w-0">
            <BrandLogo className="h-6 w-auto" />
            {!navigationLocked && (
              <Link href="/" className="text-white/80 hover:text-white text-sm shrink-0">
                {tr.exam.leave}
              </Link>
            )}
          </div>
          <h1 className="font-medium text-sm">
            {isReviewMode
              ? tr.exam.reviewMode
              : config.presetId === "sample-test"
                ? tr.exam.sampleTest
                : config.questionCount === 120
                  ? tr.exam.fullExam
                  : `${tr.exam.training} — ${questions.length} ${tr.exam.questions}`}
          </h1>
          {!isReviewMode && config.durationMinutes > 0 ? (
            <ExamTimer
              remainingSeconds={remainingSeconds}
              totalSeconds={totalSeconds}
            />
          ) : (
            <span className="text-sm text-white/70">{tr.exam.noTimer}</span>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={questions.length}
                selectedIndex={answers[currentIndex]}
                onSelect={handleSelect}
                showResult={isReviewMode && reviewRevealed}
                disabled={submitted}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <ExamNavigation
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              answers={answers}
              dontKnowIndices={questions.map((q) => q.dontKnowIndex)}
              onGoTo={(i) => {
                if (isReviewMode) setReviewRevealed(false);
                setCurrentIndex(i);
              }}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={() => setShowConfirm(true)}
              isReviewMode={isReviewMode}
            />

            {!isReviewMode && (
              <div className="mt-3 space-y-2">
                <div className="p-3 text-sm bg-amber-50 border border-amber-200 text-amber-900" style={{ borderRadius: 3 }}>
                  <strong>⚠️</strong> {tr.exam.reminder}
                </div>
                <div className="p-3 text-sm bg-blue-50 border border-blue-200 text-blue-900" style={{ borderRadius: 3 }}>
                  {tr.exam.odooTabHint}
                </div>
                <div className="p-3 text-sm bg-white border border-gray-200 text-odoo-text-muted" style={{ borderRadius: 3 }}>
                  {tr.exam.dontKnowHint}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <ConfirmDialog
        open={showConfirm}
        title={tr.exam.confirmTitle}
        message={
          <>
            <p className="mb-3">
              {blankCount > 0 && (
                <>
                  <strong>{blankCount}</strong> {tr.exam.unanswered}
                  {dontKnowCount > 0 ? " " : ""}
                </>
              )}
              {dontKnowCount > 0 && (
                <>
                  <strong>{dontKnowCount}</strong> {tr.exam.dontKnowSummary}
                </>
              )}
              {blankCount === 0 && dontKnowCount === 0 && tr.exam.allAnswered}
            </p>
            <p className="text-sm text-odoo-text-muted">
              {tr.exam.scoringReminder}
            </p>
          </>
        }
        confirmLabel={tr.exam.submitFinal}
        cancelLabel={tr.exam.continue}
        onConfirm={handleSubmit}
        onCancel={() => setShowConfirm(false)}
        confirmClassName="odoo-btn-success flex-1"
      />
    </div>
  );
}

export default function ExamPage() {
  return (
    <Suspense fallback={<AppLoading />}>
      <ExamContent />
    </Suspense>
  );
}
