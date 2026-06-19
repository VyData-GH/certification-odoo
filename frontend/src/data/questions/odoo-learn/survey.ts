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
      { en: "It sends test results to all users", fr: "It sends test results to all users" },
      { en: "It converts the survey into a report", fr: "It converts the survey into a report" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Essentials): It records entries as 'Test Entries' and helps check functionality",
      fr: "Source Odoo Learn (Survey Essentials): It records entries as 'Test Entries' and helps check functionality",
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
      fr: "Letting participants return to previous pages",
    },
    distractors: [
      { en: "Changing the survey language mid-session", fr: "Changing the survey language mid-session" },
      { en: "Saving answers automatically", fr: "Saving answers automatically" },
      { en: "Sending reminders to participants", fr: "Sending reminders to participants" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Essentials): Letting participants return to previous pages",
      fr: "Source Odoo Learn (Survey Essentials): Letting participants return to previous pages",
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
      fr: "The thank-you message shown after submission",
    },
    distractors: [
      { en: "The follow-up email content", fr: "The follow-up email content" },
      { en: "The survey’s scoring summary", fr: "The survey’s scoring summary" },
      { en: "Background image for the survey", fr: "Background image for the survey" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Essentials): The thank-you message shown after submission",
      fr: "Source Odoo Learn (Survey Essentials): The thank-you message shown after submission",
    },
  }),
  complexQ({
    id: "srv-024",
    module: "survey",
    text: {
      en: "Which of the following Question Types removes the 'Answers' tab because a custom response is required? (Odoo Learn — Questions & Sections)",
      fr: "Which of the following Question Types removes the 'Answers' tab because a custom response is required? (Odoo Learn — Questions & Sections)",
    },
    correct: {
      en: "Numerical Value",
      fr: "Numerical Value",
    },
    distractors: [
      { en: "Multiple Choice: only one answer", fr: "Multiple Choice: only one answer" },
      { en: "Matrix", fr: "Matrix" },
      { en: "Single Line Text Box", fr: "Single Line Text Box" },
    ],
    explanation: {
      en: "Source Odoo Learn (Questions & Sections): Numerical Value",
      fr: "Source Odoo Learn (Questions & Sections): Numerical Value",
    },
  }),
  complexQ({
    id: "srv-025",
    module: "survey",
    text: {
      en: "What does enabling the 'Mandatory Answer' option allow you to do? (Odoo Learn — Questions & Sections)",
      fr: "What does enabling the 'Mandatory Answer' option allow you to do? (Odoo Learn — Questions & Sections)",
    },
    correct: {
      en: "Prevent users from submitting a survey without answering",
      fr: "Prevent users from submitting a survey without answering",
    },
    distractors: [
      { en: "Set a time limit for the survey", fr: "Set a time limit for the survey" },
      { en: "Randomize question order", fr: "Randomize question order" },
      { en: "Attach images to questions", fr: "Attach images to questions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Questions & Sections): Prevent users from submitting a survey without answering",
      fr: "Source Odoo Learn (Questions & Sections): Prevent users from submitting a survey without answering",
    },
  }),
  complexQ({
    id: "srv-026",
    module: "survey",
    text: {
      en: "What purpose does the 'Show Comments Field' option serve in multiple-choice questions? (Odoo Learn — Questions & Sections)",
      fr: "What purpose does the 'Show Comments Field' option serve in multiple-choice questions? (Odoo Learn — Questions & Sections)",
    },
    correct: {
      en: "It allows participants to explain their answer",
      fr: "It allows participants to explain their answer",
    },
    distractors: [
      { en: "It randomizes the answer order", fr: "It randomizes the answer order" },
      { en: "It validates the participant’s email", fr: "It validates the participant’s email" },
      { en: "It converts the question into a Matrix type", fr: "It converts the question into a Matrix type" },
    ],
    explanation: {
      en: "Source Odoo Learn (Questions & Sections): It allows participants to explain their answer",
      fr: "Source Odoo Learn (Questions & Sections): It allows participants to explain their answer",
    },
  }),
  complexQ({
    id: "srv-027",
    module: "survey",
    text: {
      en: "What appears on a participant’s form page, if they failed a survey? (Odoo Learn — Survey Analysis)",
      fr: "What appears on a participant’s form page, if they failed a survey? (Odoo Learn — Survey Analysis)",
    },
    correct: {
      en: "A red banner reading: ‘Failed’",
      fr: "A red banner reading: ‘Failed’",
    },
    distractors: [
      { en: "A green banner reading: ‘Failed’", fr: "A green banner reading: ‘Failed’" },
      { en: "A green banner reading: ‘Did Not Pass’", fr: "A green banner reading: ‘Did Not Pass’" },
      { en: "A red banner reading: ‘Did Not Pass’", fr: "A red banner reading: ‘Did Not Pass’" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Analysis): A red banner reading: ‘Failed’",
      fr: "Source Odoo Learn (Survey Analysis): A red banner reading: ‘Failed’",
    },
  }),
  complexQ({
    id: "srv-028",
    module: "survey",
    text: {
      en: "On the ‘See results’ page, showcasing results for a ‘Numerical Value’ question type, what can be seen to the top-right of the submitted responses? (Odoo Learn — Survey Analysis)",
      fr: "On the ‘See results’ page, showcasing results for a ‘Numerical Value’ question type, what can be seen to the top-right of the submitted responses? (Odoo Learn — Survey Analysis)",
    },
    correct: {
      en: "Maximum, Minimum, and Average number responses",
      fr: "Maximum, Minimum, and Average number responses",
    },
    distractors: [
      { en: "The most common submitted number", fr: "The most common submitted number" },
      { en: "The least common submitted number", fr: "The least common submitted number" },
      { en: "Popular, Least Popular, and Correct number responses", fr: "Popular, Least Popular, and Correct number responses" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Analysis): Maximum, Minimum, and Average number responses",
      fr: "Source Odoo Learn (Survey Analysis): Maximum, Minimum, and Average number responses",
    },
  }),
  complexQ({
    id: "srv-029",
    module: "survey",
    text: {
      en: "On the ‘See results’ page, when do you see a Pie Graph representation of survey answers? (Odoo Learn — Survey Analysis)",
      fr: "On the ‘See results’ page, when do you see a Pie Graph representation of survey answers? (Odoo Learn — Survey Analysis)",
    },
    correct: {
      en: "When there is only one correct answer to the question",
      fr: "When there is only one correct answer to the question",
    },
    distractors: [
      { en: "When there are more wrong responses than correct answers", fr: "When there are more wrong responses than correct answers" },
      { en: "When the correct answer is a ‘Date’", fr: "When the correct answer is a ‘Date’" },
      { en: "When there is multiple correct answers to the question", fr: "When there is multiple correct answers to the question" },
    ],
    explanation: {
      en: "Source Odoo Learn (Survey Analysis): When there is only one correct answer to the question",
      fr: "Source Odoo Learn (Survey Analysis): When there is only one correct answer to the question",
    },
  }),
  complexQ({
    id: "srv-030",
    module: "survey",
    text: {
      en: "What is the primary benefit of using Conditional Display in Odoo Surveys? (Odoo Learn — Conditional Displays)",
      fr: "What is the primary benefit of using Conditional Display in Odoo Surveys? (Odoo Learn — Conditional Displays)",
    },
    correct: {
      en: "It shows relevant questions  based on participant responses",
      fr: "It shows relevant questions  based on participant responses",
    },
    distractors: [
      { en: "It makes surveys longer and more comprehensive", fr: "It makes surveys longer and more comprehensive" },
      { en: "It ensures every participant answers every question", fr: "It ensures every participant answers every question" },
      { en: "It disables questions based on survey timing", fr: "It disables questions based on survey timing" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conditional Displays): It shows relevant questions  based on participant responses",
      fr: "Source Odoo Learn (Conditional Displays): It shows relevant questions  based on participant responses",
    },
  }),
  complexQ({
    id: "srv-031",
    module: "survey",
    text: {
      en: "Where do I configure Conditional Display settings in a survey question? (Odoo Learn — Conditional Displays)",
      fr: "Where do I configure Conditional Display settings in a survey question? (Odoo Learn — Conditional Displays)",
    },
    correct: {
      en: "In the Options tab",
      fr: "In the Options tab",
    },
    distractors: [
      { en: "In the Survey tab", fr: "In the Survey tab" },
      { en: "In the Design tab", fr: "In the Design tab" },
      { en: "In the Question Preview", fr: "In the Question Preview" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conditional Displays): In the Options tab",
      fr: "Source Odoo Learn (Conditional Displays): In the Options tab",
    },
  }),
  complexQ({
    id: "srv-032",
    module: "survey",
    text: {
      en: "What visual indicator shows that a survey question has Conditional Display logic applied? (Odoo Learn — Conditional Displays)",
      fr: "What visual indicator shows that a survey question has Conditional Display logic applied? (Odoo Learn — Conditional Displays)",
    },
    correct: {
      en: "A fork symbol with a tooltip",
      fr: "A fork symbol with a tooltip",
    },
    distractors: [
      { en: "A red exclamation mark", fr: "A red exclamation mark" },
      { en: "A checkmark next to the question", fr: "A checkmark next to the question" },
      { en: "A lock icon next to the answer choices", fr: "A lock icon next to the answer choices" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conditional Displays): A fork symbol with a tooltip",
      fr: "Source Odoo Learn (Conditional Displays): A fork symbol with a tooltip",
    },
  }),
  complexQ({
    id: "srv-033",
    module: "survey",
    text: {
      en: "In the session manager, which feature helps attendees join the session easily from their mobile device? (Odoo Learn — Live Session Survey)",
      fr: "In the session manager, which feature helps attendees join the session easily from their mobile device? (Odoo Learn — Live Session Survey)",
    },
    correct: {
      en: "A QR code",
      fr: "A QR code",
    },
    distractors: [
      { en: "A downloadable mobile app", fr: "A downloadable mobile app" },
      { en: "A short survey code", fr: "A short survey code" },
      { en: "A text message invite", fr: "A text message invite" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Session Survey): A QR code",
      fr: "Source Odoo Learn (Live Session Survey): A QR code",
    },
  }),
  complexQ({
    id: "srv-034",
    module: "survey",
    text: {
      en: "Which of the following options is NOT available when a survey is set to 'Live Session' mode? (Odoo Learn — Live Session Survey)",
      fr: "Which of the following options is NOT available when a survey is set to 'Live Session' mode? (Odoo Learn — Live Session Survey)",
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
