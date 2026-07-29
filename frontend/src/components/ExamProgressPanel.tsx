"use client";

import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExamResult } from "@/types/exam";

interface Props {
  history: ExamResult[];
}

interface TrackProgress {
  label: string;
  attempts: number;
  bestPct: number;
  passed: boolean;
}

export function ExamProgressPanel({ history }: Props) {
  const { tr } = useLanguage();

  const tracks = useMemo((): TrackProgress[] => {
    const fullExams = history.filter((h) => h.mode === "full");
    const sampleExams = history.filter((h) => h.mode === "sample");

    const build = (items: ExamResult[], label: string): TrackProgress => {
      const bestPct =
        items.length > 0
          ? Math.max(...items.map((i) => i.percentage))
          : 0;
      return {
        label,
        attempts: items.length,
        bestPct: Math.round(bestPct),
        passed: bestPct >= 70,
      };
    };

    return [
      build(fullExams, tr.home.examProgressFull ?? "Full Exam (120Q)"),
      build(sampleExams, tr.home.examProgressSample ?? "Sample Test (30Q)"),
    ];
  }, [history, tr]);

  const hasData = tracks.some((t) => t.attempts > 0);

  return (
    <section className="odoo-card">
      <div className="odoo-card-header">{tr.home.examProgressTitle}</div>
      <div className="odoo-card-body">
        {!hasData ? (
          <p className="text-sm text-odoo-text-muted">
            {tr.home.examProgressEmpty ??
              "Aucune donnée d'examen pour le moment. Commencez à vous entraîner pour constater vos progrès !"}
          </p>
        ) : (
          <div className="space-y-3">
            {tracks.map((t) => (
              <div key={t.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-odoo-text">{t.label}</span>
                  <span
                    className={`font-semibold ${
                      t.passed ? "text-odoo-success" : "text-odoo-text-muted"
                    }`}
                  >
                    {t.attempts > 0 ? `${t.bestPct}%` : "--"}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all ${
                      t.passed ? "bg-odoo-success" : "bg-odoo-brand"
                    }`}
                    style={{ width: `${Math.min(t.bestPct, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-odoo-text-muted mt-0.5">
                  <span>
                    {t.attempts}{" "}
                    {t.attempts === 1
                      ? (tr.home.examProgressAttempt ?? "tentative")
                      : (tr.home.examProgressAttempts ?? "tentatives")}
                  </span>
                  {t.passed && (
                    <span className="text-odoo-success font-medium">
                      ✓ {tr.home.examProgressPassed ?? "Réussi"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
