"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function DemoLockedNotice({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { tr } = useLanguage();

  if (compact) {
    return (
      <div
        className={`rounded-sm border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-950 ${className}`}
      >
        <p>{tr.demo.lockedTitle}</p>
        <Link href="/auth" className="inline-block mt-1.5 text-odoo-brand underline">
          {tr.demo.createAccount}
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`rounded-sm border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 ${className}`}
    >
      <p className="font-medium">{tr.demo.lockedTitle}</p>
      <p className="mt-1 text-amber-900/90">{tr.demo.lockedBody}</p>
      <Link
        href="/auth"
        className="inline-block mt-3 odoo-btn-primary text-sm"
      >
        {tr.demo.createAccount}
      </Link>
    </div>
  );
}
