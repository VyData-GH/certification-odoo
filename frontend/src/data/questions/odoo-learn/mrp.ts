import { complexQ, mcq3Q } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const mrpLearnQuestions = [
  complexQ({
    id: "mrp-031",
    module: "mrp",
    text: {
      en: "What is the purpose of a Work Order in Odoo? (Odoo Learn — MRP Overview)",
      fr: "Quel est le but d’un bon de travail dans Odoo ? (Odoo Learn — Présentation du MRP)",
    },
    correct: {
      en: "To break down manufacturing into step-by-step tasks",
      fr: "Décomposer la fabrication en tâches étape par étape",
    },
    distractors: [
      { en: "To generate a quote", fr: "Pour générer un devis" },
      { en: "To approve engineering changes", fr: "Pour approuver les modifications techniques" },
      { en: "To reorder raw materials", fr: "Pour réorganiser les matières premières" },
    ],
    explanation: {
      en: "Source Odoo Learn (MRP Overview): To break down manufacturing into step-by-step tasks",
      fr: "Source Odoo Learn (Présentation MRP) : Pour décomposer la fabrication en tâches étape par étape",
    },
  }),
  complexQ({
    id: "mrp-032",
    module: "mrp",
    text: {
      en: "What is an ECO in Odoo? (Odoo Learn — MRP Overview)",
      fr: "Qu’est-ce qu’un ECO dans Odoo ? (Odoo Learn — Présentation du MRP)",
    },
    correct: {
      en: "Engineering Change Order",
      fr: "Ordre de modification technique",
    },
    distractors: [
      { en: "External Compliance Order", fr: "Ordonnance de conformité externe" },
      { en: "Emergency Cut-Off", fr: "Coupure d'urgence" },
      { en: "Equipment Calibration Option", fr: "Option d'étalonnage de l'équipement" },
    ],
    explanation: {
      en: "Source Odoo Learn (MRP Overview): Engineering Change Order",
      fr: "Source Odoo Learn (Aperçu MRP) : Ordre de modification technique",
    },
  }),
  complexQ({
    id: "mrp-033",
    module: "mrp",
    text: {
      en: "What is one key advantage of using Odoo’s unified manufacturing platform? (Odoo Learn — MRP Overview)",
      fr: "Quel est l’un des principaux avantages de l’utilisation de la plateforme de fabrication unifiée d’Odoo ? (Odoo Learn — Présentation du MRP)",
    },
    correct: {
      en: "It centralizes operations in real time, so every department works from the same up-to-date data.",
      fr: "Il centralise les opérations en temps réel, afin que chaque service travaille à partir des mêmes données à jour.",
    },
    distractors: [
      { en: "It limits access to manufacturing-only features, preventing other departments from changing production data.", fr: "Il limite l'accès aux fonctionnalités réservées à la fabrication, empêchant ainsi les autres départements de modifier les données de production." },
      { en: "It updates data in a nightly batch, giving teams time to verify information before the next production day.", fr: "Il met à jour les données par lots nocturnes, donnant aux équipes le temps de vérifier les informations avant le prochain jour de production." },
      { en: "It keeps manufacturing, inventory, and purchasing on separate databases, reducing cross-department dependencies.", fr: "Il conserve la fabrication, les stocks et les achats dans des bases de données distinctes, réduisant ainsi les dépendances entre les départements." },
    ],
    explanation: {
      en: "Source Odoo Learn (MRP Overview): It centralizes operations in real time, so every department works from the same up-to-date data.",
      fr: "Source Odoo Learn (MRP Overview) : Il centralise les opérations en temps réel, afin que chaque service travaille à partir des mêmes données à jour.",
    },
  }),
  complexQ({
    id: "mrp-034",
    module: "mrp",
    text: {
      en: "How many unique products can a single manufacturing order contain? (Odoo Learn — Manufacturing Order & Work Order Basics)",
      fr: "Combien de produits uniques un seul ordre de fabrication peut-il contenir ? (Odoo Learn — Bases des ordres de fabrication et des ordres de travail)",
    },
    correct: {
      en: "One",
      fr: "Un",
    },
    distractors: [
      { en: "Two", fr: "Deux" },
      { en: "Three", fr: "Trois" },
      { en: "Unlimited", fr: "Illimité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Order & Work Order Basics): One",
      fr: "Source Odoo Learn (bases des ordres de fabrication et des ordres de travail) : One",
    },
  }),
  complexQ({
    id: "mrp-035",
    module: "mrp",
    text: {
      en: "How is the “End” date/time calculated for an MO? (Odoo Learn — Manufacturing Order & Work Order Basics)",
      fr: "Comment la date/heure de « Fin » est-elle calculée pour un MO ? (Odoo Learn — Bases des ordres de fabrication et des ordres de travail)",
    },
    correct: {
      en: "Adding the “Expected Duration” of all work orders to the “Scheduled Date”",
      fr: "Ajout de la « Durée prévue » de tous les bons de travail à la « Date prévue »",
    },
    distractors: [
      { en: "Adding 24 hours to the “Scheduled Date”", fr: "Ajout de 24 heures à la « Date programmée »" },
      { en: "Adding the “Real Duration” of all work orders to the “Scheduled Date”", fr: "Ajout de la « Durée réelle » de tous les bons de travail à la « Date planifiée »" },
      { en: "There is no “End” field on an MO", fr: "Il n'y a pas de champ « Fin » sur un MO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Order & Work Order Basics): Adding the “Expected Duration” of all work orders to the “Scheduled Date”",
      fr: "Source Odoo Learn (Bases des ordres de fabrication et des ordres de travail) : Ajout de la « Durée prévue » de tous les bons de travail à la « Date planifiée »",
    },
  }),
  complexQ({
    id: "mrp-036",
    module: "mrp",
    text: {
      en: "What does it mean when the “Component Status” for an MO appears as “Available” in an ORANGE font? (Odoo Learn — Manufacturing Order & Work Order Basics)",
      fr: "Qu'est-ce que cela signifie lorsque le « Statut du composant » d'un MO apparaît comme « Disponible » dans une police ORANGE ? (Odoo Learn — Bases des ordres de fabrication et des ordres de travail)",
    },
    correct: {
      en: "The components are in stock, but must be transferred to the production location",
      fr: "Les composants sont en stock, mais doivent être transférés sur le lieu de production",
    },
    distractors: [
      { en: "The required components are in stock", fr: "Les composants requis sont en stock" },
      { en: "The MO is ready to start", fr: "Le MO est prêt à démarrer" },
      { en: "The “Available” status never appears in an orange font", fr: "Le statut « Disponible » n’apparaît jamais en police orange" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Order & Work Order Basics): The components are in stock, but must be transferred to the production location",
      fr: "Source Odoo Learn (Bases des ordres de fabrication et des ordres de travail) : Les composants sont en stock, mais doivent être transférés sur le lieu de production",
    },
  }),
  complexQ({
    id: "mrp-037",
    module: "mrp",
    text: {
      en: "Which setting must be enabled to add operations and work centers to a BoM? (Odoo Learn — Bill of Materials Basics)",
      fr: "Quel paramètre doit être activé pour ajouter des opérations et des postes de travail à une nomenclature ? (Odoo Learn — Bases de la nomenclature)",
    },
    correct: {
      en: "Work Orders.",
      fr: "Bons de travail.",
    },
    distractors: [
      { en: "Manufacturing route", fr: "Itinéraire de fabrication" },
      { en: "Multiple routes", fr: "Plusieurs itinéraires" },
      { en: "Work center locations", fr: "Emplacements des postes de travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill of Materials Basics): Work Orders.",
      fr: "Source Odoo Learn (Bases de la nomenclature) : bons de travail.",
    },
  }),
  complexQ({
    id: "mrp-038",
    module: "mrp",
    text: {
      en: "For products with multiple BoMs, which BoM is selected by default for manufacturing orders? (Odoo Learn — Bill of Materials Basics)",
      fr: "Pour les produits avec plusieurs nomenclatures, quelle nomenclature est sélectionnée par défaut pour les ordres de fabrication ? (Odoo Learn — Bases de la nomenclature)",
    },
    correct: {
      en: "The BoM listed first on the product’s ‘Bill of Materials’ page",
      fr: "La nomenclature répertoriée en premier sur la page « Nomenclature » du produit",
    },
    distractors: [
      { en: "The BoM that was created first", fr: "La BoM créée en premier" },
      { en: "The most recently created BoM", fr: "La nomenclature la plus récemment créée" },
      { en: "No BoM is selected by default", fr: "Aucune nomenclature n'est sélectionnée par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill of Materials Basics): The BoM listed first on the product’s ‘Bill of Materials’ page",
      fr: "Source Odoo Learn (Bases de la nomenclature) : La nomenclature répertoriée en premier sur la page « Nomenclature » du produit",
    },
  }),
  complexQ({
    id: "mrp-039",
    module: "mrp",
    text: {
      en: "Where can files and diagrams be uploaded? (Odoo Learn — Bill of Materials Basics)",
      fr: "Où puis-je télécharger des fichiers et des diagrammes ? (Odoo Learn — Bases de la nomenclature)",
    },
    correct: {
      en: "The Worksheet tab.",
      fr: "L'onglet Feuille de calcul.",
    },
    distractors: [
      { en: "The Instructions tab.", fr: "L'onglet Instructions." },
      { en: "The Notes tab.", fr: "L'onglet Notes." },
      { en: "The Miscellaneous tab.", fr: "L'onglet Divers." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill of Materials Basics): The Worksheet tab.",
      fr: "Source Odoo Learn (Bases de la nomenclature) : L'onglet Feuille de calcul.",
    },
  }),
  complexQ({
    id: "mrp-040",
    module: "mrp",
    text: {
      en: "What does OEE stand for? (Odoo Learn — Work Center Basics)",
      fr: "Que signifie OEE ? (Odoo Learn — Bases du poste de travail)",
    },
    correct: {
      en: "Overall Equipment Effectiveness",
      fr: "Efficacité globale de l'équipement",
    },
    distractors: [
      { en: "Operational Efficiency Estimate", fr: "Estimation de l’efficacité opérationnelle" },
      { en: "Output Efficiency Evaluation", fr: "Évaluation de l’efficacité des résultats" },
      { en: "Operational Equipment Estimate", fr: "Estimation de l'équipement opérationnel" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Center Basics): Overall Equipment Effectiveness",
      fr: "Source Odoo Learn (Bases du centre de travail) : Efficacité globale de l'équipement",
    },
  }),
  complexQ({
    id: "mrp-041",
    module: "mrp",
    text: {
      en: "What happens if the Allowed Employees field is left blank? (Odoo Learn — Work Center Basics)",
      fr: "Que se passe-t-il si le champ Employés autorisés reste vide ? (Odoo Learn — Bases du poste de travail)",
    },
    correct: {
      en: "Anyone can use the work center",
      fr: "Tout le monde peut utiliser le poste de travail",
    },
    distractors: [
      { en: "No one can use the work center", fr: "Personne ne peut utiliser le poste de travail" },
      { en: "Only managers can use the work center.", fr: "Seuls les managers peuvent utiliser le poste de travail." },
      { en: "Only the employee who created the work center can use it.", fr: "Seul le salarié qui a créé le poste de travail peut l'utiliser." },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Center Basics): Anyone can use the work center",
      fr: "Source Odoo Learn (Bases du Work Center) : Tout le monde peut utiliser le centre de travail",
    },
  }),
  complexQ({
    id: "mrp-042",
    module: "mrp",
    text: {
      en: "What does the Product Capacities tab control? (Odoo Learn — Work Center Basics)",
      fr: "Que contrôle l'onglet Capacités du produit ? (Odoo Learn — Bases du poste de travail)",
    },
    correct: {
      en: "Maximum number of products allowed at the work center at a time.",
      fr: "Nombre maximum de produits autorisés au poste de travail à la fois.",
    },
    distractors: [
      { en: "Cost of operating a machine at the work center.", fr: "Coût d'exploitation d'une machine au centre de travail." },
      { en: "Maximum number of employees allowed per shift.", fr: "Nombre maximum d'employés autorisés par quart de travail." },
      { en: "Minimum required tools to meet production goals.", fr: "Outils minimum requis pour atteindre les objectifs de production." },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Center Basics): Maximum number of products allowed at the work center at a time.",
      fr: "Source Odoo Learn (Bases du centre de travail) : Nombre maximum de produits autorisés sur le centre de travail à la fois.",
    },
  }),
  complexQ({
    id: "mrp-043",
    module: "mrp",
    text: {
      en: "What Manufacturing setting must be enabled to have access to work centers? (Odoo Learn — Alternative Work Centers)",
      fr: "Quel paramètre de fabrication doit être activé pour avoir accès aux centres de travail ? (Odoo Learn — Centres de travail alternatifs)",
    },
    correct: {
      en: "Work Orders",
      fr: "Bons de travail",
    },
    distractors: [
      { en: "Shop Floor", fr: "Étage d'atelier" },
      { en: "Master Production Schedule", fr: "Calendrier directeur de production" },
      { en: "Quality", fr: "Qualité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Alternative Work Centers): Work Orders",
      fr: "Source Odoo Learn (Centres de travail alternatifs) : bons de travail",
    },
  }),
  complexQ({
    id: "mrp-044",
    module: "mrp",
    text: {
      en: "What should be true of the equipment at a work center and its alternative? (Odoo Learn — Alternative Work Centers)",
      fr: "Que devrait être vrai de l'équipement d'un centre de travail et de son alternative ? (Odoo Learn — Centres de travail alternatifs)",
    },
    correct: {
      en: "It must be similar enough that the same tasks can be completed at each work center.",
      fr: "Il doit être suffisamment similaire pour que les mêmes tâches puissent être effectuées sur chaque poste de travail.",
    },
    distractors: [
      { en: "It must be identical.", fr: "Il doit être identique." },
      { en: "It must be named the same.", fr: "Il doit porter le même nom." },
      { en: "It must be different to ensure that different instructions of a work order can be carried out between the two.", fr: "Il doit être différent pour garantir que différentes instructions d'un bon de travail puissent être exécutées entre les deux." },
    ],
    explanation: {
      en: "Source Odoo Learn (Alternative Work Centers): It must be similar enough that the same tasks can be completed at each work center.",
      fr: "Source Odoo Learn (Centres de travail alternatifs) : Il doit être suffisamment similaire pour que les mêmes tâches puissent être effectuées dans chaque centre de travail.",
    },
  }),
  complexQ({
    id: "mrp-045",
    module: "mrp",
    text: {
      en: "What happens when new work orders arrive for a work center that is unavailable? (Odoo Learn — Alternative Work Centers)",
      fr: "Que se passe-t-il lorsque de nouveaux ordres de travail arrivent pour un centre de charge qui n'est pas disponible ? (Odoo Learn — Centres de travail alternatifs)",
    },
    correct: {
      en: "The ‘Alternative Workcenter’ specified in the work center form is used for planning if available.",
      fr: "Le « Centre de travail alternatif » spécifié dans le formulaire du poste de travail est utilisé pour la planification s'il est disponible.",
    },
    distractors: [
      { en: "The new work orders are planned after the work orders at the original work center.", fr: "Les nouveaux ordres de travail sont planifiés après les ordres de travail au poste de travail d'origine." },
      { en: "The alternative work center is always used.", fr: "Le poste de travail alternatif est toujours utilisé." },
      { en: "The alternative work center is not used unless it is specified in a product’s bill of materials.", fr: "Le poste de travail alternatif n’est utilisé que s’il est spécifié dans la nomenclature d’un produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Alternative Work Centers): The ‘Alternative Workcenter’ specified in the work center form is used for planning if available.",
      fr: "Source Odoo Learn (Centres de travail alternatifs) : Le « Centre de travail alternatif » spécifié dans le formulaire du centre de travail est utilisé pour la planification s'il est disponible.",
    },
  }),
  complexQ({
    id: "mrp-046",
    module: "mrp",
    text: {
      en: "How do I open the form for a specific work center? (Odoo Learn — Work Center Parameters)",
      fr: "Comment ouvrir le formulaire pour un poste de travail spécifique ? (Odoo Learn — Paramètres du poste de travail)",
    },
    correct: {
      en: "‘Manufacturing’ app -> ‘Configuration’ -> ‘Work Centers’ -> select work center",
      fr: "Application « Fabrication » -> « Configuration » -> « Centres de travail » -> sélectionnez le poste de travail",
    },
    distractors: [
      { en: "‘Manufacturing’ app -> ‘Operations’ -> ‘Work Centers’ -> select work center", fr: "Application « Fabrication » -> « Opérations » -> « Centres de travail » -> sélectionnez le poste de travail" },
      { en: "‘Shop Floor’ module -> ‘Operations’ -> ‘Work Centers’ -> select work center", fr: "Module « Atelier » -> « Opérations » -> « Centres de travail » -> sélectionnez le poste de travail" },
      { en: "‘Shop Floor’ module -> ‘Configuration’ -> ‘Work Centers’ -> select work center", fr: "Module 'Shop Floor' -> 'Configuration' -> 'Work Centers' -> sélectionner le poste de travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Center Parameters): ‘Manufacturing’ app -> ‘Configuration’ -> ‘Work Centers’ -> select work center",
      fr: "Source Odoo Learn (Paramètres du centre de travail) : application « Fabrication » -> « Configuration » -> « Centres de travail » -> sélectionnez le centre de travail",
    },
  }),
  complexQ({
    id: "mrp-047",
    module: "mrp",
    text: {
      en: "Where can I find the ‘Production Information’ section on a work center form? (Odoo Learn — Work Center Parameters)",
      fr: "Où puis-je trouver la section « Informations sur la production » sur un formulaire de centre de charge ? (Odoo Learn — Paramètres du poste de travail)",
    },
    correct: {
      en: "The ‘General Information’ tab",
      fr: "L'onglet « Informations générales »",
    },
    distractors: [
      { en: "The ‘Specific Capacities’ tab", fr: "L'onglet « Capacités spécifiques »" },
      { en: "The ‘Equipment’ tab", fr: "L'onglet « Équipement »" },
      { en: "The ‘Maintenance’ tab", fr: "L'onglet « Maintenance »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Center Parameters): The ‘General Information’ tab",
      fr: "Source Odoo Learn (Paramètres du poste de travail) : L'onglet « Informations générales »",
    },
  }),
  complexQ({
    id: "mrp-048",
    module: "mrp",
    text: {
      en: "After opening an MO, where can I see the expected duration for a specific work order? (Odoo Learn — Work Center Parameters)",
      fr: "Après avoir ouvert un MO, où puis-je voir la durée prévue pour un bon de travail spécifique ? (Odoo Learn — Paramètres du poste de travail)",
    },
    correct: {
      en: "On the ‘Work Orders’ tab, in the ‘Expected Duration’ column",
      fr: "Dans l'onglet « Bons de travail », dans la colonne « Durée prévue »",
    },
    distractors: [
      { en: "On the ‘Expected Duration’ tab", fr: "Dans l'onglet « Durée prévue »" },
      { en: "In the ‘Expected Duration’ field at the top of the MO form", fr: "Dans le champ « Durée prévue » en haut du formulaire MO" },
      { en: "The expected duration of work orders is not listed on MOs", fr: "La durée prévue des bons de travail n'est pas indiquée sur les MO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Center Parameters): On the ‘Work Orders’ tab, in the ‘Expected Duration’ column",
      fr: "Source Odoo Learn (Paramètres du centre de travail) : Sur l'onglet « Ordres de travail », dans la colonne « Durée prévue »",
    },
  }),
  complexQ({
    id: "mrp-049",
    module: "mrp",
    text: {
      en: "Which settings must be enabled to use work order dependencies? (Odoo Learn — Work Order Dependencies)",
      fr: "Quels paramètres doivent être activés pour utiliser les dépendances des ordres de travail ? (Odoo Learn — Dépendances des ordres de travail)",
    },
    correct: {
      en: "‘Work Orders’ and ‘Work Order Dependencies’",
      fr: "« Ordres de travail » et « Dépendances des ordres de travail »",
    },
    distractors: [
      { en: "‘Work Orders’ and ‘Work Centers’", fr: "« Ordres de travail » et « Centres de travail »" },
      { en: "‘Work Centers’ and ‘Work Order Dependencies’", fr: "« Centres de travail » et « Dépendances des ordres de travail »" },
      { en: "Work order dependencies are enabled by default", fr: "Les dépendances des bons de travail sont activées par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Order Dependencies): ‘Work Orders’ and ‘Work Order Dependencies’",
      fr: "Source Odoo Learn (Dépendances des bons de travail) : « Bons de travail » et « Dépendances des bons de travail »",
    },
  }),
  complexQ({
    id: "mrp-050",
    module: "mrp",
    text: {
      en: "How do I enable work order dependencies on a bill of materials? (Odoo Learn — Work Order Dependencies)",
      fr: "Comment puis-je activer les dépendances d'ordre de travail sur une nomenclature ? (Odoo Learn — Dépendances des ordres de travail)",
    },
    correct: {
      en: "Click the ‘Miscellaneous’ tab, and tick the ‘Operation Dependencies’ checkbox",
      fr: "Cliquez sur l'onglet « Divers » et cochez la case « Dépendances des opérations ».",
    },
    distractors: [
      { en: "Tick the ‘Operation Dependencies’ checkbox at the top of the bill of materials form", fr: "Cochez la case « Dépendances des opérations » en haut du formulaire de nomenclature." },
      { en: "Click the additional settings button on the ‘Operations’ tab, and tick the ‘Operation Dependencies’ checkbox", fr: "Cliquez sur le bouton Paramètres supplémentaires dans l'onglet « Opérations » et cochez la case « Dépendances des opérations »." },
      { en: "Operation dependencies are available by default on bills of materials", fr: "Les dépendances d'opération sont disponibles par défaut sur les nomenclatures" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Order Dependencies): Click the ‘Miscellaneous’ tab, and tick the ‘Operation Dependencies’ checkbox",
      fr: "Source Odoo Learn (Dépendances des bons de travail) : Cliquez sur l'onglet « Divers » et cochez la case « Dépendances des opérations »",
    },
  }),
  complexQ({
    id: "mrp-051",
    module: "mrp",
    text: {
      en: "On a confirmed MO, which button should be clicked to schedule when the MOs work orders will be carried out? (Odoo Learn — Work Order Dependencies)",
      fr: "Sur un MO confirmé, sur quel bouton faut-il cliquer pour planifier le moment où les bons de travail des MO seront exécutés ? (Odoo Learn — Dépendances des ordres de travail)",
    },
    correct: {
      en: "‘Plan’",
      fr: "'Plan'",
    },
    distractors: [
      { en: "‘Schedule’", fr: "'Calendrier'" },
      { en: "‘Date’", fr: "'Date'" },
      { en: "‘Process", fr: "'Processus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Work Order Dependencies): ‘Plan’",
      fr: "Source Odoo Learn (Dépendances des bons de travail) : « Plan »",
    },
  }),
  complexQ({
    id: "mrp-052",
    module: "mrp",
    text: {
      en: "Which methods can be used to automatically generate an MO to fulfill the need created by an SO? (Odoo Learn — From Sales Order to Manufacturing Order)",
      fr: "Quelles méthodes peuvent être utilisées pour générer automatiquement un MO pour répondre au besoin créé par un SO ? (Odoo Learn — De la commande client à l’ordre de fabrication)",
    },
    correct: {
      en: "A + B",
      fr: "A+B",
    },
    distractors: [
      { en: "Replenish on Order (MTO)", fr: "Réapprovisionnement sur commande (MTO)" },
      { en: "0/0/1 reordering rule", fr: "Règle de réorganisation 0/0/1" },
      { en: "Purchase orders", fr: "Bons de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (From Sales Order to Manufacturing Order): A + B",
      fr: "Source Odoo Learn (De la commande client à la commande de fabrication) : A + B",
    },
  }),
  complexQ({
    id: "mrp-053",
    module: "mrp",
    text: {
      en: "When using the Replenish on Order (MTO) route to generate an MO, which route must also be enabled? (Odoo Learn — From Sales Order to Manufacturing Order)",
      fr: "Lorsque vous utilisez la route Replenish on Order (MTO) pour générer un MO, quelle route doit également être activée ? (Odoo Learn — De la commande client à l’ordre de fabrication)",
    },
    correct: {
      en: "Manufacture",
      fr: "Fabrication",
    },
    distractors: [
      { en: "Buy", fr: "Acheter" },
      { en: "Dropship", fr: "Livraison directe" },
      { en: "Purchase", fr: "Achat" },
    ],
    explanation: {
      en: "Source Odoo Learn (From Sales Order to Manufacturing Order): Manufacture",
      fr: "Source Odoo Learn (De la commande client à la commande de fabrication) : Fabrication",
    },
  }),
  complexQ({
    id: "mrp-054",
    module: "mrp",
    text: {
      en: "Which product replenishment method always creates an MO when the product is included in a sales order? (Odoo Learn — From Sales Order to Manufacturing Order)",
      fr: "Quelle méthode de réapprovisionnement en produit crée toujours un MO lorsque le produit est inclus dans une commande client ? (Odoo Learn — De la commande client à l’ordre de fabrication)",
    },
    correct: {
      en: "Replenish on Order (MTO)",
      fr: "Réapprovisionnement sur commande (MTO)",
    },
    distractors: [
      { en: "0/0/1 reordering rule", fr: "Règle de réorganisation 0/0/1" },
      { en: "A + B", fr: "A+B" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (From Sales Order to Manufacturing Order): Replenish on Order (MTO)",
      fr: "Source Odoo Learn (De la commande client à la commande de fabrication) : Réapprovisionnement sur commande (MTO)",
    },
  }),
  complexQ({
    id: "mrp-055",
    module: "mrp",
    text: {
      en: "How many manufacturing steps should I use to record the transfer of finished products to inventory? (Odoo Learn — Manufacturing Steps)",
      fr: "Combien d’étapes de fabrication dois-je suivre pour enregistrer le transfert des produits finis vers l’inventaire ? (Odoo Learn — Étapes de fabrication)",
    },
    correct: {
      en: "Three",
      fr: "Trois",
    },
    distractors: [
      { en: "One", fr: "Un" },
      { en: "Two", fr: "Deux" },
      { en: "Four", fr: "Quatre" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Steps): Three",
      fr: "Source Odoo Learn (Étapes de fabrication) : Trois",
    },
  }),
  complexQ({
    id: "mrp-056",
    module: "mrp",
    text: {
      en: "How do I see all the product movements related to a specific MO? (Odoo Learn — Manufacturing Steps)",
      fr: "Comment voir tous les mouvements de produits liés à un MO spécifique ? (Odoo Learn — Étapes de fabrication)",
    },
    correct: {
      en: "Click the ‘Product Moves’ smart button on the MO.",
      fr: "Cliquez sur le bouton intelligent « Product Moves » sur le MO.",
    },
    distractors: [
      { en: "Click the ‘Transfers’ smart button on the MO.", fr: "Cliquez sur le bouton intelligent « Transferts » sur le MO." },
      { en: "Click the ‘Overview’ smart button on the MO.", fr: "Cliquez sur le bouton intelligent « Aperçu » sur le MO." },
      { en: "It is not possible to see product movements for a specific MO.", fr: "Il n'est pas possible de voir les mouvements de produits pour un MO spécifique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Steps): Click the ‘Product Moves’ smart button on the MO.",
      fr: "Source Odoo Learn (étapes de fabrication) : cliquez sur le bouton intelligent « Déplacements de produit » sur le MO.",
    },
  }),
  complexQ({
    id: "mrp-057",
    module: "mrp",
    text: {
      en: "In which app can I select the number of steps required to process MOs? (Odoo Learn — Manufacturing Steps)",
      fr: "Dans quelle application puis-je sélectionner le nombre d’étapes nécessaires au traitement des MO ? (Odoo Learn — Étapes de fabrication)",
    },
    correct: {
      en: "Inventory",
      fr: "Inventaire",
    },
    distractors: [
      { en: "PLM", fr: "PLM" },
      { en: "Manufacturing", fr: "Fabrication" },
      { en: "Project", fr: "Projet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Steps): Inventory",
      fr: "Source Odoo Learn (Étapes de fabrication) : Inventaire",
    },
  }),
  complexQ({
    id: "mrp-058",
    module: "mrp",
    text: {
      en: "How do I change the hours that Odoo uses to automatically plan work orders? (Odoo Learn — Manufacturing Planning)",
      fr: "Comment puis-je modifier les heures utilisées par Odoo pour planifier automatiquement les bons de travail ? (Odoo Learn — Planification de la fabrication)",
    },
    correct: {
      en: "Change the Working Hours of the Work Center.",
      fr: "Modifiez les heures de travail du poste de travail.",
    },
    distractors: [
      { en: "Change the hours on the Bill of Materials.", fr: "Modifiez les heures sur la nomenclature." },
      { en: "Fill the work center with work orders so that no more can be scheduled.", fr: "Remplissez le poste de travail d'ordres de travail afin qu'aucun autre ne puisse être planifié." },
      { en: "Change the employee hours.", fr: "Modifiez les horaires des employés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Planning): Change the Working Hours of the Work Center.",
      fr: "Source Odoo Learn (Manufacturing Planning) : Modifier les horaires de travail du poste de travail.",
    },
  }),
  complexQ({
    id: "mrp-059",
    module: "mrp",
    text: {
      en: "When will Odoo schedule the 2nd work order operation? (Odoo Learn — Manufacturing Planning)",
      fr: "Quand Odoo planifiera-t-il la 2ème opération d’intervention ? (Odoo Learn — Planification de la fabrication)",
    },
    correct: {
      en: "As soon as the first work order is finished and a work center has available capacity.",
      fr: "Dès que le premier ordre de travail est terminé et qu'un centre de travail a une capacité disponible.",
    },
    distractors: [
      { en: "As soon as possible after the Manufacturing Order “Start” time.", fr: "Dès que possible après l’heure de « démarrage » de l’ordre de fabrication." },
      { en: "Only after the first operation has been marked as “Done”", fr: "Seulement après que la première opération ait été marquée comme « Terminé »" },
      { en: "Immediately after the 1st work order is scheduled to be finished, based on the default duration.", fr: "Immédiatement après la fin du premier bon de travail, il est prévu qu'il soit terminé, en fonction de la durée par défaut." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Planning): As soon as the first work order is finished and a work center has available capacity.",
      fr: "Source Odoo Learn (Manufacturing Planning) : Dès que le premier bon de travail est terminé et qu'un centre de travail a une capacité disponible.",
    },
  }),
  complexQ({
    id: "mrp-060",
    module: "mrp",
    text: {
      en: "What is the easiest way to resolve a conflict if I have too many operations planned at the same time at a work center (Odoo Learn — Manufacturing Planning)",
      fr: "Quelle est la manière la plus simple de résoudre un conflit si j'ai trop d'opérations planifiées en même temps dans un centre de travail ? (Odoo Learn — Planification de la fabrication)",
    },
    correct: {
      en: "Click the error in the list view and click the “Replan” button.",
      fr: "Cliquez sur l'erreur dans la vue de liste et cliquez sur le bouton « Replanifier ».",
    },
    distractors: [
      { en: "Manually move it around on the schedule until the warning goes away.", fr: "Déplacez-le manuellement selon le planning jusqu'à ce que l'avertissement disparaisse." },
      { en: "Hope the employees on the floor figure it out.", fr: "J'espère que les employés sur le terrain comprendront." },
      { en: "Unplan the entire manufacturing order and click the “Plan” button again.", fr: "Annulez la planification de l'intégralité de l'ordre de fabrication et cliquez à nouveau sur le bouton « Planifier »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Planning): Click the error in the list view and click the “Replan” button.",
      fr: "Source Odoo Learn (Manufacturing Planning) : Cliquez sur l'erreur dans la vue liste et cliquez sur le bouton « Replanifier ».",
    },
  }),
  complexQ({
    id: "mrp-061",
    module: "mrp",
    text: {
      en: "Where is the Manufacturing Lead Time set for a product? (Odoo Learn — Manufacturing Lead Times)",
      fr: "Où est fixé le délai de fabrication d’un produit ? (Odoo Learn — Délais de fabrication)",
    },
    correct: {
      en: "Bill of Materials → Miscellaneous tab",
      fr: "Nomenclature → Onglet Divers",
    },
    distractors: [
      { en: "Product → Sales tab", fr: "Produit → Onglet Ventes" },
      { en: "Product → Inventory tab", fr: "Produit → Onglet Inventaire" },
      { en: "Purchase Order", fr: "Bon de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Lead Times): Bill of Materials → Miscellaneous tab",
      fr: "Source Odoo Learn (Délais de fabrication) : Nomenclature → Onglet Divers",
    },
  }),
  complexQ({
    id: "mrp-062",
    module: "mrp",
    text: {
      en: "What is the purpose of the \"Days to Prepare Manufacturing Order\" field? (Odoo Learn — Manufacturing Lead Times)",
      fr: "A quoi sert le champ « Jours pour préparer l'ordre de fabrication » ? (Odoo Learn — Délais de fabrication)",
    },
    correct: {
      en: "Days needed to procure materials or sub-assemblies",
      fr: "Jours nécessaires pour se procurer des matériaux ou des sous-ensembles",
    },
    distractors: [
      { en: "Time needed to package the final product", fr: "Temps nécessaire pour emballer le produit final" },
      { en: "Time to compute shipping fees", fr: "Il est temps de calculer les frais d'expédition" },
      { en: "Days to complete final inspections", fr: "Jours pour effectuer les inspections finales" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Lead Times): Days needed to procure materials or sub-assemblies",
      fr: "Source Odoo Learn (Délais de fabrication) : Jours nécessaires pour l'approvisionnement en matériaux ou sous-ensembles",
    },
  }),
  complexQ({
    id: "mrp-063",
    module: "mrp",
    text: {
      en: "Which report do you access from the forecast screen to see component-level availability? (Odoo Learn — Manufacturing Lead Times)",
      fr: "À quel rapport accédez-vous à partir de l'écran de prévisions pour connaître la disponibilité au niveau des composants ? (Odoo Learn — Délais de fabrication)",
    },
    correct: {
      en: "Manufacturing Forecast",
      fr: "Prévisions de fabrication",
    },
    distractors: [
      { en: "Lead Time Summary", fr: "Récapitulatif des délais" },
      { en: "Delivery Schedule", fr: "Calendrier de livraison" },
      { en: "Vendor Report", fr: "Rapport du fournisseur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Lead Times): Manufacturing Forecast",
      fr: "Source Odoo Learn (Délai de fabrication) : Prévisions de fabrication",
    },
  }),
  complexQ({
    id: "mrp-064",
    module: "mrp",
    text: {
      en: "How do I split an MO into multiple MOs? (Odoo Learn — Split and Merge Manufacturing Orders)",
      fr: "Comment diviser un MO en plusieurs MO ? (Odoo Learn — Fractionner et fusionner les ordres de fabrication)",
    },
    correct: {
      en: "Select an MO -> Actions button -> ‘Split’",
      fr: "Sélectionnez un MO -> Bouton Actions -> « Split »",
    },
    distractors: [
      { en: "‘Split’ smart button on an MO", fr: "Bouton intelligent « Split » sur un MO" },
      { en: "Manufacturing -> Operations -> Manufacturing Orders -> right click MO -> Split button", fr: "Fabrication -> Opérations -> Ordres de fabrication -> clic droit MO -> bouton Fractionner" },
      { en: "It is not possible to split an MO", fr: "Il n'est pas possible de diviser un MO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Split and Merge Manufacturing Orders): Select an MO -> Actions button -> ‘Split’",
      fr: "Source Odoo Learn (Diviser et fusionner les commandes de fabrication) : Sélectionnez un MO -> Bouton Actions -> « Split »",
    },
  }),
  complexQ({
    id: "mrp-065",
    module: "mrp",
    text: {
      en: "How are split MOs titled? (Odoo Learn — Split and Merge Manufacturing Orders)",
      fr: "Comment les MO divisés sont-ils intitulés ? (Odoo Learn — Fractionner et fusionner les ordres de fabrication)",
    },
    correct: {
      en: "With the original reference number, plus an additional numbered tag",
      fr: "Avec le numéro de référence d'origine, plus une étiquette numérotée supplémentaire",
    },
    distractors: [
      { en: "With a brand new reference number", fr: "Avec un tout nouveau numéro de référence" },
      { en: "All split MOs keep the reference number of the original MO", fr: "Tous les OM fractionnés conservent le numéro de référence de l'OM d'origine" },
      { en: "Split MOs are not titled", fr: "Les MO divisés ne sont pas intitulés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Split and Merge Manufacturing Orders): With the original reference number, plus an additional numbered tag",
      fr: "Source Odoo Learn (Split and Merge Manufacturing Orders) : Avec le numéro de référence d'origine, plus une étiquette numérotée supplémentaire",
    },
  }),
  complexQ({
    id: "mrp-066",
    module: "mrp",
    text: {
      en: "When merging two or more MOs, what must all MOs being merged have in common? (Odoo Learn — Split and Merge Manufacturing Orders)",
      fr: "Lors de la fusion de deux ou plusieurs OM, qu’est-ce que tous les OM fusionnés doivent avoir en commun ? (Odoo Learn — Fractionner et fusionner les ordres de fabrication)",
    },
    correct: {
      en: "The product being produced",
      fr: "Le produit en cours de fabrication",
    },
    distractors: [
      { en: "The quantity of the product being produced", fr: "La quantité du produit fabriqué" },
      { en: "The scheduled date", fr: "La date prévue" },
      { en: "Nothing", fr: "Rien" },
    ],
    explanation: {
      en: "Source Odoo Learn (Split and Merge Manufacturing Orders): The product being produced",
      fr: "Source Odoo Learn (Split and Merge Manufacturing Orders) : Le produit en cours de fabrication",
    },
  }),
  complexQ({
    id: "mrp-067",
    module: "mrp",
    text: {
      en: "Under which section is the Lots & Serial Numbers option located in the Settings app? (Odoo Learn — Manufacture w/ Lots and Serial Numbers)",
      fr: "Sous quelle section se trouve l'option Lots et numéros de série dans l'application Paramètres ? (Odoo Learn — Fabrication avec lots et numéros de série)",
    },
    correct: {
      en: "Traceability",
      fr: "Traçabilité",
    },
    distractors: [
      { en: "Operations", fr: "Opérations" },
      { en: "Product Control", fr: "Contrôle des produits" },
      { en: "Inventory Adjustment", fr: "Ajustement des stocks" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacture w/ Lots and Serial Numbers): Traceability",
      fr: "Source Odoo Learn (Fabrication avec lots et numéros de série) : Traçabilité",
    },
  }),
  complexQ({
    id: "mrp-068",
    module: "mrp",
    text: {
      en: "What does the First SN field represent? (Odoo Learn — Manufacture w/ Lots and Serial Numbers)",
      fr: "Que représente le champ Premier SN ? (Odoo Learn — Fabrication avec lots et numéros de série)",
    },
    correct: {
      en: "The next available serial number for that product",
      fr: "Le prochain numéro de série disponible pour ce produit",
    },
    distractors: [
      { en: "The last serial number used in previous MOs", fr: "Le dernier numéro de série utilisé dans les MO précédents" },
      { en: "The batch serial counter", fr: "Le compteur série de lots" },
      { en: "The production date identifier", fr: "L'identifiant de la date de production" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacture w/ Lots and Serial Numbers): The next available serial number for that product",
      fr: "Source Odoo Learn (Fabrication avec lots et numéros de série) : Le prochain numéro de série disponible pour ce produit",
    },
  }),
  complexQ({
    id: "mrp-069",
    module: "mrp",
    text: {
      en: "Which smart button appears on a completed MO when using tracked products? (Odoo Learn — Manufacture w/ Lots and Serial Numbers)",
      fr: "Quel bouton intelligent apparaît sur un MO terminé lors de l’utilisation de produits suivis ? (Odoo Learn — Fabrication avec lots et numéros de série)",
    },
    correct: {
      en: "Traceability",
      fr: "Traçabilité",
    },
    distractors: [
      { en: "Components", fr: "Composants" },
      { en: "Production Lots", fr: "Lots de production" },
      { en: "SN Manager", fr: "Gestionnaire SN" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacture w/ Lots and Serial Numbers): Traceability",
      fr: "Source Odoo Learn (Fabrication avec lots et numéros de série) : Traçabilité",
    },
  }),
  complexQ({
    id: "mrp-070",
    module: "mrp",
    text: {
      en: "In which app can I create a new maintenance request? (Odoo Learn — Maintenance Requests)",
      fr: "Dans quelle application puis-je créer une nouvelle demande de maintenance ? (Odoo Learn — Demandes d'entretien)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "‘Maintenance’", fr: "'Entretien'" },
      { en: "‘Manufacturing’", fr: "'Fabrication'" },
      { en: "‘Shop Floor’", fr: "« Atelier »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Maintenance Requests): All of the above",
      fr: "Source Odoo Learn (Demandes de maintenance) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "mrp-071",
    module: "mrp",
    text: {
      en: "What is the effect of ticking the ‘Block Workcenter’ checkbox on a maintenance request form for a work center? (Odoo Learn — Maintenance Requests)",
      fr: "Quel est l'effet de cocher la case « Bloquer le centre de travail » sur un formulaire de demande de maintenance pour un centre de travail ? (Odoo Learn — Demandes d'entretien)",
    },
    correct: {
      en: "Work orders cannot be planned at the work center",
      fr: "Les ordres de travail ne peuvent pas être planifiés au poste de travail",
    },
    distractors: [
      { en: "The work center is deleted", fr: "Le poste de travail est supprimé" },
      { en: "The work order does not appear in the ‘Shop Floor’ module", fr: "Le bon de travail n'apparaît pas dans le module « Atelier »" },
      { en: "There is no ‘Block Workcenter’ button on maintenance request forms", fr: "Il n'y a pas de bouton « Bloquer le centre de travail » sur les formulaires de demande de maintenance" },
    ],
    explanation: {
      en: "Source Odoo Learn (Maintenance Requests): Work orders cannot be planned at the work center",
      fr: "Source Odoo Learn (Demandes de maintenance) : Les ordres de travail ne peuvent pas être planifiés au poste de travail",
    },
  }),
  complexQ({
    id: "mrp-072",
    module: "mrp",
    text: {
      en: "How do I view all scheduled maintenance requests for a specific team? (Odoo Learn — Maintenance Requests)",
      fr: "Comment puis-je afficher toutes les demandes de maintenance planifiées pour une équipe spécifique ? (Odoo Learn — Demandes d'entretien)",
    },
    correct: {
      en: "‘Maintenance’ app -> ‘Scheduled’ button on maintenance team’s card",
      fr: "Application « Maintenance » -> bouton « Planifié » sur la carte de l'équipe de maintenance",
    },
    distractors: [
      { en: "‘Maintenance’ app -> ‘To Do’ button on maintenance team’s card", fr: "Application « Maintenance » -> bouton « To Do » sur la carte de l'équipe de maintenance" },
      { en: "‘Maintenance’ app -> ‘Configuration’ -> ‘Maintenance Teams’ -> select team", fr: "Application « Maintenance » -> « Configuration » -> « Équipes de maintenance » -> sélectionner une équipe" },
      { en: "It is not possible to view scheduled requests for a specific team", fr: "Il n'est pas possible d'afficher les demandes planifiées pour une équipe spécifique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Maintenance Requests): ‘Maintenance’ app -> ‘Scheduled’ button on maintenance team’s card",
      fr: "Source Odoo Learn (Demandes de maintenance) : application « Maintenance » -> bouton « Planifié » sur la carte de l'équipe de maintenance",
    },
  }),
  complexQ({
    id: "mrp-073",
    module: "mrp",
    text: {
      en: "How many transfer orders are created when manufacturing a product using one step? (Odoo Learn — Manufacturing in One Step)",
      fr: "Combien d'ordres de transfert sont créés lors de la fabrication d'un produit en une seule étape ? (Odoo Learn — Fabrication en une seule étape)",
    },
    correct: {
      en: "Zero",
      fr: "Zéro",
    },
    distractors: [
      { en: "One", fr: "Un" },
      { en: "Two", fr: "Deux" },
      { en: "Three", fr: "Trois" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing in One Step): Zero",
      fr: "Source Odoo Learn (Fabrication en une seule étape) : Zéro",
    },
  }),
  complexQ({
    id: "mrp-074",
    module: "mrp",
    text: {
      en: "Where is one-step manufacturing enabled? (Odoo Learn — Manufacturing in One Step)",
      fr: "Où la fabrication en une étape est-elle possible ? (Odoo Learn — Fabrication en une seule étape)",
    },
    correct: {
      en: "Inventory > Configuration > Warehouses > select a Warehouse > select “Manufacture (1 Step)” in the Manufacture field",
      fr: "Inventaire > Configuration > Entrepôts > sélectionnez un entrepôt > sélectionnez « Fabrication (1 étape) » dans le champ Fabrication",
    },
    distractors: [
      { en: "Inventory > Configuration > select “One-step manufacturing”", fr: "Inventaire > Configuration > sélectionnez « Fabrication en une étape »" },
      { en: "Manufacturing > Configuration > Steps > select “One-step manufacturing”", fr: "Fabrication > Configuration > Étapes > sélectionnez « Fabrication en une étape »" },
      { en: "Manufacturing > Operations > Manufacturing Orders > select MO > Miscellaneous tab > select “One-step manufacturing”", fr: "Fabrication > Opérations > Ordres de fabrication > sélectionnez MO > onglet Divers > sélectionnez « Fabrication en une étape »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing in One Step): Inventory > Configuration > Warehouses > select a Warehouse > select “Manufacture (1 Step)” in the Manufacture field",
      fr: "Source Odoo Learn (Fabrication en une étape) : Inventaire > Configuration > Entrepôts > sélectionnez un entrepôt > sélectionnez « Fabrication (1 étape) » dans le champ Fabrication",
    },
  }),
  complexQ({
    id: "mrp-075",
    module: "mrp",
    text: {
      en: "What happens after you click “Mark as Done” on the final work order for an MO in the Shop Floor module? (Odoo Learn — Manufacturing in One Step)",
      fr: "Que se passe-t-il une fois que vous avez cliqué sur « Marquer comme terminé » sur le bon de travail final pour un MO dans le module Shop Floor ? (Odoo Learn — Fabrication en une seule étape)",
    },
    correct: {
      en: "A “Close Production” button appears that closes the MO when clicked",
      fr: "Un bouton « Fermer la production » apparaît et ferme le MO lorsque vous cliquez dessus.",
    },
    distractors: [
      { en: "The work order card fades away, and the MO is closed", fr: "La carte de bon de travail disparaît et le MO est fermé" },
      { en: "The work order card fades away, and the MO is left open", fr: "La carte de bon de travail disparaît et le MO reste ouvert" },
      { en: "A “Manufacturing Order” button appears, which opens the MO", fr: "Un bouton « Ordre de fabrication » apparaît, qui ouvre le MO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing in One Step): A “Close Production” button appears that closes the MO when clicked",
      fr: "Source Odoo Learn (Fabrication en une seule étape) : Un bouton « Fermer la production » apparaît qui ferme le MO lorsque vous cliquez dessus",
    },
  }),
  complexQ({
    id: "mrp-076",
    module: "mrp",
    text: {
      en: "What is the main benefit of using two or three-step manufacturing workflows in Odoo? (Odoo Learn — Manufacture in 2 or 3 Steps)",
      fr: "Quel est le principal avantage d’utiliser des workflows de fabrication en deux ou trois étapes dans Odoo ? (Odoo Learn — Fabrication en 2 ou 3 étapes)",
    },
    correct: {
      en: "Better tracking of material and product movement",
      fr: "Meilleur suivi des mouvements de matériaux et de produits",
    },
    distractors: [
      { en: "Faster production time", fr: "Temps de production plus rapide" },
      { en: "Automated supplier communication", fr: "Communication automatisée avec les fournisseurs" },
      { en: "Reduced software costs", fr: "Coûts logiciels réduits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacture in 2 or 3 Steps): Better tracking of material and product movement",
      fr: "Source Odoo Learn (Fabrication en 2 ou 3 Étapes) : Meilleur suivi des mouvements de matière et de produit",
    },
  }),
  complexQ({
    id: "mrp-077",
    module: "mrp",
    text: {
      en: "Where do you configure the default manufacturing path for your warehouse? (Odoo Learn — Manufacture in 2 or 3 Steps)",
      fr: "Où configurez-vous le chemin de fabrication par défaut pour votre entrepôt ? (Odoo Learn — Fabrication en 2 ou 3 étapes)",
    },
    correct: {
      en: "On the warehouse page under Configuration",
      fr: "Sur la page de l'entrepôt sous Configuration",
    },
    distractors: [
      { en: "In the Manufacturing Orders list", fr: "Dans la liste des ordres de fabrication" },
      { en: "In the BOM settings", fr: "Dans les paramètres de nomenclature" },
      { en: "On the Product form", fr: "Sur le formulaire Produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacture in 2 or 3 Steps): On the warehouse page under Configuration",
      fr: "Source Odoo Learn (Fabrication en 2 ou 3 Étapes) : Sur la page entrepôt sous Configuration",
    },
  }),
  complexQ({
    id: "mrp-078",
    module: "mrp",
    text: {
      en: "What does the “Transfers” smart button do in the MO view? (Odoo Learn — Manufacture in 2 or 3 Steps)",
      fr: "À quoi sert le bouton intelligent « Transferts » dans la vue MO ? (Odoo Learn — Fabrication en 2 ou 3 étapes)",
    },
    correct: {
      en: "Takes you to the pick operation for components",
      fr: "Vous amène à l'opération de sélection des composants",
    },
    distractors: [
      { en: "Opens the work order", fr: "Ouvre le bon de travail" },
      { en: "Opens vendor information", fr: "Ouvre les informations sur le fournisseur" },
      { en: "Shows sales orders", fr: "Affiche les commandes client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacture in 2 or 3 Steps): Takes you to the pick operation for components",
      fr: "Source Odoo Learn (Fabrication en 2 ou 3 étapes) : vous amène à l'opération de picking des composants",
    },
  }),
  complexQ({
    id: "mrp-079",
    module: "mrp",
    text: {
      en: "In the Shop Floor module, how do I modify a work order to produce fewer units than originally intended? (Odoo Learn — Manufacturing Backorders)",
      fr: "Dans le module Shop Floor, comment puis-je modifier un bon de travail pour produire moins d'unités que prévu initialement ? (Odoo Learn — Commandes en souffrance de fabrication)",
    },
    correct: {
      en: "Click ‘Register Production’, enter the new quantity in the ‘Quantity Produced’ field, and click ‘Validate’",
      fr: "Cliquez sur « Enregistrer la production », saisissez la nouvelle quantité dans le champ « Quantité produite », puis cliquez sur « Valider ».",
    },
    distractors: [
      { en: "Click ‘# Units’", fr: "Cliquez sur « # Unités »" },
      { en: "Click the gear icon, and select ‘Adjust Units’", fr: "Cliquez sur l'icône d'engrenage et sélectionnez « Ajuster les unités »" },
      { en: "This can only be done on the MO in the backend.", fr: "Cela ne peut être fait que sur le MO dans le backend." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Backorders): Click ‘Register Production’, enter the new quantity in the ‘Quantity Produced’ field, and click ‘Validate’",
      fr: "Source Odoo Learn (Manufacturing Backorders) : Cliquez sur « Enregistrer la production », saisissez la nouvelle quantité dans le champ « Quantité produite », puis cliquez sur « Valider ».",
    },
  }),
  complexQ({
    id: "mrp-080",
    module: "mrp",
    text: {
      en: "After an MO is split using a backorder, when does the backorder MO appear in the Shop Floor module? (Odoo Learn — Manufacturing Backorders)",
      fr: "Une fois qu'un OM est fractionné à l'aide d'une commande en souffrance, quand l'OM en rupture de stock apparaît-il dans le module Shop Floor ? (Odoo Learn — Commandes en souffrance de fabrication)",
    },
    correct: {
      en: "Immediately",
      fr: "Immédiatement",
    },
    distractors: [
      { en: "12 hours later", fr: "12 heures plus tard" },
      { en: "24 hours later", fr: "24 heures plus tard" },
      { en: "Never", fr: "Jamais" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Backorders): Immediately",
      fr: "Source Odoo Learn (Réponses de fabrication) : Immédiatement",
    },
  }),
  complexQ({
    id: "mrp-081",
    module: "mrp",
    text: {
      en: "What happens to an MO when a backorder is created for it in the Shop Floor module? (Odoo Learn — Manufacturing Backorders)",
      fr: "Qu'arrive-t-il à un MO lorsqu'une commande en souffrance est créée pour celui-ci dans le module Shop Floor ? (Odoo Learn — Commandes en souffrance de fabrication)",
    },
    correct: {
      en: "The original MO appears as two separate MOs in the Manufacturing app and the Shop Floor module.",
      fr: "Le MO d'origine apparaît sous la forme de deux MO distincts dans l'application Fabrication et dans le module Shop Floor.",
    },
    distractors: [
      { en: "The original MO appears as two separate MOs in the Shop Floor module, but remains a single MO in the ‘Manufacturing’ app.", fr: "Le MO d'origine apparaît sous la forme de deux MO distincts dans le module Shop Floor, mais reste un seul MO dans l'application « Fabrication »." },
      { en: "The original MO appears as two separate MOs in the Manufacturing app, but remains a single MO in the Shop Floor module.", fr: "Le MO d'origine apparaît sous la forme de deux MO distincts dans l'application Fabrication, mais reste un seul MO dans le module Shop Floor." },
      { en: "An MO can only be created for an MO in the Manufacturing app.", fr: "Un MO ne peut être créé que pour un MO dans l'application Fabrication." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Backorders): The original MO appears as two separate MOs in the Manufacturing app and the Shop Floor module.",
      fr: "Source Odoo Learn (Manufacturing Backorders) : Le MO d'origine apparaît sous la forme de deux MO distincts dans l'application Fabrication et dans le module Shop Floor.",
    },
  }),
  complexQ({
    id: "mrp-082",
    module: "mrp",
    text: {
      en: "What type of maintenance is time and risk-based? (Odoo Learn — Managing Equipment Maintenance)",
      fr: "Quel type de maintenance est basé sur le temps et les risques ? (Odoo Learn — Gestion de la maintenance des équipements)",
    },
    correct: {
      en: "Preventive Maintenance",
      fr: "Entretien préventif",
    },
    distractors: [
      { en: "Corrective Maintenance", fr: "Maintenance corrective" },
      { en: "Timing Maintenance", fr: "Entretien du chronométrage" },
      { en: "Production Maintenance", fr: "Maintenance de production" },
    ],
    explanation: {
      en: "Source Odoo Learn (Managing Equipment Maintenance): Preventive Maintenance",
      fr: "Source Odoo Learn (Gestion de la maintenance des équipements) : Maintenance préventive",
    },
  }),
  complexQ({
    id: "mrp-083",
    module: "mrp",
    text: {
      en: "Which of the following values is calculated based on equipment’s performance data, and previous maintenance requests? (Odoo Learn — Managing Equipment Maintenance)",
      fr: "Laquelle des valeurs suivantes est calculée sur la base des données de performances de l’équipement et des demandes de maintenance précédentes ? (Odoo Learn — Gestion de la maintenance des équipements)",
    },
    correct: {
      en: "Mean Time Between Failure (MTBF).",
      fr: "Temps moyen entre pannes (MTBF).",
    },
    distractors: [
      { en: "Recurring Corrective Maintenance (RCM).", fr: "Maintenance Corrective Récurrente (RCM)." },
      { en: "Priority ranking.", fr: "Classement prioritaire." },
      { en: "Time In Work Centers (TWC).", fr: "Temps passé dans les centres de travail (TWC)." },
    ],
    explanation: {
      en: "Source Odoo Learn (Managing Equipment Maintenance): Mean Time Between Failure (MTBF).",
      fr: "Source Odoo Learn (Gestion de la maintenance des équipements) : Temps moyen entre pannes (MTBF).",
    },
  }),
  complexQ({
    id: "mrp-084",
    module: "mrp",
    text: {
      en: "Where can I view all live Maintenance Requests for all Maintenance Teams? (Odoo Learn — Managing Equipment Maintenance)",
      fr: "Où puis-je consulter toutes les demandes de maintenance en direct pour toutes les équipes de maintenance ? (Odoo Learn — Gestion de la maintenance des équipements)",
    },
    correct: {
      en: "Maintenance Calendar.",
      fr: "Calendrier d'entretien.",
    },
    distractors: [
      { en: "A maintenance team’s pipeline.", fr: "Le pipeline d’une équipe de maintenance." },
      { en: "The Maintenance app dashboard.", fr: "Le tableau de bord de l’application Maintenance." },
      { en: "Reporting.", fr: "Rapport." },
    ],
    explanation: {
      en: "Source Odoo Learn (Managing Equipment Maintenance): Maintenance Calendar.",
      fr: "Source Odoo Learn (Gestion de la maintenance des équipements) : Calendrier de maintenance.",
    },
  }),
  complexQ({
    id: "mrp-085",
    module: "mrp",
    text: {
      en: "In Odoo, Make-to-Order (MTO) is … (Odoo Learn — Make-to-Order Manufacturing (MTO))",
      fr: "Dans Odoo, le Make-to-Order (MTO) est… (Odoo Learn — Fabrication sur commande (MTO))",
    },
    correct: {
      en: "A route that triggers replenishment when a sales order is confirmed",
      fr: "Un itinéraire qui déclenche le réapprovisionnement lorsqu'une commande client est confirmée",
    },
    distractors: [
      { en: "A route for engineering custom products", fr: "Une voie pour l'ingénierie de produits personnalisés" },
      { en: "A route for replenishing products you regularly keep on-hand", fr: "Un parcours pour réapprovisionner les produits que vous gardez régulièrement sous la main" },
      { en: "A route that triggers replenishment when a product is not on-hand", fr: "Un itinéraire qui déclenche le réapprovisionnement lorsqu'un produit n'est pas disponible" },
    ],
    explanation: {
      en: "Source Odoo Learn (Make-to-Order Manufacturing (MTO)): A route that triggers replenishment when a sales order is confirmed",
      fr: "Source Odoo Learn (Make-to-Order Manufacturing (MTO)) : Un itinéraire qui déclenche le réapprovisionnement lorsqu'une commande client est confirmée",
    },
  }),
  complexQ({
    id: "mrp-086",
    module: "mrp",
    text: {
      en: "The Make-to-Order (MTO) route can be used for… (Odoo Learn — Make-to-Order Manufacturing (MTO))",
      fr: "L’itinéraire Make-to-Order (MTO) peut être utilisé pour… (Odoo Learn — Fabrication sur commande (MTO))",
    },
    correct: {
      en: "Manufacturing, Buy, and Resupply Subcontractor only",
      fr: "Sous-traitant de fabrication, d'achat et de réapprovisionnement uniquement",
    },
    distractors: [
      { en: "Manufacturing only", fr: "Fabrication uniquement" },
      { en: "Purchases and Manufacturing only", fr: "Achats et Fabrication uniquement" },
      { en: "Resupply Subcontractor and Manufacturing only", fr: "Réapprovisionnement Sous-traitant et Fabrication uniquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Make-to-Order Manufacturing (MTO)): Manufacturing, Buy, and Resupply Subcontractor only",
      fr: "Source Odoo Learn (Fabrication sur commande (MTO)) : Sous-traitant de fabrication, d'achat et de réapprovisionnement uniquement",
    },
  }),
  complexQ({
    id: "mrp-087",
    module: "mrp",
    text: {
      en: "In order to activate the Make-to-Order (MTO) route, you must first… (Odoo Learn — Make-to-Order Manufacturing (MTO))",
      fr: "Afin d'activer l'itinéraire Make-to-Order (MTO), vous devez d'abord… (Odoo Learn — Fabrication sur commande (MTO))",
    },
    correct: {
      en: "Go to Inventory > Configuration > Warehouses > Routes Smart Button > Archived filter > select MTO route > Unarchive",
      fr: "Accédez à Inventaire > Configuration > Entrepôts > Bouton intelligent Itinéraires > Filtre archivé > sélectionnez l'itinéraire MTO > Désarchiver",
    },
    distractors: [
      { en: "Do nothing – the Make-to-Order Route is available by default", fr: "Ne rien faire – la route de fabrication sur commande est disponible par défaut" },
      { en: "Go to Manufacturing > Configuration > Settings", fr: "Accédez à Fabrication > Configuration > Paramètres" },
      { en: "Go to Manufacturing > Inventory Tab > select MTO", fr: "Accédez à Fabrication > Onglet Inventaire > sélectionnez MTO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Make-to-Order Manufacturing (MTO)): Go to Inventory > Configuration > Warehouses > Routes Smart Button > Archived filter > select MTO route > Unarchive",
      fr: "Source Odoo Learn (Fabrication sur commande (MTO)) : Accédez à Inventaire > Configuration > Entrepôts > Bouton intelligent Itinéraires > Filtre archivé > sélectionnez l'itinéraire MTO > Désarchiver",
    },
  }),
  complexQ({
    id: "mrp-088",
    module: "mrp",
    text: {
      en: "On a bill of materials, where can by-products be added? (Odoo Learn — By-Products)",
      fr: "Sur une nomenclature, où peut-on ajouter des sous-produits ? (Odoo Learn — Sous-produits)",
    },
    correct: {
      en: "On the ‘By-Products’ tab",
      fr: "Dans l'onglet « Sous-produits »",
    },
    distractors: [
      { en: "On the ‘Components’ tab", fr: "Dans l'onglet \"Composants\"" },
      { en: "On the ‘Operations’ tab", fr: "Dans l'onglet « Opérations »" },
      { en: "By-products cannot be added to bills of materials", fr: "Les sous-produits ne peuvent pas être ajoutés aux nomenclatures" },
    ],
    explanation: {
      en: "Source Odoo Learn (By-Products): On the ‘By-Products’ tab",
      fr: "Source Odoo Learn (Sous-produits) : Sur l'onglet « Sous-produits »",
    },
  }),
  complexQ({
    id: "mrp-089",
    module: "mrp",
    text: {
      en: "How do I specify when the creation of a by-product occurs? (Odoo Learn — By-Products)",
      fr: "Comment préciser quand a lieu la création d’un sous-produit ? (Odoo Learn — Sous-produits)",
    },
    correct: {
      en: "Select an operation in the ‘Produced in Operation’ field, next to a by-product on a bill of materials",
      fr: "Sélectionnez une opération dans le champ « Produit en opération », à côté d'un sous-produit sur une nomenclature.",
    },
    distractors: [
      { en: "Fill out the ‘Produced in Operation’ pop-up form that appears during the manufacturing process", fr: "Remplissez le formulaire contextuel « Produit en opération » qui apparaît pendant le processus de fabrication" },
      { en: "Select an operation on the ‘By-Products’ tab of the product's form", fr: "Sélectionnez une opération dans l'onglet « Sous-produits » du formulaire du produit" },
      { en: "It is not possible to specify when by-products are created", fr: "Il n'est pas possible de préciser quand les sous-produits sont créés" },
    ],
    explanation: {
      en: "Source Odoo Learn (By-Products): Select an operation in the ‘Produced in Operation’ field, next to a by-product on a bill of materials",
      fr: "Source Odoo Learn (Sous-produits) : Sélectionnez une opération dans le champ « Produit en opération », à côté d'un sous-produit sur une nomenclature",
    },
  }),
  complexQ({
    id: "mrp-090",
    module: "mrp",
    text: {
      en: "After producing a certain quantity of a by-product, what happens to the on-hand quantity of that by-product? (Odoo Learn — By-Products)",
      fr: "Après avoir produit une certaine quantité d’un sous-produit, qu’arrive-t-il à la quantité disponible de ce sous-produit ? (Odoo Learn — Sous-produits)",
    },
    correct: {
      en: "The on-hand quantity increases",
      fr: "La quantité disponible augmente",
    },
    distractors: [
      { en: "The on-hand quantity decreases", fr: "La quantité disponible diminue" },
      { en: "The on-hand quantity stays the same", fr: "La quantité disponible reste la même" },
      { en: "On-hand quantities of by-products are not tracked by Odoo", fr: "Les quantités disponibles de sous-produits ne sont pas suivies par Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (By-Products): The on-hand quantity increases",
      fr: "Source Odoo Learn (Sous-produits) : La quantité disponible augmente",
    },
  }),
  complexQ({
    id: "mrp-091",
    module: "mrp",
    text: {
      en: "What is the status of a manufacturing order AFTER a component has been scrapped, but BEFORE it has been replenished? (Odoo Learn — Scrap Orders)",
      fr: "Quel est le statut d’un ordre de fabrication APRÈS qu’un composant ait été mis au rebut, mais AVANT qu’il ait été réapprovisionné ? (Odoo Learn — Commandes de ferraille)",
    },
    correct: {
      en: "Waiting",
      fr: "En attendant",
    },
    distractors: [
      { en: "Unavailable", fr: "Indisponible" },
      { en: "Canceled", fr: "Annulé" },
      { en: "Waiting Another Operation", fr: "En attente d'une autre opération" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scrap Orders): Waiting",
      fr: "Source Odoo Learn (Commandes de ferraille) : En attente",
    },
  }),
  complexQ({
    id: "mrp-092",
    module: "mrp",
    text: {
      en: "How do you scrap a finished product from an MO? (Odoo Learn — Scrap Orders)",
      fr: "Comment mettre au rebut un produit fini d’un MO ? (Odoo Learn — Commandes de ferraille)",
    },
    correct: {
      en: "Close the MO, click the “Scrap” button, and select the finished product in the “Product” field on the pop-up window",
      fr: "Fermez le MO, cliquez sur le bouton « Scrap » et sélectionnez le produit fini dans le champ « Produit » de la fenêtre contextuelle",
    },
    distractors: [
      { en: "Before closing the MO, click the “Scrap” button, and select the finished product in the “Product” field on the pop-up window", fr: "Avant de fermer le MO, cliquez sur le bouton « Scrap » et sélectionnez le produit fini dans le champ « Produit » de la fenêtre pop-up" },
      { en: "Finished products can only be scrapped from the Inventory app", fr: "Les produits finis ne peuvent être mis au rebut qu'à partir de l'application Inventaire" },
      { en: "Finished products cannot be scrapped", fr: "Les produits finis ne peuvent pas être mis au rebut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scrap Orders): Close the MO, click the “Scrap” button, and select the finished product in the “Product” field on the pop-up window",
      fr: "Source Odoo Learn (Commandes de ferraille) : fermez le MO, cliquez sur le bouton « Rebut » et sélectionnez le produit fini dans le champ « Produit » de la fenêtre contextuelle",
    },
  }),
  complexQ({
    id: "mrp-093",
    module: "mrp",
    text: {
      en: "What kind of order is created when a component is scrapped, while using two or three-step manufacturing? (Odoo Learn — Scrap Orders)",
      fr: "Quel type d'ordre est créé lorsqu'un composant est mis au rebut, lors d'une fabrication en deux ou trois étapes ? (Odoo Learn — Commandes de ferraille)",
    },
    correct: {
      en: "Picking transfer",
      fr: "Transfert de préparation",
    },
    distractors: [
      { en: "Manufacturing order", fr: "Ordre de fabrication" },
      { en: "Purchase order", fr: "Bon de commande" },
      { en: "Dropshipping order", fr: "Commande de livraison directe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scrap Orders): Picking transfer",
      fr: "Source Odoo Learn (Commandes de ferraille) : Transfert de picking",
    },
  }),
  complexQ({
    id: "mrp-094",
    module: "mrp",
    text: {
      en: "How does Odoo link a specific Bill of Materials (BoM) to a product variant? (Odoo Learn — Manufacturing with Product Variants)",
      fr: "Comment Odoo associe-t-il une nomenclature spécifique (BoM) à une variante de produit ? (Odoo Learn — Fabrication avec des variantes de produits)",
    },
    correct: {
      en: "Using the Product Variant field",
      fr: "Utilisation du champ Variante de produit",
    },
    distractors: [
      { en: "Using the Product Attribute field", fr: "Utilisation du champ Attribut du produit" },
      { en: "Using the Sales Order reference", fr: "Utilisation de la référence de commande client" },
      { en: "Using the Manufacturing Route", fr: "Utiliser la voie de fabrication" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing with Product Variants): Using the Product Variant field",
      fr: "Source Odoo Learn (Fabrication avec variantes de produit) : Utilisation du champ Variante de produit",
    },
  }),
  complexQ({
    id: "mrp-095",
    module: "mrp",
    text: {
      en: "In the Shop Floor module, why is the “Attach Headrest” operation included automatically? (Odoo Learn — Manufacturing with Product Variants)",
      fr: "Dans le module Shop Floor, pourquoi l'opération « Attacher l'appui-tête » est-elle automatiquement incluse ? (Odoo Learn — Fabrication avec des variantes de produits)",
    },
    correct: {
      en: "Because the variant includes a headrest",
      fr: "Parce que la variante comprend un appui-tête",
    },
    distractors: [
      { en: "Because it is a default step for all chairs", fr: "Parce que c'est une étape par défaut pour toutes les chaises" },
      { en: "Because of inventory settings", fr: "En raison des paramètres d'inventaire" },
      { en: "Because the manufacturing route requires it", fr: "Parce que le parcours de fabrication l’exige" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing with Product Variants): Because the variant includes a headrest",
      fr: "Source Odoo Learn (Fabrication avec variantes de produits) : Parce que la variante comprend un appui-tête",
    },
  }),
  complexQ({
    id: "mrp-096",
    module: "mrp",
    text: {
      en: "Why does using product variants and BoMs reduce errors in production? (Odoo Learn — Manufacturing with Product Variants)",
      fr: "Pourquoi l'utilisation de variantes de produits et de nomenclatures réduit-elle les erreurs de production ? (Odoo Learn — Fabrication avec des variantes de produits)",
    },
    correct: {
      en: "It automates correct component and operation selection based on variant",
      fr: "Il automatise la sélection correcte des composants et des opérations en fonction de la variante",
    },
    distractors: [
      { en: "It requires manual selection of components", fr: "Cela nécessite une sélection manuelle des composants" },
      { en: "It removes the need for inventory tracking", fr: "Cela supprime le besoin de suivi des stocks" },
      { en: "It standardizes all products to one BoM", fr: "Il standardise tous les produits en une seule nomenclature" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing with Product Variants): It automates correct component and operation selection based on variant",
      fr: "Source Odoo Learn (Fabrication avec variantes de produits) : il automatise la sélection correcte des composants et des opérations en fonction de la variante",
    },
  }),
  complexQ({
    id: "mrp-097",
    module: "mrp",
    text: {
      en: "When reordering rules are set, Odoo will create requests for quotation from… (Odoo Learn — Replenishment Methods for Manufacturing)",
      fr: "Lorsque les règles de réorganisation sont définies, Odoo créera des demandes de devis à partir de… (Odoo Learn — Méthodes de réapprovisionnement pour la fabrication)",
    },
    correct: {
      en: "The first vendor listed on the product form.",
      fr: "Le premier fournisseur répertorié sur le formulaire de produit.",
    },
    distractors: [
      { en: "The vendor with the cheapest price.", fr: "Le vendeur avec le prix le moins cher." },
      { en: "The vendor with the shortest lead time.", fr: "Le fournisseur avec le délai de livraison le plus court." },
      { en: "The most commonly used vendor.", fr: "Le fournisseur le plus couramment utilisé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Replenishment Methods for Manufacturing): The first vendor listed on the product form.",
      fr: "Source Odoo Learn (Méthodes de réapprovisionnement pour la fabrication) : Le premier fournisseur répertorié sur le formulaire de produit.",
    },
  }),
  complexQ({
    id: "mrp-098",
    module: "mrp",
    text: {
      en: "Which of the following is FALSE about reordering rules? (Odoo Learn — Replenishment Methods for Manufacturing)",
      fr: "Lequel des énoncés suivants est FAUX concernant la réorganisation des règles ? (Odoo Learn — Méthodes de réapprovisionnement pour la fabrication)",
    },
    correct: {
      en: "You cannot automatically create RFQs without the MTO route.",
      fr: "Vous ne pouvez pas créer automatiquement des appels d'offres sans l'itinéraire MTO.",
    },
    distractors: [
      { en: "Configure 0,0 reordering rules by setting the minimum and maximum quantities to 0.", fr: "Configurez les règles de réapprovisionnement 0,0 en définissant les quantités minimales et maximales sur 0." },
      { en: "Products can either have the buy or manufacture route set.", fr: "Les produits peuvent avoir un itinéraire d'achat ou de fabrication défini." },
      { en: "Set vendor in the “Purchase” tab of the product.", fr: "Définissez le fournisseur dans l'onglet « Achat » du produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Replenishment Methods for Manufacturing): You cannot automatically create RFQs without the MTO route.",
      fr: "Source Odoo Learn (Méthodes de réapprovisionnement pour la fabrication) : Vous ne pouvez pas créer automatiquement des RFQ sans l'itinéraire MTO.",
    },
  }),
  complexQ({
    id: "mrp-099",
    module: "mrp",
    text: {
      en: "Where can I view a list of all the reordering rules I have in place? (Odoo Learn — Replenishment Methods for Manufacturing)",
      fr: "Où puis-je consulter une liste de toutes les règles de réapprovisionnement que j'ai mises en place ? (Odoo Learn — Méthodes de réapprovisionnement pour la fabrication)",
    },
    correct: {
      en: "The configuration menu in the Inventory app.",
      fr: "Le menu de configuration dans l'application Inventaire.",
    },
    distractors: [
      { en: "From the products menu in the Manufacturing app.", fr: "Depuis le menu Produits de l’application Fabrication." },
      { en: "You can only view reordering rules on a product’s form.", fr: "Vous ne pouvez afficher les règles de réapprovisionnement que sur le formulaire d’un produit." },
      { en: "From a product’s bill of materials.", fr: "À partir de la nomenclature d’un produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Replenishment Methods for Manufacturing): The configuration menu in the Inventory app.",
      fr: "Source Odoo Learn (Méthodes de réapprovisionnement pour la fabrication) : Le menu de configuration dans l'application Inventaire.",
    },
  }),
  complexQ({
    id: "mrp-100",
    module: "mrp",
    text: {
      en: "What happens if the “Blocked” option is selected as the flexible consumption setting on a product’s BoM? (Odoo Learn — Flexible Consumption)",
      fr: "Que se passe-t-il si l'option « Bloqué » est sélectionnée comme paramètre de consommation flexible sur la nomenclature d'un produit ? (Odoo Learn — Consommation flexible)",
    },
    correct: {
      en: "If an MO is created using that BoM, only a manager can close it if component quantities are changed",
      fr: "Si un MO est créé à l'aide de cette nomenclature, seul un responsable peut le clôturer si les quantités de composants sont modifiées.",
    },
    distractors: [
      { en: "Flexible consumption will be allowed", fr: "Une consommation flexible sera autorisée" },
      { en: "Flexible consumption will be allowed with a warning", fr: "La consommation flexible sera autorisée avec un avertissement" },
      { en: "Different component quantities cannot be entered on an MO", fr: "Différentes quantités de composants ne peuvent pas être saisies sur un MO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Consumption): If an MO is created using that BoM, only a manager can close it if component quantities are changed",
      fr: "Source Odoo Learn (Consommation Flexible) : Si un MO est créé à l'aide de cette BoM, seul un manager peut le clôturer si les quantités des composants sont modifiées",
    },
  }),
  complexQ({
    id: "mrp-101",
    module: "mrp",
    text: {
      en: "What does the “Set Quantities and Validate” button do on the “Consumption Warning” pop-up window? (Odoo Learn — Flexible Consumption)",
      fr: "À quoi sert le bouton « Définir les quantités et valider » dans la fenêtre contextuelle « Avertissement de consommation » ? (Odoo Learn — Consommation flexible)",
    },
    correct: {
      en: "Resets the consumed component quantities to what is specified on the BoM, and closes the MO",
      fr: "Réinitialise les quantités de composants consommées à ce qui est spécifié sur la nomenclature et ferme le MO",
    },
    distractors: [
      { en: "Confirms that the altered component quantities are correct and closes the BoM", fr: "Confirme que les quantités de composants modifiées sont correctes et clôture la nomenclature" },
      { en: "Requests manager approval to close the BoM", fr: "Demande l'approbation du gestionnaire pour clôturer la nomenclature" },
      { en: "Puts a notification in the MO’s chatter that an altered component quantity has been used", fr: "Insère une notification dans le chat du MO indiquant qu'une quantité de composant modifiée a été utilisée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Consumption): Resets the consumed component quantities to what is specified on the BoM, and closes the MO",
      fr: "Source Odoo Learn (Consommation Flexible) : Réinitialise les quantités de composants consommées à ce qui est spécifié sur la BoM, et clôture le MO",
    },
  }),
  complexQ({
    id: "mrp-102",
    module: "mrp",
    text: {
      en: "How do you make it possible to use flexible consumption in the Shop Floor module? (Odoo Learn — Flexible Consumption)",
      fr: "Comment permettez-vous d’utiliser une consommation flexible dans le module Shop Floor ? (Odoo Learn — Consommation flexible)",
    },
    correct: {
      en: "Configure “Register Consumed Materials” QCPs for specific products",
      fr: "Configurer les QCP « Enregistrer les matériaux consommés » pour des produits spécifiques",
    },
    distractors: [
      { en: "Open the “What do you want to do?” menu for an MO, and click “Flexible Consumption”", fr: "Ouvrez le message « Que voulez-vous faire ? » menu pour un MO, et cliquez sur « Consommation flexible »" },
      { en: "It is not possible to use flexible consumption in the Shop Floor module", fr: "Il n'est pas possible d'utiliser une consommation flexible dans le module Shop Floor." },
      { en: "Enter the altered component quantities during the “Register Production” step", fr: "Saisissez les quantités de composants modifiées lors de l'étape « Enregistrer la production »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Consumption): Configure “Register Consumed Materials” QCPs for specific products",
      fr: "Source Odoo Learn (Consommation flexible) : configurer les QCP « Enregistrer les matériaux consommés » pour des produits spécifiques",
    },
  }),
  complexQ({
    id: "mrp-103",
    module: "mrp",
    text: {
      en: "Which routes should be selected on the ‘Inventory’ tab of a sub-assembly component? (Odoo Learn — Sub-Assemblies)",
      fr: "Quels itinéraires faut-il sélectionner dans l'onglet « Inventaire » d'un composant de sous-ensemble ? (Odoo Learn — Sous-ensembles)",
    },
    correct: {
      en: "‘Manufacture’ and ‘Replenish on Order (MTO)’",
      fr: "« Fabrication » et « Réapprovisionnement sur commande (MTO) »",
    },
    distractors: [
      { en: "‘Manufacture’ and ‘Dropship’", fr: "« Fabrication » et « Dropship »" },
      { en: "‘Buy’ and ‘Manufacture’", fr: "« Acheter » et « Fabriquer »" },
      { en: "‘Buy’ and ‘Replenish on Order (MTO)’", fr: "« Acheter » et « Réapprovisionner sur commande (MTO) »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sub-Assemblies): ‘Manufacture’ and ‘Replenish on Order (MTO)’",
      fr: "Source Odoo Learn (Sous-Assemblages) : « Fabrication » et « Réapprovisionnement sur Commande (MTO) »",
    },
  }),
  complexQ({
    id: "mrp-104",
    module: "mrp",
    text: {
      en: "When planning multiple MOs for a sub-assembly product, which MO is scheduled first? (Odoo Learn — Sub-Assemblies)",
      fr: "Lors de la planification de plusieurs MO pour un produit de sous-ensemble, quel MO est planifié en premier ? (Odoo Learn — Sous-ensembles)",
    },
    correct: {
      en: "The child MO is scheduled before the source MO",
      fr: "Le MO enfant est programmé avant le MO source",
    },
    distractors: [
      { en: "The parent MO is scheduled before the child MO", fr: "Le MO parent est programmé avant le MO enfant" },
      { en: "Both the parent MO and child MO are scheduled simultaneously", fr: "Le MO parent et le MO enfant sont programmés simultanément" },
      { en: "It is not possible to schedule MOs for sub-assembly products", fr: "Il n'est pas possible de programmer des MO pour les produits de sous-ensembles" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sub-Assemblies): The child MO is scheduled before the source MO",
      fr: "Source Odoo Learn (Sous-Assemblages) : Le MO enfant est programmé avant le MO source",
    },
  }),
  complexQ({
    id: "mrp-105",
    module: "mrp",
    text: {
      en: "How many levels (manufactured products within manufactured products) can a sub-assembly product have? (Odoo Learn — Sub-Assemblies)",
      fr: "Combien de niveaux (produits manufacturés au sein des produits manufacturés) un produit de sous-ensemble peut-il avoir ? (Odoo Learn — Sous-ensembles)",
    },
    correct: {
      en: "Unlimited",
      fr: "Illimité",
    },
    distractors: [
      { en: "One", fr: "Un" },
      { en: "Two", fr: "Deux" },
      { en: "Three", fr: "Trois" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sub-Assemblies): Unlimited",
      fr: "Source Odoo Learn (Sous-Assemblages) : Illimité",
    },
  }),
  complexQ({
    id: "mrp-106",
    module: "mrp",
    text: {
      en: "Why is the Analytic Accounting feature important for ETO projects? (Odoo Learn — Engineer To Order)",
      fr: "Pourquoi la fonctionnalité de comptabilité analytique est-elle importante pour les projets ETO ? (Odoo Learn — Ingénieur sur commande)",
    },
    correct: {
      en: "It keeps project costs organized",
      fr: "Il permet d'organiser les coûts du projet",
    },
    distractors: [
      { en: "It tracks customer contacts", fr: "Il suit les contacts clients" },
      { en: "It links BOMs to inventory", fr: "Il relie les nomenclatures à l'inventaire" },
      { en: "It sets up taxes", fr: "Il fixe les impôts" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineer To Order): It keeps project costs organized",
      fr: "Source Odoo Learn (Engineer To Order) : il permet d'organiser les coûts du projet",
    },
  }),
  complexQ({
    id: "mrp-107",
    module: "mrp",
    text: {
      en: "What setting must be enabled in the Project app to track work hours? (Odoo Learn — Engineer To Order)",
      fr: "Quel paramètre doit être activé dans l’application Project pour suivre les heures de travail ? (Odoo Learn — Ingénieur sur commande)",
    },
    correct: {
      en: "Timesheets",
      fr: "Feuilles de temps",
    },
    distractors: [
      { en: "Task dependencies", fr: "Dépendances des tâches" },
      { en: "Subtasks", fr: "Sous-tâches" },
      { en: "Milestones", fr: "Jalons" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineer To Order): Timesheets",
      fr: "Source Odoo Learn (Ingénieur sur commande) : Feuilles de temps",
    },
  }),
  complexQ({
    id: "mrp-108",
    module: "mrp",
    text: {
      en: "Why are Work Center hourly costs important? (Odoo Learn — Engineer To Order)",
      fr: "Pourquoi les coûts horaires du poste de travail sont-ils importants ? (Odoo Learn — Ingénieur sur commande)",
    },
    correct: {
      en: "They factor into total manufacturing cost",
      fr: "Ils prennent en compte le coût total de fabrication",
    },
    distractors: [
      { en: "They define employee wages", fr: "Ils définissent les salaires des employés" },
      { en: "They help create invoices", fr: "Ils aident à créer des factures" },
      { en: "They appear in the Gantt view", fr: "Ils apparaissent dans la vue Gantt" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineer To Order): They factor into total manufacturing cost",
      fr: "Source Odoo Learn (Engineer To Order) : Ils prennent en compte le coût total de fabrication",
    },
  }),
  complexQ({
    id: "mrp-109",
    module: "mrp",
    text: {
      en: "How do you configure a bill of materials as a kit? (Odoo Learn — Product Kits)",
      fr: "Comment configurer une nomenclature en kit ? (Odoo Learn — Kits de produits)",
    },
    correct: {
      en: "Select ‘Kit’ in the ‘BoM Type’ field of the BoM",
      fr: "Sélectionnez « Kit » dans le champ « Type de nomenclature » de la nomenclature.",
    },
    distractors: [
      { en: "Select ‘Kit’ in the ‘Product Variant’ field of the BoM", fr: "Sélectionnez « Kit » dans le champ « Variante de produit » de la nomenclature." },
      { en: "Add an operation in the ‘Operations’ tab, instructing manufacturing employees to use the BoM to make a kit", fr: "Ajoutez une opération dans l'onglet « Opérations », demandant aux employés de fabrication d'utiliser la nomenclature pour créer un kit." },
      { en: "Add the kit as a by-product in the ‘By-Products’ field of the BoM", fr: "Ajouter le kit comme sous-produit dans le champ « Sous-produits » de la nomenclature" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Kits): Select ‘Kit’ in the ‘BoM Type’ field of the BoM",
      fr: "Source Odoo Learn (Kits de produits) : Sélectionnez « Kit » dans le champ « Type de nomenclature » de la nomenclature",
    },
  }),
  complexQ({
    id: "mrp-110",
    module: "mrp",
    text: {
      en: "When a kit is included in a sales order, what does the customer see on the order? (Odoo Learn — Product Kits)",
      fr: "Lorsqu’un kit est inclus dans une commande client, que voit le client sur la commande ? (Odoo Learn — Kits de produits)",
    },
    correct: {
      en: "The kit itself",
      fr: "Le kit lui-même",
    },
    distractors: [
      { en: "The components inside the kit", fr: "Les composants à l'intérieur du kit" },
      { en: "Both the kit and the components", fr: "Le kit et les composants" },
      { en: "Neither the kit, nor the components", fr: "Ni le kit, ni les composants" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Kits): The kit itself",
      fr: "Source Odoo Learn (Kits de produits) : Le kit lui-même",
    },
  }),
  complexQ({
    id: "mrp-111",
    module: "mrp",
    text: {
      en: "What happens when an MO is created for a product with a kit included in its list of components? (Odoo Learn — Product Kits)",
      fr: "Que se passe-t-il lorsqu'un MO est créé pour un produit avec un kit inclus dans sa liste de composants ? (Odoo Learn — Kits de produits)",
    },
    correct: {
      en: "The components inside the kit are listed on the ‘Components’ tab of the MO",
      fr: "Les composants à l'intérieur du kit sont répertoriés dans l'onglet « Composants » du MO",
    },
    distractors: [
      { en: "The kit itself is listed on the ‘Components’ tab of the MO", fr: "Le kit lui-même est répertorié dans l'onglet « Composants » du MO" },
      { en: "Neither the kit, nor the components inside of it, are listed on the ‘Components’ tab of the MO", fr: "Ni le kit, ni les composants qu'il contient, ne sont répertoriés dans l'onglet « Composants » du MO." },
      { en: "Both the kit, and the components inside of it, are listed on the ‘Components’ tab of the MO", fr: "Le kit et les composants qu'il contient sont répertoriés dans l'onglet « Composants » du MO." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Kits): The components inside the kit are listed on the ‘Components’ tab of the MO",
      fr: "Source Odoo Learn (Kits de produits) : Les composants à l'intérieur du kit sont répertoriés dans l'onglet « Composants » du MO",
    },
  }),
  complexQ({
    id: "mrp-112",
    module: "mrp",
    text: {
      en: "Your work center’s OEE is at 84.91%. What will the OEE percentage color be if your target is 85%? (Odoo Learn — Manufacturing Efficiency)",
      fr: "Le TRS de votre poste de travail est de 84,91 %. Quelle sera la couleur du pourcentage OEE si votre objectif est de 85 % ? (Odoo Learn — Efficacité de fabrication)",
    },
    correct: {
      en: "Red.",
      fr: "Rouge.",
    },
    distractors: [
      { en: "Green.", fr: "Vert." },
      { en: "Black.", fr: "Noir." },
      { en: "Blue.", fr: "Bleu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Efficiency): Red.",
      fr: "Source Odoo Learn (Efficacité de fabrication) : Rouge.",
    },
  }),
  complexQ({
    id: "mrp-113",
    module: "mrp",
    text: {
      en: "It took you 20 minutes to manufacture a product, but the expected duration to produce it was 15 minutes. What will Odoo record for the five additional minutes? (Odoo Learn — Manufacturing Efficiency)",
      fr: "Il vous fallait 20 minutes pour fabriquer un produit, mais la durée prévue pour le produire était de 15 minutes. Qu’enregistrera Odoo pendant les cinq minutes supplémentaires ? (Odoo Learn — Efficacité de fabrication)",
    },
    correct: {
      en: "Reduced Speed.",
      fr: "Vitesse réduite.",
    },
    distractors: [
      { en: "Fully Productive Time.", fr: "Temps pleinement productif." },
      { en: "Equipment Failure.", fr: "Panne d'équipement." },
      { en: "Material Availability.", fr: "Disponibilité du matériel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manufacturing Efficiency): Reduced Speed.",
      fr: "Source Odoo Learn (Efficacité de fabrication) : Vitesse réduite.",
    },
  }),
  complexQ({
    id: "mrp-114",
    module: "mrp",
    text: {
      en: "What happens to a manufacturing order if a required component is missing or the order is not yet confirmed? (Odoo Learn — Shop Floor Overview)",
      fr: "Qu'arrive-t-il à un ordre de fabrication s'il manque un composant requis ou si la commande n'est pas encore confirmée ? (Odoo Learn — Aperçu de l'atelier)",
    },
    correct: {
      en: "It does not show up in the Shop Floor app.",
      fr: "Il n'apparaît pas dans l'application Shop Floor.",
    },
    distractors: [
      { en: "It is automatically sent to the ‘My WO’ view.", fr: "Il est automatiquement envoyé vers la vue « Mon OT »." },
      { en: "It appears in the Overview with a red warning.", fr: "Il apparaît dans l'aperçu avec un avertissement rouge." },
      { en: "It is sent to the work center view.", fr: "Il est envoyé vers la vue du poste de travail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Shop Floor Overview): It does not show up in the Shop Floor app.",
      fr: "Source Odoo Learn (Aperçu de l'atelier) : il n'apparaît pas dans l'application Shop Floor.",
    },
  }),
  complexQ({
    id: "mrp-115",
    module: "mrp",
    text: {
      en: "Which view in the Shop Floor app displays only work orders assigned to me? (Odoo Learn — Shop Floor Overview)",
      fr: "Quelle vue dans l'application Shop Floor affiche uniquement les ordres de travail qui m'ont été attribués ? (Odoo Learn — Aperçu de l'atelier)",
    },
    correct: {
      en: "My WO",
      fr: "Mon WO",
    },
    distractors: [
      { en: "Overview.", fr: "Aperçu." },
      { en: "Work Center.", fr: "Centre de travail." },
      { en: "Operator Panel", fr: "Panneau de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Shop Floor Overview): My WO",
      fr: "Source Odoo Learn (Aperçu de l'atelier) : Mon WO",
    },
  }),
  complexQ({
    id: "mrp-116",
    module: "mrp",
    text: {
      en: "In the Operator panel, what happens when I tap on a name? (Odoo Learn — Shop Floor Overview)",
      fr: "Dans le panneau de commande, que se passe-t-il lorsque j'appuie sur un nom ? (Odoo Learn — Aperçu de l'atelier)",
    },
    correct: {
      en: "The operator is highlighted as the active operator, and ‘My WO’ is filtered to their tasks.",
      fr: "L'opérateur est mis en surbrillance comme opérateur actif et « Mon WO » est filtré selon ses tâches.",
    },
    distractors: [
      { en: "The operator is logged out of the system.", fr: "L'opérateur est déconnecté du système." },
      { en: "It automatically prints a shipping label for the order.", fr: "Il imprime automatiquement une étiquette d'expédition pour la commande." },
      { en: "It sends an email to the customer that the manufacturing order has started.", fr: "Il envoie un e-mail au client l'informant que l'ordre de fabrication a commencé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Shop Floor Overview): The operator is highlighted as the active operator, and ‘My WO’ is filtered to their tasks.",
      fr: "Source Odoo Learn (Aperçu de l'atelier) : l'opérateur est mis en évidence comme l'opérateur actif et « Mon OT » est filtré selon ses tâches.",
    },
  }),
  complexQ({
    id: "mrp-117",
    module: "mrp",
    text: {
      en: "How do you start the timer for a work order? (Odoo Learn — Process an MO)",
      fr: "Comment démarrer le chronomètre pour un bon de travail ? (Odoo Learn — Traiter un MO)",
    },
    correct: {
      en: "Click the header of a work order card.",
      fr: "Cliquez sur l'en-tête d'une fiche d'ordre de travail.",
    },
    distractors: [
      { en: "Click “Start Timer” at the bottom of a work order card.", fr: "Cliquez sur « Démarrer la minuterie » au bas d'une carte de bon de travail." },
      { en: "The timer starts when the first step of the work order is completed.", fr: "Le chronomètre démarre lorsque la première étape du bon de travail est terminée." },
      { en: "Work orders are not timed by Odoo.", fr: "Les bons de travail ne sont pas chronométrés par Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Process an MO): Click the header of a work order card.",
      fr: "Source Odoo Learn (Traiter un MO) : Cliquez sur l'en-tête d'une carte de bon de travail.",
    },
  }),
  complexQ({
    id: "mrp-118",
    module: "mrp",
    text: {
      en: "What is the “Register Production” step on a work order used for? (Odoo Learn — Process an MO)",
      fr: "À quoi sert l’étape « Enregistrer la production » sur un bon de travail ? (Odoo Learn — Traiter un MO)",
    },
    correct: {
      en: "To register the number of units manufactured.",
      fr: "Pour enregistrer le nombre d'unités fabriquées.",
    },
    distractors: [
      { en: "To mark a work order as “In progress”.", fr: "Pour marquer un bon de travail comme « En cours »." },
      { en: "To confirm that the manufacturing order has been completed.", fr: "Pour confirmer que l'ordre de fabrication a été exécuté." },
      { en: "To request that an operator log their time spent working on the work order.", fr: "Pour demander à un opérateur d'enregistrer le temps passé à travailler sur le bon de travail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Process an MO): To register the number of units manufactured.",
      fr: "Source Odoo Learn (Process an MO) : Pour enregistrer le nombre d'unités fabriquées.",
    },
  }),
  complexQ({
    id: "mrp-119",
    module: "mrp",
    text: {
      en: "What happens when you click the “Mark as Done” button on a work order? (Odoo Learn — Process an MO)",
      fr: "Que se passe-t-il lorsque vous cliquez sur le bouton « Marquer comme terminé » sur un bon de travail ? (Odoo Learn — Traiter un MO)",
    },
    correct: {
      en: "The work order fades away, and the Shop Floor module moves on to the next work order.",
      fr: "L'ordre de travail disparaît et le module Shop Floor passe à l'ordre de travail suivant.",
    },
    distractors: [
      { en: "The work order fades away, and the manufacturing order is closed.", fr: "L'ordre de travail disparaît et l'ordre de fabrication est clôturé." },
      { en: "The work order still appears, but is marked as “Done”.", fr: "Le bon de travail apparaît toujours, mais est marqué comme « Terminé »." },
      { en: "The “Mark as Done” button only appears on MOs, not work orders.", fr: "Le bouton « Marquer comme terminé » n'apparaît que sur les MO, pas sur les bons de travail." },
    ],
    explanation: {
      en: "Source Odoo Learn (Process an MO): The work order fades away, and the Shop Floor module moves on to the next work order.",
      fr: "Source Odoo Learn (Traiter un MO) : l'ordre de travail disparaît et le module Shop Floor passe à l'ordre de travail suivant.",
    },
  }),
  complexQ({
    id: "mrp-120",
    module: "mrp",
    text: {
      en: "How do you change the number of steps used for manufacturing? (Odoo Learn — Manage Components)",
      fr: "Comment modifier le nombre d’étapes utilisées pour la fabrication ? (Odoo Learn — Gérer les composants)",
    },
    correct: {
      en: "Inventory -> Warehouses -> select warehouse -> select option from “Manufacture” section",
      fr: "Inventaire -> Entrepôts -> sélectionnez l'entrepôt -> sélectionnez l'option dans la section « Fabrication »",
    },
    distractors: [
      { en: "Manufacturing -> Settings -> select option from “Manufacturing Steps” section", fr: "Fabrication -> Paramètres -> sélectionnez l'option dans la section « Étapes de fabrication »" },
      { en: "Shop Floor -> Settings -> select option from “Manufacturing Steps” section", fr: "Atelier -> Paramètres -> sélectionnez l'option dans la section « Étapes de fabrication »" },
      { en: "It is not possible to change the number of steps used for manufacturing.", fr: "Il n'est pas possible de modifier le nombre d'étapes utilisées pour la fabrication." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Components): Inventory -> Warehouses -> select warehouse -> select option from “Manufacture” section",
      fr: "Source Odoo Learn (Gérer les composants) : Inventaire -> Entrepôts -> sélectionner l'entrepôt -> sélectionner l'option dans la section « Fabrication »",
    },
  }),
  complexQ({
    id: "mrp-121",
    module: "mrp",
    text: {
      en: "What is the effect of enabling the “Replenish Scrapped Quantities” option when scrapping components from an MO in the Shop Floor module? (Odoo Learn — Manage Components)",
      fr: "Quel est l'effet de l'activation de l'option « Réapprovisionner les quantités mises au rebut » lors de la mise au rebut de composants d'un MO dans le module Shop Floor ? (Odoo Learn — Gérer les composants)",
    },
    correct: {
      en: "A “Pick Components” transfer is automatically created to replace the scrapped component(s).",
      fr: "Un transfert « Pick Components » est automatiquement créé pour remplacer le(s) composant(s) mis au rebut.",
    },
    distractors: [
      { en: "A purchase order is created to buy replacement components from a supplier.", fr: "Un bon de commande est créé pour acheter des composants de remplacement auprès d'un fournisseur." },
      { en: "This option does not appear when scrapping components.", fr: "Cette option n'apparaît pas lors de la mise au rebut de composants." },
      { en: "The “Replenish Scrapped Quantities” option only appears when adding components to an MO.", fr: "L'option « Réapprovisionner les quantités mises au rebut » apparaît uniquement lors de l'ajout de composants à un MO." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Components): A “Pick Components” transfer is automatically created to replace the scrapped component(s).",
      fr: "Source Odoo Learn (Gérer les composants) : Un transfert « Choisir les composants » est automatiquement créé pour remplacer le(s) composant(s) mis au rebut.",
    },
  }),
  complexQ({
    id: "mrp-122",
    module: "mrp",
    text: {
      en: "When do you need to click “Check Availability” on an MO to make it reappear in the Shop Floor module? (Odoo Learn — Manage Components)",
      fr: "Quand faut-il cliquer sur « Vérifier la disponibilité » sur un MO pour le faire réapparaître dans le module Shop Floor ? (Odoo Learn — Gérer les composants)",
    },
    correct: {
      en: "After replenishing a scrapped component.",
      fr: "Après avoir réapprovisionné un composant mis au rebut.",
    },
    distractors: [
      { en: "After adding a component.", fr: "Après avoir ajouté un composant." },
      { en: "After replenishing a scrapped component AND adding a component.", fr: "Après avoir réapprovisionné un composant mis au rebut ET ajouté un composant." },
      { en: "Clicking “Check Availability” has no effect on MOs in the Shop Floor module.", fr: "Cliquer sur « Vérifier la disponibilité » n'a aucun effet sur les MO dans le module Shop Floor." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Components): After replenishing a scrapped component.",
      fr: "Source Odoo Learn (Gérer les composants) : Après avoir réapprovisionné un composant mis au rebut.",
    },
  }),
  complexQ({
    id: "mrp-123",
    module: "mrp",
    text: {
      en: "What can automatically generate a helpdesk ticket in Odoo? (Odoo Learn — Process Repairs & Returns)",
      fr: "Qu'est-ce qui peut générer automatiquement un ticket d'assistance dans Odoo ? (Odoo Learn — Processus de réparation et de retour)",
    },
    correct: {
      en: "Customer email",
      fr: "E-mail du client",
    },
    distractors: [
      { en: "SMS message", fr: "SMS" },
      { en: "Website visit", fr: "Visite du site Web" },
      { en: "Phone call", fr: "Coup de fil" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process Repairs & Returns): Customer email",
      fr: "Source Odoo Learn (Processus réparations et retours) : Email client",
    },
  }),
  complexQ({
    id: "mrp-124",
    module: "mrp",
    text: {
      en: "Why does Odoo block confirmation of the repair order before the product is received? (Odoo Learn — Process Repairs & Returns)",
      fr: "Pourquoi Odoo bloque-t-il la confirmation de la commande de réparation avant la réception du produit ? (Odoo Learn — Processus de réparation et de retour)",
    },
    correct: {
      en: "Inventory availability requirement not met",
      fr: "Exigence de disponibilité des stocks non satisfaite",
    },
    distractors: [
      { en: "Accounting validation failed", fr: "La validation comptable a échoué" },
      { en: "Warranty expired", fr: "Garantie expirée" },
      { en: "Delivery order not validated", fr: "Bon de livraison non validé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process Repairs & Returns): Inventory availability requirement not met",
      fr: "Source Odoo Learn (Processus Réparations et retours) : Exigence de disponibilité des stocks non satisfaite",
    },
  }),
  complexQ({
    id: "mrp-125",
    module: "mrp",
    text: {
      en: "What does clicking the “Return” button create? (Odoo Learn — Process Repairs & Returns)",
      fr: "Que crée le fait de cliquer sur le bouton « Retour » ? (Odoo Learn — Processus de réparation et de retour)",
    },
    correct: {
      en: "An incoming receipt",
      fr: "Un reçu entrant",
    },
    distractors: [
      { en: "A customer invoice", fr: "Une facture client" },
      { en: "A delivery order", fr: "Un bon de livraison" },
      { en: "A manufacturing order", fr: "Un ordre de fabrication" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process Repairs & Returns): An incoming receipt",
      fr: "Source Odoo Learn (Processus réparations et retours) : Un reçu entrant",
    },
  }),
  complexQ({
    id: "mrp-126",
    module: "mrp",
    text: {
      en: "When a maintenance request is configured to be recurring, what happens when one of the requests is deleted? (Odoo Learn — Recurrent Maintenance)",
      fr: "Lorsqu'une demande de maintenance est configurée pour être récurrente, que se passe-t-il lorsqu'une des demandes est supprimée ? (Odoo Learn — Entretien récurrent)",
    },
    correct: {
      en: "Every request of that type is deleted",
      fr: "Chaque demande de ce type est supprimée",
    },
    distractors: [
      { en: "Only that request is deleted, but no others", fr: "Seule cette demande est supprimée, mais aucune autre" },
      { en: "Only future requests are deleted, but not the current request", fr: "Seules les demandes futures sont supprimées, mais pas la demande actuelle" },
      { en: "Recurring requests cannot be deleted", fr: "Les demandes récurrentes ne peuvent pas être supprimées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recurrent Maintenance): Every request of that type is deleted",
      fr: "Source Odoo Learn (Maintenance Récurrente) : Chaque requête de ce type est supprimée",
    },
  }),
  complexQ({
    id: "mrp-127",
    module: "mrp",
    text: {
      en: "What happens when the ‘Recurrent’ checkbox on an existing maintenance request is un-ticked? (Odoo Learn — Recurrent Maintenance)",
      fr: "Que se passe-t-il lorsque la case « Récurrente » d'une demande de maintenance existante est décochée ? (Odoo Learn — Entretien récurrent)",
    },
    correct: {
      en: "All future requests are deleted, but not the initial request",
      fr: "Toutes les demandes futures sont supprimées, mais pas la demande initiale",
    },
    distractors: [
      { en: "Every request is deleted, including the current request", fr: "Chaque demande est supprimée, y compris la demande en cours" },
      { en: "No existing requests are deleted, but none will be scheduled for the future", fr: "Aucune demande existante n'est supprimée, mais aucune ne sera planifiée pour le futur" },
      { en: "It is not possible to untick the ‘Recurrent’ checkbox on an existing request", fr: "Il n’est pas possible de décocher la case « Récurrent » sur une demande existante" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recurrent Maintenance): All future requests are deleted, but not the initial request",
      fr: "Source Odoo Learn (Maintenance Récurrente) : Toutes les requêtes futures sont supprimées, mais pas la requête initiale",
    },
  }),
  complexQ({
    id: "mrp-128",
    module: "mrp",
    text: {
      en: "When a maintenance request is set to recurring, which of its requests appear on the ‘Maintenance’ app Kanban board? (Odoo Learn — Recurrent Maintenance)",
      fr: "Lorsqu'une demande de maintenance est définie comme récurrente, laquelle de ses demandes apparaît sur le tableau Kanban de l'application « Maintenance » ? (Odoo Learn — Entretien récurrent)",
    },
    correct: {
      en: "Only the current request",
      fr: "Seule la demande en cours",
    },
    distractors: [
      { en: "The current request and the next request", fr: "La demande en cours et la prochaine demande" },
      { en: "The current request and the next two requests", fr: "La demande actuelle et les deux demandes suivantes" },
      { en: "Maintenance requests are not shown on a Kanban board", fr: "Les demandes de maintenance ne sont pas affichées sur un tableau Kanban" },
    ],
    explanation: {
      en: "Source Odoo Learn (Recurrent Maintenance): Only the current request",
      fr: "Source Odoo Learn (Maintenance Récurrente) : Uniquement la requête en cours",
    },
  }),
  complexQ({
    id: "mrp-129",
    module: "mrp",
    text: {
      en: "Which of the following is not included in Odoo's production cost calculation by default? (Odoo Learn — Production Costs)",
      fr: "Lequel des éléments suivants n'est pas inclus par défaut dans le calcul du coût de production d'Odoo ? (Odoo Learn — Coûts de production)",
    },
    correct: {
      en: "Sales price of the product",
      fr: "Prix ​​de vente du produit",
    },
    distractors: [
      { en: "Employee hourly rate", fr: "Taux horaire des employés" },
      { en: "Component costs", fr: "Coûts des composants" },
      { en: "Work center cost per hour", fr: "Coût du poste de travail par heure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Production Costs): Sales price of the product",
      fr: "Source Odoo Learn (Coûts de production) : Prix de vente du produit",
    },
  }),
  complexQ({
    id: "mrp-130",
    module: "mrp",
    text: {
      en: "What does the “Cost Analysis” smart button show me? (Odoo Learn — Production Costs)",
      fr: "Que m'affiche le bouton intelligent « Analyse des coûts » ? (Odoo Learn — Coûts de production)",
    },
    correct: {
      en: "A summary of production costs across all MOs for a product",
      fr: "Un résumé des coûts de production pour tous les MO pour un produit",
    },
    distractors: [
      { en: "A list of BoM components with the cheapest prices", fr: "Une liste de composants BoM avec les prix les moins chers" },
      { en: "The purchase order history of each product", fr: "L’historique des bons de commande de chaque produit" },
      { en: "A profitability report for each salesperson", fr: "Un rapport de rentabilité pour chaque vendeur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Production Costs): A summary of production costs across all MOs for a product",
      fr: "Source Odoo Learn (Coûts de production) : Un résumé des coûts de production sur tous les MO pour un produit",
    },
  }),
  complexQ({
    id: "mrp-131",
    module: "mrp",
    text: {
      en: "Where can I see the full breakdown of component and labor costs for a single manufacturing order? (Odoo Learn — Production Costs)",
      fr: "Où puis-je voir la répartition complète des coûts des composants et de la main d’œuvre pour une seule commande de fabrication ? (Odoo Learn — Coûts de production)",
    },
    correct: {
      en: "BoM Overview smart button",
      fr: "Bouton intelligent Présentation de la nomenclature",
    },
    distractors: [
      { en: "product’s Sales tab", fr: "Onglet Ventes du produit" },
      { en: "Pricelist setup", fr: "Configuration de la liste de prix" },
      { en: "Inventory Forecast report", fr: "Rapport de prévision des stocks" },
    ],
    explanation: {
      en: "Source Odoo Learn (Production Costs): BoM Overview smart button",
      fr: "Source Odoo Learn (Coûts de production) : bouton intelligent Aperçu de la nomenclature",
    },
  }),
  complexQ({
    id: "mrp-132",
    module: "mrp",
    text: {
      en: "In Odoo, what does the costing method determine when a product is manufactured? (Odoo Learn — FIFO, AVCO, Standard — Manufacturing Costs)",
      fr: "Dans Odoo, qu’est-ce que la méthode de calcul des coûts détermine lorsqu’un produit est fabriqué ? (Odoo Learn — FIFO, AVCO, Standard — Coûts de fabrication)",
    },
    correct: {
      en: "How Odoo selects the cost value to add to inventory",
      fr: "Comment Odoo sélectionne la valeur de coût à ajouter à l'inventaire",
    },
    distractors: [
      { en: "How many units can be manufactured per day", fr: "Combien d'unités peuvent être fabriquées par jour" },
      { en: "How Odoo selects the cost value to deduct from inventory", fr: "Comment Odoo sélectionne la valeur de coût à déduire de l'inventaire" },
      { en: "Whether inventory is added manually or automatically", fr: "Si l'inventaire est ajouté manuellement ou automatiquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (FIFO, AVCO, Standard — Manufacturing Costs): How Odoo selects the cost value to add to inventory",
      fr: "Source Odoo Learn (FIFO, AVCO, Standard — Coûts de fabrication) : Comment Odoo sélectionne la valeur de coût à ajouter à l'inventaire",
    },
  }),
  complexQ({
    id: "mrp-133",
    module: "mrp",
    text: {
      en: "What does FIFO do when calculating unit cost for sold items? (Odoo Learn — FIFO, AVCO, Standard — Manufacturing Costs)",
      fr: "Que fait FIFO lors du calcul du coût unitaire des articles vendus ? (Odoo Learn — FIFO, AVCO, Standard — Coûts de fabrication)",
    },
    correct: {
      en: "Pulls the cost from the oldest products, and averages it",
      fr: "Extrait le coût des produits les plus anciens et en fait la moyenne",
    },
    distractors: [
      { en: "Averages all historical manufacturing costs for that product", fr: "Fait la moyenne de tous les coûts de fabrication historiques pour ce produit" },
      { en: "Pulls the oldest cost defined on the product form", fr: "Extrait le coût le plus ancien défini sur le formulaire de produit" },
      { en: "Uses the cost from the oldest available stock layer", fr: "Utilise le coût de la couche de stock la plus ancienne disponible" },
    ],
    explanation: {
      en: "Source Odoo Learn (FIFO, AVCO, Standard — Manufacturing Costs): Pulls the cost from the oldest products, and averages it",
      fr: "Source Odoo Learn (FIFO, AVCO, Standard — Coûts de fabrication) : extrait le coût des produits les plus anciens et en fait la moyenne",
    },
  }),
  complexQ({
    id: "mrp-134",
    module: "mrp",
    text: {
      en: "When a product is returned under FIFO, how is its valuation handled? (Odoo Learn — FIFO, AVCO, Standard — Manufacturing Costs)",
      fr: "Lorsqu’un produit est retourné en FIFO, comment est gérée sa valorisation ? (Odoo Learn — FIFO, AVCO, Standard — Coûts de fabrication)",
    },
    correct: {
      en: "The product is re-added to inventory at its original cost",
      fr: "Le produit est réajouté à l'inventaire à son coût d'origine",
    },
    distractors: [
      { en: "Odoo recalculates it based on the latest average cost", fr: "Odoo le recalcule en fonction du dernier coût moyen" },
      { en: "Odoo applies the current manufacturing cost", fr: "Odoo applique le coût de fabrication actuel" },
      { en: "The product is removed from FIFO calculations entirely", fr: "Le produit est entièrement supprimé des calculs FIFO" },
    ],
    explanation: {
      en: "Source Odoo Learn (FIFO, AVCO, Standard — Manufacturing Costs): The product is re-added to inventory at its original cost",
      fr: "Source Odoo Learn (FIFO, AVCO, Standard — Coûts de fabrication) : Le produit est réajouté en stock à son coût d'origine",
    },
  }),
  complexQ({
    id: "mrp-135",
    module: "mrp",
    text: {
      en: "On the Master Production Schedule, how can you view the final product AND its components at the same time? (Odoo Learn — Use the Master Production Schedule)",
      fr: "Sur le Plan directeur de production, comment pouvez-vous visualiser le produit final ET ses composants en même temps ? (Odoo Learn — Utiliser le calendrier directeur de production)",
    },
    correct: {
      en: "Add a Product > choose the final product, and select the product’s bill of materials.",
      fr: "Ajoutez un produit > choisissez le produit final et sélectionnez la nomenclature du produit.",
    },
    distractors: [
      { en: "Add a Product > choose the final product, and the components will populate automatically.", fr: "Ajoutez un produit > choisissez le produit final et les composants se rempliront automatiquement." },
      { en: "Add a Product > choose the final product and define a Safety Stock Target.", fr: "Ajoutez un produit > choisissez le produit final et définissez un objectif de stock de sécurité." },
      { en: "Add the final product and all of the components separately.", fr: "Ajoutez le produit final et tous les composants séparément." },
    ],
    explanation: {
      en: "Source Odoo Learn (Use the Master Production Schedule): Add a Product > choose the final product, and select the product’s bill of materials.",
      fr: "Source Odoo Learn (Utiliser le calendrier principal de production) : Ajouter un produit > choisir le produit final et sélectionner la nomenclature du produit.",
    },
  }),
  complexQ({
    id: "mrp-136",
    module: "mrp",
    text: {
      en: "If I replenish LESS than is required by the forecasted demand, what color does the Suggested Replenishment cell turn? (Odoo Learn — Use the Master Production Schedule)",
      fr: "Si je réapprovisionne MOINS que ce qui est requis par la demande prévue, de quelle couleur la cellule de réapprovisionnement suggéré devient-elle ? (Odoo Learn — Utiliser le calendrier directeur de production)",
    },
    correct: {
      en: "Yellow/Orange.",
      fr: "Jaune/Orange.",
    },
    distractors: [
      { en: "Gray.", fr: "Gris." },
      { en: "Red.", fr: "Rouge." },
      { en: "Green", fr: "Vert" },
    ],
    explanation: {
      en: "Source Odoo Learn (Use the Master Production Schedule): Yellow/Orange.",
      fr: "Source Odoo Learn (Utilisez le calendrier principal de production) : Jaune/Orange.",
    },
  }),
  complexQ({
    id: "mrp-137",
    module: "mrp",
    text: {
      en: "On the Master Production Schedule, how can you replenish components that are purchased? (Odoo Learn — Use the Master Production Schedule)",
      fr: "Dans le calendrier directeur de production, comment pouvez-vous réapprovisionner les composants achetés ? (Odoo Learn — Utiliser le calendrier directeur de production)",
    },
    correct: {
      en: "Make sure that a vendor is listed on the component’s product form.",
      fr: "Assurez-vous qu'un fournisseur est répertorié sur le formulaire de produit du composant.",
    },
    distractors: [
      { en: "Replenishing the final product will automatically replenish the components.", fr: "Le réapprovisionnement du produit final reconstituera automatiquement les composants." },
      { en: "You can only replenish components by setting up reorder points.", fr: "Vous ne pouvez réapprovisionner les composants qu'en configurant des points de réapprovisionnement." },
      { en: "You need to purchase the components manually from the Purchase app.", fr: "Vous devez acheter les composants manuellement à partir de l'application Achat." },
    ],
    explanation: {
      en: "Source Odoo Learn (Use the Master Production Schedule): Make sure that a vendor is listed on the component’s product form.",
      fr: "Source Odoo Learn (Utilisez le calendrier principal de production) : Assurez-vous qu'un fournisseur est répertorié sur le formulaire de produit du composant.",
    },
  }),
  complexQ({
    id: "mrp-138",
    module: "mrp",
    text: {
      en: "Where do you specify that a product is subcontracted? (Odoo Learn — Basic Subcontracting)",
      fr: "Où précise-t-on qu'un produit est sous-traité ? (Odoo Learn — Sous-traitance de base)",
    },
    correct: {
      en: "On the product’s BoM.",
      fr: "Sur la nomenclature du produit.",
    },
    distractors: [
      { en: "On the product’s form.", fr: "Sur le formulaire du produit." },
      { en: "On each of the pages for the product’s components.", fr: "Sur chacune des pages des composants du produit." },
      { en: "There is no need to specify that a product is subcontracted.", fr: "Il n'est pas nécessaire de préciser qu'un produit est sous-traité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Subcontracting): On the product’s BoM.",
      fr: "Source Odoo Learn (Sous-traitance Basique) : Sur la BoM du produit.",
    },
  }),
  complexQ({
    id: "mrp-139",
    module: "mrp",
    text: {
      en: "How many subcontractors can be listed for a single product? (Odoo Learn — Basic Subcontracting)",
      fr: "Combien de sous-traitants peut-on répertorier pour un même produit ? (Odoo Learn — Sous-traitance de base)",
    },
    correct: {
      en: "As many as you want.",
      fr: "Autant que vous le souhaitez.",
    },
    distractors: [
      { en: "One.", fr: "Un." },
      { en: "Two.", fr: "Deux." },
      { en: "Three.", fr: "Trois." },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Subcontracting): As many as you want.",
      fr: "Source Odoo Learn (Sous-traitance de base) : Autant que vous le souhaitez.",
    },
  }),
  complexQ({
    id: "mrp-140",
    module: "mrp",
    text: {
      en: "When using basic subcontracting, where do you specify the components needed for manufacturing? (Odoo Learn — Basic Subcontracting)",
      fr: "Lors du recours à la sous-traitance de base, où précisez-vous les composants nécessaires à la fabrication ? (Odoo Learn — Sous-traitance de base)",
    },
    correct: {
      en: "You don’t need to specify the components, as the subcontractor is responsible for them.",
      fr: "Vous n’avez pas besoin de préciser les composants, car le sous-traitant en est responsable.",
    },
    distractors: [
      { en: "On the product’s BoM.", fr: "Sur la nomenclature du produit." },
      { en: "In an email to the subcontractor.", fr: "Dans un email au sous-traitant." },
      { en: "Subcontracted products do not have components.", fr: "Les produits sous-traités ne comportent pas de composants." },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Subcontracting): You don’t need to specify the components, as the subcontractor is responsible for them.",
      fr: "Source Odoo Learn (Sous-traitance de base) : Vous n'avez pas besoin de préciser les composants, car le sous-traitant en est responsable.",
    },
  }),
  complexQ({
    id: "mrp-141",
    module: "mrp",
    text: {
      en: "What is the purpose of the “Resupply Subcontractor on Order” route? (Odoo Learn — Resupply Subcontractor)",
      fr: "A quoi sert le parcours « Réapprovisionner Sous-Traitant sur Commande » ? (Odoo Learn — Sous-traitant de réapprovisionnement)",
    },
    correct: {
      en: "Shipping components to a subcontractor",
      fr: "Expédition de composants à un sous-traitant",
    },
    distractors: [
      { en: "Purchasing a product from a subcontractor", fr: "Acheter un produit chez un sous-traitant" },
      { en: "Dropshipping components to a subcontractor", fr: "Livraison de composants à un sous-traitant" },
      { en: "There is no such route in Odoo", fr: "Il n’existe pas de tel itinéraire dans Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Resupply Subcontractor): Shipping components to a subcontractor",
      fr: "Source Odoo Learn (Resupply Subcontractor) : Expédition de composants à un sous-traitant",
    },
  }),
  complexQ({
    id: "mrp-142",
    module: "mrp",
    text: {
      en: "Where is the “Resupply Subcontractor on Order” route enabled? (Odoo Learn — Resupply Subcontractor)",
      fr: "Où l'itinéraire « Réapprovisionnement sous-traitant sur commande » est-il activé ? (Odoo Learn — Sous-traitant de réapprovisionnement)",
    },
    correct: {
      en: "On the “Inventory” tab of a subcontracted product’s components",
      fr: "Sur l'onglet « Inventaire » des composants d'un produit sous-traité",
    },
    distractors: [
      { en: "On the “Inventory” tab of a subcontracted product", fr: "Sur l'onglet « Inventaire » d'un produit sous-traité" },
      { en: "On the purchase order for a subcontracted product", fr: "Sur le bon de commande d'un produit sous-traité" },
      { en: "There is no such route in Odoo", fr: "Il n’existe pas de tel itinéraire dans Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Resupply Subcontractor): On the “Inventory” tab of a subcontracted product’s components",
      fr: "Source Odoo Learn (Sous-Traitant Réapprovisionnement) : Sur l'onglet « Inventaire » des composants d'un produit sous-traité",
    },
  }),
  complexQ({
    id: "mrp-143",
    module: "mrp",
    text: {
      en: "Which smart buttons appear after confirming a purchase order for a product subcontracted using the “Resupply Subcontractor on Order” route? (Odoo Learn — Resupply Subcontractor)",
      fr: "Quels boutons intelligents apparaissent après la confirmation d'une commande d'achat d'un produit sous-traité via le parcours « Réapprovisionner Sous-Traitant sur Commande » ? (Odoo Learn — Sous-traitant de réapprovisionnement)",
    },
    correct: {
      en: "“Resupply” and “Receipt”",
      fr: "« Réapprovisionnement » et « Réception »",
    },
    distractors: [
      { en: "“Delivery” and “Receipt”", fr: "« Livraison » et « Réception »" },
      { en: "“Delivery” and “Resupply”", fr: "« Livraison » et « Réapprovisionnement »" },
      { en: "No smart buttons appear", fr: "Aucun bouton intelligent n'apparaît" },
    ],
    explanation: {
      en: "Source Odoo Learn (Resupply Subcontractor): “Resupply” and “Receipt”",
      fr: "Source Odoo Learn (Sous-Traitant Réapprovisionnement) : « Réapprovisionnement » et « Réception »",
    },
  }),
  complexQ({
    id: "mrp-144",
    module: "mrp",
    text: {
      en: "Which of the following is NOT a necessary step for configuring subcontractor dropshipping? (Odoo Learn — Subcontracting: Dropshipping)",
      fr: "Lequel des éléments suivants n’est PAS une étape nécessaire pour configurer le dropshipping des sous-traitants ? (Odoo Learn — Sous-traitance : Dropshipping)",
    },
    correct: {
      en: "Activate the route “Manufacture” for the components and the final product.",
      fr: "Activez la filière « Fabrication » pour les composants et le produit final.",
    },
    distractors: [
      { en: "Designate a vendor and delivery lead time for each component.", fr: "Désignez un fournisseur et un délai de livraison pour chaque composant." },
      { en: "Activate the route “Dropship Subcontractor on Order” on each component’s product form.", fr: "Activez l’itinéraire « Sous-traitant Dropship sur commande » sur la fiche produit de chaque composant." },
      { en: "Activate the route “Dropship” for the final product.", fr: "Activez l'itinéraire « Dropship » pour le produit final." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subcontracting: Dropshipping): Activate the route “Manufacture” for the components and the final product.",
      fr: "Source Odoo Learn (Sous-traitance : Dropshipping) : Activez le parcours « Fabrication » pour les composants et le produit final.",
    },
  }),
  mcq3Q({
    id: "mrp-145",
    module: "mrp",
    text: {
      en: "What is the purpose of configuring lead times in subcontracting cases? (Odoo Learn — Subcontracting: Dropshipping)",
      fr: "A quoi sert le paramétrage des délais dans les cas de sous-traitance ? (Odoo Learn — Sous-traitance : Dropshipping)",
    },
    correct: {
      en: "To account for the time it takes for the subcontractor to receive materials and manufacture the product.",
      fr: "Tenir compte du temps nécessaire au sous-traitant pour recevoir les matériaux et fabriquer le produit.",
    },
    distractors: [
      { en: "To add an extra time buffer in order to avoid unexpected delays in shipping or production.", fr: "Pour ajouter un délai supplémentaire afin d'éviter des retards inattendus dans l'expédition ou la production." },
      { en: "To make sure there are no deviations from the production schedule.", fr: "Pour s'assurer qu'il n'y a aucun écart par rapport au calendrier de production." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subcontracting: Dropshipping): To account for the time it takes for the subcontractor to receive materials and manufacture the product.",
      fr: "Source Odoo Learn (Sous-traitance : Dropshipping) : Pour tenir compte du temps nécessaire au sous-traitant pour recevoir les matériaux et fabriquer le produit.",
    },
  }),
  complexQ({
    id: "mrp-146",
    module: "mrp",
    text: {
      en: "Where can I activate subcontractor dropshipping in Odoo? (Odoo Learn — Subcontracting: Dropshipping)",
      fr: "Où puis-je activer le dropshipping sous-traitant dans Odoo ? (Odoo Learn — Sous-traitance : Dropshipping)",
    },
    correct: {
      en: "Manufacturing app > Configuration > Settings AND Purchase app > Configuration > Settings",
      fr: "Application Fabrication > Configuration > Paramètres ET Application Achat > ​​Configuration > Paramètres",
    },
    distractors: [
      { en: "Manufacturing app > Configuration > Settings", fr: "Application de fabrication > Configuration > Paramètres" },
      { en: "Inventory app > Configuration > Settings", fr: "Application Inventaire > Configuration > Paramètres" },
      { en: "Purchase app > Configuration > Settings", fr: "Acheter l'application > Configuration > Paramètres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subcontracting: Dropshipping): Manufacturing app > Configuration > Settings AND Purchase app > Configuration > Settings",
      fr: "Source Odoo Learn (Sous-traitance : Dropshipping) : Application Fabrication > Configuration > Paramètres ET Application Achat > ​​Configuration > Paramètres",
    },
  }),
  complexQ({
    id: "mrp-147",
    module: "mrp",
    text: {
      en: "What is the ‘Measures’ drop-down menu on the ‘Production Analysis’ report used for? (Odoo Learn — Production Analysis)",
      fr: "À quoi sert le menu déroulant « Mesures » du rapport « Analyse de la production » ? (Odoo Learn — Analyse de la production)",
    },
    correct: {
      en: "To select the dataset displayed by the report",
      fr: "Pour sélectionner l'ensemble de données affiché par le rapport",
    },
    distractors: [
      { en: "To measure the difference between two datasets", fr: "Pour mesurer la différence entre deux ensembles de données" },
      { en: "To select a product to display data for", fr: "Pour sélectionner un produit pour lequel afficher les données" },
      { en: "There is no ‘Measures’ drop-down menu", fr: "Il n'y a pas de menu déroulant « Mesures »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Production Analysis): To select the dataset displayed by the report",
      fr: "Source Odoo Learn (Production Analysis) : Pour sélectionner l'ensemble de données affiché par le rapport",
    },
  }),
  complexQ({
    id: "mrp-148",
    module: "mrp",
    text: {
      en: "How do I make the ‘Production Analysis’ report only show data for a single product? (Odoo Learn — Production Analysis)",
      fr: "Comment puis-je faire en sorte que le rapport « Analyse de la production » affiche uniquement les données d'un seul produit ? (Odoo Learn — Analyse de la production)",
    },
    correct: {
      en: "Enter the product’s name in the search bar",
      fr: "Saisissez le nom du produit dans la barre de recherche",
    },
    distractors: [
      { en: "Select the product from the ‘Measures’ drop-down menu", fr: "Sélectionnez le produit dans le menu déroulant « Mesures »" },
      { en: "Access the report from the product’s form", fr: "Accéder au rapport depuis le formulaire du produit" },
      { en: "There is no way to view data for a single product", fr: "Il n'est pas possible d'afficher les données d'un seul produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Production Analysis): Enter the product’s name in the search bar",
      fr: "Source Odoo Learn (Analyse de production) : Saisissez le nom du produit dans la barre de recherche",
    },
  }),
  complexQ({
    id: "mrp-149",
    module: "mrp",
    text: {
      en: "What is the effect of enabling a ‘Comparison’ option on the ‘Production Analysis’ report? (Odoo Learn — Production Analysis)",
      fr: "Quel est l'effet de l'activation d'une option « Comparaison » sur le rapport « Analyse de la production » ? (Odoo Learn — Analyse de la production)",
    },
    correct: {
      en: "The data for two time periods is compared",
      fr: "Les données de deux périodes sont comparées",
    },
    distractors: [
      { en: "The data for two products is compared", fr: "Les données de deux produits sont comparées" },
      { en: "The data for two datasets is compared", fr: "Les données de deux ensembles de données sont comparées" },
      { en: "The ‘Production Analysis’ report is compared to the ‘Overall Equipment Effectiveness’ report", fr: "Le rapport « Analyse de la production » est comparé au rapport « Efficacité globale de l'équipement »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Production Analysis): The data for two time periods is compared",
      fr: "Source Odoo Learn (Analyse de production) : Les données de deux périodes sont comparées",
    },
  }),
  complexQ({
    id: "mrp-150",
    module: "mrp",
    text: {
      en: "What is the effect of clicking ‘Assign All’ next to an order on the MRP Reception Report for an MO? (Odoo Learn — Allocation Reports)",
      fr: "Quel est l'effet de cliquer sur « Attribuer tout » à côté d'une commande sur le rapport de réception MRP pour un MO ? (Odoo Learn — Rapports d'allocation)",
    },
    correct: {
      en: "Units are assigned to each quantity of the product included in the order",
      fr: "Les unités sont attribuées à chaque quantité du produit inclus dans la commande",
    },
    distractors: [
      { en: "Every unit of the product produced in the MO is assigned to that order", fr: "Chaque unité du produit fabriqué dans le MO est affectée à cette commande" },
      { en: "Every unit of the product in stock is assigned to that order", fr: "Chaque unité du produit en stock est affectée à cette commande" },
      { en: "There is no ‘Assign All’ button", fr: "Il n'y a pas de bouton « Attribuer tout »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Allocation Reports): Units are assigned to each quantity of the product included in the order",
      fr: "Source Odoo Learn (Rapports d'allocation) : Les unités sont attribuées à chaque quantité du produit inclus dans la commande",
    },
  }),
  complexQ({
    id: "mrp-151",
    module: "mrp",
    text: {
      en: "How do I unassign products from an order on the MRP Reception Report? (Odoo Learn — Allocation Reports)",
      fr: "Comment désaffecter des produits à une commande sur le rapport de réception MRP ? (Odoo Learn — Rapports d'allocation)",
    },
    correct: {
      en: "Click the ‘Unassign’ button that appears after clicking ‘Assign’",
      fr: "Cliquez sur le bouton « Annuler l'attribution » qui apparaît après avoir cliqué sur « Attribuer »",
    },
    distractors: [
      { en: "Click the ‘Assign’ button a second time", fr: "Cliquez une deuxième fois sur le bouton « Attribuer »" },
      { en: "Navigate to the order, and manually unassign the products", fr: "Accédez à la commande et désattribuez manuellement les produits" },
      { en: "It is not possible to unassign products that have already been assigned", fr: "Il n'est pas possible d'annuler l'attribution de produits déjà attribués" },
    ],
    explanation: {
      en: "Source Odoo Learn (Allocation Reports): Click the ‘Unassign’ button that appears after clicking ‘Assign’",
      fr: "Source Odoo Learn (Rapports d'allocation) : Cliquez sur le bouton « Annuler l'attribution » qui apparaît après avoir cliqué sur « Attribuer »",
    },
  }),
  complexQ({
    id: "mrp-152",
    module: "mrp",
    text: {
      en: "What is the effect of clicking the ‘Print Label’ button on the MRP Reception Report? (Odoo Learn — Allocation Reports)",
      fr: "Quel est l'effet de cliquer sur le bouton « Imprimer l'étiquette » sur le rapport de réception MRP ? (Odoo Learn — Rapports d'allocation)",
    },
    correct: {
      en: "A PDF is generated and downloaded, with labels to attach to the products to signify they have been reserved for a specific order",
      fr: "Un PDF est généré et téléchargé, avec des étiquettes à coller sur les produits pour signifier qu'ils ont été réservés pour une commande spécifique",
    },
    distractors: [
      { en: "A PDF is generated and downloaded, with sales barcodes to attach to the products", fr: "Un PDF est généré et téléchargé, avec des codes-barres de vente à joindre aux produits" },
      { en: "A PDF is generated and downloaded, with labels to attach to the products to signify they can be used for any order", fr: "Un PDF est généré et téléchargé, avec des étiquettes à coller sur les produits pour signifier qu'ils peuvent être utilisés pour toute commande" },
      { en: "There is no ‘Print Label’ button", fr: "Il n'y a pas de bouton « Imprimer l'étiquette »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Allocation Reports): A PDF is generated and downloaded, with labels to attach to the products to signify they have been reserved for a specific order",
      fr: "Source Odoo Learn (Rapports d'allocation) : Un PDF est généré et téléchargé, avec des étiquettes à coller sur les produits pour signifier qu'ils ont été réservés pour une commande spécifique",
    },
  }),
  complexQ({
    id: "mrp-153",
    module: "mrp",
    text: {
      en: "What does it mean when a work center is “fully productive”? (Odoo Learn — Overall Equipment Effectiveness)",
      fr: "Qu'est-ce que cela signifie lorsqu'un centre de travail est « pleinement productif » ? (Odoo Learn — Efficacité globale de l'équipement)",
    },
    correct: {
      en: "The work center is processing a work order within its expected duration",
      fr: "Le poste de travail traite un ordre de travail dans le délai prévu",
    },
    distractors: [
      { en: "The work center is operational", fr: "Le centre de travail est opérationnel" },
      { en: "The work center is processing multiple work orders", fr: "Le poste de travail traite plusieurs ordres de travail" },
      { en: "The work center has completed all its work orders for the day", fr: "Le poste de travail a terminé tous ses bons de travail de la journée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Overall Equipment Effectiveness): The work center is processing a work order within its expected duration",
      fr: "Source Odoo Learn (Efficacité globale de l'équipement) : Le centre de travail traite un ordre de travail dans le délai prévu",
    },
  }),
  complexQ({
    id: "mrp-154",
    module: "mrp",
    text: {
      en: "What does it mean when a work center is operating at “reduced speed”? (Odoo Learn — Overall Equipment Effectiveness)",
      fr: "Qu'est-ce que cela signifie lorsqu'un poste de travail fonctionne à « vitesse réduite » ? (Odoo Learn — Efficacité globale de l'équipement)",
    },
    correct: {
      en: "The work center is processing a work order that has exceeded its expected duration",
      fr: "Le poste de travail traite un ordre de travail qui a dépassé sa durée prévue",
    },
    distractors: [
      { en: "The work center is operating more slowly than usual", fr: "Le poste de travail fonctionne plus lentement que d'habitude" },
      { en: "The work center does not have enough employees staffing it", fr: "Le centre de travail ne dispose pas de suffisamment d'employés pour le doter en personnel" },
      { en: "The work center has shut down for the day", fr: "Le centre de travail est fermé pour la journée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Overall Equipment Effectiveness): The work center is processing a work order that has exceeded its expected duration",
      fr: "Source Odoo Learn (Efficacité globale des équipements) : Le centre de travail traite un ordre de travail qui a dépassé sa durée prévue",
    },
  }),
  complexQ({
    id: "mrp-155",
    module: "mrp",
    text: {
      en: "On a work center’s form, what is the ‘Capacity’ field used to set? (Odoo Learn — Overall Equipment Effectiveness)",
      fr: "Sur le formulaire d'un centre de charge, que permet de paramétrer le champ « Capacité » ? (Odoo Learn — Efficacité globale de l'équipement)",
    },
    correct: {
      en: "The number of product units that can be manufactured in parallel",
      fr: "Le nombre d'unités de produits pouvant être fabriquées en parallèle",
    },
    distractors: [
      { en: "The number of work orders that can be processed simultaneously", fr: "Le nombre de bons de travail pouvant être traités simultanément" },
      { en: "The number of employees that can work at the work center simultaneously", fr: "Le nombre d'employés pouvant travailler simultanément sur le poste de travail" },
      { en: "The maximum number of work orders the work center can process in a day", fr: "Le nombre maximum d'ordres de travail que le centre de charge peut traiter en une journée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Overall Equipment Effectiveness): The number of product units that can be manufactured in parallel",
      fr: "Source Odoo Learn (Efficacité globale de l'équipement) : Le nombre d'unités de produits pouvant être fabriquées en parallèle",
    },
  }),
];
