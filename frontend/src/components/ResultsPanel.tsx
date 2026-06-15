"use client";

import Link from "next/link";
import { ExamResult } from "@/types/exam";
import { ExamResultSummary } from "@/components/ExamResultSummary";
import { useLanguage } from "@/context/LanguageContext";

interface ResultsPanelProps {
  result: ExamResult;
  onRetry?: () => void;
}

export function ResultsPanel({ result, onRetry }: ResultsPanelProps) {
  const { tr } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-4">
      <ExamResultSummary result={result} onRetry={onRetry} />
      <div className="odoo-card odoo-card-body text-sm text-odoo-text-muted mt-4">
        {tr.results.scoringReminder}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-4 pb-4">
        <Link href="/" className="odoo-btn-secondary">
          {tr.results.home}
        </Link>
        <Link href="/history" className="odoo-btn-secondary">
          {tr.results.history}
        </Link>
      </div>
    </div>
  );
}
