/** Client-only demo session (read-only product tour). No Supabase user. */

export const DEMO_STORAGE_KEY = "virtuocode_demo_mode";

export function isDemoMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(DEMO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function enterDemoMode(): void {
  sessionStorage.setItem(DEMO_STORAGE_KEY, "1");
}

export function exitDemoMode(): void {
  try {
    sessionStorage.removeItem(DEMO_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
