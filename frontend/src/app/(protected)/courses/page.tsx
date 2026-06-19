"use client";

import Link from "next/link";
import { ModuleIcon } from "@/components/ModuleIcon";
import { PageShell } from "@/components/PageShell";
import { COURSE_SUMMARIES } from "@/data/course-summaries";
import { useLanguage } from "@/context/LanguageContext";
import { MODULES } from "@/types/exam";

export default function CoursesPage() {
  const { tr, locale } = useLanguage();

  return (
    <PageShell
      title={tr.courses.title}
      subtitle={tr.courses.subtitle}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-sm text-odoo-text-muted mb-5">{tr.courses.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODULES.map((mod) => {
            const summary = COURSE_SUMMARIES[mod.id];
            const label = tr.modules_labels[mod.id] ?? mod.label;
            const overview =
              locale === "fr" ? summary.overview.fr : summary.overview.en;

            return (
              <Link
                key={mod.id}
                href={`/courses/${mod.id}`}
                className="odoo-card block hover:ring-2 hover:ring-odoo-brand/30 transition-shadow"
              >
                <div className="odoo-card-header flex items-center gap-2 min-w-0">
                  <ModuleIcon moduleId={mod.id} size={26} />
                  <span className="truncate">{label}</span>
                </div>
                <div className="odoo-card-body">
                  <p className="text-sm text-odoo-text-muted line-clamp-3">
                    {overview}
                  </p>
                  <span className="text-sm text-odoo-brand mt-3 inline-block">
                    {tr.courses.readMore} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
