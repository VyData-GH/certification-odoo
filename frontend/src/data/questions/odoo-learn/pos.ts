import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const posLearnQuestions = [
  complexQ({
    id: "pos-024",
    module: "pos",
    text: {
      en: "What are the three \"Product Type\" options and their functions? (Odoo Learn — Product creation)",
      fr: "Quelles sont les trois options « Type de produit » et leurs fonctions ? (Odoo Learn — Création de produits)",
    },
    correct: {
      en: "Goods, Service, and Combo: Consumable or storable products, intangible items needing follow-up, or sets of multiple products.",
      fr: "Biens, services et combo : produits consommables ou stockables, éléments immatériels nécessitant un suivi ou ensembles de produits multiples.",
    },
    distractors: [
      { en: "Physical, Digital, and Bundled: Products that are tangible, electronic, or grouped.", fr: "Physiques, numériques et groupés : produits tangibles, électroniques ou groupés." },
      { en: "Consumable, Durable, and Assembled: Products that are used up, last a long time, or are built when ordered.", fr: "Consommable, durable et assemblé : produits épuisés, qui durent longtemps ou qui sont fabriqués sur commande." },
      { en: "Storable, Non-Storable, and Variant: Products that are inventory-managed, not inventory-managed, or have different attributes.", fr: "Stockables, non stockables et variantes : produits gérés en stock, non gérés en stock ou ayant des attributs différents." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product creation): Goods, Service, and Combo: Consumable or storable products, intangible items needing follow-up, or sets of multiple products.",
      fr: "Source Odoo Learn (Création de produits) : Biens, Services et Combo : Produits consommables ou stockables, éléments immatériels nécessitant un suivi ou ensembles de produits multiples.",
    },
  }),
  complexQ({
    id: "pos-025",
    module: "pos",
    text: {
      en: "What is the fundamental principle behind the \"Standard Price\" costing method when used for product valuation? (Odoo Learn — Product creation)",
      fr: "Quel est le principe fondamental qui sous-tend la méthode d'évaluation des coûts « Prix standard » lorsqu'elle est utilisée pour la valorisation des produits ? (Odoo Learn — Création de produits)",
    },
    correct: {
      en: "Management sets a fixed, predetermined cost that remains unchanged until further notice.",
      fr: "La direction fixe un coût fixe et prédéterminé qui reste inchangé jusqu'à nouvel ordre.",
    },
    distractors: [
      { en: "Inventory valuation is determined by the average cost of all items over a specified period.", fr: "La valorisation des stocks est déterminée par le coût moyen de tous les articles sur une période spécifiée." },
      { en: "The cost is affected by the assumption that the first units purchased are also the first units sold.", fr: "Le coût dépend de l'hypothèse selon laquelle les premières unités achetées sont également les premières unités vendues." },
      { en: "It tracks and analyzes the precise purchase price of each individual item to evaluate its value.", fr: "Il suit et analyse le prix d'achat précis de chaque article individuel pour évaluer sa valeur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product creation): Management sets a fixed, predetermined cost that remains unchanged until further notice.",
      fr: "Source Odoo Learn (Création de produit) : La direction fixe un coût fixe et prédéterminé qui reste inchangé jusqu'à nouvel ordre.",
    },
  }),
  complexQ({
    id: "pos-026",
    module: "pos",
    text: {
      en: "What product details does the POS system autofill when creating a new product via barcode lookup? (Odoo Learn — Product creation)",
      fr: "Quels détails du produit le système de point de vente remplit-il automatiquement lors de la création d'un nouveau produit via la recherche de codes-barres ? (Odoo Learn — Création de produits)",
    },
    correct: {
      en: "Product name, a corresponding image, the standard sales price, and potentially other basic descriptive details.",
      fr: "Le nom du produit, une image correspondante, le prix de vente standard et éventuellement d'autres détails descriptifs de base.",
    },
    distractors: [
      { en: "Supplier details, manufacturing lead time, internal product code, and the product's weight for shipping calculations.", fr: "Détails du fournisseur, délai de fabrication, code produit interne et poids du produit pour les calculs d'expédition." },
      { en: "Customer reviews, promotional discounts, warranty information, and the product's dimensions for shelf placement.", fr: "Avis des clients, remises promotionnelles, informations sur la garantie et dimensions du produit pour le placement en étagère." },
      { en: "Inventory levels across all warehouses, sales history for the past year, competitor pricing, and the product's nutritional information.", fr: "Niveaux de stock dans tous les entrepôts, historique des ventes de l'année écoulée, prix des concurrents et informations nutritionnelles du produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product creation): Product name, a corresponding image, the standard sales price, and potentially other basic descriptive details.",
      fr: "Source Odoo Learn (Création de produit) : nom du produit, une image correspondante, le prix de vente standard et potentiellement d'autres détails descriptifs de base.",
    },
  }),
  complexQ({
    id: "pos-027",
    module: "pos",
    text: {
      en: "Which of the following best exemplifies a product that would be classified under the \"Service\" category? (Odoo Learn — Product creation)",
      fr: "Lequel des éléments suivants illustre le mieux un produit qui serait classé dans la catégorie « Service » ? (Odoo Learn — Création de produits)",
    },
    correct: {
      en: "A software license with one year of technical support included, as the support aspect represents a follow-up activity after the initial sale.",
      fr: "Une licence logicielle avec un an de support technique inclus, car l'aspect support représente une activité de suivi après la vente initiale.",
    },
    distractors: [
      { en: "A pre-assembled computer system since it is a tangible good that is sold as a complete package to the customer.", fr: "Un système informatique pré-assemblé puisqu'il s'agit d'un bien tangible vendu sous forme d'un package complet au client." },
      { en: "A gift certificate redeemable for merchandise in the store, as it represents a form of stored value to be used for future purchases.", fr: "Un chèque-cadeau échangeable contre des marchandises en magasin, car il représente une forme de valeur stockée à utiliser pour de futurs achats." },
      { en: "A handcrafted piece of jewelry that requires careful packaging and handling due to its delicate nature and high value.", fr: "Un bijou fabriqué à la main qui nécessite un emballage et une manipulation soignés en raison de sa nature délicate et de sa grande valeur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product creation): A software license with one year of technical support included, as the support aspect represents a follow-up activity after the initial sale.",
      fr: "Source Odoo Learn (Création de produit) : Une licence logicielle avec un an de support technique inclus, car l'aspect support représente une activité de suivi après la vente initiale.",
    },
  }),
  complexQ({
    id: "pos-028",
    module: "pos",
    text: {
      en: "What are the three options for variant creation when adding an attribute? (Odoo Learn — Product variants)",
      fr: "Quelles sont les trois options de création de variantes lors de l'ajout d'un attribut ? (Odoo Learn — Variantes de produits)",
    },
    correct: {
      en: "Instantly, Dynamically, and Never",
      fr: "Instantanément, dynamiquement et jamais",
    },
    distractors: [
      { en: "Manual, Automated, and Scheduled", fr: "Manuel, automatisé et planifié" },
      { en: "Quick, Delayed, and Conditional", fr: "Rapide, différé et conditionnel" },
      { en: "Visible, Hidden, and Optional", fr: "Visible, masqué et facultatif" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product variants): Instantly, Dynamically, and Never",
      fr: "Source Odoo Learn (variantes de produits) : instantanément, dynamiquement et jamais",
    },
  }),
  complexQ({
    id: "pos-029",
    module: "pos",
    text: {
      en: "How do you make a product variant visible only when adding the product to the cart? (Odoo Learn — Product variants)",
      fr: "Comment rendre une variante de produit visible uniquement lors de l'ajout du produit au panier ? (Odoo Learn — Variantes de produits)",
    },
    correct: {
      en: "By selecting “Never” as a variant creation mode.",
      fr: "En sélectionnant « Jamais » comme mode de création de variantes.",
    },
    distractors: [
      { en: "By clicking the “No variant” button.", fr: "En cliquant sur le bouton « Aucune variante »." },
      { en: "By creating a “Cart Variant” attribute and manually select it after adding the product.", fr: "En créant un attribut « Variante du panier » et en le sélectionnant manuellement après avoir ajouté le produit." },
      { en: "By enabling the “Show in Cart” option for the variant.", fr: "En activant l'option « Afficher dans le panier » pour la variante." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product variants): By selecting “Never” as a variant creation mode.",
      fr: "Source Odoo Learn (Variantes de produits) : En sélectionnant « Jamais » comme mode de création de variantes.",
    },
  }),
  complexQ({
    id: "pos-030",
    module: "pos",
    text: {
      en: "What initial step is required before configuring product variants in the POS app? (Odoo Learn — Product variants)",
      fr: "Quelle étape initiale est requise avant de configurer des variantes de produits dans l'application POS ? (Odoo Learn — Variantes de produits)",
    },
    correct: {
      en: "Enabling the \"Variants\" feature in the Sales app settings.",
      fr: "Activation de la fonctionnalité « Variantes » dans les paramètres de l'application Ventes.",
    },
    distractors: [
      { en: "Creating the product in the product catalog.", fr: "Création du produit dans le catalogue de produits." },
      { en: "Configuring the display type of the attributes.", fr: "Configuration du type d'affichage des attributs." },
      { en: "Adding attributes to the product in the PoS app.", fr: "Ajout d'attributs au produit dans l'application PoS." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product variants): Enabling the \"Variants\" feature in the Sales app settings.",
      fr: "Source Odoo Learn (Variantes de produits) : Activation de la fonctionnalité « Variantes » dans les paramètres de l'application Ventes.",
    },
  }),
  complexQ({
    id: "pos-031",
    module: "pos",
    text: {
      en: "What determines the maximum number of items available for selection in a combo choice? (Odoo Learn — Product combos)",
      fr: "Qu'est-ce qui détermine le nombre maximum d'éléments disponibles pour la sélection dans un choix combiné ? (Odoo Learn — Combinaisons de produits)",
    },
    correct: {
      en: "The number of items added to that combo choice",
      fr: "Le nombre d'éléments ajoutés à ce choix de combo",
    },
    distractors: [
      { en: "The total number of available product categories", fr: "Le nombre total de catégories de produits disponibles" },
      { en: "The number of free items included in the combo", fr: "Le nombre d'articles gratuits inclus dans le combo" },
      { en: "The price of the combo", fr: "Le prix du combo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product combos): The number of items added to that combo choice",
      fr: "Source Odoo Learn (Combos de produits) : Le nombre d'éléments ajoutés à ce choix de combo",
    },
  }),
  complexQ({
    id: "pos-032",
    module: "pos",
    text: {
      en: "What determines the value shown in the \"Combo Price\" field? (Odoo Learn — Product combos)",
      fr: "Qu'est-ce qui détermine la valeur affichée dans le champ « Prix combiné » ? (Odoo Learn — Combinaisons de produits)",
    },
    correct: {
      en: "The lowest-priced item in the combo",
      fr: "L'article le moins cher du combo",
    },
    distractors: [
      { en: "The average price of all items in the combo", fr: "Le prix moyen de tous les articles du combo" },
      { en: "The highest-priced item in the combo", fr: "L'article le plus cher du combo" },
      { en: "A price manually entered by the user", fr: "Un prix saisi manuellement par l'utilisateur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product combos): The lowest-priced item in the combo",
      fr: "Source Odoo Learn (Combos de produits) : L'article le moins cher du combo",
    },
  }),
  complexQ({
    id: "pos-033",
    module: "pos",
    text: {
      en: "What happens to the total price if the customer chooses only the free items included in the combo? (Odoo Learn — Product combos)",
      fr: "Qu'arrive-t-il au prix total si le client choisit uniquement les articles gratuits inclus dans le combo ? (Odoo Learn — Combinaisons de produits)",
    },
    correct: {
      en: "The total combo price remains the same",
      fr: "Le prix total du combo reste le même",
    },
    distractors: [
      { en: "The items are all charged individually", fr: "Les articles sont tous facturés individuellement" },
      { en: "The POS register prevents the order from being validated", fr: "Le registre du point de vente empêche la validation de la commande" },
      { en: "The price varies depending on which item is selected", fr: "Le prix varie en fonction de l'article sélectionné" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product combos): The total combo price remains the same",
      fr: "Source Odoo Learn (Combos de produits) : Le prix total du combo reste le même",
    },
  }),
  complexQ({
    id: "pos-034",
    module: "pos",
    text: {
      en: "What is the purpose of creating a Combo category in the Point of Sale tab? (Odoo Learn — Product combos)",
      fr: "Quel est l'intérêt de créer une catégorie Combo dans l'onglet Point de vente ? (Odoo Learn — Combinaisons de produits)",
    },
    correct: {
      en: "To display the product combo under its own category in the POS register",
      fr: "Pour afficher le combo de produits sous sa propre catégorie dans le registre POS",
    },
    distractors: [
      { en: "To apply different tax rates to combo items in the POS register", fr: "Pour appliquer différents taux de taxe aux articles combinés dans le registre PDV" },
      { en: "To separate dine-in and takeout orders in the POS register", fr: "Pour séparer les commandes sur place et à emporter dans le registre du point de vente" },
      { en: "To allow combos to be ordered online only directly from the POS register", fr: "Pour permettre la commande de combos en ligne uniquement directement à partir de la caisse enregistreuse" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product combos): To display the product combo under its own category in the POS register",
      fr: "Source Odoo Learn (Combos de produits) : Pour afficher le combo de produits sous sa propre catégorie dans le registre POS",
    },
  }),
  complexQ({
    id: "pos-035",
    module: "pos",
    text: {
      en: "Where can you create a new POS category? (Odoo Learn — POS categories)",
      fr: "Où pouvez-vous créer une nouvelle catégorie POS ? (Odoo Learn — Catégories de PLV)",
    },
    correct: {
      en: "Among others, through the “PoS Product Categories” menu under “Configuration” in the Point of Sale application.",
      fr: "Entre autres, via le menu « Catégories de produits PoS » sous « Configuration » dans l'application Point de vente.",
    },
    distractors: [
      { en: "Solely within the “Restrict Categories” field under the \"Product & PoS categories\" section of the application settings.", fr: "Uniquement dans le champ « Restreindre les catégories » sous la section « Catégories de produits et PoS » des paramètres de l'application." },
      { en: "Exclusively from the product form by editing the \"Point of Sale\" tab and adding a new category.", fr: "Exclusivement depuis la fiche produit en éditant l'onglet \"Point de vente\" et en ajoutant une nouvelle catégorie." },
      { en: "You have to create POS categories through a separate inventory management module.", fr: "Vous devez créer des catégories POS via un module de gestion des stocks distinct." },
    ],
    explanation: {
      en: "Source Odoo Learn (POS categories): Among others, through the “PoS Product Categories” menu under “Configuration” in the Point of Sale application.",
      fr: "Source Odoo Learn (catégories POS) : Entre autres, via le menu « Catégories de produits PoS » sous « Configuration » dans l'application Point de vente.",
    },
  }),
  complexQ({
    id: "pos-036",
    module: "pos",
    text: {
      en: "What is the primary function of POS product categories? (Odoo Learn — POS categories)",
      fr: "Quelle est la fonction principale des catégories de produits PLV ? (Odoo Learn — Catégories de PLV)",
    },
    correct: {
      en: "To organize and display products within the POS interface, including the product grid, cart, and printed receipts.",
      fr: "Pour organiser et afficher les produits dans l'interface POS, y compris la grille de produits, le panier et les reçus imprimés.",
    },
    distractors: [
      { en: "To analyze sales data by product type; similar to how sales product categories are used in reporting.", fr: "Analyser les données de ventes par type de produit ; de la même manière que les catégories de produits de vente sont utilisées dans les rapports." },
      { en: "To define eligibility rules for discounts and promotions explicitly applied within a POS system.", fr: "Définir des règles d'éligibilité pour les remises et promotions explicitement appliquées dans un système de point de vente." },
      { en: "To assign and manage pricelists for products sold through a POS system.", fr: "Attribuer et gérer des listes de prix pour les produits vendus via un système de point de vente." },
    ],
    explanation: {
      en: "Source Odoo Learn (POS categories): To organize and display products within the POS interface, including the product grid, cart, and printed receipts.",
      fr: "Source Odoo Learn (catégories POS) : pour organiser et afficher les produits dans l'interface POS, y compris la grille de produits, le panier et les reçus imprimés.",
    },
  }),
  complexQ({
    id: "pos-037",
    module: "pos",
    text: {
      en: "How do you assign a POS category to a specific product? (Odoo Learn — POS categories)",
      fr: "Comment attribuer une catégorie PLV à un produit spécifique ? (Odoo Learn — Catégories de PLV)",
    },
    correct: {
      en: "By selecting it within the “Category” field in the “Point of Sale” tab“ of the product form.",
      fr: "En le sélectionnant au sein du champ « Catégorie » de l'onglet « Point de vente » du formulaire produit.",
    },
    distractors: [
      { en: "By setting the default POS product category when creating a new product template.", fr: "En définissant la catégorie de produit POS par défaut lors de la création d'un nouveau modèle de produit." },
      { en: "By defining related products within the POS category's configuration.", fr: "En définissant les produits associés dans la configuration de la catégorie POS." },
      { en: "By linking the product to a specific pricelist associated with the desired POS category.", fr: "En liant le produit à une liste de prix spécifique associée à la catégorie POS souhaitée." },
    ],
    explanation: {
      en: "Source Odoo Learn (POS categories): By selecting it within the “Category” field in the “Point of Sale” tab“ of the product form.",
      fr: "Source Odoo Learn (catégories POS) : En le sélectionnant dans le champ « Catégorie » de l'onglet « Point de vente » du formulaire produit.",
    },
  }),
  complexQ({
    id: "pos-038",
    module: "pos",
    text: {
      en: "How do you establish a parent-child relationship between POS product categories? (Odoo Learn — POS categories)",
      fr: "Comment établir une relation parent-enfant entre les catégories de produits PLV ? (Odoo Learn — Catégories de PLV)",
    },
    correct: {
      en: "Open the child POS category form and fill in the “Parent Category” field.",
      fr: "Ouvrez le formulaire de catégorie POS enfant et remplissez le champ « Catégorie parent ».",
    },
    distractors: [
      { en: "Add numerical prefixes to the category names, such as \"1. Beverages,\" \"1.1. Coffee,\" \"1.2. Tea.\"", fr: "Ajoutez des préfixes numériques aux noms de catégories, tels que « 1. Boissons », « 1.1. Café », « 1.2. Thé »." },
      { en: "Open the parent POS category form and fill in the “Child Categories” field.", fr: "Ouvrez le formulaire de catégorie POS parent et remplissez le champ « Catégories enfants »." },
      { en: "Odoo POS does not support hierarchical product categories; a POS category cannot be a subcategory of another.", fr: "Odoo POS ne prend pas en charge les catégories de produits hiérarchiques ; une catégorie POS ne peut pas être une sous-catégorie d’une autre." },
    ],
    explanation: {
      en: "Source Odoo Learn (POS categories): Open the child POS category form and fill in the “Parent Category” field.",
      fr: "Source Odoo Learn (catégories POS) : Ouvrez le formulaire de catégorie POS enfant et remplissez le champ « Catégorie parent ».",
    },
  }),
  complexQ({
    id: "pos-039",
    module: "pos",
    text: {
      en: "What’s the “Available between” field used for? (Odoo Learn — POS categories)",
      fr: "A quoi sert le champ « Disponible entre » ? (Odoo Learn — Catégories de PLV)",
    },
    correct: {
      en: "Temporarily restrict self-ordering access to products within this category to a specified timeframe.",
      fr: "Restreindre temporairement l'accès aux commandes automatiques aux produits de cette catégorie à une période spécifiée.",
    },
    distractors: [
      { en: "To set a specific time frame during which products from this POS category can be purchased across all points of sale.", fr: "Définir une période spécifique pendant laquelle les produits de cette catégorie de point de vente peuvent être achetés dans tous les points de vente." },
      { en: "To schedule automatic inventory updates for the category during off-peak hours to minimize disruption.", fr: "Planifier des mises à jour automatiques des stocks pour la catégorie pendant les heures creuses afin de minimiser les perturbations." },
      { en: "To limit the time window during which customer feedback is collected for products in that category.", fr: "Limiter la période pendant laquelle les commentaires des clients sont collectés pour les produits de cette catégorie." },
    ],
    explanation: {
      en: "Source Odoo Learn (POS categories): Temporarily restrict self-ordering access to products within this category to a specified timeframe.",
      fr: "Source Odoo Learn (catégories POS) : restreindre temporairement l'accès aux commandes automatiques aux produits de cette catégorie à une période spécifiée.",
    },
  }),
  complexQ({
    id: "pos-040",
    module: "pos",
    text: {
      en: "If a parent category is selected in the “Restrict Categories” field, how does this affect its child categories? (Odoo Learn — POS categories)",
      fr: "Si une catégorie parent est sélectionnée dans le champ « Restreindre les catégories », comment cela affecte-t-il ses catégories enfants ? (Odoo Learn — Catégories de PLV)",
    },
    correct: {
      en: "The child categories are completely hidden and inaccessible in the POS interface.",
      fr: "Les catégories enfants sont complètement masquées et inaccessibles dans l'interface POS.",
    },
    distractors: [
      { en: "The child categories remain visible and purchasable in the POS interface.", fr: "Les catégories enfants restent visibles et achetables dans l'interface POS." },
      { en: "The child categories are visible but cannot be selected for adding products to the cart.", fr: "Les catégories enfants sont visibles mais ne peuvent pas être sélectionnées pour ajouter des produits au panier." },
      { en: "The child categories are hidden from the visual interface but can still be added to the cart by scanning their product barcodes.", fr: "Les catégories enfants sont masquées de l'interface visuelle mais peuvent toujours être ajoutées au panier en scannant les codes-barres de leurs produits." },
    ],
    explanation: {
      en: "Source Odoo Learn (POS categories): The child categories are completely hidden and inaccessible in the POS interface.",
      fr: "Source Odoo Learn (catégories POS) : Les catégories enfants sont complètement masquées et inaccessibles dans l'interface POS.",
    },
  }),
  complexQ({
    id: "pos-041",
    module: "pos",
    text: {
      en: "What does the \"Self-service invoicing\" setting do when enabled? (Odoo Learn — Receipts and Invoices)",
      fr: "À quoi sert le paramètre « Facturation libre-service » lorsqu'il est activé ? (Odoo Learn — Reçus et factures)",
    },
    correct: {
      en: "It generates a QR code or URL to use to access invoices online",
      fr: "Il génère un code QR ou une URL à utiliser pour accéder aux factures en ligne",
    },
    distractors: [
      { en: "It allows customers to edit their own invoice details", fr: "Il permet aux clients de modifier leurs propres détails de facture" },
      { en: "It prints a detailed invoice at the end of each sale", fr: "Il imprime une facture détaillée à la fin de chaque vente" },
      { en: "It automatically emails an invoice to every customer", fr: "Il envoie automatiquement une facture par e-mail à chaque client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Receipts and Invoices): It generates a QR code or URL to use to access invoices online",
      fr: "Source Odoo Learn (Reçus et factures) : Il génère un code QR ou une URL à utiliser pour accéder aux factures en ligne",
    },
  }),
  complexQ({
    id: "pos-042",
    module: "pos",
    text: {
      en: "What information must the customer enter on the \"Invoice Request\" page when accessing an invoice via URL? (Odoo Learn — Receipts and Invoices)",
      fr: "Quelles informations le client doit-il saisir sur la page « Demande de facture » lorsqu'il accède à une facture via URL ? (Odoo Learn — Reçus et factures)",
    },
    correct: {
      en: "The ticket number, purchase date, and a unique code",
      fr: "Le numéro du billet, la date d'achat et un code unique",
    },
    distractors: [
      { en: "Only their full name and email address", fr: "Uniquement leur nom complet et leur adresse e-mail" },
      { en: "Their customer profile number and store location", fr: "Leur numéro de profil client et l’emplacement du magasin" },
      { en: "Their receipt amount and payment method", fr: "Le montant de leur reçu et leur mode de paiement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Receipts and Invoices): The ticket number, purchase date, and a unique code",
      fr: "Source Odoo Learn (Reçus et Factures) : Le numéro du billet, la date d'achat et un code unique",
    },
  }),
  complexQ({
    id: "pos-043",
    module: "pos",
    text: {
      en: "What is required in order to create a single global invoice for a recurrent customer? (Odoo Learn — Receipts and Invoices)",
      fr: "Que faut-il pour créer une facture globale unique pour un client récurrent ? (Odoo Learn — Reçus et factures)",
    },
    correct: {
      en: "Orders related to the customer profile",
      fr: "Commandes liées au profil client",
    },
    distractors: [
      { en: "The customer must have paid exclusively by card", fr: "Le client doit avoir payé exclusivement par carte" },
      { en: "At least 50 completed orders by the customer", fr: "Au moins 50 commandes complétées par le client" },
      { en: "The customer must have placed all orders on the same day", fr: "Le client doit avoir passé toutes les commandes le même jour" },
    ],
    explanation: {
      en: "Source Odoo Learn (Receipts and Invoices): Orders related to the customer profile",
      fr: "Source Odoo Learn (Reçus et Factures) : Commandes liées au profil client",
    },
  }),
  complexQ({
    id: "pos-044",
    module: "pos",
    text: {
      en: "Which integration configuration in Odoo POS is required when processing cash payments? (Odoo Learn — Payment methods)",
      fr: "Quelle configuration d'intégration dans Odoo POS est requise lors du traitement des paiements en espèces ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "No integration is required.",
      fr: "Aucune intégration n’est requise.",
    },
    distractors: [
      { en: "Integration with a hardware terminal.", fr: "Intégration avec un terminal matériel." },
      { en: "Integration with a dynamic QR code generation module.", fr: "Intégration avec un module de génération de code QR dynamique." },
      { en: "Integration with a hardware cash drawer.", fr: "Intégration avec un tiroir-caisse matériel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): No integration is required.",
      fr: "Source Odoo Learn (Modes de paiement) : Aucune intégration n'est requise.",
    },
  }),
  complexQ({
    id: "pos-045",
    module: "pos",
    text: {
      en: "What is the purpose of the \"Journal\" field when setting up a payment method? (Odoo Learn — Payment methods)",
      fr: "A quoi sert le champ « Journal » lors du paramétrage d'un moyen de paiement ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "To specify the accounting journal where payment transactions are recorded.",
      fr: "Pour préciser le journal comptable où sont enregistrées les opérations de paiement.",
    },
    distractors: [
      { en: "To designate a customer statement journal for automated invoice generation.", fr: "Pour désigner un journal de relevé client pour la génération automatisée des factures." },
      { en: "To assign a discount tracking journal for promotional payment analysis.", fr: "Pour attribuer un journal de suivi des remises pour l'analyse des paiements promotionnels." },
      { en: "To associate a stock valuation journal for real-time inventory adjustments.", fr: "Pour associer un journal de valorisation des stocks pour des ajustements de stocks en temps réel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): To specify the accounting journal where payment transactions are recorded.",
      fr: "Source Odoo Learn (Modes de paiement) : Pour préciser le journal comptable où sont enregistrées les opérations de paiement.",
    },
  }),
  complexQ({
    id: "pos-046",
    module: "pos",
    text: {
      en: "Why is a new cash journal required instead of using an existing one? (Odoo Learn — Payment methods)",
      fr: "Pourquoi un nouveau journal de caisse est-il nécessaire au lieu d’utiliser un journal existant ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "Two cash payment methods cannot share the same cash journal.",
      fr: "Deux modes de paiement en espèces ne peuvent pas partager le même journal de caisse.",
    },
    distractors: [
      { en: "Journals are automatically archived when used in another POS.", fr: "Les journaux sont automatiquement archivés lorsqu’ils sont utilisés dans un autre point de vente." },
      { en: "Existing journals are corrupted and unusable.", fr: "Les journaux existants sont corrompus et inutilisables." },
      { en: "The system requires unique journal prefixes for each cash method.", fr: "Le système nécessite des préfixes de journal uniques pour chaque méthode de trésorerie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): Two cash payment methods cannot share the same cash journal.",
      fr: "Source Odoo Learn (Modes de paiement) : Deux modes de paiement en espèces ne peuvent pas partager le même journal de caisse.",
    },
  }),
  complexQ({
    id: "pos-047",
    module: "pos",
    text: {
      en: "Which journal types are used within Odoo POS payment methods? (Odoo Learn — Payment methods)",
      fr: "Quels types de journaux sont utilisés dans les méthodes de paiement Odoo POS ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "Cash and Bank journals.",
      fr: "Journaux de caisse et de banque.",
    },
    distractors: [
      { en: "Cash, Sales, and Purchase journals.", fr: "Journaux de trésorerie, de ventes et d'achats." },
      { en: "Cash, bank, and credit card journals.", fr: "Journaux de trésorerie, bancaires et de cartes de crédit." },
      { en: "Cash and Sales journals.", fr: "Journaux de trésorerie et de ventes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): Cash and Bank journals.",
      fr: "Source Odoo Learn (Modes de paiement) : Journaux de trésorerie et bancaires.",
    },
  }),
  complexQ({
    id: "pos-048",
    module: "pos",
    text: {
      en: "What is the initial step to enable the Urban Piper integration in Odoo Point of Sale? (Odoo Learn — Online food delivery)",
      fr: "Quelle est la première étape pour permettre l’intégration d’Urban Piper dans le point de vente Odoo ? (Odoo Learn — Livraison de nourriture en ligne)",
    },
    correct: {
      en: "Head to POS settings, scroll to \"Food Delivery Connector,\" and enable Urban Piper.",
      fr: "Accédez aux paramètres du point de vente, faites défiler jusqu'à « Connecteur de livraison de nourriture » ​​et activez Urban Piper.",
    },
    distractors: [
      { en: "Go to the Sales app and enable \"Online Ordering.\"", fr: "Accédez à l'application Ventes et activez « Commande en ligne »." },
      { en: "Access the \"Products\" menu and activate \"Food Delivery Options.\"", fr: "Accédez au menu « Produits » et activez « Options de livraison de nourriture »." },
      { en: "Navigate to \"Configuration,\" then \"Integrations,\" and select Urban Piper.", fr: "Accédez à « Configuration », puis « Intégrations » et sélectionnez Urban Piper." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online food delivery): Head to POS settings, scroll to \"Food Delivery Connector,\" and enable Urban Piper.",
      fr: "Source Odoo Learn (livraison de nourriture en ligne) : accédez aux paramètres du point de vente, faites défiler jusqu'à « Connecteur de livraison de nourriture » et activez Urban Piper.",
    },
  }),
  complexQ({
    id: "pos-049",
    module: "pos",
    text: {
      en: "What credentials are required after activating Urban Piper with platform data? (Odoo Learn — Online food delivery)",
      fr: "Quelles informations d'identification sont requises après l'activation d'Urban Piper avec les données de la plateforme ? (Odoo Learn — Livraison de nourriture en ligne)",
    },
    correct: {
      en: "Username and API Key.",
      fr: "Nom d'utilisateur et clé API.",
    },
    distractors: [
      { en: "Store ID and API Secret.", fr: "ID de magasin et secret API." },
      { en: "Merchant ID and Terminal ID.", fr: "Identifiant du commerçant et identifiant du terminal." },
      { en: "Odoo Database Name and Admin Password.", fr: "Nom de la base de données Odoo et mot de passe administrateur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online food delivery): Username and API Key.",
      fr: "Source Odoo Learn (Livraison de nourriture en ligne) : Nom d'utilisateur et clé API.",
    },
  }),
  complexQ({
    id: "pos-050",
    module: "pos",
    text: {
      en: "What’s the next step after connecting Odoo POS with Urban Piper using user credentials? (Odoo Learn — Online food delivery)",
      fr: "Quelle est la prochaine étape après avoir connecté Odoo POS à Urban Piper à l’aide des informations d’identification de l’utilisateur ? (Odoo Learn — Livraison de nourriture en ligne)",
    },
    correct: {
      en: "Click \"+ Create store\" to set up the POS within Urban Piper.",
      fr: "Cliquez sur \"+ Créer un magasin\" pour configurer le point de vente dans Urban Piper.",
    },
    distractors: [
      { en: "Configure product pricing for online delivery.", fr: "Configurez les prix des produits pour la livraison en ligne." },
      { en: "Select the default delivery driver for the POS.", fr: "Sélectionnez le chauffeur-livreur par défaut pour le PDV." },
      { en: "Set the operating hours in Odoo's general settings.", fr: "Définissez les heures de fonctionnement dans les paramètres généraux d'Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online food delivery): Click \"+ Create store\" to set up the POS within Urban Piper.",
      fr: "Source Odoo Learn (Livraison de nourriture en ligne) : Cliquez sur \"+ Créer un magasin\" pour configurer le point de vente dans Urban Piper.",
    },
  }),
  complexQ({
    id: "pos-051",
    module: "pos",
    text: {
      en: "How are individual products made available for online food delivery through Urban Piper, and what final action ensures they appear on the platform? (Odoo Learn — Online food delivery)",
      fr: "Comment les produits individuels sont-ils mis à disposition pour la livraison de nourriture en ligne via Urban Piper, et quelle action finale garantit leur apparition sur la plateforme ? (Odoo Learn — Livraison de nourriture en ligne)",
    },
    correct: {
      en: "By selecting the POS in the product's \"Available on Food Delivery\" field, then synchronizing.",
      fr: "En sélectionnant le PLV dans le champ \"Disponible en livraison alimentaire\" du produit, puis en synchronisant.",
    },
    distractors: [
      { en: "By enabling a general \"Online Sales\" checkbox on the product form and restarting the Odoo POS session.", fr: "En activant une case à cocher générale « Ventes en ligne » sur le formulaire du produit et en redémarrant la session Odoo POS." },
      { en: "By assigning them to a \"Delivery-Enabled\" product category and updating the delivery platform settings.", fr: "En les attribuant à une catégorie de produits « Delivery-Enabled » et en mettant à jour les paramètres de la plateforme de livraison." },
      { en: "By manually syncing each product from the \"Online Deliveries\" module after setting prices.", fr: "En synchronisant manuellement chaque produit depuis le module \"Livraisons en ligne\" après avoir fixé les prix." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online food delivery): By selecting the POS in the product's \"Available on Food Delivery\" field, then synchronizing.",
      fr: "Source Odoo Learn (Livraison de repas en ligne) : En sélectionnant le POS dans le champ \"Disponible en livraison de repas\" du produit, puis en synchronisant.",
    },
  }),
  complexQ({
    id: "pos-052",
    module: "pos",
    text: {
      en: "After receiving an incoming order through the Urban Piper integration in Odoo POS, what is the initial status of the order, and what actions can be taken by the user? (Odoo Learn — Online food delivery)",
      fr: "Après avoir reçu une commande entrante via l'intégration d'Urban Piper dans Odoo POS, quel est le statut initial de la commande et quelles actions peuvent être entreprises par l'utilisateur ? (Odoo Learn — Livraison de nourriture en ligne)",
    },
    correct: {
      en: "The order is initially \"Pending,\" and the user can choose to accept or reject it.",
      fr: "La commande est initialement « En attente » et l’utilisateur peut choisir de l’accepter ou de la refuser.",
    },
    distractors: [
      { en: "The order is immediately marked as \"Accepted,\" and it can then be canceled.", fr: "La commande est immédiatement marquée comme « Acceptée » et peut ensuite être annulée." },
      { en: "The order is initially \"Preparing,\" and it can then be marked as \"Completed.\"", fr: "La commande est initialement « en préparation », et elle peut ensuite être marquée comme « terminée »." },
      { en: "The order is automatically \"Acknowledged,\" and it can then be forwarded to the preparation team.", fr: "La commande est automatiquement « Accusée de réception » et peut ensuite être transmise à l'équipe de préparation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online food delivery): The order is initially \"Pending,\" and the user can choose to accept or reject it.",
      fr: "Source Odoo Learn (Livraison de nourriture en ligne) : La commande est initialement « En attente » et l'utilisateur peut choisir de l'accepter ou de la refuser.",
    },
  }),
  complexQ({
    id: "pos-053",
    module: "pos",
    text: {
      en: "How do you make a pricelist available in the Point of Sale application? (Odoo Learn — Set up pricelists)",
      fr: "Comment mettre à disposition une liste de prix dans l'application Point de Vente ? (Odoo Learn — Mettre en place des listes de prix)",
    },
    correct: {
      en: "By selecting it in the \"Available\" box under pricing settings.",
      fr: "En le sélectionnant dans la case « Disponible » sous les paramètres de tarification.",
    },
    distractors: [
      { en: "By publishing it on the website.", fr: "En le publiant sur le site Internet." },
      { en: "By adding it to the customer's profile.", fr: "En l'ajoutant au profil du client." },
      { en: "By enabling it in the inventory module.", fr: "En l'activant dans le module d'inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up pricelists): By selecting it in the \"Available\" box under pricing settings.",
      fr: "Source Odoo Learn (Configurer des listes de prix) : En le sélectionnant dans la case \"Disponible\" sous les paramètres de tarification.",
    },
  }),
  complexQ({
    id: "pos-054",
    module: "pos",
    text: {
      en: "What is impacted by an active pricelist? (Odoo Learn — Set up pricelists)",
      fr: "Qu'est-ce qui est impacté par une liste de prix active ? (Odoo Learn — Mettre en place des listes de prix)",
    },
    correct: {
      en: "Product prices based on set conditions.",
      fr: "Prix ​​des produits basés sur des conditions définies.",
    },
    distractors: [
      { en: "Customer discounts and loyalty points.", fr: "Remises clients et points de fidélité." },
      { en: "Tax calculations based on customer location.", fr: "Calculs de taxes basés sur l'emplacement du client." },
      { en: "Promotions based on customer purchase history.", fr: "Promotions basées sur l'historique d'achat du client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up pricelists): Product prices based on set conditions.",
      fr: "Source Odoo Learn (Configurer des listes de prix) : Prix des produits basés sur des conditions définies.",
    },
  }),
  complexQ({
    id: "pos-055",
    module: "pos",
    text: {
      en: "What are the different price type options when creating a price list rule, and what do they do? (Odoo Learn — Set up pricelists)",
      fr: "Quelles sont les différentes options de type de prix lors de la création d’une règle de liste de prix, et à quoi servent-elles ? (Odoo Learn — Mettre en place des listes de prix)",
    },
    correct: {
      en: "Fixed, Discount, Formula: “Fixed” sets a specific price, “Discount” reduces it, and “Formula” calculates prices dynamically.",
      fr: "Fixe, Remise, Formule : « Fixe » fixe un prix spécifique, « Remise » le réduit et « Formule » calcule les prix de manière dynamique.",
    },
    distractors: [
      { en: "Shipping, Handling, Surcharge: “Shipping” charges a fee, “Handling” covers processing, and “Surcharge” adds extra costs.", fr: "Expédition, manutention, supplément : « Expédition » facture des frais, « Manutention » couvre le traitement et « Supplément » ajoute des frais supplémentaires." },
      { en: "Customer Rating, Popularity, Time: Prices change based on customer, demand, or time of day.", fr: "Évaluation des clients, popularité, heure : les prix changent en fonction du client, de la demande ou de l'heure de la journée." },
      { en: "Inventory, Supplier, Market: Prices adjust based on stock, cost, or market averages.", fr: "Inventaire, fournisseur, marché : les prix s'ajustent en fonction du stock, du coût ou des moyennes du marché." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up pricelists): Fixed, Discount, Formula: “Fixed” sets a specific price, “Discount” reduces it, and “Formula” calculates prices dynamically.",
      fr: "Source Odoo Learn (Configurer des listes de prix) : Fixe, Remise, Formule : « Fixe » fixe un prix spécifique, « Remise » le réduit et « Formule » calcule les prix de manière dynamique.",
    },
  }),
  complexQ({
    id: "pos-056",
    module: "pos",
    text: {
      en: "How do you assign pricelists to customers, and what happens when you switch customers? (Odoo Learn — Set up pricelists)",
      fr: "Comment attribuer des listes de prix aux clients et que se passe-t-il lorsque vous changez de client ? (Odoo Learn — Mettre en place des listes de prix)",
    },
    correct: {
      en: "You assign pricelists in the customer's form; switching reverts to default unless the new customer has their own pricelist.",
      fr: "Vous attribuez des listes de prix dans le formulaire client ; la commutation revient à la valeur par défaut, sauf si le nouveau client dispose de sa propre liste de prix.",
    },
    distractors: [
      { en: "You assign pricelists in the customer's form; switching keeps the active pricelist if you manually enabled it.", fr: "Vous attribuez des listes de prix dans le formulaire client ; la commutation conserve la liste de prix active si vous l'avez activée manuellement." },
      { en: "You can add customers in the pricelist setup form; switching keeps the active pricelist if you manually enabled it.", fr: "Vous pouvez ajouter des clients dans le formulaire de configuration de la liste de prix ; la commutation conserve la liste de prix active si vous l'avez activée manuellement." },
      { en: "You can add customers in the pricelist setup form; switching reverts to default unless the new customer has their own pricelist.", fr: "Vous pouvez ajouter des clients dans le formulaire de configuration de la liste de prix ; la commutation revient à la valeur par défaut, sauf si le nouveau client dispose de sa propre liste de prix." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up pricelists): You assign pricelists in the customer's form; switching reverts to default unless the new customer has their own pricelist.",
      fr: "Source Odoo Learn (Mettre en place des listes de prix) : Vous attribuez des listes de prix dans le formulaire client ; la commutation revient à la valeur par défaut, sauf si le nouveau client dispose de sa propre liste de prix.",
    },
  }),
  complexQ({
    id: "pos-057",
    module: "pos",
    text: {
      en: "Before creating any specific loyalty programs in Odoo, which option must be activated under the \"Pricing\" section of the Point of Sale settings? (Odoo Learn — Build loyalty)",
      fr: "Avant de créer des programmes de fidélité spécifiques dans Odoo, quelle option doit être activée dans la section « Tarification » des paramètres du point de vente ? (Odoo Learn — Fidéliser)",
    },
    correct: {
      en: "Promotions, Coupons, Gift Card & Loyalty Program.",
      fr: "Promotions, coupons, cartes-cadeaux et programme de fidélité.",
    },
    distractors: [
      { en: "Customer Discount Programs.", fr: "Programmes de réduction client." },
      { en: "Loyalty Card System and Promotions.", fr: "Système de carte de fidélité et promotions." },
      { en: "Special Offers and Deals.", fr: "Offres spéciales et offres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Build loyalty): Promotions, Coupons, Gift Card & Loyalty Program.",
      fr: "Source Odoo Learn (Fidélisation) : Promotions, coupons, carte cadeau et programme de fidélité.",
    },
  }),
  complexQ({
    id: "pos-058",
    module: "pos",
    text: {
      en: "Why use a loyalty program template instead of building one from scratch? (Odoo Learn — Build loyalty)",
      fr: "Pourquoi utiliser un modèle de programme de fidélité au lieu d’en créer un à partir de zéro ? (Odoo Learn — Fidéliser)",
    },
    correct: {
      en: "It saves time by pre-filling common fields and settings.",
      fr: "Cela permet de gagner du temps en pré-remplissant les champs et paramètres communs.",
    },
    distractors: [
      { en: "It unlocks hidden program types unavailable in manual mode.", fr: "Il déverrouille les types de programmes cachés indisponibles en mode manuel." },
      { en: "It disables manual editing to prevent errors during setup.", fr: "Il désactive l'édition manuelle pour éviter les erreurs lors de la configuration." },
      { en: "It automatically activates the loyalty program upon creation.", fr: "Il active automatiquement le programme de fidélité dès sa création." },
    ],
    explanation: {
      en: "Source Odoo Learn (Build loyalty): It saves time by pre-filling common fields and settings.",
      fr: "Source Odoo Learn (Fidélisation) : Il permet de gagner du temps en pré-remplissant les champs et paramètres communs.",
    },
  }),
  complexQ({
    id: "pos-059",
    module: "pos",
    text: {
      en: "What does the 'Program Type' field control when creating a loyalty program? (Odoo Learn — Build loyalty)",
      fr: "Que contrôle le champ « Type de programme » lors de la création d'un programme de fidélité ? (Odoo Learn — Fidéliser)",
    },
    correct: {
      en: "The structure of available conditions and rewards.",
      fr: "La structure des conditions et récompenses disponibles.",
    },
    distractors: [
      { en: "The currency used to calculate points and rewards.", fr: "La devise utilisée pour calculer les points et les récompenses." },
      { en: "The payment methods that are eligible for rewards.", fr: "Les modes de paiement éligibles aux récompenses." },
      { en: "The expiration date for all earned loyalty points.", fr: "La date d'expiration de tous les points de fidélité gagnés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Build loyalty): The structure of available conditions and rewards.",
      fr: "Source Odoo Learn (Fidélisation) : La structure des conditions et récompenses disponibles.",
    },
  }),
  complexQ({
    id: "pos-060",
    module: "pos",
    text: {
      en: "What is the function of the 'Pricelist' field within a loyalty program? (Odoo Learn — Build loyalty)",
      fr: "Quelle est la fonction du champ « Liste de prix » au sein d'un programme de fidélité ? (Odoo Learn — Fidéliser)",
    },
    correct: {
      en: "It restricts the loyalty program to apply only when a chosen pricelist is active in the POS cart.",
      fr: "Il limite l'application du programme de fidélité uniquement lorsqu'une liste de prix choisie est active dans le panier du point de vente.",
    },
    distractors: [
      { en: "It restricts the program to apply only when a specific customer is active in the POS cart.", fr: "Il limite l'application du programme uniquement lorsqu'un client spécifique est actif dans le panier du point de vente." },
      { en: "It limits the program to products within a chosen price range.", fr: "Il limite le programme aux produits dans une fourchette de prix choisie." },
      { en: "It determines how loyalty points are converted into discounts.", fr: "Il détermine la manière dont les points de fidélité sont convertis en remises." },
    ],
    explanation: {
      en: "Source Odoo Learn (Build loyalty): It restricts the loyalty program to apply only when a chosen pricelist is active in the POS cart.",
      fr: "Source Odoo Learn (Fidélisation) : Il restreint le programme de fidélité à s'appliquer uniquement lorsqu'une liste de prix choisie est active dans le panier du point de vente.",
    },
  }),
  complexQ({
    id: "pos-061",
    module: "pos",
    text: {
      en: "What is the core mechanism underlying all Odoo loyalty programs in terms of conditions and rewards? (Odoo Learn — Build loyalty)",
      fr: "Quel est le mécanisme de base qui sous-tend tous les programmes de fidélité Odoo en termes de conditions et de récompenses ? (Odoo Learn — Fidéliser)",
    },
    correct: {
      en: "Conditions are established to determine qualification, and rewards are defined for fulfillment.",
      fr: "Des conditions sont établies pour déterminer la qualification et des récompenses sont définies pour leur réalisation.",
    },
    distractors: [
      { en: "Customers first receive a reward, then conditions are applied based on their next purchase.", fr: "Les clients reçoivent d’abord une récompense, puis des conditions sont appliquées en fonction de leur prochain achat." },
      { en: "Loyalty programs offer rewards based on customer spending tiers, regardless of other conditions.", fr: "Les programmes de fidélité offrent des récompenses basées sur les niveaux de dépenses des clients, quelles que soient les autres conditions." },
      { en: "Loyalty programs operate solely based on pre-set discount codes without flexible conditions.", fr: "Les programmes de fidélité fonctionnent uniquement sur la base de codes de réduction prédéfinis sans conditions flexibles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Build loyalty): Conditions are established to determine qualification, and rewards are defined for fulfillment.",
      fr: "Source Odoo Learn (fidéliser) : des conditions sont établies pour déterminer la qualification et des récompenses sont définies pour leur accomplissement.",
    },
  }),
  complexQ({
    id: "pos-062",
    module: "pos",
    text: {
      en: "When configuring a preparation display, what default stages are pre-created? (Odoo Learn — Preparation Display)",
      fr: "Lors de la configuration d'un affichage de préparation, quelles étapes par défaut sont pré-créées ? (Odoo Learn — Affichage de préparation)",
    },
    correct: {
      en: "To prepare, Ready, and Complete",
      fr: "Pour préparer, prêt et terminé",
    },
    distractors: [
      { en: "To prepare, Pending, and Delivered", fr: "À préparer, en attente et livré" },
      { en: "Order, Preparation, and Display", fr: "Commande, préparation et affichage" },
      { en: "Preparation, Display, and Delivery", fr: "Préparation, présentation et livraison" },
    ],
    explanation: {
      en: "Source Odoo Learn (Preparation Display): To prepare, Ready, and Complete",
      fr: "Source Odoo Learn (Affichage de préparation) : Pour préparer, prêt et terminer",
    },
  }),
  complexQ({
    id: "pos-063",
    module: "pos",
    text: {
      en: "How can you send an order to the preparation display without validating a payment? (Odoo Learn — Preparation Display)",
      fr: "Comment envoyer une commande au présentoir de préparation sans valider un paiement ? (Odoo Learn — Affichage de préparation)",
    },
    correct: {
      en: "In a restaurant setup, click the Order button.",
      fr: "Dans la configuration d'un restaurant, cliquez sur le bouton Commander.",
    },
    distractors: [
      { en: "In a shop setup, activate the “Order before checkout” setting.", fr: "Dans une configuration de boutique, activez le paramètre « Commander avant de passer à la caisse »." },
      { en: "In a shop setup, add a customer and click Orders > Load Order.", fr: "Dans la configuration d'une boutique, ajoutez un client et cliquez sur Commandes > Charger la commande." },
      { en: "In a restaurant setup, click Actions > Send to prepare.", fr: "Dans la configuration d'un restaurant, cliquez sur Actions > Envoyer pour préparer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Preparation Display): In a restaurant setup, click the Order button.",
      fr: "Source Odoo Learn (Affichage de préparation) : Dans une configuration de restaurant, cliquez sur le bouton Commander.",
    },
  }),
  complexQ({
    id: "pos-064",
    module: "pos",
    text: {
      en: "What does the “Product categories” field allow you to do when configuring the preparation display? (Odoo Learn — Preparation Display)",
      fr: "Que permet le champ « Catégories de produits » lors du paramétrage de l'affichage des préparations ? (Odoo Learn — Affichage de préparation)",
    },
    correct: {
      en: "It allows you to specify which products to send in the preparation display.",
      fr: "Il permet de préciser quels produits envoyer dans le présentoir de préparation.",
    },
    distractors: [
      { en: "It allows you to select multiple orders at once in a point of sale session.", fr: "Il vous permet de sélectionner plusieurs commandes à la fois dans une session de point de vente." },
      { en: "It allows you to categorize products within the preparation display.", fr: "Il permet de catégoriser les produits au sein de l'affichage des préparations." },
      { en: "It allows you to restrict the categories displayed on the point of sale interface.", fr: "Il permet de restreindre les catégories affichées sur l'interface du point de vente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Preparation Display): It allows you to specify which products to send in the preparation display.",
      fr: "Source Odoo Learn (Affichage de préparation) : Il permet de préciser quels produits envoyer dans l'affichage de préparation.",
    },
  }),
  complexQ({
    id: "pos-065",
    module: "pos",
    text: {
      en: "What key info is printed on a ticket when the printer first connects to the network? (Odoo Learn — Set up printers)",
      fr: "Quelles informations clés sont imprimées sur un ticket lorsque l'imprimante se connecte pour la première fois au réseau ? (Odoo Learn — Configurer les imprimantes)",
    },
    correct: {
      en: "The printer's IP address.",
      fr: "L'adresse IP de l'imprimante.",
    },
    distractors: [
      { en: "The printer's model number.", fr: "Le numéro de modèle de l'imprimante." },
      { en: "The printer's firmware version.", fr: "La version du micrologiciel de l'imprimante." },
      { en: "The printer's serial number.", fr: "Le numéro de série de l'imprimante." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up printers): The printer's IP address.",
      fr: "Source Odoo Learn (Configurer les imprimantes) : L'adresse IP de l'imprimante.",
    },
  }),
  complexQ({
    id: "pos-066",
    module: "pos",
    text: {
      en: "What is the printer’s IP address primarily used for in the Odoo Point of Sale setup? (Odoo Learn — Set up printers)",
      fr: "À quoi sert principalement l’adresse IP de l’imprimante dans la configuration du point de vente Odoo ? (Odoo Learn — Configurer les imprimantes)",
    },
    correct: {
      en: "To connect the physical printer to the POS database.",
      fr: "Pour connecter l'imprimante physique à la base de données POS.",
    },
    distractors: [
      { en: "To automatically update the printer's software.", fr: "Pour mettre à jour automatiquement le logiciel de l'imprimante." },
      { en: "To connect the printer directly to mobile POS devices via Wi-Fi.", fr: "Pour connecter l'imprimante directement aux appareils mobiles POS via Wi-Fi." },
      { en: "To enable the printer to wirelessly scan product barcodes.", fr: "Pour permettre à l'imprimante de scanner sans fil les codes-barres des produits." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up printers): To connect the physical printer to the POS database.",
      fr: "Source Odoo Learn (Configurer les imprimantes) : Pour connecter l'imprimante physique à la base de données POS.",
    },
  }),
  complexQ({
    id: "pos-067",
    module: "pos",
    text: {
      en: "What requirements must be fulfilled for a cash drawer to connect and operate with Odoo? (Odoo Learn — Set up printers)",
      fr: "Quelles conditions doivent être remplies pour qu’un tiroir-caisse se connecte et fonctionne avec Odoo ? (Odoo Learn — Configurer les imprimantes)",
    },
    correct: {
      en: "The cash drawer must be connected to a printer first.",
      fr: "Le tiroir-caisse doit d'abord être connecté à une imprimante.",
    },
    distractors: [
      { en: "The cash drawer must have its own separate IP address.", fr: "Le tiroir-caisse doit avoir sa propre adresse IP distincte." },
      { en: "The cash drawer must be connected directly to the Odoo server.", fr: "Le tiroir-caisse doit être connecté directement au serveur Odoo." },
      { en: "The cash drawer must be activated via a dedicated USB port.", fr: "Le tiroir-caisse doit être activé via un port USB dédié." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up printers): The cash drawer must be connected to a printer first.",
      fr: "Source Odoo Learn (Configurer les imprimantes) : Le tiroir-caisse doit d'abord être connecté à une imprimante.",
    },
  }),
  complexQ({
    id: "pos-068",
    module: "pos",
    text: {
      en: "How is a preparation printer configured to print only specific product categories? (Odoo Learn — Set up printers)",
      fr: "Comment une imprimante de préparation est-elle configurée pour imprimer uniquement des catégories de produits spécifiques ? (Odoo Learn — Configurer les imprimantes)",
    },
    correct: {
      en: "By setting the product's POS categories in the printer's profile.",
      fr: "En définissant les catégories POS du produit dans le profil de l'imprimante.",
    },
    distractors: [
      { en: "By inputting the printer's IP address directly into the product categories.", fr: "En saisissant l'adresse IP de l'imprimante directement dans les catégories de produits." },
      { en: "By selecting \"Use an Epson printer\" within the printer's configuration settings.", fr: "En sélectionnant « Utiliser une imprimante Epson » dans les paramètres de configuration de l'imprimante." },
      { en: "By assigning a unique printer ID to each relevant product category.", fr: "En attribuant un identifiant d'imprimante unique à chaque catégorie de produits pertinente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up printers): By setting the product's POS categories in the printer's profile.",
      fr: "Source Odoo Learn (Configurer les imprimantes) : En définissant les catégories POS du produit dans le profil de l'imprimante.",
    },
  }),
  complexQ({
    id: "pos-069",
    module: "pos",
    text: {
      en: "What is the benefit of enabling \"Automatic Receipt Printing\" under \"Bills & Receipts\" in Odoo POS settings? (Odoo Learn — Set up printers)",
      fr: "Quel est l'avantage d'activer « Impression automatique des reçus » sous « Factures et reçus » dans les paramètres d'Odoo POS ? (Odoo Learn — Configurer les imprimantes)",
    },
    correct: {
      en: "It bypasses the manual confirmation step after each sale for receipt printing.",
      fr: "Il contourne l'étape de confirmation manuelle après chaque vente pour l'impression du reçu.",
    },
    distractors: [
      { en: "It allows customers to choose their preferred receipt format.", fr: "Il permet aux clients de choisir leur format de reçu préféré." },
      { en: "It sends digital receipts directly to the customer's email.", fr: "Il envoie des reçus numériques directement à l'e-mail du client." },
      { en: "It enables the printer to print receipts in multiple languages.", fr: "Il permet à l'imprimante d'imprimer des reçus dans plusieurs langues." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set up printers): It bypasses the manual confirmation step after each sale for receipt printing.",
      fr: "Source Odoo Learn (Configurer les imprimantes) : Il contourne l'étape de confirmation manuelle après chaque vente pour l'impression des reçus.",
    },
  }),
  complexQ({
    id: "pos-070",
    module: "pos",
    text: {
      en: "Which journal type is designated for payments made through a terminal integration like Viva Wallet? (Odoo Learn — Payment terminals)",
      fr: "Quel type de journal est désigné pour les paiements effectués via une intégration de terminal comme Viva Wallet ? (Odoo Learn — Terminaux de paiement)",
    },
    correct: {
      en: "Bank",
      fr: "Banque",
    },
    distractors: [
      { en: "Cash", fr: "Espèces" },
      { en: "Accounts Receivable", fr: "Comptes débiteurs" },
      { en: "Revenue", fr: "Revenu" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terminals): Bank",
      fr: "Source Odoo Learn (Terminaux de paiement) : Banque",
    },
  }),
  complexQ({
    id: "pos-071",
    module: "pos",
    text: {
      en: "Which 'Integration' option should be selected to connect a physical terminal? (Odoo Learn — Payment terminals)",
      fr: "Quelle option « Intégration » faut-il sélectionner pour connecter un terminal physique ? (Odoo Learn — Terminaux de paiement)",
    },
    correct: {
      en: "Terminal",
      fr: "Terminal",
    },
    distractors: [
      { en: "Bank app", fr: "Application bancaire" },
      { en: "Direct Connection", fr: "Connexion directe" },
      { en: "External device", fr: "Périphérique externe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terminals): Terminal",
      fr: "Source Odoo Learn (Terminaux de paiement) : Terminal",
    },
  }),
  complexQ({
    id: "pos-072",
    module: "pos",
    text: {
      en: "What is the primary function of checking the \"Test mode\" box when setting up the Viva payment method in Odoo? (Odoo Learn — Payment terminals)",
      fr: "Quelle est la fonction principale de cocher la case « Mode test » lors de la configuration du mode de paiement Viva dans Odoo ? (Odoo Learn — Terminaux de paiement)",
    },
    correct: {
      en: "To run test transactions without real charges.",
      fr: "Pour exécuter des transactions tests sans frais réels.",
    },
    distractors: [
      { en: "To disable transaction fees during the onboarding phase.", fr: "Pour désactiver les frais de transaction pendant la phase d'intégration." },
      { en: "To bypass API authentication requirements.", fr: "Pour contourner les exigences d'authentification de l'API." },
      { en: "To allow users to submit offline payments.", fr: "Pour permettre aux utilisateurs de soumettre des paiements hors ligne." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terminals): To run test transactions without real charges.",
      fr: "Source Odoo Learn (Terminaux de paiement) : Pour tester des transactions sans frais réels.",
    },
  }),
  complexQ({
    id: "pos-073",
    module: "pos",
    text: {
      en: "The Viva Webhook Endpoint is used for communication between Viva and Odoo. What is the main purpose of copying this endpoint to the Viva account? (Odoo Learn — Payment terminals)",
      fr: "Le point de terminaison Viva Webhook est utilisé pour la communication entre Viva et Odoo. Quel est l'objectif principal de la copie de ce point de terminaison sur le compte Viva ? (Odoo Learn — Terminaux de paiement)",
    },
    correct: {
      en: "To enable real-time notifications for relevant payment events, such as customer fund transfers.",
      fr: "Pour activer les notifications en temps réel pour les événements de paiement pertinents, tels que les transferts de fonds des clients.",
    },
    distractors: [
      { en: "To automate the reconciliation of daily sales reports with bank statements.", fr: "Automatiser le rapprochement des rapports de ventes quotidiens avec les relevés bancaires." },
      { en: "To establish a secure, encrypted connection for all transaction data transfer.", fr: "Pour établir une connexion sécurisée et cryptée pour tous les transferts de données de transaction." },
      { en: "To provide customers with instant digital receipts for every successful transaction.", fr: "Fournir aux clients des reçus numériques instantanés pour chaque transaction réussie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terminals): To enable real-time notifications for relevant payment events, such as customer fund transfers.",
      fr: "Source Odoo Learn (Terminaux de paiement) : pour activer les notifications en temps réel pour les événements de paiement pertinents, tels que les transferts de fonds des clients.",
    },
  }),
  complexQ({
    id: "pos-074",
    module: "pos",
    text: {
      en: "How can you apply a percentage-based discount to a product? (Odoo Learn — Sell products)",
      fr: "Comment appliquer une remise en pourcentage à un produit ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "Select the product in the cart, click the discount button, and enter the discount percentage.",
      fr: "Sélectionnez le produit dans le panier, cliquez sur le bouton de réduction et saisissez le pourcentage de remise.",
    },
    distractors: [
      { en: "Select the product in the cart, click the price button, and enter a lower amount as the new price.", fr: "Sélectionnez le produit dans le panier, cliquez sur le bouton Prix et saisissez un montant inférieur comme nouveau prix." },
      { en: "Discounts are automatically applied based on the customer's purchase history.", fr: "Les remises sont automatiquement appliquées en fonction de l'historique d'achat du client." },
      { en: "Discounts can only be added to the complete order and never to a specific product.", fr: "Les réductions ne peuvent être ajoutées qu’à la commande complète et jamais à un produit spécifique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sell products): Select the product in the cart, click the discount button, and enter the discount percentage.",
      fr: "Source Odoo Learn (Vendre des produits) : Sélectionnez le produit dans le panier, cliquez sur le bouton de remise et saisissez le pourcentage de remise.",
    },
  }),
  complexQ({
    id: "pos-075",
    module: "pos",
    text: {
      en: "How do you assign a customer to an order, and what is the benefit of doing so? (Odoo Learn — Sell products)",
      fr: "Comment attribuer un client à une commande et quel est l'avantage de le faire ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "Click the customer button and select or create a customer to assign them to the order to track purchases and apply loyalty points.",
      fr: "Cliquez sur le bouton client et sélectionnez ou créez un client pour l'attribuer à la commande afin de suivre les achats et d'appliquer des points de fidélité.",
    },
    distractors: [
      { en: "At checkout, click the customer button and select or create a customer. You can only add a customer after completing and paying for the order.", fr: "Lors du paiement, cliquez sur le bouton client et sélectionnez ou créez un client. Vous ne pouvez ajouter un client qu'après avoir terminé et payé la commande." },
      { en: "Customers are automatically assigned when they make a payment using a saved card.", fr: "Les clients sont automatiquement attribués lorsqu'ils effectuent un paiement à l'aide d'une carte enregistrée." },
      { en: "Click the customer button and select or create a customer. Once a customer is assigned to an order, they can use multiple payment methods for that transaction.", fr: "Cliquez sur le bouton client et sélectionnez ou créez un client. Une fois qu'un client est affecté à une commande, il peut utiliser plusieurs méthodes de paiement pour cette transaction." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sell products): Click the customer button and select or create a customer to assign them to the order to track purchases and apply loyalty points.",
      fr: "Source Odoo Learn (Vendre des produits) : Cliquez sur le bouton client et sélectionnez ou créez un client pour l'attribuer à la commande afin de suivre les achats et d'appliquer des points de fidélité.",
    },
  }),
  complexQ({
    id: "pos-076",
    module: "pos",
    text: {
      en: "How can a customer split their payment between two different payment methods? (Odoo Learn — Sell products)",
      fr: "Comment un client peut-il répartir son paiement entre deux modes de paiement différents ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "At checkout, select the first payment method and enter the amount, then select the second payment method for the remaining balance.",
      fr: "Lors du paiement, sélectionnez le premier mode de paiement et saisissez le montant, puis sélectionnez le deuxième mode de paiement pour le solde restant.",
    },
    distractors: [
      { en: "Once a payment method is selected, the customer must pay the full amount using only that payment method.", fr: "Une fois un mode de paiement sélectionné, le client doit payer le montant total en utilisant uniquement ce mode de paiement." },
      { en: "Splitting a payment is only possible if the customer has loyalty points to cover part of the transaction.", fr: "Le fractionnement d'un paiement n'est possible que si le client dispose de points de fidélité pour couvrir une partie de la transaction." },
      { en: "The system automatically determines and computes the split if the customer has multiple payment options saved.", fr: "Le système détermine et calcule automatiquement la répartition si le client a enregistré plusieurs options de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sell products): At checkout, select the first payment method and enter the amount, then select the second payment method for the remaining balance.",
      fr: "Source Odoo Learn (Vendre des produits) : Lors du paiement, sélectionnez le premier mode de paiement et saisissez le montant, puis sélectionnez le deuxième mode de paiement pour le solde restant.",
    },
  }),
  complexQ({
    id: "pos-077",
    module: "pos",
    text: {
      en: "How can you set a specific price for a product in the PoS application? (Odoo Learn — Sell products)",
      fr: "Comment fixer un prix spécifique pour un produit dans l'application PoS ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "Select the product, click the price button, enter the new amount, and confirm. The system will override the original price for this order only.",
      fr: "Sélectionnez le produit, cliquez sur le bouton prix, saisissez le nouveau montant et confirmez. Le système remplacera le prix initial pour cette commande uniquement.",
    },
    distractors: [
      { en: "Select the product, click the price button, enter the new amount, and confirm. The system will store this new price for all future transactions.", fr: "Sélectionnez le produit, cliquez sur le bouton prix, saisissez le nouveau montant et confirmez. Le système stockera ce nouveau prix pour toutes les transactions futures." },
      { en: "Custom prices can only be set if the product has a discount applied first.", fr: "Les prix personnalisés ne peuvent être définis que si le produit bénéficie d'une remise appliquée en premier." },
      { en: "You must update the product’s default price in the backend settings before processing the order.", fr: "Vous devez mettre à jour le prix par défaut du produit dans les paramètres du backend avant de traiter la commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sell products): Select the product, click the price button, enter the new amount, and confirm. The system will override the original price for this order only.",
      fr: "Source Odoo Learn (Vendre des produits) : Sélectionnez le produit, cliquez sur le bouton prix, saisissez le nouveau montant et confirmez. Le système remplacera le prix initial pour cette commande uniquement.",
    },
  }),
  complexQ({
    id: "pos-078",
    module: "pos",
    text: {
      en: "What action doesn’t allow you to view orders to refund without a customer’s paper receipt? (Odoo Learn — Refund customers)",
      fr: "Quelle action ne permet pas de visualiser les commandes à rembourser sans reçu papier du client ? (Odoo Learn — Rembourser les clients)",
    },
    correct: {
      en: "Switch to the Sales app and search for the order using customer details.",
      fr: "Basculez vers l'application Ventes et recherchez la commande à l'aide des détails du client.",
    },
    distractors: [
      { en: "From the POS dashboard, go to the list of past orders, select an order, and click “Return Products”.", fr: "Depuis le tableau de bord du point de vente, accédez à la liste des commandes passées, sélectionnez une commande et cliquez sur « Retourner les produits »." },
      { en: "From an open POS session, click the ellipsis, then “Refund”, and scroll through the order list manually.", fr: "À partir d’une session PDV ouverte, cliquez sur les points de suspension, puis sur « Remboursement » et faites défiler la liste des commandes manuellement." },
      { en: "From an open POS session, click “Orders”, open the dropdown filter, and select “Paid”.", fr: "À partir d'une session POS ouverte, cliquez sur « Commandes », ouvrez le filtre déroulant et sélectionnez « Payé »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Refund customers): Switch to the Sales app and search for the order using customer details.",
      fr: "Source Odoo Learn (Rembourser les clients) : Basculez vers l'application Ventes et recherchez la commande en utilisant les détails du client.",
    },
  }),
  complexQ({
    id: "pos-079",
    module: "pos",
    text: {
      en: "What is the process for refunding a single item from an order with multiple products? (Odoo Learn — Refund customers)",
      fr: "Quel est le processus de remboursement d’un seul article d’une commande comportant plusieurs produits ? (Odoo Learn — Rembourser les clients)",
    },
    correct: {
      en: "Select the order, choose the product to refund, set the quantity, and click “Refund”.",
      fr: "Sélectionnez la commande, choisissez le produit à rembourser, définissez la quantité et cliquez sur « Rembourser ».",
    },
    distractors: [
      { en: "Reopen the order, deselect the unwanted products, and click “Refund”.", fr: "Rouvrez la commande, désélectionnez les produits indésirables et cliquez sur « Rembourser »." },
      { en: "Edit the order, remove the item from the list, and re-save the receipt.", fr: "Modifiez la commande, supprimez l'article de la liste et enregistrez à nouveau le reçu." },
      { en: "Recreate the order with a negative value for the returned product.", fr: "Recréez la commande avec une valeur négative pour le produit retourné." },
    ],
    explanation: {
      en: "Source Odoo Learn (Refund customers): Select the order, choose the product to refund, set the quantity, and click “Refund”.",
      fr: "Source Odoo Learn (Rembourser les clients) : Sélectionnez la commande, choisissez le produit à rembourser, définissez la quantité et cliquez sur « Rembourser ».",
    },
  }),
  complexQ({
    id: "pos-080",
    module: "pos",
    text: {
      en: "What payment method can you use to make a refund? (Odoo Learn — Refund customers)",
      fr: "Quel mode de paiement pouvez-vous utiliser pour effectuer un remboursement ? (Odoo Learn — Rembourser les clients)",
    },
    correct: {
      en: "Cash, Card, Customer Account, and Gift Card.",
      fr: "Espèces, carte, compte client et carte cadeau.",
    },
    distractors: [
      { en: "Crypto, Cash, and Bank transfer.", fr: "Crypto, espèces et virement bancaire." },
      { en: "Bank transfer only.", fr: "Virement bancaire uniquement." },
      { en: "Store credit only.", fr: "Crédit en magasin uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Refund customers): Cash, Card, Customer Account, and Gift Card.",
      fr: "Source Odoo Learn (Rembourser les clients) : espèces, carte, compte client et carte cadeau.",
    },
  }),
  complexQ({
    id: "pos-081",
    module: "pos",
    text: {
      en: "How can a sales order quotation from the Sales app be accessed in the Point of Sale interface? (Odoo Learn — Handle quotations)",
      fr: "Comment accéder à une offre de commande client de l’application Ventes dans l’interface Point de Vente ? (Odoo Learn — Gérer les devis)",
    },
    correct: {
      en: "By clicking on \"Actions\" and then \"Quotations/Orders.\"",
      fr: "En cliquant sur « Actions » puis « Devis/Commandes ».",
    },
    distractors: [
      { en: "By searching for the customer's name in the POS search bar.", fr: "En recherchant le nom du client dans la barre de recherche du PDV." },
      { en: "By refreshing the main POS screen.", fr: "En actualisant l’écran principal du point de vente." },
      { en: "By navigating to \"Sales History\" and selecting the most recent order.", fr: "En accédant à « Historique des ventes » et en sélectionnant la commande la plus récente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Handle quotations): By clicking on \"Actions\" and then \"Quotations/Orders.\"",
      fr: "Source Odoo Learn (Gérer les devis) : En cliquant sur « Actions » puis « Devis/Commandes ».",
    },
  }),
  complexQ({
    id: "pos-082",
    module: "pos",
    text: {
      en: "What kind of payment flexibility does Odoo provide for down payments on sales orders in the POS? (Odoo Learn — Handle quotations)",
      fr: "Quel type de flexibilité de paiement Odoo offre-t-il pour les acomptes sur les commandes clients dans le point de vente ? (Odoo Learn — Gérer les devis)",
    },
    correct: {
      en: "Users can enter a specific amount or a percentage.",
      fr: "Les utilisateurs peuvent saisir un montant spécifique ou un pourcentage.",
    },
    distractors: [
      { en: "The system accepts only a fixed minimum amount.", fr: "Le système n'accepte qu'un montant minimum fixe." },
      { en: "The system allows entry of only part of the total.", fr: "Le système permet de saisir seulement une partie du total." },
      { en: "Customers must pay the full amount upfront.", fr: "Les clients doivent payer le montant total à l'avance." },
    ],
    explanation: {
      en: "Source Odoo Learn (Handle quotations): Users can enter a specific amount or a percentage.",
      fr: "Source Odoo Learn (Gérer les devis) : Les utilisateurs peuvent saisir un montant spécifique ou un pourcentage.",
    },
  }),
  complexQ({
    id: "pos-083",
    module: "pos",
    text: {
      en: "What happens to the initial down payment when the sales order balance is paid at the POS? (Odoo Learn — Handle quotations)",
      fr: "Qu’arrive-t-il à l’acompte initial lorsque le solde de la commande client est payé au point de vente ? (Odoo Learn — Gérer les devis)",
    },
    correct: {
      en: "It is automatically deducted from the final amount.",
      fr: "Il est automatiquement déduit du montant final.",
    },
    distractors: [
      { en: "It is flagged for manual review by a manager.", fr: "Il est marqué pour une révision manuelle par un responsable." },
      { en: "It is added back to the customer's loyalty points.", fr: "Il est réajouté aux points de fidélité du client." },
      { en: "It is shown as a separate outstanding balance.", fr: "Il est présenté comme un solde impayé distinct." },
    ],
    explanation: {
      en: "Source Odoo Learn (Handle quotations): It is automatically deducted from the final amount.",
      fr: "Source Odoo Learn (Gérer les devis) : Il est automatiquement déduit du montant final.",
    },
  }),
  complexQ({
    id: "pos-084",
    module: "pos",
    text: {
      en: "How can one obtain a clear overview of the Point of Sale transactions (e.g., an initial down payment) related to an original Sales Order record? (Odoo Learn — Handle quotations)",
      fr: "Comment obtenir un aperçu clair des transactions du point de vente (par exemple, un acompte initial) liées à un enregistrement de commande client original ? (Odoo Learn — Gérer les devis)",
    },
    correct: {
      en: "By refreshing the Sales Order page and checking the 'Transfer to POS' smart button, which provides a summary of connected POS transactions.",
      fr: "En actualisant la page Commande client et en cochant le bouton intelligent « Transférer vers le point de vente », qui fournit un résumé des transactions POS connectées.",
    },
    distractors: [
      { en: "By accessing the 'Customer Invoices' smart button, which shows a complete payment history.", fr: "En accédant au bouton intelligent « Factures clients », qui affiche un historique complet des paiements." },
      { en: "By reviewing the 'Product Movements' report, which details inventory changes related to the order.", fr: "En examinant le rapport « Mouvements de produits », qui détaille les modifications de stock liées à la commande." },
      { en: "By navigating to the 'POS Session Overview' for the day, which includes a comprehensive financial report for the order.", fr: "En accédant à l'« Aperçu de la session POS » de la journée, qui comprend un rapport financier complet pour la commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Handle quotations): By refreshing the Sales Order page and checking the 'Transfer to POS' smart button, which provides a summary of connected POS transactions.",
      fr: "Source Odoo Learn (Gérer les devis) : En actualisant la page des commandes clients et en cochant le bouton intelligent « Transférer vers le point de vente », qui fournit un résumé des transactions POS connectées.",
    },
  }),
  complexQ({
    id: "pos-085",
    module: "pos",
    text: {
      en: "If the shipping policy is set to \"When all products are ready,” when does the shipment occur? (Odoo Learn — Ship later)",
      fr: "Si la politique d'expédition est définie sur « Quand tous les produits sont prêts », quand l'expédition a-t-elle lieu ? (Odoo Learn — Expédier plus tard)",
    },
    correct: {
      en: "Only when all items in the order are in stock and on the scheduled date.",
      fr: "Uniquement lorsque tous les articles de la commande sont en stock et à la date prévue.",
    },
    distractors: [
      { en: "Once the availability of one or several items is confirmed.", fr: "Une fois la disponibilité d'un ou plusieurs articles confirmée." },
      { en: "Upon immediate payment confirmation, even if the item is not in stock.", fr: "Dès confirmation immédiate du paiement, même si l'article n'est pas en stock." },
      { en: "Based on the earliest availability date of any item in the order.", fr: "Basé sur la première date de disponibilité de tout article de la commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Ship later): Only when all items in the order are in stock and on the scheduled date.",
      fr: "Source Odoo Learn (Expédier plus tard) : Uniquement lorsque tous les articles de la commande sont en stock et à la date prévue.",
    },
  }),
  complexQ({
    id: "pos-086",
    module: "pos",
    text: {
      en: "Enabling the \"Allow Ship Later\" feature in the settings makes it possible to: (Odoo Learn — Ship later)",
      fr: "L'activation de la fonctionnalité « Autoriser l'expédition plus tard » dans les paramètres permet de : (Odoo Learn — Expédier plus tard)",
    },
    correct: {
      en: "Allow customers to choose a later delivery date.",
      fr: "Permettez aux clients de choisir une date de livraison ultérieure.",
    },
    distractors: [
      { en: "Automatically ship all orders on back order.", fr: "Expédiez automatiquement toutes les commandes en rupture de stock." },
      { en: "Force customers to schedule all deliveries.", fr: "Forcez les clients à planifier toutes les livraisons." },
      { en: "Reduce the need to track inventory levels accurately.", fr: "Réduisez le besoin de suivre avec précision les niveaux de stocks." },
    ],
    explanation: {
      en: "Source Odoo Learn (Ship later): Allow customers to choose a later delivery date.",
      fr: "Source Odoo Learn (Expédier plus tard) : permettez aux clients de choisir une date de livraison ultérieure.",
    },
  }),
  complexQ({
    id: "pos-087",
    module: "pos",
    text: {
      en: "The progression of the picking status from \"Waiting\" to a deliverable state could be influenced by: (Odoo Learn — Ship later)",
      fr: "La progression du statut de picking de « En attente » à un état livrable pourrait être influencée par : (Odoo Learn — Expédier plus tard)",
    },
    correct: {
      en: "The system confirming that the ordered items are now in stock.",
      fr: "Le système confirmant que les articles commandés sont désormais en stock.",
    },
    distractors: [
      { en: "The customer adding more items after payment.", fr: "Le client ajoute plus d'articles après le paiement." },
      { en: "The completion of a set time from the order date.", fr: "L'accomplissement d'un délai fixé à compter de la date de commande." },
      { en: "The customer confirming their scheduled delivery date.", fr: "Le client confirme sa date de livraison prévue." },
    ],
    explanation: {
      en: "Source Odoo Learn (Ship later): The system confirming that the ordered items are now in stock.",
      fr: "Source Odoo Learn (Expédier plus tard) : Le système confirmant que les articles commandés sont désormais en stock.",
    },
  }),
  complexQ({
    id: "pos-088",
    module: "pos",
    text: {
      en: "Why should you use the \"Return\" mode in its own preset? (Odoo Learn — Manage presets)",
      fr: "Pourquoi devriez-vous utiliser le mode « Retour » dans son propre préréglage ? (Odoo Learn — Gérer les préréglages)",
    },
    correct: {
      en: "Because it turns all prices negative.",
      fr: "Parce que cela rend tous les prix négatifs.",
    },
    distractors: [
      { en: "Because it reinitializes the preconfigured presets.", fr: "Parce qu'il réinitialise les préréglages préconfigurés." },
      { en: "I should not.", fr: "Je ne devrais pas." },
      { en: "Because it sends me back to the previous preset.", fr: "Parce que ça me renvoie au preset précédent." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage presets): Because it turns all prices negative.",
      fr: "Source Odoo Learn (Gérer les préréglages) : Parce que cela rend tous les prix négatifs.",
    },
  }),
  complexQ({
    id: "pos-089",
    module: "pos",
    text: {
      en: "What happens if you set the \"Identification\" field to \"Name\" for the \"Dine In\" preset? (Odoo Learn — Manage presets)",
      fr: "Que se passe-t-il si vous définissez le champ « Identification » sur « Nom » pour le préréglage « Dine In » ? (Odoo Learn — Gérer les préréglages)",
    },
    correct: {
      en: "I’m asked to enter a name or add a customer account.",
      fr: "On me demande de saisir un nom ou d'ajouter un compte client.",
    },
    distractors: [
      { en: "I’m asked to invoice the order.", fr: "On me demande de facturer la commande." },
      { en: "I’m forced to add the number of guests to the order.", fr: "Je suis obligé d'ajouter le nombre d'invités à la commande." },
      { en: "I’m forced to process a delivery.", fr: "Je suis obligé de traiter une livraison." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage presets): I’m asked to enter a name or add a customer account.",
      fr: "Source Odoo Learn (Gérer les préréglages) : On me demande de saisir un nom ou d'ajouter un compte client.",
    },
  }),
  complexQ({
    id: "pos-090",
    module: "pos",
    text: {
      en: "Why would you add a fiscal position in the preset form? (Odoo Learn — Manage presets)",
      fr: "Pourquoi ajouteriez-vous une situation budgétaire sous la forme prédéfinie ? (Odoo Learn — Gérer les préréglages)",
    },
    correct: {
      en: "To adapt tax rates based on the order type.",
      fr: "Pour adapter les taux de taxe en fonction du type de commande.",
    },
    distractors: [
      { en: "To automate loyalty program creation.", fr: "Pour automatiser la création de programmes de fidélité." },
      { en: "To ease the tax return system.", fr: "Assouplir le système de déclaration d’impôts." },
      { en: "To improve payment terminal compatibility.", fr: "Améliorer la compatibilité des terminaux de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage presets): To adapt tax rates based on the order type.",
      fr: "Source Odoo Learn (Gérer les préréglages) : Pour adapter les taux de taxe en fonction du type de commande.",
    },
  }),
  complexQ({
    id: "pos-091",
    module: "pos",
    text: {
      en: "Enable 'Booking' in the Restaurant settings and open the 'Table' appointment type using the 'Internal link' arrow. How can you share the reservation form without a website? (Odoo Learn — Booking)",
      fr: "Activez « Réservation » dans les paramètres du Restaurant et ouvrez le type de rendez-vous « Table » à l'aide de la flèche « Lien interne ». Comment partager le formulaire de réservation sans site internet ? (Odoo Learn — Réservation)",
    },
    correct: {
      en: "By clicking ‘Share’, then ‘Copy Link & Close’ and pasting the link wherever I want.",
      fr: "En cliquant sur « Partager », puis « Copier le lien et fermer » et en collant le lien où je veux.",
    },
    distractors: [
      { en: "By clicking ‘Send message’ and typing the reservation details to my customers.", fr: "En cliquant sur « Envoyer un message » et en saisissant les détails de la réservation à mes clients." },
      { en: "By clicking ‘Preview’.", fr: "En cliquant sur « Aperçu »." },
      { en: "By clicking ‘Go to Website’ and copy the URL.", fr: "En cliquant sur « Aller sur le site Web » et copiez l'URL." },
    ],
    explanation: {
      en: "Source Odoo Learn (Booking): By clicking ‘Share’, then ‘Copy Link & Close’ and pasting the link wherever I want.",
      fr: "Source Odoo Learn (Réservation) : En cliquant sur « Partager », puis « Copier le lien et fermer » et en collant le lien où je veux.",
    },
  }),
  complexQ({
    id: "pos-092",
    module: "pos",
    text: {
      en: "Still in the ‘Table’ appointment type, what option allows customers to select tables themselves based on their number? (Odoo Learn — Booking)",
      fr: "Toujours dans le type de rendez-vous « Table », quelle option permet aux clients de sélectionner eux-mêmes les tables en fonction de leur nombre ? (Odoo Learn — Réservation)",
    },
    correct: {
      en: "‘By visitor’ in the ‘Assignement’ field",
      fr: "« Par visiteur » dans le champ « Affectation »",
    },
    distractors: [
      { en: "‘Users’ in the ‘Book’ field", fr: "« Utilisateurs » dans le champ « Livre »" },
      { en: "‘Manage Capacities’", fr: "« Gérer les capacités »" },
      { en: "‘Automatically’ in the ‘Assignement field’", fr: "« Automatiquement » dans le « Champ d'affectation »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Booking): ‘By visitor’ in the ‘Assignement’ field",
      fr: "Source Odoo Learn (Réservation) : « Par visiteur » dans le champ « Affectation »",
    },
  }),
  complexQ({
    id: "pos-093",
    module: "pos",
    text: {
      en: "Where can you access and manage bookings directly once inside the POS register? (Odoo Learn — Booking)",
      fr: "Où pouvez-vous accéder et gérer les réservations directement une fois dans le registre du point de vente ? (Odoo Learn — Réservation)",
    },
    correct: {
      en: "From the Booking menu or by clicking booking notifications on a booked table.",
      fr: "Depuis le menu Réservation ou en cliquant sur les notifications de réservation sur une table réservée.",
    },
    distractors: [
      { en: "Only from the backend.", fr: "Uniquement depuis le backend." },
      { en: "By clicking on any table, which opens the booking form automatically.", fr: "En cliquant sur n'importe quelle table, le formulaire de réservation s'ouvre automatiquement." },
      { en: "By clicking ‘Register’, then ‘Customer’ and look for the customer’s booking.", fr: "En cliquant sur « S'inscrire », puis « Client » et recherchez la réservation du client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Booking): From the Booking menu or by clicking booking notifications on a booked table.",
      fr: "Source Odoo Learn (Réservation) : Depuis le menu Réservation ou en cliquant sur les notifications de réservation sur une table réservée.",
    },
  }),
  complexQ({
    id: "pos-094",
    module: "pos",
    text: {
      en: "How can the system automatically merge tables for larger groups? (Odoo Learn — Booking)",
      fr: "Comment le système peut-il fusionner automatiquement les tables pour des groupes plus importants ? (Odoo Learn — Réservation)",
    },
    correct: {
      en: "By linking tables through the \"Resources\" smart button in the ‘Table’ appointment type.",
      fr: "En reliant les tables via le bouton intelligent « Ressources » dans le type de rendez-vous « Table ».",
    },
    distractors: [
      { en: "By changing the table capacity manually each time.", fr: "En modifiant manuellement la capacité de la table à chaque fois." },
      { en: "By recreating the floor plan with bigger tables.", fr: "En recréant le plan d'étage avec des tables plus grandes." },
      { en: "By selecting multiple tables directly from the floor plan when creating the booking.", fr: "En sélectionnant plusieurs tables directement à partir du plan d'étage lors de la création de la réservation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Booking): By linking tables through the \"Resources\" smart button in the ‘Table’ appointment type.",
      fr: "Source Odoo Learn (Réservation) : En reliant les tables via le bouton intelligent « Ressources » dans le type de rendez-vous « Table ».",
    },
  }),
  complexQ({
    id: "pos-095",
    module: "pos",
    text: {
      en: "Which of the following statements is not true about creating a new floor? (Odoo Learn — Manage your floors and tables)",
      fr: "Laquelle des affirmations suivantes n’est pas vraie concernant la création d’un nouveau sol ? (Odoo Learn — Gérez vos sols et vos tables)",
    },
    correct: {
      en: "You can create a new floor from the POS app dashboard.",
      fr: "Vous pouvez créer un nouvel étage à partir du tableau de bord de l'application POS.",
    },
    distractors: [
      { en: "You can create a new floor in the POS settings.", fr: "Vous pouvez créer un nouvel étage dans les paramètres du PDV." },
      { en: "You can create a new floor from the Floor Plans menu.", fr: "Vous pouvez créer un nouvel étage à partir du menu Plans d'étage." },
      { en: "You can create a new floor from an opened POS session.", fr: "Vous pouvez créer un nouvel étage à partir d'une session POS ouverte." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage your floors and tables): You can create a new floor from the POS app dashboard.",
      fr: "Source Odoo Learn (Gérez vos étages et tables) : Vous pouvez créer un nouvel étage à partir du tableau de bord de l'application POS.",
    },
  }),
  complexQ({
    id: "pos-096",
    module: "pos",
    text: {
      en: "Which of the following is not an optional customization when creating a floor plan? (Odoo Learn — Manage your floors and tables)",
      fr: "Lequel des éléments suivants ne constitue pas une personnalisation facultative lors de la création d'un plan d'étage ? (Odoo Learn — Gérez vos sols et vos tables)",
    },
    correct: {
      en: "Enabling \"Is a Bar/Restaurant\"",
      fr: "Activation de « Est un bar/restaurant »",
    },
    distractors: [
      { en: "Naming the floor", fr: "Nommer le sol" },
      { en: "Assigning the floor to a restaurant", fr: "Attribuer l'étage à un restaurant" },
      { en: "Adding a top-view floor picture", fr: "Ajout d'une photo d'étage vue de dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage your floors and tables): Enabling \"Is a Bar/Restaurant\"",
      fr: "Source Odoo Learn (Gérer vos sols et tables) : Activation « Est un Bar/Restaurant »",
    },
  }),
  complexQ({
    id: "pos-097",
    module: "pos",
    text: {
      en: "How do you add more tables to a floor plan from the POS frontend? (Odoo Learn — Manage your floors and tables)",
      fr: "Comment ajouter plus de tables à un plan d'étage à partir de l'interface du point de vente ? (Odoo Learn — Gérez vos sols et vos tables)",
    },
    correct: {
      en: "Click the \"Edit Plan\" option and then \"Add Table.\"",
      fr: "Cliquez sur l'option \"Modifier le plan\", puis sur \"Ajouter une table\".",
    },
    distractors: [
      { en: "Right-click on the floor plan and select \"New Table.\"", fr: "Faites un clic droit sur le plan d'étage et sélectionnez \"Nouvelle table\"." },
      { en: "Drag and drop tables from the toolbar.", fr: "Faites glisser et déposez les tableaux depuis la barre d'outils." },
      { en: "Click on an empty space and press Enter.", fr: "Cliquez sur un espace vide et appuyez sur Entrée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage your floors and tables): Click the \"Edit Plan\" option and then \"Add Table.\"",
      fr: "Source Odoo Learn (Gérez vos étages et tables) : Cliquez sur l'option \"Modifier le plan\" puis sur \"Ajouter une table\".",
    },
  }),
  complexQ({
    id: "pos-098",
    module: "pos",
    text: {
      en: "When placing an order for a table, how is the order connected to the table? (Odoo Learn — Manage your floors and tables)",
      fr: "Lorsque vous passez une commande pour une table, comment la commande est-elle connectée à la table ? (Odoo Learn — Gérez vos sols et vos tables)",
    },
    correct: {
      en: "The order is automatically linked to the selected table.",
      fr: "La commande est automatiquement liée à la table sélectionnée.",
    },
    distractors: [
      { en: "The order(s) must be manually linked to the table before processing.", fr: "La ou les commandes doivent être liées manuellement à la table avant d'être traitées." },
      { en: "You must select the related orders when processing the payment.", fr: "Vous devez sélectionner les commandes associées lors du traitement du paiement." },
      { en: "Orders cannot be linked to tables.", fr: "Les commandes ne peuvent pas être liées à des tables." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage your floors and tables): The order is automatically linked to the selected table.",
      fr: "Source Odoo Learn (Gérez vos étages et tables) : La commande est automatiquement liée à la table sélectionnée.",
    },
  }),
  complexQ({
    id: "pos-099",
    module: "pos",
    text: {
      en: "Click “+ New order” from the floor plan view to: (Odoo Learn — Take orders)",
      fr: "Cliquez sur « + Nouvelle commande » dans la vue du plan d'étage pour : (Odoo Learn — Prendre les commandes)",
    },
    correct: {
      en: "Create a new order as a direct sale.",
      fr: "Créez une nouvelle commande en tant que vente directe.",
    },
    distractors: [
      { en: "Automatically assign a free table to a new order.", fr: "Attribuez automatiquement une table libre à une nouvelle commande." },
      { en: "Create an order and then request a table assignment.", fr: "Créez une commande, puis demandez une attribution de table." },
      { en: "Open the last order to add more items.", fr: "Ouvrez la dernière commande pour ajouter plus d'articles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Take orders): Create a new order as a direct sale.",
      fr: "Source Odoo Learn (Prendre des commandes) : Créez une nouvelle commande en tant que vente directe.",
    },
  }),
  complexQ({
    id: "pos-100",
    module: "pos",
    text: {
      en: "In direct sales, which of the following is true? (Odoo Learn — Take orders)",
      fr: "En vente directe, laquelle des affirmations suivantes est vraie ? (Odoo Learn — Prendre les commandes)",
    },
    correct: {
      en: "I can optionally assign a table or a tab before payment.",
      fr: "Je peux éventuellement attribuer une table ou un onglet avant le paiement.",
    },
    distractors: [
      { en: "I cannot select a table; customers must wait at the pickup zone.", fr: "Je ne parviens pas à sélectionner une table ; les clients doivent attendre à la zone de prise en charge." },
      { en: "I have to set a table or a tab to order and then pay.", fr: "Je dois dresser une table ou un onglet pour commander puis payer." },
      { en: "I can click “Order” as usual, without setting a table or a tab.", fr: "Je peux cliquer sur « Commander » comme d'habitude, sans définir de tableau ni d'onglet." },
    ],
    explanation: {
      en: "Source Odoo Learn (Take orders): I can optionally assign a table or a tab before payment.",
      fr: "Source Odoo Learn (Prendre les commandes) : Je peux éventuellement attribuer une table ou un onglet avant le paiement.",
    },
  }),
  complexQ({
    id: "pos-101",
    module: "pos",
    text: {
      en: "Clicking on an empty table: (Odoo Learn — Take orders)",
      fr: "En cliquant sur une table vide : (Odoo Learn — Prendre les commandes)",
    },
    correct: {
      en: "Automatically assigns a new order to the selected table.",
      fr: "Attribue automatiquement une nouvelle commande à la table sélectionnée.",
    },
    distractors: [
      { en: "Creates a new order for a manual table assignment.", fr: "Crée une nouvelle commande pour une affectation de table manuelle." },
      { en: "Opens a menu to create a new order or a customer tab.", fr: "Ouvre un menu pour créer une nouvelle commande ou un onglet client." },
      { en: "Opens information about the table's capacity and status.", fr: "Ouvre des informations sur la capacité et l'état de la table." },
    ],
    explanation: {
      en: "Source Odoo Learn (Take orders): Automatically assigns a new order to the selected table.",
      fr: "Source Odoo Learn (Prendre les commandes) : Attribue automatiquement une nouvelle commande à la table sélectionnée.",
    },
  }),
  complexQ({
    id: "pos-102",
    module: "pos",
    text: {
      en: "What is displayed on the preparation display when a multi-course order is sent to the kitchen? (Odoo Learn — Take orders)",
      fr: "Qu'est-ce qui s'affiche sur l'écran de préparation lorsqu'une commande multiplats est envoyée en cuisine ? (Odoo Learn — Prendre les commandes)",
    },
    correct: {
      en: "The entire order appears, divided by courses. Only the first course is active; the other courses are pending firing.",
      fr: "L'ordre entier apparaît, divisé par cours. Seul le premier cours est actif ; les autres formations sont en attente de tir.",
    },
    distractors: [
      { en: "Only the first course is displayed; the remaining courses become visible after completing the first one.", fr: "Seul le premier plat est affiché ; les cours restants deviennent visibles après avoir terminé le premier." },
      { en: "All courses are displayed, segmented by each course, and the kitchen staff must prepare all of them at the same time.", fr: "Tous les plats sont affichés, segmentés par plat, et le personnel de cuisine doit tous les préparer en même temps." },
      { en: "The entire order is displayed, separated by courses; the kitchen staff can choose which courses to prepare first.", fr: "L'intégralité de la commande est affichée, séparée par cours ; le personnel de cuisine peut choisir les plats à préparer en premier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Take orders): The entire order appears, divided by courses. Only the first course is active; the other courses are pending firing.",
      fr: "Source Odoo Learn (Prendre les commandes) : L'intégralité de la commande apparaît, divisée par cours. Seul le premier cours est actif ; les autres formations sont en attente de tir.",
    },
  }),
  complexQ({
    id: "pos-103",
    module: "pos",
    text: {
      en: "How can I add items to a previous course after creating multiple courses for an order? (Odoo Learn — Take orders)",
      fr: "Comment puis-je ajouter des éléments à un cours précédent après avoir créé plusieurs cours pour une commande ? (Odoo Learn — Prendre les commandes)",
    },
    correct: {
      en: "I click the desired course in the cart before adding more items.",
      fr: "Je clique sur le cours souhaité dans le panier avant d'ajouter d'autres articles.",
    },
    distractors: [
      { en: "I select the items first, then click the course to assign them.", fr: "Je sélectionne d'abord les éléments, puis je clique sur le cours pour les attribuer." },
      { en: "I cannot add items to a previous course; I must create a new one.", fr: "Je ne peux pas ajouter d'éléments à un cours précédent ; Je dois en créer un nouveau." },
      { en: "I use the \"Edit Order\" function and then select the desired course.", fr: "J'utilise la fonction \"Modifier la commande\" puis je sélectionne le cours souhaité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Take orders): I click the desired course in the cart before adding more items.",
      fr: "Source Odoo Learn (Prendre les commandes) : Je clique sur le cours souhaité dans le panier avant d'ajouter d'autres articles.",
    },
  }),
  complexQ({
    id: "pos-104",
    module: "pos",
    text: {
      en: "Open the Restaurant POS register. How can you create a course? (Odoo Learn — Courses)",
      fr: "Ouvrez le registre Restaurant POS. Comment créer un cours ? (Odoo Learn — Cours)",
    },
    correct: {
      en: "All answers are correct.",
      fr: "Toutes les réponses sont correctes.",
    },
    distractors: [
      { en: "By clicking ‘Course’ and adding products to the cart.", fr: "En cliquant sur « Cours » et en ajoutant des produits au panier." },
      { en: "By adding products to the cart and clicking ‘Course’.", fr: "En ajoutant des produits au panier et en cliquant sur « Cours »." },
      { en: "By clicking ‘Course’ as many times as needed, clicking each course, and adding its corresponding products.", fr: "En cliquant sur « Cours » autant de fois que nécessaire, en cliquant sur chaque cours et en ajoutant les produits correspondants." },
    ],
    explanation: {
      en: "Source Odoo Learn (Courses): All answers are correct.",
      fr: "Source Odoo Learn (Cours) : Toutes les réponses sont correctes.",
    },
  }),
  complexQ({
    id: "pos-105",
    module: "pos",
    text: {
      en: "How can you transfer a course to another table? (Odoo Learn — Courses)",
      fr: "Comment transférer un cours vers une autre table ? (Odoo Learn — Cours)",
    },
    correct: {
      en: "I can only transfer a course into another course within the same order by clicking a course, then ‘Transfer course’, and selecting the preferred course.",
      fr: "Je ne peux transférer un cours vers un autre cours dans le même ordre qu'en cliquant sur un cours, puis sur « Transférer le cours » et en sélectionnant le cours préféré.",
    },
    distractors: [
      { en: "By clicking the vertical ellipsis, then ‘Transfer course’, and simply selecting a table.", fr: "En cliquant sur les points de suspension verticaux, puis sur « Transférer le cours », et en sélectionnant simplement un tableau." },
      { en: "By clicking the desired course, then the vertical ellipsis, clicking ‘Transfer / Merge’, and selecting the preferred table.", fr: "En cliquant sur le cours souhaité, puis sur les points de suspension verticaux, en cliquant sur « Transférer / Fusionner » et en sélectionnant la table préférée." },
      { en: "I cannot transfer a course into another table.", fr: "Je n'arrive pas à transférer un cours dans une autre table." },
    ],
    explanation: {
      en: "Source Odoo Learn (Courses): I can only transfer a course into another course within the same order by clicking a course, then ‘Transfer course’, and selecting the preferred course.",
      fr: "Source Odoo Learn (Cours) : Je ne peux transférer un cours vers un autre cours dans le même ordre qu'en cliquant sur un cours, puis sur « Transférer le cours » et en sélectionnant le cours préféré.",
    },
  }),
  complexQ({
    id: "pos-106",
    module: "pos",
    text: {
      en: "When ordering items, what happens when you click the vertical ellipsis, then Transfer/Merge? (Odoo Learn — Transfer orders)",
      fr: "Lorsque vous commandez des articles, que se passe-t-il lorsque vous cliquez sur les points de suspension verticaux, puis sur Transférer/Fusionner ? (Odoo Learn — Ordres de transfert)",
    },
    correct: {
      en: "The complete order is transferred to the selected table.",
      fr: "La commande complète est transférée vers la table sélectionnée.",
    },
    distractors: [
      { en: "The number of guests increases at the chosen table.", fr: "Le nombre de convives augmente à la table choisie." },
      { en: "Confirmation is requested for specific items prior to transfer.", fr: "Une confirmation est demandée pour des éléments spécifiques avant le transfert." },
      { en: "Unordered items are moved to the new table.", fr: "Les éléments non commandés sont déplacés vers la nouvelle table." },
    ],
    explanation: {
      en: "Source Odoo Learn (Transfer orders): The complete order is transferred to the selected table.",
      fr: "Source Odoo Learn (Transfert des ordres) : La commande complète est transférée vers la table sélectionnée.",
    },
  }),
  complexQ({
    id: "pos-107",
    module: "pos",
    text: {
      en: "What is the process for transferring only a portion of an order to another table? (Odoo Learn — Transfer orders)",
      fr: "Quel est le processus pour transférer seulement une partie d’une commande vers une autre table ? (Odoo Learn — Ordres de transfert)",
    },
    correct: {
      en: "Click the ellipsis, choose Split, select items, and click Transfer.",
      fr: "Cliquez sur les points de suspension, choisissez Fractionner, sélectionnez les éléments et cliquez sur Transférer.",
    },
    distractors: [
      { en: "Click the vertical ellipsis button and select Transfer Course.", fr: "Cliquez sur le bouton points de suspension verticaux et sélectionnez Transférer le cours." },
      { en: "Drag and drop items directly from the source to the destination order.", fr: "Faites glisser et déposez les articles directement de la source vers la commande de destination." },
      { en: "Reset the order to access partial transfer functionality.", fr: "Réinitialisez la commande pour accéder à la fonctionnalité de transfert partiel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Transfer orders): Click the ellipsis, choose Split, select items, and click Transfer.",
      fr: "Source Odoo Learn (Ordres de transfert) : cliquez sur les points de suspension, choisissez Fractionner, sélectionnez les éléments et cliquez sur Transférer.",
    },
  }),
  complexQ({
    id: "pos-108",
    module: "pos",
    text: {
      en: "What occurs when items are transferred to a destination table already holding orders? (Odoo Learn — Transfer orders)",
      fr: "Que se passe-t-il lorsque des articles sont transférés vers une table de destination contenant déjà des commandes ? (Odoo Learn — Ordres de transfert)",
    },
    correct: {
      en: "The transferred items are merged into the current order.",
      fr: "Les articles transférés sont fusionnés dans la commande actuelle.",
    },
    distractors: [
      { en: "A distinct, new order is generated on the destination table.", fr: "Une nouvelle commande distincte est générée sur la table de destination." },
      { en: "An option to merge or create a new order is presented to the user.", fr: "Une option pour fusionner ou créer une nouvelle commande est présentée à l'utilisateur." },
      { en: "The existing order on the destination table is replaced by the new items.", fr: "La commande existante sur la table de destination est remplacée par les nouveaux éléments." },
    ],
    explanation: {
      en: "Source Odoo Learn (Transfer orders): The transferred items are merged into the current order.",
      fr: "Source Odoo Learn (Ordres de transfert) : Les articles transférés sont fusionnés dans la commande en cours.",
    },
  }),
  complexQ({
    id: "pos-109",
    module: "pos",
    text: {
      en: "When using the kiosk in \"Table\" service mode, why is entering a tracker number required before completing payment? (Odoo Learn — Self-ordering kiosk)",
      fr: "Lors de l'utilisation du kiosque en mode service « Table », pourquoi la saisie d'un numéro de suivi est-elle requise avant de finaliser le paiement ? (Odoo Learn — Kiosque de commande automatique)",
    },
    correct: {
      en: "To identify the tracker number with the customer's table.",
      fr: "Pour identifier le numéro de tracker avec le tableau du client.",
    },
    distractors: [
      { en: "To associate the order with a specific customer loyalty account.", fr: "Pour associer la commande à un compte fidélité client spécifique." },
      { en: "To generate a unique receipt number for the customer's order.", fr: "Pour générer un numéro de reçu unique pour la commande du client." },
      { en: "To apply a discount code associated with the table number.", fr: "Pour appliquer un code de réduction associé au numéro de table." },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-ordering kiosk): To identify the tracker number with the customer's table.",
      fr: "Source Odoo Learn (Kiosque d'auto-commande) : Pour identifier le numéro de tracker avec le tableau du client.",
    },
  }),
  complexQ({
    id: "pos-110",
    module: "pos",
    text: {
      en: "How can you personalize the kiosk interface? (Odoo Learn — Self-ordering kiosk)",
      fr: "Comment personnaliser l’interface du kiosque ? (Odoo Learn — Kiosque de commande automatique)",
    },
    correct: {
      en: "By adding images and customizing the order button style",
      fr: "En ajoutant des images et en personnalisant le style du bouton de commande",
    },
    distractors: [
      { en: "By enabling the \"Show Product Images\" and \"Show Category Images\" settings.", fr: "En activant les paramètres « Afficher les images du produit » et « Afficher les images de catégorie »." },
      { en: "By navigating to Website → Configuration → Themes, selecting a theme, and applying it to the kiosk interface.", fr: "En accédant à Site Web → Configuration → Thèmes, en sélectionnant un thème et en l'appliquant à l'interface du kiosque." },
      { en: "By accessing POS Product Categories and uploading images for each category.", fr: "En accédant aux catégories de produits POS et en téléchargeant des images pour chaque catégorie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-ordering kiosk): By adding images and customizing the order button style",
      fr: "Source Odoo Learn (kiosque de commande automatique) : en ajoutant des images et en personnalisant le style du bouton de commande",
    },
  }),
  complexQ({
    id: "pos-111",
    module: "pos",
    text: {
      en: "How can you restrict product visibility on the kiosk to simplify the menu? (Odoo Learn — Self-ordering kiosk)",
      fr: "Comment restreindre la visibilité des produits sur le kiosque pour simplifier le menu ? (Odoo Learn — Kiosque de commande automatique)",
    },
    correct: {
      en: "In the kiosk's settings, enable “Restrict Categories” and select specific categories.",
      fr: "Dans les paramètres du kiosque, activez « Restreindre les catégories » et sélectionnez des catégories spécifiques.",
    },
    distractors: [
      { en: "From Configuration → POS Product Categories, deactivate all but the desired categories.", fr: "Dans Configuration → Catégories de produits POS, désactivez toutes les catégories sauf celles souhaitées." },
      { en: "Go to Inventory → Product Categories and archive unused items.", fr: "Accédez à Inventaire → Catégories de produits et archivez les articles inutilisés." },
      { en: "Use Sales → Pricelists to create a limited product selection.", fr: "Utilisez Ventes → Listes de prix pour créer une sélection de produits limitée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-ordering kiosk): In the kiosk's settings, enable “Restrict Categories” and select specific categories.",
      fr: "Source Odoo Learn (kiosque de commande automatique) : Dans les paramètres du kiosque, activez « Restreindre les catégories » et sélectionnez des catégories spécifiques.",
    },
  }),
  complexQ({
    id: "pos-112",
    module: "pos",
    text: {
      en: "Your guests want to split the bill and pay immediately. What do you click first from the POS register? (Odoo Learn — Bill splitting)",
      fr: "Vos invités souhaitent partager la facture et payer immédiatement. Sur quoi cliquez-vous en premier dans le registre POS ? (Odoo Learn — Fractionnement des factures)",
    },
    correct: {
      en: "Click the ellipsis, then 'Split'.",
      fr: "Cliquez sur les points de suspension, puis sur « Split ».",
    },
    distractors: [
      { en: "Click 'Payment' to select the number of guests paying.", fr: "Cliquez sur « Paiement » pour sélectionner le nombre d'invités payant." },
      { en: "Click 'Send' again to reopen the order.", fr: "Cliquez à nouveau sur « Envoyer » pour rouvrir la commande." },
      { en: "Click the ellipsis, then 'Transfer'.", fr: "Cliquez sur les points de suspension, puis sur « Transférer »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill splitting): Click the ellipsis, then 'Split'.",
      fr: "Source Odoo Learn (fractionnement de facture) : cliquez sur les points de suspension, puis sur « Split ».",
    },
  }),
  complexQ({
    id: "pos-113",
    module: "pos",
    text: {
      en: "On the Bill Splitting screen, what do you need to do to create a suborder and pay it right away? (Odoo Learn — Bill splitting)",
      fr: "Sur l’écran Bill Splitting, que devez-vous faire pour créer une sous-commande et la payer immédiatement ? (Odoo Learn — Fractionnement des factures)",
    },
    correct: {
      en: "Select the guest’s items and click 'Payment'.",
      fr: "Sélectionnez les articles du client et cliquez sur « Paiement ».",
    },
    distractors: [
      { en: "Select the items and click 'Split Order'.", fr: "Sélectionnez les articles et cliquez sur « Partager la commande »." },
      { en: "Select the table again from the floor plan.", fr: "Sélectionnez à nouveau la table dans le plan d'étage." },
      { en: "Click 'Validate' without selecting any items.", fr: "Cliquez sur « Valider » sans sélectionner aucun élément." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill splitting): Select the guest’s items and click 'Payment'.",
      fr: "Source Odoo Learn (Partage de facture) : Sélectionnez les articles du client et cliquez sur « Paiement ».",
    },
  }),
  complexQ({
    id: "pos-114",
    module: "pos",
    text: {
      en: "How many times can you split an order? (Odoo Learn — Bill splitting)",
      fr: "Combien de fois pouvez-vous diviser une commande ? (Odoo Learn — Fractionnement des factures)",
    },
    correct: {
      en: "As long as there are at least two items.",
      fr: "Tant qu'il y a au moins deux éléments.",
    },
    distractors: [
      { en: "You can only split an order once.", fr: "Vous ne pouvez diviser une commande qu'une seule fois." },
      { en: "It depends on the order.", fr: "Cela dépend de la commande." },
      { en: "Only up to 3 items.", fr: "Seulement jusqu'à 3 articles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill splitting): As long as there are at least two items.",
      fr: "Source Odoo Learn (Partage de facture) : Tant qu'il y a au moins deux éléments.",
    },
  }),
  complexQ({
    id: "pos-115",
    module: "pos",
    text: {
      en: "When paying part of an order, what does the letter added to the order/table number represent? (Odoo Learn — Bill splitting)",
      fr: "Lors du paiement d'une partie d'une commande, que représente la lettre ajoutée au numéro de commande/table ? (Odoo Learn — Fractionnement des factures)",
    },
    correct: {
      en: "A suborder created from the original table order.",
      fr: "Un sous-ordre créé à partir de l'ordre de table d'origine.",
    },
    distractors: [
      { en: "A reference to the payment method used.", fr: "Une référence au mode de paiement utilisé." },
      { en: "A sequence of kitchen tickets.", fr: "Une séquence de tickets de cuisine." },
      { en: "A temporary draft order.", fr: "Un projet de commande provisoire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill splitting): A suborder created from the original table order.",
      fr: "Source Odoo Learn (fractionnement de factures) : un sous-ordre créé à partir de l'ordre de table d'origine.",
    },
  }),
];
