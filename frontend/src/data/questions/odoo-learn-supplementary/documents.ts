import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const documentsSupplementaryQuestions = [
  mcq3Q({
    id: "doc-001",
    module: "documents",
    text: {
      en: "How do I integrate the Accounting App with the Documents App? (Odoo Learn — Accounting integration and Workflow Actions)",
      fr: "How do I integrate the Accounting App with the Documents App? (Odoo Learn — Accounting integration and Workflow Actions)",
    },
    correct: {
      en: "Go to Documents → Settings → Enable Accounting Workspace",
      fr: "Go to Documents → Settings → Enable Accounting Workspace",
    },
    distractors: [
      { en: "Go to Accounting→ Settings → Enable Document Workspace", fr: "Go to Accounting→ Settings → Enable Document Workspace" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accounting integration and Workflow Actions): Go to Documents → Settings → Enable Accounting Workspace",
      fr: "Source Odoo Learn (Accounting integration and Workflow Actions): Go to Documents → Settings → Enable Accounting Workspace",
    },
  }),
  complexQ({
    id: "doc-002",
    module: "documents",
    text: {
      en: "How can I turn my Purchase Orders into Vendor Bills? (Odoo Learn — Accounting integration and Workflow Actions)",
      fr: "How can I turn my Purchase Orders into Vendor Bills? (Odoo Learn — Accounting integration and Workflow Actions)",
    },
    correct: {
      en: "By using the \"Workflow Actions\" feature",
      fr: "By using the \"Workflow Actions\" feature",
    },
    distractors: [
      { en: "By using the \"Automated Actions\" feature", fr: "By using the \"Automated Actions\" feature" },
      { en: "By using the \"Folder Actions\" feature", fr: "By using the \"Folder Actions\" feature" },
      { en: "By using the \"Tag Actions\" feature", fr: "By using the \"Tag Actions\" feature" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accounting integration and Workflow Actions): By using the \"Workflow Actions\" feature",
      fr: "Source Odoo Learn (Accounting integration and Workflow Actions): By using the \"Workflow Actions\" feature",
    },
  }),
  mcq3Q({
    id: "doc-003",
    module: "documents",
    text: {
      en: "What does a Workflow Action apply to? (Odoo Learn — Accounting integration and Workflow Actions)",
      fr: "What does a Workflow Action apply to? (Odoo Learn — Accounting integration and Workflow Actions)",
    },
    correct: {
      en: "An action applies to all sub-workspaces under the Related Workspace you selected.",
      fr: "An action applies to all sub-workspaces under the Related Workspace you selected.",
    },
    distractors: [
      { en: "An action applies to only one parent workspace.", fr: "An action applies to only one parent workspace." },
      { en: "An action only applies to one file.", fr: "An action only applies to one file." },
    ],
    explanation: {
      en: "Source Odoo Learn (Accounting integration and Workflow Actions): An action applies to all sub-workspaces under the Related Workspace you selected.",
      fr: "Source Odoo Learn (Accounting integration and Workflow Actions): An action applies to all sub-workspaces under the Related Workspace you selected.",
    },
  }),
];
