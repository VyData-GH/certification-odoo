// Odoo Learn supplementary — généré par scripts/integrate_xp_courses.py
import { appointmentsSupplementaryQuestions } from "./appointments";
import { barcodeSupplementaryQuestions } from "./barcode";
import { documentsSupplementaryQuestions } from "./documents";
import { elearningSupplementaryQuestions } from "./elearning";
import { fieldServiceSupplementaryQuestions } from "./field-service";
import { globalSettingsSupplementaryQuestions } from "./global-settings";
import { iotSupplementaryQuestions } from "./iot";
import { planningSupplementaryQuestions } from "./planning";
import { plmSupplementaryQuestions } from "./plm";
import { rentalSupplementaryQuestions } from "./rental";
import { signSupplementaryQuestions } from "./sign";
import { subscriptionSupplementaryQuestions } from "./subscription";

export const odooLearnSupplementaryQuestions = [
  ...appointmentsSupplementaryQuestions,
  ...barcodeSupplementaryQuestions,
  ...documentsSupplementaryQuestions,
  ...elearningSupplementaryQuestions,
  ...fieldServiceSupplementaryQuestions,
  ...globalSettingsSupplementaryQuestions,
  ...iotSupplementaryQuestions,
  ...planningSupplementaryQuestions,
  ...plmSupplementaryQuestions,
  ...rentalSupplementaryQuestions,
  ...signSupplementaryQuestions,
  ...subscriptionSupplementaryQuestions,
];
