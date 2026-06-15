"use client";

import { ModuleIcon } from "@/components/ModuleIcon";
import { getReviewItems } from "@/lib/exam-replay";
import { useLanguage } from "@/context/LanguageContext";
import { ExamResult } from "@/types/exam";

interface WeakQuestionsModalProps {
  result: ExamResult;
  open: boolean;
  onClose: () => void;
}

export function WeakQuestionsModal({
  result,
  open,
  onClose,
}: WeakQuestionsModalProps) {
  const { tr, locale } = useLanguage();

  if (!open) return null;

  const items = getReviewItems(result, locale);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="odoo-card max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="weak-review-title"
      >
        <div className="odoo-card-header flex items-center justify-between gap-2 shrink-0">
          <span id="weak-review-title">{tr.results.reviewModalTitle}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-odoo-text-muted hover:text-odoo-text text-lg leading-none px-1"
            aria-label={tr.results.reviewClose}
          >
            ×
          </button>
        </div>

        <div className="odoo-card-body overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-odoo-text-muted text-center py-6">
              {tr.results.reviewNoData}
            </p>
          ) : (
            items.map((item, index) => {
              const moduleLabel =
                tr.modules_labels[item.question.module] ?? item.question.module;
              return (
                <div
                  key={item.question.id}
                  className="border border-gray-200 rounded-sm p-4 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-odoo-text">
                      <ModuleIcon moduleId={item.question.module} size={20} />
                      {moduleLabel}
                    </span>
                    <span
                      className={`odoo-badge shrink-0 ${
                        item.status === "unanswered"
                          ? "bg-gray-100 text-odoo-text-muted"
                          : "bg-red-50 text-odoo-danger"
                      }`}
                    >
                      {item.status === "unanswered"
                        ? tr.results.unanswered
                        : tr.results.wrong}
                    </span>
                  </div>

                  <p className="text-sm text-odoo-text leading-relaxed">
                    <span className="text-odoo-text-muted mr-1">
                      {index + 1}.
                    </span>
                    {item.question.text}
                  </p>

                  <div className="space-y-1.5">
                    {item.question.options.map((option, optIndex) => {
                      const isCorrect = optIndex === item.question.correctIndex;
                      const isSelected = item.selectedIndex === optIndex;
                      let cls = "text-sm px-3 py-2 rounded-sm border ";
                      if (isCorrect) {
                        cls += "border-green-300 bg-green-50 text-green-900";
                      } else if (isSelected) {
                        cls += "border-red-300 bg-red-50 text-red-900";
                      } else {
                        cls += "border-gray-200 bg-white text-odoo-text-muted";
                      }
                      return (
                        <div key={optIndex} className={cls}>
                          <span className="font-bold mr-2">
                            {String.fromCharCode(65 + optIndex)}.
                          </span>
                          {option}
                          {isCorrect && (
                            <span className="ml-2 text-xs font-medium">
                              ✓ {tr.results.correctAnswer}
                            </span>
                          )}
                          {isSelected && !isCorrect && (
                            <span className="ml-2 text-xs font-medium">
                              ({tr.results.yourAnswer})
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-sm">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">
                      {tr.exam.explanation}
                    </p>
                    <p className="text-sm text-blue-900 leading-relaxed">
                      {item.question.explanation}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="border-t border-gray-200 p-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="odoo-btn-secondary w-full"
          >
            {tr.results.reviewClose}
          </button>
        </div>
      </div>
    </div>
  );
}
