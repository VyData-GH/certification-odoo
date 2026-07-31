"use client";

import Link from "next/link";
import { ModuleIcon } from "@/components/ModuleIcon";
import { OfficialOdooLinks } from "@/components/OfficialOdooLinks";
import { PageShell } from "@/components/PageShell";
import { COURSE_EXAM_TIPS } from "@/data/course-exam-tips";
import { CourseSummary } from "@/data/course-summaries";
import { CERTIFICATION_COURSE_SUMMARIES } from "@/data/course-summaries";
import { SUPPLEMENTARY_COURSE_SUMMARIES } from "@/data/course-summaries-supplementary";
import { useLanguage } from "@/context/LanguageContext";
import {
  CERTIFICATION_MODULES,
  CertificationModuleId,
  ModuleId,
  SUPPLEMENTARY_MODULES,
  SupplementaryModuleId,
} from "@/types/exam";
import { getQuestionStats } from "@/data/question-stats";

export default function CoursesPage() {
  const { tr, locale } = useLanguage();
  const stats = getQuestionStats();

  function renderGrid<M extends { id: ModuleId; label: string }>(
    modules: readonly M[],
    summaries: Record<string, CourseSummary>,
    countFor: (id: ModuleId) => number
  ) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {modules.map((mod) => {
          const summary = summaries[mod.id];
          if (!summary) return null;
          const label = tr.modules_labels[mod.id] ?? mod.label;
          const overview =
            locale === "fr" ? summary.overview.fr : summary.overview.en;
          const readTime = tr.courses.readTime.replace(
            "{min}",
            String(summary.readMinutes)
          );
          const count = countFor(mod.id);

          return (
            <Link
              key={mod.id}
              href={`/courses/${mod.id}`}
              className="odoo-card block hover:ring-2 hover:ring-odoo-brand/30 transition-shadow"
            >
              <div className="odoo-card-header flex items-center justify-between gap-2 min-w-0">
                <span className="flex items-center gap-2 min-w-0">
                  <ModuleIcon moduleId={mod.id} size={26} />
                  <span className="truncate">{label}</span>
                </span>
                <span className="text-xs text-odoo-text-muted shrink-0">
                  {readTime}
                </span>
              </div>
              <div className="odoo-card-body">
                <p className="text-sm text-odoo-text-muted line-clamp-3">
                  {overview}
                </p>
                <p className="text-xs text-odoo-text-muted mt-2">
                  {count} {tr.home.questionsAvailable}
                </p>
                <span className="text-sm text-odoo-brand mt-3 inline-block">
                  {tr.courses.readMore} →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <PageShell
      title={tr.courses.title}
      subtitle={tr.courses.subtitle}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <p className="text-sm text-odoo-text-muted">{tr.courses.intro}</p>

        <OfficialOdooLinks />

        <section className="odoo-card border-l-4 border-l-odoo-brand">
          <div className="odoo-card-header flex items-center justify-between gap-2">
            <span>{tr.courses.examTipsTitle}</span>
            <span className="text-xs text-odoo-text-muted font-normal">
              {tr.courses.readTime.replace(
                "{min}",
                String(COURSE_EXAM_TIPS.readMinutes)
              )}
            </span>
          </div>
          <div className="odoo-card-body space-y-3">
            <p className="text-sm text-odoo-text-muted">
              {locale === "fr"
                ? COURSE_EXAM_TIPS.overview.fr
                : COURSE_EXAM_TIPS.overview.en}
            </p>
            <ul className="space-y-1 text-sm text-odoo-text list-disc pl-5">
              {(locale === "fr"
                ? COURSE_EXAM_TIPS.blocks[0].bullets.fr
                : COURSE_EXAM_TIPS.blocks[0].bullets.en
              )
                .slice(0, 3)
                .map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
            <Link
              href="/courses/exam-tips"
              className="text-sm text-odoo-brand inline-block"
            >
              {tr.courses.examTipsReadMore} →
            </Link>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-odoo-text">
            {tr.courses.certificationSection}
          </h2>
          <p className="text-sm text-odoo-text-muted">
            {tr.courses.certificationSectionDesc} — {stats.certificationTotal}{" "}
            {tr.home.questionsAvailable}
          </p>
          {renderGrid(
            CERTIFICATION_MODULES,
            CERTIFICATION_COURSE_SUMMARIES,
            (id) => stats.byCertification[id as CertificationModuleId] ?? 0
          )}
        </section>

        <section className="space-y-3 pt-2 border-t border-odoo-border-light">
          <h2 className="text-lg font-medium text-odoo-text">
            {tr.courses.supplementarySection}
          </h2>
          <p className="text-sm text-odoo-text-muted">
            {tr.courses.supplementarySectionDesc} — {stats.supplementaryTotal}{" "}
            {tr.home.questionsAvailable}
          </p>
          {renderGrid(
            SUPPLEMENTARY_MODULES,
            SUPPLEMENTARY_COURSE_SUMMARIES,
            (id) => stats.bySupplementary[id as SupplementaryModuleId] ?? 0
          )}
        </section>
      </div>
    </PageShell>
  );
}
