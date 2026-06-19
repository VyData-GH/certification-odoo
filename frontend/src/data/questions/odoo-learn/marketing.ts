import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const marketingLearnQuestions = [
  complexQ({
    id: "mkt-021",
    module: "marketing",
    text: {
      en: "How often can digest emails be sent in Odoo? (Multiple choice) (Odoo Learn — Digest Emails)",
      fr: "À quelle fréquence les e-mails de résumé peuvent-ils être envoyés dans Odoo ? (Choix multiple) (Odoo Learn — Résumé des e-mails)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Daily", fr: "Tous les jours" },
      { en: "Weekly", fr: "Hebdomadaire" },
      { en: "Monthly", fr: "Mensuel" },
    ],
    explanation: {
      en: "Source Odoo Learn (Digest Emails): All of the above",
      fr: "Source Odoo Learn (Digest Emails) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "mkt-022",
    module: "marketing",
    text: {
      en: "How can I add additional KPIs to my Digest Emails? (Odoo Learn — Digest Emails)",
      fr: "Comment puis-je ajouter des KPI supplémentaires à mes e-mails Digest ? (Odoo Learn — Résumé des e-mails)",
    },
    correct: {
      en: "Install the relevant app for that KPI",
      fr: "Installez l'application appropriée pour ce KPI",
    },
    distractors: [
      { en: "Add them from the ‘Additional KPIs’ menu", fr: "Ajoutez-les depuis le menu « KPI supplémentaires »" },
      { en: "Enter developer mode, then select from the ‘hidden KPIs’ menu", fr: "Entrez en mode développeur, puis sélectionnez dans le menu « KPI cachés »" },
      { en: "You cannot add additional KPIs", fr: "Vous ne pouvez pas ajouter de KPI supplémentaires" },
    ],
    explanation: {
      en: "Source Odoo Learn (Digest Emails): Install the relevant app for that KPI",
      fr: "Source Odoo Learn (Digest Emails) : installez l'application appropriée pour ce KPI",
    },
  }),
  complexQ({
    id: "mkt-023",
    module: "marketing",
    text: {
      en: "What of the following is NOT an option for sending digest emails? (Odoo Learn — Digest Emails)",
      fr: "Parmi les éléments suivants, lequel n'est PAS une option pour envoyer des e-mails de synthèse ? (Odoo Learn — Résumé des e-mails)",
    },
    correct: {
      en: "Use the ‘Schedule’ button to schedule it for a later time",
      fr: "Utilisez le bouton « Planifier » pour le programmer à une heure ultérieure",
    },
    distractors: [
      { en: "Use the ‘Send Now’ button to send it immediately", fr: "Utilisez le bouton « Envoyer maintenant » pour l'envoyer immédiatement" },
      { en: "Wait for the ‘Next Send Date’ for it to be sent automatically", fr: "Attendez la « Date d'envoi suivante » pour qu'elle soit envoyée automatiquement" },
      { en: "Change the periodicity to send it earlier or later", fr: "Changer la périodicité pour l'envoyer plus tôt ou plus tard" },
    ],
    explanation: {
      en: "Source Odoo Learn (Digest Emails): Use the ‘Schedule’ button to schedule it for a later time",
      fr: "Source Odoo Learn (Digest Emails) : utilisez le bouton « Planifier » pour le programmer à une date ultérieure",
    },
  }),
  complexQ({
    id: "mkt-024",
    module: "marketing",
    text: {
      en: "What are the two fields you need to create in Odoo Studio to add a custom KPI to digest emails? (Odoo Learn — Custom KPIs for Digest Emails)",
      fr: "Quels sont les deux champs que vous devez créer dans Odoo Studio pour ajouter un KPI personnalisé pour digérer les e-mails ? (Odoo Learn — KPI personnalisés pour les e-mails de résumé)",
    },
    correct: {
      en: "A checkbox field and an integer field",
      fr: "Un champ case à cocher et un champ entier",
    },
    distractors: [
      { en: "A text field and a date field", fr: "Un champ de texte et un champ de date" },
      { en: "A selection field and a monetary field", fr: "Un champ de sélection et un champ monétaire" },
      { en: "An email and checkbox field", fr: "Un champ email et case à cocher" },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom KPIs for Digest Emails): A checkbox field and an integer field",
      fr: "Source Odoo Learn (KPI personnalisés pour les e-mails de résumé) : Un champ case à cocher et un champ entier",
    },
  }),
  complexQ({
    id: "mkt-025",
    module: "marketing",
    text: {
      en: "Where do you go to input custom code into an Odoo Studio field? (Odoo Learn — Custom KPIs for Digest Emails)",
      fr: "Où allez-vous pour saisir du code personnalisé dans un champ Odoo Studio ? (Odoo Learn — KPI personnalisés pour les e-mails de résumé)",
    },
    correct: {
      en: "Technical > Models > select the field",
      fr: "Technique > Modèles > sélectionnez le champ",
    },
    distractors: [
      { en: "Technical > Fields > select the field", fr: "Technique > Champs > sélectionnez le champ" },
      { en: "Technical > Codebox > select the field", fr: "Technique > Codebox > sélectionnez le champ" },
      { en: "Technical > Database > select the field", fr: "Technique > Base de données > sélectionnez le champ" },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom KPIs for Digest Emails): Technical > Models > select the field",
      fr: "Source Odoo Learn (KPI personnalisés pour les e-mails Digest) : Technique > Modèles > sélectionnez le champ",
    },
  }),
  complexQ({
    id: "mkt-026",
    module: "marketing",
    text: {
      en: "Where do you configure the recipients for digest emails? (Odoo Learn — Custom KPIs for Digest Emails)",
      fr: "Où configurez-vous les destinataires des e-mails de résumé ? (Odoo Learn — KPI personnalisés pour les e-mails de résumé)",
    },
    correct: {
      en: "In the ‘Recipients’ tab of the digest email form",
      fr: "Dans l'onglet « Destinataires » du formulaire d'e-mail de résumé",
    },
    distractors: [
      { en: "In the ‘General Settings’", fr: "Dans les « Paramètres généraux »" },
      { en: "In the ‘User Preferences’", fr: "Dans les « Préférences utilisateur »" },
      { en: "In the ‘Digest Settings’", fr: "Dans les « Paramètres du résumé »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom KPIs for Digest Emails): In the ‘Recipients’ tab of the digest email form",
      fr: "Source Odoo Learn (KPI personnalisés pour les e-mails de résumé) : Dans l'onglet « Destinataires » du formulaire d'e-mail de résumé",
    },
  }),
  complexQ({
    id: "mkt-027",
    module: "marketing",
    text: {
      en: "What Odoo apps can I use for marketing? (Odoo Learn — Marketing Basics)",
      fr: "Quelles applications Odoo puis-je utiliser pour le marketing ? (Odoo Learn — Bases du marketing)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Email Marketing", fr: "Marketing par e-mail" },
      { en: "SMS Marketing", fr: "Marketing par SMS" },
      { en: "Events", fr: "Événements" },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Basics): All of the above",
      fr: "Source Odoo Learn (Bases du marketing) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "mkt-028",
    module: "marketing",
    text: {
      en: "Can I send emails as part of a marketing campaign? (Odoo Learn — Marketing Basics)",
      fr: "Puis-je envoyer des e-mails dans le cadre d’une campagne marketing ? (Odoo Learn — Bases du marketing)",
    },
    correct: {
      en: "Yes, if the ‘Mailing Campaigns’ option is enabled in the Email marketing app settings.",
      fr: "Oui, si l'option « Campagnes de mailing » est activée dans les paramètres de l'application Email marketing.",
    },
    distractors: [
      { en: "No, marketing emails cannot be linked to campaigns.", fr: "Non, les e-mails marketing ne peuvent pas être liés à des campagnes." },
      { en: "Yes, but only if the email is selling a product.", fr: "Oui, mais seulement si l'e-mail vend un produit." },
      { en: "Yes, but only if there are hashtags in the email.", fr: "Oui, mais seulement s'il y a des hashtags dans l'e-mail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Basics): Yes, if the ‘Mailing Campaigns’ option is enabled in the Email marketing app settings.",
      fr: "Source Odoo Learn (Bases du marketing) : Oui, si l'option « Campagnes de mailing » est activée dans les paramètres de l'application Email marketing.",
    },
  }),
  complexQ({
    id: "mkt-029",
    module: "marketing",
    text: {
      en: "What app can I use to create a marketing campaign? (Odoo Learn — Marketing Basics)",
      fr: "Quelle application puis-je utiliser pour créer une campagne marketing ? (Odoo Learn — Bases du marketing)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Email Marketing", fr: "Marketing par e-mail" },
      { en: "SMS Marketing", fr: "Marketing par SMS" },
      { en: "Social Marketing", fr: "Marketing Social" },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Basics): All of the above",
      fr: "Source Odoo Learn (Bases du marketing) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "mkt-030",
    module: "marketing",
    text: {
      en: "Where can you activate the ‘Dedicated Server’ feature in the Email Marketing application? (Odoo Learn — Email Marketing Essentials)",
      fr: "Où pouvez-vous activer la fonctionnalité « Serveur dédié » dans l'application Email Marketing ? (Odoo Learn — Les essentiels du marketing par e-mail)",
    },
    correct: {
      en: "The Settings Page (Configuration > Settings).",
      fr: "La page Paramètres (Configuration > Paramètres).",
    },
    distractors: [
      { en: "The Servers Page (Configuration > Servers).", fr: "La page Serveurs (Configuration > Serveurs)." },
      { en: "The Email Portal (Configuration > Email Portal).", fr: "Le portail de messagerie (Configuration > Portail de messagerie)." },
      { en: "The Dedicated Servers Page (Configuration > Dedications > Email > Servers).", fr: "La page Serveurs dédiés (Configuration > Dédicaces > E-mail > Serveurs)." },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Marketing Essentials): The Settings Page (Configuration > Settings).",
      fr: "Source Odoo Learn (Email Marketing Essentials) : La page Paramètres (Configuration > Paramètres).",
    },
  }),
  complexQ({
    id: "mkt-031",
    module: "marketing",
    text: {
      en: "Once you click ‘Send,’ and the mailing is scheduled to be sent, the status changes from ‘Draft’ to… (Odoo Learn — Email Marketing Essentials)",
      fr: "Une fois que vous avez cliqué sur « Envoyer » et que l’envoi du mailing est programmé, le statut passe de « Brouillon » à… (Odoo Learn — Les essentiels du marketing par e-mail)",
    },
    correct: {
      en: "‘In Queue.’",
      fr: "«Dans la file d'attente.»",
    },
    distractors: [
      { en: "‘Sent.’", fr: "'Envoyé.'" },
      { en: "‘In Progress.’", fr: "'En cours.'" },
      { en: "‘Waiting.’", fr: "'En attendant.'" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Marketing Essentials): ‘In Queue.’",
      fr: "Source Odoo Learn (Email Marketing Essentials) : « En file d'attente ».",
    },
  }),
  complexQ({
    id: "mkt-032",
    module: "marketing",
    text: {
      en: "How do I send a mailing to multiple mailing lists? (Odoo Learn — Email Marketing Essentials)",
      fr: "Comment envoyer un mailing à plusieurs listes de diffusion ? (Odoo Learn — Les essentiels du marketing par e-mail)",
    },
    correct: {
      en: "Both a and b are correct.",
      fr: "a et b sont corrects.",
    },
    distractors: [
      { en: "In the new ‘Mailing’ page, select ‘Mailing List’ in the ‘Recipient’ field, and add the target mailing lists.", fr: "Dans la nouvelle page « Mailing », sélectionnez « Mailing List » dans le champ « Destinataire » et ajoutez les listes de diffusion cibles." },
      { en: "In the new ‘Mailing’ page, head to the ‘Settings’ tab, and add the target mailing lists in the ‘Recipients’ field.", fr: "Dans la nouvelle page « Mailing », accédez à l'onglet « Paramètres » et ajoutez les listes de diffusion cibles dans le champ « Destinataires »." },
      { en: "There is no way to send a mailing to multiple mailing lists.", fr: "Il n'existe aucun moyen d'envoyer un mailing à plusieurs listes de diffusion." },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Marketing Essentials): Both a and b are correct.",
      fr: "Source Odoo Learn (Email Marketing Essentials) : a et b sont corrects.",
    },
  }),
  complexQ({
    id: "mkt-033",
    module: "marketing",
    text: {
      en: "If the ‘Campaigns’ header menu option isn’t available, what should be done? (Odoo Learn — Email Campaigns)",
      fr: "Si l’option du menu d’en-tête « Campagnes » n’est pas disponible, que faut-il faire ? (Odoo Learn — Campagnes par e-mail)",
    },
    correct: {
      en: "Activate the ‘Mailing Campaigns’ feature",
      fr: "Activez la fonctionnalité « Campagnes de mailing »",
    },
    distractors: [
      { en: "Call Odoo Support", fr: "Appeler l'assistance Odoo" },
      { en: "Activate the ‘Marketing’ feature", fr: "Activer la fonctionnalité « Marketing »" },
      { en: "The ‘Campaigns’ header menu option is *always* available - no matter what", fr: "L'option du menu d'en-tête « Campagnes » est *toujours* disponible, quoi qu'il arrive" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Campaigns): Activate the ‘Mailing Campaigns’ feature",
      fr: "Source Odoo Learn (Campagnes Email) : Activez la fonctionnalité « Campagnes Mailing »",
    },
  }),
  complexQ({
    id: "mkt-034",
    module: "marketing",
    text: {
      en: "The ‘Send Push’ button on a campaign form is related to what other Odoo application? (Odoo Learn — Email Campaigns)",
      fr: "Le bouton « Envoyer Push » sur un formulaire de campagne est lié à quelle autre application Odoo ? (Odoo Learn — Campagnes par e-mail)",
    },
    correct: {
      en: "Website",
      fr: "Site web",
    },
    distractors: [
      { en: "SMS Marketing", fr: "Marketing par SMS" },
      { en: "Social Marketing", fr: "Marketing Social" },
      { en: "Surveys", fr: "Enquêtes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Campaigns): Website",
      fr: "Source Odoo Learn (Campagnes email) : Site Web",
    },
  }),
  complexQ({
    id: "mkt-035",
    module: "marketing",
    text: {
      en: "If ‘Mailing List’ is selected in the ‘Recipients’ field, how many mailing lists can be added? (Odoo Learn — Email Campaigns)",
      fr: "Si « Liste de diffusion » est sélectionné dans le champ « Destinataires », combien de listes de diffusion peuvent être ajoutées ? (Odoo Learn — Campagnes par e-mail)",
    },
    correct: {
      en: "There is no limit",
      fr: "Il n'y a pas de limite",
    },
    distractors: [
      { en: "Depends on the number of messages", fr: "Cela dépend du nombre de messages" },
      { en: "Depends on the number of users in the database", fr: "Dépend du nombre d'utilisateurs dans la base de données" },
      { en: "Depends on the number of existing campaign", fr: "Dépend du nombre de campagnes existantes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Campaigns): There is no limit",
      fr: "Source Odoo Learn (Campagnes Email) : Il n'y a pas de limite",
    },
  }),
  complexQ({
    id: "mkt-036",
    module: "marketing",
    text: {
      en: "When does the ‘Send SMS’ button appear on a mailing list form? (Odoo Learn — Mailing Lists)",
      fr: "Quand le bouton « Envoyer SMS » apparaît-il sur un formulaire de liste de diffusion ? (Odoo Learn — Listes de diffusion)",
    },
    correct: {
      en: "Only when the SMS Marketing app is installed on the database",
      fr: "Uniquement lorsque l'application SMS Marketing est installée sur la base de données",
    },
    distractors: [
      { en: "This button appears by default – no matter what", fr: "Ce bouton apparaît par défaut – quoi qu’il arrive" },
      { en: "Only when the Social Marketing app is installed on the database", fr: "Uniquement lorsque l'application Social Marketing est installée sur la base de données" },
      { en: "This button does not exist", fr: "Ce bouton n'existe pas" },
    ],
    explanation: {
      en: "Source Odoo Learn (Mailing Lists): Only when the SMS Marketing app is installed on the database",
      fr: "Source Odoo Learn (Listes de diffusion) : Uniquement lorsque l'application SMS Marketing est installée sur la base de données",
    },
  }),
  complexQ({
    id: "mkt-037",
    module: "marketing",
    text: {
      en: "If a contact is created for a specific mailing list, are they *also* created as a contact in the overall database? (Odoo Learn — Mailing Lists)",
      fr: "Si un contact est créé pour une liste de diffusion spécifique, est-il *également* créé en tant que contact dans la base de données globale ? (Odoo Learn — Listes de diffusion)",
    },
    correct: {
      en: "No",
      fr: "Non",
    },
    distractors: [
      { en: "Yes", fr: "Oui" },
      { en: "Yes, but *ONLY* if the ‘Entire Database’ checkbox is ticked on the contact form", fr: "Oui, mais *UNIQUEMENT* si la case « Base de données entière » est cochée sur le formulaire de contact" },
      { en: "Yes, but *ONLY* if they have a valid mobile number", fr: "Oui, mais *UNIQUEMENT* s'ils disposent d'un numéro de mobile valide" },
    ],
    explanation: {
      en: "Source Odoo Learn (Mailing Lists): No",
      fr: "Source Odoo Learn (Listes de diffusion) : Non",
    },
  }),
  complexQ({
    id: "mkt-038",
    module: "marketing",
    text: {
      en: "What selection of website building blocks are used to add subscription fields to mailing lists onto an Odoo-built website? (Odoo Learn — Mailing Lists)",
      fr: "Quelle sélection de blocs de construction de sites Web est utilisée pour ajouter des champs d'abonnement aux listes de diffusion sur un site Web créé par Odoo ? (Odoo Learn — Listes de diffusion)",
    },
    correct: {
      en: "Newsletter",
      fr: "Bulletin",
    },
    distractors: [
      { en: "Mailing List", fr: "Liste de diffusion" },
      { en: "Mailing", fr: "Envoi postal" },
      { en: "Subscribe", fr: "S'abonner" },
    ],
    explanation: {
      en: "Source Odoo Learn (Mailing Lists): Newsletter",
      fr: "Source Odoo Learn (Listes de diffusion) : Newsletter",
    },
  }),
  complexQ({
    id: "mkt-039",
    module: "marketing",
    text: {
      en: "What button do I press to save a mailing as a template? (Odoo Learn — Email Marketing Templates)",
      fr: "Sur quel bouton dois-je appuyer pour enregistrer un mailing comme modèle ? (Odoo Learn — Modèles de marketing par e-mail)",
    },
    correct: {
      en: "Add to Templates",
      fr: "Ajouter aux modèles",
    },
    distractors: [
      { en: "Save Template", fr: "Enregistrer le modèle" },
      { en: "Save", fr: "Sauvegarder" },
      { en: "Add Mailing to Template", fr: "Ajouter un mailing au modèle" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Marketing Templates): Add to Templates",
      fr: "Source Odoo Learn (Modèles de marketing par e-mail) : Ajouter aux modèles",
    },
  }),
  complexQ({
    id: "mkt-040",
    module: "marketing",
    text: {
      en: "Where can I find the list of pre-made email templates? (Odoo Learn — Email Marketing Templates)",
      fr: "Où puis-je trouver la liste des modèles d'e-mails prédéfinis ? (Odoo Learn — Modèles de marketing par e-mail)",
    },
    correct: {
      en: "By creating a new mailing",
      fr: "En créant un nouveau mailing",
    },
    distractors: [
      { en: "On the ‘Email Marketing Templates’ page", fr: "Sur la page « Modèles de marketing par e-mail »" },
      { en: "On the ‘Templates’ tab in the Mailings list", fr: "Dans l'onglet « Modèles » de la liste de diffusion" },
      { en: "In the ‘Configuration’ menu of the Email Marketing App", fr: "Dans le menu « Configuration » de l’application Email Marketing" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Marketing Templates): By creating a new mailing",
      fr: "Source Odoo Learn (Modèles d'Email Marketing) : En créant un nouveau mailing",
    },
  }),
  complexQ({
    id: "mkt-041",
    module: "marketing",
    text: {
      en: "How can I replace an image, such as a logo, in a template? (Odoo Learn — Email Marketing Templates)",
      fr: "Comment puis-je remplacer une image, telle qu'un logo, dans un modèle ? (Odoo Learn — Modèles de marketing par e-mail)",
    },
    correct: {
      en: "Click the ‘Replace’ button in the ‘Media’ field in the sidebar",
      fr: "Cliquez sur le bouton « Remplacer » dans le champ « Média » de la barre latérale",
    },
    distractors: [
      { en: "Double-click an image to bring up a dialogue box", fr: "Double-cliquez sur une image pour faire apparaître une boîte de dialogue" },
      { en: "Drag and drop the new image over the old one", fr: "Faites glisser et déposez la nouvelle image sur l'ancienne" },
      { en: "Click the link icon pop-up when hovering over the image", fr: "Cliquez sur l'icône de lien contextuelle lorsque vous survolez l'image" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Marketing Templates): Click the ‘Replace’ button in the ‘Media’ field in the sidebar",
      fr: "Source Odoo Learn (Modèles de marketing par e-mail) : Cliquez sur le bouton « Remplacer » dans le champ « Médias » dans la barre latérale",
    },
  }),
  complexQ({
    id: "mkt-042",
    module: "marketing",
    text: {
      en: "Where can I adjust the overall font types on my email template? (Odoo Learn — Advanced Email Marketing Templates)",
      fr: "Où puis-je ajuster les types de polices globaux sur mon modèle d'e-mail ? (Odoo Learn — Modèles avancés de marketing par e-mail)",
    },
    correct: {
      en: "The ‘Design Options’ section of the ‘Design’ tab",
      fr: "La section « Options de conception » de l'onglet « Conception »",
    },
    distractors: [
      { en: "The ‘Font’ section of the ‘Customize’ tab", fr: "La section « Police » de l'onglet « Personnaliser »" },
      { en: "The ‘Layout’ section of the ‘Blocks’ tab", fr: "La section « Mise en page » de l'onglet « Blocs »" },
      { en: "The ‘Font’ section of the ‘Design’ tab", fr: "La section « Police » de l'onglet « Conception »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Advanced Email Marketing Templates): The ‘Design Options’ section of the ‘Design’ tab",
      fr: "Source Odoo Learn (Modèles de marketing par e-mail avancés) : La section « Options de conception » de l'onglet « Conception »",
    },
  }),
  complexQ({
    id: "mkt-043",
    module: "marketing",
    text: {
      en: "Where can I find image filters? (Odoo Learn — Advanced Email Marketing Templates)",
      fr: "Où puis-je trouver des filtres d'image ? (Odoo Learn — Modèles avancés de marketing par e-mail)",
    },
    correct: {
      en: "The ‘Filter’ field when an image is selected",
      fr: "Le champ « Filtre » lorsqu'une image est sélectionnée",
    },
    distractors: [
      { en: "In the ‘Design’ tab", fr: "Dans l'onglet \"Conception\"" },
      { en: "The ‘Image’ field when an image is selected", fr: "Le champ « Image » lorsqu’une image est sélectionnée" },
      { en: "There are no image filters", fr: "Il n'y a pas de filtres d'image" },
    ],
    explanation: {
      en: "Source Odoo Learn (Advanced Email Marketing Templates): The ‘Filter’ field when an image is selected",
      fr: "Source Odoo Learn (Modèles de marketing par e-mail avancés) : Le champ « Filtre » lorsqu'une image est sélectionnée",
    },
  }),
  complexQ({
    id: "mkt-044",
    module: "marketing",
    text: {
      en: "Where can I access Odoo’s AI text generation tool? (Odoo Learn — Advanced Email Marketing Templates)",
      fr: "Où puis-je accéder à l’outil de génération de texte IA d’Odoo ? (Odoo Learn — Modèles avancés de marketing par e-mail)",
    },
    correct: {
      en: "In the ‘Inline Text’ section of the ‘Customize’ tab",
      fr: "Dans la section « Texte en ligne » de l'onglet « Personnaliser »",
    },
    distractors: [
      { en: "In the ‘Title’ section of the ‘Customize’ tab", fr: "Dans la section « Titre » de l'onglet « Personnaliser »" },
      { en: "By highlighting the text and clicking the ‘AI’ button", fr: "En mettant le texte en surbrillance et en cliquant sur le bouton « AI »" },
      { en: "The AI text generation tool is not accessible in Email Marketing", fr: "L'outil de génération de texte IA n'est pas accessible dans Email Marketing" },
    ],
    explanation: {
      en: "Source Odoo Learn (Advanced Email Marketing Templates): In the ‘Inline Text’ section of the ‘Customize’ tab",
      fr: "Source Odoo Learn (Modèles de marketing par e-mail avancés) : dans la section « Texte en ligne » de l'onglet « Personnaliser »",
    },
  }),
  complexQ({
    id: "mkt-045",
    module: "marketing",
    text: {
      en: "What setting must be enabled to allow recipients to blacklist themselves? (Odoo Learn — Manage Opt-Outs)",
      fr: "Quel paramètre doit être activé pour permettre aux destinataires de se mettre sur liste noire ? (Odoo Learn — Gérer les désinscriptions)",
    },
    correct: {
      en: "Blacklist Option when Unsubscribing",
      fr: "Option de liste noire lors de la désinscription",
    },
    distractors: [
      { en: "Unsubscribing Option when Blacklisting", fr: "Option de désabonnement en cas de mise sur liste noire" },
      { en: "Blacklisting", fr: "Liste noire" },
      { en: "Self Blacklist", fr: "Liste noire personnelle" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Opt-Outs): Blacklist Option when Unsubscribing",
      fr: "Source Odoo Learn (Gérer les désinscriptions) : Option liste noire lors de la désinscription",
    },
  }),
  complexQ({
    id: "mkt-046",
    module: "marketing",
    text: {
      en: "On the ‘Mailing Subscriptions’ page, what should recipients click to have their email address added to the blacklist? (Odoo Learn — Manage Opt-Outs)",
      fr: "Sur la page « Abonnements mailing », sur quoi les destinataires doivent-ils cliquer pour que leur adresse e-mail soit ajoutée à la liste noire ? (Odoo Learn — Gérer les désinscriptions)",
    },
    correct: {
      en: "Exclude Me",
      fr: "Excluez-moi",
    },
    distractors: [
      { en: "Remove Me", fr: "Supprimez-moi" },
      { en: "Blacklist Me", fr: "Me mettre sur liste noire" },
      { en: "Avoid Me", fr: "Évitez-moi" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Opt-Outs): Exclude Me",
      fr: "Source Odoo Learn (Gérer les désinscriptions) : Excluez-moi",
    },
  }),
  complexQ({
    id: "mkt-047",
    module: "marketing",
    text: {
      en: "Where do I go to create or modify opt-out reasons? (Odoo Learn — Manage Opt-Outs)",
      fr: "Où puis-je créer ou modifier des motifs de désinscription ? (Odoo Learn — Gérer les désinscriptions)",
    },
    correct: {
      en: "Configuration > Optout Reasons",
      fr: "Configuration > Raisons de désinscription",
    },
    distractors: [
      { en: "Blacklist Addresses > Optout Reasons", fr: "Adresses de la liste noire > Raisons de désinscription" },
      { en: "Configuration > Settings > Optout Modification", fr: "Configuration > Paramètres > Modification de désinscription" },
      { en: "Mailing Lists > Optout Reasons", fr: "Listes de diffusion > Raisons de désinscription" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Opt-Outs): Configuration > Optout Reasons",
      fr: "Source Odoo Learn (Gérer les désinscriptions) : Configuration > Raisons de désinscription",
    },
  }),
  complexQ({
    id: "mkt-048",
    module: "marketing",
    text: {
      en: "Which of the following is NOT a ‘Winner Selection’ option? (Odoo Learn — A/B Testing)",
      fr: "Lequel des éléments suivants n'est PAS une option de « Sélection du gagnant » ? (Odoo Learn — Tests A/B)",
    },
    correct: {
      en: "Purchases",
      fr: "Achats",
    },
    distractors: [
      { en: "Highest Click Rate", fr: "Taux de clics le plus élevé" },
      { en: "Leads", fr: "Conduit" },
      { en: "Quotations", fr: "Citations" },
    ],
    explanation: {
      en: "Source Odoo Learn (A/B Testing): Purchases",
      fr: "Source Odoo Learn (A/B Testing) : Achats",
    },
  }),
  complexQ({
    id: "mkt-049",
    module: "marketing",
    text: {
      en: "Where can I create an alternative version of an email for A/B testing? (Odoo Learn — A/B Testing)",
      fr: "Où puis-je créer une version alternative d'un e-mail pour les tests A/B ? (Odoo Learn — Tests A/B)",
    },
    correct: {
      en: "The ‘A/B Testing’ tab on the original email",
      fr: "L'onglet « Test A/B » sur l'e-mail d'origine",
    },
    distractors: [
      { en: "The ‘A/B Testing’ section in the ‘Mailings’ header", fr: "La section « A/B Testing » dans l’en-tête « Mailings »" },
      { en: "By clicking the ‘A/B Test’ smart button on a mailing", fr: "En cliquant sur le bouton intelligent « A/B Test » d'un mailing" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (A/B Testing): The ‘A/B Testing’ tab on the original email",
      fr: "Source Odoo Learn (A/B Testing) : L'onglet « A/B Testing » sur l'e-mail d'origine",
    },
  }),
  complexQ({
    id: "mkt-050",
    module: "marketing",
    text: {
      en: "Which of the following can be changed between alternative versions in an A/B test? (Odoo Learn — A/B Testing)",
      fr: "Parmi les éléments suivants, lesquels peuvent être modifiés entre des versions alternatives lors d'un test A/B ? (Odoo Learn — Tests A/B)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "The subject line", fr: "La ligne d'objet" },
      { en: "The design", fr: "La conception" },
      { en: "The blocks", fr: "Les blocs" },
    ],
    explanation: {
      en: "Source Odoo Learn (A/B Testing): All of the above",
      fr: "Source Odoo Learn (A/B Testing) : tout ce qui précède",
    },
  }),
  complexQ({
    id: "mkt-051",
    module: "marketing",
    text: {
      en: "When creating a Lost Leads Reactivation Email, what option should be selected in the ‘Recipients’ field of the email form? (Odoo Learn — Lost Leads Reactivation Email)",
      fr: "Lors de la création d'un e-mail de réactivation de leads perdus, quelle option doit être sélectionnée dans le champ « Destinataires » du formulaire d'e-mail ? (Odoo Learn — E-mail de réactivation des leads perdus)",
    },
    correct: {
      en: "Lead/Opportunity",
      fr: "Piste/Opportunité",
    },
    distractors: [
      { en: "Lost Lead", fr: "Plomb perdu" },
      { en: "Archived Leads/Customers", fr: "Leads/Clients archivés" },
      { en: "Customers/Opportunities", fr: "Clients/Opportunités" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lost Leads Reactivation Email): Lead/Opportunity",
      fr: "Source Odoo Learn (E-mail de réactivation des leads perdus) : Lead/Opportunité",
    },
  }),
  complexQ({
    id: "mkt-052",
    module: "marketing",
    text: {
      en: "What toggle switch *must* be clicked on, in order to target lost leads in the ‘Recipients’ field? (Odoo Learn — Lost Leads Reactivation Email)",
      fr: "Sur quel interrupteur à bascule *doit-on* cliquer pour cibler les leads perdus dans le champ « Destinataires » ? (Odoo Learn — E-mail de réactivation des leads perdus)",
    },
    correct: {
      en: "Include Archived",
      fr: "Inclure Archivé",
    },
    distractors: [
      { en: "Include Lost Records", fr: "Inclure les enregistrements perdus" },
      { en: "Include Past Customers", fr: "Inclure les anciens clients" },
      { en: "No toggle switch needs to be clicked", fr: "Aucun interrupteur à bascule ne doit être cliqué" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lost Leads Reactivation Email): Include Archived",
      fr: "Source Odoo Learn (e-mail de réactivation des leads perdus) : Inclure archivé",
    },
  }),
  complexQ({
    id: "mkt-053",
    module: "marketing",
    text: {
      en: "How do I save a recipient filter for future use? (Odoo Learn — Lost Leads Reactivation Email)",
      fr: "Comment enregistrer un filtre de destinataires pour une utilisation ultérieure ? (Odoo Learn — E-mail de réactivation des leads perdus)",
    },
    correct: {
      en: "Click the ‘Disk’ icon > Enter a title for the filter > Click ‘Add’",
      fr: "Click the ‘Disk’ icon > Enter a title for the filter > Click ‘Add’",
    },
    distractors: [
      { en: "Click the ‘Star’ icon > Enter a title for the filter > Click ‘Save’", fr: "Click the ‘Star’ icon > Enter a title for the filter > Click ‘Save’" },
      { en: "Click the ‘Thumbs Up’ icon > Enter a title for the filter > Click ‘Add’", fr: "Click the ‘Thumbs Up’ icon > Enter a title for the filter > Click ‘Add’" },
      { en: "Click the ‘Smiley Face’ icon > Enter a title for the filter > Click ‘Favorite’", fr: "Click the ‘Smiley Face’ icon > Enter a title for the filter > Click ‘Favorite’" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lost Leads Reactivation Email): Click the ‘Disk’ icon > Enter a title for the filter > Click ‘Add’",
      fr: "Source Odoo Learn (Lost Leads Reactivation Email): Click the ‘Disk’ icon > Enter a title for the filter > Click ‘Add’",
    },
  }),
  complexQ({
    id: "mkt-054",
    module: "marketing",
    text: {
      en: "What do you need in order to send SMS mailings with Odoo? (Odoo Learn — SMS Marketing)",
      fr: "What do you need in order to send SMS mailings with Odoo? (Odoo Learn — Marketing par SMS)",
    },
    correct: {
      en: "IAP Credits.",
      fr: "IAP Credits.",
    },
    distractors: [
      { en: "Message Money.", fr: "Message Money." },
      { en: "SMS Bucks.", fr: "SMS Bucks." },
      { en: "Odoo Dollars.", fr: "Odoo Dollars." },
    ],
    explanation: {
      en: "Source Odoo Learn (SMS Marketing): IAP Credits.",
      fr: "Source Odoo Learn (SMS Marketing): IAP Credits.",
    },
  }),
  complexQ({
    id: "mkt-055",
    module: "marketing",
    text: {
      en: "How do you give customers the power to unsubscribe themselves from SMS mailings? (Odoo Learn — SMS Marketing)",
      fr: "How do you give customers the power to unsubscribe themselves from SMS mailings? (Odoo Learn — Marketing par SMS)",
    },
    correct: {
      en: "Activate the ‘Include Opt-out link’ feature.",
      fr: "Activate the ‘Include Opt-out link’ feature.",
    },
    distractors: [
      { en: "Activate the ‘Customer Portal’ feature.", fr: "Activate the ‘Customer Portal’ feature." },
      { en: "Activate the ‘I’m Done’ feature.", fr: "Activate the ‘I’m Done’ feature." },
      { en: "It’s impossible.", fr: "It’s impossible." },
    ],
    explanation: {
      en: "Source Odoo Learn (SMS Marketing): Activate the ‘Include Opt-out link’ feature.",
      fr: "Source Odoo Learn (SMS Marketing): Activate the ‘Include Opt-out link’ feature.",
    },
  }),
  complexQ({
    id: "mkt-056",
    module: "marketing",
    text: {
      en: "When testing SMS mailings, you can send it to… (Odoo Learn — SMS Marketing)",
      fr: "When testing SMS mailings, you can send it to… (Odoo Learn — Marketing par SMS)",
    },
    correct: {
      en: "Multiple phone numbers.",
      fr: "Multiple phone numbers.",
    },
    distractors: [
      { en: "Only one phone number.", fr: "Only one phone number." },
      { en: "Only phone numbers of coworkers.", fr: "Only phone numbers of coworkers." },
      { en: "Odoo doesn’t provide SMS tests.", fr: "Odoo doesn’t provide SMS tests." },
    ],
    explanation: {
      en: "Source Odoo Learn (SMS Marketing): Multiple phone numbers.",
      fr: "Source Odoo Learn (SMS Marketing): Multiple phone numbers.",
    },
  }),
  complexQ({
    id: "mkt-057",
    module: "marketing",
    text: {
      en: "What is necessary in order to send SMS messages through Odoo? (Odoo Learn — Your First SMS Marketing Message)",
      fr: "What is necessary in order to send SMS messages through Odoo? (Odoo Learn — Your First SMS Marketing Message)",
    },
    correct: {
      en: "IAP credits",
      fr: "IAP credits",
    },
    distractors: [
      { en: "SMS credits", fr: "SMS credits" },
      { en: "LOL credits", fr: "LOL credits" },
      { en: "TXT credits", fr: "TXT credits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your First SMS Marketing Message): IAP credits",
      fr: "Source Odoo Learn (Your First SMS Marketing Message): IAP credits",
    },
  }),
  complexQ({
    id: "mkt-058",
    module: "marketing",
    text: {
      en: "On an SMS form, what is the purpose of the ‘Title’ field? (Odoo Learn — Your First SMS Marketing Message)",
      fr: "On an SMS form, what is the purpose of the ‘Title’ field? (Odoo Learn — Your First SMS Marketing Message)",
    },
    correct: {
      en: "Internal reference *only*, the recipient(s) won’t see it",
      fr: "Internal reference *only*, the recipient(s) won’t see it",
    },
    distractors: [
      { en: "External reference *only*, the recipient(s) sees it on their message", fr: "External reference *only*, the recipient(s) sees it on their message" },
      { en: "External reference *only*, the recipient(s) won’t see it", fr: "External reference *only*, the recipient(s) won’t see it" },
      { en: "Internal reference *only*, the recipient(s) sees it on their message", fr: "Internal reference *only*, the recipient(s) sees it on their message" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your First SMS Marketing Message): Internal reference *only*, the recipient(s) won’t see it",
      fr: "Source Odoo Learn (Your First SMS Marketing Message): Internal reference *only*, the recipient(s) won’t see it",
    },
  }),
  complexQ({
    id: "mkt-059",
    module: "marketing",
    text: {
      en: "On the ‘A/B Tests’ tab, what button should be clicked to modify an existing SMS for test purposes? (Odoo Learn — Your First SMS Marketing Message)",
      fr: "On the ‘A/B Tests’ tab, what button should be clicked to modify an existing SMS for test purposes? (Odoo Learn — Your First SMS Marketing Message)",
    },
    correct: {
      en: "Create an Alternative Version",
      fr: "Create an Alternative Version",
    },
    distractors: [
      { en: "Modify Existing Version", fr: "Modify Existing Version" },
      { en: "Change Original Version", fr: "Change Original Version" },
      { en: "Write Test Version", fr: "Write Test Version" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your First SMS Marketing Message): Create an Alternative Version",
      fr: "Source Odoo Learn (Your First SMS Marketing Message): Create an Alternative Version",
    },
  }),
  complexQ({
    id: "mkt-060",
    module: "marketing",
    text: {
      en: "How can I add a social media account to the Social Marketing app? (Odoo Learn — Social Marketing Basics)",
      fr: "How can I add a social media account to the Social Marketing app? (Odoo Learn — Social Marketing Basics)",
    },
    correct: {
      en: "Both A and B",
      fr: "A et B",
    },
    distractors: [
      { en: "Click ‘Add Stream’ on the ‘Campaigns’ dashboard.", fr: "Click ‘Add Stream’ on the ‘Campaigns’ dashboard." },
      { en: "Click ‘Configuration > Social Media’ and click the corresponding  ‘Link account’ button.", fr: "Click ‘Configuration > Social Media’ and click the corresponding  ‘Link account’ button." },
      { en: "Click ‘Sync’ on the main Social Marketing dashboard", fr: "Click ‘Sync’ on the main Social Marketing dashboard" },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Basics): Both A and B",
      fr: "Source Odoo Learn (Social Marketing Basics): Both A and B",
    },
  }),
  complexQ({
    id: "mkt-061",
    module: "marketing",
    text: {
      en: "How can I post to social media? (Odoo Learn — Social Marketing Basics)",
      fr: "How can I post to social media? (Odoo Learn — Social Marketing Basics)",
    },
    correct: {
      en: "Click ‘New Post’ on the main Social Marketing dashboard.",
      fr: "Click ‘New Post’ on the main Social Marketing dashboard.",
    },
    distractors: [
      { en: "Click ‘Add Stream’ on the main Social Marketing dashboard.", fr: "Click ‘Add Stream’ on the main Social Marketing dashboard." },
      { en: "Click ‘New Stream’ on the main Social Marketing dashboard.", fr: "Click ‘New Stream’ on the main Social Marketing dashboard." },
      { en: "I can only post on the social media platform directly (i.e Facebook, Instagram), I cannot post directly from Odoo.", fr: "I can only post on the social media platform directly (i.e Facebook, Instagram), I cannot post directly from Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Basics): Click ‘New Post’ on the main Social Marketing dashboard.",
      fr: "Source Odoo Learn (Social Marketing Basics): Click ‘New Post’ on the main Social Marketing dashboard.",
    },
  }),
  complexQ({
    id: "mkt-062",
    module: "marketing",
    text: {
      en: "Can I schedule future social media posts? (Odoo Learn — Social Marketing Basics)",
      fr: "Can I schedule future social media posts? (Odoo Learn — Social Marketing Basics)",
    },
    correct: {
      en: "Yes, by selecting ‘Schedule later’ on the ‘Your Post’ form, and select the date and time to post using the calendar selector.",
      fr: "Yes, by selecting ‘Schedule later’ on the ‘Your Post’ form, and select the date and time to post using the calendar selector.",
    },
    distractors: [
      { en: "Yes, but future posts can be created for Facebook only; all other social media platforms must be posted immediately.", fr: "Yes, but future posts can be created for Facebook only; all other social media platforms must be posted immediately." },
      { en: "Yes, but only if there are no images used in the post.", fr: "Yes, but only if there are no images used in the post." },
      { en: "No, all posts are automatically posted immediately.", fr: "No, all posts are automatically posted immediately." },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Basics): Yes, by selecting ‘Schedule later’ on the ‘Your Post’ form, and select the date and time to post using the calendar selector.",
      fr: "Source Odoo Learn (Social Marketing Basics): Yes, by selecting ‘Schedule later’ on the ‘Your Post’ form, and select the date and time to post using the calendar selector.",
    },
  }),
  complexQ({
    id: "mkt-063",
    module: "marketing",
    text: {
      en: "How can I find all my campaigns? (Odoo Learn — Social Marketing Campaigns)",
      fr: "How can I find all my campaigns? (Odoo Learn — Social Marketing Campaigns)",
    },
    correct: {
      en: "Click ‘Campaigns’ in the top menu of the ‘Social Marketing’ app.",
      fr: "Click ‘Campaigns’ in the top menu of the ‘Social Marketing’ app.",
    },
    distractors: [
      { en: "Click ‘Posts’ in the top menu of the ‘Social Marketing’ app.", fr: "Click ‘Posts’ in the top menu of the ‘Social Marketing’ app." },
      { en: "Click ‘Feed’ in the top menu of the ‘Social Marketing’ app.", fr: "Click ‘Feed’ in the top menu of the ‘Social Marketing’ app." },
      { en: "Click ‘Visitors’ in the top menu of the ‘Social Marketing’ app.", fr: "Click ‘Visitors’ in the top menu of the ‘Social Marketing’ app." },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Campaigns): Click ‘Campaigns’ in the top menu of the ‘Social Marketing’ app.",
      fr: "Source Odoo Learn (Social Marketing Campaigns): Click ‘Campaigns’ in the top menu of the ‘Social Marketing’ app.",
    },
  }),
  complexQ({
    id: "mkt-064",
    module: "marketing",
    text: {
      en: "What is NOT a field on a campaign card? (Odoo Learn — Social Marketing Campaigns)",
      fr: "What is NOT a field on a campaign card? (Odoo Learn — Social Marketing Campaigns)",
    },
    correct: {
      en: "Streams",
      fr: "Streams",
    },
    distractors: [
      { en: "Campaign Name", fr: "Campaign Name" },
      { en: "Responsible", fr: "Responsible" },
      { en: "Tags", fr: "Tags" },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Campaigns): Streams",
      fr: "Source Odoo Learn (Social Marketing Campaigns): Streams",
    },
  }),
  complexQ({
    id: "mkt-065",
    module: "marketing",
    text: {
      en: "When a campaign is created, what stage does it appear in, by default? (Odoo Learn — Social Marketing Campaigns)",
      fr: "When a campaign is created, what stage does it appear in, by default? (Odoo Learn — Social Marketing Campaigns)",
    },
    correct: {
      en: "New",
      fr: "New",
    },
    distractors: [
      { en: "Running", fr: "Running" },
      { en: "Ended", fr: "Ended" },
      { en: "Sent", fr: "Sent" },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Campaigns): New",
      fr: "Source Odoo Learn (Social Marketing Campaigns): New",
    },
  }),
  complexQ({
    id: "mkt-066",
    module: "marketing",
    text: {
      en: "What feature needs to be activated in order for you to send SMS and Email messages in the Social Marketing application? (Odoo Learn — Social Marketing Campaign Channels)",
      fr: "What feature needs to be activated in order for you to send SMS and Email messages in the Social Marketing application? (Odoo Learn — Canaux de campagne de marketing social)",
    },
    correct: {
      en: "Mailing Campaigns (in Email Marketing app).",
      fr: "Campagnes de mailing (dans l'application Email Marketing).",
    },
    distractors: [
      { en: "SMS Allowance (in SMS Marketing app).", fr: "Allocation SMS (dans l'application SMS Marketing)." },
      { en: "Campaign Allowance (in Social Marketing app).", fr: "Allocation de campagne (dans l'application Social Marketing)." },
      { en: "It’s impossible.", fr: "It’s impossible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Campaign Channels): Mailing Campaigns (in Email Marketing app).",
      fr: "Source Odoo Learn (Canaux de campagne de marketing social) : Campagnes de mailing (dans l'application Email Marketing).",
    },
  }),
  complexQ({
    id: "mkt-067",
    module: "marketing",
    text: {
      en: "Why would you want to include an Opt-Out link in your SMS? (Odoo Learn — Social Marketing Campaign Channels)",
      fr: "Pourquoi voudriez-vous inclure un lien de désinscription dans votre SMS ? (Odoo Learn — Canaux de campagne de marketing social)",
    },
    correct: {
      en: "To give your customers the power to unsubscribe from the mailing.",
      fr: "Pour donner à vos clients le pouvoir de se désinscrire du mailing.",
    },
    distractors: [
      { en: "To give your boss the power to opt-out of your contract.", fr: "Pour donner à votre patron le pouvoir de se retirer de votre contrat." },
      { en: "To give your customers the power to buy credits from Odoo.", fr: "Pour donner à vos clients le pouvoir d’acheter des crédits auprès d’Odoo." },
      { en: "To give yourself a better chance of securing a lead/opportunity.", fr: "Pour vous donner une meilleure chance d’obtenir une piste/une opportunité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Campaign Channels): To give your customers the power to unsubscribe from the mailing.",
      fr: "Source Odoo Learn (Canaux de campagne de marketing social) : Pour donner à vos clients le pouvoir de se désinscrire du mailing.",
    },
  }),
  complexQ({
    id: "mkt-068",
    module: "marketing",
    text: {
      en: "How much content can you create for each channel? (Odoo Learn — Social Marketing Campaign Channels)",
      fr: "Quelle quantité de contenu pouvez-vous créer pour chaque chaîne ? (Odoo Learn — Canaux de campagne de marketing social)",
    },
    correct: {
      en: "As much as you want.",
      fr: "Autant que vous le souhaitez.",
    },
    distractors: [
      { en: "1 per channel.", fr: "1 par canal." },
      { en: "3 per channel.", fr: "3 par canal." },
      { en: "5 per channel.", fr: "5 par canal." },
    ],
    explanation: {
      en: "Source Odoo Learn (Social Marketing Campaign Channels): As much as you want.",
      fr: "Source Odoo Learn (Canaux de campagne de marketing social) : autant que vous le souhaitez.",
    },
  }),
  complexQ({
    id: "mkt-069",
    module: "marketing",
    text: {
      en: "Where should I go to activate the Push Notification option? (Odoo Learn — Push Notifications and Live Chat)",
      fr: "Où dois-je m'adresser pour activer l'option Push Notification ? (Odoo Learn — Notifications push et chat en direct)",
    },
    correct: {
      en: "Website app.",
      fr: "Application de site Web.",
    },
    distractors: [
      { en: "Settings app.", fr: "Application Paramètres." },
      { en: "Social Marketing app.", fr: "Application de marketing social." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Push Notifications and Live Chat): Website app.",
      fr: "Source Odoo Learn (Notifications Push et Live Chat) : Application de site Web.",
    },
  }),
  complexQ({
    id: "mkt-070",
    module: "marketing",
    text: {
      en: "What does the Push Target URL field does? (Odoo Learn — Push Notifications and Live Chat)",
      fr: "À quoi sert le champ Push Target URL ? (Odoo Learn — Notifications push et chat en direct)",
    },
    correct: {
      en: "It allows me to choose which of my website pages the user will land on when clicking on my message. The link will be also tracked.",
      fr: "Il me permet de choisir sur quelle page de mon site Web l'utilisateur atterrira en cliquant sur mon message. Le lien sera également suivi.",
    },
    distractors: [
      { en: "It allows me to choose the web page I’d like to track for that message.", fr: "Cela me permet de choisir la page Web que je souhaite suivre pour ce message." },
      { en: "It allows me to choose the web page I’d like to be shown on the foot of the message.", fr: "Cela me permet de choisir la page Web que je souhaite voir apparaître au pied du message." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Push Notifications and Live Chat): It allows me to choose which of my website pages the user will land on when clicking on my message. The link will be also tracked.",
      fr: "Source Odoo Learn (Notifications Push et Live Chat) : Cela me permet de choisir sur laquelle de mes pages de site Web l'utilisateur atterrira en cliquant sur mon message. Le lien sera également suivi.",
    },
  }),
  complexQ({
    id: "mkt-071",
    module: "marketing",
    text: {
      en: "Which of these am I able to see when opening a visitor's record? (Odoo Learn — Push Notifications and Live Chat)",
      fr: "Lequel de ces éléments puis-je voir lors de l'ouverture de la fiche d'un visiteur ? (Odoo Learn — Notifications push et chat en direct)",
    },
    correct: {
      en: "All of the above.",
      fr: "Tout ce qui précède.",
    },
    distractors: [
      { en: "Number of leads/opportunities.", fr: "Nombre de prospects/opportunités." },
      { en: "Number of visits/sessions.", fr: "Nombre de visites/séances." },
      { en: "Visited pages.", fr: "Pages visitées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Push Notifications and Live Chat): All of the above.",
      fr: "Source Odoo Learn (Notifications Push et Live Chat) : Tout ce qui précède.",
    },
  }),
  complexQ({
    id: "mkt-072",
    module: "marketing",
    text: {
      en: "When you officially start your campaign, what status does it change to…? (Odoo Learn — Marketing Automation Essentials)",
      fr: "Lorsque vous démarrez officiellement votre campagne, quel statut change-t-elle en… ? (Odoo Learn — Les essentiels de l'automatisation du marketing)",
    },
    correct: {
      en: "Running.",
      fr: "En cours d'exécution.",
    },
    distractors: [
      { en: "Started.", fr: "Commencé." },
      { en: "Closed.", fr: "Fermé." },
      { en: "Begun.", fr: "Commencé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Automation Essentials): Running.",
      fr: "Source Odoo Learn (Marketing Automation Essentials) : en cours d'exécution.",
    },
  }),
  complexQ({
    id: "mkt-073",
    module: "marketing",
    text: {
      en: "If you can’t find the specific option you’re looking for in the ‘Target’ drop-down menu, what should you do? (Odoo Learn — Marketing Automation Essentials)",
      fr: "Si vous ne trouvez pas l’option spécifique que vous recherchez dans le menu déroulant « Cible », que devez-vous faire ? (Odoo Learn — Les essentiels de l'automatisation du marketing)",
    },
    correct: {
      en: "Select ‘Search More’ on the ‘Target’ drop-down menu.",
      fr: "Sélectionnez « Rechercher plus » dans le menu déroulant « Cible ».",
    },
    distractors: [
      { en: "Log out of your customer portal, then log back in.", fr: "Déconnectez-vous de votre portail client, puis reconnectez-vous." },
      { en: "Contact Odoo Tech Support.", fr: "Contactez le support technique Odoo." },
      { en: "Nothing. Odoo doesn’t provide that option.", fr: "Rien. Odoo ne propose pas cette option." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Automation Essentials): Select ‘Search More’ on the ‘Target’ drop-down menu.",
      fr: "Source Odoo Learn (Marketing Automation Essentials) : sélectionnez « Rechercher plus » dans le menu déroulant « Cible ».",
    },
  }),
  complexQ({
    id: "mkt-074",
    module: "marketing",
    text: {
      en: "The ‘Records’ of a marketing campaign represent… (Odoo Learn — Marketing Automation Essentials)",
      fr: "Les « Records » d’une campagne marketing représentent… (Odoo Learn — Les essentiels de l'automatisation du marketing)",
    },
    correct: {
      en: "The number of contacts that fit the ‘Filter’ criteria you just configured.",
      fr: "Le nombre de contacts qui correspondent aux critères « Filtre » que vous venez de configurer.",
    },
    distractors: [
      { en: "The number of times this campaign has been used.", fr: "Le nombre de fois que cette campagne a été utilisée." },
      { en: "The number of users with Admin Access.", fr: "Le nombre d'utilisateurs disposant d'un accès administrateur." },
      { en: "The number of campaigns that have been generated in your database.", fr: "Le nombre de campagnes générées dans votre base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Automation Essentials): The number of contacts that fit the ‘Filter’ criteria you just configured.",
      fr: "Source Odoo Learn (Marketing Automation Essentials) : Le nombre de contacts qui correspondent aux critères « Filtre » que vous venez de configurer.",
    },
  }),
  complexQ({
    id: "mkt-075",
    module: "marketing",
    text: {
      en: "Can you create an email template on-the-fly? (Odoo Learn — Marketing Activities)",
      fr: "Pouvez-vous créer un modèle d'e-mail à la volée ? (Odoo Learn — Activités de marketing)",
    },
    correct: {
      en: "Yes, of course.",
      fr: "Oui bien sûr.",
    },
    distractors: [
      { en: "Yes, with the Template Add-On installed.", fr: "Oui, avec le module complémentaire de modèle installé." },
      { en: "Yes, with signed permission from an administrator.", fr: "Oui, avec l'autorisation signée d'un administrateur." },
      { en: "No, it’s impossible.", fr: "Non, c'est impossible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Activities): Yes, of course.",
      fr: "Source Odoo Learn (Activités Marketing) : Oui, bien sûr.",
    },
  }),
  complexQ({
    id: "mkt-076",
    module: "marketing",
    text: {
      en: "What feature should you consider when creating a time-sensitive activity on a campaign? (Odoo Learn — Marketing Activities)",
      fr: "Quelle fonctionnalité devez-vous prendre en compte lors de la création d'une activité urgente sur une campagne ? (Odoo Learn — Activités de marketing)",
    },
    correct: {
      en: "Expiry Duration.",
      fr: "Durée d'expiration.",
    },
    distractors: [
      { en: "Exclude.", fr: "Exclure." },
      { en: "Expiration Date.", fr: "Date d'expiration." },
      { en: "Expire.", fr: "Expirer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Activities): Expiry Duration.",
      fr: "Source Odoo Learn (Activités marketing) : Durée d’expiration.",
    },
  }),
  complexQ({
    id: "mkt-077",
    module: "marketing",
    text: {
      en: "What type of activities automate internal, backend actions in your database? (Odoo Learn — Marketing Activities)",
      fr: "Quels types d'activités automatisent les actions internes et back-end dans votre base de données ? (Odoo Learn — Activités de marketing)",
    },
    correct: {
      en: "Server Action.",
      fr: "Action du serveur.",
    },
    distractors: [
      { en: "Enterprise Activity.", fr: "Activité d'entreprise." },
      { en: "Server Activity.", fr: "Activité du serveur." },
      { en: "Database Action.", fr: "Action de base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Marketing Activities): Server Action.",
      fr: "Source Odoo Learn (Activités marketing) : Action serveur.",
    },
  }),
  complexQ({
    id: "mkt-078",
    module: "marketing",
    text: {
      en: "When you click ‘Launch a Test,’ can you create a record to test on-the-fly? (Odoo Learn — Testing/Running Campaigns)",
      fr: "Lorsque vous cliquez sur « Lancer un test », pouvez-vous créer un enregistrement pour tester à la volée ? (Odoo Learn — Campagnes de test/exécution)",
    },
    correct: {
      en: "Yes, without any problems whatsoever.",
      fr: "Oui, sans aucun problème.",
    },
    distractors: [
      { en: "Yes, but only if you’ve met the contact in person before.", fr: "Oui, mais seulement si vous avez déjà rencontré le contact en personne." },
      { en: "Yes, but only if you have the ‘Test Contact’ module installed.", fr: "Oui, mais seulement si vous avez installé le module « Test Contact »." },
      { en: "No, it’s impossible.", fr: "Non, c'est impossible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Testing/Running Campaigns): Yes, without any problems whatsoever.",
      fr: "Source Odoo Learn (Test/Campagnes en cours) : Oui, sans aucun problème.",
    },
  }),
  complexQ({
    id: "mkt-079",
    module: "marketing",
    text: {
      en: "How do you check the updated workflow progress of a campaign test in Odoo? (Odoo Learn — Testing/Running Campaigns)",
      fr: "Comment vérifier la progression du workflow mis à jour d'un test de campagne dans Odoo ? (Odoo Learn — Campagnes de test/exécution)",
    },
    correct: {
      en: "Refresh the page.",
      fr: "Actualisez la page.",
    },
    distractors: [
      { en: "Log out, and log back in immediately.", fr: "Déconnectez-vous et reconnectez-vous immédiatement." },
      { en: "Close the application, and re-open it immediately.", fr: "Fermez l'application et rouvrez-la immédiatement." },
      { en: "It’s impossible.", fr: "It’s impossible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Testing/Running Campaigns): Refresh the page.",
      fr: "Source Odoo Learn (Test/Campagnes en cours) : Actualisez la page.",
    },
  }),
  complexQ({
    id: "mkt-080",
    module: "marketing",
    text: {
      en: "If you set up a ‘Server Action’ to move a Lead/Opportunity to the next stage in your workflow when triggered, where would you go to confirm that change? (Odoo Learn — Testing/Running Campaigns)",
      fr: "Si vous configurez une « action du serveur » pour déplacer un prospect/une opportunité vers l'étape suivante de votre flux de travail lorsqu'elle est déclenchée, où iriez-vous pour confirmer ce changement ? (Odoo Learn — Campagnes de test/exécution)",
    },
    correct: {
      en: "On the CRM dashboard.",
      fr: "Sur le tableau de bord CRM.",
    },
    distractors: [
      { en: "On the main Odoo dashboard.", fr: "Sur le tableau de bord principal d'Odoo." },
      { en: "On the Projects dashboard.", fr: "Sur le tableau de bord Projets." },
      { en: "On the Customer Portal.", fr: "Sur le portail client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Testing/Running Campaigns): On the CRM dashboard.",
      fr: "Source Odoo Learn (Tests/Campagnes en cours) : Sur le tableau de bord CRM.",
    },
  }),
];
