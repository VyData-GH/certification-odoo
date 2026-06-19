"use client";

import Link from "next/link";
import { ModuleIcon } from "@/components/ModuleIcon";
import { ModuleQuizControls } from "@/components/ModuleQuizControls";
import { ModuleId } from "@/types/exam";

interface ModuleCatalogItem {
  id: ModuleId;
  label: string;
  questionCount: number;
}

interface ModuleCatalogSectionProps {
  title: string;
  description?: string;
  modules: ModuleCatalogItem[];
  quizDesc: string;
  courseHref?: (id: ModuleId) => string;
}

export function ModuleCatalogSection({
  title,
  description,
  modules,
  quizDesc,
  courseHref,
}: ModuleCatalogSectionProps) {
  if (modules.length === 0) return null;

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-medium text-odoo-text">{title}</h2>
        {description && (
          <p className="text-sm text-odoo-text-muted mt-1">{description}</p>
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {modules.map((mod) => (
          <div key={mod.id} className="odoo-card">
            <div className="odoo-card-header flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 min-w-0">
                <ModuleIcon moduleId={mod.id} size={26} />
                <span className="truncate">{mod.label}</span>
              </span>
              <span className="font-normal text-odoo-text-muted shrink-0">
                {mod.questionCount} Q
              </span>
            </div>
            <div className="odoo-card-body space-y-3">
              {courseHref && (
                <Link
                  href={courseHref(mod.id)}
                  className="text-sm text-odoo-brand inline-block"
                >
                  {quizDesc} →
                </Link>
              )}
              {!courseHref && (
                <p className="text-sm text-odoo-text-muted">{quizDesc}</p>
              )}
              <ModuleQuizControls
                moduleId={mod.id}
                totalQuestions={mod.questionCount}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
