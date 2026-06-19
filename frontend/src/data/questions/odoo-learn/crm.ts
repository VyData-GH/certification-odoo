import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const crmLearnQuestions = [
  complexQ({
    id: "crm-026",
    module: "crm",
    text: {
      en: "In order to configure Internal users, what type of Gmail account do you need to be using? (Odoo Learn — Google Calendar Sync)",
      fr: "Afin de configurer les utilisateurs internes, quel type de compte Gmail devez-vous utiliser ? (Odoo Learn — Synchronisation du calendrier Google)",
    },
    correct: {
      en: "Only Google Workspace accounts can be Internal users",
      fr: "Seuls les comptes Google Workspace peuvent être des utilisateurs internes",
    },
    distractors: [
      { en: "Any kind of Gmail account can be an Internal user", fr: "Tout type de compte Gmail peut être un utilisateur interne" },
      { en: "Only personal Gmail accounts can be Internal users", fr: "Seuls les comptes Gmail personnels peuvent être des utilisateurs internes" },
      { en: "Only the account that created the project is an Internal user", fr: "Seul le compte qui a créé le projet est un utilisateur interne" },
    ],
    explanation: {
      en: "Source Odoo Learn (Google Calendar Sync): Only Google Workspace accounts can be Internal users",
      fr: "Source Odoo Learn (Google Calendar Sync) : seuls les comptes Google Workspace peuvent être des utilisateurs internes",
    },
  }),
  complexQ({
    id: "crm-027",
    module: "crm",
    text: {
      en: "What do the authorized redirect URIs do? (Odoo Learn — Google Calendar Sync)",
      fr: "À quoi servent les URI de redirection autorisés ? (Odoo Learn — Synchronisation du calendrier Google)",
    },
    correct: {
      en: "Creates the redirect request, or linkage back to Google, and link the Odoo website to the newly created OAuth login",
      fr: "Crée la demande de redirection, ou un lien vers Google, et relie le site Web Odoo à la connexion OAuth nouvellement créée",
    },
    distractors: [
      { en: "Directs unwanted users away from the database", fr: "Dirige les utilisateurs indésirables loin de la base de données" },
      { en: "Redirects users to Odoo when they are in the Google Developer Console", fr: "Redirige les utilisateurs vers Odoo lorsqu'ils sont dans la console de développement Google" },
      { en: "Automatically creates the client ID and client secret for the user when they log in", fr: "Crée automatiquement l'ID client et le secret client pour l'utilisateur lorsqu'il se connecte" },
    ],
    explanation: {
      en: "Source Odoo Learn (Google Calendar Sync): Creates the redirect request, or linkage back to Google, and link the Odoo website to the newly created OAuth login",
      fr: "Source Odoo Learn (Google Calendar Sync) : crée la demande de redirection ou un lien vers Google et relie le site Web Odoo à la connexion OAuth nouvellement créée.",
    },
  }),
  complexQ({
    id: "crm-028",
    module: "crm",
    text: {
      en: "Where do you find the 'publish' button for the project? (Odoo Learn — Google Calendar Sync)",
      fr: "Où trouve-t-on le bouton « publier » du projet ? (Odoo Learn — Synchronisation du calendrier Google)",
    },
    correct: {
      en: "In the \"Audience\" page.",
      fr: "Dans la page \"Audience\".",
    },
    distractors: [
      { en: "In the \"main Overview\" page.", fr: "Dans la page \"Présentation principale\"." },
      { en: "In the \"Branding\" page.", fr: "Dans la page \"Marque\"." },
      { en: "In the \"Data Access\" page.", fr: "Dans la page \"Accès aux données\"." },
    ],
    explanation: {
      en: "Source Odoo Learn (Google Calendar Sync): In the \"Audience\" page.",
      fr: "Source Odoo Learn (Google Calendar Sync) : Dans la page \"Audience\".",
    },
  }),
  complexQ({
    id: "crm-029",
    module: "crm",
    text: {
      en: "Which two items will you later copy from Azure and paste into the Odoo Settings fields? (Odoo Learn — Outlook Calendar Sync)",
      fr: "Quels éléments allez-vous ensuite copier depuis Azure et coller dans les champs Paramètres Odoo ? (Odoo Learn — Synchronisation du calendrier Outlook)",
    },
    correct: {
      en: "Application (client) ID and Client secret",
      fr: "ID d'application (client) et secret client",
    },
    distractors: [
      { en: "Tenant ID and Subscription ID", fr: "ID de locataire et ID d'abonnement" },
      { en: "Username and Password", fr: "Nom d'utilisateur et mot de passe" },
      { en: "Resource group name and Region", fr: "Nom du groupe de ressources et région" },
    ],
    explanation: {
      en: "Source Odoo Learn (Outlook Calendar Sync): Application (client) ID and Client secret",
      fr: "Source Odoo Learn (Synchronisation du calendrier Outlook) : ID d'application (client) et secret client",
    },
  }),
  complexQ({
    id: "crm-030",
    module: "crm",
    text: {
      en: "In the Azure portal search bar, what do you search for to get Outlook Sync started? (Odoo Learn — Outlook Calendar Sync)",
      fr: "Dans la barre de recherche du portail Azure, que recherchez-vous pour démarrer la synchronisation Outlook ? (Odoo Learn — Synchronisation du calendrier Outlook)",
    },
    correct: {
      en: "“App registration”",
      fr: "« Inscription de l'application »",
    },
    distractors: [
      { en: "“OAuth settings”", fr: "\"Paramètres OAuth\"" },
      { en: "“Calendar sync”", fr: "\"Synchronisation du calendrier\"" },
      { en: "“Enterprise applications”", fr: "«Applications d'entreprise»" },
    ],
    explanation: {
      en: "Source Odoo Learn (Outlook Calendar Sync): “App registration”",
      fr: "Source Odoo Learn (Outlook Calendar Sync) : « Inscription de l'application »",
    },
  }),
  complexQ({
    id: "crm-031",
    module: "crm",
    text: {
      en: "Where can meetings be scheduled in Odoo besides the Calendar app? (Odoo Learn — Odoo Calendar)",
      fr: "Où peut-on planifier des réunions dans Odoo en dehors de l'application Calendrier ? (Odoo Learn — Calendrier Odoo)",
    },
    correct: {
      en: "From a record’s Chatter section",
      fr: "À partir de la section Chatter d'un enregistrement",
    },
    distractors: [
      { en: "From the Dashboard only", fr: "Depuis le tableau de bord uniquement" },
      { en: "From the Email app", fr: "Depuis l'application E-mail" },
      { en: "Only through the Contacts module", fr: "Uniquement via le module Contacts" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Calendar): From a record’s Chatter section",
      fr: "Source Odoo Learn (Calendrier Odoo) : À partir de la section Chatter d'un enregistrement",
    },
  }),
  complexQ({
    id: "crm-032",
    module: "crm",
    text: {
      en: "Which of the following privacy options are available for Odoo meetings? (Odoo Learn — Odoo Calendar)",
      fr: "Parmi les options de confidentialité suivantes, lesquelles sont disponibles pour les réunions Odoo ? (Odoo Learn — Calendrier Odoo)",
    },
    correct: {
      en: "Public, Private, Internal Users only",
      fr: "Utilisateurs publics, privés et internes uniquement",
    },
    distractors: [
      { en: "Confidential, Shared, Restricted", fr: "Confidentiel, partagé, restreint" },
      { en: "Team-only, Department, Global", fr: "Équipe uniquement, Département, Global" },
      { en: "Hidden, Visible, Invite-only", fr: "Masqué, visible, sur invitation uniquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Calendar): Public, Private, Internal Users only",
      fr: "Source Odoo Learn (Calendrier Odoo) : Utilisateurs publics, privés et internes uniquement",
    },
  }),
  complexQ({
    id: "crm-033",
    module: "crm",
    text: {
      en: "What does a green Activities icon on a record indicate? (Odoo Learn — Schedule Activities)",
      fr: "Qu'indique une icône d'activités verte sur un enregistrement ? (Odoo Learn — Programmer des activités)",
    },
    correct: {
      en: "An upcoming activity is scheduled",
      fr: "Une activité à venir est programmée",
    },
    distractors: [
      { en: "The activity is overdue", fr: "L'activité est en retard" },
      { en: "There are no scheduled activities", fr: "Il n'y a aucune activité programmée" },
      { en: "An activity is due today", fr: "Une activité est prévue aujourd'hui" },
    ],
    explanation: {
      en: "Source Odoo Learn (Schedule Activities): An upcoming activity is scheduled",
      fr: "Source Odoo Learn (Activités planifiées) : Une activité à venir est programmée",
    },
  }),
  complexQ({
    id: "crm-034",
    module: "crm",
    text: {
      en: "What does the number next to the clock icon in the top-right navigation bar represent? (Odoo Learn — Schedule Activities)",
      fr: "Que représente le chiffre à côté de l'icône de l'horloge dans la barre de navigation en haut à droite ? (Odoo Learn — Programmer des activités)",
    },
    correct: {
      en: "The number of overdue or due-today activities",
      fr: "Le nombre d'activités en retard ou à échéance aujourd'hui",
    },
    distractors: [
      { en: "The total number of completed activities", fr: "Le nombre total d'activités réalisées" },
      { en: "The number of assigned users", fr: "Le nombre d'utilisateurs attribués" },
      { en: "The total activities created this week", fr: "Le total des activités créées cette semaine" },
    ],
    explanation: {
      en: "Source Odoo Learn (Schedule Activities): The number of overdue or due-today activities",
      fr: "Source Odoo Learn (Activités planifiées) : Le nombre d'activités en retard ou à échéance aujourd'hui",
    },
  }),
  complexQ({
    id: "crm-035",
    module: "crm",
    text: {
      en: "Where can you create, mark, or edit activities directly within a record? (Odoo Learn — Schedule Activities)",
      fr: "Où pouvez-vous créer, marquer ou modifier des activités directement dans un enregistrement ? (Odoo Learn — Programmer des activités)",
    },
    correct: {
      en: "In the Chatter section",
      fr: "Dans la section Chat",
    },
    distractors: [
      { en: "In the Settings menu", fr: "Dans le menu Paramètres" },
      { en: "On the Reporting dashboard", fr: "Sur le tableau de bord Rapports" },
      { en: "In the App switcher", fr: "Dans le sélecteur d'applications" },
    ],
    explanation: {
      en: "Source Odoo Learn (Schedule Activities): In the Chatter section",
      fr: "Source Odoo Learn (Activités programmées) : Dans la section Chatter",
    },
  }),
  complexQ({
    id: "crm-036",
    module: "crm",
    text: {
      en: "Which of the following pieces of information is required to create and save a new Contact? (Odoo Learn — Contacts - Basics)",
      fr: "Parmi les informations suivantes, lesquelles sont requises pour créer et enregistrer un nouveau contact ? (Odoo Learn — Contacts - Bases)",
    },
    correct: {
      en: "Name.",
      fr: "Nom.",
    },
    distractors: [
      { en: "Email address.", fr: "Adresse email." },
      { en: "Physical address.", fr: "Adresse physique." },
      { en: "Phone number.", fr: "Numéro de téléphone." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contacts - Basics): Name.",
      fr: "Source Odoo Learn (Contacts - Bases) : Nom.",
    },
  }),
  complexQ({
    id: "crm-037",
    module: "crm",
    text: {
      en: "You’re entering contact information for a new person and you fill out the Company field with the name of a new company. What will the Contacts app do with this information? (Odoo Learn — Contacts - Basics)",
      fr: "Vous saisissez les coordonnées d’une nouvelle personne et vous remplissez le champ Entreprise avec le nom d’une nouvelle entreprise. Que fera l’application Contacts avec ces informations ? (Odoo Learn — Contacts - Bases)",
    },
    correct: {
      en: "Create a blank contact for the Company with only the name filled out.",
      fr: "Créez un contact vide pour la société avec uniquement le nom renseigné.",
    },
    distractors: [
      { en: "Nothing. Companies must be created manually.", fr: "Rien. Les sociétés doivent être créées manuellement." },
      { en: "Create a Contact for the company with the person set as the CEO of the company.", fr: "Créez un contact pour l'entreprise avec la personne définie comme PDG de l'entreprise." },
      { en: "Create a Contact for the company filled out with as much information as possible from the person’s contact.", fr: "Créez un contact pour l'entreprise rempli avec autant d'informations que possible provenant du contact de la personne." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contacts - Basics): Create a blank contact for the Company with only the name filled out.",
      fr: "Source Odoo Learn (Contacts - Bases) : Créez un contact vide pour l'entreprise avec uniquement le nom renseigné.",
    },
  }),
  complexQ({
    id: "crm-038",
    module: "crm",
    text: {
      en: "Which of the following actions does NOT create a new Contact in the Contacts app? (Odoo Learn — Contacts - Basics)",
      fr: "Laquelle des actions suivantes ne crée PAS de nouveau contact dans l'application Contacts ? (Odoo Learn — Contacts - Bases)",
    },
    correct: {
      en: "Changing an employee’s title or role.",
      fr: "Changer le titre ou le rôle d’un employé.",
    },
    distractors: [
      { en: "Manually creating a Contact in the Contacts app.", fr: "Créer manuellement un contact dans l'application Contacts." },
      { en: "Creating an Opportunity in the CRM app with a business or individual.", fr: "Création d'une opportunité dans l'application CRM avec une entreprise ou un particulier." },
      { en: "Creating a vendor in the Sales app.", fr: "Création d'un fournisseur dans l'application Ventes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contacts - Basics): Changing an employee’s title or role.",
      fr: "Source Odoo Learn (Contacts - Bases) : Changer le titre ou le rôle d'un employé.",
    },
  }),
  complexQ({
    id: "crm-039",
    module: "crm",
    text: {
      en: "What type of information is displayed in the Chatter? (Odoo Learn — Chatter Basics)",
      fr: "Quel type d’informations est affiché dans Chatter ? (Odoo Learn — Notions de base sur Chatter)",
    },
    correct: {
      en: "Field changes, messages, notes, and scheduled tasks",
      fr: "Modifications de champ, messages, notes et tâches planifiées",
    },
    distractors: [
      { en: "Only messages and emails", fr: "Uniquement les messages et e-mails" },
      { en: "Calendar events only", fr: "Événements du calendrier uniquement" },
      { en: "System settings and configurations", fr: "Paramètres et configurations du système" },
    ],
    explanation: {
      en: "Source Odoo Learn (Chatter Basics): Field changes, messages, notes, and scheduled tasks",
      fr: "Source Odoo Learn (Bases de Chatter) : modifications de champs, messages, notes et tâches planifiées",
    },
  }),
  complexQ({
    id: "crm-040",
    module: "crm",
    text: {
      en: "What happens when you click the star icon on a Chatter entry? (Odoo Learn — Chatter Basics)",
      fr: "Que se passe-t-il lorsque vous cliquez sur l'icône étoile sur une entrée Chatter ? (Odoo Learn — Notions de base sur Chatter)",
    },
    correct: {
      en: "It saves that entry to your Starred folder in the Discuss app",
      fr: "Il enregistre cette entrée dans votre dossier Favoris dans l'application Discuter",
    },
    distractors: [
      { en: "It marks the message as read", fr: "Il marque le message comme lu" },
      { en: "It sends the message to your manager", fr: "Il envoie le message à votre manager" },
      { en: "It deletes the Chatter entry", fr: "Il supprime l'entrée Chatter" },
    ],
    explanation: {
      en: "Source Odoo Learn (Chatter Basics): It saves that entry to your Starred folder in the Discuss app",
      fr: "Source Odoo Learn (Chatter Basics) : il enregistre cette entrée dans votre dossier Favoris dans l'application Discuter",
    },
  }),
  complexQ({
    id: "crm-041",
    module: "crm",
    text: {
      en: "What happens when you click Log after writing a note? (Odoo Learn — Chatter Basics)",
      fr: "Que se passe-t-il lorsque vous cliquez sur Journal après avoir rédigé une note ? (Odoo Learn — Notions de base sur Chatter)",
    },
    correct: {
      en: "The note appears in the Chatter and notifies tagged internal users",
      fr: "La note apparaît dans Chatter et informe les utilisateurs internes tagués",
    },
    distractors: [
      { en: "The note is sent as an email", fr: "La note est envoyée par e-mail" },
      { en: "The record automatically closes", fr: "Le dossier se ferme automatiquement" },
      { en: "The note is hidden from all followers", fr: "La note est masquée à tous les abonnés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Chatter Basics): The note appears in the Chatter and notifies tagged internal users",
      fr: "Source Odoo Learn (Bases de Chatter) : La note apparaît dans Chatter et informe les utilisateurs internes tagués",
    },
  }),
  complexQ({
    id: "crm-042",
    module: "crm",
    text: {
      en: "What is the main purpose of canned responses in Odoo? (Odoo Learn — Canned Responses)",
      fr: "Quel est l’objectif principal des réponses standardisées dans Odoo ? (Odoo Learn — Réponses standardisées)",
    },
    correct: {
      en: "To save time and ensure consistent communication",
      fr: "Pour gagner du temps et assurer une communication cohérente",
    },
    distractors: [
      { en: "To automate email marketing campaigns", fr: "Pour automatiser les campagnes de marketing par e-mail" },
      { en: "To track customer satisfaction scores", fr: "Pour suivre les scores de satisfaction des clients" },
      { en: "To assign tickets automatically", fr: "Pour attribuer automatiquement des tickets" },
    ],
    explanation: {
      en: "Source Odoo Learn (Canned Responses): To save time and ensure consistent communication",
      fr: "Source Odoo Learn (Canned Responses) : Pour gagner du temps et assurer une communication cohérente",
    },
  }),
  complexQ({
    id: "crm-043",
    module: "crm",
    text: {
      en: "Where are canned responses managed in Odoo? (Odoo Learn — Canned Responses)",
      fr: "Où les réponses standardisées sont-elles gérées dans Odoo ? (Odoo Learn — Réponses standardisées)",
    },
    correct: {
      en: "Discuss app",
      fr: "Discuter de l'application",
    },
    distractors: [
      { en: "Helpdesk app", fr: "Application d'assistance" },
      { en: "CRM app", fr: "Application CRM" },
      { en: "Live Chat app", fr: "Application de chat en direct" },
    ],
    explanation: {
      en: "Source Odoo Learn (Canned Responses): Discuss app",
      fr: "Source Odoo Learn (Réponses standardisées) : Discuter de l'application",
    },
  }),
  complexQ({
    id: "crm-044",
    module: "crm",
    text: {
      en: "What happens if you leave the “Authorized Group” field empty? (Odoo Learn — Canned Responses)",
      fr: "Que se passe-t-il si vous laissez le champ « Groupe autorisé » vide ? (Odoo Learn — Réponses standardisées)",
    },
    correct: {
      en: "Only you can use that canned response",
      fr: "Vous seul pouvez utiliser cette réponse standardisée",
    },
    distractors: [
      { en: "It appears in all apps", fr: "Il apparaît dans toutes les applications" },
      { en: "It gets deleted automatically", fr: "Il est supprimé automatiquement" },
      { en: "Everyone can use it", fr: "Tout le monde peut l'utiliser" },
    ],
    explanation: {
      en: "Source Odoo Learn (Canned Responses): Only you can use that canned response",
      fr: "Source Odoo Learn (réponses standardisées) : vous seul pouvez utiliser cette réponse standardisée",
    },
  }),
  complexQ({
    id: "crm-045",
    module: "crm",
    text: {
      en: "How does Odoo display a link shared in a chat message? (Odoo Learn — Odoo Discuss: Direct Messages)",
      fr: "Comment Odoo affiche-t-il un lien partagé dans un message de chat ? (Odoo Learn — Discussion sur Odoo : messages directs)",
    },
    correct: {
      en: "As a clickable preview",
      fr: "En aperçu cliquable",
    },
    distractors: [
      { en: "As plain text only", fr: "En texte brut uniquement" },
      { en: "As a QR code", fr: "Sous forme de code QR" },
      { en: "As an attachment", fr: "En pièce jointe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Direct Messages): As a clickable preview",
      fr: "Source Odoo Learn (Odoo Discuss: Direct Messages) : en aperçu cliquable",
    },
  }),
  complexQ({
    id: "crm-046",
    module: "crm",
    text: {
      en: "What happens when you unpin a conversation in Odoo Discuss? (Odoo Learn — Odoo Discuss: Direct Messages)",
      fr: "Que se passe-t-il lorsque vous désépinglez une conversation dans Odoo Discuss ? (Odoo Learn — Discussion sur Odoo : messages directs)",
    },
    correct: {
      en: "It hides the conversation from view until you search for it",
      fr: "Il masque la conversation jusqu'à ce que vous la recherchiez",
    },
    distractors: [
      { en: "It deletes the conversation history", fr: "Il supprime l'historique des conversations" },
      { en: "It archives the conversation permanently", fr: "Il archive la conversation en permanence" },
      { en: "It sends a notification to the other user", fr: "Il envoie une notification à l'autre utilisateur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Direct Messages): It hides the conversation from view until you search for it",
      fr: "Source Odoo Learn (Odoo Discuss: Direct Messages) : il masque la conversation jusqu'à ce que vous la recherchiez",
    },
  }),
  complexQ({
    id: "crm-047",
    module: "crm",
    text: {
      en: "Which icon in the upper-right corner of the chat lets you adjust notification settings? (Odoo Learn — Odoo Discuss: Direct Messages)",
      fr: "Quelle icône dans le coin supérieur droit du chat vous permet d'ajuster les paramètres de notification ? (Odoo Learn — Discussion sur Odoo : messages directs)",
    },
    correct: {
      en: "Bell",
      fr: "Cloche",
    },
    distractors: [
      { en: "Magnifying glass", fr: "Loupe" },
      { en: "Pin", fr: "Épingle" },
      { en: "Paperclip", fr: "Trombone" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Direct Messages): Bell",
      fr: "Source Odoo Learn (Odoo Discuss : messages directs) : Bell",
    },
  }),
  complexQ({
    id: "crm-048",
    module: "crm",
    text: {
      en: "How can you invite someone outside your company to a group chat? (Odoo Learn — Odoo Discuss: Voice & Video Calls)",
      fr: "Comment inviter une personne extérieure à votre entreprise à une discussion de groupe ? (Odoo Learn — Odoo Discuss : appels vocaux et vidéo)",
    },
    correct: {
      en: "Generate a public link to the chat",
      fr: "Générer un lien public vers le chat",
    },
    distractors: [
      { en: "Add them through the CRM module", fr: "Ajoutez-les via le module CRM" },
      { en: "Ask an admin to create their account first", fr: "Demandez à un administrateur de créer d'abord son compte" },
      { en: "Use the “Start a Meeting” option only", fr: "Utilisez uniquement l'option « Démarrer une réunion »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Voice & Video Calls): Generate a public link to the chat",
      fr: "Source Odoo Learn (Odoo Discuss : Appels vocaux et vidéo) : Générer un lien public vers le chat",
    },
  }),
  complexQ({
    id: "crm-049",
    module: "crm",
    text: {
      en: "Which control would you use to discreetly let others know you have something to say? (Odoo Learn — Odoo Discuss: Voice & Video Calls)",
      fr: "Quel contrôle utiliseriez-vous pour faire savoir discrètement aux autres que vous avez quelque chose à dire ? (Odoo Learn — Odoo Discuss : appels vocaux et vidéo)",
    },
    correct: {
      en: "Raise Hand",
      fr: "Lever la main",
    },
    distractors: [
      { en: "Mute", fr: "Muet" },
      { en: "Members List", fr: "Liste des membres" },
      { en: "Gear menu", fr: "Menu d'engrenage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Voice & Video Calls): Raise Hand",
      fr: "Source Odoo Learn (Odoo Discuss : appels vocaux et vidéo) : lever la main",
    },
  }),
  complexQ({
    id: "crm-050",
    module: "crm",
    text: {
      en: "What does it mean when a channel name is bold in the sidebar? (Odoo Learn — Odoo Discuss: Channels)",
      fr: "Qu'est-ce que cela signifie lorsque le nom d'une chaîne est en gras dans la barre latérale ? (Odoo Learn — Discussion sur Odoo : Chaînes)",
    },
    correct: {
      en: "There are unread messages",
      fr: "Il y a des messages non lus",
    },
    distractors: [
      { en: "The channel is private", fr: "La chaîne est privée" },
      { en: "It’s the default channel", fr: "C'est la chaîne par défaut" },
      { en: "You’ve created the channel", fr: "Vous avez créé la chaîne" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Channels): There are unread messages",
      fr: "Source Odoo Learn (Odoo Discuss: Channels) : Il y a des messages non lus",
    },
  }),
  complexQ({
    id: "crm-051",
    module: "crm",
    text: {
      en: "What does the gear icon next to “Channels” allow you to do? (Odoo Learn — Odoo Discuss: Channels)",
      fr: "Que vous permet de faire l'icône d'engrenage à côté de « Chaînes » ? (Odoo Learn — Discussion sur Odoo : Chaînes)",
    },
    correct: {
      en: "Access all available channels",
      fr: "Accédez à toutes les chaînes disponibles",
    },
    distractors: [
      { en: "Change your password", fr: "Changez votre mot de passe" },
      { en: "Reset notifications", fr: "Réinitialiser les notifications" },
      { en: "Export your message history", fr: "Exportez l'historique de vos messages" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Channels): Access all available channels",
      fr: "Source Odoo Learn (Odoo Discuss: Channels) : accédez à toutes les chaînes disponibles",
    },
  }),
  complexQ({
    id: "crm-052",
    module: "crm",
    text: {
      en: "Which user type can join a channel set to “User Types / Internal Users”? (Odoo Learn — Odoo Discuss: Channels)",
      fr: "Quel type d'utilisateur peut rejoindre un canal défini sur « Types d'utilisateurs/Utilisateurs internes » ? (Odoo Learn — Discussion sur Odoo : Chaînes)",
    },
    correct: {
      en: "Any employee in the company",
      fr: "Tout salarié de l'entreprise",
    },
    distractors: [
      { en: "Only the channel creator", fr: "Uniquement le créateur de la chaîne" },
      { en: "External contractors only", fr: "Contractants externes uniquement" },
      { en: "Public users with a link", fr: "Utilisateurs publics avec un lien" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Channels): Any employee in the company",
      fr: "Source Odoo Learn (Odoo Discuss: Channels) : Tout employé de l'entreprise",
    },
  }),
  complexQ({
    id: "crm-053",
    module: "crm",
    text: {
      en: "What action(s) need to take place prior to using the pre-configured WhatsApp templates? (Odoo Learn — Odoo Discuss: WhatsApp Basics)",
      fr: "Quelle(s) action(s) doivent avoir lieu avant d'utiliser les modèles WhatsApp préconfigurés ? (Odoo Learn — Discussion sur Odoo : les bases de WhatsApp)",
    },
    correct: {
      en: "The pre-configured template needs to be submitted to Meta for approval.",
      fr: "Le modèle préconfiguré doit être soumis à Meta pour approbation.",
    },
    distractors: [
      { en: "Nothing, the templates work as soon as the associated Odoo app is installed.", fr: "Rien, les modèles fonctionnent dès que l'application Odoo associée est installée." },
      { en: "There aren’t any pre-configured templates available, each must be configured manually.", fr: "Aucun modèle préconfiguré n’est disponible, chacun doit être configuré manuellement." },
      { en: "The pre-configured templates are automatically submitted to Meta for approval once they are saved.", fr: "Les modèles préconfigurés sont automatiquement soumis à Meta pour approbation une fois enregistrés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: WhatsApp Basics): The pre-configured template needs to be submitted to Meta for approval.",
      fr: "Source Odoo Learn (Odoo Discuss : WhatsApp Basics) : Le modèle préconfiguré doit être soumis à Meta pour approbation.",
    },
  }),
  complexQ({
    id: "crm-054",
    module: "crm",
    text: {
      en: "What are all the locations in Odoo where the WhatsApp messages show up? (Odoo Learn — Odoo Discuss: WhatsApp Basics)",
      fr: "Quels sont tous les endroits dans Odoo où les messages WhatsApp apparaissent ? (Odoo Learn — Discussion sur Odoo : les bases de WhatsApp)",
    },
    correct: {
      en: "In the chatter, in the messaging icon in the upper right corner, as a chat message in the lower right corner, and in the Discuss app.",
      fr: "Dans le chat, dans l'icône de messagerie dans le coin supérieur droit, sous forme de message de discussion dans le coin inférieur droit et dans l'application Discuter.",
    },
    distractors: [
      { en: "In the chatter, in the messaging icon in the upper right corner, and as a chat message in the lower right corner.", fr: "Dans le chat, dans l'icône de messagerie dans le coin supérieur droit et sous forme de message de discussion dans le coin inférieur droit." },
      { en: "In the chatter, as a chat message in the lower right corner, and in the Discuss app.", fr: "Dans le chat, sous forme de message de discussion dans le coin inférieur droit et dans l'application Discuter." },
      { en: "In the messaging icon in the upper right corner, as a chat message in the lower right corner, and in the Discuss app.", fr: "Dans l'icône de messagerie dans le coin supérieur droit, sous forme de message de discussion dans le coin inférieur droit et dans l'application Discuter." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: WhatsApp Basics): In the chatter, in the messaging icon in the upper right corner, as a chat message in the lower right corner, and in the Discuss app.",
      fr: "Source Odoo Learn (Odoo Discuss : WhatsApp Basics) : Dans le chat, dans l'icône de messagerie dans le coin supérieur droit, sous forme de message de chat dans le coin inférieur droit et dans l'application Discuss.",
    },
  }),
  complexQ({
    id: "crm-055",
    module: "crm",
    text: {
      en: "When the WhatsApp button is pressed in the chatter, what is used to send a preformatted message to the customer? (Odoo Learn — Odoo Discuss: WhatsApp Basics)",
      fr: "Lorsque l'on appuie sur le bouton WhatsApp dans le chat, qu'est-ce qui est utilisé pour envoyer un message préformaté au client ? (Odoo Learn — Discussion sur Odoo : les bases de WhatsApp)",
    },
    correct: {
      en: "A Whatsapp template is used to send preformatted text, images and links to the customer.",
      fr: "Un modèle Whatsapp est utilisé pour envoyer du texte, des images et des liens préformatés au client.",
    },
    distractors: [
      { en: "Only text can be sent through WhatsApp, and it needs to be added manually to the message.", fr: "Seul le texte peut être envoyé via WhatsApp et doit être ajouté manuellement au message." },
      { en: "Messages are only sent through the Discuss app, not through the chatter of a record.", fr: "Les messages sont envoyés uniquement via l'application Discuss, et non via le bavardage d'un enregistrement." },
      { en: "Email templates are used to send a WhatsApp preformatted message.", fr: "Les modèles d'e-mails sont utilisés pour envoyer un message préformaté WhatsApp." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: WhatsApp Basics): A Whatsapp template is used to send preformatted text, images and links to the customer.",
      fr: "Source Odoo Learn (Odoo Discuss : WhatsApp Basics) : Un modèle Whatsapp est utilisé pour envoyer du texte, des images et des liens préformatés au client.",
    },
  }),
  complexQ({
    id: "crm-056",
    module: "crm",
    text: {
      en: "What Type of variable needs to be selected in order to reference a specific field within a model in the body of the text? (Odoo Learn — WhatsApp: Advanced Setup)",
      fr: "Quel type de variable doit être sélectionné afin de référencer un champ spécifique au sein d'un modèle dans le corps du texte ? (Odoo Learn — WhatsApp : configuration avancée)",
    },
    correct: {
      en: "Field of Model.",
      fr: "Domaine du modèle.",
    },
    distractors: [
      { en: "Portal Link.", fr: "Lien du portail." },
      { en: "Free Text.", fr: "Texte libre." },
      { en: "User Name.", fr: "Nom d'utilisateur." },
    ],
    explanation: {
      en: "Source Odoo Learn (WhatsApp: Advanced Setup): Field of Model.",
      fr: "Source Odoo Learn (WhatsApp : Configuration avancée) : Champ de Modèle.",
    },
  }),
  complexQ({
    id: "crm-057",
    module: "crm",
    text: {
      en: "Which field in the WhatsApp template sets the model for which fields will be referenced in the final end-user message? (Odoo Learn — WhatsApp: Advanced Setup)",
      fr: "Quel champ du modèle WhatsApp définit le modèle pour lequel les champs seront référencés dans le message final de l'utilisateur final ? (Odoo Learn — WhatsApp : configuration avancée)",
    },
    correct: {
      en: "Applies to.",
      fr: "S'applique à.",
    },
    distractors: [
      { en: "Category.", fr: "Catégorie." },
      { en: "Phone Field.", fr: "Champ téléphonique." },
      { en: "Template Name.", fr: "Nom du modèle." },
    ],
    explanation: {
      en: "Source Odoo Learn (WhatsApp: Advanced Setup): Applies to.",
      fr: "Source Odoo Learn (WhatsApp : Configuration avancée) : S'applique à.",
    },
  }),
  complexQ({
    id: "crm-058",
    module: "crm",
    text: {
      en: "How many activities are available by default in the CRM app? (Odoo Learn — CRM Basics and Pipelines)",
      fr: "Combien d'activités sont disponibles par défaut dans l'application CRM ? (Odoo Learn — Bases et pipelines du CRM)",
    },
    correct: {
      en: "Six. Schedule an activity, phone call, meeting, email, to-do, and upload a document.",
      fr: "Six. Planifiez une activité, un appel téléphonique, une réunion, un e-mail, une tâche et téléchargez un document.",
    },
    distractors: [
      { en: "As many as there are apps installed in your database.", fr: "Autant qu’il y a d’applications installées dans votre base de données." },
      { en: "Three. Phone call, meeting, and email.", fr: "Trois. Appel téléphonique, réunion et e-mail." },
      { en: "Five. In-person meeting, virtual meeting, call, email, and upload a document.", fr: "Cinq. Réunion en personne, réunion virtuelle, appel, e-mail et téléchargement d'un document." },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Basics and Pipelines): Six. Schedule an activity, phone call, meeting, email, to-do, and upload a document.",
      fr: "Source Odoo Learn (bases et pipelines du CRM) : six. Planifiez une activité, un appel téléphonique, une réunion, un e-mail, une tâche et téléchargez un document.",
    },
  }),
  complexQ({
    id: "crm-059",
    module: "crm",
    text: {
      en: "Which of the following is NOT a color code supported by the CRM app? (Odoo Learn — CRM Basics and Pipelines)",
      fr: "Lequel des éléments suivants n'est PAS un code couleur pris en charge par l'application CRM ? (Odoo Learn — Bases et pipelines du CRM)",
    },
    correct: {
      en: "Blue for activities that require manager approval.",
      fr: "Bleu pour les activités qui nécessitent l’approbation du responsable.",
    },
    distractors: [
      { en: "Green for activities scheduled for a future date.", fr: "Vert pour les activités prévues à une date ultérieure." },
      { en: "Red for activities that are past due.", fr: "Rouge pour les activités en retard." },
      { en: "Yellow for activities scheduled for the current day.", fr: "Jaune pour les activités prévues pour la journée en cours." },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Basics and Pipelines): Blue for activities that require manager approval.",
      fr: "Source Odoo Learn (bases et pipelines du CRM) : bleu pour les activités qui nécessitent l'approbation du responsable.",
    },
  }),
  complexQ({
    id: "crm-060",
    module: "crm",
    text: {
      en: "Which of the following is true about creating activities in the CRM app? (Odoo Learn — CRM Basics and Pipelines)",
      fr: "Lequel des énoncés suivants est vrai concernant la création d’activités dans l’application CRM ? (Odoo Learn — Bases et pipelines du CRM)",
    },
    correct: {
      en: "Activities can be assigned to people other than the salesperson who’s assigned to an opportunity.",
      fr: "Les activités peuvent être affectées à des personnes autres que le vendeur affecté à une opportunité.",
    },
    distractors: [
      { en: "For activities to function properly, the Marketing Automation app must be installed.", fr: "Pour que les activités fonctionnent correctement, l'application Marketing Automation doit être installée." },
      { en: "Individual activities must be manually created and configured in the CRM app’s settings before they can be used.", fr: "Les activités individuelles doivent être créées et configurées manuellement dans les paramètres de l'application CRM avant de pouvoir être utilisées." },
      { en: "Activities can only be created for active opportunities. Lost opportunities must be restored before they can have activities assigned to them.", fr: "Les activités ne peuvent être créées que pour des opportunités actives. Les opportunités perdues doivent être restaurées avant que des activités puissent leur être assignées." },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Basics and Pipelines): Activities can be assigned to people other than the salesperson who’s assigned to an opportunity.",
      fr: "Source Odoo Learn (bases et pipelines du CRM) : les activités peuvent être attribuées à des personnes autres que le vendeur affecté à une opportunité.",
    },
  }),
  complexQ({
    id: "crm-061",
    module: "crm",
    text: {
      en: "What happens to the probability score of an opportunity as it moves through the pipeline? (Odoo Learn — CRM Basics: Probabilities & Sales Teams)",
      fr: "Qu’arrive-t-il au score de probabilité d’une opportunité à mesure qu’elle progresse dans le pipeline ? (Odoo Learn — Bases du CRM : probabilités et équipes commerciales)",
    },
    correct: {
      en: "It automatically adjusts accordingly",
      fr: "Il s'ajuste automatiquement en conséquence",
    },
    distractors: [
      { en: "It adjusts accordingly, when the ‘Update Probability’ button is clicked", fr: "Il s'ajuste en conséquence lorsque vous cliquez sur le bouton « Mettre à jour la probabilité »" },
      { en: "The probability must be manually changed when it’s moved to a new stage", fr: "La probabilité doit être modifiée manuellement lorsqu'elle passe à une nouvelle étape" },
      { en: "Nothing. Once the probability is set, it never changes", fr: "Rien. Une fois la probabilité définie, elle ne change jamais" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Basics: Probabilities & Sales Teams): It automatically adjusts accordingly",
      fr: "Source Odoo Learn (Bases du CRM : Probabilités et équipes commerciales) : Il s'ajuste automatiquement en conséquence",
    },
  }),
  complexQ({
    id: "crm-062",
    module: "crm",
    text: {
      en: "If the probability has been manually changed, how can the probability return to the Odoo probability prediction? (Odoo Learn — CRM Basics: Probabilities & Sales Teams)",
      fr: "Si la probabilité a été modifiée manuellement, comment la probabilité peut-elle revenir à la prédiction de probabilité Odoo ? (Odoo Learn — Bases du CRM : probabilités et équipes commerciales)",
    },
    correct: {
      en: "By clicking the ‘gear’ icon beside the probability field",
      fr: "En cliquant sur l'icône « engrenage » à côté du champ de probabilité",
    },
    distractors: [
      { en: "By clicking ‘Restore’ at the top of the opportunity form", fr: "En cliquant sur « Restaurer » en haut du formulaire d'opportunité" },
      { en: "By clicking ‘Odoo Original’ in the Chatter of the opportunity form", fr: "En cliquant sur « Odoo Original » dans le formulaire Chatter de l'opportunité" },
      { en: "It’s impossible. Once a probability is set, it never changes", fr: "C'est impossible. Une fois qu'une probabilité est définie, elle ne change jamais" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Basics: Probabilities & Sales Teams): By clicking the ‘gear’ icon beside the probability field",
      fr: "Source Odoo Learn (Bases du CRM : Probabilités et équipes commerciales) : En cliquant sur l'icône « engrenage » à côté du champ de probabilité",
    },
  }),
  complexQ({
    id: "crm-063",
    module: "crm",
    text: {
      en: "In order to add a single salesperson to multiple sales teams, what feature *must* be activated in the CRM settings? (Odoo Learn — CRM Basics: Probabilities & Sales Teams)",
      fr: "Afin d'ajouter un seul commercial à plusieurs équipes commerciales, quelle fonctionnalité *doit* être activée dans les paramètres CRM ? (Odoo Learn — Bases du CRM : probabilités et équipes commerciales)",
    },
    correct: {
      en: "Multi Teams",
      fr: "Multi-équipes",
    },
    distractors: [
      { en: "Different Teams", fr: "Différentes équipes" },
      { en: "Multiple Sales", fr: "Ventes multiples" },
      { en: "Custom Sales", fr: "Ventes personnalisées" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Basics: Probabilities & Sales Teams): Multi Teams",
      fr: "Source Odoo Learn (Bases du CRM : Probabilités et équipes de vente) : Multi-équipes",
    },
  }),
  complexQ({
    id: "crm-064",
    module: "crm",
    text: {
      en: "What happens when I click on a colored bar at the top of a stage in the Kanban view? (Odoo Learn — CRM Scheduling Activities)",
      fr: "Que se passe-t-il lorsque je clique sur une barre colorée en haut d'une étape dans la vue Kanban ? (Odoo Learn — Activités de planification CRM)",
    },
    correct: {
      en: "It displays the opportunities that have an activity status in the selected color, in that stage only",
      fr: "Il affiche les opportunités qui ont un statut d'activité dans la couleur sélectionnée, à cette étape uniquement.",
    },
    distractors: [
      { en: "It displays all of the opportunities in the pipeline that have an activity status in the selected color, regardless of the stage", fr: "Il affiche toutes les opportunités du pipeline qui ont un statut d'activité dans la couleur sélectionnée, quelle que soit l'étape." },
      { en: "It marks all of the activities in the selected color as ‘Done’", fr: "Il marque toutes les activités dans la couleur sélectionnée comme « Terminé »" },
      { en: "It moves the deadlines of all activities by 7 days", fr: "Il décale les délais de toutes les activités de 7 jours" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Scheduling Activities): It displays the opportunities that have an activity status in the selected color, in that stage only",
      fr: "Source Odoo Learn (Activités de planification CRM) : il affiche les opportunités qui ont un statut d'activité dans la couleur sélectionnée, à cette étape uniquement.",
    },
  }),
  complexQ({
    id: "crm-065",
    module: "crm",
    text: {
      en: "What does clicking the ‘Snooze’ button do? (Odoo Learn — CRM Scheduling Activities)",
      fr: "À quoi sert le fait de cliquer sur le bouton « Répéter » ? (Odoo Learn — Activités de planification CRM)",
    },
    correct: {
      en: "It adds 7 days to the current activity deadline",
      fr: "Cela ajoute 7 jours au délai d'activité actuel",
    },
    distractors: [
      { en: "It sets the activity deadline to 7 days from today", fr: "Il fixe le délai d'activité à 7 jours à compter d'aujourd'hui" },
      { en: "It changes the scheduled activity from a ‘Call’ to an ‘Email’", fr: "Il modifie l'activité planifiée d'un « Appel » à un « E-mail »." },
      { en: "It marks late activities as ‘Done’", fr: "Il marque les activités en retard comme « Terminé »" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Scheduling Activities): It adds 7 days to the current activity deadline",
      fr: "Source Odoo Learn (Activités de planification CRM) : Il ajoute 7 jours à la date limite d'activité actuelle",
    },
  }),
  complexQ({
    id: "crm-066",
    module: "crm",
    text: {
      en: "How can I schedule an activity if I’m not sure when the other attendees are available? (Odoo Learn — CRM Scheduling Activities)",
      fr: "Comment puis-je planifier une activité si je ne suis pas sûr de la disponibilité des autres participants ? (Odoo Learn — Activités de planification CRM)",
    },
    correct: {
      en: "In the activity, schedule a ‘Call’ or ‘Meeting’, open the ‘Calendar’ app, and use the ‘Share Availabilities’ button",
      fr: "Dans l'activité, planifiez un « Appel » ou une « Réunion », ouvrez l'application « Calendrier » et utilisez le bouton « Partager les disponibilités ».",
    },
    distractors: [
      { en: "In the activity, schedule a ‘Call’ or ‘Meeting,’ open the ‘Calendar’ app, and use the ‘Self-schedule’ button", fr: "Dans l'activité, planifiez un « Appel » ou une « Réunion », ouvrez l'application « Calendrier » et utilisez le bouton « Auto-planification »" },
      { en: "I cannot schedule an activity, unless I’m sure of all attendees’ availability", fr: "Je ne peux pas planifier une activité, sauf si je suis sûr de la disponibilité de tous les participants" },
      { en: "Activities are for individual users only, adding attendees is not possible in Odoo", fr: "Les activités sont réservées aux utilisateurs individuels, l'ajout de participants n'est pas possible dans Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Scheduling Activities): In the activity, schedule a ‘Call’ or ‘Meeting’, open the ‘Calendar’ app, and use the ‘Share Availabilities’ button",
      fr: "Source Odoo Learn (Activités de planification CRM) : Dans l'activité, planifiez un « Appel » ou une « Réunion », ouvrez l'application « Calendrier » et utilisez le bouton « Partager les disponibilités ».",
    },
  }),
  complexQ({
    id: "crm-067",
    module: "crm",
    text: {
      en: "What’s the difference between the Name of a custom activity and the Default Summary of a custom activity? (Odoo Learn — Custom Activities)",
      fr: "Quelle est la différence entre le nom d'une activité personnalisée et le résumé par défaut d'une activité personnalisée ? (Odoo Learn — Activités personnalisées)",
    },
    correct: {
      en: "The Name of an activity is its name as it appears “behind the scenes.” The Default Summary is how the activity appears in the pipeline and in opportunities.",
      fr: "Le Nom d’une activité est son nom tel qu’il apparaît « en coulisses ». Le résumé par défaut indique la manière dont l'activité apparaît dans le pipeline et dans les opportunités.",
    },
    distractors: [
      { en: "The Name is manually set when creating a custom activity. The Default Summary is automatically generated by Odoo AI.", fr: "Le nom est défini manuellement lors de la création d'une activité personnalisée. Le résumé par défaut est automatiquement généré par Odoo AI." },
      { en: "The Name is meant to be short and has a character limit. The Default Summary is meant to instruct users on what an activity requires", fr: "Le nom est censé être court et comporte une limite de caractères. Le résumé par défaut est destiné à informer les utilisateurs sur ce qu'une activité nécessite" },
      { en: "The Name of an Activity is visible to customers who have portal logins. The Default Summary is only visible to employees.", fr: "Le nom d'une activité est visible pour les clients disposant de connexions au portail. Le résumé par défaut n'est visible que par les employés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom Activities): The Name of an activity is its name as it appears “behind the scenes.” The Default Summary is how the activity appears in the pipeline and in opportunities.",
      fr: "Source Odoo Learn (Activités personnalisées) : Le nom d'une activité est son nom tel qu'il apparaît « dans les coulisses ». Le résumé par défaut indique la manière dont l'activité apparaît dans le pipeline et dans les opportunités.",
    },
  }),
  complexQ({
    id: "crm-069",
    module: "crm",
    text: {
      en: "When a custom activity’s Chaining Type is set to “Suggest Next Activity”... (Odoo Learn — Custom Activities)",
      fr: "Lorsque le type de chaînage d'une activité personnalisée est défini sur « Suggérer l'activité suivante »... (Odoo Learn — Activités personnalisées)",
    },
    correct: {
      en: "It will not suggest an activity if the field is left blank.",
      fr: "Il ne proposera pas d'activité si le champ est laissé vide.",
    },
    distractors: [
      { en: "Odoo AI will be used to suggest the most logical follow-up activity if none is set.", fr: "Odoo AI sera utilisé pour suggérer l'activité de suivi la plus logique si aucune n'est définie." },
      { en: "Users will have to manually dismiss the suggestion or it will be set as a follow-up activity.", fr: "Les utilisateurs devront rejeter manuellement la suggestion, sinon elle sera définie comme une activité de suivi." },
      { en: "Odoo will prompt the user to suggest a follow-up activity and notify their supervisor for approval.", fr: "Odoo invitera l'utilisateur à suggérer une activité de suivi et en informera son superviseur pour approbation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom Activities): It will not suggest an activity if the field is left blank.",
      fr: "Source Odoo Learn (Activités personnalisées) : Il ne suggérera pas d'activité si le champ est laissé vide.",
    },
  }),
  complexQ({
    id: "crm-070",
    module: "crm",
    text: {
      en: "Does changing the information in an Activity Plan change the corresponding information on a given Activity? (Odoo Learn — Activity Plans)",
      fr: "La modification des informations dans un plan d'activité modifie-t-elle les informations correspondantes sur une activité donnée ? (Odoo Learn — Plans d'activités)",
    },
    correct: {
      en: "No. Activity Plans are tracked separately from Activities within Odoo databases.",
      fr: "Non. Les plans d'activité sont suivis séparément des activités dans les bases de données Odoo.",
    },
    distractors: [
      { en: "Yes. Activities and Activity Plans they appear in share a single entry in Odoo databases, so updating one updates the other.", fr: "Oui. Les activités et les plans d'activité dans lesquels ils apparaissent partagent une seule entrée dans les bases de données Odoo, donc la mise à jour de l'une met à jour l'autre." },
      { en: "Usually no. Activity Plans can be set to update Activities, but this must be manually enabled.", fr: "Généralement non. Les plans d'activité peuvent être configurés pour mettre à jour les activités, mais cela doit être activé manuellement." },
      { en: "Usually yes. By default, updating an Activity Plan updates any Activities within it, but this can be disabled.", fr: "Généralement oui. Par défaut, la mise à jour d'un plan d'activité met à jour toutes les activités qu'il contient, mais cela peut être désactivé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Activity Plans): No. Activity Plans are tracked separately from Activities within Odoo databases.",
      fr: "Source Odoo Learn (Plans d'activité) : Non. Les plans d'activité sont suivis séparément des activités dans les bases de données Odoo.",
    },
  }),
  complexQ({
    id: "crm-071",
    module: "crm",
    text: {
      en: "When the Assignment field within an Activity Plan is set to “Ask at launch” and the field is left blank, who will be assigned the Activity? (Odoo Learn — Activity Plans)",
      fr: "Lorsque le champ Affectation d'un plan d'activité est défini sur « Demander au lancement » et que le champ reste vide, à qui sera attribuée l'activité ? (Odoo Learn — Plans d'activités)",
    },
    correct: {
      en: "The user currently assigned to the opportunity that the Activity Plan is being set up for.",
      fr: "Utilisateur actuellement affecté à l'opportunité pour laquelle le plan d'activité est configuré.",
    },
    distractors: [
      { en: "The head administrator of the database.", fr: "L'administrateur en chef de la base de données." },
      { en: "Whichever sales team member has the least activities currently assigned to them.", fr: "Quel que soit le membre de l’équipe commerciale auquel est actuellement assigné le moins d’activités." },
      { en: "Odoo will ask the current user to assign someone to this activity and will not allow them to click away until someone has been assigned.", fr: "Odoo demandera à l'utilisateur actuel d'affecter quelqu'un à cette activité et ne lui permettra pas de cliquer tant que quelqu'un n'aura pas été affecté." },
    ],
    explanation: {
      en: "Source Odoo Learn (Activity Plans): The user currently assigned to the opportunity that the Activity Plan is being set up for.",
      fr: "Source Odoo Learn (Plans d'activité) : L'utilisateur actuellement affecté à l'opportunité pour laquelle le plan d'activité est en cours de configuration.",
    },
  }),
  complexQ({
    id: "crm-072",
    module: "crm",
    text: {
      en: "If an Activity has follow-up activities associated with it, will those be included in an Activity Plan? (Odoo Learn — Activity Plans)",
      fr: "Si une activité est associée à des activités de suivi, celles-ci seront-elles incluses dans un plan d'activité ? (Odoo Learn — Plans d'activités)",
    },
    correct: {
      en: "Yes, if those associated activities are set to be Triggered and not just Suggested when the activity is complete.",
      fr: "Oui, si ces activités associées sont définies comme étant déclenchées et pas seulement suggérées lorsque l'activité est terminée.",
    },
    distractors: [
      { en: "No, only Activities specifically assigned to an Activity Plan will be included in it.", fr: "Non, seules les activités spécifiquement assignées à un plan d'activités y seront incluses." },
      { en: "Yes, regardless of whether those associated Activities are set to be Triggered or Suggested.", fr: "Oui, que ces activités associées soient définies comme étant déclenchées ou suggérées." },
      { en: "By default no, but in the CRM app’s configuration settings, it’s possible to change this behavior.", fr: "Par défaut non, mais dans les paramètres de configuration de l'application CRM, il est possible de modifier ce comportement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Activity Plans): Yes, if those associated activities are set to be Triggered and not just Suggested when the activity is complete.",
      fr: "Source Odoo Learn (Plans d'activité) : Oui, si ces activités associées sont définies pour être déclenchées et pas seulement suggérées lorsque l'activité est terminée.",
    },
  }),
  complexQ({
    id: "crm-073",
    module: "crm",
    text: {
      en: "In addition to the CRM app, what other apps are needed for tracking won and lost opportunities? (Odoo Learn — Won and Lost Opportunities)",
      fr: "En plus de l'application CRM, quelles autres applications sont nécessaires pour suivre les opportunités gagnées et perdues ? (Odoo Learn — Opportunités gagnées et perdues)",
    },
    correct: {
      en: "Only the CRM app is required.",
      fr: "Seule l'application CRM est requise.",
    },
    distractors: [
      { en: "Accounting, since lost opportunities incur a financial cost to your business.", fr: "Comptabilité, puisque les opportunités perdues entraînent un coût financier pour votre entreprise." },
      { en: "Marketing Automation, since tracking won and lost opportunities is an automatic process.", fr: "Marketing Automation, puisque le suivi des opportunités gagnées et perdues est un processus automatique." },
      { en: "Planning, since the data gathered by tracking won and lost opportunities can only be used for planning and forecasting purposes.", fr: "Planification, puisque les données collectées en suivant les opportunités gagnées et perdues ne peuvent être utilisées qu'à des fins de planification et de prévision." },
    ],
    explanation: {
      en: "Source Odoo Learn (Won and Lost Opportunities): Only the CRM app is required.",
      fr: "Source Odoo Learn (Opportunités gagnées et perdues) : seule l'application CRM est requise.",
    },
  }),
  complexQ({
    id: "crm-074",
    module: "crm",
    text: {
      en: "If an opportunity is marked as lost, can it be restored to its prior status? (Odoo Learn — Won and Lost Opportunities)",
      fr: "Si une opportunité est marquée comme perdue, peut-elle être restaurée à son statut antérieur ? (Odoo Learn — Opportunités gagnées et perdues)",
    },
    correct: {
      en: "Yes. Clicking the “Restore” button on a lost opportunity restores its AI-determined win probability and returns it to the stage it was at when originally marked lost.",
      fr: "Oui. Cliquer sur le bouton « Restaurer » sur une opportunité perdue restaure sa probabilité de victoire déterminée par l'IA et la ramène au stade où elle se trouvait lorsqu'elle était initialement marquée comme perdue.",
    },
    distractors: [
      { en: "Yes. It can be returned to the stage it was at when it was originally marked lost, but the chatter and the AI-determined win probability will both be gone.", fr: "Oui. Il peut être ramené au stade où il se trouvait lorsqu'il a été initialement marqué comme perdu, mais le bavardage et la probabilité de victoire déterminée par l'IA disparaîtront tous deux." },
      { en: "Kind of. Clicking the “Restore” button opens a new opportunity that’s been pre-populated with information from the lost opportunity, but it is technically entirely new.", fr: "Type de. Cliquer sur le bouton « Restaurer » ouvre une nouvelle opportunité pré-remplie avec les informations de l'opportunité perdue, mais elle est techniquement entièrement nouvelle." },
      { en: "No. There is no method for restoring lost opportunities. A new opportunity will need to be created and the old details manually entered.", fr: "Non. Il n’existe aucune méthode pour restaurer les opportunités perdues. Une nouvelle opportunité devra être créée et les anciens détails saisis manuellement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Won and Lost Opportunities): Yes. Clicking the “Restore” button on a lost opportunity restores its AI-determined win probability and returns it to the stage it was at when originally marked lost.",
      fr: "Source Odoo Learn (Opportunités gagnées et perdues) : Oui. Cliquer sur le bouton « Restaurer » sur une opportunité perdue restaure sa probabilité de victoire déterminée par l'IA et la ramène au stade où elle se trouvait lorsqu'elle était initialement marquée comme perdue.",
    },
  }),
  complexQ({
    id: "crm-075",
    module: "crm",
    text: {
      en: "Why is tracking won and lost opportunities in Odoo helpful for your business? (Odoo Learn — Won and Lost Opportunities)",
      fr: "Pourquoi le suivi des opportunités gagnées et perdues dans Odoo est-il utile pour votre entreprise ? (Odoo Learn — Opportunités gagnées et perdues)",
    },
    correct: {
      en: "Odoo’s AI uses data from won and lost opportunities to predict which future opportunities may succeed or fail and why.",
      fr: "L’IA d’Odoo utilise les données des opportunités gagnées et perdues pour prédire quelles opportunités futures pourraient réussir ou échouer et pourquoi.",
    },
    distractors: [
      { en: "The Accounting app can see expected revenue from won and lost opportunities and make more accurate economic forecasts when they’re properly configured.", fr: "L'application de comptabilité peut connaître les revenus attendus des opportunités gagnées et perdues et établir des prévisions économiques plus précises lorsqu'elles sont correctement configurées." },
      { en: "The Sales app can see which contacts have more won and lost opportunities associated with them, and prioritizes and deprioritizes them accordingly for your Sales Teams.", fr: "L'application Ventes peut voir quels contacts ont le plus d'opportunités gagnées et perdues qui leur sont associées, et les priorise et les dépriorise en conséquence pour vos équipes commerciales." },
      { en: "The Email Marketing app can see which contacts have more won and lost opportunities associated with them, and automatically sends email blasts reminding potential customers to follow through on purchases.", fr: "L'application Email Marketing peut voir quels contacts ont le plus d'opportunités gagnées et perdues qui leur sont associées, et envoie automatiquement des e-mails rappelant aux clients potentiels de poursuivre leurs achats." },
    ],
    explanation: {
      en: "Source Odoo Learn (Won and Lost Opportunities): Odoo’s AI uses data from won and lost opportunities to predict which future opportunities may succeed or fail and why.",
      fr: "Source Odoo Learn (opportunités gagnées et perdues) : l'IA d'Odoo utilise les données des opportunités gagnées et perdues pour prédire quelles opportunités futures pourraient réussir ou échouer et pourquoi.",
    },
  }),
  complexQ({
    id: "crm-076",
    module: "crm",
    text: {
      en: "What setting needs to be enabled to assign leads automatically to salespeople? (Odoo Learn — Sales Teams Setup & Leads Assignment)",
      fr: "Quel paramètre doit être activé pour attribuer automatiquement des leads aux commerciaux ? (Odoo Learn — Configuration des équipes de vente et attribution des leads)",
    },
    correct: {
      en: "Rule-Based Assignment",
      fr: "Affectation basée sur des règles",
    },
    distractors: [
      { en: "Automatic Assignment", fr: "Attribution automatique" },
      { en: "Assignment Rules", fr: "Règles d'affectation" },
      { en: "Domain Rules", fr: "Règles de domaine" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Teams Setup & Leads Assignment): Rule-Based Assignment",
      fr: "Source Odoo Learn (configuration des équipes commerciales et attribution des leads) : affectation basée sur des règles",
    },
  }),
  complexQ({
    id: "crm-077",
    module: "crm",
    text: {
      en: "How can I set up a single email address for a sales team? (Odoo Learn — Sales Teams Setup & Leads Assignment)",
      fr: "Comment puis-je configurer une adresse e-mail unique pour une équipe commerciale ? (Odoo Learn — Configuration des équipes de vente et attribution des leads)",
    },
    correct: {
      en: "The ‘Email Alias’ field",
      fr: "Le champ « Alias ​​de messagerie »",
    },
    distractors: [
      { en: "The ‘Team Email’ field", fr: "Le champ « E-mail de l'équipe »" },
      { en: "The ‘Multi Alias’ field", fr: "Le champ « Multi Alias ​​»" },
      { en: "The ‘Single Domain’ field", fr: "Le champ « Domaine unique »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Teams Setup & Leads Assignment): The ‘Email Alias’ field",
      fr: "Source Odoo Learn (Configuration des équipes commerciales et attribution des leads) : Le champ « Alias ​​de messagerie »",
    },
  }),
  complexQ({
    id: "crm-078",
    module: "crm",
    text: {
      en: "Where can I edit the domain for my sales team’s automatic lead assignment? (Odoo Learn — Sales Teams Setup & Leads Assignment)",
      fr: "Où puis-je modifier le domaine pour l'attribution automatique de leads à mon équipe commerciale ? (Odoo Learn — Configuration des équipes de vente et attribution des leads)",
    },
    correct: {
      en: "Assignment Rules",
      fr: "Règles d'affectation",
    },
    distractors: [
      { en: "Lead Assignment", fr: "Affectation de responsable" },
      { en: "Automation", fr: "Automation" },
      { en: "Team Details", fr: "Détails de l'équipe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Teams Setup & Leads Assignment): Assignment Rules",
      fr: "Source Odoo Learn (Configuration des équipes commerciales et attribution des leads) : Règles d'affectation",
    },
  }),
  complexQ({
    id: "crm-079",
    module: "crm",
    text: {
      en: "Where can you view a detailed list of all completed activities in Odoo? (Odoo Learn — CRM Activities Automations and Reporting)",
      fr: "Où pouvez-vous consulter une liste détaillée de toutes les activités terminées dans Odoo ? (Odoo Learn — Automatisations et reporting des activités CRM)",
    },
    correct: {
      en: "List View",
      fr: "Vue en liste",
    },
    distractors: [
      { en: "Kanban View", fr: "Vue Kanban" },
      { en: "Homepage", fr: "Page d'accueil" },
      { en: "Sales Report", fr: "Rapport de ventes" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Activities Automations and Reporting): List View",
      fr: "Source Odoo Learn (automatisations et rapports des activités CRM) : vue en liste",
    },
  }),
  complexQ({
    id: "crm-080",
    module: "crm",
    text: {
      en: "What feature allows sales managers to track activity performance by salesperson? (Odoo Learn — CRM Activities Automations and Reporting)",
      fr: "Quelle fonctionnalité permet aux responsables commerciaux de suivre les performances des activités par vendeur ? (Odoo Learn — Automatisations et reporting des activités CRM)",
    },
    correct: {
      en: "Reporting with 'Group By' > Salesperson",
      fr: "Création de rapports avec « Grouper par » > Vendeur",
    },
    distractors: [
      { en: "Kanban filters", fr: "Filtres Kanban" },
      { en: "Chatter feed", fr: "Fil de discussion" },
      { en: "Activity Type settings", fr: "Paramètres du type d'activité" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Activities Automations and Reporting): Reporting with 'Group By' > Salesperson",
      fr: "Source Odoo Learn (Automatisations et reporting des activités CRM) : Reporting avec 'Group By' > Vendeur",
    },
  }),
  complexQ({
    id: "crm-081",
    module: "crm",
    text: {
      en: "What does assigning an email template to a triggered activity help with? (Odoo Learn — CRM Activities Automations and Reporting)",
      fr: "À quoi sert l’attribution d’un modèle d’e-mail à une activité déclenchée ? (Odoo Learn — Automatisations et reporting des activités CRM)",
    },
    correct: {
      en: "Automatically populating the message content",
      fr: "Remplir automatiquement le contenu du message",
    },
    distractors: [
      { en: "Preventing duplicates", fr: "Prévenir les doublons" },
      { en: "Verifying customer identity", fr: "Vérification de l'identité du client" },
      { en: "Uploading files", fr: "Téléchargement de fichiers" },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Activities Automations and Reporting): Automatically populating the message content",
      fr: "Source Odoo Learn (Automatisations et reporting des activités CRM) : Remplir automatiquement le contenu du message",
    },
  }),
  complexQ({
    id: "crm-082",
    module: "crm",
    text: {
      en: "Which of these categories can be found on the Kanban cards on the ‘Teams’ page? (Odoo Learn — Sales Team Reporting)",
      fr: "Laquelle de ces catégories se trouve sur les cartes Kanban de la page « Équipes » ? (Odoo Learn — Rapports de l'équipe de vente)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Open opportunities", fr: "Opportunités ouvertes" },
      { en: "Overdue opportunities", fr: "Opportunités en retard" },
      { en: "Quotations", fr: "Citations" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Team Reporting): All of the above",
      fr: "Source Odoo Learn (Reporting de l'équipe commerciale) : tout ce qui précède",
    },
  }),
  complexQ({
    id: "crm-083",
    module: "crm",
    text: {
      en: "What type of chart is NOT in the graph view? (Odoo Learn — Sales Team Reporting)",
      fr: "Quel type de graphique n'est PAS dans la vue graphique ? (Odoo Learn — Rapports de l'équipe de vente)",
    },
    correct: {
      en: "Area chart",
      fr: "Graphique en aires",
    },
    distractors: [
      { en: "Line chart", fr: "Graphique linéaire" },
      { en: "Bar chart", fr: "Graphique à barres" },
      { en: "Pie chart", fr: "Diagramme circulaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Team Reporting): Area chart",
      fr: "Source Odoo Learn (Reporting de l'équipe commerciale) : Graphique en aires",
    },
  }),
  complexQ({
    id: "crm-084",
    module: "crm",
    text: {
      en: "How can new categories be added to the pivot table? (Odoo Learn — Sales Team Reporting)",
      fr: "Comment ajouter de nouvelles catégories au tableau croisé dynamique ? (Odoo Learn — Rapports de l'équipe de vente)",
    },
    correct: {
      en: "Both A and C",
      fr: "A et C",
    },
    distractors: [
      { en: "By clicking on a ‘plus sign’ in the pivot table", fr: "En cliquant sur un « signe plus » dans le tableau croisé dynamique" },
      { en: "In the pivot table settings", fr: "Dans les paramètres du tableau croisé dynamique" },
      { en: "Using search bar filters", fr: "Utiliser les filtres de la barre de recherche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Team Reporting): Both A and C",
      fr: "Source Odoo Learn (Rapports de l'équipe commerciale) : A et C",
    },
  }),
  complexQ({
    id: "crm-085",
    module: "crm",
    text: {
      en: "How do I add the Odoo Inbox Addin plugin to my Gmail inbox? (Odoo Learn — Gmail Mailbox Plugin)",
      fr: "Comment ajouter le plugin Odoo Inbox Addin à ma boîte de réception Gmail ? (Odoo Learn — Plugin de boîte aux lettres Gmail)",
    },
    correct: {
      en: "Click the ‘plus’ sign in the right sidebar > search for “Odoo” > click the ‘Odoo Inbox Addin’ square > Click ‘Install’",
      fr: "Cliquez sur le signe « plus » dans la barre latérale droite > recherchez « Odoo » > cliquez sur le carré « Odoo Inbox Addin » > Cliquez sur « Installer ».",
    },
    distractors: [
      { en: "Click the ‘O’ sign in the right sidebar > Search for “add in” > Click ‘Install’", fr: "Cliquez sur le signe « O » dans la barre latérale droite > Recherchez « complément » > Cliquez sur « Installer »" },
      { en: "Click the ‘plug’ icon in the left sidebar > Search for “Odoo” > Log into database > Click ‘Install’", fr: "Cliquez sur l'icône « plug » dans la barre latérale gauche > Recherchez « Odoo » > Connectez-vous à la base de données > Cliquez sur « Installer »" },
      { en: "Click ‘Add-ins’ from the left sidebar > Search for “plug” > Click ‘Odoo’ > click ‘Install’", fr: "Cliquez sur « Compléments » dans la barre latérale gauche > Recherchez « plug » > Cliquez sur « Odoo » > cliquez sur « Installer »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gmail Mailbox Plugin): Click the ‘plus’ sign in the right sidebar > search for “Odoo” > click the ‘Odoo Inbox Addin’ square > Click ‘Install’",
      fr: "Source Odoo Learn (plugin de boîte aux lettres Gmail) : cliquez sur le signe « plus » dans la barre latérale droite > recherchez « Odoo » > cliquez sur le carré « Odoo Inbox Addin » > cliquez sur « Installer »",
    },
  }),
  complexQ({
    id: "crm-086",
    module: "crm",
    text: {
      en: "With the Odoo Gmail Plugin installed, what do I click from the right sidebar to create an opportunity? (Odoo Learn — Gmail Mailbox Plugin)",
      fr: "Une fois le plugin Odoo Gmail installé, sur quoi dois-je cliquer dans la barre latérale droite pour créer une opportunité ? (Odoo Learn — Plugin de boîte aux lettres Gmail)",
    },
    correct: {
      en: "Click ‘Create’ (under the ‘Opportunities’ section)",
      fr: "Cliquez sur « Créer » (sous la section « Opportunités »)",
    },
    distractors: [
      { en: "Click ‘Create’ (under the ‘Leads’ section)", fr: "Cliquez sur « Créer » (sous la section « Prospects »)" },
      { en: "Click ‘Create’ (under the ‘Tasks’ section)", fr: "Cliquez sur « Créer » (sous la section « Tâches »)" },
      { en: "Click ‘Create’ (under the ‘Projects’ section)", fr: "Cliquez sur « Créer » (sous la section « Projets »)" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gmail Mailbox Plugin): Click ‘Create’ (under the ‘Opportunities’ section)",
      fr: "Source Odoo Learn (Plugin de boîte aux lettres Gmail) : Cliquez sur « Créer » (sous la section « Opportunités »)",
    },
  }),
  complexQ({
    id: "crm-087",
    module: "crm",
    text: {
      en: "After creating a Task *and* project at the same time from the Odoo Gmail Plugin, in what stage would I find that created task in the database? (Odoo Learn — Gmail Mailbox Plugin)",
      fr: "Après avoir créé une tâche *et* un projet en même temps à partir du plugin Odoo Gmail, à quelle étape devrais-je retrouver cette tâche créée dans la base de données ? (Odoo Learn — Plugin de boîte aux lettres Gmail)",
    },
    correct: {
      en: "‘None’",
      fr: "'Aucun'",
    },
    distractors: [
      { en: "‘New’", fr: "'Nouveau'" },
      { en: "‘Plug-in’", fr: "« Plug-in »" },
      { en: "‘Gmail’", fr: "« Gmail »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gmail Mailbox Plugin): ‘None’",
      fr: "Source Odoo Learn (plugin de boîte aux lettres Gmail) : « Aucun »",
    },
  }),
  complexQ({
    id: "crm-088",
    module: "crm",
    text: {
      en: "What feature MUST be activated in the General Settings in order for mailbox plugins to work with Odoo? (Odoo Learn — Outlook Mailbox Plugin)",
      fr: "Quelle fonctionnalité DOIT être activée dans les paramètres généraux pour que les plugins de boîte aux lettres fonctionnent avec Odoo ? (Odoo Learn — Plugin de boîte aux lettres Outlook)",
    },
    correct: {
      en: "Mail Plugins",
      fr: "Plugins de messagerie",
    },
    distractors: [
      { en: "Mailbox Plugins", fr: "Plugins de boîte aux lettres" },
      { en: "Inbox Plugins", fr: "Plugins de boîte de réception" },
      { en: "Message Plugins", fr: "Plugins de messages" },
    ],
    explanation: {
      en: "Source Odoo Learn (Outlook Mailbox Plugin): Mail Plugins",
      fr: "Source Odoo Learn (Plugin de boîte aux lettres Outlook) : Plugins de messagerie",
    },
  }),
  complexQ({
    id: "crm-089",
    module: "crm",
    text: {
      en: "Where can I find detailed instructions on how to properly install plugins for Gmail and Outlook? (Odoo Learn — Outlook Mailbox Plugin)",
      fr: "Où puis-je trouver des instructions détaillées sur la façon d'installer correctement les plugins pour Gmail et Outlook ? (Odoo Learn — Plugin de boîte aux lettres Outlook)",
    },
    correct: {
      en: "From the Odoo Documentation",
      fr: "Extrait de la documentation Odoo",
    },
    distractors: [
      { en: "From the General Settings application", fr: "Depuis l'application Paramètres généraux" },
      { en: "From the Email Marketing application", fr: "Depuis l'application Email Marketing" },
      { en: "From the CRM Dashboard", fr: "Depuis le tableau de bord CRM" },
    ],
    explanation: {
      en: "Source Odoo Learn (Outlook Mailbox Plugin): From the Odoo Documentation",
      fr: "Source Odoo Learn (plugin Outlook Mailbox) : extrait de la documentation Odoo",
    },
  }),
  complexQ({
    id: "crm-090",
    module: "crm",
    text: {
      en: "While using the Outlook plugin, what happens when the mail icon is clicked beside a contact? (Odoo Learn — Outlook Mailbox Plugin)",
      fr: "Lors de l'utilisation du plugin Outlook, que se passe-t-il lorsque l'on clique sur l'icône de messagerie à côté d'un contact ? (Odoo Learn — Plugin de boîte aux lettres Outlook)",
    },
    correct: {
      en: "It logs that specific email into that contact’s form in Odoo",
      fr: "Il enregistre cet e-mail spécifique dans le formulaire de ce contact dans Odoo",
    },
    distractors: [
      { en: "It sends the contact a follow-up message about their request", fr: "Il envoie au contact un message de suivi concernant sa demande" },
      { en: "It sends the salesperson an SMS message about the contact", fr: "Il envoie au vendeur un message SMS concernant le contact" },
      { en: "Nothing happens", fr: "Rien ne se passe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Outlook Mailbox Plugin): It logs that specific email into that contact’s form in Odoo",
      fr: "Source Odoo Learn (plugin Outlook Mailbox) : il enregistre cet e-mail spécifique dans le formulaire de ce contact dans Odoo",
    },
  }),
  complexQ({
    id: "crm-091",
    module: "crm",
    text: {
      en: "What ‘Group By’ option do I select to group by search engine? (Odoo Learn — Marketing Attribution Report)",
      fr: "Quelle option « Regrouper par » dois-je sélectionner pour regrouper par moteur de recherche ? (Odoo Learn — Rapport d'attribution marketing)",
    },
    correct: {
      en: "Source",
      fr: "Source",
    },
    distractors: [
      { en: "Campaign", fr: "Campagne" },
      { en: "Medium", fr: "Moyen" },
      { en: "Stage", fr: "Scène" },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Attribution Report): Source",
      fr: "Source Odoo Learn (Rapport d'attribution marketing) : Source",
    },
  }),
  complexQ({
    id: "crm-092",
    module: "crm",
    text: {
      en: "How do I select online active leads for my report? (Odoo Learn — Marketing Attribution Report)",
      fr: "Comment sélectionner les prospects actifs en ligne pour mon rapport ? (Odoo Learn — Rapport d'attribution marketing)",
    },
    correct: {
      en: "Filters > Add Custom Filter > Active is set",
      fr: "Filtres > Ajouter un filtre personnalisé > Actif est défini",
    },
    distractors: [
      { en: "Group By > Add Custom Group > Active is set", fr: "Regrouper par > Ajouter un groupe personnalisé > Actif est défini" },
      { en: "Filters > Active", fr: "Filtres > Actif" },
      { en: "Group By > Active Leads", fr: "Regrouper par > Pistes actives" },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Attribution Report): Filters > Add Custom Filter > Active is set",
      fr: "Source Odoo Learn (Rapport d'attribution marketing) : Filtres > Ajouter un filtre personnalisé > Actif est défini",
    },
  }),
  complexQ({
    id: "crm-093",
    module: "crm",
    text: {
      en: "What view should I enter to view a table of my report? (Odoo Learn — Marketing Attribution Report)",
      fr: "Dans quelle vue dois-je accéder pour afficher un tableau de mon rapport ? (Odoo Learn — Rapport d'attribution marketing)",
    },
    correct: {
      en: "Pivot",
      fr: "Pivoter",
    },
    distractors: [
      { en: "List", fr: "Liste" },
      { en: "Kanban", fr: "Kanban" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Attribution Report): Pivot",
      fr: "Source Odoo Learn (Rapport d'attribution marketing) : Pivot",
    },
  }),
  complexQ({
    id: "crm-094",
    module: "crm",
    text: {
      en: "How do I move an opportunity to a different stage in the CRM app? (Odoo Learn — Scheduled Activities & Moving Opportunities)",
      fr: "Comment déplacer une opportunité vers une autre étape dans l'application CRM ? (Odoo Learn — Activités programmées et opportunités de déménagement)",
    },
    correct: {
      en: "On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage",
      fr: "Sur le tableau de bord, faites glisser et déposez l'opportunité dans la nouvelle étape. Ou, si l'occasion se présente, sélectionnez la nouvelle étape",
    },
    distractors: [
      { en: "Click into the opportunity card, open the ‘Stages’ tab, and select the new opportunity stage", fr: "Cliquez sur la carte d'opportunité, ouvrez l'onglet « Étapes » et sélectionnez la nouvelle étape d'opportunité." },
      { en: "On the dashboard, double-click the opportunity, and select the new stage in the drop-down menu. Or, in the opportunity, click into the ‘Stages’ tab, and drag and drop into the new stage", fr: "Sur le tableau de bord, double-cliquez sur l'opportunité et sélectionnez la nouvelle étape dans le menu déroulant. Ou, si l'occasion se présente, cliquez sur l'onglet « Étapes » et faites un glisser-déposer vers la nouvelle étape." },
      { en: "The customer needs to email requesting their opportunity to be moved to a new stage.", fr: "Le client doit envoyer un e-mail pour demander sa possibilité de passer à une nouvelle étape." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled Activities & Moving Opportunities): On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage",
      fr: "Source Odoo Learn (Activités planifiées et opportunités de déplacement) : Sur le tableau de bord, faites glisser et déposez l'opportunité dans la nouvelle étape. Ou, si l'occasion se présente, sélectionnez la nouvelle étape",
    },
  }),
  complexQ({
    id: "crm-095",
    module: "crm",
    text: {
      en: "Where can I check the history of an opportunity? (Odoo Learn — Scheduled Activities & Moving Opportunities)",
      fr: "Où puis-je consulter l’historique d’une opportunité ? (Odoo Learn — Activités programmées et opportunités de déménagement)",
    },
    correct: {
      en: "In the chatter section on the opportunity page",
      fr: "Dans la section de discussion de la page d'opportunité",
    },
    distractors: [
      { en: "In the ‘Opportunity History’ page on the CRM app", fr: "Dans la page « Historique des opportunités » de l'application CRM" },
      { en: "In the ‘Activities’ page, under the ‘Reporting’ menu", fr: "Dans la page « Activités », sous le menu « Reporting »" },
      { en: "In the ‘History’ tab on the opportunity page", fr: "Dans l'onglet « Historique » de la page de l'opportunité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled Activities & Moving Opportunities): In the chatter section on the opportunity page",
      fr: "Source Odoo Learn (Activités programmées et opportunités de déménagement) : Dans la section de discussion de la page d'opportunité",
    },
  }),
  complexQ({
    id: "crm-096",
    module: "crm",
    text: {
      en: "What’s the fastest way to check the next meeting for an opportunity in the CRM app? (Odoo Learn — Scheduled Activities & Moving Opportunities)",
      fr: "Quel est le moyen le plus rapide de rechercher une opportunité lors de la prochaine réunion dans l'application CRM ? (Odoo Learn — Activités programmées et opportunités de déménagement)",
    },
    correct: {
      en: "Check the meeting date on the smart button in the opportunity page",
      fr: "Vérifiez la date de la réunion sur le bouton intelligent de la page d'opportunité",
    },
    distractors: [
      { en: "Scroll through the chatter in the opportunity page, and identify the most recent meeting date", fr: "Faites défiler les discussions dans la page d'opportunité et identifiez la date de réunion la plus récente" },
      { en: "Message the opportunity owner in the chatter, and ask them", fr: "Envoyez un message au propriétaire de l'opportunité dans le chat et demandez-lui" },
      { en: "There is no way to check meetings in the CRM app, I’d need to check the Calendar app", fr: "Il n'y a aucun moyen de vérifier les réunions dans l'application CRM, je devrais vérifier l'application Calendrier" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled Activities & Moving Opportunities): Check the meeting date on the smart button in the opportunity page",
      fr: "Source Odoo Learn (Activités programmées et opportunités de déménagement) : Vérifiez la date de la réunion sur le bouton intelligent dans la page de l'opportunité",
    },
  }),
  complexQ({
    id: "crm-097",
    module: "crm",
    text: {
      en: "How many credits does each use of partner autocomplete consume when enriching a contact? (Odoo Learn — Partner Autocomplete)",
      fr: "Combien de crédits chaque utilisation de la saisie semi-automatique du partenaire consomme-t-elle lors de l'enrichissement d'un contact ? (Odoo Learn — Remplissage automatique du partenaire)",
    },
    correct: {
      en: "One partner autocomplete credit per enrichment.",
      fr: "Un crédit de saisie semi-automatique partenaire par enrichissement.",
    },
    distractors: [
      { en: "Up to five partner autocomplete credits, depending on the level of enrichment requested by the user.", fr: "Jusqu'à cinq crédits de saisie semi-automatique partenaires, selon le niveau d'enrichissement demandé par l'utilisateur." },
      { en: "One lead enrichment credit per enrichment.", fr: "Un crédit d’enrichissement de leads par enrichissement." },
      { en: "One partner auto-complete credit for a contact with some information, two credits for a completely new contact.", fr: "Un crédit de saisie semi-automatique pour un partenaire avec certaines informations, deux crédits pour un tout nouveau contact." },
    ],
    explanation: {
      en: "Source Odoo Learn (Partner Autocomplete): One partner autocomplete credit per enrichment.",
      fr: "Source Odoo Learn (Partner Autocomplete) : Un crédit de saisie semi-automatique partenaire par enrichissement.",
    },
  }),
  complexQ({
    id: "crm-098",
    module: "crm",
    text: {
      en: "Which of the following details can NOT be retrieved by partner autocomplete? (Odoo Learn — Partner Autocomplete)",
      fr: "Parmi les informations suivantes, lesquelles ne peuvent PAS être récupérées par la saisie semi-automatique du partenaire ? (Odoo Learn — Remplissage automatique du partenaire)",
    },
    correct: {
      en: "Email addresses for employees of the enriched company.",
      fr: "Adresses e-mail des salariés de l'entreprise enrichie.",
    },
    distractors: [
      { en: "The tax ID for the enriched company.", fr: "Le numéro fiscal de l’entreprise enrichie." },
      { en: "The mailing address for the enriched company.", fr: "L'adresse postale de l'entreprise enrichie." },
      { en: "The contact phone number for the enriched company.", fr: "Le numéro de téléphone de contact de l’entreprise enrichie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Partner Autocomplete): Email addresses for employees of the enriched company.",
      fr: "Source Odoo Learn (Partner Autocomplete) : Adresses email des salariés de l'entreprise enrichie.",
    },
  }),
  complexQ({
    id: "crm-099",
    module: "crm",
    text: {
      en: "Select the true statement. (Odoo Learn — Partner Autocomplete)",
      fr: "Sélectionnez la vraie déclaration. (Odoo Learn — Remplissage automatique du partenaire)",
    },
    correct: {
      en: "Partner autocomplete only works for new company contacts.",
      fr: "La saisie semi-automatique des partenaires ne fonctionne que pour les nouveaux contacts de l'entreprise.",
    },
    distractors: [
      { en: "Partner autocomplete can enrich contact information for existing contacts.", fr: "La saisie semi-automatique des partenaires peut enrichir les informations de contact des contacts existants." },
      { en: "Partner autocomplete can retrieve the tax information of individual people in your Contacts app.", fr: "La saisie semi-automatique des partenaires peut récupérer les informations fiscales de personnes individuelles dans votre application Contacts." },
      { en: "Partner autocomplete is a free service.", fr: "La saisie semi-automatique des partenaires est un service gratuit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Partner Autocomplete): Partner autocomplete only works for new company contacts.",
      fr: "Source Odoo Learn (complétion automatique du partenaire) : la saisie semi-automatique du partenaire ne fonctionne que pour les nouveaux contacts de l'entreprise.",
    },
  }),
  complexQ({
    id: "crm-100",
    module: "crm",
    text: {
      en: "Why can’t a lead’s probability be manually adjusted to 100%? (Odoo Learn — CRM Lead & Opportunity Basics)",
      fr: "Pourquoi la probabilité d’un prospect ne peut-elle pas être ajustée manuellement à 100 % ? (Odoo Learn — Notions de base sur les leads et les opportunités CRM)",
    },
    correct: {
      en: "A lead with 100% probability is considered “won” and is automatically closed.",
      fr: "Un prospect avec une probabilité de 100 % est considéré comme « gagné » et est automatiquement clôturé.",
    },
    distractors: [
      { en: "Odoo only offers a choice of preconfigured probabilities: 10%, 50%, and 80%.", fr: "Odoo propose uniquement un choix de probabilités préconfigurées : 10 %, 50 % et 80 %." },
      { en: "Lead probabilities can only be manually adjusted up to 75%. Beyond that, more information must be added to the lead for the AI to calculate the probability.", fr: "Les probabilités de leads ne peuvent être ajustées manuellement que jusqu'à 75 %. Au-delà de cela, davantage d’informations doivent être ajoutées au prospect pour que l’IA puisse calculer la probabilité." },
      { en: "By default, Odoo requires manager approval to set a lead’s probability above 50%.", fr: "Par défaut, Odoo nécessite l'approbation du responsable pour définir la probabilité d'un prospect au-dessus de 50 %." },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Lead & Opportunity Basics): A lead with 100% probability is considered “won” and is automatically closed.",
      fr: "Source Odoo Learn (CRM Lead & Opportunity Basics) : Un prospect avec une probabilité de 100 % est considéré comme « gagné » et est automatiquement clôturé.",
    },
  }),
  complexQ({
    id: "crm-101",
    module: "crm",
    text: {
      en: "How does Odoo AI determine a lead’s probability percentage? (Odoo Learn — CRM Lead & Opportunity Basics)",
      fr: "Comment Odoo AI détermine-t-il le pourcentage de probabilité d’un prospect ? (Odoo Learn — Notions de base sur les leads et les opportunités CRM)",
    },
    correct: {
      en: "Odoo AI uses your company’s record of won and lost opportunities to identify data that can help predict a lead’s likelihood of converting into a sale.",
      fr: "Odoo AI utilise l’historique des opportunités gagnées et perdues de votre entreprise pour identifier les données qui peuvent aider à prédire la probabilité qu’un prospect se transforme en vente.",
    },
    distractors: [
      { en: "We don’t know. The AI is a black box and it’s unclear how it calculates the percentage, but it’s pretty good at it.", fr: "Nous ne savons pas. L’IA est une boîte noire et on ne sait pas comment elle calcule le pourcentage, mais elle y parvient plutôt bien." },
      { en: "Odoo AI uses publicly available CRM datasets and a proprietary algorithm for its calculations.", fr: "Odoo AI utilise des ensembles de données CRM accessibles au public et un algorithme propriétaire pour ses calculs." },
      { en: "Odoo AI analyzes data across all businesses that use Odoo to predict a “typical” win/loss percentage for leads.", fr: "Odoo AI analyse les données de toutes les entreprises qui utilisent Odoo pour prédire un pourcentage de victoire/perte « typique » pour les prospects." },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Lead & Opportunity Basics): Odoo AI uses your company’s record of won and lost opportunities to identify data that can help predict a lead’s likelihood of converting into a sale.",
      fr: "Source Odoo Learn (CRM Lead & Opportunity Basics) : Odoo AI utilise l'enregistrement des opportunités gagnées et perdues de votre entreprise pour identifier les données qui peuvent aider à prédire la probabilité qu'un prospect se transforme en vente.",
    },
  }),
  complexQ({
    id: "crm-102",
    module: "crm",
    text: {
      en: "What does the date in the Expected Closing field represent? (Odoo Learn — CRM Lead & Opportunity Basics)",
      fr: "Que représente la date indiquée dans le champ Clôture prévue ? (Odoo Learn — Notions de base sur les leads et les opportunités CRM)",
    },
    correct: {
      en: "A manually entered date for when you expect the opportunity to be won.",
      fr: "Une date saisie manuellement à laquelle vous pensez que l'opportunité sera gagnée.",
    },
    distractors: [
      { en: "A manually entered date beyond which the opportunity will be considered lost.", fr: "Une date saisie manuellement au-delà de laquelle l'opportunité sera considérée comme perdue." },
      { en: "An automatically determined date generated by the Accounting app for when you can expect the opportunity’s revenue to hit your business’s account.", fr: "Une date automatiquement déterminée et générée par l'application Comptabilité à laquelle vous pouvez vous attendre à ce que les revenus de l'opportunité arrivent sur le compte de votre entreprise." },
      { en: "An automatically determined date calculated by Odoo AI for when the opportunity will likely be won.", fr: "Une date déterminée automatiquement et calculée par Odoo AI pour la date à laquelle l'opportunité sera probablement gagnée." },
    ],
    explanation: {
      en: "Source Odoo Learn (CRM Lead & Opportunity Basics): A manually entered date for when you expect the opportunity to be won.",
      fr: "Source Odoo Learn (CRM Lead & Opportunity Basics) : une date saisie manuellement pour laquelle vous vous attendez à ce que l'opportunité soit gagnée.",
    },
  }),
  complexQ({
    id: "crm-103",
    module: "crm",
    text: {
      en: "Other than CRM, what app is required for making a web form that will create leads? (Odoo Learn — Lead Generation - Forms & Email Aliases)",
      fr: "Outre le CRM, quelle application est nécessaire pour créer un formulaire Web permettant de créer des prospects ? (Odoo Learn — Génération de leads – Formulaires et alias de courrier électronique)",
    },
    correct: {
      en: "Website, because a custom website is necessary to host and build out lead forms.",
      fr: "Site Web, car un site Web personnalisé est nécessaire pour héberger et créer des formulaires pour prospects.",
    },
    distractors: [
      { en: "Sales, since leads go to Sales Teams and Salespersons, and those can’t be defined without the Sales app.", fr: "Ventes, puisque les leads sont dirigés vers les équipes commerciales et les vendeurs, et ceux-ci ne peuvent pas être définis sans l'application Ventes." },
      { en: "eCommerce, since building a website for your company is part of an eCommerce strategy.", fr: "eCommerce, puisque la création d’un site Web pour votre entreprise fait partie d’une stratégie de commerce électronique." },
      { en: "Email Marketing, since leads from web forms are delivered to your team via email.", fr: "Marketing par e-mail, puisque les leads issus des formulaires Web sont transmis à votre équipe par e-mail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Forms & Email Aliases): Website, because a custom website is necessary to host and build out lead forms.",
      fr: "Source Odoo Learn (Lead Generation - Forms & Email Aliases) : Site Web, car un site Web personnalisé est nécessaire pour héberger et créer des formulaires pour prospects.",
    },
  }),
  complexQ({
    id: "crm-104",
    module: "crm",
    text: {
      en: "Is it possible to customize both the Sales Team and the Salesperson that a web form will deliver leads/opportunities to? (Odoo Learn — Lead Generation - Forms & Email Aliases)",
      fr: "Est-il possible de personnaliser à la fois l'équipe commerciale et le vendeur auquel un formulaire Web fournira des prospects/opportunités ? (Odoo Learn — Génération de leads – Formulaires et alias de courrier électronique)",
    },
    correct: {
      en: "Yes, both of these fields can be set, even if the Chosen Salesperson isn’t on the chosen Sales Team.",
      fr: "Oui, ces deux champs peuvent être définis, même si le vendeur choisi ne fait pas partie de l'équipe commerciale choisie.",
    },
    distractors: [
      { en: "Yes, both of these fields can be set, so long as the chosen Salesperson is a member of the chosen Sales Team.", fr: "Oui, ces deux champs peuvent être définis, à condition que le vendeur choisi soit membre de l'équipe commerciale choisie." },
      { en: "Yes, and the chosen Salesperson will automatically be assigned to the chosen Sales Team if they aren’t already a member.", fr: "Oui, et le vendeur choisi sera automatiquement affecté à l'équipe commerciale choisie s'il n'est pas déjà membre." },
      { en: "No, choosing one of these options prevents you from choosing the other.", fr: "Non, choisir l’une de ces options vous empêche de choisir l’autre." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Forms & Email Aliases): Yes, both of these fields can be set, even if the Chosen Salesperson isn’t on the chosen Sales Team.",
      fr: "Source Odoo Learn (Génération de leads - Formulaires et alias de courrier électronique) : Oui, ces deux champs peuvent être définis, même si le vendeur choisi ne fait pas partie de l'équipe commerciale choisie.",
    },
  }),
  complexQ({
    id: "crm-105",
    module: "crm",
    text: {
      en: "What determines whether a web form creates a lead or an opportunity? (Odoo Learn — Lead Generation - Forms & Email Aliases)",
      fr: "Qu'est-ce qui détermine si un formulaire Web crée un prospect ou une opportunité ? (Odoo Learn — Génération de leads – Formulaires et alias de courrier électronique)",
    },
    correct: {
      en: "Whether or not the “Leads” configuration option in the CRM app’s settings is enabled.",
      fr: "Si l'option de configuration « Leads » dans les paramètres de l'application CRM est activée ou non.",
    },
    distractors: [
      { en: "The configuration of the web form itself.", fr: "La configuration du formulaire Web lui-même." },
      { en: "A global setting accessible through the Website app’s configuration page.", fr: "Un paramètre global accessible via la page de configuration de l’application Site Web." },
      { en: "The amount of information a would-be customer enters into the form before submitting it.", fr: "La quantité d'informations qu'un client potentiel saisit dans le formulaire avant de le soumettre." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Forms & Email Aliases): Whether or not the “Leads” configuration option in the CRM app’s settings is enabled.",
      fr: "Source Odoo Learn (Lead Generation - Forms & Email Aliases) : Si l'option de configuration « Leads » dans les paramètres de l'application CRM est activée ou non.",
    },
  }),
  complexQ({
    id: "crm-106",
    module: "crm",
    text: {
      en: "Which of the following data must be entered into a lead form to successfully save and create it? (Odoo Learn — Lead Generation - Forms & Email Aliases)",
      fr: "Parmi les données suivantes, lesquelles doivent être saisies dans un formulaire pour prospects pour pouvoir l'enregistrer et le créer ? (Odoo Learn — Génération de leads – Formulaires et alias de courrier électronique)",
    },
    correct: {
      en: "The name of the company.",
      fr: "Le nom de l'entreprise.",
    },
    distractors: [
      { en: "An email address for a contact.", fr: "Une adresse e-mail pour un contact." },
      { en: "A name for a contact.", fr: "Un nom pour un contact." },
      { en: "All of the above.", fr: "Tout ce qui précède." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Forms & Email Aliases): The name of the company.",
      fr: "Source Odoo Learn (Génération de leads – Formulaires et alias de messagerie) : Le nom de l'entreprise.",
    },
  }),
  complexQ({
    id: "crm-107",
    module: "crm",
    text: {
      en: "When attempting to generate leads from Events, Appointments, or Website visitors, what option should be selected in the ‘Lead Type’ field on a Lead Generation Rule? (Odoo Learn — Lead Generation - Events, Appointments, and Website Visitors)",
      fr: "Lorsque vous tentez de générer des leads à partir d'événements, de rendez-vous ou de visiteurs de sites Web, quelle option doit être sélectionnée dans le champ « Type de lead » d'une règle de génération de leads ? (Odoo Learn — Génération de leads – Événements, rendez-vous et visiteurs du site Web)",
    },
    correct: {
      en: "Lead",
      fr: "Plomb",
    },
    distractors: [
      { en: "Opportunity", fr: "Opportunité" },
      { en: "Generate", fr: "Générer" },
      { en: "Create", fr: "Créer" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Events, Appointments, and Website Visitors): Lead",
      fr: "Source Odoo Learn (Génération de leads - Événements, rendez-vous et visiteurs du site Web) : Lead",
    },
  }),
  complexQ({
    id: "crm-108",
    module: "crm",
    text: {
      en: "In the ‘Options’ tab of an Appointment form, what box **must** be checked to ensure that all booked appointments of this type will generate opportunities in the pipeline? (Odoo Learn — Lead Generation - Events, Appointments, and Website Visitors)",
      fr: "Dans l'onglet « Options » d'un formulaire de rendez-vous, quelle case **doit** être cochée pour garantir que tous les rendez-vous réservés de ce type généreront des opportunités en cours ? (Odoo Learn — Génération de leads – Événements, rendez-vous et visiteurs du site Web)",
    },
    correct: {
      en: "Create Opportunities",
      fr: "Créer des opportunités",
    },
    distractors: [
      { en: "Generate Opportunities", fr: "Générer des opportunités" },
      { en: "Create Appointments", fr: "Créer des rendez-vous" },
      { en: "Generate Leads", fr: "Générer des prospects" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Events, Appointments, and Website Visitors): Create Opportunities",
      fr: "Source Odoo Learn (Génération de leads - Événements, rendez-vous et visiteurs du site Web) : Créez des opportunités",
    },
  }),
  complexQ({
    id: "crm-109",
    module: "crm",
    text: {
      en: "If a person visits our website, but doesn’t fill out any forms, and doesn’t contact us at all, how can Odoo *still* record them as a lead (if they meet certain criteria that we’re looking for)? (Odoo Learn — Lead Generation - Events, Appointments, and Website Visitors)",
      fr: "Si une personne visite notre site Web, mais ne remplit aucun formulaire et ne nous contacte pas du tout, comment Odoo peut-il *encore* l'enregistrer en tant que prospect (si elle répond à certains critères que nous recherchons) ? (Odoo Learn — Génération de leads – Événements, rendez-vous et visiteurs du site Web)",
    },
    correct: {
      en: "From the CRM app, click Configuration > Settings. Then, activate the ‘Visits to Leads’ feature, and click ‘Save’",
      fr: "Depuis l'application CRM, cliquez sur Configuration > Paramètres. Ensuite, activez la fonctionnalité « Visites aux prospects » et cliquez sur « Enregistrer ».",
    },
    distractors: [
      { en: "From the Website app, click Configuration > Settings. Then, activate the ‘Record Leads’ feature, and click ‘Save’", fr: "Depuis l'application Site Web, cliquez sur Configuration > Paramètres. Ensuite, activez la fonction « Enregistrer les prospects » et cliquez sur « Enregistrer »." },
      { en: "From the Appointments app, click Configuration > Settings. Then, activate the ‘Leads from Visits’ feature, and click ‘Save’", fr: "Dans l'application Rendez-vous, cliquez sur Configuration > Paramètres. Ensuite, activez la fonctionnalité « Leads from Visits » et cliquez sur « Enregistrer »." },
      { en: "It’s impossible", fr: "C'est impossible" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Generation - Events, Appointments, and Website Visitors): From the CRM app, click Configuration > Settings. Then, activate the ‘Visits to Leads’ feature, and click ‘Save’",
      fr: "Source Odoo Learn (Génération de leads - Événements, rendez-vous et visiteurs du site Web) : Depuis l'application CRM, cliquez sur Configuration > Paramètres. Ensuite, activez la fonctionnalité « Visites aux prospects » et cliquez sur « Enregistrer ».",
    },
  }),
  complexQ({
    id: "crm-110",
    module: "crm",
    text: {
      en: "Which of the following is NOT true about lead enrichment? (Odoo Learn — Lead Enrichment)",
      fr: "Lequel des énoncés suivants n’est PAS vrai concernant l’enrichissement des leads ? (Odoo Learn — Enrichissement des leads)",
    },
    correct: {
      en: "Lead enrichment is only available for email addresses for businesses in the United States, Canada, and Mexico.",
      fr: "L'enrichissement des leads n'est disponible que pour les adresses e-mail des entreprises aux États-Unis, au Canada et au Mexique.",
    },
    distractors: [
      { en: "Lead enrichment is an in-app purchase and requires Partner Autocomplete credits to use.", fr: "L'enrichissement des prospects est un achat intégré et nécessite des crédits de saisie semi-automatique du partenaire pour être utilisé." },
      { en: "Lead enrichment is built into the CRM app and is available.", fr: "L'enrichissement des leads est intégré à l'application CRM et est disponible." },
      { en: "Leads enrichment uses email addresses to quickly fill in essential information about contacts’ businesses.", fr: "L’enrichissement des leads utilise les adresses e-mail pour renseigner rapidement les informations essentielles sur les activités des contacts." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Enrichment): Lead enrichment is only available for email addresses for businesses in the United States, Canada, and Mexico.",
      fr: "Source Odoo Learn (Enrichissement de leads) : L'enrichissement de leads est uniquement disponible pour les adresses e-mail des entreprises aux États-Unis, au Canada et au Mexique.",
    },
  }),
  complexQ({
    id: "crm-111",
    module: "crm",
    text: {
      en: "What happens when lead enrichment is set to enrich leads automatically? (Odoo Learn — Lead Enrichment)",
      fr: "Que se passe-t-il lorsque l'enrichissement des leads est configuré pour enrichir automatiquement les leads ? (Odoo Learn — Enrichissement des leads)",
    },
    correct: {
      en: "Leads without essential information are automatically enriched at regular intervals.",
      fr: "Les leads sans informations essentielles sont automatiquement enrichis à intervalles réguliers.",
    },
    distractors: [
      { en: "Any lead with an email address is automatically enriched according to Odoo-defined parameters as soon as its created.", fr: "Tout lead disposant d'une adresse email est automatiquement enrichi selon les paramètres définis par Odoo dès sa création." },
      { en: "A button is added to the pipeline that automatically enriches leads using parameters you can set in the CRM app’s configuration.", fr: "Un bouton est ajouté au pipeline qui enrichit automatiquement les leads à l'aide de paramètres que vous pouvez définir dans la configuration de l'application CRM." },
      { en: "Any opportunity that is converted to a lead is automatically enriched according to Odoo-defined parameters.", fr: "Toute opportunité convertie en lead est automatiquement enrichie selon les paramètres définis par Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Enrichment): Leads without essential information are automatically enriched at regular intervals.",
      fr: "Source Odoo Learn (Lead Enrichment) : Les leads sans informations essentielles sont automatiquement enrichis à intervalles réguliers.",
    },
  }),
  complexQ({
    id: "crm-112",
    module: "crm",
    text: {
      en: "Which of the following pieces of information is NEVER included as part of lead enrichment? (Odoo Learn — Lead Enrichment)",
      fr: "Parmi les informations suivantes, lesquelles ne sont JAMAIS incluses dans le cadre de l'enrichissement des leads ? (Odoo Learn — Enrichissement des leads)",
    },
    correct: {
      en: "Each of the previous items may be included in lead enrichment.",
      fr: "Chacun des éléments précédents peut être inclus dans l’enrichissement des leads.",
    },
    distractors: [
      { en: "Software the contact uses.", fr: "Logiciel utilisé par le contact." },
      { en: "The contact’s estimated annual revenue.", fr: "Le revenu annuel estimé du contact." },
      { en: "Social media accounts for the contact.", fr: "Comptes de réseaux sociaux pour le contact." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Enrichment): Each of the previous items may be included in lead enrichment.",
      fr: "Source Odoo Learn (Enrichissement de leads) : Chacun des éléments précédents peut être inclus dans l'enrichissement de leads.",
    },
  }),
  complexQ({
    id: "crm-113",
    module: "crm",
    text: {
      en: "Which of the following is NOT true about lead mining? (Odoo Learn — Lead Mining)",
      fr: "Lequel des énoncés suivants n’est PAS vrai à propos de l’exploitation minière du plomb ? (Odoo Learn — Extraction de plomb)",
    },
    correct: {
      en: "Lead mining is only available in the United States and the European Union.",
      fr: "L’exploitation minière du plomb n’est disponible qu’aux États-Unis et dans l’Union européenne.",
    },
    distractors: [
      { en: "Lead mining is an in-app purchase and requires lead generation credits to use.", fr: "L’extraction de leads est un achat intégré et nécessite des crédits de génération de leads pour être utilisé." },
      { en: "Lead mining allows you to generate leads for both companies and employees at those companies.", fr: "L’exploration de leads vous permet de générer des leads pour les entreprises et les employés de ces entreprises." },
      { en: "Leads generated from lead mining can be assigned to specific salespeople and sales teams, not just the user doing the mining.", fr: "Les leads générés par l'exploration de leads peuvent être attribués à des vendeurs et à des équipes commerciales spécifiques, et pas seulement à l'utilisateur effectuant l'exploration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Mining): Lead mining is only available in the United States and the European Union.",
      fr: "Source Odoo Learn (Lead Mining) : L’extraction de plomb n’est disponible qu’aux États-Unis et dans l’Union européenne.",
    },
  }),
  complexQ({
    id: "crm-114",
    module: "crm",
    text: {
      en: "When lead mining, how would you ensure that leads are generated for the CEOs of companies instead of any C-suite level executive? (Odoo Learn — Lead Mining)",
      fr: "Lors de l'exploitation de leads, comment garantiriez-vous que des leads soient générés pour les PDG des entreprises plutôt que pour n'importe quel cadre de niveau C ? (Odoo Learn — Extraction de plomb)",
    },
    correct: {
      en: "First switch to “Companies and their Contacts” in the lead generation form. Set the form to filter by role, and set the Preferred Role to “CEO”.",
      fr: "Basculez d’abord vers « Entreprises et leurs contacts » dans le formulaire de génération de leads. Définissez le formulaire pour filtrer par rôle et définissez le rôle préféré sur « PDG ».",
    },
    distractors: [
      { en: "First switch to “Companies and their Contacts” in the lead generation form. Set the form to filter by role, and set the Preferred Role to “Primary stakeholder”.", fr: "Basculez d’abord vers « Entreprises et leurs contacts » dans le formulaire de génération de leads. Définissez le formulaire pour filtrer par rôle et définissez le rôle préféré sur « Partie prenante principale »." },
      { en: "First switch to “Companies and their Contacts” in the lead generation form. Set the form to filter by role, and leave the Preferred Role filed blank. The search will return contacts in descending order of title.", fr: "Basculez d’abord vers « Entreprises et leurs contacts » dans le formulaire de génération de leads. Définissez le formulaire pour filtrer par rôle et laissez le champ Rôle préféré vide. La recherche renverra les contacts par ordre décroissant de titre." },
      { en: "First switch to “Companies and their Contacts” in the lead generation form. Set the form to filter by role, and set the Preferred Role to “Highest available”.", fr: "Basculez d’abord vers « Entreprises et leurs contacts » dans le formulaire de génération de leads. Définissez le formulaire pour filtrer par rôle et définissez le rôle préféré sur « Le plus élevé disponible »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Mining): First switch to “Companies and their Contacts” in the lead generation form. Set the form to filter by role, and set the Preferred Role to “CEO”.",
      fr: "Source Odoo Learn (Lead Mining) : Basculez d’abord vers « Entreprises et leurs contacts » dans le formulaire de génération de leads. Définissez le formulaire pour filtrer par rôle et définissez le rôle préféré sur « PDG ».",
    },
  }),
  complexQ({
    id: "crm-115",
    module: "crm",
    text: {
      en: "To whom can mined leads be assigned? (Odoo Learn — Lead Mining)",
      fr: "À qui les leads extraits peuvent-ils être attribués ? (Odoo Learn — Extraction de plomb)",
    },
    correct: {
      en: "Any salesperson or sales team.",
      fr: "Tout vendeur ou équipe commerciale.",
    },
    distractors: [
      { en: "Only the user who generates the leads.", fr: "Uniquement l'utilisateur qui génère les leads." },
      { en: "Any user on the default “Sales (Lead mining)” team.", fr: "Tout utilisateur de l’équipe par défaut « Ventes (Lead mining) »." },
      { en: "Only the user with admin authority to purchase lead generation credits.", fr: "Seul l'utilisateur disposant des droits d'administrateur peut acheter des crédits de génération de leads." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Mining): Any salesperson or sales team.",
      fr: "Source Odoo Learn (Lead Mining) : Tout vendeur ou équipe commerciale.",
    },
  }),
  complexQ({
    id: "crm-116",
    module: "crm",
    text: {
      en: "What setting needs to be enabled for leads to be assigned automatically? (Odoo Learn — Predictive Lead Scoring)",
      fr: "Quel paramètre doit être activé pour que les leads soient attribués automatiquement ? (Odoo Learn — Notation prédictive des leads)",
    },
    correct: {
      en: "Rule-Based Assignment",
      fr: "Affectation basée sur des règles",
    },
    distractors: [
      { en: "Auto Assign Leads", fr: "Attribuer automatiquement des prospects" },
      { en: "Opportunity Assignment", fr: "Affectation d'opportunité" },
      { en: "Automatic Assignment", fr: "Attribution automatique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Predictive Lead Scoring): Rule-Based Assignment",
      fr: "Source Odoo Learn (Predictive Lead Scoring) : attribution basée sur des règles",
    },
  }),
  complexQ({
    id: "crm-117",
    module: "crm",
    text: {
      en: "Where can I set up rule-based assignment for individual salespeople? (Odoo Learn — Predictive Lead Scoring)",
      fr: "Où puis-je configurer une affectation basée sur des règles pour des vendeurs individuels ? (Odoo Learn — Notation prédictive des leads)",
    },
    correct: {
      en: "The Sales Team page",
      fr: "La page de l'équipe commerciale",
    },
    distractors: [
      { en: "The Contacts app", fr: "L'application Contacts" },
      { en: "The settings menu", fr: "Le menu des paramètres" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Predictive Lead Scoring): The Sales Team page",
      fr: "Source Odoo Learn (Predictive Lead Scoring) : La page de l'équipe commerciale",
    },
  }),
  complexQ({
    id: "crm-118",
    module: "crm",
    text: {
      en: "What does the ‘Skip auto assignment’ option do? (Odoo Learn — Predictive Lead Scoring)",
      fr: "À quoi sert l’option « Ignorer l’affectation automatique » ? (Odoo Learn — Notation prédictive des leads)",
    },
    correct: {
      en: "Skips auto assignment but allows manual assignment",
      fr: "Ignore l'affectation automatique mais autorise l'affectation manuelle",
    },
    distractors: [
      { en: "Skips both auto and manual assignment", fr: "Ignore l'affectation automatique et manuelle" },
      { en: "Allows rule-based assignment only", fr: "Autorise uniquement l'affectation basée sur des règles" },
      { en: "Allows opportunities to be auto assigned, but not leads", fr: "Permet d'attribuer automatiquement les opportunités, mais pas les leads" },
    ],
    explanation: {
      en: "Source Odoo Learn (Predictive Lead Scoring): Skips auto assignment but allows manual assignment",
      fr: "Source Odoo Learn (Predictive Lead Scoring) : ignore l'affectation automatique mais permet l'affectation manuelle",
    },
  }),
  complexQ({
    id: "crm-119",
    module: "crm",
    text: {
      en: "What MUST be activated in order to configure Gamification? (Odoo Learn — Gamification)",
      fr: "Que DOIT être activé pour configurer la Gamification ? (Odoo Learn — Gamification)",
    },
    correct: {
      en: "Developer Mode.",
      fr: "Mode développeur.",
    },
    distractors: [
      { en: "Gamer Mode.", fr: "Mode joueur." },
      { en: "Seller Mode.", fr: "Mode vendeur." },
      { en: "Sales Mode.", fr: "Mode de vente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gamification): Developer Mode.",
      fr: "Source Odoo Learn (Gamification) : Mode Développeur.",
    },
  }),
  complexQ({
    id: "crm-120",
    module: "crm",
    text: {
      en: "Where can you define goals for sales teams/salespeople? (Odoo Learn — Gamification)",
      fr: "Où définir les objectifs des équipes commerciales/vendeurs ? (Odoo Learn — Gamification)",
    },
    correct: {
      en: "Settings app > Gamification Tools > Goal Definitions",
      fr: "Application Paramètres > Outils de gamification > Définitions d'objectifs",
    },
    distractors: [
      { en: "Settings app > Gamification Tools > Sales Teams", fr: "Application Paramètres > Outils de gamification > Équipes commerciales" },
      { en: "Settings app > Gamification Tools > Goal Configuration", fr: "Application Paramètres > Outils de gamification > Configuration des objectifs" },
      { en: "Settings app > Gamification Tools > Goal Challenges", fr: "Application Paramètres > Outils de gamification > Défis d'objectifs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gamification): Settings app > Gamification Tools > Goal Definitions",
      fr: "Source Odoo Learn (Gamification) : Application Paramètres > Outils de Gamification > Définitions d'objectifs",
    },
  }),
  complexQ({
    id: "crm-121",
    module: "crm",
    text: {
      en: "Where can badges be customized and/or created for gamification challenges? (Odoo Learn — Gamification)",
      fr: "Où les badges peuvent-ils être personnalisés et/ou créés pour les défis de gamification ? (Odoo Learn — Gamification)",
    },
    correct: {
      en: "Settings app > Gamification Tools > Badges",
      fr: "Application Paramètres > Outils de gamification > Badges",
    },
    distractors: [
      { en: "CRM app > Sales Teams > Badges", fr: "Application CRM > Equipes Commerciales > Badges" },
      { en: "Sales app > Gamification Tools > Rewards", fr: "Application de vente > Outils de gamification > Récompenses" },
      { en: "CRM app > Sales Teams > Rewards", fr: "Application CRM > Équipes commerciales > Récompenses" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gamification): Settings app > Gamification Tools > Badges",
      fr: "Source Odoo Learn (Gamification) : Application Paramètres > Outils de Gamification > Badges",
    },
  }),
];
