"use client";

import { useEffect } from "react";
import { AppLoading } from "@/components/AppLoading";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useDemo } from "@/context/DemoContext";
import { useLanguage } from "@/context/LanguageContext";

const DEMO_BLOCKED_PREFIXES = ["/exam", "/history", "/admin"];

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const {
    user,
    loading,
    configured,
    emailVerified,
    isApproved,
    accessStatus,
    accessLoading,
  } = useAuth();
  const { isDemo, ready: demoReady } = useDemo();
  const router = useRouter();
  const pathname = usePathname();
  const { tr } = useLanguage();

  const canAccessFull = Boolean(user && emailVerified && isApproved);
  const canAccess = canAccessFull || isDemo;
  const demoBlocked =
    isDemo &&
    DEMO_BLOCKED_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(`${p}/`)
    );
  const needsApprovalGate =
    Boolean(user && emailVerified) &&
    !isDemo &&
    !accessLoading &&
    accessStatus !== null &&
    !isApproved;

  useEffect(() => {
    if (loading || !demoReady || accessLoading) return;
    if (needsApprovalGate) {
      router.replace("/auth?pending=1");
      return;
    }
    if (!canAccess) {
      const next =
        pathname !== "/" ? `?next=${encodeURIComponent(pathname)}` : "";
      router.replace(`/auth${next}`);
      return;
    }
    if (demoBlocked) {
      router.replace("/?demoLocked=1");
    }
  }, [
    canAccess,
    demoBlocked,
    demoReady,
    loading,
    accessLoading,
    needsApprovalGate,
    router,
    pathname,
  ]);

  // Keep UI mounted during background access re-checks if already approved
  // (e.g. JWT refresh) so in-progress exams are not unmounted/reset.
  if (
    loading ||
    !demoReady ||
    (user && emailVerified && accessLoading && !isApproved)
  ) {
    return <AppLoading message={tr.auth.loading} />;
  }

  if (
    (!configured && !isDemo) ||
    !canAccess ||
    demoBlocked ||
    needsApprovalGate
  ) {
    return <AppLoading message={tr.auth.redirecting} />;
  }

  return <>{children}</>;
}
