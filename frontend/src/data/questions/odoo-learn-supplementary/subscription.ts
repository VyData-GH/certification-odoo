import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const subscriptionSupplementaryQuestions = [
  complexQ({
    id: "sub-001",
    module: "subscription",
    text: {
      en: "What’s the difference between a Subscription product form and a typical product form? (Odoo Learn — Subscription Products)",
      fr: "Quelle est la différence entre un formulaire de produit d’abonnement et un formulaire de produit typique ? (Odoo Learn — Produits d'abonnement)",
    },
    correct: {
      en: "The ‘Subscriptions’ checkbox is ticked, by default",
      fr: "La case « Abonnements » est cochée par défaut",
    },
    distractors: [
      { en: "The ‘Recurring Prices’ tab is filled out, by default", fr: "L'onglet « Prix récurrents » est renseigné par défaut" },
      { en: "The ‘Subscribe’ field is auto-populated, by default", fr: "Le champ « S'abonner » est renseigné automatiquement, par défaut" },
      { en: "The ‘Recurring Plans’ checkbox is ticked, by default", fr: "La case « Forfaits récurrents » est cochée par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Products): The ‘Subscriptions’ checkbox is ticked, by default",
      fr: "Source Odoo Learn (Produits d'abonnement) : La case « Abonnements » est cochée, par défaut",
    },
  }),
  complexQ({
    id: "sub-002",
    module: "subscription",
    text: {
      en: "How many price rules can be added to the ‘Recurring Prices’ tab of a subscription product form? (Odoo Learn — Subscription Products)",
      fr: "Combien de règles de prix peuvent être ajoutées à l’onglet « Prix récurrents » d’un formulaire de produit d’abonnement ? (Odoo Learn — Produits d'abonnement)",
    },
    correct: {
      en: "There is no limit",
      fr: "Il n'y a pas de limite",
    },
    distractors: [
      { en: "1", fr: "1" },
      { en: "2", fr: "2" },
      { en: "3", fr: "3" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Products): There is no limit",
      fr: "Source Odoo Learn (Produits d'abonnement) : Il n'y a pas de limite",
    },
  }),
  complexQ({
    id: "sub-003",
    module: "subscription",
    text: {
      en: "What happens when the ‘Plan Services’ checkbox is ticked on a subscription product form? (Odoo Learn — Subscription Products)",
      fr: "Que se passe-t-il lorsque la case « Planifier les services » est cochée sur un formulaire de produit d'abonnement ? (Odoo Learn — Produits d'abonnement)",
    },
    correct: {
      en: "Odoo automatically generates a shift for a selected role when confirming the sales order",
      fr: "Odoo génère automatiquement une équipe pour un rôle sélectionné lors de la confirmation de la commande client",
    },
    distractors: [
      { en: "Odoo automatically blocks out a scheduled date/time on the user’s personal calendar", fr: "Odoo bloque automatiquement une date/heure programmée sur le calendrier personnel de l'utilisateur" },
      { en: "Odoo automatically creates a Project and Task for the user creating the product", fr: "Odoo crée automatiquement un projet et une tâche pour l'utilisateur créant le produit" },
      { en: "Odoo automatically opens the ‘Planning’ application", fr: "Odoo ouvre automatiquement l'application 'Planification'" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Products): Odoo automatically generates a shift for a selected role when confirming the sales order",
      fr: "Source Odoo Learn (Produits d'abonnement) : Odoo génère automatiquement un quart de travail pour un rôle sélectionné lors de la confirmation de la commande client",
    },
  }),
  complexQ({
    id: "sub-004",
    module: "subscription",
    text: {
      en: "How do I reopen a canceled subscription? (Odoo Learn — Renewing and Closing Subscriptions)",
      fr: "Comment rouvrir un abonnement annulé ? (Odoo Learn — Renouvellement et clôture des abonnements)",
    },
    correct: {
      en: "On the canceled subscription, click the ‘Reopen’ button on the top",
      fr: "Sur l'abonnement annulé, cliquez sur le bouton « Réouvrir » en haut",
    },
    distractors: [
      { en: "Head to ‘Configuration’ -> ‘Settings’ -> ‘Subscriptions’, and reopen from there", fr: "Allez dans « Configuration » -> « Paramètres » -> « Abonnements » et rouvrez à partir de là." },
      { en: "There is no way to reopen a canceled subscription", fr: "Il n'y a aucun moyen de rouvrir un abonnement annulé" },
      { en: "Contact the customer directly, and have them submit a ticket to Helpdesk", fr: "Contactez directement le client et demandez-lui de soumettre un ticket au Helpdesk" },
    ],
    explanation: {
      en: "Source Odoo Learn (Renewing and Closing Subscriptions): On the canceled subscription, click the ‘Reopen’ button on the top",
      fr: "Source Odoo Learn (Renouvellement et clôture des abonnements) : Sur l'abonnement annulé, cliquez sur le bouton « Rouvrir » en haut",
    },
  }),
  complexQ({
    id: "sub-005",
    module: "subscription",
    text: {
      en: "What does Odoo generate when I click ‘Renew’ on a subscription sales order? (Odoo Learn — Renewing and Closing Subscriptions)",
      fr: "Que génère Odoo lorsque je clique sur « Renouveler » sur une commande d’abonnement ? (Odoo Learn — Renouvellement et clôture des abonnements)",
    },
    correct: {
      en: "A new subscription quotation",
      fr: "Un nouveau devis d'abonnement",
    },
    distractors: [
      { en: "A new subscription product", fr: "Un nouveau produit d'abonnement" },
      { en: "An order form for inputting customer payment information", fr: "Un formulaire de commande pour saisir les informations de paiement du client" },
      { en: "A new chatter activity for scheduling a customer meeting", fr: "Une nouvelle activité de chat pour planifier une réunion client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Renewing and Closing Subscriptions): A new subscription quotation",
      fr: "Source Odoo Learn (Renouvellement et clôture des abonnements) : Un nouveau devis d'abonnement",
    },
  }),
  complexQ({
    id: "sub-006",
    module: "subscription",
    text: {
      en: "What’s the difference between closing and canceling a subscription? (Odoo Learn — Renewing and Closing Subscriptions)",
      fr: "Quelle est la différence entre clôturer et annuler un abonnement ? (Odoo Learn — Renouvellement et clôture des abonnements)",
    },
    correct: {
      en: "I can only close a subscription after it’s been invoiced, and I can only cancel a subscription before it’s been invoiced",
      fr: "Je ne peux clôturer un abonnement qu'après qu'il ait été facturé, et je ne peux annuler un abonnement qu'avant qu'il n'ait été facturé",
    },
    distractors: [
      { en: "There is no difference between closing and canceling a subscription", fr: "Il n'y a aucune différence entre clôturer et annuler un abonnement" },
      { en: "Customers do not see if I cancel a subscription", fr: "Les clients ne voient pas si j'annule un abonnement" },
      { en: "The churn rate does not get affected by canceled subscriptions", fr: "Le taux de désabonnement n'est pas affecté par les abonnements annulés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Renewing and Closing Subscriptions): I can only close a subscription after it’s been invoiced, and I can only cancel a subscription before it’s been invoiced",
      fr: "Source Odoo Learn (Renouvellement et clôture des abonnements) : Je ne peux clôturer un abonnement qu'après qu'il ait été facturé, et je ne peux annuler un abonnement qu'avant qu'il ne soit facturé",
    },
  }),
  complexQ({
    id: "sub-007",
    module: "subscription",
    text: {
      en: "Which of the following is NOT true of upselling? (Odoo Learn — Upsell Subscriptions)",
      fr: "Lequel des énoncés suivants n’est PAS vrai en matière de vente incitative ? (Odoo Learn — Abonnements de vente incitative)",
    },
    correct: {
      en: "Subscriptions can be upsold at the time of initial enrollment.",
      fr: "Les abonnements peuvent être vendus au moment de l'inscription initiale.",
    },
    distractors: [
      { en: "Alternative quotes can be provided to customers during the upsell process.", fr: "Des devis alternatifs peuvent être fournis aux clients pendant le processus de vente incitative." },
      { en: "Discounts can be applied to subscriptions during the upsell process.", fr: "Des réductions peuvent être appliquées aux abonnements pendant le processus de vente incitative." },
      { en: "Upsold subscriptions are both reflected in the original sales order and tracked in their own sales orders.", fr: "Les abonnements vendus sont à la fois reflétés dans la commande client d'origine et suivis dans leurs propres commandes client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Upsell Subscriptions): Subscriptions can be upsold at the time of initial enrollment.",
      fr: "Source Odoo Learn (abonnements de vente incitative) : les abonnements peuvent être vendus au moment de l'inscription initiale.",
    },
  }),
  complexQ({
    id: "sub-008",
    module: "subscription",
    text: {
      en: "Before upselling a subscription, a plan must… (Odoo Learn — Upsell Subscriptions)",
      fr: "Avant de vendre un abonnement, un forfait doit… (Odoo Learn — Abonnements de vente incitative)",
    },
    correct: {
      en: "Have been successfully invoiced.",
      fr: "Ont été facturés avec succès.",
    },
    distractors: [
      { en: "Use the default “Upsell Subscription\" quotation template.", fr: "Utilisez le modèle de devis par défaut « Abonnement de vente incitative »." },
      { en: "Be marked “Upsell Ready” by a customer in their Portal.", fr: "Soyez marqué « Upsell Ready » par un client dans son portail." },
      { en: "Reach its natural expiration date and be renewed by the customer.", fr: "Atteindre sa date d'expiration naturelle et être renouvelé par le client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Upsell Subscriptions): Have been successfully invoiced.",
      fr: "Source Odoo Learn (abonnements de vente incitative) : ont été facturés avec succès.",
    },
  }),
  complexQ({
    id: "sub-009",
    module: "subscription",
    text: {
      en: "Pick the true statement. (Odoo Learn — Upsell Subscriptions)",
      fr: "Choisissez la vraie déclaration. (Odoo Learn — Abonnements de vente incitative)",
    },
    correct: {
      en: "A discount applied to a subscription product in an upsell order only applies to the initial upsell invoice, not to the life of the subscription.",
      fr: "Une remise appliquée à un produit d'abonnement dans une commande de vente incitative s'applique uniquement à la facture de vente incitative initiale, et non à la durée de vie de l'abonnement.",
    },
    distractors: [
      { en: "A discount applied to a subscription product in an upsell order affects all subscriptions on the invoice.", fr: "Une remise appliquée à un produit d'abonnement dans le cadre d'une commande de vente incitative affecte tous les abonnements figurant sur la facture." },
      { en: "A discount applied to a subscription product in an upsell order lasts for the life of the subscription.", fr: "Une remise appliquée à un produit d’abonnement dans le cadre d’une commande de vente incitative dure pendant toute la durée de l’abonnement." },
      { en: "Discounts cannot be applied to upsell orders, but once an upsell order has been invoiced, discounts can be applied to the updated original sales order.", fr: "Les remises ne peuvent pas être appliquées aux commandes de vente incitative, mais une fois qu'une commande de vente incitative a été facturée, les remises peuvent être appliquées à la commande client originale mise à jour." },
    ],
    explanation: {
      en: "Source Odoo Learn (Upsell Subscriptions): A discount applied to a subscription product in an upsell order only applies to the initial upsell invoice, not to the life of the subscription.",
      fr: "Source Odoo Learn (Abonnements Upsell) : Une remise appliquée à un produit d'abonnement dans une commande de vente incitative ne s'applique qu'à la facture de vente incitative initiale, et non à la durée de vie de l'abonnement.",
    },
  }),
  complexQ({
    id: "sub-010",
    module: "subscription",
    text: {
      en: "What does MRR measure? (Odoo Learn — Subscription Reports)",
      fr: "Que mesure le MRR ? (Odoo Learn — Rapports d'abonnement)",
    },
    correct: {
      en: "The monthly revenue from subscription products only.",
      fr: "Les revenus mensuels des produits d'abonnement uniquement.",
    },
    distractors: [
      { en: "The monthly revenue from all products sold.", fr: "Le revenu mensuel de tous les produits vendus." },
      { en: "The monthly revenue from storable products only.", fr: "Le revenu mensuel des produits stockables uniquement." },
      { en: "The monthly revenue from services only.", fr: "Les revenus mensuels des services uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Reports): The monthly revenue from subscription products only.",
      fr: "Source Odoo Learn (Rapports d'abonnement) : les revenus mensuels des produits d'abonnement uniquement.",
    },
  }),
  complexQ({
    id: "sub-011",
    module: "subscription",
    text: {
      en: "What does it mean if this month’s retention rate is 90%? (Odoo Learn — Subscription Reports)",
      fr: "Qu’est-ce que cela signifie si le taux de rétention de ce mois-ci est de 90 % ? (Odoo Learn — Rapports d'abonnement)",
    },
    correct: {
      en: "The company has kept 90% of its subscribers from the previous month.",
      fr: "L'entreprise a conservé 90 % de ses abonnés du mois précédent.",
    },
    distractors: [
      { en: "The company has kept 90% of its profits from the previous month.", fr: "L'entreprise a conservé 90 % de ses bénéfices du mois précédent." },
      { en: "The company has kept 10% of its total customers from the previous month.", fr: "L'entreprise a conservé 10 % de sa clientèle totale du mois précédent." },
      { en: "90% of customers from the previous month have canceled their subscriptions.", fr: "90% des clients du mois précédent ont résilié leur abonnement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Reports): The company has kept 90% of its subscribers from the previous month.",
      fr: "Source Odoo Learn (Rapports d'abonnement) : La société a conservé 90 % de ses abonnés du mois précédent.",
    },
  }),
  complexQ({
    id: "sub-012",
    module: "subscription",
    text: {
      en: "Which of the following information is NOT accessible directly from the subscription order? (Odoo Learn — Subscription Reports)",
      fr: "Laquelle des informations suivantes n’est PAS accessible directement depuis la commande d’abonnement ? (Odoo Learn — Rapports d'abonnement)",
    },
    correct: {
      en: "ARR",
      fr: "AR",
    },
    distractors: [
      { en: "MRR", fr: "MRR" },
      { en: "Campaign", fr: "Campagne" },
      { en: "Source", fr: "Source" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Reports): ARR",
      fr: "Source Odoo Learn (Rapports d'abonnement) : ARR",
    },
  }),
  complexQ({
    id: "sub-013",
    module: "subscription",
    text: {
      en: "What activity type do I set to create a to-do task? (Odoo Learn — Automation Rules)",
      fr: "Quel type d'activité dois-je définir pour créer une tâche à faire ? (Odoo Learn — Règles d'automatisation)",
    },
    correct: {
      en: "To-do",
      fr: "Faire",
    },
    distractors: [
      { en: "Reminder", fr: "Rappel" },
      { en: "Follow-up", fr: "Suivi" },
      { en: "Task", fr: "Tâche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automation Rules): To-do",
      fr: "Source Odoo Learn (Règles d'automatisation) : To-do",
    },
  }),
  complexQ({
    id: "sub-014",
    module: "subscription",
    text: {
      en: "What section can I find the number of subscriptions an automation rule applies to? (Odoo Learn — Automation Rules)",
      fr: "Dans quelle section puis-je trouver le nombre d'abonnements auxquels une règle d'automatisation s'applique ? (Odoo Learn — Règles d'automatisation)",
    },
    correct: {
      en: "Under the `Apply On` section",
      fr: "Dans la section « Appliquer sur »",
    },
    distractors: [
      { en: "Under the `Action` Section", fr: "Sous la section « Action »" },
      { en: "Under the `Activity` section", fr: "Dans la section « Activité »" },
      { en: "Under the `Rules` section", fr: "Dans la section « Règles »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automation Rules): Under the `Apply On` section",
      fr: "Source Odoo Learn (Règles d'automatisation) : dans la section « Appliquer sur »",
    },
  }),
  complexQ({
    id: "sub-015",
    module: "subscription",
    text: {
      en: "What is the `Over` field used for? (Odoo Learn — Automation Rules)",
      fr: "A quoi sert le champ « Plus » ? (Odoo Learn — Règles d'automatisation)",
    },
    correct: {
      en: "To set the period of time over which the chosen KPIs are calculated",
      fr: "Pour définir la période de temps sur laquelle les KPI choisis sont calculés",
    },
    distractors: [
      { en: "To set which users are included in the automation", fr: "Pour définir quels utilisateurs sont inclus dans l'automatisation" },
      { en: "To set which activities are included in the automation", fr: "Pour définir les activités incluses dans l'automatisation" },
      { en: "To set the activity that is included in the automation", fr: "Pour définir l'activité incluse dans l'automatisation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automation Rules): To set the period of time over which the chosen KPIs are calculated",
      fr: "Source Odoo Learn (Règles d'automatisation) : Pour définir la période de temps sur laquelle les KPI choisis sont calculés",
    },
  }),
  complexQ({
    id: "sub-016",
    module: "subscription",
    text: {
      en: "Where do I go to enable self-service options? (Odoo Learn — Self-Service Subscriptions)",
      fr: "Où puis-je activer les options de libre-service ? (Odoo Learn — Abonnements libre-service)",
    },
    correct: {
      en: "Subscriptions > Configuration > Recurring Plans",
      fr: "Abonnements > Configuration > Forfaits récurrents",
    },
    distractors: [
      { en: "Subscriptions > Products > Self-Service", fr: "Abonnements > Produits > Libre-service" },
      { en: "Subscriptions > Sales Order > Self-Service Tab", fr: "Abonnements > Commande client > Onglet Libre-service" },
      { en: "Subscriptions > Configuration > Subscriptions Self-Service", fr: "Abonnements > Configuration > Abonnements libre-service" },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-Service Subscriptions): Subscriptions > Configuration > Recurring Plans",
      fr: "Source Odoo Learn (Abonnements libre-service) : Abonnements > Configuration > Forfaits récurrents",
    },
  }),
  complexQ({
    id: "sub-017",
    module: "subscription",
    text: {
      en: "Which self-service option should I enable, so the customer can renew their subscription on their own? (Odoo Learn — Self-Service Subscriptions)",
      fr: "Quelle option de libre-service dois-je activer pour que le client puisse renouveler lui-même son abonnement ? (Odoo Learn — Abonnements libre-service)",
    },
    correct: {
      en: "Renew",
      fr: "Renouveler",
    },
    distractors: [
      { en: "Closable", fr: "Fermable" },
      { en: "Refresh", fr: "Rafraîchir" },
      { en: "There is no self-service option to allow customers to renew their own subscriptions", fr: "Il n'existe pas d'option en libre-service permettant aux clients de renouveler leurs propres abonnements." },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-Service Subscriptions): Renew",
      fr: "Source Odoo Learn (abonnements libre-service) : renouveler",
    },
  }),
  complexQ({
    id: "sub-018",
    module: "subscription",
    text: {
      en: "Where do I check what the self-service options look like for customers? (Odoo Learn — Self-Service Subscriptions)",
      fr: "Où puis-je vérifier à quoi ressemblent les options de libre-service pour les clients ? (Odoo Learn — Abonnements libre-service)",
    },
    correct: {
      en: "Subscriptions > Subscriptions > Select active subscription > Customer preview",
      fr: "Abonnements > Abonnements > Sélectionner un abonnement actif > Aperçu client",
    },
    distractors: [
      { en: "Subscriptions > Customer Preview", fr: "Abonnements > Aperçu client" },
      { en: "Subscriptions > Configuration > Recurring Plans > Customer Preview", fr: "Abonnements > Configuration > Forfaits récurrents > Aperçu client" },
      { en: "There is no way to check what the self-service options look like for customers", fr: "Il n'existe aucun moyen de vérifier à quoi ressemblent les options de libre-service pour les clients." },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-Service Subscriptions): Subscriptions > Subscriptions > Select active subscription > Customer preview",
      fr: "Source Odoo Learn (Abonnements libre-service) : Abonnements > Abonnements > Sélectionner un abonnement actif > Aperçu client",
    },
  }),
  complexQ({
    id: "sub-019",
    module: "subscription",
    text: {
      en: "Where do I find the list of scheduled actions? (Odoo Learn — Scheduled actions in Subscriptions)",
      fr: "Où puis-je trouver la liste des actions planifiées ? (Odoo Learn — Actions planifiées dans les abonnements)",
    },
    correct: {
      en: "Settings app > Technical > Scheduled Actions",
      fr: "Application Paramètres > Technique > Actions planifiées",
    },
    distractors: [
      { en: "Subscriptions app > Automations > Scheduled Actions", fr: "Application Abonnements > Automatisations > Actions planifiées" },
      { en: "Settings app > Automations > Scheduled Actions", fr: "Application Paramètres > Automatisations > Actions planifiées" },
      { en: "Sales app > Technical > Scheduled Actions", fr: "Application de vente > Technique > Actions planifiées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled actions in Subscriptions): Settings app > Technical > Scheduled Actions",
      fr: "Source Odoo Learn (Actions planifiées dans les abonnements) : Application Paramètres > Technique > Actions planifiées",
    },
  }),
  complexQ({
    id: "sub-020",
    module: "subscription",
    text: {
      en: "What does setting a negative number for the ‘Number of Calls’ field do? (Odoo Learn — Scheduled actions in Subscriptions)",
      fr: "À quoi sert la définition d’un nombre négatif pour le champ « Nombre d’appels » ? (Odoo Learn — Actions planifiées dans les abonnements)",
    },
    correct: {
      en: "Causes the action to run indefinitely",
      fr: "Provoque l'exécution de l'action indéfiniment",
    },
    distractors: [
      { en: "Causes the action to not run at all", fr: "L'action ne s'exécute pas du tout" },
      { en: "Causes the action to undo its last scheduled action", fr: "Permet à l'action d'annuler sa dernière action planifiée" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled actions in Subscriptions): Causes the action to run indefinitely",
      fr: "Source Odoo Learn (Actions planifiées dans les abonnements) : provoque l'exécution de l'action indéfiniment",
    },
  }),
  complexQ({
    id: "sub-021",
    module: "subscription",
    text: {
      en: "What does a priority of “0” mean? (Odoo Learn — Scheduled actions in Subscriptions)",
      fr: "Que signifie une priorité de « 0 » ? (Odoo Learn — Actions planifiées dans les abonnements)",
    },
    correct: {
      en: "The action will have the highest priority",
      fr: "L'action aura la plus haute priorité",
    },
    distractors: [
      { en: "The action will have the lowest priority", fr: "L'action aura la priorité la plus basse" },
      { en: "The action will wait for all actions on the same model to run first", fr: "L'action attendra que toutes les actions sur le même modèle soient exécutées en premier" },
      { en: "The action has no priority", fr: "L'action n'a pas de priorité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled actions in Subscriptions): The action will have the highest priority",
      fr: "Source Odoo Learn (Actions planifiées dans les abonnements) : L'action aura la plus haute priorité",
    },
  }),
  complexQ({
    id: "sub-022",
    module: "subscription",
    text: {
      en: "What view option should I choose if I want to see numerical data? (Odoo Learn — Subscriptions MRR Reports)",
      fr: "Quelle option d'affichage dois-je choisir si je souhaite voir des données numériques ? (Odoo Learn — Rapports MRR des abonnements)",
    },
    correct: {
      en: "Pivot table",
      fr: "Tableau croisé dynamique",
    },
    distractors: [
      { en: "Bar graph", fr: "Graphique à barres" },
      { en: "Pie graph", fr: "Graphique circulaire" },
      { en: "Line graph", fr: "Graphique linéaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions MRR Reports): Pivot table",
      fr: "Source Odoo Learn (Rapports MRR d'abonnements) : tableau croisé dynamique",
    },
  }),
  complexQ({
    id: "sub-023",
    module: "subscription",
    text: {
      en: "What’s the default unit value for the vertical axis in the MRR Breakdown report? (Odoo Learn — Subscriptions MRR Reports)",
      fr: "Quelle est la valeur unitaire par défaut pour l'axe vertical dans le rapport de répartition MRR ? (Odoo Learn — Rapports MRR des abonnements)",
    },
    correct: {
      en: "Currency",
      fr: "Devise",
    },
    distractors: [
      { en: "Time", fr: "Temps" },
      { en: "Sales people", fr: "Les vendeurs" },
      { en: "Product", fr: "Produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions MRR Reports): Currency",
      fr: "Source Odoo Learn (Rapports MRR d'abonnements) : Devise",
    },
  }),
  complexQ({
    id: "sub-024",
    module: "subscription",
    text: {
      en: "By what default grouping does Odoo break down the Subscription Analysis report, on the pivot view’s vertical axis? (Odoo Learn — Subscriptions MRR Reports)",
      fr: "Par quel regroupement par défaut Odoo décompose-t-il le rapport d'analyse des abonnements, sur l'axe vertical de la vue pivot ? (Odoo Learn — Rapports MRR des abonnements)",
    },
    correct: {
      en: "Quotation template",
      fr: "Modèle de devis",
    },
    distractors: [
      { en: "Sales person", fr: "Vendeur" },
      { en: "Subscription product", fr: "Produit d'abonnement" },
      { en: "Customer", fr: "Client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions MRR Reports): Quotation template",
      fr: "Source Odoo Learn (Rapports MRR d'abonnements) : Modèle de devis",
    },
  }),
  complexQ({
    id: "sub-025",
    module: "subscription",
    text: {
      en: "To only view non-renewing plans in a report, which filter should be applied? (Odoo Learn — Subscriptions Behavioral Reports)",
      fr: "Pour afficher uniquement les forfaits non renouvelés dans un rapport, quel filtre faut-il appliquer ? (Odoo Learn — Rapports comportementaux des abonnements)",
    },
    correct: {
      en: "Churned",
      fr: "Baratté",
    },
    distractors: [
      { en: "In Progress", fr: "En cours" },
      { en: "Lost", fr: "Perdu" },
      { en: "Cancelled", fr: "Annulé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions Behavioral Reports): Churned",
      fr: "Source Odoo Learn (Rapports comportementaux des abonnements) : baratté",
    },
  }),
  complexQ({
    id: "sub-026",
    module: "subscription",
    text: {
      en: "What does grouping by 'Product' help identify? (Odoo Learn — Subscriptions Behavioral Reports)",
      fr: "Qu'est-ce que le regroupement par « Produit » permet d'identifier ? (Odoo Learn — Rapports comportementaux des abonnements)",
    },
    correct: {
      en: "Best-performing subscription offerings",
      fr: "Offres d'abonnement les plus performantes",
    },
    distractors: [
      { en: "Supplier issues", fr: "Problèmes avec les fournisseurs" },
      { en: "Most profitable employees", fr: "Employés les plus rentables" },
      { en: "Customer loyalty trends", fr: "Tendances de fidélisation des clients" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions Behavioral Reports): Best-performing subscription offerings",
      fr: "Source Odoo Learn (Rapports comportementaux des abonnements) : offres d'abonnement les plus performantes",
    },
  }),
  complexQ({
    id: "sub-027",
    module: "subscription",
    text: {
      en: "Where in Odoo can you find an overview of all active subscriptions? (Odoo Learn — Subscriptions Behavioral Reports)",
      fr: "Où dans Odoo pouvez-vous trouver un aperçu de tous les abonnements actifs ? (Odoo Learn — Rapports comportementaux des abonnements)",
    },
    correct: {
      en: "Subscriptions dashboard",
      fr: "Tableau de bord des abonnements",
    },
    distractors: [
      { en: "Sales Orders dashboard", fr: "Tableau de bord des commandes clients" },
      { en: "MRR Timeline", fr: "Chronologie du MRR" },
      { en: "Product Catalog", fr: "Catalogue de produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions Behavioral Reports): Subscriptions dashboard",
      fr: "Source Odoo Learn (Rapports comportementaux des abonnements) : Tableau de bord des abonnements",
    },
  }),
  complexQ({
    id: "sub-028",
    module: "subscription",
    text: {
      en: "Why do you need the Inventory app for subscriptions with deliveries? (Odoo Learn — Subscriptions with Deliveries)",
      fr: "Pourquoi avez-vous besoin de l'application Inventaire pour les abonnements avec livraisons ? (Odoo Learn — Abonnements avec livraisons)",
    },
    correct: {
      en: "The Inventory app allows me to add shipping information to quotations and automatically create delivery orders.",
      fr: "L'application Inventaire me permet d'ajouter des informations d'expédition aux devis et de créer automatiquement des bons de livraison.",
    },
    distractors: [
      { en: "I can’t ship any products unless I have a minimum number of them in my inventory.", fr: "Je ne peux expédier aucun produit à moins d’en avoir un nombre minimum dans mon inventaire." },
      { en: "All subscriptions require a physical product whose warehouse location is tracked in Inventory.", fr: "Tous les abonnements nécessitent un produit physique dont l'emplacement de l'entrepôt est suivi dans l'inventaire." },
      { en: "The Inventory app is not needed for handling deliveries. I need the Delivery app.", fr: "L'application Inventaire n'est pas nécessaire pour gérer les livraisons. J'ai besoin de l'application Livraison." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions with Deliveries): The Inventory app allows me to add shipping information to quotations and automatically create delivery orders.",
      fr: "Source Odoo Learn (Abonnements avec livraisons) : L'application Inventaire me permet d'ajouter des informations d'expédition aux devis et de créer automatiquement des bons de livraison.",
    },
  }),
  complexQ({
    id: "sub-029",
    module: "subscription",
    text: {
      en: "What information on a product form is NOT needed for it to be used in a subscription with deliveries? (Odoo Learn — Subscriptions with Deliveries)",
      fr: "Quelles informations sur une fiche produit ne sont PAS nécessaires pour que celui-ci soit utilisé dans un abonnement avec livraisons ? (Odoo Learn — Abonnements avec livraisons)",
    },
    correct: {
      en: "You must have set a barcode for the product so you can track it.",
      fr: "Vous devez avoir défini un code-barres pour le produit afin de pouvoir le suivre.",
    },
    distractors: [
      { en: "The Subscriptions checkbox beneath the product’s name must be ticked.", fr: "La case Abonnements sous le nom du produit doit être cochée." },
      { en: "A recurring plan must be set in the “Recurring prices” tab.", fr: "Un forfait récurrent doit être paramétré dans l’onglet « Tarifs récurrents »." },
      { en: "Its Product Type must not be set to Service, since you can’t physically ship a service.", fr: "Son type de produit ne doit pas être défini sur Service, car vous ne pouvez pas physiquement expédier un service." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions with Deliveries): You must have set a barcode for the product so you can track it.",
      fr: "Source Odoo Learn (Abonnements avec livraisons) : Vous devez avoir défini un code barre pour le produit afin de pouvoir le suivre.",
    },
  }),
  complexQ({
    id: "sub-030",
    module: "subscription",
    text: {
      en: "When creating or editing a delivery method for a subscription product, which app do you use? (Odoo Learn — Subscriptions with Deliveries)",
      fr: "Lorsque vous créez ou modifiez un mode de livraison pour un produit par abonnement, quelle application utilisez-vous ? (Odoo Learn — Abonnements avec livraisons)",
    },
    correct: {
      en: "The Inventory app.",
      fr: "L'application Inventaire.",
    },
    distractors: [
      { en: "The Subscriptions app.", fr: "L'application Abonnements." },
      { en: "The Delivery app.", fr: "L'application Livraison." },
      { en: "The Settings app.", fr: "L'application Paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions with Deliveries): The Inventory app.",
      fr: "Source Odoo Learn (Abonnements avec livraisons) : L'application Inventaire.",
    },
  }),
  mcq3Q({
    id: "sub-031",
    module: "subscription",
    text: {
      en: "What are recurrence periods? (Odoo Learn — Subscription Basics)",
      fr: "Que sont les périodes de récidive ? (Odoo Learn — Bases de l'abonnement)",
    },
    correct: {
      en: "The time periods in which subscriptions renew.",
      fr: "Les périodes de temps pendant lesquelles les abonnements se renouvellent.",
    },
    distractors: [
      { en: "The number of times a customer purchases a subscription.", fr: "Le nombre de fois qu'un client achète un abonnement." },
      { en: "The time periods in which subscription products are created.", fr: "Les périodes pendant lesquelles les produits d'abonnement sont créés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): The time periods in which subscriptions renew.",
      fr: "Source Odoo Learn (Bases de l'abonnement) : Les périodes pendant lesquelles les abonnements se renouvellent.",
    },
  }),
  mcq3Q({
    id: "sub-032",
    module: "subscription",
    text: {
      en: "Where do you configure subscription pricing? (Odoo Learn — Subscription Basics)",
      fr: "Où configurez-vous le prix de l'abonnement ? (Odoo Learn — Bases de l'abonnement)",
    },
    correct: {
      en: "In the “Time-based pricing” tab of the product form.",
      fr: "Dans l'onglet « Tarification au temps » du formulaire produit.",
    },
    distractors: [
      { en: "In the “General Information” tab of the product form.", fr: "Dans l'onglet « Informations générales » de la fiche produit." },
      { en: "On the “Subscriptions Pricing” page in the Configuration menu.", fr: "On the “Subscriptions Pricing” page in the Configuration menu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): In the “Time-based pricing” tab of the product form.",
      fr: "Source Odoo Learn (Bases de l'abonnement) : Dans l'onglet « Tarification basée sur le temps » du formulaire produit.",
    },
  }),
  mcq3Q({
    id: "sub-033",
    module: "subscription",
    text: {
      en: "How do you specify that a product is a subscription product? (Odoo Learn — Subscription Basics)",
      fr: "Comment spécifier qu'un produit est un produit par abonnement ? (Odoo Learn — Bases de l'abonnement)",
    },
    correct: {
      en: "Check the “Recurring” box on the product page.",
      fr: "Cochez la case « Récurrent » sur la page du produit.",
    },
    distractors: [
      { en: "Check the “Can be Sold” box on the product page.", fr: "Cochez la case « Peut être vendu » sur la page du produit." },
      { en: "Check the “Can be Purchased” box on the product page.", fr: "Cochez la case « Peut être acheté » sur la page du produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): Check the “Recurring” box on the product page.",
      fr: "Source Odoo Learn (Bases de l'abonnement) : Cochez la case « Récurrent » sur la page produit.",
    },
  }),
  mcq3Q({
    id: "sub-034",
    module: "subscription",
    text: {
      en: "How do you turn a sales order into a subscription order? (Odoo Learn — Subscription Basics)",
      fr: "Comment transformer une commande client en commande d’abonnement ? (Odoo Learn — Bases de l'abonnement)",
    },
    correct: {
      en: "Add a “Recurrence” to the sales order.",
      fr: "Ajoutez une « Récurrence » à la commande client.",
    },
    distractors: [
      { en: "Add multiple products to the sales order.", fr: "Ajoutez plusieurs produits à la commande client." },
      { en: "Add “Payment Terms” to the sales order.", fr: "Ajoutez des « Conditions de paiement » à la commande client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): Add a “Recurrence” to the sales order.",
      fr: "Source Odoo Learn (Bases de l'abonnement) : Ajoutez une « Récurrence » à la commande client.",
    },
  }),
];
