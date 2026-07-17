"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppLoading } from "@/components/AppLoading";
import { CertificationStatsPanel } from "@/components/CertificationStatsPanel";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { ExamResultSummary } from "@/components/ExamResultSummary";
import { HistorySessionList } from "@/components/HistorySessionList";
import { PageShell } from "@/components/PageShell";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  computeAttemptsUntilPass,
  filterByTab,
  HistoryTab,
} from "@/lib/history-utils";
import { startExamRetry } from "@/lib/exam-replay";
import {
  clearHistory,
  deleteHistorySession,
  HistorySource,
  loadHistory,
} from "@/services/historyService";
import { ExamResult } from "@/types/exam";

function recipientNameFromUser(user: { email?: string | null; user_metadata?: Record<string, unknown> } | null): string {
  if (!user) return "Participant";
  const meta = user.user_metadata ?? {};
  const fullName = meta.full_name ?? meta.name;
  if (typeof fullName === "string" && fullName.trim()) return fullName.trim();
  const email = user.email ?? "";
  const local = email.split("@")[0];
  return local || "Participant";
}

export default function HistoryPage() {
  const router = useRouter();
  const { tr } = useLanguage();
  const { accessToken, user } = useAuth();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [source, setSource] = useState<HistorySource>("local");
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<HistoryTab>("certification");
  const [preferredSelectedId, setPreferredSelectedId] = useState<string | null>(
    null
  );
  const [mobileShowDetail, setMobileShowDetail] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    const { items, source: src } = await loadHistory(accessToken);
    setHistory(items);
    setSource(src);
    setLoading(false);
  }, [accessToken]);

  useEffect(() => {
    queueMicrotask(() => {
      void refresh();
    });
  }, [refresh]);

  const filtered = useMemo(
    () => filterByTab(history, tab),
    [history, tab]
  );

  const selectedId = useMemo(() => {
    if (filtered.length === 0) return null;
    if (
      preferredSelectedId &&
      filtered.some((item) => item.id === preferredSelectedId)
    ) {
      return preferredSelectedId;
    }
    return filtered[0].id;
  }, [filtered, preferredSelectedId]);

  const fullExamStats = useMemo(
    () => computeAttemptsUntilPass(history, "full-exam"),
    [history]
  );
  const sampleStats = useMemo(
    () => computeAttemptsUntilPass(history, "sample-test"),
    [history]
  );

  const selectSession = (id: string) => {
    setPreferredSelectedId(id);
    setMobileShowDetail(true);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleDeleteSession = async (id: string) => {
    setActionError(null);
    try {
      await deleteHistorySession(id, accessToken);
      const remaining = filtered.filter((item) => item.id !== id);
      setHistory((prev) => prev.filter((item) => item.id !== id));
      if (preferredSelectedId === id || selectedId === id) {
        setPreferredSelectedId(remaining[0]?.id ?? null);
        if (remaining.length === 0) setMobileShowDetail(false);
      }
    } catch {
      setActionError(tr.historyPage.actionError);
      await refresh();
    }
  };

  const handleClearConfirm = async () => {
    setClearing(true);
    setActionError(null);
    try {
      await clearHistory(accessToken);
      setHistory([]);
      setPreferredSelectedId(null);
      setMobileShowDetail(false);
      setShowClearConfirm(false);
    } catch {
      setActionError(tr.historyPage.actionError);
    } finally {
      setClearing(false);
    }
  };

  const modeLabel = (mode: ExamResult["mode"], item: ExamResult) => {
    if (item.sessionMeta?.presetId) {
      const preset = tr.presets[item.sessionMeta.presetId as keyof typeof tr.presets];
      if (preset?.title) return preset.title;
    }
    return tr.historyPage.modes[mode] ?? mode;
  };

  const selected = filtered.find((h) => h.id === selectedId) ?? null;
  const userId = user?.id ?? "local-user";
  const recipientName = recipientNameFromUser(user);

  const sessionList = (
    <div className="space-y-3">
      {tab === "certification" && (
        <CertificationStatsPanel
          fullExam={fullExamStats}
          sampleTest={sampleStats}
          recipientName={recipientName}
          userId={userId}
        />
      )}
      <HistorySessionList
        items={filtered}
        selectedId={selectedId}
        onSelect={selectSession}
        onDelete={handleDeleteSession}
        modeLabel={modeLabel}
      />
      {history.length > 0 && (
        <button
          type="button"
          onClick={() => setShowClearConfirm(true)}
          className="text-sm text-odoo-danger hover:underline px-1"
        >
          {tr.historyPage.clear}
        </button>
      )}
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

  const tabs: { id: HistoryTab; label: string }[] = [
    { id: "certification", label: tr.historyPage.tabCertification },
    { id: "training", label: tr.historyPage.tabTraining },
  ];

  return (
    <PageShell
      title={tr.historyPage.title}
      subtitle={tr.historyPage.subtitle}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="odoo-badge odoo-badge-brand">
            {source === "cloud"
              ? tr.historyPage.sourceCloud
              : tr.historyPage.sourceLocal}
          </span>
          {actionError && (
            <p className="text-sm text-odoo-danger w-full">{actionError}</p>
          )}
        </div>

        <div className="flex gap-1 mb-5 border-b border-odoo-border-light">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTab(t.id);
                setMobileShowDetail(false);
              }}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? "border-odoo-brand text-odoo-brand"
                  : "border-transparent text-odoo-text-muted hover:text-odoo-text"
              }`}
            >
              {t.label}
            </button>
          ))}
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
            <div className="hidden lg:grid lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">{sessionList}</div>
              <div className="lg:col-span-3">
                <h2 className="text-sm font-semibold text-odoo-text mb-3">
                  {tr.historyPage.analysisTitle}
                </h2>
                {sessionDetail}
              </div>
            </div>

            <div className="lg:hidden">
              {!mobileShowDetail ? sessionList : sessionDetail}
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
