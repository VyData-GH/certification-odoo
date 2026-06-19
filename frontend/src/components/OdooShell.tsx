"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/i18n/translations";

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded odoo-lang-toggle">
      {(["en", "fr"] as Locale[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            locale === lang
              ? "bg-white/20 text-white"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export function OdooNavbar() {
  const { tr } = useLanguage();
  const { user, signOut, loading } = useAuth();
  const pathname = usePathname();

  const links = [
    { href: "/", label: tr.nav.home },
    { href: "/courses", label: tr.nav.courses },
    { href: "/modules", label: tr.nav.modules },
    { href: "/history", label: tr.nav.history },
  ];

  return (
    <nav className="odoo-navbar sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <BrandLogo />
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`))
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          {!loading && user && (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-white/70 max-w-[140px] truncate">
                {user.email}
              </span>
              <button
                type="button"
                onClick={() => signOut()}
                className="text-xs text-white/80 hover:text-white underline"
              >
                {tr.nav.logout}
              </button>
            </div>
          )}
          <Link href="/exam?preset=full-exam" className="odoo-btn-primary text-sm">
            {tr.nav.startExam}
          </Link>
        </div>
      </div>
    </nav>
  );
}

interface OdooPageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

export function OdooPageHeader({
  title,
  subtitle,
  backHref,
  backLabel,
}: OdooPageHeaderProps) {
  return (
    <div className="odoo-page-header">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {backHref && (
          <Link href={backHref} className="odoo-back-link text-sm mb-2 inline-block">
            {backLabel ?? "←"}
          </Link>
        )}
        <h1 className="text-2xl font-normal text-odoo-text">{title}</h1>
        {subtitle && (
          <p className="text-odoo-text-muted mt-1 text-sm">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
