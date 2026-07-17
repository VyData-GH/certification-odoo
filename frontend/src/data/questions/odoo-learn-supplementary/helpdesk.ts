import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const helpdeskSupplementaryQuestions = [
  complexQ({
    id: "hdk-001",
    module: "helpdesk",
    text: {
      en: "How do you create a new Helpdesk Team? (Odoo Learn — Helpdesk Overview)",
      fr: "Comment créer une nouvelle équipe Helpdesk ? (Odoo Learn — Présentation du service d'assistance)",
    },
    correct: {
      en: "Go to Configuration > Teams > Create.",
      fr: "Accédez à Configuration > Équipes > Créer.",
    },
    distractors: [
      { en: "Go to Overview > Create.", fr: "Accédez à Présentation > Créer." },
      { en: "Go to Overview > Select a Helpdesk Team > Create.", fr: "Accédez à Présentation > Sélectionnez une équipe de support technique > Créer." },
      { en: "Go to Configuration > Types > Create.", fr: "Accédez à Configuration > Types > Créer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Overview): Go to Configuration > Teams > Create.",
      fr: "Source Odoo Learn (Présentation du Helpdesk) : Accédez à Configuration > Équipes > Créer.",
    },
  }),
  complexQ({
    id: "hdk-002",
    module: "helpdesk",
    text: {
      en: "How can you share a Stage between multiple Helpdesk Teams? (Odoo Learn — Helpdesk Overview)",
      fr: "Comment partager une scène entre plusieurs équipes du Helpdesk ? (Odoo Learn — Présentation du service d'assistance)",
    },
    correct: {
      en: "Both A & C are correct.",
      fr: "A et C sont corrects.",
    },
    distractors: [
      { en: "Go to Configuration > Stages > Click on a Stage > Type the teams’ names in the “Teams” field.", fr: "Allez dans Configuration > Étapes > Cliquez sur une étape > Tapez les noms des équipes dans le champ « Équipes »." },
      { en: "Go to Configuration > Teams > Click on a Team > Type the Stage’s name in the “Stages” field.", fr: "Allez dans Configuration > Équipes > Cliquez sur une équipe > Tapez le nom de l'étape dans le champ « Étapes »." },
      { en: "Go to a Helpdesk Team’s ticket pipeline > Click the gear icon on a Stage > Edit Stage > Type the teams’ names in the “Teams” field.", fr: "Accédez au pipeline de tickets d'une équipe du Helpdesk > Cliquez sur l'icône d'engrenage sur une étape > Modifier l'étape > Tapez les noms des équipes dans le champ « Équipes »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Overview): Both A & C are correct.",
      fr: "Source Odoo Learn (Aperçu du Helpdesk) : A et C sont corrects.",
    },
  }),
  complexQ({
    id: "hdk-003",
    module: "helpdesk",
    text: {
      en: "How can you set up an automated message to go out once a ticket’s stage changes? (Odoo Learn — Helpdesk Overview)",
      fr: "Comment configurer un message automatique qui sera diffusé dès que l'étape d'un billet change ? (Odoo Learn — Présentation du service d'assistance)",
    },
    correct: {
      en: "Both B & C are correct.",
      fr: "Les deux B et C sont corrects.",
    },
    distractors: [
      { en: "Go to Configuration > Teams > Click on a Team > Email Template > Select a template from the drop-down menu.", fr: "Accédez à Configuration > Équipes > Cliquez sur une équipe > Modèle d'e-mail > Sélectionnez un modèle dans le menu déroulant." },
      { en: "Go to a Helpdesk Team’s ticket pipeline > Click the gear icon on a Stage > Edit Stage > Email Template > Select a template from the drop-down menu.", fr: "Accédez au pipeline de tickets d'une équipe d'assistance > Cliquez sur l'icône d'engrenage sur une étape > Modifier l'étape > Modèle d'e-mail > Sélectionnez un modèle dans le menu déroulant." },
      { en: "Go to a Helpdesk Team’s ticket pipeline > Click the gear icon on a Stage > Edit Stage > SMS Template > Select a template from the drop-down menu.", fr: "Accédez au pipeline de tickets d'une équipe d'assistance > Cliquez sur l'icône d'engrenage sur une étape > Modifier l'étape > Modèle SMS > Sélectionnez un modèle dans le menu déroulant." },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Overview): Both B & C are correct.",
      fr: "Source Odoo Learn (Aperçu du Helpdesk) : les deux B et C sont corrects.",
    },
  }),
  complexQ({
    id: "hdk-004",
    module: "helpdesk",
    text: {
      en: "How do you ensure new tickets are assigned to the user with the lowest number of open tickets? (Odoo Learn — Helpdesk Overview)",
      fr: "Comment vous assurez-vous que les nouveaux tickets sont attribués à l’utilisateur ayant le plus petit nombre de tickets ouverts ? (Odoo Learn — Présentation du service d'assistance)",
    },
    correct: {
      en: "Configuration > Teams > Click on a Team > Automatic Assignment > Each user has an equal number of open tickets.",
      fr: "Configuration > Équipes > Cliquez sur une équipe > Attribution automatique > Chaque utilisateur dispose d'un nombre égal de tickets ouverts.",
    },
    distractors: [
      { en: "Configuration > Teams > Click on a Team > Visibility > All Internal Users.", fr: "Configuration > Équipes > Cliquez sur une équipe > Visibilité > Tous les utilisateurs internes." },
      { en: "Configuration > Teams > Click on a Team > Follow All Team’s Tickets.", fr: "Configuration > Équipes > Cliquez sur une équipe > Suivre les tickets de toutes les équipes." },
      { en: "Configuration > Teams > Click on a Team > Automatic Assignment > Each user is assigned an equal number of tickets.", fr: "Configuration > Équipes > Cliquez sur une équipe > Attribution automatique > Chaque utilisateur se voit attribuer un nombre égal de tickets." },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Overview): Configuration > Teams > Click on a Team > Automatic Assignment > Each user has an equal number of open tickets.",
      fr: "Source Odoo Learn (Présentation du Helpdesk) : Configuration > Équipes > Cliquez sur une équipe > Attribution automatique > Chaque utilisateur dispose d'un nombre égal de tickets ouverts.",
    },
  }),
  complexQ({
    id: "hdk-005",
    module: "helpdesk",
    text: {
      en: "What happens when Automatic Assignment is enabled for a Helpdesk team? (Odoo Learn — Helpdesk Teams)",
      fr: "Que se passe-t-il lorsque l'affectation automatique est activée pour une équipe du Helpdesk ? (Odoo Learn — Équipes du service d'assistance)",
    },
    correct: {
      en: "Odoo automatically distributes incoming tickets among team members.",
      fr: "Odoo distribue automatiquement les tickets entrants entre les membres de l'équipe.",
    },
    distractors: [
      { en: "Every ticket is assigned to the team manager.", fr: "Chaque ticket est attribué au chef d'équipe." },
      { en: "Tickets must still be assigned manually.", fr: "Les billets doivent toujours être attribués manuellement." },
      { en: "Tickets are assigned based only on seniority.", fr: "Les billets sont attribués uniquement en fonction de l'ancienneté." },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Teams): Odoo automatically distributes incoming tickets among team members.",
      fr: "Source Odoo Learn (équipes du Helpdesk) : Odoo distribue automatiquement les tickets entrants entre les membres de l'équipe.",
    },
  }),
  complexQ({
    id: "hdk-006",
    module: "helpdesk",
    text: {
      en: "When configuring the \"Visibility\" setting for a Helpdesk team, what option would I select if I want the team to only be visible to specific team members? (Odoo Learn — Helpdesk Teams)",
      fr: "Lors de la configuration du paramètre « Visibilité » pour une équipe du Helpdesk, quelle option dois-je sélectionner si je souhaite que l'équipe ne soit visible que par des membres spécifiques de l'équipe ? (Odoo Learn — Équipes du service d'assistance)",
    },
    correct: {
      en: "Invited internal users (private)",
      fr: "Utilisateurs internes invités (privés)",
    },
    distractors: [
      { en: "All internal users", fr: "Tous les utilisateurs internes" },
      { en: "Invited portal users and all internal users", fr: "Utilisateurs du portail invités et tous les utilisateurs internes" },
      { en: "All external users", fr: "Tous les utilisateurs externes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Teams): Invited internal users (private)",
      fr: "Source Odoo Learn (équipes Helpdesk) : Utilisateurs internes invités (privé)",
    },
  }),
  complexQ({
    id: "hdk-007",
    module: "helpdesk",
    text: {
      en: "In the Helpdesk app, which feature allows specific users to be automatically informed of updates on all tickets for a particular team? (Odoo Learn — Helpdesk Teams)",
      fr: "Dans l'application Helpdesk, quelle fonctionnalité permet à des utilisateurs spécifiques d'être automatiquement informés des mises à jour sur tous les tickets d'une équipe particulière ? (Odoo Learn — Équipes du service d'assistance)",
    },
    correct: {
      en: "Followers",
      fr: "Abonnés",
    },
    distractors: [
      { en: "Visibility settings", fr: "Paramètres de visibilité" },
      { en: "Automatic Assignment", fr: "Attribution automatique" },
      { en: "Portal access", fr: "Accès au portail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Teams): Followers",
      fr: "Source Odoo Learn (équipes d'assistance) : abonnés",
    },
  }),
  complexQ({
    id: "hdk-008",
    module: "helpdesk",
    text: {
      en: "If a customer adds a subject to an email, and sends it to your Helpdesk Team’s email alias, where does it appear when you open the ticket form in Odoo? (Odoo Learn — Website & Email Tickets)",
      fr: "Si un client ajoute un sujet à un e-mail et l'envoie à l'alias de messagerie de votre équipe Helpdesk, où apparaît-il lorsque vous ouvrez le formulaire de ticket dans Odoo ? (Odoo Learn — Billets sur le site Web et par courrier électronique)",
    },
    correct: {
      en: "As the ticket title",
      fr: "Comme titre du billet",
    },
    distractors: [
      { en: "In the ticket Description", fr: "Dans la description du billet" },
      { en: "As the ticket tag", fr: "Comme étiquette de billet" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Website & Email Tickets): As the ticket title",
      fr: "Source Odoo Learn (Tickets site Web et e-mail) : Comme titre du ticket",
    },
  }),
  complexQ({
    id: "hdk-009",
    module: "helpdesk",
    text: {
      en: "If a customer types a message in the description field on the web submission form, where does it appear in Odoo? (Odoo Learn — Website & Email Tickets)",
      fr: "Si un client saisit un message dans le champ de description du formulaire de soumission Web, où apparaît-il dans Odoo ? (Odoo Learn — Billets sur le site Web et par courrier électronique)",
    },
    correct: {
      en: "In the Description tab",
      fr: "Dans l'onglet Description",
    },
    distractors: [
      { en: "In the Chatter", fr: "Dans le bavardage" },
      { en: "In the Type field", fr: "Dans le champ Type" },
      { en: "In the Ticket form", fr: "Dans le formulaire Billet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Website & Email Tickets): In the Description tab",
      fr: "Source Odoo Learn (Tickets site Web et e-mail) : Dans l'onglet Description",
    },
  }),
  complexQ({
    id: "hdk-010",
    module: "helpdesk",
    text: {
      en: "What does the “Automatic Closing” feature do? (Odoo Learn — Website & Email Tickets)",
      fr: "À quoi sert la fonction « Fermeture automatique » ? (Odoo Learn — Billets sur le site Web et par courrier électronique)",
    },
    correct: {
      en: "Automatically closes tickets after a set period of inactivity",
      fr: "Ferme automatiquement les tickets après une période d'inactivité définie",
    },
    distractors: [
      { en: "Automatically closes tickets when they reach the “Solved” Stage", fr: "Ferme automatiquement les tickets lorsqu'ils atteignent l'étape « Résolu »" },
      { en: "Automatically closes tickets after 7 days in the “Solved” Stage", fr: "Ferme automatiquement les tickets après 7 jours à l'étape « Résolu »" },
      { en: "Automatically notifies the customer when their ticket is closed", fr: "Avertit automatiquement le client lorsque son ticket est fermé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Website & Email Tickets): Automatically closes tickets after a set period of inactivity",
      fr: "Source Odoo Learn (tickets Web et e-mail) : ferme automatiquement les tickets après une période d'inactivité définie",
    },
  }),
  complexQ({
    id: "hdk-011",
    module: "helpdesk",
    text: {
      en: "What does \"SLA\" stand for? (Odoo Learn — Service Level Agreements (SLAs))",
      fr: "Que signifie « SLA » ? (Odoo Learn — Accords de niveau de service (SLA))",
    },
    correct: {
      en: "Service Level Agreement.",
      fr: "Accord de niveau de service.",
    },
    distractors: [
      { en: "Support Level Agreement.", fr: "Accord de niveau de support." },
      { en: "Success Level Agreement.", fr: "Accord de niveau de réussite." },
      { en: "Satisfaction Level Agreement.", fr: "Accord sur le niveau de satisfaction." },
    ],
    explanation: {
      en: "Source Odoo Learn (Service Level Agreements (SLAs)): Service Level Agreement.",
      fr: "Source Odoo Learn (Accords de niveau de service (SLA)) : Accord de niveau de service.",
    },
  }),
  complexQ({
    id: "hdk-012",
    module: "helpdesk",
    text: {
      en: "Where can you specify a specific customer to apply an SLA policy to? (Odoo Learn — Service Level Agreements (SLAs))",
      fr: "Où pouvez-vous spécifier un client spécifique auquel appliquer une politique SLA ? (Odoo Learn — Accords de niveau de service (SLA))",
    },
    correct: {
      en: "On the SLA policy form",
      fr: "Sur le formulaire de politique SLA",
    },
    distractors: [
      { en: "On the customer form", fr: "Sur le formulaire client" },
      { en: "On the contact form", fr: "Sur le formulaire de contact" },
      { en: "On the helpdesk team form", fr: "Sur le formulaire de l'équipe du helpdesk" },
    ],
    explanation: {
      en: "Source Odoo Learn (Service Level Agreements (SLAs)): On the SLA policy form",
      fr: "Source Odoo Learn (Accords de niveau de service (SLA)) : Sur le formulaire de politique SLA",
    },
  }),
  complexQ({
    id: "hdk-013",
    module: "helpdesk",
    text: {
      en: "What information is added to a ticket once it matches an SLA policy? (Odoo Learn — Service Level Agreements (SLAs))",
      fr: "Quelles informations sont ajoutées à un ticket une fois qu’il correspond à une politique SLA ? (Odoo Learn — Accords de niveau de service (SLA))",
    },
    correct: {
      en: "An SLA tag and an SLA deadline.",
      fr: "Une balise SLA et une date limite SLA.",
    },
    distractors: [
      { en: "An SLA tag and an SLA countdown timer.", fr: "Une balise SLA et un compte à rebours SLA." },
      { en: "An SLA status marker and an SLA countdown timer.", fr: "An SLA status marker and an SLA countdown timer." },
      { en: "An SLA status marker and an SLA deadline.", fr: "Un marqueur de statut SLA et une date limite SLA." },
    ],
    explanation: {
      en: "Source Odoo Learn (Service Level Agreements (SLAs)): An SLA tag and an SLA deadline.",
      fr: "Source Odoo Learn (Accords de niveau de service (SLA)) : Une balise SLA et une date limite SLA.",
    },
  }),
  complexQ({
    id: "hdk-014",
    module: "helpdesk",
    text: {
      en: "How can a user change the order of stages in a Helpdesk pipeline? (Odoo Learn — Helpdesk Stages)",
      fr: "Comment un utilisateur peut-il modifier l’ordre des étapes dans un pipeline Helpdesk ? (Odoo Learn — Étapes du service d'assistance)",
    },
    correct: {
      en: "By dragging and dropping stages in the Kanban view",
      fr: "En glissant-déposant des étapes dans la vue Kanban",
    },
    distractors: [
      { en: "By editing the Helpdesk settings menu", fr: "En modifiant le menu des paramètres du Helpdesk" },
      { en: "By archiving and recreating the stages", fr: "En archivant et en recréant les scènes" },
      { en: "By assigning sequence numbers to tickets", fr: "En attribuant des numéros de séquence aux tickets" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Stages): By dragging and dropping stages in the Kanban view",
      fr: "Source Odoo Learn (étapes du Helpdesk) : par glisser-déposer des étapes dans la vue Kanban",
    },
  }),
  complexQ({
    id: "hdk-015",
    module: "helpdesk",
    text: {
      en: "What is the purpose of the ‘Helpdesk Teams’ field on a stage? (Odoo Learn — Helpdesk Stages)",
      fr: "À quoi sert le champ « Équipes d’assistance » sur une scène ? (Odoo Learn — Étapes du service d'assistance)",
    },
    correct: {
      en: "To share a stage across multiple Helpdesk teams",
      fr: "Pour partager une étape entre plusieurs équipes du Helpdesk",
    },
    distractors: [
      { en: "To assign managers to tickets", fr: "Pour affecter des gestionnaires aux tickets" },
      { en: "To create new Helpdesk teams", fr: "Pour créer de nouvelles équipes Helpdesk" },
      { en: "To restrict access to tickets", fr: "Pour restreindre l'accès aux billets" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Stages): To share a stage across multiple Helpdesk teams",
      fr: "Source Odoo Learn (étapes du Helpdesk) : pour partager une étape entre plusieurs équipes du Helpdesk",
    },
  }),
  complexQ({
    id: "hdk-016",
    module: "helpdesk",
    text: {
      en: "What does the ‘Rotting in’ setting help users identify? (Odoo Learn — Helpdesk Stages)",
      fr: "Qu'est-ce que le paramètre « Pourrir dans » aide les utilisateurs à identifier ? (Odoo Learn — Étapes du service d'assistance)",
    },
    correct: {
      en: "Tickets that have remained in a stage longer than the defined threshold",
      fr: "Billets restés dans une étape plus longtemps que le seuil défini",
    },
    distractors: [
      { en: "Tickets assigned to inactive users", fr: "Tickets attribués aux utilisateurs inactifs" },
      { en: "Tickets that are missing customer information", fr: "Billets pour lesquels il manque des informations client" },
      { en: "Tickets that have been archived", fr: "Billets archivés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Stages): Tickets that have remained in a stage longer than the defined threshold",
      fr: "Source Odoo Learn (Helpdesk Stages) : Tickets restés dans une étape plus longtemps que le seuil défini",
    },
  }),
  complexQ({
    id: "hdk-017",
    module: "helpdesk",
    text: {
      en: "What would happen if you leave the \"In Stages\" field blank when activating the Automatic Closing feature? (Odoo Learn — Helpdesk Tickets)",
      fr: "Que se passerait-il si vous laissiez le champ « En étapes » vide lors de l'activation de la fonction de fermeture automatique ? (Odoo Learn — Billets du service d'assistance)",
    },
    correct: {
      en: "Odoo will close inactive tickets from any stage",
      fr: "Odoo fermera les tickets inactifs de n'importe quelle étape",
    },
    distractors: [
      { en: "Odoo will automatically close tickets in the “New” stage only", fr: "Odoo fermera automatiquement les tickets dans l'étape « Nouveau » uniquement" },
      { en: "Odoo will prevent automatic closing from happening", fr: "Odoo empêchera la fermeture automatique" },
      { en: "Odoo will send a reminder to the customer before closing", fr: "Odoo enverra un rappel au client avant la fermeture" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Tickets): Odoo will close inactive tickets from any stage",
      fr: "Source Odoo Learn (Tickets Helpdesk) : Odoo fermera les tickets inactifs à partir de n'importe quelle étape",
    },
  }),
  complexQ({
    id: "hdk-018",
    module: "helpdesk",
    text: {
      en: "What happens to the original ticket after it is converted into an opportunity for the sales team? (Odoo Learn — Helpdesk Tickets)",
      fr: "Qu’arrive-t-il au ticket d’origine une fois qu’il est converti en opportunité pour l’équipe commerciale ? (Odoo Learn — Billets du service d'assistance)",
    },
    correct: {
      en: "The ticket is archived, and linked to the newly-created opportunity",
      fr: "Le ticket est archivé et lié à l'opportunité nouvellement créée",
    },
    distractors: [
      { en: "The ticket is deleted automatically", fr: "Le ticket est supprimé automatiquement" },
      { en: "The ticket is marked as solved, and moved to the last Kanban stage", fr: "Le ticket est marqué comme résolu et déplacé vers la dernière étape Kanban" },
      { en: "The ticket remains open for further interactions", fr: "Le ticket reste ouvert pour d'autres interactions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Tickets): The ticket is archived, and linked to the newly-created opportunity",
      fr: "Source Odoo Learn (Tickets Helpdesk) : Le ticket est archivé et lié à l'opportunité nouvellement créée",
    },
  }),
  complexQ({
    id: "hdk-019",
    module: "helpdesk",
    text: {
      en: "If a ticket is moved to a “Folded” stage, like \"Solved,\" what does Odoo automatically consider the status of that ticket to be? (Odoo Learn — Helpdesk Tickets)",
      fr: "Si un ticket est déplacé vers une étape « Plié », comme « Résolu », quel est automatiquement le statut de ce ticket Odoo ? (Odoo Learn — Billets du service d'assistance)",
    },
    correct: {
      en: "Closed",
      fr: "Fermé",
    },
    distractors: [
      { en: "Pending", fr: "En attente" },
      { en: "Archived", fr: "Archivé" },
      { en: "On Hold", fr: "En attente" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Tickets): Closed",
      fr: "Source Odoo Learn (Tickets Helpdesk) : Fermé",
    },
  }),
  complexQ({
    id: "hdk-020",
    module: "helpdesk",
    text: {
      en: "When I enable automatic closing on my Helpdesk team, what happens if a ticket has no activity for the defined period? (Odoo Learn — Inactive Tickets)",
      fr: "Lorsque j'active la fermeture automatique sur mon équipe Helpdesk, que se passe-t-il si un ticket n'a aucune activité pendant la période définie ? (Odoo Learn — Billets inactifs)",
    },
    correct: {
      en: "The ticket is automatically moved to a folded stage (like Solved)",
      fr: "Le ticket est automatiquement déplacé vers une étape pliée (comme Résolu)",
    },
    distractors: [
      { en: "The ticket is permanently deleted", fr: "Le ticket est définitivement supprimé" },
      { en: "The ticket is reassigned to another team", fr: "Le ticket est réattribué à une autre équipe" },
      { en: "The ticket is duplicated for follow-up", fr: "Le ticket est dupliqué pour suivi" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inactive Tickets): The ticket is automatically moved to a folded stage (like Solved)",
      fr: "Source Odoo Learn (Tickets inactifs) : Le ticket est automatiquement déplacé vers une étape pliée (comme Résolu)",
    },
  }),
  complexQ({
    id: "hdk-021",
    module: "helpdesk",
    text: {
      en: "When I enable reminder emails, what is their purpose before a ticket is closed? (Odoo Learn — Inactive Tickets)",
      fr: "Lorsque j'active les e-mails de rappel, quel est leur objectif avant la clôture d'un ticket ? (Odoo Learn — Billets inactifs)",
    },
    correct: {
      en: "To give the customer a chance to respond before the inactivity deadline is reached",
      fr: "Pour donner au client la possibilité de répondre avant que le délai d'inactivité ne soit atteint",
    },
    distractors: [
      { en: "To notify the agent after the ticket is closed", fr: "Pour avertir l'agent après la clôture du ticket" },
      { en: "To automatically escalate the ticket to a manager", fr: "Pour transmettre automatiquement le ticket à un responsable" },
      { en: "To reset the ticket without any response", fr: "Pour réinitialiser le ticket sans aucune réponse" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inactive Tickets): To give the customer a chance to respond before the inactivity deadline is reached",
      fr: "Source Odoo Learn (Tickets Inactifs) : Pour donner au client une chance de répondre avant que le délai d'inactivité ne soit atteint",
    },
  }),
  complexQ({
    id: "hdk-022",
    module: "helpdesk",
    text: {
      en: "When I look at my pipeline in Kanban view, how can I identify “rotting” tickets? (Odoo Learn — Inactive Tickets)",
      fr: "Lorsque je regarde mon pipeline dans la vue Kanban, comment puis-je identifier les tickets « pourris » ? (Odoo Learn — Billets inactifs)",
    },
    correct: {
      en: "They are highlighted with red numbered icons showing inactivity in the stage",
      fr: "Ils sont mis en évidence par des icônes numérotées rouges indiquant l'inactivité dans la scène.",
    },
    distractors: [
      { en: "They are automatically moved to another stage", fr: "Ils sont automatiquement déplacés vers une autre étape" },
      { en: "They are deleted after a few days", fr: "Ils sont supprimés au bout de quelques jours" },
      { en: "They are marked with a priority tag", fr: "Ils sont marqués d'une étiquette de priorité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inactive Tickets): They are highlighted with red numbered icons showing inactivity in the stage",
      fr: "Source Odoo Learn (Tickets inactifs) : Ils sont mis en évidence par des icônes numérotées rouges indiquant l'inactivité dans la scène",
    },
  }),
  complexQ({
    id: "hdk-023",
    module: "helpdesk",
    text: {
      en: "If a customer types a message in the body of an email, and sends it to my Helpdesk Team’s email alias, where does it appear when I open the ticket form in Odoo? (Odoo Learn — Channels: How to Receive Tickets)",
      fr: "Si un client saisit un message dans le corps d'un e-mail et l'envoie à l'alias de messagerie de mon équipe d'assistance, où apparaît-il lorsque j'ouvre le formulaire de ticket dans Odoo ? (Odoo Learn — Chaînes : comment recevoir des billets)",
    },
    correct: {
      en: "In the Description tab and the Chatter",
      fr: "Dans l'onglet Description et dans Chatter",
    },
    distractors: [
      { en: "In the Chatter and the Tag field", fr: "Dans le champ Chatter et Tag" },
      { en: "In the Tag field and the Description tab", fr: "Dans le champ Balise et l'onglet Description" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Channels: How to Receive Tickets): In the Description tab and the Chatter",
      fr: "Source Odoo Learn (Chaînes : Comment recevoir des tickets) : Dans l'onglet Description et dans le Chatter",
    },
  }),
  complexQ({
    id: "hdk-024",
    module: "helpdesk",
    text: {
      en: "If a customer types a message in the ‘Description’ field on the web submission form, where does it appear in Odoo? (Odoo Learn — Channels: How to Receive Tickets)",
      fr: "Si un client saisit un message dans le champ « Description » du formulaire de soumission Web, où apparaît-il dans Odoo ? (Odoo Learn — Chaînes : comment recevoir des billets)",
    },
    correct: {
      en: "In the Description tab and the Chatter",
      fr: "Dans l'onglet Description et dans Chatter",
    },
    distractors: [
      { en: "In the Description tab", fr: "Dans l'onglet Description" },
      { en: "In the Chatter", fr: "Dans le bavardage" },
      { en: "In the Ticket form", fr: "Dans le formulaire Billet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Channels: How to Receive Tickets): In the Description tab and the Chatter",
      fr: "Source Odoo Learn (Chaînes : Comment recevoir des tickets) : Dans l'onglet Description et dans le Chatter",
    },
  }),
  complexQ({
    id: "hdk-025",
    module: "helpdesk",
    text: {
      en: "If a customer submits a ticket via email, how does Odoo determine the ticket name in the Helpdesk dashboard? (Odoo Learn — Channels: How to Receive Tickets)",
      fr: "Si un client soumet un ticket par e-mail, comment Odoo détermine-t-il le nom du ticket dans le tableau de bord du Helpdesk ? (Odoo Learn — Chaînes : comment recevoir des billets)",
    },
    correct: {
      en: "By using the email subject line",
      fr: "En utilisant la ligne d'objet de l'e-mail",
    },
    distractors: [
      { en: "By using the body of the email", fr: "En utilisant le corps de l'e-mail" },
      { en: "By using the customer’s email address", fr: "En utilisant l’adresse email du client" },
      { en: "By using the first sentence of the email", fr: "En utilisant la première phrase de l'e-mail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Channels: How to Receive Tickets): By using the email subject line",
      fr: "Source Odoo Learn (Canaux : Comment recevoir des billets) : En utilisant la ligne d'objet de l'e-mail",
    },
  }),
  complexQ({
    id: "hdk-026",
    module: "helpdesk",
    text: {
      en: "In the Live Chat app, where can you enable the Live Chat button for a specific channel to open automatically? (Odoo Learn — Live Chat: Setup)",
      fr: "Dans l'application Live Chat, où pouvez-vous activer le bouton Live Chat pour qu'un canal spécifique s'ouvre automatiquement ? (Odoo Learn — Chat en direct : configuration)",
    },
    correct: {
      en: "Under Live Chat App > Live Chat Channel > Channel Rules.",
      fr: "Sous Application de chat en direct > Chaîne de chat en direct > Règles de la chaîne.",
    },
    distractors: [
      { en: "Under Live Chat App > Live Chat Channel > Widget.", fr: "Sous Application de chat en direct > Canal de chat en direct > Widget." },
      { en: "Under Live Chat App > Live Chat Channel > Options.", fr: "Sous Application de chat en direct > Canal de chat en direct > Options." },
      { en: "Under Live Chat App > Configuration.", fr: "Sous Application de chat en direct > Configuration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Setup): Under Live Chat App > Live Chat Channel > Channel Rules.",
      fr: "Source Odoo Learn (Live Chat : Configuration) : Sous Application de chat en direct > Chaîne de discussion en direct > Règles de la chaîne.",
    },
  }),
  complexQ({
    id: "hdk-027",
    module: "helpdesk",
    text: {
      en: "How do I add a ‘Live Chat’ button to a website that is *not* created through the Odoo ‘Website’ app? (Odoo Learn — Live Chat: Setup)",
      fr: "Comment puis-je ajouter un bouton « Live Chat » à un site Web qui n'est *pas* créé via l'application Odoo « Site Web » ? (Odoo Learn — Chat en direct : configuration)",
    },
    correct: {
      en: "By adding the ‘Live Chat’ Widget code to a third-party website",
      fr: "En ajoutant le code du widget « Live Chat » à un site Web tiers",
    },
    distractors: [
      { en: "I can't, only Odoo websites can utilize Odoo ‘Live Chat’", fr: "Je ne peux pas, seuls les sites Web Odoo peuvent utiliser le « Live Chat » d'Odoo." },
      { en: "By adding the URL to the ‘Channel Rules’ tab", fr: "En ajoutant l'URL à l'onglet « Règles de la chaîne »" },
      { en: "By contacting Odoo support", fr: "En contactant le support Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Setup): By adding the ‘Live Chat’ Widget code to a third-party website",
      fr: "Source Odoo Learn (Live Chat : Configuration) : En ajoutant le code du widget « Live Chat » à un site Web tiers",
    },
  }),
  complexQ({
    id: "hdk-028",
    module: "helpdesk",
    text: {
      en: "How do I link customers directly to a ‘Live Chat’ conversation? (Odoo Learn — Live Chat: Setup)",
      fr: "Comment puis-je lier les clients directement à une conversation « Live Chat » ? (Odoo Learn — Chat en direct : configuration)",
    },
    correct: {
      en: "By adding the ‘Live Chat’ Widget link to an email, and sending it to the customer",
      fr: "En ajoutant le lien du widget « Live Chat » à un e-mail et en l'envoyant au client",
    },
    distractors: [
      { en: "By adding the customer location to the ‘Channel Rules’ tab", fr: "En ajoutant l'emplacement du client à l'onglet « Règles de chaîne »" },
      { en: "By adding the customer email through the ‘Channel Rules’ Tab", fr: "En ajoutant l'e-mail du client via l'onglet « Règles de chaîne »" },
      { en: "I cannot link customers to a conversation", fr: "Je ne parviens pas à lier les clients à une conversation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Setup): By adding the ‘Live Chat’ Widget link to an email, and sending it to the customer",
      fr: "Source Odoo Learn (Live Chat : Configuration) : En ajoutant le lien du widget « Live Chat » à un e-mail et en l'envoyant au client",
    },
  }),
  complexQ({
    id: "hdk-029",
    module: "helpdesk",
    text: {
      en: "Which of the following is NOT an available Step Type? (Odoo Learn — Live Chat: Chat Bot)",
      fr: "Lequel des éléments suivants n’est PAS un type d’étape disponible ? (Odoo Learn — Chat en direct : chatbot)",
    },
    correct: {
      en: "Create a Sale Order.",
      fr: "Créez une commande de vente.",
    },
    distractors: [
      { en: "Text.", fr: "Texte." },
      { en: "Forward to Operator.", fr: "Transmettre à l'opérateur." },
      { en: "Free Input.", fr: "Entrée gratuite." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Chat Bot): Create a Sale Order.",
      fr: "Source Odoo Learn (Live Chat : Chat Bot) : Créez une commande de vente.",
    },
  }),
  complexQ({
    id: "hdk-030",
    module: "helpdesk",
    text: {
      en: "When a Chatbot creates a ticket, where is the conversation stored? (Odoo Learn — Live Chat: Chat Bot)",
      fr: "Lorsqu’un Chatbot crée un ticket, où est stockée la conversation ? (Odoo Learn — Chat en direct : chatbot)",
    },
    correct: {
      en: "In the description field of the ticket.",
      fr: "Dans le champ de description du ticket.",
    },
    distractors: [
      { en: "As a log note on the ticket.", fr: "Comme note de journal sur le ticket." },
      { en: "Conversations are not stored once a ticket has been created.", fr: "Les conversations ne sont pas stockées une fois le ticket créé." },
      { en: "In the 'Extra Info' field of the ticket", fr: "Dans le champ 'Extra Info' du ticket" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Chat Bot): In the description field of the ticket.",
      fr: "Source Odoo Learn (Live Chat : Chat Bot) : Dans le champ de description du ticket.",
    },
  }),
  complexQ({
    id: "hdk-031",
    module: "helpdesk",
    text: {
      en: "Where do you add a Chatbot to a webpage? (Odoo Learn — Live Chat: Chat Bot)",
      fr: "Où ajouter un Chatbot à une page Web ? (Odoo Learn — Chat en direct : chatbot)",
    },
    correct: {
      en: "Live Chat > Channels > Channel Rules > Chatbot.",
      fr: "Chat en direct > Canaux > Règles des canaux > Chatbot.",
    },
    distractors: [
      { en: "Live Chat > Configuration > Chatbots.", fr: "Chat en direct > Configuration > Chatbots." },
      { en: "Live Chat > Channels > Website.", fr: "Chat en direct > Chaînes > Site Web." },
      { en: "Website > Configuration >Chatbots", fr: "Site Internet > Configuration > Chatbots" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Chat Bot): Live Chat > Channels > Channel Rules > Chatbot.",
      fr: "Source Odoo Learn (Live Chat : Chat Bot) : Live Chat > ​​Canaux > Règles des canaux > Chatbot.",
    },
  }),
  complexQ({
    id: "hdk-032",
    module: "helpdesk",
    text: {
      en: "Where can I set my Online Chat Name? (Odoo Learn — Live Chat: Participate)",
      fr: "Où puis-je définir mon nom de chat en ligne ? (Odoo Learn — Chat en direct : participer)",
    },
    correct: {
      en: "In the “My Profile” section under their user avatar.",
      fr: "Dans la section « Mon profil » sous leur avatar d'utilisateur.",
    },
    distractors: [
      { en: "In the Live Chat app settings.", fr: "Dans les paramètres de l'application Live Chat." },
      { en: "Under the website customization menu.", fr: "Dans le menu de personnalisation du site Web." },
      { en: "In the Helpdesk app.", fr: "Dans l'application Helpdesk." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Participate): In the “My Profile” section under their user avatar.",
      fr: "Source Odoo Learn (Live Chat : Participer) : Dans la section « Mon profil » sous leur avatar utilisateur.",
    },
  }),
  complexQ({
    id: "hdk-033",
    module: "helpdesk",
    text: {
      en: "What does the Online Chat Language setting allow an operator to do? (Odoo Learn — Live Chat: Participate)",
      fr: "Qu'est-ce que le paramètre Langue du chat en ligne permet à un opérateur de faire ? (Odoo Learn — Chat en direct : participer)",
    },
    correct: {
      en: "Choose the languages they are available to chat in.",
      fr: "Choisissez les langues dans lesquelles ils sont disponibles pour discuter.",
    },
    distractors: [
      { en: "Automatically translate chat messages.", fr: "Traduisez automatiquement les messages de discussion." },
      { en: "Change the language of the entire Odoo database.", fr: "Changez la langue de toute la base de données Odoo." },
      { en: "Assign customers to specific agents based on language.", fr: "Attribuez des clients à des agents spécifiques en fonction de la langue." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Participate): Choose the languages they are available to chat in.",
      fr: "Source Odoo Learn (Live Chat : Participer) : Choisissez les langues dans lesquelles ils sont disponibles pour discuter.",
    },
  }),
  complexQ({
    id: "hdk-034",
    module: "helpdesk",
    text: {
      en: "What are canned responses used for? (Odoo Learn — Live Chat: Participate)",
      fr: "À quoi servent les réponses standardisées ? (Odoo Learn — Chat en direct : participer)",
    },
    correct: {
      en: "Quickly inserting preconfigured messages to save time.",
      fr: "Insertion rapide de messages préconfigurés pour gagner du temps.",
    },
    distractors: [
      { en: "Automatically responding to all customer inquiries.", fr: "Répondre automatiquement à toutes les demandes des clients." },
      { en: "Sending marketing messages through live chat.", fr: "Envoi de messages marketing via le chat en direct." },
      { en: "Closing chat sessions automatically.", fr: "Fermeture automatique des sessions de chat." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Participate): Quickly inserting preconfigured messages to save time.",
      fr: "Source Odoo Learn (Live Chat : Participer) : Insérer rapidement des messages préconfigurés pour gagner du temps.",
    },
  }),
  complexQ({
    id: "hdk-035",
    module: "helpdesk",
    text: {
      en: "Where can I set my Live Chat Expertise? (Odoo Learn — Live Chat: From Chatbot to SO)",
      fr: "Où puis-je définir mon expertise de chat en direct ? (Odoo Learn — Chat en direct : du chatbot au SO)",
    },
    correct: {
      en: "In the “My Profile” section under my user avatar.",
      fr: "Dans la section « Mon profil » sous mon avatar d'utilisateur.",
    },
    distractors: [
      { en: "In the Live Chat app settings.", fr: "Dans les paramètres de l'application Live Chat." },
      { en: "Under the website customization menu.", fr: "Dans le menu de personnalisation du site Web." },
      { en: "In the Helpdesk app.", fr: "Dans l'application Helpdesk." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: From Chatbot to SO): In the “My Profile” section under my user avatar.",
      fr: "Source Odoo Learn (Live Chat : Du Chatbot au SO) : Dans la section « Mon profil » sous mon avatar d'utilisateur.",
    },
  }),
  complexQ({
    id: "hdk-036",
    module: "helpdesk",
    text: {
      en: "What step must an operator take before receiving chatbot-forwarded chats? (Odoo Learn — Live Chat: From Chatbot to SO)",
      fr: "Quelle étape un opérateur doit-il suivre avant de recevoir des discussions transférées par un chatbot ? (Odoo Learn — Chat en direct : du chatbot au SO)",
    },
    correct: {
      en: "Join a live chat channel.",
      fr: "Rejoignez un canal de chat en direct.",
    },
    distractors: [
      { en: "Enable notifications in the Chatbot settings.", fr: "Activez les notifications dans les paramètres du Chatbot." },
      { en: "Set their status to \"Available\" in the Odoo Dashboard.", fr: "Définissez leur statut sur « Disponible » dans le tableau de bord Odoo." },
      { en: "Link their email to the Live Chat app.", fr: "Liez leur e-mail à l'application Live Chat." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: From Chatbot to SO): Join a live chat channel.",
      fr: "Source Odoo Learn (Live Chat : Du Chatbot au SO) : Rejoignez un canal de chat en direct.",
    },
  }),
  complexQ({
    id: "hdk-037",
    module: "helpdesk",
    text: {
      en: "How can an operator create a lead directly from a chat? (Odoo Learn — Live Chat: From Chatbot to SO)",
      fr: "Comment un opérateur peut-il créer un lead directement depuis un chat ? (Odoo Learn — Chat en direct : du chatbot au SO)",
    },
    correct: {
      en: "By using the \"/lead\" command and adding a title in the chat window.",
      fr: "En utilisant la commande \"/lead\" et en ajoutant un titre dans la fenêtre de discussion.",
    },
    distractors: [
      { en: "By manually entering lead details into the CRM app.", fr: "En saisissant manuellement les détails du prospect dans l'application CRM." },
      { en: "By selecting the \"Create Lead\" canned response.", fr: "En sélectionnant la réponse standardisée « Créer un prospect »." },
      { en: "By forwarding the chat to a sales operator.", fr: "En transmettant le chat à un opérateur commercial." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: From Chatbot to SO): By using the \"/lead\" command and adding a title in the chat window.",
      fr: "Source Odoo Learn (Live Chat : Du Chatbot au SO) : En utilisant la commande \"/lead\" et en ajoutant un titre dans la fenêtre de discussion.",
    },
  }),
  complexQ({
    id: "hdk-038",
    module: "helpdesk",
    text: {
      en: "Where do new chat notifications appear for a live chat operator? (Odoo Learn — Live Chat: Track Visitor Activity)",
      fr: "Où apparaissent les nouvelles notifications de chat pour un opérateur de chat en direct ? (Odoo Learn — Chat en direct : suivez l'activité des visiteurs)",
    },
    correct: {
      en: "In the Discuss app sidebar and as pop-ups anywhere in the database.",
      fr: "Dans la barre latérale de l’application Discuter et sous forme de fenêtres contextuelles n’importe où dans la base de données.",
    },
    distractors: [
      { en: "Only in the Live Chat app.", fr: "Uniquement dans l'application Live Chat." },
      { en: "In the Visitor Report tab under Live Chat.", fr: "Dans l'onglet Rapport des visiteurs sous Live Chat." },
      { en: "On the website homepage.", fr: "Sur la page d'accueil du site." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Track Visitor Activity): In the Discuss app sidebar and as pop-ups anywhere in the database.",
      fr: "Source Odoo Learn (Live Chat : suivre l'activité des visiteurs) : dans la barre latérale de l'application Discuter et sous forme de fenêtres contextuelles n'importe où dans la base de données.",
    },
  }),
  complexQ({
    id: "hdk-039",
    module: "helpdesk",
    text: {
      en: "Which command shows the most recent pages a website visitor has viewed? (Odoo Learn — Live Chat: Track Visitor Activity)",
      fr: "Quelle commande affiche les pages les plus récentes consultées par un visiteur d’un site Web ? (Odoo Learn — Chat en direct : suivez l'activité des visiteurs)",
    },
    correct: {
      en: "/history",
      fr: "/histoire",
    },
    distractors: [
      { en: "/pages", fr: "/pages" },
      { en: "/views", fr: "/vues" },
      { en: "/track", fr: "/piste" },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Track Visitor Activity): /history",
      fr: "Source Odoo Learn (Chat en direct : suivre l'activité des visiteurs) : /historique",
    },
  }),
  complexQ({
    id: "hdk-040",
    module: "helpdesk",
    text: {
      en: "What is one way an operator can share product information during a live chat? (Odoo Learn — Live Chat: Track Visitor Activity)",
      fr: "De quelle manière un opérateur peut-il partager des informations sur un produit lors d'un chat en direct ? (Odoo Learn — Chat en direct : suivez l'activité des visiteurs)",
    },
    correct: {
      en: "By using the \"Attach File\" option to send brochures or product details.",
      fr: "En utilisant l'option « Joindre un fichier » pour envoyer des brochures ou des détails sur le produit.",
    },
    distractors: [
      { en: "You cannot share product information through live chat.", fr: "Vous ne pouvez pas partager d'informations sur les produits via le chat en direct." },
      { en: "By clicking \"Share Product\" in the Live Chat app.", fr: "En cliquant sur « Partager le produit » dans l'application Live Chat." },
      { en: "By typing \"/product [product name]\" in the chat.", fr: "En tapant \"/product [nom du produit]\" dans le chat." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Chat: Track Visitor Activity): By using the \"Attach File\" option to send brochures or product details.",
      fr: "Source Odoo Learn (Chat en direct : suivre l'activité des visiteurs) : en utilisant l'option « Joindre un fichier » pour envoyer des brochures ou des détails sur le produit.",
    },
  }),
  complexQ({
    id: "hdk-041",
    module: "helpdesk",
    text: {
      en: "Under which section of the Helpdesk Team Settings is the “Customer Ratings” option located? (Odoo Learn — Customer Ratings)",
      fr: "Sous quelle section des paramètres de l'équipe du service d'assistance se trouve l'option « Évaluations des clients » ? (Odoo Learn — Évaluations des clients)",
    },
    correct: {
      en: "Performance.",
      fr: "Performance.",
    },
    distractors: [
      { en: "Self-Service.", fr: "En libre service." },
      { en: "Channels.", fr: "Canaux." },
      { en: "After-Sales.", fr: "Après-vente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer Ratings): Performance.",
      fr: "Source Odoo Learn (Évaluations clients) : Performance.",
    },
  }),
  complexQ({
    id: "hdk-042",
    module: "helpdesk",
    text: {
      en: "Which email template can you use to ask the customer for a rating? (Odoo Learn — Customer Ratings)",
      fr: "Quel modèle d'e-mail pouvez-vous utiliser pour demander une note au client ? (Odoo Learn — Évaluations des clients)",
    },
    correct: {
      en: "Ticket: Rating Request.",
      fr: "Billet : Demande de notation.",
    },
    distractors: [
      { en: "Ticket: Reception Acknowledgement.", fr: "Billet : Accusé de réception." },
      { en: "Ticket: Solved.", fr: "Ticket : Résolu." },
      { en: "Ticket: Customer Review.", fr: "Billet : Avis client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer Ratings): Ticket: Rating Request.",
      fr: "Source Odoo Learn (Évaluations clients) : Ticket : Demande d'évaluation.",
    },
  }),
  complexQ({
    id: "hdk-043",
    module: "helpdesk",
    text: {
      en: "When does a customer receive a ratings request for a Live Chat conversation? (Odoo Learn — Customer Ratings)",
      fr: "Quand un client reçoit-il une demande d'évaluation pour une conversation de chat en direct ? (Odoo Learn — Évaluations des clients)",
    },
    correct: {
      en: "After the customer ends a chat.",
      fr: "Une fois que le client a terminé une conversation.",
    },
    distractors: [
      { en: "Once they receive an email with the Live Chat transcript.", fr: "Une fois qu'ils reçoivent un e-mail avec la transcription du Live Chat." },
      { en: "When the Live Chat agent uses the “Ratings” command.", fr: "Lorsque l'agent Live Chat utilise la commande « Notes »." },
      { en: "After the Live Chat agent manually sends the ratings request.", fr: "Une fois que l'agent Live Chat a envoyé manuellement la demande d'évaluation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer Ratings): After the customer ends a chat.",
      fr: "Source Odoo Learn (évaluations des clients) : une fois que le client a terminé une discussion.",
    },
  }),
  complexQ({
    id: "hdk-044",
    module: "helpdesk",
    text: {
      en: "On the Helpdesk ticket form, which button do I click to plan a Field Service intervention? (Odoo Learn — After-Sales Features)",
      fr: "Sur le formulaire de ticket Helpdesk, sur quel bouton dois-je cliquer pour planifier une intervention Field Service ? (Odoo Learn — Caractéristiques après-vente)",
    },
    correct: {
      en: "Plan Intervention",
      fr: "Planifier l'intervention",
    },
    distractors: [
      { en: "Create Task", fr: "Créer une tâche" },
      { en: "Field Service", fr: "Service sur le terrain" },
      { en: "Create Field Service", fr: "Créer un service sur site" },
    ],
    explanation: {
      en: "Source Odoo Learn (After-Sales Features): Plan Intervention",
      fr: "Source Odoo Learn (Fonctionnalités SAV) : Planifier l'intervention",
    },
  }),
  mcq3Q({
    id: "hdk-045",
    module: "helpdesk",
    text: {
      en: "Can I view a repair order from a Helpdesk ticket? (Odoo Learn — After-Sales Features)",
      fr: "Puis-je consulter une commande de réparation à partir d’un ticket Helpdesk ? (Odoo Learn — Caractéristiques après-vente)",
    },
    correct: {
      en: "Yes, by clicking the “Repairs” smart button or the link to the repair order in the ticket’s chatter.",
      fr: "Oui, en cliquant sur le bouton intelligent « Réparations » ou sur le lien vers l'ordre de réparation dans le chat du ticket.",
    },
    distractors: [
      { en: "Yes, but only if you have access rights for the Repair module.", fr: "Oui, mais uniquement si vous disposez des droits d'accès au module Réparation." },
      { en: "No, this cannot be done through a ticket.", fr: "Non, cela ne peut pas se faire via un ticket." },
    ],
    explanation: {
      en: "Source Odoo Learn (After-Sales Features): Yes, by clicking the “Repairs” smart button or the link to the repair order in the ticket’s chatter.",
      fr: "Source Odoo Learn (Fonctionnalités après-vente) : Oui, en cliquant sur le bouton intelligent « Réparations » ou sur le lien vers l'ordre de réparation dans le chat du ticket.",
    },
  }),
  complexQ({
    id: "hdk-046",
    module: "helpdesk",
    text: {
      en: "Which of these after-sales features can I NOT enable on a Helpdesk Team? (Odoo Learn — After-Sales Features)",
      fr: "Laquelle de ces fonctionnalités après-vente ne puis-je PAS activer sur une équipe Helpdesk ? (Odoo Learn — Caractéristiques après-vente)",
    },
    correct: {
      en: "Training",
      fr: "Entraînement",
    },
    distractors: [
      { en: "Return", fr: "Retour" },
      { en: "Refund", fr: "Remboursement" },
      { en: "Coupon", fr: "Coupon" },
    ],
    explanation: {
      en: "Source Odoo Learn (After-Sales Features): Training",
      fr: "Source Odoo Learn (Fonctionnalités SAV) : Formation",
    },
  }),
  complexQ({
    id: "hdk-047",
    module: "helpdesk",
    text: {
      en: "When will the “Delivered” column on the sales order for a service be updated? (Odoo Learn — Track & Bill Time)",
      fr: "Quand la colonne « Livré » sur la commande client d'un service sera-t-elle mise à jour ? (Odoo Learn — Suivre et facturer le temps)",
    },
    correct: {
      en: "Once an employee has logged their hours on a Timesheet.",
      fr: "Une fois qu'un employé a enregistré ses heures sur une feuille de temps.",
    },
    distractors: [
      { en: "Once the invoice has been paid.", fr: "Une fois la facture payée." },
      { en: "Once the task has been marked as completed.", fr: "Une fois la tâche marquée comme terminée." },
      { en: "Once the sales order has been confirmed.", fr: "Une fois la commande client confirmée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Track & Bill Time): Once an employee has logged their hours on a Timesheet.",
      fr: "Source Odoo Learn (Suivre et facturer le temps) : Une fois qu'un employé a enregistré ses heures sur une feuille de temps.",
    },
  }),
  complexQ({
    id: "hdk-048",
    module: "helpdesk",
    text: {
      en: "Where do you enable the Track & Bill time options? (Odoo Learn — Track & Bill Time)",
      fr: "Où activez-vous les options de suivi et de facturation du temps ? (Odoo Learn — Suivre et facturer le temps)",
    },
    correct: {
      en: "On each Helpdesk Team’s Settings page.",
      fr: "Sur la page Paramètres de chaque équipe du Helpdesk.",
    },
    distractors: [
      { en: "On the General Settings Page.", fr: "Sur la page Paramètres généraux." },
      { en: "In the Timesheets Application.", fr: "Dans l'application Feuilles de temps." },
      { en: "On the SLA Policies page.", fr: "Sur la page Politiques SLA." },
    ],
    explanation: {
      en: "Source Odoo Learn (Track & Bill Time): On each Helpdesk Team’s Settings page.",
      fr: "Source Odoo Learn (Suivre et facturer le temps) : sur la page Paramètres de chaque équipe du service d'assistance.",
    },
  }),
  complexQ({
    id: "hdk-049",
    module: "helpdesk",
    text: {
      en: "How do you link a Helpdesk ticket to a Sales Order? (Odoo Learn — Track & Bill Time)",
      fr: "Comment lier un ticket Helpdesk à une commande client ? (Odoo Learn — Suivre et facturer le temps)",
    },
    correct: {
      en: "Using the “Sales Order Item” field on the ticket.",
      fr: "En utilisant le champ « Article de commande client » sur le ticket.",
    },
    distractors: [
      { en: "By adding the ticket number to the Other Info tab of the Sales Order.", fr: "En ajoutant le numéro de ticket à l'onglet Autres informations de la commande client." },
      { en: "By creating a new task from the ticket.", fr: "En créant une nouvelle tâche à partir du ticket." },
      { en: "You cannot link a ticket and a Sales Order.", fr: "Vous ne pouvez pas lier un ticket et une commande client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Track & Bill Time): Using the “Sales Order Item” field on the ticket.",
      fr: "Source Odoo Learn (Track & Bill Time) : Utilisation du champ « Article de commande client » sur le ticket.",
    },
  }),
  complexQ({
    id: "hdk-050",
    module: "helpdesk",
    text: {
      en: "Which of the following is NOT an option in the Helpdesk Reporting menu? (Odoo Learn — Helpdesk Reporting)",
      fr: "Lequel des éléments suivants n'est PAS une option dans le menu Rapports du Helpdesk ? (Odoo Learn — Rapports du service d'assistance)",
    },
    correct: {
      en: "Teams Analysis",
      fr: "Analyse des équipes",
    },
    distractors: [
      { en: "Tickets Analysis", fr: "Analyse des billets" },
      { en: "SLA Status Analysis", fr: "Analyse de l'état des SLA" },
      { en: "Customer Ratings", fr: "Évaluations des clients" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Reporting): Teams Analysis",
      fr: "Source Odoo Learn (Helpdesk Reporting) : Analyse des équipes",
    },
  }),
  complexQ({
    id: "hdk-051",
    module: "helpdesk",
    text: {
      en: "What is the default graph type for Tickets Analysis? (Odoo Learn — Helpdesk Reporting)",
      fr: "Quel est le type de graphique par défaut pour l’analyse des tickets ? (Odoo Learn — Rapports du service d'assistance)",
    },
    correct: {
      en: "Bar graph",
      fr: "Graphique à barres",
    },
    distractors: [
      { en: "Line graph", fr: "Graphique linéaire" },
      { en: "Pie chart", fr: "Diagramme circulaire" },
      { en: "Gantt chart", fr: "Diagramme de Gantt" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Reporting): Bar graph",
      fr: "Source Odoo Learn (Helpdesk Reporting) : graphique à barres",
    },
  }),
  complexQ({
    id: "hdk-052",
    module: "helpdesk",
    text: {
      en: "Which tool would you use to see the number of tickets (and SLA Status failed) in an SLA Status Analysis pivot table? (Odoo Learn — Helpdesk Reporting)",
      fr: "Quel outil utiliseriez-vous pour voir le nombre de tickets (et l'échec du statut SLA) dans un tableau croisé dynamique d'analyse du statut SLA ? (Odoo Learn — Rapports du service d'assistance)",
    },
    correct: {
      en: "Measures",
      fr: "Mesures",
    },
    distractors: [
      { en: "Filters", fr: "Filtres" },
      { en: "Group by", fr: "Regrouper par" },
      { en: "Search bar", fr: "Barre de recherche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Helpdesk Reporting): Measures",
      fr: "Source Odoo Learn (Helpdesk Reporting) : mesures",
    },
  }),
  mcq3Q({
    id: "hdk-053",
    module: "helpdesk",
    text: {
      en: "How can you turn Helpdesk tickets into forum posts? (Odoo Learn — Help Center)",
      fr: "Comment pouvez-vous transformer les tickets du Helpdesk en messages de forum ? (Odoo Learn — Centre d'aide)",
    },
    correct: {
      en: "By clicking the “Share on Forum” button on the top of a ticket.",
      fr: "En cliquant sur le bouton « Partager sur le forum » en haut d'un ticket.",
    },
    distractors: [
      { en: "By clicking the “Create a Task” button on the top of a ticket.", fr: "En cliquant sur le bouton « Créer une tâche » en haut d'un ticket." },
      { en: "By asking a visitor to submit feedback to the forum.", fr: "En demandant à un visiteur de soumettre ses commentaires sur le forum." },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center): By clicking the “Share on Forum” button on the top of a ticket.",
      fr: "Source Odoo Learn (Centre d'aide) : En cliquant sur le bouton « Partager sur le forum » en haut d'un ticket.",
    },
  }),
  mcq3Q({
    id: "hdk-054",
    module: "helpdesk",
    text: {
      en: "Where can I enable the Forums and eLearning integrations for my Helpdesk team? (Odoo Learn — Help Center)",
      fr: "Où puis-je activer les intégrations de forums et d'apprentissage en ligne pour mon équipe Helpdesk ? (Odoo Learn — Centre d'aide)",
    },
    correct: {
      en: "Helpdesk > Select a Team > Settings > Self-Service.",
      fr: "Helpdesk > Sélectionnez une équipe > Paramètres > Libre-service.",
    },
    distractors: [
      { en: "Helpdesk > Select a Team > Settings > Visibility.", fr: "Helpdesk > Sélectionnez une équipe > Paramètres > Visibilité." },
      { en: "eLearning > Configuration > Settings.", fr: "eLearning > Configuration > Paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center): Helpdesk > Select a Team > Settings > Self-Service.",
      fr: "Source Odoo Learn (Centre d'aide) : Helpdesk > Sélectionnez une équipe > Paramètres > Libre-service.",
    },
  }),
  complexQ({
    id: "hdk-055",
    module: "helpdesk",
    text: {
      en: "True or False: You can only assign existing courses (or forums) to a Helpdesk team. (Odoo Learn — Help Center)",
      fr: "Vrai ou faux : vous pouvez uniquement attribuer des cours (ou forums) existants à une équipe du Helpdesk. (Odoo Learn — Centre d'aide)",
    },
    correct: {
      en: "False. You can create new courses (and new forums) from the Helpdesk team’s Settings page.",
      fr: "FAUX. Vous pouvez créer de nouveaux cours (et de nouveaux forums) à partir de la page Paramètres de l'équipe Helpdesk.",
    },
    distractors: [
      { en: "True.", fr: "Vrai." },
      { en: "False. You can create a new forum, but only assign existing courses.", fr: "FAUX. Vous pouvez créer un nouveau forum, mais attribuer uniquement des cours existants." },
      { en: "False. You can create a new course, but only assign existing forums.", fr: "FAUX. Vous pouvez créer un nouveau cours, mais attribuer uniquement des forums existants." },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center): False. You can create new courses (and new forums) from the Helpdesk team’s Settings page.",
      fr: "Source Odoo Learn (Centre d'aide) : Faux. Vous pouvez créer de nouveaux cours (et de nouveaux forums) à partir de la page Paramètres de l'équipe Helpdesk.",
    },
  }),
  complexQ({
    id: "hdk-056",
    module: "helpdesk",
    text: {
      en: "What is the primary purpose of incorporating eLearning courses into the Helpdesk? (Odoo Learn — Help Center - elearning)",
      fr: "Quel est l’objectif principal de l’intégration de cours eLearning dans le Helpdesk ? (Odoo Learn — Centre d'aide - e-learning)",
    },
    correct: {
      en: "To offer customers additional training and content to solve issues independently.",
      fr: "Offrir aux clients une formation et du contenu supplémentaires pour résoudre les problèmes de manière indépendante.",
    },
    distractors: [
      { en: "To reduce the workload on the Helpdesk team", fr: "Pour réduire la charge de travail de l’équipe Helpdesk" },
      { en: "To provide training for Helpdesk agents only", fr: "Fournir une formation aux agents du Helpdesk uniquement" },
      { en: "To create a public forum for customer feedback", fr: "Pour créer un forum public pour les commentaires des clients" },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center - elearning): To offer customers additional training and content to solve issues independently.",
      fr: "Source Odoo Learn (Centre d'aide - elearning) : Proposer aux clients des formations et du contenu supplémentaires pour résoudre les problèmes de manière indépendante.",
    },
  }),
  complexQ({
    id: "hdk-057",
    module: "helpdesk",
    text: {
      en: "Where can I enable the eLearning integration for my Helpdesk team? (Odoo Learn — Help Center - elearning)",
      fr: "Où puis-je activer l'intégration eLearning pour mon équipe Helpdesk ? (Odoo Learn — Centre d'aide - e-learning)",
    },
    correct: {
      en: "Helpdesk > Select a Team > Settings > Help Center",
      fr: "Helpdesk > Sélectionnez une équipe > Paramètres > Centre d'aide",
    },
    distractors: [
      { en: "Helpdesk > Select a Team > Settings > Visibility", fr: "Helpdesk > Sélectionnez une équipe > Paramètres > Visibilité" },
      { en: "eLearning > Configuration > Settings", fr: "eLearning > Configuration > Paramètres" },
      { en: "Website > Configuration > Forums > Help Center", fr: "Site Web > Configuration > Forums > Centre d'aide" },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center - elearning): Helpdesk > Select a Team > Settings > Help Center",
      fr: "Source Odoo Learn (Centre d'aide - elearning) : Helpdesk > Sélectionner une équipe > Paramètres > Centre d'aide",
    },
  }),
  complexQ({
    id: "hdk-058",
    module: "helpdesk",
    text: {
      en: "When adding a video to a course, what happens after you paste the video link? (Odoo Learn — Help Center - elearning)",
      fr: "Lorsque vous ajoutez une vidéo à un cours, que se passe-t-il une fois que vous avez collé le lien vidéo ? (Odoo Learn — Centre d'aide - e-learning)",
    },
    correct: {
      en: "Odoo retrieves the video’s thumbnail, title, and duration",
      fr: "Odoo récupère la vignette, le titre et la durée de la vidéo",
    },
    distractors: [
      { en: "Odoo asks for manual entry of the video details", fr: "Odoo demande la saisie manuelle des détails de la vidéo" },
      { en: "Odoo converts the video to a downloadable file", fr: "Odoo convertit la vidéo en fichier téléchargeable" },
      { en: "Nothing, Odoo only links to the video but it is accessed on YouTube", fr: "Rien, Odoo ne fait que créer un lien vers la vidéo mais elle est accessible sur YouTube" },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center - elearning): Odoo retrieves the video’s thumbnail, title, and duration",
      fr: "Source Odoo Learn (Centre d'aide - elearning) : Odoo récupère la vignette, le titre et la durée de la vidéo",
    },
  }),
  complexQ({
    id: "hdk-059",
    module: "helpdesk",
    text: {
      en: "What is Odoo’s Knowledge application primarily used for? (Odoo Learn — Help Center - Knowledge)",
      fr: "À quoi sert principalement l’application Knowledge d’Odoo ? (Odoo Learn — Centre d'aide - Connaissance)",
    },
    correct: {
      en: "A collaborative library for storing, editing, and sharing information",
      fr: "Une bibliothèque collaborative pour stocker, éditer et partager des informations",
    },
    distractors: [
      { en: "Tracking tickets and customer feedback", fr: "Suivi des tickets et retours clients" },
      { en: "Creating instructional videos for eLearning courses", fr: "Création de vidéos pédagogiques pour les cours eLearning" },
      { en: "Managing team schedules and task assignments", fr: "Gérer les plannings des équipes et l'attribution des tâches" },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center - Knowledge): A collaborative library for storing, editing, and sharing information",
      fr: "Source Odoo Learn (Centre d'aide - Connaissance) : Une bibliothèque collaborative pour stocker, éditer et partager des informations",
    },
  }),
  complexQ({
    id: "hdk-060",
    module: "helpdesk",
    text: {
      en: "Where can I enable the Knowledge integration for my Helpdesk team? (Odoo Learn — Help Center - Knowledge)",
      fr: "Où puis-je activer l'intégration des connaissances pour mon équipe Helpdesk ? (Odoo Learn — Centre d'aide - Connaissance)",
    },
    correct: {
      en: "Helpdesk > Select a Team > Settings > Help Center",
      fr: "Helpdesk > Sélectionnez une équipe > Paramètres > Centre d'aide",
    },
    distractors: [
      { en: "Helpdesk > Select a Team > Settings > Visibility", fr: "Helpdesk > Sélectionnez une équipe > Paramètres > Visibilité" },
      { en: "eLearning > Configuration > Settings", fr: "eLearning > Configuration > Paramètres" },
      { en: "Website > Configuration > Forums > Help Center", fr: "Site Web > Configuration > Forums > Centre d'aide" },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center - Knowledge): Helpdesk > Select a Team > Settings > Help Center",
      fr: "Source Odoo Learn (Centre d'aide - Connaissances) : Helpdesk > Sélectionner une équipe > Paramètres > Centre d'aide",
    },
  }),
  complexQ({
    id: "hdk-061",
    module: "helpdesk",
    text: {
      en: "What options are available in the template box for Knowledge articles? (Odoo Learn — Help Center - Knowledge)",
      fr: "Quelles options sont disponibles dans la zone de modèle pour les articles Knowledge ? (Odoo Learn — Centre d'aide - Connaissance)",
    },
    correct: {
      en: "Send as a message, use as a ticket description, or copy the text",
      fr: "Envoyer sous forme de message, utiliser comme description de ticket ou copier le texte",
    },
    distractors: [
      { en: "Forward to another Helpdesk agent, archive, or delete", fr: "Transférer à un autre agent du Helpdesk, archiver ou supprimer" },
      { en: "Print the article, download a PDF, or share a link", fr: "Imprimez l'article, téléchargez un PDF ou partagez un lien" },
      { en: "Translate, edit, or tag the article", fr: "Traduire, modifier ou taguer l'article" },
    ],
    explanation: {
      en: "Source Odoo Learn (Help Center - Knowledge): Send as a message, use as a ticket description, or copy the text",
      fr: "Source Odoo Learn (Centre d'aide - Connaissances) : Envoyer sous forme de message, utiliser comme description de ticket ou copier le texte",
    },
  }),
];
