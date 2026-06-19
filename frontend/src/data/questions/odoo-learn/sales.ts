import { complexQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const salesLearnQuestions = [
  complexQ({
    id: "sal-026",
    module: "sales",
    text: {
      en: "Can you sell a product for which your inventory displays a quantity of 0? (Odoo Learn — Business Flow: Furniture Store)",
      fr: "Pouvez-vous vendre un produit pour lequel votre inventaire affiche une quantité de 0 ? (Odoo Learn — Flux d'activité : magasin de meubles)",
    },
    correct: {
      en: "Yes.",
      fr: "Oui.",
    },
    distractors: [
      { en: "Yes, but only if you first have set a replenishment/reordering rule.", fr: "Oui, mais seulement si vous avez préalablement défini une règle de réapprovisionnement/réapprovisionnement." },
      { en: "Yes, but only if your product has an invoicing policy set to “on delivered quantities”.", fr: "Oui, mais uniquement si votre produit a une politique de facturation définie sur « sur quantités livrées »." },
      { en: "No, it is illegal.", fr: "Non, c'est illégal." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Furniture Store): Yes.",
      fr: "Source Odoo Learn (Business Flow : Magasin de meubles) : Oui.",
    },
  }),
  complexQ({
    id: "sal-027",
    module: "sales",
    text: {
      en: "Where do you go to invoice all your customers at once? (Odoo Learn — Business Flow: Furniture Store)",
      fr: "Où allez-vous facturer tous vos clients en même temps ? (Odoo Learn — Flux d'activité : magasin de meubles)",
    },
    correct: {
      en: "Go to the Sales app > To Invoice > Orders to Invoice",
      fr: "Accédez à l'application Ventes > À facturer > Commandes à facturer",
    },
    distractors: [
      { en: "Go to the Accounting app > To Invoice > Create Batch Invoice", fr: "Accédez à l'application Comptabilité > Vers la facture > Créer une facture groupée" },
      { en: "Go to the CRM app > select all “Won” opportunities > Send Invoices", fr: "Accédez à l'application CRM > sélectionnez toutes les opportunités « Gagnées » > Envoyer des factures" },
      { en: "It is not possible, you have to create each invoice separately.", fr: "Ce n'est pas possible, vous devez créer chaque facture séparément." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Furniture Store): Go to the Sales app > To Invoice > Orders to Invoice",
      fr: "Source Odoo Learn (Business Flow : Magasin de meubles) : Accédez à l'application Ventes > Facturer > Commandes à facturer",
    },
  }),
  complexQ({
    id: "sal-028",
    module: "sales",
    text: {
      en: "About the registration questions: if ‘Ask only once per order’ is not enabled: (Odoo Learn — Business Flow: Events and Marketing)",
      fr: "Concernant les questions d'inscription : si « Ne poser qu'une seule fois par commande » n'est pas activé : (Odoo Learn — Flux d'affaires : événements et marketing)",
    },
    correct: {
      en: "The question is asked once per attendee.",
      fr: "La question est posée une fois par participant.",
    },
    distractors: [
      { en: "The question is asked once per order.", fr: "La question est posée une fois par commande." },
      { en: "Questions are randomized if more than one question was created, making only one question being asked per attendee.", fr: "Les questions sont randomisées si plusieurs questions ont été créées, ce qui fait qu'une seule question est posée par participant." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Events and Marketing): The question is asked once per attendee.",
      fr: "Source Odoo Learn (Business Flow : Événements et Marketing) : La question est posée une fois par participant.",
    },
  }),
  complexQ({
    id: "sal-029",
    module: "sales",
    text: {
      en: "To create a Lead Generation rule, I have to go to: (Odoo Learn — Business Flow: Events and Marketing)",
      fr: "Pour créer une règle de Lead Generation, je dois aller sur : (Odoo Learn — Flux d'affaires : événements et marketing)",
    },
    correct: {
      en: "Events → Configuration → Lead Generation → Create.",
      fr: "Événements → Configuration → Génération de leads → Créer.",
    },
    distractors: [
      { en: "Events → Settings → Lead Generation → Create.", fr: "Événements → Paramètres → Génération de leads → Créer." },
      { en: "Events → Lead Generation → Create.", fr: "Événements → Génération de leads → Créer." },
      { en: "CRM → Configuration → Events → Lead Generation → Create.", fr: "CRM → Configuration → Événements → Génération de leads → Créer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Events and Marketing): Events → Configuration → Lead Generation → Create.",
      fr: "Source Odoo Learn (Business Flow : Événements et Marketing) : Événements → Configuration → Génération de leads → Créer.",
    },
  }),
  complexQ({
    id: "sal-030",
    module: "sales",
    text: {
      en: "Can I create and send a post to multiple social platforms at once? (Odoo Learn — Business Flow: Events and Marketing)",
      fr: "Puis-je créer et envoyer une publication sur plusieurs plateformes sociales à la fois ? (Odoo Learn — Flux d'affaires : événements et marketing)",
    },
    correct: {
      en: "Yes, posts can be created and posted to multiple streams at the same time.",
      fr: "Oui, les publications peuvent être créées et publiées sur plusieurs flux en même temps.",
    },
    distractors: [
      { en: "No, posts have to be created and posted individually, by stream.", fr: "Non, les publications doivent être créées et publiées individuellement, par flux." },
      { en: "Yes, but the content has to be created individually, by stream, and then scheduled to be posted at the same time.", fr: "Oui, mais le contenu doit être créé individuellement, par flux, puis programmé pour être publié en même temps." },
      { en: "No, posts can be created at the same time but have to be posted individually.", fr: "Non, les publications peuvent être créées en même temps mais doivent être publiées individuellement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Events and Marketing): Yes, posts can be created and posted to multiple streams at the same time.",
      fr: "Source Odoo Learn (Business Flow : Événements et marketing) : Oui, les publications peuvent être créées et publiées sur plusieurs flux en même temps.",
    },
  }),
  complexQ({
    id: "sal-031",
    module: "sales",
    text: {
      en: "In Odoo’s Planning App what does the red “earmark” mean, when it appears on a shift? (Odoo Learn — Business Flow: Restaurant)",
      fr: "Dans l’application de planification d’Odoo, que signifie la « marque » rouge lorsqu’elle apparaît sur une équipe ? (Odoo Learn — Flux d'affaires : Restaurant)",
    },
    correct: {
      en: "Conflicting shift for the same person.",
      fr: "Changement de poste conflictuel pour la même personne.",
    },
    distractors: [
      { en: "It was duplicated.", fr: "Il a été dupliqué." },
      { en: "There was a note left on the shift.", fr: "Il y avait une note laissée sur le quart de travail." },
      { en: "The person is on vacation.", fr: "La personne est en vacances." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Restaurant): Conflicting shift for the same person.",
      fr: "Source Odoo Learn (Business Flow : Restaurant) : Shift conflictuel pour la même personne.",
    },
  }),
  complexQ({
    id: "sal-032",
    module: "sales",
    text: {
      en: "Where can you add a product to your menu for immediate sale to a customer? (Odoo Learn — Business Flow: Restaurant)",
      fr: "Où pouvez-vous ajouter un produit à votre menu pour une vente immédiate à un client ? (Odoo Learn — Flux d'affaires : Restaurant)",
    },
    correct: {
      en: "A and B",
      fr: "A et B",
    },
    distractors: [
      { en: "Directly from the POS menu in kiosk mode.", fr: "Directement depuis le menu POS en mode kiosque." },
      { en: "From the Inventory Application products menu.", fr: "Depuis le menu Produits de l'application d'inventaire." },
      { en: "The eCommerce application to ensure online ordering works.", fr: "L'application de commerce électronique pour garantir le fonctionnement des commandes en ligne." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Restaurant): A and B",
      fr: "Source Odoo Learn (Business Flow : Restaurant) : A et B",
    },
  }),
  complexQ({
    id: "sal-033",
    module: "sales",
    text: {
      en: "What option needs to be selected in a PoS session in order to edit the table layout? (Odoo Learn — Business Flow: Restaurant)",
      fr: "Quelle option doit être sélectionnée dans une session PoS afin de modifier la disposition du tableau ? (Odoo Learn — Flux d'affaires : Restaurant)",
    },
    correct: {
      en: "Pencil Icon in the upper right corner.",
      fr: "Icône de crayon dans le coin supérieur droit.",
    },
    distractors: [
      { en: "Configuration > Settings > Check the box next to “Edit tables.”", fr: "Configuration > Paramètres > Cochez la case à côté de « Modifier les tables »." },
      { en: "Developer mode needs to be turned on.", fr: "Le mode développeur doit être activé." },
      { en: "Edit button in the settings menu.", fr: "Bouton Modifier dans le menu des paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Restaurant): Pencil Icon in the upper right corner.",
      fr: "Source Odoo Learn (Business Flow : Restaurant) : Icône en forme de crayon dans le coin supérieur droit.",
    },
  }),
  complexQ({
    id: "sal-034",
    module: "sales",
    text: {
      en: "When I use an email address to receive documents, does Odoo create a new email account, or use an email alias? (Odoo Learn — Business Flow: Administrative Department)",
      fr: "Lorsque j'utilise une adresse e-mail pour recevoir des documents, Odoo crée-t-il un nouveau compte de messagerie ou utilise-t-il un alias de messagerie ? (Odoo Learn — Flux d'affaires : service administratif)",
    },
    correct: {
      en: "Email alias",
      fr: "Alias ​​de messagerie",
    },
    distractors: [
      { en: "New email", fr: "Nouvel e-mail" },
      { en: "Using an email alias to receive documents isn’t possible. I need to continue receiving them by mail, and scanning them manually", fr: "Utiliser un alias de messagerie pour recevoir des documents n’est pas possible. Je dois continuer à les recevoir par courrier et à les scanner manuellement" },
      { en: "An email alias, but for that, a third-party app is necessary", fr: "Un alias de messagerie, mais pour cela, une application tierce est nécessaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Administrative Department): Email alias",
      fr: "Source Odoo Learn (Business Flow : Service Administratif) : Alias ​​email",
    },
  }),
  complexQ({
    id: "sal-035",
    module: "sales",
    text: {
      en: "What does the \"Split\" action do? (Odoo Learn — Business Flow: Administrative Department)",
      fr: "À quoi sert l'action « Split » ? (Odoo Learn — Flux d'affaires : service administratif)",
    },
    correct: {
      en: "It splits a batch of documents into separate files, which can each be assigned different actions.",
      fr: "Il divise un lot de documents en fichiers distincts, auxquels peuvent chacun être assignées des actions différentes.",
    },
    distractors: [
      { en: "It splits a single page into two pages.", fr: "Il divise une seule page en deux pages." },
      { en: "It splits the documents into different workspaces.", fr: "Il divise les documents en différents espaces de travail." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Administrative Department): It splits a batch of documents into separate files, which can each be assigned different actions.",
      fr: "Source Odoo Learn (Business Flow : Département Administratif) : Il divise un lot de documents en fichiers séparés, auxquels peuvent chacun être assignées des actions différentes.",
    },
  }),
  complexQ({
    id: "sal-036",
    module: "sales",
    text: {
      en: "How would I customize the actions available with documents? (Odoo Learn — Business Flow: Administrative Department)",
      fr: "Comment puis-je personnaliser les actions disponibles avec les documents ? (Odoo Learn — Flux d'affaires : service administratif)",
    },
    correct: {
      en: "Actions can be created and customized in the Documents App > Configuration > Actions",
      fr: "Les actions peuvent être créées et personnalisées dans l'application Documents > Configuration > Actions",
    },
    distractors: [
      { en: "This is only possible with a third-party module", fr: "Ceci n'est possible qu'avec un module tiers" },
      { en: "This is considered a development in Odoo, and code modification is necessary", fr: "Ceci est considéré comme un développement dans Odoo et une modification du code est nécessaire" },
      { en: "Actions can be created through the Technical menu in the Settings app", fr: "Les actions peuvent être créées via le menu Technique de l'application Paramètres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Administrative Department): Actions can be created and customized in the Documents App > Configuration > Actions",
      fr: "Source Odoo Learn (Business Flow : Service Administratif) : Les actions peuvent être créées et personnalisées dans l'application Documents > Configuration > Actions",
    },
  }),
  complexQ({
    id: "sal-037",
    module: "sales",
    text: {
      en: "If the “Analytic” column isn’t visible on the Purchase Order or Sales Order, where can it be activated? (Odoo Learn — Business Flow: Construction Project)",
      fr: "Si la colonne « Analyse » n'est pas visible sur le bon de commande ou la commande client, où peut-elle être activée ? (Odoo Learn — Flux d'affaires : projet de construction)",
    },
    correct: {
      en: "Analytic Accounts are activated in Accounting > Configuration > Settings.",
      fr: "Les comptes analytiques sont activés dans Comptabilité > Configuration > Paramètres.",
    },
    distractors: [
      { en: "Analytic Accounts cannot be used in Odoo.", fr: "Les comptes analytiques ne peuvent pas être utilisés dans Odoo." },
      { en: "Analytic Accounts are activated by default in Odoo and don’t need to be activated.", fr: "Les comptes analytiques sont activés par défaut dans Odoo et n'ont pas besoin d'être activés." },
      { en: "Analytic Accounts are activated in the Sales / Purchase Configuration > Settings.", fr: "Les comptes analytiques sont activés dans Configuration des ventes/achats > Paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Construction Project): Analytic Accounts are activated in Accounting > Configuration > Settings.",
      fr: "Source Odoo Learn (Business Flow : Construction Project) : Les comptes analytiques sont activés dans Comptabilité > Configuration > Paramètres.",
    },
  }),
  complexQ({
    id: "sal-038",
    module: "sales",
    text: {
      en: "How can you invoice the customer for the time your employees worked on the project? (Odoo Learn — Business Flow: Construction Project)",
      fr: "Comment facturer au client le temps passé par vos employés sur le projet ? (Odoo Learn — Flux d'affaires : projet de construction)",
    },
    correct: {
      en: "By setting the “product” (architect in the video) as a service and the invoicing policy as timesheets on tasks.",
      fr: "En définissant le « produit » (l'architecte dans la vidéo) comme un service et la politique de facturation comme des feuilles de temps sur les tâches.",
    },
    distractors: [
      { en: "By setting the “product” (architect in the video) as a consumable and the invoicing policy as ordered quantity.", fr: "En paramétrant le « produit » (architecte dans la vidéo) comme consommable et la politique de facturation comme quantité commandée." },
      { en: "By setting the “product” (architect in the video) as a service and the invoicing policy as ordered quantity.", fr: "En paramétrant le « produit » (architecte dans la vidéo) comme un service et la politique de facturation comme quantité commandée." },
      { en: "By setting the “product” (architect in the video) as a consumable and the invoicing policy as timesheets on tasks.", fr: "En paramétrant le « produit » (l'architecte dans la vidéo) comme un consommable et la politique de facturation comme des feuilles de temps sur les tâches." },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Construction Project): By setting the “product” (architect in the video) as a service and the invoicing policy as timesheets on tasks.",
      fr: "Source Odoo Learn (Business Flow : Construction Project) : En définissant le « produit » (architecte dans la vidéo) comme un service et la politique de facturation comme des feuilles de temps sur les tâches.",
    },
  }),
  complexQ({
    id: "sal-039",
    module: "sales",
    text: {
      en: "The Wood Panels are set up as invoicing the delivered quantities and re-invoice at sales price. The cost of the product is $50 and the sales price is $80. What will be invoiced to the customer for 5 wood panels? (Odoo Learn — Business Flow: Construction Project)",
      fr: "Les Panneaux de Bois sont paramétrés comme facturant les quantités livrées et refacturés au prix de vente. Le coût du produit est de 50$ et le prix de vente est de 80$. Que sera facturé au client pour 5 panneaux de bois ? (Odoo Learn — Flux d'affaires : projet de construction)",
    },
    correct: {
      en: "400$",
      fr: "400$",
    },
    distractors: [
      { en: "50$", fr: "50$" },
      { en: "80$", fr: "80$" },
      { en: "250$", fr: "250$" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Construction Project): 400$",
      fr: "Source Odoo Learn (Business Flow : Projet de construction) : 400$",
    },
  }),
  complexQ({
    id: "sal-040",
    module: "sales",
    text: {
      en: "Which operational route was selected for David’s drones since they are built in-house? (Odoo Learn — Business Flow: Airproof)",
      fr: "Quelle route opérationnelle a été retenue pour les drones de David puisqu’ils sont construits en interne ? (Odoo Learn — Flux d'affaires : étanche à l'air)",
    },
    correct: {
      en: "Manufacture",
      fr: "Fabrication",
    },
    distractors: [
      { en: "Buy", fr: "Acheter" },
      { en: "Replenish on Order (MTO)", fr: "Réapprovisionnement sur commande (MTO)" },
      { en: "Dropship", fr: "Livraison directe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Airproof): Manufacture",
      fr: "Source Odoo Learn (Business Flow : Airproof) : Fabrication",
    },
  }),
  complexQ({
    id: "sal-041",
    module: "sales",
    text: {
      en: "Where on the product form can you add accessory products so they appear alongside the main product at checkout? (Odoo Learn — Business Flow: Airproof)",
      fr: "À quel endroit du formulaire de produit pouvez-vous ajouter des produits accessoires afin qu'ils apparaissent à côté du produit principal lors du paiement ? (Odoo Learn — Flux d'affaires : étanche à l'air)",
    },
    correct: {
      en: "Sales tab > Upsell & Cross-sell",
      fr: "Onglet Ventes > Vente incitative et vente croisée",
    },
    distractors: [
      { en: "Inventory tab > Routes", fr: "Onglet Inventaire > Itinéraires" },
      { en: "Purchase tab > Purchase Description", fr: "Onglet Achat > ​​Description de l'achat" },
      { en: "Inventory tab > Logistics", fr: "Onglet Inventaire > Logistique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Airproof): Sales tab > Upsell & Cross-sell",
      fr: "Source Odoo Learn (Business Flow : Airproof) : Onglet Ventes > Vente incitative et vente croisée",
    },
  }),
  complexQ({
    id: "sal-042",
    module: "sales",
    text: {
      en: "What does checking the \"Is Published\" box on a product’s sales tab do? (Odoo Learn — Business Flow: Airproof)",
      fr: "À quoi sert la case « Est publié » dans l'onglet Ventes d'un produit ? (Odoo Learn — Flux d'affaires : étanche à l'air)",
    },
    correct: {
      en: "Publishes the product to the company’s website",
      fr: "Publie le produit sur le site Web de l’entreprise",
    },
    distractors: [
      { en: "Sends a promotional email to customers", fr: "Envoie un e-mail promotionnel aux clients" },
      { en: "Marks the product as ready for manufacturing", fr: "Marque le produit comme prêt pour la fabrication" },
      { en: "Adds the product to a quotation template", fr: "Ajoute le produit à un modèle de devis" },
    ],
    explanation: {
      en: "Source Odoo Learn (Business Flow: Airproof): Publishes the product to the company’s website",
      fr: "Source Odoo Learn (Business Flow : Airproof) : publie le produit sur le site Web de l'entreprise",
    },
  }),
  complexQ({
    id: "sal-043",
    module: "sales",
    text: {
      en: "Can I add a PDF product sheet as a header or footer to my quote if I didn't use a Quotation Template? (Odoo Learn — Invoicing for what is ordered)",
      fr: "Puis-je ajouter une fiche produit PDF en en-tête ou pied de page à mon devis si je n'ai pas utilisé de modèle de devis ? (Odoo Learn — Facturation de ce qui est commandé)",
    },
    correct: {
      en: "Yes, by clicking the Quote Builder tab and selecting any documents there.",
      fr: "Oui, en cliquant sur l'onglet Quote Builder et en y sélectionnant n'importe quel document.",
    },
    distractors: [
      { en: "No, you can only add them using the Quotation Template.", fr: "Non, vous ne pouvez les ajouter qu'à l'aide du modèle de devis." },
      { en: "Yes, by clicking the PDF button on the quote form and selecting a document.", fr: "Oui, en cliquant sur le bouton PDF du formulaire de devis et en sélectionnant un document." },
      { en: "Yes, by clicking the Documents smart button at the top of the form.", fr: "Oui, en cliquant sur le bouton intelligent Documents en haut du formulaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing for what is ordered): Yes, by clicking the Quote Builder tab and selecting any documents there.",
      fr: "Source Odoo Learn (Facturation de ce qui est commandé) : Oui, en cliquant sur l'onglet Quote Builder et en y sélectionnant n'importe quel document.",
    },
  }),
  complexQ({
    id: "sal-044",
    module: "sales",
    text: {
      en: "I have 15 different furniture variants to add to a single quote. What is the fastest way for me to add all of them without searching for each one individually in the 'Add a product' line? (Odoo Learn — Invoicing for what is ordered)",
      fr: "J'ai 15 variantes de meubles différentes à ajouter à un seul devis. Quel est le moyen le plus rapide pour moi de tous les ajouter sans les rechercher individuellement dans la ligne « Ajouter un produit » ? (Odoo Learn — Facturation de ce qui est commandé)",
    },
    correct: {
      en: "Click the 'Catalog' button. This opens a dedicated view where you can see all products and variants at once and select multiple items before returning to the quotation.",
      fr: "Cliquez sur le bouton « Catalogue ». Cela ouvre une vue dédiée où vous pouvez voir tous les produits et variantes à la fois et sélectionner plusieurs articles avant de revenir au devis.",
    },
    distractors: [
      { en: "Click Add a section and select a preconfigured list of products.", fr: "Cliquez sur Ajouter une section et sélectionnez une liste de produits préconfigurée." },
      { en: "There is no way to add 15 different products to a quote at once.", fr: "Il n’est pas possible d’ajouter 15 produits différents à un devis à la fois." },
      { en: "Click the Quote Builder tab and add the variants there.", fr: "Cliquez sur l'onglet Quote Builder et ajoutez-y les variantes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing for what is ordered): Click the 'Catalog' button. This opens a dedicated view where you can see all products and variants at once and select multiple items before returning to the quotation.",
      fr: "Source Odoo Learn (Facturation de ce qui est commandé) : Cliquez sur le bouton 'Catalogue'. Cela ouvre une vue dédiée où vous pouvez voir tous les produits et variantes à la fois et sélectionner plusieurs articles avant de revenir au devis.",
    },
  }),
  complexQ({
    id: "sal-045",
    module: "sales",
    text: {
      en: "If I want to offer a customer a discount or reward points on a quote, but the 'Discount' or 'Rewards' buttons are missing from the form, what did I forget to do? (Odoo Learn — Invoicing for what is ordered)",
      fr: "Si je souhaite offrir à un client une remise ou des points de fidélité sur un devis, mais que les boutons « Remise » ou « Récompenses » sont absents du formulaire, qu'ai-je oublié de faire ? (Odoo Learn — Facturation de ce qui est commandé)",
    },
    correct: {
      en: "I forgot to enable 'Discounts' and 'Promotions, Loyalty & Gift Card'  features in the Sales app settings.",
      fr: "J'ai oublié d'activer les fonctionnalités « Remises » et « Promotions, fidélité et cartes cadeaux » dans les paramètres de l'application Ventes.",
    },
    distractors: [
      { en: "Click the filter icon and enable those columns.", fr: "Cliquez sur l'icône de filtre et activez ces colonnes." },
      { en: "Click Confirm, and the quote will display those buttons.", fr: "Cliquez sur Confirmer et le devis affichera ces boutons." },
      { en: "I forgot to enable 'Discounts' and 'Promotions, Loyalty & Gift Card' in the General Settings.", fr: "J'ai oublié d'activer « Remises » et « Promotions, fidélité et carte cadeau » dans les paramètres généraux." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing for what is ordered): I forgot to enable 'Discounts' and 'Promotions, Loyalty & Gift Card'  features in the Sales app settings.",
      fr: "Source Odoo Learn (Facturation de ce qui est commandé) : J'ai oublié d'activer les fonctionnalités « Remises » et « Promotions, fidélité et carte cadeau » dans les paramètres de l'application Ventes.",
    },
  }),
  complexQ({
    id: "sal-046",
    module: "sales",
    text: {
      en: "When the “Invoice what is delivered” policy is enabled, when is the customer invoiced? (Odoo Learn — Invoicing for what is delivered)",
      fr: "Lorsque la politique « Facturer ce qui est livré » est activée, quand le client est-il facturé ? (Odoo Learn — Facturation de ce qui est livré)",
    },
    correct: {
      en: "After the delivered quantities are validated.",
      fr: "Après validation des quantités livrées.",
    },
    distractors: [
      { en: "As soon as the quotation is confirmed.", fr: "Dès que le devis est confirmé." },
      { en: "After the order is created.", fr: "Une fois la commande créée." },
      { en: "When the product is reserved in inventory.", fr: "Lorsque le produit est réservé en inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing for what is delivered): After the delivered quantities are validated.",
      fr: "Source Odoo Learn (Facturation de ce qui est livré) : Après validation des quantités livrées.",
    },
  }),
  complexQ({
    id: "sal-047",
    module: "sales",
    text: {
      en: "Why would you choose the “Invoice what is delivered” invoicing policy? (Odoo Learn — Invoicing for what is delivered)",
      fr: "Pourquoi choisiriez-vous la politique de facturation « Facturer ce qui est livré » ? (Odoo Learn — Facturation de ce qui est livré)",
    },
    correct: {
      en: "To bill customers based on the quantities they actually receive.",
      fr: "Facturer les clients en fonction des quantités réellement reçues.",
    },
    distractors: [
      { en: "To invoice customers before products are shipped.", fr: "Facturer les clients avant l'expédition des produits." },
      { en: "To automatically cancel unfulfilled orders.", fr: "Pour annuler automatiquement les commandes non exécutées." },
      { en: "To prevent partial deliveries.", fr: "Pour éviter les livraisons partielles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing for what is delivered): To bill customers based on the quantities they actually receive.",
      fr: "Source Odoo Learn (Facturation de ce qui est livré) : Pour facturer les clients en fonction des quantités qu'ils reçoivent réellement.",
    },
  }),
  complexQ({
    id: "sal-048",
    module: "sales",
    text: {
      en: "What happens when only part of an order is delivered, and the delivery is validated? (Odoo Learn — Invoicing for what is delivered)",
      fr: "Que se passe-t-il lorsque seule une partie d'une commande est livrée et que la livraison est validée ? (Odoo Learn — Facturation de ce qui est livré)",
    },
    correct: {
      en: "Odoo can create a backorder for the remaining products.",
      fr: "Odoo peut créer une commande en souffrance pour les produits restants.",
    },
    distractors: [
      { en: "The remaining products are automatically canceled.", fr: "Les produits restants sont automatiquement annulés." },
      { en: "The customer is invoiced for the full order quantity.", fr: "Le client est facturé pour la quantité totale commandée." },
      { en: "The sales order must be recreated.", fr: "La commande client doit être recréée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing for what is delivered): Odoo can create a backorder for the remaining products.",
      fr: "Source Odoo Learn (Facturation de ce qui est livré) : Odoo peut créer une commande en souffrance pour les produits restants.",
    },
  }),
  complexQ({
    id: "sal-049",
    module: "sales",
    text: {
      en: "A company wants to gain real-time visibility on a product’s inventory. Which configuration would best support that goal? (Odoo Learn — Selling products)",
      fr: "Une entreprise souhaite obtenir une visibilité en temps réel sur l’inventaire d’un produit. Quelle configuration répondrait le mieux à cet objectif ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "On the product form, set the “Product Type” to “Goods” and enable “Track Inventory”.",
      fr: "Sur le formulaire de produit, définissez le « Type de produit » sur « Marchandises » et activez « Suivre l'inventaire ».",
    },
    distractors: [
      { en: "Enable “Lots & Serial Numbers” in the app settings.", fr: "Activez « Lots et numéros de série » dans les paramètres de l'application." },
      { en: "Enable “Track Inventory” on the product form.", fr: "Activez « Suivre l'inventaire » sur le formulaire du produit." },
      { en: "Create a pricing rule for that product to resupply.", fr: "Créez une règle de tarification pour le réapprovisionnement de ce produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling products): On the product form, set the “Product Type” to “Goods” and enable “Track Inventory”.",
      fr: "Source Odoo Learn (Vente de produits) : sur le formulaire de produit, définissez le « Type de produit » sur « Marchandises » et activez « Suivre l'inventaire ».",
    },
  }),
  complexQ({
    id: "sal-050",
    module: "sales",
    text: {
      en: "What fields are only on the Service product? (Odoo Learn — Selling products)",
      fr: "Quels champs se trouvent uniquement sur le produit Service ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "Create on Order and Plan Services.",
      fr: "Créez sur les services de commande et de plan.",
    },
    distractors: [
      { en: "Create on Order, Track Inventory, and Invoicing Policy.", fr: "Créez sur commande, suivez l'inventaire et la politique de facturation." },
      { en: "Project Template, Invoicing Policy, Plan Services.", fr: "Modèle de projet, politique de facturation, services de plan." },
      { en: "Plan Services and Invoicing Policy.", fr: "Planifier les services et la politique de facturation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling products): Create on Order and Plan Services.",
      fr: "Source Odoo Learn (Vente de produits) : Créez sur Commande et Planifiez des Services.",
    },
  }),
  complexQ({
    id: "sal-051",
    module: "sales",
    text: {
      en: "Which cross-selling feature in Odoo is accessible in the backend view to Salespeople and the online shop view when a customer adds a product to their cart? (Odoo Learn — Selling products)",
      fr: "Quelle fonctionnalité de vente croisée dans Odoo est accessible dans la vue backend pour les vendeurs et dans la vue boutique en ligne lorsqu'un client ajoute un produit à son panier ? (Odoo Learn — Vendre des produits)",
    },
    correct: {
      en: "Optional Products.",
      fr: "Produits optionnels.",
    },
    distractors: [
      { en: "Pricelist rules.", fr: "Règles de la liste de prix." },
      { en: "Accessory Products.", fr: "Produits accessoires." },
      { en: "Alternative Products.", fr: "Produits alternatifs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling products): Optional Products.",
      fr: "Source Odoo Learn (Vente de produits) : Produits optionnels.",
    },
  }),
  complexQ({
    id: "sal-052",
    module: "sales",
    text: {
      en: "How can I have a PDF product sheet automatically appear in every quote for a specific product variant? (Odoo Learn — Adding headers and footers to quote templates and products)",
      fr: "Comment puis-je faire apparaître automatiquement une fiche produit PDF dans chaque devis pour une variante de produit spécifique ? (Odoo Learn — Ajout d'en-têtes et de pieds de page aux modèles de devis et aux produits)",
    },
    correct: {
      en: "Add the PDF to the product variant form and set it to show inside the quote.",
      fr: "Ajoutez le PDF au formulaire de variante de produit et configurez-le pour qu'il s'affiche dans le devis.",
    },
    distractors: [
      { en: "Add the PDF to the product variant form.", fr: "Ajoutez le PDF au formulaire de variante de produit." },
      { en: "Add the PDF to the same Quotation template as the product variant.", fr: "Ajoutez le PDF au même modèle de devis que la variante du produit." },
      { en: "Add the PDF to the quotations’ chatter.", fr: "Ajoutez le PDF au bavardage des citations." },
    ],
    explanation: {
      en: "Source Odoo Learn (Adding headers and footers to quote templates and products): Add the PDF to the product variant form and set it to show inside the quote.",
      fr: "Source Odoo Learn (Ajout d'en-têtes et de pieds de page aux modèles de devis et aux produits) : ajoutez le PDF au formulaire de variante de produit et configurez-le pour qu'il s'affiche dans le devis.",
    },
  }),
  complexQ({
    id: "sal-053",
    module: "sales",
    text: {
      en: "How can customers be able to download a product’s PDF document directly from its product page? (Odoo Learn — Adding headers and footers to quote templates and products)",
      fr: "Comment les clients peuvent-ils télécharger le document PDF d’un produit directement depuis sa page produit ? (Odoo Learn — Ajout d'en-têtes et de pieds de page aux modèles de devis et aux produits)",
    },
    correct: {
      en: "Add and publish the document from the product form so it’s available on the website.",
      fr: "Ajoutez et publiez le document à partir du formulaire produit afin qu'il soit disponible sur le site Web.",
    },
    distractors: [
      { en: "Attach the PDF to a quotation template so it appears on the product page.", fr: "Joignez le PDF à un modèle de devis afin qu'il apparaisse sur la page du produit." },
      { en: "Upload the PDF to the product, but leave it unpublished.", fr: "Téléchargez le PDF sur le produit, mais laissez-le non publié." },
      { en: "Enable a global setting that automatically exposes all product documents.", fr: "Activez un paramètre global qui expose automatiquement tous les documents produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Adding headers and footers to quote templates and products): Add and publish the document from the product form so it’s available on the website.",
      fr: "Source Odoo Learn (Ajout d'en-têtes et de pieds de page aux modèles de devis et aux produits) : Ajoutez et publiez le document à partir du formulaire produit afin qu'il soit disponible sur le site Web.",
    },
  }),
  complexQ({
    id: "sal-054",
    module: "sales",
    text: {
      en: "If I assign a header to a quotation template, is the header automatically added to every quote using that template? (Odoo Learn — Adding headers and footers to quote templates and products)",
      fr: "Si j'attribue un en-tête à un modèle de devis, l'en-tête est-il automatiquement ajouté à chaque devis utilisant ce modèle ? (Odoo Learn — Ajout d'en-têtes et de pieds de page aux modèles de devis et aux produits)",
    },
    correct: {
      en: "No, this only controls which PDFs are available to select in the Quote Builder tab when the template is applied.",
      fr: "Non, cela contrôle uniquement les fichiers PDF disponibles à sélectionner dans l'onglet Quote Builder lorsque le modèle est appliqué.",
    },
    distractors: [
      { en: "Yes, the header I set on the template is locked in and automatically included in every quote generated from it.", fr: "Oui, l'en-tête que j'ai défini sur le modèle est verrouillé et automatiquement inclus dans chaque devis généré à partir de celui-ci." },
      { en: "No, I can’t add a header to a template; I can only add it to each individual quotation.", fr: "Non, je ne peux pas ajouter d'en-tête à un modèle ; Je ne peux que l'ajouter à chaque citation individuelle." },
      { en: "Yes, but only if I also enable the Quotation Templates feature.", fr: "Oui, mais seulement si j'active également la fonctionnalité Modèles de devis." },
    ],
    explanation: {
      en: "Source Odoo Learn (Adding headers and footers to quote templates and products): No, this only controls which PDFs are available to select in the Quote Builder tab when the template is applied.",
      fr: "Source Odoo Learn (Ajout d'en-têtes et de pieds de page aux modèles de devis et aux produits) : Non, cela contrôle uniquement les PDF disponibles pour la sélection dans l'onglet Quote Builder lorsque le modèle est appliqué.",
    },
  }),
  complexQ({
    id: "sal-055",
    module: "sales",
    text: {
      en: "Where is the ‘Settings’ page located in the ‘Sales’ app? (Odoo Learn — Sales Basics and Your First Quotation)",
      fr: "Où se trouve la page « Paramètres » dans l'application « Ventes » ? (Odoo Learn — Bases de vente et votre premier devis)",
    },
    correct: {
      en: "Configuration > Settings",
      fr: "Configuration > Paramètres",
    },
    distractors: [
      { en: "Orders > Settings", fr: "Commandes > Paramètres" },
      { en: "Products > Settings", fr: "Produits > Paramètres" },
      { en: "Reporting > Settings", fr: "Rapports > Paramètres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Basics and Your First Quotation): Configuration > Settings",
      fr: "Source Odoo Learn (Bases de vente et votre premier devis) : Configuration > Paramètres",
    },
  }),
  complexQ({
    id: "sal-056",
    module: "sales",
    text: {
      en: "In addition to the ‘Products’ option, what other options are located under the ‘Products’ header menu? (Odoo Learn — Sales Basics and Your First Quotation)",
      fr: "En plus de l'option « Produits », quelles autres options se trouvent sous le menu d'en-tête « Produits » ? (Odoo Learn — Bases de vente et votre premier devis)",
    },
    correct: {
      en: "Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet",
      fr: "Variantes de produits, listes de prix, remises et fidélité, cartes cadeaux et portefeuille électronique",
    },
    distractors: [
      { en: "Product Values, Prices, Discounts, eWallets", fr: "Valeurs des produits, prix, réductions, portefeuilles électroniques" },
      { en: "Product Prices, Variants, Loyalties, Gift Cards", fr: "Prix ​​des produits, variantes, fidélités, cartes cadeaux" },
      { en: "Product Configurations, Price Settings, eWallets, Discount Settings", fr: "Configurations du produit, paramètres de prix, portefeuilles électroniques, paramètres de remise" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Basics and Your First Quotation): Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet",
      fr: "Source Odoo Learn (bases de vente et votre premier devis) : variantes de produits, listes de prix, remises et fidélité, cartes cadeaux et portefeuille électronique",
    },
  }),
  complexQ({
    id: "sal-057",
    module: "sales",
    text: {
      en: "What pages are available beneath the ‘To Invoice’ header menu options? (Odoo Learn — Sales Basics and Your First Quotation)",
      fr: "Quelles pages sont disponibles sous les options du menu d’en-tête « À facturer » ? (Odoo Learn — Bases de vente et votre premier devis)",
    },
    correct: {
      en: "‘Orders to Invoice’ and ‘Orders to Upsell’",
      fr: "« Commandes à facturer » et « Commandes à vendre »",
    },
    distractors: [
      { en: "‘Orders to Invoice’ and ‘Quotations’", fr: "« Commandes à facturer » et « Devis »" },
      { en: "‘Orders to Upsell’ and ‘Customers’", fr: "« Commandes à vendre » et « Clients »" },
      { en: "‘Orders to Upsell’ and ‘Products to Purchase’", fr: "« Commandes à vendre » et « Produits à acheter »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Basics and Your First Quotation): ‘Orders to Invoice’ and ‘Orders to Upsell’",
      fr: "Source Odoo Learn (Bases de la vente et votre premier devis) : « Commandes à facturer » et « Commandes à vendre incitative »",
    },
  }),
  complexQ({
    id: "sal-058",
    module: "sales",
    text: {
      en: "What page serves as the main dashboard in the Sales application? (Odoo Learn — Your First Quotation)",
      fr: "Quelle page sert de tableau de bord principal dans l'application Ventes ? (Odoo Learn — Votre premier devis)",
    },
    correct: {
      en: "Quotations",
      fr: "Citations",
    },
    distractors: [
      { en: "Customers", fr: "Clients" },
      { en: "Orders", fr: "Ordres" },
      { en: "Sales", fr: "Ventes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your First Quotation): Quotations",
      fr: "Source Odoo Learn (Votre première citation) : Citations",
    },
  }),
  complexQ({
    id: "sal-059",
    module: "sales",
    text: {
      en: "How many optional products can be added to a quotation? (Odoo Learn — Your First Quotation)",
      fr: "Combien de produits optionnels peuvent être ajoutés à un devis ? (Odoo Learn — Votre premier devis)",
    },
    correct: {
      en: "There is no limit",
      fr: "Il n'y a pas de limite",
    },
    distractors: [
      { en: "1", fr: "1" },
      { en: "2", fr: "2" },
      { en: "3", fr: "3" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your First Quotation): There is no limit",
      fr: "Source Odoo Learn (Votre premier devis) : Il n'y a pas de limite",
    },
  }),
  complexQ({
    id: "sal-060",
    module: "sales",
    text: {
      en: "What tab on a quotation form is dedicated to leaving internal notes to employees? (Odoo Learn — Your First Quotation)",
      fr: "Quel onglet d'un formulaire de devis est dédié à laisser des notes internes aux salariés ? (Odoo Learn — Votre premier devis)",
    },
    correct: {
      en: "Notes",
      fr: "Remarques",
    },
    distractors: [
      { en: "Internal Chatter", fr: "Bavardage interne" },
      { en: "FYI", fr: "POUR VOTRE INFORMATION" },
      { en: "Employees", fr: "Employés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your First Quotation): Notes",
      fr: "Source Odoo Learn (Votre première citation) : Notes",
    },
  }),
  complexQ({
    id: "sal-061",
    module: "sales",
    text: {
      en: "What appears in the right column of the ‘General Information’ tab? (Odoo Learn — Create Products)",
      fr: "Qu'est-ce qui apparaît dans la colonne de droite de l'onglet « Informations générales » ? (Odoo Learn — Créer des produits)",
    },
    correct: {
      en: "Financial-related fields, regardless of the chosen Product Type",
      fr: "Champs liés à la finance, quel que soit le type de produit choisi",
    },
    distractors: [
      { en: "Inventory-related fields, regardless of the chosen Product Type", fr: "Champs liés à l'inventaire, quel que soit le type de produit choisi" },
      { en: "Financial-related fields, *only* if ‘Goods’ is selected as the Product Type", fr: "Champs liés aux finances, *uniquement* si « Biens » est sélectionné comme type de produit" },
      { en: "Inventory-related fields, *only* if ‘Services’ is selected as the Product Type", fr: "Champs liés à l'inventaire, *uniquement* si « Services » est sélectionné comme type de produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Products): Financial-related fields, regardless of the chosen Product Type",
      fr: "Source Odoo Learn (Créer des produits) : Champs liés à la finance, quel que soit le type de produit choisi",
    },
  }),
  complexQ({
    id: "sal-062",
    module: "sales",
    text: {
      en: "What is the ‘Optional Products’ field used for? (Odoo Learn — Create Products)",
      fr: "A quoi sert le champ « Produits optionnels » ? (Odoo Learn — Créer des produits)",
    },
    correct: {
      en: "Add complementary products that’ll be recommended  to the customer during the purchasing process",
      fr: "Ajouter des produits complémentaires qui seront recommandés au client lors du processus d'achat",
    },
    distractors: [
      { en: "Provide customers with the option to back out of the transaction", fr: "Offrir aux clients la possibilité de se retirer de la transaction" },
      { en: "Add optional payment methods for the customer to choose from during the purchasing process", fr: "Ajoutez des méthodes de paiement facultatives parmi lesquelles le client peut choisir pendant le processus d'achat" },
      { en: "Show similar products from other companies to showcase difference in price", fr: "Afficher des produits similaires d'autres sociétés pour mettre en valeur la différence de prix" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Products): Add complementary products that’ll be recommended  to the customer during the purchasing process",
      fr: "Source Odoo Learn (Créer des produits) : Ajoutez des produits complémentaires qui seront recommandés au client lors du processus d'achat",
    },
  }),
  complexQ({
    id: "sal-063",
    module: "sales",
    text: {
      en: "After configuring a product form, how can I publish a product? (Odoo Learn — Create Products)",
      fr: "Après avoir configuré un formulaire produit, comment puis-je publier un produit ? (Odoo Learn — Créer des produits)",
    },
    correct: {
      en: "Go to Website smart button > Toggle ‘Unpublished’ to ‘Published’",
      fr: "Accédez au bouton intelligent du site Web > Basculez « Non publié » sur « Publié »",
    },
    distractors: [
      { en: "Publish smart button > Toggle ‘Off’ to ‘On’", fr: "Bouton intelligent Publier > Basculer de « Désactivé » à « Activé »" },
      { en: "Configuration > Products > Publish Recent", fr: "Configuration > Produits > Publier récent" },
      { en: "Products > Publish > Select Product to Publish", fr: "Produits > Publier > Sélectionner le produit à publier" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Products): Go to Website smart button > Toggle ‘Unpublished’ to ‘Published’",
      fr: "Source Odoo Learn (Créer des produits) : Accédez au bouton intelligent du site Web > Basculez de « Non publié » à « Publié »",
    },
  }),
  complexQ({
    id: "sal-064",
    module: "sales",
    text: {
      en: "How does the ‘Select’ Display Type showcase variants? (Odoo Learn — Create Product Variants)",
      fr: "Comment la fonction « Sélectionner » le type d'affichage présente-t-elle les variantes ? (Odoo Learn — Créer des variantes de produits)",
    },
    correct: {
      en: "As a drop-down menu of choices",
      fr: "Sous forme de menu déroulant de choix",
    },
    distractors: [
      { en: "As clickable circles", fr: "Sous forme de cercles cliquables" },
      { en: "As buttons", fr: "Comme boutons" },
      { en: "As multiple checkbox options", fr: "Comme plusieurs options de case à cocher" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Product Variants): As a drop-down menu of choices",
      fr: "Source Odoo Learn (Créer des variantes de produits) : sous forme de menu déroulant de choix",
    },
  }),
  complexQ({
    id: "sal-065",
    module: "sales",
    text: {
      en: "Once an attribute is used on at least one product, how does that affect the ‘Variants Creation Mode’? (Odoo Learn — Create Product Variants)",
      fr: "Une fois qu’un attribut est utilisé sur au moins un produit, comment cela affecte-t-il le « Mode de création de variantes » ? (Odoo Learn — Créer des variantes de produits)",
    },
    correct: {
      en: "The Variants Creation Mode cannot be changed",
      fr: "Le mode de création de variantes ne peut pas être modifié",
    },
    distractors: [
      { en: "The Variants Creation Mode becomes visible to customers", fr: "Le mode de création de variantes devient visible pour les clients" },
      { en: "The Variants Creation Mode becomes color-coded", fr: "Le mode de création de variantes devient codé par couleur" },
      { en: "The Variants Creation Mode can always be changed, if needed", fr: "Le mode de création de variantes peut toujours être modifié, si nécessaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Product Variants): The Variants Creation Mode cannot be changed",
      fr: "Source Odoo Learn (Créer des variantes de produit) : Le mode de création de variantes ne peut pas être modifié",
    },
  }),
  complexQ({
    id: "sal-066",
    module: "sales",
    text: {
      en: "If one attribute happens to cost more, and should result in a higher sales price, where can you enter that amount? (Odoo Learn — Create Product Variants)",
      fr: "Si un attribut coûte plus cher et devrait entraîner un prix de vente plus élevé, où pouvez-vous saisir ce montant ? (Odoo Learn — Créer des variantes de produits)",
    },
    correct: {
      en: "Default Extra Price",
      fr: "Prix ​​supplémentaire par défaut",
    },
    distractors: [
      { en: "Added Value", fr: "Valeur ajoutée" },
      { en: "Increase Cost", fr: "Augmenter le coût" },
      { en: "Additional Customer Price", fr: "Prix ​​client supplémentaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Create Product Variants): Default Extra Price",
      fr: "Source Odoo Learn (Créer des variantes de produits) : prix supplémentaire par défaut",
    },
  }),
  complexQ({
    id: "sal-067",
    module: "sales",
    text: {
      en: "How can I access the ‘Quotation Templates’ page in Odoo Sales? (Odoo Learn — Quotation Templates)",
      fr: "Comment puis-je accéder à la page « Modèles de devis » dans Odoo Sales ? (Odoo Learn — Modèles de devis)",
    },
    correct: {
      en: "Via the ‘Quotation Templates’ link on the ‘Settings’ page, or ‘Configuration’ > ‘Quotation Templates’",
      fr: "Via le lien « Modèles de devis » sur la page « Paramètres », ou « Configuration » > « Modèles de devis »",
    },
    distractors: [
      { en: "Via the ‘Template Configuration’ link on quotations, or ‘Configuration’ > ‘Quotation Templates’", fr: "Via le lien « Configuration des modèles » sur les devis, ou « Configuration » > « Modèles de devis »" },
      { en: "Via the ‘Quotation Templates’ link on the ‘Settings’ page, or ‘Templates’ > ‘Configuration’", fr: "Via le lien « Modèles de devis » sur la page « Paramètres », ou « Modèles » > « Configuration »" },
      { en: "Click the ‘Templates’ button on a sales order", fr: "Cliquez sur le bouton « Modèles » sur une commande client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quotation Templates): Via the ‘Quotation Templates’ link on the ‘Settings’ page, or ‘Configuration’ > ‘Quotation Templates’",
      fr: "Source Odoo Learn (Modèles de devis) : Via le lien « Modèles de devis » sur la page « Paramètres », ou « Configuration » > « Modèles de devis »",
    },
  }),
  complexQ({
    id: "sal-068",
    module: "sales",
    text: {
      en: "What field on a quotation template form is necessary when dealing with subscription products and/or services? (Odoo Learn — Quotation Templates)",
      fr: "Quel champ sur un formulaire de modèle de devis est nécessaire lorsqu'il s'agit de produits et/ou services d'abonnement ? (Odoo Learn — Modèles de devis)",
    },
    correct: {
      en: "Recurring Plan",
      fr: "Forfait récurrent",
    },
    distractors: [
      { en: "Subscriptions", fr: "Abonnements" },
      { en: "Recurrence", fr: "Récurrence" },
      { en: "Subscription Plans", fr: "Plans d'abonnement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quotation Templates): Recurring Plan",
      fr: "Source Odoo Learn (Modèles de devis) : Plan récurrent",
    },
  }),
  complexQ({
    id: "sal-069",
    module: "sales",
    text: {
      en: "If I want the customer to confirm their order with a virtual signature, what option should be enabled on the quotation template form? (Odoo Learn — Quotation Templates)",
      fr: "Si je souhaite que le client confirme sa commande avec une signature virtuelle, quelle option activer sur le formulaire du modèle de devis ? (Odoo Learn — Modèles de devis)",
    },
    correct: {
      en: "Online Signature",
      fr: "Signature en ligne",
    },
    distractors: [
      { en: "Signature", fr: "Signature" },
      { en: "Sign", fr: "Signe" },
      { en: "Virtual Sign", fr: "Signe virtuel" },
    ],
    explanation: {
      en: "Source Odoo Learn (Quotation Templates): Online Signature",
      fr: "Source Odoo Learn (Modèles de devis) : Signature en ligne",
    },
  }),
  complexQ({
    id: "sal-070",
    module: "sales",
    text: {
      en: "How can I access the ‘Headers/Footers’ page in Odoo Sales? (Odoo Learn — PDF Quote Builder)",
      fr: "Comment puis-je accéder à la page « En-têtes/Pieds de page » dans Odoo Sales ? (Odoo Learn — Générateur de devis PDF)",
    },
    correct: {
      en: "‘Configuration’ > ‘Headers/Footers’ or clicking the ‘Headers/Footers’ link on the ‘Settings’ page",
      fr: "« Configuration » > « En-têtes/pieds de page » ou en cliquant sur le lien « En-têtes/pieds de page » sur la page « Paramètres »",
    },
    distractors: [
      { en: "‘Configuration’ > ‘Quotation Settings’", fr: "« Configuration » > « Paramètres du devis »" },
      { en: "‘Options’ > ‘Quotes’ > ‘PDF Settings’", fr: "« Options » > « Citations » > « Paramètres PDF »" },
      { en: "‘Configuration’ > ‘PDF Quote Options’", fr: "« Configuration » > « Options de devis PDF »" },
    ],
    explanation: {
      en: "Source Odoo Learn (PDF Quote Builder): ‘Configuration’ > ‘Headers/Footers’ or clicking the ‘Headers/Footers’ link on the ‘Settings’ page",
      fr: "Source Odoo Learn (PDF Quote Builder) : « Configuration » > « En-têtes/pieds de page » ou en cliquant sur le lien « En-têtes/pieds de page » sur la page « Paramètres »",
    },
  }),
  complexQ({
    id: "sal-071",
    module: "sales",
    text: {
      en: "How can I  find the ‘technical name’ for a field in Odoo? (Odoo Learn — PDF Quote Builder)",
      fr: "Comment puis-je trouver le « nom technique » d’un champ dans Odoo ? (Odoo Learn — Générateur de devis PDF)",
    },
    correct: {
      en: "Enter ‘Developer Mode’, hover the cursor over the ‘question mark’ icon beside a field, and look for the row titled, ‘Field’",
      fr: "Entrez en « Mode développeur », passez le curseur sur l'icône « point d'interrogation » à côté d'un champ et recherchez la ligne intitulée « Champ »",
    },
    distractors: [
      { en: "In the ‘Notes’ tab of a sales order", fr: "Dans l'onglet « Notes » d'une commande client" },
      { en: "By requesting ‘Administrator’ access from my manager", fr: "En demandant l'accès « Administrateur » à mon manager" },
      { en: "It’s impossible to do without reaching out to the Support team", fr: "C’est impossible de le faire sans contacter l’équipe d’assistance" },
    ],
    explanation: {
      en: "Source Odoo Learn (PDF Quote Builder): Enter ‘Developer Mode’, hover the cursor over the ‘question mark’ icon beside a field, and look for the row titled, ‘Field’",
      fr: "Source Odoo Learn (PDF Quote Builder) : entrez dans le « Mode développeur », passez le curseur sur l'icône « point d'interrogation » à côté d'un champ et recherchez la ligne intitulée « Champ »",
    },
  }),
  complexQ({
    id: "sal-072",
    module: "sales",
    text: {
      en: "What is the name of the tab on a quotation/sales order where the PDF Quote options can be found? (Odoo Learn — PDF Quote Builder)",
      fr: "Quel est le nom de l'onglet d'un devis/commande client où se trouvent les options de devis PDF ? (Odoo Learn — Générateur de devis PDF)",
    },
    correct: {
      en: "‘Quote Builder’",
      fr: "« Constructeur de devis »",
    },
    distractors: [
      { en: "‘PDF Options’", fr: "« Options PDF »" },
      { en: "‘PDF Builder’", fr: "« Constructeur de PDF »" },
      { en: "‘Quote Options’", fr: "« Options de devis »" },
    ],
    explanation: {
      en: "Source Odoo Learn (PDF Quote Builder): ‘Quote Builder’",
      fr: "Source Odoo Learn (PDF Quote Builder) : « Citation Builder »",
    },
  }),
  complexQ({
    id: "sal-073",
    module: "sales",
    text: {
      en: "On a product form, which smart button should be clicked to access the ‘Documents’ page for that product? (Odoo Learn — Product Documents)",
      fr: "Sur un formulaire de produit, sur quel bouton intelligent faut-il cliquer pour accéder à la page « Documents » de ce produit ? (Odoo Learn — Documents produits)",
    },
    correct: {
      en: "Documents",
      fr: "Documents",
    },
    distractors: [
      { en: "PDF", fr: "PDF" },
      { en: "Uploads", fr: "Téléchargements" },
      { en: "Documentation", fr: "Documentation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Documents): Documents",
      fr: "Source Odoo Learn (Documents produits) : Documents",
    },
  }),
  complexQ({
    id: "sal-074",
    module: "sales",
    text: {
      en: "What ‘Types’ of product documents does Odoo allow users to upload? (Odoo Learn — Product Documents)",
      fr: "Quels « types » de documents produits Odoo permet-il aux utilisateurs de télécharger ? (Odoo Learn — Documents produits)",
    },
    correct: {
      en: "‘File’ and ‘URL’",
      fr: "« Fichier » et « URL »",
    },
    distractors: [
      { en: "‘File’ and ‘Website’", fr: "« Fichier » et « Site Web »" },
      { en: "‘PDF’ and ‘URL’", fr: "« PDF » et « URL »" },
      { en: "‘Google Doc’ and ‘URL’", fr: "« Google Doc » et « URL »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Documents): ‘File’ and ‘URL’",
      fr: "Source Odoo Learn (Documents produits) : « Fichier » et « URL »",
    },
  }),
  complexQ({
    id: "sal-075",
    module: "sales",
    text: {
      en: "What are the various visibility options for product documents? (Odoo Learn — Product Documents)",
      fr: "Quelles sont les différentes options de visibilité des documents produits ? (Odoo Learn — Documents produits)",
    },
    correct: {
      en: "‘Hidden’, ‘On quote’, ‘On confirmed order’, and ‘Inside quote PDF’",
      fr: "« Masqué », « Sur devis », « Sur commande confirmée » et « Dans le devis PDF »",
    },
    distractors: [
      { en: "‘Invisible’, ‘On order’, ‘On payment’, and ‘Inside quote PDF’", fr: "« Invisible », « Sur commande », « Sur paiement » et « Devis intérieur PDF »" },
      { en: "‘Hidden’, ‘On sales order’, ‘On quotation’, and ‘Attached to PDF’", fr: "« Masqué », « Sur commande client », « Sur devis » et « Joint au PDF »" },
      { en: "‘Always’, ‘On quote’, ‘On sales order’, and ‘Beneath PDF’", fr: "« Toujours », « Sur devis », « Sur commande client » et « Sous PDF »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product Documents): ‘Hidden’, ‘On quote’, ‘On confirmed order’, and ‘Inside quote PDF’",
      fr: "Source Odoo Learn (Documents produits) : « Caché », « Sur devis », « Sur commande confirmée » et « Dans le devis PDF »",
    },
  }),
  complexQ({
    id: "sal-076",
    module: "sales",
    text: {
      en: "How can I offer additional products to my customers with a Quotation Template? (Odoo Learn — Online Quotation)",
      fr: "Comment puis-je proposer des produits supplémentaires à mes clients avec un modèle de devis ? (Odoo Learn — Devis en ligne)",
    },
    correct: {
      en: "Add products in the Optional Products tab of the Quotation Template form.",
      fr: "Ajoutez des produits dans l'onglet Produits facultatifs du formulaire Modèle de devis.",
    },
    distractors: [
      { en: "Manually send them an email.", fr: "Envoyez-leur manuellement un e-mail." },
      { en: "Call them.", fr: "Appelez-les." },
      { en: "Hope they come back to buy something else in the future.", fr: "J'espère qu'ils reviendront acheter autre chose à l'avenir." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online Quotation): Add products in the Optional Products tab of the Quotation Template form.",
      fr: "Source Odoo Learn (Devis en ligne) : Ajoutez des produits dans l'onglet Produits optionnels du formulaire Modèle de devis.",
    },
  }),
  complexQ({
    id: "sal-077",
    module: "sales",
    text: {
      en: "Can I use quotation templates in a multi-company environment? (Odoo Learn — Online Quotation)",
      fr: "Puis-je utiliser des modèles de devis dans un environnement multi-entreprises ? (Odoo Learn — Devis en ligne)",
    },
    correct: {
      en: "Yes.",
      fr: "Oui.",
    },
    distractors: [
      { en: "No, you can only use them for a single company.", fr: "Non, vous ne pouvez les utiliser que pour une seule entreprise." },
      { en: "Yes, but only if you’re the CEO.", fr: "Oui, mais seulement si vous êtes le PDG." },
      { en: "Odoo doesn’t offer quotation templates.", fr: "Odoo ne propose pas de modèles de devis." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online Quotation): Yes.",
      fr: "Source Odoo Learn (Citation en ligne) : Oui.",
    },
  }),
  complexQ({
    id: "sal-078",
    module: "sales",
    text: {
      en: "What application is required to use the Quotation Builder in Odoo? (Odoo Learn — Online Quotation)",
      fr: "Quelle application est requise pour utiliser le Quotation Builder dans Odoo ? (Odoo Learn — Devis en ligne)",
    },
    correct: {
      en: "Website.",
      fr: "Site web.",
    },
    distractors: [
      { en: "Mass Mailing.", fr: "Envoi de masse." },
      { en: "Events.", fr: "Événements." },
      { en: "Quotations.", fr: "Citations." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online Quotation): Website.",
      fr: "Source Odoo Learn (Citation en ligne) : Site Internet.",
    },
  }),
  complexQ({
    id: "sal-079",
    module: "sales",
    text: {
      en: "Which invoicing policy would you use to bill a customer based on the number of hours worked? (Odoo Learn — Invoicing Policies)",
      fr: "Quelle politique de facturation utiliseriez-vous pour facturer un client en fonction du nombre d'heures travaillées ? (Odoo Learn — Politiques de facturation)",
    },
    correct: {
      en: "Based on Timesheets.",
      fr: "Basé sur les feuilles de temps.",
    },
    distractors: [
      { en: "Based on Delivered Quantities (Manual).", fr: "Basé sur les quantités livrées (manuel)." },
      { en: "Based on Milestones.", fr: "Basé sur les jalons." },
      { en: "Based on Employees.", fr: "Basé sur les employés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing Policies): Based on Timesheets.",
      fr: "Source Odoo Learn (Politiques de facturation) : Basé sur des feuilles de temps.",
    },
  }),
  complexQ({
    id: "sal-080",
    module: "sales",
    text: {
      en: "What happens when the Automatic Invoice setting is enabled? (Odoo Learn — Invoicing Policies)",
      fr: "Que se passe-t-il lorsque le paramètre Facture automatique est activé ? (Odoo Learn — Politiques de facturation)",
    },
    correct: {
      en: "Odoo automatically creates an invoice when a customer confirms a payment in the online store.",
      fr: "Odoo crée automatiquement une facture lorsqu'un client confirme un paiement dans la boutique en ligne.",
    },
    distractors: [
      { en: "Odoo automatically creates an invoice when a salesperson confirms a sales order.", fr: "Odoo crée automatiquement une facture lorsqu'un vendeur confirme une commande client." },
      { en: "Odoo automatically creates an invoice when the delivered quantity is updated on a sales order.", fr: "Odoo crée automatiquement une facture lorsque la quantité livrée est mise à jour sur une commande client." },
      { en: "Odoo automatically creates an invoice when an employee confirms a delivery.", fr: "Odoo crée automatiquement une facture lorsqu'un employé confirme une livraison." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing Policies): Odoo automatically creates an invoice when a customer confirms a payment in the online store.",
      fr: "Source Odoo Learn (Politiques de facturation) : Odoo crée automatiquement une facture lorsqu'un client confirme un paiement dans la boutique en ligne.",
    },
  }),
  complexQ({
    id: "sal-081",
    module: "sales",
    text: {
      en: "Which of the following is true about the “Based on Milestones” invoicing policy? (Odoo Learn — Invoicing Policies)",
      fr: "Lequel des énoncés suivants est vrai concernant la politique de facturation « Basée sur des jalons » ? (Odoo Learn — Politiques de facturation)",
    },
    correct: {
      en: "It automatically updates the delivered quantity on the sales order based on milestones completed in the Project app.",
      fr: "Il met automatiquement à jour la quantité livrée sur la commande client en fonction des étapes franchies dans l'application Projet.",
    },
    distractors: [
      { en: "It requires you to manually input the number of milestones onto the invoice.", fr: "Cela vous oblige à saisir manuellement le nombre d’étapes sur la facture." },
      { en: "It automatically creates draft invoices based on milestones completed in the Project app.", fr: "Il crée automatiquement des projets de factures en fonction des étapes franchies dans l'application Projet." },
      { en: "You don’t need the Project app to invoice a customer with this policy.", fr: "Vous n’avez pas besoin de l’application Project pour facturer un client avec cette politique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Invoicing Policies): It automatically updates the delivered quantity on the sales order based on milestones completed in the Project app.",
      fr: "Source Odoo Learn (Politiques de facturation) : Il met automatiquement à jour la quantité livrée sur la commande client en fonction des étapes franchies dans l'application Projet.",
    },
  }),
  complexQ({
    id: "sal-082",
    module: "sales",
    text: {
      en: "After clicking a form button, while in ‘Edit’ mode, what field houses the ‘Create an Opportunity’ option? (Odoo Learn — Pipeline Management for a B2B Equipment Supplier)",
      fr: "Après avoir cliqué sur un bouton de formulaire, en mode « Modifier », quel champ contient l'option « Créer une opportunité » ? (Odoo Learn — Gestion de pipeline pour un fournisseur d'équipements B2B)",
    },
    correct: {
      en: "Action",
      fr: "Action",
    },
    distractors: [
      { en: "Create", fr: "Créer" },
      { en: "Lead/Opportunity", fr: "Piste/Opportunité" },
      { en: "Button Options", fr: "Options des boutons" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pipeline Management for a B2B Equipment Supplier): Action",
      fr: "Source Odoo Learn (Gestion de pipeline pour un fournisseur d'équipement B2B) : Action",
    },
  }),
  complexQ({
    id: "sal-083",
    module: "sales",
    text: {
      en: "What button must be clicked on an opportunity form to create a quotation for the customer to review? (Odoo Learn — Pipeline Management for a B2B Equipment Supplier)",
      fr: "Sur quel bouton faut-il cliquer sur un formulaire d'opportunité pour créer un devis que le client pourra examiner ? (Odoo Learn — Gestion de pipeline pour un fournisseur d'équipements B2B)",
    },
    correct: {
      en: "New Quotation",
      fr: "Nouveau devis",
    },
    distractors: [
      { en: "Send Quotation", fr: "Envoyer un devis" },
      { en: "Launch Quotation", fr: "Devis de lancement" },
      { en: "Create Quotation", fr: "Créer un devis" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pipeline Management for a B2B Equipment Supplier): New Quotation",
      fr: "Source Odoo Learn (Gestion de Pipeline pour un Fournisseur d'Equipement B2B) : Nouvelle Devis",
    },
  }),
  complexQ({
    id: "sal-084",
    module: "sales",
    text: {
      en: "What integrated application comes into play when creating and sending an invoice? (Odoo Learn — Pipeline Management for a B2B Equipment Supplier)",
      fr: "Quelle application intégrée entre en jeu lors de la création et de l’envoi d’une facture ? (Odoo Learn — Gestion de pipeline pour un fournisseur d'équipements B2B)",
    },
    correct: {
      en: "Accounting",
      fr: "Comptabilité",
    },
    distractors: [
      { en: "Finances", fr: "Finances" },
      { en: "Banking", fr: "Bancaire" },
      { en: "PoS", fr: "Point de vente" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pipeline Management for a B2B Equipment Supplier): Accounting",
      fr: "Source Odoo Learn (Gestion de pipeline pour un fournisseur d'équipement B2B) : Comptabilité",
    },
  }),
  complexQ({
    id: "sal-085",
    module: "sales",
    text: {
      en: "Which type of promotion program would you use to create one widely-distributed promotional code? (Odoo Learn — Promotion Basics & Discounts)",
      fr: "Quel type de programme promotionnel utiliseriez-vous pour créer un code promotionnel largement diffusé ? (Odoo Learn — Bases des promotions et réductions)",
    },
    correct: {
      en: "Discount Code",
      fr: "Code de réduction",
    },
    distractors: [
      { en: "Coupons", fr: "Coupons" },
      { en: "Promotions", fr: "Promotions" },
      { en: "Mass Distribution Promo", fr: "Promotion de distribution de masse" },
    ],
    explanation: {
      en: "Source Odoo Learn (Promotion Basics & Discounts): Discount Code",
      fr: "Source Odoo Learn (bases de la promotion et réductions) : code de réduction",
    },
  }),
  complexQ({
    id: "sal-086",
    module: "sales",
    text: {
      en: "How do you configure a promotion to be available on your online shop? (Odoo Learn — Promotion Basics & Discounts)",
      fr: "Comment configurer une promotion pour qu'elle soit disponible sur votre boutique en ligne ? (Odoo Learn — Bases des promotions et réductions)",
    },
    correct: {
      en: "Make it available on the Website app.",
      fr: "Rendez-le disponible sur l'application du site Web.",
    },
    distractors: [
      { en: "Activate ‘Online Promotions’ in the Sales settings.", fr: "Activez « Promotions en ligne » dans les paramètres de vente." },
      { en: "Activate ‘Internet Promo’ in Website settings.", fr: "Activez « Promo Internet » dans les paramètres du site Web." },
      { en: "Make it available on the Point of Sale app.", fr: "Rendez-le disponible sur l'application Point de Vente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Promotion Basics & Discounts): Make it available on the Website app.",
      fr: "Source Odoo Learn (bases de la promotion et réductions) : rendez-le disponible sur l'application du site Web.",
    },
  }),
  complexQ({
    id: "sal-087",
    module: "sales",
    text: {
      en: "How do you configure a promotion to never expire? (Odoo Learn — Promotion Basics & Discounts)",
      fr: "Comment configurer une promotion pour qu'elle n'expire jamais ? (Odoo Learn — Bases des promotions et réductions)",
    },
    correct: {
      en: "Leave the Validity field blank.",
      fr: "Laissez le champ Validité vide.",
    },
    distractors: [
      { en: "Set the Validity to today’s date.", fr: "Définissez la Validité sur la date du jour." },
      { en: "Set the Expiration Date to today’s date.", fr: "Définissez la date d’expiration sur la date d’aujourd’hui." },
      { en: "This is not possible with Odoo Sales.", fr: "Ce n'est pas possible avec Odoo Sales." },
    ],
    explanation: {
      en: "Source Odoo Learn (Promotion Basics & Discounts): Leave the Validity field blank.",
      fr: "Source Odoo Learn (bases de la promotion et réductions) : laissez le champ Validité vide.",
    },
  }),
  complexQ({
    id: "sal-088",
    module: "sales",
    text: {
      en: "What setting needs to be enabled for coupons to be used? (Odoo Learn — Coupons)",
      fr: "Quel paramètre doit être activé pour que les coupons soient utilisés ? (Odoo Learn — Coupons)",
    },
    correct: {
      en: "Promotions, Loyalty & Gift Card",
      fr: "Promotions, fidélité et carte cadeau",
    },
    distractors: [
      { en: "Loyalty Programs", fr: "Programmes de fidélité" },
      { en: "Discounts", fr: "Réductions" },
      { en: "Coupon Codes", fr: "Codes de réduction" },
    ],
    explanation: {
      en: "Source Odoo Learn (Coupons): Promotions, Loyalty & Gift Card",
      fr: "Source Odoo Learn (Coupons) : Promotions, Fidélité & Carte Cadeau",
    },
  }),
  complexQ({
    id: "sal-089",
    module: "sales",
    text: {
      en: "What does the limit usage option do? (Odoo Learn — Coupons)",
      fr: "À quoi sert l’option d’utilisation limitée ? (Odoo Learn — Coupons)",
    },
    correct: {
      en: "Limits the number of coupons individual customers can use.",
      fr: "Limite le nombre de coupons que les clients individuels peuvent utiliser.",
    },
    distractors: [
      { en: "Limits the number of coupons created.", fr: "Limite le nombre de coupons créés." },
      { en: "Limits the number of coupons distributed to all customers.", fr: "Limite le nombre de coupons distribués à tous les clients." },
      { en: "Limits the discount applied with the coupon.", fr: "Limite la réduction appliquée avec le coupon." },
    ],
    explanation: {
      en: "Source Odoo Learn (Coupons): Limits the number of coupons individual customers can use.",
      fr: "Source Odoo Learn (Coupons) : limite le nombre de coupons que les clients individuels peuvent utiliser.",
    },
  }),
  complexQ({
    id: "sal-090",
    module: "sales",
    text: {
      en: "Where can rules be set for when the coupon can be used? (Odoo Learn — Coupons)",
      fr: "Où peut-on définir des règles quant au moment où le coupon peut être utilisé ? (Odoo Learn — Coupons)",
    },
    correct: {
      en: "Conditional rules",
      fr: "Règles conditionnelles",
    },
    distractors: [
      { en: "Restrictions", fr: "Restrictions" },
      { en: "Usage categories", fr: "Catégories d'utilisation" },
      { en: "Discount settings", fr: "Paramètres de remise" },
    ],
    explanation: {
      en: "Source Odoo Learn (Coupons): Conditional rules",
      fr: "Source Odoo Learn (Coupons) : Règles conditionnelles",
    },
  }),
  complexQ({
    id: "sal-091",
    module: "sales",
    text: {
      en: "What does a Loyalty Program do? (Odoo Learn — Loyalty Programs)",
      fr: "A quoi sert un programme de fidélité ? (Odoo Learn — Programmes de fidélité)",
    },
    correct: {
      en: "Lets customers accumulate points from their purchases, which they can use on future orders.",
      fr: "Permet aux clients d'accumuler des points sur leurs achats, qu'ils pourront utiliser lors de futures commandes.",
    },
    distractors: [
      { en: "Lets customers earn portions of stock in the company, after purchasing a certain amount of products.", fr: "Permet aux clients de gagner des parts de stock dans l’entreprise après avoir acheté une certaine quantité de produits." },
      { en: "Lets customers change the color of any item they add to their order, if they spend a certain amount on a product.", fr: "Permet aux clients de changer la couleur de tout article qu'ils ajoutent à leur commande, s'ils dépensent un certain montant pour un produit." },
      { en: "Loyalty Programs don’t exist in Odoo.", fr: "Les programmes de fidélité n’existent pas dans Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loyalty Programs): Lets customers accumulate points from their purchases, which they can use on future orders.",
      fr: "Source Odoo Learn (Programmes de fidélité) : permet aux clients d'accumuler des points sur leurs achats, qu'ils pourront utiliser lors de commandes futures.",
    },
  }),
  complexQ({
    id: "sal-092",
    module: "sales",
    text: {
      en: "How can I make sure customers purchase a minimum dollar amount in order to accumulate points for that order? (Odoo Learn — Loyalty Programs)",
      fr: "Comment puis-je m'assurer que les clients achètent un montant minimum afin d'accumuler des points pour cette commande ? (Odoo Learn — Programmes de fidélité)",
    },
    correct: {
      en: "Under ‘Conditional rules’, set ‘Minimum Quantity’ to the desired minimum dollar amount for each order.",
      fr: "Sous « Règles conditionnelles », définissez « Quantité minimale » sur le montant minimum souhaité pour chaque commande.",
    },
    distractors: [
      { en: "Under each quotation, click into the ‘Rewards Tab’ and set the ‘Minimum Quantity’ to the desired minimum dollar amount.", fr: "Sous chaque devis, cliquez sur l’onglet « Récompenses » et définissez la « Quantité minimale » sur le montant minimum souhaité." },
      { en: "There is no way to set a minimum dollar amount – under the FCC, customers must be able to accumulate loyalty points on any and all orders, regardless of amount.", fr: "Il n’existe aucun moyen de fixer un montant minimum : en vertu de la FCC, les clients doivent pouvoir accumuler des points de fidélité sur toutes les commandes, quel que soit leur montant." },
      { en: "Under ‘Rewards’, set ‘Minimum Quantity’ to the desired minimum dollar amount for each order.", fr: "Sous « Récompenses », définissez « Quantité minimale » sur le montant minimum souhaité pour chaque commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loyalty Programs): Under ‘Conditional rules’, set ‘Minimum Quantity’ to the desired minimum dollar amount for each order.",
      fr: "Source Odoo Learn (Programmes de fidélité) : sous « Règles conditionnelles », définissez « Quantité minimale » sur le montant minimum souhaité pour chaque commande.",
    },
  }),
  complexQ({
    id: "sal-093",
    module: "sales",
    text: {
      en: "How do I apply a customer’s rewards to get a discount on an order? (Odoo Learn — Loyalty Programs)",
      fr: "Comment puis-je appliquer les récompenses d’un client pour obtenir une remise sur une commande ? (Odoo Learn — Programmes de fidélité)",
    },
    correct: {
      en: "In the Sales quotation, click on the ‘Rewards’ button above the total.",
      fr: "Dans le devis de vente, cliquez sur le bouton « Récompenses » au-dessus du total.",
    },
    distractors: [
      { en: "In the Sales quotation, click into the customer’s internal link, check their loyalty card balance, then manually apply the desired discount reward as a separate product line.", fr: "Dans le devis de vente, cliquez sur le lien interne du client, vérifiez le solde de sa carte de fidélité, puis appliquez manuellement la remise souhaitée en tant que ligne de produits distincte." },
      { en: "In the customer profile, click into the ‘Rewards’ tab and select the sales order to which the rewards should be applied.", fr: "Dans le profil client, cliquez sur l'onglet « Récompenses » et sélectionnez la commande client à laquelle les récompenses doivent être appliquées." },
      { en: "In the customer profile, select the sales order from the ‘Sales Order’ tab, and apply rewards with the ‘Reward’ button.", fr: "Dans le profil client, sélectionnez la commande client dans l'onglet « Commande client » et appliquez les récompenses avec le bouton « Récompense »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loyalty Programs): In the Sales quotation, click on the ‘Rewards’ button above the total.",
      fr: "Source Odoo Learn (Programmes de fidélité) : Dans le devis de vente, cliquez sur le bouton « Récompenses » au-dessus du total.",
    },
  }),
  complexQ({
    id: "sal-094",
    module: "sales",
    text: {
      en: "What setting needs to be enabled for gift card programs to be made? (Odoo Learn — Gift Card Programs)",
      fr: "Quel paramètre doit être activé pour que les programmes de cartes cadeaux soient créés ? (Odoo Learn — Programmes de cartes-cadeaux)",
    },
    correct: {
      en: "Promotions, Loyalty & Gift Card",
      fr: "Promotions, fidélité et carte cadeau",
    },
    distractors: [
      { en: "Discounts", fr: "Réductions" },
      { en: "Gift Card Programs", fr: "Programmes de cartes-cadeaux" },
      { en: "Loyalty Programs", fr: "Programmes de fidélité" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift Card Programs): Promotions, Loyalty & Gift Card",
      fr: "Source Odoo Learn (Programmes de cartes-cadeaux) : promotions, fidélité et carte-cadeau",
    },
  }),
  complexQ({
    id: "sal-095",
    module: "sales",
    text: {
      en: "What happens when I choose 'Selected Customers' during gift card generaton? (Odoo Learn — Gift Card Programs)",
      fr: "Que se passe-t-il lorsque je choisis « Clients sélectionnés » lors de la génération de la carte cadeau ? (Odoo Learn — Programmes de cartes-cadeaux)",
    },
    correct: {
      en: "Odoo locks the Quantity to generate field to match the number of selected customers",
      fr: "Odoo verrouille le champ Quantité à générer pour qu'il corresponde au nombre de clients sélectionnés",
    },
    distractors: [
      { en: "I can still choose any quantity of gift cards I like.", fr: "Je peux toujours choisir la quantité de cartes-cadeaux que je souhaite." },
      { en: "Gift cards are sent to the anonymous customers.", fr: "Les cartes cadeaux sont envoyées aux clients anonymes." },
      { en: "The 'Generate Gift Cards' button is hidden until I add a PoS outlet.", fr: "Le bouton « Générer des cartes-cadeaux » est masqué jusqu'à ce que j'ajoute un point de vente PoS." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift Card Programs): Odoo locks the Quantity to generate field to match the number of selected customers",
      fr: "Source Odoo Learn (Programmes de cartes cadeaux) : Odoo verrouille le champ Quantité à générer pour qu'il corresponde au nombre de clients sélectionnés",
    },
  }),
  complexQ({
    id: "sal-096",
    module: "sales",
    text: {
      en: "Where can the expiration date for a gift card be set? (Odoo Learn — Gift Card Programs)",
      fr: "Où peut-on fixer la date d'expiration d'une carte cadeau ? (Odoo Learn — Programmes de cartes-cadeaux)",
    },
    correct: {
      en: "The ‘Valid Until’ field",
      fr: "Le champ « Valide jusqu'à »",
    },
    distractors: [
      { en: "The ‘Expiration’ field", fr: "Le champ « Expiration »" },
      { en: "The ‘Expires on’ field", fr: "Le champ « Expire le »" },
      { en: "Gift cards do not expire", fr: "Les cartes cadeaux n'expirent pas" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gift Card Programs): The ‘Valid Until’ field",
      fr: "Source Odoo Learn (Programmes de cartes-cadeaux) : Le champ « Valide jusqu'à »",
    },
  }),
  complexQ({
    id: "sal-097",
    module: "sales",
    text: {
      en: "What is Odoo’s tax localization package based on? (Odoo Learn — Sales Tax: Part 1)",
      fr: "Sur quoi est basé le package de localisation fiscale d’Odoo ? (Odoo Learn — Taxe de vente : partie 1)",
    },
    correct: {
      en: "The country that is selected as the company’s country when you first create an Odoo database.",
      fr: "Le pays sélectionné comme pays de l’entreprise lors de la première création d’une base de données Odoo.",
    },
    distractors: [
      { en: "The country that the individual user is currently in.", fr: "Le pays dans lequel se trouve actuellement l’utilisateur individuel." },
      { en: "The database administrator’s home country.", fr: "Pays d’origine de l’administrateur de la base de données." },
      { en: "There is no such thing as tax localization with Odoo.", fr: "La localisation fiscale n’existe pas avec Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 1): The country that is selected as the company’s country when you first create an Odoo database.",
      fr: "Source Odoo Learn (Taxe de vente : Partie 1) : Le pays sélectionné comme pays de l'entreprise lorsque vous créez pour la première fois une base de données Odoo.",
    },
  }),
  complexQ({
    id: "sal-098",
    module: "sales",
    text: {
      en: "How is the “Percentage of Price” tax computed? (Odoo Learn — Sales Tax: Part 1)",
      fr: "Comment est calculée la taxe « Pourcentage du prix » ? (Odoo Learn — Taxe de vente : partie 1)",
    },
    correct: {
      en: "By multiplying a percentage amount by the sales price of the product.",
      fr: "En multipliant un pourcentage par le prix de vente du produit.",
    },
    distractors: [
      { en: "By multiplying a percentage amount by the total price of the product including tax.", fr: "En multipliant un montant en pourcentage par le prix total du produit TTC." },
      { en: "By multiplying a percentage amount by a fixed price of the average product.", fr: "En multipliant un pourcentage par un prix fixe du produit moyen." },
      { en: "By multiplying the cost of a product from a vendor by the amount of days it stays in the warehouse.", fr: "En multipliant le coût d'un produit d'un fournisseur par le nombre de jours où il reste dans l'entrepôt." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 1): By multiplying a percentage amount by the sales price of the product.",
      fr: "Source Odoo Learn (Taxe de vente : Partie 1) : En multipliant un montant en pourcentage par le prix de vente du produit.",
    },
  }),
  complexQ({
    id: "sal-099",
    module: "sales",
    text: {
      en: "If the ‘Python Code’ tax computation option isn’t available, what must be done? (Odoo Learn — Sales Tax: Part 1)",
      fr: "Si l’option de calcul de la taxe « Code Python » n’est pas disponible, que faut-il faire ? (Odoo Learn — Taxe de vente : partie 1)",
    },
    correct: {
      en: "The ‘Define Taxes as Python Code’ module must be installed from the ‘Apps’ application",
      fr: "Le module « Définir les taxes en tant que code Python » doit être installé depuis l'application « Apps »",
    },
    distractors: [
      { en: "You must be granted “Developer Rights” by the administrator of the database", fr: "Vous devez bénéficier des « Droits de développeur » de la part de l'administrateur de la base de données." },
      { en: "You must change your login password to \"Python_Coder\"", fr: "Vous devez changer votre mot de passe de connexion en \"Python_Coder\"" },
      { en: "‘Python Code’ is only accessible on LINUX operating systems", fr: "« Python Code » n'est accessible que sur les systèmes d'exploitation LINUX" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 1): The ‘Define Taxes as Python Code’ module must be installed from the ‘Apps’ application",
      fr: "Source Odoo Learn (Sales Tax: Part 1) : Le module « Définir les taxes en tant que code Python » doit être installé depuis l'application « Apps »",
    },
  }),
  complexQ({
    id: "sal-100",
    module: "sales",
    text: {
      en: "Which of the following is NOT a way to apply a fiscal position to a customer? (Odoo Learn — Sales Tax: Part 2)",
      fr: "Lequel des énoncés suivants n'est PAS un moyen d'appliquer une situation fiscale à un client ? (Odoo Learn — Taxe de vente : partie 2)",
    },
    correct: {
      en: "Specify a customer on the fiscal position form.",
      fr: "Spécifiez un client sur le formulaire de situation fiscale.",
    },
    distractors: [
      { en: "Specify a fiscal position on the customer’s contact form.", fr: "Précisez une situation fiscale sur le formulaire de contact du client." },
      { en: "Select “Detect Automatically” on the fiscal position form.", fr: "Sélectionnez « Détecter automatiquement » sur le formulaire de situation fiscale." },
      { en: "All the above options are accurate ways to apply a fiscal position to a customer.", fr: "Toutes les options ci-dessus constituent des moyens précis d’appliquer une situation fiscale à un client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 2): Specify a customer on the fiscal position form.",
      fr: "Source Odoo Learn (Taxe de vente : Partie 2) : Précisez un client sur le formulaire de situation fiscale.",
    },
  }),
  complexQ({
    id: "sal-101",
    module: "sales",
    text: {
      en: "What happens if an option is chosen in the ‘Tax Scope’ field on a tax form? (Odoo Learn — Sales Tax: Part 2)",
      fr: "Que se passe-t-il si une option est choisie dans le champ « Périmètre fiscal » sur un formulaire fiscal ? (Odoo Learn — Taxe de vente : partie 2)",
    },
    correct: {
      en: "It will restrict the configured tax to *only* be used on either ‘Goods’ or ‘Services’",
      fr: "Cela limitera la taxe configurée à *uniquement* être utilisée sur les « biens » ou les « services »",
    },
    distractors: [
      { en: "The customer will be required to pay double the taxes on their order", fr: "Le client devra payer le double des taxes sur sa commande" },
      { en: "This is not an option on a tax form", fr: "Ce n'est pas une option sur un formulaire fiscal" },
      { en: "It will restrict the configured tax to *only* be used in a certain country", fr: "Cela limitera la taxe configurée à *uniquement* être utilisée dans un certain pays" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 2): It will restrict the configured tax to *only* be used on either ‘Goods’ or ‘Services’",
      fr: "Source Odoo Learn (Taxe de vente : Partie 2) : elle limitera la taxe configurée à *uniquement* être utilisée sur les « Biens » ou les « Services »",
    },
  }),
  complexQ({
    id: "sal-102",
    module: "sales",
    text: {
      en: "On tax forms, what is a ‘Tax Grids’ column typically used for? (Odoo Learn — Sales Tax: Part 2)",
      fr: "Sur les formulaires fiscaux, à quoi sert généralement une colonne « Grilles fiscales » ? (Odoo Learn — Taxe de vente : partie 2)",
    },
    correct: {
      en: "To generate tax reports automatically – according to the country’s specific regulations.",
      fr: "Générer automatiquement des déclarations fiscales – selon les réglementations spécifiques du pays.",
    },
    distractors: [
      { en: "To generate tax reports manually – according to the country’s specific regulations.", fr: "Pour générer des déclarations fiscales manuellement – ​​selon les réglementations spécifiques du pays." },
      { en: "To organize all the company’s taxes into a grid-like format.", fr: "Organiser tous les impôts de l’entreprise sous forme de grille." },
      { en: "This option does not exist in Odoo.", fr: "Cette option n’existe pas dans Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 2): To generate tax reports automatically – according to the country’s specific regulations.",
      fr: "Source Odoo Learn (Taxe de vente : Partie 2) : Pour générer automatiquement des rapports fiscaux – selon les réglementations spécifiques du pays.",
    },
  }),
  complexQ({
    id: "sal-103",
    module: "sales",
    text: {
      en: "If there is no custom ‘Customer Tax’ applied to a product form, what appears in the ‘Tax’ column of a quotation when a product is added? (Odoo Learn — Sales Tax: Part 3)",
      fr: "Si aucune « taxe client » personnalisée n’est appliquée à un formulaire de produit, qu’est-ce qui apparaît dans la colonne « Taxe » d’un devis lorsqu’un produit est ajouté ? (Odoo Learn — Taxe de vente : partie 3)",
    },
    correct: {
      en: "Default Tax",
      fr: "Taxe par défaut",
    },
    distractors: [
      { en: "Standard Tax", fr: "Taxe standard" },
      { en: "Regular Tax", fr: "Taxe ordinaire" },
      { en: "Nothing", fr: "Rien" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 3): Default Tax",
      fr: "Source Odoo Learn (Taxe de vente : Partie 3) : Taxe par défaut",
    },
  }),
  complexQ({
    id: "sal-104",
    module: "sales",
    text: {
      en: "How can a tax be removed from a quotation/sales order? (Odoo Learn — Sales Tax: Part 3)",
      fr: "Comment puis-je supprimer une taxe d’un devis/commande client ? (Odoo Learn — Taxe de vente : partie 3)",
    },
    correct: {
      en: "Click the ‘X’ next to the listed tax.",
      fr: "Cliquez sur le « X » à côté de la taxe indiquée.",
    },
    distractors: [
      { en: "Click the ‘Trash’ icon next to the listed tax.", fr: "Cliquez sur l'icône « Corbeille » à côté de la taxe indiquée." },
      { en: "Click ‘Remove’ next to the listed tax.", fr: "Cliquez sur « Supprimer » à côté de la taxe indiquée." },
      { en: "Click ‘New’ next to the listed tax.", fr: "Cliquez sur « Nouveau » à côté de la taxe indiquée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 3): Click the ‘X’ next to the listed tax.",
      fr: "Source Odoo Learn (Taxe de vente : Partie 3) : Cliquez sur le « X » à côté de la taxe indiquée.",
    },
  }),
  complexQ({
    id: "sal-105",
    module: "sales",
    text: {
      en: "Where can the customer find the applied tax on their quotation/sales order? (Odoo Learn — Sales Tax: Part 3)",
      fr: "Où le client peut-il trouver la taxe appliquée sur son devis/commande client ? (Odoo Learn — Taxe de vente : partie 3)",
    },
    correct: {
      en: "In the ‘Pricing’ section.",
      fr: "Dans la rubrique « Tarifs ».",
    },
    distractors: [
      { en: "In the ‘Taxes’ section.", fr: "Dans la rubrique « Impôts »." },
      { en: "In the ‘Overview’ section.", fr: "Dans la section « Aperçu »." },
      { en: "This information is not visible to the customer.", fr: "Ces informations ne sont pas visibles par le client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Tax: Part 3): In the ‘Pricing’ section.",
      fr: "Source Odoo Learn (Taxe de vente : Partie 3) : Dans la section « Tarification ».",
    },
  }),
  complexQ({
    id: "sal-106",
    module: "sales",
    text: {
      en: "Which of the following is NOT a delivery method supported by Odoo? (Odoo Learn — Delivery Prices)",
      fr: "Lequel des éléments suivants n'est PAS un mode de livraison pris en charge par Odoo ? (Odoo Learn — Tarifs de livraison)",
    },
    correct: {
      en: "Pickup at the post office.",
      fr: "Retrait au bureau de poste.",
    },
    distractors: [
      { en: "Fixed price.", fr: "Prix ​​fixe." },
      { en: "Local postal services.", fr: "Services postaux locaux." },
      { en: "Pickup in store", fr: "Retrait en magasin" },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery Prices): Pickup at the post office.",
      fr: "Source Odoo Learn (Tarifs de livraison) : Retrait en bureau de poste.",
    },
  }),
  complexQ({
    id: "sal-107",
    module: "sales",
    text: {
      en: "Where do you configure the name of the delivery, as it appears on a sales order? (Odoo Learn — Delivery Prices)",
      fr: "Où paramétrer le nom de la livraison, tel qu'il apparaît sur une commande client ? (Odoo Learn — Tarifs de livraison)",
    },
    correct: {
      en: "Configuration > Shipping Methods > Delivery Product.",
      fr: "Configuration > Modes d'expédition > Produit de livraison.",
    },
    distractors: [
      { en: "Configuration > Shipping Methods > Provider.", fr: "Configuration > Méthodes d'expédition > Fournisseur." },
      { en: "Configuration > Shipping Methods > Description.", fr: "Configuration > Modes d'expédition > Description." },
      { en: "Configuration > Quotation Templates > Delivery.", fr: "Configuration > Modèles de devis > Livraison." },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery Prices): Configuration > Shipping Methods > Delivery Product.",
      fr: "Source Odoo Learn (Prix de livraison) : Configuration > Modes d'expédition > Produit de livraison.",
    },
  }),
  complexQ({
    id: "sal-108",
    module: "sales",
    text: {
      en: "In order to create a delivery rule based on weight, which of the following must also be configured? (Odoo Learn — Delivery Prices)",
      fr: "Afin de créer une règle de livraison basée sur le poids, lesquels des éléments suivants doivent également être configurés ? (Odoo Learn — Tarifs de livraison)",
    },
    correct: {
      en: "The weight of the product on the product form.",
      fr: "Le poids du produit sur la fiche produit.",
    },
    distractors: [
      { en: "The weight of the product on the shipping method form.", fr: "Le poids du produit sur le formulaire de mode d'expédition." },
      { en: "The weight *and* volume of the product on the product form.", fr: "Le poids *et* le volume du produit sur la fiche produit." },
      { en: "The weight of the delivery package on the shipping method form.", fr: "Le poids du colis livré sur le formulaire de mode d'expédition." },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery Prices): The weight of the product on the product form.",
      fr: "Source Odoo Learn (Prix de livraison) : Le poids du produit sur la fiche produit.",
    },
  }),
  complexQ({
    id: "sal-109",
    module: "sales",
    text: {
      en: "By default, what is the ‘Customer Lead Time’ field set to on a product form? (Odoo Learn — Delivery Lead Times)",
      fr: "Par défaut, à quoi correspond le champ « Délai de livraison client » sur un formulaire de produit ? (Odoo Learn — Délais de livraison)",
    },
    correct: {
      en: "0",
      fr: "0",
    },
    distractors: [
      { en: "1", fr: "1" },
      { en: "2", fr: "2" },
      { en: "5", fr: "5" },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery Lead Times): 0",
      fr: "Source Odoo Learn (Délai de livraison) : 0",
    },
  }),
  complexQ({
    id: "sal-110",
    module: "sales",
    text: {
      en: "Where can you find the ‘Delivery Date’ field on a Sales order? (Odoo Learn — Delivery Lead Times)",
      fr: "Où trouver le champ « Date de livraison » sur une commande client ? (Odoo Learn — Délais de livraison)",
    },
    correct: {
      en: "Under the ‘Other Info’ tab, in the ‘Delivery’ section",
      fr: "Sous l'onglet « Autres informations », dans la section « Livraison »",
    },
    distractors: [
      { en: "Under the ‘General Information’ tab, in the ‘Other Info’ section", fr: "Sous l'onglet « Informations générales », dans la section « Autres informations »" },
      { en: "Under the ‘Delivery’ tab, in the ‘Other Info’ section", fr: "Sous l'onglet « Livraison », dans la section « Autres informations »" },
      { en: "Under the ‘General Information’ tab, in the ‘Date’ section", fr: "Sous l'onglet « Informations générales », dans la section « Date »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery Lead Times): Under the ‘Other Info’ tab, in the ‘Delivery’ section",
      fr: "Source Odoo Learn (Délai de livraison) : Sous l'onglet « Autres informations », dans la section « Livraison »",
    },
  }),
  complexQ({
    id: "sal-111",
    module: "sales",
    text: {
      en: "To ensure an extra layer of security to lead times, what setting should be activated in the Inventory application? (Odoo Learn — Delivery Lead Times)",
      fr: "Pour garantir une couche de sécurité supplémentaire aux délais de livraison, quel paramètre doit être activé dans l'application Inventaire ? (Odoo Learn — Délais de livraison)",
    },
    correct: {
      en: "Security Lead Time for Sales",
      fr: "Délai de sécurité pour les ventes",
    },
    distractors: [
      { en: "Security Lead Time for Products", fr: "Délai de sécurité pour les produits" },
      { en: "Security Lead Time for Customers", fr: "Délai de sécurité pour les clients" },
      { en: "Security Lead Time for Warehouses", fr: "Délai de sécurité pour les entrepôts" },
    ],
    explanation: {
      en: "Source Odoo Learn (Delivery Lead Times): Security Lead Time for Sales",
      fr: "Source Odoo Learn (Délai de livraison) : Délai de sécurité pour les ventes",
    },
  }),
  complexQ({
    id: "sal-112",
    module: "sales",
    text: {
      en: "How do you activate the ‘Dropshipping’ feature in Odoo? (Odoo Learn — Dropshipping)",
      fr: "Comment activer la fonctionnalité « Dropshipping » dans Odoo ? (Odoo Learn — Livraison directe)",
    },
    correct: {
      en: "Purchase > Configuration > Settings > Activate ‘Dropshipping’ > Save",
      fr: "Achat > ​​Configuration > Paramètres > Activer « Dropshipping » > Enregistrer",
    },
    distractors: [
      { en: "Sales > Configuration > Settings > Activate ‘Dropshipping > Save", fr: "Ventes > Configuration > Paramètres > Activer « Dropshipping > Enregistrer" },
      { en: "Inventory > Configuration > Settings > Activate ‘Dropshipping’ > Save", fr: "Inventaire > Configuration > Paramètres > Activer « Dropshipping » > Enregistrer" },
      { en: "Manufacturing > Configuration > Settings > Activate ‘Dropshipping’ > Save", fr: "Fabrication > Configuration > Paramètres > Activer « Dropshipping » > Enregistrer" },
    ],
    explanation: {
      en: "Source Odoo Learn (Dropshipping): Purchase > Configuration > Settings > Activate ‘Dropshipping’ > Save",
      fr: "Source Odoo Learn (Dropshipping) : Achat > ​​Configuration > Paramètres > Activer « Dropshipping » > Enregistrer",
    },
  }),
  complexQ({
    id: "sal-113",
    module: "sales",
    text: {
      en: "What two things **must** be configured on the product form in order for Dropshipping to work? (Odoo Learn — Dropshipping)",
      fr: "Quelles sont les deux éléments **doivent** être configurés sur le formulaire produit pour que Dropshipping fonctionne ? (Odoo Learn — Livraison directe)",
    },
    correct: {
      en: "Enable the ‘Dropship’ route (in the Inventory tab), and set up at least one vendor (in the Purchase tab).",
      fr: "Activez l'itinéraire « Dropship » (dans l'onglet Inventaire) et configurez au moins un fournisseur (dans l'onglet Achat).",
    },
    distractors: [
      { en: "Enable the ‘Dropship’ route (in the Inventory tab), and set the product price to $0.", fr: "Activez l'itinéraire « Dropship » (dans l'onglet Inventaire) et définissez le prix du produit sur 0 $." },
      { en: "Set up at least one vendor (in the Purchase tab), and enable the ‘Vendor Responsibility’ option (in the Inventory tab).", fr: "Configurez au moins un fournisseur (dans l'onglet Achat) et activez l'option « Responsabilité du fournisseur » (dans l'onglet Inventaire)." },
      { en: "Nothing needs to be done. Dropshipping happens automatically.", fr: "Il n'y a rien à faire. Le dropshipping se fait automatiquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Dropshipping): Enable the ‘Dropship’ route (in the Inventory tab), and set up at least one vendor (in the Purchase tab).",
      fr: "Source Odoo Learn (Dropshipping) : activez l'itinéraire « Dropship » (dans l'onglet Inventaire) et configurez au moins un fournisseur (dans l'onglet Achat).",
    },
  }),
  complexQ({
    id: "sal-114",
    module: "sales",
    text: {
      en: "If a product has multiple vendors, how will Odoo operate when Dropshipping is being used? (Odoo Learn — Dropshipping)",
      fr: "Si un produit a plusieurs fournisseurs, comment Odoo fonctionnera-t-il lorsque Dropshipping sera utilisé ? (Odoo Learn — Livraison directe)",
    },
    correct: {
      en: "Odoo will go with the vendor that is first on the list on the product form (in the Purchase tab).",
      fr: "Odoo choisira le fournisseur qui figure en premier sur la liste sur le formulaire de produit (dans l'onglet Achat).",
    },
    distractors: [
      { en: "Odoo will go with the vendor that provides the product for the least amount of money.", fr: "Odoo choisira le fournisseur qui fournit le produit au prix le plus bas." },
      { en: "Odoo will go with the vendor that is last on the list on the product form (in the Purchase tab).", fr: "Odoo choisira le fournisseur qui figure en dernier sur la liste sur le formulaire produit (dans l'onglet Achat)." },
      { en: "Odoo will go with the vendor that provides the product for the most amount of money.", fr: "Odoo choisira le fournisseur qui fournit le produit pour le montant le plus élevé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Dropshipping): Odoo will go with the vendor that is first on the list on the product form (in the Purchase tab).",
      fr: "Source Odoo Learn (Dropshipping) : Odoo ira avec le fournisseur qui figure en premier sur la liste sur le formulaire produit (dans l'onglet Achat).",
    },
  }),
  complexQ({
    id: "sal-115",
    module: "sales",
    text: {
      en: "In what field can different customer countries be added on a pricelist form? (Odoo Learn — Pricelists: Multiple Prices Per Product)",
      fr: "Dans quel domaine différents pays clients peuvent-ils être ajoutés sur un formulaire de liste de prix ? (Odoo Learn — Listes de prix : plusieurs prix par produit)",
    },
    correct: {
      en: "Country Groups",
      fr: "Groupes de pays",
    },
    distractors: [
      { en: "Country", fr: "Pays" },
      { en: "Countries", fr: "Pays" },
      { en: "Customer Countries", fr: "Pays clients" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricelists: Multiple Prices Per Product): Country Groups",
      fr: "Source Odoo Learn (Listes de prix : prix multiples par produit) : Groupes de pays",
    },
  }),
  complexQ({
    id: "sal-116",
    module: "sales",
    text: {
      en: "How many price rules can be added to a pricelist? (Odoo Learn — Pricelists: Multiple Prices Per Product)",
      fr: "Combien de règles de prix peuvent être ajoutées à une liste de prix ? (Odoo Learn — Listes de prix : plusieurs prix par produit)",
    },
    correct: {
      en: "No limit",
      fr: "Aucune limite",
    },
    distractors: [
      { en: "One", fr: "Un" },
      { en: "Two", fr: "Deux" },
      { en: "Three", fr: "Trois" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricelists: Multiple Prices Per Product): No limit",
      fr: "Source Odoo Learn (Listes de prix : prix multiples par produit) : aucune limite",
    },
  }),
  complexQ({
    id: "sal-117",
    module: "sales",
    text: {
      en: "If enabled, what does the ‘Selectable’ option on a pricelist form do? (Odoo Learn — Pricelists: Multiple Prices Per Product)",
      fr: "Si elle est activée, à quoi sert l'option « Sélectionnable » sur un formulaire de liste de prix ? (Odoo Learn — Listes de prix : plusieurs prix par produit)",
    },
    correct: {
      en: "Makes the pricelist viewable and selectable for online customers",
      fr: "Rend la liste de prix visible et sélectionnable pour les clients en ligne",
    },
    distractors: [
      { en: "Makes the item selectable for online customers to add to their cart", fr: "Rend l'article sélectionnable pour que les clients en ligne l'ajoutent à leur panier" },
      { en: "Allows the customer to add multiple items to their online order", fr: "Permet au client d'ajouter plusieurs articles à sa commande en ligne" },
      { en: "There is no ‘Selectable’ option on a pricelist form", fr: "Il n'y a pas d'option « Sélectionnable » sur un formulaire de liste de prix" },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricelists: Multiple Prices Per Product): Makes the pricelist viewable and selectable for online customers",
      fr: "Source Odoo Learn (Listes de prix : prix multiples par produit) : rend la liste de prix visible et sélectionnable pour les clients en ligne",
    },
  }),
  complexQ({
    id: "sal-118",
    module: "sales",
    text: {
      en: "What does activating the “Discounts” and “Margins” settings do? (Odoo Learn — Pricelists - Discounts and Margins)",
      fr: "À quoi sert l’activation des paramètres « Remises » et « Marges » ? (Odoo Learn — Listes de prix - Remises et marges)",
    },
    correct: {
      en: "Allows you to show discounts and margins on sales orders and quotations.",
      fr: "Vous permet d’afficher les remises et les marges sur les commandes clients et les devis.",
    },
    distractors: [
      { en: "Allows you to spend less on products purchased from vendors.", fr: "Vous permet de dépenser moins sur les produits achetés auprès des fournisseurs." },
      { en: "Allows you to use discounts and margins on Pricelists.", fr: "Vous permet d'utiliser des remises et des marges sur les listes de prix." },
      { en: "Allows you to show discounts and margins on sales orders only.", fr: "Vous permet d'afficher les remises et les marges sur les commandes clients uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricelists - Discounts and Margins): Allows you to show discounts and margins on sales orders and quotations.",
      fr: "Source Odoo Learn (Listes de prix - Remises et marges) : Vous permet d'afficher les remises et les marges sur les commandes clients et les devis.",
    },
  }),
  complexQ({
    id: "sal-119",
    module: "sales",
    text: {
      en: "How do you configure a Pricelist Rule, so prices end in $0.99? (Odoo Learn — Pricelists - Discounts and Margins)",
      fr: "Comment configurer une règle de liste de prix pour que les prix se terminent par 0,99 $ ? (Odoo Learn — Listes de prix - Remises et marges)",
    },
    correct: {
      en: "Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01.",
      fr: "Calcul : Formule > Méthode d'arrondi : 1 > Frais supplémentaires : -0,01 $.",
    },
    distractors: [
      { en: "Computation: Discount > Rounding Method: 0.01 > Extra Fee: $1.", fr: "Calcul : Remise > Méthode d'arrondi : 0,01 > Frais supplémentaires : 1 $." },
      { en: "Computation: Fixed Price > Discount: 1%", fr: "Calcul : Prix Fixe > Remise : 1%" },
      { en: "This is not possible in Odoo.", fr: "Ce n’est pas possible dans Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricelists - Discounts and Margins): Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01.",
      fr: "Source Odoo Learn (Listes de prix - Remises et marges) : Calcul : Formule > Méthode d'arrondi : 1 > Frais supplémentaires : -0,01 $.",
    },
  }),
  complexQ({
    id: "sal-120",
    module: "sales",
    text: {
      en: "What is the profit margin? (Odoo Learn — Pricelists - Discounts and Margins)",
      fr: "Quelle est la marge bénéficiaire ? (Odoo Learn — Listes de prix - Remises et marges)",
    },
    correct: {
      en: "The difference between the cost and the sales price of a product.",
      fr: "La différence entre le coût et le prix de vente d'un produit.",
    },
    distractors: [
      { en: "The difference between the sales price and the discounted price of a product.", fr: "La différence entre le prix de vente et le prix réduit d'un produit." },
      { en: "The difference between the unit price and the final price of a product.", fr: "La différence entre le prix unitaire et le prix final d'un produit." },
      { en: "The difference between the customer’s annual income and their shopping budget.", fr: "La différence entre le revenu annuel du client et son budget shopping." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricelists - Discounts and Margins): The difference between the cost and the sales price of a product.",
      fr: "Source Odoo Learn (Listes de prix - Remises et marges) : La différence entre le coût et le prix de vente d'un produit.",
    },
  }),
  complexQ({
    id: "sal-121",
    module: "sales",
    text: {
      en: "Who receives commission plans granted to a 'Sales Team'? (Odoo Learn — Commission Plans)",
      fr: "Qui bénéficie des plans de commission accordés à une « équipe commerciale » ? (Odoo Learn — Plans de commissions)",
    },
    correct: {
      en: "Managers of the sales team.",
      fr: "Responsables de l'équipe commerciale.",
    },
    distractors: [
      { en: "Individual salespeople within the team.", fr: "Vendeurs individuels au sein de l'équipe." },
      { en: "Customers associated with the sales team.", fr: "Clients associés à l'équipe commerciale." },
      { en: "External partners collaborating with the team.", fr: "Partenaires externes collaborant avec l'équipe." },
    ],
    explanation: {
      en: "Source Odoo Learn (Commission Plans): Managers of the sales team.",
      fr: "Source Odoo Learn (Plans de Commissions) : Responsables de l'équipe commerciale.",
    },
  }),
  complexQ({
    id: "sal-122",
    module: "sales",
    text: {
      en: "What does selecting ‘Targets’ instead of ‘Achievements’ mean for a commission plan? (Odoo Learn — Commission Plans)",
      fr: "Que signifie la sélection de « Objectifs » au lieu de « Réalisations » pour un plan de commission ? (Odoo Learn — Plans de commissions)",
    },
    correct: {
      en: "Salespeople earn commissions based on how much of their target they reach.",
      fr: "Les vendeurs gagnent des commissions en fonction de la part de leur objectif qu’ils atteignent.",
    },
    distractors: [
      { en: "Salespeople earn commissions based on a flat percentage of sales.", fr: "Les vendeurs gagnent des commissions basées sur un pourcentage fixe des ventes." },
      { en: "Salespeople receive a fixed commission regardless of sales performance.", fr: "Les vendeurs reçoivent une commission fixe quelle que soit la performance commerciale." },
      { en: "The commission is only awarded at the end of the year.", fr: "La commission n'est attribuée qu'en fin d'année." },
    ],
    explanation: {
      en: "Source Odoo Learn (Commission Plans): Salespeople earn commissions based on how much of their target they reach.",
      fr: "Source Odoo Learn (Plans de commission) : les vendeurs gagnent des commissions en fonction de la part de leur objectif qu'ils atteignent.",
    },
  }),
  complexQ({
    id: "sal-123",
    module: "sales",
    text: {
      en: "What happens if a salesperson reaches 150% of their target in the commission plan? (Odoo Learn — Commission Plans)",
      fr: "Que se passe-t-il si un vendeur atteint 150 % de son objectif dans le plan de commission ? (Odoo Learn — Plans de commissions)",
    },
    correct: {
      en: "They earn a higher commission tier, as specified in the plan.",
      fr: "Ils gagnent un niveau de commission plus élevé, comme spécifié dans le plan.",
    },
    distractors: [
      { en: "They receive no additional commission beyond 100% of the target.", fr: "Ils ne perçoivent aucune commission supplémentaire au-delà de 100 % de l'objectif." },
      { en: "Their commission is reduced to encourage fair competition.", fr: "Leur commission est réduite pour encourager une concurrence loyale." },
      { en: "Their sales are rolled over to the next quarter.", fr: "Leurs ventes sont reportées au trimestre suivant." },
    ],
    explanation: {
      en: "Source Odoo Learn (Commission Plans): They earn a higher commission tier, as specified in the plan.",
      fr: "Source Odoo Learn (Plans de commission) : Ils gagnent un niveau de commission plus élevé, comme spécifié dans le plan.",
    },
  }),
  complexQ({
    id: "sal-124",
    module: "sales",
    text: {
      en: "When setting up a webhook in Gelato, what configuration in the ‘Events’ field ensures that I’ll receive automatic order updates from Gelato to my Odoo database? (Odoo Learn — Gelato Connector)",
      fr: "Lors de la configuration d'un webhook dans Gelato, quelle configuration dans le champ « Événements » garantit que je recevrai des mises à jour automatiques des commandes de Gelato vers ma base de données Odoo ? (Odoo Learn — Connecteur Glace)",
    },
    correct: {
      en: "order_status_updated",
      fr: "order_status_updated",
    },
    distractors: [
      { en: "order_item_status_updated", fr: "order_item_status_updated" },
      { en: "_store_product_template_created", fr: "_store_product_template_created" },
      { en: "catalog_product_stock_availability_updated", fr: "catalog_product_stock_availability_updated" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gelato Connector): order_status_updated",
      fr: "Source Odoo Learn (Connecteur Gelato) : order_status_updated",
    },
  }),
  complexQ({
    id: "sal-125",
    module: "sales",
    text: {
      en: "What feature allows me to pull and synchronize Gelato product templates to Odoo products? (Odoo Learn — Gelato Connector)",
      fr: "Quelle fonctionnalité me permet d'extraire et de synchroniser les modèles de produits Gelato avec les produits Odoo ? (Odoo Learn — Connecteur Glace)",
    },
    correct: {
      en: "Product Template ID",
      fr: "ID du modèle de produit",
    },
    distractors: [
      { en: "Product URL", fr: "URL du produit" },
      { en: "API Key", fr: "Clé API" },
      { en: "Webhook secret", fr: "Secret du webhook" },
    ],
    explanation: {
      en: "Source Odoo Learn (Gelato Connector): Product Template ID",
      fr: "Source Odoo Learn (Gelato Connector) : ID du modèle de produit",
    },
  }),
  complexQ({
    id: "sal-126",
    module: "sales",
    text: {
      en: "How do I add Gelato shipping to an Odoo sales order on synchronized Gelato products? (Odoo Learn — Gelato Connector)",
      fr: "Comment ajouter l'expédition Gelato à une commande client Odoo sur des produits Gelato synchronisés ? (Odoo Learn — Connecteur Glace)",
    },
    correct: {
      en: "Click the ‘Add shipping’ button on the Odoo sales order",
      fr: "Cliquez sur le bouton « Ajouter une expédition » sur la commande client Odoo",
    },
    distractors: [
      { en: "Click the ‘Odoo shipping’ button on the Gelato sales order", fr: "Cliquez sur le bouton « Expédition Odoo » sur la commande client Gelato" },
      { en: "Gelato shipping must be configured on a separate order from the Gelato products.", fr: "L'expédition de Gelato doit être configurée sur une commande distincte des produits Gelato." },
      { en: "There is no way to add Gelato shipping to an Odoo sales order.", fr: "Il n'y a aucun moyen d'ajouter l'expédition Gelato à une commande client Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Gelato Connector): Click the ‘Add shipping’ button on the Odoo sales order",
      fr: "Source Odoo Learn (Gelato Connector) : cliquez sur le bouton « Ajouter l'expédition » sur la commande client Odoo",
    },
  }),
  complexQ({
    id: "sal-127",
    module: "sales",
    text: {
      en: "What is a quote calculator? (Odoo Learn — Quote calculator Basics)",
      fr: "Qu'est-ce qu'un calculateur de devis ? (Odoo Learn — Calculateur de devis)",
    },
    correct: {
      en: "A spreadsheet that communicates with different parts of the Odoo Sales app to calculate the costs for goods and services in quotations.",
      fr: "Une feuille de calcul qui communique avec différentes parties de l'application Odoo Sales pour calculer les coûts des biens et services dans les devis.",
    },
    distractors: [
      { en: "A design tool that helps you create beautiful quotations to attract clients.", fr: "Un outil de conception qui vous aide à créer de belles devis pour attirer les clients." },
      { en: "An AI that searches the internet for competitors’ pricing and helps you set optimized products for your goods and services.", fr: "Une IA qui recherche sur Internet les prix des concurrents et vous aide à définir des produits optimisés pour vos biens et services." },
      { en: "A Sales app module that uses historical data to suggest Optional and Accessory Products when creating quotations.", fr: "Un module d'application Ventes qui utilise des données historiques pour suggérer des produits optionnels et accessoires lors de la création de devis." },
    ],
    explanation: {
      en: "Source Odoo Learn (Quote calculator Basics): A spreadsheet that communicates with different parts of the Odoo Sales app to calculate the costs for goods and services in quotations.",
      fr: "Source Odoo Learn (Bases du calculateur de devis) : Une feuille de calcul qui communique avec différentes parties de l'application Odoo Sales pour calculer les coûts des biens et services dans les devis.",
    },
  }),
  complexQ({
    id: "sal-128",
    module: "sales",
    text: {
      en: "Which of the following is a prerequisite for using a quote calculator? (Odoo Learn — Quote calculator Basics)",
      fr: "Parmi les éléments suivants, lequel est une condition préalable à l'utilisation d'un calculateur de devis ? (Odoo Learn — Calculateur de devis)",
    },
    correct: {
      en: "The quotation must use a quotation template.",
      fr: "Le devis doit utiliser un modèle de devis.",
    },
    distractors: [
      { en: "“Quote calculation” must be enabled in the Sales app’s Configuration settings.", fr: "Le « Calcul du devis » doit être activé dans les paramètres de configuration de l'application Ventes." },
      { en: "The AI Assistant app must be installed in your database, since the quote calculator is an AI tool.", fr: "L'application AI Assistant doit être installée dans votre base de données, car le calculateur de devis est un outil d'IA." },
      { en: "The Accounting app must be installed in your database, since the quote calculator uses the spreadsheets that the Accounting app enables.", fr: "L'application Comptabilité doit être installée dans votre base de données, car le calculateur de devis utilise les feuilles de calcul activées par l'application Comptabilité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Quote calculator Basics): The quotation must use a quotation template.",
      fr: "Source Odoo Learn (Bases du calculateur de devis) : Le devis doit utiliser un modèle de devis.",
    },
  }),
  complexQ({
    id: "sal-129",
    module: "sales",
    text: {
      en: "Which of the following pieces of information is essential to creating and using a quote calculator? (Odoo Learn — Quote calculator Basics)",
      fr: "Parmi les informations suivantes, lesquelles sont essentielles à la création et à l'utilisation d'un calculateur de devis ? (Odoo Learn — Calculateur de devis)",
    },
    correct: {
      en: "Information on the products you sell, which a new quote calculator automatically accesses.",
      fr: "Informations sur les produits que vous vendez, auxquelles un nouveau calculateur de devis accède automatiquement.",
    },
    distractors: [
      { en: "At least a month of historical sales data, which the quote calculator uses in its calculations.", fr: "Au moins un mois de données de ventes historiques, que le calculateur de devis utilise dans ses calculs." },
      { en: "Complete contact information for your customers, whom the quote calculator will automatically send quotes to.", fr: "Coordonnées complètes de vos clients, à qui le calculateur de devis enverra automatiquement des devis." },
      { en: "“Quote Calculator Essentials,” a setting enabled in the Sales app’s Configuration page that the quote calculator needs to function.", fr: "« Essentiels du calculateur de devis », un paramètre activé dans la page de configuration de l'application Ventes dont le calculateur de devis a besoin pour fonctionner." },
    ],
    explanation: {
      en: "Source Odoo Learn (Quote calculator Basics): Information on the products you sell, which a new quote calculator automatically accesses.",
      fr: "Source Odoo Learn (Bases du calculateur de devis) : Informations sur les produits que vous vendez, auxquelles accède automatiquement un nouveau calculateur de devis.",
    },
  }),
];
