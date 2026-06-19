"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppLoading } from "@/components/AppLoading";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { ExamResultSummary } from "@/components/ExamResultSummary";
import { PageShell } from "@/components/PageShell";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { formatTime } from "@/lib/exam-engine";
import { startExamRetry } from "@/lib/exam-replay";
import {
  clearHistory,
  HistorySource,
  loadHistory,
} from "@/services/historyService";
import { ExamResult } from "@/types/exam";

export default function HistoryPage() {
  const router = useRouter();
  const { tr } = useLanguage();
  const { accessToken } = useAuth();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [source, setSource] = useState<HistorySource>("local");
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mobileShowDetail, setMobileShowDetail] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearing, setClearing] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    const { items, source: src } = await loadHistory(accessToken);
    setHistory(items);
    setSource(src);
    if (items.length > 0) {
      const firstId = items[0].id;
      setSelectedId((prev) =>
        prev && items.some((i) => i.id === prev) ? prev : firstId
      );
      if (items.length === 1) setMobileShowDetail(true);
    } else {
      setSelectedId(null);
      setMobileShowDetail(false);
    }
    setLoading(false);
  }, [accessToken]);

  useEffect(() => {
    queueMicrotask(() => {
      void refresh();
    });
  }, [refresh]);

  const selectSession = (id: string) => {
    setSelectedId(id);
    setMobileShowDetail(true);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleClearConfirm = async () => {
    setClearing(true);
    try {
      await clearHistory(accessToken);
      setHistory([]);
      setSelectedId(null);
      setMobileShowDetail(false);
      setShowClearConfirm(false);
    } finally {
      setClearing(false);
    }
  };

  const modeLabel = (mode: ExamResult["mode"]) =>
    tr.historyPage.modes[mode] ?? mode;

  const selected = history.find((h) => h.id === selectedId) ?? null;

  const sessionList = (
    <div className="space-y-2">
      {history.length > 1 && (
        <p className="text-xs text-odoo-text-muted mb-2 px-1">
          {tr.historyPage.clickHint}
        </p>
      )}
      {history.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => selectSession(item.id)}
          className={`odoo-card p-4 w-full text-left transition-colors ${
            selectedId === item.id
              ? "ring-2 ring-odoo-brand bg-[#faf5f9]"
              : "hover:bg-gray-50"
          }`}
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
              <span className="odoo-badge odoo-badge-brand">
                {modeLabel(item.mode)}
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
      ))}
      <button
        type="button"
        onClick={() => setShowClearConfirm(true)}
        className="text-sm text-odoo-danger hover:underline px-1"
      >
        {tr.historyPage.clear}
      </button>
    </div>
  );

  const sessionDetail = selected ? (
    <div ref={detailRef}>
      <div className="flex items-center justify-between mb-3 lg:hidden">
        <h2 className="text-sm font-semibold text-odoo-text">
          {tr.historyPage.analysisTitle}
        </h2>
        <button
          type="button"
          onClick={() => setMobileShowDetail(false)}
          className="text-sm text-odoo-brand hover:underline"
        >
          {tr.historyPage.backToList}
        </button>
      </div>
      <ExamResultSummary
        result={selected}
        showActions
        onRetry={() => startExamRetry(selected, router.push)}
      />
    </div>
  ) : (
    <div className="odoo-card p-8 text-center text-odoo-text-muted text-sm">
      {tr.historyPage.selectSession}
    </div>
  );

  return (
    <PageShell
      title={tr.historyPage.title}
      subtitle={tr.historyPage.subtitle}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-4">
          <span className="odoo-badge odoo-badge-brand">
            {source === "cloud"
              ? tr.historyPage.sourceCloud
              : tr.historyPage.sourceLocal}
          </span>
        </div>

        {loading ? (
          <AppLoading fullScreen={false} message={tr.common.loading} />
        ) : history.length === 0 ? (
          <div className="odoo-card p-10 text-center text-odoo-text-muted">
            <p>{tr.historyPage.empty}</p>
            <Link href="/" className="odoo-btn-primary inline-block mt-4">
              {tr.historyPage.start}
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop : liste + analyse côte à côte */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">{sessionList}</div>
              <div className="lg:col-span-3">
                <h2 className="text-sm font-semibold text-odoo-text mb-3">
                  {tr.historyPage.analysisTitle}
                </h2>
                {sessionDetail}
              </div>
            </div>

            {/* Mobile : liste OU analyse */}
            <div className="lg:hidden">
              {!mobileShowDetail ? (
                sessionList
              ) : (
                sessionDetail
              )}
            </div>
          </>
        )}
      </div>

      <ConfirmDialog
        open={showClearConfirm}
        title={tr.historyPage.clearConfirmTitle}
        message={tr.historyPage.clearConfirm}
        confirmLabel={tr.historyPage.clearConfirmAction}
        cancelLabel={tr.historyPage.cancel}
        onConfirm={handleClearConfirm}
        onCancel={() => setShowClearConfirm(false)}
        loading={clearing}
        variant="danger"
      />
    </PageShell>
  );
}
