import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const fieldServiceSupplementaryQuestions = [
  mcq3Q({
    id: "fsm-001",
    module: "field-service",
    text: {
      en: "How many times can you start and stop a timer in a Field Service Task? (Odoo Learn — Your first Field Service task)",
      fr: "Combien de fois pouvez-vous démarrer et arrêter un minuteur dans une tâche de service sur site ? (Odoo Learn — Votre première tâche Field Service)",
    },
    correct: {
      en: "As many times as you need",
      fr: "Autant de fois que nécessaire",
    },
    distractors: [
      { en: "Only once", fr: "Une seule fois" },
      { en: "Three times", fr: "Trois fois" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your first Field Service task): As many times as you need",
      fr: "Source Odoo Learn (Votre première tâche Field Service) : autant de fois que nécessaire",
    },
  }),
  complexQ({
    id: "fsm-002",
    module: "field-service",
    text: {
      en: "Which of the following is not part of the Field Service flow? (Odoo Learn — Your first Field Service task)",
      fr: "Lequel des éléments suivants ne fait pas partie du flux Field Service ? (Odoo Learn — Votre première tâche Field Service)",
    },
    correct: {
      en: "A manufacturing order",
      fr: "Un ordre de fabrication",
    },
    distractors: [
      { en: "A sales order", fr: "Une commande client" },
      { en: "Adding a product", fr: "Ajouter un produit" },
      { en: "Using a map itinerary", fr: "Utiliser un itinéraire cartographique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your first Field Service task): A manufacturing order",
      fr: "Source Odoo Learn (Votre première tâche Field Service) : Une commande de fabrication",
    },
  }),
  complexQ({
    id: "fsm-003",
    module: "field-service",
    text: {
      en: "Which of the following is included in the customer report? (Odoo Learn — Your first Field Service task)",
      fr: "Lequel des éléments suivants est inclus dans le rapport client ? (Odoo Learn — Votre première tâche Field Service)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Information from the worksheet", fr: "Informations de la feuille de travail" },
      { en: "Time spent working on the task", fr: "Temps passé à travailler sur la tâche" },
      { en: "Customer signature", fr: "Signature du client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your first Field Service task): All of the above",
      fr: "Source Odoo Learn (Votre première tâche Field Service) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "fsm-004",
    module: "field-service",
    text: {
      en: "In the Field Service app Kanban view, you can reschedule a task by: (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Dans la vue Kanban de l'application Field Service, vous pouvez replanifier une tâche en : (Odoo Learn — Création et planification de tâches Field Service)",
    },
    correct: {
      en: "Opening the task, then changing the Planned dates",
      fr: "Ouverture de la tâche, puis modification des Dates planifiées",
    },
    distractors: [
      { en: "Dragging and dropping it to a column with a different date", fr: "Faites-le glisser et déposez-le dans une colonne avec une date différente" },
      { en: "Clicking the clock icon, then changing the Planned dates", fr: "En cliquant sur l'icône de l'horloge, puis en modifiant les dates planifiées" },
      { en: "Starring the task", fr: "Mettre en vedette la tâche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Opening the task, then changing the Planned dates",
      fr: "Source Odoo Learn (Création & planification des tâches Field Service) : Ouverture de la tâche, puis modification des dates planifiées",
    },
  }),
  complexQ({
    id: "fsm-005",
    module: "field-service",
    text: {
      en: "Which fields are mandatory when creating a new Field Service task? (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Quels champs sont obligatoires lors de la création d’une nouvelle tâche Field Service ? (Odoo Learn — Création et planification de tâches Field Service)",
    },
    correct: {
      en: "Task Title and Customer",
      fr: "Titre de la tâche et client",
    },
    distractors: [
      { en: "Customer and Planned Dates", fr: "Client et dates prévues" },
      { en: "Task Title and Phone Number", fr: "Titre de la tâche et numéro de téléphone" },
      { en: "Task Title and Planned Dates", fr: "Titre de la tâche et dates prévues" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Task Title and Customer",
      fr: "Source Odoo Learn (Création et planification de tâches de service sur site) : titre de la tâche et client",
    },
  }),
  complexQ({
    id: "fsm-006",
    module: "field-service",
    text: {
      en: "Is it possible to schedule multiple tasks in Field Service? (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Est-il possible de planifier plusieurs tâches dans Field Service ? (Odoo Learn — Création et planification de tâches Field Service)",
    },
    correct: {
      en: "Yes, from the Gantt and List views",
      fr: "Oui, à partir des vues Gantt et Liste",
    },
    distractors: [
      { en: "Yes, by selecting several tasks in the Kanban view and dragging and dropping them.", fr: "Oui, en sélectionnant plusieurs tâches dans la vue Kanban et en les glissant-déposant." },
      { en: "Yes, from the Map and Gantt views", fr: "Oui, à partir des vues Carte et Gantt" },
      { en: "It’s not possible to batch plan tasks in Field Service", fr: "Il n'est pas possible de planifier des tâches par lots dans Field Service" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Yes, from the Gantt and List views",
      fr: "Source Odoo Learn (Création et planification de tâches Field Service) : Oui, à partir des vues Gantt et Liste",
    },
  }),
  complexQ({
    id: "fsm-007",
    module: "field-service",
    text: {
      en: "Which of the following cannot be configured to trigger the creation of a Field Service task? (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Lequel des éléments suivants ne peut pas être configuré pour déclencher la création d’une tâche Field Service ? (Odoo Learn — Création et planification de tâches Field Service)",
    },
    correct: {
      en: "A Manufacturing Order",
      fr: "Un ordre de fabrication",
    },
    distractors: [
      { en: "A Sales Order", fr: "Une commande client" },
      { en: "A Helpdesk ticket", fr: "Un ticket Helpdesk" },
      { en: "A Website form", fr: "Un formulaire de site Web" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): A Manufacturing Order",
      fr: "Source Odoo Learn (Création et planification de tâches de service sur site) : Un ordre de fabrication",
    },
  }),
  complexQ({
    id: "fsm-008",
    module: "field-service",
    text: {
      en: "Go to All Tasks > To Schedule and take a look at the tasks. For a task to show up on this list: (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Accédez à Toutes les tâches > À planifier et jetez un œil aux tâches. Pour qu'une tâche apparaisse sur cette liste : (Odoo Learn — Création et planification de tâches Field Service)",
    },
    correct: {
      en: "Either the Planned Date or Assignee fields need to be empty",
      fr: "Les champs Date planifiée ou Destinataire doivent être vides.",
    },
    distractors: [
      { en: "Only the Planned Date field needs to be empty", fr: "Seul le champ Date planifiée doit être vide" },
      { en: "Only the Assignee field needs to be empty", fr: "Seul le champ Destinataire doit être vide" },
      { en: "Both the Planned Date and Assignee fields need to be empty", fr: "Les champs Date planifiée et Destinataire doivent être vides." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Either the Planned Date or Assignee fields need to be empty",
      fr: "Source Odoo Learn (Création et planification de tâches de service sur le terrain) : les champs Date planifiée ou Destinataire doivent être vides",
    },
  }),
  complexQ({
    id: "fsm-009",
    module: "field-service",
    text: {
      en: "How can you configure your product to make the stock level visible? (Odoo Learn — Product management in Field Service)",
      fr: "Comment configurer votre produit pour rendre visible le niveau de stock ? (Odoo Learn — Gestion des produits dans Field Service)",
    },
    correct: {
      en: "Set my product as storable",
      fr: "Définir mon produit comme stockable",
    },
    distractors: [
      { en: "Set my product as a consumable", fr: "Définir mon produit comme consommable" },
      { en: "Set up a barcode for each unit", fr: "Configurer un code-barres pour chaque unité" },
      { en: "Turn on the product count option in the settings", fr: "Activez l'option de nombre de produits dans les paramètres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product management in Field Service): Set my product as storable",
      fr: "Source Odoo Learn (Gestion de produit dans Field Service) : Définir mon produit comme stockable",
    },
  }),
  complexQ({
    id: "fsm-010",
    module: "field-service",
    text: {
      en: "How can you keep track of the stock levels of the products stored in your van? (Odoo Learn — Product management in Field Service)",
      fr: "Comment suivre les niveaux de stock des produits stockés dans votre camionnette ? (Odoo Learn — Gestion des produits dans Field Service)",
    },
    correct: {
      en: "Set up an additional warehouse in the Inventory app",
      fr: "Configurer un entrepôt supplémentaire dans l'application Inventaire",
    },
    distractors: [
      { en: "Duplicate every product stored in your van and check the 'traveling' option", fr: "Dupliquez chaque produit stocké dans votre van et cochez l'option « voyager »" },
      { en: "Install the Fleet app", fr: "Installez l'application Flotte" },
      { en: "Set up the 'traveling stock' option in the settings", fr: "Configurer l'option 'stock itinérant' dans les paramètres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product management in Field Service): Set up an additional warehouse in the Inventory app",
      fr: "Source Odoo Learn (Gestion des produits dans Field Service) : Configurer un entrepôt supplémentaire dans l'application Inventaire",
    },
  }),
  complexQ({
    id: "fsm-011",
    module: "field-service",
    text: {
      en: "In Odoo, where do you go to assign a warehouse to a user? (Odoo Learn — Product management in Field Service)",
      fr: "Dans Odoo, où va-t-on pour attribuer un entrepôt à un utilisateur ? (Odoo Learn — Gestion des produits dans Field Service)",
    },
    correct: {
      en: "In the user's profile settings, under the 'Inventory' tab",
      fr: "Dans les paramètres du profil de l'utilisateur, sous l'onglet \"Inventaire\"",
    },
    distractors: [
      { en: "Inventory app", fr: "Application d'inventaire" },
      { en: "Employees app", fr: "Application pour les employés" },
      { en: "By going to configuration, then warehouses", fr: "En allant dans configuration, puis entrepôts" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product management in Field Service): In the user's profile settings, under the 'Inventory' tab",
      fr: "Source Odoo Learn (Gestion des produits dans Field Service) : Dans les paramètres du profil de l'utilisateur, sous l'onglet 'Inventaire'",
    },
  }),
  mcq3Q({
    id: "fsm-012",
    module: "field-service",
    text: {
      en: "How do you enable worksheet templates? (Odoo Learn — Customizing worksheets)",
      fr: "Comment activer les modèles de feuilles de calcul ? (Odoo Learn — Personnalisation des feuilles de calcul)",
    },
    correct: {
      en: "By going to Field Service settings, and activating the 'Worksheet templates' option",
      fr: "En accédant aux paramètres de Field Service et en activant l'option « Modèles de feuille de calcul »",
    },
    distractors: [
      { en: "By going to General Settings, then to 'Worksheet templates' tab", fr: "En allant dans Paramètres généraux, puis dans l'onglet \"Modèles de feuilles de calcul\"" },
      { en: "Worksheet templates are enabled up by default", fr: "Les modèles de feuilles de calcul sont activés par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customizing worksheets): By going to Field Service settings, and activating the 'Worksheet templates' option",
      fr: "Source Odoo Learn (Personnalisation des feuilles de calcul) : En allant dans les paramètres de Field Service, et en activant l'option 'Modèles de feuilles de calcul'",
    },
  }),
  complexQ({
    id: "fsm-013",
    module: "field-service",
    text: {
      en: "What additional Odoo app will be activated to design a worksheet template? (Odoo Learn — Customizing worksheets)",
      fr: "Quelle application Odoo supplémentaire sera activée pour concevoir un modèle de feuille de calcul ? (Odoo Learn — Personnalisation des feuilles de calcul)",
    },
    correct: {
      en: "Studio",
      fr: "Studio",
    },
    distractors: [
      { en: "Planning", fr: "Planification" },
      { en: "Timesheets", fr: "Feuilles de temps" },
      { en: "Appointments", fr: "Rendez-vous" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customizing worksheets): Studio",
      fr: "Source Odoo Learn (Personnalisation des feuilles de calcul) : Studio",
    },
  }),
  complexQ({
    id: "fsm-014",
    module: "field-service",
    text: {
      en: "What can you add to a worksheet template? (Odoo Learn — Customizing worksheets)",
      fr: "Que pouvez-vous ajouter à un modèle de feuille de calcul ? (Odoo Learn — Personnalisation des feuilles de calcul)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Checkbox", fr: "Case à cocher" },
      { en: "Image", fr: "Image" },
      { en: "HTML", fr: "HTML" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customizing worksheets): All of the above",
      fr: "Source Odoo Learn (Personnalisation des feuilles de calcul) : Tout ce qui précède",
    },
  }),
  mcq3Q({
    id: "fsm-015",
    module: "field-service",
    text: {
      en: "Where can you find your itinerary in Field Service? (Odoo Learn — Using maps in Field Service)",
      fr: "Où pouvez-vous trouver votre itinéraire dans Field Service ? (Odoo Learn — Utilisation de cartes dans Field Service)",
    },
    correct: {
      en: "In your task > View Itinerary",
      fr: "Dans votre tâche > Afficher l'itinéraire",
    },
    distractors: [
      { en: "General Settings > Integrations > Google Maps", fr: "Paramètres généraux > Intégrations > Google Maps" },
      { en: "Install Google Maps on your smartphone and link your Odoo account", fr: "Installez Google Maps sur votre smartphone et associez votre compte Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Using maps in Field Service): In your task > View Itinerary",
      fr: "Source Odoo Learn (Utilisation de cartes dans Field Service) : Dans votre tâche > Afficher l'itinéraire",
    },
  }),
  mcq3Q({
    id: "fsm-016",
    module: "field-service",
    text: {
      en: "What do you need to get a complete itinerary of your Field Service tasks? (Odoo Learn — Using maps in Field Service)",
      fr: "De quoi avez-vous besoin pour obtenir un itinéraire complet de vos tâches Field Service ? (Odoo Learn — Utilisation de cartes dans Field Service)",
    },
    correct: {
      en: "Both of the above",
      fr: "Les deux ci-dessus",
    },
    distractors: [
      { en: "Set up each customer’s address", fr: "Configurer l'adresse de chaque client" },
      { en: "Go to General Settings > Integrations > MapBox token", fr: "Accédez à Paramètres généraux > Intégrations > Jeton MapBox" },
    ],
    explanation: {
      en: "Source Odoo Learn (Using maps in Field Service): Both of the above",
      fr: "Source Odoo Learn (Utilisation de cartes dans Field Service) : les deux éléments ci-dessus",
    },
  }),
];
