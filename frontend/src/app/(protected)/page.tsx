"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AppLoading } from "@/components/AppLoading";
import { DemoLockedNotice } from "@/components/DemoLockedNotice";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ModuleIcon } from "@/components/ModuleIcon";
import { OfficialOdooLinks } from "@/components/OfficialOdooLinks";
import { PageShell } from "@/components/PageShell";
import { ReadinessPanel } from "@/components/ReadinessPanel";
import { SmartTrainingLinks } from "@/components/SmartTrainingLinks";
import { StudyPlanPanel } from "@/components/StudyPlanPanel";
import { useAuth } from "@/context/AuthContext";
import { useDemo } from "@/context/DemoContext";
import { useLanguage } from "@/context/LanguageContext";
import { getQuestionStats } from "@/data/question-stats";
import type {
  ModuleStrength,
  ReadinessReport,
  StudyPlanStep,
} from "@/lib/learning-analytics";
import { loadHistory } from "@/services/historyService";
import {
  EXAM_PRESETS,
  EXAM_RULES,
  formatExamDuration,
  CERTIFICATION_MODULES,
  ModuleId,
} from "@/types/exam";

const EXAM_WEIGHTS: { modules: ModuleId[]; pct: number }[] = [
  { modules: ["accounting"], pct: 14 },
  { modules: ["crm", "sales"], pct: 14 },
  { modules: ["inventory"], pct: 13 },
  { modules: ["studio"], pct: 11 },
  { modules: ["mrp"], pct: 10 },
  { modules: ["purchases"], pct: 7 },
  { modules: ["project", "timesheet"], pct: 7 },
  { modules: ["hr"], pct: 6 },
  { modules: ["website", "ecommerce"], pct: 6 },
  { modules: ["pos"], pct: 6 },
  { modules: ["spreadsheet", "knowledge"], pct: 4 },
  { modules: ["marketing", "survey"], pct: 4 },
];

function HomePageContent() {
  const { tr, locale } = useLanguage();
  const { accessToken } = useAuth();
  const { isDemo } = useDemo();
  const searchParams = useSearchParams();
  const stats = getQuestionStats();
  const showDemoLockFlash = searchParams.get("demoLocked") === "1";

  const [dueCount, setDueCount] = useState(0);
  const [readiness, setReadiness] = useState<ReadinessReport | null>(null);
  const [weakModules, setWeakModules] = useState<ModuleStrength[]>([]);
  const [studyPlan, setStudyPlan] = useState<StudyPlanStep[]>([]);
  const [analyticsReady, setAnalyticsReady] = useState(isDemo);

  useEffect(() => {
    if (isDemo) {
      setAnalyticsReady(true);
      setDueCount(0);
      setReadiness(null);
      setWeakModules([]);
      setStudyPlan([]);
      return;
    }

    let cancelled = false;
    setAnalyticsReady(false);

    void (async () => {
      try {
        const [{ items }, analytics, srs] = await Promise.all([
          loadHistory(accessToken),
          import("@/lib/learning-analytics"),
          import("@/lib/spaced-repetition"),
        ]);
        if (cancelled) return;
        const mistakes = analytics.getMistakeQuestionIds(items, 80);
        srs.seedSrsFromMistakeIds(mistakes);
        const due = srs.getDueSrsCount();
        setDueCount(due);
        const weak = analytics.getWeakModules(items, 4, 3);
        setWeakModules(weak);
        setReadiness(analytics.computeReadiness(items, due));
        setStudyPlan(analytics.buildStudyPlan(weak));
      } catch {
        if (cancelled) return;
        setDueCount(0);
        setReadiness(null);
        setWeakModules([]);
        setStudyPlan([]);
      } finally {
        if (!cancelled) setAnalyticsReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [accessToken, isDemo]);
  const classicPresets = EXAM_PRESETS.filter(
    (p) =>
      !["redo-mistakes", "weak-modules", "spaced-review"].includes(p.id)
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

  const mistakeCount = readiness?.mistakeCount ?? 0;

  return (
    <PageShell
      title={tr.home.heroTitle}
      subtitle={`${tr.home.heroSubtitle} — ${tr.home.heroDesc}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-5">
        {(isDemo || showDemoLockFlash) && <DemoLockedNotice />}

        {!isDemo && !analyticsReady ? (
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
              <p className="text-sm text-odoo-text-muted">
                {tr.readiness.loading}
              </p>
            </div>
          </section>
        ) : null}

        {!isDemo && analyticsReady && readiness ? (
          <div className="odoo-content-reveal space-y-5">
            <ReadinessPanel report={readiness} />
            <SmartTrainingLinks
              mistakeCount={mistakeCount}
              dueCount={dueCount}
              hasWeakModules={weakModules.length > 0}
            />
            <StudyPlanPanel steps={studyPlan} />
          </div>
        ) : null}

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

        <OfficialOdooLinks />

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              label: tr.home.questions,
              value: String(EXAM_RULES.totalQuestions),
            },
            {
              label: tr.home.duration,
              value: formatExamDuration(EXAM_RULES.durationMinutes),
            },
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

        <section>
          <h2 className="text-base font-bold text-odoo-text mb-3">
            {tr.home.trainingModes}
          </h2>
          {isDemo ? (
            <DemoLockedNotice />
          ) : (
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
          )}
        </section>

        <section className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/modules"
            className="odoo-card p-4 hover:shadow-md block no-underline"
          >
            <h3 className="font-semibold text-odoo-text">{tr.home.byModule}</h3>
            <p className="text-sm text-odoo-text-muted mt-1">
              {tr.home.byModuleDesc}
            </p>
          </Link>
          {isDemo ? (
            <div className="odoo-card p-4 opacity-70">
              <h3 className="font-semibold text-odoo-text">{tr.home.history}</h3>
              <p className="text-sm text-odoo-text-muted mt-1">
                {tr.demo.historyLocked}
              </p>
            </div>
          ) : (
            <Link
              href="/history"
              className="odoo-card p-4 hover:shadow-md block no-underline"
            >
              <h3 className="font-semibold text-odoo-text">{tr.home.history}</h3>
              <p className="text-sm text-odoo-text-muted mt-1">
                {tr.home.historyDesc}
              </p>
            </Link>
          )}
        </section>

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

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.home.strategyTitle}</div>
          <div className="odoo-card-body">
            <ul className="text-sm text-odoo-text space-y-2 list-decimal pl-5">
              <li>{tr.home.strategy1}</li>
              <li>{tr.home.strategy2}</li>
              <li>{tr.home.strategy3}</li>
              <li>{tr.home.strategy4}</li>
              <li>{tr.home.strategy5}</li>
              <li>{tr.home.strategy6}</li>
            </ul>
          </div>
        </section>

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.home.examWeightsTitle}</div>
          <div className="odoo-card-body space-y-2">
            {EXAM_WEIGHTS.map((w) => (
              <div key={w.modules.join("-")} className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  {w.modules.map((m) => (
                    <ModuleIcon key={m} moduleId={m} size={18} />
                  ))}
                  <span className="text-sm text-odoo-text truncate">
                    {w.modules.map((m) => tr.modules_labels[m] ?? m).join(" / ")}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className="h-2.5 bg-odoo-brand rounded-sm"
                    style={{ width: `${Math.max(w.pct * 3, 8)}px` }}
                  />
                  <span className="text-xs font-medium text-odoo-text-muted tabular-nums w-8 text-right">
                    ~{w.pct}%
                  </span>
                </div>
              </div>
            ))}
            <p className="text-xs text-odoo-text-muted pt-2 border-t border-gray-200 mt-3">
              {locale === "fr"
                ? "Pondération approximative basée sur le programme officiel Odoo 19 (source : odoo.com)."
                : "Approximate weight based on the official Odoo 19 syllabus (source: odoo.com)."}
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

export default function HomePage() {
  const { tr } = useLanguage();
  return (
    <Suspense fallback={<AppLoading message={tr.auth.loading} />}>
      <HomePageContent />
    </Suspense>
  );
}
