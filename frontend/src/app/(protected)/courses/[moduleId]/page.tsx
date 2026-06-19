"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ModuleIcon } from "@/components/ModuleIcon";
import { ModuleQuizControls } from "@/components/ModuleQuizControls";
import { PageShell } from "@/components/PageShell";
import { COURSE_SUMMARIES } from "@/data/course-summaries";
import { useLanguage } from "@/context/LanguageContext";
import { getQuestionStats } from "@/lib/exam-engine";
import { MODULES, ModuleId } from "@/types/exam";

function isModuleId(value: string): value is ModuleId {
  return MODULES.some((m) => m.id === value);
}

export default function CourseModulePage() {
  const params = useParams();
  const moduleId = String(params.moduleId ?? "");
  const { tr, locale } = useLanguage();
  const stats = getQuestionStats();

  if (!isModuleId(moduleId)) {
    return (
      <PageShell
        title={tr.courses.notFound}
        backHref="/courses"
        backLabel={`← ${tr.nav.courses}`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/courses" className="odoo-btn-secondary text-sm">
            {tr.courses.backToList}
          </Link>
        </div>
      </PageShell>
    );
  }

  const summary = COURSE_SUMMARIES[moduleId];
  const label = tr.modules_labels[moduleId] ?? moduleId;
  const count = stats.byModule[moduleId] ?? 0;
  const overview =
    locale === "fr" ? summary.overview.fr : summary.overview.en;
  const quickFlow =
    locale === "fr" ? summary.quickFlow.fr : summary.quickFlow.en;
  const keyTopics =
    locale === "fr" ? summary.keyTopics.fr : summary.keyTopics.en;
  const mustKnow =
    locale === "fr" ? summary.mustKnow.fr : summary.mustKnow.en;
  const readTime = tr.courses.readTime.replace(
    "{min}",
    String(summary.readMinutes)
  );

  return (
    <PageShell
      title={label}
      subtitle={overview}
      backHref="/courses"
      backLabel={`← ${tr.nav.courses}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-5">
        <p className="text-xs text-odoo-text-muted uppercase tracking-wide">
          {readTime}
        </p>

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.courses.quickFlow}</div>
          <div className="odoo-card-body">
            <ol className="space-y-2 list-decimal pl-5 text-sm text-odoo-text">
              {quickFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="odoo-card">
          <div className="odoo-card-header flex items-center gap-2">
            <ModuleIcon moduleId={moduleId} size={28} />
            <span>{tr.courses.keyTopics}</span>
          </div>
          <div className="odoo-card-body">
            <ul className="space-y-1.5 list-disc pl-5 text-sm text-odoo-text">
              {keyTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="odoo-card border-l-4 border-l-odoo-brand">
          <div className="odoo-card-header">{tr.courses.examFocus}</div>
          <div className="odoo-card-body">
            <ul className="space-y-1.5 list-disc pl-5 text-sm text-odoo-text">
              {mustKnow.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.courses.readyToPractice}</div>
          <div className="odoo-card-body space-y-4">
            <p className="text-sm text-odoo-text-muted">
              {count} {tr.home.questionsAvailable} — {tr.courses.practiceHint}
            </p>
            <ModuleQuizControls
              moduleId={moduleId}
              totalQuestions={count}
            />
            <div className="pt-1">
              <Link href="/modules" className="odoo-btn-secondary text-sm">
                {tr.courses.allModules}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
