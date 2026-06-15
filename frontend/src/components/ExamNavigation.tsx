"use client";

import { useLanguage } from "@/context/LanguageContext";

interface ExamNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  answers: (number | null)[];
  onGoTo: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isReviewMode?: boolean;
}

export function ExamNavigation({
  currentIndex,
  totalQuestions,
  answers,
  onGoTo,
  onPrevious,
  onNext,
  onSubmit,
  isReviewMode = false,
}: ExamNavigationProps) {
  const { tr } = useLanguage();
  const answeredCount = answers.filter((a) => a !== null).length;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="space-y-3">
      <div className="odoo-card">
        <div className="odoo-card-header flex items-center justify-between">
          <span>{tr.nav2.navigation}</span>
          <span className="font-normal text-odoo-text-muted">
            {answeredCount}/{totalQuestions} {tr.nav2.answered}
          </span>
        </div>
        <div className="odoo-card-body">
          <div className="grid grid-cols-10 gap-1 max-h-28 overflow-y-auto odoo-nav-grid">
            {answers.map((answer, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onGoTo(i)}
                className={`w-full aspect-square text-xs font-medium transition-colors ${
                  i === currentIndex
                    ? "bg-odoo-brand text-white"
                    : answer !== null
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : "bg-gray-100 text-odoo-text-muted hover:bg-gray-200"
                }`}
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
