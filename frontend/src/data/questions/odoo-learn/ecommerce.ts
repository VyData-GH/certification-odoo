import { complexQ, mcq3Q } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const ecommerceLearnQuestions = [
  complexQ({
    id: "eco-026",
    module: "ecommerce",
    text: {
      en: "Why must “On payment” be enabled for the enrollment policy? (Odoo Learn — Business Flow: eLearning)",
      fr: "Pourquoi faut-il activer « Sur paiement » pour la politique d'inscription ? (Odoo Learn — Flux d'affaires : eLearning)",
    },
    correct: {
      en: "So the course is also a product and can be sold online",
      fr: "Le cours est donc aussi un produit et peut être vendu en ligne",
    },
    distractors: [
      { en: "So the course creator can accept donations", fr: "Le créateur du cours peut donc accepter les dons" },
      { en: "This isn’t an option for the enrollment policy", fr: "Ce n'est pas une option pour la politique d'inscription" },
      { en: "So the customer can resell the course", fr: "Le client peut donc revendre le cours" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: eLearning): So the course is also a product and can be sold online",
      fr: "Source Odoo Learn (Business Flow : eLearning) : Le cours est donc aussi un produit et peut être vendu en ligne",
    },
  }),
  complexQ({
    id: "eco-027",
    module: "ecommerce",
    text: {
      en: "When can customers access the course, if they’re buying enrollment online? (Odoo Learn — Business Flow: eLearning)",
      fr: "Quand les clients peuvent-ils accéder au cours s’ils achètent leur inscription en ligne ? (Odoo Learn — Flux d'affaires : eLearning)",
    },
    correct: {
      en: "Once the payment has been processed successfully",
      fr: "Une fois le paiement traité avec succès",
    },
    distractors: [
      { en: "As soon as they add it to their cart", fr: "Dès qu'ils l'ajoutent à leur panier" },
      { en: "With the special promo code “ENROLL” at checkout", fr: "Avec le code promo spécial « ENROLL » à la caisse" },
      { en: "Only on specified business days", fr: "Uniquement les jours ouvrables spécifiés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: eLearning): Once the payment has been processed successfully",
      fr: "Source Odoo Learn (Business Flow : eLearning) : Une fois le paiement traité avec succès",
    },
  }),
  complexQ({
    id: "eco-028",
    module: "ecommerce",
    text: {
      en: "What must be done to sell my course online? (Odoo Learn — Business Flow: eLearning)",
      fr: "Que faut-il faire pour vendre mon cours en ligne ? (Odoo Learn — Flux d'affaires : eLearning)",
    },
    correct: {
      en: "The course must be a product in the catalog, and it must be published",
      fr: "Le cours doit être un produit du catalogue et il doit être publié",
    },
    distractors: [
      { en: "The course must first be approved by the user’s manager", fr: "Le cours doit être préalablement approuvé par le responsable de l’utilisateur" },
      { en: "The course must be a product in the catalog, but it doesn’t have to be published", fr: "Le cours doit être un produit du catalogue, mais il n'est pas nécessaire qu'il soit publié" },
      { en: "Nothing, users can’t sell courses online", fr: "Rien, les utilisateurs ne peuvent pas vendre de cours en ligne" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: eLearning): The course must be a product in the catalog, and it must be published",
      fr: "Source Odoo Learn (Business Flow : eLearning) : Le cours doit être un produit du catalogue, et il doit être publié",
    },
  }),
  complexQ({
    id: "eco-029",
    module: "ecommerce",
    text: {
      en: "How can we check when the next payment is due for an on-going Subscription? (Odoo Learn — Business Flow: Subscriptions as an Online Business)",
      fr: "Comment pouvons-nous vérifier quand le prochain paiement est dû pour un abonnement en cours ? (Odoo Learn — Flux commercial : les abonnements en tant qu'entreprise en ligne)",
    },
    correct: {
      en: "‘Invoice Date’ on the Subscription Sales Order.",
      fr: "« Date de facture » ​​sur le bon de commande d'abonnement.",
    },
    distractors: [
      { en: "Call the customer and ask them.", fr: "Appelez le client et demandez-lui." },
      { en: "Odoo will have a pop-up reminder with due dates.", fr: "Odoo aura un rappel contextuel avec les dates d'échéance." },
      { en: "There is no way to check on Odoo, we should remember the invoice dates.", fr: "Il n'y a aucun moyen de vérifier sur Odoo, il faut se souvenir des dates de facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Subscriptions as an Online Business): ‘Invoice Date’ on the Subscription Sales Order.",
      fr: "Source Odoo Learn (Business Flow : Abonnements en tant qu'activité en ligne) : « Date de facture » ​​sur le bon de commande d'abonnement.",
    },
  }),
  complexQ({
    id: "eco-030",
    module: "ecommerce",
    text: {
      en: "Where do we go to automate tasks within task stages in the Project application? (Odoo Learn — Business Flow: Subscriptions as an Online Business)",
      fr: "Où allons-nous pour automatiser les tâches au sein des étapes de tâche dans l’application Project ? (Odoo Learn — Flux commercial : les abonnements en tant qu'entreprise en ligne)",
    },
    correct: {
      en: "In the gear icon next to the task name",
      fr: "Dans l'icône d'engrenage à côté du nom de la tâche",
    },
    distractors: [
      { en: "In Settings -> Configuration", fr: "Dans Paramètres -> Configuration" },
      { en: "You cannot automate tasks in the Project application.", fr: "Vous ne pouvez pas automatiser les tâches dans l'application Project." },
      { en: "Click the task name and type in the automation.", fr: "Cliquez sur le nom de la tâche et saisissez l'automatisation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Subscriptions as an Online Business): In the gear icon next to the task name",
      fr: "Source Odoo Learn (Business Flow : Abonnements en tant qu'entreprise en ligne) : Dans l'icône d'engrenage à côté du nom de la tâche",
    },
  }),
  complexQ({
    id: "eco-031",
    module: "ecommerce",
    text: {
      en: "How do I allow customers to pay directly on my website? (Odoo Learn — Business Flow: Subscriptions as an Online Business)",
      fr: "Comment permettre aux clients de payer directement sur mon site Internet ? (Odoo Learn — Flux commercial : les abonnements en tant qu'entreprise en ligne)",
    },
    correct: {
      en: "Head to Settings -> Quotations & Orders and tick the checkbox next to Online Payment",
      fr: "Allez dans Paramètres -> Devis et commandes et cochez la case à côté de Paiement en ligne.",
    },
    distractors: [
      { en: "Install a payment terminal such as Square, Cashapp, or Venmo.", fr: "Installez un terminal de paiement tel que Square, Cashapp ou Venmo." },
      { en: "There is no way to allow customers to pay directly on websites.", fr: "Il n’existe aucun moyen de permettre aux clients de payer directement sur les sites Web." },
      { en: "Head to Settings -> Website and install a payment terminal.", fr: "Dirigez-vous vers Paramètres -> Site Web et installez un terminal de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Subscriptions as an Online Business): Head to Settings -> Quotations & Orders and tick the checkbox next to Online Payment",
      fr: "Source Odoo Learn (Business Flow : Abonnements en tant qu'entreprise en ligne) : Allez dans Paramètres -> Devis et commandes et cochez la case à côté de Paiement en ligne.",
    },
  }),
  mcq3Q({
    id: "eco-032",
    module: "ecommerce",
    text: {
      en: "How can I easily change or add features to the product’s page? (Odoo Learn — Create your product)",
      fr: "Comment puis-je facilement modifier ou ajouter des fonctionnalités à la page du produit ? (Odoo Learn — Créez votre produit)",
    },
    correct: {
      en: "By using the website builder tool under the “Edit” button.",
      fr: "En utilisant l'outil de création de site Web sous le bouton « Modifier ».",
    },
    distractors: [
      { en: "By going to the product’s template and changing the settings.", fr: "En accédant au modèle du produit et en modifiant les paramètres." },
      { en: "By injecting custom code in HTML or CSS.", fr: "En injectant du code personnalisé en HTML ou CSS." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your product): By using the website builder tool under the “Edit” button.",
      fr: "Source Odoo Learn (Créez votre produit) : En utilisant l'outil de création de site Web sous le bouton « Modifier ».",
    },
  }),
  complexQ({
    id: "eco-033",
    module: "ecommerce",
    text: {
      en: "If I do not want a product to be visible to customers yet, what should I do? (Odoo Learn — Create your product)",
      fr: "Si je ne souhaite pas encore qu'un produit soit visible par les clients, que dois-je faire ? (Odoo Learn — Créez votre produit)",
    },
    correct: {
      en: "Set the product as “Unpublished” on the product page.",
      fr: "Définissez le produit comme « Non publié » sur la page du produit.",
    },
    distractors: [
      { en: "Delete or not create the product.", fr: "Supprimez ou ne créez pas le produit." },
      { en: "Change the category of the product to “Archived”.", fr: "Changez la catégorie du produit en « Archivé »." },
      { en: "Leave the website inaccessible until the catalog is ready.", fr: "Laissez le site Web inaccessible jusqu'à ce que le catalogue soit prêt." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your product): Set the product as “Unpublished” on the product page.",
      fr: "Source Odoo Learn (Créez votre produit) : Définissez le produit comme « Non publié » sur la page produit.",
    },
  }),
  mcq3Q({
    id: "eco-034",
    module: "ecommerce",
    text: {
      en: "When creating multiple variants, what do I need to do? (Odoo Learn — Product variants)",
      fr: "Lors de la création de plusieurs variantes, que dois-je faire ? (Odoo Learn — Variantes de produits)",
    },
    correct: {
      en: "I need to create the main variant attributes, Odoo creates the combinations automatically.",
      fr: "Je dois créer les principaux attributs des variantes, Odoo crée les combinaisons automatiquement.",
    },
    distractors: [
      { en: "I need to create each variant combination myself.", fr: "Je dois créer moi-même chaque combinaison de variantes." },
      { en: "I need to create a different product for each variation I want.", fr: "Je dois créer un produit différent pour chaque variation que je souhaite." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product variants): I need to create the main variant attributes, Odoo creates the combinations automatically.",
      fr: "Source Odoo Learn (Variantes du produit) : Je dois créer les principaux attributs des variantes, Odoo crée les combinaisons automatiquement.",
    },
  }),
  mcq3Q({
    id: "eco-035",
    module: "ecommerce",
    text: {
      en: "When enabling “show available qty”, what is the behaviour to be expected? (Odoo Learn — Product variants)",
      fr: "Lors de l'activation de « Afficher la quantité disponible », quel est le comportement à prévoir ? (Odoo Learn — Variantes de produits)",
    },
    correct: {
      en: "When having the “show available qty” feature enabled, Odoo displays the number of available items only if below a certain set amount.",
      fr: "Lorsque la fonction « Afficher la quantité disponible » est activée, Odoo affiche le nombre d'articles disponibles uniquement s'il est inférieur à un certain montant défini.",
    },
    distractors: [
      { en: "When enabling the “show available qty” feature, Odoo always displays the number of available items.", fr: "Lors de l'activation de la fonction « Afficher la quantité disponible », Odoo affiche toujours le nombre d'articles disponibles." },
      { en: "When having the “show available qty” feature enabled, Odoo displays the number of available items only if above a certain set amount.", fr: "Lorsque la fonction « Afficher la quantité disponible » est activée, Odoo affiche le nombre d'articles disponibles uniquement s'il est supérieur à un certain montant défini." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product variants): When having the “show available qty” feature enabled, Odoo displays the number of available items only if below a certain set amount.",
      fr: "Source Odoo Learn (variantes de produits) : lorsque la fonction « afficher la quantité disponible » est activée, Odoo affiche le nombre d'articles disponibles uniquement s'il est inférieur à un certain montant défini.",
    },
  }),
  mcq3Q({
    id: "eco-036",
    module: "ecommerce",
    text: {
      en: "What type of product do you need to manage its stock? (Odoo Learn — Product variants)",
      fr: "De quel type de produit avez-vous besoin pour gérer son stock ? (Odoo Learn — Variantes de produits)",
    },
    correct: {
      en: "Goods",
      fr: "Marchandises",
    },
    distractors: [
      { en: "Service", fr: "Service" },
      { en: "Combo", fr: "Combo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product variants): Goods",
      fr: "Source Odoo Learn (Variantes de produits) : Biens",
    },
  }),
  mcq3Q({
    id: "eco-037",
    module: "ecommerce",
    text: {
      en: "Which of the following “Product categories” statements is true? (Odoo Learn — Organize your product catalog)",
      fr: "Parmi les affirmations suivantes « Catégories de produits » , laquelle est vraie ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "Only one parent and an unlimited number of children are possible.",
      fr: "Un seul parent et un nombre illimité d'enfants sont possibles.",
    },
    distractors: [
      { en: "An unlimited number of parents and children is possible.", fr: "Un nombre illimité de parents et d'enfants est possible." },
      { en: "An unlimited number of parents and a limited number of children are possible.", fr: "Un nombre illimité de parents et un nombre limité d'enfants sont possibles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your product catalog): Only one parent and an unlimited number of children are possible.",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : Un seul parent et un nombre illimité d'enfants sont possibles.",
    },
  }),
  mcq3Q({
    id: "eco-038",
    module: "ecommerce",
    text: {
      en: "How can I assign a category to a product? (Odoo Learn — Organize your product catalog)",
      fr: "Comment puis-je attribuer une catégorie à un produit ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "By assigning a category on the product’s product form.",
      fr: "En attribuant une catégorie sur le formulaire produit du produit.",
    },
    distractors: [
      { en: "Through the “customize tab” in the website builder.", fr: "Via l'onglet « Personnaliser » dans le créateur de site Web." },
      { en: "By dragging the product to the category on the shop page.", fr: "En faisant glisser le produit vers la catégorie sur la page de la boutique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your product catalog): By assigning a category on the product’s product form.",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : En attribuant une catégorie sur le formulaire produit du produit.",
    },
  }),
  mcq3Q({
    id: "eco-039",
    module: "ecommerce",
    text: {
      en: "How can I add a “Sales” banner on my product card? (Odoo Learn — Organize your product catalog)",
      fr: "Comment puis-je ajouter une bannière « Ventes » sur ma fiche produit ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "By using “ribbons.”",
      fr: "En utilisant des « rubans ».",
    },
    distractors: [
      { en: "By making the card of the product bigger (e.g., 4x4).", fr: "En agrandissant la carte du produit (par exemple 4x4)." },
      { en: "By adding “Sale” in the product’s name.", fr: "En ajoutant « Vente » dans le nom du produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your product catalog): By using “ribbons.”",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : En utilisant des « rubans ».",
    },
  }),
  mcq3Q({
    id: "eco-040",
    module: "ecommerce",
    text: {
      en: "What is the main purpose of pricelists in Odoo eCommerce? (Odoo Learn — Pricing)",
      fr: "Quel est l’objectif principal des listes de prix dans Odoo eCommerce ? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "To offer different pricing based on criteria like location or customer type",
      fr: "Proposer des tarifs différents en fonction de critères tels que l'emplacement ou le type de client",
    },
    distractors: [
      { en: "To organize products into categories", fr: "Pour organiser les produits en catégories" },
      { en: "To set a fixed price for all products", fr: "Fixer un prix fixe pour tous les produits" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): To offer different pricing based on criteria like location or customer type",
      fr: "Source Odoo Learn (Tarif) : Pour proposer des tarifs différents en fonction de critères tels que l'emplacement ou le type de client",
    },
  }),
  mcq3Q({
    id: "eco-041",
    module: "ecommerce",
    text: {
      en: "Which of the following must be enabled in Odoo to use pricelists? (Odoo Learn — Pricing)",
      fr: "Lequel des éléments suivants doit être activé dans Odoo pour utiliser les listes de prix ? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "The Pricelists option in eCommerce settings",
      fr: "L'option Listes de prix dans les paramètres de commerce électronique",
    },
    distractors: [
      { en: "The multi-company setting", fr: "Le cadre multi-entreprises" },
      { en: "The advanced inventory module", fr: "Le module d'inventaire avancé" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): The Pricelists option in eCommerce settings",
      fr: "Source Odoo Learn (Tarif) : L'option Listes de prix dans les paramètres de commerce électronique",
    },
  }),
  mcq3Q({
    id: "eco-042",
    module: "ecommerce",
    text: {
      en: "How can you restrict a pricelist to customers in a specific country? (Odoo Learn — Pricing)",
      fr: "Comment restreindre une liste de prix aux clients d’un pays spécifique ? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "By assigning the pricelist to that country in the Configuration tab",
      fr: "En attribuant la liste de prix à ce pays dans l'onglet Configuration",
    },
    distractors: [
      { en: "By setting a password for the pricelist", fr: "En définissant un mot de passe pour la liste de prix" },
      { en: "By manually emailing customers with special pricing", fr: "En envoyant manuellement un e-mail aux clients avec des tarifs spéciaux" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): By assigning the pricelist to that country in the Configuration tab",
      fr: "Source Odoo Learn (Tarif) : En attribuant la liste de prix à ce pays dans l'onglet Configuration",
    },
  }),
  mcq3Q({
    id: "eco-043",
    module: "ecommerce",
    text: {
      en: "What can customers do if the \"Selectable by customers\" option is enabled for a pricelist? (Odoo Learn — Pricing)",
      fr: "Que peuvent faire les clients si l'option « Sélectionnable par les clients » est activée pour une liste de prix ? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "Choose their preferred pricing from the website?",
      fr: "Choisir leur tarif préféré sur le site ?",
    },
    distractors: [
      { en: "Change product prices themselves", fr: "Modifier soi-même les prix des produits" },
      { en: "Apply discounts to any product", fr: "Appliquer des réductions à n'importe quel produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): Choose their preferred pricing from the website?",
      fr: "Source Odoo Learn (Tarifs) : Choisir leur tarification préférée sur le site ?",
    },
  }),
  mcq3Q({
    id: "eco-044",
    module: "ecommerce",
    text: {
      en: "How to take customers to check out after adding to cart? (Odoo Learn — Cart checkout)",
      fr: "Comment amener les clients à payer après l'ajout au panier ? (Odoo Learn — Paiement du panier)",
    },
    correct: {
      en: "It has to be configured in the settings.",
      fr: "Il doit être configuré dans les paramètres.",
    },
    distractors: [
      { en: "It is done automatically.", fr: "Cela se fait automatiquement." },
      { en: "The customer always has the choice.", fr: "Le client a toujours le choix." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart checkout): It has to be configured in the settings.",
      fr: "Source Odoo Learn (Paiement du panier) : Elle doit être configurée dans les paramètres.",
    },
  }),
  mcq3Q({
    id: "eco-045",
    module: "ecommerce",
    text: {
      en: "What can I do to collect extra information for an order? (Odoo Learn — Cart checkout)",
      fr: "Que puis-je faire pour collecter des informations supplémentaires pour une commande ? (Odoo Learn — Paiement du panier)",
    },
    correct: {
      en: "Enable the “extra step” of the checkout process.",
      fr: "Activez « l’étape supplémentaire » du processus de paiement.",
    },
    distractors: [
      { en: "Message the customer via the “chatter” once the sales order is confirmed.", fr: "Envoyez un message au client via le « chat » une fois la commande client confirmée." },
      { en: "Customers have an “Additional comment” box at the end of their checkout.", fr: "Les clients disposent d’une case « Commentaire supplémentaire » à la fin de leur commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart checkout): Enable the “extra step” of the checkout process.",
      fr: "Source Odoo Learn (Paiement du panier) : Activez « l'étape supplémentaire » du processus de paiement.",
    },
  }),
  mcq3Q({
    id: "eco-046",
    module: "ecommerce",
    text: {
      en: "Is it possible to add images and text at the checkout steps? (Odoo Learn — Cart checkout)",
      fr: "Est-il possible d'ajouter des images et du texte lors des étapes de paiement ? (Odoo Learn — Paiement du panier)",
    },
    correct: {
      en: "Yes, and they are different on each step.",
      fr: "Oui, et ils sont différents à chaque étape.",
    },
    distractors: [
      { en: "Yes, but they will all be the same.", fr: "Oui, mais ils seront tous pareils." },
      { en: "No, you cannot add extra text and images.", fr: "Non, vous ne pouvez pas ajouter de texte ni d'images supplémentaires." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart checkout): Yes, and they are different on each step.",
      fr: "Source Odoo Learn (Paiement du panier) : Oui, et ils sont différents à chaque étape.",
    },
  }),
  mcq3Q({
    id: "eco-047",
    module: "ecommerce",
    text: {
      en: "What does setting a maximum weight or volume for a shipping method do? (Odoo Learn — Shipping & payment providers)",
      fr: "À quoi sert la définition d’un poids ou d’un volume maximum pour un mode d’expédition ? (Odoo Learn — Fournisseurs d'expédition et de paiement)",
    },
    correct: {
      en: "It disables the shipping method if the total weight or volume exceeds the set limit.",
      fr: "Il désactive le mode d'expédition si le poids ou le volume total dépasse la limite définie.",
    },
    distractors: [
      { en: "It calculates the shipping cost based on weight and volume.", fr: "Il calcule les frais d'expédition en fonction du poids et du volume." },
      { en: "It applies a discount to the shipping cost for lighter packages.", fr: "Il applique une réduction sur les frais de port pour les colis plus légers." },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping & payment providers): It disables the shipping method if the total weight or volume exceeds the set limit.",
      fr: "Source Odoo Learn (Prestataires d'expédition et de paiement) : Il désactive le mode d'expédition si le poids ou le volume total dépasse la limite définie.",
    },
  }),
  mcq3Q({
    id: "eco-048",
    module: "ecommerce",
    text: {
      en: "Which of these options does the \"Capture Amount Manually\" feature for payment providers enable? (Odoo Learn — Shipping & payment providers)",
      fr: "Laquelle de ces options la fonctionnalité « Capturer le montant manuellement » pour les prestataires de paiement permet-elle ? (Odoo Learn — Fournisseurs d'expédition et de paiement)",
    },
    correct: {
      en: "The payment is authorized, but you must manually capture the amount later.",
      fr: "Le paiement est autorisé, mais vous devrez saisir manuellement le montant ultérieurement.",
    },
    distractors: [
      { en: "The payment is automatically captured as soon as the customer makes the purchase.", fr: "Le paiement est automatiquement capturé dès que le client effectue l'achat." },
      { en: "The payment is not authorized, and no further action is needed.", fr: "Le paiement n’est pas autorisé et aucune autre action n’est nécessaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping & payment providers): The payment is authorized, but you must manually capture the amount later.",
      fr: "Source Odoo Learn (Prestataires d'expédition et de paiement) : Le paiement est autorisé, mais vous devrez saisir manuellement le montant ultérieurement.",
    },
  }),
  mcq3Q({
    id: "eco-049",
    module: "ecommerce",
    text: {
      en: "What should you do when setting up a new payment provider for the first time in Odoo? (Odoo Learn — Shipping & payment providers)",
      fr: "Que devez-vous faire lors de la première création d’un nouveau fournisseur de paiement dans Odoo ? (Odoo Learn — Fournisseurs d'expédition et de paiement)",
    },
    correct: {
      en: "Use test mode to process a fake payment and ensure proper setup.",
      fr: "Utilisez le mode test pour traiter un faux paiement et garantir une configuration correcte.",
    },
    distractors: [
      { en: "Enable the provider immediately.", fr: "Activez le fournisseur immédiatement." },
      { en: "Publish the provider on your website.", fr: "Publiez le fournisseur sur votre site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping & payment providers): Use test mode to process a fake payment and ensure proper setup.",
      fr: "Source Odoo Learn (Prestataires d'expédition et de paiement) : utilisez le mode test pour traiter un faux paiement et garantir une configuration correcte.",
    },
  }),
  mcq3Q({
    id: "eco-050",
    module: "ecommerce",
    text: {
      en: "What can you customize in the \"Messages\" tab of a payment provider? (Odoo Learn — Shipping & payment providers)",
      fr: "Que peut-on personnaliser dans l'onglet « Messages » d'un prestataire de paiement ? (Odoo Learn — Fournisseurs d'expédition et de paiement)",
    },
    correct: {
      en: "The messages displayed to the customer for different payment statuses.",
      fr: "Les messages affichés au client pour différents statuts de paiement.",
    },
    distractors: [
      { en: "The design of the payment interface.", fr: "La conception de l'interface de paiement." },
      { en: "The default currency for transactions.", fr: "La devise par défaut pour les transactions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Shipping & payment providers): The messages displayed to the customer for different payment statuses.",
      fr: "Source Odoo Learn (Prestataires d'expédition et de paiement) : Les messages affichés au client pour différents statuts de paiement.",
    },
  }),
  mcq3Q({
    id: "eco-051",
    module: "ecommerce",
    text: {
      en: "What happens when you set the sign-in or sign-up option to \"mandatory\" in the checkout settings? (Odoo Learn — Customer portal and account)",
      fr: "Que se passe-t-il lorsque vous définissez l'option de connexion ou d'inscription sur « obligatoire » dans les paramètres de paiement ? (Odoo Learn — Portail et compte client)",
    },
    correct: {
      en: "Customers must create an account or log in to complete their checkout.",
      fr: "Les clients doivent créer un compte ou se connecter pour finaliser leur paiement.",
    },
    distractors: [
      { en: "Customers can only check out as guests without creating an account.", fr: "Les clients ne peuvent payer qu'en tant qu'invités sans créer de compte." },
      { en: "Customers can create an account only after their order is confirmed.", fr: "Les clients ne peuvent créer un compte qu'après confirmation de leur commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer portal and account): Customers must create an account or log in to complete their checkout.",
      fr: "Source Odoo Learn (Portail client et compte) : Les clients doivent créer un compte ou se connecter pour finaliser leur paiement.",
    },
  }),
  mcq3Q({
    id: "eco-052",
    module: "ecommerce",
    text: {
      en: "How can you grant a customer access to the customer portal? (Odoo Learn — Customer portal and account)",
      fr: "Comment accorder à un client l’accès au portail client ? (Odoo Learn — Portail et compte client)",
    },
    correct: {
      en: "Go to the customer’s profile and click on \"Grant access\" in the actions menu.",
      fr: "Accédez au profil du client et cliquez sur « Accorder l'accès » dans le menu des actions.",
    },
    distractors: [
      { en: "Send a request to the customer manually via email.", fr: "Envoyez une demande au client manuellement par e-mail." },
      { en: "Add the customer to the “Portal Customers” group in the settings menu.", fr: "Ajoutez le client au groupe « Clients du portail » dans le menu des paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer portal and account): Go to the customer’s profile and click on \"Grant access\" in the actions menu.",
      fr: "Source Odoo Learn (Portail et compte client) : Allez sur le profil du client et cliquez sur « Accorder l'accès » dans le menu des actions.",
    },
  }),
  mcq3Q({
    id: "eco-053",
    module: "ecommerce",
    text: {
      en: "What can a customer access from their customer portal? (Odoo Learn — Customer portal and account)",
      fr: "À quoi un client peut-il accéder depuis son portail client ? (Odoo Learn — Portail et compte client)",
    },
    correct: {
      en: "Sales orders, invoices, bills, projects, and other account-related information.",
      fr: "Bons de commande, factures, factures, projets et autres informations relatives au compte.",
    },
    distractors: [
      { en: "Only their sales orders and invoices.", fr: "Uniquement leurs bons de commande et leurs factures." },
      { en: "Only their account profile and personal details.", fr: "Uniquement leur profil de compte et leurs informations personnelles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer portal and account): Sales orders, invoices, bills, projects, and other account-related information.",
      fr: "Source Odoo Learn (Portail client et compte) : bons de commande, factures, factures, projets et autres informations liées au compte.",
    },
  }),
  mcq3Q({
    id: "eco-054",
    module: "ecommerce",
    text: {
      en: "What does the \"Quotation\" stage in Odoo signify? (Odoo Learn — Order management)",
      fr: "Que signifie l'étape « Devis » dans Odoo ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "The product has been added to the cart, but the customer hasn’t completed the checkout process.",
      fr: "Le produit a été ajouté au panier, mais le client n'a pas terminé le processus de paiement.",
    },
    distractors: [
      { en: "The customer has completed the checkout process but the payment isn’t confirmed", fr: "Le client a terminé le processus de paiement mais le paiement n'est pas confirmé" },
      { en: "The payment has been confirmed, and the order is ready for delivery.", fr: "Le paiement a été confirmé et la commande est prête à être livrée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order management): The product has been added to the cart, but the customer hasn’t completed the checkout process.",
      fr: "Source Odoo Learn (Gestion des commandes) : Le produit a été ajouté au panier, mais le client n'a pas terminé le processus de paiement.",
    },
  }),
  mcq3Q({
    id: "eco-055",
    module: "ecommerce",
    text: {
      en: "Where can you view all confirmed orders placed through the website? (Odoo Learn — Order management)",
      fr: "Où pouvez-vous consulter toutes les commandes confirmées passées via le site Web ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "In the \"Orders\" section under the eCommerce tab.",
      fr: "Dans la section \"Commandes\" sous l'onglet eCommerce.",
    },
    distractors: [
      { en: "In the \"Invoices\" section under the Accounting tab.", fr: "Dans la section \"Factures\" sous l'onglet Comptabilité." },
      { en: "In the \"Inventory\" section under the Inventory app.", fr: "Dans la section « Inventaire » sous l'application Inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order management): In the \"Orders\" section under the eCommerce tab.",
      fr: "Source Odoo Learn (Gestion des commandes) : Dans la section \"Commandes\" sous l'onglet eCommerce.",
    },
  }),
  mcq3Q({
    id: "eco-056",
    module: "ecommerce",
    text: {
      en: "What happens when you activate the \"automatic invoice\" option in Odoo? (Odoo Learn — Order management)",
      fr: "Que se passe-t-il lorsque vous activez l'option « facture automatique » dans Odoo ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "An invoice is automatically created and sent to the customer when payment is confirmed.",
      fr: "Une facture est automatiquement créée et envoyée au client lorsque le paiement est confirmé.",
    },
    distractors: [
      { en: "An invoice is generated manually by the salesperson.", fr: "Une facture est générée manuellement par le vendeur." },
      { en: "The system sends a reminder email for unpaid invoices.", fr: "Le système envoie un e-mail de rappel pour les factures impayées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order management): An invoice is automatically created and sent to the customer when payment is confirmed.",
      fr: "Source Odoo Learn (Gestion des commandes) : Une facture est automatiquement créée et envoyée au client lorsque le paiement est confirmé.",
    },
  }),
  mcq3Q({
    id: "eco-057",
    module: "ecommerce",
    text: {
      en: "What is the main difference between optional and accessory products in Odoo? (Odoo Learn — Selling strategies)",
      fr: "Quelle est la principale différence entre les produits optionnels et accessoires dans Odoo ? (Odoo Learn — Stratégies de vente)",
    },
    correct: {
      en: "Optional products are suggested when the customer clicks “add to cart,” while accessory products are suggested when the customer reviews their cart before payment.",
      fr: "Les produits optionnels sont suggérés lorsque le client clique sur « Ajouter au panier », tandis que les produits accessoires sont suggérés lorsque le client examine son panier avant le paiement.",
    },
    distractors: [
      { en: "Optional products are suggested during checkout, while accessory products are suggested before adding an item to the cart.", fr: "Les produits optionnels sont suggérés lors du paiement, tandis que les produits accessoires sont suggérés avant d'ajouter un article au panier." },
      { en: "Optional products replace the initial product, while accessory products do not.", fr: "Les produits optionnels remplacent le produit initial, contrairement aux produits accessoires." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling strategies): Optional products are suggested when the customer clicks “add to cart,” while accessory products are suggested when the customer reviews their cart before payment.",
      fr: "Source Odoo Learn (Stratégies de vente) : les produits optionnels sont suggérés lorsque le client clique sur « Ajouter au panier », tandis que les produits accessoires sont suggérés lorsque le client examine son panier avant le paiement.",
    },
  }),
  mcq3Q({
    id: "eco-058",
    module: "ecommerce",
    text: {
      en: "How does upselling work in Odoo? (Odoo Learn — Selling strategies)",
      fr: "Comment fonctionne la vente incitative dans Odoo ? (Odoo Learn — Stratégies de vente)",
    },
    correct: {
      en: "It involves offering alternative upgraded versions of the product.",
      fr: "Il s’agit de proposer des versions alternatives améliorées du produit.",
    },
    distractors: [
      { en: "It involves suggesting additional products that complement the customer’s purchase.", fr: "Il s’agit de suggérer des produits complémentaires qui complètent l’achat du client." },
      { en: "It allows customers to select accessory products before checkout.", fr: "Il permet aux clients de sélectionner des produits accessoires avant de passer à la caisse." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling strategies): It involves offering alternative upgraded versions of the product.",
      fr: "Source Odoo Learn (Stratégies de vente) : Il s'agit de proposer des versions alternatives améliorées du produit.",
    },
  }),
  mcq3Q({
    id: "eco-059",
    module: "ecommerce",
    text: {
      en: "Where can you configure cross-selling and upselling options for a product in Odoo? (Odoo Learn — Selling strategies)",
      fr: "Où pouvez-vous configurer les options de vente croisée et de vente incitative pour un produit dans Odoo ? (Odoo Learn — Stratégies de vente)",
    },
    correct: {
      en: "In the product's \"Sales\" tab within the eCommerce application.",
      fr: "Dans l'onglet « Ventes » du produit au sein de l'application eCommerce.",
    },
    distractors: [
      { en: "In the product's \"Inventory\" tab within the Inventory application.", fr: "Dans l'onglet « Inventaire » du produit au sein de l'application Inventaire." },
      { en: "In the website settings under the eCommerce tab.", fr: "Dans les paramètres du site Web sous l'onglet eCommerce." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling strategies): In the product's \"Sales\" tab within the eCommerce application.",
      fr: "Source Odoo Learn (Stratégies de vente) : Dans l'onglet « Ventes » du produit au sein de l'application eCommerce.",
    },
  }),
  mcq3Q({
    id: "eco-060",
    module: "ecommerce",
    text: {
      en: "What happens when a customer selects an optional product? (Odoo Learn — Selling strategies)",
      fr: "Que se passe-t-il lorsqu'un client sélectionne un produit optionnel ? (Odoo Learn — Stratégies de vente)",
    },
    correct: {
      en: "The optional product is added to the cart alongside the initial product.",
      fr: "Le produit optionnel est ajouté au panier aux côtés du produit initial.",
    },
    distractors: [
      { en: "The optional product substitutes the initial product in the cart.", fr: "Le produit optionnel remplace le produit initial dans le panier." },
      { en: "The optional product appears only after the payment is completed.", fr: "Le produit optionnel n'apparaît qu'une fois le paiement effectué." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling strategies): The optional product is added to the cart alongside the initial product.",
      fr: "Source Odoo Learn (Stratégies de vente) : Le produit optionnel est ajouté au panier à côté du produit initial.",
    },
  }),
  mcq3Q({
    id: "eco-061",
    module: "ecommerce",
    text: {
      en: "What is the primary purpose of a loyalty program in Odoo? (Odoo Learn — Loyalty programs and e-wallets)",
      fr: "Quel est l’objectif principal d’un programme de fidélité dans Odoo ? (Odoo Learn — Programmes de fidélité et portefeuilles électroniques)",
    },
    correct: {
      en: "To reward customers with points for purchases that they can later redeem for rewards.",
      fr: "Récompenser les clients avec des points pour leurs achats qu'ils pourront ensuite échanger contre des récompenses.",
    },
    distractors: [
      { en: "To offer free shipping on all purchases.", fr: "Pour offrir la livraison gratuite sur tous les achats." },
      { en: "To automatically apply discounts to all products in the store.", fr: "Pour appliquer automatiquement des réductions à tous les produits du magasin." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loyalty programs and e-wallets): To reward customers with points for purchases that they can later redeem for rewards.",
      fr: "Source Odoo Learn (programmes de fidélité et portefeuilles électroniques) : pour récompenser les clients avec des points pour leurs achats qu'ils pourront ensuite échanger contre des récompenses.",
    },
  }),
  mcq3Q({
    id: "eco-062",
    module: "ecommerce",
    text: {
      en: "How is a gift card program set up in Odoo? (Odoo Learn — Loyalty programs and e-wallets)",
      fr: "Comment est mis en place un programme de cartes cadeaux dans Odoo ? (Odoo Learn — Programmes de fidélité et portefeuilles électroniques)",
    },
    correct: {
      en: "By creating a product named \"gift card\" and publishing it on the website.",
      fr: "En créant un produit nommé « carte cadeau » et en le publiant sur le site Internet.",
    },
    distractors: [
      { en: "By creating a unique code for each customer and linking it to an email address.", fr: "En créant un code unique pour chaque client et en le liant à une adresse email." },
      { en: "By manually entering a fixed number of codes for in-store use only.", fr: "En saisissant manuellement un nombre fixe de codes pour une utilisation en magasin uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loyalty programs and e-wallets): By creating a product named \"gift card\" and publishing it on the website.",
      fr: "Source Odoo Learn (Programmes de fidélité et portefeuilles électroniques) : En créant un produit nommé « carte cadeau » et en le publiant sur le site Internet.",
    },
  }),
];
