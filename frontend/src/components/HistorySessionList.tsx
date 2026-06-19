"use client";

import { useState } from "react";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useLanguage } from "@/context/LanguageContext";
import { formatTime } from "@/lib/exam-engine";
import { ExamResult } from "@/types/exam";

interface HistorySessionListProps {
  items: ExamResult[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => Promise<void>;
  modeLabel: (mode: ExamResult["mode"], item: ExamResult) => string;
}

export function HistorySessionList({
  items,
  selectedId,
  onSelect,
  onDelete,
  modeLabel,
}: HistorySessionListProps) {
  const { tr } = useLanguage();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await onDelete(deleteId);
      setDeleteId(null);
    } finally {
      setDeleting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="odoo-card p-8 text-center text-odoo-text-muted text-sm">
        {tr.historyPage.emptyTab}
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {items.length > 1 && (
          <p className="text-xs text-odoo-text-muted mb-2 px-1">
            {tr.historyPage.clickHint}
          </p>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            className={`odoo-card p-4 w-full transition-colors ${
              selectedId === item.id
                ? "ring-2 ring-odoo-brand bg-[#faf5f9]"
                : ""
            }`}
          >
            <div className="flex items-start gap-2">
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className="flex-1 min-w-0 text-left hover:opacity-90"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        item.passed ? "bg-odoo-success" : "bg-odoo-warning"
                      }`}
                    />
                    <span className="font-bold text-odoo-text">
                      {item.percentage.toFixed(0)}%
                    </span>
                    <span className="odoo-badge odoo-badge-brand truncate">
                      {modeLabel(item.mode, item)}
                    </span>
                  </div>
                  <span className="text-xs text-odoo-brand shrink-0 hidden sm:inline">
                    {tr.historyPage.viewDetails}
                  </span>
                </div>
                <div className="text-sm text-odoo-text-muted mt-1">
                  {new Date(item.date).toLocaleString()} · {item.correct}/
                  {item.totalQuestions} · {formatTime(item.durationUsedSeconds)}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDeleteId(item.id)}
                className="shrink-0 p-1.5 text-odoo-text-muted hover:text-odoo-danger rounded"
                title={tr.historyPage.deleteSession}
                aria-label={tr.historyPage.deleteSession}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        open={deleteId !== null}
        title={tr.historyPage.deleteConfirmTitle}
        message={tr.historyPage.deleteConfirm}
        confirmLabel={tr.historyPage.deleteConfirmAction}
        cancelLabel={tr.historyPage.cancel}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteId(null)}
        loading={deleting}
        variant="danger"
      />
    </>
  );
}
