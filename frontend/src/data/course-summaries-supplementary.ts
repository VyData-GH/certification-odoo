import { SupplementaryModuleId } from "@/types/exam";
import { CourseSummary } from "./course-summaries";

export const SUPPLEMENTARY_COURSE_SUMMARIES: Record<
  SupplementaryModuleId,
  CourseSummary
> = {
  sign: {
    readMinutes: 3,
    overview: {
      en: "Odoo Sign: send documents for e-signature, templates, envelopes, and signer authentication.",
      fr: "Odoo Sign : envoi de documents à signer, modèles, enveloppes et authentification des signataires.",
    },
    quickFlow: {
      en: [
        "Upload PDF or use template → place signature fields",
        "Add signers → send request (envelope)",
        "Signers complete → signed copy stored in Sign/Documents",
      ],
      fr: [
        "Importer PDF ou modèle → placer les champs signature",
        "Ajouter signataires → envoyer la demande (enveloppe)",
        "Signataires signent → copie signée stockée dans Sign/Documents",
      ],
    },
    keyTopics: {
      en: [
        "Templates for NDAs, contracts, reusable documents",
        "Envelope = multiple documents sent together",
        "Field types and Configuration > Edit Field Types",
        "SMS / itsme authentication (IAP credits)",
        "Integration with Documents app",
      ],
      fr: [
        "Modèles pour NDA, contrats, documents réutilisables",
        "Enveloppe = plusieurs documents envoyés ensemble",
        "Types de champs et Configuration > Edit Field Types",
        "Authentification SMS / itsme (crédits IAP)",
        "Intégration avec l'app Documents",
      ],
    },
    mustKnow: {
      en: [
        "Templates are in Documents dashboard > Templates",
        "Multiple docs in one send = envelope",
        "Custom fields configured under Configuration",
      ],
      fr: [
        "Les modèles sont dans Documents > Templates",
        "Plusieurs docs en un envoi = enveloppe",
        "Champs personnalisés dans Configuration",
      ],
    },
  },
  "global-settings": {
    readMinutes: 3,
    overview: {
      en: "Global settings and access rights: multi-company, users, groups, and record rules basics.",
      fr: "Paramètres globaux et droits d'accès : multi-société, utilisateurs, groupes et règles d'enregistrement.",
    },
    quickFlow: {
      en: [
        "Settings app → enable features per company",
        "Users & Companies → assign groups",
        "Test access with user switch or rules",
      ],
      fr: [
        "App Paramètres → activer les fonctionnalités par société",
        "Utilisateurs et sociétés → assigner les groupes",
        "Tester les accès par changement d'utilisateur",
      ],
    },
    keyTopics: {
      en: [
        "Access rights via security groups",
        "Multi-company isolation and shared records",
        "Record rules (domain filters per group)",
        "Developer mode for technical menus",
      ],
      fr: [
        "Droits d'accès via groupes de sécurité",
        "Isolation multi-société et enregistrements partagés",
        "Règles d'enregistrement (filtres domaine par groupe)",
        "Mode développeur pour menus techniques",
      ],
    },
    mustKnow: {
      en: [
        "Groups grant menu + model access",
        "Record rules further restrict rows",
        "Multi-company fields on partners/products matter",
      ],
      fr: [
        "Les groupes donnent accès menus + modèles",
        "Les règles restreignent les lignes",
        "Champs multi-société sur partenaires/produits",
      ],
    },
  },
  documents: {
    readMinutes: 3,
    overview: {
      en: "Documents workspace: store files, workflow actions, and accounting integration.",
      fr: "Espace Documents : stocker fichiers, actions workflow et intégration comptable.",
    },
    quickFlow: {
      en: [
        "Enable Documents workspace (e.g. Accounting)",
        "Upload or email-in documents → tag/organize",
        "Workflow action → create bill/PO or sign request",
      ],
      fr: [
        "Activer l'espace Documents (ex. Comptabilité)",
        "Importer ou recevoir par e-mail → classer",
        "Action workflow → créer facture/BC ou demande Sign",
      ],
    },
    keyTopics: {
      en: [
        "Accounting workspace integration",
        "Workflow actions on PDFs",
        "Vendor bill creation from document",
        "Folders, tags, and activities",
      ],
      fr: [
        "Intégration espace Comptabilité",
        "Actions workflow sur PDF",
        "Création facture fournisseur depuis document",
        "Dossiers, étiquettes et activités",
      ],
    },
    mustKnow: {
      en: [
        "Enable Accounting workspace in Documents settings",
        "Workflow actions automate AP processing",
      ],
      fr: [
        "Activer l'espace Comptabilité dans les paramètres Documents",
        "Les actions workflow automatisent le traitement fournisseur",
      ],
    },
  },
  elearning: {
    readMinutes: 3,
    overview: {
      en: "eLearning app: publish courses, sections, quizzes, karma, and enrollment policies.",
      fr: "App eLearning : publier cours, sections, quiz, karma et politiques d'inscription.",
    },
    quickFlow: {
      en: [
        "Create course → add content sections and quizzes",
        "Set enrollment (open, invite, payment)",
        "Publish on website / sell via eCommerce",
      ],
      fr: [
        "Créer cours → sections et quiz",
        "Définir inscription (ouvert, invitation, paiement)",
        "Publier sur le site / vendre via eCommerce",
      ],
    },
    keyTopics: {
      en: [
        "Tags for course discovery",
        "List view for bulk actions",
        "Karma gamification tab",
        "Enrollment: Open, On Invitation, On Payment",
      ],
      fr: [
        "Étiquettes pour retrouver les cours",
        "Vue liste pour actions en masse",
        "Onglet Karma (gamification)",
        "Inscription : Ouvert, Sur invitation, Payant",
      ],
    },
    mustKnow: {
      en: [
        "Tags categorize courses for students",
        "Karma rewards engagement",
        "On Payment requires eCommerce product",
      ],
      fr: [
        "Les étiquettes catégorisent les cours",
        "Le Karma récompense l'engagement",
        "Payant nécessite un produit eCommerce",
      ],
    },
  },
  planning: {
    readMinutes: 3,
    overview: {
      en: "Planning app: schedule shifts, assign employees, switch/unassign shifts on the calendar.",
      fr: "App Planning : planifier créneaux, assigner employés, échanger ou désassigner.",
    },
    quickFlow: {
      en: [
        "Create planning slot / shift on calendar",
        "Assign employee(s) to shift",
        "Publish schedule → employees see shifts",
      ],
      fr: [
        "Créer un créneau sur le calendrier",
        "Assigner employé(s)",
        "Publier le planning",
      ],
    },
    keyTopics: {
      en: [
        "Shift creation and templates",
        "Employee assignment and roles",
        "Switch shifts between employees",
        "Unassign and open shifts",
      ],
      fr: [
        "Création de créneaux et modèles",
        "Assignation employés et rôles",
        "Échange de créneaux",
        "Désassignation et créneaux ouverts",
      ],
    },
    mustKnow: {
      en: [
        "Shifts can be open until assigned",
        "Switching swaps two employees' shifts",
      ],
      fr: [
        "Les créneaux peuvent rester ouverts",
        "L'échange permute deux employés",
      ],
    },
  },
  rental: {
    readMinutes: 4,
    overview: {
      en: "Rental orders: configure rental products, pricing rules, pickup/return, and status tracking.",
      fr: "Location : produits locatifs, règles de prix, retrait/retour et suivi des statuts.",
    },
    quickFlow: {
      en: [
        "Configure product as rental with pricing rules",
        "Create rental order → confirm",
        "Pickup → return → update pricing if period changes",
      ],
      fr: [
        "Configurer produit locatif et tarifs",
        "Créer commande location → confirmer",
        "Retrait → retour → ajuster si période change",
      ],
    },
    keyTopics: {
      en: [
        "Rental product configuration",
        "Pricing rules by duration (cheapest covering period)",
        "Statuses: reserved, picked up, returned",
        "To Do Today filter on dashboard",
        "Hotel booking use case",
      ],
      fr: [
        "Configuration produit locatif",
        "Règles de prix par durée (meilleure couverture)",
        "Statuts : réservé, retiré, retourné",
        "Filtre À faire aujourd'hui",
        "Cas réservation hôtelière",
      ],
    },
    mustKnow: {
      en: [
        "Changing rental period may need price update button",
        "Pricing picks rule that best covers duration",
        "To Do Today shows due pickups/returns",
      ],
      fr: [
        "Changer la période peut nécessiter mise à jour des prix",
        "Le prix choisit la règle couvrant la durée",
        "À faire aujourd'hui = retraits/retours du jour",
      ],
    },
  },
  subscription: {
    readMinutes: 4,
    overview: {
      en: "Subscriptions: recurring sales, renewal, upsell, MRR reports, and customer self-service.",
      fr: "Abonnements : ventes récurrentes, renouvellement, upsell, MRR et portail client.",
    },
    quickFlow: {
      en: [
        "Create subscription product with recurring pricing",
        "Confirm subscription → automatic invoicing",
        "Renew / upsell / close → reports update",
      ],
      fr: [
        "Produit abonnement avec tarif récurrent",
        "Confirmer → facturation automatique",
        "Renouveler / upsell / clôturer → reporting",
      ],
    },
    keyTopics: {
      en: [
        "Subscription templates and products",
        "Renewal and closing workflows",
        "Upsell and add options mid-contract",
        "Automation rules and scheduled actions",
        "MRR and behavioral reports",
        "Self-service portal changes",
        "Subscriptions with stock deliveries",
      ],
      fr: [
        "Modèles et produits d'abonnement",
        "Renouvellement et clôture",
        "Upsell en cours de contrat",
        "Règles d'automation et actions planifiées",
        "Rapports MRR et comportementaux",
        "Modifications via portail client",
        "Abonnements avec livraisons stock",
      ],
    },
    mustKnow: {
      en: [
        "MRR tracks monthly recurring revenue",
        "Self-service lets customers upgrade/cancel per rules",
        "Scheduled actions automate billing events",
      ],
      fr: [
        "Le MRR suit le revenu récurrent mensuel",
        "Le self-service permet upgrade/résiliation selon règles",
        "Les actions planifiées automatisent la facturation",
      ],
    },
  },
  barcode: {
    readMinutes: 4,
    overview: {
      en: "Barcode app: scan products, receipts, deliveries, inventory, MOs, and packaging with mobile/scanner.",
      fr: "Code-barres : scanner produits, réceptions, livraisons, inventaire, OF et colisage.",
    },
    quickFlow: {
      en: [
        "Configure barcodes on products/locations",
        "Open Barcode app → scan operation type",
        "Validate transfer or adjustment via scans",
      ],
      fr: [
        "Configurer codes sur produits/emplacements",
        "Ouvrir app Code-barres → type d'opération",
        "Valider transfert ou ajustement par scan",
      ],
    },
    keyTopics: {
      en: [
        "Barcode nomenclature and printing",
        "Barcode commands in operations",
        "PoS product scanning",
        "Receipts and delivery scanning",
        "Inventory adjustments and internal transfers",
        "Lot/serial reserved picking",
        "Packaging barcodes",
        "MO process/cancel and component consumption",
      ],
      fr: [
        "Nomenclature et impression codes-barres",
        "Commandes code-barres en opérations",
        "Scan produits au PdV",
        "Scan réceptions et livraisons",
        "Ajustements et transferts internes",
        "Prélèvement lots/séries réservés",
        "Codes sur conditionnements",
        "OF et consommation composants",
      ],
    },
    mustKnow: {
      en: [
        "Each operation type can have barcode interface",
        "Scan validates quantiles step by step",
        "Packaging barcodes speed bulk picking",
      ],
      fr: [
        "Chaque type d'opération a une interface code-barres",
        "Le scan valide étape par étape",
        "Les codes colisage accélèrent le prélèvement",
      ],
    },
  },
  "field-service": {
    readMinutes: 4,
    overview: {
      en: "Field Service (FSM): on-site tasks, planning, worksheets, products used, and maps.",
      fr: "Services sur site (FSM) : interventions terrain, planning, feuilles de travail et cartes.",
    },
    quickFlow: {
      en: [
        "Create FSM task → schedule & assign",
        "Technician completes worksheet on site",
        "Invoice materials/time → mark done",
      ],
      fr: [
        "Créer tâche FSM → planifier et assigner",
        "Technicien remplit la feuille de travail",
        "Facturer consommables/temps → terminer",
      ],
    },
    keyTopics: {
      en: [
        "First field service task workflow",
        "Planning tasks on calendar/map",
        "Product consumption on tasks",
        "Custom worksheets (checklists, signatures)",
        "Map view and routing",
      ],
      fr: [
        "Première tâche services sur site",
        "Planification calendrier/carte",
        "Consommation produits sur tâche",
        "Feuilles de travail personnalisées",
        "Vue carte et itinéraires",
      ],
    },
    mustKnow: {
      en: [
        "FSM tasks link to Project/Sales for billing",
        "Worksheets are customizable per task type",
        "Map view needs geo-enabled addresses",
      ],
      fr: [
        "Les tâches FSM se lient Projet/Ventes pour facturation",
        "Feuilles de travail personnalisables par type",
        "La carte nécessite adresses géolocalisées",
      ],
    },
  },
  iot: {
    readMinutes: 4,
    overview: {
      en: "IoT Box connects devices (scales, printers, payment terminals) to Odoo via local bridge.",
      fr: "IoT Box connecte balances, imprimantes et terminaux paiement à Odoo via passerelle locale.",
    },
    quickFlow: {
      en: [
        "Pair IoT box with database token",
        "Connect devices to box (USB/network)",
        "Odoo apps use devices (POS, MRP, Inventory)",
      ],
      fr: [
        "Appairer IoT Box avec jeton base",
        "Connecter appareils à la box",
        "Apps Odoo utilisent les périphériques",
      ],
    },
    keyTopics: {
      en: [
        "IoT box setup Wi-Fi / Ethernet",
        "Server token pairing",
        "HTTPS certificate requirements",
        "Windows Virtual IoT box",
        "Connecting measurement devices and printers",
        "Flash image and advanced config",
      ],
      fr: [
        "Config IoT Box Wi-Fi / Ethernet",
        "Appairage jeton serveur",
        "Certificat HTTPS",
        "IoT virtuel Windows",
        "Connexion balances et imprimantes",
        "Flash image et config avancée",
      ],
    },
    mustKnow: {
      en: [
        "Token pasted in IoT module Connect flow",
        "Wi-Fi configured at setup or remote console",
        "Windows IoT emulates physical box on PC",
      ],
      fr: [
        "Jeton collé dans module IoT > Connecter",
        "Wi-Fi à la config initiale ou console distante",
        "IoT Windows émule la box sur PC",
      ],
    },
  },
  appointments: {
    readMinutes: 3,
    overview: {
      en: "Appointments: online booking pages, staff availability, and CRM opportunity creation.",
      fr: "Rendez-vous : prise de RDV en ligne, disponibilités et création d'opportunités CRM.",
    },
    quickFlow: {
      en: [
        "Configure appointment type & availability",
        "Share booking link on website/email",
        "Meeting creates calendar event + optional CRM lead",
      ],
      fr: [
        "Configurer type de RDV et disponibilités",
        "Partager lien de réservation",
        "RDV crée événement calendrier + piste CRM optionnelle",
      ],
    },
    keyTopics: {
      en: [
        "Appointment types and durations",
        "Staff resources and slots",
        "Flexible scheduling rules",
        "CRM opportunity from booking",
        "Website integration",
      ],
      fr: [
        "Types et durées de rendez-vous",
        "Ressources et créneaux",
        "Planification flexible",
        "Opportunité CRM depuis réservation",
        "Intégration site web",
      ],
    },
    mustKnow: {
      en: [
        "Each appointment type has its own URL",
        "Availability respects user calendars",
        "Can auto-create CRM opportunities",
      ],
      fr: [
        "Chaque type a sa propre URL",
        "Disponibilités selon calendriers utilisateurs",
        "Peut créer automatiquement des opportunités CRM",
      ],
    },
  },
  plm: {
    readMinutes: 3,
    overview: {
      en: "PLM manages engineering changes (ECO), BOM versions, and approval workflows on products.",
      fr: "PLM gère les modifications techniques (ECO), versions de nomenclatures et validations.",
    },
    quickFlow: {
      en: [
        "Create Engineering Change Order (ECO)",
        "Apply BOM/product changes in ECO",
        "Approval workflow → apply to manufacturing",
      ],
      fr: [
        "Créer un ordre de modification (ECO)",
        "Appliquer changements nomenclature/produit",
        "Validation → mise en production",
      ],
    },
    keyTopics: {
      en: [
        "ECO types and stages",
        "BOM version comparison",
        "Approval rules on ECO",
        "Apply changes to active BOM",
        "PLM linked with Manufacturing",
      ],
      fr: [
        "Types et étapes d'ECO",
        "Comparaison versions nomenclature",
        "Règles d'approbation ECO",
        "Application sur nomenclature active",
        "Lien avec Fabrication",
      ],
    },
    mustKnow: {
      en: [
        "ECO must be approved before applying changes",
        "BOM versions track engineering history",
        "PLM extends MRP with change control",
      ],
      fr: [
        "L'ECO doit être approuvé avant application",
        "Les versions nomenclature tracent l'historique",
        "PLM étend la fabrication avec contrôle des changements",
      ],
    },
  },
  events: {
    readMinutes: 4,
    overview: {
      en: "Odoo Events: publish events, manage tracks, booths, attendance, and lead generation.",
      fr: "Odoo Événements : publier des événements, gérer tracks, stands, présence et génération de leads.",
    },
    quickFlow: {
      en: [
        "Create event → configure tickets and registration",
        "Add tracks / exhibitors / rooms as needed",
        "Check-in attendees → follow up leads and reporting",
      ],
      fr: [
        "Créer l'événement → configurer billets et inscriptions",
        "Ajouter tracks / exposants / salles selon le besoin",
        "Pointer les participants → leads et reporting",
      ],
    },
    keyTopics: {
      en: [
        "Event templates and SEO-friendly publishing",
        "Tracks, talk proposals, speaker communication",
        "Barcode attendance and multi-slot events",
        "Online exhibitors, booths, community rooms",
        "Live broadcast, gamification, lead generation",
      ],
      fr: [
        "Modèles d'événements et publication SEO",
        "Tracks, propositions de talks, communication speakers",
        "Présence par code-barres et multi-créneaux",
        "Exposants en ligne, stands, salles communautaires",
        "Diffusion live, gamification, génération de leads",
      ],
    },
    mustKnow: {
      en: [
        "Registration and tickets drive attendee records",
        "Tracks organize the agenda; booths are for exhibitors",
        "Attendance can be scanned via barcode",
      ],
      fr: [
        "Inscriptions et billets créent les participants",
        "Les tracks organisent l'agenda ; les stands sont pour exposants",
        "La présence peut être scannée via code-barres",
      ],
    },
  },
  helpdesk: {
    readMinutes: 5,
    overview: {
      en: "Helpdesk: teams, tickets, SLAs, live chat, help center, and after-sales billing of time.",
      fr: "Helpdesk : équipes, tickets, SLA, live chat, centre d'aide et facturation du temps après-vente.",
    },
    quickFlow: {
      en: [
        "Configure Helpdesk team → stages and SLA policies",
        "Receive tickets (email, website, live chat)",
        "Resolve → optional timesheets / ratings / help center",
      ],
      fr: [
        "Configurer l'équipe Helpdesk → étapes et politiques SLA",
        "Recevoir les tickets (e-mail, site, live chat)",
        "Résoudre → feuilles de temps / notes / centre d'aide",
      ],
    },
    keyTopics: {
      en: [
        "Teams, stages, and ticket channels",
        "SLA policies and inactive ticket handling",
        "Live chat, chatbot, visitor tracking",
        "Customer ratings and after-sales features",
        "Help Center: eLearning, Forums, Knowledge",
      ],
      fr: [
        "Équipes, étapes et canaux de tickets",
        "Politiques SLA et tickets inactifs",
        "Live chat, chatbot, suivi des visiteurs",
        "Notes clients et fonctions après-vente",
        "Centre d'aide : eLearning, Forums, Knowledge",
      ],
    },
    mustKnow: {
      en: [
        "SLAs measure response/resolution against team policies",
        "Live chat can hand off to tickets or sales orders",
        "Track & bill time links Helpdesk to Timesheets",
      ],
      fr: [
        "Les SLA mesurent réponse/résolution selon l'équipe",
        "Le live chat peut basculer vers tickets ou commandes",
        "Suivi & facturation du temps lie Helpdesk aux feuilles de temps",
      ],
    },
  },
  voip: {
    readMinutes: 4,
    overview: {
      en: "Odoo VoIP: make/receive calls, queues, voicemail, Axivox setup, and CRM/support workflows.",
      fr: "Odoo VoIP : appels entrants/sortants, files, messagerie, setup Axivox et flux CRM/support.",
    },
    quickFlow: {
      en: [
        "Configure VoIP provider (e.g. Axivox) → devices",
        "Call from CRM/Helpdesk → log activity",
        "Use queues, transfer, voicemail as needed",
      ],
      fr: [
        "Configurer le fournisseur VoIP (ex. Axivox) → appareils",
        "Appeler depuis CRM/Helpdesk → journaliser l'activité",
        "Utiliser files, transfert, messagerie selon le besoin",
      ],
    },
    keyTopics: {
      en: [
        "Sales calls and support agent workflows",
        "Axivox / provider setup and devices",
        "Transfer, forward, voicemail, audio messages",
        "Call queues and dynamic caller ID",
      ],
      fr: [
        "Appels commerciaux et flux agent support",
        "Configuration Axivox / fournisseur et appareils",
        "Transfert, renvoi, messagerie, messages audio",
        "Files d'attente et Caller ID dynamique",
      ],
    },
    mustKnow: {
      en: [
        "VoIP integrates with CRM opportunities and Helpdesk",
        "Queues distribute inbound calls to agents",
        "Devices and integrations are configured per user/company",
      ],
      fr: [
        "Le VoIP s'intègre aux opportunités CRM et au Helpdesk",
        "Les files distribuent les appels entrants aux agents",
        "Appareils et intégrations se configurent par utilisateur/société",
      ],
    },
  },
  "business-cases": {
    readMinutes: 4,
    overview: {
      en: "Business case studies: branded products, manufacturing, logistics — apply Odoo across apps.",
      fr: "Cas métier : produits de marque, fabrication, logistique — appliquer Odoo transversalement.",
    },
    quickFlow: {
      en: [
        "Read the business scenario",
        "Map needs to Odoo apps (Sales, Inventory, MRP…)",
        "Identify the configuration and process steps",
      ],
      fr: [
        "Lire le scénario métier",
        "Mapper les besoins aux apps Odoo (Ventes, Stock, MRP…)",
        "Identifier configuration et étapes de processus",
      ],
    },
    keyTopics: {
      en: [
        "Branded T-shirts case",
        "Motorcycle company case",
        "TecPro 2.0 case & solution",
        "Superstar Logistic case",
      ],
      fr: [
        "Cas T-shirts de marque",
        "Cas société de motos",
        "Cas TecPro 2.0 et solution",
        "Cas Superstar Logistic",
      ],
    },
    mustKnow: {
      en: [
        "Cases test end-to-end thinking, not a single menu",
        "Focus on which app owns the master data vs transactions",
      ],
      fr: [
        "Les cas testent une vision bout-en-bout, pas un seul menu",
        "Repérer quelle app porte les données maîtres vs les transactions",
      ],
    },
  },
  "technical-training": {
    readMinutes: 5,
    overview: {
      en: "Technical Training: Odoo modules, ORM, fields, views, actions, security, and ordering basics.",
      fr: "Formation technique : modules Odoo, ORM, champs, vues, actions, sécurité et tris.",
    },
    quickFlow: {
      en: [
        "Create/extend a module → models & fields",
        "Define views and actions",
        "Add security (ACL / record rules) → test",
      ],
      fr: [
        "Créer/étendre un module → modèles et champs",
        "Définir vues et actions",
        "Ajouter la sécurité (ACL / règles) → tester",
      ],
    },
    keyTopics: {
      en: [
        "Module structure and composition",
        "ORM models, fields, and attributes",
        "Buttons, actions, widgets",
        "SQL constraints and security basics",
        "List/search view attributes and ordering",
      ],
      fr: [
        "Structure et composition d'un module",
        "Modèles ORM, champs et attributs",
        "Boutons, actions, widgets",
        "Contraintes SQL et bases de sécurité",
        "Attributs vues liste/recherche et tris",
      ],
    },
    mustKnow: {
      en: [
        "A module packages models, views, data, and security",
        "Fields have attributes (required, readonly, related…)",
        "Actions link menus/buttons to windows or server logic",
      ],
      fr: [
        "Un module regroupe modèles, vues, data et sécurité",
        "Les champs ont des attributs (required, readonly, related…)",
        "Les actions lient menus/boutons aux fenêtres ou au serveur",
      ],
    },
  },
};
