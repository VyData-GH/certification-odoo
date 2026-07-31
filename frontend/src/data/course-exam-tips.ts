/** Cross-module exam tips — flows, traps, and study habits (not a 19th module). */

export interface ExamTipBlock {
  title: { en: string; fr: string };
  bullets: { en: string[]; fr: string[] };
}

export const COURSE_EXAM_TIPS = {
  readMinutes: 8,
  overview: {
    en: "Before drilling module quizzes, lock the end-to-end flows and the distinctions the exam loves to test.",
    fr: "Avant les quiz par module, verrouillez les flux bout-en-bout et les distinctions que l'examen adore piéger.",
  },
  blocks: [
    {
      title: {
        en: "Core inter-module flows",
        fr: "Flux inter-modules essentiels",
      },
      bullets: {
        en: [
          "CRM → Sales: Won opportunity → quotation → confirmed SO",
          "Sales → Inventory / MRP → Accounting: deliver or manufacture, then invoice and reconcile payment",
          "Purchases: RFQ → PO → receipt → vendor bill (3-way match)",
          "Project / Timesheet → Sales → Accounting: billable time on service SO → customer invoice",
          "eCommerce / POS sales are still Sales Orders — same stock and accounting chain",
        ],
        fr: [
          "CRM → Ventes : opportunité Gagnée → devis → commande confirmée",
          "Ventes → Stock / MRP → Comptabilité : livrer ou fabriquer, puis facturer et lettrer le paiement",
          "Achats : DdP → BC → réception → facture fournisseur (matching 3 voies)",
          "Projet / Feuilles de temps → Ventes → Comptabilité : temps facturable sur commande service → facture client",
          "Commandes eCommerce / PdV = toujours des commandes de vente — même chaîne stock et compta",
        ],
      },
    },
    {
      title: {
        en: "Settings checkbox vs Studio",
        fr: "Case Paramètres vs Studio",
      },
      bullets: {
        en: [
          "App Settings (checkbox / feature flag) enable standard Odoo behaviour — prefer this first",
          "Studio adds custom fields, views, automations and models stored as DB records (not Python code)",
          "Studio customizations survive upgrades carefully and can complicate migrations — exam favourite",
          "Complex business logic still needs development; Studio is for lightweight functional tweaks",
        ],
        fr: [
          "Paramètres d'app (case / option) activent le comportement standard Odoo — à préférer en premier",
          "Studio ajoute champs, vues, automations et modèles stockés en base (pas du code Python)",
          "Les perso Studio survivent aux upgrades avec prudence et compliquent les migrations — piège d'examen",
          "La logique métier complexe reste du développement ; Studio = ajustements fonctionnels légers",
        ],
      },
    },
    {
      title: {
        en: "Classic confusions (exam traps)",
        fr: "Confusions classiques (pièges d'examen)",
      },
      bullets: {
        en: [
          "Stock route (Push/Pull path) ≠ reordering rule (auto order trigger)",
          "Lead ≠ Opportunity (Leads are optional; same crm.lead model, different type)",
          "Credit note (reduces/cancels) ≠ debit note (adds amount)",
          "BoM Manufacture (MO) ≠ Kit (no MO, explode) ≠ Subcontracting (external producer)",
          "Invoice on ordered qty ≠ on delivered qty (when Create Invoice unlocks)",
          "Timesheet cost (internal) ≠ customer billing rate (profitability)",
          "Static mailing list ≠ dynamic list (recomputed at send, v19)",
          "Studio (database) ≠ development (Python code)",
          "Milestone ≠ Kanban stage; Published product ≠ In stock; Unpublished page ≠ deleted",
        ],
        fr: [
          "Route de stock (chemin Push/Pull) ≠ règle de réapprovisionnement (déclencheur)",
          "Lead ≠ Opportunité (Pistes optionnelles ; même modèle crm.lead, type différent)",
          "Note de crédit / avoir (réduit/annule) ≠ note de débit (ajoute un montant)",
          "NdM Fabrication (OF) ≠ Kit (pas d'OF, explosion) ≠ Sous-traitance (producteur externe)",
          "Facturation sur commande ≠ sur livraison (quand « Créer une facture » se débloque)",
          "Coût Timesheet (interne) ≠ prix facturé client (rentabilité)",
          "Liste de diffusion statique ≠ dynamique (recalculée à l'envoi, v19)",
          "Studio (base de données) ≠ développement (code Python)",
          "Jalon ≠ étape Kanban ; Produit publié ≠ en stock ; Page non publiée ≠ supprimée",
        ],
      },
    },
    {
      title: {
        en: "Exam habits (Odoo 19)",
        fr: "Réflexes d'examen (Odoo 19)",
      },
      bullets: {
        en: [
          "Learn official English UI terms (Lead, Quotation, BoM, Pricelist, Reordering rule…)",
          "Watch v19 highlights: generative AI / IAP, POS presets, e-invoicing, Time Off / Payroll UX",
          "One product record serves Sales, Inventory, eCommerce and POS — flags differ (Can be Sold, Published…)",
          "IAP credits power AI, SMS, lead enrichment, OCR — not a free local engine",
          "Forecast revenue = expected amount × probability",
        ],
        fr: [
          "Maîtrisez les termes EN officiels (Lead, Quotation, BoM, Pricelist, Reordering rule…)",
          "Repérez les axes v19 : IA générative / IAP, presets PdV, e-facturation, UX Congés / Paie",
          "Un seul produit sert Ventes, Stock, eCommerce et PdV — les cases diffèrent (Peut être vendu, Publié…)",
          "Les crédits IAP alimentent IA, SMS, enrichissement de pistes, OCR — pas un moteur local gratuit",
          "Revenu prévisionnel = montant attendu × probabilité",
        ],
      },
    },
  ] satisfies ExamTipBlock[],
} as const;
