/**
 * Enrichit les explications trop courtes (surtout Odoo Learn) pour le popup de révision.
 * Les explications déjà pédagogiques (certification) restent inchangées.
 */

type Bilingual = { en: string; fr: string };

const MODULE_LABELS: Record<string, { en: string; fr: string }> = {
  website: { en: "Website", fr: "Site Web" },
  ecommerce: { en: "eCommerce", fr: "eCommerce" },
  survey: { en: "Survey", fr: "Sondages" },
  marketing: { en: "Marketing", fr: "Marketing" },
  ai: { en: "AI", fr: "IA" },
  crm: { en: "CRM", fr: "CRM" },
  sales: { en: "Sales", fr: "Ventes" },
  purchases: { en: "Purchases", fr: "Achats" },
  project: { en: "Project", fr: "Projet" },
  timesheet: { en: "Timesheet", fr: "Feuilles de temps" },
  accounting: { en: "Accounting", fr: "Comptabilité" },
  inventory: { en: "Inventory", fr: "Inventaire" },
  mrp: { en: "MRP", fr: "Fabrication" },
  hr: { en: "HR", fr: "RH" },
  spreadsheet: { en: "Spreadsheet", fr: "Feuilles de calcul" },
  knowledge: { en: "Knowledge", fr: "Connaissances" },
  pos: { en: "POS", fr: "Point de Vente" },
  studio: { en: "Studio", fr: "Studio" },
  sign: { en: "Sign", fr: "Sign" },
  "global-settings": { en: "Global Settings", fr: "Paramètres globaux" },
  documents: { en: "Documents", fr: "Documents" },
  elearning: { en: "eLearning", fr: "eLearning" },
  planning: { en: "Planning", fr: "Planning" },
  rental: { en: "Rental", fr: "Location" },
  subscription: { en: "Subscription", fr: "Abonnements" },
  barcode: { en: "Barcode", fr: "Code-barres" },
  "field-service": { en: "Field Service", fr: "Services sur site" },
  iot: { en: "IoT", fr: "IoT" },
  appointments: { en: "Appointments", fr: "Rendez-vous" },
  plm: { en: "PLM", fr: "PLM" },
  quality: { en: "Quality", fr: "Qualité" },
  events: { en: "Events", fr: "Événements" },
  helpdesk: { en: "Helpdesk", fr: "Helpdesk" },
  voip: { en: "VoIP", fr: "VoIP" },
  "business-cases": { en: "Business Cases", fr: "Cas métier" },
  "technical-training": { en: "Technical Training", fr: "Formation technique" },
  "ai-business-cases": { en: "AI Business Cases", fr: "Cas d'usage IA" },
};

/** Module-specific study tip shown in enriched explanations. */
const MODULE_FOCUS: Record<string, Bilingual> = {
  crm: {
    en: "Focus on Leads vs Opportunities, activities, and calendar sync settings.",
    fr: "Retenez la distinction Pistes / Opportunités, les activités et les réglages de sync calendrier.",
  },
  sales: {
    en: "Focus on quotation → order flow, pricelists, and optional products.",
    fr: "Retenez le flux devis → commande, les listes de prix et les produits optionnels.",
  },
  accounting: {
    en: "Focus on journals, reconciliation, taxes, and the link between invoice and payment.",
    fr: "Retenez journaux, rapprochement, taxes, et le lien facture ↔ paiement.",
  },
  inventory: {
    en: "Focus on routes, operations types, and stock moves vs receipts/deliveries.",
    fr: "Retenez routes, types d'opération, et mouvements de stock vs réceptions/livraisons.",
  },
  mrp: {
    en: "Focus on BoM, work centers, MO states, and expected vs real duration.",
    fr: "Retenez nomenclature, centres de charge, états MO, et durée prévue vs réelle.",
  },
  hr: {
    en: "Focus on employees, contracts, time off, and attendance vs timesheets.",
    fr: "Retenez employés, contrats, congés, et présence vs feuilles de temps.",
  },
  pos: {
    en: "Focus on sessions, payment methods, and closing/cash control.",
    fr: "Retenez sessions, modes de paiement, et clôture / contrôle de caisse.",
  },
  website: {
    en: "Focus on pages, building blocks, and publish vs unpublished content.",
    fr: "Retenez pages, blocs de construction, et contenu publié vs non publié.",
  },
  ecommerce: {
    en: "Focus on checkout, payment providers, and the sale order created at checkout.",
    fr: "Retenez checkout, prestataires de paiement, et la commande créée à la validation.",
  },
  purchases: {
    en: "Focus on RFQ → PO, vendor pricelists, and receipt matching.",
    fr: "Retenez DdP → commande fournisseur, listes de prix et rapprochement réception.",
  },
  project: {
    en: "Focus on tasks, stages, and the link with timesheets and profitability.",
    fr: "Retenez tâches, étapes, et le lien avec feuilles de temps / rentabilité.",
  },
  timesheet: {
    en: "Focus on timers, minimum duration, and billing from timesheets.",
    fr: "Retenez chronomètres, durée minimale, et facturation depuis les feuilles de temps.",
  },
  studio: {
    en: "Focus on what Studio can customize without code vs technical limits.",
    fr: "Retenez ce que Studio personnalise sans code, et ses limites techniques.",
  },
  marketing: {
    en: "Focus on campaigns, mailing lists, and marketing automation traces.",
    fr: "Retenez campagnes, listes de diffusion et traces d'automatisation marketing.",
  },
  survey: {
    en: "Focus on survey types, live session, and result analysis screens.",
    fr: "Retenez types d'enquête, session live, et écrans d'analyse des résultats.",
  },
  knowledge: {
    en: "Focus on articles, workspaces, and sharing / permissions.",
    fr: "Retenez articles, espaces de travail, et partage / droits.",
  },
  spreadsheet: {
    en: "Focus on Odoo spreadsheets, insertions from data, and dashboards.",
    fr: "Retenez les tableurs Odoo, insertions de données et tableaux de bord.",
  },
  helpdesk: {
    en: "Focus on tickets, SLAs, and help center / eLearning links.",
    fr: "Retenez tickets, SLA, et liens centre d'aide / eLearning.",
  },
  events: {
    en: "Focus on event stages, registration, and tracks/speakers setup.",
    fr: "Retenez étapes d'événement, inscriptions, et configuration tracks/intervenants.",
  },
  voip: {
    en: "Focus on VoIP providers, call queue, and CRM call logging.",
    fr: "Retenez prestataires VoIP, files d'appels, et journalisation CRM.",
  },
  subscription: {
    en: "Focus on recurrence, close dates, and renewal vs upsell.",
    fr: "Retenez récurrence, dates de clôture, et renouvellement vs upsell.",
  },
  quality: {
    en: "Focus on quality points, checks on MO/transfers, and alerts.",
    fr: "Retenez points qualité, contrôles sur MO/transferts, et alertes.",
  },
  barcode: {
    en: "Focus on barcode operations, GS1, and inventory adjustments via scanner.",
    fr: "Retenez opérations code-barres, GS1, et ajustements stock au scan.",
  },
  iot: {
    en: "Focus on IoT boxes, devices pairing, and POS/hardware links.",
    fr: "Retenez boîtiers IoT, appairage périphériques, et liens POS/matériel.",
  },
  "technical-training": {
    en: "Focus on technical concepts as taught in Odoo Learn (models, views, ACL).",
    fr: "Retenez les concepts techniques Odoo Learn (modèles, vues, ACL).",
  },
  sign: {
    en: "Focus on signature roles, templates, and signed PDF storage.",
    fr: "Retenez rôles de signature, modèles, et stockage du PDF signé.",
  },
  planning: {
    en: "Focus on shifts, roles, and publication of the planning.",
    fr: "Retenez créneaux, rôles, et publication du planning.",
  },
  rental: {
    en: "Focus on rental duration pricing and pickup/return workflow.",
    fr: "Retenez tarification par durée et flux retrait/retour.",
  },
  "field-service": {
    en: "Focus on tasks on site, worksheets, and map/schedule views.",
    fr: "Retenez interventions sur site, feuilles de travail, et vues carte/planning.",
  },
  documents: {
    en: "Focus on workspaces, tags, and document sharing links.",
    fr: "Retenez espaces de travail, étiquettes, et liens de partage.",
  },
  elearning: {
    en: "Focus on courses, contents, and publish / certification options.",
    fr: "Retenez cours, contenus, et options de publication / certification.",
  },
  appointments: {
    en: "Focus on appointment types, durations, and booking pages.",
    fr: "Retenez types de rendez-vous, durées, et pages de réservation.",
  },
  plm: {
    en: "Focus on ECO, versions, and BoM approval workflow.",
    fr: "Retenez ECO, versions, et validation de nomenclature.",
  },
  "global-settings": {
    en: "Focus on company settings, users, and multi-company switches.",
    fr: "Retenez paramètres société, utilisateurs, et multi-sociétés.",
  },
  "business-cases": {
    en: "Focus on end-to-end flows across apps in the business case.",
    fr: "Retenez les flux bout-en-bout entre apps du cas métier.",
  },
  "ai-business-cases": {
    en: "Focus on where AI assists vs where a human must confirm.",
    fr: "Retenez où l'IA assiste vs où une validation humaine est requise.",
  },
  ai: {
    en: "Focus on AI prompts, fields, and when suggestions are applied.",
    fr: "Retenez prompts IA, champs concernés, et quand les suggestions s'appliquent.",
  },
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[«»""']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripLearnSuffix(questionText: string): string {
  return questionText
    .replace(/\s*\(Odoo Learn[^)]*\)\s*$/i, "")
    .replace(/\s*—\s*Odoo Learn.*$/i, "")
    .trim();
}

function extractTopic(text: string, explanation: string): string | null {
  const fromText =
    text.match(/\(Odoo Learn\s*[—–-]\s*([^)]+)\)/i) ||
    text.match(/Odoo Learn\s*[—–-]\s*([^(]+?)\)?\s*$/i);
  if (fromText?.[1]) return fromText[1].trim();

  const fromExpl = explanation.match(/^Source Odoo Learn\s*\(([^)]+)\)/i);
  if (fromExpl?.[1]) return fromExpl[1].trim();
  return null;
}

function bodyAfterSource(explanation: string): string {
  return explanation
    .replace(/^Source Odoo Learn\s*\([^)]+\)\s*[:：]?\s*/i, "")
    .trim();
}

export function isThinExplanation(
  explanation: Bilingual,
  correct?: Bilingual
): boolean {
  const en = explanation.en.trim();
  if (/^Source Odoo Learn/i.test(en)) return true;

  const pedagogical =
    /(because|since|via|menu|settings|configuration|documentation|‣|→|when you|enabling|parce que|car |lorsque|paramètres|documentation|permet)/i;

  if (en.length < 100 && !pedagogical.test(en)) return true;
  if (explanation.fr.length < 100 && !pedagogical.test(explanation.fr))
    return true;

  if (correct) {
    const body = normalize(bodyAfterSource(en));
    const correctNorm = normalize(correct.en);
    if (
      body === correctNorm ||
      (correctNorm.length > 20 &&
        (body.includes(correctNorm) || correctNorm.includes(body)) &&
        en.length < correct.en.length + 80)
    ) {
      return true;
    }
  }

  return false;
}

export interface EnrichExplanationInput {
  explanation: Bilingual;
  text: Bilingual;
  correct: Bilingual;
  distractors?: Bilingual[];
  module: string;
}

/**
 * Builds a revision-ready explanation: correct answer + context + contrast + module tip.
 */
export function enrichExplanation(input: EnrichExplanationInput): Bilingual {
  if (!isThinExplanation(input.explanation, input.correct)) {
    return input.explanation;
  }

  const topic =
    extractTopic(input.text.en, input.explanation.en) ||
    extractTopic(input.text.fr, input.explanation.fr);
  const mod =
    MODULE_LABELS[input.module] ?? {
      en: input.module,
      fr: input.module,
    };
  const focus = MODULE_FOCUS[input.module];
  const stemEn = stripLearnSuffix(input.text.en);
  const stemFr = stripLearnSuffix(input.text.fr);
  const distractor = input.distractors?.[0];

  const topicEn = topic ?? mod.en;
  const topicFr = topic ?? mod.fr;

  const enParts = [
    `Correct answer: « ${input.correct.en} ».`,
    `For the question « ${stemEn} », the Odoo Learn lesson « ${topicEn} » (${mod.en}) documents this exact behavior.`,
  ];
  if (distractor) {
    enParts.push(
      `Do not confuse with « ${distractor.en} » — that refers to a different setting, menu, or workflow.`
    );
  }
  if (focus) enParts.push(focus.en);
  enParts.push(`Source: Odoo Learn — ${topicEn}.`);

  const frParts = [
    `Bonne réponse : « ${input.correct.fr} ».`,
    `Pour la question « ${stemFr} », la leçon Odoo Learn « ${topicFr} » (${mod.fr}) documente précisément ce comportement.`,
  ];
  if (distractor) {
    frParts.push(
      `Ne confondez pas avec « ${distractor.fr} » — cela décrit un autre réglage, menu ou flux.`
    );
  }
  if (focus) frParts.push(focus.fr);
  frParts.push(`Source : Odoo Learn — ${topicFr}.`);

  return {
    en: enParts.join("\n\n"),
    fr: frParts.join("\n\n"),
  };
}
