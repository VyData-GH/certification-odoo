"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { QuestionCard } from "@/components/QuestionCard";
import { ExamNavigation } from "@/components/ExamNavigation";
import { ExamTimer } from "@/components/ExamTimer";
import { ResultsPanel } from "@/components/ResultsPanel";
import {
  calculateScore,
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
import { saveHistory } from "@/services/historyService";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  AnswerRecord,
  ExamConfig,
  ExamResult,
  EXAM_PRESETS,
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

  const isReviewMode = config?.mode === "review";

  useEffect(() => {
    const replayParam = searchParams.get("replay");
    const presetId = searchParams.get("preset");
    const moduleParam = searchParams.get("module") as ModuleId | null;
    const countParam = searchParams.get("count");

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
      examConfig = {
        mode: "module",
        questionCount: parseInt(countParam || "15", 10),
        durationMinutes: 20,
        modules: [moduleParam],
      };
      selected = selectQuestions(examConfig);
      seed = Date.now();
    } else if (presetId) {
      const preset = EXAM_PRESETS.find((p) => p.id === presetId);
      if (!preset) {
        router.replace("/");
        return;
      }
      examConfig = { ...preset.config, presetId: preset.id };
      selected = selectQuestions(examConfig);
      seed = Date.now();
    } else {
      router.replace("/");
      return;
    }

    if (!selected || selected.length === 0) {
      router.replace("/");
      return;
    }

    const localized = localizeQuestions(selected, locale);
    const shuffled = shuffleAllQuestionOptions(localized, seed);

    queueMicrotask(() => {
      setConfig(examConfig);
      setSessionSeed(seed);
      setQuestions(shuffled);
      setAnswers(new Array(shuffled.length).fill(null));
      const duration = examConfig.durationMinutes * 60;
      setRemainingSeconds(duration);
      setTotalSeconds(duration);
      setStartedAt(Date.now());
    });
  }, [searchParams, router, locale]);

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
    setShowConfirm(false);
  }, [config, startedAt, sessionSeed, questions, answers, accessToken]);

  useEffect(() => {
    if (!config || submitted || isReviewMode || remainingSeconds <= 0) return;

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
  }, [config, submitted, isReviewMode, remainingSeconds, handleSubmit]);

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-odoo-bg">
        <div className="text-odoo-text-muted">{tr.exam.loading}</div>
      </div>
    );
  }

  if (submitted && result) {
    return (
      <div className="min-h-screen bg-odoo-bg py-8">
        <ResultsPanel
          result={result}
          onRetry={() => startExamRetry(result, router.push)}
        />
      </div>
    );
  }

  const unanswered = answers.filter((a) => a === null).length;
  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-odoo-bg">
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
              <div className="mt-3 p-3 text-sm bg-amber-50 border border-amber-200 text-amber-900" style={{ borderRadius: 3 }}>
                <strong>⚠️</strong> {tr.exam.reminder}
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
              {unanswered > 0 ? (
                <>
                  <strong>{unanswered}</strong> {tr.exam.unanswered}
                </>
              ) : (
                tr.exam.allAnswered
              )}
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
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-odoo-bg">
          <div className="text-odoo-text-muted">…</div>
        </div>
      }
    >
      <ExamContent />
    </Suspense>
  );
}
