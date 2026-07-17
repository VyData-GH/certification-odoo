"use client";

import Link from "next/link";
import { ModuleIcon } from "@/components/ModuleIcon";
import { useLanguage } from "@/context/LanguageContext";
import { ReadinessReport } from "@/lib/learning-analytics";

interface ReadinessPanelProps {
  report: ReadinessReport;
}

function levelColor(level: ReadinessReport["level"]): string {
  switch (level) {
    case "ready":
      return "text-odoo-success";
    case "almost":
      return "text-odoo-warning";
    case "building":
      return "text-odoo-brand";
    default:
      return "text-odoo-text-muted";
  }
}

export function ReadinessPanel({ report }: ReadinessPanelProps) {
  const { tr } = useLanguage();
  const r = tr.readiness;

  const levelLabel = {
    "not-started": r.levelNotStarted,
    building: r.levelBuilding,
    almost: r.levelAlmost,
    ready: r.levelReady,
  }[report.level];

  const recommendation = {
    train: { label: r.recTrain, href: "/exam?preset=daily-challenge" },
    "focus-weak": { label: r.recWeak, href: "/exam?preset=weak-modules" },
    "redo-mistakes": {
      label: r.recMistakes,
      href: "/exam?preset=redo-mistakes",
    },
    "full-mock": {
      label: r.recFull,
      href: "/exam?preset=full-exam&lang=en",
    },
    go: { label: r.recGo, href: "/exam?preset=full-exam&lang=en" },
  }[report.recommendation];

  return (
    <section className="odoo-card">
      <div className="odoo-card-header flex items-center justify-between gap-2">
        <span>{r.title}</span>
        <span className={`text-sm font-semibold ${levelColor(report.level)}`}>
          {levelLabel}
        </span>
      </div>
      <div className="odoo-card-body space-y-4">
        <div className="flex items-end gap-3">
          <div className={`text-4xl font-bold tabular-nums ${levelColor(report.level)}`}>
            {report.score}%
          </div>
          <p className="text-sm text-odoo-text-muted pb-1">{r.scoreHint}</p>
        </div>

        <div
          className="h-2.5 bg-gray-200 overflow-hidden"
          style={{ borderRadius: 2 }}
        >
          <div
            className="h-full transition-[width] duration-500"
            style={{
              width: `${Math.max(report.score, report.score > 0 ? 4 : 0)}%`,
              backgroundColor:
                report.level === "ready"
                  ? "var(--odoo-success)"
                  : report.level === "almost"
                    ? "var(--odoo-warning)"
                    : "var(--odoo-brand)",
            }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <div className="odoo-stat-box py-2">
            <div className="odoo-stat-value text-base">
              {report.recentFullMocks}
            </div>
            <div className="odoo-stat-label">{r.statMocks}</div>
          </div>
          <div className="odoo-stat-box py-2">
            <div className="odoo-stat-value text-base">
              {report.recentAvgPercentage != null
                ? `${report.recentAvgPercentage.toFixed(0)}%`
                : "—"}
            </div>
            <div className="odoo-stat-label">{r.statAvg}</div>
          </div>
          <div className="odoo-stat-box py-2">
            <div className="odoo-stat-value text-base">{report.mistakeCount}</div>
            <div className="odoo-stat-label">{r.statMistakes}</div>
          </div>
          <div className="odoo-stat-box py-2">
            <div className="odoo-stat-value text-base">
              {report.dueReviewCount}
            </div>
            <div className="odoo-stat-label">{r.statDue}</div>
          </div>
        </div>

        {report.weakModules.length > 0 && (
          <div>
            <p className="text-xs font-medium text-odoo-text-muted mb-2">
              {r.weakTitle}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {report.weakModules.map((m) => (
                <Link
                  key={m.moduleId}
                  href={`/exam?module=${m.moduleId}&count=15`}
                  className="odoo-badge odoo-badge-brand inline-flex items-center gap-1.5 no-underline"
                  title={`${m.percentage.toFixed(0)}%`}
                >
                  <ModuleIcon moduleId={m.moduleId} size={14} title={tr.modules_labels[m.moduleId]} />
                  <span>
                    {tr.modules_labels[m.moduleId] ?? m.moduleId}
                    <span className="ml-1 opacity-70">
                      {m.percentage.toFixed(0)}%
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          href={recommendation.href}
          className="odoo-btn-primary inline-flex w-full sm:w-auto justify-center no-underline"
        >
          {recommendation.label}
        </Link>
      </div>
    </section>
  );
}
