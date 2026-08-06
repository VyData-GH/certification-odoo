import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const spreadsheetLearnQuestions = [
complexQ({
    id: "spr-021",
    module: "spreadsheet",
    text: {
      en: "What is the benefit of converting a range of cells into a spreadsheet table? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Quel est l’avantage de convertir une plage de cellules en tableur ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "It adds styling and makes the data easier to manage/expand.",
      fr: "Il ajoute du style et rend les données plus faciles à gérer/développer.",
    },
    distractors: [
      { en: "It automatically calculates the profit margin.", fr: "Il calcule automatiquement la marge bénéficiaire." },
      { en: "It freezes the first row and first column automatically.", fr: "Il gèle automatiquement la première ligne et la première colonne." },
      { en: "It locks the cells so they cannot be edited.", fr: "Il verrouille les cellules afin qu'elles ne puissent pas être modifiées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): It adds styling and makes the data easier to manage/expand.",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : il ajoute du style et rend les données plus faciles à gérer/développer.",
    },
  }),
complexQ({
    id: "spr-022",
    module: "spreadsheet",
    text: {
      en: "Which of the following is true about functions in Odoo Spreadsheet? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Lequel des énoncés suivants est vrai à propos des fonctions dans Odoo Spreadsheet ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "Odoo supports standard spreadsheet functions as well as Odoo-specific functions that link to live database data.",
      fr: "Odoo prend en charge les fonctions de feuille de calcul standard ainsi que les fonctions spécifiques à Odoo liées aux données de base de données en direct.",
    },
    distractors: [
      { en: "Odoo only supports its own proprietary functions and cannot use standard formulas like SUM or AVERAGE.", fr: "Odoo ne prend en charge que ses propres fonctions propriétaires et ne peut pas utiliser de formules standard telles que SOMME ou MOYENNE." },
      { en: "Functions can only be used on numerical data, not on text cells or dates.", fr: "Les fonctions ne peuvent être utilisées que sur des données numériques, pas sur des cellules de texte ou des dates." },
      { en: "To use a function, you must first export the spreadsheet to an external editor and then re-upload it.", fr: "Pour utiliser une fonction, vous devez d'abord exporter la feuille de calcul vers un éditeur externe, puis la télécharger à nouveau." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): Odoo supports standard spreadsheet functions as well as Odoo-specific functions that link to live database data.",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : Odoo prend en charge les fonctions de feuille de calcul standard ainsi que les fonctions spécifiques à Odoo qui sont liées aux données de base de données en direct.",
    },
  }),
complexQ({
    id: "spr-023",
    module: "spreadsheet",
    text: {
      en: "What does a blue globe icon above the spreadsheet indicate? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Qu'indique une icône de globe bleu au-dessus de la feuille de calcul ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "The spreadsheet's regional settings differ from your own user profile settings.",
      fr: "Les paramètres régionaux de la feuille de calcul diffèrent des paramètres de votre propre profil utilisateur.",
    },
    distractors: [
      { en: "The spreadsheet is currently being shared with external users.", fr: "La feuille de calcul est actuellement partagée avec des utilisateurs externes." },
      { en: "The Odoo database is currently syncing data with a global cloud server.", fr: "La base de données Odoo synchronise actuellement les données avec un serveur cloud mondial." },
      { en: "The file is an imported external document and has not yet been converted to a native Odoo format.", fr: "Le fichier est un document externe importé et n'a pas encore été converti au format natif Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): The spreadsheet's regional settings differ from your own user profile settings.",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : les paramètres régionaux de la feuille de calcul diffèrent des paramètres de votre propre profil utilisateur.",
    },
  }),
complexQ({
    id: "spr-024",
    module: "spreadsheet",
    text: {
      en: "How does \"wrapping\" help when dealing with long header text in narrow columns? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Comment le « wrapping » est-il utile lorsqu'il s'agit d'un long texte d'en-tête dans des colonnes étroites ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "It allows the text to appear over multiple lines within the same cell.",
      fr: "Il permet au texte d'apparaître sur plusieurs lignes dans la même cellule.",
    },
    distractors: [
      { en: "It automatically shrinks the font size to fit the cell width.", fr: "Il réduit automatiquement la taille de la police pour l'adapter à la largeur de la cellule." },
      { en: "It rotates the text 90 degrees to point upwards.", fr: "Il fait pivoter le texte de 90 degrés pour pointer vers le haut." },
      { en: "It creates a pop-up note showing the full text that appears when you hover over the cell.", fr: "Il crée une note contextuelle affichant le texte intégral qui apparaît lorsque vous survolez la cellule." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): It allows the text to appear over multiple lines within the same cell.",
      fr: "Source Odoo Learn (bases de Odoo Spreadsheet) : Il permet au texte d'apparaître sur plusieurs lignes dans la même cellule.",
    },
  }),
complexQ({
    id: "spr-025",
    module: "spreadsheet",
    text: {
      en: "How can you change the access rights on a specific spreadsheet to only allow \"Viewer\" access? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Comment modifier les droits d'accès sur une feuille de calcul spécifique pour autoriser uniquement l'accès « Visionneuse » ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "By opening the spreadsheet, clicking \"Share\", then changing the individual or general access rights from \"Editor\" to \"Viewer.\"",
      fr: "En ouvrant la feuille de calcul, en cliquant sur « Partager », puis en modifiant les droits d'accès individuels ou généraux de « Éditeur » à « Visionneuse ».",
    },
    distractors: [
      { en: "This isn’t possible; access rights are managed at the level of the Documents folder in which the spreadsheet is saved.", fr: "Ce n’est pas possible ; les droits d'accès sont gérés au niveau du dossier Documents dans lequel la feuille de calcul est enregistrée." },
      { en: "By opening the spreadsheet, then setting it to \"Read-Only\" mode via the File > Settings menu.", fr: "En ouvrant la feuille de calcul, puis en la mettant en mode « Lecture seule » via le menu Fichier > Paramètres." },
      { en: "By locking the spreadsheet with a password that only the owner knows.", fr: "En verrouillant la feuille de calcul avec un mot de passe que seul le propriétaire connaît." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): By opening the spreadsheet, clicking \"Share\", then changing the individual or general access rights from \"Editor\" to \"Viewer.\"",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : En ouvrant la feuille de calcul, en cliquant sur « Partager », puis en modifiant les droits d'accès individuels ou généraux de « Éditeur » à « Visionneuse ».",
    },
  }),
complexQ({
    id: "spr-026",
    module: "spreadsheet",
    text: {
      en: "What purpose do the global filters available via the search bar serve? (Odoo Learn — Odoo Dashboards basics)",
      fr: "A quoi servent les filtres globaux disponibles via la barre de recherche ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "Global filters define the conditions used to retrieve data from your database and display it in the dashboard.",
      fr: "Les filtres globaux définissent les conditions utilisées pour récupérer les données de votre base de données et les afficher dans le tableau de bord.",
    },
    distractors: [
      { en: "Global filters allow you to temporarily hide records from selected charts and tables.", fr: "Les filtres globaux vous permettent de masquer temporairement les enregistrements des graphiques et tableaux sélectionnés." },
      { en: "Global filters allow you to change the aesthetic theme and color palette of dashboard charts and tables simultaneously.", fr: "Les filtres globaux vous permettent de modifier simultanément le thème esthétique et la palette de couleurs des graphiques et des tableaux du tableau de bord." },
      { en: "Global filters re-order the left-hand navigation panel based on the most frequently consulted dashboards.", fr: "Les filtres globaux réorganisent le panneau de navigation de gauche en fonction des tableaux de bord les plus fréquemment consultés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): Global filters define the conditions used to retrieve data from your database and display it in the dashboard.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : Les filtres globaux définissent les conditions utilisées pour récupérer les données de votre base de données et les afficher dans le tableau de bord.",
    },
  }),
complexQ({
    id: "spr-027",
    module: "spreadsheet",
    text: {
      en: "If multiple global filters have been applied, how can you return the dashboard to its original state without manually removing every filter? (Odoo Learn — Odoo Dashboards basics)",
      fr: "Si plusieurs filtres globaux ont été appliqués, comment pouvez-vous remettre le tableau de bord à son état d'origine sans supprimer manuellement chaque filtre ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "Refresh the browser page.",
      fr: "Actualisez la page du navigateur.",
    },
    distractors: [
      { en: "Navigate to Configuration > Dashboards and click \"Reset View.\"", fr: "Accédez à Configuration > Tableaux de bord et cliquez sur \"Réinitialiser la vue\"." },
      { en: "Click the \"Share\" button and then click \"Cancel.\"", fr: "Cliquez sur le bouton \"Partager\", puis cliquez sur \"Annuler\"." },
      { en: "Click the “Reset to Default” button located in the dashboard's footer.", fr: "Cliquez sur le bouton « Réinitialiser par défaut » situé dans le pied de page du tableau de bord." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): Refresh the browser page.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : Actualisez la page du navigateur.",
    },
  }),
complexQ({
    id: "spr-028",
    module: "spreadsheet",
    text: {
      en: "In an Odoo dashboard table showing the top 10 quotations, what happens if you change the sorting of the \"Revenue\" column from descending to ascending? (Odoo Learn — Odoo Dashboards basics)",
      fr: "Dans un tableau du tableau de bord Odoo affichant les 10 principales cotations, que se passe-t-il si vous modifiez le tri de la colonne « Revenus » de décroissant à ascendant ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "New data is retrieved from the database, and the list shows the 10 lowest-value quotations.",
      fr: "Les nouvelles données sont extraites de la base de données et la liste affiche les 10 cotations les plus basses.",
    },
    distractors: [
      { en: "The 10 quotations displayed on the dashboard are reordered from smallest to largest.", fr: "Les 10 cotations affichées sur le tableau de bord sont réorganisées de la plus petite à la plus grande." },
      { en: "The list becomes \"read-only\" until the sorting is returned to its default setting.", fr: "La liste devient « en lecture seule » jusqu'à ce que le tri revienne à son paramètre par défaut." },
      { en: "Any global filters that have been applied are automatically removed.", fr: "Tous les filtres globaux appliqués sont automatiquement supprimés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): New data is retrieved from the database, and the list shows the 10 lowest-value quotations.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : les nouvelles données sont récupérées de la base de données et la liste affiche les 10 cotations les moins élevées.",
    },
  }),
complexQ({
    id: "spr-029",
    module: "spreadsheet",
    text: {
      en: "What determines the specific data a user sees when they open a dashboard? (Odoo Learn — Odoo Dashboards basics)",
      fr: "Qu'est-ce qui détermine les données spécifiques qu'un utilisateur voit lorsqu'il ouvre un tableau de bord ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "The access rights that are defined in the user’s Odoo profile.",
      fr: "Les droits d'accès définis dans le profil Odoo de l'utilisateur.",
    },
    distractors: [
      { en: "The access rights of the person who originally created the dashboard.", fr: "Les droits d'accès de la personne qui a initialement créé le tableau de bord." },
      { en: "The “global filter” settings that were saved when the dashboard was created.", fr: "Les paramètres du « filtre global » qui ont été enregistrés lors de la création du tableau de bord." },
      { en: "The “Public\" or \"Private\" toggle in the Configuration menu.", fr: "Le basculement « Public » ou « Privé » dans le menu Configuration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): The access rights that are defined in the user’s Odoo profile.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : Les droits d'accès définis dans le profil Odoo de l'utilisateur.",
    },
  }),
complexQ({
    id: "spr-030",
    module: "spreadsheet",
    text: {
      en: "When preparing a list view in the Sales app to be inserted into a spreadsheet, what is the most efficient way to ensure only records with the status \"Quotation Sent\" are included? (Odoo Learn — Insert an Odoo list)",
      fr: "Lors de la préparation d'une vue de liste dans l'application Ventes à insérer dans une feuille de calcul, quel est le moyen le plus efficace de garantir que seuls les enregistrements ayant le statut « Devis envoyé » sont inclus ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "Via the search bar, apply a Custom Filter where the status must be Quotation Sent.",
      fr: "Via la barre de recherche, appliquez un filtre personnalisé dont le statut doit être Devis envoyé.",
    },
    distractors: [
      { en: "Insert the entire list, then manually delete the rows that include anything other than Quotation Sent after the list is inserted into the spreadsheet.", fr: "Insérez la liste entière, puis supprimez manuellement les lignes qui incluent autre chose que Devis envoyé une fois la liste insérée dans la feuille de calcul." },
      { en: "Activate developer mode and hide the \"Status\" column in the list view.", fr: "Activez le mode développeur et masquez la colonne \"Statut\" dans la vue liste." },
      { en: "Sort the list by \"Status\" so that all Quotations appear at the top before inserting the list into a spreadsheet.", fr: "Triez la liste par « Statut » afin que toutes les citations apparaissent en haut avant d'insérer la liste dans une feuille de calcul." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): Via the search bar, apply a Custom Filter where the status must be Quotation Sent.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : Via la barre de recherche, appliquez un filtre personnalisé où le statut doit être Devis envoyé.",
    },
  }),
complexQ({
    id: "spr-031",
    module: "spreadsheet",
    text: {
      en: "You want to track only the \"Top 5\" unconfirmed quotations. How is the number of records determined during the insertion process? (Odoo Learn — Insert an Odoo list)",
      fr: "Vous souhaitez suivre uniquement les \"Top 5\" des cotations non confirmées. Comment le nombre d’enregistrements est-il déterminé lors du processus d’insertion ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "In the \"Insert in Spreadsheet\" pop-up window, you can manually update the number of records to 5.",
      fr: "Dans la fenêtre contextuelle « Insérer dans une feuille de calcul », vous pouvez mettre à jour manuellement le nombre d'enregistrements à 5.",
    },
    distractors: [
      { en: "Odoo always inserts the first 80 records by default, and you need to hide the extra rows in the spreadsheet.", fr: "Odoo insère toujours les 80 premiers enregistrements par défaut et vous devez masquer les lignes supplémentaires dans la feuille de calcul." },
      { en: "The number of records is fixed based on the \"My Quotation\" filter and cannot be changed during insertion.", fr: "Le nombre d'enregistrements est fixe en fonction du filtre \"Mon Devis\" et ne peut être modifié lors de l'insertion." },
      { en: "Click the slider menu then, at the bottom, enter the number of records to insert.", fr: "Cliquez sur le menu coulissant puis, en bas, saisissez le nombre d'enregistrements à insérer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): In the \"Insert in Spreadsheet\" pop-up window, you can manually update the number of records to 5.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : Dans la fenêtre contextuelle \"Insérer dans une feuille de calcul\", vous pouvez mettre à jour manuellement le nombre d'enregistrements à 5.",
    },
  }),
complexQ({
    id: "spr-032",
    module: "spreadsheet",
    text: {
      en: "A spreadsheet you are working in includes several lists that have been inserted from your database. How can you easily see which model the data has been retrieved from? (Odoo Learn — Insert an Odoo list)",
      fr: "Une feuille de calcul dans laquelle vous travaillez comprend plusieurs listes qui ont été insérées à partir de votre base de données. Comment pouvez-vous facilement voir de quel modèle les données ont été récupérées ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "In the List properties panel on the right side of the spreadsheet, accessible by clicking on the data source from the Data menu.",
      fr: "Dans le panneau Propriétés de la liste sur le côté droit de la feuille de calcul, accessible en cliquant sur la source de données depuis le menu Données.",
    },
    distractors: [
      { en: "By right-clicking any cell in the table and selecting \"See record.\"", fr: "En cliquant avec le bouton droit sur n'importe quelle cellule du tableau et en sélectionnant \"Voir l'enregistrement\"." },
      { en: "In the Odoo Settings menu under Technical > Models.", fr: "Dans le menu Paramètres Odoo sous Technique > Modèles." },
      { en: "Inside the sheet name itself, which always displays the model’s technical name.", fr: "À l’intérieur du nom de la feuille lui-même, qui affiche toujours le nom technique du modèle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): In the List properties panel on the right side of the spreadsheet, accessible by clicking on the data source from the Data menu.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : Dans le panneau Propriétés de la liste sur le côté droit de la feuille de calcul, accessible en cliquant sur la source de données depuis le menu Données.",
    },
  }),
complexQ({
    id: "spr-033",
    module: "spreadsheet",
    text: {
      en: "In the formula =ODOO.LIST(2, 5, \"user_id\"), what does the second argument (i.e., the number '5') represent? (Odoo Learn — Insert an Odoo list)",
      fr: "Dans la formule =ODOO.LIST(2, 5, \"user_id\"), que représente le deuxième argument (c'est-à-dire le nombre « 5 ») ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "The Index, which represents the specific record's original position in the list before insertion.",
      fr: "L'index, qui représente la position d'origine de l'enregistrement spécifique dans la liste avant l'insertion.",
    },
    distractors: [
      { en: "The List ID, which identifies which data source in the spreadsheet to use.", fr: "L'ID de liste, qui identifie la source de données à utiliser dans la feuille de calcul." },
      { en: "The total number of records currently being displayed in that table.", fr: "Nombre total d'enregistrements actuellement affichés dans cette table." },
      { en: "The salesperson's database ID (user_id).", fr: "L'ID de base de données du vendeur (user_id)." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): The Index, which represents the specific record's original position in the list before insertion.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : L'index, qui représente la position d'origine de l'enregistrement spécifique dans la liste avant l'insertion.",
    },
  }),
complexQ({
    id: "spr-034",
    module: "spreadsheet",
    text: {
      en: "When preparing a chart accessed via the Reporting menu of an app, which of the following actions can you perform before inserting it into a spreadsheet? (Odoo Learn — Insert an Odoo chart)",
      fr: "Lors de la préparation d'un graphique accessible via le menu Rapports d'une application, laquelle des actions suivantes pouvez-vous effectuer avant de l'insérer dans une feuille de calcul ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "Change the measure(s) displayed in the chart and apply filters.",
      fr: "Modifiez la ou les mesures affichées dans le graphique et appliquez des filtres.",
    },
    distractors: [
      { en: "Directly edit the underlying data by clicking on a segment of data.", fr: "Modifiez directement les données sous-jacentes en cliquant sur un segment de données." },
      { en: "Set up an automatic email schedule to send the chart to specific followers every time the data updates.", fr: "Configurez un calendrier de courrier électronique automatique pour envoyer le graphique à des abonnés spécifiques à chaque fois que les données sont mises à jour." },
      { en: "Define advanced design customizations like the chart's background color, axis font sizes, and legend positioning.", fr: "Définissez des personnalisations de conception avancées telles que la couleur d'arrière-plan du graphique, la taille de la police des axes et le positionnement de la légende." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): Change the measure(s) displayed in the chart and apply filters.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : modifiez la ou les mesures affichées dans le graphique et appliquez des filtres.",
    },
  }),
complexQ({
    id: "spr-035",
    module: "spreadsheet",
    text: {
      en: "Which of the following can be modified within the \"Design\" tab of the Chart properties panel once a chart is inserted into an Odoo spreadsheet? (Odoo Learn — Insert an Odoo chart)",
      fr: "Lequel des éléments suivants peut être modifié dans l'onglet « Conception » du panneau Propriétés du graphique une fois qu'un graphique est inséré dans une feuille de calcul Odoo ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "The chart’s background color, font formatting for titles, and the position of the legend.",
      fr: "La couleur d’arrière-plan du graphique, la mise en forme de la police des titres et la position de la légende.",
    },
    distractors: [
      { en: "The Odoo model the data is being retrieved from (e.g., changing from the Sales Order model to the Contacts model).", fr: "Le modèle Odoo à partir duquel les données sont récupérées (par exemple, passage du modèle Commande client au modèle Contacts)." },
      { en: "The technical domain used to filter the records.", fr: "Le domaine technique utilisé pour filtrer les enregistrements." },
      { en: "The list of users who have permission to view the spreadsheet.", fr: "Liste des utilisateurs autorisés à afficher la feuille de calcul." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): The chart’s background color, font formatting for titles, and the position of the legend.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : la couleur d'arrière-plan du graphique, le formatage de la police des titres et la position de la légende.",
    },
  }),
complexQ({
    id: "spr-036",
    module: "spreadsheet",
    text: {
      en: "What is the purpose of the \"Link to Odoo\" feature found in the “Configuration” tab of the Chart properties panel? (Odoo Learn — Insert an Odoo chart)",
      fr: "Quel est l'objectif de la fonctionnalité « Lien vers Odoo » présente dans l'onglet « Configuration » du panneau des propriétés du graphique ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "It adds a link to the original data source or to a specific Odoo menu item.",
      fr: "Il ajoute un lien vers la source de données d'origine ou vers un élément de menu Odoo spécifique.",
    },
    distractors: [
      { en: "It allows external clients to view the spreadsheet via a link without needing an Odoo login.", fr: "Il permet aux clients externes de visualiser la feuille de calcul via un lien sans avoir besoin d'une connexion Odoo." },
      { en: "It automatically sends an email notification to the Sales Manager whenever the data updates.", fr: "Il envoie automatiquement une notification par e-mail au responsable des ventes chaque fois que les données sont mises à jour." },
      { en: "Enabling this feature ensures that the chart data remains up-to-date when change are made in the database.", fr: "L'activation de cette fonctionnalité garantit que les données du graphique restent à jour lorsque des modifications sont apportées à la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): It adds a link to the original data source or to a specific Odoo menu item.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : il ajoute un lien vers la source de données d'origine ou vers un élément de menu Odoo spécifique.",
    },
  }),
complexQ({
    id: "spr-037",
    module: "spreadsheet",
    text: {
      en: "What happens if you click on a specific data segment (like a colored bar) of an Odoo chart within a spreadsheet? (Odoo Learn — Insert an Odoo chart)",
      fr: "Que se passe-t-il si vous cliquez sur un segment de données spécifique (comme une barre colorée) d'un graphique Odoo dans une feuille de calcul ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "It allows you to directly access and view all the underlying Odoo database records that make up that specific total.",
      fr: "Il vous permet d'accéder et de visualiser directement tous les enregistrements de la base de données Odoo sous-jacente qui composent ce total spécifique.",
    },
    distractors: [
      { en: "It opens the \"Design\" tab of the chart properties to change the color of that segment.", fr: "Il ouvre l'onglet \"Conception\" des propriétés du graphique pour changer la couleur de ce segment." },
      { en: "It deletes that segment from the chart to help you focus on other data points.", fr: "Il supprime ce segment du graphique pour vous aider à vous concentrer sur d'autres points de données." },
      { en: "It automatically sends a message to the salesperson represented by that segment.", fr: "Il envoie automatiquement un message au vendeur représenté par ce segment." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): It allows you to directly access and view all the underlying Odoo database records that make up that specific total.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : Il vous permet d'accéder et de visualiser directement tous les enregistrements de la base de données Odoo sous-jacente qui composent ce total spécifique.",
    },
  }),
complexQ({
    id: "spr-055",
    module: "spreadsheet",
    text: {
      en: "According to the MasterClass Spreadsheet & Dashboard, how does Odoo's BI approach differ from traditional BI (ETL)? (MasterClass — Spreadsheet & Dashboard)",
      fr: "Selon le tableur et tableau de bord MasterClass, en quoi l'approche BI d'Odoo diffère-t-elle de la BI traditionnelle (ETL) ? (MasterClass - Feuille de calcul et tableau de bord)",
    },
    correct: {
      en: "BI stays inside Odoo Spreadsheets with live data — no separate data warehouse or third-party visualization stack is required.",
      fr: "La BI reste dans les feuilles de calcul Odoo avec des données en direct — aucun entrepôt de données séparé ni pile de visualisation tierce n'est requis.",
    },
    distractors: [
      { en: "Odoo still requires a full ETL pipeline into an external warehouse before any spreadsheet can refresh.", fr: "Odoo nécessite toujours un pipeline ETL complet dans un entrepôt externe avant qu'une feuille de calcul puisse être actualisée." },
      { en: "Odoo only supports static Excel exports that must be re-imported after each database change.", fr: "Odoo ne prend en charge que les exportations Excel statiques qui doivent être réimportées après chaque modification de la base de données." },
      { en: "Traditional BI tools are mandatory; Odoo Spreadsheets are limited to offline calculations only.", fr: "Les outils BI traditionnels sont obligatoires ; Les feuilles de calcul Odoo sont limitées aux calculs hors ligne uniquement." },
    ],
    explanation: {
      en: "MasterClass: Odoo embeds BI in spreadsheets so users analyze real-time data without external warehouses or complex integrations.",
      fr: "MasterClass : Odoo intègre la BI dans des feuilles de calcul afin que les utilisateurs analysent les données en temps réel sans entrepôts externes ni intégrations complexes.",
    },
  }),
complexQ({
    id: "spr-056",
    module: "spreadsheet",
    text: {
      en: "Can an Odoo Spreadsheet reference cells from a different spreadsheet file? (MasterClass — Fundamentals)",
      fr: "Une feuille de calcul Odoo peut-elle référencer des cellules provenant d'un autre fichier de feuille de calcul ? (MasterClass - Fondamentaux)",
    },
    correct: {
      en: "No — Odoo blocks cross-spreadsheet references to avoid data leaks when collaborators lack access to the other file.",
      fr: "Non — Odoo bloque les références entre feuilles de calcul pour éviter les fuites de données lorsque les collaborateurs n'ont pas accès à l'autre fichier.",
    },
    distractors: [
      { en: "Yes — any spreadsheet in Documents can be linked with =OtherFile!A1 syntax.", fr: "Oui — n'importe quelle feuille de calcul dans Documents peut être liée avec la syntaxe =OtherFile!A1." },
      { en: "Yes — but only if both files are in the same Documents workspace folder.", fr: "Oui, mais uniquement si les deux fichiers se trouvent dans le même dossier de l'espace de travail Documents." },
      { en: "Yes — cross-file references work when both users have Admin access rights.", fr: "Oui : les références entre fichiers fonctionnent lorsque les deux utilisateurs disposent de droits d'accès administrateur." },
    ],
    explanation: {
      en: "MasterClass Fundamentals: Odoo does not allow referencing another spreadsheet to keep data safe from leaks.",
      fr: "Fondamentaux de MasterClass : Odoo ne permet pas de référencer une autre feuille de calcul pour protéger les données contre les fuites.",
    },
  }),
complexQ({
    id: "spr-057",
    module: "spreadsheet",
    text: {
      en: "What does vectorization do in Odoo Spreadsheets? (MasterClass — Fundamentals)",
      fr: "À quoi sert la vectorisation dans les feuilles de calcul Odoo ? (MasterClass - Fondamentaux)",
    },
    correct: {
      en: "It applies a formula written for a single cell across a whole range, spilling results into empty neighboring cells.",
      fr: "Il applique une formule écrite pour une seule cellule sur toute une plage, déversant les résultats dans les cellules voisines vides.",
    },
    distractors: [
      { en: "It converts every formula into a pivot table automatically when you press Enter.", fr: "Il convertit automatiquement chaque formule en tableau croisé dynamique lorsque vous appuyez sur Entrée." },
      { en: "It compresses spreadsheet file size by storing only unique cell values.", fr: "Il compresse la taille du fichier de feuille de calcul en stockant uniquement les valeurs de cellule uniques." },
      { en: "It forces absolute references ($) on every formula you copy.", fr: "Il force des références absolues ($) sur chaque formule que vous copiez." },
    ],
    explanation: {
      en: "MasterClass: vectorization expands a single-cell formula over a range when destination cells are empty.",
      fr: "MasterClass : la vectorisation étend une formule à cellule unique sur une plage lorsque les cellules de destination sont vides.",
    },
  }),
complexQ({
    id: "spr-058",
    module: "spreadsheet",
    text: {
      en: "Which keyboard shortcut cycles a cell reference between relative, absolute, and mixed modes in Odoo Spreadsheets? (MasterClass — Fundamentals)",
      fr: "Quel raccourci clavier fait défiler une référence de cellule entre les modes relatif, absolu et mixte dans les feuilles de calcul Odoo ? (MasterClass - Fondamentaux)",
    },
    correct: {
      en: "Fn + F4 (or the platform equivalent) while the reference is selected in the formula.",
      fr: "Fn + F4 (ou l'équivalent plateforme) pendant que la référence est sélectionnée dans la formule.",
    },
    distractors: [
      { en: "Ctrl + Shift + $ which permanently locks every reference in the sheet.", fr: "Ctrl + Shift + $ qui verrouille définitivement chaque référence dans la feuille." },
      { en: "Alt + Enter which converts the formula into an array constant.", fr: "Alt + Entrée qui convertit la formule en constante matricielle." },
      { en: "Ctrl + ; which inserts today's date as an absolute value.", fr: "Ctrl+ ; qui insère la date du jour comme valeur absolue." },
    ],
    explanation: {
      en: "MasterClass tip: click a reference and use Fn + F4 to toggle $, $A1, A$1, and A1 styles.",
      fr: "Astuce MasterClass : cliquez sur une référence et utilisez Fn + F4 pour basculer les styles $, $A1, A$1 et A1.",
    },
  }),
complexQ({
    id: "spr-059",
    module: "spreadsheet",
    text: {
      en: "What does the #SPILL! error mean in Odoo Spreadsheets? (MasterClass — Fundamentals)",
      fr: "Qu'est-ce que le #SPILL! erreur moyenne dans les feuilles de calcul Odoo ? (MasterClass - Fondamentaux)",
    },
    correct: {
      en: "An array formula cannot expand because it would overwrite occupied cells or there are not enough empty cells.",
      fr: "Une formule matricielle ne peut pas se développer car elle écraserait les cellules occupées ou s'il n'y a pas suffisamment de cellules vides.",
    },
    distractors: [
      { en: "The spreadsheet ran out of IAP credits and cannot refresh Odoo lists.", fr: "La feuille de calcul est à court de crédits IAP et ne peut pas actualiser les listes Odoo." },
      { en: "A VLOOKUP found multiple matches and needs an exact-match flag.", fr: "Une RECHERCHEV a trouvé plusieurs correspondances et nécessite un indicateur de correspondance exacte." },
      { en: "The formula references a deleted sheet tab that must be restored.", fr: "La formule fait référence à un onglet de feuille supprimé qui doit être restauré." },
    ],
    explanation: {
      en: "MasterClass troubleshooting: #SPILL! means the spilled array would overwrite values or lacks space — clear cells or add rows/columns.",
      fr: "Dépannage MasterClass : #SPILL ! signifie que le tableau renversé écraserait les valeurs ou manquerait d'espace - effacerait les cellules ou ajouterait des lignes/colonnes.",
    },
  }),
complexQ({
    id: "spr-060",
    module: "spreadsheet",
    text: {
      en: "Which nested pattern correctly checks if ANY of several conditions is true inside an IF? (MasterClass — Logical functions)",
      fr: "Quel modèle imbriqué vérifie correctement si l'une des conditions est vraie à l'intérieur d'un IF ? (MasterClass — Fonctions logiques)",
    },
    correct: {
      en: "=IF(OR(test1, test2), value_if_true, value_if_false)",
      fr: "=SI(OU(test1, test2), valeur_si_true, valeur_if_false)",
    },
    distractors: [
      { en: "=IF(AND(test1, test2), value_if_true, value_if_false) which requires every condition.", fr: "=IF(AND(test1, test2), value_if_true, value_if_false) qui nécessite chaque condition." },
      { en: "=IF(NOT(test1, test2), value_if_true, value_if_false) which is invalid OR syntax.", fr: "=IF(NOT(test1, test2), value_if_true, value_if_false) qui est une syntaxe OU invalide." },
      { en: "=OR(IF(test1), IF(test2)) which cannot return custom true/false labels.", fr: "=OR(IF(test1), IF(test2)) qui ne peut pas renvoyer d'étiquettes vrai/faux personnalisées." },
    ],
    explanation: {
      en: "MasterClass Logical functions: OR returns TRUE if any condition is true; nest it inside IF for conditional labels.",
      fr: "Fonctions logiques MasterClass : OR renvoie TRUE si une condition est vraie ; imbriquez-le dans IF pour les étiquettes conditionnelles.",
    },
  }),
complexQ({
    id: "spr-061",
    module: "spreadsheet",
    text: {
      en: "In VLOOKUP, where must the lookup key column be located? (MasterClass — Search functions)",
      fr: "Dans RECHERCHEV, où doit se trouver la colonne de clé de recherche ? (MasterClass — Fonctions de recherche)",
    },
    correct: {
      en: "In the first column of the searched table/range; the return column is given by a positive column index.",
      fr: "Dans la première colonne du tableau/plage recherché ; la colonne de retour est donnée par un index de colonne positif.",
    },
    distractors: [
      { en: "In the last column of the range so the formula can search backwards by default.", fr: "Dans la dernière colonne de la plage afin que la formule puisse effectuer une recherche en arrière par défaut." },
      { en: "Anywhere in the workbook as long as the sheet name is prefixed.", fr: "N'importe où dans le classeur à condition que le nom de la feuille soit préfixé." },
      { en: "Only in a named pivot table; VLOOKUP cannot search plain cell ranges.", fr: "Uniquement dans un tableau croisé dynamique nommé ; RECHERCHEV ne peut pas rechercher des plages de cellules simples." },
    ],
    explanation: {
      en: "MasterClass: VLOOKUP searches the first column of the table and returns a value from the same row at the given index.",
      fr: "MasterClass : VLOOKUP recherche la première colonne de la table et renvoie une valeur de la même ligne à l'index donné.",
    },
  }),
complexQ({
    id: "spr-062",
    module: "spreadsheet",
    text: {
      en: "Why is XLOOKUP often preferred over VLOOKUP/HLOOKUP in the MasterClass? (MasterClass — Search functions)",
      fr: "Pourquoi XLOOKUP est-il souvent préféré à VLOOKUP/HLOOKUP dans la MasterClass ? (MasterClass — Fonctions de recherche)",
    },
    correct: {
      en: "It is more flexible: separate lookup/return arrays, optional default if missing, and reverse search mode (-1).",
      fr: "Il est plus flexible : tableaux de recherche/retour séparés, valeur par défaut facultative en cas d'absence et mode de recherche inversée (-1).",
    },
    distractors: [
      { en: "It is the only function allowed to query live Odoo lists inside a spreadsheet.", fr: "C'est la seule fonction autorisée à interroger des listes Odoo en direct dans une feuille de calcul." },
      { en: "It automatically creates a dashboard filter for every matched row.", fr: "Il crée automatiquement un filtre de tableau de bord pour chaque ligne correspondante." },
      { en: "It removes the need for absolute references when copying formulas.", fr: "Cela supprime le besoin de références absolues lors de la copie de formules." },
    ],
    explanation: {
      en: "MasterClass: XLOOKUP adds flexible arrays, a not-found message, match type, and search direction including reverse (-1).",
      fr: "MasterClass : XLOOKUP ajoute des tableaux flexibles, un message introuvable, un type de correspondance et un sens de recherche, y compris l'inverse (-1).",
    },
  }),
complexQ({
    id: "spr-063",
    module: "spreadsheet",
    text: {
      en: "When should you use IFNA instead of IFERROR? (MasterClass — Error handling)",
      fr: "Quand devriez-vous utiliser IFNA au lieu de SIERREUR ? (MasterClass - Gestion des erreurs)",
    },
    correct: {
      en: "When you only want to catch #N/A from search functions, while still surfacing other errors like #DIV/0!.",
      fr: "Lorsque vous souhaitez uniquement récupérer #N/A à partir des fonctions de recherche, tout en faisant apparaître d'autres erreurs comme #DIV/0 !.",
    },
    distractors: [
      { en: "When you need to hide every possible spreadsheet error including #REF! and #VALUE!.", fr: "Lorsque vous devez masquer toutes les erreurs possibles dans une feuille de calcul, y compris #REF ! et #VALEUR !." },
      { en: "When the formula returns TRUE/FALSE logical values that must be inverted.", fr: "Lorsque la formule renvoie des valeurs logiques VRAI/FAUX qui doivent être inversées." },
      { en: "When rounding decimal results before they appear on a dashboard chart.", fr: "Lors de l'arrondi des résultats décimaux avant qu'ils n'apparaissent sur un tableau de bord." },
    ],
    explanation: {
      en: "MasterClass: IFNA is specific to missing lookup results (#N/A); IFERROR catches all error types.",
      fr: "MasterClass : IFNA est spécifique aux résultats de recherche manquants (#N/A) ; IFERROR détecte tous les types d'erreurs.",
    },
  }),
complexQ({
    id: "spr-064",
    module: "spreadsheet",
    text: {
      en: "What is a key benefit of inserting Odoo lists/pivots into a spreadsheet for reporting? (MasterClass — Data Insertion)",
      fr: "Quel est l'avantage clé de l'insertion de listes/pivots Odoo dans une feuille de calcul à des fins de reporting ? (MasterClass - Insertion de données)",
    },
    correct: {
      en: "The data stays linked to the database and can refresh in real time under the user's access rights.",
      fr: "Les données restent liées à la base de données et peuvent s'actualiser en temps réel selon les droits d'accès de l'utilisateur.",
    },
    distractors: [
      { en: "The data is copied once as static values and never updates again.", fr: "Les données sont copiées une fois sous forme de valeurs statiques et ne sont plus jamais mises à jour." },
      { en: "Inserted lists bypass access domains so every user sees all companies' data.", fr: "Les listes insérées contournent les domaines d'accès afin que chaque utilisateur puisse voir les données de toutes les entreprises." },
      { en: "Pivots can only be refreshed after exporting the spreadsheet to Excel.", fr: "Les pivots ne peuvent être actualisés qu'après avoir exporté la feuille de calcul vers Excel." },
    ],
    explanation: {
      en: "MasterClass reporting modules emphasize live Odoo data insertion with security applied in real time.",
      fr: "Les modules de reporting MasterClass mettent l'accent sur l'insertion de données Odoo en direct avec une sécurité appliquée en temps réel.",
    },
  }),
complexQ({
    id: "spr-065",
    module: "spreadsheet",
    text: {
      en: "What do global filters on an Odoo spreadsheet dashboard typically affect? (MasterClass — Filters / Dashboards)",
      fr: "Qu'affectent généralement les filtres globaux sur un tableau de bord de feuille de calcul Odoo ? (MasterClass — Filtres/Tableaux de bord)",
    },
    correct: {
      en: "They apply across linked lists, pivots, and charts so one period/company/partner selection updates the whole view.",
      fr: "Ils s'appliquent à l'ensemble des listes chaînées, des tableaux croisés dynamiques et des graphiques, de sorte qu'une sélection de période/entreprise/partenaire met à jour l'ensemble de la vue.",
    },
    distractors: [
      { en: "They only change the formatting theme of dashboard widgets.", fr: "Ils modifient uniquement le thème de formatage des widgets du tableau de bord." },
      { en: "They permanently delete rows that do not match the filter domain.", fr: "Ils suppriment définitivement les lignes qui ne correspondent pas au domaine de filtrage." },
      { en: "They sync only with Excel's AutoFilter and ignore Odoo pivots.", fr: "Ils se synchronisent uniquement avec le filtre automatique d'Excel et ignorent les pivots Odoo." },
    ],
    explanation: {
      en: "MasterClass dashboards: filters let users explore data from multiple perspectives across widgets.",
      fr: "Tableaux de bord MasterClass : les filtres permettent aux utilisateurs d'explorer les données sous plusieurs perspectives à travers les widgets.",
    },
  }),
complexQ({
    id: "spr-066",
    module: "spreadsheet",
    text: {
      en: "According to the MasterClass, how are access rights enforced on spreadsheet BI content? (MasterClass — Access rights & Sharing)",
      fr: "Selon la MasterClass, comment les droits d'accès sont-ils appliqués au contenu des feuilles de calcul BI ? (MasterClass — Droits d'accès & Partage)",
    },
    correct: {
      en: "Odoo security is applied in real time — users only see database rows they are authorized to access.",
      fr: "La sécurité Odoo est appliquée en temps réel : les utilisateurs ne voient que les lignes de la base de données auxquelles ils sont autorisés à accéder.",
    },
    distractors: [
      { en: "Access rights are evaluated only when the spreadsheet is first created, then frozen forever.", fr: "Les droits d'accès sont évalués uniquement lors de la création initiale de la feuille de calcul, puis figés pour toujours." },
      { en: "Anyone with the spreadsheet link can see all underlying records regardless of groups.", fr: "Toute personne disposant du lien vers la feuille de calcul peut voir tous les enregistrements sous-jacents, quels que soient les groupes." },
      { en: "Sharing a dashboard automatically grants Accounting Administrator rights.", fr: "Le partage d'un tableau de bord accorde automatiquement les droits d'administrateur comptable." },
    ],
    explanation: {
      en: "MasterClass: integrated BI keeps Odoo access control so sensitive data stays protected while collaborating.",
      fr: "MasterClass : la BI intégrée maintient le contrôle d'accès d'Odoo afin que les données sensibles restent protégées pendant la collaboration.",
    },
  }),
complexQ({
    id: "spr-067",
    module: "spreadsheet",
    text: {
      en: "What is TEXTJOIN's second argument (TRUE/FALSE) used for? (MasterClass — Text functions)",
      fr: "A quoi sert le deuxième argument de TEXTJOIN (TRUE/FALSE) ? (MasterClass — Fonctions de texte)",
    },
    correct: {
      en: "TRUE ignores empty cells so you do not get consecutive delimiters; FALSE keeps empties and may create double separators.",
      fr: "TRUE ignore les cellules vides afin que vous n'obteniez pas de délimiteurs consécutifs ; FALSE garde les vides et peut créer des séparateurs doubles.",
    },
    distractors: [
      { en: "TRUE forces uppercase output; FALSE keeps the original letter casing.", fr: "TRUE force la sortie en majuscules ; FALSE conserve la casse originale de la lettre." },
      { en: "TRUE converts numbers to text; FALSE leaves numeric types unchanged.", fr: "TRUE convertit les nombres en texte ; FALSE laisse les types numériques inchangés." },
      { en: "TRUE sorts joined values alphabetically before concatenating them.", fr: "TRUE trie les valeurs jointes par ordre alphabétique avant de les concaténer." },
    ],
    explanation: {
      en: "MasterClass Text functions: TEXTJOIN(delimiter, ignore_empty, ...) — TRUE skips blanks to avoid ,, artifacts.",
      fr: "Fonctions de texte MasterClass : TEXTJOIN(delimiter, ignore_empty, ...) – TRUE ignore les espaces pour éviter les artefacts.",
    },
  }),
complexQ({
    id: "spr-068",
    module: "spreadsheet",
    text: {
      en: "Which training module in the MasterClass focuses on building quotes with spreadsheet logic tied to Odoo? (MasterClass — Quote Calculator)",
      fr: "Quel module de formation de la MasterClass se concentre sur la création de devis avec une logique de feuille de calcul liée à Odoo ? (MasterClass — Calculateur de devis)",
    },
    correct: {
      en: "The Quote Calculator section — estimate costs, margins, and pricing strategies with spreadsheet expertise.",
      fr: "La section Calculateur de devis : estimez les coûts, les marges et les stratégies de tarification grâce à une expertise en matière de feuilles de calcul.",
    },
    distractors: [
      { en: "The CRM Pipe analysis use case only — it cannot price products.", fr: "Cas d'utilisation de l'analyse CRM Pipe uniquement : il ne peut pas fixer le prix des produits." },
      { en: "The Keyboard shortcuts chapter — it only covers navigation tips.", fr: "Le chapitre sur les raccourcis clavier : il ne couvre que les conseils de navigation." },
      { en: "The Rounding functions lesson — it only formats currency decimals.", fr: "La leçon sur les fonctions d'arrondi : elle ne formate que les décimales monétaires." },
    ],
    explanation: {
      en: "MasterClass goals include mastering the Quote Calculator using Odoo spreadsheet skills for costs and margins.",
      fr: "Les objectifs de la MasterClass incluent la maîtrise du calculateur de devis à l'aide des compétences de feuille de calcul Odoo pour les coûts et les marges.",
    },
  }),
];
