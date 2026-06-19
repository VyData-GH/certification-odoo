"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ModuleId } from "@/types/exam";

interface ModuleQuizControlsProps {
  moduleId: ModuleId;
  totalQuestions: number;
}

export function ModuleQuizControls({
  moduleId,
  totalQuestions,
}: ModuleQuizControlsProps) {
  const router = useRouter();
  const { tr } = useLanguage();
  const [customCount, setCustomCount] = useState("");

  const disabled = totalQuestions === 0;

  function launch(count: number | "all") {
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

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {[10, 15, 20]
          .filter((n) => n <= totalQuestions)
          .map((n) => (
            <Link
              key={n}
              href={`/exam?module=${moduleId}&count=${n}`}
              className={`odoo-btn-secondary flex-1 min-w-[4rem] text-center text-sm ${
                disabled ? "pointer-events-none opacity-50" : ""
              }`}
              aria-disabled={disabled}
            >
              {n} Q
            </Link>
          ))}
        {totalQuestions > 0 && (
          <Link
            href={`/exam?module=${moduleId}&count=all`}
            className={`odoo-btn-primary flex-1 min-w-[5rem] text-center text-sm ${
              disabled ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {tr.modulesQuiz.allQuestions.replace("{n}", String(totalQuestions))}
          </Link>
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
    </div>
  );
}
