"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { DemoLockedNotice } from "@/components/DemoLockedNotice";
import { ModuleIcon } from "@/components/ModuleIcon";
import { ModuleQuizControls } from "@/components/ModuleQuizControls";
import { PageShell } from "@/components/PageShell";
import { COURSE_DOC_LINKS } from "@/data/course-doc-links";
import { COURSE_CONFIG_HINTS } from "@/data/course-config-hints";
import { COURSE_STUDY_BLOCKS } from "@/data/course-study-blocks";
import { CERTIFICATION_COURSE_SUMMARIES } from "@/data/course-summaries";
import { SUPPLEMENTARY_COURSE_SUMMARIES } from "@/data/course-summaries-supplementary";
import { useDemo } from "@/context/DemoContext";
import { useLanguage } from "@/context/LanguageContext";
import { getQuestionStats } from "@/data/question-stats";
import { isCertificationModuleId, isModuleId } from "@/types/exam";

function getSummary(moduleId: string) {
  if (isCertificationModuleId(moduleId)) {
    return CERTIFICATION_COURSE_SUMMARIES[moduleId];
  }
  return SUPPLEMENTARY_COURSE_SUMMARIES[moduleId as keyof typeof SUPPLEMENTARY_COURSE_SUMMARIES];
}

export default function CourseModulePage() {
  const params = useParams();
  const moduleId = String(params.moduleId ?? "");
  const { tr, locale } = useLanguage();
  const { isDemo } = useDemo();
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

  const summary = getSummary(moduleId);
  const label = tr.modules_labels[moduleId] ?? moduleId;
  const count = stats.byModule[moduleId] ?? 0;
  const isCert = isCertificationModuleId(moduleId);
  const overview =
    locale === "fr" ? summary.overview.fr : summary.overview.en;
  const quickFlow =
    locale === "fr" ? summary.quickFlow.fr : summary.quickFlow.en;
  const keyTopics =
    locale === "fr" ? summary.keyTopics.fr : summary.keyTopics.en;
  const mustKnow =
    locale === "fr" ? summary.mustKnow.fr : summary.mustKnow.en;
  const configHints = isCert
    ? locale === "fr"
      ? COURSE_CONFIG_HINTS[moduleId].fr
      : COURSE_CONFIG_HINTS[moduleId].en
    : [];
  const studyBlocks = isCert ? COURSE_STUDY_BLOCKS[moduleId] : [];
  const docLinks = isCert ? COURSE_DOC_LINKS[moduleId] : [];
  const studyWords = studyBlocks.reduce((n, b) => {
    const body = locale === "fr" ? b.body.fr : b.body.en;
    return n + body.split(/\s+/).filter(Boolean).length;
  }, 0);
  const configWords = configHints.reduce(
    (n, tip) => n + tip.split(/\s+/).filter(Boolean).length,
    0
  );
  const estimatedMinutes = Math.max(
    summary.readMinutes,
    summary.readMinutes + Math.round((studyWords + configWords) / 180)
  );
  const readTime = tr.courses.readTime.replace(
    "{min}",
    String(estimatedMinutes)
  );

  return (
    <PageShell
      title={label}
      subtitle={overview}
      backHref="/courses"
      backLabel={`← ${tr.nav.courses}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-odoo-text-muted uppercase tracking-wide">
          <span>{readTime}</span>
          <span>·</span>
          <span>
            {isCert
              ? tr.courses.certificationSection
              : tr.courses.supplementarySection}
          </span>
        </div>

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

        {configHints.length > 0 && (
          <section className="odoo-card">
            <div className="odoo-card-header">{tr.courses.configHints}</div>
            <div className="odoo-card-body space-y-2">
              <p className="text-sm text-odoo-text-muted">
                {tr.courses.configHintsHint}
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-sm text-odoo-text">
                {configHints.map((hint) => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

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

        {studyBlocks.length > 0 && (
          <section className="odoo-card">
            <div className="odoo-card-header">{tr.courses.studyDeep}</div>
            <div className="odoo-card-body space-y-4">
              <p className="text-sm text-odoo-text-muted">
                {tr.courses.studyDeepHint}
              </p>
              {studyBlocks.map((block) => {
                const title =
                  locale === "fr" ? block.title.fr : block.title.en;
                const body = locale === "fr" ? block.body.fr : block.body.en;
                return (
                  <div key={title} className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-odoo-text">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-odoo-text">
                      {body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {docLinks.length > 0 && (
          <section className="odoo-card">
            <div className="odoo-card-header">{tr.courses.officialDocs}</div>
            <div className="odoo-card-body space-y-3">
              <p className="text-sm text-odoo-text-muted">
                {tr.courses.officialDocsHint}
              </p>
              <ul className="space-y-2">
                {docLinks.map((link) => {
                  const linkLabel =
                    locale === "fr" ? link.label.fr : link.label.en;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-odoo-brand hover:underline"
                      >
                        {linkLabel} ↗
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.courses.readyToPractice}</div>
          <div className="odoo-card-body space-y-4">
            <p className="text-sm text-odoo-text-muted">
              {count} {tr.home.questionsAvailable} — {tr.courses.practiceHint}
            </p>
            {isDemo ? (
              <DemoLockedNotice />
            ) : (
              <ModuleQuizControls moduleId={moduleId} totalQuestions={count} />
            )}
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
