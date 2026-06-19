"use client";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useLanguage } from "@/context/LanguageContext";

interface AppLoadingProps {
  message?: string;
  /** Full viewport overlay, centered. */
  fullScreen?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AppLoading({
  message,
  fullScreen = true,
  className = "",
  size = "lg",
}: AppLoadingProps) {
  const { tr } = useLanguage();
  const label = message ?? tr.common.loading;
  const showMessage = message !== "";

  const content = (
    <>
      <LoadingSpinner size={size} />
      {showMessage && (
        <p className="text-sm text-odoo-text-muted">{label}</p>
      )}
    </>
  );

  if (fullScreen) {
    return (
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-odoo-bg ${className}`}
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label={label}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-4 py-12 ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      {content}
    </div>
  );
}
