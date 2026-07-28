import { NextRequest, NextResponse } from "next/server";

import { isAdminEmail } from "@/lib/admin-emails";
import { isUserApproved } from "@/lib/server/access";
import { getSupabaseAdmin } from "./supabase-admin";

export type AuthUser = {
  userId: string;
  email: string | null;
};

export type AuthResult =
  | { ok: true; userId: string; email: string | null }
  | { ok: false; response: NextResponse };

async function getVerifiedUser(
  request: NextRequest
): Promise<AuthResult & { user?: never } | { ok: true; userId: string; email: string | null }> {
  const header = request.headers.get("authorization");
  if (!header?.toLowerCase().startsWith("bearer ")) {
    return {
      ok: false,
      response: NextResponse.json(
        { detail: "Missing or invalid authorization token" },
        { status: 401 }
      ),
    };
  }

  const token = header.slice(7).trim();
  if (!token) {
    return {
      ok: false,
      response: NextResponse.json(
        { detail: "Missing or invalid authorization token" },
        { status: 401 }
      ),
    };
  }

  try {
    const { data, error } = await getSupabaseAdmin().auth.getUser(token);
    if (error || !data.user) {
      return {
        ok: false,
        response: NextResponse.json({ detail: "Invalid token" }, { status: 401 }),
      };
    }

    const confirmed =
      data.user.email_confirmed_at ?? data.user.confirmed_at ?? null;
    if (!confirmed) {
      return {
        ok: false,
        response: NextResponse.json(
          { detail: "Email address not verified" },
          { status: 403 }
        ),
      };
    }

    return {
      ok: true,
      userId: data.user.id,
      email: data.user.email ?? null,
    };
  } catch {
    return {
      ok: false,
      response: NextResponse.json({ detail: "Invalid token" }, { status: 401 }),
    };
  }
}

/** Verified email only — used for access status / pending users. */
export async function authenticateVerified(
  request: NextRequest
): Promise<AuthResult> {
  return getVerifiedUser(request);
}

/** Verified + approved account — used for history / app APIs. */
export async function authenticate(request: NextRequest): Promise<AuthResult> {
  const auth = await getVerifiedUser(request);
  if (!auth.ok) return auth;

  const approved = await isUserApproved(auth.userId, auth.email);
  if (!approved) {
    return {
      ok: false,
      response: NextResponse.json(
        { detail: "Account pending admin approval" },
        { status: 403 }
      ),
    };
  }

  return auth;
}

/** Verified admin only. */
export async function authenticateAdmin(
  request: NextRequest
): Promise<AuthResult> {
  const auth = await getVerifiedUser(request);
  if (!auth.ok) return auth;

  if (!isAdminEmail(auth.email)) {
    return {
      ok: false,
      response: NextResponse.json({ detail: "Admin only" }, { status: 403 }),
    };
  }

  return auth;
}
