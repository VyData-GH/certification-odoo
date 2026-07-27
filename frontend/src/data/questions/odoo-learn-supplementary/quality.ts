import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const qualitySupplementaryQuestions = [
  complexQ({
    id: "qty-001",
    module: "quality",
    text: {
      en: "What would I suggest when creating a Quality Alert? (Odoo Learn — Quality Alerts & QCP Basics)",
      fr: "Que suggérerais-je lors de la création d'une alerte qualité ? (Odoo Learn — Alertes qualité et bases des QCP)",
    },
    correct: {
      en: "Corrective and preventative actions",
      fr: "Actions correctives et préventives",
    },
    distractors: [
      { en: "Shipping improvements", fr: "Améliorations d'expédition" },
      { en: "Cost-saving ideas", fr: "Idées d'économies" },
      { en: "New product designs", fr: "Nouvelles conceptions de produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Alerts & QCP Basics): Corrective and preventative actions",
      fr: "Source Odoo Learn (Alertes qualité et bases des QCP) : Actions correctives et préventives",
    },
  }),
  complexQ({
    id: "qty-002",
    module: "quality",
    text: {
      en: "Why is it important to configure QCPs in the Quality app? (Odoo Learn — Quality Alerts & QCP Basics)",
      fr: "Pourquoi est-il important de configurer les QCP dans l'application Qualité ? (Odoo Learn — Alertes qualité et bases des QCP)",
    },
    correct: {
      en: "They ensure automatic triggering of quality checks",
      fr: "Ils garantissent le déclenchement automatique des contrôles qualité",
    },
    distractors: [
      { en: "They reduce the need for team collaboration", fr: "Ils réduisent le besoin de collaboration d'équipe" },
      { en: "They replace manual data entry entirely", fr: "Ils remplacent entièrement la saisie manuelle" },
      { en: "They automatically ship products", fr: "Ils expédient automatiquement les produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Alerts & QCP Basics): They ensure automatic triggering of quality checks",
      fr: "Source Odoo Learn (Alertes qualité et bases des QCP) : Ils garantissent le déclenchement automatique des contrôles qualité",
    },
  }),
  complexQ({
    id: "qty-003",
    module: "quality",
    text: {
      en: "Which quality check type allows for setting tolerance levels for specific product specifications? (Odoo Learn — Quality Alerts & QCP Basics)",
      fr: "Quel type de contrôle qualité permet de définir des niveaux de tolérance pour des spécifications produit ? (Odoo Learn — Alertes qualité et bases des QCP)",
    },
    correct: {
      en: "Measurement",
      fr: "Mesure",
    },
    distractors: [
      { en: "Pass-Fail", fr: "Réussite-Échec" },
      { en: "Worksheet", fr: "Feuille de travail" },
      { en: "Take a Picture", fr: "Prendre une photo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Alerts & QCP Basics): Measurement",
      fr: "Source Odoo Learn (Alertes qualité et bases des QCP) : Mesure",
    },
  }),
  complexQ({
    id: "qty-004",
    module: "quality",
    text: {
      en: "What is the main purpose of a Quality Control Point (QCP) in Odoo's manufacturing process? (Odoo Learn — Quality Control Points)",
      fr: "Quel est l'objectif principal d'un point de contrôle qualité (QCP) dans le processus de fabrication Odoo ? (Odoo Learn — Points de contrôle qualité)",
    },
    correct: {
      en: "To automatically generate quality checks during specific operations",
      fr: "Générer automatiquement des contrôles qualité lors d'opérations spécifiques",
    },
    distractors: [
      { en: "To assign work orders to manufacturing users", fr: "Assigner les ordres de travail aux utilisateurs de fabrication" },
      { en: "To schedule manufacturing orders based on availability", fr: "Planifier les ordres de fabrication selon la disponibilité" },
      { en: "To control the inventory valuation for finished goods", fr: "Contrôler la valorisation des stocks de produits finis" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Control Points): To automatically generate quality checks during specific operations",
      fr: "Source Odoo Learn (Points de contrôle qualité) : Générer automatiquement des contrôles qualité lors d'opérations spécifiques",
    },
  }),
  complexQ({
    id: "qty-005",
    module: "quality",
    text: {
      en: "Why might a QCP be applied at the product category level rather than the product level? (Odoo Learn — Quality Control Points)",
      fr: "Pourquoi un QCP pourrait-il être appliqué au niveau de la catégorie de produit plutôt qu'au niveau produit ? (Odoo Learn — Points de contrôle qualité)",
    },
    correct: {
      en: "To apply standardized instructions across multiple related products",
      fr: "Appliquer des instructions standardisées à plusieurs produits connexes",
    },
    distractors: [
      { en: "To check for product variants within the same template", fr: "Vérifier les variantes de produit au sein du même modèle" },
      { en: "To simplify the routing configuration", fr: "Simplifier la configuration des routages" },
      { en: "Because product-specific checks are not supported in the Quality app", fr: "Parce que les contrôles spécifiques au produit ne sont pas pris en charge dans l'app Qualité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Control Points): To apply standardized instructions across multiple related products",
      fr: "Source Odoo Learn (Points de contrôle qualité) : Appliquer des instructions standardisées à plusieurs produits connexes",
    },
  }),
  complexQ({
    id: "qty-006",
    module: "quality",
    text: {
      en: "What visual indicator shows that quality checks for a manufacturing order have been completed? (Odoo Learn — Quality Control Points)",
      fr: "Quel indicateur visuel montre que les contrôles qualité d'un ordre de fabrication sont terminés ? (Odoo Learn — Points de contrôle qualité)",
    },
    correct: {
      en: "The \"Quality Checks\" smart button text turns green",
      fr: "Le texte du bouton intelligent « Contrôles qualité » devient vert",
    },
    distractors: [
      { en: "A green checkmark on the \"Work Order\" button", fr: "Une coche verte sur le bouton « Ordre de travail »" },
      { en: "A notification banner in the Quality app", fr: "Une bannière de notification dans l'app Qualité" },
      { en: "The status of the MO changes to \"Completed\"", fr: "Le statut de l'OF passe à « Terminé »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Control Points): The \"Quality Checks\" smart button text turns green",
      fr: "Source Odoo Learn (Points de contrôle qualité) : Le texte du bouton intelligent « Contrôles qualité » devient vert",
    },
  }),
  complexQ({
    id: "qty-007",
    module: "quality",
    text: {
      en: "What is the \"Control Point\" field on a quality check form used for? (Odoo Learn — Processing Quality Checks)",
      fr: "À quoi sert le champ « Point de contrôle » sur un formulaire de contrôle qualité ? (Odoo Learn — Traitement des contrôles qualité)",
    },
    correct: {
      en: "To assign the check to an existing QCP",
      fr: "Assigner le contrôle à un QCP existant",
    },
    distractors: [
      { en: "To create a new QCP to which the check will be assigned", fr: "Créer un nouveau QCP auquel le contrôle sera assigné" },
      { en: "To turn the check into a QCP", fr: "Transformer le contrôle en QCP" },
      { en: "There is no \"Control Point\" field on a quality check form", fr: "Il n'existe pas de champ « Point de contrôle » sur un formulaire de contrôle qualité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Processing Quality Checks): To assign the check to an existing QCP",
      fr: "Source Odoo Learn (Traitement des contrôles qualité) : Assigner le contrôle à un QCP existant",
    },
  }),
  complexQ({
    id: "qty-008",
    module: "quality",
    text: {
      en: "What is the effect of clicking the purple \"Quality Checks\" button on an inventory or manufacturing order in the backend? (Odoo Learn — Processing Quality Checks)",
      fr: "Quel est l'effet de cliquer sur le bouton violet « Contrôles qualité » sur un transfert ou un ordre de fabrication dans le backend ? (Odoo Learn — Traitement des contrôles qualité)",
    },
    correct: {
      en: "A pop-up window opens, from which you can process any checks requested for the MO",
      fr: "Une fenêtre pop-up s'ouvre, depuis laquelle vous pouvez traiter les contrôles demandés pour l'OF",
    },
    distractors: [
      { en: "All quality checks requested for the order are passed automatically", fr: "Tous les contrôles qualité demandés pour la commande sont validés automatiquement" },
      { en: "All quality checks requested for the order are failed automatically", fr: "Tous les contrôles qualité demandés pour la commande échouent automatiquement" },
      { en: "The \"Quality Checks\" button is white, not purple", fr: "Le bouton « Contrôles qualité » est blanc, pas violet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Processing Quality Checks): A pop-up window opens, from which you can process any checks requested for the MO",
      fr: "Source Odoo Learn (Traitement des contrôles qualité) : Une fenêtre pop-up s'ouvre, depuis laquelle vous pouvez traiter les contrôles demandés pour l'OF",
    },
  }),
  complexQ({
    id: "qty-009",
    module: "quality",
    text: {
      en: "How do you process a quality check requested for a work order? (Odoo Learn — Processing Quality Checks)",
      fr: "Comment traitez-vous un contrôle qualité demandé pour un ordre de travail ? (Odoo Learn — Traitement des contrôles qualité)",
    },
    correct: {
      en: "From the Shop Floor module",
      fr: "Depuis le module Atelier",
    },
    distractors: [
      { en: "From the MO in the backend", fr: "Depuis l'OF dans le backend" },
      { en: "From the Quality app", fr: "Depuis l'app Qualité" },
      { en: "Quality checks cannot be requested for work orders", fr: "Les contrôles qualité ne peuvent pas être demandés pour les ordres de travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Processing Quality Checks): From the Shop Floor module",
      fr: "Source Odoo Learn (Traitement des contrôles qualité) : Depuis le module Atelier",
    },
  }),
  complexQ({
    id: "qty-010",
    module: "quality",
    text: {
      en: "Which fields are pre-filled on a quality alert form created from the Quality app? (Odoo Learn — Quality Alerts)",
      fr: "Quels champs sont préremplis sur une alerte qualité créée depuis l'app Qualité ? (Odoo Learn — Alertes qualité)",
    },
    correct: {
      en: "None",
      fr: "Aucun",
    },
    distractors: [
      { en: "Product and Picking", fr: "Produit et prélèvement" },
      { en: "Product and Work Center", fr: "Produit et centre de travail" },
      { en: "Product, Work Center, and Picking", fr: "Produit, centre de travail et prélèvement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Alerts): None",
      fr: "Source Odoo Learn (Alertes qualité) : Aucun",
    },
  }),
  complexQ({
    id: "qty-011",
    module: "quality",
    text: {
      en: "What is the Preventive Actions tab on a quality alert used for? (Odoo Learn — Quality Alerts)",
      fr: "À quoi sert l'onglet Actions préventives sur une alerte qualité ? (Odoo Learn — Alertes qualité)",
    },
    correct: {
      en: "To specify actions that should be taken to prevent the quality issue from reoccurring",
      fr: "Spécifier les actions à entreprendre pour empêcher la réapparition du problème qualité",
    },
    distractors: [
      { en: "To describe the quality issue", fr: "Décrire le problème qualité" },
      { en: "To specify actions that should be taken to fix the quality issue", fr: "Spécifier les actions à entreprendre pour corriger le problème qualité" },
      { en: "There is no Preventive Actions tab on a quality alert form", fr: "Il n'existe pas d'onglet Actions préventives sur une alerte qualité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Alerts): To specify actions that should be taken to prevent the quality issue from reoccurring",
      fr: "Source Odoo Learn (Alertes qualité) : Spécifier les actions à entreprendre pour empêcher la réapparition du problème qualité",
    },
  }),
  complexQ({
    id: "qty-012",
    module: "quality",
    text: {
      en: "What happens when a quality alert is moved to the final stage of the review process? (Odoo Learn — Quality Alerts)",
      fr: "Que se passe-t-il lorsqu'une alerte qualité est déplacée à l'étape finale du processus de revue ? (Odoo Learn — Alertes qualité)",
    },
    correct: {
      en: "A \"Date Closed\" field appears on the Miscellaneous tab",
      fr: "Un champ « Date de clôture » apparaît dans l'onglet Divers",
    },
    distractors: [
      { en: "The quality alert is deleted", fr: "L'alerte qualité est supprimée" },
      { en: "The quality alert is archived", fr: "L'alerte qualité est archivée" },
      { en: "Nothing", fr: "Rien" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quality Alerts): A \"Date Closed\" field appears on the Miscellaneous tab",
      fr: "Source Odoo Learn (Alertes qualité) : Un champ « Date de clôture » apparaît dans l'onglet Divers",
    },
  }),
  complexQ({
    id: "qty-013",
    module: "quality",
    text: {
      en: "How does adding a failure location during the quality check improve operations? (Odoo Learn — Failure Locations)",
      fr: "Comment l'ajout d'un emplacement d'échec lors du contrôle qualité améliore-t-il les opérations ? (Odoo Learn — Emplacements d'échec)",
    },
    correct: {
      en: "It prevents failed items from being sold or shipped accidentally",
      fr: "Cela empêche les articles défectueux d'être vendus ou expédiés par erreur",
    },
    distractors: [
      { en: "It lets the accounting team access quality reports", fr: "Cela permet à l'équipe comptable d'accéder aux rapports qualité" },
      { en: "It allows purchasing to negotiate better prices", fr: "Cela permet aux achats de négocier de meilleurs prix" },
      { en: "It increases stock availability regardless of product condition", fr: "Cela augmente la disponibilité des stocks quel que soit l'état du produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Failure Locations): It prevents failed items from being sold or shipped accidentally",
      fr: "Source Odoo Learn (Emplacements d'échec) : Cela empêche les articles défectueux d'être vendus ou expédiés par erreur",
    },
  }),
  complexQ({
    id: "qty-014",
    module: "quality",
    text: {
      en: "What must be enabled in Odoo to use Failure Locations in a warehouse? (Odoo Learn — Failure Locations)",
      fr: "Que faut-il activer dans Odoo pour utiliser les emplacements d'échec dans un entrepôt ? (Odoo Learn — Emplacements d'échec)",
    },
    correct: {
      en: "Storage Locations",
      fr: "Emplacements de stockage",
    },
    distractors: [
      { en: "Multi-Company", fr: "Multi-société" },
      { en: "Product Variants", fr: "Variantes de produit" },
      { en: "Landed Costs", fr: "Coûts logistiques" },
    ],
    explanation: {
      en: "Source Odoo Learn (Failure Locations): Storage Locations",
      fr: "Source Odoo Learn (Emplacements d'échec) : Emplacements de stockage",
    },
  }),
  complexQ({
    id: "qty-015",
    module: "quality",
    text: {
      en: "When I process a quality check and fail items, what determines whether they go to \"Repair Assessment Zone\" or \"Damaged Stock\"? (Odoo Learn — Failure Locations)",
      fr: "Lorsque je traite un contrôle qualité et que des articles échouent, qu'est-ce qui détermine s'ils vont vers « Zone d'évaluation réparation » ou « Stock endommagé » ? (Odoo Learn — Emplacements d'échec)",
    },
    correct: {
      en: "My selection during the quality check",
      fr: "Mon choix lors du contrôle qualité",
    },
    distractors: [
      { en: "The product's category", fr: "La catégorie du produit" },
      { en: "The warehouse manager's settings", fr: "Les paramètres du responsable d'entrepôt" },
      { en: "The vendor's delivery method", fr: "Le mode de livraison du fournisseur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Failure Locations): My selection during the quality check",
      fr: "Source Odoo Learn (Emplacements d'échec) : Mon choix lors du contrôle qualité",
    },
  }),
  complexQ({
    id: "qty-016",
    module: "quality",
    text: {
      en: "How many fields can be added to a worksheet template? (Odoo Learn — Worksheet Templates)",
      fr: "Combien de champs peuvent être ajoutés à un modèle de feuille de travail ? (Odoo Learn — Modèles de feuille de travail)",
    },
    correct: {
      en: "Unlimited",
      fr: "Illimité",
    },
    distractors: [
      { en: "One", fr: "Un" },
      { en: "Five", fr: "Cinq" },
      { en: "Ten", fr: "Dix" },
    ],
    explanation: {
      en: "Source Odoo Learn (Worksheet Templates): Unlimited",
      fr: "Source Odoo Learn (Modèles de feuille de travail) : Illimité",
    },
  }),
  complexQ({
    id: "qty-017",
    module: "quality",
    text: {
      en: "How do I add a new field to a worksheet template in Odoo Studio? (Odoo Learn — Worksheet Templates)",
      fr: "Comment ajouter un nouveau champ à un modèle de feuille de travail dans Odoo Studio ? (Odoo Learn — Modèles de feuille de travail)",
    },
    correct: {
      en: "Drag-and-drop the field type from the left-hand sidebar to the template",
      fr: "Glisser-déposer le type de champ depuis la barre latérale gauche vers le modèle",
    },
    distractors: [
      { en: "Right-click on the template, and select \"New Field\"", fr: "Clic droit sur le modèle, puis sélectionner « Nouveau champ »" },
      { en: "Open the \"Fields\" drop-down menu at the top of the screen, and select \"Add Field\"", fr: "Ouvrir le menu déroulant « Champs » en haut de l'écran, puis sélectionner « Ajouter un champ »" },
      { en: "New fields cannot be added to worksheet templates", fr: "De nouveaux champs ne peuvent pas être ajoutés aux modèles de feuille de travail" },
    ],
    explanation: {
      en: "Source Odoo Learn (Worksheet Templates): Drag-and-drop the field type from the left-hand sidebar to the template",
      fr: "Source Odoo Learn (Modèles de feuille de travail) : Glisser-déposer le type de champ depuis la barre latérale gauche vers le modèle",
    },
  }),
  complexQ({
    id: "qty-018",
    module: "quality",
    text: {
      en: "When configuring a Worksheet QCP, how do I add a new success condition? (Odoo Learn — Worksheet Templates)",
      fr: "Lors de la configuration d'un QCP Feuille de travail, comment ajouter une nouvelle condition de réussite ? (Odoo Learn — Modèles de feuille de travail)",
    },
    correct: {
      en: "Click the gear (settings) icon at the top of the page, and select \"New Rule\"",
      fr: "Cliquer sur l'icône engrenage (paramètres) en haut de la page, puis sélectionner « Nouvelle règle »",
    },
    distractors: [
      { en: "Type the rule in the \"Instructions\" tab at the bottom of the QCP form", fr: "Saisir la règle dans l'onglet « Instructions » en bas du formulaire QCP" },
      { en: "Click \"New Rule\" in the \"Success Conditions\" section", fr: "Cliquer sur « Nouvelle règle » dans la section « Conditions de réussite »" },
      { en: "Success conditions are configured on worksheet templates, not QCPs", fr: "Les conditions de réussite sont configurées sur les modèles de feuille de travail, pas sur les QCP" },
    ],
    explanation: {
      en: "Source Odoo Learn (Worksheet Templates): Click the gear (settings) icon at the top of the page, and select \"New Rule\"",
      fr: "Source Odoo Learn (Modèles de feuille de travail) : Cliquer sur l'icône engrenage (paramètres) en haut de la page, puis sélectionner « Nouvelle règle »",
    },
  }),
  complexQ({
    id: "qty-019",
    module: "quality",
    text: {
      en: "What is the \"Norm\" field on a Measure QCP used to specify? (Odoo Learn — Measure QCPs)",
      fr: "À quoi sert le champ « Norme » sur un QCP de type Mesure ? (Odoo Learn — QCP de mesure)",
    },
    correct: {
      en: "The ideal measurement that the product should conform to",
      fr: "La mesure idéale à laquelle le produit doit se conformer",
    },
    distractors: [
      { en: "The average measurement from previous quality checks created by the QCP", fr: "La mesure moyenne des contrôles qualité précédents créés par le QCP" },
      { en: "The range of measurements that the product should be within", fr: "La plage de mesures dans laquelle le produit doit se situer" },
      { en: "There is no \"Norm\" field on a Measure QCP", fr: "Il n'existe pas de champ « Norme » sur un QCP de mesure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Measure QCPs): The ideal measurement that the product should conform to",
      fr: "Source Odoo Learn (QCP de mesure) : La mesure idéale à laquelle le produit doit se conformer",
    },
  }),
  complexQ({
    id: "qty-020",
    module: "quality",
    text: {
      en: "What is the \"Tolerance\" field on a Measure QCP used to specify? (Odoo Learn — Measure QCPs)",
      fr: "À quoi sert le champ « Tolérance » sur un QCP de type Mesure ? (Odoo Learn — QCP de mesure)",
    },
    correct: {
      en: "The measurement range that the product should be within",
      fr: "La plage de mesures dans laquelle le produit doit se situer",
    },
    distractors: [
      { en: "The average measurement from previous quality checks created by the QCP", fr: "La mesure moyenne des contrôles qualité précédents créés par le QCP" },
      { en: "The ideal measurement that the product should conform to", fr: "La mesure idéale à laquelle le produit doit se conformer" },
      { en: "There is no \"Tolerance\" field on a Measure QCP", fr: "Il n'existe pas de champ « Tolérance » sur un QCP de mesure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Measure QCPs): The measurement range that the product should be within",
      fr: "Source Odoo Learn (QCP de mesure) : La plage de mesures dans laquelle le produit doit se situer",
    },
  }),
  complexQ({
    id: "qty-021",
    module: "quality",
    text: {
      en: "After entering a measurement outside the tolerance range of a Measure quality check, what button should you click to confirm that the measurement was entered intentionally? (Odoo Learn — Measure QCPs)",
      fr: "Après avoir saisi une mesure hors de la plage de tolérance d'un contrôle qualité de type Mesure, quel bouton cliquer pour confirmer que la mesure a été saisie intentionnellement ? (Odoo Learn — QCP de mesure)",
    },
    correct: {
      en: "Confirm Measure",
      fr: "Confirmer la mesure",
    },
    distractors: [
      { en: "Correct Measure", fr: "Corriger la mesure" },
      { en: "Re-Enter Measure", fr: "Resaisir la mesure" },
      { en: "Delete Measure", fr: "Supprimer la mesure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Measure QCPs): Confirm Measure",
      fr: "Source Odoo Learn (QCP de mesure) : Confirmer la mesure",
    },
  }),
  complexQ({
    id: "qty-022",
    module: "quality",
    text: {
      en: "How do I make the value of a specific spreadsheet cell dependent on the values of multiple other cells? (Odoo Learn — Spreadsheet Quality Checks)",
      fr: "Comment rendre la valeur d'une cellule de feuille de calcul dépendante des valeurs de plusieurs autres cellules ? (Odoo Learn — Contrôles qualité par feuille de calcul)",
    },
    correct: {
      en: "Click on the cell, and type an equation in the formula field above the spreadsheet",
      fr: "Cliquer sur la cellule et saisir une équation dans le champ formule au-dessus de la feuille de calcul",
    },
    distractors: [
      { en: "Click on the cell, and type in the names of the other cells", fr: "Cliquer sur la cellule et saisir les noms des autres cellules" },
      { en: "Right-click on the cell, select 'Dependencies', and enter the names of the other cells in the pop-up window that appears", fr: "Clic droit sur la cellule, sélectionner « Dépendances » et saisir les noms des autres cellules dans la fenêtre pop-up" },
      { en: "It is not possible to make a cell's value dependent on the values of other cells", fr: "Il n'est pas possible de rendre la valeur d'une cellule dépendante des valeurs d'autres cellules" },
    ],
    explanation: {
      en: "Source Odoo Learn (Spreadsheet Quality Checks): Click on the cell, and type an equation in the formula field above the spreadsheet",
      fr: "Source Odoo Learn (Contrôles qualité par feuille de calcul) : Cliquer sur la cellule et saisir une équation dans le champ formule au-dessus de la feuille de calcul",
    },
  }),
  complexQ({
    id: "qty-023",
    module: "quality",
    text: {
      en: "For a spreadsheet check to pass, what must the value of the spreadsheet's success cell be? (Odoo Learn — Spreadsheet Quality Checks)",
      fr: "Pour qu'un contrôle par feuille de calcul réussisse, quelle doit être la valeur de la cellule de réussite ? (Odoo Learn — Contrôles qualité par feuille de calcul)",
    },
    correct: {
      en: "TRUE",
      fr: "TRUE",
    },
    distractors: [
      { en: "PASS", fr: "PASS" },
      { en: "VALID", fr: "VALID" },
      { en: "GREEN", fr: "GREEN" },
    ],
    explanation: {
      en: "Source Odoo Learn (Spreadsheet Quality Checks): TRUE",
      fr: "Source Odoo Learn (Contrôles qualité par feuille de calcul) : TRUE",
    },
  }),
  complexQ({
    id: "qty-024",
    module: "quality",
    text: {
      en: "How many success cells can be set for a quality spreadsheet template? (Odoo Learn — Spreadsheet Quality Checks)",
      fr: "Combien de cellules de réussite peuvent être définies pour un modèle de feuille de calcul qualité ? (Odoo Learn — Contrôles qualité par feuille de calcul)",
    },
    correct: {
      en: "1",
      fr: "1",
    },
    distractors: [
      { en: "2", fr: "2" },
      { en: "3", fr: "3" },
      { en: "4", fr: "4" },
    ],
    explanation: {
      en: "Source Odoo Learn (Spreadsheet Quality Checks): 1",
      fr: "Source Odoo Learn (Contrôles qualité par feuille de calcul) : 1",
    },
  }),
  complexQ({
    id: "qty-025",
    module: "quality",
    text: {
      en: "What is the status of a 'Take a Picture' check AFTER it has been validated, but BEFORE it has been reviewed? (Odoo Learn — Take a Picture Checks)",
      fr: "Quel est le statut d'un contrôle « Prendre une photo » APRÈS validation, mais AVANT revue ? (Odoo Learn — Contrôles Prendre une photo)",
    },
    correct: {
      en: "Passed",
      fr: "Réussi",
    },
    distractors: [
      { en: "Failed", fr: "Échoué" },
      { en: "Awaiting Review", fr: "En attente de revue" },
      { en: "Quality checks do not have statuses", fr: "Les contrôles qualité n'ont pas de statut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Take a Picture Checks): Passed",
      fr: "Source Odoo Learn (Contrôles Prendre une photo) : Réussi",
    },
  }),
  complexQ({
    id: "qty-026",
    module: "quality",
    text: {
      en: "Which button on a 'Take a Picture' check do I click to open the file manager? (Odoo Learn — Take a Picture Checks)",
      fr: "Sur un contrôle « Prendre une photo », quel bouton cliquer pour ouvrir le gestionnaire de fichiers ? (Odoo Learn — Contrôles Prendre une photo)",
    },
    correct: {
      en: "The \"Add\" button",
      fr: "Le bouton « Ajouter »",
    },
    distractors: [
      { en: "The \"Picture\" button", fr: "Le bouton « Photo »" },
      { en: "The \"Edit\" button", fr: "Le bouton « Modifier »" },
      { en: "There is no way to open the file manager from a check", fr: "Il n'est pas possible d'ouvrir le gestionnaire de fichiers depuis un contrôle" },
    ],
    explanation: {
      en: "Source Odoo Learn (Take a Picture Checks): The \"Add\" button",
      fr: "Source Odoo Learn (Contrôles Prendre une photo) : Le bouton « Ajouter »",
    },
  }),
  complexQ({
    id: "qty-027",
    module: "quality",
    text: {
      en: "How do I set the status of a \"Take a Picture\" quality check to \"Failed\"? (Odoo Learn — Take a Picture Checks)",
      fr: "Comment définir le statut d'un contrôle qualité « Prendre une photo » sur « Échoué » ? (Odoo Learn — Contrôles Prendre une photo)",
    },
    correct: {
      en: "Open the check in the Quality app, and click the \"Fail\" button",
      fr: "Ouvrir le contrôle dans l'app Qualité et cliquer sur le bouton « Échec »",
    },
    distractors: [
      { en: "Upload the wrong picture while processing the check", fr: "Téléverser la mauvaise photo lors du traitement du contrôle" },
      { en: "Don't attach a picture while processing the check", fr: "Ne pas joindre de photo lors du traitement du contrôle" },
      { en: "'Take a Picture' quality checks cannot fail", fr: "Les contrôles qualité « Prendre une photo » ne peuvent pas échouer" },
    ],
    explanation: {
      en: "Source Odoo Learn (Take a Picture Checks): Open the check in the Quality app, and click the \"Fail\" button",
      fr: "Source Odoo Learn (Contrôles Prendre une photo) : Ouvrir le contrôle dans l'app Qualité et cliquer sur le bouton « Échec »",
    },
  }),
  complexQ({
    id: "qty-028",
    module: "quality",
    text: {
      en: "How do I add a rule that formats a cell based on its value? (Odoo Learn — Spreadsheet Formatting)",
      fr: "Comment ajouter une règle qui met en forme une cellule selon sa valeur ? (Odoo Learn — Mise en forme des feuilles de calcul)",
    },
    correct: {
      en: "'Format' -> 'Conditional formatting' -> 'Add another rule'",
      fr: "« Format » -> « Mise en forme conditionnelle » -> « Ajouter une autre règle »",
    },
    distractors: [
      { en: "'Insert' -> 'Conditional formatting' -> 'Add another rule'", fr: "« Insertion » -> « Mise en forme conditionnelle » -> « Ajouter une autre règle »" },
      { en: "'Data' -> 'Conditional formatting' -> 'Add another rule'", fr: "« Données » -> « Mise en forme conditionnelle » -> « Ajouter une autre règle »" },
      { en: "'View' -> 'Conditional formatting' -> 'Add another rule'", fr: "« Affichage » -> « Mise en forme conditionnelle » -> « Ajouter une autre règle »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Spreadsheet Formatting): 'Format' -> 'Conditional formatting' -> 'Add another rule'",
      fr: "Source Odoo Learn (Mise en forme des feuilles de calcul) : « Format » -> « Mise en forme conditionnelle » -> « Ajouter une autre règle »",
    },
  }),
  complexQ({
    id: "qty-029",
    module: "quality",
    text: {
      en: "If I add a checkbox to a cell whose value is TRUE or FALSE, depending on the values of multiple other cells, can I manually tick or untick the checkbox? (Odoo Learn — Spreadsheet Formatting)",
      fr: "Si j'ajoute une case à cocher à une cellule dont la valeur est TRUE ou FALSE selon d'autres cellules, puis-je cocher ou décocher manuellement la case ? (Odoo Learn — Mise en forme des feuilles de calcul)",
    },
    correct: {
      en: "No",
      fr: "Non",
    },
    distractors: [
      { en: "Yes", fr: "Oui" },
      { en: "I can tick the checkbox, but not untick it.", fr: "Je peux cocher la case, mais pas la décocher." },
      { en: "I can untick the checkbox, but not tick it.", fr: "Je peux décocher la case, mais pas la cocher." },
    ],
    explanation: {
      en: "Source Odoo Learn (Spreadsheet Formatting): No",
      fr: "Source Odoo Learn (Mise en forme des feuilles de calcul) : Non",
    },
  }),
  complexQ({
    id: "qty-030",
    module: "quality",
    text: {
      en: "How do I add a chart to a spreadsheet template? (Odoo Learn — Spreadsheet Formatting)",
      fr: "Comment ajouter un graphique à un modèle de feuille de calcul ? (Odoo Learn — Mise en forme des feuilles de calcul)",
    },
    correct: {
      en: "'Insert' -> 'Chart'",
      fr: "« Insertion » -> « Graphique »",
    },
    distractors: [
      { en: "'Charts' -> 'Insert'", fr: "« Graphiques » -> « Insertion »" },
      { en: "'Format' -> 'Chart'", fr: "« Format » -> « Graphique »" },
      { en: "'Charts' -> 'New Chart'", fr: "« Graphiques » -> « Nouveau graphique »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Spreadsheet Formatting): 'Insert' -> 'Chart'",
      fr: "Source Odoo Learn (Mise en forme des feuilles de calcul) : « Insertion » -> « Graphique »",
    },
  }),
  complexQ({
    id: "qty-031",
    module: "quality",
    text: {
      en: "What is the primary benefit of automating quality checks for incoming shipments in Odoo? (Odoo Learn — Incoming Quality Checks)",
      fr: "Quel est le principal avantage de l'automatisation des contrôles qualité pour les réceptions entrantes dans Odoo ? (Odoo Learn — Contrôles qualité à la réception)",
    },
    correct: {
      en: "It ensures material quality issues are caught before production",
      fr: "Cela garantit que les problèmes qualité matière sont détectés avant la production",
    },
    distractors: [
      { en: "It helps speed up customer delivery times", fr: "Cela accélère les délais de livraison client" },
      { en: "It eliminates the need for warehouse staff", fr: "Cela élimine le besoin de personnel d'entrepôt" },
      { en: "It allows vendors to manage inventory automatically", fr: "Cela permet aux fournisseurs de gérer automatiquement les stocks" },
    ],
    explanation: {
      en: "Source Odoo Learn (Incoming Quality Checks): It ensures material quality issues are caught before production",
      fr: "Source Odoo Learn (Contrôles qualité à la réception) : Cela garantit que les problèmes qualité matière sont détectés avant la production",
    },
  }),
  complexQ({
    id: "qty-032",
    module: "quality",
    text: {
      en: "Why are Quality Control Points especially helpful for warehouse staff? (Odoo Learn — Incoming Quality Checks)",
      fr: "Pourquoi les points de contrôle qualité sont-ils particulièrement utiles au personnel d'entrepôt ? (Odoo Learn — Contrôles qualité à la réception)",
    },
    correct: {
      en: "They provide clear pass/fail criteria regardless of experience",
      fr: "Ils fournissent des critères clairs de réussite/échec quel que soit l'expérience",
    },
    distractors: [
      { en: "They reduce the need for receiving personnel", fr: "Ils réduisent le besoin de personnel de réception" },
      { en: "They allow staff to skip inspections if they're busy", fr: "Ils permettent au personnel de sauter les inspections s'ils sont occupés" },
      { en: "They assign checks to only the most senior employees", fr: "Ils assignent les contrôles uniquement aux employés les plus seniors" },
    ],
    explanation: {
      en: "Source Odoo Learn (Incoming Quality Checks): They provide clear pass/fail criteria regardless of experience",
      fr: "Source Odoo Learn (Contrôles qualité à la réception) : Ils fournissent des critères clairs de réussite/échec quel que soit l'expérience",
    },
  }),
  complexQ({
    id: "qty-033",
    module: "quality",
    text: {
      en: "Which of the following is a common issue that incoming quality checks help prevent? (Odoo Learn — Incoming Quality Checks)",
      fr: "Lequel des problèmes suivants les contrôles qualité à la réception aident-ils à prévenir ? (Odoo Learn — Contrôles qualité à la réception)",
    },
    correct: {
      en: "Defects only discovered during production",
      fr: "Des défauts découverts uniquement pendant la production",
    },
    distractors: [
      { en: "Delays in final invoicing", fr: "Des retards dans la facturation finale" },
      { en: "Employees misplacing barcodes", fr: "Des employés qui égarer des codes-barres" },
      { en: "Miscommunication between sales and marketing", fr: "Des problèmes de communication entre ventes et marketing" },
    ],
    explanation: {
      en: "Source Odoo Learn (Incoming Quality Checks): Defects only discovered during production",
      fr: "Source Odoo Learn (Contrôles qualité à la réception) : Des défauts découverts uniquement pendant la production",
    },
  }),
  complexQ({
    id: "qty-034",
    module: "quality",
    text: {
      en: "What happens in Odoo when a product fails a Pass/Fail quality check during a work order? (Odoo Learn — Pass/Fail in Production)",
      fr: "Que se passe-t-il dans Odoo lorsqu'un produit échoue à un contrôle qualité Réussite-Échec pendant un ordre de travail ? (Odoo Learn — Réussite-Échec en production)",
    },
    correct: {
      en: "The product can be reworked or removed depending on the instructions",
      fr: "Le produit peut être retravaillé ou retiré selon les instructions",
    },
    distractors: [
      { en: "Odoo deletes the work order", fr: "Odoo supprime l'ordre de travail" },
      { en: "The user is required to generate a Quality Alert", fr: "L'utilisateur doit générer une alerte qualité" },
      { en: "The product is automatically validated", fr: "Le produit est automatiquement validé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pass/Fail in Production): The product can be reworked or removed depending on the instructions",
      fr: "Source Odoo Learn (Réussite-Échec en production) : Le produit peut être retravaillé ou retiré selon les instructions",
    },
  }),
  complexQ({
    id: "qty-035",
    module: "quality",
    text: {
      en: "What's the main purpose of adding instructions and a \"Note if Failure\" in a Quality Control Point? (Odoo Learn — Pass/Fail in Production)",
      fr: "Quel est l'objectif principal d'ajouter des instructions et une « Note en cas d'échec » dans un point de contrôle qualité ? (Odoo Learn — Réussite-Échec en production)",
    },
    correct: {
      en: "To guide users on how to inspect and what to do when checks fail",
      fr: "Guider les utilisateurs sur la façon d'inspecter et quoi faire lorsque les contrôles échouent",
    },
    distractors: [
      { en: "To automatically complete the check", fr: "Compléter automatiquement le contrôle" },
      { en: "To avoid showing the check in the work order", fr: "Éviter d'afficher le contrôle dans l'ordre de travail" },
      { en: "To sync Quality Checks with Sales Orders", fr: "Synchroniser les contrôles qualité avec les commandes client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pass/Fail in Production): To guide users on how to inspect and what to do when checks fail",
      fr: "Source Odoo Learn (Réussite-Échec en production) : Guider les utilisateurs sur la façon d'inspecter et quoi faire lorsque les contrôles échouent",
    },
  }),
  complexQ({
    id: "qty-036",
    module: "quality",
    text: {
      en: "If you want a quality check to run for every unit in production, what should the Control Type be? (Odoo Learn — Pass/Fail in Production)",
      fr: "Si vous voulez qu'un contrôle qualité s'exécute pour chaque unité en production, quel doit être le type de contrôle ? (Odoo Learn — Réussite-Échec en production)",
    },
    correct: {
      en: "All",
      fr: "Tous",
    },
    distractors: [
      { en: "Periodically", fr: "Périodiquement" },
      { en: "Random", fr: "Aléatoire" },
      { en: "Manual", fr: "Manuel" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pass/Fail in Production): All",
      fr: "Source Odoo Learn (Réussite-Échec en production) : Tous",
    },
  }),
];
