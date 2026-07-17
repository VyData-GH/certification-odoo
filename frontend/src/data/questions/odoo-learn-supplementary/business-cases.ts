import { complexQ, mcq3Q, yesNoQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const businessCasesSupplementaryQuestions = [
  complexQ({
    id: "bcs-002",
    module: "business-cases",
    text: {
      en: "Which apps will this use case use? (Odoo Learn — Branded T-shirts: Case)",
      fr: "Quelles applications ce cas d’utilisation utilisera-t-il ? (Odoo Learn — T-shirts de marque : Cas)",
    },
    correct: {
      en: "CRM, Sales, Website, Invoicing, Project, Timesheets",
      fr: "CRM, Ventes, Site Web, Facturation, Projet, Feuilles de temps",
    },
    distractors: [
      { en: "Inventory, CRM, Sales, Website, Invoicing, Project, Timesheets", fr: "Inventaire, CRM, Ventes, Site Web, Facturation, Projet, Feuilles de temps" },
      { en: "Accounting, Inventory, Sales, Purchase, Project", fr: "Comptabilité, Inventaire, Ventes, Achat, Projet" },
      { en: "CRM, Accounting, Inventory, Sales", fr: "CRM, Comptabilité, Inventaire, Ventes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Branded T-shirts: Case): CRM, Sales, Website, Invoicing, Project, Timesheets",
      fr: "Source Odoo Learn (T-shirts de marque : Cas) : CRM, Ventes, Site Web, Facturation, Projet, Feuilles de temps",
    },
  }),
  complexQ({
    id: "bcs-003",
    module: "business-cases",
    text: {
      en: "What are key information you need to take into account to implement? (Odoo Learn — Branded T-shirts: Case)",
      fr: "Quelles sont les informations clés à prendre en compte pour mettre en œuvre ? (Odoo Learn — T-shirts de marque : Cas)",
    },
    correct: {
      en: "Simple to manage",
      fr: "Simple à gérer",
    },
    distractors: [
      { en: "Have a full inventory feature", fr: "Avoir une fonctionnalité d'inventaire complète" },
      { en: "Manufacturing feature", fr: "Caractéristique de fabrication" },
      { en: "All of the above", fr: "Tout ce qui précède" },
    ],
    explanation: {
      en: "Source Odoo Learn (Branded T-shirts: Case): Simple to manage",
      fr: "Source Odoo Learn (T-shirts de marque : Cas) : Simple à gérer",
    },
  }),
  complexQ({
    id: "bcs-004",
    module: "business-cases",
    text: {
      en: "What is the main way they generate leads? (Odoo Learn — Motorcycle Company: Case)",
      fr: "Quelle est la principale manière dont ils génèrent des prospects ? (Odoo Learn — Entreprise de moto : Cas)",
    },
    correct: {
      en: "Their own website",
      fr: "Leur propre site internet",
    },
    distractors: [
      { en: "Online Advertising", fr: "Publicité en ligne" },
      { en: "Stores", fr: "Magasins" },
      { en: "Advertising", fr: "Publicité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Motorcycle Company: Case): Their own website",
      fr: "Source Odoo Learn (Motorcycle Company: Case) : Leur propre site Web",
    },
  }),
  yesNoQ({
    id: "bcs-005",
    module: "business-cases",
    text: {
      en: "Would they like to give discounts for early payments? (Odoo Learn — Motorcycle Company: Case)",
      fr: "Voudraient-ils accorder des réductions pour les paiements anticipés ? (Odoo Learn — Entreprise de moto : Cas)",
    },
    correctIsYes: true,
    explanation: {
      en: "Source Odoo Learn (Motorcycle Company: Case): Yes",
      fr: "Source Odoo Learn (Entreprise de moto : Cas) : Oui",
    },
  }),
  yesNoQ({
    id: "bcs-006",
    module: "business-cases",
    text: {
      en: "Is it possible to automate payments to the bank (Odoo Learn — Motorcycle Company: Case)",
      fr: "Est-il possible d'automatiser les paiements à la banque (Odoo Learn — Entreprise de moto : Cas)",
    },
    correctIsYes: true,
    explanation: {
      en: "Source Odoo Learn (Motorcycle Company: Case): Yes",
      fr: "Source Odoo Learn (Entreprise de moto : Cas) : Oui",
    },
  }),
  mcq3Q({
    id: "bcs-007",
    module: "business-cases",
    text: {
      en: "Do they manufacture everything or only assemble the bikes? (Odoo Learn — Motorcycle Company: Case)",
      fr: "Est-ce qu'ils fabriquent tout ou assemblent seulement les vélos ? (Odoo Learn — Entreprise de moto : Cas)",
    },
    correct: {
      en: "They manufacture everything except the brakes and shocks",
      fr: "Ils fabriquent tout sauf les freins et les amortisseurs",
    },
    distractors: [
      { en: "They mostly assemble but manufacture the frame", fr: "Ils assemblent surtout mais fabriquent le cadre" },
      { en: "They manufacture everything", fr: "Ils fabriquent tout" },
    ],
    explanation: {
      en: "Source Odoo Learn (Motorcycle Company: Case): They manufacture everything except the brakes and shocks",
      fr: "Source Odoo Learn (Motorcycle Company : Case) : Ils fabriquent tout sauf les freins et les amortisseurs",
    },
  }),
  complexQ({
    id: "bcs-008",
    module: "business-cases",
    text: {
      en: "How can we check when the next payment is due for an on-going Subscription? (Odoo Learn — TecPro 2.0: Case & Solution)",
      fr: "Comment pouvons-nous vérifier quand le prochain paiement est dû pour un abonnement en cours ? (Odoo Learn — TecPro 2.0 : cas et solution)",
    },
    correct: {
      en: "‘Invoice Date’ on the Subscription Sales Order.",
      fr: "« Date de facture » ​​sur le bon de commande d'abonnement.",
    },
    distractors: [
      { en: "Call the customer and ask them.", fr: "Appelez le client et demandez-lui." },
      { en: "Odoo will have a pop-up reminder with due dates.", fr: "Odoo aura un rappel contextuel avec les dates d'échéance." },
      { en: "There is no way to check on Odoo, we should remember the invoice dates.", fr: "Il n'y a aucun moyen de vérifier sur Odoo, il faut se souvenir des dates de facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (TecPro 2.0: Case & Solution): ‘Invoice Date’ on the Subscription Sales Order.",
      fr: "Source Odoo Learn (TecPro 2.0 : Cas et solution) : « Date de facture » ​​sur le bon de commande d'abonnement.",
    },
  }),
  complexQ({
    id: "bcs-009",
    module: "business-cases",
    text: {
      en: "Where do we go to automate tasks within task stages in the Project application? (Odoo Learn — TecPro 2.0: Case & Solution)",
      fr: "Où allons-nous pour automatiser les tâches au sein des étapes de tâche dans l’application Project ? (Odoo Learn — TecPro 2.0 : cas et solution)",
    },
    correct: {
      en: "In the gear icon next to the task name",
      fr: "Dans l'icône d'engrenage à côté du nom de la tâche",
    },
    distractors: [
      { en: "In Settings -> Configuration", fr: "Dans Paramètres -> Configuration" },
      { en: "You cannot automate tasks in the Project application.", fr: "Vous ne pouvez pas automatiser les tâches dans l'application Project." },
      { en: "Click the task name and type in the automation.", fr: "Cliquez sur le nom de la tâche et saisissez l'automatisation." },
    ],
    explanation: {
      en: "Source Odoo Learn (TecPro 2.0: Case & Solution): In the gear icon next to the task name",
      fr: "Source Odoo Learn (TecPro 2.0 : Cas & Solution) : Dans l'icône d'engrenage à côté du nom de la tâche",
    },
  }),
  complexQ({
    id: "bcs-010",
    module: "business-cases",
    text: {
      en: "How do I allow customers to pay directly on my website? (Odoo Learn — TecPro 2.0: Case & Solution)",
      fr: "Comment permettre aux clients de payer directement sur mon site Internet ? (Odoo Learn — TecPro 2.0 : cas et solution)",
    },
    correct: {
      en: "Head to Settings -> Quotations & Orders and tick the checkbox next to Online Payment",
      fr: "Allez dans Paramètres -> Devis et commandes et cochez la case à côté de Paiement en ligne.",
    },
    distractors: [
      { en: "Install a payment terminal such as Square, Cashapp, or Venmo.", fr: "Installez un terminal de paiement tel que Square, Cashapp ou Venmo." },
      { en: "There is no way to allow customers to pay directly on websites.", fr: "Il n’existe aucun moyen de permettre aux clients de payer directement sur les sites Web." },
      { en: "Head to Settings -> Website and install a payment terminal.", fr: "Dirigez-vous vers Paramètres -> Site Web et installez un terminal de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (TecPro 2.0: Case & Solution): Head to Settings -> Quotations & Orders and tick the checkbox next to Online Payment",
      fr: "Source Odoo Learn (TecPro 2.0 : Cas et solution) : Allez dans Paramètres -> Devis et commandes et cochez la case à côté de Paiement en ligne.",
    },
  }),
  mcq3Q({
    id: "bcs-011",
    module: "business-cases",
    text: {
      en: "How would you implement a pull strategy, where store inventory levels trigger the replenishment from main warehouse? (Odoo Learn — Superstar Logistic: Case)",
      fr: "Comment mettriez-vous en œuvre une stratégie pull, dans laquelle les niveaux de stock du magasin déclenchent le réapprovisionnement à partir de l’entrepôt principal ? (Odoo Learn — Superstar Logistique : Cas)",
    },
    correct: {
      en: "Automated replenishments at key stock points to maintain minimum stock coupled with Buy or Resupply routes.",
      fr: "Réapprovisionnements automatisés aux points de stockage clés pour maintenir un stock minimum couplé à des itinéraires d'achat ou de réapprovisionnement.",
    },
    distractors: [
      { en: "Manual purchase orders and dispatching items from the central warehouse with push rules.", fr: "Bons de commande manuels et expédition des articles depuis l'entrepôt central avec des règles push." },
      { en: "Manual replenishment dashboard at key stock points mixed with manual purchase orders", fr: "Tableau de bord de réapprovisionnement manuel aux points de stockage clés mélangé à des bons de commande manuels" },
    ],
    explanation: {
      en: "Source Odoo Learn (Superstar Logistic: Case): Automated replenishments at key stock points to maintain minimum stock coupled with Buy or Resupply routes.",
      fr: "Source Odoo Learn (Superstar Logistic : Case) : Réapprovisionnements automatisés aux points de stock clés pour maintenir un stock minimum couplé à des itinéraires d'achat ou de réapprovisionnement.",
    },
  }),
  mcq3Q({
    id: "bcs-012",
    module: "business-cases",
    text: {
      en: "Which concept would you use to categorize and track outbound operations towards the stores? (Odoo Learn — Superstar Logistic: Case)",
      fr: "Quel concept utiliseriez-vous pour catégoriser et suivre les opérations sortantes vers les magasins ? (Odoo Learn — Superstar Logistique : Cas)",
    },
    correct: {
      en: "Operation types",
      fr: "Types d'opérations",
    },
    distractors: [
      { en: "Stock locations", fr: "Emplacements de stockage" },
      { en: "Routes", fr: "Itinéraires" },
    ],
    explanation: {
      en: "Source Odoo Learn (Superstar Logistic: Case): Operation types",
      fr: "Source Odoo Learn (Superstar Logistic : Cas) : Types d’opérations",
    },
  }),
];
