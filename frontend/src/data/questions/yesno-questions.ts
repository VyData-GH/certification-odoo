import { yesNoQ } from "./helpers";

/** Yes/No questions — 2 real choices + « Je ne sais pas » appended at exam time (3–5 total choices). */
export const yesNoQuestions = [
  yesNoQ({
    id: "yn-crm-001",
    module: "crm",
    text: {
      en: "In Odoo 19 CRM, can you convert a lead into an opportunity without leaving the CRM app?",
      fr: "Dans le CRM Odoo 19, peut-on convertir une piste en opportunité sans quitter l'application CRM ?",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. Qualified leads are converted to opportunities directly in CRM (e.g. Convert to Opportunity action on the lead form).",
      fr: "Oui. Les pistes qualifiées sont converties en opportunités directement dans le CRM (ex. action Convertir en opportunité sur la fiche piste).",
    },
  }),
  yesNoQ({
    id: "yn-inv-001",
    module: "inventory",
    text: {
      en: "Does validating a delivery order in Inventory decrease on-hand stock for storable products?",
      fr: "La validation d'un bon de livraison en Inventaire diminue-t-elle le stock réel des produits stockables ?",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. Validating an outgoing transfer posts stock moves that reduce quantities in the source location.",
      fr: "Oui. Valider un transfert sortant comptabilise des mouvements qui réduisent les quantités à l'emplacement source.",
    },
  }),
  yesNoQ({
    id: "yn-acc-001",
    module: "accounting",
    text: {
      en: "Can a posted customer invoice still be edited in full without resetting it to draft?",
      fr: "Une facture client comptabilisée peut-elle encore être entièrement modifiée sans la remettre en brouillon ?",
    },
    correctIsYes: false,
    explanation: {
      en: "No. Posted invoices are locked; you must reset to draft (if allowed) before changing lines, depending on localization and rights.",
      fr: "Non. Les factures comptabilisées sont verrouillées ; il faut repasser en brouillon (si autorisé) avant de modifier les lignes.",
    },
  }),
  yesNoQ({
    id: "yn-mrp-001",
    module: "mrp",
    text: {
      en: "Does confirming a manufacturing order automatically consume components from stock when production is recorded?",
      fr: "La confirmation d'un ordre de fabrication consomme-t-elle automatiquement les composants du stock lors de la production ?",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. Completing production on an MO generates component moves (consumption) and finished product moves according to the BOM.",
      fr: "Oui. Finaliser la production sur un OF génère les mouvements de composants (consommation) et de produits finis selon la nomenclature.",
    },
  }),
  yesNoQ({
    id: "yn-hr-001",
    module: "hr",
    text: {
      en: "Can employees check in and out from a kiosk without opening the full backend employee form?",
      fr: "Les employés peuvent-ils pointer via un kiosque sans ouvrir la fiche employé complète du backend ?",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. The Attendances kiosk mode is designed for quick check-in/out on a tablet or dedicated device.",
      fr: "Oui. Le mode kiosque Présences permet un pointage rapide sur tablette ou appareil dédié.",
    },
  }),
  yesNoQ({
    id: "yn-web-001",
    module: "website",
    text: {
      en: "Must you install a separate app to edit website pages with the drag-and-drop builder?",
      fr: "Faut-il installer une application séparée pour éditer les pages du site avec le constructeur glisser-déposer ?",
    },
    correctIsYes: false,
    explanation: {
      en: "No. Website editing is built into the Website app — use Edit on the frontend to open the block editor.",
      fr: "Non. L'édition du site est intégrée à l'application Site web — utilisez Éditer sur le frontend pour ouvrir l'éditeur de blocs.",
    },
  }),
];
