import { ModuleId } from "@/types/exam";

export interface CourseSummary {
  overview: { en: string; fr: string };
  keyTopics: { en: string[]; fr: string[] };
  examTips: { en: string[]; fr: string[] };
}

export const COURSE_SUMMARIES: Record<ModuleId, CourseSummary> = {
  crm: {
    overview: {
      en: "Manage the full sales cycle: leads, opportunities, pipeline stages, activities, and marketing attribution.",
      fr: "Gérez le cycle commercial complet : pistes, opportunités, étapes du pipeline, activités et attribution marketing.",
    },
    keyTopics: {
      en: [
        "Lead vs opportunity, pipeline stages and probabilities",
        "Sales teams, assignment rules, and lead scoring",
        "Activities, activity plans, and automations",
        "Lead generation: forms, email aliases, mining, enrichment",
        "Won/lost reasons, reporting, and mailbox plugins",
      ],
      fr: [
        "Piste vs opportunité, étapes du pipeline et probabilités",
        "Équipes commerciales, règles d'assignation et scoring",
        "Activités, plans d'activités et automatisations",
        "Génération de pistes : formulaires, alias e-mail, mining, enrichissement",
        "Motifs gagné/perdu, reporting et plugins messagerie",
      ],
    },
    examTips: {
      en: [
        "Know when a record is a lead vs an opportunity",
        "Predictive lead scoring uses historical won/lost data",
      ],
      fr: [
        "Savoir quand un enregistrement est une piste ou une opportunité",
        "Le scoring prédictif s'appuie sur l'historique gagné/perdu",
      ],
    },
  },
  sales: {
    overview: {
      en: "Quotations, sales orders, delivery/invoicing policies, pricelists, discounts, and taxes.",
      fr: "Devis, commandes, politiques de livraison/facturation, listes de prix, remises et taxes.",
    },
    keyTopics: {
      en: [
        "Quotation → SO workflow, online quotation, PDF quote builder",
        "Invoicing policy: ordered qty vs delivered qty",
        "Product variants, optional products, and quotation templates",
        "Pricelists, coupons, loyalty, gift cards, commissions",
        "Delivery methods, lead times, dropshipping",
      ],
      fr: [
        "Flux devis → commande, devis en ligne, PDF quote builder",
        "Politique de facturation : quantités commandées vs livrées",
        "Variantes produit, produits optionnels et modèles de devis",
        "Listes de prix, coupons, fidélité, cartes cadeaux, commissions",
        "Modes de livraison, délais et dropshipping",
      ],
    },
    examTips: {
      en: ["A product must be salable to appear on a quotation", "Down payment and milestone invoicing differ from full invoice"],
      fr: ["Un produit doit être vendable pour apparaître sur un devis", "Acompte et facturation par jalons ≠ facture complète"],
    },
  },
  purchases: {
    overview: {
      en: "RFQ to PO flow, vendor pricelists, reordering rules, blanket orders, and bill control.",
      fr: "Flux RFQ → bon de commande, tarifs fournisseurs, règles de réapprovisionnement, contrats-cadres et contrôle factures.",
    },
    keyTopics: {
      en: [
        "RFQ, PO confirmation, and receipt flow",
        "Vendor pricelists and quantity-based pricing",
        "Reordering rules (min/max, MTO trigger)",
        "Blanket orders, purchase agreements, calls for tender",
        "Bill control: ordered vs received quantities",
      ],
      fr: [
        "Demande de prix, confirmation BC et réception",
        "Tarifs fournisseurs et prix par quantité",
        "Règles de réapprovisionnement (min/max, déclencheur MTO)",
        "Contrats-cadres, accords d'achat, appels d'offres",
        "Contrôle facture : quantités commandées vs reçues",
      ],
    },
    examTips: {
      en: ["Reordering rules order up to max when stock falls below min", "IAP credits for digitization ≠ prospect generation credits"],
      fr: ["Les règles min/max commandent jusqu'au maximum quand le stock passe sous le minimum", "Crédits IAP numérisation ≠ crédits génération de pistes"],
    },
  },
  accounting: {
    overview: {
      en: "Customer/vendor invoices, payments, bank reconciliation, taxes, assets, and multi-currency.",
      fr: "Factures clients/fournisseurs, paiements, rapprochement bancaire, taxes, immobilisations et multi-devises.",
    },
    keyTopics: {
      en: [
        "Chart of accounts, journals, and opening balances",
        "Customer invoices, credit notes, payment terms",
        "Bank sync, reconciliation models, SEPA",
        "Fiscal positions, cash basis, tax returns",
        "Fixed assets, deferred revenue, inventory valuation (continental vs anglo-saxon)",
      ],
      fr: [
        "Plan comptable, journaux et soldes d'ouverture",
        "Factures clients, avoirs, conditions de paiement",
        "Sync bancaire, modèles de rapprochement, SEPA",
        "Positions fiscales, encaissement, déclarations de TVA",
        "Immobilisations, produits constatés d'avance, valorisation stock",
      ],
    },
    examTips: {
      en: ["Anglo-saxon: COGS on delivery; Continental: on invoice", "Reconciliation models automate bank matching"],
      fr: ["Anglo-saxon : COGS à la livraison ; Continental : à la facture", "Les modèles de rapprochement automatisent le lettrage bancaire"],
    },
  },
  inventory: {
    overview: {
      en: "Warehouses, locations, stock moves, routes, reordering, lots/serial, and removal strategies.",
      fr: "Entrepôts, emplacements, mouvements de stock, routes, réapprovisionnement, lots/séries et stratégies de sortie.",
    },
    keyTopics: {
      en: [
        "Location hierarchy, operation types, receipts and deliveries",
        "Routes: MTO, cross-dock, dropship, resupply",
        "Reordering rules, lead times, and procurement",
        "Lots, serial numbers, expiration dates, FEFO/FIFO/LIFO",
        "Putaway rules, packaging, batch/cluster/wave picking",
      ],
      fr: [
        "Hiérarchie d'emplacements, types d'opérations, réceptions et livraisons",
        "Routes : MTO, cross-dock, dropship, réapprovisionnement",
        "Règles de réapprovisionnement, délais et achats",
        "Lots, numéros de série, dates de péremption, FEFO/FIFO/LIFO",
        "Règles de rangement, colisage, prélèvement par lot/vague",
      ],
    },
    examTips: {
      en: ["Forecasted qty considers planned in/out moves", "Removal strategy applies at location level"],
      fr: ["La quantité prévue tient compte des entrées/sorties planifiées", "La stratégie de sortie s'applique au niveau emplacement"],
    },
  },
  mrp: {
    overview: {
      en: "BOMs, manufacturing orders, work centers, planning, subcontracting, and shop floor.",
      fr: "Nomenclatures, ordres de fabrication, postes de travail, planification, sous-traitance et atelier.",
    },
    keyTopics: {
      en: [
        "MO workflow, work orders, and component consumption",
        "BOM types, by-products, kits, and variants",
        "MTO/MTS, reordering, and master production schedule",
        "Subcontracting, backorders, scrap, and maintenance",
        "Shop floor, OEE, and manufacturing costs (FIFO/AVCO/standard)",
      ],
      fr: [
        "Flux OF, ordres de travail et consommation composants",
        "Types de nomenclatures, sous-produits, kits et variantes",
        "MTO/MTS, réapprovisionnement et plan directeur de production",
        "Sous-traitance, reliquats, rebuts et maintenance",
        "Atelier, TRS et coûts de production (FIFO/CMUP/standard)",
      ],
    },
    examTips: {
      en: ["Produce for stock = MTS on BOM/manufacturing", "Flexible consumption allows +/- on MO completion"],
      fr: ["Produire pour le stock = MTS sur nomenclature/fabrication", "La consommation flexible autorise +/- à la clôture de l'OF"],
    },
  },
  project: {
    overview: {
      en: "Projects, tasks, stages, dependencies, milestones, and profitability tracking.",
      fr: "Projets, tâches, étapes, dépendances, jalons et suivi de rentabilité.",
    },
    keyTopics: {
      en: [
        "Project stages vs task statuses",
        "Task creation from email, SO, or templates",
        "Subtasks, recurring tasks, and dependencies",
        "Milestones, ratings, and customer portal",
        "Project dashboard and profitability (timesheet + costs)",
      ],
      fr: [
        "Étapes de projet vs statuts de tâche",
        "Création de tâches depuis e-mail, commande ou modèles",
        "Sous-tâches, tâches récurrentes et dépendances",
        "Jalons, évaluations et portail client",
        "Tableau de bord projet et rentabilité (feuilles de temps + coûts)",
      ],
    },
    examTips: {
      en: ["Task dependency blocks start until predecessor is done", "Billable tasks link to SO lines for invoicing"],
      fr: ["Une dépendance bloque le démarrage tant que la tâche précédente n'est pas terminée", "Les tâches facturables se lient aux lignes de commande"],
    },
  },
  timesheet: {
    overview: {
      en: "Log time on projects/tasks, timesheet policies, invoicing, and leaderboard.",
      fr: "Saisir du temps sur projets/tâches, politiques de feuilles de temps, facturation et classement.",
    },
    keyTopics: {
      en: [
        "Timesheet entry on tasks and projects",
        "Billable vs non-billable time",
        "Invoicing based on timesheets (fixed price, milestones)",
        "Timesheet validation and encoding units",
        "Integration with Project and Sales",
      ],
      fr: [
        "Saisie de temps sur tâches et projets",
        "Temps facturable vs non facturable",
        "Facturation sur feuilles de temps (forfait, jalons)",
        "Validation des feuilles de temps et unités d'encodage",
        "Intégration avec Projet et Ventes",
      ],
    },
    examTips: {
      en: ["Timer and manual entry both create analytic lines", "Project profitability uses timesheet costs"],
      fr: ["Le chronomètre et la saisie manuelle créent des lignes analytiques", "La rentabilité projet utilise les coûts des feuilles de temps"],
    },
  },
  website: {
    overview: {
      en: "Build and publish websites: pages, menus, SEO, translations, and multi-website.",
      fr: "Créer et publier des sites : pages, menus, SEO, traductions et multi-sites.",
    },
    keyTopics: {
      en: [
        "Website builder, configurator, themes, and blocks",
        "Navigation, menus, and contact forms",
        "SEO metadata, sitemap, and analytics",
        "Mobile view and language translations",
        "Multi-website and domain configuration",
      ],
      fr: [
        "Éditeur de site, configurateur, thèmes et blocs",
        "Navigation, menus et formulaires de contact",
        "Métadonnées SEO, sitemap et analytics",
        "Vue mobile et traductions",
        "Multi-sites et configuration de domaine",
      ],
    },
    examTips: {
      en: ["Each website can have its own domain and content", "SEO settings are per page"],
      fr: ["Chaque site peut avoir son domaine et son contenu", "Les paramètres SEO sont par page"],
    },
  },
  ecommerce: {
    overview: {
      en: "Online shop: catalog, variants, pricing, checkout, payment, and delivery.",
      fr: "Boutique en ligne : catalogue, variantes, prix, paiement et livraison.",
    },
    keyTopics: {
      en: [
        "Product catalog, categories, and attributes",
        "Pricelists and e-commerce pricing",
        "Cart, checkout, and payment providers",
        "Shipping methods and click & collect",
        "Customer portal, wishlist, and order management",
      ],
      fr: [
        "Catalogue produits, catégories et attributs",
        "Listes de prix et tarification e-commerce",
        "Panier, paiement et prestataires de paiement",
        "Modes de livraison et click & collect",
        "Portail client, liste de souhaits et gestion des commandes",
      ],
    },
    examTips: {
      en: ["Published products need eCommerce checkbox on product", "Alternative products appear on product page"],
      fr: ["Les produits publiés nécessitent la case eCommerce sur la fiche produit", "Les produits alternatifs s'affichent sur la fiche produit"],
    },
  },
  marketing: {
    overview: {
      en: "Email/SMS campaigns, social marketing, automation workflows, and mailing lists.",
      fr: "Campagnes e-mail/SMS, marketing social, workflows d'automation et listes de diffusion.",
    },
    keyTopics: {
      en: [
        "Mailing records, recipient filters, and templates",
        "A/B testing, opt-out, and blacklists",
        "Marketing automation: triggers, activities, participants",
        "Social posts and push notifications",
        "UTM tracking and campaign attribution",
      ],
      fr: [
        "Enregistrements Mailing, filtres destinataires et modèles",
        "Tests A/B, désinscription et listes noires",
        "Marketing Automation : déclencheurs, activités, participants",
        "Publications sociales et notifications push",
        "Suivi UTM et attribution de campagne",
      ],
    },
    examTips: {
      en: ["Mailings target contacts via lists and/or domain filters", "Automation runs on qualified participants only"],
      fr: ["Les mailings ciblent via listes et/ou filtres de domaine", "L'automation s'exécute sur les participants qualifiés"],
    },
  },
  survey: {
    overview: {
      en: "Create surveys with sections, question types, scoring, and conditional logic.",
      fr: "Créer des sondages avec sections, types de questions, scoring et logique conditionnelle.",
    },
    keyTopics: {
      en: [
        "Survey structure: sections and questions",
        "Question types: choice, text, matrix, scoring",
        "Conditional displays and live sessions",
        "Certification mode and attempts",
        "Analysis and reporting of responses",
      ],
      fr: [
        "Structure : sections et questions",
        "Types : choix, texte, matrice, notation",
        "Affichages conditionnels et sessions live",
        "Mode certification et tentatives",
        "Analyse et reporting des réponses",
      ],
    },
    examTips: {
      en: ["Live session surveys allow real-time participation", "Scoring can be per question or survey"],
      fr: ["Les sessions live permettent la participation en temps réel", "Le score peut être par question ou par sondage"],
    },
  },
  ai: {
    overview: {
      en: "Odoo AI features: prompts, AI fields, agents, RAG, and document intelligence.",
      fr: "Fonctionnalités IA Odoo : prompts, champs IA, agents, RAG et intelligence documentaire.",
    },
    keyTopics: {
      en: [
        "When AI adds value vs traditional automation",
        "AI fields, properties, and server actions",
        "Website AI, speech-to-text, and Ask AI",
        "RAG agents and knowledge sources",
        "Prompt engineering best practices",
      ],
      fr: [
        "Quand l'IA apporte de la valeur vs l'automation classique",
        "Champs IA, propriétés et actions serveur",
        "IA site web, speech-to-text et Ask AI",
        "Agents RAG et sources de connaissance",
        "Bonnes pratiques de prompt engineering",
      ],
    },
    examTips: {
      en: ["AI complements—not replaces—structured Odoo data", "RAG agents use uploaded documents as context"],
      fr: ["L'IA complète — ne remplace pas — les données Odoo structurées", "Les agents RAG utilisent les documents comme contexte"],
    },
  },
  hr: {
    overview: {
      en: "Employees, recruitment, time off, payroll, expenses, fleet, and appraisals.",
      fr: "Employés, recrutement, congés, paie, notes de frais, flotte et entretiens.",
    },
    keyTopics: {
      en: [
        "Employee records, departments, and contracts",
        "Recruitment pipeline and referrals",
        "Time off types, accrual plans, and allocations",
        "Payroll basics, payslips, and work entries",
        "Expenses, fleet, and appraisal cycles",
      ],
      fr: [
        "Fiches employés, départements et contrats",
        "Pipeline recrutement et cooptation",
        "Types de congés, plans d'acquisition et allocations",
        "Bases de paie, fiches de paie et entrées de travail",
        "Notes de frais, flotte et cycles d'entretien",
      ],
    },
    examTips: {
      en: ["Work entries feed payroll computation", "Accrual plans automate leave allocation"],
      fr: ["Les entrées de travail alimentent le calcul de paie", "Les plans d'acquisition automatisent les allocations de congés"],
    },
  },
  spreadsheet: {
    overview: {
      en: "Odoo Spreadsheet and Dashboards: formulas, Odoo data lists/charts, and BI views.",
      fr: "Feuilles de calcul et tableaux de bord Odoo : formules, listes/graphiques et vues BI.",
    },
    keyTopics: {
      en: [
        "Spreadsheet basics and Odoo functions",
        "Insert Odoo lists and charts (live data)",
        "Dashboard creation and sharing",
        "Global filters and date ranges",
        "Linking spreadsheet data to inventory/sales KPIs",
      ],
      fr: [
        "Bases des feuilles de calcul et fonctions Odoo",
        "Insérer listes et graphiques Odoo (données live)",
        "Création et partage de tableaux de bord",
        "Filtres globaux et plages de dates",
        "Lier les données aux KPI stock/ventes",
      ],
    },
    examTips: {
      en: ["Odoo list inserts refresh from live database", "Dashboards can combine multiple chart widgets"],
      fr: ["Les listes Odoo se rafraîchissent depuis la base live", "Les tableaux de bord combinent plusieurs widgets"],
    },
  },
  knowledge: {
    overview: {
      en: "Internal wiki: articles, hierarchy, access rights, and integration with other apps.",
      fr: "Wiki interne : articles, hiérarchie, droits d'accès et intégration aux autres apps.",
    },
    keyTopics: {
      en: [
        "Article creation, formatting, and templates",
        "Workspace hierarchy and favorites",
        "Access rights per article/workspace",
        "Trash, restore, and version history",
        "Embedding Knowledge in Helpdesk, Project, etc.",
      ],
      fr: [
        "Création d'articles, mise en forme et modèles",
        "Hiérarchie d'espaces et favoris",
        "Droits d'accès par article/espace",
        "Corbeille, restauration et historique",
        "Intégration Knowledge dans Helpdesk, Projet, etc.",
      ],
    },
    examTips: {
      en: ["Workspace permissions inherit to child articles", "Items can be linked from chatter"],
      fr: ["Les droits d'espace se propagent aux articles enfants", "Les articles peuvent être liés depuis le chatter"],
    },
  },
  pos: {
    overview: {
      en: "Point of Sale: sessions, payments, restaurant floors, self-order, and hardware.",
      fr: "Point de vente : sessions, paiements, plans de salle, borne et matériel.",
    },
    keyTopics: {
      en: [
        "POS session, opening/closing, and cash control",
        "Product combos, categories, and pricelists",
        "Payment methods and terminals",
        "Restaurant: floors, tables, courses, kitchen display",
        "Self-order kiosk, refunds, and loyalty",
      ],
      fr: [
        "Session PdV, ouverture/fermeture et contrôle caisse",
        "Combos produits, catégories et listes de prix",
        "Modes de paiement et terminaux",
        "Restaurant : salles, tables, services, écran cuisine",
        "Borne self-order, remboursements et fidélité",
      ],
    },
    examTips: {
      en: ["POS orders create pickings for storable products", "Closing session posts accounting entries"],
      fr: ["Les commandes PdV créent des transferts pour les produits stockables", "La clôture de session génère les écritures comptables"],
    },
  },
  studio: {
    overview: {
      en: "Customize Odoo without code: fields, views, apps, reports, automations, and approvals.",
      fr: "Personnaliser Odoo sans code : champs, vues, apps, rapports, automatisations et validations.",
    },
    keyTopics: {
      en: [
        "Simple and relational custom fields",
        "View customization (list, form, kanban)",
        "Create custom apps and menus",
        "Automated actions and approval rules",
        "Custom reports and PDF templates",
      ],
      fr: [
        "Champs simples et relationnels",
        "Personnalisation des vues (liste, formulaire, kanban)",
        "Création d'applications et menus",
        "Actions automatisées et règles d'approbation",
        "Rapports personnalisés et modèles PDF",
      ],
    },
    examTips: {
      en: ["Studio changes are stored as ir.model/data records", "Approval rules block transitions until approved"],
      fr: ["Les modifications Studio sont stockées en ir.model/data", "Les validations bloquent les transitions jusqu'à approbation"],
    },
  },
};
