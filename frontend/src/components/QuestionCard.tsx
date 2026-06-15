"use client";

import Image from "next/image";
import { LocalizedQuestion } from "@/types/exam";
import { useLanguage } from "@/context/LanguageContext";

interface QuestionCardProps {
  question: LocalizedQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  showResult?: boolean;
  disabled?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
  showResult = false,
  disabled = false,
}: QuestionCardProps) {
  const { tr } = useLanguage();
  const moduleLabel =
    tr.modules_labels[question.module] ?? question.module;

  return (
    <div className="odoo-card overflow-hidden">
      <div className="odoo-card-header flex flex-wrap items-center justify-between gap-2">
        <span>
          {tr.exam.question} {questionNumber} / {totalQuestions}
        </span>
        <span className="odoo-badge odoo-badge-brand">{moduleLabel}</span>
      </div>

      <div className="odoo-card-body">
        {question.image && (
          <figure className="mb-5 rounded-sm border border-gray-200 bg-white overflow-hidden">
            <Image
              src={question.image.src}
              alt={question.image.alt}
              width={480}
              height={280}
              className="w-full h-auto"
              unoptimized
            />
            <figcaption className="px-3 py-2 text-xs text-odoo-text-muted bg-gray-50 border-t border-gray-200">
              {tr.exam.screenshotCaption}
            </figcaption>
          </figure>
        )}
        <p className="text-base text-odoo-text leading-relaxed mb-5">
          {question.text}
        </p>

        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrect = index === question.correctIndex;
            let cls = "odoo-option";

            if (showResult) {
              if (isCorrect) cls += " odoo-option-correct";
              else if (isSelected) cls += " odoo-option-wrong";
              else cls += " opacity-50";
            } else if (isSelected) {
              cls += " odoo-option-selected";
            }

            return (
              <button
                key={index}
                type="button"
                disabled={disabled || showResult}
                onClick={() => onSelect(index)}
                className={`${cls} ${disabled || showResult ? "cursor-default" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold rounded-sm ${
                      showResult && isCorrect
                        ? "bg-odoo-success text-white"
                        : showResult && isSelected && !isCorrect
                          ? "bg-odoo-danger text-white"
                          : isSelected
                            ? "bg-odoo-brand text-white"
                            : "bg-gray-100 text-odoo-text-muted"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-odoo-text pt-0.5">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-5 p-3 rounded-sm bg-blue-50 border border-blue-200">
            <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">
              {tr.exam.explanation}
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
