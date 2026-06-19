"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { downloadCertificatePdf, preloadCertificateFont } from "@/lib/certificate";
import {
  AttemptsUntilPassStats,
  certificationNumber,
  CertificationTrack,
} from "@/lib/history-utils";

interface CertificationStatsPanelProps {
  fullExam: AttemptsUntilPassStats;
  sampleTest: AttemptsUntilPassStats;
  recipientName: string;
  userId: string;
}

function StatCard({
  title,
  stats,
  track,
  recipientName,
  userId,
  locale,
  certStats,
}: {
  title: string;
  stats: AttemptsUntilPassStats;
  track: CertificationTrack;
  recipientName: string;
  userId: string;
  locale: "en" | "fr";
  certStats: {
    attempts: string;
    bestScore: string;
    noAttempts: string;
    attemptsUntilPass: string;
    notPassedYet: string;
    downloadCertificate: string;
  };
}) {
  const attemptsLabel =
    stats.totalAttempts === 0
      ? certStats.noAttempts
      : stats.passed && stats.attemptsUntilPass != null
        ? certStats.attemptsUntilPass.replace(
            "{n}",
            String(stats.attemptsUntilPass)
          )
        : certStats.notPassedYet.replace("{n}", String(stats.totalAttempts));

  const handleDownload = async () => {
    if (!stats.firstPassDate) return;
    await downloadCertificatePdf({
      recipientName,
      track,
      passDate: new Date(stats.firstPassDate),
      certificationNumber: certificationNumber(
        userId,
        track,
        stats.firstPassDate
      ),
      locale,
    });
  };

  return (
    <div className="odoo-card">
      <div className="odoo-card-header">{title}</div>
      <div className="odoo-card-body space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-odoo-text-muted text-xs uppercase tracking-wide">
              {certStats.attempts}
            </div>
            <div className="font-semibold text-odoo-text mt-0.5">
              {stats.totalAttempts}
            </div>
          </div>
          <div>
            <div className="text-odoo-text-muted text-xs uppercase tracking-wide">
              {certStats.bestScore}
            </div>
            <div
              className={`font-semibold mt-0.5 ${
                stats.bestPercentage >= 70
                  ? "text-odoo-success"
                  : "text-odoo-text"
              }`}
            >
              {stats.bestPercentage.toFixed(0)}%
            </div>
          </div>
        </div>
        <p className="text-sm text-odoo-text">{attemptsLabel}</p>
        {stats.passed && (
          <button
            type="button"
            onClick={handleDownload}
            className="odoo-btn-primary text-sm w-full"
          >
            {certStats.downloadCertificate}
          </button>
        )}
      </div>
    </div>
  );
}

export function CertificationStatsPanel({
  fullExam,
  sampleTest,
  recipientName,
  userId,
}: CertificationStatsPanelProps) {
  const { tr, locale } = useLanguage();

  useEffect(() => {
    void preloadCertificateFont();
  }, []);

  return (
    <div className="space-y-3 mb-5">
      <p className="text-sm text-odoo-text-muted">{tr.historyPage.certIntro}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <StatCard
          title={tr.historyPage.modes.full}
          stats={fullExam}
          track="full-exam"
          recipientName={recipientName}
          userId={userId}
          locale={locale}
          certStats={tr.historyPage.certStats}
        />
        <StatCard
          title={tr.historyPage.modes.sample}
          stats={sampleTest}
          track="sample-test"
          recipientName={recipientName}
          userId={userId}
          locale={locale}
          certStats={tr.historyPage.certStats}
        />
      </div>
    </div>
  );
}
