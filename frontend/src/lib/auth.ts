import type { User } from "@supabase/supabase-js";

type UserWithLegacyConfirm = User & { confirmed_at?: string | null };

/** URL where Supabase email links (signup, recovery) should land. */
export function getAuthRedirectUrl(): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/auth`;
  }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return siteUrl ? `${siteUrl}/auth` : "/auth";
}

/** True when Supabase has confirmed the user's email (confirmed_at / email_confirmed_at set). */
export function isEmailVerified(user: User | null | undefined): boolean {
  if (!user) return false;
  const u = user as UserWithLegacyConfirm;
  return Boolean(u.email_confirmed_at ?? u.confirmed_at);
}
