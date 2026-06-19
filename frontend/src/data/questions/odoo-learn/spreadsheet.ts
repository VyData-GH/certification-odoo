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
];
