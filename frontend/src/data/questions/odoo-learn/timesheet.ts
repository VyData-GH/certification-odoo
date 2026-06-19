import { complexQ, mcq3Q } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const timesheetLearnQuestions = [
  mcq3Q({
    id: "ts-025",
    module: "timesheet",
    text: {
      en: "By default, what happens when you start the timer and stop it after three minutes? (Odoo Learn — Timesheets basics)",
      fr: "Par défaut, que se passe-t-il lorsque vous démarrez le minuteur et l'arrêtez au bout de trois minutes ? (Odoo Learn — Notions de base sur les feuilles de temps)",
    },
    correct: {
      en: "It is logging fifteen minutes.",
      fr: "Il enregistre quinze minutes.",
    },
    distractors: [
      { en: "It is logging three minutes.", fr: "Il enregistre trois minutes." },
      { en: "It is logging five minutes.", fr: "Il enregistre cinq minutes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets basics): It is logging fifteen minutes.",
      fr: "Source Odoo Learn (bases des feuilles de temps) : il enregistre quinze minutes.",
    },
  }),
  mcq3Q({
    id: "ts-026",
    module: "timesheet",
    text: {
      en: "What does it mean when the amount of time at the bottom of a column is red? (Odoo Learn — Timesheets basics)",
      fr: "Qu'est-ce que cela signifie lorsque la durée en bas d'une colonne est rouge ? (Odoo Learn — Notions de base sur les feuilles de temps)",
    },
    correct: {
      en: "You have logged less time than your contractual working hours.",
      fr: "Vous avez passé moins de temps que vos heures de travail contractuelles.",
    },
    distractors: [
      { en: "You have logged more time than your contractual working hours.", fr: "Vous avez enregistré plus de temps que vos heures de travail contractuelles." },
      { en: "You haven’t logged anything yet for that day.", fr: "Vous n’avez encore rien enregistré pour cette journée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets basics): You have logged less time than your contractual working hours.",
      fr: "Source Odoo Learn (bases des feuilles de temps) : Vous avez enregistré moins de temps que vos heures de travail contractuelles.",
    },
  }),
  complexQ({
    id: "ts-027",
    module: "timesheet",
    text: {
      en: "How can you select specific timesheets to validate? (Odoo Learn — Timesheets basics)",
      fr: "Comment sélectionner des feuilles de temps spécifiques à valider ? (Odoo Learn — Notions de base sur les feuilles de temps)",
    },
    correct: {
      en: "Go to the List view, select the timesheet entries, and click Validate.",
      fr: "Accédez à la vue Liste, sélectionnez les entrées de feuille de temps et cliquez sur Valider.",
    },
    distractors: [
      { en: "Go to the Grid view, select the timesheet entries, and click Validate.", fr: "Accédez à la vue Grille, sélectionnez les entrées de feuille de temps et cliquez sur Valider." },
      { en: "Go to the Kanban view, select the timesheet entries, and click Validate.", fr: "Accédez à la vue Kanban, sélectionnez les entrées de feuille de temps et cliquez sur Valider." },
      { en: "It’s not possible. Timesheets can only be validated altogether.", fr: "Ce n’est pas possible. Les feuilles de temps ne peuvent être validées que dans leur totalité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets basics): Go to the List view, select the timesheet entries, and click Validate.",
      fr: "Source Odoo Learn (bases des feuilles de temps) : Accédez à la vue Liste, sélectionnez les entrées de la feuille de temps et cliquez sur Valider.",
    },
  }),
  mcq3Q({
    id: "ts-028",
    module: "timesheet",
    text: {
      en: "How to start and stop the timer using a keyboard shortcut? (Odoo Learn — Timesheets basics)",
      fr: "Comment démarrer et arrêter le chronomètre à l'aide d'un raccourci clavier ? (Odoo Learn — Notions de base sur les feuilles de temps)",
    },
    correct: {
      en: "Press the letter on the left of a timesheet to start the timer, and press it once more to stop it.",
      fr: "Appuyez sur la lettre à gauche d'une feuille de temps pour démarrer le chronomètre, et appuyez à nouveau dessus pour l'arrêter.",
    },
    distractors: [
      { en: "Press Shift+S to start the timer, and press Shift+S to stop it.", fr: "Appuyez sur Shift+S pour démarrer le minuteur et appuyez sur Shift+S pour l'arrêter." },
      { en: "Press 1 to start the timer, and press 0 to stop it.", fr: "Appuyez sur 1 pour démarrer le minuteur et appuyez sur 0 pour l'arrêter." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets basics): Press the letter on the left of a timesheet to start the timer, and press it once more to stop it.",
      fr: "Source Odoo Learn (bases des feuilles de temps) : Appuyez sur la lettre à gauche d'une feuille de temps pour démarrer le chronomètre, et appuyez à nouveau dessus pour l'arrêter.",
    },
  }),
  mcq3Q({
    id: "ts-029",
    module: "timesheet",
    text: {
      en: "What type of timesheet reminder emails can be sent to your teams? (Odoo Learn — Timesheets configuration and leaderboard)",
      fr: "Quels types d’e-mails de rappel de feuilles de temps peuvent être envoyés à vos équipes ? (Odoo Learn — Configuration des feuilles de temps et classement)",
    },
    correct: {
      en: "Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets.",
      fr: "À la fois un e-mail de rappel pour que les employés soumettent leurs feuilles de temps et un e-mail de rappel pour que les approbateurs valident les feuilles de temps de leur équipe.",
    },
    distractors: [
      { en: "A reminder email for employees to submit their timesheets.", fr: "Un e-mail de rappel pour que les employés soumettent leurs feuilles de temps." },
      { en: "A reminder email for approvers to validate their team’s timesheets.", fr: "Un e-mail de rappel destiné aux approbateurs pour valider les feuilles de temps de leur équipe." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets configuration and leaderboard): Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets.",
      fr: "Source Odoo Learn (configuration et classement des feuilles de temps) : à la fois un e-mail de rappel pour que les employés soumettent leurs feuilles de temps et un e-mail de rappel pour que les approbateurs valident les feuilles de temps de leur équipe.",
    },
  }),
  mcq3Q({
    id: "ts-030",
    module: "timesheet",
    text: {
      en: "How do you activate the billing rate Indicators? (Odoo Learn — Timesheets configuration and leaderboard)",
      fr: "Comment activer les indicateurs de taux de facturation ? (Odoo Learn — Configuration des feuilles de temps et classement)",
    },
    correct: {
      en: "Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators.",
      fr: "Odoo > Feuilles de temps > Configuration > Paramètres > Indicateurs de taux de facturation.",
    },
    distractors: [
      { en: "You don't, it’s activated by default.", fr: "Ce n’est pas le cas, il est activé par défaut." },
      { en: "Odoo > Timesheets > Reporting > By Employee > Billing Rate Indicators.", fr: "Odoo > Feuilles de temps > Reporting > Par employé > Indicateurs de taux de facturation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets configuration and leaderboard): Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators.",
      fr: "Source Odoo Learn (Configuration et classement des feuilles de temps) : Odoo > Feuilles de temps > Configuration > Paramètres > Indicateurs de taux de facturation.",
    },
  }),
  mcq3Q({
    id: "ts-031",
    module: "timesheet",
    text: {
      en: "What is required to activate the Leaderboard? (Odoo Learn — Timesheets configuration and leaderboard)",
      fr: "Que faut-il pour activer le classement ? (Odoo Learn — Configuration des feuilles de temps et classement)",
    },
    correct: {
      en: "Billing rate indicators need to be activated first.",
      fr: "Les indicateurs de taux de facturation doivent d’abord être activés.",
    },
    distractors: [
      { en: "The encoding method should be set to days/half-days.", fr: "La méthode de codage doit être définie sur jours/demi-journées." },
      { en: "Timesheet reminder emails need to be activated first.", fr: "Les e-mails de rappel des feuilles de temps doivent d’abord être activés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Timesheets configuration and leaderboard): Billing rate indicators need to be activated first.",
      fr: "Source Odoo Learn (Configuration des feuilles de temps et classement) : Les indicateurs de taux de facturation doivent d'abord être activés.",
    },
  }),
];
