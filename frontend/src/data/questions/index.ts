import { Question } from "@/types/exam";
import { websiteQuestions } from "./website";
import { ecommerceQuestions } from "./ecommerce";
import { surveyQuestions } from "./survey";
import { marketingQuestions } from "./marketing";
import { aiQuestions } from "./ai";
import { crmQuestions } from "./crm";
import { salesQuestions } from "./sales";
import { purchasesQuestions } from "./purchases";
import { projectQuestions } from "./project";
import { timesheetQuestions } from "./timesheet";
import { accountingQuestions } from "./accounting";
import { inventoryQuestions } from "./inventory";
import { mrpQuestions } from "./mrp";
import { hrQuestions } from "./hr";
import { spreadsheetQuestions } from "./spreadsheet";
import { knowledgeQuestions } from "./knowledge";
import { posQuestions } from "./pos";
import { studioQuestions } from "./studio";
import { screenshotQuestions } from "./screenshot-questions";
import { yesNoQuestions } from "./yesno-questions";
import { odooLearnQuestions } from "./odoo-learn";

export const allQuestions: Question[] = [
  ...yesNoQuestions,
  ...screenshotQuestions,
  ...websiteQuestions,
  ...ecommerceQuestions,
  ...surveyQuestions,
  ...marketingQuestions,
  ...aiQuestions,
  ...crmQuestions,
  ...salesQuestions,
  ...purchasesQuestions,
  ...projectQuestions,
  ...timesheetQuestions,
  ...accountingQuestions,
  ...inventoryQuestions,
  ...mrpQuestions,
  ...hrQuestions,
  ...spreadsheetQuestions,
  ...knowledgeQuestions,
  ...posQuestions,
  ...studioQuestions,
  ...odooLearnQuestions,
];
