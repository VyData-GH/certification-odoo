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
  complexQ({
    id: "eco-063",
    module: "ecommerce",
    text: {
      en: "On the front-end, how do you make a newly created product visible to customers? (Odoo Learn — Create your product)",
      fr: "On the front-end, how do you make a newly created product visible to customers? (Odoo Learn — Créez votre produit)",
    },
    correct: {
      en: "Nothing! As long as it is related to an existing category, it is automatically published.",
      fr: "Rien! Tant qu'elle est liée à une catégorie existante, elle est automatiquement publiée.",
    },
    distractors: [
      { en: "By saving it and refreshing the page", fr: "En l'enregistrant et en actualisant la page" },
      { en: "By adding a description", fr: "En ajoutant une description" },
      { en: "By adding a rating snippet", fr: "En ajoutant un extrait de note" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your product): Nothing! As long as it is related to an existing category, it is automatically published.",
      fr: "Source Odoo Learn (Créez votre produit) : Rien ! Tant qu'elle est liée à une catégorie existante, elle est automatiquement publiée.",
    },
  }),
  complexQ({
    id: "eco-064",
    module: "ecommerce",
    text: {
      en: "Which element can you add to a product page to display customer opinions? (Odoo Learn — Create your product)",
      fr: "Which element can you add to a product page to display customer opinions? (Odoo Learn — Créez votre produit)",
    },
    correct: {
      en: "Reviews",
      fr: "Avis",
    },
    distractors: [
      { en: "A pricelist", fr: "Une liste de prix" },
      { en: "A variant table", fr: "Un tableau de variantes" },
      { en: "A cross-sell rule", fr: "Une règle de vente croisée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your product): Reviews",
      fr: "Source Odoo Learn (Créez votre produit) : Avis",
    },
  }),
  complexQ({
    id: "eco-065",
    module: "ecommerce",
    text: {
      en: "In the back-end, on the product form where can you manage upsell and cross-sell products? (Odoo Learn — Create your product)",
      fr: "In the back-end, on the product form where can you manage upsell and cross-sell products? (Odoo Learn — Créez votre produit)",
    },
    correct: {
      en: "Sales tab",
      fr: "Onglet Ventes",
    },
    distractors: [
      { en: "General Information tab", fr: "Onglet Informations générales" },
      { en: "Attributes and Variants tab", fr: "Onglet Attributs et variantes" },
      { en: "Inventory tab", fr: "Onglet Inventaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your product): Sales tab",
      fr: "Source Odoo Learn (Créez votre produit) : Onglet Ventes",
    },
  }),
  complexQ({
    id: "eco-066",
    module: "ecommerce",
    text: {
      en: "What should you do before importing products in bulk using a .csv or .xls file? (Odoo Learn — Create your product)",
      fr: "What should you do before importing products in bulk using a .csv or .xls file? (Odoo Learn — Créez votre produit)",
    },
    correct: {
      en: "Make sure the fields match the required product data",
      fr: "Assurez-vous que les champs correspondent aux données produit requises",
    },
    distractors: [
      { en: "Convert it to PDF", fr: "Convertissez-le en PDF" },
      { en: "Upload it to the website media library", fr: "Téléchargez-le dans la médiathèque du site" },
      { en: "Publish all categories first", fr: "Publier toutes les catégories en premier" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create your product): Make sure the fields match the required product data",
      fr: "Source Odoo Learn (Créez votre produit) : Assurez-vous que les champs correspondent aux données produit requises",
    },
  }),
  complexQ({
    id: "eco-067",
    module: "ecommerce",
    text: {
      en: "After enabling \"Product Variants\" in the settings, what is the most direct way to access the attributes management page for all options like size and color? (Odoo Learn — Product Variants & Stock Management)",
      fr: "Après avoir activé « Variantes de produits » dans les paramètres, quel est le moyen le plus direct d'accéder à la page de gestion des attributs pour toutes les options telles que la taille et la couleur ? (Odoo Learn — Variantes de produits et gestion des stocks)",
    },
    correct: {
      en: "Clicking the \"Attributes\" link within the Settings page.",
      fr: "En cliquant sur le lien « Attributs » dans la page Paramètres.",
    },
    distractors: [
      { en: "Re-searching \"Variants\" in the main dashboard.", fr: "Recherche de « Variantes » dans le tableau de bord principal." },
      { en: "Navigating to the Inventory app's main menu.", fr: "Accédez au menu principal de l'application Inventaire." },
      { en: "Opening the \"Sales\" tab on a specific product.", fr: "Ouverture de l'onglet \"Ventes\" sur un produit spécifique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Variants & Stock Management): Clicking the \"Attributes\" link within the Settings page.",
      fr: "Source Odoo Learn (Variantes de produits et gestion des stocks) : en cliquant sur le lien « Attributs » dans la page Paramètres.",
    },
  }),
  complexQ({
    id: "eco-068",
    module: "ecommerce",
    text: {
      en: "If a \"Signature Stoneware Mug\" has a base price of 10€, how do you specifically make the \"Size L\" variant cost 20€? (Odoo Learn — Product Variants & Stock Management)",
      fr: "Si une « Signature Stoneware Mug » a un prix de base de 10 €, comment faire en sorte que la variante « Taille L » coûte spécifiquement 20 € ? (Odoo Learn — Variantes de produits et gestion des stocks)",
    },
    correct: {
      en: "Go to the Attributes menu, select the size attribute and change the price from there using the Default Extra Price column.",
      fr: "Accédez au menu Attributs, sélectionnez l'attribut de taille et modifiez le prix à partir de là à l'aide de la colonne Prix supplémentaire par défaut.",
    },
    distractors: [
      { en: "Edit the individual variant's price field in the \"Variants\" smart button.", fr: "Modifiez le champ de prix de chaque variante dans le bouton intelligent « Variantes »." },
      { en: "Change the base price of the product to 20€ in General Information.", fr: "Changez le prix de base du produit à 20€ dans Informations générales." },
      { en: "Manually update the price on the front-end website editor.", fr: "Mettez à jour manuellement le prix sur l’éditeur front-end du site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Variants & Stock Management): Go to the Attributes menu, select the size attribute and change the price from there using the Default Extra Price column.",
      fr: "Source Odoo Learn (Variantes de produits et gestion des stocks) : Accédez au menu Attributs, sélectionnez l'attribut de taille et modifiez le prix à partir de là à l'aide de la colonne Prix supplémentaire par défaut.",
    },
  }),
  complexQ({
    id: "eco-069",
    module: "ecommerce",
    text: {
      en: "What action must be taken to be able to manage stock levels and display \"out-of-stock\" messages for a product? (Odoo Learn — Product Variants & Stock Management)",
      fr: "Quelle action faut-il entreprendre pour pouvoir gérer les niveaux de stock et afficher les messages « rupture de stock » pour un produit ? (Odoo Learn — Variantes de produits et gestion des stocks)",
    },
    correct: {
      en: "Install the Inventory app.",
      fr: "Installez l'application Inventaire.",
    },
    distractors: [
      { en: "In the product form’s General Information tab, set the base price to a value higher than 0€ in the eCommerce tab.", fr: "Dans l'onglet Informations générales du formulaire produit, définissez le prix de base sur une valeur supérieure à 0 € dans l'onglet eCommerce." },
      { en: "In the product form’s General Information tab, enable the \"Automated Replenishment\" rule first in.", fr: "Dans l'onglet Informations générales du formulaire produit, activez d'abord la règle « Réapprovisionnement automatisé »." },
      { en: "Tick the \"Front-end Visibility\" box in the Configuration menu.", fr: "Cochez la case « Visibilité frontale » dans le menu Configuration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Variants & Stock Management): Install the Inventory app.",
      fr: "Source Odoo Learn (variantes de produits et gestion des stocks) : installez l'application Inventaire.",
    },
  }),
  complexQ({
    id: "eco-070",
    module: "ecommerce",
    text: {
      en: "Where is the \"Track Inventory by Quantity\" option located when you want to update on-hand stock for each variant? (Odoo Learn — Product Variants & Stock Management)",
      fr: "Où se trouve l'option « Suivre l'inventaire par quantité » lorsque vous souhaitez mettre à jour le stock disponible pour chaque variante ? (Odoo Learn — Variantes de produits et gestion des stocks)",
    },
    correct: {
      en: "In the product form’s General Information tab.",
      fr: "Dans l’onglet Informations générales du formulaire produit.",
    },
    distractors: [
      { en: "In the product form’s Sales tab.", fr: "Dans l’onglet Ventes du formulaire produit." },
      { en: "In the product form’s Attributes & Variants tab.", fr: "Dans l’onglet Attributs et variantes du formulaire produit." },
      { en: "In the Configuration > Settings search bar.", fr: "Dans la barre de recherche Configuration > Paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Variants & Stock Management): In the product form’s General Information tab.",
      fr: "Source Odoo Learn (Variantes de produits et gestion des stocks) : Dans l’onglet Informations générales du formulaire produit.",
    },
  }),
  complexQ({
    id: "eco-071",
    module: "ecommerce",
    text: {
      en: "When organizing the hierarchy of your eCommerce categories, which of the following statements is true based on the tutorial? (Odoo Learn — Organize your Product Catalog)",
      fr: "Lorsque vous organisez la hiérarchie de vos catégories de commerce électronique, laquelle des affirmations suivantes est vraie d'après le didacticiel ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "A category can have only one parent category, but an unlimited number of child categories.",
      fr: "Une catégorie ne peut avoir qu’une seule catégorie parent, mais un nombre illimité de catégories enfants.",
    },
    distractors: [
      { en: "A category can have multiple parent categories but only one child category.", fr: "Une catégorie peut avoir plusieurs catégories parents mais une seule catégorie enfant." },
      { en: "You must assign a parent category to every new category you create.", fr: "Vous devez attribuer une catégorie parent à chaque nouvelle catégorie que vous créez." },
      { en: "Child categories cannot be hidden once they are created.", fr: "Les catégories enfants ne peuvent pas être masquées une fois créées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your Product Catalog): A category can have only one parent category, but an unlimited number of child categories.",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : Une catégorie ne peut avoir qu'une seule catégorie parent, mais un nombre illimité de catégories enfants.",
    },
  }),
  complexQ({
    id: "eco-072",
    module: "ecommerce",
    text: {
      en: "You want a specific category to appear first in your catalog page. How should you achieve this according to the flow? (Odoo Learn — Organize your Product Catalog)",
      fr: "Vous souhaitez qu'une catégorie spécifique apparaisse en premier dans votre page de catalogue. Comment y parvenir en fonction du flux ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "Drag and drop the category to the top of the list in the back-end hierarchy.",
      fr: "Faites glisser et déposez la catégorie en haut de la liste dans la hiérarchie back-end.",
    },
    distractors: [
      { en: "Go to Configuration → Settings and select \"Pin to Top.\"", fr: "Accédez à Configuration → Paramètres et sélectionnez « Épingler en haut »." },
      { en: "Use the search bar to find the category and click \"Prioritize.\"", fr: "Utilisez la barre de recherche pour trouver la catégorie et cliquez sur « Prioriser »." },
      { en: "Delete all other categories and recreate them in the desired order.", fr: "Supprimez toutes les autres catégories et recréez-les dans l'ordre souhaité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your Product Catalog): Drag and drop the category to the top of the list in the back-end hierarchy.",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : faites glisser et déposez la catégorie en haut de la liste dans la hiérarchie back-end.",
    },
  }),
  complexQ({
    id: "eco-073",
    module: "ecommerce",
    text: {
      en: "If you want to display products for browsing but prevent customers from purchasing any items within those categories, which setting must you enable? (Odoo Learn — Organize your Product Catalog)",
      fr: "Si vous souhaitez afficher des produits à consulter mais empêcher les clients d'acheter des articles dans ces catégories, quel paramètre devez-vous activer ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "In the eCommerce settings, enable \"Hide Add to Cart\" and select “For specific categories.”",
      fr: "Dans les paramètres de commerce électronique, activez « Masquer l'ajout au panier » et sélectionnez « Pour des catégories spécifiques ».",
    },
    distractors: [
      { en: "Enable \"Standalone Category\" in the eCommerce settings.", fr: "Activez « Catégorie autonome » dans les paramètres de commerce électronique." },
      { en: "Click \"Not in shop\" checkbox in the specific category.", fr: "Cochez la case « Pas dans la boutique » dans la catégorie spécifique." },
      { en: "On the front end, in the website editor on the Style tab click \"Collapse categories\".", fr: "Sur le front-end, dans l'éditeur de site Web, dans l'onglet Style, cliquez sur « Réduire les catégories »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your Product Catalog): In the eCommerce settings, enable \"Hide Add to Cart\" and select “For specific categories.”",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : dans les paramètres de commerce électronique, activez « Masquer l'ajout au panier » et sélectionnez « Pour des catégories spécifiques ».",
    },
  }),
  complexQ({
    id: "eco-074",
    module: "ecommerce",
    text: {
      en: "What are the two ways to add a product to an eCommerce category? (Odoo Learn — Organize your Product Catalog)",
      fr: "Quelles sont les deux manières d’ajouter un produit à une catégorie de commerce électronique ? (Odoo Learn — Organisez votre catalogue de produits)",
    },
    correct: {
      en: "On the back-end, from the category's Products tab or from the product's eCommerce tab.",
      fr: "En back-end, depuis l'onglet Produits de la catégorie ou depuis l'onglet eCommerce du produit.",
    },
    distractors: [
      { en: "From the website homepage, go to the blocks tab and select a category block.", fr: "Depuis la page d'accueil du site Web, accédez à l'onglet Blocs et sélectionnez un bloc de catégorie." },
      { en: "On the front end, directly on the product page.", fr: "Sur le front end, directement sur la page produit." },
      { en: "On the /Shop page, only by using the drag-and-drop feature.", fr: "Sur la page /Shop, uniquement en utilisant la fonction glisser-déposer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Organize your Product Catalog): On the back-end, from the category's Products tab or from the product's eCommerce tab.",
      fr: "Source Odoo Learn (Organisez votre catalogue de produits) : En back-end, depuis l'onglet Produits de la catégorie ou depuis l'onglet eCommerce du produit.",
    },
  }),
  complexQ({
    id: "eco-075",
    module: "ecommerce",
    text: {
      en: "Which of the following must be enabled in Odoo to use pricelists? (Odoo Learn — Pricing)",
      fr: "Lequel des éléments suivants doit être activé dans Odoo pour utiliser les listes de prix ? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "The Pricelists option in the eCommerce settings.",
      fr: "L'option Listes de prix dans les paramètres de commerce électronique.",
    },
    distractors: [
      { en: "The multi-company setting.", fr: "Le cadre multi-entreprises." },
      { en: "The advanced inventory module.", fr: "Le module d'inventaire avancé." },
      { en: "The Online payment option in the Sales settings.", fr: "L'option Paiement en ligne dans les paramètres Ventes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): The Pricelists option in the eCommerce settings.",
      fr: "Source Odoo Learn (Tarif) : L'option Listes de prix dans les paramètres du commerce électronique.",
    },
  }),
  complexQ({
    id: "eco-076",
    module: "ecommerce",
    text: {
      en: "You currently only provide your customers with the EUR currency. How can you add another one like GBP? (Odoo Learn — Pricing)",
      fr: "You currently only provide your customers with the EUR currency. How can you add another one like GBP? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "You must activate the GBP currency in the settings.",
      fr: "Vous devez activer la devise GBP dans les paramètres.",
    },
    distractors: [
      { en: "You must create a \"UK\" Country Group before activating the currency.", fr: "Vous devez créer un groupe de pays « UK » avant d'activer la devise." },
      { en: "You must enable \"Tax Included\" in the eCommerce settings first.", fr: "Vous devez d'abord activer « Taxes incluses » dans les paramètres de commerce électronique." },
      { en: "You must set the default currency of the website to GBP.", fr: "Vous devez définir la devise par défaut du site Web sur GBP." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): You must activate the GBP currency in the settings.",
      fr: "Source Odoo Learn (Tarif) : Vous devez activer la devise GBP dans les paramètres.",
    },
  }),
  complexQ({
    id: "eco-077",
    module: "ecommerce",
    text: {
      en: "To offer a promo code that gives a 20% discount on all products, how should the pricelist rule be configured? (Odoo Learn — Pricing)",
      fr: "To offer a promo code that gives a 20% discount on all products, how should the pricelist rule be configured? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "Select \"Product\" in the \"Apply to\" field but leave the specific \"Product\" field blank. Then add a the Promocode of your choosing in the eCommerce tab.",
      fr: "Sélectionnez « Produit » dans le champ « Appliquer à » mais laissez le champ « Produit » spécifique vide. Ajoutez ensuite le code promotionnel de votre choix dans l'onglet eCommerce.",
    },
    distractors: [
      { en: "n the Pricelist, in the \"Rules\" tab, in the window set \"Apply on\" to \"Global\". Then add a Promocode in the eCommerce tab.", fr: "Dans la Liste de Prix, dans l'onglet \"Règlement\", dans la fenêtre paramétrez \"Postuler sur\" sur \"Global\". Ajoutez ensuite un code promotionnel dans l'onglet eCommerce." },
      { en: "Create a separate Country Group specifically for promo code users. Then add Promocode in the eCommerce tab.", fr: "Créez un groupe de pays distinct spécifiquement pour les utilisateurs de codes promotionnels. Ajoutez ensuite le code promotionnel dans l'onglet eCommerce." },
      { en: "In the eCommerce tab, select the All Products category and apply a 20% discount to its specific variants. Then add your promocode.", fr: "Dans l'onglet Commerce électronique, sélectionnez la catégorie Tous les produits et appliquez une remise de 20 % à ses variantes spécifiques. Ajoutez ensuite votre code promo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): Select \"Product\" in the \"Apply to\" field but leave the specific \"Product\" field blank. Then add a the Promocode of your choosing in the eCommerce tab.",
      fr: "Source Odoo Learn (Tarif) : Sélectionnez « Produit » dans le champ « Appliquer à » mais laissez le champ « Produit » spécifique vide. Ajoutez ensuite le code promotionnel de votre choix dans l'onglet eCommerce.",
    },
  }),
  complexQ({
    id: "eco-078",
    module: "ecommerce",
    text: {
      en: "How can you hide prices for specific categories? (Odoo Learn — Pricing)",
      fr: "How can you hide prices for specific categories? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "In the eCommerce settings, enable \"Hide Add To Cart\" and select For Specific Categories.",
      fr: "Dans les paramètres de commerce électronique, activez « Masquer l'ajout au panier » et sélectionnez Pour des catégories spécifiques.",
    },
    distractors: [
      { en: "In the eCommerce settings, enable \"Tax Indication\" and set the redirect URL to \"/shop\".", fr: "Dans les paramètres du commerce électronique, activez « Indication fiscale » et définissez l'URL de redirection sur « / shop »." },
      { en: "In the category itself, tick the \"Not in shop\" checkbox and disable \"Pricelists\".", fr: "Dans la catégorie elle-même, cochez la case « Pas en boutique » et désactivez « Listes de prix »." },
      { en: "In the Invoicing/Accounting settings, enable \"Fiscal Exceptions\" and select Hide Prices for Categories.", fr: "Dans les paramètres de facturation/comptabilité, activez « Exceptions fiscales » et sélectionnez Masquer les prix des catégories." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): In the eCommerce settings, enable \"Hide Add To Cart\" and select For Specific Categories.",
      fr: "Source Odoo Learn (tarification) : dans les paramètres de commerce électronique, activez « Masquer l'ajout au panier » et sélectionnez Pour des catégories spécifiques.",
    },
  }),
  complexQ({
    id: "eco-079",
    module: "ecommerce",
    text: {
      en: "On the /Shop page, in the Customize tab, in the Shop Header section, which options can you choose to modify? (Odoo Learn — Design your product catalog)",
      fr: "Sur la page /Boutique, dans l'onglet Personnaliser, dans la section En-tête de la boutique, quelles options pouvez-vous choisir de modifier ? (Odoo Learn — Concevez votre catalogue de produits)",
    },
    correct: {
      en: "The page Title and Centered Content.",
      fr: "Le titre de la page et le contenu centré.",
    },
    distractors: [
      { en: "The background zoom and gap size.", fr: "Le zoom d'arrière-plan et la taille de l'espace." },
      { en: "The product width and image ratio.", fr: "La largeur du produit et le rapport de l'image." },
      { en: "The payment methods and footer text.", fr: "Les modes de paiement et le texte du pied de page." },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your product catalog): The page Title and Centered Content.",
      fr: "Source Odoo Learn (Concevez votre catalogue produits) : Le titre de la page et le contenu centré.",
    },
  }),
  complexQ({
    id: "eco-080",
    module: "ecommerce",
    text: {
      en: "Where can you place a Catalog Block to display your products? (Odoo Learn — Design your product catalog)",
      fr: "Où pouvez-vous placer un bloc catalogue pour afficher vos produits ? (Odoo Learn — Concevez votre catalogue de produits)",
    },
    correct: {
      en: "On any page.",
      fr: "Sur n'importe quelle page.",
    },
    distractors: [
      { en: "Only on the homepage.", fr: "Uniquement sur la page d'accueil." },
      { en: "Only on the /Shop page.", fr: "Uniquement sur la page /Shop." },
      { en: "Only on the footer.", fr: "Uniquement sur le pied de page." },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your product catalog): On any page.",
      fr: "Source Odoo Learn (Concevez votre catalogue de produits) : Sur n'importe quelle page.",
    },
  }),
  complexQ({
    id: "eco-081",
    module: "ecommerce",
    text: {
      en: "What happens when Variant Creation is set to Dynamically? (Odoo Learn — Design your product catalog)",
      fr: "Que se passe-t-il lorsque la création de variantes est définie sur Dynamiquement ? (Odoo Learn — Concevez votre catalogue de produits)",
    },
    correct: {
      en: "Each variant is created only when added to a sales order.",
      fr: "Chaque variante est créée uniquement lorsqu'elle est ajoutée à une commande client.",
    },
    distractors: [
      { en: "All possible variants are created instantly.", fr: "Toutes les variantes possibles sont créées instantanément." },
      { en: "Variants are never created for the attribute.", fr: "Les variantes ne sont jamais créées pour l'attribut." },
      { en: "Variants are deleted automatically.", fr: "Les variantes sont supprimées automatiquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your product catalog): Each variant is created only when added to a sales order.",
      fr: "Source Odoo Learn (Concevez votre catalogue de produits) : Chaque variante est créée uniquement lorsqu'elle est ajoutée à une commande client.",
    },
  }),
  complexQ({
    id: "eco-082",
    module: "ecommerce",
    text: {
      en: "Can you change the Variant Creation type after an attribute has been used on a product? (Odoo Learn — Design your product catalog)",
      fr: "Pouvez-vous modifier le type de création de variante après qu'un attribut a été utilisé sur un produit ? (Odoo Learn — Concevez votre catalogue de produits)",
    },
    correct: {
      en: "No, you cannot change it.",
      fr: "Non, vous ne pouvez pas le changer.",
    },
    distractors: [
      { en: "Yes, at any time.", fr: "Oui, à tout moment." },
      { en: "Yes, but only on weekends.", fr: "Oui, mais seulement le week-end." },
      { en: "Yes, but only for colors.", fr: "Oui, mais uniquement pour les couleurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your product catalog): No, you cannot change it.",
      fr: "Source Odoo Learn (Concevez votre catalogue de produits) : Non, vous ne pouvez pas le modifier.",
    },
  }),
  mcq3Q({
    id: "eco-083",
    module: "ecommerce",
    text: {
      en: "What is the purpose of the “Buy Now” button on a product page? (Odoo Learn — Cart Checkout)",
      fr: "A quoi sert le bouton « Acheter maintenant » sur une page produit ? (Odoo Learn – Paiement du panier)",
    },
    correct: {
      en: "To speed up the purchasing process by taking the customer directly to checkout.",
      fr: "Accélérer le processus d’achat en amenant le client directement à la caisse.",
    },
    distractors: [
      { en: "To apply a discount to the product.", fr: "Pour appliquer une remise sur le produit." },
      { en: "To save the product for later.", fr: "Pour enregistrer le produit pour plus tard." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart Checkout): To speed up the purchasing process by taking the customer directly to checkout.",
      fr: "Source Odoo Learn (Cart Checkout) : Pour accélérer le processus d'achat en amenant le client directement à la caisse.",
    },
  }),
  mcq3Q({
    id: "eco-084",
    module: "ecommerce",
    text: {
      en: "What can you do with the “Extra Step” during checkout? (Odoo Learn — Cart Checkout)",
      fr: "Que pouvez-vous faire avec « l’étape supplémentaire » lors du paiement ? (Odoo Learn – Paiement du panier)",
    },
    correct: {
      en: "Add a customizable form to collect additional information from customers.",
      fr: "Ajoutez un formulaire personnalisable pour collecter des informations supplémentaires auprès des clients.",
    },
    distractors: [
      { en: "Configure delivery carriers.", fr: "Configurez les transporteurs de livraison." },
      { en: "Automatically apply loyalty points.", fr: "Appliquez automatiquement des points de fidélité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart Checkout): Add a customizable form to collect additional information from customers.",
      fr: "Source Odoo Learn (Paiement du panier) : ajoutez un formulaire personnalisable pour collecter des informations supplémentaires auprès des clients.",
    },
  }),
  mcq3Q({
    id: "eco-085",
    module: "ecommerce",
    text: {
      en: "What is the purpose of the “Accept Terms & Conditions” option? (Odoo Learn — Cart Checkout)",
      fr: "Quel est le but de l’option « Accepter les conditions générales » ? (Odoo Learn – Paiement du panier)",
    },
    correct: {
      en: "To require customers to agree before completing their purchase.",
      fr: "Exiger des clients qu’ils acceptent avant de finaliser leur achat.",
    },
    distractors: [
      { en: "To display shipping costs.", fr: "Pour afficher les frais de port." },
      { en: "To validate payment methods.", fr: "Pour valider les moyens de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart Checkout): To require customers to agree before completing their purchase.",
      fr: "Source Odoo Learn (Paiement du panier) : Pour demander aux clients d'accepter avant de finaliser leur achat.",
    },
  }),
  mcq3Q({
    id: "eco-086",
    module: "ecommerce",
    text: {
      en: "What does the quick reorder feature allow customers to do? (Odoo Learn — Cart Checkout)",
      fr: "Que permet aux clients de faire la fonctionnalité de réapprovisionnement rapide ? (Odoo Learn – Paiement du panier)",
    },
    correct: {
      en: "Reorder previous purchases quickly from their order history.",
      fr: "Réorganisez rapidement vos achats précédents à partir de leur historique de commandes.",
    },
    distractors: [
      { en: "Modify product prices in their cart.", fr: "Modifier les prix des produits dans leur panier." },
      { en: "Skip the payment step entirely.", fr: "Ignorez complètement l’étape de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cart Checkout): Reorder previous purchases quickly from their order history.",
      fr: "Source Odoo Learn (Paiement du panier) : Réorganisez rapidement les achats précédents à partir de leur historique de commandes.",
    },
  }),
  mcq3Q({
    id: "eco-087",
    module: "ecommerce",
    text: {
      en: "What does setting a maximum weight or volume for a delivery method do? (Odoo Learn — Delivery methods)",
      fr: "À quoi sert la définition d’un poids ou d’un volume maximum pour un mode de livraison ? (Odoo Learn — Modes de livraison)",
    },
    correct: {
      en: "It disables the delivery method if the total weight or volume exceeds the set limit.",
      fr: "Il désactive le mode de livraison si le poids ou le volume total dépasse la limite définie.",
    },
    distractors: [
      { en: "It calculates the shipping cost based on weight and volume.", fr: "Il calcule les frais d'expédition en fonction du poids et du volume." },
      { en: "It applies a discount to the shipping cost for lighter packages.", fr: "Il applique une réduction sur les frais de port pour les colis plus légers." },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery methods): It disables the delivery method if the total weight or volume exceeds the set limit.",
      fr: "Source Odoo Learn (Modes de livraison) : Il désactive le mode de livraison si le poids ou le volume total dépasse la limite définie.",
    },
  }),
  mcq3Q({
    id: "eco-088",
    module: "ecommerce",
    text: {
      en: "What are delivery providers in Odoo used for? (Odoo Learn — Delivery methods)",
      fr: "A quoi servent les prestataires de livraison sur Odoo ? (Odoo Learn — Modes de livraison)",
    },
    correct: {
      en: "They are carriers like DHL or UPS used to calculate shipping costs and manage deliveries.",
      fr: "Ce sont des transporteurs comme DHL ou UPS utilisés pour calculer les frais de port et gérer les livraisons.",
    },
    distractors: [
      { en: "They are used to process customer payments.", fr: "Ils sont utilisés pour traiter les paiements des clients." },
      { en: "They define product categories in your eCommerce shop.", fr: "Ils définissent les catégories de produits dans votre boutique e-commerce." },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery methods): They are carriers like DHL or UPS used to calculate shipping costs and manage deliveries.",
      fr: "Source Odoo Learn (Modes de livraison) : Ce sont des transporteurs comme DHL ou UPS utilisés pour calculer les frais de port et gérer les livraisons.",
    },
  }),
  mcq3Q({
    id: "eco-089",
    module: "ecommerce",
    text: {
      en: "When creating a custom delivery method based on rules, what must you do to make it available at checkout on your website? (Odoo Learn — Delivery methods)",
      fr: "Lorsque vous créez un mode de livraison personnalisé basé sur des règles, que devez-vous faire pour le rendre disponible lors du paiement sur votre site Web ? (Odoo Learn — Modes de livraison)",
    },
    correct: {
      en: "Publish the method and link it to a delivery product.",
      fr: "Publiez la méthode et associez-la à un produit de livraison.",
    },
    distractors: [
      { en: "Only save the method in Odoo.", fr: "Enregistrez uniquement la méthode dans Odoo." },
      { en: "Install an additional delivery provider.", fr: "Installez un fournisseur de livraison supplémentaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery methods): Publish the method and link it to a delivery product.",
      fr: "Source Odoo Learn (Modes de livraison) : Publiez la méthode et associez-la à un produit de livraison.",
    },
  }),
  mcq3Q({
    id: "eco-090",
    module: "ecommerce",
    text: {
      en: "What is the main benefit of choosing the \"Get Rate and Create Shipment\" option? (Odoo Learn — Delivery methods)",
      fr: "Quel est le principal avantage de choisir l'option « Obtenir le tarif et créer un envoi » ? (Odoo Learn — Modes de livraison)",
    },
    correct: {
      en: "It books the shipment automatically in Odoo, saving a manual step.",
      fr: "Il réserve automatiquement l'envoi dans Odoo, évitant ainsi une étape manuelle.",
    },
    distractors: [
      { en: "It allows you to skip checking the shipping price entirely.", fr: "Il vous permet d’éviter complètement de vérifier le prix d’expédition." },
      { en: "It completely cancels the manual validation process.", fr: "Cela annule complètement le processus de validation manuelle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery methods): It books the shipment automatically in Odoo, saving a manual step.",
      fr: "Source Odoo Learn (Modes de livraison) : Il réserve automatiquement l'envoi dans Odoo, en économisant une étape manuelle.",
    },
  }),
  mcq3Q({
    id: "eco-091",
    module: "ecommerce",
    text: {
      en: "What is a payment provider? (Odoo Learn — Payment methods)",
      fr: "What is a payment provider? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "A secure service (like Adyen) that handles transactions and provides access to payment options.",
      fr: "Un service sécurisé (comme Adyen) qui gère les transactions et donne accès aux options de paiement.",
    },
    distractors: [
      { en: "A localized digital wallet that requires manual configuration for every single credit card type used by your store.", fr: "Un portefeuille numérique localisé qui nécessite une configuration manuelle pour chaque type de carte de crédit utilisé par votre boutique." },
      { en: "A shipping company that delivers packages to customers.", fr: "Une compagnie maritime qui livre des colis aux clients." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): A secure service (like Adyen) that handles transactions and provides access to payment options.",
      fr: "Source Odoo Learn (Modes de paiement) : Un service sécurisé (comme Adyen) qui gère les transactions et donne accès aux options de paiement.",
    },
  }),
  mcq3Q({
    id: "eco-092",
    module: "ecommerce",
    text: {
      en: "Which of these options does the \"Capture Amount Manually\" feature for payment providers enable? (Odoo Learn — Payment methods)",
      fr: "Laquelle de ces options la fonctionnalité « Capturer le montant manuellement » pour les prestataires de paiement permet-elle ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "The payment is automatically captured as soon as the customer makes the purchase.",
      fr: "Le paiement est automatiquement capturé dès que le client effectue l'achat.",
    },
    distractors: [
      { en: "The payment is authorized, but you must manually capture the amount later.", fr: "Le paiement est autorisé, mais vous devrez saisir manuellement le montant ultérieurement." },
      { en: "The payment is not authorized, and no further action is needed.", fr: "Le paiement n’est pas autorisé et aucune autre action n’est nécessaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): The payment is automatically captured as soon as the customer makes the purchase.",
      fr: "Source Odoo Learn (Modes de paiement) : Le paiement est automatiquement capturé dès que le client effectue l'achat.",
    },
  }),
  mcq3Q({
    id: "eco-093",
    module: "ecommerce",
    text: {
      en: "What should you do when setting up a new payment provider for the first time in Odoo? (Odoo Learn — Payment methods)",
      fr: "Que devez-vous faire lors de la première création d’un nouveau fournisseur de paiement dans Odoo ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "Enable the provider immediately.",
      fr: "Activez le fournisseur immédiatement.",
    },
    distractors: [
      { en: "Use test mode to process a fake payment and ensure proper setup.", fr: "Utilisez le mode test pour traiter un faux paiement et garantir une configuration correcte." },
      { en: "Publish the provider on your website.", fr: "Publiez le fournisseur sur votre site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): Enable the provider immediately.",
      fr: "Source Odoo Learn (Modes de paiement) : Activez le fournisseur immédiatement.",
    },
  }),
  mcq3Q({
    id: "eco-094",
    module: "ecommerce",
    text: {
      en: "What can you customize in the \"Messages\" tab of a payment provider? (Odoo Learn — Payment methods)",
      fr: "Que peut-on personnaliser dans l'onglet « Messages » d'un prestataire de paiement ? (Odoo Learn — Modes de paiement)",
    },
    correct: {
      en: "The design of the payment interface.",
      fr: "La conception de l'interface de paiement.",
    },
    distractors: [
      { en: "The messages displayed to the customer for different payment statuses.", fr: "Les messages affichés au client pour différents statuts de paiement." },
      { en: "The default currency for transactions.", fr: "La devise par défaut pour les transactions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment methods): The design of the payment interface.",
      fr: "Source Odoo Learn (Modes de paiement) : Le design de l'interface de paiement.",
    },
  }),
  mcq3Q({
    id: "eco-095",
    module: "ecommerce",
    text: {
      en: "Where do you first enable the Click and Collect feature? (Odoo Learn — Click and Collect)",
      fr: "Où activer pour la première fois la fonctionnalité Click and Collect ? (Odoo Learn – Cliquez et collectez)",
    },
    correct: {
      en: "Website → Configuration → eCommerce Settings.",
      fr: "Site Web → Configuration → Paramètres de commerce électronique.",
    },
    distractors: [
      { en: "In the Inventory app dashboard.", fr: "Dans le tableau de bord de l'application Inventaire." },
      { en: "Directly on the product form.", fr: "Directement sur la fiche produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Click and Collect): Website → Configuration → eCommerce Settings.",
      fr: "Source Odoo Learn (Click and Collect) : Site Web → Configuration → Paramètres de commerce électronique.",
    },
  }),
  mcq3Q({
    id: "eco-096",
    module: "ecommerce",
    text: {
      en: "Which delivery method is automatically created upon enabling the Click and Collect feature? (Odoo Learn — Click and Collect)",
      fr: "Quel mode de livraison est automatiquement créé lors de l'activation de la fonctionnalité Click and Collect ? (Odoo Learn – Cliquez et collectez)",
    },
    correct: {
      en: "Pick up in store.",
      fr: "À récupérer en magasin.",
    },
    distractors: [
      { en: "Local Delivery.", fr: "Livraison locale." },
      { en: "Courier Delivery.", fr: "Livraison par courrier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Click and Collect): Pick up in store.",
      fr: "Source Odoo Learn (Click and Collect) : Retrait en magasin.",
    },
  }),
  mcq3Q({
    id: "eco-097",
    module: "ecommerce",
    text: {
      en: "What payment method is automatically enabled and published by default when Click & Collect is enabled? (Odoo Learn — Click and Collect)",
      fr: "Quel moyen de paiement est automatiquement activé et publié par défaut lorsque le Click & Collect est activé ? (Odoo Learn – Cliquez et collectez)",
    },
    correct: {
      en: "Pay on site.",
      fr: "Payez sur place.",
    },
    distractors: [
      { en: "Bank Wire Transfer.", fr: "Virement bancaire." },
      { en: "PayPal.", fr: "PayPal." },
    ],
    explanation: {
      en: "Source Odoo Learn (Click and Collect): Pay on site.",
      fr: "Source Odoo Learn (Click and Collect) : Payez sur place.",
    },
  }),
  mcq3Q({
    id: "eco-098",
    module: "ecommerce",
    text: {
      en: "If you have pickup locations in multiple countries, how can customers find the right one at checkout? (Odoo Learn — Click and Collect)",
      fr: "Si vous disposez de points de retrait dans plusieurs pays, comment les clients peuvent-ils trouver celui qui leur convient au moment du paiement ? (Odoo Learn – Cliquez et collectez)",
    },
    correct: {
      en: "By using the country selectors on the delivery page.",
      fr: "En utilisant les sélecteurs de pays sur la page de livraison.",
    },
    distractors: [
      { en: "By changing the language settings of the website.", fr: "En modifiant les paramètres de langue du site Web." },
      { en: "By contacting customer support before confirming the order.", fr: "En contactant le service client avant de confirmer la commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Click and Collect): By using the country selectors on the delivery page.",
      fr: "Source Odoo Learn (Click and Collect) : En utilisant les sélecteurs de pays sur la page de livraison.",
    },
  }),
  mcq3Q({
    id: "eco-099",
    module: "ecommerce",
    text: {
      en: "What happens when you set the sign-in or sign-up option to \"mandatory\" in the checkout settings? (Odoo Learn — Customer Portal and Account)",
      fr: "Que se passe-t-il lorsque vous définissez l'option de connexion ou d'inscription sur « obligatoire » dans les paramètres de paiement ? (Odoo Learn — Customer Portal and Account)",
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
      en: "Source Odoo Learn (Customer Portal and Account): Customers must create an account or log in to complete their checkout.",
      fr: "Source Odoo Learn (Portail client et compte) : Les clients doivent créer un compte ou se connecter pour finaliser leur commande.",
    },
  }),
  mcq3Q({
    id: "eco-100",
    module: "ecommerce",
    text: {
      en: "How can you grant a customer access to the customer portal? (Odoo Learn — Customer Portal and Account)",
      fr: "Comment accorder à un client l’accès au portail client ? (Odoo Learn — Customer Portal and Account)",
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
      en: "Source Odoo Learn (Customer Portal and Account): Go to the customer’s profile and click on \"Grant access\" in the actions menu.",
      fr: "Source Odoo Learn (Portail et Compte Client) : Accédez au profil du client et cliquez sur « Accorder l'accès » dans le menu des actions.",
    },
  }),
  mcq3Q({
    id: "eco-101",
    module: "ecommerce",
    text: {
      en: "What can a customer access from their customer portal? (Odoo Learn — Customer Portal and Account)",
      fr: "À quoi un client peut-il accéder depuis son portail client ? (Odoo Learn — Customer Portal and Account)",
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
      en: "Source Odoo Learn (Customer Portal and Account): Sales orders, invoices, bills, projects, and other account-related information.",
      fr: "Source Odoo Learn (portail client et compte) : bons de commande, factures, factures, projets et autres informations liées au compte.",
    },
  }),
  mcq3Q({
    id: "eco-102",
    module: "ecommerce",
    text: {
      en: "What is the main purpose of a loyalty program in Odoo eCommerce? (Odoo Learn — Gift cards, loyalty programs and eWallets)",
      fr: "Quel est l’objectif principal d’un programme de fidélité dans Odoo eCommerce ? (Odoo Learn — Cartes cadeaux, programmes de fidélité et portefeuilles électroniques)",
    },
    correct: {
      en: "To reward customers with points they can redeem for discounts, products, or shipping.",
      fr: "Pour récompenser les clients avec des points qu'ils peuvent échanger contre des réductions, des produits ou des frais d'expédition.",
    },
    distractors: [
      { en: "To automatically reduce product prices for all customers.", fr: "Pour réduire automatiquement les prix des produits pour tous les clients." },
      { en: "To manage refunds more easily.", fr: "Pour gérer plus facilement les remboursements." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift cards, loyalty programs and eWallets): To reward customers with points they can redeem for discounts, products, or shipping.",
      fr: "Source Odoo Learn (cartes cadeaux, programmes de fidélité et portefeuilles électroniques) : pour récompenser les clients avec des points qu'ils peuvent échanger contre des réductions, des produits ou des frais d'expédition.",
    },
  }),
  mcq3Q({
    id: "eco-103",
    module: "ecommerce",
    text: {
      en: "What is the key difference between a gift card and an eWallet? (Odoo Learn — Gift cards, loyalty programs and eWallets)",
      fr: "Quelle est la principale différence entre une carte-cadeau et un portefeuille électronique ? (Odoo Learn — Cartes cadeaux, programmes de fidélité et portefeuilles électroniques)",
    },
    correct: {
      en: "A gift card is meant to be given to someone else, while an eWallet is used by the customer to store and spend their own balance.",
      fr: "Une carte-cadeau est destinée à être offerte à quelqu'un d'autre, tandis qu'un portefeuille électronique est utilisé par le client pour stocker et dépenser son propre solde.",
    },
    distractors: [
      { en: "A gift card can only be used online, while an eWallet cannot.", fr: "Une carte-cadeau ne peut être utilisée qu’en ligne, contrairement à un portefeuille électronique." },
      { en: "An eWallet expires automatically, while a gift card never does.", fr: "Un portefeuille électronique expire automatiquement, contrairement à une carte-cadeau." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift cards, loyalty programs and eWallets): A gift card is meant to be given to someone else, while an eWallet is used by the customer to store and spend their own balance.",
      fr: "Source Odoo Learn (Cartes cadeaux, programmes de fidélité et portefeuilles électroniques) : Une carte cadeau est destinée à être offerte à quelqu'un d'autre, tandis qu'un portefeuille électronique est utilisé par le client pour stocker et dépenser son propre solde.",
    },
  }),
  mcq3Q({
    id: "eco-104",
    module: "ecommerce",
    text: {
      en: "What must you do to sell gift cards or eWallets on your website? (Odoo Learn — Gift cards, loyalty programs and eWallets)",
      fr: "Que devez-vous faire pour vendre des cartes cadeaux ou des portefeuilles électroniques sur votre site Web ? (Odoo Learn — Cartes cadeaux, programmes de fidélité et portefeuilles électroniques)",
    },
    correct: {
      en: "Link them to a product and publish that product on your website.",
      fr: "Liez-les à un produit et publiez ce produit sur votre site Web.",
    },
    distractors: [
      { en: "Only generate codes in the backend.", fr: "Générez uniquement des codes dans le backend." },
      { en: "Activate a delivery provider.", fr: "Activez un prestataire de livraison." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift cards, loyalty programs and eWallets): Link them to a product and publish that product on your website.",
      fr: "Source Odoo Learn (Cartes cadeaux, programmes de fidélité et portefeuilles électroniques) : associez-les à un produit et publiez ce produit sur votre site Web.",
    },
  }),
  mcq3Q({
    id: "eco-105",
    module: "ecommerce",
    text: {
      en: "What is required for the comparison price to appear on a product? (Odoo Learn — Gift cards, loyalty programs and eWallets)",
      fr: "Que faut-il pour que le prix de comparaison apparaisse sur un produit ? (Odoo Learn — Cartes cadeaux, programmes de fidélité et portefeuilles électroniques)",
    },
    correct: {
      en: "The “Compare to Price” must be higher than the Sales Price.",
      fr: "Le « Comparer au prix » doit être supérieur au prix de vente.",
    },
    distractors: [
      { en: "The Sales Price must be higher than the \"Compare to Price\".", fr: "Le Prix de Vente doit être supérieur au « Comparer au Prix »." },
      { en: "The product must have a loyalty program applied.", fr: "Le produit doit avoir un programme de fidélité appliqué." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift cards, loyalty programs and eWallets): The “Compare to Price” must be higher than the Sales Price.",
      fr: "Source Odoo Learn (Cartes cadeaux, programmes de fidélité et portefeuilles électroniques) : Le « Comparer au prix » doit être supérieur au Prix de vente.",
    },
  }),
  mcq3Q({
    id: "eco-106",
    module: "ecommerce",
    text: {
      en: "What does the \"Quotation\" stage in Odoo signify? (Odoo Learn — Order Management)",
      fr: "Que signifie l'étape « Devis » dans Odoo ? (Odoo Learn — Order Management)",
    },
    correct: {
      en: "The customer has completed the checkout process but the payment isn’t confirmed.",
      fr: "Le client a terminé le processus de paiement mais le paiement n’est pas confirmé.",
    },
    distractors: [
      { en: "The product has been added to the cart, but the customer hasn’t completed the checkout process.", fr: "Le produit a été ajouté au panier, mais le client n'a pas terminé le processus de paiement." },
      { en: "The payment has been confirmed, and the order is ready for delivery.", fr: "Le paiement a été confirmé et la commande est prête à être livrée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order Management): The customer has completed the checkout process but the payment isn’t confirmed.",
      fr: "Source Odoo Learn (Gestion des commandes) : Le client a terminé le processus de paiement mais le paiement n'est pas confirmé.",
    },
  }),
  mcq3Q({
    id: "eco-107",
    module: "ecommerce",
    text: {
      en: "Where can you view all confirmed orders placed through the website? (Odoo Learn — Order Management)",
      fr: "Où pouvez-vous consulter toutes les commandes confirmées passées via le site Web ? (Odoo Learn — Order Management)",
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
      en: "Source Odoo Learn (Order Management): In the \"Orders\" section under the eCommerce tab.",
      fr: "Source Odoo Learn (Gestion des commandes) : Dans la section « Commandes » sous l'onglet eCommerce.",
    },
  }),
  mcq3Q({
    id: "eco-108",
    module: "ecommerce",
    text: {
      en: "What happens when you activate the \"automatic invoice\" option in Odoo? (Odoo Learn — Order Management)",
      fr: "Que se passe-t-il lorsque vous activez l'option « facture automatique » dans Odoo ? (Odoo Learn — Order Management)",
    },
    correct: {
      en: "An invoice is generated manually by the salesperson.",
      fr: "Une facture est générée manuellement par le vendeur.",
    },
    distractors: [
      { en: "The system sends a reminder email for unpaid invoices.", fr: "Le système envoie un e-mail de rappel pour les factures impayées." },
      { en: "An invoice is automatically created and sent to the customer when payment is confirmed.", fr: "Une facture est automatiquement créée et envoyée au client lorsque le paiement est confirmé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order Management): An invoice is generated manually by the salesperson.",
      fr: "Source Odoo Learn (Gestion des commandes) : Une facture est générée manuellement par le vendeur.",
    },
  }),
  mcq3Q({
    id: "eco-109",
    module: "ecommerce",
    text: {
      en: "What happens directly after you set the quantity and validate a product return in Odoo? (Odoo Learn — Order Management)",
      fr: "Que se passe-t-il directement après avoir défini la quantité et validé un retour produit dans Odoo ? (Odoo Learn — Gestion des commandes)",
    },
    correct: {
      en: "The system automatically issues a cash refund.",
      fr: "Le système émet automatiquement un remboursement en espèces.",
    },
    distractors: [
      { en: "The product is automatically marked as damaged.", fr: "Le produit est automatiquement marqué comme endommagé." },
      { en: "The returned product is put back into your stock.", fr: "Le produit retourné est remis dans votre stock." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order Management): The system automatically issues a cash refund.",
      fr: "Source Odoo Learn (Gestion des commandes) : Le système émet automatiquement un remboursement en espèces.",
    },
  }),
  mcq3Q({
    id: "eco-110",
    module: "ecommerce",
    text: {
      en: "What is the main difference between optional and accessory products in Odoo? (Odoo Learn — Selling Strategies)",
      fr: "Quelle est la principale différence entre les produits optionnels et accessoires dans Odoo ? (Odoo Learn — Selling Strategies)",
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
      en: "Source Odoo Learn (Selling Strategies): Optional products are suggested when the customer clicks “add to cart,” while accessory products are suggested when the customer reviews their cart before payment.",
      fr: "Source Odoo Learn (Stratégies de vente) : les produits optionnels sont suggérés lorsque le client clique sur « Ajouter au panier », tandis que les produits accessoires sont suggérés lorsque le client examine son panier avant le paiement.",
    },
  }),
  mcq3Q({
    id: "eco-111",
    module: "ecommerce",
    text: {
      en: "How does upselling work in Odoo? (Odoo Learn — Selling Strategies)",
      fr: "Comment fonctionne la vente incitative dans Odoo ? (Odoo Learn — Selling Strategies)",
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
      en: "Source Odoo Learn (Selling Strategies): It involves offering alternative upgraded versions of the product.",
      fr: "Source Odoo Learn (Stratégies de vente) : Il s'agit de proposer des versions alternatives améliorées du produit.",
    },
  }),
  mcq3Q({
    id: "eco-112",
    module: "ecommerce",
    text: {
      en: "Where can you configure cross-selling and upselling options for a product in Odoo? (Odoo Learn — Selling Strategies)",
      fr: "Où pouvez-vous configurer les options de vente croisée et de vente incitative pour un produit dans Odoo ? (Odoo Learn — Selling Strategies)",
    },
    correct: {
      en: "In the product's \"Sales\" tab within the eCommerce application.",
      fr: "Dans l'onglet « Ventes » du produit au sein de l'application eCommerce.",
    },
    distractors: [
      { en: "In the product's \"Inventory\" tab within the Inventory application.", fr: "Dans l'onglet « Inventaire » du produit au sein de l'application Inventaire." },
      { en: "In the Website's settings under the eCommerce section.", fr: "Dans les paramètres du site Web sous la section eCommerce." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling Strategies): In the product's \"Sales\" tab within the eCommerce application.",
      fr: "Source Odoo Learn (Stratégies de vente) : Dans l'onglet « Ventes » du produit au sein de l'application eCommerce.",
    },
  }),
  mcq3Q({
    id: "eco-113",
    module: "ecommerce",
    text: {
      en: "What happens when a customer selects an optional product? (Odoo Learn — Selling Strategies)",
      fr: "Que se passe-t-il lorsqu'un client sélectionne un produit optionnel ? (Odoo Learn — Selling Strategies)",
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
      en: "Source Odoo Learn (Selling Strategies): The optional product is added to the cart alongside the initial product.",
      fr: "Source Odoo Learn (Stratégies de vente) : Le produit optionnel est ajouté au panier à côté du produit initial.",
    },
  }),
];
