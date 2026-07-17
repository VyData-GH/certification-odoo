import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const technicalTrainingSupplementaryQuestions = [
  complexQ({
    id: "tec-001",
    module: "technical-training",
    text: {
      en: "What is one of the main programming languages used in this lesson ? (Odoo Learn — Introduction & prerequisites)",
      fr: "Quel est l'un des principaux langages de programmation utilisés dans cette leçon ? (Odoo Learn — Introduction & prérequis)",
    },
    correct: {
      en: "Python",
      fr: "Python",
    },
    distractors: [
      { en: "C++", fr: "C++" },
      { en: "JS", fr: "JS" },
      { en: "PHP", fr: "PHP" },
    ],
    explanation: {
      en: "Source Odoo Learn (Introduction & prerequisites): Python",
      fr: "Source Odoo Learn (Introduction & prérequis) : Python",
    },
  }),
  complexQ({
    id: "tec-002",
    module: "technical-training",
    text: {
      en: "What's the technical name of the Invoicing App ? (Odoo Learn — What's a module ?)",
      fr: "Quel est le nom technique de l'application de facturation ? (Odoo Learn — Qu'est-ce qu'un module ?)",
    },
    correct: {
      en: "account",
      fr: "compte",
    },
    distractors: [
      { en: "Invoicing", fr: "Facturation" },
      { en: "invoicing", fr: "facturation" },
      { en: "payments", fr: "paiements" },
    ],
    explanation: {
      en: "Source Odoo Learn (What's a module ?): account",
      fr: "Source Odoo Learn (C'est quoi un module ?) : compte",
    },
  }),
  complexQ({
    id: "tec-003",
    module: "technical-training",
    text: {
      en: "When do we activate the developer mode ? (Odoo Learn — What's a module ?)",
      fr: "Quand est-ce qu'on active le mode développeur ? (Odoo Learn — Qu'est-ce qu'un module ?)",
    },
    correct: {
      en: "To unlocks access to extra information and advanced tools in Odoo",
      fr: "Pour débloquer l'accès à des informations supplémentaires et à des outils avancés dans Odoo",
    },
    distractors: [
      { en: "To start developing in a module", fr: "Pour commencer à développer dans un module" },
      { en: "To unlock new Odoo modules", fr: "Pour débloquer de nouveaux modules Odoo" },
      { en: "To activate the dark mode", fr: "Pour activer le mode sombre" },
    ],
    explanation: {
      en: "Source Odoo Learn (What's a module ?): To unlocks access to extra information and advanced tools in Odoo",
      fr: "Source Odoo Learn (Qu'est-ce qu'un module ?) : Pour débloquer l'accès à des informations supplémentaires et à des outils avancés dans Odoo",
    },
  }),
  complexQ({
    id: "tec-004",
    module: "technical-training",
    text: {
      en: "What's a module in Odoo ? (Odoo Learn — What's a module ?)",
      fr: "Qu'est-ce qu'un module dans Odoo ? (Odoo Learn — Qu'est-ce qu'un module ?)",
    },
    correct: {
      en: "A set of features",
      fr: "Un ensemble de fonctionnalités",
    },
    distractors: [
      { en: "An application", fr: "Une candidature" },
      { en: "An extension to standard apps", fr: "Une extension aux applications standards" },
      { en: "Small rooms present in every Odoo offices", fr: "Des petites salles présentes dans tous les bureaux Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (What's a module ?): A set of features",
      fr: "Source Odoo Learn (C'est quoi un module ?) : Un ensemble de fonctionnalités",
    },
  }),
  complexQ({
    id: "tec-005",
    module: "technical-training",
    text: {
      en: "How are the different modules organized in Odoo ? (Odoo Learn — Module composition)",
      fr: "Comment sont organisés les différents modules dans Odoo ? (Odoo Learn — Composition des modules)",
    },
    correct: {
      en: "In different directories",
      fr: "Dans différents répertoires",
    },
    distractors: [
      { en: "Listed in a python dictionary", fr: "Répertorié dans un dictionnaire Python" },
      { en: "Each model has its own module", fr: "Chaque modèle possède son propre module" },
      { en: "In data files", fr: "Dans les fichiers de données" },
    ],
    explanation: {
      en: "Source Odoo Learn (Module composition): In different directories",
      fr: "Source Odoo Learn (Composition du module) : Dans différents répertoires",
    },
  }),
  complexQ({
    id: "tec-006",
    module: "technical-training",
    text: {
      en: "What is mandatory in a module ? (Odoo Learn — Module composition)",
      fr: "Qu'est-ce qui est obligatoire dans un module ? (Odoo Learn — Composition des modules)",
    },
    correct: {
      en: "The __init__.py and the __manifest__.py files",
      fr: "Les fichiers __init__.py et __manifest__.py",
    },
    distractors: [
      { en: "The __init__.py file", fr: "Le fichier __init__.py" },
      { en: "The __manifest__.py file", fr: "Le fichier __manifest__.py" },
      { en: "The data directory", fr: "Le répertoire de données" },
    ],
    explanation: {
      en: "Source Odoo Learn (Module composition): The __init__.py and the __manifest__.py files",
      fr: "Source Odoo Learn (Composition du module) : Les fichiers __init__.py et __manifest__.py",
    },
  }),
  complexQ({
    id: "tec-007",
    module: "technical-training",
    text: {
      en: "Which key(s) is/are mandatory in the manifest (Odoo Learn — Module composition)",
      fr: "Quelle(s) clé(s) est(sont) obligatoire(s) dans le manifeste (Odoo Learn — Composition des modules)",
    },
    correct: {
      en: "name",
      fr: "nom",
    },
    distractors: [
      { en: "name & version", fr: "nom et version" },
      { en: "name, version & license", fr: "nom, version et licence" },
      { en: "name, version, license & data", fr: "nom, version, licence et données" },
    ],
    explanation: {
      en: "Source Odoo Learn (Module composition): name",
      fr: "Source Odoo Learn (Composition du module) : nom",
    },
  }),
  complexQ({
    id: "tec-008",
    module: "technical-training",
    text: {
      en: "What does Odoo's ORM stand for? (Odoo Learn — ORM & models basics)",
      fr: "Que signifie l'ORM d'Odoo ? (Odoo Learn — Bases de l'ORM et des modèles)",
    },
    correct: {
      en: "Object-Relational Mapping",
      fr: "Mappage objet-relationnel",
    },
    distractors: [
      { en: "Online Resource Management", fr: "Gestion des ressources en ligne" },
      { en: "Object-Relational Model", fr: "Modèle objet-relationnel" },
      { en: "Open Database Middleware", fr: "Middleware de base de données ouvert" },
    ],
    explanation: {
      en: "Source Odoo Learn (ORM & models basics): Object-Relational Mapping",
      fr: "Source Odoo Learn (bases de l'ORM et des modèles) : Mappage objet-relationnel",
    },
  }),
  complexQ({
    id: "tec-009",
    module: "technical-training",
    text: {
      en: "What is the primary purpose of Odoo's ORM ? (Odoo Learn — ORM & models basics)",
      fr: "Quel est l’objectif principal de l’ORM d’Odoo ? (Odoo Learn — Bases de l'ORM et des modèles)",
    },
    correct: {
      en: "Database Interaction and Abstraction",
      fr: "Interaction et abstraction des bases de données",
    },
    distractors: [
      { en: "Graphic Design in Odoo", fr: "Conception graphique dans Odoo" },
      { en: "Managing User Authentication", fr: "Gestion de l'authentification des utilisateurs" },
      { en: "Real-time Chat Functionality", fr: "Fonctionnalité de chat en temps réel" },
    ],
    explanation: {
      en: "Source Odoo Learn (ORM & models basics): Database Interaction and Abstraction",
      fr: "Source Odoo Learn (bases de l'ORM et des modèles) : Interaction et abstraction des bases de données",
    },
  }),
  complexQ({
    id: "tec-010",
    module: "technical-training",
    text: {
      en: "How are Odoo models defined in Python classes, and what class should they typically inherit from? (Odoo Learn — ORM & models basics)",
      fr: "Comment les modèles Odoo sont-ils définis dans les classes Python et de quelle classe doivent-ils généralement hériter ? (Odoo Learn — Bases de l'ORM et des modèles)",
    },
    correct: {
      en: "By subclassing odoo.models.Model",
      fr: "En sous-classant odoo.models.Model",
    },
    distractors: [
      { en: "By creating instances of the odoo.models.BaseModel class", fr: "En créant des instances de la classe odoo.models.BaseModel" },
      { en: "Through the use of Python decorators on a standard class", fr: "Grâce à l'utilisation de décorateurs Python sur une classe standard" },
      { en: "Using a metaclass defined in the odoo.models module", fr: "Utiliser une métaclasse définie dans le module odoo.models" },
    ],
    explanation: {
      en: "Source Odoo Learn (ORM & models basics): By subclassing odoo.models.Model",
      fr: "Source Odoo Learn (bases de l'ORM et des modèles) : en sous-classant odoo.models.Model",
    },
  }),
  complexQ({
    id: "tec-011",
    module: "technical-training",
    text: {
      en: "In which directory and file should you define your Odoo models ? (Odoo Learn — ORM & models basics)",
      fr: "Dans quel répertoire et fichier définir vos modèles Odoo ? (Odoo Learn — Bases de l'ORM et des modèles)",
    },
    correct: {
      en: "In the \"models\" directory in a file named \"__init__.py\"",
      fr: "Dans le répertoire \"models\" dans un fichier nommé \"__init__.py\"",
    },
    distractors: [
      { en: "Inside the \"custom_models\" folder in a file named \"models.py\"", fr: "Dans le dossier \"custom_models\" dans un fichier nommé \"models.py\"" },
      { en: "In \"models\" within a file named \"__manifest__.py\"", fr: "Dans \"models\" dans un fichier nommé \"__manifest__.py\"" },
      { en: "Within the \"addons\" folder in a file named \"models.xml\"", fr: "Dans le dossier \"addons\" dans un fichier nommé \"models.xml\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (ORM & models basics): In the \"models\" directory in a file named \"__init__.py\"",
      fr: "Source Odoo Learn (bases de l'ORM & des modèles) : Dans le répertoire \"models\" dans un fichier nommé \"__init__.py\"",
    },
  }),
  complexQ({
    id: "tec-012",
    module: "technical-training",
    text: {
      en: "How would you define a new text field named 'description' ? (Odoo Learn — Fields & attributes)",
      fr: "Comment définiriez-vous un nouveau champ de texte nommé « description » ? (Odoo Learn — Champs et attributs)",
    },
    correct: {
      en: "description = fields.Text()",
      fr: "description = champs.Texte()",
    },
    distractors: [
      { en: "fields.Char('description')", fr: "champs.Char('description')" },
      { en: "description = fields.String()", fr: "description = champs.String()" },
      { en: "fields.Text('description')", fr: "champs.Texte('description')" },
    ],
    explanation: {
      en: "Source Odoo Learn (Fields & attributes): description = fields.Text()",
      fr: "Source Odoo Learn (Champs & attributs) : description = field.Text()",
    },
  }),
  complexQ({
    id: "tec-013",
    module: "technical-training",
    text: {
      en: "What is the purpose of the store attribute when defining a field ? (Odoo Learn — Fields & attributes)",
      fr: "A quoi sert l'attribut store lors de la définition d'un champ ? (Odoo Learn — Champs et attributs)",
    },
    correct: {
      en: "It indicates whether the field should be stored in the database.",
      fr: "Il indique si le champ doit être stocké dans la base de données.",
    },
    distractors: [
      { en: "It specifies the default value for the field.", fr: "Il spécifie la valeur par défaut du champ." },
      { en: "It controls the visibility of the field in the user interface.", fr: "Il contrôle la visibilité du champ dans l'interface utilisateur." },
      { en: "It determines whether the field is required.", fr: "Il détermine si le champ est obligatoire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fields & attributes): It indicates whether the field should be stored in the database.",
      fr: "Source Odoo Learn (Champs & attributs) : Il indique si le champ doit être stocké dans la base de données.",
    },
  }),
  complexQ({
    id: "tec-014",
    module: "technical-training",
    text: {
      en: "How can you specify the type of data (Master or Demo) when defining records in an Odoo model? (Odoo Learn — Data introduction)",
      fr: "Comment spécifier le type de données (Maître ou Démo) lors de la définition d'enregistrements dans un modèle Odoo ? (Odoo Learn — Présentation des données)",
    },
    correct: {
      en: "Based on the directory in which their files are created.",
      fr: "Basé sur le répertoire dans lequel leurs fichiers sont créés.",
    },
    distractors: [
      { en: "By using the data_type attribute in the record definition.", fr: "En utilisant l'attribut data_type dans la définition d'enregistrement." },
      { en: "By including a specific tag in the XML record definition.", fr: "En incluant une balise spécifique dans la définition de l'enregistrement XML." },
      { en: "Based on the dictionary key in which they are set in the manifest file.", fr: "Basé sur la clé du dictionnaire dans laquelle ils sont définis dans le fichier manifeste." },
    ],
    explanation: {
      en: "Source Odoo Learn (Data introduction): Based on the directory in which their files are created.",
      fr: "Source Odoo Learn (introduction des données) : Basé sur le répertoire dans lequel leurs fichiers sont créés.",
    },
  }),
  complexQ({
    id: "tec-015",
    module: "technical-training",
    text: {
      en: "What is a key difference between Master data and Demo data in Odoo? (Odoo Learn — Data introduction)",
      fr: "Quelle est la différence clé entre les données de base et les données de démonstration dans Odoo ? (Odoo Learn — Présentation des données)",
    },
    correct: {
      en: "Demo data is used for unit testing, while Master data is essential for the users to use be able to use the module properly.",
      fr: "Les données de démonstration sont utilisées pour les tests unitaires, tandis que les données principales sont essentielles pour que les utilisateurs puissent utiliser correctement le module.",
    },
    distractors: [
      { en: "Master data is persistent and remains unchanged, while Demo data is temporary.", fr: "Les données de base sont persistantes et restent inchangées, tandis que les données de démonstration sont temporaires." },
      { en: "Master data is loaded from XML files, while Demo data is defined within Python classes.", fr: "Les données maître sont chargées à partir de fichiers XML, tandis que les données de démonstration sont définies dans les classes Python." },
      { en: "Demo data is created during the installation of modules, while Master data is added manually.", fr: "Les données de démonstration sont créées lors de l'installation des modules, tandis que les données de base sont ajoutées manuellement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Data introduction): Demo data is used for unit testing, while Master data is essential for the users to use be able to use the module properly.",
      fr: "Source Odoo Learn (introduction des données) : les données de démonstration sont utilisées pour les tests unitaires, tandis que les données de base sont essentielles pour que les utilisateurs puissent utiliser correctement le module.",
    },
  }),
  complexQ({
    id: "tec-016",
    module: "technical-training",
    text: {
      en: "What is the purpose of the access rules ? (Odoo Learn — Introduction to Security  - Theory)",
      fr: "A quoi servent les règles d'accès ? (Odoo Learn — Introduction à la sécurité - Théorie)",
    },
    correct: {
      en: "To define permissions for group of users in the system.",
      fr: "Pour définir les autorisations pour un groupe d'utilisateurs dans le système.",
    },
    distractors: [
      { en: "To configure SSL certificates for secure communication.", fr: "Pour configurer des certificats SSL pour une communication sécurisée." },
      { en: "To specify the database connection details.", fr: "Pour spécifier les détails de connexion à la base de données." },
      { en: "To define permissions for users in the system.", fr: "Pour définir les autorisations des utilisateurs du système." },
    ],
    explanation: {
      en: "Source Odoo Learn (Introduction to Security  - Theory): To define permissions for group of users in the system.",
      fr: "Source Odoo Learn (Introduction à la sécurité - Théorie) : Pour définir les autorisations pour un groupe d'utilisateurs dans le système.",
    },
  }),
  complexQ({
    id: "tec-017",
    module: "technical-training",
    text: {
      en: "How are security rules typically defined in the ir.model.access.csv file for restricting access to specific records? (Odoo Learn — Introduction to Security  - Theory)",
      fr: "Comment les règles de sécurité sont-elles généralement définies dans le fichier ir.model.access.csv pour restreindre l'accès à des enregistrements spécifiques ? (Odoo Learn — Introduction à la sécurité - Théorie)",
    },
    correct: {
      en: "Using a declarative syntax with CSV rows.",
      fr: "Utilisation d'une syntaxe déclarative avec les lignes CSV.",
    },
    distractors: [
      { en: "Using Python code snippets.", fr: "Utilisation d'extraits de code Python." },
      { en: "By applying XML tags within the CSV file.", fr: "En appliquant des balises XML dans le fichier CSV." },
      { en: "Through SQL queries embedded in the file.", fr: "Grâce à des requêtes SQL intégrées dans le fichier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Introduction to Security  - Theory): Using a declarative syntax with CSV rows.",
      fr: "Source Odoo Learn (Introduction à la sécurité – Théorie) : Utilisation d'une syntaxe déclarative avec les lignes CSV.",
    },
  }),
  complexQ({
    id: "tec-018",
    module: "technical-training",
    text: {
      en: "Where can I find the name of the model of the current page  ? (Odoo Learn — Actions Introduction)",
      fr: "Où puis-je trouver le nom du modèle de la page courante ? (Odoo Learn — Introduction aux actions)",
    },
    correct: {
      en: "In the url after \"model=\"",
      fr: "Dans l'URL après \"model=\"",
    },
    distractors: [
      { en: "In the title", fr: "Dans le titre" },
      { en: "In the url after \"view_model=\"", fr: "Dans l'URL après \"view_model=\"" },
      { en: "In the url after \"module=\"", fr: "Dans l'URL après \"module=\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Actions Introduction): In the url after \"model=\"",
      fr: "Source Odoo Learn (Introduction aux actions) : Dans l'url après \"model=\"",
    },
  }),
  complexQ({
    id: "tec-019",
    module: "technical-training",
    text: {
      en: "What is the purpose of actions and menus in Odoo? (Odoo Learn — Actions and Menus - Theory)",
      fr: "A quoi servent les actions et les menus dans Odoo ? (Odoo Learn — Actions et menus - Théorie)",
    },
    correct: {
      en: "To create navigation links and user interface elements.",
      fr: "Pour créer des liens de navigation et des éléments d'interface utilisateur.",
    },
    distractors: [
      { en: "To define access permissions for user roles.", fr: "Pour définir les autorisations d'accès pour les rôles d'utilisateur." },
      { en: "To manage database connections and configurations.", fr: "Pour gérer les connexions et les configurations de base de données." },
      { en: "To execute Python code for specific business operations.", fr: "Pour exécuter du code Python pour des opérations commerciales spécifiques." },
    ],
    explanation: {
      en: "Source Odoo Learn (Actions and Menus - Theory): To create navigation links and user interface elements.",
      fr: "Source Odoo Learn (Actions et Menus - Théorie) : Pour créer des liens de navigation et des éléments d'interface utilisateur.",
    },
  }),
  complexQ({
    id: "tec-020",
    module: "technical-training",
    text: {
      en: "How are actions typically defined in Odoo for executing specific tasks or operations? (Odoo Learn — Actions and Menus - Theory)",
      fr: "Comment les actions sont-elles généralement définies dans Odoo pour exécuter des tâches ou des opérations spécifiques ? (Odoo Learn — Actions et menus - Théorie)",
    },
    correct: {
      en: "By configuring action records in XML or Python files.",
      fr: "En configurant les enregistrements d'actions dans des fichiers XML ou Python.",
    },
    distractors: [
      { en: "Through JavaScript functions embedded in XML views.", fr: "Grâce à des fonctions JavaScript intégrées dans des vues XML." },
      { en: "By declaring Python methods in the model class.", fr: "En déclarant des méthodes Python dans la classe model." },
      { en: "Using XML tags within the menu definition.", fr: "Utilisation de balises XML dans la définition du menu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Actions and Menus - Theory): By configuring action records in XML or Python files.",
      fr: "Source Odoo Learn (Actions et Menus - Théorie) : En configurant des enregistrements d'actions dans des fichiers XML ou Python.",
    },
  }),
  complexQ({
    id: "tec-021",
    module: "technical-training",
    text: {
      en: "If you want to create a new menu item under the \"Sales\" menu in Odoo, how would you define it? (Odoo Learn — Actions and Menus  - Code)",
      fr: "Si vous souhaitez créer un nouvel élément de menu sous le menu « Ventes » dans Odoo, comment le définiriez-vous ? (Odoo Learn — Actions et menus - Code)",
    },
    correct: {
      en: "<menuitem id=\"new_item\" name=\"New Item\" parent=\"sale.menu_sale_root\"/>",
      fr: "<menuitem id=\"new_item\" name=\"Nouvel article\" parent=\"sale.menu_sale_root\"/>",
    },
    distractors: [
      { en: "<menuitem name=\"New Item\" parent=\"sale.menu_sale_root\"/>", fr: "<menuitem name=\"Nouvel article\" parent=\"sale.menu_sale_root\"/>" },
      { en: "<menu name=\"New Item\" parent=\"sale.menu_sale_root\"/>", fr: "<menu name=\"Nouvel article\" parent=\"sale.menu_sale_root\"/>" },
      { en: "<menu id=\"new_item\" name=\"New Item\" parent=\"sale.menu_sale_root\"/>", fr: "<menu id=\"new_item\" name=\"Nouvel article\" parent=\"sale.menu_sale_root\"/>" },
    ],
    explanation: {
      en: "Source Odoo Learn (Actions and Menus  - Code): <menuitem id=\"new_item\" name=\"New Item\" parent=\"sale.menu_sale_root\"/>",
      fr: "Source Odoo Learn (Actions et Menus - Code) : <menuitem id=\"new_item\" name=\"Nouvel élément\" parent=\"sale.menu_sale_root\"/>",
    },
  }),
  mcq3Q({
    id: "tec-022",
    module: "technical-training",
    text: {
      en: "By adding a field attribute in the model definition; (Odoo Learn — Fields Attributes)",
      fr: "En ajoutant un attribut de champ dans la définition du modèle ; (Odoo Learn — Attributs des champs)",
    },
    correct: {
      en: "The attributes are applied on all the views, except for those stating the opposite.",
      fr: "Les attributs sont appliqués sur toutes les vues, sauf celles indiquant le contraire.",
    },
    distractors: [
      { en: "The attributes are applied on all the views, what ever is specified on the view.", fr: "Les attributs sont appliqués sur toutes les vues, quel que soit ce qui est spécifié sur la vue." },
      { en: "The attributes are applied on the main views of the model only.", fr: "Les attributs sont appliqués uniquement aux vues principales du modèle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fields Attributes): The attributes are applied on all the views, except for those stating the opposite.",
      fr: "Source Odoo Learn (Attributs des champs) : Les attributs sont appliqués sur toutes les vues, sauf celles indiquant le contraire.",
    },
  }),
  complexQ({
    id: "tec-023",
    module: "technical-training",
    text: {
      en: "What is the purpose of the \"arch\" attribute in an Odoo view definition? (Odoo Learn — Basic Views)",
      fr: "A quoi sert l'attribut « arch » dans une définition de vue Odoo ? (Odoo Learn — Vues de base)",
    },
    correct: {
      en: "To define the structure and layout of the view using XML tags.",
      fr: "Définir la structure et la disposition de la vue à l'aide de balises XML.",
    },
    distractors: [
      { en: "To specify the XML namespace for the view.", fr: "Pour spécifier l'espace de noms XML pour la vue." },
      { en: "To declare the Python class associated with the view.", fr: "Pour déclarer la classe Python associée à la vue." },
      { en: "To indicate the permissions required to access the view.", fr: "Pour indiquer les autorisations requises pour accéder à la vue." },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Views): To define the structure and layout of the view using XML tags.",
      fr: "Source Odoo Learn (Vues de base) : Pour définir la structure et la disposition de la vue à l'aide de balises XML.",
    },
  }),
  complexQ({
    id: "tec-024",
    module: "technical-training",
    text: {
      en: "What is the purpose of the \"name\" attribute in an Odoo view definition? (Odoo Learn — Basic Views)",
      fr: "A quoi sert l'attribut \"name\" dans une définition de vue Odoo ? (Odoo Learn — Vues de base)",
    },
    correct: {
      en: "To provide a unique identifier for the view.",
      fr: "Pour fournir un identifiant unique pour la vue.",
    },
    distractors: [
      { en: "To specify the name of the database table associated with the view.", fr: "Pour spécifier le nom de la table de base de données associée à la vue." },
      { en: "To define the layout and structure of the view.", fr: "Pour définir la disposition et la structure de la vue." },
      { en: "To declare the Python class associated with the view.", fr: "Pour déclarer la classe Python associée à la vue." },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Views): To provide a unique identifier for the view.",
      fr: "Source Odoo Learn (Basic Views): To provide a unique identifier for the view.",
    },
  }),
  complexQ({
    id: "tec-025",
    module: "technical-training",
    text: {
      en: "What is the primary purpose of list views in Odoo? (Odoo Learn — List views)",
      fr: "Quel est l’objectif principal des vues de liste dans Odoo ? (Odoo Learn — Vues de liste)",
    },
    correct: {
      en: "To display records from a model in a tabular format.",
      fr: "Pour afficher les enregistrements d'un modèle sous forme de tableau.",
    },
    distractors: [
      { en: "To display graphical charts and graphs representing data.", fr: "Pour afficher des tableaux graphiques et des graphiques représentant des données." },
      { en: "To define the layout of the application's homepage.", fr: "Définir la mise en page de la page d'accueil de l'application." },
      { en: "To manage user authentication.", fr: "Pour gérer l'authentification des utilisateurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (List views): To display records from a model in a tabular format.",
      fr: "Source Odoo Learn (Vues liste) : Pour afficher les enregistrements d'un modèle sous forme de tableau.",
    },
  }),
  complexQ({
    id: "tec-026",
    module: "technical-training",
    text: {
      en: "Which attribute is commonly used to define the fields to be displayed in a list view in Odoo? (Odoo Learn — List views)",
      fr: "Quel attribut est couramment utilisé pour définir les champs à afficher dans une vue liste dans Odoo ? (Odoo Learn — Vues de liste)",
    },
    correct: {
      en: "<field> attribute within the <tree> tag.",
      fr: "Attribut <field> dans la balise <tree>.",
    },
    distractors: [
      { en: "<fields> attribute within the <list> tag.", fr: "Attribut <fields> dans la balise <list>." },
      { en: "<attributes> attribute within the <field> tag.", fr: "Attribut <attributes> dans la balise <field>." },
      { en: "<columns> attribute within the <list> tag.", fr: "Attribut <columns> dans la balise <list>." },
    ],
    explanation: {
      en: "Source Odoo Learn (List views): <field> attribute within the <tree> tag.",
      fr: "Source Odoo Learn (Vues liste) : attribut <field> dans la balise <tree>.",
    },
  }),
  complexQ({
    id: "tec-027",
    module: "technical-training",
    text: {
      en: "What is the primary purpose of form views in Odoo? (Odoo Learn — Form Views)",
      fr: "Quel est l’objectif principal des vues de formulaire dans Odoo ? (Odoo Learn — Vues de formulaire)",
    },
    correct: {
      en: "To display detailed information of a single record.",
      fr: "Pour afficher les informations détaillées d’un seul enregistrement.",
    },
    distractors: [
      { en: "To display records from a model in a tabular format.", fr: "Pour afficher les enregistrements d'un modèle sous forme de tableau." },
      { en: "To define the presentation layer of the application's user interface.", fr: "Définir la couche de présentation de l'interface utilisateur de l'application." },
      { en: "To provide a graphical representation of data through charts and graphs.", fr: "Fournir une représentation graphique des données au moyen de tableaux et de graphiques." },
    ],
    explanation: {
      en: "Source Odoo Learn (Form Views): To display detailed information of a single record.",
      fr: "Source Odoo Learn (Vues de formulaire) : Pour afficher les informations détaillées d'un seul enregistrement.",
    },
  }),
  complexQ({
    id: "tec-028",
    module: "technical-training",
    text: {
      en: "What tag is used to define the form view space ? (Odoo Learn — Form Views)",
      fr: "Quelle balise est utilisée pour définir l'espace d'affichage du formulaire ? (Odoo Learn — Vues de formulaire)",
    },
    correct: {
      en: "<sheet>",
      fr: "<feuille>",
    },
    distractors: [
      { en: "<page>", fr: "<page>" },
      { en: "<notebook>", fr: "<carnet>" },
      { en: "<group>", fr: "<groupe>" },
    ],
    explanation: {
      en: "Source Odoo Learn (Form Views): <sheet>",
      fr: "Source Odoo Learn (Vues de formulaire) : <feuille>",
    },
  }),
  complexQ({
    id: "tec-029",
    module: "technical-training",
    text: {
      en: "What is the primary purpose of using the <group> tag in Odoo views? (Odoo Learn — Form Views)",
      fr: "Quel est le but principal de l’utilisation de la balise <group> dans les vues Odoo ? (Odoo Learn — Vues de formulaire)",
    },
    correct: {
      en: "To organize fields into separate sections within the view.",
      fr: "Pour organiser les champs en sections distinctes dans la vue.",
    },
    distractors: [
      { en: "To define a group of users with specific access rights.", fr: "Définir un groupe d'utilisateurs avec des droits d'accès spécifiques." },
      { en: "To apply conditional formatting to fields based on certain criteria.", fr: "Pour appliquer une mise en forme conditionnelle aux champs en fonction de certains critères." },
      { en: "To manage user authentication.", fr: "Pour gérer l'authentification des utilisateurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Form Views): To organize fields into separate sections within the view.",
      fr: "Source Odoo Learn (Vues de formulaire) : Pour organiser les champs en sections distinctes dans la vue.",
    },
  }),
  complexQ({
    id: "tec-030",
    module: "technical-training",
    text: {
      en: "What is the primary purpose of search views in Odoo? (Odoo Learn — Search Introduction)",
      fr: "Quel est l’objectif principal des vues de recherche dans Odoo ? (Odoo Learn — Introduction à la recherche)",
    },
    correct: {
      en: "To allow users to search and filter records based on specific criteria.",
      fr: "Pour permettre aux utilisateurs de rechercher et de filtrer des enregistrements en fonction de critères spécifiques.",
    },
    distractors: [
      { en: "To display records from a model in a tabular format.", fr: "Pour afficher les enregistrements d'un modèle sous forme de tableau." },
      { en: "To define the presentation layer of the application's user interface.", fr: "Définir la couche de présentation de l'interface utilisateur de l'application." },
      { en: "To provide a graphical representation of data through charts and graphs.", fr: "Fournir une représentation graphique des données au moyen de tableaux et de graphiques." },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Introduction): To allow users to search and filter records based on specific criteria.",
      fr: "Source Odoo Learn (introduction à la recherche) : pour permettre aux utilisateurs de rechercher et de filtrer des enregistrements en fonction de critères spécifiques.",
    },
  }),
  complexQ({
    id: "tec-031",
    module: "technical-training",
    text: {
      en: "Which attribute is commonly used to allow input based searches on fields? (Odoo Learn — Search Introduction)",
      fr: "Quel attribut est couramment utilisé pour autoriser les recherches basées sur la saisie sur les champs ? (Odoo Learn — Introduction à la recherche)",
    },
    correct: {
      en: "<field> attribute within the <search> tag.",
      fr: "Attribut <field> dans la balise <search>.",
    },
    distractors: [
      { en: "<filter> tag within the <search> tag.", fr: "Balise <filter> dans la balise <search>." },
      { en: "<domain> attribute within the <search> tag.", fr: "Attribut <domain> dans la balise <search>." },
      { en: "<filters> attribute within the <search> tag", fr: "Attribut <filters> dans la balise <search>" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Introduction): <field> attribute within the <search> tag.",
      fr: "Source Odoo Learn (Introduction à la recherche) : attribut <field> dans la balise <search>.",
    },
  }),
  complexQ({
    id: "tec-032",
    module: "technical-training",
    text: {
      en: "How can you define a search domain in Odoo to filter records where the product type is \"Service\" and the price is between 100 and 200? (Odoo Learn — Search Domains)",
      fr: "Comment définir un domaine de recherche dans Odoo pour filtrer les enregistrements dont le type de produit est « Service » et le prix est compris entre 100 et 200 ? (Odoo Learn — Rechercher des domaines)",
    },
    correct: {
      en: "[('type', '=', 'service'), ('price', '>=', 100), ('price', '<=', 200)]",
      fr: "[('type', '=', 'service'), ('prix', '>=', 100), ('prix', '<=', 200)]",
    },
    distractors: [
      { en: "[('type', '=', 'service'), ('price', '>', 100), ('price', '<', 200)]", fr: "[('type', '=', 'service'), ('prix', '>', 100), ('prix', '<', 200)]" },
      { en: "[('type', '=', 'service')], ['&', ('price', '>=', 100), ('price', '<=', 200)]", fr: "[('type', '=', 'service')], ['&', ('prix', '>=', 100), ('prix', '<=', 200)]" },
      { en: "[('type', '=', 'service'), '|', ('price', '>=', 100), ('price', '<=', 200)]", fr: "[('type', '=', 'service'), '|', ('prix', '>=', 100), ('prix', '<=', 200)]" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Domains): [('type', '=', 'service'), ('price', '>=', 100), ('price', '<=', 200)]",
      fr: "Source Odoo Learn (Domaines de recherche) : [('type', '=', 'service'), ('price', '>=', 100), ('price', '<=', 200)]",
    },
  }),
  complexQ({
    id: "tec-033",
    module: "technical-training",
    text: {
      en: "What logical operator would you use in a search domain to filter records where the product type is \"Consumable\" OR the price is less than 50? (Odoo Learn — Search Domains)",
      fr: "Quel opérateur logique utiliseriez-vous dans un domaine de recherche pour filtrer les enregistrements dont le type de produit est « Consommable » OU dont le prix est inférieur à 50 ? (Odoo Learn — Rechercher des domaines)",
    },
    correct: {
      en: "'|'",
      fr: "'|'",
    },
    distractors: [
      { en: "'&'", fr: "'&'" },
      { en: "'^'", fr: "'^'" },
      { en: "'!'", fr: "'!'" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Domains): '|'",
      fr: "Source Odoo Learn (domaines de recherche) : '|'",
    },
  }),
  complexQ({
    id: "tec-034",
    module: "technical-training",
    text: {
      en: "How can you define a search domain in Odoo to filter records where the product type is \"Storable\" AND the price is either greater than 100 or less than 50? (Odoo Learn — Search Domains)",
      fr: "Comment pouvez-vous définir un domaine de recherche dans Odoo pour filtrer les enregistrements dont le type de produit est « Stockable » ET le prix est soit supérieur à 100, soit inférieur à 50 ? (Odoo Learn — Rechercher des domaines)",
    },
    correct: {
      en: "[('type', '=', 'storable'),'|',('price', '>', 100), ('price', '<', 50)]",
      fr: "[('type', '=', 'stockable'),'|',('price', '>', 100), ('price', '<', 50)]",
    },
    distractors: [
      { en: "[('type', '=', 'storable'), ('price', '>', 100), ('price', '<', 50)]", fr: "[('type', '=', 'stockable'), ('price', '>', 100), ('price', '<', 50)]" },
      { en: "[('type', '=', 'storable'), '&', '|', ('price', '>', 100), ('price', '<', 50)]", fr: "[('type', '=', 'stockable'), '&', '|', ('price', '>', 100), ('price', '<', 50)]" },
      { en: "[('type', '=', 'storable'), '&', ('|', ('price', '>', 100), ('price', '<', 50))]", fr: "[('type', '=', 'stockable'), '&', ('|', ('price', '>', 100), ('price', '<', 50))]" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Domains): [('type', '=', 'storable'),'|',('price', '>', 100), ('price', '<', 50)]",
      fr: "Source Odoo Learn (Domaines de recherche) : [('type', '=', 'storable'),'|',('price', '>', 100), ('price', '<', 50)]",
    },
  }),
  mcq3Q({
    id: "tec-035",
    module: "technical-training",
    text: {
      en: "How can you add a pre-defined group by element in your search menu ? (Odoo Learn — Search Views)",
      fr: "Comment ajouter un groupe par élément prédéfini dans votre menu de recherche ? (Odoo Learn — Rechercher des vues)",
    },
    correct: {
      en: "Adding a <filter> element and using the context attribute",
      fr: "Ajout d'un élément <filter> et utilisation de l'attribut context",
    },
    distractors: [
      { en: "Adding a <groupby> element and using the \"context\" attribute", fr: "Ajout d'un élément <groupby> et utilisation de l'attribut \"context\"" },
      { en: "Adding a <field> element and using the \"groupby\" attribute", fr: "Ajout d'un élément <field> et utilisation de l'attribut \"groupby\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Views): Adding a <filter> element and using the context attribute",
      fr: "Source Odoo Learn (Vues de recherche) : Ajout d'un élément <filter> et utilisation de l'attribut de contexte",
    },
  }),
  complexQ({
    id: "tec-036",
    module: "technical-training",
    text: {
      en: "What attribute is used in the <filter> element to create default filters ? (Odoo Learn — Search Views)",
      fr: "Quel attribut est utilisé dans l'élément <filter> pour créer des filtres par défaut ? (Odoo Learn — Rechercher des vues)",
    },
    correct: {
      en: "\"domain\"",
      fr: "\"domaine\"",
    },
    distractors: [
      { en: "\"filter\"", fr: "\"filtre\"" },
      { en: "\"filter_domain\"", fr: "\"domaine_filtre\"" },
      { en: "\"search_domain\"", fr: "\"domaine_de recherche\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Views): \"domain\"",
      fr: "Source Odoo Learn (Vues de recherche) : \"domaine\"",
    },
  }),
  complexQ({
    id: "tec-037",
    module: "technical-training",
    text: {
      en: "What is the purpose of many-to-one fields in Odoo? (Odoo Learn — Many 2 one)",
      fr: "Quel est le but des champs plusieurs-à-un dans Odoo ? (Odoo Learn — Plusieurs 2 un)",
    },
    correct: {
      en: "To link records to single record from any model.",
      fr: "Pour lier des enregistrements à un seul enregistrement à partir de n’importe quel modèle.",
    },
    distractors: [
      { en: "To store multiple values within a single field.", fr: "Pour stocker plusieurs valeurs dans un seul champ." },
      { en: "To manage user authentication.", fr: "Pour gérer l'authentification des utilisateurs." },
      { en: "To establish a one-to-many relationship between two models.", fr: "Établir une relation un-à-plusieurs entre deux modèles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Many 2 one): To link records to single record from any model.",
      fr: "Source Odoo Learn (Many 2 one) : Pour lier des enregistrements à un seul enregistrement à partir de n'importe quel modèle.",
    },
  }),
  complexQ({
    id: "tec-038",
    module: "technical-training",
    text: {
      en: "How do you define a many-to-one field in an Odoo model class? (Odoo Learn — Many 2 one)",
      fr: "Comment définir un champ plusieurs-à-un dans une classe de modèle Odoo ? (Odoo Learn — Plusieurs 2 un)",
    },
    correct: {
      en: "By using the fields.Many2one() method.",
      fr: "En utilisant la méthode field.Many2one().",
    },
    distractors: [
      { en: "By using the fields.ManyToOne() method.", fr: "En utilisant la méthode field.ManyToOne()." },
      { en: "By using the fields.Many2One() method.", fr: "En utilisant la méthode field.Many2One()." },
      { en: "By using the fields.OneToMany() method.", fr: "En utilisant la méthode field.OneToMany()." },
    ],
    explanation: {
      en: "Source Odoo Learn (Many 2 one): By using the fields.Many2one() method.",
      fr: "Source Odoo Learn (Many 2 one) : En utilisant la méthode field.Many2one().",
    },
  }),
  complexQ({
    id: "tec-039",
    module: "technical-training",
    text: {
      en: "What's the mandatory argument in the many2one field definition ? (Odoo Learn — Many 2 one)",
      fr: "Quel est l'argument obligatoire dans la définition du champ many2one ? (Odoo Learn — Plusieurs 2 un)",
    },
    correct: {
      en: "\"comodel_name\"",
      fr: "\"nom_comodèle\"",
    },
    distractors: [
      { en: "\"model\"", fr: "\"modèle\"" },
      { en: "\"comodel\"", fr: "\"comodèle\"" },
      { en: "\"model_name\"", fr: "\"nom_modèle\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Many 2 one): \"comodel_name\"",
      fr: "Source Odoo Learn (Plusieurs 2 un) : \"comodel_name\"",
    },
  }),
  complexQ({
    id: "tec-040",
    module: "technical-training",
    text: {
      en: "How do you define a one2many field in an Odoo model class? (Odoo Learn — One 2 many)",
      fr: "Comment définir un champ one2many dans une classe de modèle Odoo ? (Odoo Learn — Un 2 plusieurs)",
    },
    correct: {
      en: "child_ids = fields.One2many('child.model', 'parent_id')",
      fr: "child_ids = field.One2many('child.model', 'parent_id')",
    },
    distractors: [
      { en: "child_ids = fields.One2many( 'parent_id', 'child.model')", fr: "child_ids = field.One2many( 'parent_id', 'child.model')" },
      { en: "child_ids = fields.One2one('child.model', 'parent_id')", fr: "child_ids = field.One2one('child.model', 'parent_id')" },
      { en: "child_ids = fields.Many2one('child.model', 'parent_id')", fr: "child_ids = field.Many2one('child.model', 'parent_id')" },
    ],
    explanation: {
      en: "Source Odoo Learn (One 2 many): child_ids = fields.One2many('child.model', 'parent_id')",
      fr: "Source Odoo Learn (Un 2 plusieurs) : child_ids = field.One2many('child.model', 'parent_id')",
    },
  }),
  complexQ({
    id: "tec-041",
    module: "technical-training",
    text: {
      en: "What is the purpose of a one2many field in Odoo? (Odoo Learn — One 2 many)",
      fr: "Quel est le but d’un champ one2many dans Odoo ? (Odoo Learn — Un 2 plusieurs)",
    },
    correct: {
      en: "To establish a one-to-many virtual relationship between two models.",
      fr: "Établir une relation virtuelle un-à-plusieurs entre deux modèles.",
    },
    distractors: [
      { en: "To store multiple values of a specific type in a single field.", fr: "Pour stocker plusieurs valeurs d'un type spécifique dans un seul champ." },
      { en: "To create a virtual field computed based on other fields.", fr: "Créer un champ virtuel calculé à partir d'autres champs." },
      { en: "To establish a many-to-one relationship between two models.", fr: "Établir une relation plusieurs-à-un entre deux modèles." },
    ],
    explanation: {
      en: "Source Odoo Learn (One 2 many): To establish a one-to-many virtual relationship between two models.",
      fr: "Source Odoo Learn (One 2 many) : Pour établir une relation virtuelle un-à-plusieurs entre deux modèles.",
    },
  }),
  mcq3Q({
    id: "tec-042",
    module: "technical-training",
    text: {
      en: "Which Many2many field definition is/are not correct ? (Odoo Learn — Many 2 many)",
      fr: "Quelle définition de champ Many2many est/n'est pas correcte ? (Odoo Learn — Beaucoup 2 plusieurs)",
    },
    correct: {
      en: "child_ids = fields.Many2many('model', 'parent_id')",
      fr: "child_ids = field.Many2many('model', 'parent_id')",
    },
    distractors: [
      { en: "child_ids = fields.Many2many('model', 'parent_child_rel', 'parent_id', 'child_id')", fr: "child_ids = field.Many2many('model', 'parent_child_rel', 'parent_id', 'child_id')" },
      { en: "child_ids = fields.Many2many('model')", fr: "child_ids = fields.Many2many('model')" },
    ],
    explanation: {
      en: "Source Odoo Learn (Many 2 many): child_ids = fields.Many2many('model', 'parent_id')",
      fr: "Source Odoo Learn (Beaucoup 2 plusieurs) : child_ids = field.Many2many('model', 'parent_id')",
    },
  }),
  complexQ({
    id: "tec-043",
    module: "technical-training",
    text: {
      en: "When you create a many-to-many field in an Odoo model class, what does this action do in the database schema? (Odoo Learn — Many 2 many)",
      fr: "Lorsque vous créez un champ plusieurs-à-plusieurs dans une classe de modèle Odoo, que fait cette action dans le schéma de la base de données ? (Odoo Learn — Beaucoup 2 plusieurs)",
    },
    correct: {
      en: "It creates a new table in the database schema to store the related records of both models and their relationships.",
      fr: "Il crée une nouvelle table dans le schéma de base de données pour stocker les enregistrements associés des deux modèles et leurs relations.",
    },
    distractors: [
      { en: "It creates a virtual table to store the relationships between records of the two related models.", fr: "Il crée une table virtuelle pour stocker les relations entre les enregistrements des deux modèles liés." },
      { en: "It creates a new column in the database table of the first related model to store the IDs of related records.", fr: "Il crée une nouvelle colonne dans la table de base de données du premier modèle associé pour stocker les ID des enregistrements associés." },
      { en: "It creates a new index in the database schema to optimize search operations for related records.", fr: "Il crée un nouvel index dans le schéma de base de données pour optimiser les opérations de recherche pour les enregistrements associés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Many 2 many): It creates a new table in the database schema to store the related records of both models and their relationships.",
      fr: "Source Odoo Learn (Many 2 many) : Il crée une nouvelle table dans le schéma de la base de données pour stocker les enregistrements associés des deux modèles et leurs relations.",
    },
  }),
  complexQ({
    id: "tec-044",
    module: "technical-training",
    text: {
      en: "Compute methods should be; (Odoo Learn — Compute Introduction)",
      fr: "Les méthodes de calcul devraient être : (Odoo Learn — Introduction au calcul)",
    },
    correct: {
      en: "private: starting with \"_\"",
      fr: "privé : commençant par \"_\"",
    },
    distractors: [
      { en: "private: starting with \"def\"", fr: "privé : commençant par \"def\"" },
      { en: "public: starting with \"def\"", fr: "public : commençant par \"def\"" },
      { en: "public: starting with \"_\"", fr: "public : commençant par \"_\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Compute Introduction): private: starting with \"_\"",
      fr: "Source Odoo Learn (Compute Introduction) : privé : commençant par \"_\"",
    },
  }),
  complexQ({
    id: "tec-045",
    module: "technical-training",
    text: {
      en: "By default, computed fields are; (Odoo Learn — Compute Introduction)",
      fr: "Par défaut, les champs calculés sont : (Odoo Learn — Introduction au calcul)",
    },
    correct: {
      en: "readonly",
      fr: "lecture seule",
    },
    distractors: [
      { en: "required", fr: "requis" },
      { en: "invisible", fr: "invisible" },
      { en: "stored", fr: "stocké" },
    ],
    explanation: {
      en: "Source Odoo Learn (Compute Introduction): readonly",
      fr: "Source Odoo Learn (Introduction au calcul) : lecture seule",
    },
  }),
  complexQ({
    id: "tec-046",
    module: "technical-training",
    text: {
      en: "What does \"self\" stand for in a computation method? (Odoo Learn — Compute Introduction)",
      fr: "Que signifie « soi » dans une méthode de calcul ? (Odoo Learn — Introduction au calcul)",
    },
    correct: {
      en: "It is a collection of the records  passed in the function.",
      fr: "Il s'agit d'une collection des enregistrements passés dans la fonction.",
    },
    distractors: [
      { en: "It reflects to the user's input.", fr: "Cela reflète la contribution de l'utilisateur." },
      { en: "It is the value to be returned by the function.", fr: "C'est la valeur que doit renvoyer la fonction." },
      { en: "It includes all the record of the actual model.", fr: "Il comprend tous les enregistrements du modèle réel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Compute Introduction): It is a collection of the records  passed in the function.",
      fr: "Source Odoo Learn (Compute Introduction) : Il s'agit d'une collection des enregistrements transmis dans la fonction.",
    },
  }),
  complexQ({
    id: "tec-047",
    module: "technical-training",
    text: {
      en: "In Odoo, you have a model with a computed field total_amount that depends on another computed field quantity and a stored field unit_price. Which of the following annotations should be used for the quantity field in the model class definition? (Odoo Learn — Related Computes)",
      fr: "Dans Odoo, vous disposez d'un modèle avec un champ calculé total_amount qui dépend d'une autre quantité de champ calculée et d'un champ unit_price stocké. Laquelle des annotations suivantes doit être utilisée pour le champ de quantité dans la définition de classe de modèle ? (Odoo Learn — Calculs associés)",
    },
    correct: {
      en: "@api.depends('quantity', 'unit_price')",
      fr: "@api.depends('quantité', 'unit_price')",
    },
    distractors: [
      { en: "@api.depends('unit_price')", fr: "@api.depends('unit_price')" },
      { en: "@api.depends('total_amount')", fr: "@api.depends('total_amount')" },
      { en: "@api.depends('quantity')", fr: "@api.depends('quantité')" },
    ],
    explanation: {
      en: "Source Odoo Learn (Related Computes): @api.depends('quantity', 'unit_price')",
      fr: "Source Odoo Learn (calculs associés) : @api.depends('quantity', 'unit_price')",
    },
  }),
  complexQ({
    id: "tec-048",
    module: "technical-training",
    text: {
      en: "What python operation do you need to use to avoid errors and get a list of values from multiple records at the same time ? (Odoo Learn — Multiple Records)",
      fr: "Quelle opération Python devez-vous utiliser pour éviter les erreurs et obtenir une liste de valeurs de plusieurs enregistrements en même temps ? (Odoo Learn — Plusieurs enregistrements)",
    },
    correct: {
      en: "mapped()",
      fr: "mappé()",
    },
    distractors: [
      { en: "list()", fr: "liste()" },
      { en: "values()", fr: "valeurs()" },
      { en: "data()", fr: "données()" },
    ],
    explanation: {
      en: "Source Odoo Learn (Multiple Records): mapped()",
      fr: "Source Odoo Learn (enregistrements multiples) : mappé()",
    },
  }),
  complexQ({
    id: "tec-049",
    module: "technical-training",
    text: {
      en: "What is the purpose of a related field in Odoo? (Odoo Learn — Related Fields)",
      fr: "A quoi sert un champ connexe dans Odoo ? (Odoo Learn — Domaines associés)",
    },
    correct: {
      en: "To get the value of a field from a related record.",
      fr: "Pour obtenir la valeur d'un champ à partir d'un enregistrement associé.",
    },
    distractors: [
      { en: "To establish a one-to-many relationship between two models.", fr: "Établir une relation un-à-plusieurs entre deux modèles." },
      { en: "To establish a many-to-one relationship between two models.", fr: "Établir une relation plusieurs-à-un entre deux modèles." },
      { en: "To store multiple values of a specific type in a single field.", fr: "Pour stocker plusieurs valeurs d'un type spécifique dans un seul champ." },
    ],
    explanation: {
      en: "Source Odoo Learn (Related Fields): To get the value of a field from a related record.",
      fr: "Source Odoo Learn (Champs associés) : Pour obtenir la valeur d'un champ à partir d'un enregistrement associé.",
    },
  }),
  complexQ({
    id: "tec-050",
    module: "technical-training",
    text: {
      en: "How do you specify the related model and field for a related field in Odoo? (Odoo Learn — Related Fields)",
      fr: "Comment spécifier le modèle et le champ associés pour un champ associé dans Odoo ? (Odoo Learn — Domaines associés)",
    },
    correct: {
      en: "By using the related attribute within the field definition.",
      fr: "En utilisant l'attribut associé dans la définition du champ.",
    },
    distractors: [
      { en: "By using the related_model attribute within the field definition.", fr: "En utilisant l'attribut Related_model dans la définition du champ." },
      { en: "By using the related method to fetch the value from the related record.", fr: "En utilisant la méthode associée pour récupérer la valeur de l'enregistrement associé." },
      { en: "By using the relation attribute within the field definition.", fr: "En utilisant l'attribut relation dans la définition du champ." },
    ],
    explanation: {
      en: "Source Odoo Learn (Related Fields): By using the related attribute within the field definition.",
      fr: "Source Odoo Learn (Champs associés) : en utilisant l'attribut associé dans la définition du champ.",
    },
  }),
  complexQ({
    id: "tec-051",
    module: "technical-training",
    text: {
      en: "How do you define an inverse method in an Odoo model class? (Odoo Learn — Inverse Functions)",
      fr: "Comment définir une méthode inverse dans une classe de modèle Odoo ? (Odoo Learn — Fonctions inverses)",
    },
    correct: {
      en: "By using the inverse parameter within the field definition.",
      fr: "En utilisant le paramètre inverse dans la définition du champ.",
    },
    distractors: [
      { en: "By using the inverse_method attribute within the field definition.", fr: "En utilisant l'attribut inverse_method dans la définition du champ." },
      { en: "By using the @api.inverse decorator above the method definition.", fr: "En utilisant le décorateur @api.inverse au-dessus de la définition de la méthode." },
      { en: "By using the @api.depends decorator above the method definition.", fr: "En utilisant le décorateur @api.depends au-dessus de la définition de la méthode." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inverse Functions): By using the inverse parameter within the field definition.",
      fr: "Source Odoo Learn (Fonctions inverses) : En utilisant le paramètre inverse dans la définition du champ.",
    },
  }),
  complexQ({
    id: "tec-052",
    module: "technical-training",
    text: {
      en: "Inverse functions are triggered; (Odoo Learn — Inverse Functions)",
      fr: "Les fonctions inverses sont déclenchées ; (Odoo Learn — Fonctions inverses)",
    },
    correct: {
      en: "when saving the full record modifications.",
      fr: "lors de la sauvegarde des modifications complètes de l'enregistrement.",
    },
    distractors: [
      { en: "based on the fields in the api.depends().", fr: "basé sur les champs de api.depends()." },
      { en: "at any field value change.", fr: "à tout changement de valeur de champ." },
      { en: "when computed value is changed.", fr: "lorsque la valeur calculée est modifiée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inverse Functions): when saving the full record modifications.",
      fr: "Source Odoo Learn (Fonctions Inverses) : lors de la sauvegarde des modifications complètes de l'enregistrement.",
    },
  }),
  complexQ({
    id: "tec-053",
    module: "technical-training",
    text: {
      en: "What is the purpose of an onchange method in Odoo? (Odoo Learn — Onchange Introduction)",
      fr: "Quel est le but d’une méthode onchange dans Odoo ? (Odoo Learn — Présentation d'Onchange)",
    },
    correct: {
      en: "To update some fields when the value of a field changes in the view.",
      fr: "Pour mettre à jour certains champs lorsque la valeur d'un champ change dans la vue.",
    },
    distractors: [
      { en: "To define the computation logic for a computed field.", fr: "Définir la logique de calcul d'un champ calculé." },
      { en: "To update some fields each time the value of a field changes.", fr: "Pour mettre à jour certains champs à chaque fois que la valeur d'un champ change." },
      { en: "To delete related records when the parent record is deleted.", fr: "Pour supprimer les enregistrements associés lorsque l'enregistrement parent est supprimé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Onchange Introduction): To update some fields when the value of a field changes in the view.",
      fr: "Source Odoo Learn (Introduction Onchange) : Pour mettre à jour certains champs lorsque la valeur d'un champ change dans la vue.",
    },
  }),
  complexQ({
    id: "tec-054",
    module: "technical-training",
    text: {
      en: "If a soft warning appears; (Odoo Learn — Onchange Introduction)",
      fr: "Si un avertissement logiciel apparaît ; (Odoo Learn — Présentation d'Onchange)",
    },
    correct: {
      en: "It does nothing apart from showing a message.",
      fr: "Cela ne fait rien à part afficher un message.",
    },
    distractors: [
      { en: "It resets all the values of my records.", fr: "Il réinitialise toutes les valeurs de mes enregistrements." },
      { en: "It resets the value of the wrong field of the record.", fr: "Il réinitialise la valeur du mauvais champ de l'enregistrement." },
      { en: "It does nothing.", fr: "Cela ne fait rien." },
    ],
    explanation: {
      en: "Source Odoo Learn (Onchange Introduction): It does nothing apart from showing a message.",
      fr: "Source Odoo Learn (Introduction Onchange) : Il ne fait rien d'autre que d'afficher un message.",
    },
  }),
  complexQ({
    id: "tec-055",
    module: "technical-training",
    text: {
      en: "In an Odoo model, you have a field price and a related field tax_amount. Whenever the price changes, you want to update the tax_amount field accordingly. How do you define the onchange method for this scenario? (Odoo Learn — Onchange & Soft warnings)",
      fr: "Dans un modèle Odoo, vous disposez d'un champ price et d'un champ associé tax_amount. Chaque fois que le prix change, vous souhaitez mettre à jour le champ tax_amount en conséquence. Comment définissez-vous la méthode onchange pour ce scénario ? (Odoo Learn — Avertissements Onchange et Soft)",
    },
    correct: {
      en: "@api.onchange('price')",
      fr: "@api.onchange('prix')",
    },
    distractors: [
      { en: "@api.onchange('tax_amount')", fr: "@api.onchange('montant_taxe')" },
      { en: "@api.onchange('price', 'tax_amount')", fr: "@api.onchange('prix', 'montant_taxe')" },
      { en: "@api.onchange('price', 'tax_amount', 'amount_total')", fr: "@api.onchange('prix', 'tax_amount', 'amount_total')" },
    ],
    explanation: {
      en: "Source Odoo Learn (Onchange & Soft warnings): @api.onchange('price')",
      fr: "Source Odoo Learn (avertissements Onchange & Soft) : @api.onchange('price')",
    },
  }),
  complexQ({
    id: "tec-056",
    module: "technical-training",
    text: {
      en: "To raise a soft warning, my method should end by; (Odoo Learn — Onchange & Soft warnings)",
      fr: "Pour émettre un avertissement discret, ma méthode devrait se terminer par ; (Odoo Learn — Avertissements Onchange et Soft)",
    },
    correct: {
      en: "return {\"warning\": {\"title\": title_var, \"message\": message_var}}",
      fr: "return {\"warning\": {\"title\": title_var, \"message\": message_var}}",
    },
    distractors: [
      { en: "return {\"soft_warning\": message_var}", fr: "return {\"soft_warning\": message_var}" },
      { en: "raise SoftWarning(message_var)", fr: "augmenter SoftWarning (message_var)" },
      { en: "raise {\"warning\": {\"title\": title_var, \"message\": message_var}}", fr: "raise {\"warning\": {\"title\": title_var, \"message\": message_var}}" },
    ],
    explanation: {
      en: "Source Odoo Learn (Onchange & Soft warnings): return {\"warning\": {\"title\": title_var, \"message\": message_var}}",
      fr: "Source Odoo Learn (avertissements Onchange & Soft) : return {\"warning\": {\"title\": title_var, \"message\": message_var}}",
    },
  }),
  complexQ({
    id: "tec-057",
    module: "technical-training",
    text: {
      en: "Which one of this method can be used as an action ? (Odoo Learn — Action definition)",
      fr: "Laquelle de ces méthodes peut être utilisée comme action ? (Odoo Learn — Définition des actions)",
    },
    correct: {
      en: "def my_new_action(self)",
      fr: "def my_new_action (soi)",
    },
    distractors: [
      { en: "def _my_new_action()", fr: "def _my_new_action()" },
      { en: "def _my_new_action(self)", fr: "def _my_new_action(soi)" },
      { en: "def my_new_action()", fr: "def ma_nouvelle_action()" },
    ],
    explanation: {
      en: "Source Odoo Learn (Action definition): def my_new_action(self)",
      fr: "Source Odoo Learn (Définition de l'action) : def my_new_action(self)",
    },
  }),
  complexQ({
    id: "tec-058",
    module: "technical-training",
    text: {
      en: "How can you open a view using a python method ? (Odoo Learn — Opening views)",
      fr: "Comment ouvrir une vue en utilisant une méthode python ? (Odoo Learn — Vues d'ouverture)",
    },
    correct: {
      en: "Returning a dictionary with the values of an action definition (ir.actions.act_window).",
      fr: "Renvoyer un dictionnaire avec les valeurs d'une définition d'action (ir.actions.act_window).",
    },
    distractors: [
      { en: "Returning the id of the view you want to open.", fr: "Renvoie l'identifiant de la vue que vous souhaitez ouvrir." },
      { en: "Returning a dictionary with the values of a view definition (ir.ui.view).", fr: "Renvoyer un dictionnaire avec les valeurs d'une définition de vue (ir.ui.view)." },
      { en: "Returning the id of the correct menu.", fr: "Renvoyer l'identifiant du menu correct." },
    ],
    explanation: {
      en: "Source Odoo Learn (Opening views): Returning a dictionary with the values of an action definition (ir.actions.act_window).",
      fr: "Source Odoo Learn (Ouverture des vues) : Renvoi d'un dictionnaire avec les valeurs d'une définition d'action (ir.actions.act_window).",
    },
  }),
  complexQ({
    id: "tec-059",
    module: "technical-training",
    text: {
      en: "How can I block an action when the user tries to set invalid values ? (Odoo Learn — Raising errors)",
      fr: "Comment bloquer une action lorsque l'utilisateur tente de définir des valeurs invalides ? (Odoo Learn — Générer des erreurs)",
    },
    correct: {
      en: "raise UserError(\"Wrong input\")",
      fr: "augmenter UserError(\"Entrée incorrecte\")",
    },
    distractors: [
      { en: "return {\"error\": \"Wrong input\"}", fr: "return {\"error\": \"Entrée incorrecte\"}" },
      { en: "raise  {\"error\": \"Wrong input\"}", fr: "raise {\"error\": \"Entrée incorrecte\"}" },
      { en: "return UserError(\"Wrong input\")", fr: "return UserError(\"Entrée erronée\")" },
    ],
    explanation: {
      en: "Source Odoo Learn (Raising errors): raise UserError(\"Wrong input\")",
      fr: "Source Odoo Learn (Rising erreurs): raise UserError(\"Wrong input\")",
    },
  }),
  mcq3Q({
    id: "tec-060",
    module: "technical-training",
    text: {
      en: "How can I make the error text translatable ? (Odoo Learn — Raising errors)",
      fr: "Comment rendre le texte d'erreur traduisible ? (Odoo Learn — Générer des erreurs)",
    },
    correct: {
      en: "Stating the text in between parenthesis and starting with an underscore.",
      fr: "Indiquer le texte entre parenthèses et commencer par un trait de soulignement.",
    },
    distractors: [
      { en: "By importing ir.fields.translate", fr: "En important ir.fields.translate" },
      { en: "All the code in the different models is automatically translatable.", fr: "Tout le code des différents modèles est automatiquement traduisible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Raising errors): Stating the text in between parenthesis and starting with an underscore.",
      fr: "Source Odoo Learn (Relevé d'erreurs) : Indiquer le texte entre parenthèses et commencer par un trait de soulignement.",
    },
  }),
  complexQ({
    id: "tec-061",
    module: "technical-training",
    text: {
      en: "Where do I define a new SQL constraint ? (Odoo Learn — SQL constraints)",
      fr: "Où définir une nouvelle contrainte SQL ? (Odoo Learn — Contraintes SQL)",
    },
    correct: {
      en: "In each model, in the attribute \"_sql_constraints\"",
      fr: "Dans chaque modèle, dans l'attribut \"_sql_constraints\"",
    },
    distractors: [
      { en: "In each model, in the attribute \"_constraints\"", fr: "Dans chaque modèle, dans l'attribut \"_constraints\"" },
      { en: "In the security folder, in an SQL file named \"_sql_constraints\"", fr: "Dans le dossier security, dans un fichier SQL nommé \"_sql_constraints\"" },
      { en: "In the security folder, in an SQL file named \"_constraints\"", fr: "Dans le dossier security, dans un fichier SQL nommé \"_constraints\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (SQL constraints): In each model, in the attribute \"_sql_constraints\"",
      fr: "Source Odoo Learn (contraintes SQL) : Dans chaque modèle, dans l'attribut \"_sql_constraints\"",
    },
  }),
  complexQ({
    id: "tec-062",
    module: "technical-training",
    text: {
      en: "How is a python constraint triggered ? (Odoo Learn — Python constraints)",
      fr: "Comment se déclenche une contrainte python ? (Odoo Learn — Contraintes Python)",
    },
    correct: {
      en: "Using the API decorator \"@api.constrains\" and defining the trigger field there.",
      fr: "Utiliser le décorateur API \"@api.constrains\" et y définir le champ de déclenchement.",
    },
    distractors: [
      { en: "In the field definition, using the attribute \"constraint=True\"", fr: "Dans la définition du champ, en utilisant l'attribut \"constraint=True\"" },
      { en: "Using the API decorator \"@api.constraint\" and defining the trigger field there.", fr: "Utiliser le décorateur API \"@api.constraint\" et y définir le champ de déclenchement." },
      { en: "Using the API decorator \"@api.restricts\" and defining the trigger field there.", fr: "Utiliser le décorateur API \"@api.restricts\" et y définir le champ de déclenchement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Python constraints): Using the API decorator \"@api.constrains\" and defining the trigger field there.",
      fr: "Source Odoo Learn (contraintes Python) : Utiliser le décorateur API \"@api.constrains\" et y définir le champ de déclenchement.",
    },
  }),
  complexQ({
    id: "tec-063",
    module: "technical-training",
    text: {
      en: "What error should be raised under a wrong condition ? (Odoo Learn — Python constraints)",
      fr: "Quelle erreur doit être générée dans une mauvaise condition ? (Odoo Learn — Contraintes Python)",
    },
    correct: {
      en: "ValidationError",
      fr: "Erreur de validation",
    },
    distractors: [
      { en: "UserError", fr: "ErreurUtilisateur" },
      { en: "ConstrainsError", fr: "ContraintesErreur" },
      { en: "PythonError", fr: "PythonErreur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Python constraints): ValidationError",
      fr: "Source Odoo Learn (contraintes Python) : ValidationError",
    },
  }),
  complexQ({
    id: "tec-064",
    module: "technical-training",
    text: {
      en: "What's an Inline view ? (Odoo Learn — Inline view introduction)",
      fr: "Qu'est-ce qu'une vue en ligne ? (Odoo Learn — Introduction à la vue en ligne)",
    },
    correct: {
      en: "A list view defined in a form view.",
      fr: "Une vue de liste définie dans une vue de formulaire.",
    },
    distractors: [
      { en: "A list of buttons displayed in list views.", fr: "Une liste de boutons affichés dans les vues de liste." },
      { en: "An ordering defined for a list view.", fr: "Un ordre défini pour une vue de liste." },
      { en: "Any type of view listing data in lines.", fr: "Tout type de vue répertoriant les données en lignes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inline view introduction): A list view defined in a form view.",
      fr: "Source Odoo Learn (introduction à la vue en ligne) : Une vue de liste définie dans une vue de formulaire.",
    },
  }),
  complexQ({
    id: "tec-065",
    module: "technical-training",
    text: {
      en: "What is the main use of widgets in Odoo ? (Odoo Learn — Widgets Introduction)",
      fr: "Quelle est l’utilité principale des widgets dans Odoo ? (Odoo Learn — Présentation des widgets)",
    },
    correct: {
      en: "Improve user experience modifying the display of some fields.",
      fr: "Améliorer l'expérience utilisateur en modifiant l'affichage de certains champs.",
    },
    distractors: [
      { en: "Improve performance in field computations.", fr: "Améliorer les performances dans les calculs sur le terrain." },
      { en: "Improve in DB data formatting.", fr: "Améliorer le formatage des données de base de données." },
      { en: "Improve form view architecture and code readability.", fr: "Améliorez l’architecture d’affichage des formulaires et la lisibilité du code." },
    ],
    explanation: {
      en: "Source Odoo Learn (Widgets Introduction): Improve user experience modifying the display of some fields.",
      fr: "Source Odoo Learn (Introduction aux widgets) : Améliorez l'expérience utilisateur en modifiant l'affichage de certains champs.",
    },
  }),
  complexQ({
    id: "tec-066",
    module: "technical-training",
    text: {
      en: "How can you add a specific ordering to a model ? (Odoo Learn — Model Ordering)",
      fr: "Comment ajouter une commande spécifique à un modèle ? (Odoo Learn — Commande de modèles)",
    },
    correct: {
      en: "Using the model attribute \"_order\"",
      fr: "Utilisation de l'attribut de modèle \"_order\"",
    },
    distractors: [
      { en: "Using the model attribute \"_ordering\"", fr: "Utilisation de l'attribut de modèle \"_ordering\"" },
      { en: "Setting the field attribute \"order='desc' \" on the desired fields", fr: "Définition de l'attribut de champ \"order='desc' \" sur les champs souhaités" },
      { en: "In the SQL rules file in the security folder", fr: "Dans le fichier de règles SQL du dossier sécurité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Model Ordering): Using the model attribute \"_order\"",
      fr: "Source Odoo Learn (Classement des modèles) : Utilisation de l'attribut de modèle \"_order\"",
    },
  }),
  mcq3Q({
    id: "tec-070",
    module: "technical-training",
    text: {
      en: "Field view attributes (Odoo Learn — Fields Attributes)",
      fr: "Attributs de vue de champ (Odoo Learn — Attributs des champs)",
    },
    correct: {
      en: "Deal with python expressions",
      fr: "Gérer les expressions python",
    },
    distractors: [
      { en: "Take dictionaries inputs", fr: "Prendre les entrées des dictionnaires" },
      { en: "Need to call methods defined in the model", fr: "Besoin d'appeler les méthodes définies dans le modèle" },
    ],
    explanation: {
      en: "Source Odoo Learn (Fields Attributes): Deal with python expressions",
      fr: "Source Odoo Learn (Attributs des champs) : Gérer les expressions python",
    },
  }),
  complexQ({
    id: "tec-071",
    module: "technical-training",
    text: {
      en: "What's the use of \"parent\" in a list view attribute definition ? (Odoo Learn — List View Attributes)",
      fr: "Quelle est l'utilité de \"parent\" dans une définition d'attribut de vue de liste ? (Odoo Learn — Attributs de vue de liste)",
    },
    correct: {
      en: "Allows to compute values from inverse many2one field.",
      fr: "Permet de calculer les valeurs du champ many2one inverse.",
    },
    distractors: [
      { en: "Calls the parent tree view and displays it.", fr: "Appelle l’arborescence parent et l’affiche." },
      { en: "Redirect to the previous view.", fr: "Rediriger vers la vue précédente." },
      { en: "Add some security layer to the attribute computation.", fr: "Ajoutez une couche de sécurité au calcul des attributs." },
    ],
    explanation: {
      en: "Source Odoo Learn (List View Attributes): Allows to compute values from inverse many2one field.",
      fr: "Source Odoo Learn (attributs de vue de liste) : permet de calculer des valeurs à partir du champ many2one inverse.",
    },
  }),
  complexQ({
    id: "tec-072",
    module: "technical-training",
    text: {
      en: "To apply a filter by default in a model, I need to: (Odoo Learn — Default Search)",
      fr: "Pour appliquer un filtre par défaut dans un modèle, je dois : (Odoo Learn — Recherche par défaut)",
    },
    correct: {
      en: "Add the field context in the action and set it as: <field name=\"context\">{\"search_default_filter_name\": True}</field>",
      fr: "Ajoutez le contexte du champ dans l'action et définissez-le comme : <field name=\"context\">{\"search_default_filter_name\": True}</field>",
    },
    distractors: [
      { en: "Add the attribute default=True in my filter in the search view", fr: "Ajouter l'attribut default=True dans mon filtre dans la vue recherche" },
      { en: "Add the field default_search in the action and set it as: <field name=\"default_search\">filter_name</field>", fr: "Ajoutez le champ default_search dans l'action et définissez-le comme : <field name=\"default_search\">filter_name</field>" },
      { en: "Add the field context in the action and set it as: <field name=\"context\">{\"filter_name\": True}</field>", fr: "Ajoutez le contexte du champ dans l'action et définissez-le comme : <field name=\"context\">{\"filter_name\": True}</field>" },
    ],
    explanation: {
      en: "Source Odoo Learn (Default Search): Add the field context in the action and set it as: <field name=\"context\">{\"search_default_filter_name\": True}</field>",
      fr: "Source Odoo Learn (Recherche par défaut) : Ajoutez le contexte du champ dans l'action et définissez-le comme : <field name=\"context\">{\"search_default_filter_name\": True}</field>",
    },
  }),
  complexQ({
    id: "tec-073",
    module: "technical-training",
    text: {
      en: "What variable is used to reflect the user's input ? (Odoo Learn — Filter Domain)",
      fr: "Quelle variable est utilisée pour refléter la saisie de l'utilisateur ? (Odoo Learn — Filtrer le domaine)",
    },
    correct: {
      en: "self",
      fr: "soi",
    },
    distractors: [
      { en: "input", fr: "saisir" },
      { en: "search", fr: "recherche" },
      { en: "typed", fr: "tapé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Filter Domain): self",
      fr: "Source Odoo Learn (domaine de filtrage) : soi-même",
    },
  }),
  complexQ({
    id: "tec-074",
    module: "technical-training",
    text: {
      en: "Which Python expression should you use if you want to be error compliant with the typed input ? (Odoo Learn — Filter Domain)",
      fr: "Quelle expression Python devez-vous utiliser si vous souhaitez être conforme aux erreurs avec l'entrée saisie ? (Odoo Learn — Filtrer le domaine)",
    },
    correct: {
      en: "\"ilike\"",
      fr: "\"j'aime\"",
    },
    distractors: [
      { en: "\"|=\"", fr: "\"|=\"" },
      { en: "\"almost\"", fr: "\"presque\"" },
      { en: "\"and\"", fr: "\"et\"" },
    ],
    explanation: {
      en: "Source Odoo Learn (Filter Domain): \"ilike\"",
      fr: "Source Odoo Learn (domaine de filtre) : \"j'aime\"",
    },
  }),
];
