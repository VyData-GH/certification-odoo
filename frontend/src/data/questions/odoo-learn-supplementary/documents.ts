import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const documentsSupplementaryQuestions = [
  mcq3Q({
    id: "doc-001",
    module: "documents",
    text: {
      en: "How do I integrate the Accounting App with the Documents App? (Odoo Learn — Accounting integration and Workflow Actions)",
      fr: "Comment intégrer l'application Comptabilité à l'application Documents ? (Odoo Learn — Intégration comptable et actions de workflow)",
    },
    correct: {
      en: "Go to Documents → Settings → Enable Accounting Workspace",
      fr: "Accédez à Documents → Paramètres → Activer l'espace de travail de comptabilité.",
    },
    distractors: [
      { en: "Go to Accounting→ Settings → Enable Document Workspace", fr: "Accédez à Comptabilité → Paramètres → Activer l'espace de travail du document" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accounting integration and Workflow Actions): Go to Documents → Settings → Enable Accounting Workspace",
      fr: "Source Odoo Learn (Intégration comptable et actions de workflow) : Allez dans Documents → Paramètres → Activer l'espace de travail comptable",
    },
  }),
  complexQ({
    id: "doc-002",
    module: "documents",
    text: {
      en: "How can I turn my Purchase Orders into Vendor Bills? (Odoo Learn — Accounting integration and Workflow Actions)",
      fr: "Comment puis-je transformer mes bons de commande en factures fournisseurs ? (Odoo Learn — Intégration comptable et actions de workflow)",
    },
    correct: {
      en: "By using the \"Workflow Actions\" feature",
      fr: "En utilisant la fonctionnalité « Actions de workflow »",
    },
    distractors: [
      { en: "By using the \"Automated Actions\" feature", fr: "En utilisant la fonctionnalité \"Actions automatisées\"" },
      { en: "By using the \"Folder Actions\" feature", fr: "En utilisant la fonctionnalité \"Actions sur les dossiers\"" },
      { en: "By using the \"Tag Actions\" feature", fr: "En utilisant la fonctionnalité « Tag Actions »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accounting integration and Workflow Actions): By using the \"Workflow Actions\" feature",
      fr: "Source Odoo Learn (Intégration comptable et Actions de workflow) : En utilisant la fonctionnalité « Actions de workflow »",
    },
  }),
  mcq3Q({
    id: "doc-003",
    module: "documents",
    text: {
      en: "What does a Workflow Action apply to? (Odoo Learn — Accounting integration and Workflow Actions)",
      fr: "À quoi s’applique une action de workflow ? (Odoo Learn — Intégration comptable et actions de workflow)",
    },
    correct: {
      en: "An action applies to all sub-workspaces under the Related Workspace you selected.",
      fr: "Une action s'applique à tous les sous-espaces de travail sous l'espace de travail associé que vous avez sélectionné.",
    },
    distractors: [
      { en: "An action applies to only one parent workspace.", fr: "Une action s'applique à un seul espace de travail parent." },
      { en: "An action only applies to one file.", fr: "Une action ne s'applique qu'à un seul fichier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Accounting integration and Workflow Actions): An action applies to all sub-workspaces under the Related Workspace you selected.",
      fr: "Source Odoo Learn (Intégration comptable et actions de workflow) : Une action s'applique à tous les sous-espaces de travail sous l'espace de travail associé que vous avez sélectionné.",
    },
  }),
];
