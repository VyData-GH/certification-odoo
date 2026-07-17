import {
  CertificationModuleId,
  ModuleId,
  SupplementaryModuleId,
} from "@/types/exam";

/** Odoo technical module names — icons from https://download.odoocdn.com */
const CERTIFICATION_TECH_NAMES: Record<CertificationModuleId, string> = {
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

const SUPPLEMENTARY_TECH_NAMES: Record<SupplementaryModuleId, string> = {
  sign: "sign",
  "global-settings": "base",
  documents: "documents",
  elearning: "website_slides",
  planning: "planning",
  rental: "sale_renting",
  subscription: "sale_subscription",
  barcode: "stock_barcode",
  "field-service": "industry_fsm",
  iot: "iot",
  appointments: "appointment",
  plm: "mrp_plm",
  events: "website_event",
  helpdesk: "helpdesk",
  voip: "voip",
  "business-cases": "base",
  "technical-training": "base",
};

const ICON_CDN = "https://download.odoocdn.com/icons";

export function getModuleIconUrl(moduleId: ModuleId): string {
  const tech =
    moduleId in CERTIFICATION_TECH_NAMES
      ? CERTIFICATION_TECH_NAMES[moduleId as CertificationModuleId]
      : SUPPLEMENTARY_TECH_NAMES[moduleId as SupplementaryModuleId];
  return `${ICON_CDN}/${tech}/static/description/icon.svg`;
}
