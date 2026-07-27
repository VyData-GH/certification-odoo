import { complexQ } from "../helpers";

/** Questions Odoo Learn — AI Business Cases (vidéos / cas d'usage) */
export const aiBusinessCasesSupplementaryQuestions = [
complexQ({
    id: "aib-001",
    module: "ai-business-cases",
    text: {
      en: "What can you configure when setting up an Odoo AI Agent? (Odoo Learn — AI Business Cases)",
      fr: "Que pouvez-vous configurer lors de la configuration d'un agent Odoo AI ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Sources, tools the agent may use, and a response style.",
      fr: "Sources, outils que l'agent peut utiliser et style de réponse.",
    },
    distractors: [
      { en: "Only a static FAQ PDF — agents cannot call tools or change tone.", fr: "Uniquement un PDF FAQ statique : les agents ne peuvent pas appeler d'outils ni changer de ton." },
      { en: "A mandatory Python controller that replaces the entire Helpdesk app.", fr: "Un contrôleur Python obligatoire qui remplace l'intégralité de l'application Helpdesk." },
      { en: "Exclusive WhatsApp credentials; other channels are unsupported.", fr: "Identifiants WhatsApp exclusifs ; les autres chaînes ne sont pas prises en charge." },
    ],
    explanation: {
      en: "AI Agents tutorial: assign sources, define tools, and set a response style.",
      fr: "Tutoriel AI Agents : attribuez des sources, définissez des outils et définissez un style de réponse.",
    },
  }),
complexQ({
    id: "aib-002",
    module: "ai-business-cases",
    text: {
      en: "How do you expose an AI Agent on the website live chat? (Odoo Learn — AI Business Cases)",
      fr: "Comment exposer un agent IA sur le chat en direct du site Web ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Configure an AI agent for Live Chat, then add that agent to a Live Chat channel.",
      fr: "Configurez un agent IA pour Live Chat, puis ajoutez cet agent à un canal Live Chat.",
    },
    distractors: [
      { en: "Publish the agent as a public Spreadsheet dashboard widget only.", fr: "Publiez l'agent uniquement en tant que widget de tableau de bord de feuille de calcul public." },
      { en: "Enable Studio on the homepage and drag an AI field onto the footer.", fr: "Activez Studio sur la page d'accueil et faites glisser un champ AI sur le pied de page." },
      { en: "Upload the agent prompt into Accounting > Journals.", fr: "Téléchargez l'invite de l'agent dans Comptabilité > Journaux." },
    ],
    explanation: {
      en: "AI Live Chat: configure an agent for Live chat and add it to a Live Chat channel.",
      fr: "AI Live Chat : configurez un agent pour le chat en direct et ajoutez-le à un canal de chat en direct.",
    },
  }),
complexQ({
    id: "aib-003",
    module: "ai-business-cases",
    text: {
      en: "What do AI-enabled fields help you do in Odoo? (Odoo Learn — AI Business Cases)",
      fr: "Qu'est-ce que les champs activés par l'IA vous aident à faire dans Odoo ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Create and utilize fields whose values can be generated or enriched by AI prompts.",
      fr: "Créez et utilisez des champs dont les valeurs peuvent être générées ou enrichies par des invites d'IA.",
    },
    distractors: [
      { en: "Replace every relational many2one with a free-text chat transcript.", fr: "Remplacez chaque many2one relationnel par une transcription de discussion en texte libre." },
      { en: "Disable record rules so AI can edit any company record.", fr: "Désactivez les règles d'enregistrement afin que l'IA puisse modifier n'importe quel enregistrement d'entreprise." },
      { en: "Convert binary attachments into encrypted blockchain hashes only.", fr: "Convertissez les pièces jointes binaires uniquement en hachages de blockchain cryptés." },
    ],
    explanation: {
      en: "AI Fields video: learn how to create and utilize AI enabled fields in Odoo.",
      fr: "Vidéo AI Fields : découvrez comment créer et utiliser des champs activés par l'IA dans Odoo.",
    },
  }),
complexQ({
    id: "aib-004",
    module: "ai-business-cases",
    text: {
      en: "In the proximity-based warehouse selection use case, what does AI help decide? (Odoo Learn — AI Business Cases)",
      fr: "Dans le cas d’utilisation de la sélection d’entrepôt basée sur la proximité, qu’est-ce que l’IA aide à décider ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Which warehouse is closest to the customer's delivery address for Sales and eCommerce flows.",
      fr: "Quel entrepôt est le plus proche de l'adresse de livraison du client pour les flux Ventes et eCommerce.",
    },
    distractors: [
      { en: "Which fiscal position to apply based on the customer's VAT number only.", fr: "Quelle position fiscale appliquer en fonction du numéro de TVA du client uniquement." },
      { en: "Which barcode symbology to print for each product packaging.", fr: "Quelle symbologie de code-barres imprimer pour chaque emballage de produit." },
      { en: "Which payroll structure fits the employee's contract type.", fr: "Quelle structure de paie correspond au type de contrat de l'employé." },
    ],
    explanation: {
      en: "Proximity-Based Warehouse Selection: use AI to pick the closest warehouse to the delivery address.",
      fr: "Sélection d'entrepôt basée sur la proximité : utilisez l'IA pour sélectionner l'entrepôt le plus proche de l'adresse de livraison.",
    },
  }),
complexQ({
    id: "aib-005",
    module: "ai-business-cases",
    text: {
      en: "What is the goal of the AI Helpdesk ticket routing business case? (Odoo Learn — AI Business Cases)",
      fr: "Quel est l’objectif de l’analyse de rentabilisation du routage des tickets d’AI Helpdesk ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Route incoming helpdesk tickets automatically using AI based on ticket content.",
      fr: "Acheminez automatiquement les tickets d’assistance entrants à l’aide de l’IA en fonction du contenu du ticket.",
    },
    distractors: [
      { en: "Delete tickets older than 24 hours without agent review.", fr: "Supprimez les tickets datant de plus de 24 heures sans examen par l'agent." },
      { en: "Convert every ticket into a manufacturing order by default.", fr: "Convertissez chaque ticket en ordre de fabrication par défaut." },
      { en: "Force all tickets into the Accounting audit trail.", fr: "Forcez tous les tickets à entrer dans la piste d’audit comptable." },
    ],
    explanation: {
      en: "AI Helpdesk Ticket Routing demonstrates intelligent assignment from ticket content.",
      fr: "AI Helpdesk Ticket Routing démontre une affectation intelligente à partir du contenu du ticket.",
    },
  }),
complexQ({
    id: "aib-006",
    module: "ai-business-cases",
    text: {
      en: "What does the vendor performance use case analyze with AI? (Odoo Learn — AI Business Cases)",
      fr: "Qu’analyse le cas d’utilisation des performances du fournisseur avec l’IA ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Vendor performance based on quality alerts.",
      fr: "Performance des fournisseurs basée sur des alertes qualité.",
    },
    distractors: [
      { en: "Only the vendor's bank IBAN format validity.", fr: "Seule la validité du format IBAN bancaire du vendeur." },
      { en: "The number of Studio automations installed on Purchase.", fr: "Le nombre d'automatisations Studio installées lors de l'achat." },
      { en: "Whether the vendor portal theme matches the company colors.", fr: "Si le thème du portail des fournisseurs correspond aux couleurs de l'entreprise." },
    ],
    explanation: {
      en: "Vendor Performance Based on Quality Alerts use case.",
      fr: "Performance du fournisseur basée sur le cas d’utilisation des alertes qualité.",
    },
  }),
complexQ({
    id: "aib-007",
    module: "ai-business-cases",
    text: {
      en: "What problem does Target-Margin Auto Pricing address? (Odoo Learn — AI Business Cases)",
      fr: "Quel problème la tarification automatique à marge cible résout-elle ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Automatically adjusting prices to hit a target margin with AI assistance.",
      fr: "Ajustement automatique des prix pour atteindre une marge cible avec l'assistance de l'IA.",
    },
    distractors: [
      { en: "Printing shelf labels when the barcode scanner battery is low.", fr: "Impression d'étiquettes d'étagère lorsque la batterie du lecteur de codes-barres est faible." },
      { en: "Scheduling fleet vehicles without GPS data.", fr: "Planification des véhicules de la flotte sans données GPS." },
      { en: "Closing fiscal years without generating tax reports.", fr: "Clôture des exercices fiscaux sans générer de rapports fiscaux." },
    ],
    explanation: {
      en: "Target-Margin Auto Pricing business case.",
      fr: "Analyse de rentabilisation de la tarification automatique à marge cible.",
    },
  }),
complexQ({
    id: "aib-008",
    module: "ai-business-cases",
    text: {
      en: "What can AI Document Sorting automate? (Odoo Learn — AI Business Cases)",
      fr: "Que peut automatiser le tri des documents AI ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Classifying and sorting incoming documents with AI.",
      fr: "Classer et trier les documents entrants avec l'IA.",
    },
    distractors: [
      { en: "Physically moving paper binders between office floors.", fr: "Déplacer physiquement les classeurs papier entre les étages des bureaux." },
      { en: "Replacing the entire Documents app with a single spreadsheet.", fr: "Remplacement de l'intégralité de l'application Documents par une seule feuille de calcul." },
      { en: "Disabling PDF preview for all internal users permanently.", fr: "Désactivation permanente de l'aperçu PDF pour tous les utilisateurs internes." },
    ],
    explanation: {
      en: "AI Document Sorting use case.",
      fr: "Cas d'utilisation du tri de documents AI.",
    },
  }),
complexQ({
    id: "aib-009",
    module: "ai-business-cases",
    text: {
      en: "What does AI-Powered Applicant Screening focus on? (Odoo Learn — AI Business Cases)",
      fr: "Sur quoi se concentre la sélection des candidats basée sur l’IA ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Screening recruitment applicants with AI assistance.",
      fr: "Sélection des candidats au recrutement avec l’aide de l’IA.",
    },
    distractors: [
      { en: "Generating payslips before contracts are signed.", fr: "Générer des fiches de paie avant la signature des contrats." },
      { en: "Creating barcodes for badge printers only.", fr: "Création de codes-barres pour les imprimantes de badges uniquement." },
      { en: "Merging all CRM stages into a single Won stage.", fr: "Fusion de toutes les étapes CRM en une seule étape Gagnée." },
    ],
    explanation: {
      en: "AI-Powered Applicant Screening business case.",
      fr: "Analyse de rentabilisation pour la sélection des candidats basée sur l'IA.",
    },
  }),
complexQ({
    id: "aib-010",
    module: "ai-business-cases",
    text: {
      en: "What does \"Vibe Check CRM Leads using AI\" illustrate? (Odoo Learn — AI Business Cases)",
      fr: "Qu'illustre « Vibe Check CRM Leads using AI » ? (Odoo Learn – Cas d'usage IA)",
    },
    correct: {
      en: "Using AI to assess or enrich CRM leads (a practical lead-quality / scoring style workflow).",
      fr: "Utiliser l'IA pour évaluer ou enrichir les leads CRM (un workflow pratique de qualité des leads/de style de notation).",
    },
    distractors: [
      { en: "Deleting every lead that has no phone number within one minute.", fr: "Suppression de chaque prospect sans numéro de téléphone en une minute." },
      { en: "Exporting the CRM pipeline exclusively to a paper report.", fr: "Exportation du pipeline CRM exclusivement vers un rapport papier." },
      { en: "Replacing opportunities with Point of Sale orders automatically.", fr: "Remplacement automatique des opportunités par des commandes au point de vente." },
    ],
    explanation: {
      en: "Vibe Check CRM Leads using AI business case from Odoo AI Business Cases.",
      fr: "Vibe Check CRM Leads à l’aide de l’analyse de rentabilisation IA d’Odoo AI Business Cases.",
    },
  }),
];
