"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { COURSE_EXAM_TIPS } from "@/data/course-exam-tips";
import { useLanguage } from "@/context/LanguageContext";

export default function ExamTipsPage() {
  const { tr, locale } = useLanguage();
  const overview =
    locale === "fr"
      ? COURSE_EXAM_TIPS.overview.fr
      : COURSE_EXAM_TIPS.overview.en;
  const readTime = tr.courses.readTime.replace(
    "{min}",
    String(COURSE_EXAM_TIPS.readMinutes)
  );

  return (
    <PageShell
      title={tr.courses.examTipsTitle}
      subtitle={overview}
      backHref="/courses"
      backLabel={`← ${tr.nav.courses}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-odoo-text-muted uppercase tracking-wide">
          <span>{readTime}</span>
          <span>·</span>
          <span>{tr.courses.examTipsBadge}</span>
        </div>

        {COURSE_EXAM_TIPS.blocks.map((block) => {
          const title = locale === "fr" ? block.title.fr : block.title.en;
          const bullets =
            locale === "fr" ? block.bullets.fr : block.bullets.en;
          return (
            <section key={title} className="odoo-card">
              <div className="odoo-card-header">{title}</div>
              <div className="odoo-card-body">
                <ul className="space-y-1.5 list-disc pl-5 text-sm text-odoo-text">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <section className="odoo-card border-l-4 border-l-odoo-brand">
          <div className="odoo-card-header">{tr.courses.examTipsNext}</div>
          <div className="odoo-card-body space-y-3">
            <p className="text-sm text-odoo-text-muted">
              {tr.courses.examTipsNextHint}
            </p>
            <Link href="/courses" className="odoo-btn-secondary text-sm">
              {tr.courses.backToList}
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
