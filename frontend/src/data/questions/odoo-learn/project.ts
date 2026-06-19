import { complexQ, mcq3Q } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const projectLearnQuestions = [
  complexQ({
    id: "prj-025",
    module: "project",
    text: {
      en: "What are the benefits of the Kanban view? (Odoo Learn — Project basics and your first task)",
      fr: "Quels sont les avantages de la vue Kanban ? (Odoo Learn — Les bases du projet et votre première tâche)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "It allows a clear overview of all the active project tasks", fr: "Il permet un aperçu clair de toutes les tâches actives du projet" },
      { en: "It allows to add and edit tasks without opening each individual record", fr: "Il permet d'ajouter et de modifier des tâches sans ouvrir chaque enregistrement individuel" },
      { en: "It allows to drag and drop tasks to update their stage", fr: "Il permet de glisser-déposer des tâches pour mettre à jour leur étape" },
    ],
    explanation: {
      en: "Source Odoo Learn (Project basics and your first task): All of the above",
      fr: "Source Odoo Learn (Bases du projet et votre première tâche) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "prj-026",
    module: "project",
    text: {
      en: "Which of the following sentences is false? (Odoo Learn — Project basics and your first task)",
      fr: "Laquelle des phrases suivantes est fausse ? (Odoo Learn — Les bases du projet et votre première tâche)",
    },
    correct: {
      en: "Kanban stages and task statuses are the same feature",
      fr: "Les étapes Kanban et les statuts des tâches sont la même fonctionnalité",
    },
    distractors: [
      { en: "Kanban stage is used to keep track of the task’s progress by dragging and dropping into different columns", fr: "L'étape Kanban est utilisée pour suivre la progression de la tâche par glisser-déposer dans différentes colonnes" },
      { en: "Task statuses can be used to close a task as well as to mark it as approved", fr: "Les statuts des tâches peuvent être utilisés pour clôturer une tâche ainsi que pour la marquer comme approuvée." },
      { en: "It’s possible to create custom Kanban stages", fr: "Il est possible de créer des étapes Kanban personnalisées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Project basics and your first task): Kanban stages and task statuses are the same feature",
      fr: "Source Odoo Learn (Bases du projet et votre première tâche) : les étapes Kanban et les statuts des tâches sont la même fonctionnalité",
    },
  }),
  complexQ({
    id: "prj-027",
    module: "project",
    text: {
      en: "What is the impact of updating a task status to “changes requested”? (Odoo Learn — Project basics and your first task)",
      fr: "Quel est l'impact de la mise à jour du statut d'une tâche vers « modifications demandées » ? (Odoo Learn — Les bases du projet et votre première tâche)",
    },
    correct: {
      en: "A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage",
      fr: "Un point d'état jaune s'affiche sur la tâche pour signifier que la tâche nécessite un travail supplémentaire avant de passer à l'étape suivante.",
    },
    distractors: [
      { en: "The task is automatically moved to the previous Kanban stage", fr: "La tâche est automatiquement déplacée vers l'étape Kanban précédente" },
      { en: "Followers of the task are notified that changes have been requested", fr: "Les adeptes de la tâche sont informés que des modifications ont été demandées" },
      { en: "All of the above", fr: "Tout ce qui précède" },
    ],
    explanation: {
      en: "Source Odoo Learn (Project basics and your first task): A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage",
      fr: "Source Odoo Learn (Bases du projet et votre première tâche) : Un point d'état jaune apparaît sur la tâche pour signifier que la tâche nécessite un travail supplémentaire avant de passer à l'étape suivante",
    },
  }),
  complexQ({
    id: "prj-028",
    module: "project",
    text: {
      en: "How to close a task? (Odoo Learn — Project basics and your first task)",
      fr: "Comment clôturer une tâche ? (Odoo Learn — Les bases du projet et votre première tâche)",
    },
    correct: {
      en: "By changing its status to “Done” or “Canceled”",
      fr: "En changeant son statut en « Terminé » ou « Annulé »",
    },
    distractors: [
      { en: "By moving it to the “Completed” Kanban stage", fr: "En le déplaçant vers l'étape Kanban « Terminé »" },
      { en: "By dragging and dropping it into the trash", fr: "En le glissant-déposant dans la corbeille" },
      { en: "By creating a “Closure” activity", fr: "En créant une activité « Clôture »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Project basics and your first task): By changing its status to “Done” or “Canceled”",
      fr: "Source Odoo Learn (Bases du projet et votre première tâche) : En changeant son statut en « Terminé » ou « Annulé »",
    },
  }),
  mcq3Q({
    id: "prj-029",
    module: "project",
    text: {
      en: "In order to activate Project stages in your Kanban view, you have to: (Odoo Learn — Project stages and statuses)",
      fr: "Afin d'activer les étapes du projet dans votre vue Kanban, vous devez : (Odoo Learn — Étapes et statuts du projet)",
    },
    correct: {
      en: "Go into Project → Configuration → Settings and activate Project Stages.",
      fr: "Allez dans Projet → Configuration → Paramètres et activez les étapes du projet.",
    },
    distractors: [
      { en: "Do nothing, project stages are visible by default.", fr: "Ne faites rien, les étapes du projet sont visibles par défaut." },
      { en: "Go into each project’s settings to activate project stages.", fr: "Accédez aux paramètres de chaque projet pour activer les étapes du projet." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project stages and statuses): Go into Project → Configuration → Settings and activate Project Stages.",
      fr: "Source Odoo Learn (Étapes et statuts du projet) : Allez dans Projet → Configuration → Paramètres et activez les étapes du projet.",
    },
  }),
  mcq3Q({
    id: "prj-031",
    module: "project",
    text: {
      en: "What does the colored bar at the top of each Kanban stage indicate? (Odoo Learn — Project stages and statuses)",
      fr: "Qu'indique la barre colorée en haut de chaque étape Kanban ? (Odoo Learn — Étapes et statuts du projet)",
    },
    correct: {
      en: "The number of projects with each status in this Kanban stage.",
      fr: "Le nombre de projets avec chaque statut dans cette étape Kanban.",
    },
    distractors: [
      { en: "The number of allocated hours for each project in this Kanban stage.", fr: "Le nombre d'heures allouées pour chaque projet dans cette étape Kanban." },
      { en: "The number of projects with each tag in this Kanban stage.", fr: "Le nombre de projets avec chaque balise dans cette étape Kanban." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project stages and statuses): The number of projects with each status in this Kanban stage.",
      fr: "Source Odoo Learn (Étapes et statuts du projet) : Le nombre de projets avec chaque statut dans cette étape Kanban.",
    },
  }),
  mcq3Q({
    id: "prj-032",
    module: "project",
    text: {
      en: "Click the vertical ellipsis icon next to the “Office design” project, then open Dashboard. Press New to create a new Project Update. How does the new Project Update affect your project’s state? (Odoo Learn — Project stages and statuses)",
      fr: "Cliquez sur l'icône de points de suspension verticale à côté du projet « Office design », puis ouvrez le tableau de bord. Appuyez sur Nouveau pour créer une nouvelle mise à jour du projet. Comment la nouvelle mise à jour du projet affecte-t-elle l’état de votre projet ? (Odoo Learn — Étapes et statuts du projet)",
    },
    correct: {
      en: "The project’s state gets updated to the same state as given in the last Project Update.",
      fr: "L’état du projet est mis à jour avec le même état que celui indiqué dans la dernière mise à jour du projet.",
    },
    distractors: [
      { en: "The project’s state is an average of the states given in all previous Project Updates.", fr: "L’état du projet est une moyenne des états indiqués dans toutes les mises à jour précédentes du projet." },
      { en: "The project’s state is calculated based on the progress percentage in the last Project Update.", fr: "L'état du projet est calculé en fonction du pourcentage d'avancement dans la dernière mise à jour du projet." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project stages and statuses): The project’s state gets updated to the same state as given in the last Project Update.",
      fr: "Source Odoo Learn (étapes et statuts du projet) : l'état du projet est mis à jour au même état que celui indiqué dans la dernière mise à jour du projet.",
    },
  }),
  complexQ({
    id: "prj-033",
    module: "project",
    text: {
      en: "When creating a new project, is filling the customer field mandatory? (Odoo Learn — Customize projects)",
      fr: "Lors de la création d'un nouveau projet, le remplissage du champ client est-il obligatoire ? (Odoo Learn — Personnaliser les projets)",
    },
    correct: {
      en: "No, some projects can be internal and unrelated to a customer.",
      fr: "Non, certains projets peuvent être internes et sans rapport avec un client.",
    },
    distractors: [
      { en: "Yes, projects are always related to a customer.", fr: "Oui, les projets sont toujours liés à un client." },
      { en: "Yes, as well as the project name.", fr: "Oui, ainsi que le nom du projet." },
      { en: "No, customers can only be added in the setting form of a project after its creation.", fr: "Non, les clients ne peuvent être ajoutés dans le formulaire de paramétrage d'un projet qu'après sa création." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize projects): No, some projects can be internal and unrelated to a customer.",
      fr: "Source Odoo Learn (Personnaliser les projets) : Non, certains projets peuvent être internes et sans rapport avec un client.",
    },
  }),
  complexQ({
    id: "prj-034",
    module: "project",
    text: {
      en: "Where can you change the name of a project? (Odoo Learn — Customize projects)",
      fr: "Où peut-on changer le nom d'un projet ? (Odoo Learn — Personnaliser les projets)",
    },
    correct: {
      en: "In the settings form of the project.",
      fr: "Dans le formulaire des paramètres du projet.",
    },
    distractors: [
      { en: "You cannot change the name of the project once it’s created.", fr: "Vous ne pouvez pas modifier le nom du projet une fois celui-ci créé." },
      { en: "In the projects Kanban view.", fr: "Dans la vue Kanban des projets." },
      { en: "Both in the Kanban view and the edit form of the project.", fr: "Tant dans la vue Kanban que dans le formulaire d'édition du projet." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize projects): In the settings form of the project.",
      fr: "Source Odoo Learn (Personnaliser les projets) : Dans le formulaire des paramètres du projet.",
    },
  }),
  complexQ({
    id: "prj-035",
    module: "project",
    text: {
      en: "Return to the projects kanban view. Which of these elements does not appear on project cards? (Odoo Learn — Customize projects)",
      fr: "Revenez à la vue Kanban des projets. Lequel de ces éléments n’apparaît pas sur les fiches de projet ? (Odoo Learn — Personnaliser les projets)",
    },
    correct: {
      en: "The Project Description.",
      fr: "La description du projet.",
    },
    distractors: [
      { en: "The Due Dates.", fr: "Les dates d'échéance." },
      { en: "The Tags.", fr: "Les balises." },
      { en: "The assigned Project Manager.", fr: "Le chef de projet désigné." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize projects): The Project Description.",
      fr: "Source Odoo Learn (Personnaliser les projets) : La description du projet.",
    },
  }),
  complexQ({
    id: "prj-036",
    module: "project",
    text: {
      en: "What elements can you add to differentiate projects? (Odoo Learn — Customize projects)",
      fr: "Quels éléments pouvez-vous ajouter pour différencier les projets ? (Odoo Learn — Personnaliser les projets)",
    },
    correct: {
      en: "Tags, colors, or/and set them as favorites.",
      fr: "Balises, couleurs ou/et définissez-les comme favoris.",
    },
    distractors: [
      { en: "Tags or colors, but you cannot combine both elements.", fr: "Balises ou couleurs, mais vous ne pouvez pas combiner les deux éléments." },
      { en: "Nothing, all project cards look identical.", fr: "Rien, toutes les cartes de projet se ressemblent." },
      { en: "A cover image.", fr: "Une image de couverture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customize projects): Tags, colors, or/and set them as favorites.",
      fr: "Source Odoo Learn (Personnaliser les projets) : Tags, couleurs ou/et définissez-les comme favoris.",
    },
  }),
  mcq3Q({
    id: "prj-037",
    module: "project",
    text: {
      en: "How do you display the top bar : (Odoo Learn — Top bar)",
      fr: "Comment afficher la barre supérieure : (Odoo Learn — Barre supérieure)",
    },
    correct: {
      en: "Click the \"sliders\" button near the top right corner of the page.",
      fr: "Cliquez sur le bouton « curseurs » près du coin supérieur droit de la page.",
    },
    distractors: [
      { en: "Go to Project → Settings→ Top bar.", fr: "Accédez à Projet → Paramètres → Barre supérieure." },
      { en: "The top bar is displayed by default.", fr: "La barre supérieure est affichée par défaut." },
    ],
    explanation: {
      en: "Source Odoo Learn (Top bar): Click the \"sliders\" button near the top right corner of the page.",
      fr: "Source Odoo Learn (barre supérieure) : cliquez sur le bouton \"curseurs\" près du coin supérieur droit de la page.",
    },
  }),
  mcq3Q({
    id: "prj-038",
    module: "project",
    text: {
      en: "In order to customize the top bar, you should : (Odoo Learn — Top bar)",
      fr: "Afin de personnaliser la barre supérieure, vous devez : (Odoo Learn — Barre supérieure)",
    },
    correct: {
      en: "Click the \"sliders\" button on top of the search bar.",
      fr: "Cliquez sur le bouton « curseurs » en haut de la barre de recherche.",
    },
    distractors: [
      { en: "Click the \"sliders\" button near the top right corner of the page.", fr: "Cliquez sur le bouton « curseurs » près du coin supérieur droit de la page." },
      { en: "Click the \"bars\" button near the top right corner of the page.", fr: "Cliquez sur le bouton « barres » près du coin supérieur droit de la page." },
    ],
    explanation: {
      en: "Source Odoo Learn (Top bar): Click the \"sliders\" button on top of the search bar.",
      fr: "Source Odoo Learn (barre supérieure) : cliquez sur le bouton \"curseurs\" en haut de la barre de recherche.",
    },
  }),
  complexQ({
    id: "prj-039",
    module: "project",
    text: {
      en: "What can’t be added to the top bar? (Odoo Learn — Top bar)",
      fr: "Qu'est-ce qui ne peut pas être ajouté à la barre supérieure ? (Odoo Learn — Barre supérieure)",
    },
    correct: {
      en: "CRM.",
      fr: "GRC.",
    },
    distractors: [
      { en: "Stock moves.", fr: "Les mouvements de stocks." },
      { en: "Bills of materials.", fr: "Nomenclatures." },
      { en: "Dashboard.", fr: "Tableau de bord." },
    ],
    explanation: {
      en: "Source Odoo Learn (Top bar): CRM.",
      fr: "Source Odoo Learn (barre supérieure) : CRM.",
    },
  }),
  mcq3Q({
    id: "prj-040",
    module: "project",
    text: {
      en: "How can you create custom top bar views? (Odoo Learn — Top bar)",
      fr: "Comment pouvez-vous créer des vues de barre supérieure personnalisées ? (Odoo Learn — Barre supérieure)",
    },
    correct: {
      en: "Click a top bar button, customize the view with keywords, filters, and grouping options using the search bar, and click Save View.",
      fr: "Cliquez sur un bouton de la barre supérieure, personnalisez la vue avec des mots-clés, des filtres et des options de regroupement à l'aide de la barre de recherche, puis cliquez sur Enregistrer la vue.",
    },
    distractors: [
      { en: "It can be done through the Studio app.", fr: "Cela peut être fait via l'application Studio." },
      { en: "It’s not possible to create custom top bar views.", fr: "Il n'est pas possible de créer des vues personnalisées de la barre supérieure." },
    ],
    explanation: {
      en: "Source Odoo Learn (Top bar): Click a top bar button, customize the view with keywords, filters, and grouping options using the search bar, and click Save View.",
      fr: "Source Odoo Learn (barre supérieure) : cliquez sur un bouton de la barre supérieure, personnalisez la vue avec des mots-clés, des filtres et des options de regroupement à l'aide de la barre de recherche, puis cliquez sur Enregistrer la vue.",
    },
  }),
  complexQ({
    id: "prj-041",
    module: "project",
    text: {
      en: "Which of the following statements is true? (Odoo Learn — Creating tasks from emails and web forms)",
      fr: "Laquelle des affirmations suivantes est vraie ? (Odoo Learn — Création de tâches à partir d'e-mails et de formulaires Web)",
    },
    correct: {
      en: "You can have one email alias per each project",
      fr: "Vous pouvez avoir un alias de messagerie pour chaque projet",
    },
    distractors: [
      { en: "You can have one email alias for all of your projects", fr: "Vous pouvez avoir un seul alias de messagerie pour tous vos projets" },
      { en: "You can have multiple email aliases for one project", fr: "Vous pouvez avoir plusieurs alias de messagerie pour un projet" },
      { en: "All statements are correct", fr: "Toutes les affirmations sont correctes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating tasks from emails and web forms): You can have one email alias per each project",
      fr: "Source Odoo Learn (Création de tâches à partir d'e-mails et de formulaires Web) : Vous pouvez avoir un alias d'e-mail pour chaque projet",
    },
  }),
  complexQ({
    id: "prj-042",
    module: "project",
    text: {
      en: "Configuring an email template on a Kanban stage means that: (Odoo Learn — Creating tasks from emails and web forms)",
      fr: "Configurer un modèle d'e-mail sur une étape Kanban signifie que : (Odoo Learn — Création de tâches à partir d'e-mails et de formulaires Web)",
    },
    correct: {
      en: "An email based on the template will be sent to the customer as soon as a task is moved into this stage",
      fr: "Un e-mail basé sur le modèle sera envoyé au client dès qu'une tâche passe à cette étape",
    },
    distractors: [
      { en: "An email based on the template will be sent to the customer as soon as a task is moved out from this stage into the next one", fr: "Un e-mail basé sur le modèle sera envoyé au client dès qu'une tâche passera de cette étape à la suivante." },
      { en: "An email based on the template will be sent to the customer when the task is completed", fr: "Un e-mail basé sur le modèle sera envoyé au client une fois la tâche terminée" },
      { en: "An email based on the template will be sent to the customer on every update of the task", fr: "Un email basé sur le modèle sera envoyé au client à chaque mise à jour de la tâche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating tasks from emails and web forms): An email based on the template will be sent to the customer as soon as a task is moved into this stage",
      fr: "Source Odoo Learn (Création de tâches à partir d'e-mails et de formulaires Web) : Un e-mail basé sur le modèle sera envoyé au client dès qu'une tâche passe à cette étape",
    },
  }),
  complexQ({
    id: "prj-043",
    module: "project",
    text: {
      en: "Tasks created from a website form are created in (Odoo Learn — Creating tasks from emails and web forms)",
      fr: "Les tâches créées à partir d'un formulaire de site Web sont créées dans (Odoo Learn — Création de tâches à partir d'e-mails et de formulaires Web)",
    },
    correct: {
      en: "In the project that was selected when configuring the project form in the website editor",
      fr: "Dans le projet sélectionné lors du paramétrage du formulaire projet sous l'éditeur de site",
    },
    distractors: [
      { en: "In the dispatch tab of the project app, where they can be assigned to the correct project", fr: "Dans l'onglet d'envoi de l'application de projet, où ils peuvent être affectés au bon projet" },
      { en: "In the “Website” project, which is created automatically once the Website app is installed", fr: "Dans le projet « Site Web », qui est créé automatiquement une fois l'application Site Web installée" },
      { en: "Each website form creates a new project with one task in it", fr: "Chaque formulaire de site Web crée un nouveau projet contenant une tâche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating tasks from emails and web forms): In the project that was selected when configuring the project form in the website editor",
      fr: "Source Odoo Learn (Création de tâches à partir d'emails et de formulaires web) : Dans le projet qui a été sélectionné lors de la configuration du formulaire projet dans l'éditeur de site web",
    },
  }),
  complexQ({
    id: "prj-044",
    module: "project",
    text: {
      en: "Projects linked to sales orders are: (Odoo Learn — Creating tasks from sales orders)",
      fr: "Les projets liés aux commandes clients sont : (Odoo Learn — Création de tâches à partir de commandes clients)",
    },
    correct: {
      en: "Billable",
      fr: "Facturable",
    },
    distractors: [
      { en: "Invoicable", fr: "Facturable" },
      { en: "Accountable", fr: "Responsable" },
      { en: "Payable", fr: "Payable" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating tasks from sales orders): Billable",
      fr: "Source Odoo Learn (Création de tâches à partir de commandes clients) : Facturable",
    },
  }),
  complexQ({
    id: "prj-045",
    module: "project",
    text: {
      en: "A project and/or task is automatically created as soon as the corresponding Sales Order is: (Odoo Learn — Creating tasks from sales orders)",
      fr: "Un projet et/ou une tâche est automatiquement créé dès que la Commande client correspondante est : (Odoo Learn — Création de tâches à partir de commandes clients)",
    },
    correct: {
      en: "Confirmed",
      fr: "Confirmé",
    },
    distractors: [
      { en: "In draft", fr: "En brouillon" },
      { en: "Invoiced", fr: "Facturé" },
      { en: "Projects and tasks cannot be created from a Sales Order", fr: "Les projets et les tâches ne peuvent pas être créés à partir d'une commande client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating tasks from sales orders): Confirmed",
      fr: "Source Odoo Learn (Création de tâches à partir des commandes clients) : Confirmé",
    },
  }),
  complexQ({
    id: "prj-046",
    module: "project",
    text: {
      en: "How can you ensure that a new project with multiple tasks is automatically created once a service is sold? (Odoo Learn — Creating tasks from sales orders)",
      fr: "Comment pouvez-vous garantir qu'un nouveau projet comportant plusieurs tâches est automatiquement créé une fois qu'un service est vendu ? (Odoo Learn — Création de tâches à partir de commandes clients)",
    },
    correct: {
      en: "The service needs to have a Project Template with multiple tasks linked to it",
      fr: "Le service doit disposer d'un modèle de projet auquel sont liées plusieurs tâches.",
    },
    distractors: [
      { en: "The service needs to be configured to Create on Order: Project and Task", fr: "Le service doit être configuré pour Créer sur commande : projet et tâche" },
      { en: "The product needs to be configured as a service", fr: "Le produit doit être configuré en tant que service" },
      { en: "The service needs to be configured to Create on Order: Project", fr: "Le service doit être configuré pour Créer sur commande : Projet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating tasks from sales orders): The service needs to have a Project Template with multiple tasks linked to it",
      fr: "Source Odoo Learn (Création de tâches à partir de commandes clients) : Le service doit disposer d'un modèle de projet avec plusieurs tâches qui y sont liées.",
    },
  }),
  complexQ({
    id: "prj-047",
    module: "project",
    text: {
      en: "How can you see the status of subtasks on the Kanban card of the parent task? (Odoo Learn — Subtasks)",
      fr: "Comment voir le statut des sous-tâches sur la carte Kanban de la tâche parent ? (Odoo Learn — Sous-tâches)",
    },
    correct: {
      en: "Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3).",
      fr: "Les sous-tâches et leur état d'avancement sont indiqués sur la fiche de tâche au format x/x (par exemple 1/3).",
    },
    distractors: [
      { en: "Subtasks are indicated with the green check-mark symbol.", fr: "Les sous-tâches sont indiquées par le symbole d'une coche verte." },
      { en: "Click on three vertical dots on the task, then select Subtasks.", fr: "Cliquez sur trois points verticaux sur la tâche, puis sélectionnez Sous-tâches." },
      { en: "It’s not possible, you have to go into the task and then to the Subtasks tab.", fr: "Ce n'est pas possible, il faut aller dans la tâche puis dans l'onglet Sous-tâches." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subtasks): Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3).",
      fr: "Source Odoo Learn (Sous-tâches) : Les sous-tâches et leur statut d'achèvement sont indiqués sur la fiche de tâche au format x/x (par exemple 1/3).",
    },
  }),
  mcq3Q({
    id: "prj-048",
    module: "project",
    text: {
      en: "Is it possible to create subtasks inside of subtasks? (Odoo Learn — Subtasks)",
      fr: "Est-il possible de créer des sous-tâches à l’intérieur des sous-tâches ? (Odoo Learn — Sous-tâches)",
    },
    correct: {
      en: "Yes.",
      fr: "Oui.",
    },
    distractors: [
      { en: "No.", fr: "Non." },
      { en: "It's possible, but only for starred tasks.", fr: "C'est possible, mais uniquement pour les tâches étoilées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subtasks): Yes.",
      fr: "Source Odoo Learn (sous-tâches) : Oui.",
    },
  }),
  complexQ({
    id: "prj-049",
    module: "project",
    text: {
      en: "Task dependencies allow you to: (Odoo Learn — Task dependencies)",
      fr: "Les dépendances de tâches vous permettent de : (Odoo Learn — Dépendances des tâches)",
    },
    correct: {
      en: "Set priorities among project's tasks to ensure they are done in the order you want.",
      fr: "Définissez des priorités entre les tâches du projet pour vous assurer qu'elles sont effectuées dans l'ordre souhaité.",
    },
    distractors: [
      { en: "Set priorities among projects to ensure they are done in the order you want.", fr: "Établissez des priorités entre les projets pour vous assurer qu’ils sont réalisés dans l’ordre souhaité." },
      { en: "Prioritize the tasks that are late on schedule.", fr: "Donnez la priorité aux tâches qui sont en retard par rapport au calendrier." },
      { en: "Prioritize tasks whose milestones have not been reached yet.", fr: "Priorisez les tâches dont les jalons n’ont pas encore été atteints." },
    ],
    explanation: {
      en: "Source Odoo Learn (Task dependencies): Set priorities among project's tasks to ensure they are done in the order you want.",
      fr: "Source Odoo Learn (Dépendances des tâches) : définissez des priorités entre les tâches du projet pour vous assurer qu'elles sont effectuées dans l'ordre souhaité.",
    },
  }),
  mcq3Q({
    id: "prj-050",
    module: "project",
    text: {
      en: "How do you activate task dependencies on the global database level? (Odoo Learn — Task dependencies)",
      fr: "Comment activer les dépendances de tâches au niveau de la base de données globale ? (Odoo Learn — Dépendances des tâches)",
    },
    correct: {
      en: "Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies.",
      fr: "Accédez à Projet ‣ Configuration ‣ Paramètres et activez les dépendances des tâches.",
    },
    distractors: [
      { en: "Go to Project ‣ General Settings ‣ Tasks, and enable Task Dependencies", fr: "Accédez à Projet ‣ Paramètres généraux ‣ Tâches et activez les dépendances des tâches" },
      { en: "There is nothing to do, task dependencies are activated by default.", fr: "Il n'y a rien à faire, les dépendances des tâches sont activées par défaut." },
    ],
    explanation: {
      en: "Source Odoo Learn (Task dependencies): Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies.",
      fr: "Source Odoo Learn (Dépendances des tâches) : Allez dans Projet ‣ Configuration ‣ Paramètres et activez les dépendances des tâches.",
    },
  }),
  mcq3Q({
    id: "prj-051",
    module: "project",
    text: {
      en: "In addition to a task form, in what view can you set and manage task dependencies? (Odoo Learn — Task dependencies)",
      fr: "En plus d'un formulaire de tâches, dans quelle vue pouvez-vous définir et gérer les dépendances des tâches ? (Odoo Learn — Dépendances des tâches)",
    },
    correct: {
      en: "Gantt",
      fr: "Gantt",
    },
    distractors: [
      { en: "Kanban", fr: "Kanban" },
      { en: "List", fr: "Liste" },
    ],
    explanation: {
      en: "Source Odoo Learn (Task dependencies): Gantt",
      fr: "Source Odoo Learn (Dépendances des tâches) : Gantt",
    },
  }),
  complexQ({
    id: "prj-052",
    module: "project",
    text: {
      en: "Use the icons in the upper right corner of the screen to switch to the project’s Gantt view. How can you create task dependencies there? (Odoo Learn — Task dependencies)",
      fr: "Utilisez les icônes dans le coin supérieur droit de l’écran pour passer à la vue Gantt du projet. Comment pouvez-vous y créer des dépendances de tâches ? (Odoo Learn — Dépendances des tâches)",
    },
    correct: {
      en: "By hovering over a task, then using arrows to draw dependencies with another task.",
      fr: "En survolant une tâche, puis en utilisant les flèches pour dessiner des dépendances avec une autre tâche.",
    },
    distractors: [
      { en: "It’s not possible.", fr: "Ce n’est pas possible." },
      { en: "By dragging and dropping one task onto another.", fr: "En glissant-déposant une tâche sur une autre." },
      { en: "By stretching the task across multiple fields.", fr: "En étendant la tâche sur plusieurs domaines." },
    ],
    explanation: {
      en: "Source Odoo Learn (Task dependencies): By hovering over a task, then using arrows to draw dependencies with another task.",
      fr: "Source Odoo Learn (Dépendances des tâches) : En survolant une tâche, puis en utilisant les flèches pour dessiner les dépendances avec une autre tâche.",
    },
  }),
  complexQ({
    id: "prj-053",
    module: "project",
    text: {
      en: "How can you set a dependency from the task form? (Odoo Learn — Task dependencies)",
      fr: "Comment définir une dépendance à partir du formulaire de tâche ? (Odoo Learn — Dépendances des tâches)",
    },
    correct: {
      en: "Go into Blocked By ‣ Add a line, and select a task or create a new one.",
      fr: "Allez dans Bloqué par ‣ Ajouter une ligne et sélectionnez une tâche ou créez-en une nouvelle.",
    },
    distractors: [
      { en: "Go into Sub-tasks tab ‣ Add a line ‣ add a task.", fr: "Allez dans l'onglet Sous-tâches ‣ Ajouter une ligne ‣ ajouter une tâche." },
      { en: "Select three stars next to Priority to give this task the highest priority.", fr: "Sélectionnez trois étoiles à côté de Priorité pour donner à cette tâche la priorité la plus élevée." },
      { en: "Set a deadline earlier than the task you would like to block.", fr: "Fixez une date limite avant la tâche que vous souhaitez bloquer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Task dependencies): Go into Blocked By ‣ Add a line, and select a task or create a new one.",
      fr: "Source Odoo Learn (Dépendances des tâches) : Allez dans Bloqué par ‣ Ajouter une ligne, et sélectionnez une tâche ou créez-en une nouvelle.",
    },
  }),
  complexQ({
    id: "prj-054",
    module: "project",
    text: {
      en: "How can you tell that a task is blocked by another task when in Kanban view? (Odoo Learn — Task dependencies)",
      fr: "Comment savoir qu'une tâche est bloquée par une autre tâche lorsque vous êtes en vue Kanban ? (Odoo Learn — Dépendances des tâches)",
    },
    correct: {
      en: "By the blue hourglass icon and the corresponding color in the Kanban status bar.",
      fr: "Par l'icône du sablier bleu et la couleur correspondante dans la barre d'état Kanban.",
    },
    distractors: [
      { en: "The number of completed vs unfinished blocking tasks is indicated on the Kanban card in 1/3 format.", fr: "Le nombre de tâches de blocage terminées vs inachevées est indiqué sur la carte Kanban au format 1/3." },
      { en: "Blocked tasks are color-coded in red.", fr: "Les tâches bloquées sont codées en rouge." },
      { en: "Blocked tasks are not displayed in the Kanban view until the previous task in sequence is completed.", fr: "Les tâches bloquées ne sont pas affichées dans la vue Kanban tant que la tâche précédente de la séquence n'est pas terminée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Task dependencies): By the blue hourglass icon and the corresponding color in the Kanban status bar.",
      fr: "Source Odoo Learn (Dépendances des tâches) : Par l'icône en forme de sablier bleu et la couleur correspondante dans la barre d'état Kanban.",
    },
  }),
  mcq3Q({
    id: "prj-055",
    module: "project",
    text: {
      en: "What do you need to do to use the Recurring Tasks feature? (Odoo Learn — Recurring tasks)",
      fr: "Que devez-vous faire pour utiliser la fonctionnalité Tâches récurrentes ? (Odoo Learn — Tâches récurrentes)",
    },
    correct: {
      en: "You need to activate it in the settings of each project where you want to use it.",
      fr: "Vous devez l'activer dans les paramètres de chaque projet où vous souhaitez l'utiliser.",
    },
    distractors: [
      { en: "Nothing, it’s activated by default.", fr: "Rien, c'est activé par défaut." },
      { en: "You need to activate it by going into configuration, then settings of your Project app.", fr: "Vous devez l'activer en allant dans configuration, puis paramètres de votre application Project." },
    ],
    explanation: {
      en: "Source Odoo Learn (Recurring tasks): You need to activate it in the settings of each project where you want to use it.",
      fr: "Source Odoo Learn (Tâches récurrentes) : Vous devez l'activer dans les paramètres de chaque projet où vous souhaitez l'utiliser.",
    },
  }),
  mcq3Q({
    id: "prj-056",
    module: "project",
    text: {
      en: "How can you stop the recurrence of a task? (Odoo Learn — Recurring tasks)",
      fr: "Comment stopper la récurrence d’une tâche ? (Odoo Learn — Tâches récurrentes)",
    },
    correct: {
      en: "You need to deactivate the recurrence by clicking the recurrence button in the task.",
      fr: "Vous devez désactiver la récurrence en cliquant sur le bouton de récurrence dans la tâche.",
    },
    distractors: [
      { en: "You just need to cancel the task.", fr: "Il vous suffit d'annuler la tâche." },
      { en: "You can’t stop a recurrence after it is configured.", fr: "Vous ne pouvez pas arrêter une récurrence une fois qu'elle est configurée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Recurring tasks): You need to deactivate the recurrence by clicking the recurrence button in the task.",
      fr: "Source Odoo Learn (Tâches récurrentes) : Vous devez désactiver la récurrence en cliquant sur le bouton de récurrence dans la tâche.",
    },
  }),
  complexQ({
    id: "prj-057",
    module: "project",
    text: {
      en: "Visibility options … (Odoo Learn — Visibility and collaboration)",
      fr: "Options de visibilité… (Odoo Learn — Visibilité et collaboration)",
    },
    correct: {
      en: "Impact which part of your project an employee can edit and see",
      fr: "Impact sur la partie de votre projet qu'un employé peut modifier et voir",
    },
    distractors: [
      { en: "Impact which part of your project an employee can see", fr: "Impact sur la partie de votre projet qu'un employé peut voir" },
      { en: "Impact which part of your project an employee can edit", fr: "Impact sur la partie de votre projet qu'un employé peut modifier" },
      { en: "Make your secret crush notice you", fr: "Faites en sorte que votre béguin secret vous remarque" },
    ],
    explanation: {
      en: "Source Odoo Learn (Visibility and collaboration): Impact which part of your project an employee can edit and see",
      fr: "Source Odoo Learn (Visibilité et collaboration) : Impact sur la partie de votre projet qu'un employé peut modifier et voir",
    },
  }),
  mcq3Q({
    id: "prj-058",
    module: "project",
    text: {
      en: "What can invited portal users have access to? (Odoo Learn — Visibility and collaboration)",
      fr: "À quoi les utilisateurs invités du portail peuvent-ils avoir accès ? (Odoo Learn — Visibilité et collaboration)",
    },
    correct: {
      en: "Either of those options is possible",
      fr: "L'une ou l'autre de ces options est possible",
    },
    distractors: [
      { en: "Read-only version of the project", fr: "Version en lecture seule du projet" },
      { en: "Editable version of the project", fr: "Version modifiable du projet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Visibility and collaboration): Either of those options is possible",
      fr: "Source Odoo Learn (Visibilité et collaboration) : L'une ou l'autre de ces options est possible",
    },
  }),
  complexQ({
    id: "prj-059",
    module: "project",
    text: {
      en: "Where do you go to set up an automation? (Odoo Learn — Automations)",
      fr: "Où aller pour mettre en place un automatisme ? (Odoo Learn — Automatisations)",
    },
    correct: {
      en: "In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name",
      fr: "Dans la vue Kanban de votre projet, vous devez cliquer sur l'icône d'engrenage à côté du nom de l'étape Kanban.",
    },
    distractors: [
      { en: "In the settings of the Project application", fr: "Dans les paramètres de l'application Projet" },
      { en: "In your project’s settings", fr: "Dans les paramètres de votre projet" },
      { en: "In your project’s Kanban view, you have to click the automations button in the , top right corner", fr: "Dans la vue Kanban de votre projet, vous devez cliquer sur le bouton d'automatisation dans le coin supérieur droit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automations): In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name",
      fr: "Source Odoo Learn (Automations) : Dans la vue Kanban de votre projet, vous devez cliquer sur l'icône d'engrenage à côté du nom de l'étape Kanban",
    },
  }),
  complexQ({
    id: "prj-060",
    module: "project",
    text: {
      en: "What happens if you automate a call whenever a task reaches a specific stage? (Odoo Learn — Automations)",
      fr: "Que se passe-t-il si vous automatisez un appel chaque fois qu'une tâche atteint une étape spécifique ? (Odoo Learn — Automatisations)",
    },
    correct: {
      en: "It automatically schedules a Call activity in the task’s chatter",
      fr: "Il planifie automatiquement une activité d'appel dans le chat de la tâche",
    },
    distractors: [
      { en: "It automatically calls the person you selected", fr: "Il appelle automatiquement la personne que vous avez sélectionnée" },
      { en: "The person you selected’s phone automatically calls you", fr: "Le téléphone de la personne que vous avez sélectionnée vous appelle automatiquement" },
      { en: "AI will instantly call all followers of this task", fr: "L'IA appellera instantanément tous les adeptes de cette tâche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automations): It automatically schedules a Call activity in the task’s chatter",
      fr: "Source Odoo Learn (Automatisations) : Il planifie automatiquement une activité d'appel dans le chat de la tâche",
    },
  }),
  complexQ({
    id: "prj-061",
    module: "project",
    text: {
      en: "What’s considered a “trigger” in Automations? (Odoo Learn — Automations)",
      fr: "Qu'est-ce qui est considéré comme un « déclencheur » dans les automatisations ? (Odoo Learn — Automatisations)",
    },
    correct: {
      en: "The action that automatically launches another action",
      fr: "L'action qui lance automatiquement une autre action",
    },
    distractors: [
      { en: "The action that is automatically launched by another action", fr: "L'action qui est automatiquement lancée par une autre action" },
      { en: "The whole automated sequence of actions", fr: "L'ensemble de la séquence d'actions automatisée" },
      { en: "The gear icon you click to access Automations", fr: "L'icône d'engrenage sur laquelle vous cliquez pour accéder aux automatisations" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automations): The action that automatically launches another action",
      fr: "Source Odoo Learn (Automatisations) : L'action qui lance automatiquement une autre action",
    },
  }),
  complexQ({
    id: "prj-062",
    module: "project",
    text: {
      en: "How can you link a task to a milestone? (Odoo Learn — Milestones)",
      fr: "Comment lier une tâche à un jalon ? (Odoo Learn — Jalons)",
    },
    correct: {
      en: "Fill in the “Milestone” field on the task form.",
      fr: "Remplissez le champ « Jalon » sur le formulaire de tâche.",
    },
    distractors: [
      { en: "Drag and drop the task into the milestone’s column.", fr: "Faites glisser et déposez la tâche dans la colonne du jalon." },
      { en: "Schedule a “Reach milestone” activity from the task’s chatter.", fr: "Planifiez une activité « Atteindre le jalon » à partir du chat de la tâche." },
      { en: "You link projects to milestones, not tasks.", fr: "Vous liez les projets à des jalons, pas à des tâches." },
    ],
    explanation: {
      en: "Source Odoo Learn (Milestones): Fill in the “Milestone” field on the task form.",
      fr: "Source Odoo Learn (Jalons) : Remplissez le champ « Jalon » sur le formulaire de tâche.",
    },
  }),
  complexQ({
    id: "prj-063",
    module: "project",
    text: {
      en: "What happens in your project's dashboard once all tasks linked to a milestone have been completed (marked as “Done” or “Canceled”)? (Odoo Learn — Milestones)",
      fr: "Que se passe-t-il dans le tableau de bord de votre projet une fois que toutes les tâches liées à un jalon sont terminées (marquées comme « Terminé » ou « Annulé ») ? (Odoo Learn — Jalons)",
    },
    correct: {
      en: "Milestone is listed in green to signal that it may be marked as reached.",
      fr: "Le jalon est répertorié en vert pour signaler qu’il peut être marqué comme atteint.",
    },
    distractors: [
      { en: "Milestone is automatically marked as reached.", fr: "Le jalon est automatiquement marqué comme atteint." },
      { en: "If invoicing by milestones is enabled, you can invoice the customer.", fr: "Si la facturation par étapes est activée, vous pouvez facturer le client." },
      { en: "The following milestone needs to be created.", fr: "Le jalon suivant doit être créé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Milestones): Milestone is listed in green to signal that it may be marked as reached.",
      fr: "Source Odoo Learn (Jalons) : Le jalon est répertorié en vert pour signaler qu'il peut être marqué comme atteint.",
    },
  }),
  mcq3Q({
    id: "prj-065",
    module: "project",
    text: {
      en: "What do you need to do in order to invoice a client by milestones? (Odoo Learn — Milestones)",
      fr: "Que devez-vous faire pour facturer un client par étapes ? (Odoo Learn — Jalons)",
    },
    correct: {
      en: "Create a sales order for a service with the invoicing policy set to “Based on Milestones,” then mark the milestones in the corresponding project as reached.",
      fr: "Créez une commande client pour un service avec la politique de facturation définie sur « Basée sur les jalons », puis marquez les jalons du projet correspondant comme atteints.",
    },
    distractors: [
      { en: "Create a sales order for a service with the invoicing policy set to “Based on Delivered Quantity,” then manually update the delivered quantity after a milestone has been reached.", fr: "Créez une commande client pour un service avec la politique de facturation définie sur « Basée sur la quantité livrée », puis mettez à jour manuellement la quantité livrée une fois qu'un jalon a été atteint." },
      { en: "Create a sales order for a service with the invoicing policy set to “Based on Delivered Quantity,” then use the smart button to link project milestones to the sales order.", fr: "Créez une commande client pour un service avec la politique de facturation définie sur « Basée sur la quantité livrée », puis utilisez le bouton intelligent pour lier les étapes du projet à la commande client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Milestones): Create a sales order for a service with the invoicing policy set to “Based on Milestones,” then mark the milestones in the corresponding project as reached.",
      fr: "Source Odoo Learn (Jalons) : créez une commande client pour un service avec la politique de facturation définie sur « Basée sur les jalons », puis marquez les jalons du projet correspondant comme atteints.",
    },
  }),
  complexQ({
    id: "prj-066",
    module: "project",
    text: {
      en: "You invoice a client based on a fixed price for a 20-hour service pack, but you only spend 16 hours working on the task. What do you do? (Odoo Learn — Invoicing project tasks)",
      fr: "Vous facturez un client sur la base d'un prix fixe pour un pack de services de 20 heures, mais vous ne consacrez que 16 heures à travailler sur la tâche. Que fais-tu? (Odoo Learn — Facturation des tâches du projet)",
    },
    correct: {
      en: "Nothing, the fixed price is not impacted by the time spent on the task.",
      fr: "Rien, le forfait n'est pas impacté par le temps passé sur la tâche.",
    },
    distractors: [
      { en: "Issue a credit note for the remaining 4 hours.", fr: "Émettez un avoir pour les 4 heures restantes." },
      { en: "Update the sales order line to 16 hours.", fr: "Mettez à jour la ligne de commande client à 16 heures." },
      { en: "Update the delivered quantity to 16 hours.", fr: "Mettez à jour la quantité livrée à 16 heures." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing project tasks): Nothing, the fixed price is not impacted by the time spent on the task.",
      fr: "Source Odoo Learn (Facturation des tâches du projet) : Rien, le forfait n'est pas impacté par le temps passé sur la tâche.",
    },
  }),
  mcq3Q({
    id: "prj-067",
    module: "project",
    text: {
      en: "You invoice a client based on timesheets. You worked for 10 hours, and of that, 7 hours of timesheets are validated. Can you invoice the client already? (Odoo Learn — Invoicing project tasks)",
      fr: "Vous facturez un client sur la base de feuilles de temps. Vous avez travaillé 10 heures, et parmi celles-ci, 7 heures de feuilles de temps sont validées. Pouvez-vous déjà facturer le client ? (Odoo Learn — Facturation des tâches du projet)",
    },
    correct: {
      en: "It depends on your DB configuration.",
      fr: "Cela dépend de la configuration de votre base de données.",
    },
    distractors: [
      { en: "No, you must validate all 10 hours of timesheets before invoicing.", fr: "Non, vous devez valider les 10 heures de feuilles de temps avant de facturer." },
      { en: "Yes, you can invoice 10 hours even if the timesheets are not validated.", fr: "Oui, vous pouvez facturer 10 heures même si les feuilles de temps ne sont pas validées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing project tasks): It depends on your DB configuration.",
      fr: "Source Odoo Learn (Tâches du projet de facturation) : Cela dépend de la configuration de votre base de données.",
    },
  }),
  mcq3Q({
    id: "prj-068",
    module: "project",
    text: {
      en: "What does it mean when a sales order line turns blue? (Odoo Learn — Invoicing project tasks)",
      fr: "Qu'est-ce que cela signifie lorsqu'une ligne de commande client devient bleue ? (Odoo Learn — Facturation des tâches du projet)",
    },
    correct: {
      en: "It means that the sales order line is ready to be invoiced.",
      fr: "Cela signifie que la ligne de commande client est prête à être facturée.",
    },
    distractors: [
      { en: "It means that there are missing hours to invoice.", fr: "Cela signifie qu'il manque des heures à facturer." },
      { en: "It means that all the timesheets linked to the line have been validated.", fr: "Cela signifie que toutes les feuilles de temps liées à la ligne ont été validées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing project tasks): It means that the sales order line is ready to be invoiced.",
      fr: "Source Odoo Learn (Tâches du projet Facturation) : Cela signifie que la ligne de commande client est prête à être facturée.",
    },
  }),
  mcq3Q({
    id: "prj-069",
    module: "project",
    text: {
      en: "Is it possible to access the Project Dashboard using the project’s top bar? (Odoo Learn — Project dashbord)",
      fr: "Est-il possible d'accéder au tableau de bord du projet en utilisant la barre supérieure du projet ? (Odoo Learn — Tableau de bord du projet)",
    },
    correct: {
      en: "Yes, you can add it to the top bar, like other record types.",
      fr: "Oui, vous pouvez l'ajouter à la barre supérieure, comme les autres types d'enregistrements.",
    },
    distractors: [
      { en: "Yes, if you have the Dashboard app installed.", fr: "Oui, si l'application Dashboard est installée." },
      { en: "No, you need to go through the project’s settings.", fr: "Non, vous devez passer par les paramètres du projet." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project dashbord): Yes, you can add it to the top bar, like other record types.",
      fr: "Source Odoo Learn (tableau de bord du projet) : Oui, vous pouvez l'ajouter à la barre supérieure, comme les autres types d'enregistrements.",
    },
  }),
  mcq3Q({
    id: "prj-070",
    module: "project",
    text: {
      en: "It’s possible to mark milestones as reached directly from the project dashboard. (Odoo Learn — Project dashbord)",
      fr: "Il est possible de marquer les jalons comme atteints directement à partir du tableau de bord du projet. (Odoo Learn — Tableau de bord du projet)",
    },
    correct: {
      en: "Yes, you simply check the milestone to mark it as reached.",
      fr: "Oui, il vous suffit de cocher le jalon pour le marquer comme atteint.",
    },
    distractors: [
      { en: "Yes, but only non-billable milestones.", fr: "Oui, mais uniquement les jalons non facturables." },
      { en: "It’s not possible.", fr: "Ce n’est pas possible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project dashbord): Yes, you simply check the milestone to mark it as reached.",
      fr: "Source Odoo Learn (Tableau de bord du projet) : Oui, vous cochez simplement le jalon pour le marquer comme atteint.",
    },
  }),
  mcq3Q({
    id: "prj-071",
    module: "project",
    text: {
      en: "What records are displayed in the project dashboard's totals? (Odoo Learn — Project dashbord)",
      fr: "Quels enregistrements sont affichés dans les totaux du tableau de bord du projet ? (Odoo Learn — Tableau de bord du projet)",
    },
    correct: {
      en: "It depends on your database and project configuration.",
      fr: "Cela dépend de votre base de données et de la configuration de votre projet.",
    },
    distractors: [
      { en: "Tasks, Timesheets, Planned, Documents, Sales Order Items, Burndown Chart, Vendor Bills.", fr: "Tâches, feuilles de temps, planifiées, documents, articles de commande client, diagramme d'avancement, factures des fournisseurs." },
      { en: "Tasks, Timesheets, Documents, Sales Order Items, Burndown Chart, Vendor Bills, Manufacturing Orders.", fr: "Tâches, feuilles de temps, documents, articles de commande client, diagramme d'avancement, factures des fournisseurs, ordres de fabrication." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project dashbord): It depends on your database and project configuration.",
      fr: "Source Odoo Learn (tableau de bord du projet) : cela dépend de votre base de données et de la configuration de votre projet.",
    },
  }),
  complexQ({
    id: "prj-072",
    module: "project",
    text: {
      en: "What’s the best way to capture the data from the project dashboard for future reference? (Odoo Learn — Project dashbord)",
      fr: "Quelle est la meilleure façon de capturer les données du tableau de bord du projet pour référence future ? (Odoo Learn — Tableau de bord du projet)",
    },
    correct: {
      en: "Clicking \"New\" to crate a new project update automatically captures data from the project dashboard at this point in time.",
      fr: "En cliquant sur « Nouveau » pour créer une nouvelle mise à jour de projet, vous capturez automatiquement les données du tableau de bord du projet à ce stade.",
    },
    distractors: [
      { en: "Create a new project update, then add a Snapshot tab.", fr: "Créez une nouvelle mise à jour du projet, puis ajoutez un onglet Instantané." },
      { en: "Add the project dashboard to your Dashboard app.", fr: "Ajoutez le tableau de bord du projet à votre application Dashboard." },
      { en: "Adding a custom view of the project’s dashboard to the project’s top bar automatically captures data from the project dashboard at this point in time.", fr: "L'ajout d'une vue personnalisée du tableau de bord du projet à la barre supérieure du projet capture automatiquement les données du tableau de bord du projet à ce stade." },
    ],
    explanation: {
      en: "Source Odoo Learn (Project dashbord): Clicking \"New\" to crate a new project update automatically captures data from the project dashboard at this point in time.",
      fr: "Source Odoo Learn (tableau de bord du projet) : cliquer sur « Nouveau » pour créer une nouvelle mise à jour du projet capture automatiquement les données du tableau de bord du projet à ce stade.",
    },
  }),
  mcq3Q({
    id: "prj-073",
    module: "project",
    text: {
      en: "What’s the relationship between the project’s top bar and the profitability dashboard? (Odoo Learn — Measuring project's profitability)",
      fr: "Quelle est la relation entre la barre supérieure du projet et le tableau de bord de rentabilité ? (Odoo Learn — Mesurer la rentabilité du projet)",
    },
    correct: {
      en: "Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard.",
      fr: "Les enregistrements créés à l'aide de la barre supérieure sont automatiquement liés au compte analytique du projet et donc affichés sur le tableau de bord.",
    },
    distractors: [
      { en: "Records created using the top bar are excluded from the profitability dashboard.", fr: "Les enregistrements créés à l'aide de la barre supérieure sont exclus du tableau de bord de rentabilité." },
      { en: "Records created using the top bar take into account the employee’s hourly cost.", fr: "Les enregistrements créés à l’aide de la barre supérieure prennent en compte le coût horaire du salarié." },
    ],
    explanation: {
      en: "Source Odoo Learn (Measuring project's profitability): Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard.",
      fr: "Source Odoo Learn (Mesurer la rentabilité du projet) : Les enregistrements créés à l'aide de la barre supérieure sont automatiquement liés au compte analytique du projet et donc affichés sur le tableau de bord.",
    },
  }),
  mcq3Q({
    id: "prj-074",
    module: "project",
    text: {
      en: "Where is the employee’s hourly cost specified? (Odoo Learn — Measuring project's profitability)",
      fr: "Où est précisé le coût horaire du salarié ? (Odoo Learn — Mesurer la rentabilité du projet)",
    },
    correct: {
      en: "In the Settings tab of the employee form.",
      fr: "Dans l'onglet Paramètres du formulaire employé.",
    },
    distractors: [
      { en: "In the Work Information tab of the employee form.", fr: "Dans l'onglet Informations sur le travail du formulaire de l'employé." },
      { en: "In the Timesheets app configuration.", fr: "Dans la configuration de l'application Feuilles de temps." },
    ],
    explanation: {
      en: "Source Odoo Learn (Measuring project's profitability): In the Settings tab of the employee form.",
      fr: "Source Odoo Learn (Mesurer la rentabilité du projet) : Dans l'onglet Paramètres du formulaire employé.",
    },
  }),
  mcq3Q({
    id: "prj-075",
    module: "project",
    text: {
      en: "Down payments are displayed in the costs section of the dashboard. (Odoo Learn — Measuring project's profitability)",
      fr: "Les acomptes sont affichés dans la section coûts du tableau de bord. (Odoo Learn — Mesurer la rentabilité du projet)",
    },
    correct: {
      en: "Incorrect.",
      fr: "Incorrect.",
    },
    distractors: [
      { en: "Correct.", fr: "Correct." },
      { en: "Down payments are displayed in the invoicing dashboard, not profitability.", fr: "Les acomptes sont affichés dans le tableau de bord de facturation, pas la rentabilité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Measuring project's profitability): Incorrect.",
      fr: "Source Odoo Learn (Mesure de la rentabilité du projet) : Incorrect.",
    },
  }),
  complexQ({
    id: "prj-076",
    module: "project",
    text: {
      en: "What do you need to do in the first place to use customer ratings? (Odoo Learn — Customer ratings)",
      fr: "Que devez-vous faire en premier lieu pour utiliser les évaluations des clients ? (Odoo Learn — Évaluations des clients)",
    },
    correct: {
      en: "You have to enable it: Project > Configuration > Settings > Customer Ratings",
      fr: "Vous devez l'activer : Projet > Configuration > Paramètres > Évaluations des clients",
    },
    distractors: [
      { en: "Nothing, it’s enabled by default", fr: "Rien, c'est activé par défaut" },
      { en: "You have to enable it: General Settings > Customer Ratings", fr: "Vous devez l'activer : Paramètres généraux > Évaluations des clients" },
      { en: "You have to enable it: CRM > Configuration > Settings > Customer Ratings", fr: "Vous devez l'activer : CRM > Configuration > Paramètres > Évaluations clients" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer ratings): You have to enable it: Project > Configuration > Settings > Customer Ratings",
      fr: "Source Odoo Learn (Évaluations clients) : Vous devez l'activer : Projet > Configuration > Paramètres > Évaluations clients",
    },
  }),
  complexQ({
    id: "prj-077",
    module: "project",
    text: {
      en: "What is the action that automatically sends the customer rating email? (Odoo Learn — Customer ratings)",
      fr: "Quelle est l'action qui envoie automatiquement l'e-mail d'évaluation du client ? (Odoo Learn — Évaluations des clients)",
    },
    correct: {
      en: "When a task moves to the stage you selected",
      fr: "Lorsqu'une tâche passe à l'étape que vous avez sélectionnée",
    },
    distractors: [
      { en: "When a task moves to the status you selected", fr: "Lorsqu'une tâche passe au statut que vous avez sélectionné" },
      { en: "When a task moves to the Finished stage", fr: "Lorsqu'une tâche passe à l'étape Terminé" },
      { en: "When a task moves to the Done status", fr: "Lorsqu'une tâche passe au statut Terminé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer ratings): When a task moves to the stage you selected",
      fr: "Source Odoo Learn (évaluations des clients) : lorsqu'une tâche passe à l'étape que vous avez sélectionnée",
    },
  }),
  mcq3Q({
    id: "prj-078",
    module: "project",
    text: {
      en: "On the projects' kanban view, what’s the meaning of the numbers displayed next to a smiley? (Odoo Learn — Customer ratings)",
      fr: "Sur la vue kanban des projets, quelle est la signification des chiffres affichés à côté d'un smiley ? (Odoo Learn — Évaluations des clients)",
    },
    correct: {
      en: "It’s the average satisfaction rate based on completed client surveys",
      fr: "Il s'agit du taux de satisfaction moyen basé sur les enquêtes clients complétées.",
    },
    distractors: [
      { en: "The number on the left shows the number of surveys sent, and the one on the right shows the number of surveys completed over the last period", fr: "Le chiffre de gauche indique le nombre d'enquêtes envoyées, et celui de droite indique le nombre d'enquêtes complétées au cours de la dernière période." },
      { en: "The number on the left shows the number of surveys completed, and the one on the right shows the number of surveys sent over the last period", fr: "Le chiffre de gauche indique le nombre d'enquêtes complétées, et celui de droite indique le nombre d'enquêtes envoyées au cours de la dernière période." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer ratings): It’s the average satisfaction rate based on completed client surveys",
      fr: "Source Odoo Learn (Évaluations clients) : C'est le taux de satisfaction moyen basé sur les enquêtes clients complétées",
    },
  }),
];
