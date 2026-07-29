"use client";

import { useEffect, useState } from "react";
import { ModuleIcon } from "@/components/ModuleIcon";
import {
  getSessionReviewItems,
  hasStoredAnswers,
  ReviewFilter,
  ReviewItem,
  ReviewItemStatus,
} from "@/lib/exam-replay";
import { useLanguage } from "@/context/LanguageContext";
import { ExamResult } from "@/types/exam";

interface WeakQuestionsModalProps {
  result: ExamResult;
  open: boolean;
  onClose: () => void;
  /** weak = mistakes / blank / don't know ; all = full answer sheet */
  initialFilter?: ReviewFilter;
}

function statusBadgeClass(status: ReviewItemStatus): string {
  switch (status) {
    case "correct":
      return "bg-green-50 text-odoo-success";
    case "dontKnow":
      return "bg-amber-50 text-amber-800";
    case "unanswered":
      return "bg-gray-100 text-odoo-text-muted";
    default:
      return "bg-red-50 text-odoo-danger";
  }
}

function statusLabel(
  status: ReviewItemStatus,
  labels: {
    correct: string;
    wrong: string;
    unanswered: string;
    dontKnow: string;
  }
): string {
  switch (status) {
    case "correct":
      return labels.correct;
    case "dontKnow":
      return labels.dontKnow;
    case "unanswered":
      return labels.unanswered;
    default:
      return labels.wrong;
  }
}

function reasonText(
  item: ReviewItem,
  strings: {
    reviewReasonCorrect: string;
    reviewReasonDontKnow: string;
    reviewReasonUnanswered: string;
    reviewReasonWrong: string;
  }
): string {
  const correctOption =
    item.question.options[item.question.correctIndex] ?? "";
  const selectedOption =
    item.selectedIndex != null
      ? (item.question.options[item.selectedIndex] ?? "")
      : "";

  switch (item.status) {
    case "correct":
      return strings.reviewReasonCorrect;
    case "dontKnow":
      return strings.reviewReasonDontKnow.replace("{correct}", correctOption);
    case "unanswered":
      return strings.reviewReasonUnanswered.replace(
        "{correct}",
        correctOption
      );
    case "wrong":
      return strings.reviewReasonWrong
        .replace("{yours}", selectedOption)
        .replace("{correct}", correctOption);
  }
}

export function WeakQuestionsModal({
  result,
  open,
  onClose,
  initialFilter = "weak",
}: WeakQuestionsModalProps) {
  const { tr, locale } = useLanguage();
  const [filter, setFilter] = useState<ReviewFilter>(initialFilter);

  useEffect(() => {
    if (open) setFilter(initialFilter);
  }, [open, initialFilter]);

  if (!open) return null;

  const stored = hasStoredAnswers(result);
  const items = stored
    ? getSessionReviewItems(result, locale, filter)
    : [];
  const weakCount = stored
    ? getSessionReviewItems(result, locale, "weak").length
    : 0;
  const noWeakLeft = stored && weakCount === 0;

  let emptyMessage: string = tr.results.reviewNoData;
  if (noWeakLeft) {
    emptyMessage = tr.results.reviewAllCorrect;
  }

  const title =
    filter === "all"
      ? tr.results.reviewAllTitle
      : tr.results.reviewModalTitle;

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
          <span id="weak-review-title">{title}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-odoo-text-muted hover:text-odoo-text text-lg leading-none px-1"
            aria-label={tr.results.reviewClose}
          >
            ×
          </button>
        </div>

        {stored && (
          <div className="flex gap-1 px-4 pt-3 shrink-0 border-b border-gray-100 pb-3">
            <button
              type="button"
              onClick={() => setFilter("weak")}
              className={`flex-1 text-sm py-2 px-2 rounded-sm border transition-colors ${
                filter === "weak"
                  ? "border-odoo-brand bg-[#faf5f9] text-odoo-brand font-medium"
                  : "border-gray-200 text-odoo-text-muted hover:text-odoo-text"
              }`}
            >
              {tr.results.reviewFilterWeak}
              {weakCount > 0 ? ` (${weakCount})` : ""}
            </button>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`flex-1 text-sm py-2 px-2 rounded-sm border transition-colors ${
                filter === "all"
                  ? "border-odoo-brand bg-[#faf5f9] text-odoo-brand font-medium"
                  : "border-gray-200 text-odoo-text-muted hover:text-odoo-text"
              }`}
            >
              {tr.results.reviewFilterAll}
              {` (${result.totalQuestions})`}
            </button>
          </div>
        )}

        <div className="odoo-card-body overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-odoo-text-muted text-center py-6">
              {emptyMessage}
            </p>
          ) : (
            items.map((item, index) => {
              const moduleLabel =
                tr.modules_labels[item.question.module] ??
                item.question.module;
              return (
                <div
                  key={item.question.id}
                  className="border border-gray-200 rounded-sm p-4 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-odoo-text">
                      <ModuleIcon
                        moduleId={item.question.module}
                        size={20}
                      />
                      {moduleLabel}
                    </span>
                    <span
                      className={`odoo-badge shrink-0 ${statusBadgeClass(
                        item.status
                      )}`}
                    >
                      {statusLabel(item.status, tr.results)}
                    </span>
                  </div>

                  <p className="text-sm text-odoo-text leading-relaxed">
                    <span className="text-odoo-text-muted mr-1">
                      {index + 1}.
                    </span>
                    {item.question.text}
                  </p>

                  <div
                    className={`p-3 rounded-sm border text-sm leading-relaxed ${
                      item.status === "correct"
                        ? "bg-green-50 border-green-200 text-green-900"
                        : item.status === "dontKnow"
                          ? "bg-amber-50 border-amber-200 text-amber-950"
                          : "bg-red-50 border-red-200 text-red-950"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wide mb-1 opacity-80">
                      {tr.results.reviewWhy}
                    </p>
                    <p>{reasonText(item, tr.results)}</p>
                  </div>

                  <div className="space-y-1.5">
                    {item.question.options.map((option, optIndex) => {
                      const isCorrect =
                        optIndex === item.question.correctIndex;
                      const isSelected = item.selectedIndex === optIndex;
                      const isDontKnowOpt =
                        item.question.dontKnowIndex != null &&
                        optIndex === item.question.dontKnowIndex;
                      let cls = "text-sm px-3 py-2 rounded-sm border ";
                      if (isCorrect) {
                        cls +=
                          "border-green-300 bg-green-50 text-green-900";
                      } else if (isSelected) {
                        cls += isDontKnowOpt
                          ? "border-amber-300 bg-amber-50 text-amber-900"
                          : "border-red-300 bg-red-50 text-red-900";
                      } else {
                        cls +=
                          "border-gray-200 bg-white text-odoo-text-muted";
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
                          {isSelected && (
                            <span className="ml-2 text-xs font-medium">
                              ({tr.results.yourAnswer})
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-sm">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-2">
                      {tr.exam.explanation}
                    </p>
                    <div className="text-sm text-blue-900 leading-relaxed space-y-2">
                      {item.question.explanation
                        .split(/\n\n+/)
                        .map((para) => para.trim())
                        .filter(Boolean)
                        .map((para, paraIdx) => (
                          <p key={paraIdx}>{para}</p>
                        ))}
                    </div>
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
