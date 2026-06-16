"use client";

import { isAddressed, isDontKnow, isUnanswered } from "@/lib/answers";
import { useLanguage } from "@/context/LanguageContext";

interface ExamNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  answers: (number | null)[];
  dontKnowIndices: (number | null)[];
  onGoTo: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isReviewMode?: boolean;
}

function navButtonClass(
  index: number,
  currentIndex: number,
  answer: number | null,
  dontKnowIndex: number | null
): string {
  if (index === currentIndex) return "bg-odoo-brand text-white";
  if (isDontKnow(answer, dontKnowIndex)) {
    return "bg-amber-100 text-amber-900 hover:bg-amber-200";
  }
  if (isAddressed(answer)) {
    return "bg-green-100 text-green-800 hover:bg-green-200";
  }
  if (isUnanswered(answer)) {
    return "bg-gray-100 text-odoo-text-muted hover:bg-gray-200";
  }
  return "bg-gray-100 text-odoo-text-muted hover:bg-gray-200";
}

export function ExamNavigation({
  currentIndex,
  totalQuestions,
  answers,
  dontKnowIndices,
  onGoTo,
  onPrevious,
  onNext,
  onSubmit,
  isReviewMode = false,
}: ExamNavigationProps) {
  const { tr } = useLanguage();
  const addressedCount = answers.filter(isAddressed).length;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="space-y-3">
      <div className="odoo-card">
        <div className="odoo-card-header flex items-center justify-between">
          <span>{tr.nav2.navigation}</span>
          <span className="font-normal text-odoo-text-muted">
            {addressedCount}/{totalQuestions} {tr.nav2.answered}
          </span>
        </div>
        <div className="odoo-card-body">
          <div className="flex flex-wrap gap-3 text-xs text-odoo-text-muted mb-2">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-sm bg-green-100 border border-green-200" />
              {tr.nav2.legendAnswered}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-200" />
              {tr.nav2.legendDontKnow}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-200" />
              {tr.nav2.legendBlank}
            </span>
          </div>
          <div className="grid grid-cols-10 gap-1 max-h-28 overflow-y-auto odoo-nav-grid">
            {answers.map((answer, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onGoTo(i)}
                className={`w-full aspect-square text-xs font-medium transition-colors ${navButtonClass(
                  i,
                  currentIndex,
                  answer,
                  dontKnowIndices[i] ?? null
                )}`}
                style={{ borderRadius: 3 }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="odoo-btn-secondary flex-1 disabled:opacity-40"
        >
          {tr.nav2.previous}
        </button>
        {!isLast ? (
          <button
            type="button"
            onClick={onNext}
            className="odoo-btn-primary flex-1"
          >
            {tr.nav2.next}
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            className="odoo-btn-success flex-1"
          >
            {isReviewMode ? tr.nav2.finish : tr.nav2.submit}
          </button>
        )}
      </div>
    </div>
  );
}
