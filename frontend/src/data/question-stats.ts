/** Auto-generated counts only — no question text. Do not import question banks here. */
import {
  CertificationModuleId,
  ModuleId,
  SupplementaryModuleId,
} from "@/types/exam";

export interface QuestionStats {
  total: number;
  certificationTotal: number;
  supplementaryTotal: number;
  byModule: Partial<Record<ModuleId, number>>;
  byCertification: Record<CertificationModuleId, number>;
  bySupplementary: Partial<Record<SupplementaryModuleId, number>>;
}

export const QUESTION_STATS: QuestionStats = {
  "total": 2246,
  "certificationTotal": 1819,
  "supplementaryTotal": 427,
  "byModule": {
    "accounting": 158,
    "ai": 20,
    "ai-business-cases": 10,
    "appointments": 9,
    "barcode": 26,
    "business-cases": 12,
    "crm": 139,
    "documents": 3,
    "ecommerce": 115,
    "elearning": 8,
    "events": 45,
    "field-service": 16,
    "global-settings": 4,
    "helpdesk": 61,
    "hr": 216,
    "inventory": 152,
    "iot": 21,
    "knowledge": 45,
    "marketing": 80,
    "mrp": 161,
    "planning": 4,
    "plm": 7,
    "pos": 117,
    "project": 85,
    "purchases": 62,
    "quality": 36,
    "rental": 20,
    "sales": 134,
    "sign": 4,
    "spreadsheet": 68,
    "studio": 87,
    "subscription": 34,
    "survey": 35,
    "technical-training": 71,
    "timesheet": 33,
    "voip": 36,
    "website": 112
  },
  "byCertification": {
    "website": 112,
    "ecommerce": 115,
    "survey": 35,
    "marketing": 80,
    "ai": 20,
    "crm": 139,
    "sales": 134,
    "purchases": 62,
    "project": 85,
    "timesheet": 33,
    "accounting": 158,
    "inventory": 152,
    "mrp": 161,
    "hr": 216,
    "spreadsheet": 68,
    "knowledge": 45,
    "pos": 117,
    "studio": 87
  },
  "bySupplementary": {
    "sign": 4,
    "global-settings": 4,
    "documents": 3,
    "elearning": 8,
    "planning": 4,
    "rental": 20,
    "subscription": 34,
    "barcode": 26,
    "field-service": 16,
    "iot": 21,
    "appointments": 9,
    "plm": 7,
    "quality": 36,
    "events": 45,
    "helpdesk": 61,
    "voip": 36,
    "business-cases": 12,
    "technical-training": 71,
    "ai-business-cases": 10
  }
};

export function getQuestionStats(): QuestionStats {
  return QUESTION_STATS;
}

export function getModuleQuestionCount(moduleId: ModuleId): number {
  return QUESTION_STATS.byModule[moduleId] ?? 0;
}
