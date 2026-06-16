"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ExamConfig,
  EXAM_RULES,
  formatExamDuration,
  SAMPLE_TEST_MINUTES,
  SAMPLE_TEST_RULES,
} from "@/types/exam";
import { secondsPerQuestion } from "@/lib/exam-engine";

interface ExamBriefingProps {
  config: ExamConfig;
  questionCount: number;
  onStart: () => void;
}

export function ExamBriefing({ config, questionCount, onStart }: ExamBriefingProps) {
  const { tr } = useLanguage();
  const isReview = config.mode === "review";
  const isSample = config.mode === "sample" || config.presetId === "sample-test";
  const hasTimer = !isReview && config.durationMinutes > 0;

  const durationLabel = hasTimer
    ? formatExamDuration(config.durationMinutes)
    : tr.exam.noTimer;

  const avgSeconds = hasTimer
    ? secondsPerQuestion(config.durationMinutes, questionCount)
    : 0;

  const rules: string[] = [];

  if (isReview) {
    rules.push(tr.briefing.reviewIntro);
    rules.push(tr.briefing.dontKnow);
    rules.push(tr.briefing.reviewExplanations);
  } else {
    if (isSample) {
      rules.push(
        tr.briefing.sampleTime
          .replace("{minutes}", String(SAMPLE_TEST_MINUTES))
          .replace("{questions}", String(SAMPLE_TEST_RULES.questionCount))
          .replace("{seconds}", String(avgSeconds))
      );
    } else if (hasTimer) {
      rules.push(
        tr.briefing.examTime
          .replace("{duration}", durationLabel)
          .replace("{questions}", String(questionCount))
          .replace("{seconds}", String(avgSeconds))
      );
    }
    rules.push(tr.briefing.scoring);
    rules.push(tr.briefing.dontKnow);
    rules.push(tr.briefing.odooTab);
    rules.push(tr.briefing.pass.replace("{threshold}", String(EXAM_RULES.passPercentage)));
    rules.push(tr.briefing.submitFinal);
  }

  const title = isSample
    ? tr.briefing.sampleTitle
    : isReview
      ? tr.briefing.reviewTitle
      : config.questionCount === EXAM_RULES.totalQuestions
        ? tr.briefing.certTitle
        : tr.briefing.trainingTitle;

  return (
    <div className="min-h-screen bg-odoo-bg flex items-center justify-center p-4">
      <div className="odoo-card max-w-lg w-full shadow-lg">
        <div className="odoo-card-header">{title}</div>
        <div className="odoo-card-body space-y-4">
          <p className="text-sm text-odoo-text-muted">{tr.briefing.intro}</p>
          <ul className="text-sm text-odoo-text space-y-2 list-disc pl-5">
            {rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Link href="/" className="odoo-btn-secondary flex-1 text-center">
              {tr.briefing.back}
            </Link>
            <button type="button" onClick={onStart} className="odoo-btn-primary flex-1">
              {isReview ? tr.briefing.startReview : tr.briefing.startExam}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
