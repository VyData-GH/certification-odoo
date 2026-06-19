"use client";

import { useEffect } from "react";
import { AppLoading } from "@/components/AppLoading";
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
    return <AppLoading message={tr.auth.loading} />;
  }

  if (!configured || !canAccess) {
    return <AppLoading message={tr.auth.redirecting} />;
  }

  return <>{children}</>;
}
