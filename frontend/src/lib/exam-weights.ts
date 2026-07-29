import { ModuleId } from "@/types/exam";

/**
 * Official Odoo 19 Functional Certification approximate weights
 * (source: odoo.com syllabus — all 18 certification apps including AI).
 * Percentages sum to 100.
 */
export const OFFICIAL_EXAM_WEIGHTS: {
  modules: ModuleId[];
  pct: number;
}[] = [
  { modules: ["accounting"], pct: 14 },
  { modules: ["crm", "sales"], pct: 14 },
  { modules: ["inventory"], pct: 12 },
  { modules: ["studio"], pct: 10 },
  { modules: ["mrp"], pct: 10 },
  { modules: ["purchases"], pct: 7 },
  { modules: ["project", "timesheet"], pct: 7 },
  { modules: ["hr"], pct: 6 },
  { modules: ["website", "ecommerce"], pct: 6 },
  { modules: ["pos"], pct: 5 },
  { modules: ["spreadsheet", "knowledge", "ai"], pct: 5 },
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
