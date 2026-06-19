"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ModuleIcon } from "@/components/ModuleIcon";
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
  const keyTopics =
    locale === "fr" ? summary.keyTopics.fr : summary.keyTopics.en;
  const examTips =
    locale === "fr" ? summary.examTips.fr : summary.examTips.en;

  return (
    <PageShell
      title={label}
      subtitle={overview}
      backHref="/courses"
      backLabel={`← ${tr.nav.courses}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-5">
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

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.courses.examFocus}</div>
          <div className="odoo-card-body">
            <ul className="space-y-1.5 list-disc pl-5 text-sm text-odoo-text-muted">
              {examTips.map((tip) => (
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
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/exam?module=${moduleId}&count=10`}
                className="odoo-btn-secondary text-sm"
              >
                {tr.courses.quiz10}
              </Link>
              <Link
                href={`/exam?module=${moduleId}&count=15`}
                className="odoo-btn-secondary text-sm"
              >
                {tr.courses.quiz15}
              </Link>
              <Link
                href={`/exam?module=${moduleId}&count=20`}
                className="odoo-btn-primary text-sm"
              >
                {tr.courses.quiz20}
              </Link>
              <Link
                href="/modules"
                className="odoo-btn-secondary text-sm ml-auto"
              >
                {tr.courses.allModules}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
