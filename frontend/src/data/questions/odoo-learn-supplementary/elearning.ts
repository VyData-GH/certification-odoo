import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const elearningSupplementaryQuestions = [
  mcq3Q({
    id: "eln-001",
    module: "elearning",
    text: {
      en: "What is the purpose of tags in Odoo eLearning? (Odoo Learn — eLearning Basics)",
      fr: "What is the purpose of tags in Odoo eLearning? (Odoo Learn — eLearning Basics)",
    },
    correct: {
      en: "They help categorize courses and assist students in finding relevant content.",
      fr: "They help categorize courses and assist students in finding relevant content.",
    },
    distractors: [
      { en: "They automatically generate course descriptions.", fr: "They automatically generate course descriptions." },
      { en: "They are only used internally for administrators.", fr: "They are only used internally for administrators." },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): They help categorize courses and assist students in finding relevant content.",
      fr: "Source Odoo Learn (eLearning Basics): They help categorize courses and assist students in finding relevant content.",
    },
  }),
  mcq3Q({
    id: "eln-002",
    module: "elearning",
    text: {
      en: "What is one of the benefits of switching to the list view in the eLearning dashboard? (Odoo Learn — eLearning Basics)",
      fr: "What is one of the benefits of switching to the list view in the eLearning dashboard? (Odoo Learn — eLearning Basics)",
    },
    correct: {
      en: "It makes it easier to perform bulk actions on multiple courses at once.",
      fr: "It makes it easier to perform bulk actions on multiple courses at once.",
    },
    distractors: [
      { en: "It allows courses to be displayed in a more colorful format.", fr: "It allows courses to be displayed in a more colorful format." },
      { en: "It hides completed courses to keep the view cleaner.ucation", fr: "It hides completed courses to keep the view cleaner.ucation" },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): It makes it easier to perform bulk actions on multiple courses at once.",
      fr: "Source Odoo Learn (eLearning Basics): It makes it easier to perform bulk actions on multiple courses at once.",
    },
  }),
  complexQ({
    id: "eln-003",
    module: "elearning",
    text: {
      en: "What is the main function of the Karma tab in an Odoo eLearning course? (Odoo Learn — eLearning Basics)",
      fr: "What is the main function of the Karma tab in an Odoo eLearning course? (Odoo Learn — eLearning Basics)",
    },
    correct: {
      en: "It provides a gamification system that rewards students with points for engagement.",
      fr: "It provides a gamification system that rewards students with points for engagement.",
    },
    distractors: [
      { en: "It allows students to request refunds for paid courses.", fr: "It allows students to request refunds for paid courses." },
      { en: "It can be anyone in your company", fr: "It can be anyone in your company" },
      { en: "It tracks the number of times a course has been edited.", fr: "It tracks the number of times a course has been edited." },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): It provides a gamification system that rewards students with points for engagement.",
      fr: "Source Odoo Learn (eLearning Basics): It provides a gamification system that rewards students with points for engagement.",
    },
  }),
  mcq3Q({
    id: "eln-004",
    module: "elearning",
    text: {
      en: "What are the available enrollment options for an Odoo eLearning course? (Odoo Learn — eLearning Basics)",
      fr: "What are the available enrollment options for an Odoo eLearning course? (Odoo Learn — eLearning Basics)",
    },
    correct: {
      en: "Open, On Invitation, and On Payment",
      fr: "Open, On Invitation, and On Payment",
    },
    distractors: [
      { en: "Public, Private, and Restricted", fr: "Public, Private, and Restricted" },
      { en: "Free, Subscription-Based, and Trial", fr: "Free, Subscription-Based, and Trial" },
    ],
    explanation: {
      en: "Source Odoo Learn (eLearning Basics): Open, On Invitation, and On Payment",
      fr: "Source Odoo Learn (eLearning Basics): Open, On Invitation, and On Payment",
    },
  }),
  complexQ({
    id: "eln-005",
    module: "elearning",
    text: {
      en: "When adding content to an Odoo e-learning course, what is the primary purpose of the \"Category\" column? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "When adding content to an Odoo e-learning course, what is the primary purpose of the \"Category\" column? (Odoo Learn — Content, Questions, and Publishing)",
    },
    correct: {
      en: "To identify the type of content (e.g., image, video, quiz).",
      fr: "To identify the type of content (e.g., image, video, quiz).",
    },
    distractors: [
      { en: "To track the number of views for each content item.", fr: "To track the number of views for each content item." },
      { en: "To indicate whether the content is published or unpublished.", fr: "To indicate whether the content is published or unpublished." },
      { en: "To manage the responsible user for each content item.", fr: "To manage the responsible user for each content item." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): To identify the type of content (e.g., image, video, quiz).",
      fr: "Source Odoo Learn (Content, Questions, and Publishing): To identify the type of content (e.g., image, video, quiz).",
    },
  }),
  complexQ({
    id: "eln-006",
    module: "elearning",
    text: {
      en: "In the content pop-up, what happens when you select \"Video\" as the content type and paste a YouTube URL? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "In the content pop-up, what happens when you select \"Video\" as the content type and paste a YouTube URL? (Odoo Learn — Content, Questions, and Publishing)",
    },
    correct: {
      en: "Odoo automatically adjusts the title, description, and duration based on the YouTube video.",
      fr: "Odoo automatically adjusts the title, description, and duration based on the YouTube video.",
    },
    distractors: [
      { en: "Odoo automatically uploads the video file directly to the course.", fr: "Odoo automatically uploads the video file directly to the course." },
      { en: "Odoo generates a download link for the video.", fr: "Odoo generates a download link for the video." },
      { en: "Odoo converts the video to a downloadable PDF document.", fr: "Odoo converts the video to a downloadable PDF document." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): Odoo automatically adjusts the title, description, and duration based on the YouTube video.",
      fr: "Source Odoo Learn (Content, Questions, and Publishing): Odoo automatically adjusts the title, description, and duration based on the YouTube video.",
    },
  }),
  complexQ({
    id: "eln-007",
    module: "elearning",
    text: {
      en: "What is the primary function of the \"Additional Resources\" tab when creating content? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "What is the primary function of the \"Additional Resources\" tab when creating content? (Odoo Learn — Content, Questions, and Publishing)",
    },
    correct: {
      en: "To add supplementary links and materials for participants.",
      fr: "To add supplementary links and materials for participants.",
    },
    distractors: [
      { en: "To manage the visual design of the course content.", fr: "To manage the visual design of the course content." },
      { en: "To track the number of participants who have completed the course.", fr: "To track the number of participants who have completed the course." },
      { en: "To set the duration of the content item.", fr: "To set the duration of the content item." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): To add supplementary links and materials for participants.",
      fr: "Source Odoo Learn (Content, Questions, and Publishing): To add supplementary links and materials for participants.",
    },
  }),
  complexQ({
    id: "eln-008",
    module: "elearning",
    text: {
      en: "How can you publish your course? (Odoo Learn — Content, Questions, and Publishing)",
      fr: "How can you publish your course? (Odoo Learn — Content, Questions, and Publishing)",
    },
    correct: {
      en: "By clicking the \"Go To Website\" smart button and publishing the course on the front end.",
      fr: "By clicking the \"Go To Website\" smart button and publishing the course on the front end.",
    },
    distractors: [
      { en: "By adding attendees to the course.", fr: "By adding attendees to the course." },
      { en: "By setting the duration of each content item.", fr: "By setting the duration of each content item." },
      { en: "By adding karma points to the quizzes.", fr: "By adding karma points to the quizzes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Content, Questions, and Publishing): By clicking the \"Go To Website\" smart button and publishing the course on the front end.",
      fr: "Source Odoo Learn (Content, Questions, and Publishing): By clicking the \"Go To Website\" smart button and publishing the course on the front end.",
    },
  }),
];
