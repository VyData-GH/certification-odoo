/**
 * Admin emails can approve/reject signup requests.
 * Override with NEXT_PUBLIC_ADMIN_EMAILS (comma-separated), or ADMIN_EMAILS on the server.
 * If both are unset, the built-in defaults below apply.
 */
const DEFAULT_ADMIN_EMAILS = [
  "andrianantenainaangelo55@gmail.com",
  "james@virtuology.com",
] as const;

function parseEnvList(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function getAdminEmails(): string[] {
  const fromEnv = [
    ...parseEnvList(process.env.ADMIN_EMAILS),
    ...parseEnvList(process.env.NEXT_PUBLIC_ADMIN_EMAILS),
  ];
  const merged = fromEnv.length > 0 ? fromEnv : [...DEFAULT_ADMIN_EMAILS];
  return [...new Set(merged.map((e) => e.toLowerCase()))];
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return getAdminEmails().includes(normalizeEmail(email));
}
