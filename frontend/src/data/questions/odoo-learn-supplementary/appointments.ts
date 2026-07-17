import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const appointmentsSupplementaryQuestions = [
  complexQ({
    id: "apt-001",
    module: "appointments",
    text: {
      en: "What is the function of setting a resource’s Capacity field in Odoo Appointments? (Odoo Learn — Appointments Basics)",
      fr: "Quelle est la fonction de définir le champ Capacité d’une ressource dans Odoo Appointments ? (Odoo Learn — Bases des rendez-vous)",
    },
    correct: {
      en: "Restricts the maximum number of attendees per booking",
      fr: "Limite le nombre maximum de participants par réservation",
    },
    distractors: [
      { en: "Defines the number of concurrent appointments a user can handle", fr: "Définit le nombre de rendez-vous simultanés qu'un utilisateur peut gérer" },
      { en: "Specifies available time slots for a resource", fr: "Spécifie les plages horaires disponibles pour une ressource" },
      { en: "Links the resource to a specific user", fr: "Lie la ressource à un utilisateur spécifique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appointments Basics): Restricts the maximum number of attendees per booking",
      fr: "Source Odoo Learn (bases des rendez-vous) : limite le nombre maximum de participants par réservation",
    },
  }),
  complexQ({
    id: "apt-002",
    module: "appointments",
    text: {
      en: "In the Questions tab, what does enabling the Mandatory checkbox do? (Odoo Learn — Appointments Basics)",
      fr: "Dans l'onglet Questions, à quoi sert l'activation de la case Obligatoire ? (Odoo Learn — Bases des rendez-vous)",
    },
    correct: {
      en: "Requires the visitor to answer before booking",
      fr: "Oblige le visiteur à répondre avant de réserver",
    },
    distractors: [
      { en: "Displays the question only on the backend", fr: "Affiche la question uniquement sur le backend" },
      { en: "Adds the response to internal notes", fr: "Ajoute la réponse aux notes internes" },
      { en: "Enables it as a reusable default question", fr: "L'active comme question par défaut réutilisable" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appointments Basics): Requires the visitor to answer before booking",
      fr: "Source Odoo Learn (bases des rendez-vous) : oblige le visiteur à répondre avant de réserver",
    },
  }),
  complexQ({
    id: "apt-003",
    module: "appointments",
    text: {
      en: "What is the significance of the “Allow booking within the next 15 days” setting? (Odoo Learn — Appointments Basics)",
      fr: "Quelle est la signification du paramètre « Autoriser la réservation dans les 15 prochains jours » ? (Odoo Learn — Bases des rendez-vous)",
    },
    correct: {
      en: "Limits how far ahead customers can book",
      fr: "Limite la durée à laquelle les clients peuvent réserver",
    },
    distractors: [
      { en: "Defines the maximum number of appointments per resource", fr: "Définit le nombre maximum de rendez-vous par ressource" },
      { en: "Controls cancellation time limits", fr: "Contrôle les délais d’annulation" },
      { en: "Restricts appointments to weekdays only", fr: "Limite les rendez-vous aux jours de semaine uniquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appointments Basics): Limits how far ahead customers can book",
      fr: "Source Odoo Learn (bases des rendez-vous) : limite le délai de réservation des clients",
    },
  }),
  complexQ({
    id: "apt-004",
    module: "appointments",
    text: {
      en: "Where can you enable the “Create Opportunity” feature for an appointment type? (Odoo Learn — Creating Opportunities)",
      fr: "Où pouvez-vous activer la fonctionnalité « Créer une opportunité » pour un type de rendez-vous ? (Odoo Learn — Créer des opportunités)",
    },
    correct: {
      en: "In the Options tab.",
      fr: "Dans l'onglet Options.",
    },
    distractors: [
      { en: "On the CRM dashboard.", fr: "Sur le tableau de bord CRM." },
      { en: "In the Questions tab.", fr: "Dans l'onglet Questions." },
      { en: "In the Scheduling window.", fr: "Dans la fenêtre Planification." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating Opportunities): In the Options tab.",
      fr: "Source Odoo Learn (Création d'opportunités) : Dans l'onglet Options.",
    },
  }),
  complexQ({
    id: "apt-005",
    module: "appointments",
    text: {
      en: "Which app- other than Appointments- must be installed in order to use the “Create Opportunity” option? (Odoo Learn — Creating Opportunities)",
      fr: "Quelle application, autre que Rendez-vous, doit être installée pour pouvoir utiliser l'option « Créer une opportunité » ? (Odoo Learn — Créer des opportunités)",
    },
    correct: {
      en: "CRM.",
      fr: "GRC.",
    },
    distractors: [
      { en: "Invoicing.", fr: "Facturation." },
      { en: "Project.", fr: "Projet." },
      { en: "Sales.", fr: "Ventes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating Opportunities): CRM.",
      fr: "Source Odoo Learn (Création d'opportunités) : CRM.",
    },
  }),
  complexQ({
    id: "apt-006",
    module: "appointments",
    text: {
      en: "What happens to the answers provided in the Questions tab when a customer books an appointment? (Odoo Learn — Creating Opportunities)",
      fr: "Qu'arrive-t-il aux réponses fournies dans l'onglet Questions lorsqu'un client prend rendez-vous ? (Odoo Learn — Créer des opportunités)",
    },
    correct: {
      en: "They are included on the CRM opportunity.",
      fr: "Ils sont inclus dans l'opportunité CRM.",
    },
    distractors: [
      { en: "They are sent as an email to the sales team", fr: "Ils sont envoyés par email à l'équipe commerciale" },
      { en: "They are stored only on the website.", fr: "Ils sont stockés uniquement sur le site Internet." },
      { en: "They are visible only to the appointment’s assigned user.", fr: "Ils ne sont visibles que par l’utilisateur attribué au rendez-vous." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating Opportunities): They are included on the CRM opportunity.",
      fr: "Source Odoo Learn (Création d'opportunités) : Elles sont incluses dans l'opportunité CRM.",
    },
  }),
  complexQ({
    id: "apt-007",
    module: "appointments",
    text: {
      en: "In Flexible mode, why does the Duration field switch to “depending on the slots”? (Odoo Learn — Flexible Scheduling)",
      fr: "En mode Flexible, pourquoi le champ Durée passe-t-il sur « en fonction des créneaux » ? (Odoo Learn — Planification flexible)",
    },
    correct: {
      en: "Duration is tied to the manually created time slots",
      fr: "La durée est liée aux plages horaires créées manuellement",
    },
    distractors: [
      { en: "Duration becomes inherited from the company working hours", fr: "La durée est héritée des horaires de travail de l'entreprise" },
      { en: "Duration is automatically calculated from recurring rules", fr: "La durée est automatiquement calculée à partir de règles récurrentes" },
      { en: "Duration is always fixed at one hour", fr: "La durée est toujours fixée à une heure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Scheduling): Duration is tied to the manually created time slots",
      fr: "Source Odoo Learn (Planification flexible) : La durée est liée aux plages horaires créées manuellement",
    },
  }),
  complexQ({
    id: "apt-008",
    module: "appointments",
    text: {
      en: "Why are no time slots displayed in the Availabilities tab after switching to Flexible mode? (Odoo Learn — Flexible Scheduling)",
      fr: "Pourquoi aucune plage horaire n'est affichée dans l'onglet Disponibilités après le passage en mode Flexible ? (Odoo Learn — Planification flexible)",
    },
    correct: {
      en: "Time slots are not auto-generated and must be entered manually",
      fr: "Les plages horaires ne sont pas générées automatiquement et doivent être saisies manuellement",
    },
    distractors: [
      { en: "The appointment becomes unpublished", fr: "Le rendez-vous devient inédit" },
      { en: "Flexible mode hides all existing settings permanently", fr: "Le mode flexible masque définitivement tous les paramètres existants" },
      { en: "Weekly slots are incompatible and must be manually reactivated", fr: "Les créneaux hebdomadaires sont incompatibles et doivent être réactivés manuellement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Scheduling): Time slots are not auto-generated and must be entered manually",
      fr: "Source Odoo Learn (Planification flexible) : Les plages horaires ne sont pas générées automatiquement et doivent être saisies manuellement",
    },
  }),
  complexQ({
    id: "apt-009",
    module: "appointments",
    text: {
      en: "When creating a new flexible time slot, which elements must be specified? (Odoo Learn — Flexible Scheduling)",
      fr: "Lors de la création d’une nouvelle plage horaire flexible, quels éléments doivent être précisés ? (Odoo Learn — Planification flexible)",
    },
    correct: {
      en: "Date, start time, and end time",
      fr: "Date, heure de début et heure de fin",
    },
    distractors: [
      { en: "Employee skill level and capacity", fr: "Niveau de compétence et capacité des employés" },
      { en: "Color theme and customer message", fr: "Thème de couleur et message client" },
      { en: "Channel and user groups", fr: "Groupes de canaux et d'utilisateurs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Scheduling): Date, start time, and end time",
      fr: "Source Odoo Learn (planification flexible) : date, heure de début et heure de fin",
    },
  }),
];
