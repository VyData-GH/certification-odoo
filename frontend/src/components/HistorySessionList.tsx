"use client";

import { useEffect, useMemo, useState } from "react";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { ModuleIcon } from "@/components/ModuleIcon";
import { useLanguage } from "@/context/LanguageContext";
import { formatTime } from "@/lib/exam-time";
import { getSingleModuleId } from "@/lib/history-utils";
import { ExamResult } from "@/types/exam";

const PAGE_SIZE = 8;

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
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const listSignature = `${items.length}:${items[0]?.id ?? ""}:${items[items.length - 1]?.id ?? ""}`;

  // Reset page when the list identity changes (tab switch, major refresh)
  useEffect(() => {
    setPage(1);
  }, [listSignature]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  // Keep the selected session visible on its page
  useEffect(() => {
    if (!selectedId) return;
    const idx = items.findIndex((i) => i.id === selectedId);
    if (idx < 0) return;
    const targetPage = Math.floor(idx / PAGE_SIZE) + 1;
    setPage(targetPage);
  }, [selectedId, listSignature, items]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

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

  const from = (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, items.length);

  return (
    <>
      <div className="space-y-2">
        {items.length > 1 && (
          <p className="text-xs text-odoo-text-muted mb-2 px-1">
            {tr.historyPage.clickHint}
          </p>
        )}
        {pageItems.map((item) => {
          const singleModuleId = getSingleModuleId(item);
          const moduleLabel = singleModuleId
            ? (tr.modules_labels[singleModuleId] ?? singleModuleId)
            : null;

          return (
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
                      {singleModuleId ? (
                        <span className="flex items-center gap-1.5 min-w-0">
                          <ModuleIcon
                            moduleId={singleModuleId}
                            size={22}
                            title={moduleLabel ?? undefined}
                          />
                          <span className="text-sm text-odoo-text truncate">
                            {moduleLabel}
                          </span>
                        </span>
                      ) : (
                        <span className="odoo-badge odoo-badge-brand truncate">
                          {modeLabel(item.mode, item)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-odoo-brand shrink-0 hidden sm:inline">
                      {tr.historyPage.viewDetails}
                    </span>
                  </div>
                  <div className="text-sm text-odoo-text-muted mt-1">
                    {new Date(item.date).toLocaleString()} · {item.correct}/
                    {item.totalQuestions} ·{" "}
                    {formatTime(item.durationUsedSeconds)}
                    {item.totalQuestions > 0 && item.durationUsedSeconds > 0
                      ? ` · ~${Math.round(
                          (item.durationUsedSeconds / item.totalQuestions) * 10
                        ) / 10}s/Q`
                      : ""}
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
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-2 mt-3 px-1">
          <p className="text-xs text-odoo-text-muted">
            {tr.historyPage.paginationRange
              .replace("{from}", String(from))
              .replace("{to}", String(to))
              .replace("{total}", String(items.length))}
          </p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-2.5 py-1 text-xs font-medium rounded-sm border border-odoo-border-light disabled:opacity-40 hover:bg-gray-50"
            >
              {tr.historyPage.paginationPrev}
            </button>
            <span className="text-xs text-odoo-text-muted px-1 tabular-nums">
              {tr.historyPage.paginationPage
                .replace("{page}", String(page))
                .replace("{pages}", String(totalPages))}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-2.5 py-1 text-xs font-medium rounded-sm border border-odoo-border-light disabled:opacity-40 hover:bg-gray-50"
            >
              {tr.historyPage.paginationNext}
            </button>
          </div>
        </div>
      )}

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
