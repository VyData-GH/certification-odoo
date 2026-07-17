"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
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
  loadQuestionsByIds,
  peekExamReplay,
  startExamRetry,
} from "@/lib/exam-replay";
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
} from "@/types/exam";

function ExamContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { tr, locale } = useLanguage();
  const { accessToken } = useAuth();

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

  const isReviewMode = config?.mode === "review";

  useEffect(() => {
    const replayParam = searchParams.get("replay");
    const presetId = searchParams.get("preset");
    const moduleParam = searchParams.get("module") as ModuleId | null;
    const countParam = searchParams.get("count");
    const forceEnglish =
      searchParams.get("lang") === "en" ||
      searchParams.get("forceEnglish") === "1";

    let cancelled = false;

    async function boot() {
      let examConfig: ExamConfig;
      let selected;
      let seed: number;

      if (replayParam === "1") {
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
        clearExamReplay();
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

          const { items } = await loadHistory(accessToken);
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

      const examLocale =
        examConfig.forceEnglish || forceEnglish ? "en" : locale;
      const dontKnowLabel =
        examLocale === "en"
          ? "I don't know"
          : tr.exam.dontKnow;
      const localized = localizeQuestions(selected, examLocale);
      const shuffled = shuffleAllQuestionOptions(
        localized,
        seed,
        dontKnowLabel
      );

      setConfig(examConfig);
      setSessionSeed(seed);
      setQuestions(shuffled);
      setAnswers(new Array(shuffled.length).fill(null));
      const duration = examConfig.durationMinutes * 60;
      setRemainingSeconds(duration);
      setTotalSeconds(duration);
      setExamStarted(false);
      setStartedAt(null);
    }

    void boot();
    return () => {
      cancelled = true;
    };
  }, [searchParams, router, locale, tr.exam.dontKnow, accessToken]);

  const handleStartExam = useCallback(() => {
    setExamStarted(true);
    setStartedAt(Date.now());
  }, []);

  const handleSubmit = useCallback(() => {
    if (!config || !startedAt || sessionSeed === null) return;

    const answerRecords: AnswerRecord[] = questions.map((q, i) => ({
      questionId: q.id,
      selectedIndex: answers[i],
    }));

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
      },
      answers: answerRecords,
      ...scoreData,
    };

    setResult(examResult);
    setSubmitted(true);
    void saveHistory(examResult, accessToken);
    void import("@/lib/spaced-repetition")
      .then(({ updateSrsFromResult }) => updateSrsFromResult(examResult))
      .catch(() => undefined);
    setShowConfirm(false);
  }, [config, startedAt, sessionSeed, questions, answers, accessToken]);

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
            <Link href="/" className="text-white/80 hover:text-white text-sm shrink-0">
              {tr.exam.leave}
            </Link>
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
