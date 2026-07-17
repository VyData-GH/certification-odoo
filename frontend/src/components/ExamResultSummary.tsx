"use client";

import { useState } from "react";
import { ModuleIcon } from "@/components/ModuleIcon";
import { WeakQuestionsModal } from "@/components/WeakQuestionsModal";
import {
  ExamResult,
  EXAM_RULES,
  CERTIFICATION_MODULES,
  SUPPLEMENTARY_MODULES,
  ModuleId,
} from "@/types/exam";
import { formatTime } from "@/lib/exam-engine";
import { getSingleModuleId } from "@/lib/history-utils";
import { useLanguage } from "@/context/LanguageContext";

function progressBarColor(pct: number): string {
  if (pct >= 70) return "var(--odoo-success)";
  if (pct > 0) return "var(--odoo-warning)";
  return "var(--odoo-danger)";
}

const ALL_MODULES = [...CERTIFICATION_MODULES, ...SUPPLEMENTARY_MODULES];

interface ExamResultSummaryProps {
  result: ExamResult;
  onRetry?: () => void;
  showActions?: boolean;
  compact?: boolean;
}

export function ExamResultSummary({
  result,
  onRetry,
  showActions = true,
  compact = false,
}: ExamResultSummaryProps) {
  const { tr } = useLanguage();
  const [reviewOpen, setReviewOpen] = useState(false);
  const examScoreLabel = tr.results.examScoreOfficial
    .replace("{score}", result.score.toFixed(1));
  const singleModuleId = getSingleModuleId(result);

  const moduleResults = ALL_MODULES.map((mod) => {
    const data = result.moduleBreakdown[mod.id];
    if (!data || data.total === 0) return null;
    const pct = (data.correct / data.total) * 100;
    const label = tr.modules_labels[mod.id] ?? mod.label;
    return { id: mod.id, label, correct: data.correct, total: data.total, pct };
  }).filter(Boolean) as Array<{
    id: ModuleId;
    label: string;
    correct: number;
    total: number;
    pct: number;
  }>;

  // Modules présents dans le breakdown mais absents du catalogue (sécurité)
  for (const [id, data] of Object.entries(result.moduleBreakdown ?? {}) as Array<
    [ModuleId, { correct: number; total: number }]
  >) {
    if (!data.total || moduleResults.some((m) => m.id === id)) continue;
    moduleResults.push({
      id,
      label: tr.modules_labels[id] ?? id,
      correct: data.correct,
      total: data.total,
      pct: (data.correct / data.total) * 100,
    });
  }

  return (
    <>
    <div className={`space-y-4 ${compact ? "" : "pb-4"}`}>
      <div className="odoo-card p-6 text-center">
        <div
          className={`text-5xl font-bold tabular-nums mb-2 ${
            result.percentage >= EXAM_RULES.passPercentage
              ? "text-odoo-success"
              : result.percentage > 0
                ? "text-odoo-warning"
                : "text-odoo-danger"
          }`}
        >
          {result.percentage.toFixed(0)}%
        </div>
        {singleModuleId && (
          <div className="flex justify-center mb-3">
            <ModuleIcon
              moduleId={singleModuleId}
              size={36}
              title={tr.modules_labels[singleModuleId] ?? singleModuleId}
            />
          </div>
        )}
        <p className="text-sm text-odoo-text-muted">
          {tr.results.correctAnswersCount
            .replace("{correct}", String(result.correct))
            .replace("{total}", String(result.totalQuestions))}
        </p>
        <p className="text-xs text-odoo-text-muted mt-1">{examScoreLabel}</p>
        <div
          className={`mt-4 py-2 px-4 text-sm font-medium ${
            result.passed
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-amber-50 text-amber-900 border border-amber-200"
          }`}
          style={{ borderRadius: 3 }}
        >
          {result.passed
            ? tr.results.passBanner.replace(
                "{threshold}",
                String(EXAM_RULES.passPercentage)
              )
            : tr.results.failBanner.replace(
                "{threshold}",
                String(EXAM_RULES.passPercentage)
              )}
        </div>
        {!compact && (
          <p className="text-xs text-odoo-text-muted mt-3">
            {new Date(result.date).toLocaleString()} ·{" "}
            {formatTime(result.durationUsedSeconds)}
          </p>
        )}
      </div>

      <div className={`grid gap-3 ${result.dontKnow ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"}`}>
        {[
          { label: tr.results.correct, value: result.correct },
          { label: tr.results.wrong, value: result.wrong },
          ...(result.dontKnow
            ? [{ label: tr.results.dontKnow, value: result.dontKnow }]
            : []),
          {
            label: tr.results.examPoints,
            value: `${result.score.toFixed(1)}`,
          },
        ].map((stat) => (
          <div key={stat.label} className="odoo-stat-box">
            <div className="odoo-stat-value text-odoo-text">{stat.value}</div>
            <div className="odoo-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {moduleResults.length > 0 && (
        <div className="odoo-card">
          <div className="odoo-card-header">{tr.results.byModule}</div>
          <div className="odoo-card-body space-y-3">
            {(singleModuleId
              ? moduleResults
              : [...moduleResults].sort((a, b) => a.pct - b.pct)
            ).map((mod) => (
              <div key={mod.id}>
                <div className="flex items-center justify-between text-sm mb-1 gap-2">
                  {singleModuleId ? (
                    <ModuleIcon
                      moduleId={mod.id}
                      size={28}
                      title={mod.label}
                    />
                  ) : (
                    <span className="flex items-center gap-2 text-odoo-text min-w-0">
                      <ModuleIcon moduleId={mod.id} size={22} title={mod.label} />
                      <span className="truncate">{mod.label}</span>
                    </span>
                  )}
                  <span
                    className={`shrink-0 tabular-nums ${
                      mod.pct >= 70
                        ? "text-odoo-success"
                        : mod.pct > 0
                          ? "text-odoo-warning"
                          : "text-odoo-danger"
                    }`}
                  >
                    {mod.correct}/{mod.total} · {mod.pct.toFixed(0)}%
                  </span>
                </div>
                <div
                  className="h-2.5 bg-gray-200 overflow-hidden"
                  style={{ borderRadius: 2 }}
                >
                  <div
                    className="h-full transition-[width] duration-300"
                    style={{
                      width: `${Math.max(mod.pct, mod.pct > 0 ? 4 : 0)}%`,
                      backgroundColor: progressBarColor(mod.pct),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showActions && (
        <div className="flex flex-col gap-2">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="odoo-btn-secondary w-full py-2.5"
            >
              ↻ {tr.results.retryQuiz}
            </button>
          )}
          <button
            type="button"
            onClick={() => setReviewOpen(true)}
            className="odoo-btn-secondary w-full py-2.5"
          >
            {tr.results.reviewWeak} ↗
          </button>
        </div>
      )}
    </div>
    <WeakQuestionsModal
      result={result}
      open={reviewOpen}
      onClose={() => setReviewOpen(false)}
    />
    </>
  );
}
