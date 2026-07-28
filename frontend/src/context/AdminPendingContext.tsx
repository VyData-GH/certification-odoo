"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const ADMIN_PENDING_REFRESH_EVENT = "admin-pending-refresh";

export function notifyAdminPendingChanged(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(ADMIN_PENDING_REFRESH_EVENT));
}

interface AdminPendingContextValue {
  pendingCount: number;
  refresh: () => Promise<void>;
}

const AdminPendingContext = createContext<AdminPendingContextValue>({
  pendingCount: 0,
  refresh: async () => undefined,
});

export function AdminPendingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAdmin, accessToken } = useAuth();
  const pathname = usePathname();
  const [pendingCount, setPendingCount] = useState(0);

  const refresh = useCallback(async () => {
    if (!isAdmin || !accessToken) {
      setPendingCount(0);
      return;
    }
    try {
      const res = await fetch("/api/access/admin/pending-count", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) {
        setPendingCount(0);
        return;
      }
      const data = (await res.json()) as { count?: number };
      setPendingCount(typeof data.count === "number" ? data.count : 0);
    } catch {
      setPendingCount(0);
    }
  }, [isAdmin, accessToken]);

  useEffect(() => {
    void refresh();
  }, [refresh, pathname]);

  useEffect(() => {
    if (!isAdmin) return;

    const onFocus = () => void refresh();
    const onCustom = () => void refresh();
    const interval = window.setInterval(() => void refresh(), 60_000);

    window.addEventListener("focus", onFocus);
    window.addEventListener(ADMIN_PENDING_REFRESH_EVENT, onCustom);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener(ADMIN_PENDING_REFRESH_EVENT, onCustom);
    };
  }, [isAdmin, refresh]);

  const value = useMemo(
    () => ({ pendingCount, refresh }),
    [pendingCount, refresh]
  );

  return (
    <AdminPendingContext.Provider value={value}>
      {children}
    </AdminPendingContext.Provider>
  );
}

export function useAdminPendingCount(): number {
  return useContext(AdminPendingContext).pendingCount;
}

export function formatBadgeCount(count: number): string {
  if (count <= 0) return "";
  if (count > 99) return "99+";
  return String(count);
}
