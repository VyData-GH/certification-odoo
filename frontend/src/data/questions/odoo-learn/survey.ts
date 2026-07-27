import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const surveyLearnQuestions = [
complexQ({
    id: "srv-021",
    module: "survey",
    text: {
      en: "What is the benefit of using the 'Test' function before publishing a survey? (Odoo Learn — Survey Essentials)",
      fr: "Quel est l'intérêt d'utiliser la fonction « Test » avant de publier une enquête ? (Odoo Learn — Les essentiels de l'enquête)",
    },
    correct: {
      en: "It records entries as 'Test Entries' and helps check functionality",
      fr: "Il enregistre les entrées en tant qu'« Entrées de test » et permet de vérifier la fonctionnalité.",
    },
    distractors: [
      { en: "It clears out previous responses", fr: "Il efface les réponses précédentes" },
      { en: "It sends test results to all users", fr: "Il envoie les résultats des tests à tous les utilisateurs" },
      { en: "It converts the survey into a report", fr: "Il convertit l'enquête en rapport" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Essentials): It records entries as 'Test Entries' and helps check functionality",
      fr: "Source Odoo Learn (Survey Essentials) : il enregistre les entrées en tant que « Entrées de test » et permet de vérifier la fonctionnalité.",
    },
  }),
complexQ({
    id: "srv-022",
    module: "survey",
    text: {
      en: "What does the 'Allow Roaming' option enable in a survey? (Odoo Learn — Survey Essentials)",
      fr: "What does the 'Allow Roaming' option enable in a survey? (Odoo Learn — Les essentiels de l'enquête)",
    },
    correct: {
      en: "Letting participants return to previous pages",
      fr: "Permettre aux participants de revenir aux pages précédentes",
    },
    distractors: [
      { en: "Changing the survey language mid-session", fr: "Changer la langue de l'enquête en cours de session" },
      { en: "Saving answers automatically", fr: "Enregistrer automatiquement les réponses" },
      { en: "Sending reminders to participants", fr: "Envoi de rappels aux participants" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Essentials): Letting participants return to previous pages",
      fr: "Source Odoo Learn (Survey Essentials) : Permettre aux participants de revenir aux pages précédentes",
    },
  }),
complexQ({
    id: "srv-023",
    module: "survey",
    text: {
      en: "What does the 'End Message' tab control in a survey? (Odoo Learn — Survey Essentials)",
      fr: "What does the 'End Message' tab control in a survey? (Odoo Learn — Les essentiels de l'enquête)",
    },
    correct: {
      en: "The thank-you message shown after submission",
      fr: "Le message de remerciement affiché après la soumission",
    },
    distractors: [
      { en: "The follow-up email content", fr: "Le contenu de l'e-mail de suivi" },
      { en: "The survey’s scoring summary", fr: "Résumé de la notation de l’enquête" },
      { en: "Background image for the survey", fr: "Image d’arrière-plan de l’enquête" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Essentials): The thank-you message shown after submission",
      fr: "Source Odoo Learn (Survey Essentials) : Le message de remerciement affiché après la soumission",
    },
  }),
complexQ({
    id: "srv-024",
    module: "survey",
    text: {
      en: "Which of the following Question Types removes the 'Answers' tab because a custom response is required? (Odoo Learn — Questions & Sections)",
      fr: "Lequel des types de questions suivants supprime l'onglet \"Réponses\" car une réponse personnalisée est requise ? (Odoo Learn – Questions et sections)",
    },
    correct: {
      en: "Numerical Value",
      fr: "Valeur numérique",
    },
    distractors: [
      { en: "Multiple Choice: only one answer", fr: "Choix multiples : une seule réponse" },
      { en: "Matrix", fr: "Matrice" },
      { en: "Single Line Text Box", fr: "Zone de texte sur une seule ligne" },
    ],
    explanation: {
      en: "Source Odoo Learn (Questions & Sections): Numerical Value",
      fr: "Source Odoo Learn (Questions et sections) : Valeur numérique",
    },
  }),
complexQ({
    id: "srv-025",
    module: "survey",
    text: {
      en: "What does enabling the 'Mandatory Answer' option allow you to do? (Odoo Learn — Questions & Sections)",
      fr: "Que vous permet d'activer l'option « Réponse obligatoire » ? (Odoo Learn – Questions et sections)",
    },
    correct: {
      en: "Prevent users from submitting a survey without answering",
      fr: "Empêcher les utilisateurs de soumettre une enquête sans y répondre",
    },
    distractors: [
      { en: "Set a time limit for the survey", fr: "Fixer une limite de temps pour l'enquête" },
      { en: "Randomize question order", fr: "Ordre aléatoire des questions" },
      { en: "Attach images to questions", fr: "Joindre des images aux questions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Questions & Sections): Prevent users from submitting a survey without answering",
      fr: "Source Odoo Learn (Questions et sections) : Empêcher les utilisateurs de soumettre une enquête sans y répondre",
    },
  }),
complexQ({
    id: "srv-026",
    module: "survey",
    text: {
      en: "What purpose does the 'Show Comments Field' option serve in multiple-choice questions? (Odoo Learn — Questions & Sections)",
      fr: "À quoi sert l'option « Afficher le champ de commentaires » dans les questions à choix multiples ? (Odoo Learn – Questions et sections)",
    },
    correct: {
      en: "It allows participants to explain their answer",
      fr: "Il permet aux participants d'expliquer leur réponse",
    },
    distractors: [
      { en: "It randomizes the answer order", fr: "Il randomise l'ordre des réponses" },
      { en: "It validates the participant’s email", fr: "Il valide l’email du participant" },
      { en: "It converts the question into a Matrix type", fr: "Il convertit la question en type Matrix" },
    ],
    explanation: {
      en: "Source Odoo Learn (Questions & Sections): It allows participants to explain their answer",
      fr: "Source Odoo Learn (Questions & Sections) : Elle permet aux participants d'expliquer leur réponse",
    },
  }),
complexQ({
    id: "srv-027",
    module: "survey",
    text: {
      en: "What appears on a participant’s form page, if they failed a survey? (Odoo Learn — Survey Analysis)",
      fr: "Qu'est-ce qui apparaît sur la page de formulaire d'un participant s'il a échoué à une enquête ? (Odoo Learn – Analyse de l’enquête)",
    },
    correct: {
      en: "A red banner reading: ‘Failed’",
      fr: "Une bannière rouge indiquant : « Échec »",
    },
    distractors: [
      { en: "A green banner reading: ‘Failed’", fr: "Une bannière verte indiquant : « Échec »" },
      { en: "A green banner reading: ‘Did Not Pass’", fr: "Une banderole verte indiquant : « N’a pas réussi »" },
      { en: "A red banner reading: ‘Did Not Pass’", fr: "Une banderole rouge indiquant : « N’a pas réussi »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Analysis): A red banner reading: ‘Failed’",
      fr: "Source Odoo Learn (Analyse de l'enquête) : Une bannière rouge indiquant : « Échec »",
    },
  }),
complexQ({
    id: "srv-028",
    module: "survey",
    text: {
      en: "On the ‘See results’ page, showcasing results for a ‘Numerical Value’ question type, what can be seen to the top-right of the submitted responses? (Odoo Learn — Survey Analysis)",
      fr: "Sur la page « Voir les résultats », présentant les résultats pour un type de question « Valeur numérique », que peut-on voir en haut à droite des réponses soumises ? (Odoo Learn – Analyse de l’enquête)",
    },
    correct: {
      en: "Maximum, Minimum, and Average number responses",
      fr: "Nombre de réponses maximum, minimum et moyen",
    },
    distractors: [
      { en: "The most common submitted number", fr: "Le numéro soumis le plus souvent" },
      { en: "The least common submitted number", fr: "Le numéro soumis le moins souvent" },
      { en: "Popular, Least Popular, and Correct number responses", fr: "Réponses numériques populaires, les moins populaires et correctes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Analysis): Maximum, Minimum, and Average number responses",
      fr: "Source Odoo Learn (analyse de l'enquête) : nombre de réponses maximum, minimum et moyen",
    },
  }),
complexQ({
    id: "srv-029",
    module: "survey",
    text: {
      en: "On the ‘See results’ page, when do you see a Pie Graph representation of survey answers? (Odoo Learn — Survey Analysis)",
      fr: "Sur la page « Voir les résultats », quand voyez-vous une représentation graphique à secteurs des réponses à l'enquête ? (Odoo Learn – Analyse de l’enquête)",
    },
    correct: {
      en: "When there is only one correct answer to the question",
      fr: "Quand il n'y a qu'une seule bonne réponse à la question",
    },
    distractors: [
      { en: "When there are more wrong responses than correct answers", fr: "Quand il y a plus de mauvaises réponses que de bonnes réponses" },
      { en: "When the correct answer is a ‘Date’", fr: "Lorsque la bonne réponse est « Date »" },
      { en: "When there is multiple correct answers to the question", fr: "Lorsqu'il y a plusieurs bonnes réponses à la question" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Analysis): When there is only one correct answer to the question",
      fr: "Source Odoo Learn (Analyse d'enquête) : Quand il n'y a qu'une seule bonne réponse à la question",
    },
  }),
complexQ({
    id: "srv-030",
    module: "survey",
    text: {
      en: "What is the primary benefit of using Conditional Display in Odoo Surveys? (Odoo Learn — Conditional Displays)",
      fr: "Quel est le principal avantage de l’utilisation de l’affichage conditionnel dans les enquêtes Odoo ? (Odoo Learn – Affichages conditionnels)",
    },
    correct: {
      en: "It shows relevant questions  based on participant responses",
      fr: "Il montre des questions pertinentes basées sur les réponses des participants",
    },
    distractors: [
      { en: "It makes surveys longer and more comprehensive", fr: "Cela rend les enquêtes plus longues et plus complètes" },
      { en: "It ensures every participant answers every question", fr: "Il garantit que chaque participant répond à chaque question" },
      { en: "It disables questions based on survey timing", fr: "Il désactive les questions en fonction du moment de l'enquête" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conditional Displays): It shows relevant questions  based on participant responses",
      fr: "Source Odoo Learn (affichages conditionnels) : il affiche des questions pertinentes basées sur les réponses des participants",
    },
  }),
complexQ({
    id: "srv-031",
    module: "survey",
    text: {
      en: "Where do I configure Conditional Display settings in a survey question? (Odoo Learn — Conditional Displays)",
      fr: "Où puis-je configurer les paramètres d'affichage conditionnel dans une question d'enquête ? (Odoo Learn – Affichages conditionnels)",
    },
    correct: {
      en: "In the Options tab",
      fr: "Dans l'onglet Options",
    },
    distractors: [
      { en: "In the Survey tab", fr: "Dans l'onglet Enquête" },
      { en: "In the Design tab", fr: "Dans l'onglet Conception" },
      { en: "In the Question Preview", fr: "Dans l'aperçu de la question" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conditional Displays): In the Options tab",
      fr: "Source Odoo Learn (Affichages conditionnels) : Dans l'onglet Options",
    },
  }),
complexQ({
    id: "srv-032",
    module: "survey",
    text: {
      en: "What visual indicator shows that a survey question has Conditional Display logic applied? (Odoo Learn — Conditional Displays)",
      fr: "Quel indicateur visuel indique qu'une logique d'affichage conditionnel est appliquée à une question d'enquête ? (Odoo Learn – Affichages conditionnels)",
    },
    correct: {
      en: "A fork symbol with a tooltip",
      fr: "Un symbole de fourchette avec une info-bulle",
    },
    distractors: [
      { en: "A red exclamation mark", fr: "Un point d'exclamation rouge" },
      { en: "A checkmark next to the question", fr: "Une coche à côté de la question" },
      { en: "A lock icon next to the answer choices", fr: "Une icône de verrouillage à côté des choix de réponse" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conditional Displays): A fork symbol with a tooltip",
      fr: "Source Odoo Learn (Affichages conditionnels) : Un symbole de fourchette avec une info-bulle",
    },
  }),
complexQ({
    id: "srv-033",
    module: "survey",
    text: {
      en: "In the session manager, which feature helps attendees join the session easily from their mobile device? (Odoo Learn — Live Session Survey)",
      fr: "Dans le gestionnaire de session, quelle fonctionnalité permet aux participants de rejoindre facilement la session depuis leur appareil mobile ? (Odoo Learn – Enquête de session en direct)",
    },
    correct: {
      en: "A QR code",
      fr: "Un code QR",
    },
    distractors: [
      { en: "A downloadable mobile app", fr: "Une application mobile téléchargeable" },
      { en: "A short survey code", fr: "Un court code d'enquête" },
      { en: "A text message invite", fr: "Une invitation par SMS" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Session Survey): A QR code",
      fr: "Source Odoo Learn (Live Session Survey) : Un QR code",
    },
  }),
complexQ({
    id: "srv-034",
    module: "survey",
    text: {
      en: "Which of the following options is NOT available when a survey is set to 'Live Session' mode? (Odoo Learn — Live Session Survey)",
      fr: "Laquelle des options suivantes n'est PAS disponible lorsqu'une enquête est définie en mode « Session en direct » ? (Odoo Learn – Enquête de session en direct)",
    },
    correct: {
      en: "Pagination settings",
      fr: "Paramètres de pagination",
    },
    distractors: [
      { en: "Scoring", fr: "Notation" },
      { en: "Real-time response charts", fr: "Graphiques de réponse en temps réel" },
      { en: "Conditional questions", fr: "Questions conditionnelles" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Session Survey): Pagination settings",
      fr: "Source Odoo Learn (Enquête de session en direct) : Paramètres de pagination",
    },
  }),
complexQ({
    id: "srv-035",
    module: "survey",
    text: {
      en: "What happens when someone joins a Live Session after it has already started? (Odoo Learn — Live Session Survey)",
      fr: "Que se passe-t-il lorsque quelqu'un rejoint une session en direct alors qu'elle a déjà commencé ? (Odoo Learn — Live Session Survey)",
    },
    correct: {
      en: "They land on the current step of the session",
      fr: "Ils atterrissent sur l'étape en cours de la session",
    },
    distractors: [
      { en: "They begin from the very first question", fr: "Ils commencent dès la toute première question" },
      { en: "They are prompted to register before joining", fr: "Ils sont invités à s'inscrire avant de rejoindre" },
      { en: "They must wait until the host restarts", fr: "Ils doivent attendre que l'hôte redémarre" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Session Survey): They land on the current step of the session",
      fr: "Source Odoo Learn (Live Session Survey) : Ils atterrissent sur l'étape en cours de la session",
    },
  }),
];
