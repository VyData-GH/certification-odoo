"use client";

import { useCallback, useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/context/AuthContext";
import { notifyAdminPendingChanged } from "@/context/AdminPendingContext";
import { useLanguage } from "@/context/LanguageContext";
import type { AccessRecord } from "@/lib/access-types";

export default function AdminApprovalsPage() {
  const { tr } = useLanguage();
  const { accessToken, isAdmin } = useAuth();
  const [pending, setPending] = useState<AccessRecord[]>([]);
  const [recent, setRecent] = useState<AccessRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!accessToken) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/access/admin", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          detail?: string;
        } | null;
        throw new Error(body?.detail || tr.admin.forbidden);
      }
      const data = (await res.json()) as {
        pending: AccessRecord[];
        recent: AccessRecord[];
      };
      setPending(data.pending);
      setRecent(data.recent);
    } catch (err) {
      setError(err instanceof Error ? err.message : tr.admin.forbidden);
    } finally {
      setLoading(false);
    }
  }, [accessToken, tr.admin.forbidden]);

  useEffect(() => {
    if (isAdmin) void load();
    else setLoading(false);
  }, [isAdmin, load]);

  async function decide(userId: string, status: "approved" | "rejected") {
    if (!accessToken) return;
    setBusyId(userId);
    setError("");
    try {
      const res = await fetch("/api/access/admin", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, status }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          detail?: string;
        } | null;
        throw new Error(body?.detail || "Error");
      }
      await load();
      notifyAdminPendingChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setBusyId(null);
    }
  }

  if (!isAdmin) {
    return (
      <PageShell title={tr.admin.title} backHref="/" backLabel={`← ${tr.nav.home}`}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <p className="text-sm text-odoo-danger">{tr.admin.forbidden}</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title={tr.admin.title}
      subtitle={tr.admin.subtitle}
      backHref="/"
      backLabel={`← ${tr.nav.home}`}
    >
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {error && <p className="text-sm text-odoo-danger">{error}</p>}

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.admin.pending}</div>
          <div className="odoo-card-body space-y-3">
            {loading ? (
              <div className="flex items-center gap-2 text-sm text-odoo-text-muted">
                <LoadingSpinner size="sm" />
                {tr.admin.loading}
              </div>
            ) : pending.length === 0 ? (
              <p className="text-sm text-odoo-text-muted">{tr.admin.empty}</p>
            ) : (
              pending.map((row) => (
                <div
                  key={row.userId}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-odoo-border-light rounded-sm p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-odoo-text">
                      {row.email}
                    </p>
                    <p className="text-xs text-odoo-text-muted">
                      {new Date(row.requestedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={busyId === row.userId}
                      onClick={() => void decide(row.userId, "approved")}
                      className="odoo-btn-primary text-sm disabled:opacity-50"
                    >
                      {tr.admin.approve}
                    </button>
                    <button
                      type="button"
                      disabled={busyId === row.userId}
                      onClick={() => void decide(row.userId, "rejected")}
                      className="odoo-btn-secondary text-sm disabled:opacity-50"
                    >
                      {tr.admin.reject}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="odoo-card">
          <div className="odoo-card-header">{tr.admin.recent}</div>
          <div className="odoo-card-body space-y-2">
            {recent.length === 0 ? (
              <p className="text-sm text-odoo-text-muted">—</p>
            ) : (
              recent.map((row) => (
                <div
                  key={`${row.userId}-${row.decidedAt}`}
                  className="flex justify-between gap-3 text-sm border-b border-odoo-border-light last:border-0 py-2"
                >
                  <span className="truncate">{row.email}</span>
                  <span
                    className={
                      row.status === "approved"
                        ? "text-odoo-success"
                        : "text-odoo-danger"
                    }
                  >
                    {row.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
