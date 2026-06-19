import { complexQ, mcq3Q, yesNoQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const purchasesLearnQuestions = [
  complexQ({
    id: "pur-026",
    module: "purchases",
    text: {
      en: "You’ve bought in-app purchase (IAP) credits for Document Digitization and want to use them with the Lead Generation service. How do you do this? (Odoo Learn — In-App Services (Tokens and Credits))",
      fr: "Vous avez acheté des crédits d'achat in-app (IAP) pour la numérisation de documents et souhaitez les utiliser avec le service Lead Generation. Comment faites-vous cela ? (Odoo Learn — Services intégrés à l'application (jetons et crédits))",
    },
    correct: {
      en: "This can’t be done. IAP credits are not interchangeable.",
      fr: "Cela ne peut pas être fait. Les crédits IAP ne sont pas interchangeables.",
    },
    distractors: [
      { en: "Log into your database, go to the Settings app, search for “credit refund” and follow the process.The IAP funds this refund generates can then be used to purchase Lead Generation credits.", fr: "Connectez-vous à votre base de données, accédez à l'application Paramètres, recherchez « remboursement de crédit » et suivez le processus. Les fonds IAP générés par ce remboursement peuvent ensuite être utilisés pour acheter des crédits de génération de leads." },
      { en: "Log into your database, go to the Settings app, search for “credit exchange” and follow the process. IAP credits may be exchanged for different kinds of credits at varying conversion rates.", fr: "Connectez-vous à votre base de données, accédez à l'application Paramètres, recherchez « échange de crédits » et suivez le processus. Les crédits IAP peuvent être échangés contre différents types de crédits à différents taux de conversion." },
      { en: "IAP credits are a fungible currency. You can simply purchase credits and spend them on any service you like.", fr: "Les crédits IAP sont une monnaie fongible. Vous pouvez simplement acheter des crédits et les dépenser pour le service de votre choix." },
    ],
    explanation: {
      en: "Source Odoo Learn (In-App Services (Tokens and Credits)): This can’t be done. IAP credits are not interchangeable.",
      fr: "Source Odoo Learn (services intégrés à l'application (jetons et crédits)) : cela ne peut pas être fait. Les crédits IAP ne sont pas interchangeables.",
    },
  }),
  complexQ({
    id: "pur-027",
    module: "purchases",
    text: {
      en: "How can you configure your database to work with IAP services? (Odoo Learn — In-App Services (Tokens and Credits))",
      fr: "Comment pouvez-vous configurer votre base de données pour qu'elle fonctionne avec les services IAP ? (Odoo Learn — Services intégrés à l'application (jetons et crédits))",
    },
    correct: {
      en: "IAP services are automatically integrated with all Odoo databases. No additional configuration is required for them to work.",
      fr: "Les services IAP sont automatiquement intégrés à toutes les bases de données Odoo. Aucune configuration supplémentaire n'est requise pour qu'ils fonctionnent.",
    },
    distractors: [
      { en: "IAP services are automatically integrated with all Odoo databases, but require app-specific configuration to work properly. You must go to the Configuration page for each app and manually enable “IAP functionality.”", fr: "Les services IAP sont automatiquement intégrés à toutes les bases de données Odoo, mais nécessitent une configuration spécifique à l'application pour fonctionner correctement. Vous devez accéder à la page de configuration de chaque application et activer manuellement la « fonctionnalité IAP »." },
      { en: "Log into your database, go to the Settings app, search for “IAP services” and toggle the setting.", fr: "Connectez-vous à votre base de données, accédez à l'application Paramètres, recherchez « Services IAP » et modifiez le paramètre." },
      { en: "To properly configure IAP services, you must reach out to Odoo customer support directly via phone or email.", fr: "Pour configurer correctement les services IAP, vous devez contacter le support client Odoo directement par téléphone ou par e-mail." },
    ],
    explanation: {
      en: "Source Odoo Learn (In-App Services (Tokens and Credits)): IAP services are automatically integrated with all Odoo databases. No additional configuration is required for them to work.",
      fr: "Source Odoo Learn (Services In-App (Jetons et Crédits)) : Les services IAP sont automatiquement intégrés à toutes les bases de données Odoo. Aucune configuration supplémentaire n'est requise pour qu'ils fonctionnent.",
    },
  }),
  complexQ({
    id: "pur-028",
    module: "purchases",
    text: {
      en: "True or false: IAP services can be configured so that only certain companies in a multi-company database can use them? (Odoo Learn — In-App Services (Tokens and Credits))",
      fr: "Vrai ou faux : les services IAP peuvent-ils être configurés pour que seules certaines entreprises d'une base de données multi-entreprises puissent les utiliser ? (Odoo Learn — Services intégrés à l'application (jetons et crédits))",
    },
    correct: {
      en: "True. IAP services can be restricted by company within the Settings app.",
      fr: "Vrai. Les services IAP peuvent être restreints par entreprise dans l'application Paramètres.",
    },
    distractors: [
      { en: "True in most cases. By default, IAP services are only available to the main company in a multi-company database, but admin users can change this setting.", fr: "C'est vrai dans la plupart des cas. Par défaut, les services IAP ne sont disponibles que pour l'entreprise principale dans une base de données multi-entreprises, mais les utilisateurs administrateurs peuvent modifier ce paramètre." },
      { en: "False. Due to their deep integration with Odoo databases, IAP services cannot be restricted from being used by all companies in a multi-company database.", fr: "FAUX. En raison de leur intégration profonde avec les bases de données Odoo, les services IAP ne peuvent être empêchés d'être utilisés par toutes les entreprises dans une base de données multi-entreprises." },
      { en: "False in most cases. By default, IAP services are always available to all companies in a multi-company database, but you can contact Odoo customer support to enable some restrictions.", fr: "Faux dans la plupart des cas. Par défaut, les services IAP sont toujours disponibles pour toutes les entreprises dans une base de données multi-entreprises, mais vous pouvez contacter le support client Odoo pour activer certaines restrictions." },
    ],
    explanation: {
      en: "Source Odoo Learn (In-App Services (Tokens and Credits)): True. IAP services can be restricted by company within the Settings app.",
      fr: "Source Odoo Learn (services intégrés à l'application (jetons et crédits)) : vrai. Les services IAP peuvent être restreints par entreprise dans l'application Paramètres.",
    },
  }),
  complexQ({
    id: "pur-029",
    module: "purchases",
    text: {
      en: "What are the following two fields, populated automatically in Odoo, used for: Callback URL / Webhook Verify Token? (Odoo Learn — WhatsApp: Advanced Setup)",
      fr: "Quels sont les deux champs suivants, renseignés automatiquement dans Odoo, utilisés pour : URL de rappel / Webhook Verify Token ? (Odoo Learn — WhatsApp : configuration avancée)",
    },
    correct: {
      en: "To configure receiving or return messages from WhatsApp to Odoo.",
      fr: "Pour configurer la réception ou le retour de messages de WhatsApp vers Odoo.",
    },
    distractors: [
      { en: "To configure sending messages to customers via WhatsApp in Odoo.", fr: "Pour configurer l'envoi de messages aux clients via WhatsApp dans Odoo." },
      { en: "Both the Callback URL / Webhook Verify Token are automatically generated from Meta, and not Odoo.", fr: "L'URL de rappel et le jeton de vérification Webhook sont automatiquement générés à partir de Meta et non d'Odoo." },
      { en: "To configure spam/abuse moderation in the WhatsApp Business Account.", fr: "Pour configurer la modération du spam/abus dans le compte WhatsApp Business." },
    ],
    explanation: {
      en: "Source Odoo Learn (WhatsApp: Advanced Setup): To configure receiving or return messages from WhatsApp to Odoo.",
      fr: "Source Odoo Learn (WhatsApp : Configuration avancée) : Pour configurer la réception ou le retour de messages de WhatsApp vers Odoo.",
    },
  }),
  complexQ({
    id: "pur-030",
    module: "purchases",
    text: {
      en: "What is the purpose of using vendor rules and pricelists in Odoo? (Odoo Learn — Purchase Basics: Your First Request for Quotation)",
      fr: "Quel est le but d’utiliser les règles des fournisseurs et les listes de prix dans Odoo ? (Odoo Learn — Les bases de l'achat : votre première demande de devis)",
    },
    correct: {
      en: "To apply quantity-based pricing automatically",
      fr: "Pour appliquer automatiquement une tarification basée sur la quantité",
    },
    distractors: [
      { en: "To prevent vendors from changing prices", fr: "Pour empêcher les vendeurs de modifier les prix" },
      { en: "To increase shipping costs", fr: "Pour augmenter les frais de port" },
      { en: "To generate financial reports", fr: "Pour générer des rapports financiers" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Basics: Your First Request for Quotation): To apply quantity-based pricing automatically",
      fr: "Source Odoo Learn (Bases de l'achat : votre première demande de devis) : pour appliquer automatiquement une tarification basée sur la quantité",
    },
  }),
  complexQ({
    id: "pur-031",
    module: "purchases",
    text: {
      en: "What happens after I confirm an RFQ? (Odoo Learn — Purchase Basics: Your First Request for Quotation)",
      fr: "Que se passe-t-il une fois que j'ai confirmé une demande d'offre ? (Odoo Learn — Les bases de l'achat : votre première demande de devis)",
    },
    correct: {
      en: "The RFQ transforms into a PO. The order has been placed",
      fr: "La RFQ se transforme en PO. La commande a été passée",
    },
    distractors: [
      { en: "The RFQ resets, and will need to be reconfigured", fr: "La RFQ est réinitialisée et devra être reconfigurée" },
      { en: "The vendor will send a separate vendor order form for us to fill", fr: "Le fournisseur enverra un formulaire de commande distinct que nous pourrons remplir." },
      { en: "The RFQ pricing is confirmed, and should be configured in a new PO", fr: "Le prix de la RFQ est confirmé et doit être configuré dans un nouveau bon de commande" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Basics: Your First Request for Quotation): The RFQ transforms into a PO. The order has been placed",
      fr: "Source Odoo Learn (Bases de l'achat : votre première demande de devis) : La RFQ se transforme en bon de commande. La commande a été passée",
    },
  }),
  complexQ({
    id: "pur-032",
    module: "purchases",
    text: {
      en: "What is the purpose of the 'Receipt' smart button after confirming a Purchase Order? (Odoo Learn — Purchase Basics: Your First Request for Quotation)",
      fr: "À quoi sert le bouton intelligent « Reçu » après la confirmation d'un bon de commande ? (Odoo Learn — Les bases de l'achat : votre première demande de devis)",
    },
    correct: {
      en: "To validate and confirm product delivery",
      fr: "Pour valider et confirmer la livraison du produit",
    },
    distractors: [
      { en: "To download the payment invoice", fr: "Pour télécharger la facture de paiement" },
      { en: "To initiate warehouse restocking", fr: "Pour lancer le réapprovisionnement de l'entrepôt" },
      { en: "To contact the vendor for follow-up", fr: "Pour contacter le vendeur pour un suivi" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Basics: Your First Request for Quotation): To validate and confirm product delivery",
      fr: "Source Odoo Learn (Principes de base de l'achat : Votre première demande de devis) : Pour valider et confirmer la livraison du produit",
    },
  }),
  complexQ({
    id: "pur-033",
    module: "purchases",
    text: {
      en: "Which purchase lead time adds extra calendar days as a company-wide buffer for unexpected delays? (Odoo Learn — Purchase Lead Times)",
      fr: "Quel délai d'achat ajoute des jours calendaires supplémentaires comme tampon à l'échelle de l'entreprise pour les retards inattendus ? (Odoo Learn — Délais d'achat)",
    },
    correct: {
      en: "Purchase Security Lead Time",
      fr: "Délai de sécurité des achats",
    },
    distractors: [
      { en: "Purchase Lead Time", fr: "Délai d'achat" },
      { en: "Days to Buy", fr: "Jours pour acheter" },
      { en: "Days to Purchase", fr: "Jours pour acheter" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Lead Times): Purchase Security Lead Time",
      fr: "Source Odoo Learn (Délai d'achat) : Délai de sécurité d'achat",
    },
  }),
  complexQ({
    id: "pur-034",
    module: "purchases",
    text: {
      en: "The Order Deadline on a newly generated RFQ is calculated as: (Odoo Learn — Purchase Lead Times)",
      fr: "La date limite de commande sur une demande de prix nouvellement générée est calculée comme suit : (Odoo Learn — Délais d'achat)",
    },
    correct: {
      en: "Creation date of the RFQ plus the Days to Purchase",
      fr: "Date de création de la RFQ plus les jours d'achat",
    },
    distractors: [
      { en: "Creation date plus Vendor Lead Time", fr: "Date de création plus délai de livraison du fournisseur" },
      { en: "Forecasted date minus Vendor Lead Time", fr: "Date prévue moins délai de livraison du fournisseur" },
      { en: "Forecasted date minus Purchase Security Lead Time", fr: "Date prévue moins le délai de garantie d'achat" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Lead Times): Creation date of the RFQ plus the Days to Purchase",
      fr: "Source Odoo Learn (Délai d'achat) : Date de création de l'appel d'offres plus les jours d'achat",
    },
  }),
  complexQ({
    id: "pur-035",
    module: "purchases",
    text: {
      en: "With a Vendor Lead Time of 7 days, Purchase Security Lead Time of 2 days, and Days to Purchase of 1 day, Odoo’s forecast window on the Replenishment report spans: (Odoo Learn — Purchase Lead Times)",
      fr: "Avec un délai de livraison du fournisseur de 7 jours, un délai de sécurité d'achat de 2 jours et des jours avant l'achat de 1 jour, la fenêtre de prévision d'Odoo sur le rapport de réapprovisionnement s'étend sur : (Odoo Learn — Délais d'achat)",
    },
    correct: {
      en: "10 days",
      fr: "10 jours",
    },
    distractors: [
      { en: "7 days", fr: "7 jours" },
      { en: "8 days", fr: "8 jours" },
      { en: "9 days", fr: "9 jours" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Lead Times): 10 days",
      fr: "Source Odoo Learn (Délai d'achat) : 10 jours",
    },
  }),
  complexQ({
    id: "pur-036",
    module: "purchases",
    text: {
      en: "I have created a reordering rule with a minimum stock of 5 units and a maximum of 10 units. When the reordering rule is triggered, how many units will it order? (Odoo Learn — Reordering Rules)",
      fr: "J'ai créé une règle de réapprovisionnement avec un stock minimum de 5 unités et un maximum de 10 unités. Lorsque la règle de réapprovisionnement sera déclenchée, combien d’unités sera-t-elle commandée ? (Odoo Learn — Règles de réorganisation)",
    },
    correct: {
      en: "As much as needed so you have 10 units in stock",
      fr: "Autant que nécessaire pour avoir 10 unités en stock",
    },
    distractors: [
      { en: "As much as needed so you have a minimum of 5 units in stock", fr: "Autant que nécessaire pour avoir un minimum de 5 unités en stock" },
      { en: "It will always order between 5 and 10 units", fr: "Il faudra toujours commander entre 5 et 10 unités" },
      { en: "It will always order 10 units", fr: "Il commandera toujours 10 unités" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reordering Rules): As much as needed so you have 10 units in stock",
      fr: "Source Odoo Learn (Règles de réapprovisionnement) : Autant que nécessaire pour avoir 10 unités en stock",
    },
  }),
  yesNoQ({
    id: "pur-037",
    module: "purchases",
    text: {
      en: "Can you create reordering rules on service type products? (Odoo Learn — Reordering Rules)",
      fr: "Pouvez-vous créer des règles de réapprovisionnement sur les produits de type service ? (Odoo Learn — Règles de réorganisation)",
    },
    correctIsYes: false,
    explanation: {
      en: "Source Odoo Learn (Reordering Rules): No",
      fr: "Source Odoo Learn (règles de réorganisation) : Non",
    },
  }),
  mcq3Q({
    id: "pur-038",
    module: "purchases",
    text: {
      en: "Can you create reordering rules on consumable type products? (Odoo Learn — Reordering Rules)",
      fr: "Pouvez-vous créer des règles de réapprovisionnement sur des produits de type consommable ? (Odoo Learn — Règles de réorganisation)",
    },
    correct: {
      en: "No",
      fr: "Non",
    },
    distractors: [
      { en: "Yes", fr: "Oui" },
      { en: "Only if they are related to a Point of Sale", fr: "Uniquement s'ils sont liés à un Point de Vente" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reordering Rules): No",
      fr: "Source Odoo Learn (règles de réorganisation) : Non",
    },
  }),
  complexQ({
    id: "pur-039",
    module: "purchases",
    text: {
      en: "Where can I go to create a vendor pricelist for an individual product? (Odoo Learn — Vendor Pricelists)",
      fr: "Où puis-je créer une liste de prix fournisseur pour un produit individuel ? (Odoo Learn — Listes de prix des fournisseurs)",
    },
    correct: {
      en: "Go to the Product form, and click the Purchase tab",
      fr: "Accédez au formulaire Produit et cliquez sur l'onglet Achat.",
    },
    distractors: [
      { en: "Go to the vendor’s Contact form, click the Purchase tab, and add the prices", fr: "Accédez au formulaire de contact du fournisseur, cliquez sur l'onglet Achat et ajoutez les prix." },
      { en: "Go to the Inventory tab, and click the Purchase Configuration menu", fr: "Accédez à l'onglet Inventaire et cliquez sur le menu Configuration des achats." },
      { en: "Go to the Product form, click the Purchase tab, and click the vendor’s Contact form", fr: "Accédez au formulaire Produit, cliquez sur l’onglet Achat, puis cliquez sur le formulaire Contact du fournisseur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Vendor Pricelists): Go to the Product form, and click the Purchase tab",
      fr: "Source Odoo Learn (listes de prix des fournisseurs) : accédez au formulaire Produit et cliquez sur l'onglet Achat.",
    },
  }),
  complexQ({
    id: "pur-040",
    module: "purchases",
    text: {
      en: "Where can I import a vendor pricelist? (Odoo Learn — Vendor Pricelists)",
      fr: "Où puis-je importer une liste de prix fournisseur ? (Odoo Learn — Listes de prix des fournisseurs)",
    },
    correct: {
      en: "Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’",
      fr: "Accédez à l’application Achat > ​​Menu Configuration > « Liste de prix des fournisseurs ». Ensuite, cliquez sur l'icône en forme de rouage, puis sur « Importer des enregistrements »",
    },
    distractors: [
      { en: "Go to the Vendor app > Configuration menu > ‘Vendor Pricelist’. Next, click the Actions button, then ‘Import’", fr: "Accédez à l'application Fournisseur > Menu Configuration > « Liste de prix du fournisseur ». Ensuite, cliquez sur le bouton Actions, puis sur « Importer »." },
      { en: "Go to the Vendor app > Pricing menu > click the ‘Actions’ button. Then, click ‘Import records’", fr: "Accédez à l'application Fournisseur > Menu Tarification > cliquez sur le bouton « Actions ». Ensuite, cliquez sur « Importer des enregistrements »" },
      { en: "Go to the Vendor Pricelists page, click the ‘Actions’ button, then ‘Export’", fr: "Accédez à la page Listes de prix des fournisseurs, cliquez sur le bouton « Actions », puis sur « Exporter »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Vendor Pricelists): Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’",
      fr: "Source Odoo Learn (Listes de prix des fournisseurs) : Accédez à l'application Achat > ​​Menu Configuration > « Liste de prix des fournisseurs ». Ensuite, cliquez sur l'icône en forme de rouage, puis sur « Importer des enregistrements »",
    },
  }),
  complexQ({
    id: "pur-041",
    module: "purchases",
    text: {
      en: "On my vendor pricelist, my vendor gives me a 10% ‘Discount’ for a ‘Price’ of $20. The ‘Quantity’ field on the vendor pricelist is 5. On an RFQ, what is the price of four items? (Odoo Learn — Vendor Pricelists)",
      fr: "Sur ma liste de prix fournisseur, mon fournisseur m'accorde une « remise » de 10 % pour un « prix » de 20 $. Le champ « Quantité » sur la liste de prix du fournisseur est 5. Sur une demande d'offre, quel est le prix de quatre articles ? (Odoo Learn — Listes de prix des fournisseurs)",
    },
    correct: {
      en: "4 x 20 = $ 80",
      fr: "4x20 = 80$",
    },
    distractors: [
      { en: "( 4 x 20 ) x 0.1 = $ 8", fr: "( 4 x 20 ) x 0,1 = 8 $" },
      { en: "( 4 x 20 ) x 0.9 = $ 72", fr: "( 4 x 20 ) x 0,9 = 72 $" },
      { en: "( 5 x 20 ) x 0.9 = $ 90", fr: "( 5 x 20 ) x 0,9 = 90 $" },
    ],
    explanation: {
      en: "Source Odoo Learn (Vendor Pricelists): 4 x 20 = $ 80",
      fr: "Source Odoo Learn (Listes de prix des fournisseurs) : 4 x 20 = 80 $",
    },
  }),
  complexQ({
    id: "pur-042",
    module: "purchases",
    text: {
      en: "How do I prevent employees from purchasing from a specific vendor? (Odoo Learn — Approvals & Warnings)",
      fr: "Comment puis-je empêcher les employés d'acheter auprès d'un fournisseur spécifique ? (Odoo Learn — Approbations et avertissements)",
    },
    correct: {
      en: "Set a “Blocking Message” warning on the vendor",
      fr: "Définir un avertissement « Message de blocage » sur le fournisseur",
    },
    distractors: [
      { en: "Set a “Lock Vendor” warning on the vendor", fr: "Définir un avertissement « Verrouiller le fournisseur » sur le fournisseur" },
      { en: "Go to the app’s settings, and add the vendor to the warning list", fr: "Accédez aux paramètres de l'application et ajoutez le fournisseur à la liste d'avertissement" },
      { en: "I cannot prevent employees from purchasing from a specific vendor", fr: "Je ne peux pas empêcher les employés d'acheter auprès d'un fournisseur spécifique" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals & Warnings): Set a “Blocking Message” warning on the vendor",
      fr: "Source Odoo Learn (Approbations et avertissements) : définir un avertissement « Message de blocage » sur le fournisseur",
    },
  }),
  complexQ({
    id: "pur-043",
    module: "purchases",
    text: {
      en: "Where do I go to set an employee as a Purchase app “User” or “Administrator”? (Odoo Learn — Approvals & Warnings)",
      fr: "Où puis-je définir un employé comme « Utilisateur » ou « Administrateur » de l'application d'achat ? (Odoo Learn — Approbations et avertissements)",
    },
    correct: {
      en: "General settings > Manage Users > Select the employee > Access Rights",
      fr: "Paramètres généraux > Gérer les utilisateurs > Sélectionner l'employé > Droits d'accès",
    },
    distractors: [
      { en: "General settings > Purchase access > Select the employee", fr: "Paramètres généraux > Acheter un accès > Sélectionner l'employé" },
      { en: "Purchase settings > App users > Access Rights", fr: "Paramètres d'achat > ​​Utilisateurs de l'application > Droits d'accès" },
      { en: "Purchase settings > User types > Select the employee > Manage Access", fr: "Paramètres d'achat > ​​Types d'utilisateurs > Sélectionnez l'employé > Gérer l'accès" },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals & Warnings): General settings > Manage Users > Select the employee > Access Rights",
      fr: "Source Odoo Learn (Approbations & Avertissements) : Paramètres généraux > Gérer les utilisateurs > Sélectionner l'employé > Droits d'accès",
    },
  }),
  complexQ({
    id: "pur-044",
    module: "purchases",
    text: {
      en: "What happens when I set the “Purchase Order Approval” to a “Minimum Amount” of $200? (Odoo Learn — Approvals & Warnings)",
      fr: "Que se passe-t-il lorsque je règle « Approbation du bon de commande » sur un « Montant minimum » de 200 $ ? (Odoo Learn — Approbations et avertissements)",
    },
    correct: {
      en: "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by a “Purchase User”",
      fr: "Un « administrateur des achats » doit approuver toute demande de devis de 200 $ (ou plus) créée par un « utilisateur des achats ».",
    },
    distractors: [
      { en: "Requests for quotations must reach a minimum total of $200 to be confirmed", fr: "Les demandes de soumissions doivent atteindre un total minimum de 200$ pour être confirmées" },
      { en: "Only a “Purchase Administrator” can create a request for quotation for $200 (or more)", fr: "Seul un « administrateur des achats » peut créer une demande de devis de 200 $ (ou plus)" },
      { en: "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by any employee", fr: "Un « administrateur des achats » doit approuver toute demande de devis de 200 $ (ou plus) créée par tout employé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Approvals & Warnings): A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by a “Purchase User”",
      fr: "Source Odoo Learn (Approbations et avertissements) : Un « Administrateur des achats » doit approuver toute demande de devis de 200 $ (ou plus) créée par un « Utilisateur des achats »",
    },
  }),
  complexQ({
    id: "pur-045",
    module: "purchases",
    text: {
      en: "On a Request for Quotation (created within a Blanket Order) which field(s) are NOT auto-filled, and need to be manually configured? (Odoo Learn — Blanket Orders)",
      fr: "Sur une demande de devis (créée dans le cadre d'une commande globale), quels champs ne sont PAS remplis automatiquement et doivent être configurés manuellement ? (Odoo Learn — Commandes globales)",
    },
    correct: {
      en: "Order Deadline, Expected Arrival, Quantity",
      fr: "Délai de commande, arrivée prévue, quantité",
    },
    distractors: [
      { en: "Only the Unit Price", fr: "Uniquement le prix unitaire" },
      { en: "Order Deadline, Expected Arrival", fr: "Date limite de commande, arrivée prévue" },
      { en: "Nothing, everything is pre-filled", fr: "Rien, tout est pré-rempli" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blanket Orders): Order Deadline, Expected Arrival, Quantity",
      fr: "Source Odoo Learn (Commandes générales) : date limite de commande, arrivée prévue, quantité",
    },
  }),
  complexQ({
    id: "pur-046",
    module: "purchases",
    text: {
      en: "Which conditions need to be met to close a blanket order? (Odoo Learn — Blanket Orders)",
      fr: "Quelles conditions doivent être remplies pour clôturer une commande provisionnelle ? (Odoo Learn — Commandes globales)",
    },
    correct: {
      en: "All RFQs in the blanket order have become purchase orders",
      fr: "Tous les appels d'offres de la commande ouverte sont devenus des bons de commande.",
    },
    distractors: [
      { en: "At least one item in the blanket order is an RFQ", fr: "Au moins un article de la commande ouverte est une demande d'offre" },
      { en: "At least one item in the blanket order is billed", fr: "Au moins un article de la commande globale est facturé" },
      { en: "All items in the blanket order are billed", fr: "Tous les articles de la commande globale sont facturés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blanket Orders): All RFQs in the blanket order have become purchase orders",
      fr: "Source Odoo Learn (Commandes globales) : Toutes les demandes de prix de la commande globale sont devenues des bons de commande",
    },
  }),
  complexQ({
    id: "pur-047",
    module: "purchases",
    text: {
      en: "When should I use a Blanket Order? (Odoo Learn — Blanket Orders)",
      fr: "Quand dois-je utiliser une commande globale ? (Odoo Learn — Commandes globales)",
    },
    correct: {
      en: "When making recurring purchases of the same product(s) from the same vendor",
      fr: "Lorsque vous effectuez des achats récurrents du ou des mêmes produits auprès du même fournisseur",
    },
    distractors: [
      { en: "When making repetitive purchases for the same product from several vendors", fr: "Lors d'achats répétitifs pour le même produit auprès de plusieurs fournisseurs" },
      { en: "Whenever I need to purchase any product", fr: "Chaque fois que j'ai besoin d'acheter un produit" },
      { en: "I cannot make blanket orders in Odoo", fr: "Je ne peux pas passer de commandes globales dans Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blanket Orders): When making recurring purchases of the same product(s) from the same vendor",
      fr: "Source Odoo Learn (commandes générales) : lors d'achats récurrents du ou des mêmes produits auprès du même fournisseur",
    },
  }),
  complexQ({
    id: "pur-048",
    module: "purchases",
    text: {
      en: "Can I create a Bill as soon as I confirm a Request for Quotation? (Odoo Learn — Bill Control)",
      fr: "Puis-je créer une facture dès que je confirme une demande de devis ? (Odoo Learn — Contrôle des factures)",
    },
    correct: {
      en: "Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”",
      fr: "Oui, si la politique de contrôle de la facture du produit commandé est définie sur « quantités commandées ».",
    },
    distractors: [
      { en: "No.", fr: "Non." },
      { en: "Yes, if the ordered product’s Bill Control policy is set to “received quantities.”", fr: "Oui, si la politique de contrôle des factures du produit commandé est définie sur « quantités reçues »." },
      { en: "No, but clicking “Force” will allow a bill to be created.", fr: "Non, mais cliquer sur « Forcer » permettra de créer une facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill Control): Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”",
      fr: "Source Odoo Learn (Contrôle des factures) : Oui, si la politique de contrôle des factures du produit commandé est définie sur « quantités commandées ».",
    },
  }),
  complexQ({
    id: "pur-049",
    module: "purchases",
    text: {
      en: "In the video, the ‘Invalid Operation’ error popped up while trying to create a bill. Why did this happen? (Odoo Learn — Bill Control)",
      fr: "Dans la vidéo, l’erreur « Opération invalide » est apparue lors de la tentative de création d’une facture. Pourquoi est-ce arrivé ? (Odoo Learn — Contrôle des factures)",
    },
    correct: {
      en: "Bill Control policy is set to “Received quantities,” and I haven’t received products yet",
      fr: "La politique de contrôle des factures est définie sur « Quantités reçues » et je n'ai pas encore reçu de produits.",
    },
    distractors: [
      { en: "The PO’s ‘Billing Status’ is ‘Waiting Bills’", fr: "Le « Statut de facturation » du bon de commande est « Factures en attente »." },
      { en: "Billing error", fr: "Erreur de facturation" },
      { en: "The bill was already paid", fr: "La facture a déjà été payée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill Control): Bill Control policy is set to “Received quantities,” and I haven’t received products yet",
      fr: "Source Odoo Learn (Bill Control) : la politique de Bill Control est définie sur « Quantités reçues » et je n'ai pas encore reçu de produits",
    },
  }),
  complexQ({
    id: "pur-050",
    module: "purchases",
    text: {
      en: "Which document and tab displays the ‘Should Be Paid’ field to do 3-way matching? (Odoo Learn — Bill Control)",
      fr: "Quel document et quel onglet affichent le champ « Devrait être payé » pour effectuer une correspondance à trois ? (Odoo Learn — Contrôle des factures)",
    },
    correct: {
      en: "Bill, in the ‘Other Info’ tab",
      fr: "Facture, dans l'onglet \"Autres informations\"",
    },
    distractors: [
      { en: "Purchase Order, in the ‘Other Information’ tab", fr: "Bon de commande, dans l'onglet «Autres informations»" },
      { en: "Receipt, in the ‘Additional Information’ tab", fr: "Reçu, dans l'onglet « Informations complémentaires »" },
      { en: "Invoice, in the ‘Other Info’ tab", fr: "Facture, dans l'onglet «Autres informations»" },
    ],
    explanation: {
      en: "Source Odoo Learn (Bill Control): Bill, in the ‘Other Info’ tab",
      fr: "Source Odoo Learn (Bill Control) : Bill, dans l'onglet 'Autres informations'",
    },
  }),
  complexQ({
    id: "pur-051",
    module: "purchases",
    text: {
      en: "To enable alternative RFQs in a database, which setting(s) must be selected? (Odoo Learn — Purchase Agreements: Alternative RFQs - Calls for Tender)",
      fr: "Pour activer des appels d'offres alternatifs dans une base de données, quel(s) paramètre(s) doivent être sélectionnés ? (Odoo Learn — Contrats d'achat : appels d'offres alternatifs - Appels d'offres)",
    },
    correct: {
      en: "Purchase Agreements and Purchase Alternatives",
      fr: "Contrats d'achat et alternatives d'achat",
    },
    distractors: [
      { en: "Purchase Agreements and 3-way matching", fr: "Contrats d'achat et correspondance à trois" },
      { en: "3-way matching", fr: "Correspondance à 3 voies" },
      { en: "Purchase Alternatives and Receipt Reminder", fr: "Alternatives d'achat et rappel de réception" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Agreements: Alternative RFQs - Calls for Tender): Purchase Agreements and Purchase Alternatives",
      fr: "Source Odoo Learn (Contrats d'achat : RFQ alternatifs - Appels d'offres) : Contrats d'achat et alternatives d'achat",
    },
  }),
  complexQ({
    id: "pur-052",
    module: "purchases",
    text: {
      en: "On the Compare Product Lines dashboard, which of the following DO NOT appear in green? (Odoo Learn — Purchase Agreements: Alternative RFQs - Calls for Tender)",
      fr: "Sur le tableau de bord Comparer les lignes de produits, lequel des éléments suivants N'apparaît PAS en vert ? (Odoo Learn — Contrats d'achat : appels d'offres alternatifs - Appels d'offres)",
    },
    correct: {
      en: "The vendor name",
      fr: "Le nom du vendeur",
    },
    distractors: [
      { en: "The fastest expected arrival date", fr: "La date d'arrivée prévue la plus rapide" },
      { en: "The cheapest unit price", fr: "Le prix unitaire le moins cher" },
      { en: "The cheapest total cost", fr: "Le coût total le moins cher" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Agreements: Alternative RFQs - Calls for Tender): The vendor name",
      fr: "Source Odoo Learn (Contrats d'achat : RFQ alternatifs - Appels d'offres) : Le nom du fournisseur",
    },
  }),
  complexQ({
    id: "pur-053",
    module: "purchases",
    text: {
      en: "If I want to include a new RFQ as an Alternative quotation, what do I need to do? (Odoo Learn — Purchase Agreements: Alternative RFQs - Calls for Tender)",
      fr: "Si je souhaite inclure une nouvelle demande de prix comme devis alternatif, que dois-je faire ? (Odoo Learn — Contrats d'achat : appels d'offres alternatifs - Appels d'offres)",
    },
    correct: {
      en: "On the RFQ, click ‘Link to Existing RFQ,’ and select the Purchase Orders to link it to",
      fr: "Sur la demande d'offre, cliquez sur « Lien vers une demande d'offre existante » et sélectionnez les bons de commande auxquels la lier.",
    },
    distractors: [
      { en: "On the RFQ, click ‘Action,’ and select ‘Add to Alternative RFQ’", fr: "Sur la demande d'offre, cliquez sur « Action » et sélectionnez « Ajouter à la demande d'offre alternative »." },
      { en: "From the Purchase Orders overview, select the RFQs to link, click ‘Action,’ and select ‘Link RFQs’", fr: "Dans l'aperçu des bons de commande, sélectionnez les appels d'offres à lier, cliquez sur « Action » et sélectionnez « Lier les appels d'offres »." },
      { en: "I cannot link an unrelated RFQ as an Alternative to other Purchase Orders", fr: "Je ne peux pas lier une demande de prix sans rapport comme alternative à d'autres bons de commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Agreements: Alternative RFQs - Calls for Tender): On the RFQ, click ‘Link to Existing RFQ,’ and select the Purchase Orders to link it to",
      fr: "Source Odoo Learn (Contrats d'achat : RFQ alternatifs - Appels d'offres) : Sur la RFQ, cliquez sur « Lien vers la RFQ existante » et sélectionnez les bons de commande auxquels le lier.",
    },
  }),
  complexQ({
    id: "pur-054",
    module: "purchases",
    text: {
      en: "What field(s) are required on the purchase template? (Odoo Learn — Purchase Agreement: Purchase Template)",
      fr: "Quel(s) champ(s) sont obligatoires sur le modèle d'achat ? (Odoo Learn — Contrat d'achat : modèle d'achat)",
    },
    correct: {
      en: "Product",
      fr: "Produit",
    },
    distractors: [
      { en: "Vendor", fr: "Fournisseur" },
      { en: "Quantity", fr: "Quantité" },
      { en: "Unit Price", fr: "Prix ​​unitaire" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Agreement: Purchase Template): Product",
      fr: "Source Odoo Learn (Contrat d'achat : Modèle d'achat) : Produit",
    },
  }),
  complexQ({
    id: "pur-055",
    module: "purchases",
    text: {
      en: "When creating a request for quotation using a purchase template, which of the following are copied over? (Odoo Learn — Purchase Agreement: Purchase Template)",
      fr: "Lors de la création d'une demande de devis à l'aide d'un modèle d'achat, lesquels des éléments suivants sont copiés ? (Odoo Learn — Contrat d'achat : modèle d'achat)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Product quantity", fr: "Quantité de produit" },
      { en: "Product’s unit price", fr: "Prix ​​unitaire du produit" },
      { en: "Vendor", fr: "Fournisseur" },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Agreement: Purchase Template): All of the above",
      fr: "Source Odoo Learn (Contrat d'achat : Modèle d'achat) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "pur-056",
    module: "purchases",
    text: {
      en: "What is the main difference between a Purchase Template and a Blanket Order in Odoo? (Odoo Learn — Purchase Agreement: Purchase Template)",
      fr: "Quelle est la principale différence entre un modèle d’achat et une commande globale dans Odoo ? (Odoo Learn — Contrat d'achat : modèle d'achat)",
    },
    correct: {
      en: "Quantities are copied over from a purchase template, but set to zero in a blanket order",
      fr: "Les quantités sont copiées à partir d'un modèle d'achat, mais mises à zéro dans une commande ouverte",
    },
    distractors: [
      { en: "Purchase templates are used to create one RFQ, while blanket orders can create multiple RFQs", fr: "Les modèles d'achat sont utilisés pour créer une demande d'offre, tandis que les commandes globales peuvent créer plusieurs demandes d'offre." },
      { en: "Blanket orders automatically generate RFQs, while purchase templates do not", fr: "Les commandes globales génèrent automatiquement des appels d'offres, contrairement aux modèles d'achat." },
      { en: "Purchase templates require a vendor, while blanket orders do not", fr: "Les modèles d'achat nécessitent un fournisseur, contrairement aux commandes globales." },
    ],
    explanation: {
      en: "Source Odoo Learn (Purchase Agreement: Purchase Template): Quantities are copied over from a purchase template, but set to zero in a blanket order",
      fr: "Source Odoo Learn (Contrat d'achat : Modèle d'achat) : Les quantités sont copiées à partir d'un modèle d'achat, mais mises à zéro dans une commande globale",
    },
  }),
  complexQ({
    id: "pur-057",
    module: "purchases",
    text: {
      en: "What is the main benefit of using Odoo's Electronic Data Interchange (EDI) feature? (Odoo Learn — EDI Purchase to Sales Order)",
      fr: "Quel est le principal avantage de l'utilisation de la fonctionnalité d'échange de données informatisées (EDI) d'Odoo ? (Odoo Learn — Achat EDI vers commande client)",
    },
    correct: {
      en: "It allows structured exchange of documents between databases, reducing errors.",
      fr: "Il permet un échange structuré de documents entre bases de données, réduisant ainsi les erreurs.",
    },
    distractors: [
      { en: "It reduces the number of required user licenses.", fr: "Cela réduit le nombre de licences utilisateur requises." },
      { en: "It adds an additional quality check point.", fr: "Cela ajoute un point de contrôle qualité supplémentaire." },
      { en: "It eliminates the need for inventory management.", fr: "Cela élimine le besoin de gestion des stocks." },
    ],
    explanation: {
      en: "Source Odoo Learn (EDI Purchase to Sales Order): It allows structured exchange of documents between databases, reducing errors.",
      fr: "Source Odoo Learn (EDI Purchase to Sales Order) : Il permet un échange structuré de documents entre bases de données, réduisant ainsi les erreurs.",
    },
  }),
  complexQ({
    id: "pur-058",
    module: "purchases",
    text: {
      en: "What happens after the Purchase Order XML file is uploaded into the seller’s Odoo Sales app? (Odoo Learn — EDI Purchase to Sales Order)",
      fr: "Que se passe-t-il une fois le fichier XML du bon de commande téléchargé dans l'application Odoo Sales du vendeur ? (Odoo Learn — Achat EDI vers commande client)",
    },
    correct: {
      en: "A Sales Order is automatically generated with all the order details.",
      fr: "Une commande client est automatiquement générée avec tous les détails de la commande.",
    },
    distractors: [
      { en: "A draft invoice is created.", fr: "Un projet de facture est créé." },
      { en: "A delivery order is automatically confirmed.", fr: "Un bon de livraison est automatiquement confirmé." },
      { en: "The Purchase Order is sent back for approval.", fr: "Le bon de commande est renvoyé pour approbation." },
    ],
    explanation: {
      en: "Source Odoo Learn (EDI Purchase to Sales Order): A Sales Order is automatically generated with all the order details.",
      fr: "Source Odoo Learn (achat EDI vers commande client) : une commande client est automatiquement générée avec tous les détails de la commande.",
    },
  }),
  complexQ({
    id: "pur-059",
    module: "purchases",
    text: {
      en: "Where in the Sales Order is the original XML file visible after import? (Odoo Learn — EDI Purchase to Sales Order)",
      fr: "Où dans la commande client le fichier XML d'origine est-il visible après l'importation ? (Odoo Learn — Achat EDI vers commande client)",
    },
    correct: {
      en: "In the Chatter section.",
      fr: "Dans la section Chat.",
    },
    distractors: [
      { en: "In the Vendor Bill.", fr: "Dans la facture du vendeur." },
      { en: "In the PDF preview.", fr: "Dans l'aperçu PDF." },
      { en: "In the customer’s contact record.", fr: "Dans la fiche contact du client." },
    ],
    explanation: {
      en: "Source Odoo Learn (EDI Purchase to Sales Order): In the Chatter section.",
      fr: "Source Odoo Learn (Achat EDI vers Commande client) : Dans la section Chatter.",
    },
  }),
];
