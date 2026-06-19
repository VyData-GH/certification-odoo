"use client";

import { useLanguage } from "@/context/LanguageContext";

interface AppLoadingProps {
  message?: string;
  fullScreen?: boolean;
  className?: string;
}

export function AppLoading({
  message,
  fullScreen = true,
  className = "",
}: AppLoadingProps) {
  const { tr } = useLanguage();
  const label = message ?? tr.common.loading;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${
        fullScreen ? "min-h-[50vh]" : "py-12"
      } ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="odoo-spinner" aria-hidden />
      <p className="text-sm text-odoo-text-muted animate-pulse">{label}</p>
    </div>
  );
}
