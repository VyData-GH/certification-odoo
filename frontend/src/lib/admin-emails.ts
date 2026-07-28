/**
 * Admin emails that can approve/reject signup requests.
 * Set NEXT_PUBLIC_ADMIN_EMAILS in .env.local / Vercel (comma-separated).
 * No real addresses are hardcoded in the repo.
 */
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
  return [...new Set(fromEnv.map((e) => e.toLowerCase()))];
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const admins = getAdminEmails();
  if (admins.length === 0) return false;
  return admins.includes(normalizeEmail(email));
}
