"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function SiteFooter() {
  const { tr } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center gap-1.5 text-xs text-odoo-text-muted">
        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
          <span>{tr.footer.author}</span>
          <Link
            href="https://virtuocode.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-odoo-brand hover:underline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-compact.webp"
              alt="Virtuocode"
              className="h-4 w-auto"
            />
            virtuocode.ai
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
          <span>{tr.footer.partOf}</span>
          <Link
            href="https://www.virtuology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:opacity-80"
            aria-label="Virtuology"
          >
            <Image
              src="/brand/virtuology-logo.png"
              alt="Virtuology"
              width={100}
              height={24}
              className="h-4 w-auto"
            />
          </Link>
          {tr.footer.group && <span>{tr.footer.group}</span>}
        </div>

        <p className="text-center max-w-2xl leading-snug">{tr.home.footer}</p>
      </div>
    </footer>
  );
}
