import { complexQ, mcq3Q } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const studioLearnQuestions = [
complexQ({
    id: "stu-026",
    module: "studio",
    text: {
      en: "Within how many hours does an Odoo database need to be activated to ensure the full 15 day trial? (Odoo Learn — Create an Odoo Database)",
      fr: "Dans combien d’heures une base de données Odoo doit-elle être activée pour garantir un essai complet de 15 jours ? (Odoo Learn — Créer une base de données Odoo)",
    },
    correct: {
      en: "Three hours.",
      fr: "Trois heures.",
    },
    distractors: [
      { en: "Four hours.", fr: "Quatre heures." },
      { en: "Five hours.", fr: "Cinq heures." },
      { en: "Zero hours, the database is automatically activated when you set it up.", fr: "Zéro heure, la base de données est automatiquement activée lors de sa configuration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create an Odoo Database): Three hours.",
      fr: "Source Odoo Learn (Créer une base de données Odoo) : Trois heures.",
    },
  }),
complexQ({
    id: "stu-027",
    module: "studio",
    text: {
      en: "What happens when a user is created in an Odoo database? (Odoo Learn — Create an Odoo Database)",
      fr: "Que se passe-t-il lorsqu'un utilisateur est créé dans une base de données Odoo ? (Odoo Learn — Créer une base de données Odoo)",
    },
    correct: {
      en: "An email is sent with a link to create a secure password to the Odoo database.",
      fr: "Un email est envoyé avec un lien pour créer un mot de passe sécurisé vers la base de données Odoo.",
    },
    distractors: [
      { en: "A password is automatically created and sent to the user’s email address.", fr: "Un mot de passe est automatiquement créé et envoyé à l’adresse email de l’utilisateur." },
      { en: "No email is sent, the password appears on the screen.", fr: "Aucun email n'est envoyé, le mot de passe apparaît à l'écran." },
      { en: "You can’t create users from the main dashboard.", fr: "Vous ne pouvez pas créer d'utilisateurs à partir du tableau de bord principal." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create an Odoo Database): An email is sent with a link to create a secure password to the Odoo database.",
      fr: "Source Odoo Learn (Créer une base de données Odoo) : Un email est envoyé avec un lien pour créer un mot de passe sécurisé pour la base de données Odoo.",
    },
  }),
complexQ({
    id: "stu-028",
    module: "studio",
    text: {
      en: "Which is true about installing new applications on the Odoo database? (Odoo Learn — Create an Odoo Database)",
      fr: "Qu’est-ce qui est vrai concernant l’installation de nouvelles applications sur la base de données Odoo ? (Odoo Learn — Créer une base de données Odoo)",
    },
    correct: {
      en: "As an administrator, go to the Apps module and click install on the application that needs to be installed.",
      fr: "En tant qu'administrateur, accédez au module Applications et cliquez sur Installer sur l'application qui doit être installée.",
    },
    distractors: [
      { en: "Only your account manager can install new applications.", fr: "Seul votre responsable de compte peut installer de nouvelles applications." },
      { en: "Any user in the database can install applications.", fr: "N'importe quel utilisateur de la base de données peut installer des applications." },
      { en: "Go to the Settings app and install applications from the list of applications.", fr: "Accédez à l'application Paramètres et installez les applications à partir de la liste des applications." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create an Odoo Database): As an administrator, go to the Apps module and click install on the application that needs to be installed.",
      fr: "Source Odoo Learn (Créer une base de données Odoo) : En tant qu'administrateur, accédez au module Applications et cliquez sur installer sur l'application qui doit être installée.",
    },
  }),
complexQ({
    id: "stu-029",
    module: "studio",
    text: {
      en: "Where can two factor authentication can be turned on? (Odoo Learn — Navigate in Odoo)",
      fr: "Où l’authentification à deux facteurs peut-elle être activée ? (Odoo Learn — Naviguer dans Odoo)",
    },
    correct: {
      en: "In “My profile” under the “Account Security” tab",
      fr: "Dans « Mon profil » sous l'onglet « Sécurité du compte »",
    },
    distractors: [
      { en: "Odoo doesn’t offer two factor authentication", fr: "Odoo n'offre pas d'authentification à deux facteurs" },
      { en: "In “My profile” under the “Preferences” tab", fr: "Dans « Mon profil » sous l'onglet « Préférences »" },
      { en: "Go to Configuration > Security", fr: "Allez dans Configuration > Sécurité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Navigate in Odoo): In “My profile” under the “Account Security” tab",
      fr: "Source Odoo Learn (Naviguer dans Odoo) : Dans « Mon profil » sous l'onglet « Sécurité du compte »",
    },
  }),
complexQ({
    id: "stu-030",
    module: "studio",
    text: {
      en: "What does the red dot represent in the upper-right corner of Odoo’s dashboard? (Odoo Learn — Navigate in Odoo)",
      fr: "Que représente le point rouge dans le coin supérieur droit du tableau de bord d’Odoo ? (Odoo Learn — Naviguer dans Odoo)",
    },
    correct: {
      en: "A time-tracking feature, allowing the user to check in (and out) of the Attendance app",
      fr: "Une fonction de suivi du temps, permettant à l'utilisateur de s'enregistrer (et de sortir) de l'application Attendance",
    },
    distractors: [
      { en: "A recording feature, allowing the user to record steps taken on a record (and rewind)", fr: "Une fonction d'enregistrement, permettant à l'utilisateur d'enregistrer les étapes effectuées sur un enregistrement (et de rembobiner)" },
      { en: "A link/unlink feature, allowing the user to work offline", fr: "Une fonctionnalité de lien/dissociation, permettant à l'utilisateur de travailler hors ligne" },
      { en: "A check-in feature, allowing users to check-in to their reservations in the POS app", fr: "Une fonction d'enregistrement, permettant aux utilisateurs de s'enregistrer sur leurs réservations dans l'application POS" },
    ],
    explanation: {
      en: "Source Odoo Learn (Navigate in Odoo): A time-tracking feature, allowing the user to check in (and out) of the Attendance app",
      fr: "Source Odoo Learn (Naviguer dans Odoo) : une fonctionnalité de suivi du temps, permettant à l'utilisateur de s'enregistrer (et de sortir) de l'application Attendance",
    },
  }),
complexQ({
    id: "stu-031",
    module: "studio",
    text: {
      en: "In Odoo, what are *all* the different “views” that are available to view records? (Odoo Learn — Navigate in Odoo)",
      fr: "Dans Odoo, quelles sont *toutes* les différentes « vues » disponibles pour visualiser les enregistrements ? (Odoo Learn — Naviguer dans Odoo)",
    },
    correct: {
      en: "List, Kanban, Calendar, Pivot, Graph, Activity.",
      fr: "Liste, Kanban, Calendrier, Pivot, Graphique, Activité.",
    },
    distractors: [
      { en: "List, Kanban, Color Coded, Graph, Activity.", fr: "Liste, Kanban, code couleur, graphique, activité." },
      { en: "List, Kanban, Calendar, Pivot, Activity, By Shape.", fr: "Liste, Kanban, Calendrier, Pivot, Activité, Par forme." },
      { en: "Kanban, Pivot, Graph, Word Cloud, Activity.", fr: "Kanban, Pivot, Graphique, Nuage de mots, Activité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Navigate in Odoo): List, Kanban, Calendar, Pivot, Graph, Activity.",
      fr: "Source Odoo Learn (Naviguer dans Odoo) : Liste, Kanban, Calendrier, Pivot, Graphique, Activité.",
    },
  }),
complexQ({
    id: "stu-032",
    module: "studio",
    text: {
      en: "What two credentials do you need to copy from the Google console, and add into the Odoo database, in order to complete the sync? (Odoo Learn — Google Calendar Sync)",
      fr: "Quelles sont les deux informations d'identification devez-vous copier depuis la console Google et ajouter à la base de données Odoo afin de terminer la synchronisation ? (Odoo Learn — Synchronisation du calendrier Google)",
    },
    correct: {
      en: "Client ID and Client Secret",
      fr: "ID client et secret client",
    },
    distractors: [
      { en: "Client ID and API Key", fr: "ID client et clé API" },
      { en: "Client Secret and URI", fr: "Secret client et URI" },
      { en: "URI and API Key", fr: "URI et clé API" },
    ],
    explanation: {
      en: "Source Odoo Learn (Google Calendar Sync): Client ID and Client Secret",
      fr: "Source Odoo Learn (Google Calendar Sync) : ID client et secret client",
    },
  }),
complexQ({
    id: "stu-033",
    module: "studio",
    text: {
      en: "Which supported account type option should you choose for sync to work properly on a database? (Odoo Learn — Outlook Calendar Sync)",
      fr: "Quelle option de type de compte prise en charge devez-vous choisir pour que la synchronisation fonctionne correctement sur une base de données ? (Odoo Learn — Synchronisation du calendrier Outlook)",
    },
    correct: {
      en: "Accounts in Any organizational directory AND personal Microsoft accounts",
      fr: "Comptes dans n’importe quel répertoire organisationnel ET comptes Microsoft personnels",
    },
    distractors: [
      { en: "Accounts in this organizational directory only", fr: "Comptes dans ce répertoire organisationnel uniquement" },
      { en: "Personal Microsoft accounts only", fr: "Comptes Microsoft personnels uniquement" },
      { en: "Guest accounts only", fr: "Comptes invités uniquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Outlook Calendar Sync): Accounts in Any organizational directory AND personal Microsoft accounts",
      fr: "Source Odoo Learn (Synchronisation du calendrier Outlook) : Comptes dans n'importe quel répertoire organisationnel ET comptes Microsoft personnels",
    },
  }),
complexQ({
    id: "stu-034",
    module: "studio",
    text: {
      en: "How can the user filter quotations from the previous month? (Odoo Learn — Filters and Views)",
      fr: "Comment l’utilisateur peut-il filtrer les cotations du mois précédent ? (Odoo Learn — Filtres et vues)",
    },
    correct: {
      en: "By choosing Create Date > Previous Month",
      fr: "En choisissant Créer une date > Mois précédent",
    },
    distractors: [
      { en: "By changing the salesperson", fr: "En changeant de vendeur" },
      { en: "By selecting a Kanban filter", fr: "En sélectionnant un filtre Kanban" },
      { en: "By applying a default view", fr: "En appliquant une vue par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Filters and Views): By choosing Create Date > Previous Month",
      fr: "Source Odoo Learn (Filtres et Vues) : En choisissant Date de création > Mois précédent",
    },
  }),
complexQ({
    id: "stu-035",
    module: "studio",
    text: {
      en: "After dragging a sales order to another salesperson in Kanban view, where can the user confirm the change? (Odoo Learn — Filters and Views)",
      fr: "Après avoir fait glisser une commande client vers un autre vendeur dans la vue Kanban, où l'utilisateur peut-il confirmer la modification ? (Odoo Learn — Filtres et vues)",
    },
    correct: {
      en: "Other Info tab",
      fr: "Onglet Autres informations",
    },
    distractors: [
      { en: "Settings tab", fr: "Onglet Paramètres" },
      { en: "Filters menu", fr: "Menu Filtres" },
      { en: "Order Lines tab", fr: "Onglet Lignes de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Filters and Views): Other Info tab",
      fr: "Source Odoo Learn (Filtres et Vues) : Onglet Autres informations",
    },
  }),
complexQ({
    id: "stu-036",
    module: "studio",
    text: {
      en: "What does the “Add Custom Filters” option allow? (Odoo Learn — Filters and Views)",
      fr: "Que permet l'option « Ajouter des filtres personnalisés » ? (Odoo Learn — Filtres et vues)",
    },
    correct: {
      en: "Filtering using any 'field' in Odoo, such as Abandoned Carts or dates",
      fr: "Filtrage à l'aide de n'importe quel « champ » dans Odoo, tel que les paniers abandonnés ou les dates",
    },
    distractors: [
      { en: "Exporting filters to a file", fr: "Exporter des filtres vers un fichier" },
      { en: "Editing user permissions", fr: "Modification des autorisations utilisateur" },
      { en: "Sharing filters outside of Odoo", fr: "Partager des filtres en dehors d'Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Filters and Views): Filtering using any 'field' in Odoo, such as Abandoned Carts or dates",
      fr: "Source Odoo Learn (Filtres et vues) : Filtrage à l'aide de n'importe quel « champ » dans Odoo, tel que les paniers abandonnés ou les dates",
    },
  }),
complexQ({
    id: "stu-037",
    module: "studio",
    text: {
      en: "Once a meeting is saved, where can it be viewed from within the CRM record? (Odoo Learn — Odoo Calendar)",
      fr: "Une fois qu'une réunion est enregistrée, où peut-elle être consultée à partir de l'enregistrement CRM ? (Odoo Learn — Calendrier Odoo)",
    },
    correct: {
      en: "Under the Next Meeting smart button and Planned Activities in Chatter",
      fr: "Sous le bouton intelligent Prochaine réunion et Activités planifiées dans Chatter",
    },
    distractors: [
      { en: "Only in the main Calendar app", fr: "Uniquement dans l'application Calendrier principale" },
      { en: "Inside the Settings menu of the CRM app", fr: "Dans le menu Paramètres de l'application CRM" },
      { en: "Only on the Dashboard screen", fr: "Uniquement sur l'écran du tableau de bord" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Calendar): Under the Next Meeting smart button and Planned Activities in Chatter",
      fr: "Source Odoo Learn (Calendrier Odoo) : sous le bouton intelligent Prochaine réunion et les activités planifiées dans Chatter",
    },
  }),
complexQ({
    id: "stu-038",
    module: "studio",
    text: {
      en: "Which of the following is a view offered by the Contacts app? (Odoo Learn — Contacts - Views & More)",
      fr: "Parmi les éléments suivants, lequel est une vue proposée par l'application Contacts ? (Odoo Learn — Contacts - Vues et plus)",
    },
    correct: {
      en: "Hierarchy view.",
      fr: "Vue hiérarchique.",
    },
    distractors: [
      { en: "Gant view.", fr: "Vue Gant." },
      { en: "Gaussian view.", fr: "Vue gaussienne." },
      { en: "Heat map view.", fr: "Vue de la carte thermique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contacts - Views & More): Hierarchy view.",
      fr: "Source Odoo Learn (Contacts - Vues et plus) : Vue hiérarchique.",
    },
  }),
complexQ({
    id: "stu-039",
    module: "studio",
    text: {
      en: "Which of the following does NOT determine the tabs, fields, and smart buttons available when viewing a Contact? (Odoo Learn — Contacts - Views & More)",
      fr: "Lequel des éléments suivants ne détermine PAS les onglets, champs et boutons intelligents disponibles lors de l'affichage d'un contact ? (Odoo Learn — Contacts - Vues et plus)",
    },
    correct: {
      en: "If you’re a personal or enterprise Odoo user.",
      fr: "Si vous êtes un utilisateur Odoo personnel ou professionnel.",
    },
    distractors: [
      { en: "Your level of database access.", fr: "Votre niveau d'accès à la base de données." },
      { en: "The specific apps installed on your database.", fr: "Les applications spécifiques installées sur votre base de données." },
      { en: "The currently active view for the Contacts app.", fr: "La vue actuellement active pour l'application Contacts." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contacts - Views & More): If you’re a personal or enterprise Odoo user.",
      fr: "Source Odoo Learn (Contacts - Vues et plus) : Si vous êtes un utilisateur Odoo personnel ou professionnel.",
    },
  }),
complexQ({
    id: "stu-040",
    module: "studio",
    text: {
      en: "What does the “Deduplicate” function do when merging contacts? (Odoo Learn — Contacts - Views & More)",
      fr: "Que fait la fonction « Dédupliquer » lors de la fusion de contacts ? (Odoo Learn — Contacts - Vues et plus)",
    },
    correct: {
      en: "Search the Contacts app for duplicate contacts and remove them after successfully merging other contacts.",
      fr: "Recherchez dans l'application Contacts les contacts en double et supprimez-les après avoir fusionné avec succès d'autres contacts.",
    },
    distractors: [
      { en: "Undo a contact merge.", fr: "Annuler une fusion de contacts." },
      { en: "Deletes any duplicate data between merged contacts, creating a clean new contact for you to fill out.", fr: "Supprime toutes les données en double entre les contacts fusionnés, créant ainsi un nouveau contact propre à remplir." },
      { en: "Scans the Contacts app for all contacts with duplicate names and erases all but whichever ones were last created..", fr: "Analyse l'application Contacts pour tous les contacts avec des noms en double et les efface tous, sauf ceux qui ont été créés en dernier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contacts - Views & More): Search the Contacts app for duplicate contacts and remove them after successfully merging other contacts.",
      fr: "Source Odoo Learn (Contacts - Vues et plus) : recherchez dans l'application Contacts les contacts en double et supprimez-les après avoir fusionné avec succès d'autres contacts.",
    },
  }),
complexQ({
    id: "stu-041",
    module: "studio",
    text: {
      en: "When you select multiple records in the Contacts list view, what button appears? (Odoo Learn — Importing and Exporting Data)",
      fr: "Lorsque vous sélectionnez plusieurs enregistrements dans la vue Liste de contacts, quel bouton apparaît ? (Odoo Learn — Importation et exportation de données)",
    },
    correct: {
      en: "Actions",
      fr: "Actes",
    },
    distractors: [
      { en: "Import", fr: "Importer" },
      { en: "Export", fr: "Exporter" },
      { en: "Edit", fr: "Modifier" },
    ],
    explanation: {
      en: "Source Odoo Learn (Importing and Exporting Data): Actions",
      fr: "Source Odoo Learn (Importer et Exporter des Données) : Actions",
    },
  }),
complexQ({
    id: "stu-042",
    module: "studio",
    text: {
      en: "Which option makes exported files ready for re-import into Odoo? (Odoo Learn — Importing and Exporting Data)",
      fr: "Quelle option rend les fichiers exportés prêts à être réimportés dans Odoo ? (Odoo Learn — Importation et exportation de données)",
    },
    correct: {
      en: "I want to update data",
      fr: "Je veux mettre à jour les données",
    },
    distractors: [
      { en: "Save Template", fr: "Enregistrer le modèle" },
      { en: "Import Mode", fr: "Mode d'importation" },
      { en: "Field Mapping", fr: "Cartographie des champs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Importing and Exporting Data): I want to update data",
      fr: "Source Odoo Learn (Importation et Exportation de Données) : Je souhaite mettre à jour les données",
    },
  }),
complexQ({
    id: "stu-043",
    module: "studio",
    text: {
      en: "To begin importing data, where do you click in Odoo? (Odoo Learn — Importing and Exporting Data)",
      fr: "Pour commencer à importer des données, où cliquez-vous dans Odoo ? (Odoo Learn — Importation et exportation de données)",
    },
    correct: {
      en: "Gear icon → Import Records",
      fr: "Icône d'engrenage → Importer des enregistrements",
    },
    distractors: [
      { en: "Import button in the menu", fr: "Bouton Importer dans le menu" },
      { en: "File → Upload", fr: "Fichier → Télécharger" },
      { en: "Tools → Load File", fr: "Outils → Charger le fichier" },
    ],
    explanation: {
      en: "Source Odoo Learn (Importing and Exporting Data): Gear icon → Import Records",
      fr: "Source Odoo Learn (Importation et Exportation de données) : icône d'engrenage → Importer des enregistrements",
    },
  }),
complexQ({
    id: "stu-044",
    module: "studio",
    text: {
      en: "Why would I set up group access rights for new hires rather than setting permissions for each user individually? (Odoo Learn — Group Access Rights)",
      fr: "Pourquoi devrais-je configurer des droits d'accès de groupe pour les nouvelles recrues plutôt que de définir des autorisations pour chaque utilisateur individuellement ? (Odoo Learn — Droits d'accès du groupe)",
    },
    correct: {
      en: "The group will exist even if the users in it get swapped out, and it’s easier to manage multiple users that need the same permissions this way",
      fr: "Le groupe existera même si les utilisateurs qui le composent sont remplacés, et il est ainsi plus facile de gérer plusieurs utilisateurs ayant besoin des mêmes autorisations.",
    },
    distractors: [
      { en: "It allows new hires to have complete control over the CRM app", fr: "Il permet aux nouvelles recrues d'avoir un contrôle total sur l'application CRM" },
      { en: "It's quicker to set up permissions for each user", fr: "Il est plus rapide de configurer les autorisations pour chaque utilisateur" },
      { en: "It prevents new hires from seeing what’s going on in the CRM app", fr: "Cela empêche les nouvelles recrues de voir ce qui se passe dans l’application CRM" },
    ],
    explanation: {
      en: "Source Odoo Learn (Group Access Rights): The group will exist even if the users in it get swapped out, and it’s easier to manage multiple users that need the same permissions this way",
      fr: "Source Odoo Learn (Droits d'accès au groupe) : le groupe existera même si les utilisateurs qui le composent sont échangés, et il est plus facile de gérer plusieurs utilisateurs qui ont besoin des mêmes autorisations de cette façon.",
    },
  }),
complexQ({
    id: "stu-045",
    module: "studio",
    text: {
      en: "What does setting the ‘Read Access’ permission for the ‘crm.new-employee.pls.update’ access right mean for the users in that access group? (Odoo Learn — Group Access Rights)",
      fr: "Que signifie la définition de l'autorisation « Accès en lecture » pour le droit d'accès « crm.new-employee.pls.update » pour les utilisateurs de ce groupe d'accès ? (Odoo Learn — Droits d'accès du groupe)",
    },
    correct: {
      en: "They can only view lead probabilities",
      fr: "Ils ne peuvent voir que les probabilités de prospects",
    },
    distractors: [
      { en: "They can edit and delete lead probabilities", fr: "Ils peuvent modifier et supprimer les probabilités de prospects" },
      { en: "They can create new lead probabilities", fr: "Ils peuvent créer de nouvelles probabilités de leads" },
      { en: "They have no access to lead probabilities", fr: "Ils n'ont pas accès aux probabilités de leads" },
    ],
    explanation: {
      en: "Source Odoo Learn (Group Access Rights): They can only view lead probabilities",
      fr: "Source Odoo Learn (Droits d'accès de groupe) : Ils ne peuvent afficher que les probabilités de prospects",
    },
  }),
complexQ({
    id: "stu-046",
    module: "studio",
    text: {
      en: "Which of the following is NOT an access right? (Odoo Learn — Group Access Rights)",
      fr: "Lequel des éléments suivants n’est PAS un droit d’accès ? (Odoo Learn — Droits d'accès du groupe)",
    },
    correct: {
      en: "Execute",
      fr: "Exécuter",
    },
    distractors: [
      { en: "Read", fr: "Lire" },
      { en: "Write", fr: "Écrire" },
      { en: "Create", fr: "Créer" },
    ],
    explanation: {
      en: "Source Odoo Learn (Group Access Rights): Execute",
      fr: "Source Odoo Learn (Droits d'accès de groupe) : Exécuter",
    },
  }),
complexQ({
    id: "stu-047",
    module: "studio",
    text: {
      en: "When opening the Discuss app, which section would you check to review all recent updates on records you’re involved in? (Odoo Learn — Odoo Discuss: Voice & Video Calls)",
      fr: "Lorsque vous ouvrez l’application Discuss, quelle section consulteriez-vous pour consulter toutes les mises à jour récentes des enregistrements dans lesquels vous êtes impliqué ? (Odoo Learn — Odoo Discuss : appels vocaux et vidéo)",
    },
    correct: {
      en: "History feed",
      fr: "Flux d'historique",
    },
    distractors: [
      { en: "Inbox", fr: "Boîte de réception" },
      { en: "Starred", fr: "Favoris" },
      { en: "Direct Messages", fr: "Messages directs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Discuss: Voice & Video Calls): History feed",
      fr: "Source Odoo Learn (Odoo Discuss : Appels vocaux et vidéo) : Flux d'historique",
    },
  }),
complexQ({
    id: "stu-048",
    module: "studio",
    text: {
      en: "Which programming language must you learn before using Studio? (Odoo Learn — What is Studio?)",
      fr: "Quel langage de programmation devez-vous apprendre avant d'utiliser Studio ? (Odoo Learn — Qu’est-ce que Studio ?)",
    },
    correct: {
      en: "None",
      fr: "Aucun",
    },
    distractors: [
      { en: "Python", fr: "Python" },
      { en: "JavaScript", fr: "Javascript" },
      { en: "CSS", fr: "CSS" },
    ],
    explanation: {
      en: "Source Odoo Learn (What is Studio?): None",
      fr: "Source Odoo Learn (Qu'est-ce que Studio ?) : Aucun",
    },
  }),
mcq3Q({
    id: "stu-049",
    module: "studio",
    text: {
      en: "What should you do before you implement customizations with Studio? (Odoo Learn — What is Studio?)",
      fr: "Que devez-vous faire avant d'implémenter des personnalisations avec Studio ? (Odoo Learn — Qu’est-ce que Studio ?)",
    },
    correct: {
      en: "Ask yourself if the customization is worth it and calculate how much time you would save by introducing the customization.",
      fr: "Demandez-vous si la personnalisation en vaut la peine et calculez combien de temps vous gagneriez en introduisant la personnalisation.",
    },
    distractors: [
      { en: "Recreate all of the Odoo apps you have installed.", fr: "Recréez toutes les applications Odoo que vous avez installées." },
      { en: "Ask Odoo for permission.", fr: "Demandez la permission à Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (What is Studio?): Ask yourself if the customization is worth it and calculate how much time you would save by introducing the customization.",
      fr: "Source Odoo Learn (Qu'est-ce que Studio ?) : Demandez-vous si la personnalisation en vaut la peine et calculez combien de temps vous gagneriez en introduisant la personnalisation.",
    },
  }),
complexQ({
    id: "stu-050",
    module: "studio",
    text: {
      en: "What does a model represent? (Odoo Learn — Studio Basics)",
      fr: "Que représente un modèle ? (Odoo Learn — Les bases du studio)",
    },
    correct: {
      en: "A business concept, such as “sales order”.",
      fr: "Un concept commercial, tel que « commande client ».",
    },
    distractors: [
      { en: "A single record inside a row.", fr: "Un seul enregistrement dans une ligne." },
      { en: "A single field inside a sheet.", fr: "Un seul champ à l’intérieur d’une feuille." },
      { en: "A PostgreSQL database.", fr: "Une base de données PostgreSQL." },
    ],
    explanation: {
      en: "Source Odoo Learn (Studio Basics): A business concept, such as “sales order”.",
      fr: "Source Odoo Learn (Studio Basics) : Un concept commercial, tel que « commande client ».",
    },
  }),
mcq3Q({
    id: "stu-051",
    module: "studio",
    text: {
      en: "What are the main categories of fields in Odoo? (Odoo Learn — Simple fields)",
      fr: "Quelles sont les principales catégories de champs dans Odoo ? (Odoo Learn — Champs simples)",
    },
    correct: {
      en: "Simple fields and relational fields.",
      fr: "Champs simples et champs relationnels.",
    },
    distractors: [
      { en: "Simple fields and complex fields.", fr: "Champs simples et champs complexes." },
      { en: "Text fields, selection fields and checkboxes.", fr: "Champs de texte, champs de sélection et cases à cocher." },
    ],
    explanation: {
      en: "Source Odoo Learn (Simple fields): Simple fields and relational fields.",
      fr: "Source Odoo Learn (Champs simples) : Champs simples et champs relationnels.",
    },
  }),
mcq3Q({
    id: "stu-052",
    module: "studio",
    text: {
      en: "What is the purpose of widgets? (Odoo Learn — Simple fields)",
      fr: "A quoi servent les widgets ? (Odoo Learn — Champs simples)",
    },
    correct: {
      en: "They display the field’s data in different ways.",
      fr: "Ils affichent les données du champ de différentes manières.",
    },
    distractors: [
      { en: "They define whether the field is invisible, required or read-only.", fr: "Ils définissent si le champ est invisible, obligatoire ou en lecture seule." },
      { en: "They are used to determine the type of data stored in a field.", fr: "Ils sont utilisés pour déterminer le type de données stockées dans un champ." },
    ],
    explanation: {
      en: "Source Odoo Learn (Simple fields): They display the field’s data in different ways.",
      fr: "Source Odoo Learn (Champs simples) : Ils affichent les données du champ de différentes manières.",
    },
  }),
complexQ({
    id: "stu-053",
    module: "studio",
    text: {
      en: "What is the use of the “Conditional” option, next to some properties such as “Required”? (Odoo Learn — Simple fields)",
      fr: "A quoi sert l’option « Conditionnel », à côté de certaines propriétés comme « Obligatoire » ? (Odoo Learn — Champs simples)",
    },
    correct: {
      en: "It allows us to add filters whose matching records will allow the property to be applied.",
      fr: "Cela nous permet d'ajouter des filtres dont les enregistrements correspondants permettront d'appliquer la propriété.",
    },
    distractors: [
      { en: "It allows us to see required fields while in Studio mode.", fr: "Cela nous permet de voir les champs obligatoires en mode Studio." },
      { en: "It enables a set of other properties that are linked to the main property.", fr: "Il active un ensemble d’autres propriétés liées à la propriété principale." },
      { en: "Conditionals are a type of field that requires more advanced settings.", fr: "Les conditions sont un type de champ qui nécessite des paramètres plus avancés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Simple fields): It allows us to add filters whose matching records will allow the property to be applied.",
      fr: "Source Odoo Learn (Champs simples) : Elle nous permet d'ajouter des filtres dont les enregistrements correspondants permettront d'appliquer la propriété.",
    },
  }),
mcq3Q({
    id: "stu-054",
    module: "studio",
    text: {
      en: "What should you do before you implement any customization with Studio? (Odoo Learn — Add a field)",
      fr: "Que devez-vous faire avant de mettre en œuvre une personnalisation avec Studio ? (Odoo Learn — Ajouter un champ)",
    },
    correct: {
      en: "Perform the changes and test them in a duplicate database.",
      fr: "Effectuez les modifications et testez-les dans une base de données en double.",
    },
    distractors: [
      { en: "Create a support ticket.", fr: "Créez un ticket d'assistance." },
      { en: "Perform the changes on another model first.", fr: "Effectuez d'abord les modifications sur un autre modèle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Add a field): Perform the changes and test them in a duplicate database.",
      fr: "Source Odoo Learn (Ajouter un champ) : Effectuez les modifications et testez-les dans une base de données en double.",
    },
  }),
mcq3Q({
    id: "stu-055",
    module: "studio",
    text: {
      en: "What should you do before you add a new field to a view? (Odoo Learn — Add a field)",
      fr: "Que devez-vous faire avant d'ajouter un nouveau champ à une vue ? (Odoo Learn — Ajouter un champ)",
    },
    correct: {
      en: "Check whether the field already exists in the database.",
      fr: "Vérifiez si le champ existe déjà dans la base de données.",
    },
    distractors: [
      { en: "Define the field’s properties.", fr: "Définissez les propriétés du champ." },
      { en: "Manually save the changes that you have made so far.", fr: "Enregistrez manuellement les modifications que vous avez apportées jusqu'à présent." },
    ],
    explanation: {
      en: "Source Odoo Learn (Add a field): Check whether the field already exists in the database.",
      fr: "Source Odoo Learn (Ajouter un champ) : Vérifiez si le champ existe déjà dans la base de données.",
    },
  }),
mcq3Q({
    id: "stu-056",
    module: "studio",
    text: {
      en: "Where can you find the fields that you have created with Studio but have not been added to the current view? (Odoo Learn — Add a field)",
      fr: "Où pouvez-vous trouver les champs que vous avez créés avec Studio mais qui n'ont pas été ajoutés à la vue actuelle ? (Odoo Learn — Ajouter un champ)",
    },
    correct: {
      en: "In the Add tab, in the Existing fields section.",
      fr: "Dans l'onglet Ajouter, dans la section Champs existants.",
    },
    distractors: [
      { en: "In the View tab, by selecting Show Invisible Elements.", fr: "Dans l'onglet Affichage, en sélectionnant Afficher les éléments invisibles." },
      { en: "In the Add tab, in the New fields section.", fr: "Dans l'onglet Ajouter, dans la section Nouveaux champs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Add a field): In the Add tab, in the Existing fields section.",
      fr: "Source Odoo Learn (Ajouter un champ) : Dans l'onglet Ajouter, dans la section Champs existants.",
    },
  }),
complexQ({
    id: "stu-057",
    module: "studio",
    text: {
      en: "What type of link must be established first to have a one-to-many relationship between two models? (Odoo Learn — Relational fields)",
      fr: "Quel type de lien faut-il établir en premier pour avoir une relation un-à-plusieurs entre deux modèles ? (Odoo Learn — Champs relationnels)",
    },
    correct: {
      en: "A many-to-one link.",
      fr: "Un lien plusieurs-à-un.",
    },
    distractors: [
      { en: "A one-to-one link.", fr: "Un lien individuel." },
      { en: "A many-to-many link.", fr: "Un lien plusieurs-à-plusieurs." },
      { en: "Another one-to-many link.", fr: "Un autre lien un-à-plusieurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Relational fields): A many-to-one link.",
      fr: "Source Odoo Learn (Champs relationnels) : Un lien plusieurs-à-un.",
    },
  }),
complexQ({
    id: "stu-058",
    module: "studio",
    text: {
      en: "Which one of the following examples is a many-to-many field? (Odoo Learn — Relational fields)",
      fr: "Lequel des exemples suivants est un champ plusieurs-à-plusieurs ? (Odoo Learn — Champs relationnels)",
    },
    correct: {
      en: "The Product tags fields in the Product template model.",
      fr: "Les champs Balises de produit dans le modèle de modèle de produit.",
    },
    distractors: [
      { en: "The Customer email field in the Contact model.", fr: "Le champ E-mail du client dans le modèle Contact." },
      { en: "The Customer field in the Sales order model.", fr: "Le champ Client dans le modèle de commande client." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Relational fields): The Product tags fields in the Product template model.",
      fr: "Source Odoo Learn (Champs relationnels) : Les champs de balises de produit dans le modèle de modèle de produit.",
    },
  }),
complexQ({
    id: "stu-059",
    module: "studio",
    text: {
      en: "How can you reuse a field which was removed from a view? (Odoo Learn — Customize views)",
      fr: "Comment réutiliser un champ qui a été supprimé d’une vue ? (Odoo Learn — Personnaliser les vues)",
    },
    correct: {
      en: "By looking under Existing Fields.",
      fr: "En regardant sous Champs existants.",
    },
    distractors: [
      { en: "By enabling Show Invisible Elements.", fr: "En activant Afficher les éléments invisibles." },
      { en: "By entering Studio Recovery Mode.", fr: "En entrant en mode de récupération Studio." },
      { en: "By sending a support ticket.", fr: "En envoyant un ticket d'assistance." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize views): By looking under Existing Fields.",
      fr: "Source Odoo Learn (Personnaliser les vues) : En regardant sous Champs existants.",
    },
  }),
complexQ({
    id: "stu-060",
    module: "studio",
    text: {
      en: "To which views can you add new fields? (Odoo Learn — Customize views)",
      fr: "À quelles vues pouvez-vous ajouter de nouveaux champs ? (Odoo Learn — Personnaliser les vues)",
    },
    correct: {
      en: "List and Form.",
      fr: "Liste et formulaire.",
    },
    distractors: [
      { en: "Form and Kanban.", fr: "Formulaire et Kanban." },
      { en: "Kanban and List.", fr: "Kanban et Liste." },
      { en: "Form and Dashboard.", fr: "Formulaire et tableau de bord." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize views): List and Form.",
      fr: "Source Odoo Learn (Personnaliser les vues) : Liste et Formulaire.",
    },
  }),
complexQ({
    id: "stu-061",
    module: "studio",
    text: {
      en: "What should you do if you want to add a new type of data to your app? (Odoo Learn — Create your app)",
      fr: "Que devez-vous faire si vous souhaitez ajouter un nouveau type de données à votre application ? (Odoo Learn — Créez votre application)",
    },
    correct: {
      en: "Create a new model.",
      fr: "Créez un nouveau modèle.",
    },
    distractors: [
      { en: "Create a new database.", fr: "Créez une nouvelle base de données." },
      { en: "Create a new view.", fr: "Créez une nouvelle vue." },
      { en: "Create a new conditional field.", fr: "Créez un nouveau champ conditionnel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your app): Create a new model.",
      fr: "Source Odoo Learn (Créez votre application) : Créez un nouveau modèle.",
    },
  }),
mcq3Q({
    id: "stu-062",
    module: "studio",
    text: {
      en: "Which feature should you add to be able to assign one of your employees to a record? (Odoo Learn — Create your app)",
      fr: "Quelle fonctionnalité ajouter pour pouvoir affecter un de vos collaborateurs à un enregistrement ? (Odoo Learn — Créez votre application)",
    },
    correct: {
      en: "User assignment.",
      fr: "Affectation des utilisateurs.",
    },
    distractors: [
      { en: "Access rights.", fr: "Droits d'accès." },
      { en: "Employee Add-on.", fr: "Module complémentaire pour les employés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your app): User assignment.",
      fr: "Source Odoo Learn (Créez votre application) : Affectation des utilisateurs.",
    },
  }),
complexQ({
    id: "stu-063",
    module: "studio",
    text: {
      en: "What should you do to display a contact’s email address if you have already added a Many2One relation to the Contact model on your custom model? (Odoo Learn — Customize your app (part 1))",
      fr: "Que devez-vous faire pour afficher l'adresse email d'un contact si vous avez déjà ajouté une relation Many2One au modèle Contact sur votre modèle personnalisé ? (Odoo Learn — Personnalisez votre application (partie 1))",
    },
    correct: {
      en: "Add a Related Field with the relation “Contact > Email”.",
      fr: "Ajoutez un champ associé avec la relation « Contact > Email ».",
    },
    distractors: [
      { en: "Add a Many2One field with the relation “Contact > Email”.", fr: "Ajoutez un champ Many2One avec la relation « Contact > Email »." },
      { en: "Add a Text field with the widget “Email” and its properties set to “Readonly”.", fr: "Ajoutez un champ Texte avec le widget « Email » et ses propriétés définies sur « Lecture seule »." },
      { en: "Add a Many2One field with the relation “Email”.", fr: "Ajoutez un champ Many2One avec la relation « Email »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize your app (part 1)): Add a Related Field with the relation “Contact > Email”.",
      fr: "Source Odoo Learn (Personnalisez votre application (partie 1)) : Ajoutez un champ associé avec la relation « Contact > Email ».",
    },
  }),
complexQ({
    id: "stu-064",
    module: "studio",
    text: {
      en: "Which type of field does not have the “disable creation” option when editing the field in Studio? (Odoo Learn — Customize your app (part 1))",
      fr: "Quel type de champ ne dispose pas de l'option « Désactiver la création » lors de la modification du champ dans Studio ? (Odoo Learn — Personnalisez votre application (partie 1))",
    },
    correct: {
      en: "Related fields",
      fr: "Domaines associés",
    },
    distractors: [
      { en: "Many2One", fr: "Plusieurs2Un" },
      { en: "One2Many", fr: "Un à deux" },
      { en: "Many2Many", fr: "Beaucoup2Beaucoup" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize your app (part 1)): Related fields",
      fr: "Source Odoo Learn (Personnalisez votre application (partie 1)) : Champs associés",
    },
  }),
complexQ({
    id: "stu-065",
    module: "studio",
    text: {
      en: "How can you add a view to a model? (Odoo Learn — Customize your app (part 2))",
      fr: "Comment ajouter une vue à un modèle ? (Odoo Learn — Personnalisez votre application (partie 2))",
    },
    correct: {
      en: "In Studio, go to Views, then click on the view to activate it.",
      fr: "Dans Studio, allez dans Vues, ​​puis cliquez sur la vue pour l'activer.",
    },
    distractors: [
      { en: "Go to your Odoo.com account and select “Request view”.", fr: "Accédez à votre compte Odoo.com et sélectionnez « Demander une vue »." },
      { en: "In Studio, go to Views, then select the +Add tab and drag & drop the “View” component.", fr: "Dans Studio, accédez à Vues, ​​puis sélectionnez l'onglet +Ajouter et faites glisser et déposez le composant « Vue »." },
      { en: "In Studio, go to Views, then drag & drop the view to the “General views” section.", fr: "Dans Studio, accédez à Vues, ​​puis faites glisser et déposez la vue dans la section « Vues générales »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize your app (part 2)): In Studio, go to Views, then click on the view to activate it.",
      fr: "Source Odoo Learn (Personnalisez votre application (partie 2)) : Dans Studio, allez dans Vues, ​​puis cliquez sur la vue pour l'activer.",
    },
  }),
complexQ({
    id: "stu-066",
    module: "studio",
    text: {
      en: "What does adding the Address field to the autocompletion fields do? (Odoo Learn — Customize your app (part 2))",
      fr: "À quoi sert l’ajout du champ Adresse aux champs de saisie semi-automatique ? (Odoo Learn — Personnalisez votre application (partie 2))",
    },
    correct: {
      en: "It allows users to search for records by their address.",
      fr: "Il permet aux utilisateurs de rechercher des enregistrements par leur adresse.",
    },
    distractors: [
      { en: "It uses AI to automatically find the state, zip code, and country of the address.", fr: "Il utilise l'IA pour trouver automatiquement l'état, le code postal et le pays de l'adresse." },
      { en: "It verifies that the address field is complete.", fr: "Il vérifie que le champ d'adresse est complet." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize your app (part 2)): It allows users to search for records by their address.",
      fr: "Source Odoo Learn (Personnalisez votre application (partie 2)) : Elle permet aux utilisateurs de rechercher des enregistrements par leur adresse.",
    },
  }),
complexQ({
    id: "stu-067",
    module: "studio",
    text: {
      en: "How can you restrict the data users can select in a many2one field? (Odoo Learn — Filter rules and domains)",
      fr: "Comment pouvez-vous restreindre les données que les utilisateurs peuvent sélectionner dans un champ many2one ? (Odoo Learn — Filtrer les règles et les domaines)",
    },
    correct: {
      en: "Using domains.",
      fr: "Utiliser des domaines.",
    },
    distractors: [
      { en: "Using filter rules.", fr: "Utilisation de règles de filtrage." },
      { en: "Using menu actions.", fr: "Utilisation des actions de menu." },
      { en: "Using search filters.", fr: "Utilisation de filtres de recherche." },
    ],
    explanation: {
      en: "Source Odoo Learn (Filter rules and domains): Using domains.",
      fr: "Source Odoo Learn (Règles de filtrage et domaines) : Utilisation des domaines.",
    },
  }),
complexQ({
    id: "stu-068",
    module: "studio",
    text: {
      en: "To which view(s) can you add smart buttons? (Odoo Learn — Filter rules and domains)",
      fr: "À quelle(s) vue(s) pouvez-vous ajouter des boutons intelligents ? (Odoo Learn — Filtrer les règles et les domaines)",
    },
    correct: {
      en: "The Form view.",
      fr: "La vue Formulaire.",
    },
    distractors: [
      { en: "Any of the General Views.", fr: "N'importe lequel des points de vue généraux." },
      { en: "Any View except Multiple Records views.", fr: "N’importe quelle vue, à l’exception des vues à enregistrements multiples." },
      { en: "The Kanban view.", fr: "La vue Kanban." },
    ],
    explanation: {
      en: "Source Odoo Learn (Filter rules and domains): The Form view.",
      fr: "Source Odoo Learn (Règles de filtrage et domaines) : La vue Formulaire.",
    },
  }),
complexQ({
    id: "stu-069",
    module: "studio",
    text: {
      en: "How can you add content to a specific report? (Odoo Learn — Customize reports)",
      fr: "Comment ajouter du contenu à un rapport spécifique ? (Odoo Learn — Personnaliser les rapports)",
    },
    correct: {
      en: "By typing text directly or by typing “/” and selecting from available options in the report editor in Studio",
      fr: "En tapant du texte directement ou en tapant « / » et en sélectionnant parmi les options disponibles dans l'éditeur de rapport dans Studio",
    },
    distractors: [
      { en: "By going to “Settings” and clicking “Configure Document Layout”", fr: "En allant dans « Paramètres » et en cliquant sur « Configurer la mise en page du document »" },
      { en: "By clicking on the dotted rectangles and selecting from available options in the report editor in Studio", fr: "En cliquant sur les rectangles en pointillés et en sélectionnant parmi les options disponibles dans l'éditeur de rapports de Studio" },
      { en: "All of the above", fr: "Tout ce qui précède" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize reports): By typing text directly or by typing “/” and selecting from available options in the report editor in Studio",
      fr: "Source Odoo Learn (Personnaliser les rapports) : En tapant du texte directement ou en tapant « / » et en sélectionnant parmi les options disponibles dans l'éditeur de rapports dans Studio",
    },
  }),
complexQ({
    id: "stu-070",
    module: "studio",
    text: {
      en: "How can you preview your customized report? (Odoo Learn — Customize reports)",
      fr: "Comment prévisualiser votre rapport personnalisé ? (Odoo Learn — Personnaliser les rapports)",
    },
    correct: {
      en: "By clicking the \"Print Preview\" button",
      fr: "En cliquant sur le bouton \"Aperçu avant impression\"",
    },
    distractors: [
      { en: "By clicking the “Save” button", fr: "En cliquant sur le bouton « Enregistrer »" },
      { en: "You can’t; you have to print it from the “Print” menu outside of Studio", fr: "Vous ne pouvez pas ; vous devez l'imprimer depuis le menu \"Imprimer\" en dehors de Studio" },
      { en: "By selecting “Preview” from the report editor menu", fr: "En sélectionnant « Aperçu » dans le menu de l'éditeur d'états" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize reports): By clicking the \"Print Preview\" button",
      fr: "Source Odoo Learn (Personnaliser les rapports) : En cliquant sur le bouton \"Aperçu avant impression\"",
    },
  }),
complexQ({
    id: "stu-071",
    module: "studio",
    text: {
      en: "How can I add a new column to a dynamic table? (Odoo Learn — Customize reports)",
      fr: "Comment puis-je ajouter une nouvelle colonne à un tableau dynamique ? (Odoo Learn — Personnaliser les rapports)",
    },
    correct: {
      en: "Hover over the first cell in the column, click on the three dots then click + Insert left or + Insert right",
      fr: "Passez la souris sur la première cellule de la colonne, cliquez sur les trois points puis cliquez sur + Insérer à gauche ou + Insérer à droite",
    },
    distractors: [
      { en: "You can’t; the number of columns is fixed but you can change what appears in them", fr: "Vous ne pouvez pas ; le nombre de colonnes est fixe mais vous pouvez modifier ce qui y apparaît" },
      { en: "Add a new field in the relevant view of the underlying model; the field will then appear in the report’s table", fr: "Ajoutez un nouveau champ dans la vue pertinente du modèle sous-jacent ; le champ apparaîtra alors dans le tableau du rapport" },
      { en: "Duplicate a column by right clicking then clicking Duplicate", fr: "Dupliquez une colonne en faisant un clic droit puis en cliquant sur Dupliquer" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize reports): Hover over the first cell in the column, click on the three dots then click + Insert left or + Insert right",
      fr: "Source Odoo Learn (Personnaliser les rapports) : Survolez la première cellule de la colonne, cliquez sur les trois points puis cliquez sur + Insérer à gauche ou + Insérer à droite",
    },
  }),
complexQ({
    id: "stu-072",
    module: "studio",
    text: {
      en: "What is the purpose of selecting a report type at the beginning of the report creation process? (Odoo Learn — Create a new report)",
      fr: "Quel est l'objectif de la sélection d'un type de rapport au début du processus de création de rapport ? (Odoo Learn — Créer un nouveau rapport)",
    },
    correct: {
      en: "To define what is displayed in the header and footer",
      fr: "Pour définir ce qui est affiché dans l'en-tête et le pied de page",
    },
    distractors: [
      { en: "To define the font style to be used", fr: "Pour définir le style de police à utiliser" },
      { en: "To define the content of the report", fr: "Pour définir le contenu du rapport" },
      { en: "To define the color scheme (black and white vs. colors)", fr: "Pour définir la palette de couleurs (noir et blanc vs couleurs)" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a new report): To define what is displayed in the header and footer",
      fr: "Source Odoo Learn (Créer un nouveau rapport) : Pour définir ce qui est affiché dans l'en-tête et le pied de page",
    },
  }),
complexQ({
    id: "stu-073",
    module: "studio",
    text: {
      en: "How can you add a field to the report? (Odoo Learn — Create a new report)",
      fr: "Comment ajouter un champ au rapport ? (Odoo Learn — Créer un nouveau rapport)",
    },
    correct: {
      en: "By typing “/”,  selecting “Field”, then selecting the field you want",
      fr: "En tapant « / », en sélectionnant « Champ », puis en sélectionnant le champ souhaité",
    },
    distractors: [
      { en: "By dragging and dropping the corresponding field block into the report editor", fr: "En glissant-déposant le bloc de champs correspondant dans l'éditeur d'états" },
      { en: "By typing “/”,  selecting “Field”, then selecting the field you want By copying and pasting the field from another report", fr: "En tapant « / », en sélectionnant « Champ », puis en sélectionnant le champ souhaité En copiant et collant le champ d'un autre rapport" },
      { en: "By dragging and dropping the field from the database onto the report editor", fr: "En glissant-déposant le champ de la base de données vers l'éditeur d'états" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a new report): By typing “/”,  selecting “Field”, then selecting the field you want",
      fr: "Source Odoo Learn (Créer un nouveau rapport) : En tapant « / », en sélectionnant « Champ », puis en sélectionnant le champ souhaité",
    },
  }),
complexQ({
    id: "stu-074",
    module: "studio",
    text: {
      en: "How can you add a column in a table? (Odoo Learn — Create a new report)",
      fr: "Comment ajouter une colonne dans un tableau ? (Odoo Learn — Créer un nouveau rapport)",
    },
    correct: {
      en: "By positioning the cursor in the column header, then clicking the purple tool and selecting “Insert left” or “Insert right”",
      fr: "En positionnant le curseur dans l'en-tête de colonne, puis en cliquant sur l'outil violet et en sélectionnant « Insérer à gauche » ou « Insérer à droite »",
    },
    distractors: [
      { en: "By pressing TAB in the bottom-right cell", fr: "En appuyant sur TAB dans la cellule en bas à droite" },
      { en: "By positioning the cursor in a column, then typing “/” and selecting “Column”", fr: "En positionnant le curseur dans une colonne, puis en tapant « / » et en sélectionnant « Colonne »" },
      { en: "All of the above", fr: "Tout ce qui précède" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a new report): By positioning the cursor in the column header, then clicking the purple tool and selecting “Insert left” or “Insert right”",
      fr: "Source Odoo Learn (Créer un nouveau rapport) : En positionnant le curseur dans l'en-tête de colonne, puis en cliquant sur l'outil violet et en sélectionnant « Insérer à gauche » ou « Insérer à droite »",
    },
  }),
complexQ({
    id: "stu-075",
    module: "studio",
    text: {
      en: "What are automation rules in Odoo? (Odoo Learn — Automations)",
      fr: "Que sont les règles d’automatisation dans Odoo ? (Odoo Learn — Automatisations)",
    },
    correct: {
      en: "Automated actions executed based on specific triggers",
      fr: "Actions automatisées exécutées en fonction de déclencheurs spécifiques",
    },
    distractors: [
      { en: "Rules that limit what actions users can perform", fr: "Règles qui limitent les actions que les utilisateurs peuvent effectuer" },
      { en: "Rules that limit what automations users can perform", fr: "Règles qui limitent les automatisations que les utilisateurs peuvent effectuer" },
      { en: "Automatic reminders sent to users", fr: "Rappels automatiques envoyés aux utilisateurs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automations): Automated actions executed based on specific triggers",
      fr: "Source Odoo Learn (Automations) : actions automatisées exécutées en fonction de déclencheurs spécifiques",
    },
  }),
complexQ({
    id: "stu-076",
    module: "studio",
    text: {
      en: "What is the purpose of the “When updating” field for “Custom” triggers such as “On Save” in Odoo Studio? (Odoo Learn — Automations)",
      fr: "A quoi sert le champ « Lors de la mise à jour » pour les déclencheurs « Personnalisés » tels que « Lors de l'enregistrement » dans Odoo Studio ? (Odoo Learn — Automatisations)",
    },
    correct: {
      en: "To determine when the automation rule should be triggered based on specific field updates",
      fr: "Pour déterminer quand la règle d'automatisation doit être déclenchée en fonction de mises à jour de champs spécifiques",
    },
    distractors: [
      { en: "To determine the time interval for triggering the automation rule", fr: "Pour déterminer l'intervalle de temps de déclenchement de la règle d'automatisation" },
      { en: "To determine the fields to be updated when the automation is executed", fr: "Pour déterminer les champs à mettre à jour lors de l'exécution de l'automatisation" },
      { en: "To determine the sequence of actions to be performed in the automation rule", fr: "Pour déterminer la séquence d'actions à effectuer dans la règle d'automatisation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automations): To determine when the automation rule should be triggered based on specific field updates",
      fr: "Source Odoo Learn (Automatisations) : Pour déterminer quand la règle d'automatisation doit être déclenchée en fonction de mises à jour de champs spécifiques",
    },
  }),
complexQ({
    id: "stu-077",
    module: "studio",
    text: {
      en: "How should the trigger for an automation rule be configured to assign the task to Mitchell Admin and send an email, but only when the priority is set to high on a task in the Research & Development project? (Odoo Learn — Automations)",
      fr: "Comment configurer le déclencheur d'une règle d'automatisation pour attribuer la tâche à Mitchell Admin et envoyer un e-mail, mais uniquement lorsque la priorité est définie sur une tâche élevée dans le projet de recherche et développement ? (Odoo Learn — Automatisations)",
    },
    correct: {
      en: "Select the trigger \"On Save\", define the conditions \"Priority = High\" and \"Project is in (Research & Development)\" in the \"Apply on\" field, and select \"Priority (Task)\" in the \"When updating\" field",
      fr: "Sélectionnez le déclencheur « Lors de l'enregistrement », définissez les conditions « Priorité = Élevée » et « Le projet est en (Recherche & Développement) » dans le champ « Appliquer sur », et sélectionnez « Priorité (Tâche) » dans le champ « Lors de la mise à jour ».",
    },
    distractors: [
      { en: "Make sure you are on the Research & Development Project model, then select the trigger \"Tag is added\" with the value \"High priority\"", fr: "Assurez-vous d'être sur le modèle Projet Recherche & Développement, puis sélectionnez le déclencheur \"Tag is ajouté\" avec la valeur \"Haute priorité\"" },
      { en: "Select the trigger \"After last update\" and define the conditions \"Priority = High\" and \"Project is in (Research & Development)\" in the \"Extra Conditions\" field", fr: "Sélectionnez le déclencheur \"Après la dernière mise à jour\" et définissez les conditions \"Priorité = Élevée\" et \"Le projet est en (Recherche & Développement)\" dans le champ \"Conditions supplémentaires\"." },
      { en: "Select the trigger \"On Save\" and define the conditions \"Priority = High\" and \"Project is in (Research & Development)\" in the \"Apply on\" field", fr: "Sélectionnez le déclencheur « Lors de l'enregistrement » et définissez les conditions « Priorité = Élevée » et « Le projet est en (Recherche & Développement) » dans le champ « Appliquer sur »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Automations): Select the trigger \"On Save\", define the conditions \"Priority = High\" and \"Project is in (Research & Development)\" in the \"Apply on\" field, and select \"Priority (Task)\" in the \"When updating\" field",
      fr: "Source Odoo Learn (Automatisations) : Sélectionnez le déclencheur « Lors de l'enregistrement », définissez les conditions « Priorité = Élevée » et « Le projet est en cours (Recherche & Développement) » dans le champ « Appliquer sur », et sélectionnez « Priorité (Tâche) » dans le champ « Lors de la mise à jour ».",
    },
  }),
complexQ({
    id: "stu-078",
    module: "studio",
    text: {
      en: "How do you set an approval rule for an action in Studio? (Odoo Learn — Approval rules)",
      fr: "Comment définir une règle d'approbation pour une action dans Studio ? (Odoo Learn — Règles d'approbation)",
    },
    correct: {
      en: "In the relevant view, click the button you want to apply the rule to",
      fr: "Dans la vue correspondante, cliquez sur le bouton auquel vous souhaitez appliquer la règle.",
    },
    distractors: [
      { en: "Go to “Approval rules” in the menu bar then complete the required fields", fr: "Allez dans « Règles d’approbation » dans la barre de menu puis complétez les champs obligatoires" },
      { en: "Click \"Automation\" settings and create a new automated action with the \"Approval Required\" trigger", fr: "Cliquez sur les paramètres \"Automatisation\" et créez une nouvelle action automatisée avec le déclencheur \"Approbation requise\"." },
      { en: "From the “+ Add” tab, drag and drop an “Approvals” component to the view", fr: "Depuis l'onglet « + Ajouter », faites glisser et déposez un composant « Approbations » dans la vue." },
    ],
    explanation: {
      en: "Source Odoo Learn (Approval rules): In the relevant view, click the button you want to apply the rule to",
      fr: "Source Odoo Learn (Règles d'approbation) : Dans la vue correspondante, cliquez sur le bouton auquel vous souhaitez appliquer la règle",
    },
  }),
complexQ({
    id: "stu-079",
    module: "studio",
    text: {
      en: "What does “Exclusive approval” mean? (Odoo Learn — Approval rules)",
      fr: "Que signifie « approbation exclusive » ? (Odoo Learn — Règles d'approbation)",
    },
    correct: {
      en: "A user who approves one step in a multi-step approval process cannot approve any other step for the same record",
      fr: "Un utilisateur qui approuve une étape dans un processus d'approbation en plusieurs étapes ne peut approuver aucune autre étape pour le même enregistrement.",
    },
    distractors: [
      { en: "Only one specific user can be designated to approve a particular action, and no other approval steps can be added", fr: "Un seul utilisateur spécifique peut être désigné pour approuver une action particulière, et aucune autre étape d'approbation ne peut être ajoutée." },
      { en: "It means that the approval step requires a special password or code that only authorized users possess", fr: "Cela signifie que l'étape d'approbation nécessite un mot de passe ou un code spécial que seuls les utilisateurs autorisés possèdent." },
      { en: "It means that once an action is approved, it cannot be rejected or revoked by any user, regardless of their approval level", fr: "Cela signifie qu'une fois qu'une action est approuvée, elle ne peut être rejetée ou révoquée par aucun utilisateur, quel que soit son niveau d'approbation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Approval rules): A user who approves one step in a multi-step approval process cannot approve any other step for the same record",
      fr: "Source Odoo Learn (Règles d'approbation) : Un utilisateur qui approuve une étape dans un processus d'approbation en plusieurs étapes ne peut approuver aucune autre étape pour le même enregistrement",
    },
  }),
complexQ({
    id: "stu-080",
    module: "studio",
    text: {
      en: "What happens if an unauthorized employee tries to confirm a purchase order that requires approval? (Odoo Learn — Approval rules)",
      fr: "Que se passe-t-il si un employé non autorisé tente de confirmer un bon de commande nécessitant une approbation ? (Odoo Learn — Règles d'approbation)",
    },
    correct: {
      en: "An error message is displayed to the employee, and an activity is created for the designated approver",
      fr: "Un message d'erreur s'affiche à l'intention de l'employé et une activité est créée pour l'approbateur désigné.",
    },
    distractors: [
      { en: "The purchase order is automatically sent to the finance department for review", fr: "Le bon de commande est automatiquement envoyé au service financier pour examen" },
      { en: "An email is immediately sent to the company owner for approval", fr: "Un email est immédiatement envoyé au propriétaire de l'entreprise pour approbation" },
      { en: "The purchase order is saved as a draft and cannot be submitted until reviewed by an administrator", fr: "Le bon de commande est enregistré en tant que brouillon et ne peut être soumis qu'après examen par un administrateur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Approval rules): An error message is displayed to the employee, and an activity is created for the designated approver",
      fr: "Source Odoo Learn (Règles d'approbation) : Un message d'erreur s'affiche au salarié, et une activité est créée pour l'approbateur désigné",
    },
  }),

];
