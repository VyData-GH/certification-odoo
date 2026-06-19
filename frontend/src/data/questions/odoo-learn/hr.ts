import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const hrLearnQuestions = [
  complexQ({
    id: "hr-024",
    module: "hr",
    text: {
      en: "What does a green dot on an employee card indicate? (Odoo Learn — Employees Basics)",
      fr: "Qu'indique un point vert sur une carte d'employé ? (Odoo Learn — Bases des employés)",
    },
    correct: {
      en: "They are signed in and actively working in the database",
      fr: "Ils sont connectés et travaillent activement dans la base de données",
    },
    distractors: [
      { en: "They are signed into the database and working remotely", fr: "Ils sont connectés à la base de données et travaillent à distance" },
      { en: "They are idle in the database", fr: "Ils sont inactifs dans la base de données" },
      { en: "They are on vacation", fr: "Ils sont en vacances" },
    ],
    explanation: {
      en: "Source Odoo Learn (Employees Basics): They are signed in and actively working in the database",
      fr: "Source Odoo Learn (Bases des employés) : Ils sont connectés et travaillent activement dans la base de données",
    },
  }),
  complexQ({
    id: "hr-025",
    module: "hr",
    text: {
      en: "What field(s) are required when creating a new employee? (Odoo Learn — Employees Basics)",
      fr: "Quel(s) champ(s) sont obligatoires lors de la création d'un nouvel employé ? (Odoo Learn — Bases des employés)",
    },
    correct: {
      en: "Their name",
      fr: "Leur nom",
    },
    distractors: [
      { en: "Their email", fr: "Leur email" },
      { en: "Their name and job description", fr: "Leur nom et leur description de poste" },
      { en: "Their name and email", fr: "Leur nom et email" },
    ],
    explanation: {
      en: "Source Odoo Learn (Employees Basics): Their name",
      fr: "Source Odoo Learn (Bases des Employés) : Leur nom",
    },
  }),
  complexQ({
    id: "hr-026",
    module: "hr",
    text: {
      en: "Where are work locations added? (Odoo Learn — Employees Basics)",
      fr: "Où les lieux de travail sont-ils ajoutés ? (Odoo Learn — Bases des employés)",
    },
    correct: {
      en: "Navigate to Configuration > Employee: Work Locations",
      fr: "Accédez à Configuration > Employé : Lieux de travail",
    },
    distractors: [
      { en: "Navigate to Configuration > Settings", fr: "Accédez à Configuration > Paramètres" },
      { en: "Navigate to the Settings tab of the Employee form", fr: "Accédez à l'onglet Paramètres du formulaire Employé." },
      { en: "Navigate to the Location section of the Work Information tab of the Employee form", fr: "Accédez à la section Emplacement de l'onglet Informations sur le travail du formulaire Employé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Employees Basics): Navigate to Configuration > Employee: Work Locations",
      fr: "Source Odoo Learn (Bases des employés) : accédez à Configuration > Employé : Lieux de travail",
    },
  }),
  complexQ({
    id: "hr-027",
    module: "hr",
    text: {
      en: "What does a gray presence icon indicate? (Odoo Learn — Presence Control)",
      fr: "Qu'indique une icône de présence grise ? (Odoo Learn — Contrôle de présence)",
    },
    correct: {
      en: "It is outside of the employee’s working hours",
      fr: "C’est en dehors des heures de travail du salarié",
    },
    distractors: [
      { en: "The employee is idle in the system", fr: "L'employé est inactif dans le système" },
      { en: "The employee is on a schedule break, and did not log out of the system", fr: "L'employé est en pause et ne s'est pas déconnecté du système." },
      { en: "The employee forgot to log in to work that day", fr: "L'employé a oublié de se connecter au travail ce jour-là" },
    ],
    explanation: {
      en: "Source Odoo Learn (Presence Control): It is outside of the employee’s working hours",
      fr: "Source Odoo Learn (Contrôle de Présence) : C’est en dehors des heures de travail du salarié",
    },
  }),
  complexQ({
    id: "hr-028",
    module: "hr",
    text: {
      en: "What do I need to configure so a ‘house’ icon can appear on an employee’s card? (Odoo Learn — Presence Control)",
      fr: "Que dois-je configurer pour qu’une icône « maison » apparaisse sur la carte d’un employé ? (Odoo Learn — Contrôle de présence)",
    },
    correct: {
      en: "Activate the ‘Remote Work’ feature in the settings",
      fr: "Activez la fonctionnalité « Travail à distance » dans les paramètres",
    },
    distractors: [
      { en: "It is not possible to have a ‘house’ icon appear, only an ‘office’ or ‘airplane’ icon", fr: "Il n'est pas possible de faire apparaître une icône « maison », seulement une icône « bureau » ou « avion »." },
      { en: "Activate the ‘Advanced Presence Control’ feature in the settings", fr: "Activez la fonction « Contrôle de présence avancé » dans les paramètres" },
      { en: "Activate the ‘Based on IP Address’ feature in the settings", fr: "Activez la fonctionnalité « Basé sur l'adresse IP » dans les paramètres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Presence Control): Activate the ‘Remote Work’ feature in the settings",
      fr: "Source Odoo Learn (Contrôle de présence) : Activez la fonctionnalité « Travail à distance » dans les paramètres",
    },
  }),
  complexQ({
    id: "hr-029",
    module: "hr",
    text: {
      en: "What must be done first to adjust an employee’s presence (i.e. change them from ‘Absent’ to ‘Present’)? (Odoo Learn — Presence Control)",
      fr: "Que faut-il faire en premier pour ajuster la présence d’un employé (c’est-à-dire le faire passer de « Absent » à « Présent ») ? (Odoo Learn — Contrôle de présence)",
    },
    correct: {
      en: "Viewing the employees in the List view",
      fr: "Affichage des employés dans la vue Liste",
    },
    distractors: [
      { en: "Viewing the employees in the Kanban view", fr: "Visualiser les employés dans la vue Kanban" },
      { en: "Viewing the employees in the Hierarchy view", fr: "Affichage des employés dans la vue Hiérarchie" },
      { en: "Viewing the employees in the Pivot view", fr: "Affichage des employés dans la vue Pivot" },
    ],
    explanation: {
      en: "Source Odoo Learn (Presence Control): Viewing the employees in the List view",
      fr: "Source Odoo Learn (Contrôle de présence) : Visualisation des employés dans la vue Liste",
    },
  }),
  complexQ({
    id: "hr-030",
    module: "hr",
    text: {
      en: "What is a “child department”? (Odoo Learn — Departments)",
      fr: "Qu’est-ce qu’un « département enfant » ? (Odoo Learn — Départements)",
    },
    correct: {
      en: "A department nested within another department",
      fr: "Un département imbriqué dans un autre département",
    },
    distractors: [
      { en: "A department that has no sub-departments", fr: "Un département qui n'a pas de sous-départements" },
      { en: "A department with less than five employees", fr: "Un département de moins de cinq salariés" },
      { en: "A department whose employees work in a different building than the parent department", fr: "Un service dont les employés travaillent dans un bâtiment différent de celui du service parent" },
    ],
    explanation: {
      en: "Source Odoo Learn (Departments): A department nested within another department",
      fr: "Source Odoo Learn (Départements) : Un département imbriqué dans un autre département",
    },
  }),
  complexQ({
    id: "hr-031",
    module: "hr",
    text: {
      en: "What field is *not* on a Department form? (Odoo Learn — Departments)",
      fr: "Quel champ ne figure *pas* sur un formulaire de service ? (Odoo Learn — Départements)",
    },
    correct: {
      en: "Interview Form",
      fr: "Formulaire d'entretien",
    },
    distractors: [
      { en: "Manager", fr: "Directeur" },
      { en: "Appraisal Template", fr: "Modèle d'évaluation" },
      { en: "Color", fr: "Couleur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Departments): Interview Form",
      fr: "Source Odoo Learn (Départements) : Formulaire d'entretien",
    },
  }),
  complexQ({
    id: "hr-032",
    module: "hr",
    text: {
      en: "What information is required to create a department? (Odoo Learn — Departments)",
      fr: "Quelles informations sont nécessaires pour créer un département ? (Odoo Learn — Départements)",
    },
    correct: {
      en: "Only the department name",
      fr: "Uniquement le nom du département",
    },
    distractors: [
      { en: "The department name and the parent department", fr: "Le nom du département et le département parent" },
      { en: "The department name and the color", fr: "Le nom du département et la couleur" },
      { en: "The department name, Manager, and Parent Department", fr: "Le nom du département, le responsable et le département parent" },
    ],
    explanation: {
      en: "Source Odoo Learn (Departments): Only the department name",
      fr: "Source Odoo Learn (Départements) : Uniquement le nom du département",
    },
  }),
  complexQ({
    id: "hr-033",
    module: "hr",
    text: {
      en: "When creating a new employee from the Recruitment app, what information is *NOT* imported from the job position? (Odoo Learn — Add an Employee)",
      fr: "Lors de la création d'un nouvel employé à partir de l'application Recrutement, quelles informations ne sont *PAS* importées du poste ? (Odoo Learn — Ajouter un employé)",
    },
    correct: {
      en: "The related user",
      fr: "L'utilisateur associé",
    },
    distractors: [
      { en: "The department", fr: "Le département" },
      { en: "The job position", fr: "Le poste" },
      { en: "The manager", fr: "Le gérant" },
    ],
    explanation: {
      en: "Source Odoo Learn (Add an Employee): The related user",
      fr: "Source Odoo Learn (Ajouter un employé) : L'utilisateur associé",
    },
  }),
  complexQ({
    id: "hr-034",
    module: "hr",
    text: {
      en: "What determines the date automatically populated in the ‘Next Appraisal Date’ field? (Odoo Learn — Add an Employee)",
      fr: "Qu'est-ce qui détermine la date automatiquement renseignée dans le champ « Date de la prochaine évaluation » ? (Odoo Learn — Ajouter un employé)",
    },
    correct: {
      en: "The hiring date and the appraisal schedule configured in the ‘Appraisals’ app",
      fr: "La date d'embauche et le calendrier d'évaluation paramétré dans l'application « Évaluations »",
    },
    distractors: [
      { en: "This field is not automatically populated when creating an employee", fr: "Ce champ n'est pas automatiquement renseigné lors de la création d'un salarié" },
      { en: "The appraisals schedule in the ‘Appraisals’ app only", fr: "Le planning des expertises dans l'application « Évaluations » uniquement" },
      { en: "The hiring date only", fr: "La date d'embauche uniquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Add an Employee): The hiring date and the appraisal schedule configured in the ‘Appraisals’ app",
      fr: "Source Odoo Learn (Ajouter un employé) : La date d'embauche et le calendrier d'évaluation configurés dans l'application « Évaluations »",
    },
  }),
  complexQ({
    id: "hr-035",
    module: "hr",
    text: {
      en: "What determines the information presented in the ‘Payroll’ tab? (Odoo Learn — Add an Employee)",
      fr: "Qu’est-ce qui détermine les informations présentées dans l’onglet « Paie » ? (Odoo Learn — Ajouter un employé)",
    },
    correct: {
      en: "The localization of the database",
      fr: "La localisation de la base de données",
    },
    distractors: [
      { en: "The working schedule of the employee", fr: "L'horaire de travail du salarié" },
      { en: "The private address of the employee", fr: "L'adresse privée du salarié" },
      { en: "The information in the ‘Payroll’ tab is the same for all Odoo databases", fr: "Les informations de l'onglet « Paie » sont les mêmes pour toutes les bases de données Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Add an Employee): The localization of the database",
      fr: "Source Odoo Learn (Ajouter un employé) : La localisation de la base de données",
    },
  }),
  complexQ({
    id: "hr-036",
    module: "hr",
    text: {
      en: "When creating an onboarding activity, how can I automatically assign a particular user to the activity? (Odoo Learn — Onboarding)",
      fr: "Lors de la création d’une activité d’intégration, comment puis-je attribuer automatiquement un utilisateur particulier à l’activité ? (Odoo Learn — Intégration)",
    },
    correct: {
      en: "Set the ‘Assigned To’ field to ‘Default User’",
      fr: "Définissez le champ « Attribué à » sur « Utilisateur par défaut »",
    },
    distractors: [
      { en: "Set the ‘Assigned To’ field to ‘Manager’", fr: "Définissez le champ « Attribué à » sur « Manager »" },
      { en: "Set the ‘Assigned To’ field to ‘Employee’", fr: "Définissez le champ « Attribué à » sur « Employé »" },
      { en: "Set the ‘Assigned To’ field to ‘Ask at launch’", fr: "Définissez le champ « Attribué à » sur « Demander au lancement »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Onboarding): Set the ‘Assigned To’ field to ‘Default User’",
      fr: "Source Odoo Learn (intégration) : définissez le champ « Attribué à » sur « Utilisateur par défaut »",
    },
  }),
  complexQ({
    id: "hr-037",
    module: "hr",
    text: {
      en: "How do I configure an onboarding plan for a specific department? (Odoo Learn — Onboarding)",
      fr: "Comment configurer un plan d'intégration pour un service spécifique ? (Odoo Learn — Intégration)",
    },
    correct: {
      en: "Select the specific child department in the ‘Department’ field",
      fr: "Sélectionnez le département enfant spécifique dans le champ « Département »",
    },
    distractors: [
      { en: "It is not possible to make plans department-specific", fr: "Il n'est pas possible de faire des plans spécifiques à un département" },
      { en: "Select the parent department in the ‘Department’ field", fr: "Sélectionnez le département parent dans le champ « Département »" },
      { en: "Select the top-level department for the ’department’ field", fr: "Sélectionnez le département de niveau supérieur pour le champ « département »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Onboarding): Select the specific child department in the ‘Department’ field",
      fr: "Source Odoo Learn (Onboarding) : Sélectionnez le département enfant spécifique dans le champ « Département »",
    },
  }),
  complexQ({
    id: "hr-038",
    module: "hr",
    text: {
      en: "How do I launch an onboarding plan for an employee? (Odoo Learn — Onboarding)",
      fr: "Comment lancer un plan d'intégration pour un collaborateur ? (Odoo Learn — Intégration)",
    },
    correct: {
      en: "Click the ’Launch Plan’ button on the employee record",
      fr: "Cliquez sur le bouton « Lancer le plan » sur la fiche de l'employé.",
    },
    distractors: [
      { en: "Click the ‘Activities’ button in the chatter on the employee record", fr: "Cliquez sur le bouton « Activités » dans le chat sur le dossier de l'employé." },
      { en: "Click the ‘Planning’ smart button on the employee record", fr: "Cliquez sur le bouton intelligent « Planification » sur le dossier de l'employé." },
      { en: "Click the ‘Launch Plan’ button on the activity plan dashboard, on the desired onboarding plan", fr: "Cliquez sur le bouton « Lancer le plan » sur le tableau de bord du plan d'activité, sur le plan d'intégration souhaité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Onboarding): Click the ’Launch Plan’ button on the employee record",
      fr: "Source Odoo Learn (Onboarding) : Cliquez sur le bouton « Lancer le plan » sur la fiche de l'employé",
    },
  }),
  complexQ({
    id: "hr-039",
    module: "hr",
    text: {
      en: "Where do I go to add a certification to the database? (Odoo Learn — Certifications)",
      fr: "Où puis-je ajouter une certification à la base de données ? (Odoo Learn — Certifications)",
    },
    correct: {
      en: "Employees app > Configuration > Skill Types",
      fr: "Application Employés > Configuration > Types de compétences",
    },
    distractors: [
      { en: "Employees app > Configuration > Certifications", fr: "Application Employés > Configuration > Certifications" },
      { en: "Employees app > Settings > Skills >Certifications", fr: "Application Employés > Paramètres > Compétences > Certifications" },
      { en: "Employees app > Settings > Resume > Certifications", fr: "Application Employés > Paramètres > CV > Certifications" },
    ],
    explanation: {
      en: "Source Odoo Learn (Certifications): Employees app > Configuration > Skill Types",
      fr: "Source Odoo Learn (Certifications) : Application Employés > Configuration > Types de compétences",
    },
  }),
  complexQ({
    id: "hr-040",
    module: "hr",
    text: {
      en: "How do I configure a skill as a certification? (Odoo Learn — Certifications)",
      fr: "Comment configurer une compétence comme certification ? (Odoo Learn — Certifications)",
    },
    correct: {
      en: "Activate the ‘Certification’ toggle on the Skill Type form",
      fr: "Activez le bouton « Certification » sur le formulaire Type de compétence",
    },
    distractors: [
      { en: "Add the certification from the Certification dashboard", fr: "Ajouter la certification depuis le tableau de bord Certification" },
      { en: "Add the external link to the training course on the certification form", fr: "Ajouter le lien externe vers la formation sur le formulaire de certification" },
      { en: "On the certification form, click ‘add to certifications’", fr: "Sur le formulaire de certification, cliquez sur « ajouter aux certifications »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Certifications): Activate the ‘Certification’ toggle on the Skill Type form",
      fr: "Source Odoo Learn (Certifications) : activez le bouton « Certification » sur le formulaire Type de compétence",
    },
  }),
  complexQ({
    id: "hr-041",
    module: "hr",
    text: {
      en: "How can I check expiring certifications? (Odoo Learn — Certifications)",
      fr: "Comment puis-je vérifier les certifications expirées ? (Odoo Learn — Certifications)",
    },
    correct: {
      en: "Go to Employees app > Learning > Certifications and check for red or orange entries",
      fr: "Accédez à l'application Employés > Formation > Certifications et vérifiez les entrées rouges ou orange.",
    },
    distractors: [
      { en: "Managers are notified automatically when certifications are going to expire", fr: "Les managers sont automatiquement avertis lorsque les certifications vont expirer" },
      { en: "This is not possible in Odoo", fr: "Ce n'est pas possible dans Odoo" },
      { en: "Go to Employees app > Reporting > Certifications and sort by expiration date", fr: "Accédez à l'application Employés > Rapports > Certifications et triez par date d'expiration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Certifications): Go to Employees app > Learning > Certifications and check for red or orange entries",
      fr: "Source Odoo Learn (Certifications) : Accédez à l'application Employés > Apprentissage > Certifications et vérifiez les entrées rouges ou orange.",
    },
  }),
  complexQ({
    id: "hr-042",
    module: "hr",
    text: {
      en: "Where can you create a new badge? (Odoo Learn — Badges)",
      fr: "Où puis-je créer un nouveau badge ? (Odoo Learn — Insignes)",
    },
    correct: {
      en: "In the ‘Employees’ app, navigate to ‘Configuration’ > ‘Badges’.",
      fr: "Dans l’application « Employés », accédez à « Configuration » > « Badges ».",
    },
    distractors: [
      { en: "Badges cannot be created, all badges are installed by default.", fr: "Les badges ne peuvent pas être créés, tous les badges sont installés par défaut." },
      { en: "On the employee record, navigate to the ‘Received Badges’ tab.", fr: "Sur le dossier de l'employé, accédez à l'onglet « Badges reçus »." },
      { en: "In the ‘Appraisals’ app, navigate to ‘Configuration’ > ‘Badges’.", fr: "Dans l’application « Évaluations », accédez à « Configuration » > « Badges »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Badges): In the ‘Employees’ app, navigate to ‘Configuration’ > ‘Badges’.",
      fr: "Source Odoo Learn (Badges) : Dans l'application « Employés », accédez à « Configuration » > « Badges ».",
    },
  }),
  complexQ({
    id: "hr-043",
    module: "hr",
    text: {
      en: "On a Badge form, what does the ‘Monthly Limited Sending’ checkbox do? (Odoo Learn — Badges)",
      fr: "Sur un formulaire Badge, à quoi sert la case à cocher « Envoi mensuel limité » ? (Odoo Learn — Insignes)",
    },
    correct: {
      en: "Allows you to set the maximum number of badges awarded each month.",
      fr: "Permet de définir le nombre maximum de badges attribués chaque mois.",
    },
    distractors: [
      { en: "Allows you to set the maximum number of badges awarded each year.", fr: "Permet de définir le nombre maximum de badges attribués chaque année." },
      { en: "Limits the number of emails you can send each month regarding badge progress.", fr: "Limite le nombre d'e-mails que vous pouvez envoyer chaque mois concernant la progression du badge." },
      { en: "Does not allow you to email employees about their badge progress.", fr: "Ne vous permet pas d'envoyer un e-mail aux employés concernant la progression de leur badge." },
    ],
    explanation: {
      en: "Source Odoo Learn (Badges): Allows you to set the maximum number of badges awarded each month.",
      fr: "Source Odoo Learn (Badges) : Permet de définir le nombre maximum de badges attribués chaque mois.",
    },
  }),
  complexQ({
    id: "hr-044",
    module: "hr",
    text: {
      en: "Where can you see all the badges an employee has earned? (Odoo Learn — Badges)",
      fr: "Où pouvez-vous voir tous les badges qu’un employé a gagnés ? (Odoo Learn — Insignes)",
    },
    correct: {
      en: "In the ‘Received Badges’ tab on the employee record.",
      fr: "Dans l’onglet « Badges reçus » de la fiche employé.",
    },
    distractors: [
      { en: "On the ‘Badges’ configuration page.", fr: "Sur la page de configuration « Badges »." },
      { en: "There is no way to view all badges earned by an employee.", fr: "Il n'existe aucun moyen de visualiser tous les badges gagnés par un employé." },
      { en: "In the ‘Badges’ section of the ‘Work Information’ tab on an employee record.", fr: "Dans la section « Badges » de l’onglet « Informations sur le travail » d’un dossier d’employé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Badges): In the ‘Received Badges’ tab on the employee record.",
      fr: "Source Odoo Learn (Badges) : Dans l'onglet « Badges reçus » de la fiche employé.",
    },
  }),
  complexQ({
    id: "hr-045",
    module: "hr",
    text: {
      en: "Where can I find the offboarding plan details? (Odoo Learn — Offboarding)",
      fr: "Où puis-je trouver les détails du plan de départ ? (Odoo Learn — Débarquement)",
    },
    correct: {
      en: "Going to the ‘Employees’ app and navigating to ‘Configurations’ > ‘Activity Plans’",
      fr: "Accédez à l'application « Employés » et accédez à « Configurations » > « Plans d'activité ».",
    },
    distractors: [
      { en: "Going to the ‘Employees’ app and navigating to ‘Configurations’ > ‘Settings’", fr: "Accédez à l'application « Employés » et accédez à « Configurations » > « Paramètres »" },
      { en: "Going to the ‘Employees’ app and navigating to ‘Configurations’ > ‘Templates’", fr: "Accédez à l'application « Employés » et accédez à « Configurations » > « Modèles »" },
      { en: "Going to the ‘Employees’ app and clicking ‘Launch Plan’ on the employee form", fr: "Aller sur l'application « Employés » et cliquer sur « Lancer le plan » sur le formulaire de l'employé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Offboarding): Going to the ‘Employees’ app and navigating to ‘Configurations’ > ‘Activity Plans’",
      fr: "Source Odoo Learn (Offboarding) : Accédez à l'application « Employés » et accédez à « Configurations » > « Plans d'activité »",
    },
  }),
  complexQ({
    id: "hr-046",
    module: "hr",
    text: {
      en: "How do I archive an employee? (Odoo Learn — Offboarding)",
      fr: "Comment archiver un salarié ? (Odoo Learn — Débarquement)",
    },
    correct: {
      en: "On the employee form, click the ‘Gear’ icon, then click ‘Archive’",
      fr: "Sur le formulaire de l'employé, cliquez sur l'icône « Engrenage », puis cliquez sur « Archiver ».",
    },
    distractors: [
      { en: "Click ‘Archive’ on the ‘Employees’ dashboard, then select the employee", fr: "Cliquez sur « Archiver » sur le tableau de bord « Employés », puis sélectionnez l'employé." },
      { en: "View employee cards in the Kanban view, then drag the employee into the ‘Archived’ column", fr: "Affichez les fiches des employés dans la vue Kanban, puis faites glisser l'employé dans la colonne « Archivé »." },
      { en: "I cancel their contract", fr: "J'annule leur contrat" },
    ],
    explanation: {
      en: "Source Odoo Learn (Offboarding): On the employee form, click the ‘Gear’ icon, then click ‘Archive’",
      fr: "Source Odoo Learn (Offboarding) : Sur le formulaire de l'employé, cliquez sur l'icône « Engrenage », puis cliquez sur « Archiver »",
    },
  }),
  complexQ({
    id: "hr-047",
    module: "hr",
    text: {
      en: "How do I view archived employees? (Odoo Learn — Offboarding)",
      fr: "Comment visualiser les employés archivés ? (Odoo Learn — Débarquement)",
    },
    correct: {
      en: "Select the filter ‘Archived’ in the search bar",
      fr: "Sélectionnez le filtre « Archivé » dans la barre de recherche",
    },
    distractors: [
      { en: "Type the employee's name in the search bar", fr: "Tapez le nom de l'employé dans la barre de recherche" },
      { en: "Both archived and unarchived employees appear in the default ‘Employees’ dashboard", fr: "Les employés archivés et non archivés apparaissent dans le tableau de bord « Employés » par défaut" },
      { en: "It is not possible to view archived employees", fr: "Il n'est pas possible de visualiser les employés archivés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Offboarding): Select the filter ‘Archived’ in the search bar",
      fr: "Source Odoo Learn (Offboarding) : Sélectionnez le filtre « Archivé » dans la barre de recherche",
    },
  }),
  complexQ({
    id: "hr-048",
    module: "hr",
    text: {
      en: "How do I view the report that is modified to determine the number of employees who have left? (Odoo Learn — Employee Retention Rate)",
      fr: "Comment consulter le rapport modifié pour déterminer le nombre d'employés partis ? (Odoo Learn — Taux de rétention des employés)",
    },
    correct: {
      en: "Navigate to ‘Employees’ app > ‘Reporting’ > ‘Contracts’",
      fr: "Accédez à l'application « Employés » > « Rapports » > « Contrats »",
    },
    distractors: [
      { en: "Navigate to ‘Employees’ app > ‘Reporting’ > ‘Retention’", fr: "Accédez à l'application « Employés » > « Rapports » > « Rétention »" },
      { en: "Navigate to ‘Employees’ app > ‘Reporting’ > ‘Skills’", fr: "Accédez à l'application « Employés » > « Rapports » > « Compétences »" },
      { en: "Navigate to ‘Employees’ app > ‘Reporting’ > ‘Certifications’", fr: "Accédez à l'application « Employés » > « Rapports » > « Certifications »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Employee Retention Rate): Navigate to ‘Employees’ app > ‘Reporting’ > ‘Contracts’",
      fr: "Source Odoo Learn (taux de rétention des employés) : accédez à l'application « Employés » > « Rapports » > « Contrats »",
    },
  }),
  complexQ({
    id: "hr-049",
    module: "hr",
    text: {
      en: "Which view allows for the easiest method of viewing departed employees? (Odoo Learn — Employee Retention Rate)",
      fr: "Quelle vue offre la méthode la plus simple pour visualiser les employés partis ? (Odoo Learn — Taux de rétention des employés)",
    },
    correct: {
      en: "Pivot",
      fr: "Pivoter",
    },
    distractors: [
      { en: "Graph", fr: "Graphique" },
      { en: "List", fr: "Liste" },
      { en: "Kanban", fr: "Kanban" },
    ],
    explanation: {
      en: "Source Odoo Learn (Employee Retention Rate): Pivot",
      fr: "Source Odoo Learn (Taux de rétention des employés) : Pivot",
    },
  }),
  complexQ({
    id: "hr-050",
    module: "hr",
    text: {
      en: "How do I view information based on the ‘Departure Reason’? (Odoo Learn — Employee Retention Rate)",
      fr: "Comment puis-je afficher les informations basées sur le « Raison du départ » ? (Odoo Learn — Taux de rétention des employés)",
    },
    correct: {
      en: "Group by ‘Departure Reason’",
      fr: "Regrouper par « Raison du départ »",
    },
    distractors: [
      { en: "Group by ‘Employee Departures’", fr: "Regrouper par « Départs d’employés »" },
      { en: "It is not possible to view this information", fr: "Il n'est pas possible de visualiser ces informations" },
      { en: "Group by ‘Departments’", fr: "Regrouper par « Départements »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Employee Retention Rate): Group by ‘Departure Reason’",
      fr: "Source Odoo Learn (taux de rétention des employés) : regrouper par « raison de départ »",
    },
  }),
  complexQ({
    id: "hr-051",
    module: "hr",
    text: {
      en: "If enabled, what does the Automatic Check Out option do? (Odoo Learn — Attendances Basics)",
      fr: "Si elle est activée, à quoi sert l'option de retrait automatique ? (Odoo Learn — Notions de base sur les présences)",
    },
    correct: {
      en: "Automatically checks out employees after a specified amount of time after their shift, if they did not already check out.",
      fr: "Récupère automatiquement les employés après un laps de temps spécifié après leur quart de travail, s'ils ne l'ont pas déjà fait.",
    },
    distractors: [
      { en: "Automatically checks out employees at the end of their scheduled shift, according to their working schedule.", fr: "Vérifie automatiquement les employés à la fin de leur quart de travail prévu, en fonction de leur horaire de travail." },
      { en: "Automatically checks out employees after eight hours elapse from when they checked in, regardless of their working schedule.", fr: "Contrôle automatiquement les employés huit heures après leur arrivée, quel que soit leur horaire de travail." },
      { en: "Automatically signs out employees at their specified break time, according to their working schedule.", fr: "Déconnecte automatiquement les employés à l'heure de pause spécifiée, en fonction de leur horaire de travail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendances Basics): Automatically checks out employees after a specified amount of time after their shift, if they did not already check out.",
      fr: "Source Odoo Learn (Bases des présences) : vérifie automatiquement les employés après un laps de temps spécifié après leur quart de travail, s'ils ne l'ont pas déjà fait.",
    },
  }),
  complexQ({
    id: "hr-052",
    module: "hr",
    text: {
      en: "What happens to ‘Extra Time’ worked by an employee? (Odoo Learn — Attendances Basics)",
      fr: "Qu’arrive-t-il aux « temps supplémentaires » effectués par un employé ? (Odoo Learn — Notions de base sur les présences)",
    },
    correct: {
      en: "It is converted as Time Off time",
      fr: "Il est converti en temps libre",
    },
    distractors: [
      { en: "It is paid out as overtime in the following paycheck", fr: "Elle est versée en heures supplémentaires sur le chèque de paie suivant" },
      { en: "It counts as time worked for the following day", fr: "Cela compte comme du temps travaillé pour le lendemain" },
      { en: "It is unpaid extra time", fr: "C'est du temps supplémentaire non rémunéré" },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendances Basics): It is converted as Time Off time",
      fr: "Source Odoo Learn (Bases des présences) : Il est converti en temps libre",
    },
  }),
  complexQ({
    id: "hr-053",
    module: "hr",
    text: {
      en: "When kiosk mode is accessed, what security measures are enabled? (Odoo Learn — Attendances Basics)",
      fr: "Lorsque vous accédez au mode kiosque, quelles mesures de sécurité sont activées ? (Odoo Learn — Notions de base sur les présences)",
    },
    correct: {
      en: "The user is automatically signed out of the database",
      fr: "L'utilisateur est automatiquement déconnecté de la base de données",
    },
    distractors: [
      { en: "Users can only sign in and out once per day", fr: "Les utilisateurs ne peuvent se connecter et se déconnecter qu'une fois par jour" },
      { en: "All employees must use a PIN, regardless of the settings", fr: "Tous les employés doivent utiliser un code PIN, quels que soient les paramètres" },
      { en: "Manual Selection is disabled, and a barcode (or RFID) must be used", fr: "La sélection manuelle est désactivée et un code-barres (ou RFID) doit être utilisé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendances Basics): The user is automatically signed out of the database",
      fr: "Source Odoo Learn (Bases des présences) : L'utilisateur est automatiquement déconnecté de la base de données",
    },
  }),
  complexQ({
    id: "hr-054",
    module: "hr",
    text: {
      en: "What does a red-colored entry on the main ‘Attendances’ dashboard indicate? (Odoo Learn — Attendances Management)",
      fr: "Qu'indique une entrée de couleur rouge sur le tableau de bord principal « Présences » ? (Odoo Learn — Gestion des présences)",
    },
    correct: {
      en: "The employee logged more hours than expected, according to their work schedule.",
      fr: "L'employé a effectué plus d'heures que prévu, selon son horaire de travail.",
    },
    distractors: [
      { en: "The employee logged fewer hours than expected, according to their work schedule.", fr: "L'employé a effectué moins d'heures que prévu, selon son horaire de travail." },
      { en: "The employee created a record when they had scheduled time off.", fr: "L'employé a créé un enregistrement alors qu'il avait prévu un congé." },
      { en: "The employee forgot to sign in for their shift.", fr: "L'employé a oublié de se connecter à son quart de travail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendances Management): The employee logged more hours than expected, according to their work schedule.",
      fr: "Source Odoo Learn (Gestion des présences) : L'employé a enregistré plus d'heures que prévu, selon son horaire de travail.",
    },
  }),
  complexQ({
    id: "hr-055",
    module: "hr",
    text: {
      en: "Can I partially approve extra hours? (Odoo Learn — Attendances Management)",
      fr: "Puis-je approuver partiellement les heures supplémentaires ? (Odoo Learn — Gestion des présences)",
    },
    correct: {
      en: "Yes, by setting the number of hours being approved on the attendance record.",
      fr: "Oui, en fixant le nombre d'heures validées sur le relevé de présence.",
    },
    distractors: [
      { en: "No, all of the extra hours must be either approved or rejected.", fr: "Non, toutes les heures supplémentaires doivent être soit approuvées, soit refusées." },
      { en: "Yes, by clicking ‘Refuse’ on the attendance record, and then entering the number of refused hours.", fr: "Oui, en cliquant sur « Refuser » sur la fiche de présence, puis en saisissant le nombre d'heures refusées." },
      { en: "Yes, but only if there is a positive balance of extra time.", fr: "Oui, mais seulement s’il y a un bilan positif des prolongations." },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendances Management): Yes, by setting the number of hours being approved on the attendance record.",
      fr: "Source Odoo Learn (Gestion des présences) : Oui, en définissant le nombre d'heures approuvées sur le relevé de présence.",
    },
  }),
  complexQ({
    id: "hr-056",
    module: "hr",
    text: {
      en: "Which is **not** a default filter or grouping for the ‘Attendances’ report? (Odoo Learn — Attendances Management)",
      fr: "Qu'est-ce qui n'est **pas** un filtre ou un regroupement par défaut pour le rapport « Présences » ? (Odoo Learn — Gestion des présences)",
    },
    correct: {
      en: "Filtered by ‘Job Position’",
      fr: "Filtré par « Poste »",
    },
    distractors: [
      { en: "Filtered by ‘Last 3 Months’", fr: "Filtré par « 3 derniers mois »" },
      { en: "Grouped by ‘Month’", fr: "Regroupé par « Mois »" },
      { en: "Grouped by ‘Employee’", fr: "Regroupé par « Employé »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendances Management): Filtered by ‘Job Position’",
      fr: "Source Odoo Learn (Gestion des présences) : filtré par « Poste »",
    },
  }),
  complexQ({
    id: "hr-057",
    module: "hr",
    text: {
      en: "Where do I configure overtime rulesets? (Odoo Learn — Overtime)",
      fr: "Où puis-je configurer les règles relatives aux heures supplémentaires ? (Odoo Learn — Au fil du temps)",
    },
    correct: {
      en: "Navigate to ‘Attendances’ > ‘Settings’ > ‘Overtime Rulesets’",
      fr: "Accédez à « Présences » > « Paramètres » > « Ensembles de règles relatives aux heures supplémentaires »",
    },
    distractors: [
      { en: "Overtime rules are set by default and cannot be modified", fr: "Les règles d'heures supplémentaires sont définies par défaut et ne peuvent pas être modifiées" },
      { en: "Navigate to ‘Attendances’ > ‘Management’ and create a ruleset.", fr: "Accédez à « Présences » > « Gestion » et créez un ensemble de règles." },
      { en: "Navigate to ‘Attendances’ > ‘Settings’  and set the rules in the ‘’Overtime’ section", fr: "Accédez à « Présences » > « Paramètres » et définissez les règles dans la section « Heures supplémentaires »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Overtime): Navigate to ‘Attendances’ > ‘Settings’ > ‘Overtime Rulesets’",
      fr: "Source Odoo Learn (heures supplémentaires) : accédez à « Présences » > « Paramètres » > « Ensembles de règles pour les heures supplémentaires »",
    },
  }),
  complexQ({
    id: "hr-058",
    module: "hr",
    text: {
      en: "What compensation options are available for worked extra hours? (Odoo Learn — Overtime)",
      fr: "Quelles sont les options de rémunération disponibles pour les heures supplémentaires travaillées ? (Odoo Learn — Au fil du temps)",
    },
    correct: {
      en: "Either overtime pay or time off",
      fr: "Soit des heures supplémentaires, soit des congés",
    },
    distractors: [
      { en: "Overtime pay only", fr: "Rémunération des heures supplémentaires uniquement" },
      { en: "Time off only", fr: "Congé seulement" },
      { en: "No compensation is available", fr: "Aucune compensation n'est disponible" },
    ],
    explanation: {
      en: "Source Odoo Learn (Overtime): Either overtime pay or time off",
      fr: "Source Odoo Learn (Heures supplémentaires) : Soit des heures supplémentaires payées, soit des congés",
    },
  }),
  complexQ({
    id: "hr-059",
    module: "hr",
    text: {
      en: "Where is the overtime rate configured? (Odoo Learn — Overtime)",
      fr: "Où est configuré le taux des heures supplémentaires ? (Odoo Learn — Au fil du temps)",
    },
    correct: {
      en: "On the work entry type in the Payroll app",
      fr: "Sur le type de saisie travail dans l'application Paie",
    },
    distractors: [
      { en: "On the work entry type in the Attendances app", fr: "Sur le type de saisie de travail dans l'application Présences" },
      { en: "On the overtime ruleset in the Attendances app", fr: "Sur les règles relatives aux heures supplémentaires dans l'application Présences" },
      { en: "On the work entry type in the Attendances app", fr: "Sur le type de saisie de travail dans l'application Présences" },
    ],
    explanation: {
      en: "Source Odoo Learn (Overtime): On the work entry type in the Payroll app",
      fr: "Source Odoo Learn (Heures supplémentaires) : Sur le type de saisie travail dans l'application Paie",
    },
  }),
  complexQ({
    id: "hr-060",
    module: "hr",
    text: {
      en: "What do I need to do on the Recruitment Settings page to post job positions on the company website? (Odoo Learn — Recruitment Basics)",
      fr: "Que dois-je faire sur la page Paramètres de recrutement pour publier des offres d'emploi sur le site Web de l'entreprise ? (Odoo Learn — Bases du recrutement)",
    },
    correct: {
      en: "Enable the ‘Online Posting’ option",
      fr: "Activez l'option « Publication en ligne »",
    },
    distractors: [
      { en: "It is not possible to post job positions online", fr: "Il n'est pas possible de publier des offres d'emploi en ligne" },
      { en: "Configure the ‘Job Board’ option", fr: "Configurer l'option « Job Board »" },
      { en: "Configure the two settings in the Process section", fr: "Configurez les deux paramètres dans la section Processus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recruitment Basics): Enable the ‘Online Posting’ option",
      fr: "Source Odoo Learn (Bases du recrutement) : Activez l'option « Publication en ligne »",
    },
  }),
  complexQ({
    id: "hr-061",
    module: "hr",
    text: {
      en: "If I want prospective applicants to automatically receive an email, informing them that their application has been received, how can I configure this? (Odoo Learn — Recruitment Basics)",
      fr: "Si je souhaite que les candidats potentiels reçoivent automatiquement un e-mail les informant que leur candidature a été reçue, comment puis-je configurer cela ? (Odoo Learn — Bases du recrutement)",
    },
    correct: {
      en: "By adding an email template to the respective stage of the job position pipeline",
      fr: "En ajoutant un modèle d'e-mail à l'étape respective du pipeline de postes",
    },
    distractors: [
      { en: "By adding an interview form to the job position configuration settings", fr: "En ajoutant un formulaire d'entretien aux paramètres de configuration du poste" },
      { en: "By enabling the ‘Send Interview Survey’ feature on the Settings page", fr: "En activant la fonctionnalité « Envoyer une enquête par entretien » sur la page Paramètres" },
      { en: "This can only be done with the Studio app", fr: "Cela ne peut être fait qu'avec l'application Studio" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recruitment Basics): By adding an email template to the respective stage of the job position pipeline",
      fr: "Source Odoo Learn (bases du recrutement) : en ajoutant un modèle d'e-mail à l'étape respective du pipeline de postes",
    },
  }),
  complexQ({
    id: "hr-062",
    module: "hr",
    text: {
      en: "How can I determine if a job offer was sent to an applicant? (Odoo Learn — Recruitment Basics)",
      fr: "Comment puis-je déterminer si une offre d’emploi a été envoyée à un candidat ? (Odoo Learn — Bases du recrutement)",
    },
    correct: {
      en: "An ‘Offers’ smart button appears on the applicant’s page",
      fr: "Un bouton intelligent « Offres » apparaît sur la page du candidat",
    },
    distractors: [
      { en: "The applicant is in the Contract Proposal stage", fr: "Le demandeur est au stade de la proposition de contrat" },
      { en: "It is not possible to tell from the Recruitment app", fr: "Il n'est pas possible de le savoir depuis l'application Recrutement" },
      { en: "A ‘Contract’ smart button appears on the applicant’s page", fr: "Un bouton intelligent « Contrat » apparaît sur la page du candidat" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recruitment Basics): An ‘Offers’ smart button appears on the applicant’s page",
      fr: "Source Odoo Learn (Bases du recrutement) : Un bouton intelligent « Offres » apparaît sur la page du candidat",
    },
  }),
  complexQ({
    id: "hr-063",
    module: "hr",
    text: {
      en: "What does the ‘Application email’ do? (Odoo Learn — Create Job Positions)",
      fr: "À quoi sert le « e-mail de candidature » ? (Odoo Learn — Créer des postes)",
    },
    correct: {
      en: "Allows applicants to apply for the job position by emailing their resume to the email address.",
      fr: "Permet aux candidats de postuler pour le poste en envoyant leur CV à l'adresse e-mail.",
    },
    distractors: [
      { en: "Allows applicants to communicate with the recruiter with the email address.", fr: "Permet aux candidats de communiquer avec le recruteur avec l'adresse e-mail." },
      { en: "Allows applicants to schedule interviews with the email address.", fr: "Permet aux candidats de planifier des entretiens avec l'adresse e-mail." },
      { en: "This field is where the applicant's email goes on their applicant record, so the company can contact them.", fr: "Ce champ est l'endroit où l'adresse e-mail du candidat figure dans son dossier de candidature, afin que l'entreprise puisse le contacter." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Job Positions): Allows applicants to apply for the job position by emailing their resume to the email address.",
      fr: "Source Odoo Learn (Créer des postes) : permet aux candidats de postuler au poste en envoyant leur CV à l'adresse e-mail.",
    },
  }),
  complexQ({
    id: "hr-064",
    module: "hr",
    text: {
      en: "If I want to add a skill that is not already configured, can I add it at the same time as adding pre-existing skills? (Odoo Learn — Create Job Positions)",
      fr: "Si je souhaite ajouter une compétence qui n'est pas déjà configurée, puis-je l'ajouter en même temps que des compétences préexistantes ? (Odoo Learn — Créer des postes)",
    },
    correct: {
      en: "No, you need to add the skill and select it separately from the current list.",
      fr: "Non, vous devez ajouter la compétence et la sélectionner séparément dans la liste actuelle.",
    },
    distractors: [
      { en: "Yes, you can create skills and add them along with existing skills at the same time.", fr: "Oui, vous pouvez créer des compétences et les ajouter simultanément aux compétences existantes." },
      { en: "Yes, but only if the skills are part of the same ‘Skill Type’.", fr: "Oui, mais seulement si les compétences font partie du même « type de compétence »." },
      { en: "You cannot add skills, only select the default ones.", fr: "Vous ne pouvez pas ajouter de compétences, sélectionnez uniquement celles par défaut." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Job Positions): No, you need to add the skill and select it separately from the current list.",
      fr: "Source Odoo Learn (Créer des postes) : Non, vous devez ajouter la compétence et la sélectionner séparément dans la liste actuelle.",
    },
  }),
  complexQ({
    id: "hr-065",
    module: "hr",
    text: {
      en: "What does the ‘Interviewer’ field do? (Odoo Learn — Create Job Positions)",
      fr: "À quoi sert le champ « Enquêteur » ? (Odoo Learn — Créer des postes)",
    },
    correct: {
      en: "The person selected can view all applicants and respective documents, join any meetings related to the job position, and refuse candidates, even if they do not have ‘Recruitment’ app access rights.",
      fr: "La personne sélectionnée peut consulter tous les candidats et les documents respectifs, participer à toutes les réunions liées au poste et refuser des candidats, même si elle ne dispose pas des droits d'accès à l'application « Recrutement ».",
    },
    distractors: [
      { en: "Changes the selected employee’s record to have ‘Recruitment’ app access rights so they can view all applicants.", fr: "Modifie le dossier de l'employé sélectionné pour qu'il dispose des droits d'accès à l'application « Recrutement » afin qu'il puisse voir tous les candidats." },
      { en: "Assigns temporary access rights for the designated employee, so they can schedule interviews.", fr: "Attribue des droits d'accès temporaires à l'employé désigné, afin qu'il puisse planifier des entretiens." },
      { en: "The selected employee can change the configuration of the job position, as well as schedule interviews, and refuse candidates.", fr: "L'employé sélectionné peut modifier la configuration du poste, planifier des entretiens et refuser des candidats." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Job Positions): The person selected can view all applicants and respective documents, join any meetings related to the job position, and refuse candidates, even if they do not have ‘Recruitment’ app access rights.",
      fr: "Source Odoo Learn (Créer des postes) : La personne sélectionnée peut consulter tous les candidats et les documents respectifs, participer à toutes les réunions liées au poste et refuser des candidats, même si elle ne dispose pas des droits d'accès à l'application « Recrutement ».",
    },
  }),
  complexQ({
    id: "hr-066",
    module: "hr",
    text: {
      en: "How can I manually add an applicant? (Odoo Learn — Add Applicants)",
      fr: "Comment puis-je ajouter manuellement un candidat ? (Odoo Learn — Ajouter des candidats)",
    },
    correct: {
      en: "Both B & C",
      fr: "B et C",
    },
    distractors: [
      { en: "Click the three-dots in the upper-right corner of the job card, then click ‘Applications’ under the ‘View’ column.", fr: "Cliquez sur les trois points dans le coin supérieur droit de la fiche de travail, puis cliquez sur « Candidatures » dans la colonne « Affichage »." },
      { en: "Click the three-dots in the upper-right corner of the job card, then click ‘Application’, under the ‘New’ column.", fr: "Cliquez sur les trois points dans le coin supérieur droit de la carte de travail, puis cliquez sur « Candidature », sous la colonne « Nouveau »." },
      { en: "Click the ‘plus’ icon in the kanban view of the job position", fr: "Cliquez sur l'icône « plus » dans la vue Kanban du poste." },
    ],
    explanation: {
      en: "Source Odoo Learn (Add Applicants): Both B & C",
      fr: "Source Odoo Learn (Ajouter des candidats) : B et C",
    },
  }),
  complexQ({
    id: "hr-067",
    module: "hr",
    text: {
      en: "Where can I find out how an applicant applied? (Odoo Learn — Add Applicants)",
      fr: "Où puis-je savoir comment un candidat a postulé ? (Odoo Learn — Ajouter des candidats)",
    },
    correct: {
      en: "The ‘Sourcing’ section of the application.",
      fr: "La rubrique « Sourcing » de l’application.",
    },
    distractors: [
      { en: "The ‘Applicant’ section of the application.", fr: "La section « Candidat » de la candidature." },
      { en: "The ‘Notes’ section of the application.", fr: "La section « Notes » de l’application." },
      { en: "This information is not available.", fr: "Cette information n'est pas disponible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Add Applicants): The ‘Sourcing’ section of the application.",
      fr: "Source Odoo Learn (Ajouter des candidats) : La section « Sourcing » de l’application.",
    },
  }),
  complexQ({
    id: "hr-068",
    module: "hr",
    text: {
      en: "What information is required to apply via email? (Odoo Learn — Add Applicants)",
      fr: "Quelles informations sont requises pour postuler par e-mail ? (Odoo Learn — Ajouter des candidats)",
    },
    correct: {
      en: "The job email alias and a PDF resumé.",
      fr: "L'alias de l'e-mail du poste et un CV PDF.",
    },
    distractors: [
      { en: "The job email alias, email subject, and a PDF resumé.", fr: "L'alias de l'e-mail du poste, l'objet de l'e-mail et un CV PDF." },
      { en: "The job email alias, email subject, an introduction, and a PDF resumé.", fr: "L'alias de l'e-mail du poste, l'objet de l'e-mail, une introduction et un CV PDF." },
      { en: "It is not possible to submit an application by email.", fr: "Il n'est pas possible de déposer une candidature par email." },
    ],
    explanation: {
      en: "Source Odoo Learn (Add Applicants): The job email alias and a PDF resumé.",
      fr: "Source Odoo Learn (Ajouter des candidats) : L'alias de l'adresse e-mail du poste et un CV PDF.",
    },
  }),
  complexQ({
    id: "hr-069",
    module: "hr",
    text: {
      en: "What application do I need to have installed in order to use interview forms? (Odoo Learn — Interview Forms)",
      fr: "Quelle application dois-je installer pour pouvoir utiliser les formulaires d'entretien ? (Odoo Learn — Formulaires d'entretien)",
    },
    correct: {
      en: "Surveys",
      fr: "Enquêtes",
    },
    distractors: [
      { en: "Documents", fr: "Documents" },
      { en: "Studio", fr: "Studio" },
      { en: "Email Marketing", fr: "Marketing par e-mail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Interview Forms): Surveys",
      fr: "Source Odoo Learn (Formulaires d'entretien) : Enquêtes",
    },
  }),
  complexQ({
    id: "hr-070",
    module: "hr",
    text: {
      en: "How do I send an interview to an applicant? (Odoo Learn — Interview Forms)",
      fr: "Comment envoyer un entretien à un candidat ? (Odoo Learn — Formulaires d'entretien)",
    },
    correct: {
      en: "Click the ‘Send Interview’ button on the applicant's card",
      fr: "Cliquez sur le bouton « Envoyer l'entretien » sur la carte du candidat.",
    },
    distractors: [
      { en: "Move the applicant card to the ‘First Interview’ stage", fr: "Déplacez la carte de candidat à l’étape « Premier entretien »" },
      { en: "Send a message to the applicant in the chatter", fr: "Envoyer un message au candidat dans le chat" },
      { en: "Click the ‘Surveys’ button on the applicant's card", fr: "Cliquez sur le bouton « Enquêtes » sur la carte du candidat" },
    ],
    explanation: {
      en: "Source Odoo Learn (Interview Forms): Click the ‘Send Interview’ button on the applicant's card",
      fr: "Source Odoo Learn (Formulaires d'entretien) : Cliquez sur le bouton « Envoyer l'entretien » sur la carte du candidat",
    },
  }),
  complexQ({
    id: "hr-071",
    module: "hr",
    text: {
      en: "How can I set a time limit on the interview form? (Odoo Learn — Interview Forms)",
      fr: "Comment puis-je fixer une limite de temps sur le formulaire d'entretien ? (Odoo Learn — Formulaires d'entretien)",
    },
    correct: {
      en: "Tick the ‘Survey Time Limit’ checkbox in the ‘Options’ tab",
      fr: "Cochez la case « Durée limite de l'enquête » dans l'onglet « Options »",
    },
    distractors: [
      { en: "Tick the ‘Survey Time Limit’ checkbox in the ‘Questions’ tab", fr: "Cochez la case « Durée limite de l'enquête » dans l'onglet « Questions »" },
      { en: "You must first require a login, then tick the ‘Survey Time Limit’ checkbox in the ‘Options’ tab", fr: "Vous devez d'abord exiger une connexion, puis cocher la case « Durée limite de l'enquête » dans l'onglet « Options »." },
      { en: "It is not possible to set time limits on interview forms used by the Recruitment app", fr: "Il n'est pas possible de fixer des limites de temps sur les formulaires d'entretien utilisés par l'application Recrutement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Interview Forms): Tick the ‘Survey Time Limit’ checkbox in the ‘Options’ tab",
      fr: "Source Odoo Learn (Formulaires d'entretien) : Cochez la case « Durée limite de l'enquête » dans l'onglet « Options »",
    },
  }),
  complexQ({
    id: "hr-072",
    module: "hr",
    text: {
      en: "How do I search for candidates with specific skills? (Odoo Learn — Applicant Skills)",
      fr: "Comment rechercher des candidats ayant des compétences spécifiques ? (Odoo Learn — Compétences des candidats)",
    },
    correct: {
      en: "Click on the Job Position card, then click the ‘Gear’ icon, then ‘Search Matching Applicants’",
      fr: "Cliquez sur la carte Poste de travail, puis cliquez sur l'icône « Engrenage », puis sur « Rechercher les candidats correspondants »",
    },
    distractors: [
      { en: "On the Job Position card, click the ‘Search Matching Applicants’ button", fr: "Sur la fiche Poste, cliquez sur le bouton « Rechercher les candidats correspondants »" },
      { en: "On the ‘Recruitment’ app main dashboard, click the ‘Search Matching Applicants’ button", fr: "Sur le tableau de bord principal de l'application « Recrutement », cliquez sur le bouton « Rechercher les candidats correspondants »." },
      { en: "It is not possible to search by skills", fr: "Il n'est pas possible de rechercher par compétences" },
    ],
    explanation: {
      en: "Source Odoo Learn (Applicant Skills): Click on the Job Position card, then click the ‘Gear’ icon, then ‘Search Matching Applicants’",
      fr: "Source Odoo Learn (Compétences des candidats) : cliquez sur la carte Poste de travail, puis cliquez sur l'icône « Équipement », puis sur « Rechercher les candidats correspondants »",
    },
  }),
  complexQ({
    id: "hr-073",
    module: "hr",
    text: {
      en: "How do I add a skill to an applicant record? (Odoo Learn — Applicant Skills)",
      fr: "Comment ajouter une compétence à un dossier de candidat ? (Odoo Learn — Compétences des candidats)",
    },
    correct: {
      en: "On the Applicant card, click into the ‘Skills’ tab, then click ‘Add’",
      fr: "Sur la fiche du candidat, cliquez sur l'onglet « Compétences », puis cliquez sur « Ajouter ».",
    },
    distractors: [
      { en: "On the Applicant card, click into the ‘Details’ tab, then click ‘Skills’", fr: "Sur la fiche du candidat, cliquez sur l'onglet « Détails », puis cliquez sur « Compétences »." },
      { en: "On the Applicant card, click the ‘Skills’ smart button", fr: "Sur la fiche candidat, cliquez sur le bouton intelligent « Compétences »" },
      { en: "On the Applicant card, add the skill to the ‘Tags’ field", fr: "Sur la fiche Candidat, ajoutez la compétence dans le champ « Tags »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Applicant Skills): On the Applicant card, click into the ‘Skills’ tab, then click ‘Add’",
      fr: "Source Odoo Learn (Compétences du candidat) : Sur la fiche du candidat, cliquez sur l'onglet « Compétences », puis cliquez sur « Ajouter »",
    },
  }),
  complexQ({
    id: "hr-074",
    module: "hr",
    text: {
      en: "Where can I find a list of all the currently configured skills? (Odoo Learn — Applicant Skills)",
      fr: "Où puis-je trouver une liste de toutes les compétences actuellement configurées ? (Odoo Learn — Compétences des candidats)",
    },
    correct: {
      en: "Navigate to ‘Recruitment’ app > ‘Configuration’ > ‘Skill Types’",
      fr: "Accédez à l'application « Recrutement » > « Configuration » > « Types de compétences »",
    },
    distractors: [
      { en: "Navigate to ‘Recruitment’ app > ‘Configuration’ > ‘Settings’", fr: "Accédez à l'application « Recrutement » > « Configuration » > « Paramètres »" },
      { en: "Navigate to ‘Recruitment’ app > ‘Settings’ > ‘Skill Types’", fr: "Accédez à l'application « Recrutement » > « Paramètres » > « Types de compétences »" },
      { en: "It is not possible to view all the skills at once", fr: "Il n'est pas possible de visualiser toutes les compétences en même temps" },
    ],
    explanation: {
      en: "Source Odoo Learn (Applicant Skills): Navigate to ‘Recruitment’ app > ‘Configuration’ > ‘Skill Types’",
      fr: "Source Odoo Learn (Compétences des candidats) : accédez à l'application « Recrutement » > « Configuration » > « Types de compétences »",
    },
  }),
  complexQ({
    id: "hr-075",
    module: "hr",
    text: {
      en: "How can I add an email template to a stage? (Odoo Learn — Schedule Interviews)",
      fr: "Comment puis-je ajouter un modèle d'e-mail à une étape ? (Odoo Learn — Planifier des entretiens)",
    },
    correct: {
      en: "Hover over the stage name, click the gear icon, and click ‘Edit’.",
      fr: "Passez la souris sur le nom de la scène, cliquez sur l'icône d'engrenage et cliquez sur « Modifier ».",
    },
    distractors: [
      { en: "Hover over the stage name, click the gear icon, and click ‘Automations’.", fr: "Passez la souris sur le nom de la scène, cliquez sur l'icône d'engrenage et cliquez sur « Automatisations »." },
      { en: "Hover over the stage name, click the gear icon, and click ‘Emails’.", fr: "Passez la souris sur le nom de la scène, cliquez sur l'icône d'engrenage et cliquez sur « E-mails »." },
      { en: "It is not possible to add email templates to stages.", fr: "Il n'est pas possible d'ajouter des modèles d'e-mails aux étapes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Schedule Interviews): Hover over the stage name, click the gear icon, and click ‘Edit’.",
      fr: "Source Odoo Learn (Planifier des entretiens) : passez la souris sur le nom de la scène, cliquez sur l'icône en forme d'engrenage et cliquez sur « Modifier ».",
    },
  }),
  complexQ({
    id: "hr-076",
    module: "hr",
    text: {
      en: "What information is required when applicants schedule interviews themselves? (Odoo Learn — Schedule Interviews)",
      fr: "Quelles informations sont requises lorsque les candidats planifient eux-mêmes les entretiens ? (Odoo Learn — Planifier des entretiens)",
    },
    correct: {
      en: "Name, email address, and phone number.",
      fr: "Nom, adresse e-mail et numéro de téléphone.",
    },
    distractors: [
      { en: "Name, email address, phone number, and home address.", fr: "Nom, adresse e-mail, numéro de téléphone et adresse personnelle." },
      { en: "Name and phone number only.", fr: "Nom et numéro de téléphone uniquement." },
      { en: "Name and email address only.", fr: "Nom et adresse e-mail uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Schedule Interviews): Name, email address, and phone number.",
      fr: "Source Odoo Learn (Planifier les entretiens) : Nom, adresse e-mail et numéro de téléphone.",
    },
  }),
  complexQ({
    id: "hr-077",
    module: "hr",
    text: {
      en: "How can I find out if there is a meeting scheduled with an applicant? (Odoo Learn — Schedule Interviews)",
      fr: "Comment puis-je savoir si un rendez-vous est prévu avec un candidat ? (Odoo Learn — Planifier des entretiens)",
    },
    correct: {
      en: "Navigating to the applicant record and checking the ‘Meeting’ smart button.",
      fr: "Accédez au dossier du candidat et cochez le bouton intelligent « Réunion ».",
    },
    distractors: [
      { en: "Navigating to ‘Recruitment’ app >  ‘Reporting’ > ‘Meetings’.", fr: "Accédez à l'application « Recrutement » > « Rapports » > « Réunions »." },
      { en: "Clicking the ‘Meeting’ smart button on the job position card.", fr: "En cliquant sur le bouton intelligent « Réunion » sur la carte de poste." },
      { en: "Checking the chatter of an applicant record.", fr: "Vérification du bavardage d'un dossier de candidat." },
    ],
    explanation: {
      en: "Source Odoo Learn (Schedule Interviews): Navigating to the applicant record and checking the ‘Meeting’ smart button.",
      fr: "Source Odoo Learn (Planifier des entretiens) : accédez au dossier du candidat et cochez le bouton intelligent « Réunion ».",
    },
  }),
  complexQ({
    id: "hr-078",
    module: "hr",
    text: {
      en: "What application do I need installed in order to digitally sign contracts? (Odoo Learn — Hire an Applicant)",
      fr: "Quelle application dois-je installer pour signer numériquement des contrats ? (Odoo Learn — Embaucher un candidat)",
    },
    correct: {
      en: "Sign",
      fr: "Signe",
    },
    distractors: [
      { en: "Documents", fr: "Documents" },
      { en: "Employees", fr: "Employés" },
      { en: "Recruitment", fr: "Recrutement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Hire an Applicant): Sign",
      fr: "Source Odoo Learn (Engager un candidat) : Signez",
    },
  }),
  complexQ({
    id: "hr-079",
    module: "hr",
    text: {
      en: "How do I send an offer to an applicant? (Odoo Learn — Hire an Applicant)",
      fr: "Comment envoyer une offre à un candidat ? (Odoo Learn — Embaucher un candidat)",
    },
    correct: {
      en: "Click the ‘Generate Offer’ button on the applicant's card.",
      fr: "Cliquez sur le bouton « Générer une offre » sur la carte du candidat.",
    },
    distractors: [
      { en: "Move the applicant card to the ‘Contract Proposal’ stage.", fr: "Déplacez la carte de candidat à l’étape « Proposition de contrat »." },
      { en: "Send a message to the applicant with the offer using the ’Send message’ button in the chatter.", fr: "Envoyez un message au candidat avec l'offre en utilisant le bouton « Envoyer un message » dans le chat." },
      { en: "Click the ‘Offers’ button on the applicant card .", fr: "Cliquez sur le bouton « Offres » sur la carte du candidat." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hire an Applicant): Click the ‘Generate Offer’ button on the applicant's card.",
      fr: "Source Odoo Learn (embaucher un candidat) : cliquez sur le bouton « Générer une offre » sur la carte du candidat.",
    },
  }),
  complexQ({
    id: "hr-080",
    module: "hr",
    text: {
      en: "What is the default number of days a contract is valid before the offer expires? (Odoo Learn — Hire an Applicant)",
      fr: "Quel est le nombre de jours par défaut pendant lequel un contrat est valable avant l'expiration de l'offre ? (Odoo Learn — Embaucher un candidat)",
    },
    correct: {
      en: "30 days",
      fr: "30 jours",
    },
    distractors: [
      { en: "7 days", fr: "7 jours" },
      { en: "60 days", fr: "60 jours" },
      { en: "90 days", fr: "90 jours" },
    ],
    explanation: {
      en: "Source Odoo Learn (Hire an Applicant): 30 days",
      fr: "Source Odoo Learn (embaucher un candidat) : 30 jours",
    },
  }),
  complexQ({
    id: "hr-081",
    module: "hr",
    text: {
      en: "How can I view a report that shows me how the Recruitment team is doing? (Odoo Learn — Recruitment Analytics)",
      fr: "Comment puis-je consulter un rapport qui me montre les performances de l'équipe de recrutement ? (Odoo Learn — Analyse du recrutement)",
    },
    correct: {
      en: "Click ‘Reporting’ > ‘Team Performance’",
      fr: "Cliquez sur « Rapports » > « Performances de l'équipe »",
    },
    distractors: [
      { en: "Click ‘Reporting’ > ‘Applicant Analysis’", fr: "Cliquez sur « Rapports » > « Analyse des candidats »" },
      { en: "Click ‘Reporting’ > ‘Team Hires’’", fr: "Cliquez sur « Rapports » > « Recrutements d'équipe »" },
      { en: "This information is not available in the ‘Reporting’ menu", fr: "Ces informations ne sont pas disponibles dans le menu « Rapports »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recruitment Analytics): Click ‘Reporting’ > ‘Team Performance’",
      fr: "Source Odoo Learn (Recruitment Analytics) : cliquez sur « Reporting » > « Performance de l'équipe »",
    },
  }),
  complexQ({
    id: "hr-082",
    module: "hr",
    text: {
      en: "What does the ‘Velocity Analysis Report’ show? (Odoo Learn — Recruitment Analytics)",
      fr: "Que montre le « Rapport d’analyse de la vitesse » ? (Odoo Learn — Analyse du recrutement)",
    },
    correct: {
      en: "The average number of days each applicant stays in each stage.",
      fr: "Le nombre moyen de jours de séjour de chaque candidat à chaque étape.",
    },
    distractors: [
      { en: "The amount of time it takes for interviews to be done.", fr: "Le temps nécessaire pour réaliser les entretiens." },
      { en: "The amount of time between posting a job position and receiving the first application.", fr: "Le délai entre la publication d'un poste et la réception de la première candidature." },
      { en: "The number of days each job position lists publicly for each stage.", fr: "Le nombre de jours pendant lesquels chaque poste est répertorié publiquement pour chaque étape." },
    ],
    explanation: {
      en: "Source Odoo Learn (Recruitment Analytics): The average number of days each applicant stays in each stage.",
      fr: "Source Odoo Learn (Recruitment Analytics) : Le nombre moyen de jours que chaque candidat reste à chaque étape.",
    },
  }),
  complexQ({
    id: "hr-083",
    module: "hr",
    text: {
      en: "Which is NOT a report in the ‘Recruitment’ app? (Odoo Learn — Recruitment Analytics)",
      fr: "Lequel n'est PAS un rapport dans l'application « Recrutement » ? (Odoo Learn — Analyse du recrutement)",
    },
    correct: {
      en: "Time In Stage Analysis",
      fr: "Analyse du temps passé par étape",
    },
    distractors: [
      { en: "Applicant Analysis", fr: "Analyse des candidats" },
      { en: "Source Analysis", fr: "Analyse des sources" },
      { en: "Team Performance", fr: "Performance de l'équipe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recruitment Analytics): Time In Stage Analysis",
      fr: "Source Odoo Learn (Analyses de recrutement) : Analyse du temps d'étape",
    },
  }),
  complexQ({
    id: "hr-084",
    module: "hr",
    text: {
      en: "What appears the first time I open the Referrals app? (Odoo Learn — Referrals Basics)",
      fr: "Qu'est-ce qui apparaît la première fois que j'ouvre l'application Parrainages ? (Odoo Learn — Bases des références)",
    },
    correct: {
      en: "The Onboarding slides",
      fr: "Les diapositives d'intégration",
    },
    distractors: [
      { en: "All available job positions", fr: "Tous les postes disponibles" },
      { en: "The rewards I am able to purchase", fr: "Les récompenses que je peux acheter" },
      { en: "The number of jobs I have shared", fr: "Le nombre d'emplois que j'ai partagés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referrals Basics): The Onboarding slides",
      fr: "Source Odoo Learn (bases des parrainages) : les diapositives d'intégration",
    },
  }),
  complexQ({
    id: "hr-085",
    module: "hr",
    text: {
      en: "How can I refer a friend to a specific job via email? (Odoo Learn — Referrals Basics)",
      fr: "Comment puis-je recommander un ami à un emploi spécifique par e-mail ? (Odoo Learn — Bases des références)",
    },
    correct: {
      en: "In the Referrals app, click ‘View Jobs’,  then click ‘Send Email’ on the individual job card",
      fr: "Dans l'application Parrainages, cliquez sur « Afficher les offres d'emploi », puis cliquez sur « Envoyer un e-mail » sur la carte d'emploi individuelle.",
    },
    distractors: [
      { en: "In the Referrals app, I can only send all available jobs with the ‘Email a Friend’ button, not individual jobs", fr: "Dans l'application Parrainages, je ne peux envoyer que toutes les offres d'emploi disponibles avec le bouton « Envoyer par e-mail à un ami », et non les offres d'emploi individuelles." },
      { en: "In the Recruitment app, click on a job, then click ‘Send Email’", fr: "Dans l'application Recrutement, cliquez sur un emploi, puis cliquez sur « Envoyer un e-mail »" },
      { en: "In the Recruitment app, click on a job, then click ‘Refer a Friend’’", fr: "Dans l’application Recrutement, cliquez sur un emploi, puis cliquez sur « Parrainer un ami »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Referrals Basics): In the Referrals app, click ‘View Jobs’,  then click ‘Send Email’ on the individual job card",
      fr: "Source Odoo Learn (bases des références) : dans l'application de références, cliquez sur « Afficher les offres d'emploi », puis cliquez sur « Envoyer un e-mail » sur la carte d'emploi individuelle.",
    },
  }),
  complexQ({
    id: "hr-086",
    module: "hr",
    text: {
      en: "How can I add a superhero to my Referrals team? (Odoo Learn — Referrals Basics)",
      fr: "Comment puis-je ajouter un super-héros à mon équipe de parrainages ? (Odoo Learn — Bases des références)",
    },
    correct: {
      en: "By having one of my referrals hired",
      fr: "En faisant embaucher un de mes filleuls",
    },
    distractors: [
      { en: "By sending a referral to a friend", fr: "En envoyant une référence à un ami" },
      { en: "By having the most points in the Referrals app", fr: "En ayant le plus de points dans l'application Parrainages" },
      { en: "There are no heroes in the Referrals app", fr: "Il n'y a pas de héros dans l'application Parrainages" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referrals Basics): By having one of my referrals hired",
      fr: "Source Odoo Learn (Bases des Parrainages) : En faisant embaucher un de mes filleuls",
    },
  }),
  complexQ({
    id: "hr-087",
    module: "hr",
    text: {
      en: "How can I share job positions in the Referrals app? (Odoo Learn — Share Job Positions)",
      fr: "Comment puis-je partager des offres d'emploi dans l'application Parrainages ? (Odoo Learn — Partager des postes)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Facebook", fr: "Facebook" },
      { en: "Email", fr: "E-mail" },
      { en: "LinkedIn", fr: "LinkedIn" },
    ],
    explanation: {
      en: "Source Odoo Learn (Share Job Positions): All of the above",
      fr: "Source Odoo Learn (Partager les postes) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "hr-088",
    module: "hr",
    text: {
      en: "Can I send ALL job positions to someone? (Odoo Learn — Share Job Positions)",
      fr: "Puis-je envoyer TOUS les postes à quelqu'un ? (Odoo Learn — Partager des postes)",
    },
    correct: {
      en: "Yes, by clicking the ‘Email a Friend’ button on the Referrals dashboard",
      fr: "Oui, en cliquant sur le bouton « Envoyer un e-mail à un ami » sur le tableau de bord des parrainages.",
    },
    distractors: [
      { en: "Yes, by clicking ‘View Jobs’ on the Referrals dashboard", fr: "Oui, en cliquant sur « Afficher les offres d'emploi » sur le tableau de bord des références" },
      { en: "Yes, by clicking the ‘Email All Jobs’ button on the Referrals dashboard.", fr: "Oui, en cliquant sur le bouton « Envoyer par e-mail à toutes les offres » sur le tableau de bord des références." },
      { en: "This is not possible, only one job position at a time can be shared with someone.", fr: "Ce n'est pas possible, un seul poste à la fois peut être partagé avec quelqu'un." },
    ],
    explanation: {
      en: "Source Odoo Learn (Share Job Positions): Yes, by clicking the ‘Email a Friend’ button on the Referrals dashboard",
      fr: "Source Odoo Learn (Partager les postes) : Oui, en cliquant sur le bouton « Envoyer un e-mail à un ami » sur le tableau de bord des références",
    },
  }),
  complexQ({
    id: "hr-089",
    module: "hr",
    text: {
      en: "What do I need to share a job using WhatsApp? (Odoo Learn — Share Job Positions)",
      fr: "De quoi ai-je besoin pour partager un travail via WhatsApp ? (Odoo Learn — Partager des postes)",
    },
    correct: {
      en: "The WhatsApp Messaging module",
      fr: "Le module de messagerie WhatsApp",
    },
    distractors: [
      { en: "The SMS Messaging module", fr: "Le module Messagerie SMS" },
      { en: "The WhatsApp SMS Texting module", fr: "Le module d'envoi de SMS WhatsApp" },
      { en: "The WhatsApp module", fr: "Le module WhatsApp" },
    ],
    explanation: {
      en: "Source Odoo Learn (Share Job Positions): The WhatsApp Messaging module",
      fr: "Source Odoo Learn (Partager les postes) : Le module de messagerie WhatsApp",
    },
  }),
  complexQ({
    id: "hr-090",
    module: "hr",
    text: {
      en: "What is NOT visible in the ‘Trackers’ list? (Odoo Learn — Share Jobs)",
      fr: "Qu'est-ce qui n'est PAS visible dans la liste « Trackers » ? (Odoo Learn — Partager des emplois)",
    },
    correct: {
      en: "Referrer",
      fr: "Référent",
    },
    distractors: [
      { en: "Source", fr: "Source" },
      { en: "Tracker URL", fr: "URL du suivi" },
      { en: "Email", fr: "E-mail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Share Jobs): Referrer",
      fr: "Source Odoo Learn (Partager des emplois) : Référent",
    },
  }),
  complexQ({
    id: "hr-091",
    module: "hr",
    text: {
      en: "What method of sharing a job position is NOT available by default in Odoo? (Odoo Learn — Share Jobs)",
      fr: "Quelle méthode de partage d'un poste n'est PAS disponible par défaut dans Odoo ? (Odoo Learn — Partager des emplois)",
    },
    correct: {
      en: "QR codes",
      fr: "Codes QR",
    },
    distractors: [
      { en: "Referral campaigns", fr: "Campagnes de parrainage" },
      { en: "Posting to job boards", fr: "Publication sur des sites d'emploi" },
      { en: "Sharing on social media", fr: "Partage sur les réseaux sociaux" },
    ],
    explanation: {
      en: "Source Odoo Learn (Share Jobs): QR codes",
      fr: "Source Odoo Learn (Partager des emplois) : QR codes",
    },
  }),
  complexQ({
    id: "hr-092",
    module: "hr",
    text: {
      en: "Where can I find the ‘Publish on Job Board’ button? (Odoo Learn — Share Jobs)",
      fr: "Où puis-je trouver le bouton « Publier sur le Job Board » ? (Odoo Learn — Partager des emplois)",
    },
    correct: {
      en: "Navigating to the ‘Recruitment’ app, clicking on the three-dots in the upper-right corner of the job posting card, clicking ‘Configurations’, and it will appear in the top left.",
      fr: "Accédez à l'application « Recrutement », cliquez sur les trois points dans le coin supérieur droit de la carte d'offre d'emploi, cliquez sur « Configurations », et elle apparaîtra en haut à gauche.",
    },
    distractors: [
      { en: "Navigating to the ‘Recruitment’ app and clicking on the job position card.", fr: "Accédez à l'application « Recrutement » et cliquez sur la fiche de poste." },
      { en: "Navigating to the ‘Recruitment’ app, clicking on the three-dots in the upper-right corner, and clicking ‘Configurations’, and clicking on the ‘Job Boards’ tab.", fr: "Accédez à l'application « Recrutement », cliquez sur les trois points dans le coin supérieur droit, cliquez sur « Configurations », puis cliquez sur l'onglet « Job Boards »." },
      { en: "This button does not exist, I have to copy the link to the job position on the website, and paste it directly to the job board.", fr: "Ce bouton n'existe pas, je dois copier le lien vers le poste sur le site, et le coller directement sur le job board." },
    ],
    explanation: {
      en: "Source Odoo Learn (Share Jobs): Navigating to the ‘Recruitment’ app, clicking on the three-dots in the upper-right corner of the job posting card, clicking ‘Configurations’, and it will appear in the top left.",
      fr: "Source Odoo Learn (Partager des offres d'emploi) : accédez à l'application « Recrutement », cliquez sur les trois points dans le coin supérieur droit de la carte d'offre d'emploi, cliquez sur « Configurations », et elle apparaîtra en haut à gauche.",
    },
  }),
  complexQ({
    id: "hr-093",
    module: "hr",
    text: {
      en: "Where do I configure the referral point values? (Odoo Learn — Referral Points)",
      fr: "Où puis-je configurer les valeurs des points de référence ? (Odoo Learn — Points de référence)",
    },
    correct: {
      en: "In the Recruitment app",
      fr: "Dans l'application Recrutement",
    },
    distractors: [
      { en: "In the Referrals app", fr: "Dans l'application Parrainages" },
      { en: "In both the Referrals and Recruitment apps", fr: "Dans les applications de référencement et de recrutement" },
      { en: "They are not able to be modified", fr: "Ils ne peuvent pas être modifiés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Points): In the Recruitment app",
      fr: "Source Odoo Learn (Points de parrainage) : Dans l'application Recrutement",
    },
  }),
  complexQ({
    id: "hr-094",
    module: "hr",
    text: {
      en: "How many points does the ‘Second Interview’ phase earn, by default? (Odoo Learn — Referral Points)",
      fr: "Combien de points la phase « Deuxième entretien » rapporte-t-elle par défaut ? (Odoo Learn — Points de référence)",
    },
    correct: {
      en: "15 points",
      fr: "15 points",
    },
    distractors: [
      { en: "5 points", fr: "5 points" },
      { en: "10 points", fr: "10 points" },
      { en: "20 points", fr: "20 points" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Points): 15 points",
      fr: "Source Odoo Learn (Points de parrainage) : 15 points",
    },
  }),
  complexQ({
    id: "hr-095",
    module: "hr",
    text: {
      en: "What happens after I modify point values for a stage? (Odoo Learn — Referral Points)",
      fr: "Que se passe-t-il une fois que j'ai modifié les valeurs de points d'une étape ? (Odoo Learn — Points de référence)",
    },
    correct: {
      en: "All points earned for that stage are updated.",
      fr: "Tous les points gagnés pour cette étape sont mis à jour.",
    },
    distractors: [
      { en: "The point change is only reflected for the specific job position.", fr: "Le changement de points n'est reflété que pour le poste spécifique." },
      { en: "The point change only applies for new candidates that are not currently in the pipeline.", fr: "Le changement de points s'applique uniquement aux nouveaux candidats qui ne sont pas actuellement en attente." },
      { en: "Nothing changes, all points remain the same.", fr: "Rien ne change, tous les points restent les mêmes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Points): All points earned for that stage are updated.",
      fr: "Source Odoo Learn (Points de parrainage) : Tous les points gagnés pour cette étape sont mis à jour.",
    },
  }),
  complexQ({
    id: "hr-096",
    module: "hr",
    text: {
      en: "How can I add a reward? (Odoo Learn — Referral Rewards)",
      fr: "Comment puis-je ajouter une récompense ? (Odoo Learn — Récompenses de parrainage)",
    },
    correct: {
      en: "Navigating to ‘Configuration’ > ‘Rewards’ or click ‘Rewards’ on the dashboard’",
      fr: "Accédez à « Configuration » > « Récompenses » ou cliquez sur « Récompenses » sur le tableau de bord.",
    },
    distractors: [
      { en: "Navigate to ‘Rewards’ > ‘Products’", fr: "Accédez à « Récompenses » > « Produits »" },
      { en: "Navigate to the ‘Sales’ app and select ‘Products’", fr: "Accédez à l'application « Ventes » et sélectionnez « Produits »" },
      { en: "All rewards are preconfigured and new ones cannot be added", fr: "Toutes les récompenses sont préconfigurées et de nouvelles ne peuvent pas être ajoutées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Rewards): Navigating to ‘Configuration’ > ‘Rewards’ or click ‘Rewards’ on the dashboard’",
      fr: "Source Odoo Learn (Récompenses de parrainage) : Accédez à « Configuration » > « Récompenses » ou cliquez sur « Récompenses » sur le tableau de bord.",
    },
  }),
  complexQ({
    id: "hr-097",
    module: "hr",
    text: {
      en: "How can I tell if I can purchase a reward? (Odoo Learn — Referral Rewards)",
      fr: "Comment puis-je savoir si je peux acheter une récompense ? (Odoo Learn — Récompenses de parrainage)",
    },
    correct: {
      en: "A ‘Buy’ button appears on the reward card",
      fr: "Un bouton « Acheter » apparaît sur la carte de récompense",
    },
    distractors: [
      { en: "A ‘Purchase’ button appears on the reward card", fr: "Un bouton « Acheter » apparaît sur la carte de récompense" },
      { en: "A ‘Redeem’ button appears on the reward card", fr: "Un bouton « Échanger » apparaît sur la carte de récompense" },
      { en: "An ‘Add to Cart’ button appears on the reward card", fr: "Un bouton « Ajouter au panier » apparaît sur la carte de récompense" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Rewards): A ‘Buy’ button appears on the reward card",
      fr: "Source Odoo Learn (Récompenses de parrainage) : Un bouton « Acheter » apparaît sur la carte de récompense",
    },
  }),
  complexQ({
    id: "hr-098",
    module: "hr",
    text: {
      en: "What information is NOT on the ‘Rewards’ set configuration page? (Odoo Learn — Referral Rewards)",
      fr: "Quelles informations ne figurent PAS sur la page de configuration de l'ensemble « Récompenses » ? (Odoo Learn — Récompenses de parrainage)",
    },
    correct: {
      en: "Activities",
      fr: "Activités",
    },
    distractors: [
      { en: "Product Name", fr: "Nom du produit" },
      { en: "Cost", fr: "Coût" },
      { en: "Gift Responsible", fr: "Responsable du cadeau" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Rewards): Activities",
      fr: "Source Odoo Learn (Récompenses de parrainage) : Activités",
    },
  }),
  complexQ({
    id: "hr-099",
    module: "hr",
    text: {
      en: "How can I create an alert? (Odoo Learn — Referral Alerts)",
      fr: "Comment puis-je créer une alerte ? (Odoo Learn — Alertes de référence)",
    },
    correct: {
      en: "Navigate to ‘Configuration’ > ‘Alerts’",
      fr: "Accédez à « Configuration » > « Alertes »",
    },
    distractors: [
      { en: "Navigate to ‘Referrals’ > ‘Alerts’", fr: "Accédez à « Références » > « Alertes »" },
      { en: "Navigate to ‘Reporting’ > ‘Alerts’", fr: "Accédez à « Rapports » > « Alertes »" },
      { en: "Clicking ‘New’ on the ‘Referalls’ dashboard", fr: "En cliquant sur « Nouveau » sur le tableau de bord « Références »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Alerts): Navigate to ‘Configuration’ > ‘Alerts’",
      fr: "Source Odoo Learn (Alertes de parrainage) : Accédez à « Configuration » > « Alertes »",
    },
  }),
  complexQ({
    id: "hr-100",
    module: "hr",
    text: {
      en: "What is NOT an option for the ‘On Click’ section of an alert? (Odoo Learn — Referral Alerts)",
      fr: "Qu'est-ce qui n'est PAS une option pour la section « Au clic » d'une alerte ? (Odoo Learn — Alertes de référence)",
    },
    correct: {
      en: "Clickable",
      fr: "Cliquable",
    },
    distractors: [
      { en: "Not Clickable", fr: "Non cliquable" },
      { en: "Go to All Jobs", fr: "Aller à tous les emplois" },
      { en: "Specify URL", fr: "Spécifier l'URL" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Alerts): Clickable",
      fr: "Source Odoo Learn (Alertes de parrainage) : Cliquable",
    },
  }),
  complexQ({
    id: "hr-101",
    module: "hr",
    text: {
      en: "How can I let my employees know there is a new alert? (Odoo Learn — Referral Alerts)",
      fr: "Comment puis-je informer mes employés d’une nouvelle alerte ? (Odoo Learn — Alertes de référence)",
    },
    correct: {
      en: "Click ‘Send Mail’ on the alert form",
      fr: "Cliquez sur « Envoyer un courrier » sur le formulaire d'alerte",
    },
    distractors: [
      { en: "Click ‘Send Email’ on the alert form", fr: "Cliquez sur « Envoyer un e-mail » sur le formulaire d'alerte" },
      { en: "Click ‘Alert Employees’ on the alert form", fr: "Cliquez sur « Alerter les employés » sur le formulaire d'alerte" },
      { en: "Click ‘Email Employees’ on the alert form", fr: "Cliquez sur « Envoyer un e-mail aux employés » sur le formulaire d'alerte" },
    ],
    explanation: {
      en: "Source Odoo Learn (Referral Alerts): Click ‘Send Mail’ on the alert form",
      fr: "Source Odoo Learn (Alertes de parrainage) : Cliquez sur « Envoyer un courrier » sur le formulaire d'alerte",
    },
  }),
  complexQ({
    id: "hr-102",
    module: "hr",
    text: {
      en: "How many appraisals can an employee request per year? (Odoo Learn — Appraisals Basics)",
      fr: "Combien d’évaluations un salarié peut-il demander par an ? (Odoo Learn — Bases des évaluations)",
    },
    correct: {
      en: "It depends on the minimum time between appraisals.",
      fr: "Cela dépend du délai minimum entre les évaluations.",
    },
    distractors: [
      { en: "It depends on the appraisals reminder timer.", fr: "Cela dépend du minuteur de rappel des évaluations." },
      { en: "As many as they wish, without any restrictions.", fr: "Autant qu’ils le souhaitent, sans aucune restriction." },
      { en: "One.", fr: "Un." },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisals Basics): It depends on the minimum time between appraisals.",
      fr: "Source Odoo Learn (Bases des évaluations) : Cela dépend du temps minimum entre les évaluations.",
    },
  }),
  complexQ({
    id: "hr-103",
    module: "hr",
    text: {
      en: "Where can you modify the appraisal plan time frame? (Odoo Learn — Appraisals Basics)",
      fr: "Où pouvez-vous modifier le calendrier du plan d’évaluation ? (Odoo Learn — Bases des évaluations)",
    },
    correct: {
      en: "Under Configuration > Settings > Appraisal Plans.",
      fr: "Sous Configuration > Paramètres > Plans d'évaluation.",
    },
    distractors: [
      { en: "Appraisal plans cannot be modified.", fr: "Les plans d'évaluation ne peuvent pas être modifiés." },
      { en: "Through each employee’s appraisal request.", fr: "Grâce à la demande d’évaluation de chaque collaborateur." },
      { en: "Through the “goals” section.", fr: "Via la rubrique « objectifs »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisals Basics): Under Configuration > Settings > Appraisal Plans.",
      fr: "Source Odoo Learn (bases des évaluations) : sous Configuration > Paramètres > Plans d'évaluation.",
    },
  }),
  complexQ({
    id: "hr-104",
    module: "hr",
    text: {
      en: "What is the ‘Evaluation Scale’? (Odoo Learn — Appraisals Basics)",
      fr: "Qu’est-ce que « l’échelle d’évaluation » ? (Odoo Learn — Bases des évaluations)",
    },
    correct: {
      en: "The various results for an appraisal, such as ‘Needs Improvement’.",
      fr: "Les différents résultats d’une évaluation, tels que « Amélioration nécessaire ».",
    },
    distractors: [
      { en: "A list of goals for the employee.", fr: "Une liste d'objectifs pour l'employé." },
      { en: "The numerical scale for appraisal ratings, such as ‘5’.", fr: "L'échelle numérique pour les notes d'évaluation, telle que « 5 »." },
      { en: "There is no ‘Evaluation Scale’ in the Appraisals app.", fr: "Il n’y a pas d’« échelle d’évaluation » dans l’application Évaluations." },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisals Basics): The various results for an appraisal, such as ‘Needs Improvement’.",
      fr: "Source Odoo Learn (Bases des évaluations) : Les différents résultats d'une évaluation, tels que « Besoin d'amélioration ».",
    },
  }),
  complexQ({
    id: "hr-105",
    module: "hr",
    text: {
      en: "How can you collect feedback for an employee you’re appraising? (Odoo Learn — Conduct Appraisals)",
      fr: "Comment pouvez-vous recueillir des commentaires sur un employé que vous évaluez ? (Odoo Learn — Effectuer des évaluations)",
    },
    correct: {
      en: "Click the ‘Ask Feedback’ button on the appraisal form",
      fr: "Cliquez sur le bouton « Demander des commentaires » sur le formulaire d'évaluation.",
    },
    distractors: [
      { en: "This is not possible in Odoo", fr: "Ce n'est pas possible dans Odoo" },
      { en: "Feedback is automatically requested when an appraisal is created", fr: "Des commentaires sont automatiquement demandés lors de la création d’une évaluation" },
      { en: "Feedback is automatically requested when an appraisal is confirmed", fr: "Des commentaires sont automatiquement demandés lorsqu'une évaluation est confirmée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conduct Appraisals): Click the ‘Ask Feedback’ button on the appraisal form",
      fr: "Source Odoo Learn (Effectuer des évaluations) : cliquez sur le bouton « Demander des commentaires » sur le formulaire d'évaluation",
    },
  }),
  complexQ({
    id: "hr-106",
    module: "hr",
    text: {
      en: "Who can view what’s written in the ‘Private Note’ tab? (Odoo Learn — Conduct Appraisals)",
      fr: "Qui peut voir ce qui est écrit dans l’onglet « Note privée » ? (Odoo Learn — Effectuer des évaluations)",
    },
    correct: {
      en: "All managers",
      fr: "Tous les gérants",
    },
    distractors: [
      { en: "The employee’s team", fr: "L’équipe des salariés" },
      { en: "The employee and their manager", fr: "Le salarié et son manager" },
      { en: "The employee’s manager and the CEO", fr: "Le manager du salarié et le CEO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conduct Appraisals): All managers",
      fr: "Source Odoo Learn (Evaluations de conduite) : Tous les managers",
    },
  }),
  complexQ({
    id: "hr-107",
    module: "hr",
    text: {
      en: "After selecting an employee on an appraisal form, what is NOT autopopulated? (Odoo Learn — Conduct Appraisals)",
      fr: "Après avoir sélectionné un employé sur un formulaire d'évaluation, qu'est-ce qui n'est PAS renseigné automatiquement ? (Odoo Learn — Effectuer des évaluations)",
    },
    correct: {
      en: "Previous Rating",
      fr: "Note précédente",
    },
    distractors: [
      { en: "Appraisers", fr: "Évaluateurs" },
      { en: "Job", fr: "Emploi" },
      { en: "Appraisal Template", fr: "Modèle d'évaluation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Conduct Appraisals): Previous Rating",
      fr: "Source Odoo Learn (Evaluations de conduite) : Note précédente",
    },
  }),
  complexQ({
    id: "hr-108",
    module: "hr",
    text: {
      en: "Where can I find employee goals? (Odoo Learn — Appraisal Goals)",
      fr: "Où puis-je trouver les objectifs des employés ? (Odoo Learn — Objectifs d'évaluation)",
    },
    correct: {
      en: "Both A & B",
      fr: "A et B",
    },
    distractors: [
      { en: "On the employee’s appraisal form", fr: "Sur la fiche d’évaluation du salarié" },
      { en: "On the Goals dashboard", fr: "Sur le tableau de bord des objectifs" },
      { en: "Only on an appraisal form", fr: "Uniquement sur un formulaire d'évaluation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisal Goals): Both A & B",
      fr: "Source Odoo Learn (objectifs d'évaluation) : A et B",
    },
  }),
  complexQ({
    id: "hr-109",
    module: "hr",
    text: {
      en: "What is NOT a field on a goal form? (Odoo Learn — Appraisal Goals)",
      fr: "Qu'est-ce qui n'est PAS un champ sur un formulaire d'objectif ? (Odoo Learn — Objectifs d'évaluation)",
    },
    correct: {
      en: "Supervisor",
      fr: "Superviseur",
    },
    distractors: [
      { en: "Employee", fr: "Employé" },
      { en: "Manager", fr: "Directeur" },
      { en: "Deadline", fr: "Date limite" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisal Goals): Supervisor",
      fr: "Source Odoo Learn (Objectifs d'évaluation) : Superviseur",
    },
  }),
  complexQ({
    id: "hr-110",
    module: "hr",
    text: {
      en: "What happens when a goal is marked as done? (Odoo Learn — Appraisal Goals)",
      fr: "Que se passe-t-il lorsqu'un objectif est marqué comme atteint ? (Odoo Learn — Objectifs d'évaluation)",
    },
    correct: {
      en: "The ‘Progress’ changes to ‘100%’",
      fr: "Le « Progrès » devient « 100 % »",
    },
    distractors: [
      { en: "A red ‘Done’ banner appears on the goal form", fr: "Une bannière rouge « Terminé » apparaît sur le formulaire d'objectif" },
      { en: "The manager is sent an email about the goal completion", fr: "Le manager reçoit un e-mail concernant l'atteinte de l'objectif" },
      { en: "It is removed from the employee’s goals kanan view", fr: "Il est supprimé de la vue Kanan des objectifs de l’employé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisal Goals): The ‘Progress’ changes to ‘100%’",
      fr: "Source Odoo Learn (Objectifs d'évaluation) : Le « Progrès » passe à « 100 % »",
    },
  }),
  complexQ({
    id: "hr-111",
    module: "hr",
    text: {
      en: "What appraisal reports are available? (Odoo Learn — Appraisal Reporting)",
      fr: "Quels rapports d'évaluation sont disponibles ? (Odoo Learn — Rapport d'évaluation)",
    },
    correct: {
      en: "Appraisal Analysis and Skills Evolution",
      fr: "Analyse d’évaluation et évolution des compétences",
    },
    distractors: [
      { en: "Appraisal Schedule and Skills Evolution", fr: "Calendrier d’évaluation et évolution des compétences" },
      { en: "Appraisal Analysis, Skills, and Future Appraisals", fr: "Analyse d'évaluation, compétences et évaluations futures" },
      { en: "Skills Development and Appraisal Analysis", fr: "Analyse du développement et de l’évaluation des compétences" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisal Reporting): Appraisal Analysis and Skills Evolution",
      fr: "Source Odoo Learn (Rapport d'évaluation) : Analyse d'évaluation et évolution des compétences",
    },
  }),
  complexQ({
    id: "hr-112",
    module: "hr",
    text: {
      en: "What are the default groupings for the Appraisal Analysis report? (Odoo Learn — Appraisal Reporting)",
      fr: "Quels sont les regroupements par défaut pour le rapport Analyse d'évaluation ? (Odoo Learn — Rapport d'évaluation)",
    },
    correct: {
      en: "Month and Department",
      fr: "Mois et département",
    },
    distractors: [
      { en: "Month, Department, and Rating", fr: "Mois, département et note" },
      { en: "Month and Final Rating", fr: "Mois et note finale" },
      { en: "Employee, Month, and Rating", fr: "Employé, mois et note" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisal Reporting): Month and Department",
      fr: "Source Odoo Learn (Rapport d'évaluation) : Mois et Département",
    },
  }),
  complexQ({
    id: "hr-113",
    module: "hr",
    text: {
      en: "What does a skill listed in green indicate? (Odoo Learn — Appraisal Reporting)",
      fr: "Qu'indique une compétence répertoriée en vert ? (Odoo Learn — Rapport d'évaluation)",
    },
    correct: {
      en: "An increase in the skill level from the previous appraisal.",
      fr: "Une augmentation du niveau de compétence par rapport à l’évaluation précédente.",
    },
    distractors: [
      { en: "The skill level remained the same from the last appraisal.", fr: "Le niveau de compétence est resté le même que lors de la dernière évaluation." },
      { en: "The skill has increased for all employees overall in the past year.", fr: "Les compétences ont augmenté pour l’ensemble des employés au cours de la dernière année." },
      { en: "An increase in the number of employees with that skill from the previous time period.", fr: "Une augmentation du nombre d’employés possédant cette compétence par rapport à la période précédente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Appraisal Reporting): An increase in the skill level from the previous appraisal.",
      fr: "Source Odoo Learn (Rapport d'évaluation) : Une augmentation du niveau de compétence par rapport à l'évaluation précédente.",
    },
  }),
  complexQ({
    id: "hr-114",
    module: "hr",
    text: {
      en: "What does NOT appear on the Payroll Dashboard? (Odoo Learn — Payroll Basics)",
      fr: "Qu'est-ce qui n'apparaît PAS sur le tableau de bord de paie ? (Odoo Learn — Bases de la paie)",
    },
    correct: {
      en: "The Benefits Cost report",
      fr: "Le rapport sur les coûts des avantages",
    },
    distractors: [
      { en: "All payroll warnings", fr: "Tous les avertissements de paie" },
      { en: "The Employer Cost report", fr: "Le rapport sur les coûts pour l’employeur" },
      { en: "Recent payslip batches", fr: "Lots de fiches de paie récents" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Basics): The Benefits Cost report",
      fr: "Source Odoo Learn (Bases de la paie) : Le rapport sur les coûts des avantages sociaux",
    },
  }),
  complexQ({
    id: "hr-115",
    module: "hr",
    text: {
      en: "What rounding options are there for a work entry? (Odoo Learn — Payroll Basics)",
      fr: "Quelles sont les options d'arrondi disponibles pour une entrée de travail ? (Odoo Learn — Bases de la paie)",
    },
    correct: {
      en: "Half Day, Day, or No Rounding",
      fr: "Demi-journée, journée ou sans arrondi",
    },
    distractors: [
      { en: "Half Day, Day, Hour, or No Rounding.", fr: "Demi-journée, journée, heure ou sans arrondi." },
      { en: "Half Day, or Day", fr: "Demi-journée ou journée" },
      { en: "There are no rounding options; all work entries are entered, according to the logged time for the employee", fr: "Il n'y a pas d'options d'arrondi ; toutes les entrées de travail sont saisies, en fonction du temps enregistré pour l'employé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Basics): Half Day, Day, or No Rounding",
      fr: "Source Odoo Learn (Bases de la paie) : Demi-journée, journée ou sans arrondi",
    },
  }),
  complexQ({
    id: "hr-116",
    module: "hr",
    text: {
      en: "How does the ‘Flexible Hours’ field affect the Working Schedule form? (Odoo Learn — Payroll Basics)",
      fr: "Comment le champ « Horaires flexibles » affecte-t-il le formulaire d'horaire de travail ? (Odoo Learn — Bases de la paie)",
    },
    correct: {
      en: "All the working hours listed in the ‘Working Hours’ tab disappear",
      fr: "Toutes les heures de travail répertoriées dans l’onglet « Heures de travail » disparaissent",
    },
    distractors: [
      { en: "All the lunch breaks in the ‘Working Hours’ tab disappear, leaving the Morning and Afternoon shifts", fr: "Toutes les pauses déjeuner dans l'onglet « Heures de travail » disparaissent, laissant les équipes du matin et de l'après-midi." },
      { en: "The entries in the ‘Working Hours’ tab changes, displaying 24 hours available for each working day", fr: "Les entrées dans l'onglet « Heures de travail » changent, affichant 24 heures disponibles pour chaque jour ouvrable." },
      { en: "The ‘Work From’ and ‘Work To’ fields change for all entries in the ‘Working Hours’ tab", fr: "Les champs « Work From » et « Work To » changent pour toutes les entrées dans l'onglet « Heures de travail »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Basics): All the working hours listed in the ‘Working Hours’ tab disappear",
      fr: "Source Odoo Learn (Bases de la Paie) : Toutes les heures de travail listées dans l'onglet 'Heures de travail' disparaissent",
    },
  }),
  complexQ({
    id: "hr-117",
    module: "hr",
    text: {
      en: "Where can I find a list of salary structures? (Odoo Learn — Salary Configuration)",
      fr: "Où puis-je trouver une liste des structures salariales ? (Odoo Learn — Configuration des salaires)",
    },
    correct: {
      en: "‘Payroll’ app > ‘Configuration’ > ‘Structures’",
      fr: "Application « Paie » > « Configuration » > « Structures »",
    },
    distractors: [
      { en: "‘Payroll’ app > ‘Configuration’ > ‘Structure Types’", fr: "Application « Paie » > « Configuration » > « Types de structure »" },
      { en: "‘Payroll’ app > ‘Salaries’ > ‘Structure Types’", fr: "Application « Paie » > « Salaires » > « Types de structure »" },
      { en: "‘Payroll’ app > ‘Salaries’ > ‘Structures’", fr: "Application « Paie » > « Salaires » > « Structures »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Salary Configuration): ‘Payroll’ app > ‘Configuration’ > ‘Structures’",
      fr: "Source Odoo Learn (Configuration Salaire) : application « Paie » > « Configuration » > « Structures »",
    },
  }),
  complexQ({
    id: "hr-118",
    module: "hr",
    text: {
      en: "Are there any default ‘Structure Types’ in the ‘Payroll’ app? (Odoo Learn — Salary Configuration)",
      fr: "Existe-t-il des « Types de structure » ​​par défaut dans l'application « Paie » ? (Odoo Learn — Configuration des salaires)",
    },
    correct: {
      en: "Yes, ‘Worker’ and ‘Employee’",
      fr: "Oui, « Travailleur » et « Employé »",
    },
    distractors: [
      { en: "Yes, ‘Worker’ and ‘Intern’", fr: "Oui, « Travailleur » et « Stagiaire »" },
      { en: "Yes, ‘Worker’, ‘Employee’, and ‘Part-Time’", fr: "Oui, « Travailleur », « Employé » et « Temps partiel »" },
      { en: "No, all structure types must be configured.", fr: "Non, tous les types de structure doivent être configurés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Salary Configuration): Yes, ‘Worker’ and ‘Employee’",
      fr: "Source Odoo Learn (Configuration du salaire) : Oui, « Travailleur » et « Employé »",
    },
  }),
  complexQ({
    id: "hr-119",
    module: "hr",
    text: {
      en: "What is the main difference between the default ‘Worker’ and ‘Employee’ structure types? (Odoo Learn — Salary Configuration)",
      fr: "Quelle est la principale différence entre les types de structure par défaut « Travailleur » et « Employé » ? (Odoo Learn — Configuration des salaires)",
    },
    correct: {
      en: "The ‘Worker’ structure type calculates pay based on an hourly wage, and the ‘Employee’ structure type calculates pay based on a fixed salary.",
      fr: "Le type de structure « Travailleur » calcule la rémunération sur la base d'un salaire horaire et le type de structure « Employé » calcule la rémunération sur la base d'un salaire fixe.",
    },
    distractors: [
      { en: "The ‘Worker’ structure type calculates pay every week and the ‘Employee’ structure type calculates pay bi-weekly.", fr: "Le type de structure « Travailleur » calcule la paie chaque semaine et le type de structure « Employé » calcule la paie toutes les deux semaines." },
      { en: "The ‘Worker’ structure type is for employees who are not full-time, and the ‘Employee’ structure type is for full-time employees.", fr: "Le type de structure « Travailleur » est destiné aux employés qui ne sont pas à temps plein, et le type de structure « Employé » est destiné aux employés à temps plein." },
      { en: "The ‘Worker’ structure type has default working hours of ‘Flexible 40 hours/week’, and the ‘Employee’ structure type has default working hours of ‘Standard 40 hours/week’", fr: "Le type de structure « Travailleur » a des heures de travail par défaut de « Flexible 40 heures/semaine », et le type de structure « Employé » a des heures de travail par défaut de « Standard 40 heures/semaine »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Salary Configuration): The ‘Worker’ structure type calculates pay based on an hourly wage, and the ‘Employee’ structure type calculates pay based on a fixed salary.",
      fr: "Source Odoo Learn (Configuration du salaire) : Le type de structure « Travailleur » calcule la rémunération en fonction d'un salaire horaire et le type de structure « Employé » calcule la rémunération en fonction d'un salaire fixe.",
    },
  }),
  complexQ({
    id: "hr-120",
    module: "hr",
    text: {
      en: "What is the difference between a contract template and a PDF template? (Odoo Learn — Contract Templates)",
      fr: "Quelle est la différence entre un modèle de contrat et un modèle PDF ? (Odoo Learn — Modèles de contrat)",
    },
    correct: {
      en: "The contract template contains the financial details of the contract, and the PDF template is the contract that gets signed.",
      fr: "Le modèle de contrat contient les détails financiers du contrat et le modèle PDF est le contrat qui est signé.",
    },
    distractors: [
      { en: "The contract template is for individual employees to sign, and the PDF template is for managers to sign.", fr: "Le modèle de contrat doit être signé par les employés individuels, tandis que le modèle PDF est destiné aux gestionnaires." },
      { en: "The information on the contract template is automatically populated on the PDF template, and creates a new, customized PDF.", fr: "Les informations du modèle de contrat sont automatiquement renseignées sur le modèle PDF et créent un nouveau PDF personnalisé." },
      { en: "These are two different terms for the same DF document.", fr: "Ce sont deux termes différents pour le même document DF." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contract Templates): The contract template contains the financial details of the contract, and the PDF template is the contract that gets signed.",
      fr: "Source Odoo Learn (Modèles de contrat) : Le modèle de contrat contient les détails financiers du contrat et le modèle PDF est le contrat qui est signé.",
    },
  }),
  complexQ({
    id: "hr-121",
    module: "hr",
    text: {
      en: "What is in the ‘Signatories’ tab? (Odoo Learn — Contract Templates)",
      fr: "Que trouve-t-on dans l’onglet « Signataires » ? (Odoo Learn — Modèles de contrat)",
    },
    correct: {
      en: "The PDF templates used to create new contracts and update old ones.",
      fr: "Les modèles PDF utilisés pour créer de nouveaux contrats et mettre à jour les anciens.",
    },
    distractors: [
      { en: "A list of department managers who are allowed to sign contracts.", fr: "Une liste des chefs de service autorisés à signer des contrats." },
      { en: "A blank contract template with four signature fields that can be configured.", fr: "Un modèle de contrat vierge avec quatre champs de signature configurables." },
      { en: "A document repository with all previously signed contracts.", fr: "Un référentiel de documents avec tous les contrats précédemment signés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contract Templates): The PDF templates used to create new contracts and update old ones.",
      fr: "Source Odoo Learn (Modèles de contrat) : Les modèles PDF utilisés pour créer de nouveaux contrats et mettre à jour les anciens.",
    },
  }),
  complexQ({
    id: "hr-122",
    module: "hr",
    text: {
      en: "If I specify a department in the contract template, what does that do? (Odoo Learn — Contract Templates)",
      fr: "Si je précise un département dans le modèle de contrat, qu'est-ce que cela fait ? (Odoo Learn — Modèles de contrat)",
    },
    correct: {
      en: "Allows only that department to use the contract template.",
      fr: "Autorise uniquement ce service à utiliser le modèle de contrat.",
    },
    distractors: [
      { en: "Exclude that department from using the contract template.", fr: "Excluez ce service de l’utilisation du modèle de contrat." },
      { en: "Sets a limit on the number of contracts that can be created for that department.", fr: "Fixe une limite au nombre de contrats pouvant être créés pour ce service." },
      { en: "Automatically updates all contracts for employees of that department.", fr: "Met automatiquement à jour tous les contrats des employés de ce service." },
    ],
    explanation: {
      en: "Source Odoo Learn (Contract Templates): Allows only that department to use the contract template.",
      fr: "Source Odoo Learn (modèles de contrat) : permet uniquement à ce service d'utiliser le modèle de contrat.",
    },
  }),
  complexQ({
    id: "hr-123",
    module: "hr",
    text: {
      en: "What happens when I index a contract? (Odoo Learn — Employee Contracts)",
      fr: "Que se passe-t-il lorsque j'indexe un contrat ? (Odoo Learn — Contrats d'employés)",
    },
    correct: {
      en: "The salary is increased by a specific percentage.",
      fr: "Le salaire est augmenté d'un pourcentage spécifique.",
    },
    distractors: [
      { en: "The contract is deleted.", fr: "Le contrat est supprimé." },
      { en: "The employee record is archived, and the contract is canceled.", fr: "Le dossier du salarié est archivé et le contrat est résilié." },
      { en: "The old contracts are archived and cannot be accessed.", fr: "Les anciens contrats sont archivés et ne sont pas accessibles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Employee Contracts): The salary is increased by a specific percentage.",
      fr: "Source Odoo Learn (Contrats d'employés) : Le salaire est augmenté d'un pourcentage précis.",
    },
  }),
  complexQ({
    id: "hr-124",
    module: "hr",
    text: {
      en: "What happens when I click on a previous employee's version? (Odoo Learn — Employee Contracts)",
      fr: "Que se passe-t-il lorsque je clique sur la version d'un ancien employé ? (Odoo Learn — Contrats d'employés)",
    },
    correct: {
      en: "I see the employee record details for that specific point in time.",
      fr: "Je vois les détails du dossier de l'employé pour ce moment précis.",
    },
    distractors: [
      { en: "The employee record reverts to the selected version and deletes the newer versions.", fr: "L'enregistrement de l'employé revient à la version sélectionnée et supprime les versions les plus récentes." },
      { en: "The previous contract loads in a pop-up window so I can modify it.", fr: "Le contrat précédent se charge dans une fenêtre pop-up afin que je puisse le modifier." },
      { en: "The employee’s manager is alerted that a previous version was accessed.", fr: "Le manager du collaborateur est alerté qu’une version précédente a été consultée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Employee Contracts): I see the employee record details for that specific point in time.",
      fr: "Source Odoo Learn (Contrats d'employé) : Je vois les détails du dossier de l'employé pour ce moment précis.",
    },
  }),
  complexQ({
    id: "hr-125",
    module: "hr",
    text: {
      en: "What does the ‘indefinite’ field of the employee contract mean? (Odoo Learn — Employee Contracts)",
      fr: "Que signifie le champ « indéterminé » du contrat de travail ? (Odoo Learn — Contrats d'employés)",
    },
    correct: {
      en: "Their job position is permanent, meaning there is no set end date.",
      fr: "Leur poste est permanent, ce qui signifie qu’il n’y a pas de date de fin fixe.",
    },
    distractors: [
      { en: "The employee’s offer is valid indefinitely and will not expire.", fr: "L’offre de l’employé est valable indéfiniment et n’expirera pas." },
      { en: "The employee can work as many hours as they want; they are not restricted to the working hours.", fr: "Le salarié peut travailler autant d'heures qu'il le souhaite ; ils ne sont pas limités aux heures de travail." },
      { en: "The employee is allowed to work overtime.", fr: "Le salarié est autorisé à effectuer des heures supplémentaires." },
    ],
    explanation: {
      en: "Source Odoo Learn (Employee Contracts): Their job position is permanent, meaning there is no set end date.",
      fr: "Source Odoo Learn (Contrats d'employés) : Leur poste est permanent, ce qui signifie qu'il n'y a pas de date de fin définie.",
    },
  }),
  complexQ({
    id: "hr-126",
    module: "hr",
    text: {
      en: "Which of the following is NOT a salary attachment ‘Type’? (Odoo Learn — Salary Attachments)",
      fr: "Lequel des éléments suivants n’est PAS un « type » de saisie sur salaire ? (Odoo Learn — Attachements au salaire)",
    },
    correct: {
      en: "Allocation of Salary",
      fr: "Répartition du salaire",
    },
    distractors: [
      { en: "Child Support", fr: "Pension alimentaire pour enfants" },
      { en: "Assignment of Salary", fr: "Cession du salaire" },
      { en: "Attachment of Salary", fr: "Saisie du salaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Salary Attachments): Allocation of Salary",
      fr: "Source Odoo Learn (Pièces jointes au salaire) : Attribution du salaire",
    },
  }),
  complexQ({
    id: "hr-127",
    module: "hr",
    text: {
      en: "Where can I view all currently configured salary attachments? (Odoo Learn — Salary Attachments)",
      fr: "Où puis-je consulter toutes les pièces jointes au salaire actuellement configurées ? (Odoo Learn — Attachements au salaire)",
    },
    correct: {
      en: "‘Payroll’ app > ‘Contracts’ > ‘Salary Attachments’",
      fr: "Application « Paie » > « Contrats » > « Pièces jointes au salaire »",
    },
    distractors: [
      { en: "‘Payroll’ app > ‘Salary Attachments’", fr: "Application « Paie » > « Pièces jointes au salaire »" },
      { en: "‘Payroll’ app > ‘Configuration’ > ‘Salary Attachments’", fr: "Application « Paie » > « Configuration » > « Pièces jointes au salaire »" },
      { en: "‘Payroll’ app > ‘Contracts’ > ‘Salary Attachments’", fr: "Application « Paie » > « Contrats » > « Pièces jointes au salaire »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Salary Attachments): ‘Payroll’ app > ‘Contracts’ > ‘Salary Attachments’",
      fr: "Source Odoo Learn (Pièces jointes au salaire) : application « Paie » > « Contrats » > « Pièces jointes au salaire »",
    },
  }),
  complexQ({
    id: "hr-128",
    module: "hr",
    text: {
      en: "How can I create multiple salary attachments at the same time? (Odoo Learn — Salary Attachments)",
      fr: "Comment puis-je créer plusieurs saisies de salaire en même temps ? (Odoo Learn — Attachements au salaire)",
    },
    correct: {
      en: "On the salary attachment form, select the employees, and click the ‘Create Individual Attachments’ button",
      fr: "Sur le formulaire de saisie-salaire, sélectionnez les employés et cliquez sur le bouton « Créer des pièces jointes individuelles »",
    },
    distractors: [
      { en: "This is not possible, all salary attachments must be made  individually", fr: "Ce n'est pas possible, toutes les saisies sur salaire doivent être faites individuellement" },
      { en: "On the salary attachment form, select the employees, and click the ‘Multiple Attachments’ button", fr: "Sur le formulaire de saisie-salaire, sélectionnez les employés et cliquez sur le bouton « Pièces jointes multiples »." },
      { en: "On the salary attachment form, select the employees, and click the ‘Create Multiple Attachments’ button", fr: "Sur le formulaire de saisie-salaire, sélectionnez les employés et cliquez sur le bouton « Créer plusieurs pièces jointes »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Salary Attachments): On the salary attachment form, select the employees, and click the ‘Create Individual Attachments’ button",
      fr: "Source Odoo Learn (Pièces jointes au salaire) : Sur le formulaire de pièce jointe au salaire, sélectionnez les employés et cliquez sur le bouton « Créer des pièces jointes individuelles »",
    },
  }),
  complexQ({
    id: "hr-129",
    module: "hr",
    text: {
      en: "What appears on the ‘Work Entries’ dashboard, by default? (Odoo Learn — Work Entries)",
      fr: "Qu'est-ce qui apparaît par défaut sur le tableau de bord « Entrées de travail » ? (Odoo Learn — Entrées de travail)",
    },
    correct: {
      en: "Only work entries with conflicts",
      fr: "Ne travailler que les entrées avec des conflits",
    },
    distractors: [
      { en: "All work entries", fr: "Toutes les entrées de travail" },
      { en: "Only validated work entries", fr: "Seules les entrées de travaux validées" },
      { en: "Validated and unvalidated work entries", fr: "Entrées de travail validées et non validées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Entries): Only work entries with conflicts",
      fr: "Source Odoo Learn (Entrées de travail) : Seules les entrées de travail avec des conflits",
    },
  }),
  complexQ({
    id: "hr-130",
    module: "hr",
    text: {
      en: "How can I remove a conflicting work entry? (Odoo Learn — Work Entries)",
      fr: "Comment puis-je supprimer une entrée de travail en conflit ? (Odoo Learn — Entrées de travail)",
    },
    correct: {
      en: "Click the ‘Remove’ button on the work entry pop-up window",
      fr: "Cliquez sur le bouton « Supprimer » dans la fenêtre contextuelle de saisie du travail.",
    },
    distractors: [
      { en: "Click the ‘Discard’ button on the work entry pop-up window", fr: "Cliquez sur le bouton « Rejeter » dans la fenêtre contextuelle de saisie du travail." },
      { en: "Click the ‘Draft’ status button on the work entry pop-up window", fr: "Cliquez sur le bouton d'état « Brouillon » dans la fenêtre contextuelle de saisie du travail." },
      { en: "Click the ‘Validated’ stage button on the work entry pop-up window", fr: "Cliquez sur le bouton d'étape « Validé » dans la fenêtre contextuelle de saisie du travail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Entries): Click the ‘Remove’ button on the work entry pop-up window",
      fr: "Source Odoo Learn (Entrées de travail) : cliquez sur le bouton « Supprimer » dans la fenêtre contextuelle d'entrée de travail.",
    },
  }),
  complexQ({
    id: "hr-131",
    module: "hr",
    text: {
      en: "Where do work entry conflicts appear? (Odoo Learn — Work Entries)",
      fr: "Où apparaissent les conflits d’entrée au travail ? (Odoo Learn — Entrées de travail)",
    },
    correct: {
      en: "On the ‘Warnings’ card in the dashboard and on the ‘Work Entries’ dashboard",
      fr: "Sur la carte « Avertissements » du tableau de bord et sur le tableau de bord « Entrées de travail »",
    },
    distractors: [
      { en: "Only on the ‘Warnings’ card in the dashboard", fr: "Uniquement sur la carte « Avertissements » du tableau de bord" },
      { en: "Only on the ‘Work Entries’ dashboard", fr: "Uniquement sur le tableau de bord « Entrées de travail »" },
      { en: "Work Entry conflicts only appear in the ‘Attendances’ app", fr: "Les conflits d’entrée au travail n’apparaissent que dans l’application « Présences »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Entries): On the ‘Warnings’ card in the dashboard and on the ‘Work Entries’ dashboard",
      fr: "Source Odoo Learn (Work Entries) : Sur la fiche « Avertissements » du tableau de bord et sur le tableau de bord « Work Entries »",
    },
  }),
  complexQ({
    id: "hr-132",
    module: "hr",
    text: {
      en: "How can I create a new payslip? (Odoo Learn — Payslips)",
      fr: "Comment puis-je créer une nouvelle fiche de paie ? (Odoo Learn — Fiches de paie)",
    },
    correct: {
      en: "Both A and B",
      fr: "A et B",
    },
    distractors: [
      { en: "Click the ‘New’ button on the ‘Employee Payslips’ dashboard", fr: "Cliquez sur le bouton « Nouveau » sur le tableau de bord « Fiches de paie des employés »." },
      { en: "Click the ‘New’ button on the ‘Payslips To Pay’ dashboard", fr: "Cliquez sur le bouton « Nouveau » sur le tableau de bord « Fiches de paie à payer »." },
      { en: "Click the ‘New’ button on the ‘Batches’ dashboard", fr: "Cliquez sur le bouton « Nouveau » sur le tableau de bord « Lots »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payslips): Both A and B",
      fr: "Source Odoo Learn (fiches de paie) : A et B",
    },
  }),
  complexQ({
    id: "hr-133",
    module: "hr",
    text: {
      en: "When creating a new payslip, what fields auto-populate after the ‘Employee’ is selected? (Odoo Learn — Payslips)",
      fr: "Lors de la création d’une nouvelle fiche de paie, quels champs se remplissent automatiquement après la sélection de « Employé » ? (Odoo Learn — Fiches de paie)",
    },
    correct: {
      en: "The ‘Contract’ and ‘Structure’ fields",
      fr: "Les champs « Contrat » et « Structure »",
    },
    distractors: [
      { en: "The ‘Contract’ and ‘Batch’ fields", fr: "Les champs « Contrat » et « Lot »" },
      { en: "The ‘Structure’ and ‘Batch’ fields", fr: "Les champs « Structure » et « Lot »" },
      { en: "The ‘Structure’ and ‘Pay’ fields", fr: "Les champs « Structure » et « Paie »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payslips): The ‘Contract’ and ‘Structure’ fields",
      fr: "Source Odoo Learn (Files de paie) : Les champs « Contrat » et « Structure »",
    },
  }),
  complexQ({
    id: "hr-134",
    module: "hr",
    text: {
      en: "After clicking the ‘Work Entries’ smart button, how do the work entries appear? (Odoo Learn — Payslips)",
      fr: "Après avoir cliqué sur le bouton intelligent « Entrées de travail », comment les entrées de travail apparaissent-elles ? (Odoo Learn — Fiches de paie)",
    },
    correct: {
      en: "In the default monthly calendar view",
      fr: "Dans la vue du calendrier mensuel par défaut",
    },
    distractors: [
      { en: "In the default list view", fr: "Dans la vue de liste par défaut" },
      { en: "In the default weekly calendar view", fr: "Dans la vue du calendrier hebdomadaire par défaut" },
      { en: "In the default yearly list view", fr: "Dans la vue de liste annuelle par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payslips): In the default monthly calendar view",
      fr: "Source Odoo Learn (Fiches de paie) : Dans la vue du calendrier mensuel par défaut",
    },
  }),
  complexQ({
    id: "hr-135",
    module: "hr",
    text: {
      en: "What does the ‘Add Payslips’ button do? (Odoo Learn — Payroll Batches)",
      fr: "À quoi sert le bouton « Ajouter des fiches de paie » ? (Odoo Learn — Lots de paie)",
    },
    correct: {
      en: "Presents all created payslips not currently in a batch",
      fr: "Présente toutes les fiches de paie créées qui ne sont pas actuellement dans un lot",
    },
    distractors: [
      { en: "Presents all payslips in the database", fr: "Présente toutes les fiches de paie de la base de données" },
      { en: "Automatically adds all available payslips not currently in a batch", fr: "Ajoute automatiquement toutes les fiches de paie disponibles qui ne sont pas actuellement dans un lot" },
      { en: "Automatically adds all payslips in the database to the batch", fr: "Ajoute automatiquement au lot toutes les fiches de paie de la base de données" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Batches): Presents all created payslips not currently in a batch",
      fr: "Source Odoo Learn (Lots de Paie) : Présente toutes les fiches de paie créées qui ne sont pas actuellement dans un lot",
    },
  }),
  complexQ({
    id: "hr-136",
    module: "hr",
    text: {
      en: "What information is required when creating a batch? (Odoo Learn — Payroll Batches)",
      fr: "Quelles informations sont requises lors de la création d'un lot ? (Odoo Learn — Lots de paie)",
    },
    correct: {
      en: "The name of the batch and the time period the batch covers",
      fr: "Le nom du lot et la période couverte par le lot",
    },
    distractors: [
      { en: "The name of the batch, the time period the batch covers, and the payroll officer", fr: "Le nom du lot, la période couverte par le lot et le responsable de la paie" },
      { en: "The name of the batch and the number of payslips included in the batch", fr: "Le nom du lot et le nombre de fiches de paie incluses dans le lot" },
      { en: "Only the name of the batch", fr: "Uniquement le nom du lot" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Batches): The name of the batch and the time period the batch covers",
      fr: "Source Odoo Learn (Lots de Paie) : Le nom du lot et la période couverte par le lot",
    },
  }),
  complexQ({
    id: "hr-137",
    module: "hr",
    text: {
      en: "How do I create a batch? (Odoo Learn — Payroll Batches)",
      fr: "Comment créer un lot ? (Odoo Learn — Lots de paie)",
    },
    correct: {
      en: "Click the ‘New’ button on the batches dashboard",
      fr: "Cliquez sur le bouton « Nouveau » sur le tableau de bord des lots",
    },
    distractors: [
      { en: "Click the ‘New’ button on the batched card on the main Payroll dashboard", fr: "Cliquez sur le bouton « Nouveau » sur la carte groupée sur le tableau de bord principal de la paie." },
      { en: "Click the ‘Add A Batch’ button on the main Payroll dashboard", fr: "Cliquez sur le bouton « Ajouter un lot » sur le tableau de bord principal de la paie." },
      { en: "Click the ‘Add A Batch’ button on the batches dashboard", fr: "Cliquez sur le bouton « Ajouter un lot » sur le tableau de bord des lots" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Batches): Click the ‘New’ button on the batches dashboard",
      fr: "Source Odoo Learn (Lots de paie) : Cliquez sur le bouton « Nouveau » sur le tableau de bord des lots",
    },
  }),
  complexQ({
    id: "hr-138",
    module: "hr",
    text: {
      en: "What payroll report is NOT universal and standard for all databases? (Odoo Learn — Payroll Reporting)",
      fr: "Quel rapport de paie n'est PAS universel et standard pour toutes les bases de données ? (Odoo Learn — Rapports de paie)",
    },
    correct: {
      en: "ADP Report",
      fr: "Rapport ADP",
    },
    distractors: [
      { en: "Payroll Analysis", fr: "Analyse de la paie" },
      { en: "Headcount", fr: "Effectif" },
      { en: "Work Entry Analysis", fr: "Analyse d'entrée au travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Reporting): ADP Report",
      fr: "Source Odoo Learn (Reporting de paie) : Rapport ADP",
    },
  }),
  complexQ({
    id: "hr-139",
    module: "hr",
    text: {
      en: "What payroll report is blank, by default, and does not automatically populate with any data? (Odoo Learn — Payroll Reporting)",
      fr: "Quel rapport de paie est vide par défaut et ne contient automatiquement aucune donnée ? (Odoo Learn — Rapports de paie)",
    },
    correct: {
      en: "Headcount",
      fr: "Effectif",
    },
    distractors: [
      { en: "Payroll Analysis", fr: "Analyse de la paie" },
      { en: "W2 Report", fr: "Rapport W2" },
      { en: "Work Entry Analysis", fr: "Analyse d'entrée au travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Reporting): Headcount",
      fr: "Source Odoo Learn (Reporting de Paie) : Effectif",
    },
  }),
  complexQ({
    id: "hr-140",
    module: "hr",
    text: {
      en: "What information appears by default in the Work Entry Analysis report? (Odoo Learn — Payroll Reporting)",
      fr: "Quelles informations apparaissent par défaut dans le rapport Analyse des entrées de travail ? (Odoo Learn — Rapports de paie)",
    },
    correct: {
      en: "The current month’s validated work entries",
      fr: "Les entrées de travaux validées du mois en cours",
    },
    distractors: [
      { en: "The current quarter’s validated work entries", fr: "Les entrées de travaux validées du trimestre en cours" },
      { en: "The current year’s validated work entries", fr: "Les inscriptions de travaux validées de l’année en cours" },
      { en: "All validated work entries", fr: "Toutes les entrées de travaux validées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payroll Reporting): The current month’s validated work entries",
      fr: "Source Odoo Learn (Reporting Paie) : Les entrées de travail validées du mois en cours",
    },
  }),
  complexQ({
    id: "hr-141",
    module: "hr",
    text: {
      en: "What does activating the ‘Incoming Emails’ option in the ‘Settings’ menu do? (Odoo Learn — Email Expenses)",
      fr: "À quoi sert l’activation de l’option « E-mails entrants » dans le menu « Paramètres » ? (Odoo Learn — Dépenses par courrier électronique)",
    },
    correct: {
      en: "Allow expense records to be created by emailing a receipt to a specified email alias.",
      fr: "Autorisez la création d’enregistrements de dépenses en envoyant un reçu par courrier électronique à un alias de messagerie spécifié.",
    },
    distractors: [
      { en: "Allows expense records to be emailed to the employee", fr: "Permet d'envoyer par courrier électronique les relevés de dépenses à l'employé" },
      { en: "Allows expense reports to be emailed to the employee", fr: "Permet d'envoyer des notes de frais par courrier électronique à l'employé" },
      { en: "Allows the employee to create expense reports by emailing a specific email alias", fr: "Permet à l'employé de créer des notes de frais en envoyant par courrier électronique un alias de messagerie spécifique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Expenses): Allow expense records to be created by emailing a receipt to a specified email alias.",
      fr: "Source Odoo Learn (Dépenses par e-mail) : autorisez la création d'enregistrements de dépenses en envoyant un reçu par e-mail à un alias de messagerie spécifié.",
    },
  }),
  complexQ({
    id: "hr-142",
    module: "hr",
    text: {
      en: "To create an expense record, what must be in the email subject when emailing a receipt? (Odoo Learn — Email Expenses)",
      fr: "Pour créer un relevé de dépenses, que doit contenir l'objet de l'e-mail lors de l'envoi d'un reçu par e-mail ? (Odoo Learn — Dépenses par courrier électronique)",
    },
    correct: {
      en: "The ‘Reference’ for the expense category",
      fr: "La « Référence » pour la catégorie de dépenses",
    },
    distractors: [
      { en: "The name of the business", fr: "Le nom de l'entreprise" },
      { en: "The reason for the expense", fr: "La raison de la dépense" },
      { en: "The ‘Description’ of the expense", fr: "La « Description » de la dépense" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Expenses): The ‘Reference’ for the expense category",
      fr: "Source Odoo Learn (Email Expenses) : La « Référence » pour la catégorie de dépenses",
    },
  }),
  complexQ({
    id: "hr-143",
    module: "hr",
    text: {
      en: "Where can I find a list of currently configured expense categories? (Odoo Learn — Email Expenses)",
      fr: "Où puis-je trouver une liste des catégories de dépenses actuellement configurées ? (Odoo Learn — Dépenses par courrier électronique)",
    },
    correct: {
      en: "Navigating to ‘Configuration’ > ‘Expense Categories’",
      fr: "Accédez à « Configuration » > « Catégories de dépenses »",
    },
    distractors: [
      { en: "Navigating to ‘Configuration’ > ‘Settings’ > ‘Expense Categories’", fr: "Accédez à « Configuration » > « Paramètres » > « Catégories de dépenses »" },
      { en: "Navigating to ‘Settings’ > ‘Expense Categories’", fr: "Accédez à « Paramètres » > « Catégories de dépenses »" },
      { en: "Navigating to ‘My Expenses’ > ‘Expense Categories’", fr: "Accédez à « Mes dépenses » > « Catégories de dépenses »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Email Expenses): Navigating to ‘Configuration’ > ‘Expense Categories’",
      fr: "Source Odoo Learn (Dépenses par e-mail) : Accédez à « Configuration » > « Catégories de dépenses »",
    },
  }),
  complexQ({
    id: "hr-144",
    module: "hr",
    text: {
      en: "When uploading a receipt, what fields are configured if the receipt is digitized by Odoo? (Odoo Learn — Log Expenses)",
      fr: "Lors du téléchargement d'un reçu, quels champs sont configurés si le reçu est numérisé par Odoo ? (Odoo Learn — Consigner les dépenses)",
    },
    correct: {
      en: "The ‘Description’, ‘Category’, ‘Expense Date’, and ‘Total’.",
      fr: "La « Description », la « Catégorie », la « Date de dépense » et le « Total ».",
    },
    distractors: [
      { en: "Only the ‘Cost ’.", fr: "Seulement le « Coût »." },
      { en: "The ‘Expense Date’ and ‘Cost’.", fr: "La « Date de dépense » et le « Coût »." },
      { en: "Only the ‘Expense Date’.", fr: "Uniquement la « Date de dépense »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Log Expenses): The ‘Description’, ‘Category’, ‘Expense Date’, and ‘Total’.",
      fr: "Source Odoo Learn (Journal des dépenses) : la « Description », la « Catégorie », la « Date de la dépense » et le « Total ».",
    },
  }),
  complexQ({
    id: "hr-145",
    module: "hr",
    text: {
      en: "How can I create an expense record? (Odoo Learn — Log Expenses)",
      fr: "Comment puis-je créer un relevé de dépenses ? (Odoo Learn — Consigner les dépenses)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Clicking and dragging a receipt onto the main Expenses app dashboard", fr: "Cliquer et faire glisser un reçu sur le tableau de bord principal de l'application Dépenses" },
      { en: "Clicking the ‘Upload’ button on the main Expenses dashboard.", fr: "En cliquant sur le bouton « Télécharger » sur le tableau de bord principal des dépenses." },
      { en: "Manually creating an expense record with the ‘New’ button", fr: "Créer manuellement un enregistrement de dépenses avec le bouton « Nouveau »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Log Expenses): All of the above",
      fr: "Source Odoo Learn (Journal des dépenses) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "hr-146",
    module: "hr",
    text: {
      en: "When can an expense be split? (Odoo Learn — Log Expenses)",
      fr: "Quand une dépense peut-elle être fractionnée ? (Odoo Learn — Consigner les dépenses)",
    },
    correct: {
      en: "Only when the Expense Category has the ‘Cost’ field set to zero",
      fr: "Uniquement lorsque la catégorie de dépenses a le champ « Coût » défini sur zéro",
    },
    distractors: [
      { en: "Any expense can be split at any time", fr: "Toute dépense peut être fractionnée à tout moment" },
      { en: "Only when the expense is being split into two equal amounts.", fr: "Uniquement lorsque la dépense est divisée en deux montants égaux." },
      { en: "Expenses cannot be split, each expense must be entered separately.", fr: "Les dépenses ne peuvent pas être fractionnées, chaque dépense doit être saisie séparément." },
    ],
    explanation: {
      en: "Source Odoo Learn (Log Expenses): Only when the Expense Category has the ‘Cost’ field set to zero",
      fr: "Source Odoo Learn (Enregistrer les dépenses) : uniquement lorsque la catégorie de dépenses a le champ « Coût » défini sur zéro",
    },
  }),
  complexQ({
    id: "hr-147",
    module: "hr",
    text: {
      en: "How can I create an expense report from the ‘Expense Reports’ dashboard? (Odoo Learn — Expense Reports)",
      fr: "Comment puis-je créer une note de frais à partir du tableau de bord « Notes de frais » ? (Odoo Learn — Notes de frais)",
    },
    correct: {
      en: "Click the ‘New’ button",
      fr: "Cliquez sur le bouton « Nouveau »",
    },
    distractors: [
      { en: "Click the ‘Create Report’ button", fr: "Cliquez sur le bouton « Créer un rapport »" },
      { en: "Click the ‘Upload’ button", fr: "Cliquez sur le bouton « Télécharger »" },
      { en: "Click the ‘Create Report’ button", fr: "Cliquez sur le bouton « Créer un rapport »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Expense Reports): Click the ‘New’ button",
      fr: "Source Odoo Learn (Notes de frais) : Cliquez sur le bouton « Nouveau »",
    },
  }),
  complexQ({
    id: "hr-148",
    module: "hr",
    text: {
      en: "What populates the ‘Expense Report Summary’ field, by default? (Odoo Learn — Expense Reports)",
      fr: "Qu'est-ce qui remplit par défaut le champ « Récapitulatif des notes de frais » ? (Odoo Learn — Notes de frais)",
    },
    correct: {
      en: "The date range of all the attached receipts",
      fr: "La plage de dates de tous les reçus joints",
    },
    distractors: [
      { en: "The total cost of all the attached receipts", fr: "Le coût total de tous les reçus ci-joints" },
      { en: "The date range and total cost of all the attached receipts", fr: "La plage de dates et le coût total de tous les reçus joints" },
      { en: "The total of all the attached receipts and the employee's name", fr: "Le total de tous les reçus ci-joints et le nom de l'employé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Expense Reports): The date range of all the attached receipts",
      fr: "Source Odoo Learn (Notes de dépenses) : La plage de dates de tous les reçus joints",
    },
  }),
  complexQ({
    id: "hr-149",
    module: "hr",
    text: {
      en: "What does it indicate if an expense report appears in blue text? (Odoo Learn — Expense Reports)",
      fr: "Qu'est-ce que cela signifie si une note de frais apparaît en texte bleu ? (Odoo Learn — Notes de frais)",
    },
    correct: {
      en: "The expense report has not yet been submitted",
      fr: "La note de frais n'a pas encore été soumise",
    },
    distractors: [
      { en: "The expense report has been submitted", fr: "La note de frais a été soumise" },
      { en: "The expense report has been approved", fr: "La note de frais a été approuvée" },
      { en: "The expense report has been paid", fr: "La note de frais a été payée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Expense Reports): The expense report has not yet been submitted",
      fr: "Source Odoo Learn (Notes de frais) : La note de frais n'a pas encore été soumise",
    },
  }),
  complexQ({
    id: "hr-150",
    module: "hr",
    text: {
      en: "How can I view all the expense reports for my team? (Odoo Learn — Manage Expenses)",
      fr: "Comment consulter toutes les notes de frais de mon équipe ? (Odoo Learn — Gérer les dépenses)",
    },
    correct: {
      en: "Click ‘My Expenses’ > ‘Expense To Process’’ in the top menu.",
      fr: "Cliquez sur « Mes dépenses » > « Dépense à traiter » dans le menu supérieur.",
    },
    distractors: [
      { en: "They appear on the main Expenses app dashboard.", fr: "Ils apparaissent sur le tableau de bord principal de l'application Dépenses." },
      { en: "Click ‘Expense Reports’ in the top menu.", fr: "Cliquez sur « Notes de frais » dans le menu supérieur." },
      { en: "This is not possible; you can only view all expenses at once.", fr: "Ce n'est pas possible ; vous ne pouvez visualiser que toutes les dépenses en même temps." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Expenses): Click ‘My Expenses’ > ‘Expense To Process’’ in the top menu.",
      fr: "Source Odoo Learn (Gérer les dépenses) : Cliquez sur « Mes dépenses » > « Dépenses à traiter » dans le menu supérieur.",
    },
  }),
  complexQ({
    id: "hr-151",
    module: "hr",
    text: {
      en: "How can I reimburse employees for expenses? (Odoo Learn — Manage Expenses)",
      fr: "Comment puis-je rembourser les dépenses des employés ? (Odoo Learn — Gérer les dépenses)",
    },
    correct: {
      en: "Check, direct deposit, or in their paycheck.",
      fr: "Chèque, dépôt direct ou sur leur chèque de paie.",
    },
    distractors: [
      { en: "Cash only.", fr: "En espèces seulement." },
      { en: "Check only.", fr: "Vérifiez seulement." },
      { en: "Direct deposit, or in their paychecks, only.", fr: "Dépôt direct, ou sur leurs chèques de paie, uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Expenses): Check, direct deposit, or in their paycheck.",
      fr: "Source Odoo Learn (Gérer les dépenses) : Chèque, dépôt direct ou sur leur chèque de paie.",
    },
  }),
  complexQ({
    id: "hr-152",
    module: "hr",
    text: {
      en: "If I want to view approved expenses, how do I do that? (Odoo Learn — Manage Expenses)",
      fr: "Si je souhaite consulter les dépenses approuvées, comment dois-je procéder ? (Odoo Learn — Gérer les dépenses)",
    },
    correct: {
      en: "Click ‘Approved’ on the side menu on the ‘Expenses to Process’ dashboard.",
      fr: "Cliquez sur « Approuvé » dans le menu latéral du tableau de bord « Dépenses à traiter ».",
    },
    distractors: [
      { en: "All expenses, including approved expenses, appear on the main expenses dashboard.", fr: "Toutes les dépenses, y compris les dépenses approuvées, apparaissent sur le tableau de bord principal des dépenses." },
      { en: "Approved expenses cannot be viewed after being marked ‘Approved’.", fr: "Les dépenses approuvées ne peuvent pas être consultées après avoir été marquées « Approuvées »." },
      { en: "Click ‘Approved’ in the top menu.", fr: "Cliquez sur « Approuvé » dans le menu supérieur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Expenses): Click ‘Approved’ on the side menu on the ‘Expenses to Process’ dashboard.",
      fr: "Source Odoo Learn (Gérer les dépenses) : Cliquez sur « Approuvé » dans le menu latéral du tableau de bord « Dépenses à traiter ».",
    },
  }),
  complexQ({
    id: "hr-153",
    module: "hr",
    text: {
      en: "What must be enabled on the expense category to reinvoice an expense with a variable price? (Odoo Learn — Re-invoice Expenses)",
      fr: "Que faut-il activer sur la catégorie de dépense pour refacturer une dépense à prix variable ? (Odoo Learn — Refacturer les dépenses)",
    },
    correct: {
      en: "‘Re-Invoice Costs’ must be set to ‘At cost’",
      fr: "« Refacturer les coûts » doit être défini sur « Au coût »",
    },
    distractors: [
      { en: "‘Re-Invoice Costs’ must be set to ‘Sales Price", fr: "« Coûts de refacturation » doit être défini sur « Prix de vente" },
      { en: "‘Re-Invoice Costs’ must be set to ‘At cost’ or ‘Sales Price’", fr: "« Coûts de refacturation » doit être défini sur « Au prix coûtant » ou « Prix de vente »" },
      { en: "‘Re-Invoice Costs’ must be set to ‘No’", fr: "« Refacturer les coûts » doit être défini sur « Non »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Re-invoice Expenses): ‘Re-Invoice Costs’ must be set to ‘At cost’",
      fr: "Source Odoo Learn (Refacturer les dépenses) : « Refacturer les coûts » doit être défini sur « Au prix coûtant »",
    },
  }),
  complexQ({
    id: "hr-154",
    module: "hr",
    text: {
      en: "Where can I find reinvoiced expenses on a sales order? (Odoo Learn — Re-invoice Expenses)",
      fr: "Où puis-je trouver les dépenses refacturées sur une commande client ? (Odoo Learn — Refacturer les dépenses)",
    },
    correct: {
      en: "Expenses are listed in the ‘Order Lines’ tab of a sales order",
      fr: "Les dépenses sont répertoriées dans l'onglet « Lignes de commande » d'une commande client.",
    },
    distractors: [
      { en: "Expenses are listed in the ‘Other Info’ tab of a sales order", fr: "Les dépenses sont répertoriées dans l'onglet « Autres informations » d'une commande client." },
      { en: "Expenses are listed in the ‘Quote Builder’ tab of a sales order", fr: "Les dépenses sont répertoriées dans l'onglet « Devis Builder » d'une commande client." },
      { en: "Expenses do not appear on sales orders, only on invoices.", fr: "Les dépenses n'apparaissent pas sur les commandes clients, uniquement sur les factures." },
    ],
    explanation: {
      en: "Source Odoo Learn (Re-invoice Expenses): Expenses are listed in the ‘Order Lines’ tab of a sales order",
      fr: "Source Odoo Learn (Refacturer les dépenses) : Les dépenses sont répertoriées dans l'onglet « Lignes de commande » d'une commande client",
    },
  }),
  complexQ({
    id: "hr-155",
    module: "hr",
    text: {
      en: "When do re-invoiced expenses appear on a sales order? (Odoo Learn — Re-invoice Expenses)",
      fr: "Quand les dépenses refacturées apparaissent-elles sur une commande client ? (Odoo Learn — Refacturer les dépenses)",
    },
    correct: {
      en: "When the status of the Expense Report is ‘Posted’",
      fr: "Lorsque le statut de la note de frais est « Validé »",
    },
    distractors: [
      { en: "When the status of the Expense Report is ‘Approved’", fr: "Lorsque le statut de la note de frais est « Approuvé »" },
      { en: "When the status of the Expense Report is ‘To Submit’", fr: "Lorsque le statut de la note de frais est « À soumettre »" },
      { en: "When the status of the Expense Report is ‘Submitted’", fr: "Lorsque le statut de la note de frais est « Soumis »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Re-invoice Expenses): When the status of the Expense Report is ‘Posted’",
      fr: "Source Odoo Learn (Refacturer les dépenses) : Lorsque le statut de la note de frais est « Publié »",
    },
  }),
  complexQ({
    id: "hr-156",
    module: "hr",
    text: {
      en: "What do I need to create and use expense cards? (Odoo Learn — Create Expenses Cards)",
      fr: "De quoi ai-je besoin pour créer et utiliser des cartes de dépenses ? (Odoo Learn — Créer des cartes de dépenses)",
    },
    correct: {
      en: "A Stripe account, and the Odoo Expenses, Accounting, and Invoicing apps",
      fr: "Un compte Stripe et les applications Odoo Expenses, Accounting et Invoicing",
    },
    distractors: [
      { en: "The Odoo Expenses, Accounting, and Purchasing apps", fr: "Les applications Odoo Dépenses, Comptabilité et Achats" },
      { en: "A Stripe account, and the Odoo Expenses  and Sales app", fr: "Un compte Stripe et l'application Odoo Expenses and Sales" },
      { en: "The Odoo Expenses, Accounting, and Invoicing apps", fr: "Les applications Odoo Dépenses, Comptabilité et Facturation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Expenses Cards): A Stripe account, and the Odoo Expenses, Accounting, and Invoicing apps",
      fr: "Source Odoo Learn (Créer des cartes de dépenses) : Un compte Stripe et les applications Odoo Expenses, Accounting et Invoicing",
    },
  }),
  complexQ({
    id: "hr-157",
    module: "hr",
    text: {
      en: "What does the ‘per All time’ field do? (Odoo Learn — Create Expenses Cards)",
      fr: "À quoi sert le champ « Par tout le temps » ? (Odoo Learn — Créer des cartes de dépenses)",
    },
    correct: {
      en: "Sets a total maximum amount for the card",
      fr: "Fixe un montant total maximum pour la carte",
    },
    distractors: [
      { en: "Sets an individual transaction amount limit", fr: "Fixe une limite de montant de transaction individuelle" },
      { en: "Sets a maximum amount for the employee for the calendar year", fr: "Fixe un montant maximum pour l'employé pour l'année civile" },
      { en: "Sets a limit on a specific category of expense", fr: "Fixe une limite sur une catégorie spécifique de dépenses" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Expenses Cards): Sets a total maximum amount for the card",
      fr: "Source Odoo Learn (Créer des cartes de dépenses) : définit un montant total maximum pour la carte",
    },
  }),
  complexQ({
    id: "hr-158",
    module: "hr",
    text: {
      en: "What kinds of cards can I create? (Odoo Learn — Create Expenses Cards)",
      fr: "Quels types de cartes puis-je créer ? (Odoo Learn — Créer des cartes de dépenses)",
    },
    correct: {
      en: "Physical and virtual cards",
      fr: "Cartes physiques et virtuelles",
    },
    distractors: [
      { en: "Physical and restricted cards", fr: "Cartes physiques et restreintes" },
      { en: "Virtual cards only", fr: "Cartes virtuelles uniquement" },
      { en: "Physical and temporary cards", fr: "Cartes physiques et temporaires" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Expenses Cards): Physical and virtual cards",
      fr: "Source Odoo Learn (Créer des cartes de dépenses) : Cartes physiques et virtuelles",
    },
  }),
  complexQ({
    id: "hr-159",
    module: "hr",
    text: {
      en: "What does a striped time off entry on the dashboard indicate? (Odoo Learn — Time Off Basics)",
      fr: "Qu'indique une entrée de congé rayée sur le tableau de bord ? (Odoo Learn — Notions de base sur les congés)",
    },
    correct: {
      en: "A time off request that is waiting for approval",
      fr: "Une demande de congé en attente d'approbation",
    },
    distractors: [
      { en: "A time off request that has been approved", fr: "Une demande de congé qui a été approuvée" },
      { en: "A time off request that has been refused", fr: "Une demande de congé refusée" },
      { en: "A time off request for more time than the user has available", fr: "Une demande de congé pour plus de temps que ce dont l'utilisateur dispose" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Basics): A time off request that is waiting for approval",
      fr: "Source Odoo Learn (Time Off Basics) : Une demande de congé en attente d'approbation",
    },
  }),
  complexQ({
    id: "hr-160",
    module: "hr",
    text: {
      en: "Where can an allocation for more time off be requested? (Odoo Learn — Time Off Basics)",
      fr: "Où peut-on demander une allocation pour des congés supplémentaires ? (Odoo Learn — Notions de base sur les congés)",
    },
    correct: {
      en: "Both A and C",
      fr: "A et C",
    },
    distractors: [
      { en: "From the My Time dashboard", fr: "Depuis le tableau de bord My Time" },
      { en: "From the My Time Off dashboard", fr: "Depuis le tableau de bord Mes congés" },
      { en: "From the My Allocations dashboard", fr: "Depuis le tableau de bord Mes allocations" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Basics): Both A and C",
      fr: "Source Odoo Learn (bases des congés) : A et C",
    },
  }),
  complexQ({
    id: "hr-161",
    module: "hr",
    text: {
      en: "What information is NOT on the ‘Hours Available’ pop-up window? (Odoo Learn — Time Off Basics)",
      fr: "Quelles informations ne figurent PAS dans la fenêtre contextuelle « Heures disponibles » ? (Odoo Learn — Notions de base sur les congés)",
    },
    correct: {
      en: "The amount of refused time off",
      fr: "Le montant des congés refusés",
    },
    distractors: [
      { en: "The amount of approved time off", fr: "Le montant des congés approuvés" },
      { en: "The amount of available time off", fr: "Le nombre de congés disponibles" },
      { en: "The amount of allocated time off", fr: "Le montant des congés alloués" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Basics): The amount of refused time off",
      fr: "Source Odoo Learn (Time Off Basics) : Le montant des congés refusés",
    },
  }),
  complexQ({
    id: "hr-162",
    module: "hr",
    text: {
      en: "Where can I find the currently configured time off types? (Odoo Learn — Time Off Types)",
      fr: "Où puis-je trouver les types de congés actuellement configurés ? (Odoo Learn — Types de congés)",
    },
    correct: {
      en: "Navigating to ‘Time Off’ app > ‘Configuration’ > ‘Time Off Types’",
      fr: "Accédez à l'application « Congés » > « Configuration » > « Types de congés »",
    },
    distractors: [
      { en: "Navigating to ‘Time Off’ app > ‘Management’ > ‘Time Off Types’", fr: "Accédez à l'application « Congés » > « Gestion » > « Types de congés »" },
      { en: "Navigating to ‘Time Off’ app > ‘Settings’ > ‘Time Off Types’", fr: "Accédez à l'application « Congés » > « Paramètres » > « Types de congés »" },
      { en: "Navigating to ‘Time Off’ app > ‘Overview’ > ‘Time Off Types’", fr: "Accédez à l'application « Congés » > « Présentation » > « Types de congés »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Types): Navigating to ‘Time Off’ app > ‘Configuration’ > ‘Time Off Types’",
      fr: "Source Odoo Learn (Types de congés) : Accédez à l'application « Congés » > « Configuration » > « Types de congés »",
    },
  }),
  complexQ({
    id: "hr-163",
    module: "hr",
    text: {
      en: "What options exist for the ‘Count As’ field on the ’Time Off Type’ form? (Odoo Learn — Time Off Types)",
      fr: "Quelles options existent pour le champ « Compter pour » sur le formulaire « Type de congé » ? (Odoo Learn — Types de congés)",
    },
    correct: {
      en: "‘Absence’ and ‘Worked Time’",
      fr: "« Absence » et « Temps de travail »",
    },
    distractors: [
      { en: "‘Worked Time’ and ‘Non-Worked Time’", fr: "« Temps travaillé » et « Temps non travaillé »" },
      { en: "‘Unpaid’ and “Paid’", fr: "« Non payé » et « Payé »" },
      { en: "‘Absence’ and ‘Present’", fr: "« Absence » et « Présent »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Types): ‘Absence’ and ‘Worked Time’",
      fr: "Source Odoo Learn (Types de congés) : « Absence » et « Temps travaillé »",
    },
  }),
  complexQ({
    id: "hr-164",
    module: "hr",
    text: {
      en: "Which selection is NOT an option in the ’Approval’ field? (Odoo Learn — Time Off Types)",
      fr: "Quelle sélection n’est PAS une option dans le champ « Approbation » ? (Odoo Learn — Types de congés)",
    },
    correct: {
      en: "By Employee’s Manager",
      fr: "Par le responsable de l'employé",
    },
    distractors: [
      { en: "By Employee’s Approver", fr: "Par l’approbateur de l’employé" },
      { en: "By Time Off Officer", fr: "Par agent de congés" },
      { en: "By Employee’s Approver and Time Off Officer", fr: "Par l’approbateur de l’employé et l’agent des congés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Types): By Employee’s Manager",
      fr: "Source Odoo Learn (Types de congés) : par le responsable de l'employé",
    },
  }),
  complexQ({
    id: "hr-165",
    module: "hr",
    text: {
      en: "When does the ‘Milestone Transition’ field appear? (Odoo Learn — Accrual Plans)",
      fr: "Quand le champ « Jalon de transition » apparaît-il ? (Odoo Learn — Plans d'accumulation)",
    },
    correct: {
      en: "When two rules are created",
      fr: "Lorsque deux règles sont créées",
    },
    distractors: [
      { en: "When a rule is created", fr: "Lorsqu'une règle est créée" },
      { en: "When three rules are created", fr: "Quand trois règles sont créées" },
      { en: "This field is always present", fr: "Ce champ est toujours présent" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accrual Plans): When two rules are created",
      fr: "Source Odoo Learn (Plans d'accumulation) : Lorsque deux règles sont créées",
    },
  }),
  complexQ({
    id: "hr-166",
    module: "hr",
    text: {
      en: "What are the possible sources for a milestone that accrues hourly? (Odoo Learn — Accrual Plans)",
      fr: "Quelles sont les sources possibles d’un jalon qui s’accumule toutes les heures ? (Odoo Learn — Plans d'accumulation)",
    },
    correct: {
      en: "Attendances and Calendar",
      fr: "Présences et calendrier",
    },
    distractors: [
      { en: "Attendances and Timesheets", fr: "Présences et feuilles de temps" },
      { en: "Calendar and Working Schedules", fr: "Calendrier et horaires de travail" },
      { en: "Timesheets and Working Schedules", fr: "Feuilles de temps et horaires de travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accrual Plans): Attendances and Calendar",
      fr: "Source Odoo Learn (Plans d'accumulation) : Présences et calendrier",
    },
  }),
  complexQ({
    id: "hr-167",
    module: "hr",
    text: {
      en: "Where can I find the currently configured accrual plans? (Odoo Learn — Accrual Plans)",
      fr: "Où puis-je trouver les plans d'accumulation actuellement configurés ? (Odoo Learn — Plans d'accumulation)",
    },
    correct: {
      en: "Configuration > Accrual Plans",
      fr: "Configuration > Plans d'accumulation",
    },
    distractors: [
      { en: "Settings > Accrual Plans", fr: "Paramètres > Plans d'accumulation" },
      { en: "Configuration > Time Off > Accrual Plans", fr: "Configuration > Congés > Plans d'accumulation" },
      { en: "Management > Accrual Plans", fr: "Gestion > Plans de régularisation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Accrual Plans): Configuration > Accrual Plans",
      fr: "Source Odoo Learn (Plans d'accumulation) : Configuration > Plans d'accumulation",
    },
  }),
  complexQ({
    id: "hr-168",
    module: "hr",
    text: {
      en: "How can I view time off requests that are waiting for my approval? (Odoo Learn — Time Off Management)",
      fr: "Comment puis-je consulter les demandes de congés en attente d'approbation ? (Odoo Learn — Gestion des congés)",
    },
    correct: {
      en: "Click ‘Management’ > ‘Time off’",
      fr: "Cliquez sur « Gestion » > « Congés »",
    },
    distractors: [
      { en: "Click ‘Overview’ > ‘Approvals’", fr: "Cliquez sur « Aperçu » > « Approbations »" },
      { en: "Click ‘Management’ > ‘Approvals’", fr: "Cliquez sur « Gestion » > « Approbations »" },
      { en: "Click ‘Overview’ > ‘Time off’", fr: "Cliquez sur « Aperçu » > « Congés »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Management): Click ‘Management’ > ‘Time off’",
      fr: "Source Odoo Learn (Gestion des congés) : Cliquez sur « Gestion » > « Congés »",
    },
  }),
  complexQ({
    id: "hr-169",
    module: "hr",
    text: {
      en: "How are time off requests approved? (Odoo Learn — Time Off Management)",
      fr: "Comment les demandes de congés sont-elles approuvées ? (Odoo Learn — Gestion des congés)",
    },
    correct: {
      en: "All requests are either automatically approved or require one or two approvals.",
      fr: "Toutes les demandes sont soit automatiquement approuvées, soit nécessitent une ou deux approbations.",
    },
    distractors: [
      { en: "All requests require two approvals.", fr: "Toutes les demandes nécessitent deux approbations." },
      { en: "All requests are automatically approved.", fr: "Toutes les demandes sont automatiquement approuvées." },
      { en: "All requests require either one or two approvals.", fr: "Toutes les demandes nécessitent une ou deux approbations." },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Management): All requests are either automatically approved or require one or two approvals.",
      fr: "Source Odoo Learn (Gestion des congés) : Toutes les demandes sont soit automatiquement approuvées, soit nécessitent une ou deux approbations.",
    },
  }),
  complexQ({
    id: "hr-170",
    module: "hr",
    text: {
      en: "What ‘Mode’ is not an option on the ‘Multiple Requests’ allocation form? (Odoo Learn — Time Off Management)",
      fr: "Quel « Mode » n'est pas une option sur le formulaire d'allocation « Demandes multiples » ? (Odoo Learn — Gestion des congés)",
    },
    correct: {
      en: "By Working Schedule",
      fr: "Par horaire de travail",
    },
    distractors: [
      { en: "By Employee", fr: "Par employé" },
      { en: "By Company", fr: "Par entreprise" },
      { en: "By Department", fr: "Par département" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Management): By Working Schedule",
      fr: "Source Odoo Learn (Gestion des congés) : par horaire de travail",
    },
  }),
  complexQ({
    id: "hr-171",
    module: "hr",
    text: {
      en: "What is the default view of the ‘By Type’ ‘Time Off’ report? (Odoo Learn — Time Off Reporting)",
      fr: "Quelle est la vue par défaut du rapport « Par type » « Congés » ? (Odoo Learn — Rapports sur les congés)",
    },
    correct: {
      en: "Bar Chart",
      fr: "Graphique à barres",
    },
    distractors: [
      { en: "Pie Chart", fr: "Graphique circulaire" },
      { en: "Line Chart", fr: "Graphique linéaire" },
      { en: "Pivot Table", fr: "Tableau croisé dynamique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Reporting): Bar Chart",
      fr: "Source Odoo Learn (Rapports sur les congés) : graphique à barres",
    },
  }),
  complexQ({
    id: "hr-172",
    module: "hr",
    text: {
      en: "How can you see the detailed time off balances for all employees? (Odoo Learn — Time Off Reporting)",
      fr: "Comment pouvez-vous voir les soldes détaillés des congés de tous les employés ? (Odoo Learn — Rapports sur les congés)",
    },
    correct: {
      en: "Navigating to ‘Reporting’ > ‘Balance’",
      fr: "Accédez à « Reporting » > « Solde »",
    },
    distractors: [
      { en: "Navigating to ‘Reporting’ > ‘Employee Balance Report’", fr: "Accédez à « Rapports » > « Rapport sur le solde des employés »" },
      { en: "Navigating to ‘Reporting’ > ‘by Employee’", fr: "Accédez à « Rapports » > « par employé »" },
      { en: "Navigating to ‘Reporting’ > ‘Unused Time Off’", fr: "Accédez à « Rapports » > « Congés non utilisés »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Reporting): Navigating to ‘Reporting’ > ‘Balance’",
      fr: "Source Odoo Learn (Rapports sur les congés) : Accédez à « Rapports » > « Solde »",
    },
  }),
  complexQ({
    id: "hr-173",
    module: "hr",
    text: {
      en: "3. Which is NOT a default report available in the ‘Time Off’ app? (Odoo Learn — Time Off Reporting)",
      fr: "3. Lequel n'est PAS un rapport par défaut disponible dans l'application « Congés » ? (Odoo Learn — Rapports sur les congés)",
    },
    correct: {
      en: "Expired",
      fr: "Expiré",
    },
    distractors: [
      { en: "By Employee", fr: "Par employé" },
      { en: "By Type", fr: "Par type" },
      { en: "Balance", fr: "Équilibre" },
    ],
    explanation: {
      en: "Source Odoo Learn (Time Off Reporting): Expired",
      fr: "Source Odoo Learn (Rapport de congés) : Expiré",
    },
  }),
  complexQ({
    id: "hr-174",
    module: "hr",
    text: {
      en: "What information is NOT displayed on a Frontdesk card in the Frontdesk dashboard? (Odoo Learn — Frontdesk Basics)",
      fr: "Quelles informations ne sont PAS affichées sur une carte Frontdesk dans le tableau de bord Frontdesk ? (Odoo Learn — Bases de la réception)",
    },
    correct: {
      en: "The time of the last visitor Check-Out",
      fr: "L'heure du dernier visiteur",
    },
    distractors: [
      { en: "How many visitors are currently On Site", fr: "Combien de visiteurs sont actuellement sur le site" },
      { en: "How many visitors are Planned", fr: "Combien de visiteurs sont prévus" },
      { en: "The time of the last visitor Check-In", fr: "L’heure du dernier visiteur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Frontdesk Basics): The time of the last visitor Check-Out",
      fr: "Source Odoo Learn (Bases de Frontdesk) : L'heure du dernier visiteur au départ",
    },
  }),
  complexQ({
    id: "hr-175",
    module: "hr",
    text: {
      en: "Can a rectangular image be uploaded on a Drink form? (Odoo Learn — Frontdesk Basics)",
      fr: "Une image rectangulaire peut-elle être téléchargée sur un formulaire de boisson ? (Odoo Learn — Bases de la réception)",
    },
    correct: {
      en: "Yes, but Odoo will distort the photo to make it square",
      fr: "Oui, mais Odoo va déformer la photo pour la rendre carrée",
    },
    distractors: [
      { en: "Yes, but Odoo will shrink it, so the longest side is no more than 250 pixels", fr: "Oui, mais Odoo le réduira, donc le côté le plus long ne dépasse pas 250 pixels" },
      { en: "No, Odoo only accepts square-shaped images", fr: "Non, Odoo n'accepte que les images de forme carrée" },
      { en: "No images can be added to a Drink form", fr: "Aucune image ne peut être ajoutée à un formulaire de boisson" },
    ],
    explanation: {
      en: "Source Odoo Learn (Frontdesk Basics): Yes, but Odoo will distort the photo to make it square",
      fr: "Source Odoo Learn (Bases de Frontdesk) : Oui, mais Odoo déformera la photo pour la rendre carrée",
    },
  }),
  complexQ({
    id: "hr-176",
    module: "hr",
    text: {
      en: "How can people be notified that a visitor checked-in to see them? (Odoo Learn — Frontdesk Basics)",
      fr: "Comment les gens peuvent-ils être avertis qu’un visiteur s’est enregistré pour les voir ? (Odoo Learn — Bases de la réception)",
    },
    correct: {
      en: "By email, SMS, or Discuss",
      fr: "Par email, SMS ou Discutez",
    },
    distractors: [
      { en: "Only with the Discuss app", fr: "Uniquement avec l'application Discuss" },
      { en: "Only by email", fr: "Uniquement par email" },
      { en: "Notifications are only for drinks", fr: "Les notifications concernent uniquement les boissons" },
    ],
    explanation: {
      en: "Source Odoo Learn (Frontdesk Basics): By email, SMS, or Discuss",
      fr: "Source Odoo Learn (bases de Frontdesk) : par e-mail, SMS ou discussion",
    },
  }),
  complexQ({
    id: "hr-177",
    module: "hr",
    text: {
      en: "How do I add a planned visitor to a frontdesk? (Odoo Learn — Frontdesk Management)",
      fr: "Comment ajouter un visiteur planifié à une réception ? (Odoo Learn — Gestion de la réception)",
    },
    correct: {
      en: "Going to the ‘Frontdesk’ app and clicking ‘New’ either on the main dashboard, a station dashboard, or the visitor list.",
      fr: "Accédez à l'application « Frontdesk » et cliquez sur « Nouveau » soit sur le tableau de bord principal, sur le tableau de bord d'une gare ou sur la liste des visiteurs.",
    },
    distractors: [
      { en: "Going to the ‘Frontdesk’ app and clicking on the station, then clicking the ‘Visitor’ button.", fr: "Accédez à l'application « Frontdesk » et cliquez sur la station, puis cliquez sur le bouton « Visiteur »." },
      { en: "Going to the ‘Frontdesk’ app and clicking on the ‘Visitor’ button.", fr: "Accédez à l’application « Frontdesk » et cliquez sur le bouton « Visiteur »." },
      { en: "It is not possible to add a future planned visitor.", fr: "Il n'est pas possible d'ajouter un futur visiteur prévu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Frontdesk Management): Going to the ‘Frontdesk’ app and clicking ‘New’ either on the main dashboard, a station dashboard, or the visitor list.",
      fr: "Source Odoo Learn (Gestion du Frontdesk) : Accédez à l'application « Frontdesk » et cliquez sur « Nouveau » soit sur le tableau de bord principal, sur le tableau de bord d'une station ou sur la liste des visiteurs.",
    },
  }),
  complexQ({
    id: "hr-178",
    module: "hr",
    text: {
      en: "When checking in a planned visitor, how is the check-in date and time determined? (Odoo Learn — Frontdesk Management)",
      fr: "Lors de l'enregistrement d'un visiteur prévu, comment la date et l'heure d'enregistrement sont-elles déterminées ? (Odoo Learn — Gestion de la réception)",
    },
    correct: {
      en: "The current date and time are set as the check-in time.",
      fr: "La date et l'heure actuelles sont définies comme heure d'arrivée.",
    },
    distractors: [
      { en: "The date and time configured on the planned visitor form.", fr: "La date et l'heure configurées sur le formulaire de visiteur prévu." },
      { en: "The current date is set, but the time is set based on the planned visitor form.", fr: "La date actuelle est définie, mais l'heure est définie en fonction du formulaire de visiteur prévu." },
      { en: "The current date is set, but there is no time information.", fr: "La date actuelle est définie, mais il n'y a aucune information sur l'heure." },
    ],
    explanation: {
      en: "Source Odoo Learn (Frontdesk Management): The current date and time are set as the check-in time.",
      fr: "Source Odoo Learn (gestion de la réception) : la date et l'heure actuelles sont définies comme heure d'enregistrement.",
    },
  }),
  complexQ({
    id: "hr-179",
    module: "hr",
    text: {
      en: "How can I find a list of all visitors from all stations? (Odoo Learn — Frontdesk Management)",
      fr: "Comment puis-je trouver une liste de tous les visiteurs de toutes les gares ? (Odoo Learn — Gestion de la réception)",
    },
    correct: {
      en: "Navigate to ‘Frontdesk’ app > ‘Visitors’.",
      fr: "Accédez à l’application « Frontdesk » > « Visiteurs ».",
    },
    distractors: [
      { en: "Navigate to ‘Frontdesk’ app, click on the desired station, then click ‘Visitors’.", fr: "Accédez à l'application « Frontdesk », cliquez sur la station souhaitée, puis cliquez sur « Visiteurs »." },
      { en: "Navigate to ‘Frontdesk’ app > ‘Reporting’ > ‘Visitors’.", fr: "Accédez à l'application « Frontdesk » > « Rapports » > « Visiteurs »." },
      { en: "It is not possible to view all visitors for all frontdesks in one list.", fr: "Il n'est pas possible de visualiser tous les visiteurs de tous les bureaux d'accueil dans une seule liste." },
    ],
    explanation: {
      en: "Source Odoo Learn (Frontdesk Management): Navigate to ‘Frontdesk’ app > ‘Visitors’.",
      fr: "Source Odoo Learn (gestion de la réception) : accédez à l'application « Frontdesk » > « Visiteurs ».",
    },
  }),
  complexQ({
    id: "hr-180",
    module: "hr",
    text: {
      en: "From the Fleet dashboard, how can you tell that a vehicle’s contract is expired? (Odoo Learn — Fleet Basics)",
      fr: "Depuis le tableau de bord Flotte, comment savoir que le contrat d’un véhicule est expiré ? (Odoo Learn — Bases de la flotte)",
    },
    correct: {
      en: "You see a red triangle.",
      fr: "Vous voyez un triangle rouge.",
    },
    distractors: [
      { en: "You see an orange warning sign.", fr: "Vous voyez un panneau d'avertissement orange." },
      { en: "The vehicle is in the Expired column.", fr: "Le véhicule est dans la colonne Expiré." },
      { en: "The Contracts smart button displays a zero.", fr: "Le bouton intelligent Contrats affiche un zéro." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fleet Basics): You see a red triangle.",
      fr: "Source Odoo Learn (Fleet Basics) : Vous voyez un triangle rouge.",
    },
  }),
  complexQ({
    id: "hr-181",
    module: "hr",
    text: {
      en: "How can I add an activity? (Odoo Learn — Fleet Basics)",
      fr: "Comment puis-je ajouter une activité ? (Odoo Learn — Bases de la flotte)",
    },
    correct: {
      en: "Click the ‘activity icon’ on a vehicle card, or click the ‘Activities’ button in the chatter on the vehicle page",
      fr: "Cliquez sur « l'icône d'activité » sur la carte d'un véhicule ou cliquez sur le bouton « Activités » dans le chat sur la page du véhicule.",
    },
    distractors: [
      { en: "I click the ‘plus sign’ at the top of a stage on the ‘Fleet’ dashboard", fr: "Je clique sur le « signe plus » en haut d'une étape du tableau de bord « Flotte »" },
      { en: "Only by clicking the ‘Activities’ button in the chatter on the vehicle page", fr: "Uniquement en cliquant sur le bouton « Activités » dans le chat sur la page du véhicule" },
      { en: "Only by clicking the ‘activity icon’ on a vehicle card", fr: "Uniquement en cliquant sur « l’icône d’activité » sur la fiche d’un véhicule" },
    ],
    explanation: {
      en: "Source Odoo Learn (Fleet Basics): Click the ‘activity icon’ on a vehicle card, or click the ‘Activities’ button in the chatter on the vehicle page",
      fr: "Source Odoo Learn (Fleet Basics) : cliquez sur « l'icône d'activité » sur la carte d'un véhicule, ou cliquez sur le bouton « Activités » dans le chat sur la page du véhicule.",
    },
  }),
  complexQ({
    id: "hr-182",
    module: "hr",
    text: {
      en: "How do you update the Drivers History smart button on a vehicle record? (Odoo Learn — Fleet Basics)",
      fr: "Comment mettre à jour le bouton intelligent Historique des conducteurs sur un dossier de véhicule ? (Odoo Learn — Bases de la flotte)",
    },
    correct: {
      en: "By changing the Driver field.",
      fr: "En modifiant le champ Pilote.",
    },
    distractors: [
      { en: "By changing the Future Driver field.", fr: "En modifiant le champ Future Driver." },
      { en: "By changing the Fleet Manager Field.", fr: "En modifiant le champ Fleet Manager." },
      { en: "By changing the Assignment date Field.", fr: "En modifiant le champ Date d'affectation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fleet Basics): By changing the Driver field.",
      fr: "Source Odoo Learn (Fleet Basics) : En modifiant le champ Pilote.",
    },
  }),
  complexQ({
    id: "hr-183",
    module: "hr",
    text: {
      en: "What manufacturers appear on the Manufacturers dashboard (‘Configuration’ > ‘Manufacturers’)? (Odoo Learn — Adding Vehicles)",
      fr: "Quels fabricants apparaissent sur le tableau de bord Fabricants (« Configuration » > « Fabricants ») ? (Odoo Learn — Ajout de véhicules)",
    },
    correct: {
      en: "Manufacturers that have vehicle models in the Fleet app",
      fr: "Fabricants qui ont des modèles de véhicules dans l'application Fleet",
    },
    distractors: [
      { en: "All manufacturers in the database", fr: "Tous les fabricants dans la base de données" },
      { en: "Only the first twenty manufacturers", fr: "Seuls les vingt premiers constructeurs" },
      { en: "Only automobile manufacturers (no boke manufacturers)", fr: "Uniquement les constructeurs automobiles (pas de constructeurs de boke)" },
    ],
    explanation: {
      en: "Source Odoo Learn (Adding Vehicles): Manufacturers that have vehicle models in the Fleet app",
      fr: "Source Odoo Learn (Ajout de véhicules) : Fabricants qui ont des modèles de véhicules dans l'application Fleet",
    },
  }),
  complexQ({
    id: "hr-184",
    module: "hr",
    text: {
      en: "What Vehicle Types are available in the Fleet app? (Odoo Learn — Adding Vehicles)",
      fr: "Quels types de véhicules sont disponibles dans l'application Fleet ? (Odoo Learn — Ajout de véhicules)",
    },
    correct: {
      en: "Car and Bike",
      fr: "Voiture et vélo",
    },
    distractors: [
      { en: "Truck, Car, and Bike", fr: "Camion, voiture et vélo" },
      { en: "Truck and Car", fr: "Camion et voiture" },
      { en: "Truck, Car, Bike, and Scooter", fr: "Camion, voiture, vélo et scooter" },
    ],
    explanation: {
      en: "Source Odoo Learn (Adding Vehicles): Car and Bike",
      fr: "Source Odoo Learn (Ajout de véhicules) : Voiture et vélo",
    },
  }),
  complexQ({
    id: "hr-185",
    module: "hr",
    text: {
      en: "What ‘Model’ information is NOT pre-populated on a vehicle form? (Odoo Learn — Adding Vehicles)",
      fr: "Quelles informations sur le « Modèle » ne sont PAS pré-remplies sur un formulaire de véhicule ? (Odoo Learn — Ajout de véhicules)",
    },
    correct: {
      en: "The color",
      fr: "La couleur",
    },
    distractors: [
      { en: "No model information is pre-populated", fr: "Aucune information sur le modèle n'est préremplie" },
      { en: "The number of passengers it can accommodate", fr: "Le nombre de passagers qu'il peut accueillir" },
      { en: "The number of doors", fr: "Le nombre de portes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Adding Vehicles): The color",
      fr: "Source Odoo Learn (Ajout de véhicules) : La couleur",
    },
  }),
  complexQ({
    id: "hr-186",
    module: "hr",
    text: {
      en: "How do I access a list of vehicle repairs? (Odoo Learn — Servicing Vehicles)",
      fr: "Comment accéder à une liste de réparations de véhicules ? (Odoo Learn — Entretien des véhicules)",
    },
    correct: {
      en: "Click ‘Fleet’ > ‘Services’",
      fr: "Cliquez sur « Flotte » > « Services »",
    },
    distractors: [
      { en: "Click ‘Fleet’ > ‘Repairs’", fr: "Cliquez sur « Flotte » > « Réparations »" },
      { en: "Click ‘Fleet’ > ‘Services’ > ‘Repairs’", fr: "Cliquez sur « Flotte » > « Services » > « Réparations »" },
      { en: "Click ‘Services’ > ‘Repairs’", fr: "Cliquez sur « Services » > « Réparations »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Servicing Vehicles): Click ‘Fleet’ > ‘Services’",
      fr: "Source Odoo Learn (Véhicules d'entretien) : Cliquez sur « Flotte » > « Services »",
    },
  }),
  complexQ({
    id: "hr-187",
    module: "hr",
    text: {
      en: "When creating a new ‘Service Type’, what information is required? (Odoo Learn — Servicing Vehicles)",
      fr: "Lors de la création d’un nouveau « Type de service », quelles informations sont requises ? (Odoo Learn — Entretien des véhicules)",
    },
    correct: {
      en: "The ‘Name’ and ‘Category’",
      fr: "Le « Nom » et la « Catégorie »",
    },
    distractors: [
      { en: "The ‘Name’, ‘Category’, and ‘Default Vendor’", fr: "Le « Nom », la « Catégorie » et le « Fournisseur par défaut »" },
      { en: "The ‘Name’ and ‘Category’, and ‘Description’", fr: "Le « Nom », la « Catégorie » et la « Description »" },
      { en: "The ‘Name’ and ‘Service’", fr: "Le « Nom » et le « Service »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Servicing Vehicles): The ‘Name’ and ‘Category’",
      fr: "Source Odoo Learn (Véhicules d'entretien) : Le « Nom » et la « Catégorie »",
    },
  }),
  complexQ({
    id: "hr-188",
    module: "hr",
    text: {
      en: "When a vehicle is selected when creating a service record, what else is automatically populated? (Odoo Learn — Servicing Vehicles)",
      fr: "Lorsqu'un véhicule est sélectionné lors de la création d'un dossier d'entretien, qu'est-ce qui est automatiquement renseigné ? (Odoo Learn — Entretien des véhicules)",
    },
    correct: {
      en: "The driver",
      fr: "Le chauffeur",
    },
    distractors: [
      { en: "The driver and location", fr: "Le chauffeur et l'emplacement" },
      { en: "The driver, location, and mileage", fr: "Le conducteur, l'emplacement et le kilométrage" },
      { en: "The driver and mileage", fr: "Le conducteur et le kilométrage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Servicing Vehicles): The driver",
      fr: "Source Odoo Learn (Service des véhicules) : Le conducteur",
    },
  }),
  complexQ({
    id: "hr-189",
    module: "hr",
    text: {
      en: "Where do I record the accident details? (Odoo Learn — Manage Accidents)",
      fr: "Où puis-je enregistrer les détails de l'accident ? (Odoo Learn — Gérer les accidents)",
    },
    correct: {
      en: "In the ‘Notes’ field",
      fr: "Dans le champ « Notes »",
    },
    distractors: [
      { en: "In the ‘Description’ field", fr: "Dans le champ « Description »" },
      { en: "In the ‘Accident’ field", fr: "Dans le champ « Accident »" },
      { en: "It is automatically populated after selecting the ‘Service Type’", fr: "Il est automatiquement renseigné après avoir sélectionné le « Type de service »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Accidents): In the ‘Notes’ field",
      fr: "Source Odoo Learn (Gérer les accidents) : Dans le champ « Notes »",
    },
  }),
  complexQ({
    id: "hr-190",
    module: "hr",
    text: {
      en: "When should I change the repair status to ‘Running’? (Odoo Learn — Manage Accidents)",
      fr: "Quand dois-je changer l’état de la réparation en « En cours d’exécution » ? (Odoo Learn — Gérer les accidents)",
    },
    correct: {
      en: "After the estimate is approved",
      fr: "Une fois le devis approuvé",
    },
    distractors: [
      { en: "After the estimate is received", fr: "Après réception du devis" },
      { en: "After the repair has been paid for", fr: "Une fois la réparation payée" },
      { en: "After the vendor has submitted a bill", fr: "Après que le vendeur a soumis une facture" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Accidents): After the estimate is approved",
      fr: "Source Odoo Learn (Gérer les Accidents) : Après approbation du devis",
    },
  }),
  complexQ({
    id: "hr-191",
    module: "hr",
    text: {
      en: "Under what circumstances would I update the ‘cost’ field? (Odoo Learn — Manage Accidents)",
      fr: "Dans quelles circonstances dois-je mettre à jour le champ « coût » ? (Odoo Learn — Gérer les accidents)",
    },
    correct: {
      en: "Both A and B",
      fr: "A et B",
    },
    distractors: [
      { en: "After the estimate is received and approved", fr: "Une fois le devis reçu et approuvé" },
      { en: "After the repair is complete", fr: "Une fois la réparation terminée" },
      { en: "The cost never needs to be updated", fr: "Le coût n'a jamais besoin d'être mis à jour" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Accidents): Both A and B",
      fr: "Source Odoo Learn (Gérer les accidents) : A et B",
    },
  }),
  complexQ({
    id: "hr-192",
    module: "hr",
    text: {
      en: "What do the blue bars represent in the ‘Cost Analysis’ report? (Odoo Learn — Fleet Reporting)",
      fr: "Que représentent les barres bleues dans le rapport « Analyse des coûts » ? (Odoo Learn — Rapports de flotte)",
    },
    correct: {
      en: "Contract costs",
      fr: "Coûts du contrat",
    },
    distractors: [
      { en: "Service costs", fr: "Coûts des services" },
      { en: "Repair costs", fr: "Frais de réparation" },
      { en: "Both Contract and Service costs", fr: "Coûts du contrat et du service" },
    ],
    explanation: {
      en: "Source Odoo Learn (Fleet Reporting): Contract costs",
      fr: "Source Odoo Learn (Fleet Reporting) : Coûts du contrat",
    },
  }),
  complexQ({
    id: "hr-193",
    module: "hr",
    text: {
      en: "How can I view costs by vehicle in the ‘Cost Analysis’ report? (Odoo Learn — Fleet Reporting)",
      fr: "Comment puis-je visualiser les coûts par véhicule dans le rapport « Analyse des coûts » ? (Odoo Learn — Rapports de flotte)",
    },
    correct: {
      en: "Group the data by ‘Vehicle’",
      fr: "Regroupez les données par « Véhicule »",
    },
    distractors: [
      { en: "Group the data by ‘Contract’", fr: "Regroupez les données par « Contrat »" },
      { en: "Group the data by ‘Make’", fr: "Regroupez les données par « Make »" },
      { en: "Group the data by ‘Model’", fr: "Regroupez les données par « Modèle »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Fleet Reporting): Group the data by ‘Vehicle’",
      fr: "Source Odoo Learn (Fleet Reporting) : Regroupez les données par « Véhicule »",
    },
  }),
  complexQ({
    id: "hr-194",
    module: "hr",
    text: {
      en: "How can I view the specific details and numbers of the ‘Cost Analysis’ report? (Odoo Learn — Fleet Reporting)",
      fr: "Comment puis-je afficher les détails et les chiffres spécifiques du rapport « Analyse des coûts » ? (Odoo Learn — Rapports de flotte)",
    },
    correct: {
      en: "View the data as a pivot table",
      fr: "Afficher les données sous forme de tableau croisé dynamique",
    },
    distractors: [
      { en: "View the data as a line chart", fr: "Afficher les données sous forme de graphique linéaire" },
      { en: "View the data as a pie chart", fr: "Afficher les données sous forme de diagramme circulaire" },
      { en: "View the data as a bar chart", fr: "Afficher les données sous forme de graphique à barres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Fleet Reporting): View the data as a pivot table",
      fr: "Source Odoo Learn (Fleet Reporting) : affichez les données sous forme de tableau croisé dynamique",
    },
  }),
  complexQ({
    id: "hr-195",
    module: "hr",
    text: {
      en: "What does the availability section on a Vendor form affect? (Odoo Learn — Lunch Basics)",
      fr: "Qu'est-ce que la section de disponibilité sur un formulaire fournisseur affecte ? (Odoo Learn — Les bases du déjeuner)",
    },
    correct: {
      en: "The days a specific vendor’s products are available",
      fr: "Les jours où les produits d’un fournisseur spécifique sont disponibles",
    },
    distractors: [
      { en: "The number of portions of a product that are available", fr: "Le nombre de portions d'un produit disponibles" },
      { en: "The wait time for the vendor that day", fr: "Le temps d'attente pour le vendeur ce jour-là" },
      { en: "The hours an order can be placed", fr: "Les heures pendant lesquelles une commande peut être passée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lunch Basics): The days a specific vendor’s products are available",
      fr: "Source Odoo Learn (Bases du déjeuner) : Les jours où les produits d'un fournisseur spécifique sont disponibles",
    },
  }),
  complexQ({
    id: "hr-196",
    module: "hr",
    text: {
      en: "Where are extras configured for purchasable Lunch items? (Odoo Learn — Lunch Basics)",
      fr: "Où sont configurés les extras pour les articles de déjeuner achetables ? (Odoo Learn — Les bases du déjeuner)",
    },
    correct: {
      en: "On a vendor form",
      fr: "Sur un formulaire fournisseur",
    },
    distractors: [
      { en: "On a product form", fr: "Sur une fiche produit" },
      { en: "In the settings menu", fr: "Dans le menu des paramètres" },
      { en: "On a product category form", fr: "Sur un formulaire de catégorie de produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lunch Basics): On a vendor form",
      fr: "Source Odoo Learn (Bases du déjeuner) : Sur un formulaire fournisseur",
    },
  }),
  complexQ({
    id: "hr-197",
    module: "hr",
    text: {
      en: "How can a message be displayed, so employees are aware of a new lunch product? (Odoo Learn — Lunch Basics)",
      fr: "Comment afficher un message pour que les employés soient informés d'un nouveau produit de déjeuner ? (Odoo Learn — Les bases du déjeuner)",
    },
    correct: {
      en: "Create an alert message from the Lunch Alerts dashboard",
      fr: "Créer un message d'alerte à partir du tableau de bord Alertes déjeuner",
    },
    distractors: [
      { en: "Create an alert message on the Product form", fr: "Créer un message d'alerte sur le formulaire Produit" },
      { en: "Create an alert message on the Vendor form", fr: "Créer un message d'alerte sur le formulaire Fournisseur" },
      { en: "It is not possible to display messages in the Lunch app", fr: "Il n'est pas possible d'afficher des messages dans l'application Lunch" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lunch Basics): Create an alert message from the Lunch Alerts dashboard",
      fr: "Source Odoo Learn (Lunch Basics) : Créez un message d'alerte à partir du tableau de bord des alertes de déjeuner",
    },
  }),
  complexQ({
    id: "hr-198",
    module: "hr",
    text: {
      en: "How can I order food for tomorrow? (Odoo Learn — Placing Lunch Orders)",
      fr: "Comment puis-je commander de la nourriture pour demain ? (Odoo Learn — Passer des commandes de déjeuner)",
    },
    correct: {
      en: "Change the date on the Lunch dashboard to tomorrow’s date, then place an order",
      fr: "Modifiez la date sur le tableau de bord Déjeuner par la date de demain, puis passez une commande",
    },
    distractors: [
      { en: "Add the desired items, then click ‘Order Ahead’", fr: "Ajoutez les articles souhaités, puis cliquez sur « Commander à l'avance »" },
      { en: "Place the order on the ‘My Order History’ dashboard", fr: "Passez la commande sur le tableau de bord « Mon historique de commandes »" },
      { en: "It is not possible to order ahead", fr: "Il n'est pas possible de commander à l'avance" },
    ],
    explanation: {
      en: "Source Odoo Learn (Placing Lunch Orders): Change the date on the Lunch dashboard to tomorrow’s date, then place an order",
      fr: "Source Odoo Learn (Passer des commandes de déjeuner) : modifiez la date sur le tableau de bord du déjeuner par la date de demain, puis passez une commande",
    },
  }),
  complexQ({
    id: "hr-199",
    module: "hr",
    text: {
      en: "How can I quickly re-order a complex item? (Odoo Learn — Placing Lunch Orders)",
      fr: "Comment puis-je commander à nouveau rapidement un article complexe ? (Odoo Learn — Passer des commandes de déjeuner)",
    },
    correct: {
      en: "Navigate to ‘My Lunch’ > ‘My Orders’ and click ‘Re-order’",
      fr: "Accédez à « Mon déjeuner » > « Mes commandes » et cliquez sur « Recommander »",
    },
    distractors: [
      { en: "Navigate to ‘My Lunch’ > ‘My Account’ and click ‘Re-order’", fr: "Accédez à « Mon déjeuner » > « Mon compte » et cliquez sur « Recommander »" },
      { en: "Click on the item, then click ‘Re-order’ at the bottom of the pop-up window", fr: "Cliquez sur l'article, puis cliquez sur « Récommander » en bas de la fenêtre contextuelle" },
      { en: "It is not possible to re-order, all orders must be manually entered on the main dashboard", fr: "Il n'est pas possible de passer une nouvelle commande, toutes les commandes doivent être saisies manuellement sur le tableau de bord principal" },
    ],
    explanation: {
      en: "Source Odoo Learn (Placing Lunch Orders): Navigate to ‘My Lunch’ > ‘My Orders’ and click ‘Re-order’",
      fr: "Source Odoo Learn (Passer des commandes de déjeuner) : accédez à « Mon déjeuner » > « Mes commandes » et cliquez sur « Récommander »",
    },
  }),
  complexQ({
    id: "hr-200",
    module: "hr",
    text: {
      en: "Why would a ‘Re-order’ button not appear? (Odoo Learn — Placing Lunch Orders)",
      fr: "Pourquoi le bouton « Récommander » n'apparaît-il pas ? (Odoo Learn — Passer des commandes de déjeuner)",
    },
    correct: {
      en: "If there is not enough money in the lunch account to purchase the item",
      fr: "S'il n'y a pas assez d'argent sur le compte déjeuner pour acheter l'article",
    },
    distractors: [
      { en: "If the item has been discontinued", fr: "Si l'article a été abandonné" },
      { en: "If it is outside the vendor's hours", fr: "Si c'est en dehors des heures d'ouverture du vendeur" },
      { en: "If the item is no longer marked as ‘New’", fr: "Si l'article n'est plus marqué comme « Nouveau »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Placing Lunch Orders): If there is not enough money in the lunch account to purchase the item",
      fr: "Source Odoo Learn (Passer des commandes de déjeuner) : S'il n'y a pas assez d'argent sur le compte du déjeuner pour acheter l'article",
    },
  }),
  complexQ({
    id: "hr-201",
    module: "hr",
    text: {
      en: "How can I inform an employee their food has arrived, from the Lunch app? (Odoo Learn — Managing Orders)",
      fr: "Comment puis-je informer un employé que sa nourriture est arrivée, depuis l'application Lunch ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "Click ‘Send Notification’ in the ‘Managing Orders’ dashboard",
      fr: "Cliquez sur « Envoyer une notification » dans le tableau de bord « Gestion des commandes »",
    },
    distractors: [
      { en: "Send them a chat message in the ‘Discuss’ app", fr: "Envoyez-leur un message de chat dans l'application « Discuter »" },
      { en: "An email is automatically sent to the employee when ‘Confirm Orders’ is clicked", fr: "Un e-mail est automatiquement envoyé à l'employé lorsqu'il clique sur « Confirmer les commandes »" },
      { en: "There is no way to message employees using the Lunch app", fr: "Il n'est pas possible d'envoyer des messages aux employés à l'aide de l'application Lunch." },
    ],
    explanation: {
      en: "Source Odoo Learn (Managing Orders): Click ‘Send Notification’ in the ‘Managing Orders’ dashboard",
      fr: "Source Odoo Learn (Gestion des commandes) : Cliquez sur « Envoyer une notification » dans le tableau de bord « Gestion des commandes »",
    },
  }),
  complexQ({
    id: "hr-202",
    module: "hr",
    text: {
      en: "How do I send orders to a vendor? (Odoo Learn — Managing Orders)",
      fr: "Comment envoyer des commandes à un fournisseur ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "Click ‘Send Orders’ on the ‘Managing Orders’ dashboard",
      fr: "Cliquez sur « Envoyer les commandes » dans le tableau de bord « Gestion des commandes »",
    },
    distractors: [
      { en: "Click ‘Send Orders’ on the main Lunch app dashboard", fr: "Cliquez sur « Envoyer les commandes » sur le tableau de bord principal de l'application Lunch." },
      { en: "Click ‘Confirm Orders’ on the ‘Managing Orders’ dashboard", fr: "Cliquez sur « Confirmer les commandes » sur le tableau de bord « Gestion des commandes »" },
      { en: "Click ‘Confirm Orders’ on the main Lunch app dashboard", fr: "Cliquez sur « Confirmer les commandes » sur le tableau de bord principal de l'application Lunch." },
    ],
    explanation: {
      en: "Source Odoo Learn (Managing Orders): Click ‘Send Orders’ on the ‘Managing Orders’ dashboard",
      fr: "Source Odoo Learn (Gestion des commandes) : Cliquez sur « Envoyer les commandes » sur le tableau de bord « Gestion des commandes »",
    },
  }),
  complexQ({
    id: "hr-203",
    module: "hr",
    text: {
      en: "Where can I find a report with all the orders, grouped by vendor? (Odoo Learn — Managing Orders)",
      fr: "Où puis-je trouver un rapport avec toutes les commandes, regroupées par fournisseur ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "On the ‘Control Vendors’ report",
      fr: "Sur le rapport « Fournisseurs de contrôle »",
    },
    distractors: [
      { en: "On the ‘Cash Moves’ report", fr: "Sur le rapport « Cash Moves »" },
      { en: "On the ‘Control Accounts’ report", fr: "Sur le rapport « Comptes de contrôle »" },
      { en: "On the ‘Today’s Orders’ dashboard", fr: "Sur le tableau de bord « Commandes du jour »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Managing Orders): On the ‘Control Vendors’ report",
      fr: "Source Odoo Learn (Gestion des commandes) : Sur le rapport « Fournisseurs de contrôle »",
    },
  }),
  complexQ({
    id: "hr-204",
    module: "hr",
    text: {
      en: "How can I request an approval in the Approvals app? (Odoo Learn — Approvals Basics)",
      fr: "Comment puis-je demander une approbation dans l'application Approbations ? (Odoo Learn — Bases des approbations)",
    },
    correct: {
      en: "Both A and B",
      fr: "A et B",
    },
    distractors: [
      { en: "Click ‘New Request” on the corresponding approval type card on the dashboard", fr: "Cliquez sur « Nouvelle demande » sur la carte de type d'approbation correspondante sur le tableau de bord." },
      { en: "Click the ‘New Request’ button in the top-right corner of the dashboard", fr: "Cliquez sur le bouton « Nouvelle demande » dans le coin supérieur droit du tableau de bord" },
      { en: "Only A", fr: "Seulement un" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals Basics): Both A and B",
      fr: "Source Odoo Learn (bases des approbations) : A et B",
    },
  }),
  complexQ({
    id: "hr-205",
    module: "hr",
    text: {
      en: "How can I require a ‘Quantity’ field on an approval form? (Odoo Learn — Approvals Basics)",
      fr: "Comment puis-je exiger un champ « Quantité » sur un formulaire d’approbation ? (Odoo Learn — Bases des approbations)",
    },
    correct: {
      en: "Ticking the ‘Required’ radio button in the ‘Options’ tab of an ‘Approval Type’ form",
      fr: "Cocher le bouton radio « Obligatoire » dans l'onglet « Options » d'un formulaire « Type d'approbation »",
    },
    distractors: [
      { en: "Entering a ‘Code’ on the ‘Approval Type’ form", fr: "Saisie d'un « Code » sur le formulaire « Type d'approbation »" },
      { en: "Ticking the ‘Required’ radio button in the ‘Options’ tab of a product form", fr: "Cocher le bouton radio « Obligatoire » dans l'onglet « Options » d'un formulaire de produit" },
      { en: "A ‘Quantity’ field is always present; there is no configuration needed", fr: "Un champ « Quantité » est toujours présent ; aucune configuration n'est nécessaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals Basics): Ticking the ‘Required’ radio button in the ‘Options’ tab of an ‘Approval Type’ form",
      fr: "Source Odoo Learn (Bases des approbations) : Cocher le bouton radio « Obligatoire » dans l'onglet « Options » d'un formulaire « Type d'approbation »",
    },
  }),
  complexQ({
    id: "hr-206",
    module: "hr",
    text: {
      en: "How do I require the manager’s approval? (Odoo Learn — Approvals Basics)",
      fr: "Comment demander l’accord du gestionnaire ? (Odoo Learn — Bases des approbations)",
    },
    correct: {
      en: "By selecting ‘Is Required Approver’ in the ‘Employee’s Manager’ field on the ‘Approval Type’ form",
      fr: "En sélectionnant « Un approbateur est requis » dans le champ « Responsable de l'employé » du formulaire « Type d'approbation ».",
    },
    distractors: [
      { en: "The manager is always required to approve a request", fr: "Le gestionnaire est toujours tenu d'approuver une demande" },
      { en: "Adding a minimum of two approvers in the ‘Approvers’ list on an ‘Approval Type’ form", fr: "Ajout d'un minimum de deux approbateurs dans la liste « Approbateurs » sur un formulaire « Type d'approbation »" },
      { en: "By selecting ‘Is Approver’ in the ‘Employee’s Manager’ field on the ‘Approval Type’ form", fr: "En sélectionnant « Est un approbateur » dans le champ « Responsable de l'employé » du formulaire « Type d'approbation »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals Basics): By selecting ‘Is Required Approver’ in the ‘Employee’s Manager’ field on the ‘Approval Type’ form",
      fr: "Source Odoo Learn (bases des approbations) : en sélectionnant « un approbateur requis » dans le champ « Responsable de l'employé » du formulaire « Type d'approbation »",
    },
  }),
  complexQ({
    id: "hr-207",
    module: "hr",
    text: {
      en: "Where can I find requests that were ‘Refused’ in the Approvals app? (Odoo Learn — Approvals Management)",
      fr: "Où puis-je trouver les demandes « Refusées » dans l'application Approbations ? (Odoo Learn — Gestion des approbations)",
    },
    correct: {
      en: "Go to the ‘Approvals’ app and navigate to ‘Manager’ > ‘All Approvals’",
      fr: "Accédez à l'application « Approbations » et accédez à « Gestionnaire » > « Toutes les approbations ».",
    },
    distractors: [
      { en: "Go to the ‘Approvals’ app and navigate to ‘Manager’ > ‘Approvals to Review’", fr: "Accédez à l'application « Approbations » et accédez à « Gestionnaire » > « Approbations à réviser »." },
      { en: "Go to the ‘Approvals’ app and navigate to ‘My Approvals’ > ‘My Request’", fr: "Accédez à l'application « Approbations » et accédez à « Mes approbations » > « Ma demande »." },
      { en: "It is not possible to view refused requests", fr: "Il n'est pas possible de visualiser les demandes refusées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals Management): Go to the ‘Approvals’ app and navigate to ‘Manager’ > ‘All Approvals’",
      fr: "Source Odoo Learn (Gestion des approbations) : accédez à l'application « Approbations » et accédez à « Manager » > « Toutes les approbations »",
    },
  }),
  complexQ({
    id: "hr-208",
    module: "hr",
    text: {
      en: "What do I do if I approve a request by mistake? (Odoo Learn — Approvals Management)",
      fr: "Que dois-je faire si j’approuve une demande par erreur ? (Odoo Learn — Gestion des approbations)",
    },
    correct: {
      en: "Open the approval request and click ‘Withdraw’",
      fr: "Ouvrez la demande d'approbation et cliquez sur « Retirer »",
    },
    distractors: [
      { en: "There is nothing I can do. Contact the person who made the request, and let them know it was an error", fr: "Je ne peux rien faire. Contactez la personne qui a fait la demande et faites-lui savoir qu'il s'agissait d'une erreur" },
      { en: "Open the approval request and click ‘Unapprove’", fr: "Ouvrez la demande d'approbation et cliquez sur « Annuler l'approbation »" },
      { en: "Open the approval request and click ‘Submitted’ in the status bar", fr: "Ouvrez la demande d'approbation et cliquez sur « Soumis » dans la barre d'état." },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals Management): Open the approval request and click ‘Withdraw’",
      fr: "Source Odoo Learn (Gestion des approbations) : Ouvrez la demande d'approbation et cliquez sur « Retirer »",
    },
  }),
  complexQ({
    id: "hr-209",
    module: "hr",
    text: {
      en: "What is the default view for the ‘My Requests’ dashboard? (Odoo Learn — Approvals Management)",
      fr: "Quelle est la vue par défaut du tableau de bord « Mes demandes » ? (Odoo Learn — Gestion des approbations)",
    },
    correct: {
      en: "Kanban",
      fr: "Kanban",
    },
    distractors: [
      { en: "Pivot", fr: "Pivoter" },
      { en: "List", fr: "Liste" },
      { en: "This view is not available in the ‘Approvals’ app", fr: "Cette vue n'est pas disponible dans l'application « Approbations »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals Management): Kanban",
      fr: "Source Odoo Learn (Gestion des approbations) : Kanban",
    },
  }),
];
