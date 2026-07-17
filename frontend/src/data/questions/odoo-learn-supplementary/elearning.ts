import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const elearningSupplementaryQuestions = [
  mcq3Q({
    id: "eln-001",
    module: "elearning",
    text: {
      en: "What is the purpose of tags in Odoo eLearning? (Odoo Learn — eLearning Basics)",
      fr: "A quoi servent les balises dans Odoo eLearning ? (Odoo Learn — Bases de l'apprentissage en ligne)",
    },
    correct: {
      en: "They help categorize courses and assist students in finding relevant content.",
      fr: "Ils aident à catégoriser les cours et aident les étudiants à trouver du contenu pertinent.",
    },
    distractors: [
      { en: "They automatically generate course descriptions.", fr: "Ils génèrent automatiquement des descriptions de cours." },
      { en: "They are only used internally for administrators.", fr: "Ils ne sont utilisés qu’en interne par les administrateurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): They help categorize courses and assist students in finding relevant content.",
      fr: "Source Odoo Learn (eLearning Basics) : ils aident à catégoriser les cours et aident les étudiants à trouver du contenu pertinent.",
    },
  }),
  mcq3Q({
    id: "eln-002",
    module: "elearning",
    text: {
      en: "What is one of the benefits of switching to the list view in the eLearning dashboard? (Odoo Learn — eLearning Basics)",
      fr: "Quel est l'un des avantages de passer à l'affichage en liste dans le tableau de bord eLearning ? (Odoo Learn — Bases de l'apprentissage en ligne)",
    },
    correct: {
      en: "It makes it easier to perform bulk actions on multiple courses at once.",
      fr: "Cela facilite l'exécution d'actions groupées sur plusieurs cours à la fois.",
    },
    distractors: [
      { en: "It allows courses to be displayed in a more colorful format.", fr: "Il permet d'afficher les cours dans un format plus coloré." },
      { en: "It hides completed courses to keep the view cleaner.ucation", fr: "Il masque les cours terminés pour garder la vue plus propre." },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): It makes it easier to perform bulk actions on multiple courses at once.",
      fr: "Source Odoo Learn (bases du eLearning) : il facilite l'exécution d'actions groupées sur plusieurs cours à la fois.",
    },
  }),
  complexQ({
    id: "eln-003",
    module: "elearning",
    text: {
      en: "What is the main function of the Karma tab in an Odoo eLearning course? (Odoo Learn — eLearning Basics)",
      fr: "Quelle est la fonction principale de l'onglet Karma dans un cours eLearning Odoo ? (Odoo Learn — Bases de l'apprentissage en ligne)",
    },
    correct: {
      en: "It provides a gamification system that rewards students with points for engagement.",
      fr: "Il fournit un système de gamification qui récompense les étudiants avec des points d'engagement.",
    },
    distractors: [
      { en: "It allows students to request refunds for paid courses.", fr: "Il permet aux étudiants de demander le remboursement de cours payants." },
      { en: "It can be anyone in your company", fr: "Cela peut être n'importe qui dans votre entreprise" },
      { en: "It tracks the number of times a course has been edited.", fr: "Il suit le nombre de fois qu'un cours a été modifié." },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): It provides a gamification system that rewards students with points for engagement.",
      fr: "Source Odoo Learn (eLearning Basics) : Il fournit un système de gamification qui récompense les étudiants avec des points pour leur engagement.",
    },
  }),
  mcq3Q({
    id: "eln-004",
    module: "elearning",
    text: {
      en: "What are the available enrollment options for an Odoo eLearning course? (Odoo Learn — eLearning Basics)",
      fr: "Quelles sont les options d'inscription disponibles pour un cours eLearning Odoo ? (Odoo Learn — Bases de l'apprentissage en ligne)",
    },
    correct: {
      en: "Open, On Invitation, and On Payment",
      fr: "Ouvert, sur invitation et sur paiement",
    },
    distractors: [
      { en: "Public, Private, and Restricted", fr: "Public, privé et restreint" },
      { en: "Free, Subscription-Based, and Trial", fr: "Gratuit, par abonnement et essai" },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): Open, On Invitation, and On Payment",
      fr: "Source Odoo Learn (bases du eLearning) : ouvert, sur invitation et sur paiement",
    },
  }),
  complexQ({
    id: "eln-005",
    module: "elearning",
    text: {
      en: "When adding content to an Odoo e-learning course, what is the primary purpose of the \"Category\" column? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "Lors de l'ajout de contenu à un cours e-learning Odoo, quel est l'objectif principal de la colonne « Catégorie » ? (Odoo Learn — Contenu, questions et publication)",
    },
    correct: {
      en: "To identify the type of content (e.g., image, video, quiz).",
      fr: "Pour identifier le type de contenu (par exemple, image, vidéo, quiz).",
    },
    distractors: [
      { en: "To track the number of views for each content item.", fr: "Pour suivre le nombre de vues pour chaque élément de contenu." },
      { en: "To indicate whether the content is published or unpublished.", fr: "Pour indiquer si le contenu est publié ou non publié." },
      { en: "To manage the responsible user for each content item.", fr: "Pour gérer l’utilisateur responsable de chaque élément de contenu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): To identify the type of content (e.g., image, video, quiz).",
      fr: "Source Odoo Learn (Contenu, Questions et Publication) : Pour identifier le type de contenu (par exemple, image, vidéo, quiz).",
    },
  }),
  complexQ({
    id: "eln-006",
    module: "elearning",
    text: {
      en: "In the content pop-up, what happens when you select \"Video\" as the content type and paste a YouTube URL? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "Dans la fenêtre contextuelle de contenu, que se passe-t-il lorsque vous sélectionnez « Vidéo » comme type de contenu et collez une URL YouTube ? (Odoo Learn — Contenu, questions et publication)",
    },
    correct: {
      en: "Odoo automatically adjusts the title, description, and duration based on the YouTube video.",
      fr: "Odoo ajuste automatiquement le titre, la description et la durée en fonction de la vidéo YouTube.",
    },
    distractors: [
      { en: "Odoo automatically uploads the video file directly to the course.", fr: "Odoo télécharge automatiquement le fichier vidéo directement dans le cours." },
      { en: "Odoo generates a download link for the video.", fr: "Odoo génère un lien de téléchargement pour la vidéo." },
      { en: "Odoo converts the video to a downloadable PDF document.", fr: "Odoo convertit la vidéo en un document PDF téléchargeable." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): Odoo automatically adjusts the title, description, and duration based on the YouTube video.",
      fr: "Source Odoo Learn (Contenu, Questions et Publication) : Odoo ajuste automatiquement le titre, la description et la durée en fonction de la vidéo YouTube.",
    },
  }),
  complexQ({
    id: "eln-007",
    module: "elearning",
    text: {
      en: "What is the primary function of the \"Additional Resources\" tab when creating content? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "Quelle est la fonction principale de l'onglet « Ressources supplémentaires » lors de la création de contenu ? (Odoo Learn — Contenu, questions et publication)",
    },
    correct: {
      en: "To add supplementary links and materials for participants.",
      fr: "Pour ajouter des liens et du matériel supplémentaires pour les participants.",
    },
    distractors: [
      { en: "To manage the visual design of the course content.", fr: "Gérer la conception visuelle du contenu du cours." },
      { en: "To track the number of participants who have completed the course.", fr: "Pour suivre le nombre de participants qui ont terminé le cours." },
      { en: "To set the duration of the content item.", fr: "Pour définir la durée de l'élément de contenu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): To add supplementary links and materials for participants.",
      fr: "Source Odoo Learn (Contenu, Questions et Publication) : Pour ajouter des liens et du matériel supplémentaires pour les participants.",
    },
  }),
  complexQ({
    id: "eln-008",
    module: "elearning",
    text: {
      en: "How can you publish your course? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "Comment publier votre cours ? (Odoo Learn — Contenu, questions et publication)",
    },
    correct: {
      en: "By clicking the \"Go To Website\" smart button and publishing the course on the front end.",
      fr: "En cliquant sur le bouton intelligent « Aller au site Web » et en publiant le cours sur le front-end.",
    },
    distractors: [
      { en: "By adding attendees to the course.", fr: "En ajoutant des participants au cours." },
      { en: "By setting the duration of each content item.", fr: "En définissant la durée de chaque élément de contenu." },
      { en: "By adding karma points to the quizzes.", fr: "En ajoutant des points de karma aux quiz." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): By clicking the \"Go To Website\" smart button and publishing the course on the front end.",
      fr: "Source Odoo Learn (Contenu, Questions et Publication) : En cliquant sur le bouton intelligent « Aller au site Web » et en publiant le cours sur le front-end.",
    },
  }),
];
