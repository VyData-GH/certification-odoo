import type { AuthError, User } from "@supabase/supabase-js";

type UserWithLegacyConfirm = User & { confirmed_at?: string | null };

export type AuthErrorMessages = {
  error: string;
  emailNotVerified: string;
  errorEmailRateLimit: string;
  errorSignupRateLimit: string;
  errorTooManyRequests: string;
  errorInvalidCredentials: string;
  errorUserAlreadyRegistered: string;
};

function getAuthErrorMeta(err: unknown): { code?: string; status?: number } {
  if (!err || typeof err !== "object") return {};
  const authErr = err as AuthError;
  return {
    code: typeof authErr.code === "string" ? authErr.code : undefined,
    status: typeof authErr.status === "number" ? authErr.status : undefined,
  };
}

export function isEmailNotVerifiedError(err: unknown): boolean {
  return err instanceof Error && err.message === "EMAIL_NOT_VERIFIED";
}

/** Map Supabase Auth errors to user-facing messages (EN/FR via translations). */
export function formatAuthError(
  err: unknown,
  messages: AuthErrorMessages
): string {
  if (isEmailNotVerifiedError(err)) return messages.emailNotVerified;

  const { code, status } = getAuthErrorMeta(err);

  if (
    code === "over_email_send_rate_limit" ||
    (status === 429 &&
      err instanceof Error &&
      /email rate limit/i.test(err.message))
  ) {
    return messages.errorEmailRateLimit;
  }

  if (code === "over_request_rate_limit" || code === "too_many_requests") {
    return messages.errorSignupRateLimit;
  }

  if (status === 429) return messages.errorTooManyRequests;

  if (
    code === "invalid_credentials" ||
    code === "invalid_grant" ||
    (err instanceof Error && /invalid login credentials/i.test(err.message))
  ) {
    return messages.errorInvalidCredentials;
  }

  if (
    code === "user_already_exists" ||
    (err instanceof Error && /already registered/i.test(err.message))
  ) {
    return messages.errorUserAlreadyRegistered;
  }

  if (err instanceof Error && err.message && err.message !== "Supabase not configured") {
    return err.message;
  }

  return messages.error;
}

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
