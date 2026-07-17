"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ModuleIcon } from "@/components/ModuleIcon";
import { PageShell } from "@/components/PageShell";
import { ReadinessPanel } from "@/components/ReadinessPanel";
import { SmartTrainingLinks } from "@/components/SmartTrainingLinks";
import { StudyPlanPanel } from "@/components/StudyPlanPanel";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  buildStudyPlan,
  computeReadiness,
  getMistakeQuestionIds,
  getWeakModules,
} from "@/lib/learning-analytics";
import { getDueSrsCount, seedSrsFromMistakeIds } from "@/lib/spaced-repetition";
import { loadHistory } from "@/services/historyService";
import {
  EXAM_PRESETS,
  EXAM_RULES,
  formatExamDuration,
  CERTIFICATION_MODULES,
  ExamResult,
} from "@/types/exam";
import { getQuestionStats } from "@/lib/exam-engine";

export default function HomePage() {
  const { tr, locale } = useLanguage();
  const { accessToken } = useAuth();
  const stats = getQuestionStats();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [dueCount, setDueCount] = useState(0);
  const [loadedToken, setLoadedToken] = useState<string | null | undefined>(
    undefined
  );

  const analyticsLoading = loadedToken !== accessToken;

  useEffect(() => {
    let cancelled = false;
    void loadHistory(accessToken)
      .then(({ items }) => {
        if (cancelled) return;
        setHistory(items);
        const mistakes = getMistakeQuestionIds(items, 80);
        seedSrsFromMistakeIds(mistakes);
        setDueCount(getDueSrsCount());
        setLoadedToken(accessToken);
      })
      .catch(() => {
        if (cancelled) return;
        setHistory([]);
        setDueCount(0);
        setLoadedToken(accessToken);
      });
    return () => {
      cancelled = true;
    };
  }, [accessToken]);

  const readiness = useMemo(
    () => computeReadiness(history, dueCount),
    [history, dueCount]
  );
  const weakModules = useMemo(() => getWeakModules(history, 4, 3), [history]);
  const studyPlan = useMemo(() => buildStudyPlan(weakModules), [weakModules]);
  const mistakeCount = readiness.mistakeCount;

  const classicPresets = EXAM_PRESETS.filter(
    (p) =>
      ![
        "redo-mistakes",
        "weak-modules",
        "spaced-review",
      ].includes(p.id)
  );

  const guidelines = [
    tr.guidelines.nominative,
    tr.guidelines.rightUser,
    tr.guidelines.support,
    tr.guidelines.subjects,
    tr.guidelines.duration,
    tr.guidelines.sampleDuration,
    tr.guidelines.pass,
    tr.guidelines.rightPts,
    tr.guidelines.wrongPts,
    tr.guidelines.unansweredPts,
    tr.guidelines.dontKnowPts,
    tr.guidelines.odooTab,
    tr.guidelines.submit,
    tr.guidelines.luck,
  ];

  return (
    <PageShell
      title={tr.home.heroTitle}
      subtitle={`${tr.home.heroSubtitle} — ${tr.home.heroDesc}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-5">
        {analyticsLoading ? (
          <section
            className="odoo-card"
            role="status"
            aria-live="polite"
            aria-busy="true"
            aria-label={tr.readiness.loading}
          >
            <div className="odoo-card-header">{tr.readiness.title}</div>
            <div className="odoo-card-body flex flex-col items-center justify-center gap-3 py-10">
              <LoadingSpinner size="md" />
              <p className="text-sm text-odoo-text-muted">{tr.readiness.loading}</p>
            </div>
          </section>
        ) : (
          <>
            <div className="odoo-content-reveal space-y-5">
              <ReadinessPanel report={readiness} />

              <SmartTrainingLinks
                mistakeCount={mistakeCount}
                dueCount={dueCount}
                hasWeakModules={weakModules.length > 0}
              />

              <StudyPlanPanel steps={studyPlan} />
            </div>
          </>
        )}

        {/* Official guidelines — mirrors Odoo certification page */}
        <section className="odoo-guidelines odoo-card">
          <div className="odoo-card-header">{tr.guidelines.title}</div>
          <div className="odoo-card-body">
            <ul className="space-y-1 list-disc pl-5">
              {guidelines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats row */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: tr.home.questions, value: String(EXAM_RULES.totalQuestions) },
            { label: tr.home.duration, value: formatExamDuration(EXAM_RULES.durationMinutes) },
            {
              label: tr.home.passThreshold,
              value: `${EXAM_RULES.passPercentage}%`,
            },
            {
              label: tr.home.scoring,
              value: "+1 / −½ / 0",
              sub: tr.home.scoringSub,
            },
          ].map((item) => (
            <div key={item.label} className="odoo-stat-box">
              <div className="odoo-stat-value">{item.value}</div>
              <div className="odoo-stat-label">{item.label}</div>
              {item.sub && (
                <div className="text-xs text-odoo-text-muted mt-0.5">
                  {item.sub}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 360 coverage */}
        <section className="odoo-card">
          <div className="odoo-card-header flex items-center justify-between">
            <span>{tr.home.view360}</span>
            <span className="font-normal text-odoo-text-muted">
              {stats.total} {tr.home.questionsAvailable}
            </span>
          </div>
          <div className="odoo-card-body">
            <p className="text-sm text-odoo-text-muted mb-3">
              {tr.home.view360Desc} — {tr.home.modulesCovered}:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CERTIFICATION_MODULES.map((m) => (
                <span
                  key={m.id}
                  className="odoo-badge odoo-badge-brand inline-flex items-center gap-1.5"
                  title={`${stats.byModule[m.id] ?? 0} Q`}
                >
                  <ModuleIcon moduleId={m.id} size={16} />
                  <span>
                    {tr.modules_labels[m.id] ?? m.label}
                    <span className="ml-1 opacity-60">
                      ({stats.byCertification[m.id] ?? 0})
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Classic training modes */}
        <section>
          <h2 className="text-base font-bold text-odoo-text mb-3">
            {tr.home.trainingModes}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {classicPresets.map((preset) => {
              const presetTr =
                tr.presets[preset.id as keyof typeof tr.presets];
              const durationLabel =
                preset.config.durationMinutes > 0
                  ? formatExamDuration(preset.config.durationMinutes)
                  : tr.exam.noTimer;
              const description = `${preset.config.questionCount} ${tr.exam.questions} · ${durationLabel} · ${presetTr.description}`;
              return (
                <Link
                  key={preset.id}
                  href={`/exam?preset=${preset.id}`}
                  className="odoo-card p-4 hover:shadow-md transition-shadow group block no-underline"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-odoo-text group-hover:text-odoo-brand">
                      {presetTr.title}
                    </h3>
                    {"badge" in presetTr && presetTr.badge && (
                      <span className="odoo-badge odoo-badge-brand shrink-0">
                        {presetTr.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-odoo-text-muted mt-2">
                    {description}
                  </p>
                  <span className="inline-block mt-3 text-sm font-medium text-odoo-brand">
                    {tr.home.start}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick links */}
        <section className="grid sm:grid-cols-2 gap-3">
          <Link href="/modules" className="odoo-card p-4 hover:shadow-md block no-underline">
            <h3 className="font-semibold text-odoo-text">{tr.home.byModule}</h3>
            <p className="text-sm text-odoo-text-muted mt-1">
              {tr.home.byModuleDesc}
            </p>
          </Link>
          <Link href="/history" className="odoo-card p-4 hover:shadow-md block no-underline">
            <h3 className="font-semibold text-odoo-text">{tr.home.history}</h3>
            <p className="text-sm text-odoo-text-muted mt-1">
              {tr.home.historyDesc}
            </p>
          </Link>
        </section>

        {/* Tips */}
        <section className="odoo-card">
          <div className="odoo-card-header">{tr.home.tipsTitle}</div>
          <div className="odoo-card-body">
            <ul className="text-sm text-odoo-text space-y-2 list-disc pl-5">
              <li>{tr.home.tip1}</li>
              <li>{tr.home.tip2}</li>
              <li>{tr.home.tip3}</li>
              <li>{tr.home.tip4}</li>
              <li>{tr.home.tip5}</li>
            </ul>
            {locale === "en" && (
              <p className="mt-3 text-xs text-odoo-text-muted border-t border-gray-200 pt-3">
                💡 The real exam is in English — use the English-only full mock
                to practice exam vocabulary.
              </p>
            )}
            {locale === "fr" && (
              <p className="mt-3 text-xs text-odoo-text-muted border-t border-gray-200 pt-3">
                💡 L&apos;examen réel est en anglais — utilisez l&apos;examen
                blanc EN pour vous familiariser avec le vocabulaire.
              </p>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
