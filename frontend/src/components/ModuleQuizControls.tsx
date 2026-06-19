"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  examDurationMinutes,
  formatExamDuration,
  ModuleId,
} from "@/types/exam";

interface ModuleQuizControlsProps {
  moduleId: ModuleId;
  totalQuestions: number;
}

function quizLabel(count: number, template: string): string {
  const duration = formatExamDuration(examDurationMinutes(count, "module"));
  return template.replace("{n}", String(count)).replace("{duration}", duration);
}

export function ModuleQuizControls({
  moduleId,
  totalQuestions,
}: ModuleQuizControlsProps) {
  const router = useRouter();
  const { tr } = useLanguage();
  const [customCount, setCustomCount] = useState("");
  const [launching, setLaunching] = useState(false);

  const disabled = totalQuestions === 0 || launching;

  function launch(count: number | "all") {
    if (disabled) return;
    setLaunching(true);
    const param = count === "all" ? "all" : String(count);
    router.push(`/exam?module=${moduleId}&count=${param}`);
  }

  function handleCustomSubmit(e: FormEvent) {
    e.preventDefault();
    if (disabled) return;
    const parsed = parseInt(customCount, 10);
    if (Number.isNaN(parsed) || parsed < 1) return;
    launch(Math.min(parsed, totalQuestions));
  }

  if (launching) {
    return (
      <div className="flex items-center gap-2 text-sm text-odoo-text-muted py-2">
        <div className="odoo-spinner w-5 h-5 border-2" aria-hidden />
        <span>{tr.modulesQuiz.launching}</span>
      </div>
    );
  }

  const parsedCustom = parseInt(customCount, 10);
  const previewCount =
    !Number.isNaN(parsedCustom) && parsedCustom >= 1
      ? Math.min(parsedCustom, totalQuestions)
      : null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {[10, 15, 20]
          .filter((n) => n <= totalQuestions)
          .map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => launch(n)}
              disabled={disabled}
              className="odoo-btn-secondary flex-1 min-w-[5.5rem] text-center text-sm disabled:opacity-50"
            >
              {quizLabel(n, tr.modulesQuiz.questionsWithDuration)}
            </button>
          ))}
        {totalQuestions > 0 && (
          <button
            type="button"
            onClick={() => launch("all")}
            disabled={disabled}
            className="odoo-btn-primary flex-1 min-w-[6rem] text-center text-sm disabled:opacity-50"
          >
            {tr.modulesQuiz.allQuestions.replace("{n}", String(totalQuestions))}
            {" · "}
            {formatExamDuration(examDurationMinutes(totalQuestions, "module"))}
          </button>
        )}
      </div>

      <form onSubmit={handleCustomSubmit} className="flex gap-2">
        <input
          type="number"
          min={1}
          max={totalQuestions || 1}
          value={customCount}
          onChange={(e) => setCustomCount(e.target.value)}
          placeholder={tr.modulesQuiz.customPlaceholder.replace(
            "{max}",
            String(totalQuestions)
          )}
          disabled={disabled}
          className="flex-1 min-w-0 px-3 py-1.5 text-sm border border-odoo-border rounded bg-white disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled || !customCount}
          className="odoo-btn-secondary text-sm shrink-0 disabled:opacity-50"
        >
          {tr.modulesQuiz.startCustom}
        </button>
      </form>
      {previewCount !== null && (
        <p className="text-xs text-odoo-text-muted">
          {quizLabel(previewCount, tr.modulesQuiz.questionsWithDuration)}
        </p>
      )}
    </div>
  );
}
