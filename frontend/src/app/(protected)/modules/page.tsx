"use client";

import { ModuleCatalogSection } from "@/components/ModuleCatalogSection";
import { PageShell } from "@/components/PageShell";
import { useLanguage } from "@/context/LanguageContext";
import { CERTIFICATION_MODULES, SUPPLEMENTARY_MODULES } from "@/types/exam";
import { getQuestionStats } from "@/lib/exam-engine";

export default function ModulesPage() {
  const { tr } = useLanguage();
  const stats = getQuestionStats();

  const certificationItems = CERTIFICATION_MODULES.map((mod) => ({
    id: mod.id,
    label: tr.modules_labels[mod.id] ?? mod.label,
    questionCount: stats.byCertification[mod.id] ?? 0,
  }));

  const supplementaryItems = SUPPLEMENTARY_MODULES.map((mod) => ({
    id: mod.id,
    label: tr.modules_labels[mod.id] ?? mod.label,
    questionCount: stats.bySupplementary[mod.id] ?? 0,
  }));

  return (
    <PageShell
      title={tr.modules.title}
      subtitle={`${tr.modules.subtitle} — ${stats.total} ${tr.home.questionsAvailable}`}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <ModuleCatalogSection
          title={tr.modules.certificationSection}
          description={`${tr.modules.certificationSectionDesc} — ${stats.certificationTotal} Q`}
          modules={certificationItems}
          quizDesc={tr.modules.quizDesc}
          courseHref={(id) => `/courses/${id}`}
        />

        <div className="border-t border-odoo-border-light pt-2">
          <ModuleCatalogSection
            title={tr.modules.supplementarySection}
            description={`${tr.modules.supplementarySectionDesc} — ${stats.supplementaryTotal} Q`}
            modules={supplementaryItems}
            quizDesc={tr.modules.studyCourse}
            courseHref={(id) => `/courses/${id}`}
          />
        </div>
      </div>
    </PageShell>
  );
}
