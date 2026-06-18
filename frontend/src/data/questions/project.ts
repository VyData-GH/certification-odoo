import { complexQ } from "./helpers";

export const projectQuestions = [
  complexQ({
    id: "prj-001",
    module: "project",
    text: {
      en: "How do you structure a project with sub-tasks in Odoo 19?",
      fr: "Comment structurer un projet en sous-tâches dans Odoo 19 ?",
    },
    correct: {
      en: "Create tasks and assign a parent task on the sub-task form to build a hierarchy within the project",
      fr: "Créer des tâches et renseigner une tâche parente sur la fiche sous-tâche pour former une hiérarchie dans le projet",
    },
    distractors: [
      {
        en: "Create a separate project for each sub-task and link them through CRM opportunities",
        fr: "Créer un projet distinct pour chaque sous-tâche et les lier via des opportunités CRM",
      },
      {
        en: "Define sub-tasks only as checklist items on the sales order service line",
        fr: "Définir les sous-tâches uniquement comme éléments de checklist sur la ligne de service de la commande",
      },
      {
        en: "Split the work using project stages as sub-tasks instead of nested task records",
        fr: "Découper le travail en utilisant les étapes du projet comme sous-tâches plutôt que des tâches imbriquées",
      },
    ],
    explanation: {
      en: "Odoo Project supports hierarchical tasks via the Parent Task field; sub-tasks inherit the project and appear nested in Kanban, list, and Gantt views.",
      fr: "Odoo Projet gère les tâches hiérarchiques via le champ Tâche parente ; les sous-tâches héritent du projet et s'affichent imbriquées en Kanban, liste et Gantt.",
    },
  }),
  complexQ({
    id: "prj-002",
    module: "project",
    text: {
      en: "What is a stage in Odoo Project?",
      fr: "Qu'est-ce qu'une « étape » (stage) dans Projet ?",
    },
    correct: {
      en: "A Kanban column representing a workflow state that tasks move through as work progresses",
      fr: "Une colonne Kanban représentant un état de workflow par lequel les tâches passent au fil de l'avancement",
    },
    distractors: [
      {
        en: "A billing milestone used to trigger customer invoicing on the linked sales order",
        fr: "Un jalon de facturation utilisé pour déclencher la facturation client sur la commande liée",
      },
      {
        en: "A project template preset copied when duplicating analytic accounts",
        fr: "Un modèle de projet prédéfini copié lors de la duplication des comptes analytiques",
      },
      {
        en: "A Gantt dependency type that blocks successor tasks until predecessors finish",
        fr: "Un type de dépendance Gantt qui bloque les tâches successeurs jusqu'à la fin des prédécesseurs",
      },
    ],
    explanation: {
      en: "Stages organize the Kanban board (e.g. New, In Progress, Done) and can be configured per project or shared across projects.",
      fr: "Les étapes organisent le tableau Kanban (ex. Nouveau, En cours, Terminé) et peuvent être configurées par projet ou partagées.",
    },
  }),
  complexQ({
    id: "prj-003",
    module: "project",
    text: {
      en: "How do you invoice a project based on timesheets in Odoo 19?",
      fr: "Comment facturer un projet au temps passé dans Odoo 19 ?",
    },
    correct: {
      en: "Set the project billing policy to Based on Timesheets, then invoice billable validated hours from the project or sales order",
      fr: "Définir la politique de facturation du projet sur Basé sur les feuilles de temps, puis facturer les heures facturables validées depuis le projet ou la commande",
    },
    distractors: [
      {
        en: "Invoice the full sales order amount automatically when the project reaches the Done stage",
        fr: "Facturer le montant total de la commande automatiquement quand le projet atteint l'étape Terminé",
      },
      {
        en: "Create vendor bills from employee timesheets and send them to the customer as expenses",
        fr: "Créer des factures fournisseurs à partir des feuilles de temps employés et les envoyer au client comme notes de frais",
      },
      {
        en: "Use fixed-price milestone billing only; timesheet hours are tracked for cost but never invoiced",
        fr: "Utiliser uniquement la facturation au forfait par jalons ; les heures saisies servent au coût mais ne sont jamais facturées",
      },
    ],
    explanation: {
      en: "Projects support multiple billing types: fixed price, based on timesheets, and milestones. Timesheet billing pulls delivered billable hours onto customer invoices.",
      fr: "Les projets supportent plusieurs types de facturation : forfait, basé sur les feuilles de temps et jalons. La facturation au temps reprend les heures facturables livrées sur les factures client.",
    },
  }),
  complexQ({
    id: "prj-004",
    module: "project",
    text: {
      en: "What is the Gantt view in Odoo Project used for?",
      fr: "À quoi sert la vue Gantt dans Odoo Projet ?",
    },
    correct: {
      en: "Schedule tasks on a timeline with start/end dates, progress, and dependencies for project planning",
      fr: "Planifier les tâches sur une chronologie avec dates de début/fin, avancement et dépendances pour la planification projet",
    },
    distractors: [
      {
        en: "Display employee attendance and working hours across departments in calendar format",
        fr: "Afficher les présences et heures de travail des employés par département sous forme de calendrier",
      },
      {
        en: "Analyze invoiced revenue versus logged costs in a pivot table by analytic account",
        fr: "Analyser le chiffre d'affaires facturé versus les coûts saisis dans un tableau croisé par compte analytique",
      },
      {
        en: "Map customer delivery addresses for field service routes alongside inventory transfers",
        fr: "Cartographier les adresses de livraison client pour les tournées terrain avec les transferts de stock",
      },
    ],
    explanation: {
      en: "The Gantt view visualizes task scheduling over time and supports dependencies, deadlines, and progress tracking for project managers.",
      fr: "La vue Gantt visualise la planification des tâches dans le temps et supporte dépendances, échéances et suivi d'avancement pour les chefs de projet.",
    },
  }),
  complexQ({
    id: "prj-005",
    module: "project",
    text: {
      en: "How do you assign multiple users to a task in Odoo 19 Project?",
      fr: "Comment assigner plusieurs utilisateurs à une tâche dans Odoo 19 Projet ?",
    },
    correct: {
      en: "Add multiple assignees on the task form using the Assignees field",
      fr: "Ajouter plusieurs assignés sur la fiche tâche via le champ Assignés",
    },
    distractors: [
      {
        en: "Add internal users as project followers; followers automatically become task assignees",
        fr: "Ajouter des utilisateurs internes comme abonnés du projet ; les abonnés deviennent automatiquement assignés à la tâche",
      },
      {
        en: "Duplicate the task once per employee because Odoo allows only one assignee per task record",
        fr: "Dupliquer la tâche une fois par employé car Odoo n'autorise qu'un seul assigné par fiche tâche",
      },
      {
        en: "Assign users through the Planning app shift slots linked to the project analytic account",
        fr: "Assigner les utilisateurs via les créneaux Planning liés au compte analytique du projet",
      },
    ],
    explanation: {
      en: "Tasks support multiple assignees directly on the task form, in addition to a project manager or responsible user on the project.",
      fr: "Les tâches supportent plusieurs assignés directement sur la fiche, en plus d'un chef de projet ou responsable sur le projet.",
    },
  }),
  complexQ({
    id: "prj-006",
    module: "project",
    text: {
      en: "What is a project milestone in Odoo 19?",
      fr: "Qu'est-ce qu'un jalon (milestone) de projet dans Odoo 19 ?",
    },
    correct: {
      en: "A key deadline or deliverable that can be linked to tasks and used for milestone-based customer invoicing",
      fr: "Une échéance ou livrable clé pouvant être lié aux tâches et utilisé pour la facturation client par jalons",
    },
    distractors: [
      {
        en: "An archived Kanban stage that closes all open tasks when the milestone date is reached",
        fr: "Une étape Kanban archivée qui clôture toutes les tâches ouvertes à la date du jalon",
      },
      {
        en: "A sales order delivery line quantity used to track partial shipment of project materials",
        fr: "Une quantité livrée sur ligne de commande utilisée pour suivre l'expédition partielle de matériel projet",
      },
      {
        en: "An analytic budget threshold that blocks timesheet entry when costs exceed the limit",
        fr: "Un seuil de budget analytique qui bloque la saisie de feuilles de temps quand les coûts dépassent la limite",
      },
    ],
    explanation: {
      en: "Milestones mark important project dates, can be linked to tasks, and support milestone billing when the project policy is set accordingly.",
      fr: "Les jalons marquent des dates clés du projet, peuvent être liés aux tâches et supportent la facturation par jalons selon la politique du projet.",
    },
  }),
  complexQ({
    id: "prj-007",
    module: "project",
    text: {
      en: "How do task dependencies work in Odoo Project?",
      fr: "Comment fonctionnent les dépendances entre tâches en Projet ?",
    },
    correct: {
      en: "Set Blocked By predecessor tasks so a task cannot start until its dependencies are marked done",
      fr: "Définir Bloquée par avec des tâches prédécesseures pour qu'une tâche ne démarre qu'une fois les dépendances terminées",
    },
    distractors: [
      {
        en: "Link tasks through CRM opportunity stages; stage order enforces sequential completion",
        fr: "Lier les tâches via les étapes d'opportunité CRM ; l'ordre des étapes impose une complétion séquentielle",
      },
      {
        en: "Place dependent tasks in later Kanban columns; moving columns forward validates prerequisites",
        fr: "Placer les tâches dépendantes dans des colonnes Kanban ultérieures ; changer de colonne valide les prérequis",
      },
      {
        en: "Configure dependencies only in the Gantt export; Odoo does not store them on the task record",
        fr: "Configurer les dépendances uniquement dans l'export Gantt ; Odoo ne les enregistre pas sur la fiche tâche",
      },
    ],
    explanation: {
      en: "The Blocked By / Blocking fields define task dependencies visible in Gantt and used to enforce execution order.",
      fr: "Les champs Bloquée par / Bloque définissent les dépendances visibles dans le Gantt et utilisées pour imposer l'ordre d'exécution.",
    },
  }),
  complexQ({
    id: "prj-008",
    module: "project",
    text: {
      en: "What is the purpose of project templates in Odoo 19?",
      fr: "À quoi servent les modèles de projet dans Odoo 19 ?",
    },
    correct: {
      en: "Reuse predefined tasks, stages, and settings when creating similar projects to speed up setup",
      fr: "Réutiliser des tâches, étapes et paramètres prédéfinis lors de la création de projets similaires pour accélérer la configuration",
    },
    distractors: [
      {
        en: "Store reusable sales quotation lines that auto-generate service products on confirmation",
        fr: "Stocker des lignes de devis réutilisables qui génèrent automatiquement des produits service à la confirmation",
      },
      {
        en: "Define CRM pipeline stages shared between opportunities and project Kanban boards",
        fr: "Définir des étapes de pipeline CRM partagées entre opportunités et tableaux Kanban projet",
      },
      {
        en: "Archive completed projects as read-only templates that cannot spawn new active projects",
        fr: "Archiver les projets terminés comme modèles en lecture seule ne pouvant pas créer de nouveaux projets actifs",
      },
    ],
    explanation: {
      en: "Project templates copy a standard structure—tasks, sub-tasks, stages, and settings—into new projects for repeatable workflows.",
      fr: "Les modèles de projet copient une structure type — tâches, sous-tâches, étapes et paramètres — dans de nouveaux projets pour des workflows répétables.",
    },
  }),
  complexQ({
    id: "prj-009",
    module: "project",
    text: {
      en: "How is profitability tracked on a project in Odoo 19?",
      fr: "Comment la rentabilité d'un projet est-elle suivie dans Odoo 19 ?",
    },
    correct: {
      en: "Compare invoiced revenues with costs from timesheets, expenses, purchases, and subcontractor bills on the project dashboard",
      fr: "Comparer les revenus facturés aux coûts issus des feuilles de temps, notes de frais, achats et sous-traitance sur le tableau de bord projet",
    },
    distractors: [
      {
        en: "Calculate margin from the sales order total only, without including logged employee hours or expenses",
        fr: "Calculer la marge uniquement à partir du total de la commande, sans inclure les heures saisies ni les notes de frais",
      },
      {
        en: "Use the inventory valuation report for storable products linked to the project analytic account",
        fr: "Utiliser le rapport de valorisation stock pour les produits stockables liés au compte analytique du projet",
      },
      {
        en: "Track expected revenue from CRM pipeline probability on linked opportunities, not actual costs",
        fr: "Suivre le revenu attendu via la probabilité du pipeline CRM sur les opportunités liées, sans les coûts réels",
      },
    ],
    explanation: {
      en: "The project profitability dashboard aggregates billed revenue against real costs: timesheet hours, expenses, purchase orders, and vendor bills.",
      fr: "Le tableau de bord de rentabilité agrège le chiffre d'affaires facturé face aux coûts réels : feuilles de temps, notes de frais, achats et factures fournisseurs.",
    },
  }),
  complexQ({
    id: "prj-010",
    module: "project",
    text: {
      en: "What is the link between Project and Sales in Odoo 19?",
      fr: "Quel est le lien entre Projet et Ventes dans Odoo 19 ?",
    },
    correct: {
      en: "Confirming a sales order with service products configured to create tasks can generate or link a project and its tasks",
      fr: "Confirmer une commande contenant des produits service configurés pour créer des tâches peut générer ou lier un projet et ses tâches",
    },
    distractors: [
      {
        en: "Projects are created exclusively from purchase orders when procuring materials for customer jobs",
        fr: "Les projets sont créés exclusivement depuis les bons de commande achat lors de l'approvisionnement matériel",
      },
      {
        en: "Every confirmed sales order automatically opens a project regardless of product type or configuration",
        fr: "Chaque commande confirmée ouvre automatiquement un projet quel que soit le type ou la configuration produit",
      },
      {
        en: "Projects link to sales only through Helpdesk tickets converted from eCommerce checkout requests",
        fr: "Les projets se lient aux ventes uniquement via des tickets Helpdesk convertis depuis des demandes eCommerce",
      },
    ],
    explanation: {
      en: "Service products can be set to create a project and/or task on sales order confirmation, linking delivery tracking to Project.",
      fr: "Les produits service peuvent être configurés pour créer un projet et/ou une tâche à la confirmation de commande, liant la livraison à Projet.",
    },
  }),
  complexQ({
    id: "prj-011",
    module: "project",
    text: {
      en: "How do you set a task deadline in Odoo Project?",
      fr: "Comment définir une date limite sur une tâche en Projet ?",
    },
    correct: {
      en: "Enter the Deadline field on the task form; it appears in Kanban, list, calendar, and Gantt views",
      fr: "Renseigner le champ Date limite sur la fiche tâche ; il apparaît en vues Kanban, liste, calendrier et Gantt",
    },
    distractors: [
      {
        en: "Set the deadline only by linking the task to a project milestone; the milestone date becomes read-only on the task",
        fr: "Définir la date limite uniquement en liant la tâche à un jalon projet ; la date du jalon devient en lecture seule sur la tâche",
      },
      {
        en: "Configure the deadline on the sales order expected delivery date; it syncs one-way to all project tasks",
        fr: "Configurer la date limite sur la date de livraison prévue de la commande ; elle se synchronise à sens unique vers toutes les tâches",
      },
      {
        en: "Define deadlines at project level in Settings; individual tasks inherit the project end date and cannot override it",
        fr: "Définir les échéances au niveau projet dans Paramètres ; les tâches héritent de la date de fin projet sans pouvoir la modifier",
      },
    ],
    explanation: {
      en: "Each task has its own Deadline field used for planning alerts, overdue highlighting, and Gantt scheduling.",
      fr: "Chaque tâche possède son propre champ Date limite utilisé pour les alertes de planification, le surlignage des retards et le Gantt.",
    },
  }),
  complexQ({
    id: "prj-012",
    module: "project",
    text: {
      en: "What are project tags used for in Odoo 19?",
      fr: "À quoi servent les étiquettes (tags) de projet dans Odoo 19 ?",
    },
    correct: {
      en: "Categorize and filter projects and tasks for search, reporting, and organization across the database",
      fr: "Catégoriser et filtrer projets et tâches pour la recherche, le reporting et l'organisation dans la base",
    },
    distractors: [
      {
        en: "Define customer tax fiscal positions applied automatically to project-related invoices",
        fr: "Définir les positions fiscales client appliquées automatiquement aux factures liées au projet",
      },
      {
        en: "Map tasks to analytic plan dimensions that replace the project analytic account entirely",
        fr: "Mapper les tâches aux dimensions du plan analytique en remplacement complet du compte analytique projet",
      },
      {
        en: "Control portal visibility so only followers with matching tags can access shared project tasks",
        fr: "Contrôler la visibilité portail pour que seuls les abonnés avec les mêmes étiquettes accèdent aux tâches partagées",
      },
    ],
    explanation: {
      en: "Tags are flexible labels on projects and tasks, useful for filtering views and grouping work by topic, client type, or priority.",
      fr: "Les étiquettes sont des libellés flexibles sur projets et tâches, utiles pour filtrer les vues et regrouper le travail par thème, type client ou priorité.",
    },
  }),
  complexQ({
    id: "prj-013",
    module: "project",
    text: {
      en: "How can customers collaborate on project tasks in Odoo 19?",
      fr: "Comment les clients peuvent-ils collaborer sur les tâches projet dans Odoo 19 ?",
    },
    correct: {
      en: "Enable project sharing and grant portal access so customers view shared tasks and communicate via the chatter",
      fr: "Activer le partage de projet et accorder l'accès portail pour que les clients voient les tâches partagées et communiquent via le chatter",
    },
    distractors: [
      {
        en: "Create internal users for each customer contact; portal access is not supported on project records",
        fr: "Créer des utilisateurs internes pour chaque contact client ; l'accès portail n'est pas supporté sur les fiches projet",
      },
      {
        en: "Send weekly PDF task reports by email; customers reply by email but cannot access the project portal",
        fr: "Envoyer des rapports PDF hebdomadaires par e-mail ; les clients répondent par mail sans accès au portail projet",
      },
      {
        en: "Use CRM live chat on the website; chat transcripts are stored as tasks but customers cannot see project boards",
        fr: "Utiliser le live chat CRM sur le site ; les transcripts sont stockés comme tâches mais les clients ne voient pas les tableaux projet",
      },
    ],
    explanation: {
      en: "Project sharing invites portal users to collaborate on selected tasks, follow updates, upload files, and post messages in the chatter.",
      fr: "Le partage de projet invite les utilisateurs portail à collaborer sur les tâches sélectionnées, suivre les mises à jour, joindre des fichiers et poster sur le chatter.",
    },
  }),
  complexQ({
    id: "prj-014",
    module: "project",
    text: {
      en: "What is the burndown chart in Project used for?",
      fr: "À quoi sert le graphique burndown en Projet ?",
    },
    correct: {
      en: "Visualize remaining task workload versus elapsed time to monitor sprint or iteration progress",
      fr: "Visualiser le travail restant par rapport au temps écoulé pour suivre l'avancement d'un sprint ou d'une itération",
    },
    distractors: [
      {
        en: "Track invoiced revenue burn rate against the project budget defined on the analytic account",
        fr: "Suivre le taux de consommation du chiffre d'affaires facturé par rapport au budget défini sur le compte analytique",
      },
      {
        en: "Display employee overtime hours declining toward zero at period end in the Attendances app",
        fr: "Afficher les heures supplémentaires employés décroissant vers zéro en fin de période dans l'application Présences",
      },
      {
        en: "Show warehouse stock depletion for project-related material consumption over the delivery timeline",
        fr: "Afficher l'épuisement du stock entrepôt pour la consommation matériel liée au projet sur la timeline de livraison",
      },
    ],
    explanation: {
      en: "The burndown chart helps agile teams compare open task points or hours remaining against the planned timeline.",
      fr: "Le graphique burndown aide les équipes agiles à comparer les points ou heures de tâches restantes par rapport au planning prévu.",
    },
  }),
  complexQ({
    id: "prj-015",
    module: "project",
    text: {
      en: "How do you record expenses on a project in Odoo 19?",
      fr: "Comment enregistrer des dépenses sur un projet dans Odoo 19 ?",
    },
    correct: {
      en: "Submit employee expense reports with the project or analytic account set, then approve and post for reimbursement or reinvoicing",
      fr: "Soumettre des notes de frais employés avec le projet ou compte analytique renseigné, puis approuver et comptabiliser pour remboursement ou refacturation",
    },
    distractors: [
      {
        en: "Create vendor bills without analytic distribution; project costs update from purchase order totals only",
        fr: "Créer des factures fournisseurs sans distribution analytique ; les coûts projet se mettent à jour uniquement via les totaux de commande achat",
      },
      {
        en: "Log expenses as negative timesheet lines with a dedicated non-billable expense task per employee",
        fr: "Saisir les dépenses comme lignes de feuilles de temps négatives sur une tâche dépense non facturable par employé",
      },
      {
        en: "Record project costs exclusively through manufacturing overhead on bills of materials linked to the project",
        fr: "Enregistrer les coûts projet exclusivement via les frais généraux de fabrication sur les nomenclatures liées au projet",
      },
    ],
    explanation: {
      en: "The Expenses app links approved employee expenses to projects, feeding project costs and optional customer reinvoicing.",
      fr: "L'application Notes de frais lie les dépenses approuvées aux projets, alimentant les coûts projet et la refacturation client optionnelle.",
    },
  }),
  complexQ({
    id: "prj-016",
    module: "project",
    text: {
      en: "What is the difference between a private and shared project in Odoo 19?",
      fr: "Quelle est la différence entre un projet privé et partagé dans Odoo 19 ?",
    },
    correct: {
      en: "Privacy settings control which internal users and portal followers can access the project and its tasks",
      fr: "Les paramètres de confidentialité contrôlent quels utilisateurs internes et abonnés portail peuvent accéder au projet et à ses tâches",
    },
    distractors: [
      {
        en: "Private projects disable timesheets and expenses; shared projects enable full billing to the customer",
        fr: "Les projets privés désactivent feuilles de temps et notes de frais ; les projets partagés activent la facturation client complète",
      },
      {
        en: "Shared projects are visible on the website catalog; private projects appear only in accounting reports",
        fr: "Les projets partagés sont visibles sur le catalogue site web ; les projets privés n'apparaissent que dans les rapports comptables",
      },
      {
        en: "All projects are public to every internal user; privacy applies only to Gantt and map views",
        fr: "Tous les projets sont publics pour tous les utilisateurs internes ; la confidentialité s'applique uniquement aux vues Gantt et carte",
      },
    ],
    explanation: {
      en: "Project visibility can be restricted to invited employees, all internal users, or extended to portal collaborators via project sharing.",
      fr: "La visibilité projet peut être restreinte aux employés invités, à tous les internes, ou étendue aux collaborateurs portail via le partage de projet.",
    },
  }),
  complexQ({
    id: "prj-017",
    module: "project",
    text: {
      en: "How do recurring tasks work in Odoo Project?",
      fr: "Comment fonctionnent les tâches récurrentes en Projet ?",
    },
    correct: {
      en: "Configure recurrence on a task to automatically generate future task copies on the defined interval",
      fr: "Configurer la récurrence sur une tâche pour générer automatiquement de futures copies selon l'intervalle défini",
    },
    distractors: [
      {
        en: "Create recurring calendar meetings; attendees' timesheets auto-generate but no new task records are created",
        fr: "Créer des réunions récurrentes dans l'agenda ; les feuilles de temps des participants se génèrent sans créer de nouvelles tâches",
      },
      {
        en: "Use scheduled actions on the project stage to reopen closed tasks every week",
        fr: "Utiliser des actions planifiées sur l'étape projet pour rouvrir les tâches clôturées chaque semaine",
      },
      {
        en: "Duplicate the project template monthly via automated server actions on the analytic account",
        fr: "Dupliquer le modèle de projet mensuellement via des actions serveur automatisées sur le compte analytique",
      },
    ],
    explanation: {
      en: "Task recurrence creates new task instances based on the configured repeat interval, keeping the same project and assignee settings.",
      fr: "La récurrence de tâche crée de nouvelles instances selon l'intervalle configuré, en conservant le projet et les paramètres d'assignation.",
    },
  }),
  complexQ({
    id: "prj-018",
    module: "project",
    text: {
      en: "What is the map view in Project used for in Odoo 19?",
      fr: "À quoi sert la vue carte (map) en Projet dans Odoo 19 ?",
    },
    correct: {
      en: "Display tasks or projects on a map based on the customer or partner address for field planning",
      fr: "Afficher les tâches ou projets sur une carte selon l'adresse client ou partenaire pour la planification terrain",
    },
    distractors: [
      {
        en: "Visualize warehouse bin locations and internal transfer routes for project material staging",
        fr: "Visualiser les emplacements de casiers entrepôt et les routes de transfert interne pour le staging matériel projet",
      },
      {
        en: "Track delivery driver GPS positions in real time for outbound shipments linked to project sales orders",
        fr: "Suivre en temps réel les positions GPS des livreurs pour les expéditions liées aux commandes projet",
      },
      {
        en: "Show employee home addresses to optimize internal meeting locations across multiple office sites",
        fr: "Afficher les adresses domicile des employés pour optimiser les lieux de réunion internes sur plusieurs sites",
      },
    ],
    explanation: {
      en: "The map view geolocates tasks using partner addresses, helping field service and on-site project teams plan visits.",
      fr: "La vue carte géolocalise les tâches via les adresses partenaires, aidant les équipes terrain et sur site à planifier les interventions.",
    },
  }),
  complexQ({
    id: "prj-019",
    module: "project",
    text: {
      en: "How do you convert an existing task into a sub-task in Odoo Project?",
      fr: "Comment convertir une tâche existante en sous-tâche en Projet ?",
    },
    correct: {
      en: "Open the task and set a Parent Task on the form to nest it under an existing parent task",
      fr: "Ouvrir la tâche et renseigner une Tâche parente sur la fiche pour l'imbriquer sous une tâche parent existante",
    },
    distractors: [
      {
        en: "Drag the task card into a sub-column on the Kanban board; Odoo creates a new parent automatically",
        fr: "Glisser la carte tâche dans une sous-colonne Kanban ; Odoo crée automatiquement une nouvelle tâche parente",
      },
      {
        en: "Archive the task and recreate it from the sales order service line with the sub-task flag enabled",
        fr: "Archiver la tâche et la recréer depuis la ligne de service de la commande avec l'option sous-tâche activée",
      },
      {
        en: "Link the task as a blocked successor; dependency links automatically redefine it as a sub-task",
        fr: "Lier la tâche comme successeur bloqué ; les liens de dépendance la redéfinissent automatiquement en sous-tâche",
      },
    ],
    explanation: {
      en: "Assigning a Parent Task on any task record establishes the hierarchical sub-task relationship within the same project.",
      fr: "Renseigner une Tâche parente sur une fiche tâche établit la relation hiérarchique de sous-tâche au sein du même projet.",
    },
  }),
  complexQ({
    id: "prj-020",
    module: "project",
    text: {
      en: "What does the project rating feature provide in Odoo 19?",
      fr: "Que permet la fonctionnalité d'évaluation (rating) des projets dans Odoo 19 ?",
    },
    correct: {
      en: "Collect customer satisfaction ratings on completed tasks via email or the portal to measure service quality",
      fr: "Collecter les évaluations de satisfaction client sur les tâches terminées par e-mail ou portail pour mesurer la qualité de service",
    },
    distractors: [
      {
        en: "Score employee performance in Appraisals based on logged timesheet hours versus task estimates",
        fr: "Noter la performance employés dans Évaluations selon les heures saisies versus les estimations de tâches",
      },
      {
        en: "Calculate Net Promoter Score from CRM opportunities when the related project reaches 100% progress",
        fr: "Calculer le Net Promoter Score depuis les opportunités CRM quand le projet associé atteint 100 % d'avancement",
      },
      {
        en: "Rate vendor delivery punctuality on purchase orders linked to the project analytic account",
        fr: "Évaluer la ponctualité des livraisons fournisseurs sur les commandes achat liées au compte analytique projet",
      },
    ],
    explanation: {
      en: "Task ratings send satisfaction requests to customers after task completion, with results visible on the project dashboard.",
      fr: "Les évaluations de tâches envoient des demandes de satisfaction aux clients après achèvement, avec résultats visibles sur le tableau de bord projet.",
    },
  }),
  complexQ({
    id: "prj-021",
    module: "project",
    text: {
      en: "How do you activate Project stages in the projects Kanban view?",
      fr: "Comment activer les étapes de projet dans la vue Kanban des projets ?",
    },
    correct: {
      en: "Go to Project ‣ Configuration ‣ Settings and enable Project Stages",
      fr: "Aller dans Projet ‣ Configuration ‣ Paramètres et activer Étapes de projet",
    },
    distractors: [
      {
        en: "Project stages are visible by default without any configuration",
        fr: "Les étapes de projet sont visibles par défaut sans configuration",
      },
      {
        en: "Enable stages individually on each project's settings form only",
        fr: "Activer les étapes individuellement sur la fiche de chaque projet uniquement",
      },
      {
        en: "Install Studio and create a custom Kanban column model for stages",
        fr: "Installer Studio et créer un modèle de colonnes Kanban personnalisé pour les étapes",
      },
    ],
    explanation: {
      en: "Project Stages setting adds horizontal stage columns to group projects in the Kanban view.",
      fr: "Le paramètre Étapes de projet ajoute des colonnes horizontales pour regrouper les projets en Kanban.",
    },
  }),
  complexQ({
    id: "prj-022",
    module: "project",
    text: {
      en: "Does moving a project to a different Kanban stage change its project status (On track, At risk, etc.)?",
      fr: "Déplacer un projet vers une autre étape Kanban modifie-t-il son statut projet (Dans les temps, À risque, etc.) ?",
    },
    correct: {
      en: "No — Kanban stages and project status are independent",
      fr: "Non — les étapes Kanban et le statut projet sont indépendants",
    },
    distractors: [
      {
        en: "Yes — the status always mirrors the Kanban stage name automatically",
        fr: "Oui — le statut reprend toujours automatiquement le nom de l'étape Kanban",
      },
      {
        en: "Yes — but only when the project has milestones configured",
        fr: "Oui — mais uniquement si le projet a des jalons configurés",
      },
      {
        en: "Yes — status updates when the project manager validates the stage change",
        fr: "Oui — le statut se met à jour quand le chef de projet valide le changement d'étape",
      },
    ],
    explanation: {
      en: "Stages track workflow columns; status reflects health updates from project updates, not drag-and-drop alone.",
      fr: "Les étapes suivent le workflow Kanban ; le statut reflète les mises à jour de santé, pas seul le glisser-déposer.",
    },
  }),
  complexQ({
    id: "prj-023",
    module: "project",
    text: {
      en: "What does the colored bar at the top of each project Kanban stage indicate?",
      fr: "Que indique la barre colorée en haut de chaque étape Kanban projet ?",
    },
    correct: {
      en: "The number of projects with each status in that Kanban stage",
      fr: "Le nombre de projets avec chaque statut dans cette étape Kanban",
    },
    distractors: [
      {
        en: "The total allocated hours for projects in the stage",
        fr: "Le total des heures allouées aux projets de l'étape",
      },
      {
        en: "The number of projects with each tag in the stage",
        fr: "Le nombre de projets avec chaque étiquette dans l'étape",
      },
      {
        en: "The budget consumption percentage for the stage",
        fr: "Le pourcentage de consommation budgétaire de l'étape",
      },
    ],
    explanation: {
      en: "Stage header colors summarize how many projects are On track, At risk, Off track, etc. within that column.",
      fr: "Les couleurs d'en-tête d'étape résument combien de projets sont Dans les temps, À risque, etc. dans la colonne.",
    },
  }),
  complexQ({
    id: "prj-024",
    module: "project",
    text: {
      en: "After creating a new Project Update on the dashboard, how is the project's state determined?",
      fr: "Après une nouvelle Mise à jour projet sur le tableau de bord, comment l'état du projet est-il déterminé ?",
    },
    correct: {
      en: "The project state is updated to match the state given in the latest Project Update",
      fr: "L'état du projet est mis à jour pour correspondre à celui de la dernière Mise à jour projet",
    },
    distractors: [
      {
        en: "The state is averaged across all previous Project Updates",
        fr: "L'état est la moyenne de toutes les mises à jour précédentes",
      },
      {
        en: "The state is calculated only from task progress percentage, ignoring updates",
        fr: "L'état est calculé uniquement depuis le pourcentage d'avancement des tâches",
      },
      {
        en: "Project updates do not affect state; only milestone completion does",
        fr: "Les mises à jour projet n'affectent pas l'état ; seule l'achèvement des jalons compte",
      },
    ],
    explanation: {
      en: "Each Project Update sets the current health state shown on the project card and dashboard.",
      fr: "Chaque Mise à jour projet définit l'état de santé affiché sur la carte et le tableau de bord projet.",
    },
  }),
];
