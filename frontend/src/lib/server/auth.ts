import { NextRequest, NextResponse } from "next/server";

import { getSupabaseAdmin } from "./supabase-admin";

export type AuthResult =
  | { ok: true; userId: string }
  | { ok: false; response: NextResponse };

export async function authenticate(request: NextRequest): Promise<AuthResult> {
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

    return { ok: true, userId: data.user.id };
  } catch {
    return {
      ok: false,
      response: NextResponse.json({ detail: "Invalid token" }, { status: 401 }),
    };
  }
}
