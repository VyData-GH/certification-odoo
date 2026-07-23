import { complexQ, mcq3Q, yesNoQ } from "./helpers";

/**
 * Questions solides du Sample Test officiel Odoo Functional Certification
 * (réponses validées — hors questions image).
 * Chaque question est rattachée au module cert / complémentaire correspondant.
 */
export const sampleCertQuestions = [
  // —— Complementary: Global Settings ——
  mcq3Q({
    id: "smp-gls-001",
    module: "global-settings",
    text: {
      en: "In a multi-company environment, how do you define whether a customer record is visible for all companies? (Sample Cert)",
      fr: "Dans un environnement multi-sociétés, comment rendre un contact client visible pour toutes les sociétés ? (Sample Cert)",
    },
    correct: {
      en: 'Leave the "Company" field empty on the contact (Sales & Purchase Tab)',
      fr: 'Laisser le champ « Société » vide sur le contact (onglet Ventes & Achats)',
    },
    distractors: [
      {
        en: "This is not possible since every customer belongs to one company",
        fr: "Ce n'est pas possible car chaque client appartient à une seule société",
      },
      {
        en: 'Check the box "Accessible to Everyone" on the contact',
        fr: 'Cocher la case « Accessible à tous » sur le contact',
      },
    ],
    explanation: {
      en: "A contact with an empty Company field is shared across all companies in the database.",
      fr: "Un contact sans société renseignée est visible par toutes les sociétés de la base.",
    },
  }),

  // —— CRM ——
  mcq3Q({
    id: "smp-crm-001",
    module: "crm",
    text: {
      en: 'What happens to an opportunity that is marked as "Lost"? (Sample Cert)',
      fr: "Que devient une opportunité marquée comme « Perdue » ? (Sample Cert)",
    },
    correct: {
      en: "The opportunity is archived and hidden from view. It can be accessed by clicking Filters > Lost.",
      fr: "L'opportunité est archivée et masquée. Elle reste accessible via Filtres > Perdu.",
    },
    distractors: [
      {
        en: 'The opportunity is moved to the "Lost" stage at the end of the Kanban view',
        fr: 'L\'opportunité est déplacée vers une étape « Perdu » en fin de vue Kanban',
      },
      {
        en: "The opportunity's name turns red",
        fr: "Le nom de l'opportunité passe en rouge",
      },
    ],
    explanation: {
      en: "Marking Lost archives the opportunity; use the Lost filter to find it again.",
      fr: "Marquer Perdu archive l'opportunité ; le filtre Perdu permet de la retrouver.",
    },
  }),
  mcq3Q({
    id: "smp-crm-002",
    module: "crm",
    text: {
      en: "What is the visual impact of setting a high priority on an opportunity? (Sample Cert)",
      fr: "Quel est l'impact visuel d'une priorité haute sur une opportunité ? (Sample Cert)",
    },
    correct: {
      en: "The opportunity will move to the top of the stage in the Kanban view next time the CRM pipeline page is loaded.",
      fr: "L'opportunité remonte en haut de son étape Kanban au prochain chargement du pipeline CRM.",
    },
    distractors: [
      {
        en: "The opportunity will move to the next stage",
        fr: "L'opportunité passe à l'étape suivante",
      },
      {
        en: "The opportunity label is highlighted in the Kanban view",
        fr: "Le libellé de l'opportunité est surligné dans la vue Kanban",
      },
    ],
    explanation: {
      en: "High priority reorders the card to the top of its Kanban column after refresh.",
      fr: "La priorité haute replace la carte en haut de sa colonne Kanban après rechargement.",
    },
  }),

  // —— Inventory ——
  mcq3Q({
    id: "smp-inv-001",
    module: "inventory",
    text: {
      en: "Normally, does the 'Customer Location' have a positive stock level or a negative stock level? (Sample Cert)",
      fr: "Normalement, l'emplacement Client a-t-il un stock positif ou négatif ? (Sample Cert)",
    },
    correct: {
      en: "Positive stock level",
      fr: "Niveau de stock positif",
    },
    distractors: [
      { en: "Negative stock level", fr: "Niveau de stock négatif" },
      { en: "Should tend to be zero", fr: "Devrait tendre vers zéro" },
    ],
    explanation: {
      en: "Deliveries move stock into Partner Locations/Customers (qty increases). Vendor locations are typically negative.",
      fr: "Les livraisons ajoutent du stock dans Emplacements partenaires/Clients. Les emplacements Fournisseurs sont typiquement négatifs.",
    },
  }),
  mcq3Q({
    id: "smp-inv-002",
    module: "inventory",
    text: {
      en: "Where do you define the cost price of a product variant? (Sample Cert)",
      fr: "Où définit-on le prix de revient d'une variante de produit ? (Sample Cert)",
    },
    correct: {
      en: "At the product variant level",
      fr: "Au niveau de la variante du produit",
    },
    distractors: [
      { en: "At the attribute value level", fr: "Au niveau de la valeur d'attribut" },
      { en: "At the product template level", fr: "Au niveau du modèle de produit" },
    ],
    explanation: {
      en: "Cost is set on each product variant record, not on the template or attribute value alone.",
      fr: "Le coût se définit sur chaque fiche variante, pas seulement sur le modèle ou la valeur d'attribut.",
    },
  }),
  mcq3Q({
    id: "smp-inv-003",
    module: "inventory",
    text: {
      en: 'What\'s the goal of a location type "view"? (Sample Cert)',
      fr: "Quel est le rôle d'un emplacement de type « vue » ? (Sample Cert)",
    },
    correct: {
      en: "It's a location for creating the structure of the stock locations",
      fr: "Il sert à créer la structure des emplacements de stock",
    },
    distractors: [
      {
        en: "That's the only kind of location we can attach to warehouses",
        fr: "C'est le seul type d'emplacement attachable aux entrepôts",
      },
      {
        en: "That's the only kind of location we can use when creating inventory",
        fr: "C'est le seul type utilisable pour créer un inventaire",
      },
    ],
    explanation: {
      en: "View locations are structural parents; they are not physical locations for stock operations.",
      fr: "Les emplacements vue sont des parents structurels, pas des emplacements physiques d'opération.",
    },
  }),
  yesNoQ({
    id: "smp-inv-004",
    module: "inventory",
    text: {
      en: "Using the 'Average Cost' (AVCO) costing method, will the unit cost of a product change when you deliver products? (Sample Cert)",
      fr: "Avec la méthode CMP (AVCO), le coût unitaire change-t-il à la livraison des produits ? (Sample Cert)",
    },
    correctIsYes: false,
    explanation: {
      en: "AVCO updates the unit cost on receipt (purchase), not when you deliver products.",
      fr: "En CMP, le coût unitaire se met à jour à la réception (achat), pas à la livraison.",
    },
  }),
  mcq3Q({
    id: "smp-inv-005",
    module: "inventory",
    text: {
      en: "What does it mean if the forecasted quantity of a storable product is less than the quantity on hand? (Sample Cert)",
      fr: "Que signifie une quantité prévisionnelle inférieure à la quantité en stock pour un produit stockable ? (Sample Cert)",
    },
    correct: {
      en: "There are more outgoing products planned than incoming products",
      fr: "Il y a plus de sorties prévues que d'entrées prévues",
    },
    distractors: [
      {
        en: "Nothing, as we do not know the complete history of each product",
        fr: "Rien, car on ne connaît pas l'historique complet de chaque produit",
      },
      {
        en: "New products are planned to arrive in stock",
        fr: "De nouveaux produits sont prévus en entrée de stock",
      },
    ],
    explanation: {
      en: "Forecasted < on hand means planned outflows exceed planned inflows.",
      fr: "Prévisionnel < en stock signifie que les sorties planifiées dépassent les entrées planifiées.",
    },
  }),

  // —— MRP ——
  yesNoQ({
    id: "smp-mrp-001",
    module: "mrp",
    text: {
      en: "Can you assign several bills of materials to the same product? (Sample Cert)",
      fr: "Peut-on assigner plusieurs nomenclatures au même produit ? (Sample Cert)",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. A product can have multiple BoMs (e.g. variants or alternative manufacturing routes).",
      fr: "Oui. Un produit peut avoir plusieurs nomenclatures (variantes ou routes de fabrication alternatives).",
    },
  }),
  mcq3Q({
    id: "smp-mrp-002",
    module: "mrp",
    text: {
      en: "Where is Overall Equipment Effectiveness (OEE) computed? (Sample Cert)",
      fr: "Où le TRS / OEE (Overall Equipment Effectiveness) est-il calculé ? (Sample Cert)",
    },
    correct: {
      en: "At the work center",
      fr: "Au niveau du poste de travail",
    },
    distractors: [
      { en: "On the work order", fr: "Sur l'ordre de travail" },
      { en: "On the manufacturing order", fr: "Sur l'ordre de fabrication" },
    ],
    explanation: {
      en: "OEE is tracked and computed at the work center level in Manufacturing.",
      fr: "Le TRS/OEE est suivi et calculé au niveau du poste de travail en Fabrication.",
    },
  }),

  // —— Complementary: PLM ——
  mcq3Q({
    id: "smp-plm-001",
    module: "plm",
    text: {
      en: "Where do you define the roles of approvals for Engineering Change Orders (ECOs)? (Sample Cert)",
      fr: "Où définit-on les rôles d'approbation des ordres de modification technique (ECO) ? (Sample Cert)",
    },
    correct: {
      en: "On the ECO Stage form",
      fr: "Sur le formulaire d'étape ECO",
    },
    distractors: [
      { en: "On the product form", fr: "Sur la fiche produit" },
      { en: "At the ECO type level", fr: "Au niveau du type d'ECO" },
    ],
    explanation: {
      en: "Approvers (role, user, approval type) are configured on each ECO stage form.",
      fr: "Les approbateurs (rôle, utilisateur, type) se configurent sur le formulaire de chaque étape ECO.",
    },
  }),

  // —— Website ——
  mcq3Q({
    id: "smp-web-001",
    module: "website",
    text: {
      en: "Will Odoo automatically pick the best color combinations for each building block? (Sample Cert)",
      fr: "Odoo choisit-il automatiquement les meilleures combinaisons de couleurs pour chaque bloc ? (Sample Cert)",
    },
    correct: {
      en: "Yes, but you can customize the colors in the style or option tab",
      fr: "Oui, mais vous pouvez personnaliser les couleurs dans l'onglet Style ou Options",
    },
    distractors: [
      {
        en: "No, you can customize the colors in the theme tab",
        fr: "Non, vous personnalisez les couleurs dans l'onglet Thème",
      },
      {
        en: "Yes, and you have a limited selection of what you can change in the theme tab",
        fr: "Oui, avec une sélection limitée de ce que vous pouvez changer dans l'onglet Thème",
      },
    ],
    explanation: {
      en: "Odoo suggests color combinations; you can still override them in Style/Options.",
      fr: "Odoo propose des combinaisons ; vous pouvez les surcharger dans Style/Options.",
    },
  }),

  // —— eCommerce ——
  yesNoQ({
    id: "smp-eco-001",
    module: "ecommerce",
    text: {
      en: "On your eCommerce, can you choose whether or not your prices include tax in the calculation? (Sample Cert)",
      fr: "Sur l'eCommerce, peut-on choisir si les prix incluent ou non la taxe ? (Sample Cert)",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. Tax-included vs tax-excluded pricing is a configurable eCommerce setting.",
      fr: "Oui. Prix TTC ou HT est un paramètre eCommerce configurable.",
    },
  }),

  // —— HR ——
  mcq3Q({
    id: "smp-hr-001",
    module: "hr",
    text: {
      en: 'If you wanted to set a color for "Sick Time Off" (as displayed in the dashboard view of the Time Off module), where would you go to do this? (Sample Cert)',
      fr: "Où définir la couleur de « Congé maladie » affichée sur le tableau de bord Congés ? (Sample Cert)",
    },
    correct: {
      en: "From Configuration > Time Off Types",
      fr: "Dans Configuration > Types de congés",
    },
    distractors: [
      {
        en: "From the Calendar view of your leaves",
        fr: "Depuis la vue Calendrier de vos congés",
      },
      {
        en: "This is not something you can configure",
        fr: "Ce n'est pas configurable",
      },
    ],
    explanation: {
      en: "Time Off type records hold the color used on the Time Off dashboard.",
      fr: "La couleur du tableau de bord se définit sur chaque type de congé.",
    },
  }),
  mcq3Q({
    id: "smp-hr-002",
    module: "hr",
    text: {
      en: "Which condition must be met for an expense to be created from an email? (Sample Cert)",
      fr: "Quelle condition pour créer une note de frais depuis un email ? (Sample Cert)",
    },
    correct: {
      en: "The person submitting the expense needs to have an Odoo user account OR an employee associated with their email address",
      fr: "La personne doit avoir un compte utilisateur Odoo OU un employé associé à cette adresse email",
    },
    distractors: [
      {
        en: "The person submitting the expense needs to have an Odoo user account associated with their email address",
        fr: "La personne doit uniquement avoir un compte utilisateur Odoo lié à son email",
      },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Email-to-expense matches either a user or an employee on the sender address.",
      fr: "Email → note de frais matche un utilisateur ou un employé sur l'adresse expéditeur.",
    },
  }),

  // —— Timesheet ——
  mcq3Q({
    id: "smp-ts-001",
    module: "timesheet",
    text: {
      en: "How are hours billed at a fixed price computed? (Sample Cert)",
      fr: "Comment sont calculées les heures facturées à prix fixe ? (Sample Cert)",
    },
    correct: {
      en: 'These are timesheeted hours linked to a sales order, where the invoicing policy is set to "milestone" or "prepaid"',
      fr: 'Ce sont des heures pointées liées à une commande dont la politique de facturation est « jalons » ou « prépayé »',
    },
    distractors: [
      {
        en: "These are sold hours coming from a sales order that still need to be timesheeted before being invoiced",
        fr: "Ce sont des heures vendues d'une commande qui doivent encore être pointées avant facturation",
      },
      {
        en: "These are the actual timesheeted hours that can't be invoiced from the sales order",
        fr: "Ce sont les heures pointées qui ne peuvent pas être facturées depuis la commande",
      },
    ],
    explanation: {
      en: "Fixed-price billed hours are timesheeted hours on SO lines with prepaid/milestone invoicing.",
      fr: "Les heures à prix fixe sont les heures pointées sur des lignes SO en prépayé/jalons.",
    },
  }),

  // —— Project ——
  mcq3Q({
    id: "smp-prj-001",
    module: "project",
    text: {
      en: "How do you request customers to rate tasks? (Sample Cert)",
      fr: "Comment demander aux clients de noter les tâches ? (Sample Cert)",
    },
    correct: {
      en: "Set a rating email template on the project stage settings",
      fr: "Configurer un modèle d'email de notation sur les paramètres de l'étape projet",
    },
    distractors: [
      {
        en: "Set your customer as a follower of a task",
        fr: "Mettre le client en abonné d'une tâche",
      },
      {
        en: "Ratings are only available in opportunities",
        fr: "Les notations ne sont disponibles que sur les opportunités",
      },
    ],
    explanation: {
      en: "Customer task ratings are triggered via a rating email template on the project stage.",
      fr: "La notation client est déclenchée via un modèle d'email de notation sur l'étape projet.",
    },
  }),
  yesNoQ({
    id: "smp-prj-002",
    module: "project",
    text: {
      en: "Any task can become a sub-task later on. (Sample Cert)",
      fr: "Toute tâche peut devenir une sous-tâche plus tard. (Sample Cert)",
    },
    correctIsYes: true,
    yes: { en: "True", fr: "Vrai" },
    no: { en: "False", fr: "Faux" },
    explanation: {
      en: "True. Tasks can be converted to sub-tasks (and back) later via Convert to Task/Sub-Task.",
      fr: "Vrai. Une tâche peut devenir sous-tâche (et inversement) via Convertir en tâche/sous-tâche.",
    },
  }),
  complexQ({
    id: "smp-prj-003",
    module: "project",
    text: {
      en: "What kind of costs are taken into account in the project updates? (Sample Cert)",
      fr: "Quels coûts sont pris en compte dans les mises à jour de projet ? (Sample Cert)",
    },
    correct: {
      en: "All of the above",
      fr: "Toutes les réponses ci-dessus",
    },
    distractors: [
      {
        en: "The timesheet costs of your employees",
        fr: "Les coûts de feuilles de temps des employés",
      },
      {
        en: "Any cost linked to the analytic account of the project",
        fr: "Tout coût lié au compte analytique du projet",
      },
      {
        en: "Expense costs linked to the project's sales order",
        fr: "Les coûts de notes de frais liés à la commande du projet",
      },
    ],
    explanation: {
      en: "Project updates aggregate timesheet costs, analytic costs, and related expenses.",
      fr: "Les mises à jour projet agrègent feuilles de temps, coûts analytiques et dépenses liées.",
    },
  }),

  // —— Accounting / Facturation ——
  mcq3Q({
    id: "smp-acc-001",
    module: "accounting",
    text: {
      en: "How can you prevent the creation or the modification of journal entries up to a specific accounting date? (Sample Cert)",
      fr: "Comment empêcher la création ou la modification d'écritures jusqu'à une date comptable donnée ? (Sample Cert)",
    },
    correct: {
      en: "By setting a lock date to lock a fiscal period",
      fr: "En définissant une date de verrouillage (lock date) pour verrouiller une période fiscale",
    },
    distractors: [
      { en: "By a closing period", fr: "Par une période de clôture" },
      {
        en: "By posting all journal entries",
        fr: "En comptabilisant toutes les écritures",
      },
    ],
    explanation: {
      en: "Lock dates block posting/editing of journal entries on or before the locked date.",
      fr: "Les dates de verrouillage bloquent la création/modification d'écritures jusqu'à la date verrouillée.",
    },
  }),
  mcq3Q({
    id: "smp-acc-002",
    module: "accounting",
    text: {
      en: "What happens if a currency is not set on an account? (Sample Cert)",
      fr: "Que se passe-t-il si aucune devise n'est définie sur un compte ? (Sample Cert)",
    },
    correct: {
      en: "The account can be used for transactions in any currency",
      fr: "Le compte peut être utilisé pour des transactions dans n'importe quelle devise",
    },
    distractors: [
      {
        en: "The account can only be used for transactions in the main company currency",
        fr: "Le compte ne peut être utilisé que dans la devise principale de la société",
      },
      {
        en: "It's not possible. A currency is required for each account",
        fr: "Ce n'est pas possible. Une devise est obligatoire sur chaque compte",
      },
    ],
    explanation: {
      en: "Empty currency on an account means multi-currency is allowed; a set currency restricts the account.",
      fr: "Sans devise = multi-devise acceptée ; devise renseignée = compte restreint à cette devise.",
    },
  }),
  yesNoQ({
    id: "smp-acc-003",
    module: "accounting",
    text: {
      en: "Can Odoo automatically update currency exchange rates? (Sample Cert)",
      fr: "Odoo peut-il mettre à jour automatiquement les taux de change ? (Sample Cert)",
    },
    correctIsYes: true,
    explanation: {
      en: "Yes. Accounting can fetch and update exchange rates automatically when configured.",
      fr: "Oui. La comptabilité peut récupérer et mettre à jour les taux automatiquement si configuré.",
    },
  }),

  // —— Purchases ——
  mcq3Q({
    id: "smp-pur-001",
    module: "purchases",
    text: {
      en: "Where do you define the vendor delivery lead time? (Sample Cert)",
      fr: "Où définit-on le délai de livraison fournisseur ? (Sample Cert)",
    },
    correct: {
      en: "On the Product template form, under the Purchase tab, found on each individual Vendor line",
      fr: "Sur la fiche produit, onglet Achats, sur chaque ligne fournisseur",
    },
    distractors: [
      { en: "On the vendor tab", fr: "Sur l'onglet fournisseur" },
      { en: "On the company", fr: "Sur la société" },
    ],
    explanation: {
      en: "Delivery lead time is set per vendor line on the product Purchase tab.",
      fr: "Le délai de livraison se définit par ligne fournisseur sur l'onglet Achats du produit.",
    },
  }),

  // —— Sales ——
  mcq3Q({
    id: "smp-sal-001",
    module: "sales",
    text: {
      en: "Can any product be used in a sales order? (Sample Cert)",
      fr: "Tout produit peut-il être utilisé dans une commande de vente ? (Sample Cert)",
    },
    correct: {
      en: 'No, you can only use products that you\'ve marked as "Sales" on the product form',
      fr: "Non, uniquement les produits marqués « Peut être vendu » sur la fiche produit",
    },
    distractors: [
      {
        en: "Yes, you can use all your products",
        fr: "Oui, vous pouvez utiliser tous vos produits",
      },
      {
        en: "No, you can only use products you currently have in stock",
        fr: "Non, uniquement les produits actuellement en stock",
      },
    ],
    explanation: {
      en: 'Only products with the Sales ("Can be Sold") flag can be added to sales orders.',
      fr: "Seuls les produits cochés « Peut être vendu » peuvent être ajoutés aux commandes de vente.",
    },
  }),
];
