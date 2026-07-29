import { ModuleId } from "@/types/exam";

/**
 * Official Odoo 19 Functional Certification approximate weights
 * (source: odoo.com / OpenExamPrep outline).
 */
export const OFFICIAL_EXAM_WEIGHTS: {
  modules: ModuleId[];
  pct: number;
}[] = [
  { modules: ["accounting"], pct: 14 },
  { modules: ["crm", "sales"], pct: 14 },
  { modules: ["inventory"], pct: 13 },
  { modules: ["studio"], pct: 11 },
  { modules: ["mrp"], pct: 10 },
  { modules: ["purchases"], pct: 7 },
  { modules: ["project", "timesheet"], pct: 7 },
  { modules: ["hr"], pct: 6 },
  { modules: ["website", "ecommerce"], pct: 6 },
  { modules: ["pos"], pct: 6 },
  { modules: ["spreadsheet", "knowledge"], pct: 4 },
  { modules: ["marketing", "survey"], pct: 4 },
];

/**
 * Allocate integer question counts by weight that sum exactly to `total`.
 * Largest-remainder method keeps proportions stable.
 */
export function allocateByWeight(
  total: number,
  weights: { modules: ModuleId[]; pct: number }[] = OFFICIAL_EXAM_WEIGHTS
): { modules: ModuleId[]; count: number }[] {
  if (total <= 0) return weights.map((w) => ({ modules: w.modules, count: 0 }));

  const raw = weights.map((w) => ({
    modules: w.modules,
    exact: (w.pct / 100) * total,
  }));
  const floors = raw.map((r) => ({
    modules: r.modules,
    count: Math.floor(r.exact),
    frac: r.exact - Math.floor(r.exact),
  }));
  let remaining = total - floors.reduce((s, f) => s + f.count, 0);

  const byFrac = [...floors].sort((a, b) => b.frac - a.frac);
  for (const row of byFrac) {
    if (remaining <= 0) break;
    row.count += 1;
    remaining -= 1;
  }

  return floors.map(({ modules, count }) => ({ modules, count }));
}
