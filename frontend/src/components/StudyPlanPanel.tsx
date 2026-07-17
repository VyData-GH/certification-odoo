"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { StudyPlanStep } from "@/lib/learning-analytics";

interface StudyPlanPanelProps {
  steps: StudyPlanStep[];
}

export function StudyPlanPanel({ steps }: StudyPlanPanelProps) {
  const { tr } = useLanguage();
  const s = tr.studyPlan;

  const titles = {
    week1Title: s.week1Title,
    week2Title: s.week2Title,
    week3Title: s.week3Title,
  };

  const actionLabels = {
    actionDaily: s.actionDaily,
    actionCourse: s.actionCourse,
    actionWeak: s.actionWeak,
    actionMistakes: s.actionMistakes,
    actionHalf: s.actionHalf,
    actionFull: s.actionFull,
    actionSample: s.actionSample,
    actionSpaced: s.actionSpaced,
  };

  return (
    <section className="odoo-card">
      <div className="odoo-card-header">{s.title}</div>
      <div className="odoo-card-body space-y-4">
        <p className="text-sm text-odoo-text-muted">{s.intro}</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {steps.map((step) => (
            <div
              key={step.week}
              className="border border-odoo-border-light p-3 space-y-2"
              style={{ borderRadius: 3 }}
            >
              <div className="text-xs font-semibold text-odoo-brand uppercase tracking-wide">
                {s.weekLabel.replace("{n}", String(step.week))}
              </div>
              <h3 className="text-sm font-semibold text-odoo-text">
                {titles[step.titleKey]}
              </h3>
              <ul className="space-y-1.5">
                {step.actions.map((action) => (
                  <li key={action.labelKey}>
                    <Link
                      href={action.href}
                      className="text-sm text-odoo-brand hover:underline"
                    >
                      → {actionLabels[action.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
