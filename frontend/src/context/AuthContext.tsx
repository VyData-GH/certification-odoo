"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { isAdminEmail } from "@/lib/admin-emails";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { getAuthRedirectUrl, isEmailVerified } from "@/lib/auth";
import type { AccessStatus } from "@/lib/access-types";
import { syncLocalHistoryToCloud } from "@/services/historyService";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  loading: boolean;
  configured: boolean;
  emailVerified: boolean;
  accessStatus: AccessStatus | null;
  accessLoading: boolean;
  isAdmin: boolean;
  isApproved: boolean;
  refreshAccess: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string
  ) => Promise<{ needsEmailVerification: boolean }>;
  resendVerificationEmail: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchAccessStatus(
  token: string
): Promise<{ status: AccessStatus; isAdmin: boolean } | null> {
  try {
    const res = await fetch("/api/access/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      status: AccessStatus;
      isAdmin?: boolean;
    };
    return {
      status: data.status,
      isAdmin: Boolean(data.isAdmin),
    };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(() => isSupabaseConfigured());
  const [accessStatus, setAccessStatus] = useState<AccessStatus | null>(null);
  const [accessLoading, setAccessLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const configured = isSupabaseConfigured();

  const applySession = useCallback(async (s: Session | null) => {
    setSession(s);
    setUser(s?.user ?? null);

    if (!s?.user || !isEmailVerified(s.user) || !s.access_token) {
      setAccessStatus(null);
      setIsAdmin(false);
      setAccessLoading(false);
      return;
    }

    setAccessLoading(true);
    const access = await fetchAccessStatus(s.access_token);
    if (access) {
      setAccessStatus(access.status);
      setIsAdmin(access.isAdmin || isAdminEmail(s.user.email));
    } else {
      // Fail closed for new checks, but keep admin emails usable offline of API
      const admin = isAdminEmail(s.user.email);
      setIsAdmin(admin);
      setAccessStatus(admin ? "approved" : null);
    }
    setAccessLoading(false);

    if (access?.status === "approved" || isAdminEmail(s.user.email)) {
      await syncLocalHistoryToCloud(s.access_token);
    }
  }, []);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      void applySession(s).finally(() => setLoading(false));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      void applySession(s);
    });

    return () => subscription.unsubscribe();
  }, [applySession]);

  const refreshAccess = useCallback(async () => {
    if (!session?.access_token) return;
    setAccessLoading(true);
    const access = await fetchAccessStatus(session.access_token);
    if (access) {
      setAccessStatus(access.status);
      setIsAdmin(access.isAdmin || isAdminEmail(user?.email));
    }
    setAccessLoading(false);
  }, [session?.access_token, user?.email]);

  const signIn = useCallback(async (email: string, password: string) => {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase not configured");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data.user && !isEmailVerified(data.user)) {
      await supabase.auth.signOut();
      throw new Error("EMAIL_NOT_VERIFIED");
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase not configured");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: getAuthRedirectUrl() },
    });
    if (error) throw error;
    const needsEmailVerification = Boolean(
      data.user && !isEmailVerified(data.user)
    );
    if (needsEmailVerification && data.session) {
      await supabase.auth.signOut();
    } else if (data.session?.access_token) {
      await fetchAccessStatus(data.session.access_token);
    }
    return { needsEmailVerification };
  }, []);

  const resendVerificationEmail = useCallback(async (email: string) => {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase not configured");
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo: getAuthRedirectUrl() },
    });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return;
    await supabase.auth.signOut();
    window.location.href = "/auth";
  }, []);

  const emailVerified = isEmailVerified(user);
  const isApproved = accessStatus === "approved" || isAdmin;

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        configured,
        emailVerified,
        accessStatus,
        accessLoading,
        isAdmin,
        isApproved,
        refreshAccess,
        signIn,
        signUp,
        resendVerificationEmail,
        signOut,
        accessToken:
          user && emailVerified && isApproved
            ? (session?.access_token ?? null)
            : null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
