import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const rentalSupplementaryQuestions = [
  complexQ({
    id: "rtl-001",
    module: "rental",
    text: {
      en: "Where can I find all the rental statuses and invoices? (Odoo Learn — Configuring a Rental Product)",
      fr: "Où puis-je trouver tous les statuts et factures de location ? (Odoo Learn — Configuration d'un produit de location)",
    },
    correct: {
      en: "In the Rental app on the Rental Orders dashboard, in the sidebar.",
      fr: "Dans l'application Location sur le tableau de bord Commandes de location, dans la barre latérale.",
    },
    distractors: [
      { en: "In the Rental app, by clicking Orders > Rental invoices.", fr: "Dans l'application Location, en cliquant sur Commandes > Factures de location." },
      { en: "On the individual rental order cards on the Rental Orders dashboard.", fr: "Sur les fiches de commande de location individuelles sur le tableau de bord Commandes de location." },
      { en: "In the Sales app, by clicking Orders > Rental invoices.", fr: "Dans l'application Ventes, en cliquant sur Commandes > Factures de location." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configuring a Rental Product): In the Rental app on the Rental Orders dashboard, in the sidebar.",
      fr: "Source Odoo Learn (Configuration d'un produit de location) : Dans l'application Location sur le tableau de bord Commandes de location, dans la barre latérale.",
    },
  }),
  complexQ({
    id: "rtl-002",
    module: "rental",
    text: {
      en: "Can I create a new rental period? (Odoo Learn — Configuring a Rental Product)",
      fr: "Puis-je créer une nouvelle période de location ? (Odoo Learn — Configuration d'un produit de location)",
    },
    correct: {
      en: "Yes, by going to Rental app > Configuration > Rental periods.",
      fr: "Oui, en allant dans Application Location > Configuration > Périodes de location.",
    },
    distractors: [
      { en: "No, you can’t create any new rental periods.", fr: "Non, vous ne pouvez pas créer de nouvelles périodes de location." },
      { en: "You can only modify current rental periods, not create new ones.", fr: "Vous pouvez uniquement modifier les périodes de location en cours, pas en créer de nouvelles." },
      { en: "Yes, by going to Rental app > Configuration > Settings.", fr: "Oui, en allant dans Application de location > Configuration > Paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configuring a Rental Product): Yes, by going to Rental app > Configuration > Rental periods.",
      fr: "Source Odoo Learn (Configuration d'un produit de location) : Oui, en allant dans Application Location > Configuration > Périodes de location.",
    },
  }),
  complexQ({
    id: "rtl-003",
    module: "rental",
    text: {
      en: "What happens if I try to rent a product that is already reserved? (Odoo Learn — Configuring a Rental Product)",
      fr: "Que se passe-t-il si j'essaie de louer un produit déjà réservé ? (Odoo Learn — Configuration d'un produit de location)",
    },
    correct: {
      en: "Due to the reserve hold, I can’t rent the product.",
      fr: "En raison de la réserve, je ne peux pas louer le produit.",
    },
    distractors: [
      { en: "I can still rent out the product.", fr: "Je peux toujours louer le produit." },
      { en: "The product is automatically reserved for the customer with the highest rental price.", fr: "Le produit est automatiquement réservé au client dont le prix de location est le plus élevé." },
      { en: "I can still rent the product if the customer returns the product early.", fr: "Je peux toujours louer le produit si le client retourne le produit plus tôt." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configuring a Rental Product): Due to the reserve hold, I can’t rent the product.",
      fr: "Source Odoo Learn (Configuration d'un produit en location) : En raison de la réserve, je ne peux pas louer le produit.",
    },
  }),
  mcq3Q({
    id: "rtl-004",
    module: "rental",
    text: {
      en: "What does the clock icon mean when returning a product? (Odoo Learn — Planning and Reporting)",
      fr: "Que signifie l'icône de l'horloge lors du retour d'un produit ? (Odoo Learn — Planification et rapports)",
    },
    correct: {
      en: "It indicates a late return.",
      fr: "Cela indique un retour tardif.",
    },
    distractors: [
      { en: "There is only one day left to return the product.", fr: "Il ne reste qu'un jour pour retourner le produit." },
      { en: "You can check the rental duration by clicking on it.", fr: "Vous pouvez vérifier la durée de la location en cliquant dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning and Reporting): It indicates a late return.",
      fr: "Source Odoo Learn (Planification et Reporting) : Cela indique un retour tardif.",
    },
  }),
  mcq3Q({
    id: "rtl-005",
    module: "rental",
    text: {
      en: "From the \"Schedule\" menu, how to know products have been returned? (Odoo Learn — Planning and Reporting)",
      fr: "Depuis le menu « Calendrier », comment savoir si les produits ont été retournés ? (Odoo Learn — Planification et rapports)",
    },
    correct: {
      en: "The bar related to the order is in another color, and a tooltip says \"Returned\"",
      fr: "La barre associée à la commande est d'une autre couleur et une info-bulle indique \"Retourné\".",
    },
    distractors: [
      { en: "Returned products no longer appear in the schedule.", fr: "Les produits retournés n'apparaissent plus dans le planning." },
      { en: "It is not possible.", fr: "Ce n'est pas possible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning and Reporting): The bar related to the order is in another color, and a tooltip says \"Returned\"",
      fr: "Source Odoo Learn (Planning et Reporting) : La barre liée à la commande est d'une autre couleur, et une info-bulle dit \"Retournée\"",
    },
  }),
  complexQ({
    id: "rtl-006",
    module: "rental",
    text: {
      en: "What should I do to view the rental orders with pickups or returns due today? (Odoo Learn — Create a Rental Order)",
      fr: "Que dois-je faire pour consulter les commandes de location dont les retraits ou les retours sont dus aujourd'hui ? (Odoo Learn — Créer une commande de location)",
    },
    correct: {
      en: "On the Rental Dashboard, click in the search bar and select To Do Today filter.",
      fr: "Sur le tableau de bord de location, cliquez dans la barre de recherche et sélectionnez le filtre À faire aujourd'hui.",
    },
    distractors: [
      { en: "Open the Rental app, click in the search bar, and enable My Orders.", fr: "Ouvrez l'application Location, cliquez dans la barre de recherche et activez Mes commandes." },
      { en: "In the rental order, click the Action icon, then select Task Tracking.", fr: "Dans la commande de location, cliquez sur l'icône Action, puis sélectionnez Suivi des tâches." },
      { en: "On the Rental Dashboard, in the left-hand sidebar, enable Reserved, PickedUp, and Returned in the Rental Status section.", fr: "Sur le tableau de bord de location, dans la barre latérale gauche, activez Réservé, Récupéré et Restitué dans la section Statut de la location." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a Rental Order): On the Rental Dashboard, click in the search bar and select To Do Today filter.",
      fr: "Source Odoo Learn (Créer une commande de location) : Sur le tableau de bord de location, cliquez dans la barre de recherche et sélectionnez le filtre À faire aujourd'hui.",
    },
  }),
  complexQ({
    id: "rtl-007",
    module: "rental",
    text: {
      en: "What happens if I change the rental period on a rental order after adding a product to it? (Odoo Learn — Create a Rental Order)",
      fr: "Que se passe-t-il si je modifie la période de location sur une commande de location après y avoir ajouté un produit ? (Odoo Learn — Créer une commande de location)",
    },
    correct: {
      en: "I need to click the Update Rental Prices button to recalculate the total.",
      fr: "Je dois cliquer sur le bouton Mettre à jour les prix de location pour recalculer le total.",
    },
    distractors: [
      { en: "The order will be reset, and I need to add the product back to it.", fr: "La commande sera réinitialisée et je devrai y ajouter à nouveau le produit." },
      { en: "The order will automatically update the total amount.", fr: "La commande mettra automatiquement à jour le montant total." },
      { en: "I will receive a warning pop-up telling me to re-add the products to adjust the total.", fr: "Je recevrai une fenêtre contextuelle d'avertissement me demandant de rajouter les produits pour ajuster le total." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a Rental Order): I need to click the Update Rental Prices button to recalculate the total.",
      fr: "Source Odoo Learn (Créer une commande de location) : Je dois cliquer sur le bouton Mettre à jour les prix de location pour recalculer le total.",
    },
  }),
  complexQ({
    id: "rtl-008",
    module: "rental",
    text: {
      en: "What are the Rental app’s pricing computation rules? (Odoo Learn — Create a Rental Order)",
      fr: "Quelles sont les règles de calcul des tarifs de l’application Rental ? (Odoo Learn — Créer une commande de location)",
    },
    correct: {
      en: "It uses only one pricing rule per rental duration and always picks the cheapest one.",
      fr: "Il utilise une seule règle de tarification par durée de location et sélectionne toujours la moins chère.",
    },
    distractors: [
      { en: "It will always pick the cheapest option by rounding up the rental duration period.", fr: "Il choisira toujours l’option la moins chère en arrondissant la durée de location." },
      { en: "It will pick the cheapest option and will use more than one pricing rule.", fr: "Il choisira l’option la moins chère et utilisera plusieurs règles de tarification." },
      { en: "It will select the option that best covers the rental duration and gives the business the option to choose between the two cheapest options.", fr: "Il sélectionnera l’option qui couvre le mieux la durée de la location et donnera à l’entreprise la possibilité de choisir entre les deux options les moins chères." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a Rental Order): It uses only one pricing rule per rental duration and always picks the cheapest one.",
      fr: "Source Odoo Learn (Créer une commande de location) : Il utilise une seule règle de tarification par durée de location et choisit toujours la moins chère.",
    },
  }),
  complexQ({
    id: "rtl-009",
    module: "rental",
    text: {
      en: "How do I select the check-in/check-out time when booking a hotel room on the website? (Odoo Learn — Hotel Booking)",
      fr: "Comment sélectionner l’heure d’arrivée/départ lors de la réservation d’une chambre d’hôtel sur le site Internet ? (Odoo Learn — Réservation d'hôtel)",
    },
    correct: {
      en: "I can’t.  I can only select dates from the website.",
      fr: "Je ne peux pas.  Je ne peux sélectionner que des dates sur le site Web.",
    },
    distractors: [
      { en: "In the calendar pop-up, I can select the times.", fr: "Dans la fenêtre contextuelle du calendrier, je peux sélectionner les heures." },
      { en: "I can select a later check-in time option from the room page.", fr: "Je peux sélectionner une option d'heure d'enregistrement ultérieure sur la page de la chambre." },
      { en: "At the checkout page.", fr: "Sur la page de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hotel Booking): I can’t.  I can only select dates from the website.",
      fr: "Source Odoo Learn (Réservation d'hôtel) : Je ne peux pas.  Je ne peux sélectionner que des dates sur le site Web.",
    },
  }),
  complexQ({
    id: "rtl-010",
    module: "rental",
    text: {
      en: "How can I add extra service charges to an online rental booking’s invoice? (Odoo Learn — Hotel Booking)",
      fr: "Comment puis-je ajouter des frais de service supplémentaires à la facture d’une réservation de location en ligne ? (Odoo Learn — Réservation d'hôtel)",
    },
    correct: {
      en: "On the draft invoice, add the extra service charges before confirming.",
      fr: "Sur le projet de facture, ajoutez les frais de service supplémentaires avant de confirmer.",
    },
    distractors: [
      { en: "Add the extra charges to the rental order.", fr: "Ajoutez les frais supplémentaires au bon de location." },
      { en: "The additional charges are automatically added to the rental order.", fr: "Les frais supplémentaires sont automatiquement ajoutés au bon de location." },
      { en: "Create a separate rental order for the additional service charges.", fr: "Créez un bon de location distinct pour les frais de service supplémentaires." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hotel Booking): On the draft invoice, add the extra service charges before confirming.",
      fr: "Source Odoo Learn (Réservation d'hôtel) : Sur le projet de facture, ajoutez les frais de service supplémentaires avant de confirmer.",
    },
  }),
  complexQ({
    id: "rtl-011",
    module: "rental",
    text: {
      en: "Can I add another room to my reservation using the Planning smart button? (Odoo Learn — Hotel Booking)",
      fr: "Puis-je ajouter une autre chambre à ma réservation à l'aide du bouton intelligent Planification ? (Odoo Learn — Réservation d'hôtel)",
    },
    correct: {
      en: "Yes, I can click the Planning smart button and click New on the Schedule by Resource view.",
      fr: "Oui, je peux cliquer sur le bouton intelligent Planification et cliquer sur Nouveau dans la vue Planification par ressource.",
    },
    distractors: [
      { en: "No, the Planning smart button takes me to a static calendar view of all confirmed rental bookings.", fr: "Non, le bouton intelligent Planification m'amène à un calendrier statique de toutes les réservations de location confirmées." },
      { en: "Yes, I can click the Planning smart button, and it’ll take me to the Rental app’s Scheduled Rentals calendar.", fr: "Oui, je peux cliquer sur le bouton intelligent Planification et cela m'amènera au calendrier des locations planifiées de l'application de location." },
      { en: "No, the Planning app is a separate app from Rental.", fr: "Non, l'application Planning est une application distincte de Rental." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hotel Booking): Yes, I can click the Planning smart button and click New on the Schedule by Resource view.",
      fr: "Source Odoo Learn (Réservation d'hôtel) : Oui, je peux cliquer sur le bouton intelligent Planification et cliquer sur Nouveau dans la vue Planification par ressource.",
    },
  }),
  complexQ({
    id: "rtl-012",
    module: "rental",
    text: {
      en: "Why can't my guests choose a specific check-in or check-out hour on the website's reservation calendar for the Deluxe Room? (Odoo Learn — Configure a Rental Service)",
      fr: "Pourquoi mes clients ne peuvent-ils pas choisir une heure d'arrivée ou de départ spécifique sur le calendrier de réservation du site Web pour la chambre Deluxe ? (Odoo Learn — Configurer un service de location)",
    },
    correct: {
      en: "I configured 'Nightly' rental periods, which use the fixed check-in and check-out times set in the Rental Period form.",
      fr: "J'ai configuré des périodes de location « à la nuit », qui utilisent les heures fixes d'arrivée et de départ définies dans le formulaire Période de location.",
    },
    distractors: [
      { en: "I didn’t enable the 'Hourly Booking' toggle on the website settings, which is disabled by default for all service products.", fr: "Je n'ai pas activé la bascule « Réservation horaire » dans les paramètres du site Web, qui est désactivée par défaut pour tous les produits de service." },
      { en: "I can't offer hourly selection on the website if the 'Default Delay Cost' in the Rental app settings is set to more than one hour.", fr: "Je ne peux pas proposer de sélection horaire sur le site Web si le « Coût de retard par défaut » dans les paramètres de l'application de location est défini sur plus d'une heure." },
      { en: "I didn’t add  'Time' as a variant in the Attributes & Variants tab.", fr: "Je n'ai pas ajouté « Heure » ​​comme variante dans l'onglet Attributs et variantes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configure a Rental Service): I configured 'Nightly' rental periods, which use the fixed check-in and check-out times set in the Rental Period form.",
      fr: "Source Odoo Learn (Configurer un service de location) : J'ai configuré des périodes de location « à la nuit », qui utilisent les heures fixes d'arrivée et de départ définies dans le formulaire Période de location.",
    },
  }),
  complexQ({
    id: "rtl-013",
    module: "rental",
    text: {
      en: "I need to ensure my hotel rooms aren't overbooked and that my team can see room occupancy in real time. What should I do? (Odoo Learn — Configure a Rental Service)",
      fr: "Je dois m'assurer que mes chambres d'hôtel ne sont pas surréservées et que mon équipe puisse connaître l'occupation des chambres en temps réel. Que dois-je faire? (Odoo Learn — Configurer un service de location)",
    },
    correct: {
      en: "By going to the product form, enabling 'Plan Services,' and creating a Planning Role with specific 'Material' resources for each room.",
      fr: "En accédant au formulaire du produit, en activant « Planifier les services » et en créant un rôle de planification avec des ressources « Matérielles » spécifiques pour chaque pièce.",
    },
    distractors: [
      { en: "I can't manage overbooking through the Rental app. I must manually check the Planning app before every rental order is confirmed.", fr: "Je n'arrive pas à gérer la surréservation via l'application Rental. Je dois vérifier manuellement l'application Planning avant que chaque commande de location soit confirmée." },
      { en: "By going to the Inventory app and setting the 'Product Type' to 'Storable Product', Odoo tracks the rooms as physical stock.", fr: "En accédant à l'application Inventaire et en définissant le « Type de produit » sur « Produit stockable », Odoo suit les pièces en tant que stock physique." },
      { en: "By going to the Rental settings and increasing the 'Default Padding Time' to 24 hours to ensure rooms remain empty between bookings.", fr: "En accédant aux paramètres de location et en augmentant le « Temps de remplissage par défaut » à 24 heures pour garantir que les chambres restent vides entre les réservations." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configure a Rental Service): By going to the product form, enabling 'Plan Services,' and creating a Planning Role with specific 'Material' resources for each room.",
      fr: "Source Odoo Learn (Configurer un service de location) : en accédant au formulaire du produit, en activant « Planifier les services » et en créant un rôle de planification avec des ressources « Matérielles » spécifiques pour chaque pièce.",
    },
  }),
  complexQ({
    id: "rtl-014",
    module: "rental",
    text: {
      en: "I want to offer a discounted corporate rate for a specific client. Can I set a custom rental price for a specific pricelist? (Odoo Learn — Configure a Rental Service)",
      fr: "Je souhaite offrir un tarif entreprise réduit à un client spécifique. Puis-je définir un prix de location personnalisé pour une liste de prix spécifique ? (Odoo Learn — Configurer un service de location)",
    },
    correct: {
      en: "By going to the 'Rental Prices' tab on the product form and selecting the existing Pricelist when adding a new price rule for the discounted price.",
      fr: "En accédant à l'onglet « Prix de location » sur le formulaire du produit et en sélectionnant la liste de prix existante lors de l'ajout d'une nouvelle règle de prix pour le prix réduit.",
    },
    distractors: [
      { en: "I can't do this because rental pricing is global and applies the same rate to every customer regardless of the pricelist selected.", fr: "Je ne peux pas faire cela car la tarification de la location est globale et applique le même tarif à chaque client quelle que soit la grille tarifaire sélectionnée." },
      { en: "By going to the Sales app and creating a manual discount rule that only applies to products categorized as 'Stay Offer.'", fr: "En accédant à l'application Ventes et en créant une règle de remise manuelle qui s'applique uniquement aux produits classés dans la catégorie « Offre de séjour »." },
      { en: "I can't set specific rental periods like 'Nightly' for corporate rates; I can only apply a percentage discount to the 'Daily' rate.", fr: "Je ne peux pas définir de périodes de location spécifiques telles que « Nuit » pour les tarifs d'entreprise ; Je ne peux appliquer qu'un pourcentage de réduction sur le tarif « Journal »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configure a Rental Service): By going to the 'Rental Prices' tab on the product form and selecting the existing Pricelist when adding a new price rule for the discounted price.",
      fr: "Source Odoo Learn (Configurer un service de location) : En allant dans l'onglet « Prix de location » du formulaire produit et en sélectionnant la liste de prix existante lors de l'ajout d'une nouvelle règle de prix pour le prix réduit.",
    },
  }),
  complexQ({
    id: "rtl-015",
    module: "rental",
    text: {
      en: "What should I do to collect a 10% deposit from a rental customer? (Odoo Learn — Rental Contracts And Down Payments)",
      fr: "Que dois-je faire pour percevoir un acompte de 10 % auprès d'un client locataire ? (Odoo Learn — Contrats de location et acomptes)",
    },
    correct: {
      en: "Open the rental order, click 'Create Invoice', select 'Down payment (percentage)', enter 10, and create the invoice.",
      fr: "Ouvrez le bon de location, cliquez sur « Créer une facture », sélectionnez « Acompte (pourcentage) », saisissez 10 et créez la facture.",
    },
    distractors: [
      { en: "Open the rental order and click 'Request Signature'.", fr: "Ouvrez le bon de location et cliquez sur « Demander une signature »." },
      { en: "Create a new product called \"Deposit\" and add it to the rental order.", fr: "Créez un nouveau produit appelé « Dépôt » et ajoutez-le au bon de location." },
      { en: "Open the Sign app and create a payment request.", fr: "Ouvrez l'application Sign et créez une demande de paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Rental Contracts And Down Payments): Open the rental order, click 'Create Invoice', select 'Down payment (percentage)', enter 10, and create the invoice.",
      fr: "Source Odoo Learn (Contrats de location et acomptes) : Ouvrez le bon de location, cliquez sur « Créer une facture », sélectionnez « Acompte (pourcentage) », saisissez 10 et créez la facture.",
    },
  }),
  complexQ({
    id: "rtl-016",
    module: "rental",
    text: {
      en: "Can I request signatures for a rental agreement directly from a rental order? (Odoo Learn — Rental Contracts And Down Payments)",
      fr: "Puis-je demander des signatures pour un contrat de location directement à partir d’un bon de location ? (Odoo Learn — Contrats de location et acomptes)",
    },
    correct: {
      en: "Yes, by clicking the Action menu on the rental order and selecting 'Request Signature'.",
      fr: "Oui, en cliquant sur le menu Action du bon de location et en sélectionnant « Demander une signature ».",
    },
    distractors: [
      { en: "No, I must create and send all signature requests from the Sign app.", fr: "Non, je dois créer et envoyer toutes les demandes de signature depuis l'application Sign." },
      { en: "No, rental agreements can only be printed and signed on paper.", fr: "Non, les contrats de location ne peuvent être imprimés et signés que sur papier." },
      { en: "Yes, but only after the final invoice has been paid.", fr: "Oui, mais seulement après paiement de la facture finale." },
    ],
    explanation: {
      en: "Source Odoo Learn (Rental Contracts And Down Payments): Yes, by clicking the Action menu on the rental order and selecting 'Request Signature'.",
      fr: "Source Odoo Learn (Contrats de location et acomptes) : Oui, en cliquant sur le menu Action du bon de location et en sélectionnant « Demander une signature ».",
    },
  }),
  complexQ({
    id: "rtl-017",
    module: "rental",
    text: {
      en: "If multiple people need to sign a rental agreement, what determines who signs first? (Odoo Learn — Rental Contracts And Down Payments)",
      fr: "Si plusieurs personnes doivent signer un contrat de location, qu’est-ce qui détermine qui signe en premier ? (Odoo Learn — Contrats de location et acomptes)",
    },
    correct: {
      en: "The signer order configured on the document determines who signs first.",
      fr: "L'ordre des signataires configuré sur le document détermine qui signe en premier.",
    },
    distractors: [
      { en: "The person whose contact record was created first.", fr: "Personne dont l'enregistrement de contact a été créé en premier." },
      { en: "The customer always signs before company employees.", fr: "Le client signe toujours devant les employés de l'entreprise." },
      { en: "Odoo automatically chooses the signing order based on user permissions.", fr: "Odoo choisit automatiquement l'ordre de signature en fonction des autorisations des utilisateurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Rental Contracts And Down Payments): The signer order configured on the document determines who signs first.",
      fr: "Source Odoo Learn (Contrats de location et acomptes) : L'ordre de signataire configuré sur le document détermine qui signe en premier.",
    },
  }),
  complexQ({
    id: "rtl-018",
    module: "rental",
    text: {
      en: "Can I limit the Default Delay Costs to only a few products? (Odoo Learn — Default Rental Time Windows)",
      fr: "Puis-je limiter les coûts de retard par défaut à quelques produits seulement ? (Odoo Learn — Fenêtres de durée de location par défaut)",
    },
    correct: {
      en: "No, Default Delay Costs can either be assigned to a single product or applied to all products.",
      fr: "Non, les coûts de retard par défaut peuvent être attribués à un seul produit ou appliqués à tous les produits.",
    },
    distractors: [
      { en: "Yes, you can select specific products to use the Default Delay Costs.", fr: "Oui, vous pouvez sélectionner des produits spécifiques pour utiliser les coûts de retard par défaut." },
      { en: "No, Default Delay Costs can either apply to all products or none.", fr: "Non, les frais de retard par défaut peuvent s'appliquer à tous les produits ou à aucun." },
      { en: "Yes, Default Delay Costs can be enabled on any product as long as the Rental app and Inventory app are installed.", fr: "Oui, les coûts de retard par défaut peuvent être activés sur n'importe quel produit à condition que les applications de location et d'inventaire soient installées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Default Rental Time Windows): No, Default Delay Costs can either be assigned to a single product or applied to all products.",
      fr: "Source Odoo Learn (fenêtres de durée de location par défaut) : Non, les coûts de retard par défaut peuvent être attribués à un seul produit ou appliqués à tous les produits.",
    },
  }),
  complexQ({
    id: "rtl-019",
    module: "rental",
    text: {
      en: "What automatically happens when the Rental Transfer feature is enabled? (Odoo Learn — Default Rental Time Windows)",
      fr: "Que se passe-t-il automatiquement lorsque la fonction de transfert de location est activée ? (Odoo Learn — Fenêtres de durée de location par défaut)",
    },
    correct: {
      en: "An internal location is automatically created.",
      fr: "Un emplacement interne est automatiquement créé.",
    },
    distractors: [
      { en: "The Inventory app is automatically installed.", fr: "L'application Inventaire est automatiquement installée." },
      { en: "A pop-up window displays, prompting the user to create a new location.", fr: "Une fenêtre contextuelle s'affiche, invitant l'utilisateur à créer un nouvel emplacement." },
      { en: "A new warehouse is created.", fr: "Un nouvel entrepôt est créé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Default Rental Time Windows): An internal location is automatically created.",
      fr: "Source Odoo Learn (Fenêtres de durée de location par défaut) : Un emplacement interne est automatiquement créé.",
    },
  }),
  complexQ({
    id: "rtl-020",
    module: "rental",
    text: {
      en: "Which action do I take to print the Pickup and Return receipt? (Odoo Learn — Default Rental Time Windows)",
      fr: "Quelle action dois-je entreprendre pour imprimer le reçu d'enlèvement et de retour ? (Odoo Learn — Fenêtres de durée de location par défaut)",
    },
    correct: {
      en: "On the rental order, click the Action icon, then Print, and select the Pickup and Return Receipt.",
      fr: "Sur le bon de location, cliquez sur l'icône Action, puis sur Imprimer et sélectionnez le reçu de ramassage et de retour.",
    },
    distractors: [
      { en: "On the rental order, go into List mode and select the rental order. Click the Actions button and select Print Pickup and Return Receipt.", fr: "Sur le bon de location, passez en mode Liste et sélectionnez le bon de location. Cliquez sur le bouton Actions et sélectionnez Imprimer le ramassage et le reçu de retour." },
      { en: "On the rental order, click the Delivery smart button. Select both transfers and click the Action button. Select the Print Pickup and Return Receipt.", fr: "Sur le bon de location, cliquez sur le bouton intelligent Livraison. Sélectionnez les deux transferts et cliquez sur le bouton Action. Sélectionnez l'impression du ramassage et du reçu de retour." },
      { en: "In the Inventory app, select  Receipts, select a receipt, click the Action icon, then Print, and select the Pickup and Return Receipt", fr: "Dans l'application Inventaire, sélectionnez Reçus, sélectionnez un reçu, cliquez sur l'icône Action, puis sur Imprimer, et sélectionnez le reçu de ramassage et de retour." },
    ],
    explanation: {
      en: "Source Odoo Learn (Default Rental Time Windows): On the rental order, click the Action icon, then Print, and select the Pickup and Return Receipt.",
      fr: "Source Odoo Learn (fenêtres de durée de location par défaut) : sur le bon de location, cliquez sur l'icône Action, puis sur Imprimer et sélectionnez le reçu de ramassage et de retour.",
    },
  }),
];
