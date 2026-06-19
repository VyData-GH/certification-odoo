import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const inventoryLearnQuestions = [
  complexQ({
    id: "inv-031",
    module: "inventory",
    text: {
      en: "What type of document is the source of a receipt of products to your inventory? (Odoo Learn — Inventory Basics: Receive and Store Stock)",
      fr: "Quel type de document est à l'origine d'une réception de produits à votre inventaire ? (Odoo Learn — Bases de l'inventaire : recevoir et stocker le stock)",
    },
    correct: {
      en: "A Purchase Order.",
      fr: "Un bon de commande.",
    },
    distractors: [
      { en: "A Sales Order.", fr: "Une commande client." },
      { en: "A Manufacturing Order.", fr: "Un ordre de fabrication." },
      { en: "A Quotation.", fr: "Une citation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Basics: Receive and Store Stock): A Purchase Order.",
      fr: "Source Odoo Learn (Bases de l'inventaire : recevoir et stocker le stock) : un bon de commande.",
    },
  }),
  complexQ({
    id: "inv-032",
    module: "inventory",
    text: {
      en: "When receiving products in Odoo, why is it important to correctly set the ‘Destination Location’ on the receipt? (Odoo Learn — Inventory Basics: Receive and Store Stock)",
      fr: "Lors de la réception de produits dans Odoo, pourquoi est-il important de définir correctement le « Lieu de destination » sur le reçu ? (Odoo Learn — Bases de l'inventaire : recevoir et stocker le stock)",
    },
    correct: {
      en: "To ensure products are stored in the correct warehouse location",
      fr: "Pour garantir que les produits sont stockés dans le bon emplacement d’entrepôt",
    },
    distractors: [
      { en: "To track which vendor sent the shipment", fr: "Pour savoir quel fournisseur a envoyé l'envoi" },
      { en: "To calculate the total cost of goods received", fr: "Pour calculer le coût total des marchandises reçues" },
      { en: "To automatically validate the receipt without further action", fr: "Pour valider automatiquement le reçu sans autre action" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Basics: Receive and Store Stock): To ensure products are stored in the correct warehouse location",
      fr: "Source Odoo Learn (Bases de l'inventaire : réception et stockage du stock) : pour garantir que les produits sont stockés au bon emplacement d'entrepôt",
    },
  }),
  complexQ({
    id: "inv-033",
    module: "inventory",
    text: {
      en: "What key difference does enabling ‘Track Inventory’ on a product form make? (Odoo Learn — Inventory Basics: Receive and Store Stock)",
      fr: "Quelle différence clé l'activation du « Suivre l'inventaire » sur un formulaire de produit fait-elle ? (Odoo Learn — Bases de l'inventaire : recevoir et stocker le stock)",
    },
    correct: {
      en: "It allows the product’s stock quantities and locations to be tracked",
      fr: "Il permet de suivre les quantités et les emplacements des stocks du produit.",
    },
    distractors: [
      { en: "It automatically orders more stock when the product runs low", fr: "Il commande automatiquement plus de stock lorsque le produit est faible" },
      { en: "It creates a purchase order for the product whenever it’s sold", fr: "Il crée un bon de commande pour le produit chaque fois qu'il est vendu" },
      { en: "It prevents the product from being relocated to another storage location", fr: "Il empêche le déplacement du produit vers un autre lieu de stockage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Basics: Receive and Store Stock): It allows the product’s stock quantities and locations to be tracked",
      fr: "Source Odoo Learn (Bases de l'inventaire : recevoir et stocker le stock) : il permet de suivre les quantités et les emplacements des stocks du produit.",
    },
  }),
  complexQ({
    id: "inv-034",
    module: "inventory",
    text: {
      en: "From the video, why does Stealthy Wood use 2-step delivery? (Odoo Learn — Inventory Basics & Outgoing Shipments)",
      fr: "D'après la vidéo, pourquoi Stealthy Wood utilise-t-il la livraison en 2 étapes ? (Odoo Learn — Notions de base sur l'inventaire et les expéditions sortantes)",
    },
    correct: {
      en: "Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping",
      fr: "Parce que leur équipe de préparation est très efficace pour localiser les produits et que l'équipe de livraison se concentre sur la vérification, l'emballage et l'expédition.",
    },
    distractors: [
      { en: "To reduce the number of employees involved in deliveries", fr: "Réduire le nombre d’employés impliqués dans les livraisons" },
      { en: "To minimize the need for product verification before shipping", fr: "Pour minimiser le besoin de vérification du produit avant l’expédition" },
      { en: "Because their storage system requires multiple steps to access products", fr: "Parce que leur système de stockage nécessite plusieurs étapes pour accéder aux produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Basics & Outgoing Shipments): Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping",
      fr: "Source Odoo Learn (bases de l'inventaire et expéditions sortantes) : parce que leur équipe de sélection est très efficace pour localiser les produits et que l'équipe de livraison se concentre sur la vérification, l'emballage et l'expédition.",
    },
  }),
  complexQ({
    id: "inv-035",
    module: "inventory",
    text: {
      en: "What type of document can be the source of a picking or delivery order? (Odoo Learn — Inventory Basics & Outgoing Shipments)",
      fr: "Quel type de document peut être à l’origine d’un ordre de préparation ou de livraison ? (Odoo Learn — Notions de base sur l'inventaire et les expéditions sortantes)",
    },
    correct: {
      en: "A Sales Order",
      fr: "Une commande client",
    },
    distractors: [
      { en: "A Manufacturing Order", fr: "Un ordre de fabrication" },
      { en: "A Quotation", fr: "Une citation" },
      { en: "A Purchase Order", fr: "Un bon de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Basics & Outgoing Shipments): A Sales Order",
      fr: "Source Odoo Learn (bases de l'inventaire et expéditions sortantes) : une commande client",
    },
  }),
  complexQ({
    id: "inv-036",
    module: "inventory",
    text: {
      en: "What does it mean when the ‘Product Availability’ text shows ‘Available’ and is green in Odoo? (Odoo Learn — Inventory Basics & Outgoing Shipments)",
      fr: "Qu'est-ce que cela signifie lorsque le texte « Disponibilité du produit » indique « Disponible » et est vert dans Odoo ? (Odoo Learn — Notions de base sur l'inventaire et les expéditions sortantes)",
    },
    correct: {
      en: "Items are available and reserved",
      fr: "Les articles sont disponibles et réservés",
    },
    distractors: [
      { en: "Items have already been received", fr: "Les articles ont déjà été reçus" },
      { en: "Items are expected to arrive in time for the delivery if received today", fr: "Les articles devraient arriver à temps pour la livraison s'ils sont reçus aujourd'hui" },
      { en: "Items are available in the warehouse, but not reserved", fr: "Les articles sont disponibles dans l'entrepôt, mais non réservés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Basics & Outgoing Shipments): Items are available and reserved",
      fr: "Source Odoo Learn (Bases de l'inventaire et expéditions sortantes) : les articles sont disponibles et réservés",
    },
  }),
  complexQ({
    id: "inv-037",
    module: "inventory",
    text: {
      en: "What do inventory transfers determine in Odoo’s warehouse operations? (Odoo Learn — Basic Warehouse Setup)",
      fr: "Que déterminent les transferts de stocks dans les opérations d’entrepôt d’Odoo ? (Odoo Learn — Configuration de base de l'entrepôt)",
    },
    correct: {
      en: "How products move within the warehouse and how shipments are processed",
      fr: "Comment les produits se déplacent dans l'entrepôt et comment les expéditions sont traitées",
    },
    distractors: [
      { en: "The number of employees needed in the warehouse", fr: "Le nombre d'employés nécessaires dans l'entrepôt" },
      { en: "The pricing of products based on warehouse location", fr: "La tarification des produits en fonction de l'emplacement de l'entrepôt" },
      { en: "Which suppliers can send shipments to the warehouse", fr: "Quels fournisseurs peuvent envoyer des expéditions à l'entrepôt" },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Warehouse Setup): How products move within the warehouse and how shipments are processed",
      fr: "Source Odoo Learn (configuration de base de l'entrepôt) : comment les produits se déplacent dans l'entrepôt et comment les expéditions sont traitées",
    },
  }),
  complexQ({
    id: "inv-038",
    module: "inventory",
    text: {
      en: "In Odoo’s three-step delivery process, what are the correct steps for moving products? (Odoo Learn — Basic Warehouse Setup)",
      fr: "Dans le processus de livraison en trois étapes d’Odoo, quelles sont les bonnes étapes pour déplacer les produits ? (Odoo Learn — Configuration de base de l'entrepôt)",
    },
    correct: {
      en: "Pick from storage → Pack into orders → Move to the output area",
      fr: "Prélèvement dans le stockage → Emballer dans les commandes → Déplacer vers la zone de sortie",
    },
    distractors: [
      { en: "Perform quality check → Move to picking → Pack into orders", fr: "Effectuer un contrôle qualité → Passer à la préparation → Emballer dans les commandes" },
      { en: "Pick from storage → Send to quality check → Move directly to customers", fr: "Prélèvement dans le stockage → Envoyer au contrôle qualité → Transférer directement aux clients" },
      { en: "Pack into orders → Pick from storage → Move to picking area", fr: "Emballer dans les commandes → Prélèvement depuis le stockage → Déplacer vers la zone de prélèvement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Basic Warehouse Setup): Pick from storage → Pack into orders → Move to the output area",
      fr: "Source Odoo Learn (configuration de base de l'entrepôt) : Prélèvement dans le stockage → Emballer dans les commandes → Déplacer vers la zone de sortie",
    },
  }),
  complexQ({
    id: "inv-039",
    module: "inventory",
    text: {
      en: "A “child location” in Odoo is defined as: (Odoo Learn — Warehouses & Locations)",
      fr: "Un « emplacement enfant » dans Odoo est défini comme : (Odoo Learn — Entrepôts et emplacements)",
    },
    correct: {
      en: "A subordinate node under a parent location in the location hierarchy",
      fr: "Un nœud subordonné sous un emplacement parent dans la hiérarchie des emplacements",
    },
    distractors: [
      { en: "A location automatically generated during receipts", fr: "Un emplacement généré automatiquement lors des réceptions" },
      { en: "A location restricted to production orders", fr: "Une localisation réservée aux ordres de fabrication" },
      { en: "A location used only for cycle counts", fr: "Un emplacement utilisé uniquement pour les inventaires tournants" },
    ],
    explanation: {
      en: "Source Odoo Learn (Warehouses & Locations): A subordinate node under a parent location in the location hierarchy",
      fr: "Source Odoo Learn (Entrepôts et emplacements) : un nœud subordonné sous un emplacement parent dans la hiérarchie des emplacements",
    },
  }),
  complexQ({
    id: "inv-040",
    module: "inventory",
    text: {
      en: "Which Location Types are included in Odoo’s inventory valuation calculations? (Odoo Learn — Warehouses & Locations)",
      fr: "Quels types d’emplacements sont inclus dans les calculs de valorisation des stocks d’Odoo ? (Odoo Learn — Entrepôts et emplacements)",
    },
    correct: {
      en: "Internal and Transit",
      fr: "Interne et Transit",
    },
    distractors: [
      { en: "Vendor and Customer", fr: "Fournisseur et client" },
      { en: "Internal and Vendor", fr: "Interne et fournisseur" },
      { en: "Production and Inventory Loss", fr: "Perte de production et de stocks" },
    ],
    explanation: {
      en: "Source Odoo Learn (Warehouses & Locations): Internal and Transit",
      fr: "Source Odoo Learn (Entrepôts et emplacements) : Interne et Transit",
    },
  }),
  complexQ({
    id: "inv-041",
    module: "inventory",
    text: {
      en: "Sending items to the Inventory Loss (Scrap) location triggers which system behavior? (Odoo Learn — Warehouses & Locations)",
      fr: "Quel comportement du système est déclenché par l'envoi d'articles vers l'emplacement de perte d'inventaire (ferraille) ? (Odoo Learn — Entrepôts et emplacements)",
    },
    correct: {
      en: "A stock move reduces on-hand quantity",
      fr: "Un mouvement de stock réduit la quantité disponible",
    },
    distractors: [
      { en: "A manufacturing order is created", fr: "Un ordre de fabrication est créé" },
      { en: "An automatic vendor bill is generated", fr: "Une facture fournisseur automatique est générée" },
      { en: "The product is transferred back to WH/Stock", fr: "Le produit est retransféré à WH/Stock" },
    ],
    explanation: {
      en: "Source Odoo Learn (Warehouses & Locations): A stock move reduces on-hand quantity",
      fr: "Source Odoo Learn (Entrepôts et emplacements) : Un mouvement de stock réduit la quantité disponible",
    },
  }),
  complexQ({
    id: "inv-042",
    module: "inventory",
    text: {
      en: "Where do you activate the Units of Measure feature in Odoo Inventory? (Odoo Learn — Units of Measure)",
      fr: "Où activer la fonctionnalité Unités de mesure dans Odoo Inventory ? (Odoo Learn — Unités de mesure)",
    },
    correct: {
      en: "Configuration > Settings > Products section > Units of Measure.",
      fr: "Configuration > Paramètres > section Produits > Unités de mesure.",
    },
    distractors: [
      { en: "Configuration > Units of Measure.", fr: "Configuration > Unités de mesure." },
      { en: "Nothing needs to be activated.", fr: "Rien ne doit être activé." },
      { en: "Products > Settings > Units of Measure.", fr: "Produits > Paramètres > Unités de mesure." },
    ],
    explanation: {
      en: "Source Odoo Learn (Units of Measure): Configuration > Settings > Products section > Units of Measure.",
      fr: "Source Odoo Learn (Unités de mesure) : Configuration > Paramètres > section Produits > Unités de mesure.",
    },
  }),
  complexQ({
    id: "inv-043",
    module: "inventory",
    text: {
      en: "How do I calculate the number in the ‘Contains’ column when creating a new unit of measure? (Odoo Learn — Units of Measure)",
      fr: "Comment calculer le nombre dans la colonne « Contient » lors de la création d'une nouvelle unité de mesure ? (Odoo Learn — Unités de mesure)",
    },
    correct: {
      en: "Divide the new unit of measure by the reference unit of measure.",
      fr: "Divisez la nouvelle unité de mesure par l'unité de mesure de référence.",
    },
    distractors: [
      { en: "Subtract the new unit of measure from the reference unit of measure.", fr: "Soustrayez la nouvelle unité de mesure de l’unité de mesure de référence." },
      { en: "Multiply the new unit of measure by the reference unit of measure.", fr: "Multipliez la nouvelle unité de mesure par l'unité de mesure de référence." },
      { en: "Add the new unit of measure to the reference unit of measure.", fr: "Ajoutez la nouvelle unité de mesure à l'unité de mesure de référence." },
    ],
    explanation: {
      en: "Source Odoo Learn (Units of Measure): Divide the new unit of measure by the reference unit of measure.",
      fr: "Source Odoo Learn (Unités de mesure) : Divisez la nouvelle unité de mesure par l'unité de mesure de référence.",
    },
  }),
  complexQ({
    id: "inv-044",
    module: "inventory",
    text: {
      en: "If my database tracks my stock of a particular product in pounds, and I made an order of the product in kilograms, what unit will Odoo use when I receive the order into my inventory? (Odoo Learn — Units of Measure)",
      fr: "Si ma base de données suit mon stock d'un produit particulier en livres et que j'ai passé une commande du produit en kilogrammes, quelle unité Odoo utilisera-t-il lorsque je recevrai la commande dans mon inventaire ? (Odoo Learn — Unités de mesure)",
    },
    correct: {
      en: "Pounds",
      fr: "Livres",
    },
    distractors: [
      { en: "Whatever order you choose in the receipt form.", fr: "Quelle que soit la commande que vous choisissez dans le formulaire de réception." },
      { en: "Kilograms", fr: "Kilogrammes" },
      { en: "Both kilograms and pounds.", fr: "En kilogrammes et en livres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Units of Measure): Pounds",
      fr: "Source Odoo Learn (Unités de mesure) : Livres",
    },
  }),
  complexQ({
    id: "inv-045",
    module: "inventory",
    text: {
      en: "Where are cycle counts performed in Odoo? (Odoo Learn — Inventory Adjustments & Cycle Counts)",
      fr: "Où sont effectués les inventaires cycliques dans Odoo ? (Odoo Learn — Ajustements des stocks et inventaires cycliques)",
    },
    correct: {
      en: "Locations",
      fr: "Emplacements",
    },
    distractors: [
      { en: "The warehouse", fr: "L'entrepôt" },
      { en: "Storage categories", fr: "Catégories de stockage" },
      { en: "Operations", fr: "Opérations" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Adjustments & Cycle Counts): Locations",
      fr: "Source Odoo Learn (Ajustements d'inventaire et inventaires cycliques) : Emplacements",
    },
  }),
  complexQ({
    id: "inv-046",
    module: "inventory",
    text: {
      en: "When does a cycle count take effect in Odoo? (Odoo Learn — Inventory Adjustments & Cycle Counts)",
      fr: "Quand un inventaire tournant prend-il effet dans Odoo ? (Odoo Learn — Ajustements des stocks et inventaires cycliques)",
    },
    correct: {
      en: "After inventory adjustments have been performed against products in the location",
      fr: "Une fois les ajustements de stock effectués par rapport aux produits de l'emplacement",
    },
    distractors: [
      { en: "Immediately", fr: "Immédiatement" },
      { en: "Never", fr: "Jamais" },
      { en: "When operations are carried out in a location", fr: "Lorsque les opérations sont effectuées dans un endroit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Adjustments & Cycle Counts): After inventory adjustments have been performed against products in the location",
      fr: "Source Odoo Learn (Ajustements d'inventaire et inventaires cycliques) : Une fois que les ajustements d'inventaire ont été effectués par rapport aux produits de l'emplacement",
    },
  }),
  complexQ({
    id: "inv-047",
    module: "inventory",
    text: {
      en: "How do I request a count for a location? (Odoo Learn — Inventory Adjustments & Cycle Counts)",
      fr: "Comment demander un décompte pour un emplacement ? (Odoo Learn — Ajustements des stocks et inventaires cycliques)",
    },
    correct: {
      en: "Select the checkboxes next to the products in that location, then click the ‘Request a Count’ button",
      fr: "Cochez les cases à côté des produits à cet emplacement, puis cliquez sur le bouton « Demander un décompte »",
    },
    distractors: [
      { en: "Change the ‘Next Expected’ date on the location form", fr: "Modifier la date « Prochaine date prévue » sur le formulaire de localisation" },
      { en: "Email the person who should do the count", fr: "Envoyez un e-mail à la personne qui doit faire le décompte" },
      { en: "Change the ‘User’ field on a product in a location", fr: "Modifier le champ « Utilisateur » sur un produit dans un emplacement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory Adjustments & Cycle Counts): Select the checkboxes next to the products in that location, then click the ‘Request a Count’ button",
      fr: "Source Odoo Learn (Ajustements d'inventaire et inventaires cycliques) : cochez les cases à côté des produits à cet emplacement, puis cliquez sur le bouton « Demander un inventaire »",
    },
  }),
  complexQ({
    id: "inv-048",
    module: "inventory",
    text: {
      en: "What is a “landed cost”? (Odoo Learn — Integrate Landed Costs)",
      fr: "Qu’est-ce qu’un « coût au débarquement » ? (Odoo Learn — Intégrer les coûts globaux)",
    },
    correct: {
      en: "Expenses that must be paid, in addition to the cost of a product when purchasing it",
      fr: "Dépenses qui doivent être payées, en plus du coût d'un produit lors de son achat",
    },
    distractors: [
      { en: "The price of an imported product", fr: "Le prix d'un produit importé" },
      { en: "The price to transport a product using ground shipping", fr: "Le prix du transport d'un produit par voie terrestre" },
      { en: "The cost of moving a product from a ship onto land", fr: "Le coût du transport d’un produit d’un navire vers la terre" },
    ],
    explanation: {
      en: "Source Odoo Learn (Integrate Landed Costs): Expenses that must be paid, in addition to the cost of a product when purchasing it",
      fr: "Source Odoo Learn (Intégrer les Landed Costs) : Dépenses qui doivent être payées, en plus du coût d'un produit lors de son achat",
    },
  }),
  complexQ({
    id: "inv-049",
    module: "inventory",
    text: {
      en: "Which costing method should I use to set the cost of a product as the average cost of every unit on-hand? (Odoo Learn — Integrate Landed Costs)",
      fr: "Quelle méthode de calcul des coûts dois-je utiliser pour définir le coût d'un produit comme le coût moyen de chaque unité disponible ? (Odoo Learn — Intégrer les coûts globaux)",
    },
    correct: {
      en: "Average Cost (AVCO)",
      fr: "Coût moyen (AVCO)",
    },
    distractors: [
      { en: "Standard Price", fr: "Prix ​​standard" },
      { en: "First In First Out (FIFO)", fr: "Premier entré, premier sorti (FIFO)" },
      { en: "This is not possible in Odoo", fr: "Ce n'est pas possible dans Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Integrate Landed Costs): Average Cost (AVCO)",
      fr: "Source Odoo Learn (Intégrer les coûts au débarquement) : Coût moyen (AVCO)",
    },
  }),
  complexQ({
    id: "inv-050",
    module: "inventory",
    text: {
      en: "Which of the following is NOT an option when selecting a Split Method for landed costs? (Odoo Learn — Integrate Landed Costs)",
      fr: "Lequel des éléments suivants n'est PAS une option lors de la sélection d'une méthode de fractionnement pour les coûts globaux ? (Odoo Learn — Intégrer les coûts globaux)",
    },
    correct: {
      en: "By Color",
      fr: "Par couleur",
    },
    distractors: [
      { en: "Equal", fr: "Égal" },
      { en: "By Quantity", fr: "Par quantité" },
      { en: "By Volume", fr: "Par volume" },
    ],
    explanation: {
      en: "Source Odoo Learn (Integrate Landed Costs): By Color",
      fr: "Source Odoo Learn (Intégrer les coûts au débarquement) : par couleur",
    },
  }),
  complexQ({
    id: "inv-051",
    module: "inventory",
    text: {
      en: "What is the purpose of separating access rights between user roles? (Odoo Learn — Access Rights for Inventory Teams)",
      fr: "Quel est l’intérêt de séparer les droits d’accès entre les rôles d’utilisateur ? (Odoo Learn — Droits d'accès pour les équipes d'inventaire)",
    },
    correct: {
      en: "To ensure security and prevent access to unnecessary configurations",
      fr: "Pour assurer la sécurité et empêcher l’accès aux configurations inutiles",
    },
    distractors: [
      { en: "To increase the database size", fr: "Pour augmenter la taille de la base de données" },
      { en: "To allow both users to configure company settings", fr: "Pour permettre aux deux utilisateurs de configurer les paramètres de l'entreprise" },
      { en: "To prevent users from logging in", fr: "Pour empêcher les utilisateurs de se connecter" },
    ],
    explanation: {
      en: "Source Odoo Learn (Access Rights for Inventory Teams): To ensure security and prevent access to unnecessary configurations",
      fr: "Source Odoo Learn (Droits d'accès pour les équipes d'inventaire) : Pour assurer la sécurité et empêcher l'accès aux configurations inutiles",
    },
  }),
  complexQ({
    id: "inv-052",
    module: "inventory",
    text: {
      en: "Why would a Warehouse Manager need access to the Purchase app? (Odoo Learn — Access Rights for Inventory Teams)",
      fr: "Pourquoi un gestionnaire d'entrepôt aurait-il besoin d'accéder à l'application d'achat ? (Odoo Learn — Droits d'accès pour les équipes d'inventaire)",
    },
    correct: {
      en: "To view POs and process receipts",
      fr: "Pour afficher les bons de commande et traiter les reçus",
    },
    distractors: [
      { en: "To create vendors", fr: "Pour créer des fournisseurs" },
      { en: "To approve expenses", fr: "Pour approuver les dépenses" },
      { en: "To configure tax rules", fr: "Pour configurer les règles fiscales" },
    ],
    explanation: {
      en: "Source Odoo Learn (Access Rights for Inventory Teams): To view POs and process receipts",
      fr: "Source Odoo Learn (Droits d'accès pour les équipes d'inventaire) : Pour consulter les bons de commande et traiter les réceptions",
    },
  }),
  complexQ({
    id: "inv-053",
    module: "inventory",
    text: {
      en: "Which additional application becomes available when a user is granted access to the Inventory app, if the app is installed? (Odoo Learn — Access Rights for Inventory Teams)",
      fr: "Quelle application supplémentaire devient disponible lorsqu'un utilisateur obtient l'accès à l'application Inventaire, si l'application est installée ? (Odoo Learn — Droits d'accès pour les équipes d'inventaire)",
    },
    correct: {
      en: "Barcode",
      fr: "Code à barres",
    },
    distractors: [
      { en: "Manufacturing", fr: "Fabrication" },
      { en: "Quality", fr: "Qualité" },
      { en: "Sales", fr: "Ventes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Access Rights for Inventory Teams): Barcode",
      fr: "Source Odoo Learn (Droits d'accès pour les équipes d'inventaire) : Code barre",
    },
  }),
  complexQ({
    id: "inv-054",
    module: "inventory",
    text: {
      en: "When I use the Replenish on Order (MTO) route for a product, what does Odoo do after I confirm a sales order? (Odoo Learn — Make-to-Order (MTO))",
      fr: "Lorsque j'utilise l'itinéraire Réapprovisionnement sur commande (MTO) pour un produit, que fait Odoo après avoir confirmé une commande client ? (Odoo Learn — Fabrication sur commande (MTO))",
    },
    correct: {
      en: "It automatically triggers a replenishment based on the demand",
      fr: "Il déclenche automatiquement un réapprovisionnement en fonction de la demande",
    },
    distractors: [
      { en: "It delivers the product from existing stock", fr: "Il livre le produit à partir du stock existant" },
      { en: "It waits for a manual action before doing anything", fr: "Il attend une action manuelle avant de faire quoi que ce soit" },
      { en: "It cancels the order if the product is not in stock", fr: "Il annule la commande si le produit n'est pas en stock" },
    ],
    explanation: {
      en: "Source Odoo Learn (Make-to-Order (MTO)): It automatically triggers a replenishment based on the demand",
      fr: "Source Odoo Learn (Make-to-Order (MTO)) : Il déclenche automatiquement un réapprovisionnement en fonction de la demande",
    },
  }),
  complexQ({
    id: "inv-055",
    module: "inventory",
    text: {
      en: "When I configure my product with MTO, why do I also need to select another route like Buy or Manufacture? (Odoo Learn — Make-to-Order (MTO))",
      fr: "Lorsque je configure mon produit avec MTO, pourquoi dois-je également sélectionner un autre itinéraire comme Acheter ou Fabriquer ? (Odoo Learn — Fabrication sur commande (MTO))",
    },
    correct: {
      en: "To tell Odoo how the product should be replenished",
      fr: "Pour indiquer à Odoo comment le produit doit être réapprovisionné",
    },
    distractors: [
      { en: "To define the product’s sales price", fr: "Pour définir le prix de vente du produit" },
      { en: "To enable delivery orders", fr: "Pour activer les bons de livraison" },
      { en: "To allow the product to be stored in inventory", fr: "Pour permettre au produit d'être stocké en inventaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Make-to-Order (MTO)): To tell Odoo how the product should be replenished",
      fr: "Source Odoo Learn (Make-to-Order (MTO)) : Pour indiquer à Odoo comment le produit doit être réapprovisionné",
    },
  }),
  complexQ({
    id: "inv-056",
    module: "inventory",
    text: {
      en: "When I select the Buy route along with MTO, what document does Odoo automatically create after confirming a sales order? (Odoo Learn — Make-to-Order (MTO))",
      fr: "Lorsque je sélectionne l'itinéraire d'achat avec MTO, quel document Odoo crée-t-il automatiquement après avoir confirmé une commande client ? (Odoo Learn — Fabrication sur commande (MTO))",
    },
    correct: {
      en: "A Request for Quotation (RFQ)",
      fr: "Une demande de devis (RFQ)",
    },
    distractors: [
      { en: "A Delivery Order", fr: "Un bon de livraison" },
      { en: "A Manufacturing Order", fr: "Un ordre de fabrication" },
      { en: "A Purchase Order", fr: "Un bon de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Make-to-Order (MTO)): A Request for Quotation (RFQ)",
      fr: "Source Odoo Learn (Fabrication sur commande (MTO)) : Une demande de devis (RFQ)",
    },
  }),
  complexQ({
    id: "inv-057",
    module: "inventory",
    text: {
      en: "If I want Odoo to automatically order products when stock falls below a set minimum threshold, what reordering rule trigger do I need to set? (Odoo Learn — Reordering Rules)",
      fr: "Si je souhaite qu'Odoo commande automatiquement des produits lorsque le stock tombe en dessous d'un seuil minimum défini, quel déclencheur de règle de réapprovisionnement dois-je définir ? (Odoo Learn — Règles de réorganisation)",
    },
    correct: {
      en: "Auto",
      fr: "Auto",
    },
    distractors: [
      { en: "MTO", fr: "MTO" },
      { en: "Manual", fr: "Manuel" },
      { en: "MPS", fr: "MPS" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reordering Rules): Auto",
      fr: "Source Odoo Learn (règles de réorganisation) : Auto",
    },
  }),
  complexQ({
    id: "inv-058",
    module: "inventory",
    text: {
      en: "If I set my reordering rule to have a Min of 10 units of a product with a Max of 20, and I already have 5 on hand – how many units will Odoo order? (Odoo Learn — Reordering Rules)",
      fr: "Si je définis ma règle de réapprovisionnement pour avoir un minimum de 10 unités d'un produit avec un maximum de 20, et que j'en ai déjà 5 en stock, combien d'unités Odoo commandera-t-il ? (Odoo Learn — Règles de réorganisation)",
    },
    correct: {
      en: "15",
      fr: "15",
    },
    distractors: [
      { en: "10", fr: "10" },
      { en: "5", fr: "5" },
      { en: "25", fr: "25" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reordering Rules): 15",
      fr: "Source Odoo Learn (Règles de réorganisation) : 15",
    },
  }),
  complexQ({
    id: "inv-059",
    module: "inventory",
    text: {
      en: "Where can I see all of my reordering rules for all products? (Odoo Learn — Reordering Rules)",
      fr: "Où puis-je voir toutes mes règles de réapprovisionnement pour tous les produits ? (Odoo Learn — Règles de réorganisation)",
    },
    correct: {
      en: "In the Inventory App, under the Replenishment dashboard.",
      fr: "Dans l'application Inventaire, sous le tableau de bord Réapprovisionnement.",
    },
    distractors: [
      { en: "In the Manufacturing App, under Reordering Logic.", fr: "Dans l’application Manufacturing, sous Logique de réorganisation." },
      { en: "In the Inventory App, under Automation and Stock.", fr: "Dans l'application Inventaire, sous Automatisation et Stock." },
      { en: "In the Automation App, under Rules and Replenishment.", fr: "Dans l'application d'automatisation, sous Règles et réapprovisionnement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Reordering Rules): In the Inventory App, under the Replenishment dashboard.",
      fr: "Source Odoo Learn (Règles de réapprovisionnement) : Dans l'application Inventaire, sous le tableau de bord de réapprovisionnement.",
    },
  }),
  complexQ({
    id: "inv-060",
    module: "inventory",
    text: {
      en: "What’s the ‘Expected Arrival Date’ of a product with a vendor delivery lead time of 7 days, if the ‘Order Deadline’ is set to June 8th? (Odoo Learn — Lead Times)",
      fr: "Quelle est la « Date d’arrivée prévue » d’un produit dont le délai de livraison est de 7 jours, si la « Date limite de commande » est fixée au 8 juin ? (Odoo Learn — Délais)",
    },
    correct: {
      en: "June 15th",
      fr: "15 juin",
    },
    distractors: [
      { en: "June 1st", fr: "1er juin" },
      { en: "June 8th", fr: "8 juin" },
      { en: "June 16th", fr: "16 juin" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Times): June 15th",
      fr: "Source Odoo Learn (Délai de livraison) : 15 juin",
    },
  }),
  complexQ({
    id: "inv-061",
    module: "inventory",
    text: {
      en: "What happens when the “Days to Purchase” setting is set to three, and a request for quotation is generated *today* from a reordering rule? (Odoo Learn — Lead Times)",
      fr: "Que se passe-t-il lorsque le paramètre « Jours pour acheter » est défini sur trois et qu'une demande de devis est générée *aujourd'hui* à partir d'une règle de réapprovisionnement ? (Odoo Learn — Délais)",
    },
    correct: {
      en: "The ‘Order Deadline’ on a request for quotation shows three days from today",
      fr: "La « date limite de commande » d’une demande de devis indique trois jours à compter d’aujourd’hui",
    },
    distractors: [
      { en: "The ‘Order Date’ on a quotation shows three days from today", fr: "La « Date de commande » sur un devis indique trois jours à compter d'aujourd'hui" },
      { en: "The ‘Vendor Deadline’ on a request for quotation shows three days from today", fr: "La « date limite du fournisseur » sur une demande de devis indique trois jours à compter d'aujourd'hui." },
      { en: "The ‘Expected Arrival Date’ on a request for quotation shows three days from today", fr: "La « Date d'arrivée prévue » sur une demande de devis indique trois jours à compter d'aujourd'hui." },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Times): The ‘Order Deadline’ on a request for quotation shows three days from today",
      fr: "Source Odoo Learn (Délai de livraison) : La « Date limite de commande » sur une demande de devis indique trois jours à compter d'aujourd'hui",
    },
  }),
  complexQ({
    id: "inv-062",
    module: "inventory",
    text: {
      en: "What is the ‘Requested date is too soon’ warning on the sales order based on? (Odoo Learn — Lead Times)",
      fr: "Sur quoi se base l’avertissement « La date demandée est trop tôt » sur la commande client ? (Odoo Learn — Délais)",
    },
    correct: {
      en: "Customer Lead Time only",
      fr: "Délai de livraison client uniquement",
    },
    distractors: [
      { en: "Vendor Lead Time + Security Lead Time for Purchase", fr: "Délai de livraison du fournisseur + délai de sécurité pour l'achat" },
      { en: "Customer Lead Time +  Security Lead Time for Sales", fr: "Délai client + délai de sécurité pour les ventes" },
      { en: "Customer Lead Time, Vendor Lead Time, and Security Lead Times for Sales and Purchase", fr: "Délai de livraison du client, délai de livraison du fournisseur et délais de sécurité pour les ventes et les achats" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lead Times): Customer Lead Time only",
      fr: "Source Odoo Learn (Délais de livraison) : Délai client uniquement",
    },
  }),
  complexQ({
    id: "inv-063",
    module: "inventory",
    text: {
      en: "In the video, where can the resupply route be found after selecting 'Distribution center' in the 'Resupply From' field of the 'Warehouse Configuration' tab? (Odoo Learn — Resupply Warehouse)",
      fr: "Dans la vidéo, où peut-on trouver l'itinéraire de réapprovisionnement après avoir sélectionné « Centre de distribution » dans le champ « Réapprovisionnement depuis » de l'onglet « Configuration de l'entrepôt » ? (Odoo Learn — Entrepôt de réapprovisionnement)",
    },
    correct: {
      en: "Product form, in the 'Inventory' Tab",
      fr: "Formulaire Produit, dans l'onglet 'Inventaire'",
    },
    distractors: [
      { en: "‘Warehouse Overview’ dashboard", fr: "Tableau de bord « Aperçu de l'entrepôt »" },
      { en: "‘Delivery order’", fr: "« Bon de livraison »" },
      { en: "‘Settings’ > ‘Warehouse’ configuration page", fr: "Page de configuration « Paramètres » > « Entrepôt »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Resupply Warehouse): Product form, in the 'Inventory' Tab",
      fr: "Source Odoo Learn (Resupply Warehouse) : Formulaire Produit, dans l'onglet 'Inventaire'",
    },
  }),
  complexQ({
    id: "inv-064",
    module: "inventory",
    text: {
      en: "Which Inventory settings are required to use the ‘Resupply From’ route? (Odoo Learn — Resupply Warehouse)",
      fr: "Quels paramètres d'inventaire sont requis pour utiliser l'itinéraire « Réapprovisionnement à partir de » ? (Odoo Learn — Entrepôt de réapprovisionnement)",
    },
    correct: {
      en: "‘Storage Locations’ and ‘Multi-Step Routes’",
      fr: "« Emplacements de stockage » et « Itinéraires en plusieurs étapes »",
    },
    distractors: [
      { en: "‘Warehouse Configuration’", fr: "« Configuration de l'entrepôt »" },
      { en: "‘Resupply From’, with the ‘Distribution center’ selected", fr: "« Réapprovisionnement depuis », avec le « Centre de distribution » sélectionné" },
      { en: "‘Reordering Rules’", fr: "« Règles de réorganisation »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Resupply Warehouse): ‘Storage Locations’ and ‘Multi-Step Routes’",
      fr: "Source Odoo Learn (Entrepôt de réapprovisionnement) : « Emplacements de stockage » et « Itinéraires en plusieurs étapes »",
    },
  }),
  complexQ({
    id: "inv-065",
    module: "inventory",
    text: {
      en: "What operation(s) does Odoo create to complete the resupply from another warehouse process? (Odoo Learn — Resupply Warehouse)",
      fr: "Quelle(s) opération(s) Odoo crée-t-il pour compléter le réapprovisionnement à partir d'un autre processus d'entrepôt ? (Odoo Learn — Entrepôt de réapprovisionnement)",
    },
    correct: {
      en: "‘Delivery Order’ from the warehouse, and ‘Receipt’ for the shop",
      fr: "« Commande de livraison » depuis l'entrepôt et « Réception » pour le magasin",
    },
    distractors: [
      { en: "‘Internal Transfer’ from warehouse to shop", fr: "« Transfert interne » de l'entrepôt au magasin" },
      { en: "‘Resupply Warehouse’ from warehouse to shop", fr: "« Entrepôt de réapprovisionnement » de l'entrepôt au magasin" },
      { en: "‘Interwarehouse transit’ operation", fr: "Opération « Transit inter-entrepôts »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Resupply Warehouse): ‘Delivery Order’ from the warehouse, and ‘Receipt’ for the shop",
      fr: "Source Odoo Learn (Resupply Warehouse) : « Commande de livraison » depuis l'entrepôt et « Reçu » pour la boutique",
    },
  }),
  complexQ({
    id: "inv-066",
    module: "inventory",
    text: {
      en: "What happens if you try to validate a receipt without entering lot numbers? (Odoo Learn — Lots & Serial Numbers)",
      fr: "Que se passe-t-il si vous essayez de valider un reçu sans saisir les numéros de lot ? (Odoo Learn — Lots et numéros de série)",
    },
    correct: {
      en: "Odoo shows an error message",
      fr: "Odoo affiche un message d'erreur",
    },
    distractors: [
      { en: "Odoo automatically assigns them", fr: "Odoo les attribue automatiquement" },
      { en: "Nothing happens", fr: "Rien ne se passe" },
      { en: "The order is cancelled", fr: "La commande est annulée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lots & Serial Numbers): Odoo shows an error message",
      fr: "Source Odoo Learn (Lots et numéros de série) : Odoo affiche un message d'erreur",
    },
  }),
  complexQ({
    id: "inv-067",
    module: "inventory",
    text: {
      en: "What is a traceability report used for? (Odoo Learn — Lots & Serial Numbers)",
      fr: "A quoi sert un rapport de traçabilité ? (Odoo Learn — Lots et numéros de série)",
    },
    correct: {
      en: "Viewing the movement of lots and serials",
      fr: "Visualisation du mouvement des lots et des séries",
    },
    distractors: [
      { en: "Calculating taxes", fr: "Calcul des impôts" },
      { en: "Tracking sales only", fr: "Suivi des ventes uniquement" },
      { en: "Setting up inventory categories", fr: "Configuration des catégories d'inventaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lots & Serial Numbers): Viewing the movement of lots and serials",
      fr: "Source Odoo Learn (Lots et numéros de série) : Visualisation du mouvement des lots et des séries",
    },
  }),
  complexQ({
    id: "inv-068",
    module: "inventory",
    text: {
      en: "What product type must an item be to enable lot or serial tracking (Odoo Learn — Lots & Serial Numbers)",
      fr: "Quel type de produit doit être un article pour permettre le suivi d'un lot ou d'une série ? (Odoo Learn — Lots et numéros de série)",
    },
    correct: {
      en: "Goods",
      fr: "Marchandises",
    },
    distractors: [
      { en: "Virtual", fr: "Virtuel" },
      { en: "Consumable", fr: "Consommable" },
      { en: "Service", fr: "Service" },
    ],
    explanation: {
      en: "Source Odoo Learn (Lots & Serial Numbers): Goods",
      fr: "Source Odoo Learn (Lots et numéros de série) : Marchandises",
    },
  }),
  complexQ({
    id: "inv-069",
    module: "inventory",
    text: {
      en: "When can you set an expiry date for new lots of products entering the inventory? (Odoo Learn — Working with Perishable Products)",
      fr: "Quand peut-on fixer une date de péremption pour les nouveaux lots de produits entrant en stock ? (Odoo Learn — Travailler avec des produits périssables)",
    },
    correct: {
      en: "A & B.",
      fr: "A et B.",
    },
    distractors: [
      { en: "Directly at the reception of the products, when organizing lots on the Detailed Operations window, but *only* if the Expiration Dates feature is activated.", fr: "Directement à la réception des produits, lors de l'organisation des lots sur la fenêtre Opérations Détaillées, mais *uniquement* si la fonctionnalité Dates de Péremption est activée." },
      { en: "Once lots are in-stock, you can add an expiry date in the Date tab of each lot form.", fr: "Une fois les lots en stock, vous pouvez ajouter une date d'expiration dans l'onglet Date de chaque formulaire de lot." },
      { en: "Odoo does *not* allow expiration dates to be set on products.", fr: "Odoo n'autorise *pas* la définition de dates d'expiration sur les produits." },
    ],
    explanation: {
      en: "Source Odoo Learn (Working with Perishable Products): A & B.",
      fr: "Source Odoo Learn (Travailler avec des produits périssables) : A & B.",
    },
  }),
  complexQ({
    id: "inv-070",
    module: "inventory",
    text: {
      en: "Which Inventory settings *must* be activated in order to manage perishable products? (Odoo Learn — Working with Perishable Products)",
      fr: "Quels paramètres d'inventaire *doivent* être activés pour gérer les produits périssables ? (Odoo Learn — Travailler avec des produits périssables)",
    },
    correct: {
      en: "Lots & Serial Numbers, Expiration Dates, Storage Locations & Multi-Step Routes.",
      fr: "Lots et numéros de série, dates d'expiration, emplacements de stockage et itinéraires en plusieurs étapes.",
    },
    distractors: [
      { en: "Barcode Scanner.", fr: "Scanner de codes-barres." },
      { en: "Packages, Batch Transfers, and Wave Transfers.", fr: "Packages, transferts par lots et transferts par vagues." },
      { en: "FEFO is automatically activated in every Odoo database.", fr: "FEFO est automatiquement activé dans chaque base de données Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Working with Perishable Products): Lots & Serial Numbers, Expiration Dates, Storage Locations & Multi-Step Routes.",
      fr: "Source Odoo Learn (Travailler avec des produits périssables) : lots et numéros de série, dates d'expiration, emplacements de stockage et itinéraires en plusieurs étapes.",
    },
  }),
  complexQ({
    id: "inv-071",
    module: "inventory",
    text: {
      en: "What needs to be updated to ensure scrapped products show in the Profit & Loss Report? (Odoo Learn — Working with Perishable Products)",
      fr: "Que faut-il mettre à jour pour garantir que les produits mis au rebut apparaissent dans le rapport de profits et pertes ? (Odoo Learn — Travailler avec des produits périssables)",
    },
    correct: {
      en: "A scrap ‘Inventory Loss’ location must be set with a loss account specified, and the product category must use FIFO or AVCO costing method, and the category’s inventory valuation must be set to Perpetual.",
      fr: "Un emplacement de « Perte de stock » de ferraille doit être défini avec un compte de perte spécifié, et la catégorie de produit doit utiliser la méthode de valorisation FIFO ou AVCO, et la valorisation des stocks de la catégorie doit être définie sur Perpétuel.",
    },
    distractors: [
      { en: "Nothing – just scrap the products", fr: "Rien – il suffit de jeter les produits" },
      { en: "The expiration date", fr: "La date de péremption" },
      { en: "This is *NOT* a feature in Odoo", fr: "Ceci n'est *PAS* une fonctionnalité dans Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Working with Perishable Products): A scrap ‘Inventory Loss’ location must be set with a loss account specified, and the product category must use FIFO or AVCO costing method, and the category’s inventory valuation must be set to Perpetual.",
      fr: "Source Odoo Learn (Travailler avec des produits périssables) : un emplacement de « perte d'inventaire » doit être défini avec un compte de perte spécifié, et la catégorie de produit doit utiliser la méthode de valorisation FIFO ou AVCO, et la valorisation des stocks de la catégorie doit être définie sur Perpétuel.",
    },
  }),
  complexQ({
    id: "inv-072",
    module: "inventory",
    text: {
      en: "What setting do I need to enable for Inventory before I can enable expiration dates? (Odoo Learn — Expiration Dates)",
      fr: "Quel paramètre dois-je activer pour l'inventaire avant de pouvoir activer les dates d'expiration ? (Odoo Learn — Dates d'expiration)",
    },
    correct: {
      en: "Lots & Serial Numbers",
      fr: "Lots et numéros de série",
    },
    distractors: [
      { en: "Barcode Scanner", fr: "Lecteur de codes à barres" },
      { en: "Storage Locations", fr: "Emplacements de stockage" },
      { en: "Product Packages", fr: "Paquets de produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Expiration Dates): Lots & Serial Numbers",
      fr: "Source Odoo Learn (Dates d'expiration) : lots et numéros de série",
    },
  }),
  complexQ({
    id: "inv-073",
    module: "inventory",
    text: {
      en: "If I change the Expiration Date for a lot or product, what will happen to the Removal Date? (Odoo Learn — Expiration Dates)",
      fr: "Si je modifie la date d'expiration d'un lot ou d'un produit, qu'arrivera-t-il à la date de retrait ? (Odoo Learn — Dates d'expiration)",
    },
    correct: {
      en: "It is recalculated based on its configuration in the product form.",
      fr: "Il est recalculé en fonction de sa configuration dans la fiche produit.",
    },
    distractors: [
      { en: "It remains the same as", fr: "Cela reste le même que" },
      { en: "The removal date becomes immediate", fr: "La date de retrait devient immédiate" },
      { en: "I have to manually change the removal date as well.", fr: "Je dois également modifier manuellement la date de suppression." },
    ],
    explanation: {
      en: "Source Odoo Learn (Expiration Dates): It is recalculated based on its configuration in the product form.",
      fr: "Source Odoo Learn (Dates d'expiration) : Elle est recalculée en fonction de sa configuration dans la fiche produit.",
    },
  }),
  complexQ({
    id: "inv-074",
    module: "inventory",
    text: {
      en: "Where can I set up the database to use the FEFO removal strategy? (Odoo Learn — Expiration Dates)",
      fr: "Où puis-je configurer la base de données pour utiliser la stratégie de suppression FEFO ? (Odoo Learn — Dates d'expiration)",
    },
    correct: {
      en: "Both B & C",
      fr: "B et C",
    },
    distractors: [
      { en: "On the product form", fr: "Sur la fiche produit" },
      { en: "On the product type", fr: "Sur le type de produit" },
      { en: "On the storage location", fr: "Sur le lieu de stockage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Expiration Dates): Both B & C",
      fr: "Source Odoo Learn (Dates d'expiration) : B et C",
    },
  }),
  complexQ({
    id: "inv-075",
    module: "inventory",
    text: {
      en: "What needs to be enabled in order to use Push & Pull rules? (Odoo Learn — Push & Pull Rules)",
      fr: "Que faut-il activer pour utiliser les règles Push & Pull ? (Odoo Learn — Règles Push & Pull)",
    },
    correct: {
      en: "Multi-Step Routes",
      fr: "Itinéraires en plusieurs étapes",
    },
    distractors: [
      { en: "Nothing needs to be enabled", fr: "Rien ne doit être activé" },
      { en: "Developer mode", fr: "Mode développeur" },
      { en: "Storage categories", fr: "Catégories de stockage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Push & Pull Rules): Multi-Step Routes",
      fr: "Source Odoo Learn (règles Push & Pull) : itinéraires en plusieurs étapes",
    },
  }),
  complexQ({
    id: "inv-076",
    module: "inventory",
    text: {
      en: "Apart from ‘Take from stock’ and ‘Take from stock, if…’, what is the other supply method that can be used with routes? (Odoo Learn — Push & Pull Rules)",
      fr: "Hormis « Prendre en stock » et « Prendre en stock, si… », quelle est l'autre méthode d'approvisionnement qui peut être utilisée avec les itinéraires ? (Odoo Learn — Règles Push & Pull)",
    },
    correct: {
      en: "Trigger another rule",
      fr: "Déclencher une autre règle",
    },
    distractors: [
      { en: "Take from a customer location", fr: "Prendre depuis un emplacement client" },
      { en: "Take from a virtual location", fr: "Prendre depuis un emplacement virtuel" },
      { en: "Trigger the previous rule", fr: "Déclencher la règle précédente" },
    ],
    explanation: {
      en: "Source Odoo Learn (Push & Pull Rules): Trigger another rule",
      fr: "Source Odoo Learn (Règles Push & Pull) : Déclenchez une autre règle",
    },
  }),
  complexQ({
    id: "inv-077",
    module: "inventory",
    text: {
      en: "To fulfill a sales order, which type of action is triggered? (Odoo Learn — Push & Pull Rules)",
      fr: "Pour exécuter une commande client, quel type d’action est déclenché ? (Odoo Learn — Règles Push & Pull)",
    },
    correct: {
      en: "It depends on how the route is set up, and on the number of rules coming into action during the process",
      fr: "Cela dépend de la manière dont l'itinéraire est configuré et du nombre de règles entrant en vigueur au cours du processus.",
    },
    distractors: [
      { en: "A Push rule, because the product goes to an external location", fr: "Une règle Push, car le produit va vers un emplacement externe" },
      { en: "A Pull rule, because the product comes from an internal location", fr: "Une règle Pull, car le produit provient d'un emplacement interne" },
      { en: "A Push *and* a Pull rule, because a Push rule *can’t* work without a Pull rule (and vice versa)", fr: "Une règle Push *et* une règle Pull, car une règle Push *ne peut pas* fonctionner sans une règle Pull (et vice versa)" },
    ],
    explanation: {
      en: "Source Odoo Learn (Push & Pull Rules): It depends on how the route is set up, and on the number of rules coming into action during the process",
      fr: "Source Odoo Learn (Règles Push & Pull) : Cela dépend de la manière dont l'itinéraire est configuré et du nombre de règles entrant en action au cours du processus.",
    },
  }),
  complexQ({
    id: "inv-078",
    module: "inventory",
    text: {
      en: "What is the purpose of a putaway rule in Odoo? (Odoo Learn — Putaway Rules)",
      fr: "Quel est le but d’une règle de rangement dans Odoo ? (Odoo Learn — Règles de mise en stock)",
    },
    correct: {
      en: "To automatically assign incoming products to specific storage locations",
      fr: "Pour attribuer automatiquement les produits entrants à des emplacements de stockage spécifiques",
    },
    distractors: [
      { en: "To track employee attendance", fr: "Pour suivre la présence des employés" },
      { en: "To manage customer invoices", fr: "Pour gérer les factures clients" },
      { en: "To generate sales reports", fr: "Pour générer des rapports de ventes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Putaway Rules): To automatically assign incoming products to specific storage locations",
      fr: "Source Odoo Learn (Règles de rangement) : Pour attribuer automatiquement les produits entrants à des emplacements de stockage spécifiques",
    },
  }),
  complexQ({
    id: "inv-079",
    module: "inventory",
    text: {
      en: "When creating a putaway rule, which field determines the specific product the rule applies to? (Odoo Learn — Putaway Rules)",
      fr: "Lors de la création d'une règle de rangement, quel champ détermine le produit spécifique auquel la règle s'applique ? (Odoo Learn — Règles de mise en stock)",
    },
    correct: {
      en: "A and C",
      fr: "A et C",
    },
    distractors: [
      { en: "Product Category", fr: "Catégorie de produit" },
      { en: "Vendor", fr: "Fournisseur" },
      { en: "Product", fr: "Produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Putaway Rules): A and C",
      fr: "Source Odoo Learn (Règles de mise en stock) : A et C",
    },
  }),
  complexQ({
    id: "inv-080",
    module: "inventory",
    text: {
      en: "What is the parent location for the ‘WH/Stock/Music’ storage location in the example? (Odoo Learn — Putaway Rules)",
      fr: "Quel est l'emplacement parent de l'emplacement de stockage « WH/Stock/Music » dans l'exemple ? (Odoo Learn — Règles de mise en stock)",
    },
    correct: {
      en: "WH/Stock",
      fr: "WH/Stock",
    },
    distractors: [
      { en: "WH", fr: "WH" },
      { en: "WH/Main", fr: "WH/Principal" },
      { en: "WH/Storage", fr: "WH/Stockage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Putaway Rules): WH/Stock",
      fr: "Source Odoo Learn (Règles de mise en stock) : WH/Stock",
    },
  }),
  complexQ({
    id: "inv-081",
    module: "inventory",
    text: {
      en: "What does the “Having Category” on a putaway rule determine? (Odoo Learn — Storage Categories)",
      fr: "Que détermine la « catégorie ayant » sur une règle de rangement ? (Odoo Learn — Catégories de stockage)",
    },
    correct: {
      en: "The “Having Category” uses the chosen Storage Category to determine where a product is put away, based on location capacity",
      fr: "La « Catégorie d'avoir » utilise la catégorie de stockage choisie pour déterminer où un produit est stocké, en fonction de la capacité de l'emplacement.",
    },
    distractors: [
      { en: "The “Having Category” determines where a product is put away, based on its variant", fr: "La « Having Category » détermine où un produit est rangé, en fonction de sa variante." },
      { en: "The “Having Category” uses the chosen Product Category to determine where a product is put away", fr: "La « Catégorie Avoir » utilise la Catégorie de Produit choisie pour déterminer où un produit est rangé" },
      { en: "The “Having Category” determines where a product is put away, based on its route", fr: "La « catégorie d'avoir » détermine où un produit est rangé, en fonction de son itinéraire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Storage Categories): The “Having Category” uses the chosen Storage Category to determine where a product is put away, based on location capacity",
      fr: "Source Odoo Learn (Catégories de stockage) : La « Catégorie d'avoir » utilise la catégorie de stockage choisie pour déterminer où un produit est rangé, en fonction de la capacité de l'emplacement.",
    },
  }),
  complexQ({
    id: "inv-082",
    module: "inventory",
    text: {
      en: "If the ‘Capacity by Product’ is set to ‘100’ on two different storage locations for a putaway rule, and the on-hand quantity is ‘75’ at Location A, and ‘0’ at Location B, what occurs when 50 units of that product is received from a vendor? (Odoo Learn — Storage Categories)",
      fr: "Si la « Capacité par produit » est définie sur « 100 » sur deux emplacements de stockage différents pour une règle d'entrée en stock et que la quantité disponible est de « 75 » à l'emplacement A et de « 0 » à l'emplacement B, que se passe-t-il lorsque 50 unités de ce produit sont reçues d'un fournisseur ? (Odoo Learn — Catégories de stockage)",
    },
    correct: {
      en: "0 units are stored in Location A, and 50 units are stored in Location B",
      fr: "0 unité est stockée dans l'emplacement A et 50 unités sont stockées dans l'emplacement B",
    },
    distractors: [
      { en: "25 units are stored in Location A, and 25 units are stored in Location B", fr: "25 unités sont stockées à l'emplacement A et 25 unités sont stockées à l'emplacement B." },
      { en: "No units of the product will be stored in either Location (A/B) because exactly 100 units have to be received in order to store it", fr: "Aucune unité du produit ne sera stockée dans aucun des emplacements (A/B) car exactement 100 unités doivent être reçues pour le stocker." },
      { en: "Odoo doesn’t have the ability to set limits on product capacity by location", fr: "Odoo n'a pas la possibilité de fixer des limites sur la capacité des produits par emplacement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Storage Categories): 0 units are stored in Location A, and 50 units are stored in Location B",
      fr: "Source Odoo Learn (Catégories de stockage) : 0 unité est stockée dans l'emplacement A et 50 unités sont stockées dans l'emplacement B",
    },
  }),
  complexQ({
    id: "inv-083",
    module: "inventory",
    text: {
      en: "Where can I check the intended storage location determined by the putaway rules and storage category, on a receipt? (Odoo Learn — Storage Categories)",
      fr: "Où puis-je vérifier sur un reçu le lieu de stockage prévu déterminé par les règles de rangement et la catégorie de stockage ? (Odoo Learn — Catégories de stockage)",
    },
    correct: {
      en: "Both B & C",
      fr: "B et C",
    },
    distractors: [
      { en: "It’s displayed in the Destination Location field", fr: "Il est affiché dans le champ Emplacement de destination" },
      { en: "Clicking the ‘Details’ link to open the ‘Detailed Operations’ pop-up window", fr: "En cliquant sur le lien « Détails » pour ouvrir la fenêtre contextuelle « Opérations détaillées »" },
      { en: "In the ‘Moves’ smart button", fr: "Dans le bouton intelligent « Déplacements »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Storage Categories): Both B & C",
      fr: "Source Odoo Learn (catégories de stockage) : B et C",
    },
  }),
  complexQ({
    id: "inv-084",
    module: "inventory",
    text: {
      en: "Which Inventory app setting needs to be enabled to use the ‘Cross-Dock’ route? (Odoo Learn — Cross-Docking)",
      fr: "Quel paramètre de l’application Inventaire doit être activé pour utiliser l’itinéraire « Cross-Dock » ? (Odoo Learn — Cross-Docking)",
    },
    correct: {
      en: "‘Multi-Step Routes’",
      fr: "« Itinéraires en plusieurs étapes »",
    },
    distractors: [
      { en: "‘Cross-Docking’", fr: "« Cross-docking »" },
      { en: "‘Push/Pull Routes’", fr: "« Itinéraires pousser/tirer »" },
      { en: "The ‘Cross-Dock’ route is available, by default", fr: "La route « Cross-Dock » est disponible par défaut" },
    ],
    explanation: {
      en: "Source Odoo Learn (Cross-Docking): ‘Multi-Step Routes’",
      fr: "Source Odoo Learn (Cross-Docking) : « Itinéraires en plusieurs étapes »",
    },
  }),
  complexQ({
    id: "inv-085",
    module: "inventory",
    text: {
      en: "To use the ‘Cross-Dock’ route for a product, which routes must be enabled on the product’s ‘Inventory’ tab? (Odoo Learn — Cross-Docking)",
      fr: "Pour utiliser la route « Cross-Dock » pour un produit, quelles routes doivent être activées dans l’onglet « Inventaire » du produit ? (Odoo Learn — Cross-Docking)",
    },
    correct: {
      en: "‘Buy’ and ‘Cross-Dock’",
      fr: "« Acheter » et « Cross-Dock »",
    },
    distractors: [
      { en: "‘Manufacture’ and ‘Sell’", fr: "« Fabriquer » et « Vendre »" },
      { en: "‘Sell’ and ‘Cross-Dock’", fr: "« Vendre » et « Cross-Dock »" },
      { en: "‘Dropship’ and ‘Sell’", fr: "« Livraison directe » et « Vente »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Cross-Docking): ‘Buy’ and ‘Cross-Dock’",
      fr: "Source Odoo Learn (Cross-Docking) : « Acheter » et « Cross-Dock »",
    },
  }),
  complexQ({
    id: "inv-086",
    module: "inventory",
    text: {
      en: "How many transfers are created after confirming a sales order for a product that uses the ‘Cross-Dock’ route? (Odoo Learn — Cross-Docking)",
      fr: "Combien de transferts sont créés après confirmation d'une commande client pour un produit qui utilise la route « Cross-Dock » ? (Odoo Learn — Cross-Docking)",
    },
    correct: {
      en: "Two",
      fr: "Deux",
    },
    distractors: [
      { en: "One", fr: "Un" },
      { en: "Three", fr: "Trois" },
      { en: "Four", fr: "Quatre" },
    ],
    explanation: {
      en: "Source Odoo Learn (Cross-Docking): Two",
      fr: "Source Odoo Learn (Cross-Docking) : Deux",
    },
  }),
  complexQ({
    id: "inv-087",
    module: "inventory",
    text: {
      en: "When receiving consignment stock from a vendor, which of the following should you create? (Odoo Learn — Consignment)",
      fr: "Lorsque vous recevez un stock de consignation d'un fournisseur, lequel des éléments suivants devez-vous créer ? (Odoo Learn — Consignation)",
    },
    correct: {
      en: "Receipt",
      fr: "Reçu",
    },
    distractors: [
      { en: "Purchase Order", fr: "Bon de commande" },
      { en: "Request for Quotation (RfQ)", fr: "Demande de devis (RfQ)" },
      { en: "All of the above", fr: "Tout ce qui précède" },
    ],
    explanation: {
      en: "Source Odoo Learn (Consignment): Receipt",
      fr: "Source Odoo Learn (Consignation) : Reçu",
    },
  }),
  complexQ({
    id: "inv-088",
    module: "inventory",
    text: {
      en: "When creating a receipt for consignment stock, where do you assign the Owner of the products in your warehouse? (Odoo Learn — Consignment)",
      fr: "Lors de la création d'une réception pour un stock en consignation, où affectez-vous le propriétaire des produits dans votre entrepôt ? (Odoo Learn — Consignation)",
    },
    correct: {
      en: "In the ‘Assign Owner’ area, located on the warehouse receipt",
      fr: "Dans la zone « Attribuer un propriétaire », située sur le récépissé d'entrepôt",
    },
    distractors: [
      { en: "Directly from the warehouse settings page", fr: "Directement depuis la page des paramètres de l'entrepôt" },
      { en: "You can’t assign an owner for consignment stock", fr: "Vous ne pouvez pas affecter un propriétaire au stock en consignation" },
      { en: "A & B", fr: "A et B" },
    ],
    explanation: {
      en: "Source Odoo Learn (Consignment): In the ‘Assign Owner’ area, located on the warehouse receipt",
      fr: "Source Odoo Learn (Consignation) : Dans la zone « Attribuer un propriétaire », située sur le récépissé d'entrepôt",
    },
  }),
  complexQ({
    id: "inv-089",
    module: "inventory",
    text: {
      en: "On the “Stock Valuation” page, what is displayed in the “Total Value” column for consignment products? (Odoo Learn — Consignment)",
      fr: "Sur la page « Valorisation des stocks », qu'est-ce qui est affiché dans la colonne « Valeur totale » pour les produits en consignation ? (Odoo Learn — Consignation)",
    },
    correct: {
      en: "‘0.00’",
      fr: "'0,00'",
    },
    distractors: [
      { en: "The exact value of the quantity of the product on hand", fr: "La valeur exacte de la quantité du produit disponible" },
      { en: "Half of the exact value of the quantity of the product on hand", fr: "La moitié de la valeur exacte de la quantité du produit disponible" },
      { en: "Twice the exact value of the quantity of the product on hand", fr: "Deux fois la valeur exacte de la quantité du produit disponible" },
    ],
    explanation: {
      en: "Source Odoo Learn (Consignment): ‘0.00’",
      fr: "Source Odoo Learn (Consignation) : ‘0.00’",
    },
  }),
  complexQ({
    id: "inv-090",
    module: "inventory",
    text: {
      en: "Where can I find the ‘Map’ button for viewing delivery destinations on a map when planning batches? (Odoo Learn — Dispatch Management System)",
      fr: "Où puis-je trouver le bouton « Carte » pour visualiser les destinations de livraison sur une carte lors de la planification de lots ? (Odoo Learn — Système de gestion des expéditions)",
    },
    correct: {
      en: "On a batch transfer when the status is set to ‘In Progress’",
      fr: "Sur un transfert par lots lorsque le statut est défini sur « En cours »",
    },
    distractors: [
      { en: "Inventory > Configuration > Dispatch Management", fr: "Inventaire > Configuration > Gestion des expéditions" },
      { en: "On a wave transfer in the ‘Operations’ tab", fr: "Sur un transfert de vague dans l'onglet 'Opérations'" },
      { en: "On a batch transfer by clicking the ‘gear’ icon to show the ‘Map’ option", fr: "Lors d'un transfert par lots en cliquant sur l'icône « engrenage » pour afficher l'option « Carte »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Dispatch Management System): On a batch transfer when the status is set to ‘In Progress’",
      fr: "Source Odoo Learn (Dispatch Management System) : Sur un transfert par lots lorsque le statut est défini sur « En cours »",
    },
  }),
  complexQ({
    id: "inv-091",
    module: "inventory",
    text: {
      en: "What is required to configure the settings for a dock location in Odoo? (Odoo Learn — Dispatch Management System)",
      fr: "Que faut-il pour configurer les paramètres d'un emplacement de dock dans Odoo ? (Odoo Learn — Système de gestion des expéditions)",
    },
    correct: {
      en: "Go to the dock location from ‘Configuration’ > ‘Locations’, and tick ‘Is a Dock Location’ checkbox",
      fr: "Accédez à l'emplacement du quai dans « Configuration » > « Emplacements » et cochez la case « Est un emplacement de quai »",
    },
    distractors: [
      { en: "Designate one delivery truck per dock", fr: "Désigner un camion de livraison par quai" },
      { en: "On the picking, set the ‘Destination Location’ to the dock location", fr: "Lors de la cueillette, définissez le « Emplacement de destination » sur l'emplacement du quai" },
      { en: "On a batch, set the ‘Dock Location’", fr: "Sur un lot, définissez « l'emplacement du quai »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Dispatch Management System): Go to the dock location from ‘Configuration’ > ‘Locations’, and tick ‘Is a Dock Location’ checkbox",
      fr: "Source Odoo Learn (Dispatch Management System) : accédez à l'emplacement du quai depuis « Configuration » > « Emplacements », et cochez la case « Est-ce un emplacement de quai »",
    },
  }),
  complexQ({
    id: "inv-092",
    module: "inventory",
    text: {
      en: "In the video, why did I have to set ‘Dock B’ as the destination location in the ‘To’ field? (Odoo Learn — Dispatch Management System)",
      fr: "Dans la vidéo, pourquoi ai-je dû définir « Dock B » comme emplacement de destination dans le champ « Vers » ? (Odoo Learn — Système de gestion des expéditions)",
    },
    correct: {
      en: "Because ‘Output’ is the default location, and does not specify the exact dock location for our orders",
      fr: "Parce que « Sortie » est l'emplacement par défaut et ne précise pas l'emplacement exact du quai pour nos commandes.",
    },
    distractors: [
      { en: "To avoid products being sent to the wrong warehouse", fr: "Pour éviter que les produits soient envoyés au mauvais entrepôt" },
      { en: "Because Dock B is the only available location for these products", fr: "Parce que le Dock B est le seul emplacement disponible pour ces produits" },
      { en: "To make sure the picking process is completed automatically", fr: "Pour vous assurer que le processus de préparation des commandes se termine automatiquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Dispatch Management System): Because ‘Output’ is the default location, and does not specify the exact dock location for our orders",
      fr: "Source Odoo Learn (Dispatch Management System) : Parce que « Sortie » est l'emplacement par défaut et ne précise pas l'emplacement exact du quai pour nos commandes",
    },
  }),
  complexQ({
    id: "inv-093",
    module: "inventory",
    text: {
      en: "Where in Odoo can you configure the reservation method for delivery orders? (Odoo Learn — Reservation Methods)",
      fr: "Où dans Odoo pouvez-vous configurer la méthode de réservation pour les bons de livraison ? (Odoo Learn — Méthodes de réservation)",
    },
    correct: {
      en: "Inventory > Configuration > Operation Types",
      fr: "Inventaire > Configuration > Types d'opérations",
    },
    distractors: [
      { en: "Sales > Products", fr: "Ventes > Produits" },
      { en: "Manufacturing > Settings", fr: "Fabrication > Paramètres" },
      { en: "Accounting > Configuration", fr: "Comptabilité > Configuration" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reservation Methods): Inventory > Configuration > Operation Types",
      fr: "Source Odoo Learn (Méthodes de réservation) : Inventaire > Configuration > Types d'opérations",
    },
  }),
  complexQ({
    id: "inv-094",
    module: "inventory",
    text: {
      en: "What action is required to reserve stock when the reservation method is set to “Manually”? (Odoo Learn — Reservation Methods)",
      fr: "Quelle action est requise pour réserver du stock lorsque la méthode de réservation est définie sur « Manuellement » ? (Odoo Learn — Méthodes de réservation)",
    },
    correct: {
      en: "Click \"Check Availability\" on the Delivery Order",
      fr: "Cliquez sur « Vérifier la disponibilité » sur le bon de livraison",
    },
    distractors: [
      { en: "Confirm the Sales Order", fr: "Confirmer la commande client" },
      { en: "Validate the Delivery", fr: "Valider la livraison" },
      { en: "Enable the Forecast Report", fr: "Activer le rapport de prévision" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reservation Methods): Click \"Check Availability\" on the Delivery Order",
      fr: "Source Odoo Learn (Méthodes de réservation) : Cliquez sur \"Vérifier la disponibilité\" sur le bon de livraison",
    },
  }),
  complexQ({
    id: "inv-095",
    module: "inventory",
    text: {
      en: "In the 'Before Scheduled Date' method, what triggers the automatic reservation? (Odoo Learn — Reservation Methods)",
      fr: "Dans la méthode « Avant la date prévue », qu'est-ce qui déclenche la réservation automatique ? (Odoo Learn — Méthodes de réservation)",
    },
    correct: {
      en: "The number of days before the scheduled delivery date",
      fr: "Le nombre de jours avant la date de livraison prévue",
    },
    distractors: [
      { en: "The stock quantity", fr: "La quantité en stock" },
      { en: "The invoice validation", fr: "La validation de la facture" },
      { en: "The customer delivery address", fr: "L'adresse de livraison du client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reservation Methods): The number of days before the scheduled delivery date",
      fr: "Source Odoo Learn (Méthodes de réservation) : Le nombre de jours avant la date de livraison prévue",
    },
  }),
  complexQ({
    id: "inv-096",
    module: "inventory",
    text: {
      en: "What do removal strategies determine? (Odoo Learn — Removal Strategies Overview)",
      fr: "Que déterminent les stratégies de suppression ? (Odoo Learn — Présentation des stratégies de suppression)",
    },
    correct: {
      en: "Which items should be picked or removed from stock, and when",
      fr: "Quels articles doivent être prélevés ou retirés du stock, et quand",
    },
    distractors: [
      { en: "Which order gets the available stock first", fr: "Quelle commande obtient le stock disponible en premier" },
      { en: "Where items should be stored when removing them from stock", fr: "Où les articles doivent être stockés lors de leur retrait du stock" },
      { en: "How to use the most packages to fulfill an order", fr: "Comment utiliser le plus grand nombre de colis pour exécuter une commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Removal Strategies Overview): Which items should be picked or removed from stock, and when",
      fr: "Source Odoo Learn (Aperçu des stratégies de suppression) : Quels articles doivent être récupérés ou retirés du stock, et quand",
    },
  }),
  complexQ({
    id: "inv-097",
    module: "inventory",
    text: {
      en: "What removal strategy is best for goods that are considered perishable? (Odoo Learn — Removal Strategies Overview)",
      fr: "Quelle stratégie de retrait est la meilleure pour les marchandises considérées comme périssables ? (Odoo Learn — Présentation des stratégies de suppression)",
    },
    correct: {
      en: "First Expired First Out (FEFO)",
      fr: "Premier expiré, premier sorti (FEFO)",
    },
    distractors: [
      { en: "First In First Out (FIFO)", fr: "Premier entré, premier sorti (FIFO)" },
      { en: "Least Packages", fr: "Moins de paquets" },
      { en: "Closest Location", fr: "Emplacement le plus proche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Removal Strategies Overview): First Expired First Out (FEFO)",
      fr: "Source Odoo Learn (Aperçu des stratégies de suppression) : Premier expiré, premier sorti (FEFO)",
    },
  }),
  complexQ({
    id: "inv-098",
    module: "inventory",
    text: {
      en: "What removal strategy would I use to ensure that I open the fewest number of packages when fulfilling an order? (Odoo Learn — Removal Strategies Overview)",
      fr: "Quelle stratégie de suppression devrais-je utiliser pour m'assurer d'ouvrir le moins de colis possible lors du traitement d'une commande ? (Odoo Learn — Présentation des stratégies de suppression)",
    },
    correct: {
      en: "Least Packages",
      fr: "Moins de paquets",
    },
    distractors: [
      { en: "Fewest Packages", fr: "Moins de forfaits" },
      { en: "Closest Location", fr: "Emplacement le plus proche" },
      { en: "First In First Out (FIFO)", fr: "Premier entré, premier sorti (FIFO)" },
    ],
    explanation: {
      en: "Source Odoo Learn (Removal Strategies Overview): Least Packages",
      fr: "Source Odoo Learn (Aperçu des stratégies de suppression) : Moins de paquets",
    },
  }),
  complexQ({
    id: "inv-099",
    module: "inventory",
    text: {
      en: "A sales order for a specific product has been confirmed. How can you ensure you deliver the first product that enters your stock? (Odoo Learn — FIFO & LIFO Removal Strategy)",
      fr: "Une commande client pour un produit spécifique a été confirmée. Comment pouvez-vous vous assurer de livrer le premier produit qui entre dans votre stock ? (Odoo Learn — Stratégie de suppression FIFO et LIFO)",
    },
    correct: {
      en: "By selecting FIFO as your Removal Strategy",
      fr: "En sélectionnant FIFO comme stratégie de suppression",
    },
    distractors: [
      { en: "By selecting LIFO as your Removal Strategy", fr: "En sélectionnant LIFO comme stratégie de suppression" },
      { en: "By selecting FEFO as your Put Away Strategy", fr: "En sélectionnant FEFO comme stratégie de rangement" },
      { en: "By selecting LIFO as your Put Away Strategy", fr: "En sélectionnant LIFO comme stratégie de rangement" },
    ],
    explanation: {
      en: "Source Odoo Learn (FIFO & LIFO Removal Strategy): By selecting FIFO as your Removal Strategy",
      fr: "Source Odoo Learn (Stratégie de suppression FIFO et LIFO) : en sélectionnant FIFO comme stratégie de suppression",
    },
  }),
  complexQ({
    id: "inv-100",
    module: "inventory",
    text: {
      en: "Which Inventory settings must be enabled in order to use the LIFO Force Removal Strategy on the product category? (Odoo Learn — FIFO & LIFO Removal Strategy)",
      fr: "Quels paramètres d'inventaire doivent être activés pour pouvoir utiliser la stratégie de suppression forcée LIFO sur la catégorie de produits ? (Odoo Learn — Stratégie de suppression FIFO et LIFO)",
    },
    correct: {
      en: "Lots/Serial Numbers",
      fr: "Numéros de lots/séries",
    },
    distractors: [
      { en: "Expiration Dates and Landed Costs", fr: "Dates d’expiration et coûts au débarquement" },
      { en: "Multi-Warehouses, Multi-Step Routes, and Storage Locations", fr: "Entrepôts multiples, itinéraires à plusieurs étapes et emplacements de stockage" },
      { en: "Storage Locations and Multi-Step Routes", fr: "Emplacements de stockage et itinéraires en plusieurs étapes" },
    ],
    explanation: {
      en: "Source Odoo Learn (FIFO & LIFO Removal Strategy): Lots/Serial Numbers",
      fr: "Source Odoo Learn (Stratégie de suppression FIFO et LIFO) : lots/numéros de série",
    },
  }),
  complexQ({
    id: "inv-101",
    module: "inventory",
    text: {
      en: "How is the FIFO removal strategy assigned to a location in the Inventory app? (Odoo Learn — FIFO & LIFO Removal Strategy)",
      fr: "Comment la stratégie de suppression FIFO est-elle attribuée à un emplacement dans l'application Inventaire ? (Odoo Learn — Stratégie de suppression FIFO et LIFO)",
    },
    correct: {
      en: "By going to Configuration > Location > Removal Strategy",
      fr: "En allant dans Configuration > Localisation > Stratégie de suppression",
    },
    distractors: [
      { en: "By going to Warehouse > Location > Force Removal Strategy", fr: "En allant dans Entrepôt > Localisation > Stratégie de suppression forcée" },
      { en: "By going to Warehouse > Shelf F > Removal Strategy", fr: "En allant dans Entrepôt > Étagère F > Stratégie de retrait" },
      { en: "By going to Configuration > Product Category > Removal Strategy", fr: "En allant dans Configuration > Catégorie de produit > Stratégie de suppression" },
    ],
    explanation: {
      en: "Source Odoo Learn (FIFO & LIFO Removal Strategy): By going to Configuration > Location > Removal Strategy",
      fr: "Source Odoo Learn (Stratégie de suppression FIFO & LIFO) : En allant dans Configuration > Localisation > Stratégie de suppression",
    },
  }),
  complexQ({
    id: "inv-102",
    module: "inventory",
    text: {
      en: "Which Inventory setting(s) are required to use the FEFO removal strategy? (Odoo Learn — FEFO Removal Strategy)",
      fr: "Quel(s) paramètre(s) d'inventaire sont requis pour utiliser la stratégie de suppression FEFO ? (Odoo Learn — Stratégie de suppression de FEFO)",
    },
    correct: {
      en: "Expiration Date, Lots and Serial Numbers",
      fr: "Date d'expiration, lots et numéros de série",
    },
    distractors: [
      { en: "Lots and Serial Numbers, only", fr: "Lots et numéros de série uniquement" },
      { en: "Lots and Serial Numbers, Product Categories", fr: "Lots et numéros de série, catégories de produits" },
      { en: "Storage Locations, only", fr: "Emplacements de stockage, uniquement" },
    ],
    explanation: {
      en: "Source Odoo Learn (FEFO Removal Strategy): Expiration Date, Lots and Serial Numbers",
      fr: "Source Odoo Learn (Stratégie de suppression FEFO) : date d'expiration, lots et numéros de série",
    },
  }),
  complexQ({
    id: "inv-103",
    module: "inventory",
    text: {
      en: "The FEFO removal strategy is based on which date field in Odoo? (Odoo Learn — FEFO Removal Strategy)",
      fr: "La stratégie de suppression de FEFO est basée sur quel champ de date dans Odoo ? (Odoo Learn — Stratégie de suppression de FEFO)",
    },
    correct: {
      en: "Removal Date",
      fr: "Date de retrait",
    },
    distractors: [
      { en: "Expiry Date", fr: "Date d'expiration" },
      { en: "Best Before Date", fr: "Date de péremption" },
      { en: "Alert Date", fr: "Date d'alerte" },
    ],
    explanation: {
      en: "Source Odoo Learn (FEFO Removal Strategy): Removal Date",
      fr: "Source Odoo Learn (Stratégie de suppression FEFO) : Date de suppression",
    },
  }),
  complexQ({
    id: "inv-104",
    module: "inventory",
    text: {
      en: "You have the following products and lot numbers in stock: LOT 1 (Removal Date: November 2, On-hand Qty: 20) and LOT 2 (Removal Date: April 13, On-hand Qty: 13) How many products from each lot are picked for an order of 20 products, placed on January 1 of the same year? (Odoo Learn — FEFO Removal Strategy)",
      fr: "Vous avez en stock les produits et numéros de lot suivants : LOT 1 (Date de retrait : 2 novembre, Quantité en stock : 20) et LOT 2 (Date de retrait : 13 avril, Quantité en stock : 13) Combien de produits de chaque lot sont prélevés pour une commande de 20 produits, passée le 1er janvier de la même année ? (Odoo Learn — Stratégie de suppression de FEFO)",
    },
    correct: {
      en: "Pick 7 products from LOT 1, and 13 products from LOT 2",
      fr: "Choisissez 7 produits du LOT 1 et 13 produits du LOT 2",
    },
    distractors: [
      { en: "Pick 10 products from LOT 1, and 10 products from LOT 2", fr: "Choisissez 10 produits du LOT 1 et 10 produits du LOT 2" },
      { en: "Pick 20 products from LOT 1", fr: "Choisissez 20 produits du LOT 1" },
      { en: "Pick 13 products from LOT 1, and 7 products from LOT 2", fr: "Choisissez 13 produits du LOT 1 et 7 produits du LOT 2" },
    ],
    explanation: {
      en: "Source Odoo Learn (FEFO Removal Strategy): Pick 7 products from LOT 1, and 13 products from LOT 2",
      fr: "Source Odoo Learn (Stratégie de suppression FEFO) : Choisissez 7 produits du LOT 1 et 13 produits du LOT 2",
    },
  }),
  complexQ({
    id: "inv-105",
    module: "inventory",
    text: {
      en: "Which Inventory setting(s) are required to use the Closest Location removal strategy? (Odoo Learn — Closest Location Removal Strategy)",
      fr: "Quels paramètres d'inventaire sont requis pour utiliser la stratégie de suppression de l'emplacement le plus proche ? (Odoo Learn — Stratégie de suppression de l'emplacement le plus proche)",
    },
    correct: {
      en: "Storage Locations, Multi-Step Routes",
      fr: "Emplacements de stockage, itinéraires en plusieurs étapes",
    },
    distractors: [
      { en: "Lots and Serial Numbers, Multi-Step Routes", fr: "Lots et numéros de série, itinéraires en plusieurs étapes" },
      { en: "Storage Locations", fr: "Emplacements de stockage" },
      { en: "Product Categories", fr: "Catégories de produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Closest Location Removal Strategy): Storage Locations, Multi-Step Routes",
      fr: "Source Odoo Learn (Stratégie de suppression de l'emplacement le plus proche) : emplacements de stockage, itinéraires en plusieurs étapes",
    },
  }),
  complexQ({
    id: "inv-106",
    module: "inventory",
    text: {
      en: "My product, ‘Strawberry ice cream’ is stored in ‘Freezer A’ on ‘Freezer A/Rack 1’ and ‘Freezer A/Rack 2.’ How do you set up the Closest Location removal strategy for the ice cream? (Odoo Learn — Closest Location Removal Strategy)",
      fr: "Mon produit, « Glace à la fraise », est stocké dans le « Congélateur A » sur le « Congélateur A/Rack 1 » et le « Congélateur A/Rack 2 ». Comment configurer la stratégie de suppression de l'emplacement le plus proche pour la crème glacée ? (Odoo Learn — Stratégie de suppression de l'emplacement le plus proche)",
    },
    correct: {
      en: "Go to Inventory app > Configuration > Locations > ‘Freezer A,’ and set the ‘Removal Strategy’ to ‘Closest Location’",
      fr: "Accédez à l'application Inventaire > Configuration > Emplacements > « Congélateur A » et définissez la « Stratégie de suppression » sur « Emplacement le plus proche ».",
    },
    distractors: [
      { en: "Go to Inventory app > Configuration > Settings, and set the ‘Removal Strategy’ field to ‘Closest Location’", fr: "Accédez à l'application Inventaire > Configuration > Paramètres et définissez le champ « Stratégie de suppression » sur « Emplacement le plus proche »." },
      { en: "Go to Inventory app > Configuration > Locations. In ‘Rack 1’ and ‘Rack 2,’ set the ‘Force Removal Strategy’ to ‘Closest Location’", fr: "Accédez à l’application Inventaire > Configuration > Emplacements. Dans « Rack 1 » et « Rack 2 », définissez la « Stratégie de suppression forcée » sur « Emplacement le plus proche »." },
      { en: "In Inventory app > Configuration > ‘Freezer A/Rack 1,’ set the ‘Force Removal Strategy’ to ‘Closest Location’", fr: "Dans l'application Inventaire > Configuration > « Congélateur A/Rack 1 », définissez la « Stratégie de retrait forcé » sur « Emplacement le plus proche »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Closest Location Removal Strategy): Go to Inventory app > Configuration > Locations > ‘Freezer A,’ and set the ‘Removal Strategy’ to ‘Closest Location’",
      fr: "Source Odoo Learn (Stratégie de suppression de l'emplacement le plus proche) : accédez à l'application Inventaire > Configuration > Emplacements > « Congélateur A » et définissez la « Stratégie de suppression » sur « Emplacement le plus proche ».",
    },
  }),
  complexQ({
    id: "inv-107",
    module: "inventory",
    text: {
      en: "I have two locations, Shelf J and Shelf Z. Using the Closest Location removal method, how should I rename Shelf Z, so products are picked from this location first? (Odoo Learn — Closest Location Removal Strategy)",
      fr: "J'ai deux emplacements, l'étagère J et l'étagère Z. En utilisant la méthode de suppression de l'emplacement le plus proche, comment dois-je renommer l'étagère Z afin que les produits soient prélevés en premier à cet emplacement ? (Odoo Learn — Stratégie de suppression de l'emplacement le plus proche)",
    },
    correct: {
      en: "Rename ‘Shelf Z’ to ‘Shelf A.’",
      fr: "Renommez « Étagère Z » en « Étagère A ».",
    },
    distractors: [
      { en: "Rename ‘Shelf Z’ to ‘Vault A.’", fr: "Renommez « Étagère Z » en « Vault A »." },
      { en: "Rename ‘Shelf Z’ to ‘Shelf K.’", fr: "Renommez « Étagère Z » en « Étagère K »." },
      { en: "Rename ‘Shelf Z’ to ‘Shelf Y.’", fr: "Renommez « Étagère Z » en « Étagère Y »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Closest Location Removal Strategy): Rename ‘Shelf Z’ to ‘Shelf A.’",
      fr: "Source Odoo Learn (Stratégie de suppression de l'emplacement le plus proche) : Renommez « Étagère Z » en « Étagère A ».",
    },
  }),
  complexQ({
    id: "inv-108",
    module: "inventory",
    text: {
      en: "In order to use the Least Packages removal strategy on a product category, you'll need to activate the following Inventory setting(s)... (Odoo Learn — Least Packages Removal Strategy)",
      fr: "Afin d'utiliser la stratégie de suppression des moindres packages sur une catégorie de produits, vous devrez activer le(s) paramètre(s) d'inventaire suivant... (Odoo Learn — Stratégie de suppression du moindre paquet)",
    },
    correct: {
      en: "Packages, only",
      fr: "Forfaits, uniquement",
    },
    distractors: [
      { en: "Storage Locations, Multi-Step Routes", fr: "Emplacements de stockage, itinéraires en plusieurs étapes" },
      { en: "Product Categories, Multi-Step Routes", fr: "Catégories de produits, itinéraires en plusieurs étapes" },
      { en: "Packages, Storage Locations, Multi-Step Routes", fr: "Colis, emplacements de stockage, itinéraires en plusieurs étapes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Least Packages Removal Strategy): Packages, only",
      fr: "Source Odoo Learn (Stratégie de suppression des moindres packages) : packages, uniquement",
    },
  }),
  complexQ({
    id: "inv-109",
    module: "inventory",
    text: {
      en: "In the tutorial, after confirming the sales order and clicking the hamburger icon, why was the ‘Destination Package’ for the order of 100 chocolate bars pre-populated? (Odoo Learn — Least Packages Removal Strategy)",
      fr: "Dans le tutoriel, après avoir confirmé la commande client et cliqué sur l'icône hamburger, pourquoi le « Forfait Destination » pour la commande de 100 tablettes de chocolat a-t-il été pré-rempli ? (Odoo Learn — Stratégie de suppression du moindre paquet)",
    },
    correct: {
      en: "The ‘Source Package’ contained the exact quantities for the order, so it was used again as the ‘Destination Package’",
      fr: "Le « Package source » contenait les quantités exactes pour la commande, il a donc été utilisé à nouveau comme « Package de destination »",
    },
    distractors: [
      { en: "Someone set the ‘Destination Package’ in advance", fr: "Quelqu'un a défini le « Forfait de destination » à l'avance" },
      { en: "The ‘Destination Package’  is set to copy the ‘Source Package’ field by default", fr: "Le « Package de destination » est configuré pour copier le champ « Package source » par défaut" },
      { en: "Someone prepackaged the chocolate bars for us", fr: "Quelqu'un a préemballé les barres de chocolat pour nous" },
    ],
    explanation: {
      en: "Source Odoo Learn (Least Packages Removal Strategy): The ‘Source Package’ contained the exact quantities for the order, so it was used again as the ‘Destination Package’",
      fr: "Source Odoo Learn (Stratégie de suppression des moindres packages) : le « Package source » contenait les quantités exactes pour la commande, il a donc été utilisé à nouveau comme « Package de destination »",
    },
  }),
  complexQ({
    id: "inv-110",
    module: "inventory",
    text: {
      en: "Your product, ‘iPhone charger,’ is stored in packages of 15, 25, and 50 units. Using the Least Packages removal strategy, which of the following package(s) would be selected to fulfill an order of 33 iPhone chargers? (Odoo Learn — Least Packages Removal Strategy)",
      fr: "Votre produit, « chargeur iPhone », est stocké en paquets de 15, 25 et 50 unités. En utilisant la stratégie de suppression des moindres packages, lequel des packages suivants serait sélectionné pour honorer une commande de 33 chargeurs pour iPhone ? (Odoo Learn — Stratégie de suppression du moindre paquet)",
    },
    correct: {
      en: "Pick 33 units from the 50-pack",
      fr: "Choisissez 33 unités dans le pack de 50",
    },
    distractors: [
      { en: "Pick 25 units from the 25-pack, then 8 units from the 15-pack", fr: "Choisissez 25 unités dans le pack de 25, puis 8 unités dans le pack de 15" },
      { en: "Pick 25 units from the 25-pack, then 8 units from the 50-pack", fr: "Choisissez 25 unités dans le pack de 25, puis 8 unités dans le pack de 50" },
      { en: "Pick 3 units from the 25-pack, and 2 packages of the 15-pack", fr: "Choisissez 3 unités du pack de 25 et 2 paquets du pack de 15" },
    ],
    explanation: {
      en: "Source Odoo Learn (Least Packages Removal Strategy): Pick 33 units from the 50-pack",
      fr: "Source Odoo Learn (Stratégie de suppression du moindre paquet) : choisissez 33 unités dans le pack de 50",
    },
  }),
  complexQ({
    id: "inv-111",
    module: "inventory",
    text: {
      en: "What is the main difference between units and packagings? (Odoo Learn — Packaging)",
      fr: "Quelle est la principale différence entre les unités et les emballages ? (Odoo Learn — Conditionnement)",
    },
    correct: {
      en: "Units refer to individual product items, while packagings are different quantities of units of a product packed together and counted as an item.",
      fr: "Les unités font référence à des articles de produit individuels, tandis que les emballages sont différentes quantités d'unités d'un produit emballées ensemble et comptées comme un article.",
    },
    distractors: [
      { en: "Units are reusable containers, while packagings are single-use items.", fr: "Les unités sont des contenants réutilisables, tandis que les emballages sont des articles à usage unique." },
      { en: "Units and packagings are interchangeable terms for tracking inventory.", fr: "Les unités et les emballages sont des termes interchangeables pour le suivi des stocks." },
      { en: "Units are product categories, while packagings define shipping methods.", fr: "Les unités sont des catégories de produits, tandis que les emballages définissent les méthodes d'expédition." },
    ],
    explanation: {
      en: "Source Odoo Learn (Packaging): Units refer to individual product items, while packagings are different quantities of units of a product packed together and counted as an item.",
      fr: "Source Odoo Learn (Emballage) : Les unités font référence à des articles de produit individuels, tandis que les emballages sont différentes quantités d'unités d'un produit emballées ensemble et comptées comme un article.",
    },
  }),
  complexQ({
    id: "inv-112",
    module: "inventory",
    text: {
      en: "If I am selling a packaging that is one-quarter of a unit, how does Odoo calculate the packaging’s sales price? (Odoo Learn — Packaging)",
      fr: "Si je vends un emballage d’un quart d’unité, comment Odoo calcule-t-il le prix de vente de l’emballage ? (Odoo Learn — Conditionnement)",
    },
    correct: {
      en: "The product’s sales price is divided by 4.",
      fr: "Le prix de vente du produit est divisé par 4.",
    },
    distractors: [
      { en: "The product’s sales price is multiplied by 4.", fr: "Le prix de vente du produit est multiplié par 4." },
      { en: "It subtracts 4 from the product’s sales price.", fr: "Il soustrait 4 au prix de vente du produit." },
      { en: "The price does not change.", fr: "Le prix ne change pas." },
    ],
    explanation: {
      en: "Source Odoo Learn (Packaging): The product’s sales price is divided by 4.",
      fr: "Source Odoo Learn (Packaging) : Le prix de vente du produit est divisé par 4.",
    },
  }),
  complexQ({
    id: "inv-113",
    module: "inventory",
    text: {
      en: "On a sales order, how do I specify the packaging of a product the customer wants to purchase? (Odoo Learn — Packaging)",
      fr: "Sur une commande client, comment préciser le conditionnement d'un produit que le client souhaite acheter ? (Odoo Learn — Conditionnement)",
    },
    correct: {
      en: "Update the ‘Unit’ field to the packaging I want to use.",
      fr: "Mettez à jour le champ « Unité » avec l'emballage que je souhaite utiliser.",
    },
    distractors: [
      { en: "Update the ‘Packaging’ field to the packaging I want to use.", fr: "Mettez à jour le champ « Emballage » avec l'emballage que je souhaite utiliser." },
      { en: "Change the ‘Quantity’ to match the packaging size.", fr: "Modifiez la « Quantité » pour qu'elle corresponde à la taille de l'emballage." },
      { en: "This isn’t possible in Odoo.", fr: "Ce n’est pas possible dans Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Packaging): Update the ‘Unit’ field to the packaging I want to use.",
      fr: "Source Odoo Learn (Emballage) : Mettez à jour le champ « Unité » avec l'emballage que je souhaite utiliser.",
    },
  }),
  complexQ({
    id: "inv-114",
    module: "inventory",
    text: {
      en: "What is the difference between Packages and Packagings? (Odoo Learn — Packages)",
      fr: "Quelle est la différence entre les colis et les emballages ? (Odoo Learn — Forfaits)",
    },
    correct: {
      en: "Packaging is pre-set groupings of a single product, packages are indeterminate containers of multiple products.",
      fr: "Les emballages sont des regroupements prédéfinis d'un seul produit, les emballages sont des conteneurs indéterminés de plusieurs produits.",
    },
    distractors: [
      { en: "There is no difference, “package”, “packaging”, and “pack” can be used in Odoo interchangeably.", fr: "Il n'y a aucune différence, « package », « packaging » et « pack » peuvent être utilisés de manière interchangeable dans Odoo." },
      { en: "Packages can not be changed, packaging can.", fr: "Les colis ne peuvent pas être modifiés, les emballages le peuvent." },
      { en: "Packages are for large objects that require specific equipment to move them. Packaging can be of any size.", fr: "Les colis sont destinés aux objets volumineux qui nécessitent un équipement spécifique pour les déplacer. L'emballage peut être de n'importe quelle taille." },
    ],
    explanation: {
      en: "Source Odoo Learn (Packages): Packaging is pre-set groupings of a single product, packages are indeterminate containers of multiple products.",
      fr: "Source Odoo Learn (Packages) : les emballages sont des regroupements prédéfinis d'un seul produit, les packages sont des conteneurs indéterminés de plusieurs produits.",
    },
  }),
  complexQ({
    id: "inv-115",
    module: "inventory",
    text: {
      en: "Can I put products from the same receipt in different packages? (Odoo Learn — Packages)",
      fr: "Puis-je mettre les produits d’une même réception dans des emballages différents ? (Odoo Learn — Forfaits)",
    },
    correct: {
      en: "Yes, I can use the list button on each product to specify the package and quantity of products in each.",
      fr: "Oui, je peux utiliser le bouton de liste sur chaque produit pour spécifier le package et la quantité de produits dans chacun.",
    },
    distractors: [
      { en: "No, but I can use an internal transfer after the receipt to move them to separate packages.", fr: "Non, mais je peux utiliser un virement interne après réception pour les déplacer vers des colis séparés." },
      { en: "No, packages must reflect the state of a receipt at all times in the warehouse.", fr: "Non, les colis doivent refléter à tout moment l’état d’une réception dans l’entrepôt." },
      { en: "Yes, but I will need to manually name every package.", fr: "Oui, mais je devrai nommer manuellement chaque package." },
    ],
    explanation: {
      en: "Source Odoo Learn (Packages): Yes, I can use the list button on each product to specify the package and quantity of products in each.",
      fr: "Source Odoo Learn (Packages) : Oui, je peux utiliser le bouton de liste sur chaque produit pour spécifier le package et la quantité de produits dans chacun.",
    },
  }),
  complexQ({
    id: "inv-116",
    module: "inventory",
    text: {
      en: "How can I put products in a package outside of a receipt? (Odoo Learn — Packages)",
      fr: "Comment puis-je mettre des produits dans un colis sans ticket de caisse ? (Odoo Learn — Forfaits)",
    },
    correct: {
      en: "I can create an internal transfer and use the “Put in Pack” button.",
      fr: "Je peux créer un virement interne et utiliser le bouton « Mettre en Pack ».",
    },
    distractors: [
      { en: "I can’t. Products can only be put in packages in a receipt or delivery order.", fr: "Je ne peux pas. Les produits ne peuvent être mis en colis que dans un bon de réception ou de livraison." },
      { en: "I can click “New” on the Packages page and add any products I want from that form.", fr: "Je peux cliquer sur « Nouveau » sur la page Packages et ajouter tous les produits que je souhaite à partir de ce formulaire." },
      { en: "I can edit the Product forms to specify the package.", fr: "Je peux modifier les formulaires du produit pour spécifier le package." },
    ],
    explanation: {
      en: "Source Odoo Learn (Packages): I can create an internal transfer and use the “Put in Pack” button.",
      fr: "Source Odoo Learn (Packages) : Je peux créer un transfert interne et utiliser le bouton « Mettre en Pack ».",
    },
  }),
  complexQ({
    id: "inv-117",
    module: "inventory",
    text: {
      en: "What should be enabled to ship multi-box packages? (Odoo Learn — Ship Multi-Box Packages)",
      fr: "Que faut-il activer pour expédier des colis multi-box ? (Odoo Learn — Expédier des colis multi-boîtes)",
    },
    correct: {
      en: "Packages",
      fr: "Forfaits",
    },
    distractors: [
      { en: "Batch, Wave, and Cluster Transfers", fr: "Transferts par lots, par vagues et par cluster" },
      { en: "Units of Measure & Packagings", fr: "Unités de mesure et emballages" },
      { en: "Storage Locations & Mutli-Step Routes", fr: "Emplacements de stockage et itinéraires en plusieurs étapes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Ship Multi-Box Packages): Packages",
      fr: "Source Odoo Learn (Expédier des packages multi-boîtes) : Forfaits",
    },
  }),
  complexQ({
    id: "inv-118",
    module: "inventory",
    text: {
      en: "How do I see the child packages in a parent package? (Odoo Learn — Ship Multi-Box Packages)",
      fr: "Comment puis-je voir les packages enfants dans un package parent ? (Odoo Learn — Expédier des colis multi-boîtes)",
    },
    correct: {
      en: "Click the ‘Packages’ smart button on an operation and view the parent package details",
      fr: "Cliquez sur le bouton intelligent « Packages » sur une opération et affichez les détails du package parent.",
    },
    distractors: [
      { en: "From the ‘Units & Packagings’ page", fr: "Depuis la page « Unités et conditionnements »" },
      { en: "On the ‘Package Types’ page", fr: "Sur la page « Types de forfaits »" },
      { en: "On the ‘Stock’ report", fr: "Sur le rapport « Stock »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Ship Multi-Box Packages): Click the ‘Packages’ smart button on an operation and view the parent package details",
      fr: "Source Odoo Learn (Expédier des packages multi-boîtes) : cliquez sur le bouton intelligent « Packages » sur une opération et affichez les détails du package parent",
    },
  }),
  complexQ({
    id: "inv-119",
    module: "inventory",
    text: {
      en: "How do I create packages within a package? (Odoo Learn — Ship Multi-Box Packages)",
      fr: "Comment créer des packages dans un package ? (Odoo Learn — Expédier des colis multi-boîtes)",
    },
    correct: {
      en: "Click the ‘Details’ link for each product line, package into packages, then click ‘Put in Pack’ to add to a parent package",
      fr: "Cliquez sur le lien « Détails » pour chaque gamme de produits, regroupez-les en packages, puis cliquez sur « Mettre dans le pack » pour ajouter à un package parent.",
    },
    distractors: [
      { en: "Open the ‘Packages’ page, open a package, and add products to it", fr: "Ouvrez la page « Packages », ouvrez un package et ajoutez-y des produits" },
      { en: "From the ‘Units & Packagings’ page", fr: "Depuis la page « Unités et conditionnements »" },
      { en: "From the ‘Product Variants’ page", fr: "Depuis la page « Variantes de produits »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Ship Multi-Box Packages): Click the ‘Details’ link for each product line, package into packages, then click ‘Put in Pack’ to add to a parent package",
      fr: "Source Odoo Learn (Expédier des packages multi-boîtes) : cliquez sur le lien « Détails » pour chaque ligne de produits, regroupez-les en packages, puis cliquez sur « Mettre dans le pack » pour ajouter à un package parent.",
    },
  }),
  complexQ({
    id: "inv-120",
    module: "inventory",
    text: {
      en: "What should be enabled to ship multiple packages per delivery order? (Odoo Learn — Multi-Package Shipments)",
      fr: "Que faut-il activer pour expédier plusieurs colis par bon de livraison ? (Odoo Learn — Envois multi-colis)",
    },
    correct: {
      en: "Packages",
      fr: "Forfaits",
    },
    distractors: [
      { en: "Batch, Wave, and Cluster Transfers", fr: "Transferts par lots, par vagues et par cluster" },
      { en: "Units of Measure & Packagings", fr: "Unités de mesure et emballages" },
      { en: "Storage Locations & Mutli-Step Routes", fr: "Emplacements de stockage et itinéraires en plusieurs étapes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Package Shipments): Packages",
      fr: "Source Odoo Learn (Envois multi-colis) : Forfaits",
    },
  }),
  complexQ({
    id: "inv-121",
    module: "inventory",
    text: {
      en: "How do I assign multiple products to a package in a delivery order? (Odoo Learn — Multi-Package Shipments)",
      fr: "Comment attribuer plusieurs produits à un colis dans un bon de livraison ? (Odoo Learn — Envois multi-colis)",
    },
    correct: {
      en: "Specify the same ‘Destination Package’ for each product in the package",
      fr: "Spécifiez le même « Package de destination » pour chaque produit du package",
    },
    distractors: [
      { en: "In the ‘Packaging’ field on the product line", fr: "Dans le champ « Emballage » de la ligne de produits" },
      { en: "Updating the ‘Packages’ field directly on the delivery order product line", fr: "Mise à jour du champ « Colis » directement sur la ligne produit du bon de livraison" },
      { en: "Changing the ‘Quantity’ fulfilled for a product", fr: "Modification de la « Quantité » remplie pour un produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Package Shipments): Specify the same ‘Destination Package’ for each product in the package",
      fr: "Source Odoo Learn (envois multi-colis) : spécifiez le même « colis de destination » pour chaque produit du colis",
    },
  }),
  complexQ({
    id: "inv-122",
    module: "inventory",
    text: {
      en: "What happens when a backorder is created? (Odoo Learn — Multi-Package Shipments)",
      fr: "Que se passe-t-il lorsqu'une commande en souffrance est créée ? (Odoo Learn — Envois multi-colis)",
    },
    correct: {
      en: "The original delivery order is completed, products can be delivered to the customer, and the backorder is created and linked in the chatter of the original delivery order. The backorder can be accessed from the ‘Delivery Orders’ card on the Inventory Overview page.",
      fr: "Le bon de livraison d'origine est terminé, les produits peuvent être livrés au client et la commande en souffrance est créée et liée dans le bavardage du bon de livraison d'origine. La commande en souffrance est accessible à partir de la fiche « Commandes de livraison » sur la page Aperçu de l'inventaire.",
    },
    distractors: [
      { en: "Nothing happens", fr: "Rien ne se passe" },
      { en: "The ‘responsible’ user for the products is notified that they are out of stock.", fr: "L’utilisateur « responsable » des produits est informé de la rupture de stock." },
      { en: "The original packages can’t be shipped; they have to wait until all items are back in stock.", fr: "Les colis originaux ne peuvent pas être expédiés ; ils doivent attendre que tous les articles soient de nouveau en stock." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Package Shipments): The original delivery order is completed, products can be delivered to the customer, and the backorder is created and linked in the chatter of the original delivery order. The backorder can be accessed from the ‘Delivery Orders’ card on the Inventory Overview page.",
      fr: "Source Odoo Learn (expéditions multi-colis) : le bon de livraison d'origine est terminé, les produits peuvent être livrés au client et la commande en souffrance est créée et liée dans le bavardage du bon de livraison d'origine. La commande en souffrance est accessible à partir de la fiche « Commandes de livraison » sur la page Aperçu de l'inventaire.",
    },
  }),
  complexQ({
    id: "inv-123",
    module: "inventory",
    text: {
      en: "Which of the following are selectable options for the ‘Picking Policy’ setting in the ‘Inventory’ app? (Odoo Learn — Shipping Policy)",
      fr: "Parmi les options suivantes, lesquelles sont sélectionnables pour le paramètre « Politique de prélèvement » dans l'application « Inventaire » ? (Odoo Learn — Politique d'expédition)",
    },
    correct: {
      en: "A and B",
      fr: "A et B",
    },
    distractors: [
      { en: "‘Ship products as soon as available, with back orders’", fr: "« Expédier les produits dès qu'ils sont disponibles, avec commandes en souffrance »" },
      { en: "‘Ship all products at once’", fr: "« Expédier tous les produits en même temps »" },
      { en: "‘Only ship currently available products’", fr: "« Expédier uniquement les produits actuellement disponibles »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping Policy): A and B",
      fr: "Source Odoo Learn (Politique d'expédition) : A et B",
    },
  }),
  complexQ({
    id: "inv-124",
    module: "inventory",
    text: {
      en: "What does it mean when the ‘Validate’ button on a delivery order appears in gray? (Odoo Learn — Shipping Policy)",
      fr: "Qu'est-ce que cela signifie lorsque le bouton « Valider » d'un bon de livraison apparaît en gris ? (Odoo Learn — Politique d'expédition)",
    },
    correct: {
      en: "The order is waiting for products to be available before it can be shipped",
      fr: "La commande attend que les produits soient disponibles avant de pouvoir être expédiée",
    },
    distractors: [
      { en: "All or part of the order is ready to ship", fr: "Tout ou partie de la commande est prête à être expédiée" },
      { en: "The order has been shipped", fr: "La commande a été expédiée" },
      { en: "The ‘Validate’ button never appears in purple", fr: "Le bouton « Valider » n’apparaît jamais en violet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping Policy): The order is waiting for products to be available before it can be shipped",
      fr: "Source Odoo Learn (Politique d'expédition) : La commande attend que les produits soient disponibles avant de pouvoir être expédiée",
    },
  }),
  complexQ({
    id: "inv-125",
    module: "inventory",
    text: {
      en: "What does it mean when the ‘Validate’ button on a delivery order appears in purple? (Odoo Learn — Shipping Policy)",
      fr: "Qu'est-ce que cela signifie lorsque le bouton « Valider » d'un bon de livraison apparaît en violet ? (Odoo Learn — Politique d'expédition)",
    },
    correct: {
      en: "All or part of the order is ready to ship",
      fr: "Tout ou partie de la commande est prête à être expédiée",
    },
    distractors: [
      { en: "The order has been shipped", fr: "La commande a été expédiée" },
      { en: "The order is waiting for products to be available before it can be shipped", fr: "La commande attend que les produits soient disponibles avant de pouvoir être expédiée" },
      { en: "The ‘Validate’ button never appears in purple", fr: "Le bouton « Valider » n’apparaît jamais en violet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping Policy): All or part of the order is ready to ship",
      fr: "Source Odoo Learn (Politique d'expédition) : Tout ou partie de la commande est prête à être expédiée",
    },
  }),
  complexQ({
    id: "inv-126",
    module: "inventory",
    text: {
      en: "Which default operation type does Odoo use to process return orders? (Odoo Learn — Custom Returns Operation)",
      fr: "Quel type d'opération par défaut Odoo utilise-t-il pour traiter les commandes de retour ? (Odoo Learn — Opération de retours personnalisés)",
    },
    correct: {
      en: "‘Receipts’",
      fr: "'Recettes'",
    },
    distractors: [
      { en: "‘Delivery Orders’", fr: "« Bons de livraison »" },
      { en: "‘Repairs’", fr: "'Réparations'" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom Returns Operation): ‘Receipts’",
      fr: "Source Odoo Learn (Opération de retours personnalisés) : « Reçus »",
    },
  }),
  complexQ({
    id: "inv-127",
    module: "inventory",
    text: {
      en: "When creating a custom operation to process return orders, which operation type should be selected in the ‘Type of Operation’ field? (Odoo Learn — Custom Returns Operation)",
      fr: "Lors de la création d'une opération personnalisée pour traiter les ordres de retour, quel type d'opération doit être sélectionné dans le champ « Type d'opération » ? (Odoo Learn — Opération de retours personnalisés)",
    },
    correct: {
      en: "‘Receipt’",
      fr: "'Reçu'",
    },
    distractors: [
      { en: "‘Internal Transfer’", fr: "« Transfert interne »" },
      { en: "‘Repair’", fr: "'Réparation'" },
      { en: "The field should be left blank", fr: "Le champ doit rester vide" },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom Returns Operation): ‘Receipt’",
      fr: "Source Odoo Learn (Opération de retour personnalisé) : « Reçu »",
    },
  }),
  complexQ({
    id: "inv-128",
    module: "inventory",
    text: {
      en: "When configuring the ‘Delivery Orders’ operation to use the custom operation to process returns, in which field should the customer operation be selected? (Odoo Learn — Custom Returns Operation)",
      fr: "Lors de la configuration de l'opération « Bons de livraison » pour utiliser l'opération personnalisée pour traiter les retours, dans quel champ l'opération client doit-elle être sélectionnée ? (Odoo Learn — Opération de retours personnalisés)",
    },
    correct: {
      en: "‘Returns Type’",
      fr: "« Type de retour »",
    },
    distractors: [
      { en: "‘Type of Operation’", fr: "« Type d'opération »" },
      { en: "‘Sequence Prefix’", fr: "« Préfixe de séquence »" },
      { en: "‘Default returns location’", fr: "« Emplacement de retour par défaut »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Custom Returns Operation): ‘Returns Type’",
      fr: "Source Odoo Learn (Opération de retours personnalisés) : « Type de retours »",
    },
  }),
  complexQ({
    id: "inv-129",
    module: "inventory",
    text: {
      en: "Which statement best describes how many warehouse operation steps can be used with batch picking in Odoo? (Odoo Learn — Batch Transfers)",
      fr: "Quelle déclaration décrit le mieux le nombre d’étapes opérationnelles d’entrepôt qui peuvent être utilisées avec le prélèvement par lots dans Odoo ? (Odoo Learn — Transferts par lots)",
    },
    correct: {
      en: "I can use batch picking with one, two, or three steps; the second step is typically the sorting step",
      fr: "Je peux utiliser la préparation par lots en une, deux ou trois étapes ; la deuxième étape est généralement l'étape de tri",
    },
    distractors: [
      { en: "Batch picking only works with a single-step delivery flow", fr: "La préparation de lots ne fonctionne qu'avec un flux de livraison en une seule étape" },
      { en: "Must have exactly two steps (pick and ship)", fr: "Doit comporter exactement deux étapes (cueillir et expédier)" },
      { en: "Odoo requires a minimum of two steps for batch transfers", fr: "Odoo nécessite un minimum de deux étapes pour les transferts par lots" },
    ],
    explanation: {
      en: "Source Odoo Learn (Batch Transfers): I can use batch picking with one, two, or three steps; the second step is typically the sorting step",
      fr: "Source Odoo Learn (Transferts par lots) : Je peux utiliser le prélèvement par lots en une, deux ou trois étapes ; la deuxième étape est généralement l'étape de tri",
    },
  }),
  complexQ({
    id: "inv-130",
    module: "inventory",
    text: {
      en: "How does Odoo handle orders once ‘Automatic Batches’ is enabled for your Delivery Orders operation type? (Odoo Learn — Batch Transfers)",
      fr: "Comment Odoo gère-t-il les commandes une fois que les « Lots automatiques » sont activés pour votre type d'opération Commandes de livraison ? (Odoo Learn — Transferts par lots)",
    },
    correct: {
      en: "It automatically creates batches based on the grouping method you select (e.g., by Carrier, Contact, etc.)",
      fr: "Il crée automatiquement des lots en fonction de la méthode de regroupement que vous sélectionnez (par exemple, par transporteur, contact, etc.)",
    },
    distractors: [
      { en: "It ignores any grouping settings and assigns each order to its own batch", fr: "Il ignore les paramètres de regroupement et attribue chaque commande à son propre lot" },
      { en: "It merges all orders into a single batch, regardless of any configuration", fr: "Il fusionne toutes les commandes en un seul lot, quelle que soit la configuration" },
      { en: "It disables manual assignment of orders to batches entirely", fr: "Il désactive entièrement l’affectation manuelle des commandes aux lots" },
    ],
    explanation: {
      en: "Source Odoo Learn (Batch Transfers): It automatically creates batches based on the grouping method you select (e.g., by Carrier, Contact, etc.)",
      fr: "Source Odoo Learn (Transferts par lots) : Il crée automatiquement des lots en fonction de la méthode de regroupement que vous sélectionnez (par exemple, par transporteur, contact, etc.)",
    },
  }),
  complexQ({
    id: "inv-131",
    module: "inventory",
    text: {
      en: "Where can a picker find the assigned batch in the Barcode app? (Odoo Learn — Batch Transfers)",
      fr: "Où un préparateur peut-il trouver le lot attribué dans l'application Barcode ? (Odoo Learn — Transferts par lots)",
    },
    correct: {
      en: "In the ‘Batches’ tab after selecting the operation type",
      fr: "Dans l'onglet « Lots » après avoir sélectionné le type d'opération",
    },
    distractors: [
      { en: "Open the Barcode app and click the ‘Batch Transfers’ button", fr: "Ouvrez l'application Barcode et cliquez sur le bouton « Transferts par lots »" },
      { en: "In the ‘Products’ menu", fr: "Dans le menu « Produits »" },
      { en: "Only under the ‘Internal Transfers’ section", fr: "Uniquement dans la section « Transferts internes »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Batch Transfers): In the ‘Batches’ tab after selecting the operation type",
      fr: "Source Odoo Learn (Transferts par lots) : Dans l'onglet « Lots » après avoir sélectionné le type d'opération",
    },
  }),
  complexQ({
    id: "inv-132",
    module: "inventory",
    text: {
      en: "What ‘Outgoing Shipments’ settings are needed to use cluster picking? (Odoo Learn — Cluster Picking)",
      fr: "Quels paramètres « Expéditions sortantes » sont nécessaires pour utiliser le prélèvement en cluster ? (Odoo Learn — Sélection de clusters)",
    },
    correct: {
      en: "Any of the ‘Outgoing Shipment’ options",
      fr: "L’une des options « Envoi sortant »",
    },
    distractors: [
      { en: "Two-steps", fr: "Deux étapes" },
      { en: "Three-steps", fr: "Trois étapes" },
      { en: "One step", fr: "Une étape" },
    ],
    explanation: {
      en: "Source Odoo Learn (Cluster Picking): Any of the ‘Outgoing Shipment’ options",
      fr: "Source Odoo Learn (Cluster Picking) : l'une des options « Expédition sortante »",
    },
  }),
  complexQ({
    id: "inv-133",
    module: "inventory",
    text: {
      en: "When would a ‘Reusable Box’ *NOT* be used for cluster picking? (Odoo Learn — Cluster Picking)",
      fr: "Quand une « boîte réutilisable » *NON* serait-elle utilisée pour la sélection des grappes ? (Odoo Learn — Sélection de clusters)",
    },
    correct: {
      en: "When it is being used to ship items to the customer",
      fr: "Lorsqu'il est utilisé pour expédier des articles au client",
    },
    distractors: [
      { en: "When using a customized container for the picking trolley to store picked items", fr: "Lors de l'utilisation d'un conteneur personnalisé pour le chariot de préparation de commandes afin de stocker les articles prélevés" },
      { en: "When transporting items from the storage area to the packing area", fr: "Lors du transport d'articles de la zone de stockage à la zone d'emballage" },
      { en: "Reusable boxes are not recommended for cluster picking under any circumstance", fr: "Les boîtes réutilisables ne sont en aucun cas recommandées pour la sélection de grappes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cluster Picking): When it is being used to ship items to the customer",
      fr: "Source Odoo Learn (Cluster Picking) : Lorsqu'il est utilisé pour expédier des articles au client",
    },
  }),
  complexQ({
    id: "inv-134",
    module: "inventory",
    text: {
      en: "By default, in what order are the products displayed on a cluster picking document? (Odoo Learn — Cluster Picking)",
      fr: "Par défaut, dans quel ordre les produits sont-ils affichés sur un document de picking groupé ? (Odoo Learn — Sélection de clusters)",
    },
    correct: {
      en: "Products are displayed in alphabetical order of the storage location",
      fr: "Les produits sont affichés par ordre alphabétique du lieu de stockage",
    },
    distractors: [
      { en: "Products are grouped together based on their sales orders", fr: "Les produits sont regroupés en fonction de leurs commandes clients" },
      { en: "Products are displayed in alphabetical order of the product name", fr: "Les produits sont affichés par ordre alphabétique du nom du produit" },
      { en: "Products are displayed in the order they were added to the batch", fr: "Les produits sont affichés dans l'ordre dans lequel ils ont été ajoutés au lot" },
    ],
    explanation: {
      en: "Source Odoo Learn (Cluster Picking): Products are displayed in alphabetical order of the storage location",
      fr: "Source Odoo Learn (Cluster Picking) : Les produits sont affichés par ordre alphabétique de l'emplacement de stockage",
    },
  }),
  complexQ({
    id: "inv-135",
    module: "inventory",
    text: {
      en: "When configuring a shipping method to print shipping labels, which option should be selected in the ‘Integration Level’ field? (Odoo Learn — Print Shipping Labels)",
      fr: "Lors de la configuration d'un mode d'expédition pour imprimer des étiquettes d'expédition, quelle option doit être sélectionnée dans le champ « Niveau d'intégration » ? (Odoo Learn — Imprimer des étiquettes d'expédition)",
    },
    correct: {
      en: "Get Rate and Create Shipment",
      fr: "Obtenez le tarif et créez un envoi",
    },
    distractors: [
      { en: "Get Rate", fr: "Obtenir le tarif" },
      { en: "Request Price", fr: "Demander un prix" },
      { en: "Request Price and Print Label", fr: "Demander un prix et imprimer une étiquette" },
    ],
    explanation: {
      en: "Source Odoo Learn (Print Shipping Labels): Get Rate and Create Shipment",
      fr: "Source Odoo Learn (Imprimer les étiquettes d'expédition) : obtenir un tarif et créer un envoi",
    },
  }),
  complexQ({
    id: "inv-136",
    module: "inventory",
    text: {
      en: "How do I change a shipping method from a ‘Test Environment’ to a ‘Production Environment’? (Odoo Learn — Print Shipping Labels)",
      fr: "Comment puis-je modifier une méthode d'expédition d'un « environnement de test » à un « environnement de production » ? (Odoo Learn — Imprimer des étiquettes d'expédition)",
    },
    correct: {
      en: "Click the ‘Test Environment’ smart button",
      fr: "Cliquez sur le bouton intelligent « Environnement de test »",
    },
    distractors: [
      { en: "Click the ‘Production Environment’ smart button", fr: "Cliquez sur le bouton intelligent « Environnement de production »" },
      { en: "Select ‘Production’ in the ‘Environment’ field", fr: "Sélectionnez « Production » dans le champ « Environnement »" },
      { en: "Tick the checkbox next to ‘Production’", fr: "Cochez la case à côté de « Production »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Print Shipping Labels): Click the ‘Test Environment’ smart button",
      fr: "Source Odoo Learn (Imprimer les étiquettes d'expédition) : cliquez sur le bouton intelligent « Environnement de test »",
    },
  }),
  complexQ({
    id: "inv-137",
    module: "inventory",
    text: {
      en: "Which of the following information DOES NOT need to be configured to print shipping labels? (Odoo Learn — Print Shipping Labels)",
      fr: "Parmi les informations suivantes, lesquelles NE DOIVENT PAS être configurées pour imprimer des étiquettes d'expédition ? (Odoo Learn — Imprimer des étiquettes d'expédition)",
    },
    correct: {
      en: "Product price",
      fr: "Prix ​​du produit",
    },
    distractors: [
      { en: "Company address and phone number", fr: "Adresse et numéro de téléphone de l'entreprise" },
      { en: "Recipient address and phone number", fr: "Adresse et numéro de téléphone du destinataire" },
      { en: "Product weight", fr: "Poids du produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Print Shipping Labels): Product price",
      fr: "Source Odoo Learn (Imprimer les étiquettes d'expédition) : Prix du produit",
    },
  }),
  complexQ({
    id: "inv-138",
    module: "inventory",
    text: {
      en: "Which picking method requires the products to be sorted into orders *after* they are picked? (Odoo Learn — Wave Picking)",
      fr: "Quelle méthode de préparation nécessite que les produits soient triés en commandes *après* leur préparation ? (Odoo Learn — Sélection de vagues)",
    },
    correct: {
      en: "Wave Picking",
      fr: "Sélection de vagues",
    },
    distractors: [
      { en: "Single Picking", fr: "Cueillette Unique" },
      { en: "Single and Wave Picking", fr: "Cueillette simple et ondulée" },
      { en: "Neither Single nor Wave Picking", fr: "Ni sélection simple ni vague" },
    ],
    explanation: {
      en: "Source Odoo Learn (Wave Picking): Wave Picking",
      fr: "Source Odoo Learn (Wave Picking) : Wave Picking",
    },
  }),
  complexQ({
    id: "inv-139",
    module: "inventory",
    text: {
      en: "To create a wave transfer, what do all the products have to have in common? (Odoo Learn — Wave Picking)",
      fr: "Pour créer un transfert de vagues, quel est le point commun entre tous les produits ? (Odoo Learn — Sélection de vagues)",
    },
    correct: {
      en: "The same operation type",
      fr: "Le même type d'opération",
    },
    distractors: [
      { en: "The same source location", fr: "Le même emplacement source" },
      { en: "The same destination location", fr: "Le même lieu de destination" },
      { en: "The same route", fr: "Le même itinéraire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Wave Picking): The same operation type",
      fr: "Source Odoo Learn (Wave Picking) : Le même type d’opération",
    },
  }),
  complexQ({
    id: "inv-140",
    module: "inventory",
    text: {
      en: "Where do I go to see all the wave transfers assigned to me? (Odoo Learn — Wave Picking)",
      fr: "Où puis-je voir tous les transferts de vagues qui m'ont été attribués ? (Odoo Learn — Sélection de vagues)",
    },
    correct: {
      en: "In the Inventory app, click Operations > Wave Transfers, and filter by ‘My Transfers’",
      fr: "Dans l'application Inventaire, cliquez sur Opérations > Transferts Wave et filtrez par « Mes transferts ».",
    },
    distractors: [
      { en: "In the Inventory app, click Operations > My Batch Transfers", fr: "Dans l'application Inventaire, cliquez sur Opérations > Mes transferts par lots" },
      { en: "In the Barcode app > Batch Transfers", fr: "Dans l'application Barcode > Transferts par lots" },
      { en: "In the Inventory app, click ‘Pick’, and group by ‘Location’", fr: "Dans l'application Inventaire, cliquez sur « Choisir » et regroupez par « Emplacement »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Wave Picking): In the Inventory app, click Operations > Wave Transfers, and filter by ‘My Transfers’",
      fr: "Source Odoo Learn (Wave Picking) : Dans l'application Inventaire, cliquez sur Opérations > Wave Transfers et filtrez par « Mes transferts ».",
    },
  }),
];
