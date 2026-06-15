"use client";

import Link from "next/link";
import { ModuleIcon } from "@/components/ModuleIcon";
import { PageShell } from "@/components/PageShell";
import { useLanguage } from "@/context/LanguageContext";
import { MODULES } from "@/types/exam";
import { getQuestionStats } from "@/lib/exam-engine";

export default function ModulesPage() {
  const { tr } = useLanguage();
  const stats = getQuestionStats();

  return (
    <PageShell
      title={tr.modules.title}
      subtitle={`${tr.modules.subtitle} — ${stats.total} ${tr.home.questionsAvailable}`}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODULES.map((mod) => {
            const count = stats.byModule[mod.id] ?? 0;
            const label = tr.modules_labels[mod.id] ?? mod.label;
            return (
              <div key={mod.id} className="odoo-card">
                <div className="odoo-card-header flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 min-w-0">
                    <ModuleIcon moduleId={mod.id} size={26} />
                    <span className="truncate">{label}</span>
                  </span>
                  <span className="font-normal text-odoo-text-muted">
                    {count} Q
                  </span>
                </div>
                <div className="odoo-card-body">
                  <p className="text-sm text-odoo-text-muted mb-3">
                    {tr.modules.quizDesc}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={`/exam?module=${mod.id}&count=10`}
                      className="odoo-btn-secondary flex-1 text-center text-sm"
                    >
                      10 Q
                    </Link>
                    <Link
                      href={`/exam?module=${mod.id}&count=15`}
                      className="odoo-btn-secondary flex-1 text-center text-sm"
                    >
                      15 Q
                    </Link>
                    <Link
                      href={`/exam?module=${mod.id}&count=20`}
                      className="odoo-btn-primary flex-1 text-center text-sm"
                    >
                      20 Q
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
