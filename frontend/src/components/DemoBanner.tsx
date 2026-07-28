"use client";

import Link from "next/link";
import { useDemo } from "@/context/DemoContext";
import { useLanguage } from "@/context/LanguageContext";

export function DemoBanner() {
  const { isDemo, exitDemo } = useDemo();
  const { tr } = useLanguage();

  if (!isDemo) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-950">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
        <p>
          <span className="font-semibold">{tr.demo.badge}</span>
          {" — "}
          {tr.demo.banner}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/auth" className="text-odoo-brand underline font-medium">
            {tr.demo.createAccount}
          </Link>
          <button
            type="button"
            onClick={exitDemo}
            className="odoo-btn-secondary text-xs px-3 py-1"
          >
            {tr.demo.exit}
          </button>
        </div>
      </div>
    </div>
  );
}
