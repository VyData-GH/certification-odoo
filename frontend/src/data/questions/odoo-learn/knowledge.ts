import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const knowledgeLearnQuestions = [
  complexQ({
    id: "kno-021",
    module: "knowledge",
    text: {
      en: "Which actions best describe moving an article from a draft to specific access? (Odoo Learn — Create articles)",
      fr: "Quelles actions décrivent le mieux le déplacement d’un article d’un brouillon vers un accès spécifique ? (Odoo Learn — Créer des articles)",
    },
    correct: {
      en: "Private > Workspace > Shared",
      fr: "Privé > Espace de travail > Partagé",
    },
    distractors: [
      { en: "Favorites > Shared > Workspace", fr: "Favoris > Partagé > Espace de travail" },
      { en: "Favorites > Workspace > Shared", fr: "Favoris > Espace de travail > Partagé" },
      { en: "New > Shared > Workspace", fr: "Nouveau > Partagé > Espace de travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create articles): Private > Workspace > Shared",
      fr: "Source Odoo Learn (Créer des articles) : Privé > Espace de travail > Partagé",
    },
  }),
  complexQ({
    id: "kno-022",
    module: "knowledge",
    text: {
      en: "Where are articles initially created using the \"New Article\" button? (Odoo Learn — Create articles)",
      fr: "Où sont initialement créés les articles à l'aide du bouton « Nouvel article » ? (Odoo Learn — Créer des articles)",
    },
    correct: {
      en: "In the \"Private\" category",
      fr: "Dans la catégorie \"Privé\"",
    },
    distractors: [
      { en: "In the \"Favorites\" category", fr: "Dans la catégorie \"Favoris\"" },
      { en: "In the \"Workspace\" category", fr: "Dans la catégorie \"Espace de travail\"" },
      { en: "In the \"Shared\" category", fr: "Dans la catégorie \"Partagé\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create articles): In the \"Private\" category",
      fr: "Source Odoo Learn (Créer des articles) : Dans la catégorie \"Privé\"",
    },
  }),
  complexQ({
    id: "kno-023",
    module: "knowledge",
    text: {
      en: "If you create an article from the \"Workspace\", which of the following statements is most accurate? (Odoo Learn — Create articles)",
      fr: "Si vous créez un article à partir de « l'espace de travail », laquelle des affirmations suivantes est la plus précise ? (Odoo Learn — Créer des articles)",
    },
    correct: {
      en: "The article will be immediately accessible to all members with access to Knowledge.",
      fr: "L’article sera immédiatement accessible à tous les membres ayant accès à Knowledge.",
    },
    distractors: [
      { en: "The article will be automatically placed in the \"Favorites\" section.", fr: "L'article sera automatiquement placé dans la section \"Favoris\"." },
      { en: "The article will only be visible to the user who created it until it is moved to \"Shared”.", fr: "L'article ne sera visible que par l'utilisateur qui l'a créé jusqu'à ce qu'il soit déplacé vers « Partagé »." },
      { en: "The article will require a manual transfer from \"Private\" before being visible to other members.", fr: "L'article nécessitera un transfert manuel depuis \"Privé\" avant d'être visible par les autres membres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create articles): The article will be immediately accessible to all members with access to Knowledge.",
      fr: "Source Odoo Learn (Créer des articles) : L'article sera immédiatement accessible à tous les membres ayant accès à Knowledge.",
    },
  }),
  complexQ({
    id: "kno-024",
    module: "knowledge",
    text: {
      en: "What is the primary purpose of renaming an \"Untitled\" article to match its header? (Odoo Learn — Create articles)",
      fr: "Quel est le but principal de renommer un article « Sans titre » pour qu'il corresponde à son en-tête ? (Odoo Learn — Créer des articles)",
    },
    correct: {
      en: "To align the article's title with its content for organizational clarity.",
      fr: "Aligner le titre de l'article avec son contenu pour plus de clarté organisationnelle.",
    },
    distractors: [
      { en: "To ensure the article is automatically moved to the \"Favorites\" section.", fr: "Pour garantir que l'article est automatiquement déplacé vers la section \"Favoris\"." },
      { en: "To activate the \"Shared\" section for collaborative access.", fr: "Pour activer la section \"Partagé\" pour un accès collaboratif." },
      { en: "To unlock the ability to utilize pre-configured templates.", fr: "Pour débloquer la possibilité d’utiliser des modèles préconfigurés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create articles): To align the article's title with its content for organizational clarity.",
      fr: "Source Odoo Learn (Créer des articles) : Pour aligner le titre de l'article avec son contenu pour plus de clarté organisationnelle.",
    },
  }),
  complexQ({
    id: "kno-025",
    module: "knowledge",
    text: {
      en: "How can you edit a word, sentence, or paragraph? (Odoo Learn — Edit articles)",
      fr: "Comment modifier un mot, une phrase ou un paragraphe ? (Odoo Learn — Modifier des articles)",
    },
    correct: {
      en: "Select or double-click it to display the text editor toolbar.",
      fr: "Sélectionnez-le ou double-cliquez dessus pour afficher la barre d'outils de l'éditeur de texte.",
    },
    distractors: [
      { en: "Click on it once.", fr: "Cliquez dessus une fois." },
      { en: "Open the settings menu and choose “Edit Text”.", fr: "Ouvrez le menu des paramètres et choisissez « Modifier le texte »." },
      { en: "Drag and drop it into the editor box.", fr: "Faites-le glisser et déposez-le dans la zone de l'éditeur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit articles): Select or double-click it to display the text editor toolbar.",
      fr: "Source Odoo Learn (Modifier les articles) : Sélectionnez ou double-cliquez dessus pour afficher la barre d'outils de l'éditeur de texte.",
    },
  }),
  complexQ({
    id: "kno-026",
    module: "knowledge",
    text: {
      en: "Click the ellipsis, then select “Add Cover”. What is not an option for adding a cover picture? (Odoo Learn — Edit articles)",
      fr: "Cliquez sur les points de suspension, puis sélectionnez « Ajouter une couverture ». Qu'est-ce qui n'est pas une option pour ajouter une photo de couverture ? (Odoo Learn — Modifier des articles)",
    },
    correct: {
      en: "Dragging and dropping the image from your local drive to the Knowledge article.",
      fr: "Faites glisser et déposez l'image de votre lecteur local vers l'article Knowledge.",
    },
    distractors: [
      { en: "Searching the Unsplash database.", fr: "Recherche dans la base de données Unsplash." },
      { en: "Copy-pasting an image address.", fr: "Copiez-collez une adresse d'image." },
      { en: "Uploading an image to the library.", fr: "Téléchargement d'une image dans la bibliothèque." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit articles): Dragging and dropping the image from your local drive to the Knowledge article.",
      fr: "Source Odoo Learn (Modifier les articles) : Glisser et déposer l'image de votre lecteur local vers l'article Knowledge.",
    },
  }),
  complexQ({
    id: "kno-027",
    module: "knowledge",
    text: {
      en: "Which of the following statements about Knowledge commands is false? (Odoo Learn — Edit articles)",
      fr: "Laquelle des affirmations suivantes concernant les commandes Knowledge est fausse ? (Odoo Learn — Modifier des articles)",
    },
    correct: {
      en: "All HTML fields support Knowledge commands without the app.",
      fr: "Tous les champs HTML prennent en charge les commandes Knowledge sans l'application.",
    },
    distractors: [
      { en: "Type /index to show nested articles.", fr: "Tapez /index pour afficher les articles imbriqués." },
      { en: "Most Knowledge commands allow for the creation of items.", fr: "La plupart des commandes Knowledge permettent la création d'éléments." },
      { en: "Most Knowledge commands simulate app views.", fr: "La plupart des commandes Knowledge simulent les vues des applications." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit articles): All HTML fields support Knowledge commands without the app.",
      fr: "Source Odoo Learn (Modifier les articles) : Tous les champs HTML prennent en charge les commandes Knowledge sans l'application.",
    },
  }),
  complexQ({
    id: "kno-028",
    module: "knowledge",
    text: {
      en: "How can you add an emoji to the article’s header and name? (Odoo Learn — Edit articles)",
      fr: "Comment ajouter un emoji à l’en-tête et au nom de l’article ? (Odoo Learn — Modifier des articles)",
    },
    correct: {
      en: "Click the ellipsis icon and select \"Add Icon\".",
      fr: "Cliquez sur l'icône de points de suspension et sélectionnez \"Ajouter une icône\".",
    },
    distractors: [
      { en: "Type /emoji in the text editor.", fr: "Tapez /emoji dans l'éditeur de texte." },
      { en: "Insert an emoji using HTML code.", fr: "Insérez un emoji à l'aide du code HTML." },
      { en: "Drag an emoji from the emoji keyboard.", fr: "Faites glisser un emoji depuis le clavier emoji." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit articles): Click the ellipsis icon and select \"Add Icon\".",
      fr: "Source Odoo Learn (Modifier les articles) : Cliquez sur l'icône de points de suspension et sélectionnez \"Ajouter une icône\".",
    },
  }),
  complexQ({
    id: "kno-029",
    module: "knowledge",
    text: {
      en: "Click “Browse Templates”, select a template, then click “Load Template”. What do you need to do first before editing a template? (Odoo Learn — Edit articles)",
      fr: "Cliquez sur « Parcourir les modèles », sélectionnez un modèle, puis cliquez sur « Charger le modèle ». Que devez-vous faire avant de modifier un modèle ? (Odoo Learn — Modifier des articles)",
    },
    correct: {
      en: "You can edit templates like any other article.",
      fr: "Vous pouvez modifier les modèles comme n’importe quel autre article.",
    },
    distractors: [
      { en: "Click the ellipsis icon and select Unlock.", fr: "Cliquez sur l'icône de points de suspension et sélectionnez Déverrouiller." },
      { en: "Drag and drop the template in the Workspace section.", fr: "Faites glisser et déposez le modèle dans la section Espace de travail." },
      { en: "Request editing permissions from the administrator.", fr: "Demandez les autorisations de modification à l'administrateur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit articles): You can edit templates like any other article.",
      fr: "Source Odoo Learn (Modifier les articles) : Vous pouvez modifier les modèles comme n'importe quel autre article.",
    },
  }),
  complexQ({
    id: "kno-030",
    module: "knowledge",
    text: {
      en: "If you have a parent article with nested articles and type /index in the parent article, what does that command primarily do? (Odoo Learn — Manage and structure articles)",
      fr: "Si vous avez un article parent avec des articles imbriqués et que vous tapez /index dans l'article parent, que fait principalement cette commande ? (Odoo Learn — Gérer et structurer les articles)",
    },
    correct: {
      en: "It automatically lists all nested articles of the parent article.",
      fr: "Il répertorie automatiquement tous les articles imbriqués de l'article parent.",
    },
    distractors: [
      { en: "It creates additional nested articles.", fr: "Il crée des articles imbriqués supplémentaires." },
      { en: "It displays the parent article's content.", fr: "Il affiche le contenu de l'article parent." },
      { en: "It deletes all nested articles under the current workspace.", fr: "Il supprime tous les articles imbriqués sous l'espace de travail actuel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage and structure articles): It automatically lists all nested articles of the parent article.",
      fr: "Source Odoo Learn (Gérer et structurer les articles) : Il répertorie automatiquement tous les articles imbriqués de l'article parent.",
    },
  }),
  complexQ({
    id: "kno-031",
    module: "knowledge",
    text: {
      en: "After typing /index in a parent article, what does clicking \"Show All\" in the index view accomplish? (Odoo Learn — Manage and structure articles)",
      fr: "Après avoir tapé /index dans un article parent, qu'accomplit le fait de cliquer sur « Afficher tout » dans la vue index ? (Odoo Learn — Gérer et structurer les articles)",
    },
    correct: {
      en: "It displays articles contained in the nested articles.",
      fr: "Il affiche les articles contenus dans les articles imbriqués.",
    },
    distractors: [
      { en: "It reorders the nested articles.", fr: "Il réorganise les articles imbriqués." },
      { en: "It moves the articles to the Workspace.", fr: "Il déplace les articles vers l'espace de travail." },
      { en: "It adds the parent article to favorites.", fr: "Il ajoute l'article parent aux favoris." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage and structure articles): It displays articles contained in the nested articles.",
      fr: "Source Odoo Learn (Gérer et structurer les articles) : Il affiche les articles contenus dans les articles imbriqués.",
    },
  }),
  complexQ({
    id: "kno-032",
    module: "knowledge",
    text: {
      en: "What steps should you follow to download an article? (Odoo Learn — Manage and structure articles)",
      fr: "Quelles étapes suivre pour télécharger un article ? (Odoo Learn — Gérer et structurer les articles)",
    },
    correct: {
      en: "Click the ellipsis icon > Export > Save as PDF > Save.",
      fr: "Cliquez sur l'icône points de suspension > Exporter > Enregistrer au format PDF > Enregistrer.",
    },
    distractors: [
      { en: "Click Configuration > Favorites > Download.", fr: "Cliquez sur Configuration > Favoris > Télécharger." },
      { en: "Click the ellipsis icon > Move To > Save file > Save.", fr: "Cliquez sur l'icône points de suspension > Déplacer vers > Enregistrer le fichier > Enregistrer." },
      { en: "There is no downloading option in Knowledge.", fr: "Il n'y a pas d'option de téléchargement dans Knowledge." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage and structure articles): Click the ellipsis icon > Export > Save as PDF > Save.",
      fr: "Source Odoo Learn (Gérer et structurer les articles) : Cliquez sur l'icône points de suspension > Exporter > Enregistrer au format PDF > Enregistrer.",
    },
  }),
  complexQ({
    id: "kno-033",
    module: "knowledge",
    text: {
      en: "What two methods are used for moving articles within the sidebar tree? (Odoo Learn — Manage and structure articles)",
      fr: "Quelles sont les deux méthodes utilisées pour déplacer des articles dans l’arborescence de la barre latérale ? (Odoo Learn — Gérer et structurer les articles)",
    },
    correct: {
      en: "Drag and drop, or use the \"Move To\" option after clicking the ellipsis icon.",
      fr: "Faites glisser et déposez ou utilisez l'option \"Déplacer vers\" après avoir cliqué sur l'icône de points de suspension.",
    },
    distractors: [
      { en: "Copy and paste, and delete and recreate.", fr: "Copiez et collez, supprimez et recréez." },
      { en: "Sharing and unsharing, and archiving.", fr: "Partage et non-partage, et archivage." },
      { en: "Export and import, and rename.", fr: "Exportez et importez, puis renommez." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage and structure articles): Drag and drop, or use the \"Move To\" option after clicking the ellipsis icon.",
      fr: "Source Odoo Learn (Gérer et structurer les articles) : Glissez-déposez, ou utilisez l'option « Déplacer vers » après avoir cliqué sur l'icône points de suspension.",
    },
  }),
  complexQ({
    id: "kno-034",
    module: "knowledge",
    text: {
      en: "What does structuring articles in Knowledge imply? (Odoo Learn — Manage and structure articles)",
      fr: "Qu’implique la structuration des articles dans Knowledge ? (Odoo Learn — Gérer et structurer les articles)",
    },
    correct: {
      en: "Establishing a hierarchy between parent and nested articles.",
      fr: "Établir une hiérarchie entre les articles parents et imbriqués.",
    },
    distractors: [
      { en: "Personalizing the categories in the sidebar tree.", fr: "Personnalisation des catégories dans l'arborescence de la barre latérale." },
      { en: "Managing articles and making them visible or hidden.", fr: "Gérer les articles et les rendre visibles ou masqués." },
      { en: "Allowing for article edition.", fr: "Permettant l'édition d'articles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage and structure articles): Establishing a hierarchy between parent and nested articles.",
      fr: "Source Odoo Learn (Gérer et structurer les articles) : Etablir une hiérarchie entre les articles parents et imbriqués.",
    },
  }),
  complexQ({
    id: "kno-035",
    module: "knowledge",
    text: {
      en: "What is the main role of the Share feature? (Odoo Learn — Access rights)",
      fr: "Quel est le rôle principal de la fonctionnalité Partager ? (Odoo Learn — Droits d'accès)",
    },
    correct: {
      en: "To control an article's visibility and searchability.",
      fr: "Pour contrôler la visibilité et la possibilité de recherche d'un article.",
    },
    distractors: [
      { en: "To manage the content and formatting settings of an article.", fr: "Pour gérer le contenu et les paramètres de formatage d’un article." },
      { en: "To track changes made to an article and identify its creator.", fr: "Pour suivre les modifications apportées à un article et identifier son créateur." },
      { en: "To handle user feedback and the attached documents related to an article.", fr: "Pour gérer les commentaires des utilisateurs et les documents joints liés à un article." },
    ],
    explanation: {
      en: "Source Odoo Learn (Access rights): To control an article's visibility and searchability.",
      fr: "Source Odoo Learn (Droits d'accès) : Pour contrôler la visibilité et la possibilité de recherche d'un article.",
    },
  }),
  complexQ({
    id: "kno-036",
    module: "knowledge",
    text: {
      en: "If the \"Default Access Rights\" are \"Can read\" and \"Visibility\" is \"Everyone,\" what can all users do with the article? (Odoo Learn — Access rights)",
      fr: "Si les « Droits d'accès par défaut » sont « Peut lire » et « Visibilité » est « Tout le monde », que peuvent faire tous les utilisateurs avec l'article ? (Odoo Learn — Droits d'accès)",
    },
    correct: {
      en: "See, search for, and read the article.",
      fr: "Consultez, recherchez et lisez l’article.",
    },
    distractors: [
      { en: "Edit and read the article.", fr: "Modifiez et lisez l'article." },
      { en: "Only read the article.", fr: "Lisez seulement l'article." },
      { en: "Only share the article.", fr: "Partagez uniquement l’article." },
    ],
    explanation: {
      en: "Source Odoo Learn (Access rights): See, search for, and read the article.",
      fr: "Source Odoo Learn (Droits d'accès) : Voir, rechercher et lire l'article.",
    },
  }),
  complexQ({
    id: "kno-037",
    module: "knowledge",
    text: {
      en: "How can users find articles hidden in the sidebar due to their access rights? (Odoo Learn — Access rights)",
      fr: "Comment les utilisateurs peuvent-ils trouver les articles masqués dans la barre latérale en raison de leurs droits d’accès ? (Odoo Learn — Droits d'accès)",
    },
    correct: {
      en: "By typing \"$\" in the command palette to list all hidden articles.",
      fr: "En tapant \"$\" dans la palette de commandes pour lister tous les articles masqués.",
    },
    distractors: [
      { en: "By asking a user who can see it to share the link.", fr: "En demandant à un utilisateur qui peut le voir de partager le lien." },
      { en: "By changing their own default access rights.", fr: "En modifiant leurs propres droits d'accès par défaut." },
      { en: "By navigating to the \"All Articles\" section of the Knowledge base.", fr: "En accédant à la section « Tous les articles » de la base de connaissances." },
    ],
    explanation: {
      en: "Source Odoo Learn (Access rights): By typing \"$\" in the command palette to list all hidden articles.",
      fr: "Source Odoo Learn (Droits d'accès) : En tapant \"$\" dans la palette de commandes pour lister tous les articles masqués.",
    },
  }),
  complexQ({
    id: "kno-038",
    module: "knowledge",
    text: {
      en: "What \"Default Access Right\" is required to display the \"Shared\" category, which is visible only to invited users? (Odoo Learn — Access rights)",
      fr: "Quel « droit d'accès par défaut » est requis pour afficher la catégorie « Partagé », qui n'est visible que par les utilisateurs invités ? (Odoo Learn — Droits d'accès)",
    },
    correct: {
      en: "No access",
      fr: "Pas d'accès",
    },
    distractors: [
      { en: "Can edit", fr: "Peut modifier" },
      { en: "Everyone", fr: "Tout le monde" },
      { en: "Can read", fr: "Peut lire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Access rights): No access",
      fr: "Source Odoo Learn (Droits d'accès) : Pas d'accès",
    },
  }),
  complexQ({
    id: "kno-039",
    module: "knowledge",
    text: {
      en: "Click Search/Articles, select an article, and click Actions > Archive > Archive. What basic managing actions can you still perform on an archived article? (Odoo Learn — Remove and restore articles)",
      fr: "Cliquez sur Rechercher/Articles, sélectionnez un article, puis cliquez sur Actions > Archiver > Archiver. Quelles actions de gestion de base pouvez-vous encore effectuer sur un article archivé ? (Odoo Learn — Supprimer et restaurer des articles)",
    },
    correct: {
      en: "Unarchive, Create a copy, and Export",
      fr: "Désarchiver, créer une copie et exporter",
    },
    distractors: [
      { en: "Move To, Export, Send to Trash", fr: "Déplacer vers, exporter, envoyer à la corbeille" },
      { en: "Lock Content, Move To, and Create a Copy", fr: "Verrouiller le contenu, déplacer vers et créer une copie" },
      { en: "Send to Trash, Unarchive, Lock Content", fr: "Envoyer à la corbeille, désarchiver, verrouiller le contenu" },
    ],
    explanation: {
      en: "Source Odoo Learn (Remove and restore articles): Unarchive, Create a copy, and Export",
      fr: "Source Odoo Learn (Supprimer et restaurer des articles) : Désarchiver, créer une copie et exporter",
    },
  }),
  complexQ({
    id: "kno-040",
    module: "knowledge",
    text: {
      en: "What is the difference between a trashed and a deleted article? (Odoo Learn — Remove and restore articles)",
      fr: "Quelle est la différence entre un article mis dans la corbeille et un article supprimé ? (Odoo Learn — Supprimer et restaurer des articles)",
    },
    correct: {
      en: "Trashed articles can be restored, but deleted articles are lost.",
      fr: "Les articles supprimés peuvent être restaurés, mais les articles supprimés sont perdus.",
    },
    distractors: [
      { en: "Trashed articles are lost forever, but deleted ones can be restored for 30 days.", fr: "Les articles supprimés sont perdus à jamais, mais ceux supprimés peuvent être restaurés pendant 30 jours." },
      { en: "Trashed articles are public, while deleted articles are hidden.", fr: "Les articles supprimés sont publics, tandis que les articles supprimés sont masqués." },
      { en: "There is no difference. Both have the same conditions.", fr: "Il n'y a aucune différence. Les deux ont les mêmes conditions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Remove and restore articles): Trashed articles can be restored, but deleted articles are lost.",
      fr: "Source Odoo Learn (Supprimer et restaurer des articles) : Les articles supprimés peuvent être restaurés, mais les articles supprimés sont perdus.",
    },
  }),
  complexQ({
    id: "kno-041",
    module: "knowledge",
    text: {
      en: "What are the two methods for restoring a trashed article? (Odoo Learn — Remove and restore articles)",
      fr: "Quelles sont les deux méthodes pour restaurer un article mis dans la corbeille ? (Odoo Learn — Supprimer et restaurer des articles)",
    },
    correct: {
      en: "Open the trash and click \"Restore,\" or use the Search filter \"Trashed.\"",
      fr: "Ouvrez la corbeille et cliquez sur \"Restaurer\" ou utilisez le filtre de recherche \"Corbeille\".",
    },
    distractors: [
      { en: "Open the trash and click \"Recover,\" or search for \"Archived Content.\"", fr: "Ouvrez la corbeille et cliquez sur « Récupérer » ou recherchez « Contenu archivé »." },
      { en: "Contact support for manual recovery or use the \"Recover trash\" option.", fr: "Contactez l'assistance pour une récupération manuelle ou utilisez l'option \"Récupérer la corbeille\"." },
      { en: "Restore a previous version or use a copy of the article.", fr: "Restaurez une version précédente ou utilisez une copie de l'article." },
    ],
    explanation: {
      en: "Source Odoo Learn (Remove and restore articles): Open the trash and click \"Restore,\" or use the Search filter \"Trashed.\"",
      fr: "Source Odoo Learn (Supprimer et restaurer des articles) : ouvrez la corbeille et cliquez sur « Restaurer » ou utilisez le filtre de recherche « Corbeille ».",
    },
  }),
  complexQ({
    id: "kno-042",
    module: "knowledge",
    text: {
      en: "Click the “history” icon to open the version history. What do the “Content” and “Comparison” tabs display? (Odoo Learn — Remove and restore articles)",
      fr: "Cliquez sur l'icône « historique » pour ouvrir l'historique des versions. Que affichent les onglets « Contenu » et « Comparaison » ? (Odoo Learn — Supprimer et restaurer des articles)",
    },
    correct: {
      en: "Content displays the selected article version, and Comparison shows the version differences.",
      fr: "Le contenu affiche la version de l'article sélectionné et la comparaison affiche les différences de version.",
    },
    distractors: [
      { en: "Content displays a summary of edits, and Comparison shows who made the edits.", fr: "Le contenu affiche un résumé des modifications et la comparaison montre qui a effectué les modifications." },
      { en: "Content displays the article's titles, and Comparison shows the versions' dates.", fr: "Le contenu affiche les titres des articles et la comparaison affiche les dates des versions." },
      { en: "Content displays complete updates, and Comparison shows the authors of each version.", fr: "Le contenu affiche les mises à jour complètes et la comparaison affiche les auteurs de chaque version." },
    ],
    explanation: {
      en: "Source Odoo Learn (Remove and restore articles): Content displays the selected article version, and Comparison shows the version differences.",
      fr: "Source Odoo Learn (Supprimer et restaurer des articles) : Le contenu affiche la version de l'article sélectionné et la comparaison montre les différences de version.",
    },
  }),
  complexQ({
    id: "kno-043",
    module: "knowledge",
    text: {
      en: "What is a clipboard primarily for? (Odoo Learn — Knowledge and Odoo apps)",
      fr: "À quoi sert principalement un presse-papiers ? (Odoo Learn — Applications Knowledge et Odoo)",
    },
    correct: {
      en: "To store content to reuse and copy-paste elsewhere.",
      fr: "Pour stocker du contenu à réutiliser et copier-coller ailleurs.",
    },
    distractors: [
      { en: "To insert card or kanban views from other apps into Knowledge.", fr: "Pour insérer des vues de carte ou de kanban provenant d'autres applications dans Knowledge." },
      { en: "To send a message to invited users with specific access rights.", fr: "Pour envoyer un message aux utilisateurs invités avec des droits d'accès spécifiques." },
      { en: "To store archived and deleted content from the sidebar.", fr: "Pour stocker le contenu archivé et supprimé de la barre latérale." },
    ],
    explanation: {
      en: "Source Odoo Learn (Knowledge and Odoo apps): To store content to reuse and copy-paste elsewhere.",
      fr: "Source Odoo Learn (applications Knowledge et Odoo) : Pour stocker du contenu à réutiliser et copier-coller ailleurs.",
    },
  }),
  complexQ({
    id: "kno-044",
    module: "knowledge",
    text: {
      en: "What actions are possible when inserting content from other apps into Knowledge? (Odoo Learn — Knowledge and Odoo apps)",
      fr: "Quelles actions sont possibles lors de l'insertion de contenu provenant d'autres applications dans Knowledge ? (Odoo Learn — Applications Knowledge et Odoo)",
    },
    correct: {
      en: "Insert view in article and Insert link in article.",
      fr: "Insérer une vue dans l'article et Insérer un lien dans l'article.",
    },
    distractors: [
      { en: "Insert list in Knowledge and Insert card in Knowledge.", fr: "Insérer une liste dans Knowledge et Insérer une carte dans Knowledge." },
      { en: "Export view in Knowledge and Import view in Knowledge.", fr: "Vue Exporter dans Knowledge et Vue Importer dans Knowledge." },
      { en: "Embed content in article and Embed view in article.", fr: "Intégrer le contenu dans l'article et la vue Intégrer dans l'article." },
    ],
    explanation: {
      en: "Source Odoo Learn (Knowledge and Odoo apps): Insert view in article and Insert link in article.",
      fr: "Source Odoo Learn (applications Knowledge et Odoo) : Insérer une vue dans l'article et Insérer un lien dans l'article.",
    },
  }),
  complexQ({
    id: "kno-045",
    module: "knowledge",
    text: {
      en: "In what type of view can you find the Knowledge icon? (Odoo Learn — Knowledge and Odoo apps)",
      fr: "Dans quel type de vue peut-on trouver l'icône Connaissance ? (Odoo Learn — Applications Knowledge et Odoo)",
    },
    correct: {
      en: "In a form view.",
      fr: "Dans une vue formulaire.",
    },
    distractors: [
      { en: "In a kanban view.", fr: "Dans une vue Kanban." },
      { en: "In a pivot view.", fr: "Dans une vue pivot." },
      { en: "In a calendar view.", fr: "Dans une vue calendrier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Knowledge and Odoo apps): In a form view.",
      fr: "Source Odoo Learn (applications Knowledge et Odoo) : Dans une vue formulaire.",
    },
  }),
];
