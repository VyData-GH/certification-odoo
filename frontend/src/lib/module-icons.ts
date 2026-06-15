import { ModuleId } from "@/types/exam";

/** Odoo technical module names — icons from https://download.odoocdn.com */
const ODOO_TECH_NAMES: Record<ModuleId, string> = {
  website: "website",
  ecommerce: "website_sale",
  survey: "survey",
  marketing: "mass_mailing",
  ai: "ai_app",
  crm: "crm",
  sales: "sale",
  purchases: "purchase",
  project: "project",
  timesheet: "hr_timesheet",
  accounting: "account",
  inventory: "stock",
  mrp: "mrp",
  hr: "hr",
  spreadsheet: "spreadsheet",
  knowledge: "knowledge",
  pos: "point_of_sale",
  studio: "web_studio",
};

const ICON_CDN = "https://download.odoocdn.com/icons";

export function getModuleIconUrl(moduleId: ModuleId): string {
  const tech = ODOO_TECH_NAMES[moduleId];
  return `${ICON_CDN}/${tech}/static/description/icon.svg`;
}
