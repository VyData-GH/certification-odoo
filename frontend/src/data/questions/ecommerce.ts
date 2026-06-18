import { complexQ } from "./helpers";

export const ecommerceQuestions = [
  complexQ({
    id: "eco-001",
    module: "ecommerce",
    text: {
      en: "How do you make a product visible on the Odoo 19 online shop?",
      fr: "Comment rendre un produit visible sur la boutique en ligne Odoo 19 ?",
    },
    correct: {
      en: "Enable Can be Sold and toggle Published in the eCommerce tab Shop section on the product form",
      fr: "Activer Peut être vendu et basculer Publié dans l'onglet eCommerce section Boutique de la fiche produit",
    },
    distractors: [
      {
        en: "Mark Can be Purchased only on the product form without publishing the item on the website shop",
        fr: "Cocher Peut être acheté uniquement sur la fiche produit sans publier l'article sur la boutique",
      },
      {
        en: "Add the product to a delivery method Availability tab rule without enabling any Sales flags",
        fr: "Ajouter le produit à une règle de l'onglet Disponibilité d'une méthode de livraison sans drapeaux Ventes",
      },
      {
        en: "Set Inventory tracking to By Lots and assign a serial number so the item appears in /shop search",
        fr: "Définir le suivi Inventaire par lots et assigner un numé de série pour apparaître dans /shop",
      },
    ],
    explanation: {
      en: "Products must be salable and Published (eCommerce tab or frontend toggle) to appear in the online catalog.",
      fr: "Les produits doivent être vendables et Publiés (onglet eCommerce ou bascule frontend) pour apparaître au catalogue.",
    },
  }),
  complexQ({
    id: "eco-002",
    module: "ecommerce",
    text: {
      en: "Where do you configure online payment methods offered at eCommerce checkout?",
      fr: "Où configure-t-on les moyens de paiement en ligne proposés au checkout eCommerce ?",
    },
    correct: {
      en: "Website → Configuration → Payment Providers: activate and configure Stripe, wire transfer, PayPal, etc.",
      fr: "Website → Configuration → Fournisseurs de paiement : activer et configurer Stripe, virement, PayPal, etc.",
    },
    distractors: [
      {
        en: "Accounting → Customers → Invoices by posting manual payments after each web order is confirmed",
        fr: "Comptabilité → Clients → Factures en enregistrant des paiements manuels après chaque commande web",
      },
      {
        en: "Point of Sale → Configuration → Payment Methods for in-store terminals used as the web checkout gateway",
        fr: "Point de Vente → Configuration → Modes de paiement des terminaux magasin utilisés comme passerelle web",
      },
      {
        en: "Sales → Configuration → Settings → Payment Terms on customer contacts to replace checkout selection",
        fr: "Ventes → Configuration → Conditions de paiement sur les contacts pour remplacer le choix au checkout",
      },
    ],
    explanation: {
      en: "Payment providers configured under Website settings determine which methods appear at the Payment checkout step.",
      fr: "Les fournisseurs de paiement configurés sous Website déterminent les méthodes affichées à l'étape Paiement.",
    },
  }),
  complexQ({
    id: "eco-003",
    module: "ecommerce",
    text: {
      en: "How do you configure shipping fees applied during eCommerce checkout in Odoo 19?",
      fr: "Comment configurer les frais de livraison appliqués au checkout eCommerce dans Odoo 19 ?",
    },
    correct: {
      en: "Create delivery methods at Website → Configuration → Delivery Methods with fixed price, rules, or carriers",
      fr: "Créer des méthodes de livraison dans Website → Configuration → Méthodes de livraison (prix fixe, règles, transporteurs)",
    },
    distractors: [
      {
        en: "Add shipping as a manual optional product line on each sales order after confirmation in the Sales app",
        fr: "Ajouter la livraison comme ligne produit optionnelle manuelle sur chaque commande après confirmation",
      },
      {
        en: "Define freight costs exclusively in Accounting → Configuration → Taxes without delivery method records",
        fr: "Définir les frais de transport exclusivement dans Comptabilité → Configuration → Taxes sans méthodes",
      },
      {
        en: "Set a default shipping amount in the product form Sales tab Unit Price for every stocked item sold online",
        fr: "Définir un montant de livraison par défaut dans le prix unitaire Ventes de chaque produit stocké",
      },
    ],
    explanation: {
      en: "Delivery methods define rates and rules; customers select an option at checkout Address or Payment step.",
      fr: "Les méthodes de livraison définissent tarifs et règles ; le client choisit une option à l'étape Adresse ou Paiement.",
    },
  }),
  complexQ({
    id: "eco-004",
    module: "ecommerce",
    text: {
      en: "What backend document is created when a customer completes eCommerce checkout?",
      fr: "Quel document backend est créé lorsqu'un client finalise le checkout eCommerce ?",
    },
    correct: {
      en: "A sales order (quotation/order) in the Sales app, confirmed according to payment and workflow settings",
      fr: "Une commande de vente (devis/commande) dans Ventes, confirmée selon les réglages de paiement et workflow",
    },
    distractors: [
      {
        en: "A purchase RFQ automatically sent to the vendor configured as supplier on each cart line product",
        fr: "Une demande de prix achat envoyée automatiquement au fournisseur configuré sur chaque ligne du panier",
      },
      {
        en: "A manufacturing order for every cart line regardless of product type, BOM, or stock configuration",
        fr: "Un ordre de fabrication pour chaque ligne du panier quel que soit le type, la nomenclature ou le stock",
      },
      {
        en: "Only a website visitor session log stored until a sales user manually imports the cart from Reporting",
        fr: "Uniquement un journal de session visiteur jusqu'à import manuel du panier par un commercial depuis Rapports",
      },
    ],
    explanation: {
      en: "Checkout creates a sale.order; confirmation timing depends on payment provider and eCommerce automation settings.",
      fr: "Le checkout crée un sale.order ; le moment de confirmation dépend du paiement et des automatisations eCommerce.",
    },
  }),
  complexQ({
    id: "eco-005",
    module: "ecommerce",
    text: {
      en: "How do you organize products in the online shop navigation catalog?",
      fr: "Comment organiser les produits dans la navigation du catalogue de la boutique en ligne ?",
    },
    correct: {
      en: "Create eCommerce categories via Website → eCommerce → eCommerce Categories or on the product form",
      fr: "Créer des catégories eCommerce via Website → eCommerce → Catégories eCommerce ou sur la fiche produit",
    },
    distractors: [
      {
        en: "Use the Internal Category on Inventory → Products General Information tab as the public shop menu structure",
        fr: "Utiliser la Catégorie interne de l'onglet Informations générales Inventaire comme menu public boutique",
      },
      {
        en: "Configure Point of Sale → Configuration → PoS Categories and mirror them automatically on /shop pages",
        fr: "Configurer Point de Vente → Catégories PoS et les miroir automatiquement sur les pages /shop",
      },
      {
        en: "Assign accounting analytic accounts per product to build the storefront category tree in Reporting",
        fr: "Assigner des comptes analytiques par produit pour construire l'arborescence catégories boutique en Rapports",
      },
    ],
    explanation: {
      en: "eCommerce categories (/shop/category/...) structure the public catalog separately from internal product categories.",
      fr: "Les catégories eCommerce structurent le catalogue public séparément des catégories produits internes.",
    },
  }),
  complexQ({
    id: "eco-006",
    module: "ecommerce",
    text: {
      en: "How do you offer selectable product variants (size, color) on the Odoo 19 online shop?",
      fr: "Comment proposer des variantes sélectionnables (taille, couleur) sur la boutique Odoo 19 ?",
    },
    correct: {
      en: "Configure Attributes & Variants on the product template so visitors pick combinations on the product page",
      fr: "Configurer Attributs & Variantes sur le modèle produit pour que les visiteurs choisissent sur la fiche",
    },
    distractors: [
      {
        en: "Create unrelated product templates per size and link them only through optional products on the Sales tab",
        fr: "Créer des fiches produits distinctes par taille et les lier uniquement via produits optionnels Ventes",
      },
      {
        en: "Use product tags displayed as shop filters without generating actual variant SKUs or stock records",
        fr: "Utiliser des étiquettes produits comme filtres boutique sans générer de SKU variantes ou stock",
      },
      {
        en: "Define kit BOM components in Manufacturing so each component appears as a pseudo-variant at checkout",
        fr: "Définir des composants de nomenclature kit en Fabrication apparaissant comme pseudo-variantes au checkout",
      },
    ],
    explanation: {
      en: "Product attributes generate variants with their own SKU, price, and stock; selectable on the eCommerce product page.",
      fr: "Les attributs génèrent des variantes avec SKU, prix et stock propres, sélectionnables sur la fiche eCommerce.",
    },
  }),
  complexQ({
    id: "eco-007",
    module: "ecommerce",
    text: {
      en: "What is the wishlist feature in Odoo 19 eCommerce?",
      fr: "Qu'est-ce que la fonctionnalité liste de souhaits (wishlist) en eCommerce Odoo 19 ?",
    },
    correct: {
      en: "A personal list where signed-in visitors save products via Add to Wishlist or Save for Later on the cart",
      fr: "Une liste personnelle où les visiteurs connectés enregistrent des produits via Ajouter à la wishlist ou Garder pour plus tard",
    },
    distractors: [
      {
        en: "A backend Sales quotation template pre-filled with recommended accessories for internal sales reps",
        fr: "Un modèle de devis Ventes backend prérempli d'accessoires recommandés pour les commerciaux internes",
      },
      {
        en: "An inventory reordering report listing products below minimum stock on hand in the warehouse dashboard",
        fr: "Un rapport de réapprovisionnement listant les produits sous le stock minimum dans le tableau de bord entrepôt",
      },
      {
        en: "A marketing mailing list segment auto-populated when anonymous visitors view three or more products",
        fr: "Un segment de liste de diffusion auto-rempli quand des visiteurs anonymes consultent trois produits ou plus",
      },
    ],
    explanation: {
      en: "Wishlists let logged-in customers save products; enable Add to Wishlist on the Order summary checkout step.",
      fr: "Les wishlists permettent aux clients connectés de sauvegarder des produits ; activer sur l'étape Récapitulatif.",
    },
  }),
  complexQ({
    id: "eco-008",
    module: "ecommerce",
    text: {
      en: "How do customers apply a promotional or discount code during online checkout?",
      fr: "Comment les clients appliquent-ils un code promotionnel ou de réduction lors du checkout en ligne ?",
    },
    correct: {
      en: "Configure Discount & Loyalty programs in Sales/Marketing, enable Promo Code on Order summary in the editor",
      fr: "Configurer programmes Remises & Fidélité dans Ventes/Marketing, activer Code promo sur Récapitulatif dans l'éditeur",
    },
    distractors: [
      {
        en: "Manually apply a percentage discount on each confirmed web order from the pricelist override on the SO form",
        fr: "Appliquer manuellement une remise en % sur chaque commande web via la liste de prix sur le bon de commande",
      },
      {
        en: "Create negative-priced service products named COUPON and expose them via custom URL parameters on /shop",
        fr: "Créer des produits service à prix négatif nommés COUPON exposés via paramètres URL personnalisés sur /shop",
      },
      {
        en: "Issue accounting credit notes in advance and email codes that reference posted invoice numbers at checkout",
        fr: "Émettre des avoirs comptables à l'avance et envoyer des codes référant aux numéros de factures au checkout",
      },
    ],
    explanation: {
      en: "Loyalty/discount programs supply promo codes; enable the Promo Code option on the checkout Order summary step.",
      fr: "Les programmes fidélité/remises fournissent les codes promo ; activer Code promo à l'étape Récapitulatif du checkout.",
    },
  }),
  complexQ({
    id: "eco-009",
    module: "ecommerce",
    text: {
      en: "What is the impact of enabling inventory tracking on an eCommerce product?",
      fr: "Quel est l'impact de l'activation du suivi d'inventaire sur un produit eCommerce ?",
    },
    correct: {
      en: "Available quantity can be displayed on the shop page and overselling can be blocked when out of stock",
      fr: "La quantité disponible peut s'afficher sur la boutique et les surventes peuvent être bloquées si rupture",
    },
    distractors: [
      {
        en: "The product is hidden from search engines but remains purchasable regardless of warehouse quantity on hand",
        fr: "Le produit est masqué des moteurs de recherche mais reste achetable quelle que soit la quantité en stock",
      },
      {
        en: "Inventory tracking converts the product into a monthly subscription billed through recurring sales orders",
        fr: "Le suivi inventaire convertit le produit en abonnement mensuel facturé via commandes récurrentes",
      },
      {
        en: "Track Inventory automatically clears the Published flag whenever warehouse quantity reaches zero",
        fr: "Suivre l'inventaire efface automatiquement le drapeau Publié dès que la quantité entrepôt atteint zéro",
      },
    ],
    explanation: {
      en: "With stock tracking, Odoo can show availability and prevent selling more than on-hand quantity on the shop.",
      fr: "Avec suivi de stock, Odoo peut afficher la disponibilité et empêcher de vendre au-delà du stock disponible.",
    },
  }),
  complexQ({
    id: "eco-010",
    module: "ecommerce",
    text: {
      en: "How does a visitor create or use a customer portal account on the online shop?",
      fr: "Comment un visiteur crée ou utilise un compte portail client sur la boutique en ligne ?",
    },
    correct: {
      en: "Sign up or sign in via the website header or checkout Address step to access orders and the portal",
      fr: "S'inscrire ou se connecter via l'en-tête du site ou l'étape Adresse du checkout pour accéder au portail",
    },
    distractors: [
      {
        en: "Accounts are created automatically by Accounting when the first customer invoice is posted for the email",
        fr: "Les comptes sont créés automatiquement par Comptabilité à la première facture client pour l'e-mail",
      },
      {
        en: "Sales reps must manually create portal users from CRM → Leads before customers may browse the catalog",
        fr: "Les commerciaux doivent créer manuellement des utilisateurs portail depuis CRM → Pistes avant navigation",
      },
      {
        en: "Guest sessions upgrade to full accounts only after three completed orders via automated server action",
        fr: "Les sessions invitées deviennent des comptes complets seulement après trois commandes via action serveur",
      },
    ],
    explanation: {
      en: "The eCommerce portal lets visitors register, sign in, track orders, and reuse addresses at checkout.",
      fr: "Le portail eCommerce permet de s'inscrire, se connecter, suivre les commandes et réutiliser les adresses.",
    },
  }),
  complexQ({
    id: "eco-011",
    module: "ecommerce",
    text: {
      en: "How do you require customers to accept terms and conditions before paying online?",
      fr: "Comment exiger l'acceptation des conditions générales avant le paiement en ligne ?",
    },
    correct: {
      en: "Open the website editor on the Payment checkout step and enable Accept Terms in the Style tab",
      fr: "Ouvrir l'éditeur sur l'étape Paiement du checkout et activer Accepter les conditions dans l'onglet Style",
    },
    distractors: [
      {
        en: "Paste terms text into each product eCommerce description field on the Inventory product form",
        fr: "Coller le texte des CGV dans la description eCommerce de chaque fiche produit Inventaire",
      },
      {
        en: "Enable mandatory acceptance from Accounting → Configuration → Payment Terms templates on customer invoices",
        fr: "Activer l'acceptation obligatoire depuis Comptabilité → Conditions de paiement sur les factures clients",
      },
      {
        en: "Require customers to sign a PDF sales quotation uploaded in Documents before the Pay now button appears",
        fr: "Exiger la signature d'un devis PDF dans Documents avant l'apparition du bouton Payer maintenant",
      },
    ],
    explanation: {
      en: "The Accept Terms toggle on the Payment step adds a mandatory checkbox; legal pages are configured in website settings.",
      fr: "L'option Accepter les conditions à l'étape Paiement ajoute une case obligatoire ; les pages légales se configurent dans Website.",
    },
  }),
  complexQ({
    id: "eco-012",
    module: "ecommerce",
    text: {
      en: "How do you display accessory or recommended products on an eCommerce product page?",
      fr: "Comment afficher des produits accessoires ou recommandés sur une fiche produit eCommerce ?",
    },
    correct: {
      en: "Set optional/accessory products on the Sales tab and enable Suggested Accessories on Order summary in the editor",
      fr: "Définir produits optionnels/accessoires sur l'onglet Ventes et activer Accessoires suggérés sur Récapitulatif",
    },
    distractors: [
      {
        en: "Hardcode product links in custom HTML blocks on the shop page without linking records on the product form",
        fr: "Coder en dur des liens produits dans des blocs HTML sans lier d'enregistrements sur la fiche produit",
      },
      {
        en: "Use a Dynamic Content snippet filtered by tags only, without configuring accessory products on the template",
        fr: "Utiliser un snippet Contenu dynamique filtré par étiquettes sans configurer d'accessoires sur le modèle",
      },
      {
        en: "Configure Point of Sale cross-selling categories to drive eCommerce recommendations at the Payment step",
        fr: "Configurer les catégories cross-selling PoS pour les recommandations eCommerce à l'étape Paiement",
      },
    ],
    explanation: {
      en: "Accessory/optional products on the product form feed product page blocks; Suggested Accessories appear at checkout too.",
      fr: "Les produits accessoires/optionnels alimentent la fiche produit ; Accessoires suggérés apparaissent aussi au checkout.",
    },
  }),
  complexQ({
    id: "eco-013",
    module: "ecommerce",
    text: {
      en: "Which documents are typically generated after a successful online order and payment?",
      fr: "Quels documents sont généralement générés après une commande et un paiement en ligne réussis ?",
    },
    correct: {
      en: "A confirmed sales order; customer invoice if Automatic Invoice is enabled in eCommerce settings",
      fr: "Une commande de vente confirmée ; facture client si Facturation automatique est activée dans eCommerce",
    },
    distractors: [
      {
        en: "A cancelled delivery order replaced by a vendor purchase order for every digital product in the cart",
        fr: "Un bon de livraison annulé remplacé par un bon d'achat fournisseur pour chaque produit numérique",
      },
      {
        en: "A payroll payslip draft for the customer's linked employee contact record upon payment confirmation",
        fr: "Un brouillon de fiche de paie pour le contact employé lié au client à la confirmation du paiement",
      },
      {
        en: "Only a payment transaction log with no sales order until a sales user manually validates the web cart",
        fr: "Uniquement un journal de transaction sans commande jusqu'à validation manuelle du panier par un commercial",
      },
    ],
    explanation: {
      en: "Checkout confirms the sale.order; enable Automatic Invoice in Website eCommerce settings to email invoices.",
      fr: "Le checkout confirme le sale.order ; activer Facturation automatique dans les paramètres eCommerce pour envoyer les factures.",
    },
  }),
  complexQ({
    id: "eco-014",
    module: "ecommerce",
    text: {
      en: "How do you manage multiple pricelists on the Odoo 19 eCommerce shop?",
      fr: "Comment gérer plusieurs listes de prix sur la boutique eCommerce Odoo 19 ?",
    },
    correct: {
      en: "Enable Pricelists in Website → Configuration → Settings, assign per website/customer, mark Selectable if needed",
      fr: "Activer Listes de prix dans Website → Configuration → Paramètres, assigner par site/client, cocher Sélectionnable si besoin",
    },
    distractors: [
      {
        en: "Duplicate each product template with a different Sales price and publish only one variant per currency region",
        fr: "Dupliquer chaque modèle produit avec un prix Ventes différent et publier une variante par région/devise",
      },
      {
        en: "Configure fiscal positions exclusively to swap tax rates on the shop without changing base product prices",
        fr: "Configurer uniquement des positions fiscales pour changer les taxes boutique sans modifier les prix de base",
      },
      {
        en: "Set branch-specific prices using warehouse location cost fields displayed as public prices on /shop",
        fr: "Définir des prix par agence via les coûts d'emplacement entrepôt affichés comme prix publics sur /shop",
      },
    ],
    explanation: {
      en: "Pricelists support multiple currencies, customer-specific pricing, and selectable catalogs via the shop pricelist selector.",
      fr: "Les listes de prix gèrent devises, tarifs client et catalogues sélectionnables via le sélecteur de la boutique.",
    },
  }),
  complexQ({
    id: "eco-015",
    module: "ecommerce",
    text: {
      en: "Which modules form the foundation of Odoo 19 eCommerce?",
      fr: "Quels modules constituent la base de l'eCommerce Odoo 19 ?",
    },
    correct: {
      en: "Website and Website Sale (eCommerce); Inventory is commonly added for stock-managed products",
      fr: "Website et Website Sale (eCommerce) ; Inventaire est souvent ajouté pour les produits gérés en stock",
    },
    distractors: [
      {
        en: "Accounting and Payroll must be installed before any storefront module can create product catalog records",
        fr: "Comptabilité et Paie doivent être installés avant qu'un module boutique puisse créer des fiches produits",
      },
      {
        en: "Point of Sale is mandatory to create product records and enable the /shop catalog on the public website",
        fr: "Point de Vente est obligatoire pour créer des produits et activer le catalogue /shop sur le site public",
      },
      {
        en: "Discuss alone provides cart, checkout, and payment provider integration on the company homepage",
        fr: "Discuss seul fournit panier, checkout et intégration des fournisseurs de paiement sur la page d'accueil",
      },
    ],
    explanation: {
      en: "eCommerce builds on Website for the storefront and Website Sale for cart, checkout, and product pages.",
      fr: "eCommerce s'appuie sur Website pour la vitrine et Website Sale pour panier, checkout et fiches produits.",
    },
  }),
  complexQ({
    id: "eco-016",
    module: "ecommerce",
    text: {
      en: "How can unsigned visitors complete a purchase on the Odoo 19 online shop?",
      fr: "Comment des visiteurs non connectés peuvent-ils finaliser un achat sur la boutique Odoo 19 ?",
    },
    correct: {
      en: "Enter name, email, and delivery details on the checkout Address step without creating a permanent account",
      fr: "Saisir nom, e-mail et adresse de livraison à l'étape Adresse du checkout sans créer de compte permanent",
    },
    distractors: [
      {
        en: "They must sign in via the portal before adding any product to the cart from the /shop catalog pages",
        fr: "Ils doivent se connecter au portail avant d'ajouter un produit au panier depuis les pages /shop",
      },
      {
        en: "They complete checkout exclusively through the Point of Sale backend order interface used by cashiers",
        fr: "Ils finalisent le checkout exclusivement via l'interface backend Point de Vente utilisée par les caissiers",
      },
      {
        en: "They request a CRM quotation and receive a backend-only payment link by email before any cart is stored",
        fr: "Ils demandent un devis CRM et reçoivent un lien de paiement backend par e-mail avant stockage du panier",
      },
    ],
    explanation: {
      en: "Guest checkout is standard: unsigned customers provide contact details at the Address step to complete payment.",
      fr: "Le checkout invité est standard : les visiteurs fournissent leurs coordonnées à l'étape Adresse pour payer.",
    },
  }),
  complexQ({
    id: "eco-017",
    module: "ecommerce",
    text: {
      en: "How can customers compare products on the Odoo 19 online shop?",
      fr: "Comment les clients peuvent-ils comparer des produits sur la boutique Odoo 19 ?",
    },
    correct: {
      en: "Add products to the comparison list from the shop catalog using the product comparison feature",
      fr: "Ajouter des produits à la liste de comparaison depuis le catalogue boutique via la fonction de comparaison",
    },
    distractors: [
      {
        en: "Open each product in separate browser tabs and rely on the backend variant matrix on the product form",
        fr: "Ouvrir chaque produit dans des onglets séparés et utiliser la matrice variantes backend sur la fiche",
      },
      {
        en: "Use the eLearning course slide comparison widget embedded on product pages from the Website editor",
        fr: "Utiliser le widget de comparaison de diapositives eLearning intégré sur les fiches depuis l'éditeur Website",
      },
      {
        en: "Filter products by eCommerce category on /shop and read attribute values in the list view export only",
        fr: "Filtrer par catégorie eCommerce sur /shop et lire les attributs uniquement via export de la vue liste",
      },
    ],
    explanation: {
      en: "The eCommerce shop includes a comparison list accessible from product listing and detail pages.",
      fr: "La boutique eCommerce inclut une liste de comparaison accessible depuis les listes et fiches produits.",
    },
  }),
  complexQ({
    id: "eco-018",
    module: "ecommerce",
    text: {
      en: "How do you configure Click & Collect (buy online, pick up in store) in Odoo 19 eCommerce?",
      fr: "Comment configurer le Click & Collect (acheter en ligne, retirer en magasin) en eCommerce Odoo 19 ?",
    },
    correct: {
      en: "Enable Click & Collect in Website → Configuration → Settings, configure a Pick up in store delivery method",
      fr: "Activer Click & Collect dans Website → Configuration → Paramètres, configurer une méthode Retrait en magasin",
    },
    distractors: [
      {
        en: "Create a separate unpublished website per store location and restrict products by Point of Sale category",
        fr: "Créer un site non publié par magasin et restreindre les produits par catégorie Point de Vente",
      },
      {
        en: "Enable in-store replenishment routes in Inventory and map each customer to a warehouse on the contact form",
        fr: "Activer les routes de réapprovisionnement magasin en Inventaire et mapper chaque client à un entrepôt",
      },
      {
        en: "Configure Buy now buttons on product pages to redirect visitors to Google Maps without delivery methods",
        fr: "Configurer des boutons Acheter maintenant redirigeant vers Google Maps sans méthodes de livraison",
      },
    ],
    explanation: {
      en: "Click & Collect adds a pickup delivery method linked to warehouse/store locations selectable at checkout.",
      fr: "Click & Collect ajoute une méthode de retrait liée aux entrepôts/magasins sélectionnables au checkout.",
    },
  }),
  complexQ({
    id: "eco-019",
    module: "ecommerce",
    text: {
      en: "How do you sell downloadable or digital products on Odoo 19 eCommerce?",
      fr: "Comment vendre des produits téléchargeables ou numériques sur l'eCommerce Odoo 19 ?",
    },
    correct: {
      en: "Use service-type products or attach documents/files delivered after order confirmation on the product form",
      fr: "Utiliser des produits de type service ou joindre des documents/fichiers livrés après confirmation de commande",
    },
    distractors: [
      {
        en: "Create storable products with zero weight and disable all delivery methods so nothing ships physically",
        fr: "Créer des produits stockables sans poids et désactiver toutes les méthodes de livraison physiques",
      },
      {
        en: "Upload downloadable files exclusively to the product image gallery for public access before purchase",
        fr: "Téléverser les fichiers uniquement dans la galerie d'images produit en accès public avant achat",
      },
      {
        en: "Configure MRP kit BOMs so each digital file is a phantom component consumed on delivery validation",
        fr: "Configurer des nomenclatures kit MRP où chaque fichier numérique est un composant fantôme à la livraison",
      },
    ],
    explanation: {
      en: "Digital goods typically use service products or attached documents sent after the sales order is confirmed.",
      fr: "Les produits numériques utilisent généralement des services ou documents joints envoyés après confirmation.",
    },
  }),
  complexQ({
    id: "eco-020",
    module: "ecommerce",
    text: {
      en: "What happens to abandoned eCommerce carts in Odoo 19?",
      fr: "Que devient un panier eCommerce abandonné dans Odoo 19 ?",
    },
    correct: {
      en: "Quotations are tracked; enable Follow up abandoned carts in Settings to send reminder emails for new carts",
      fr: "Les devis sont suivis ; activer Relancer les paniers abandonnés dans Paramètres pour envoyer des rappels",
    },
    distractors: [
      {
        en: "Abandoned carts are purged nightly by a scheduled action with no reporting available in the eCommerce app",
        fr: "Les paniers abandonnés sont purgés chaque nuit par une action planifiée sans rapport dans eCommerce",
      },
      {
        en: "Recovery requires manually exporting contacts weekly from Email Marketing broadcast lists into Sales orders",
        fr: "La relance exige d'exporter manuellement les contacts chaque semaine depuis Email Marketing vers Ventes",
      },
      {
        en: "Checkout data is stored only in browser cookies and never synced to backend quotations until payment succeeds",
        fr: "Les données checkout restent dans les cookies navigateur sans synchro backend tant que le paiement n'est pas fait",
      },
    ],
    explanation: {
      en: "Odoo stores unfinished orders as quotations; Follow up abandoned carts sends emails for carts created after enabling.",
      fr: "Odoo stocke les commandes inachevées en devis ; Relancer les paniers abandonnés envoie des e-mails pour les nouveaux paniers.",
    },
  }),
  complexQ({
    id: "eco-021",
    module: "ecommerce",
    text: {
      en: "How do you hide a product from the online shop without deleting it?",
      fr: "Comment masquer un produit de la boutique en ligne sans le supprimer ?",
    },
    correct: {
      en: "Set the product as Unpublished on the product page or via the Website smart button",
      fr: "Marquer le produit comme Non publié sur la fiche ou via le bouton intelligent Site web",
    },
    distractors: [
      {
        en: "Move the product to an Archived category on the shop page",
        fr: "Déplacer le produit vers une catégorie Archivée sur la page boutique",
      },
      {
        en: "Set sales price to zero so the product is hidden automatically",
        fr: "Mettre le prix de vente à zéro pour masquer automatiquement le produit",
      },
      {
        en: "Disable the entire website until the catalog is ready",
        fr: "Désactiver tout le site web jusqu'à ce que le catalogue soit prêt",
      },
    ],
    explanation: {
      en: "Unpublished products remain in the backend but are not visible on /shop.",
      fr: "Les produits non publiés restent dans le backend mais ne sont pas visibles sur /shop.",
    },
  }),
  complexQ({
    id: "eco-022",
    module: "ecommerce",
    text: {
      en: "How do you assign an eCommerce category to a product?",
      fr: "Comment assigner une catégorie eCommerce à un produit ?",
    },
    correct: {
      en: "Set the eCommerce category on the product form (Sales or Website tab depending on version)",
      fr: "Définir la catégorie eCommerce sur la fiche produit (onglet Ventes ou Site web)",
    },
    distractors: [
      {
        en: "Drag the product card onto the category in the website builder customize tab only",
        fr: "Glisser la fiche produit sur la catégorie uniquement dans l'onglet Personnaliser du builder",
      },
      {
        en: "Assign categories only by editing the shop page HTML directly",
        fr: "Assigner les catégories uniquement en éditant le HTML de la page boutique",
      },
      {
        en: "Categories are inherited from the inventory product category automatically",
        fr: "Les catégories sont héritées automatiquement de la catégorie produit inventaire",
      },
    ],
    explanation: {
      en: "Public shop categories on the product control where the item appears in the /shop catalog.",
      fr: "Les catégories publiques sur le produit contrôlent où l'article apparaît dans le catalogue /shop.",
    },
  }),
  complexQ({
    id: "eco-023",
    module: "ecommerce",
    text: {
      en: "How do you display a promotional ribbon such as Sale on a product card?",
      fr: "Comment afficher un ruban promotionnel (ex. Promo) sur une fiche produit boutique ?",
    },
    correct: {
      en: "Use product ribbons configured in eCommerce and assign them on the product",
      fr: "Utiliser les rubans produit configurés en eCommerce et les assigner sur le produit",
    },
    distractors: [
      {
        en: "Enlarge the product card to 4×4 blocks in the website editor only",
        fr: "Agrandir la carte produit en blocs 4×4 uniquement dans l'éditeur website",
      },
      {
        en: "Add the word Sale to the product name on the General Information tab",
        fr: "Ajouter le mot Promo au nom du produit sur l'onglet Informations générales",
      },
      {
        en: "Enable Sale mode globally in Inventory settings for all discounted items",
        fr: "Activer le mode Promo globalement dans Inventaire pour tous les articles remisés",
      },
    ],
    explanation: {
      en: "Ribbons are reusable badges (Sale, New, etc.) shown on product cards in the shop.",
      fr: "Les rubans sont des badges réutilisables (Promo, Nouveau, etc.) affichés sur les cartes produit.",
    },
  }),
  complexQ({
    id: "eco-024",
    module: "ecommerce",
    text: {
      en: "When are optional products suggested versus accessory products on eCommerce?",
      fr: "Quand les produits optionnels sont-ils suggérés par rapport aux produits accessoires en eCommerce ?",
    },
    correct: {
      en: "Optional products are suggested when the customer clicks Add to cart; accessories when reviewing the cart before payment",
      fr: "Les produits optionnels sont suggérés au clic Ajouter au panier ; les accessoires lors de la revue du panier avant paiement",
    },
    distractors: [
      {
        en: "Optional products appear at checkout; accessories appear on the product page only",
        fr: "Les optionnels apparaissent au paiement ; les accessoires uniquement sur la page produit",
      },
      {
        en: "Optional products replace the main product; accessories are added alongside it at cart review",
        fr: "Les optionnels remplacent le produit principal ; les accessoires s'ajoutent à la revue du panier",
      },
      {
        en: "There is no difference; both terms mean cross-selling in Odoo",
        fr: "Il n'y a pas de différence ; les deux termes désignent le cross-selling dans Odoo",
      },
    ],
    explanation: {
      en: "Optional products prompt at add-to-cart; accessory products upsell in the cart before checkout.",
      fr: "Les optionnels s'affichent à l'ajout panier ; les accessoires font de l'upsell dans le panier avant paiement.",
    },
  }),
  complexQ({
    id: "eco-025",
    module: "ecommerce",
    text: {
      en: "Where do you configure cross-selling and upselling products for the online shop?",
      fr: "Où configurer le cross-selling et l'upselling pour la boutique en ligne ?",
    },
    correct: {
      en: "On the product Sales tab in the eCommerce section",
      fr: "Sur l'onglet Ventes du produit, section eCommerce",
    },
    distractors: [
      {
        en: "On the product Inventory tab under reordering rules",
        fr: "Sur l'onglet Inventaire du produit sous les règles de réapprovisionnement",
      },
      {
        en: "In Website settings under the eCommerce tab only, not per product",
        fr: "Uniquement dans Paramètres Site web onglet eCommerce, pas par produit",
      },
      {
        en: "In Marketing Automation campaign triggers for abandoned carts",
        fr: "Dans les déclencheurs Marketing Automation pour paniers abandonnés",
      },
    ],
    explanation: {
      en: "Optional and accessory product lists are defined per product on the Sales/eCommerce tab.",
      fr: "Les listes de produits optionnels et accessoires se définissent par produit sur l'onglet Ventes/eCommerce.",
    },
  }),
];
