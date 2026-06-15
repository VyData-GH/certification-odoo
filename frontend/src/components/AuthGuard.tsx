"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { isEmailVerified } from "@/lib/auth";
import { useLanguage } from "@/context/LanguageContext";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, configured } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { tr } = useLanguage();

  const canAccess = Boolean(user && isEmailVerified(user));

  useEffect(() => {
    if (loading) return;
    if (!canAccess) {
      const next = pathname !== "/" ? `?next=${encodeURIComponent(pathname)}` : "";
      router.replace(`/auth${next}`);
    }
  }, [canAccess, loading, router, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-odoo-bg text-odoo-text-muted text-sm">
        {tr.auth.loading}
      </div>
    );
  }

  if (!configured || !canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-odoo-bg text-odoo-text-muted text-sm">
        {tr.auth.redirecting}
      </div>
    );
  }

  return <>{children}</>;
}
