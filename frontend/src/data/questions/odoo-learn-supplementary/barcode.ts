import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const barcodeSupplementaryQuestions = [
  complexQ({
    id: "bcd-001",
    module: "barcode",
    text: {
      en: "If I have a 1D/Linear barcode scanner, which type of barcode would I NOT be able to scan? (Odoo Learn — Barcode Basics)",
      fr: "Si je possède un lecteur de codes-barres 1D/linéaire, quel type de code-barres ne pourrais-je PAS scanner ? (Odoo Learn — Bases des codes-barres)",
    },
    correct: {
      en: "QR",
      fr: "QR",
    },
    distractors: [
      { en: "GS1-128", fr: "GS1-128" },
      { en: "EAN", fr: "EAN" },
      { en: "UPC", fr: "CUP" },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Basics): QR",
      fr: "Source Odoo Learn (bases des codes-barres) : QR",
    },
  }),
  complexQ({
    id: "bcd-002",
    module: "barcode",
    text: {
      en: "I am looking for an inexpensive device and my tablet does not have a USB port. What kind of barcode scanner should I get? (Odoo Learn — Barcode Basics)",
      fr: "Je recherche un appareil pas cher et ma tablette n'a pas de port USB. Quel type de lecteur de codes-barres dois-je me procurer ? (Odoo Learn — Bases des codes-barres)",
    },
    correct: {
      en: "Bluetooth Scanner",
      fr: "Scanner Bluetooth",
    },
    distractors: [
      { en: "USB Scanner", fr: "Scanner USB" },
      { en: "Mobile Computer Scanner", fr: "Scanner d'ordinateur portable" },
      { en: "RFID Scanner", fr: "Lecteur RFID" },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Basics): Bluetooth Scanner",
      fr: "Source Odoo Learn (bases des codes-barres) : scanner Bluetooth",
    },
  }),
  complexQ({
    id: "bcd-003",
    module: "barcode",
    text: {
      en: "What happens if I scan a product barcode in the search of an app that uses products BESIDES the Barcode app? (Odoo Learn — Barcode Basics)",
      fr: "Que se passe-t-il si je scanne le code-barres d'un produit lors de la recherche d'une application qui utilise des produits EN PLUS de l'application Barcode ? (Odoo Learn — Bases des codes-barres)",
    },
    correct: {
      en: "Odoo will filter the search results to ones that match the barcode.",
      fr: "Odoo filtrera les résultats de la recherche sur ceux qui correspondent au code-barres.",
    },
    distractors: [
      { en: "Nothing. Only Barcode can process barcodes.", fr: "Rien. Seul Barcode peut traiter les codes-barres." },
      { en: "Odoo will automatically switch to opening the Barcode app", fr: "Odoo passera automatiquement à l'ouverture de l'application Barcode" },
      { en: "Odoo will create a new product and input the barcode.", fr: "Odoo créera un nouveau produit et saisira le code-barres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Basics): Odoo will filter the search results to ones that match the barcode.",
      fr: "Source Odoo Learn (bases du code-barres) : Odoo filtrera les résultats de la recherche sur ceux qui correspondent au code-barres.",
    },
  }),
  complexQ({
    id: "bcd-004",
    module: "barcode",
    text: {
      en: "What do I need in order to print barcodes for locations in my warehouse? (Odoo Learn — Printing Barcodes)",
      fr: "De quoi ai-je besoin pour imprimer des codes-barres pour les emplacements de mon entrepôt ? (Odoo Learn — Impression de codes-barres)",
    },
    correct: {
      en: "To enable the “Storage Locations” feature.",
      fr: "Pour activer la fonctionnalité « Emplacements de stockage ».",
    },
    distractors: [
      { en: "A 2D-compatible barcode scanner.", fr: "Un scanner de codes-barres compatible 2D." },
      { en: "To enable both “Storage Locations” and “Packages”.", fr: "Pour activer à la fois les « Emplacements de stockage » et les « Packages »." },
      { en: "Nothing. Location barcodes are always available.", fr: "Rien. Les codes-barres de localisation sont toujours disponibles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Printing Barcodes): To enable the “Storage Locations” feature.",
      fr: "Source Odoo Learn (Impression de codes-barres) : Pour activer la fonctionnalité « Emplacements de stockage ».",
    },
  }),
  complexQ({
    id: "bcd-005",
    module: "barcode",
    text: {
      en: "How can I print barcodes for all my products at once? (Odoo Learn — Printing Barcodes)",
      fr: "Comment puis-je imprimer les codes-barres de tous mes produits en même temps ? (Odoo Learn — Impression de codes-barres)",
    },
    correct: {
      en: "Select all the products I want to print from the Products view of the Inventory app.",
      fr: "Sélectionnez tous les produits que je souhaite imprimer dans la vue Produits de l'application Inventaire.",
    },
    distractors: [
      { en: "You can only print barcodes for products one at a time.", fr: "Vous ne pouvez imprimer les codes-barres des produits qu'un par un." },
      { en: "Enable the “Print All Barcodes” settings.", fr: "Activez les paramètres « Imprimer tous les codes-barres »." },
      { en: "I can only print barcodes associated with an operation, like a receipt or delivery.", fr: "Je ne peux imprimer que les codes-barres associés à une opération, comme un reçu ou une livraison." },
    ],
    explanation: {
      en: "Source Odoo Learn (Printing Barcodes): Select all the products I want to print from the Products view of the Inventory app.",
      fr: "Source Odoo Learn (Impression de codes-barres) : Sélectionnez tous les produits que je souhaite imprimer dans la vue Produits de l'application Inventaire.",
    },
  }),
  complexQ({
    id: "bcd-006",
    module: "barcode",
    text: {
      en: "What happens if I choose the ZPL format when I print my barcodes but don’t have a ZPL-compatible printer connected? (Odoo Learn — Printing Barcodes)",
      fr: "Que se passe-t-il si je choisis le format ZPL lorsque j'imprime mes codes-barres mais que je n'ai pas d'imprimante compatible ZPL connectée ? (Odoo Learn — Impression de codes-barres)",
    },
    correct: {
      en: "It will download as a .txt file containing ZPL which can be edited to change the appearance of the labels.",
      fr: "Il sera téléchargé sous forme de fichier .txt contenant du ZPL qui peut être modifié pour modifier l'apparence des étiquettes.",
    },
    distractors: [
      { en: "Nothing. Printing will be suspended until a compatible printer is connected.", fr: "Rien. L'impression sera suspendue jusqu'à ce qu'une imprimante compatible soit connectée." },
      { en: "It will automatically print on any printer.", fr: "Il s’imprimera automatiquement sur n’importe quelle imprimante." },
      { en: "It will download as a .txt file that is unreadable by humans.", fr: "Il sera téléchargé sous forme de fichier .txt illisible par les humains." },
    ],
    explanation: {
      en: "Source Odoo Learn (Printing Barcodes): It will download as a .txt file containing ZPL which can be edited to change the appearance of the labels.",
      fr: "Source Odoo Learn (Impression de codes-barres) : Il sera téléchargé sous forme de fichier .txt contenant du ZPL qui peut être modifié pour modifier l'apparence des étiquettes.",
    },
  }),
  complexQ({
    id: "bcd-007",
    module: "barcode",
    text: {
      en: "How can I get Odoo to automatically search a database for barcodes when I scan an unrecognized product with a GS1 barcode? (Odoo Learn — Barcode Commands and Operations)",
      fr: "Comment puis-je demander à Odoo de rechercher automatiquement des codes-barres dans une base de données lorsque je scanne un produit non reconnu avec un code-barres GS1 ? (Odoo Learn — Commandes et opérations des codes-barres)",
    },
    correct: {
      en: "Enable “Stock Barcode Database” in Inventory settings.",
      fr: "Activez « Base de données de codes-barres de stock » dans les paramètres d'inventaire.",
    },
    distractors: [
      { en: "Scan a product, then copy and paste the barcode into barcodelookup.com.", fr: "Scannez un produit, puis copiez et collez le code-barres dans barcodelookup.com." },
      { en: "Enable “Storage Locations” in Inventory settings.", fr: "Activez « Emplacements de stockage » dans les paramètres d'inventaire." },
      { en: "Make a transfer to a virtual “Barcode Lookup” location.", fr: "Effectuez un transfert vers un emplacement virtuel « Recherche de codes-barres »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Commands and Operations): Enable “Stock Barcode Database” in Inventory settings.",
      fr: "Source Odoo Learn (commandes et opérations de codes-barres) : activez « Base de données de codes-barres de stock » dans les paramètres d'inventaire.",
    },
  }),
  complexQ({
    id: "bcd-008",
    module: "barcode",
    text: {
      en: "Which of these is a way I can start a transfer in Barcode? (Odoo Learn — Barcode Commands and Operations)",
      fr: "Lequel de ces moyens permet de démarrer un transfert dans Barcode ? (Odoo Learn — Commandes et opérations des codes-barres)",
    },
    correct: {
      en: "Both A and B.",
      fr: "A et B.",
    },
    distractors: [
      { en: "Scan a location barcode.", fr: "Scannez un code-barres de localisation." },
      { en: "Scan the “Internal Transfer (WHINT)” operation type barcode.", fr: "Scannez le code-barres du type d'opération « Transfert interne (WHINT) »." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Commands and Operations): Both A and B.",
      fr: "Source Odoo Learn (Commandes et opérations de codes-barres) : A et B.",
    },
  }),
  complexQ({
    id: "bcd-009",
    module: "barcode",
    text: {
      en: "How can I initiate a return using Barcode? (Odoo Learn — Barcode Commands and Operations)",
      fr: "Comment puis-je initier un retour à l'aide d'un code-barres ? (Odoo Learn — Commandes et opérations des codes-barres)",
    },
    correct: {
      en: "Scan the barcode for a completed order and scan the RETURN command barcode.",
      fr: "Scannez le code-barres d'une commande terminée et scannez le code-barres de la commande RETOUR.",
    },
    distractors: [
      { en: "Use the “Returns” operation type.", fr: "Utilisez le type d’opération « Retours »." },
      { en: "Scan the product and then scan the warehouse location it should be returned to", fr: "Scannez le produit, puis scannez l'emplacement de l'entrepôt vers lequel il doit être retourné." },
      { en: "This can only be done by printing a Return order from the Inventory app.", fr: "Cela ne peut être fait qu'en imprimant un bon de retour à partir de l'application Inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Commands and Operations): Scan the barcode for a completed order and scan the RETURN command barcode.",
      fr: "Source Odoo Learn (Commandes et opérations du code-barres) : Scannez le code-barres d'une commande terminée et scannez le code-barres de la commande RETOUR.",
    },
  }),
  complexQ({
    id: "bcd-010",
    module: "barcode",
    text: {
      en: "How can I add barcodes to all my products in my database? I would rather not open the products' Form Views individually. (Odoo Learn — Scanning Products in a PoS)",
      fr: "Comment puis-je ajouter des codes-barres à tous mes produits dans ma base de données ? Je préfère ne pas ouvrir les vues de formulaire des produits individuellement. (Odoo Learn — Scanner des produits dans un PoS)",
    },
    correct: {
      en: "In Inventory / Configuration / Settings, click on \"Configure Product Barcodes\" then add the barcodes in the right column.",
      fr: "Dans Inventaire / Configuration / Paramètres, cliquez sur « Configurer les codes-barres des produits » puis ajoutez les codes-barres dans la colonne de droite.",
    },
    distractors: [
      { en: "In Inventory -> Configuration -> Settings -> Barcode Management, synchronize your products list with an online distributor's database.", fr: "Dans Inventaire -> Configuration -> Paramètres -> Gestion des codes-barres, synchronisez votre liste de produits avec la base de données d'un distributeur en ligne." },
      { en: "In Barcode / Configuration, open the \"Add Barcodes\" menu, then scan a barcode and select the related product in the right column.", fr: "Dans Code Barres / Configuration, ouvrez le menu \"Ajouter des Codes Barres\", puis scannez un code barre et sélectionnez le produit associé dans la colonne de droite." },
      { en: "In Barcode / Configuration, open the \"Add Barcodes\" menu, then import the .xml file generated by the products' producers.", fr: "Dans Code Barres / Configuration, ouvrez le menu \"Ajouter des Codes Barres\", puis importez le fichier .xml généré par les producteurs des produits." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Products in a PoS): In Inventory / Configuration / Settings, click on \"Configure Product Barcodes\" then add the barcodes in the right column.",
      fr: "Source Odoo Learn (Scanner les produits dans un PoS) : Dans Inventaire/Configuration/Paramètres, cliquez sur « Configurer les codes-barres des produits » puis ajoutez les codes-barres dans la colonne de droite.",
    },
  }),
  complexQ({
    id: "bcd-011",
    module: "barcode",
    text: {
      en: "What option do I need to enable to scan products in my Point of Sales? (Odoo Learn — Scanning Products in a PoS)",
      fr: "Quelle option dois-je activer pour scanner les produits dans mon point de vente ? (Odoo Learn — Scanner des produits dans un PoS)",
    },
    correct: {
      en: "There is nothing to enable to scan your products.",
      fr: "Il n'y a rien pour permettre de scanner vos produits.",
    },
    distractors: [
      { en: "In Point of Sales / Configuration / Settings, enable \"Barcode\" then save.", fr: "Dans Point de Vente / Configuration / Paramètres, activez « Code Barre » puis enregistrez." },
      { en: "In Inventory / Configuration / Settings, enable \"Products Barcodes\" then save.", fr: "Dans Inventaire / Configuration / Paramètres, activez « Codes-barres produits » puis enregistrez." },
      { en: "In Inventory / Configuration / Settings, enable \"Barcode Scanner\" then save.", fr: "Dans Inventaire/Configuration/Paramètres, activez « Scanner de codes-barres » puis enregistrez." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Products in a PoS): There is nothing to enable to scan your products.",
      fr: "Source Odoo Learn (Analyse de produits dans un PoS) : Il n'y a rien qui permette d'analyser vos produits.",
    },
  }),
  complexQ({
    id: "bcd-012",
    module: "barcode",
    text: {
      en: "What kind of characters can barcodes be made up of? (Odoo Learn — Scanning Receipts and Deliveries)",
      fr: "De quels types de caractères les codes-barres peuvent-ils être constitués ? (Odoo Learn — Numérisation des reçus et des livraisons)",
    },
    correct: {
      en: "Numbers and letters",
      fr: "Chiffres et lettres",
    },
    distractors: [
      { en: "Only numbers", fr: "Seulement des chiffres" },
      { en: "Only letters", fr: "Seulement des lettres" },
      { en: "Numbers, letters, and special characters", fr: "Chiffres, lettres et caractères spéciaux" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Receipts and Deliveries): Numbers and letters",
      fr: "Source Odoo Learn (Scanning des reçus et des livraisons) : Chiffres et lettres",
    },
  }),
  complexQ({
    id: "bcd-013",
    module: "barcode",
    text: {
      en: "On a receipt, if the vendor does not attach barcodes to the shipment for you, how can you print a list of barcodes for the order’s expected products? (Odoo Learn — Scanning Receipts and Deliveries)",
      fr: "Sur un reçu, si le fournisseur ne joint pas de codes-barres à l'envoi pour vous, comment pouvez-vous imprimer une liste de codes-barres pour les produits attendus de la commande ? (Odoo Learn — Numérisation des reçus et des livraisons)",
    },
    correct: {
      en: "Tap the gear icon in the top right of the receipt, and tap ‘Print Barcodes’",
      fr: "Appuyez sur l'icône d'engrenage en haut à droite du reçu, puis appuyez sur « Imprimer les codes-barres »",
    },
    distractors: [
      { en: "Select the transfer, go to ‘File,’ and select ‘Print’", fr: "Sélectionnez le transfert, allez dans « Fichier » et sélectionnez « Imprimer »" },
      { en: "Select the transfer, and go to ‘Print’ in the menu bar, then select ‘Picking Operations’", fr: "Sélectionnez le transfert, allez dans « Imprimer » dans la barre de menu, puis sélectionnez « Opérations de prélèvement »" },
      { en: "Select the transfer, tap ‘Action’ > ‘Print,’ then select ‘Picking Operations’", fr: "Sélectionnez le transfert, appuyez sur « Action » > « Imprimer », puis sélectionnez « Opérations de prélèvement »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Receipts and Deliveries): Tap the gear icon in the top right of the receipt, and tap ‘Print Barcodes’",
      fr: "Source Odoo Learn (numérisation des reçus et des livraisons) : appuyez sur l'icône d'engrenage en haut à droite du reçu, puis appuyez sur \"Imprimer les codes-barres\".",
    },
  }),
  complexQ({
    id: "bcd-014",
    module: "barcode",
    text: {
      en: "In Odoo, what types of records can barcodes be added to: (Odoo Learn — Scanning Receipts and Deliveries)",
      fr: "Dans Odoo, à quels types d’enregistrements les codes-barres peuvent-ils être ajoutés : (Odoo Learn — Numérisation des reçus et des livraisons)",
    },
    correct: {
      en: "Products, Operation Types, Packagings, Locations, and Package Types",
      fr: "Produits, types d'opérations, emballages, emplacements et types d'emballages",
    },
    distractors: [
      { en: "Only products", fr: "Uniquement les produits" },
      { en: "Product categories, Products, and Variants", fr: "Catégories de produits, produits et variantes" },
      { en: "Products, Packagings, Putaway rules, and Recording rules", fr: "Produits, emballages, règles de mise en stock et règles d'enregistrement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Receipts and Deliveries): Products, Operation Types, Packagings, Locations, and Package Types",
      fr: "Source Odoo Learn (analyse des reçus et des livraisons) : produits, types d'opérations, emballages, emplacements et types de colis",
    },
  }),
  complexQ({
    id: "bcd-015",
    module: "barcode",
    text: {
      en: "What do I need to configure to do internal transfers of my products with a barcode scanner? (Odoo Learn — Scanning Inventory Adjustments and Internal Transfers)",
      fr: "Que dois-je configurer pour effectuer des transferts internes de mes produits avec un lecteur de codes-barres ? (Odoo Learn — Analyse des ajustements d'inventaire et des transferts internes)",
    },
    correct: {
      en: "Enable \"Storage Locations\" in Inventory / Configuration / Settings and add barcodes to the different Locations in the Inventory app.",
      fr: "Activez « Emplacements de stockage » dans Inventaire/Configuration/Paramètres et ajoutez des codes-barres aux différents emplacements dans l'application Inventaire.",
    },
    distractors: [
      { en: "Add barcodes to the different Locations in the Inventory app.", fr: "Ajoutez des codes-barres aux différents emplacements dans l'application Inventaire." },
      { en: "Enable the Warp Drive, Mr. Sulu", fr: "Activez le Warp Drive, M. Sulu" },
      { en: "Enable \"Inventory Moves\" in the Barcode app and add barcodes to the different Locations in the Inventory app.", fr: "Activez « Déplacements d'inventaire » dans l'application Codes-barres et ajoutez des codes-barres aux différents emplacements dans l'application Inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Inventory Adjustments and Internal Transfers): Enable \"Storage Locations\" in Inventory / Configuration / Settings and add barcodes to the different Locations in the Inventory app.",
      fr: "Source Odoo Learn (Analyse des ajustements d'inventaire et des transferts internes) : Activez « Emplacements de stockage » dans Inventaire/Configuration/Paramètres et ajoutez des codes-barres aux différents emplacements dans l'application Inventaire.",
    },
  }),
  complexQ({
    id: "bcd-016",
    module: "barcode",
    text: {
      en: "Which of the following is NOT a required setting to show reserved lots/serial numbers in the Barcode app? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
      fr: "Lequel des éléments suivants n'est PAS un paramètre obligatoire pour afficher les lots réservés/numéros de série dans l'application Barcode ? (Odoo Learn — Cueillette avec lots réservés et numéros de série)",
    },
    correct: {
      en: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Multi-Step Routes’",
      fr: "Application « Inventaire » > « Configuration » > « Paramètres » > « Itinéraires en plusieurs étapes »",
    },
    distractors: [
      { en: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Barcode Scanner’", fr: "Application « Inventaire » > « Configuration » > « Paramètres » > « Scanner de codes-barres »" },
      { en: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Lots & Serial Numbers’", fr: "Application « Inventaire » > « Configuration » > « Paramètres » > « Lots et numéros de série »" },
      { en: "‘Inventory’ app > ‘Configuration’ > ‘Operations Types’ > ‘Delivery Orders’ > ‘Barcode App’ > ‘Show reserved/lots/SN’", fr: "Application « Inventaire » > « Configuration » > « Types d'opérations » > « Ordres de livraison » > « Application Code-barres » > « Afficher les lots/lots/SN réservés ;" },
    ],
    explanation: {
      en: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): ‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Multi-Step Routes’",
      fr: "Source Odoo Learn (Péparation avec lots réservés et numéros de série) : application « Inventaire » > « Configuration » > « Paramètres » > « Itinéraires en plusieurs étapes »",
    },
  }),
  complexQ({
    id: "bcd-017",
    module: "barcode",
    text: {
      en: "How many times does a product barcode need to be scanned to add multiples of a reserved product to an order? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
      fr: "Combien de fois faut-il scanner le code-barres d'un produit pour ajouter des multiples d'un produit réservé à une commande ? (Odoo Learn — Cueillette avec lots réservés et numéros de série)",
    },
    correct: {
      en: "Both B & C",
      fr: "B et C",
    },
    distractors: [
      { en: "Once per order; Odoo will automatically add all reserved multiples of a product after one is scanned", fr: "Une fois par commande ; Odoo ajoutera automatiquement tous les multiples réservés d'un produit après en avoir scanné un" },
      { en: "Once per item that should be added to the order", fr: "Une fois par article à ajouter à la commande" },
      { en: "The barcode doesn’t have to be scanned; each item can be added manually", fr: "Le code-barres n’a pas besoin d’être scanné ; chaque élément peut être ajouté manuellement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): Both B & C",
      fr: "Source Odoo Learn (Picking avec lots réservés et numéros de série) : B et C",
    },
  }),
  complexQ({
    id: "bcd-018",
    module: "barcode",
    text: {
      en: "When reserved lots/serial numbers are turned on in the Barcode app, what happens if I try to scan an item that is not reserved for the order? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
      fr: "Lorsque les lots/numéros de série réservés sont activés dans l'application Barcode, que se passe-t-il si j'essaie de numériser un article qui n'est pas réservé pour la commande ? (Odoo Learn — Cueillette avec lots réservés et numéros de série)",
    },
    correct: {
      en: "The item will still get added to the order, but will be highlighted in red",
      fr: "L'article sera quand même ajouté à la commande, mais sera surligné en rouge",
    },
    distractors: [
      { en: "The item will be highlighted in red, but will not get added to the order", fr: "L'article sera surligné en rouge, mais ne sera pas ajouté à la commande" },
      { en: "Nothing; the item will not get added to the order at all", fr: "Rien; l'article ne sera pas du tout ajouté à la commande" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): The item will still get added to the order, but will be highlighted in red",
      fr: "Source Odoo Learn (Péparation avec lots réservés et numéros de série) : L'article sera toujours ajouté à la commande, mais sera surligné en rouge",
    },
  }),
  complexQ({
    id: "bcd-019",
    module: "barcode",
    text: {
      en: "True or False: ‘Package Types’ appears as a field on the product form. (Odoo Learn — Scan Barcodes on Product Packaging)",
      fr: "Vrai ou faux : « Types de colis » apparaît sous forme de champ sur le formulaire de produit. (Odoo Learn — Scanner les codes-barres sur l'emballage du produit)",
    },
    correct: {
      en: "True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Package Types’",
      fr: "Vrai - mais il n'apparaît sur le formulaire du produit qu'après avoir été activé dans l'application « Inventaire » > « Configuration » > « Types de packages »",
    },
    distractors: [
      { en: "True - it appears on the product form automatically", fr: "Vrai - il apparaît automatiquement sur le formulaire du produit" },
      { en: "True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Product Packagings’", fr: "Vrai, mais il n'apparaît sur le formulaire du produit qu'après avoir été activé dans l'application « Inventaire » > « Configuration » > « Emballages du produit »." },
      { en: "False - ‘Package Types’ only appears on the purchase or sales order form", fr: "Faux – « Types de colis » n'apparaît que sur le formulaire de commande d'achat ou de vente." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scan Barcodes on Product Packaging): True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Package Types’",
      fr: "Source Odoo Learn (Scanner les codes-barres sur l'emballage du produit) : Vrai - mais il n'apparaît sur le formulaire du produit qu'après avoir été activé dans l'application « Inventaire » > « Configuration » > « Types de colis »",
    },
  }),
  complexQ({
    id: "bcd-020",
    module: "barcode",
    text: {
      en: "After they’re configured on a product form, during which operations are packaging types automatically reflected? (Odoo Learn — Scan Barcodes on Product Packaging)",
      fr: "Une fois configurés sur une fiche produit, au cours de quelles opérations les types d’emballages sont-ils automatiquement reflétés ? (Odoo Learn — Scanner les codes-barres sur l'emballage du produit)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Purchase orders", fr: "Bons de commande" },
      { en: "Sales orders", fr: "Commandes client" },
      { en: "Inventory transfers", fr: "Transferts de stocks" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scan Barcodes on Product Packaging): All of the above",
      fr: "Source Odoo Learn (Scanner les codes-barres sur l'emballage du produit) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "bcd-021",
    module: "barcode",
    text: {
      en: "From which of the following Odoo apps can you create  manufacturing order? (Odoo Learn — Process and Cancel MOs Using Barcodes)",
      fr: "À partir de laquelle des applications Odoo suivantes pouvez-vous créer un ordre de fabrication ? (Odoo Learn — Traiter et annuler les MO à l'aide de codes-barres)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "The ‘Barcode’ app", fr: "L'application « Code-barres »" },
      { en: "The ‘Sales’ app", fr: "L'application « Ventes »" },
      { en: "The ‘Manufacturing’ app", fr: "L’application « Fabrication »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): All of the above",
      fr: "Source Odoo Learn (Traiter et annuler les MO à l'aide de codes-barres) : tout ce qui précède",
    },
  }),
  complexQ({
    id: "bcd-022",
    module: "barcode",
    text: {
      en: "How can you open a manufacturing order in the ‘Barcode’ app? (Odoo Learn — Process and Cancel MOs Using Barcodes)",
      fr: "Comment ouvrir un ordre de fabrication dans l'application « Code-barres » ? (Odoo Learn — Traiter et annuler les MO à l'aide de codes-barres)",
    },
    correct: {
      en: "None of the above",
      fr: "Aucune des réponses ci-dessus",
    },
    distractors: [
      { en: "‘Barcode’ app > ‘Manufacturing’ card > ‘ MOs button", fr: "Application « Code-barres » > Carte « Fabrication » > Bouton « MOs »" },
      { en: "‘Barcode’ app > ‘Operations’ card > Scan the barcode", fr: "Application « Code-barres » > Carte « Opérations » > Scanner le code-barres" },
      { en: "A and B", fr: "A et B" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): None of the above",
      fr: "Source Odoo Learn (Traitement et annulation des MO à l'aide de codes-barres) : Aucune de ces réponses",
    },
  }),
  complexQ({
    id: "bcd-023",
    module: "barcode",
    text: {
      en: "True or false: Manufacturing orders can be cancelled in the ‘Barcode’ app. (Odoo Learn — Process and Cancel MOs Using Barcodes)",
      fr: "Vrai ou faux : les ordres de fabrication peuvent être annulés dans l'application « Code-barres ». (Odoo Learn — Traiter et annuler les MO à l'aide de codes-barres)",
    },
    correct: {
      en: "True; any order can be cancelled once the MO is open by clicking the gear icon.",
      fr: "Vrai; toute commande peut être annulée une fois le MO ouvert en cliquant sur l'icône en forme d'engrenage.",
    },
    distractors: [
      { en: "True, but only if the products in the MO are untracked.", fr: "C'est vrai, mais seulement si les produits du MO ne sont pas suivis." },
      { en: "True, but only if the customer’s purchase has already been refunded.", fr: "C’est vrai, mais seulement si l’achat du client a déjà été remboursé." },
      { en: "False; MOs have to be cancelled in the ‘Manufacturing’ app.", fr: "FAUX; Les MO doivent être annulés dans l’application « Fabrication »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): True; any order can be cancelled once the MO is open by clicking the gear icon.",
      fr: "Source Odoo Learn (Traitement et annulation des MO à l'aide de codes-barres) : Vrai ; toute commande peut être annulée une fois le MO ouvert en cliquant sur l'icône en forme d'engrenage.",
    },
  }),
  complexQ({
    id: "bcd-024",
    module: "barcode",
    text: {
      en: "Which of the following is NOT a way to register the consumption of a finished good's components in the 'Barcode' app? (Odoo Learn — Consuming Components Using Barcodes)",
      fr: "Lequel des éléments suivants n'est PAS un moyen d'enregistrer la consommation des composants d'un produit fini dans l'application « Code-barres » ? (Odoo Learn — Consommer des composants à l'aide de codes-barres)",
    },
    correct: {
      en: "Consume all components at once by scanning any of the components’ barcodes.",
      fr: "Consommez tous les composants en même temps en scannant les codes-barres de l’un des composants.",
    },
    distractors: [
      { en: "Consume all components at once by scanning the finished product’s barcode.", fr: "Consommez tous les composants en même temps en scannant le code-barres du produit fini." },
      { en: "Consume components one-by-one, by clicking the pencil icon next to a component.", fr: "Consommez les composants un par un, en cliquant sur l'icône en forme de crayon à côté d'un composant." },
      { en: "Consume components one-by-one, by clicking the ‘+1’ button next to a component.", fr: "Consommez les composants un par un, en cliquant sur le bouton « +1 » à côté d'un composant." },
    ],
    explanation: {
      en: "Source Odoo Learn (Consuming Components Using Barcodes): Consume all components at once by scanning any of the components’ barcodes.",
      fr: "Source Odoo Learn (Consommation de composants à l'aide de codes-barres) : consommez tous les composants en même temps en scannant les codes-barres de l'un des composants.",
    },
  }),
  complexQ({
    id: "bcd-025",
    module: "barcode",
    text: {
      en: "True or false: Untracked inventory cannot be scanned in the ‘Barcode’ app. (Odoo Learn — Consuming Components Using Barcodes)",
      fr: "Vrai ou faux : l'inventaire non suivi ne peut pas être numérisé dans l'application « Code-barres ». (Odoo Learn — Consommer des composants à l'aide de codes-barres)",
    },
    correct: {
      en: "False",
      fr: "FAUX",
    },
    distractors: [
      { en: "True - untracked inventory cannot be scanned because Odoo won’t have any lot or serial number barcodes to pull from.", fr: "Vrai : l'inventaire non suivi ne peut pas être scanné car Odoo n'aura aucun code-barres de lot ou de numéro de série à extraire." },
      { en: "Somewhat true - the components cannot be scanned if they are  untracked, but the finished product can be scanned.", fr: "Un peu vrai : les composants ne peuvent pas être analysés s'ils ne sont pas suivis, mais le produit fini peut être analysé." },
      { en: "Somewhat true - the finished product cannot be scanned if it is untracked, but the components can be scanned.", fr: "Un peu vrai : le produit fini ne peut pas être numérisé s'il n'est pas suivi, mais les composants peuvent être numérisés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Consuming Components Using Barcodes): False",
      fr: "Source Odoo Learn (Consommation de composants à l'aide de codes-barres) : Faux",
    },
  }),
  complexQ({
    id: "bcd-026",
    module: "barcode",
    text: {
      en: "Which of the following ways can components be scrapped in the ‘Barcode’ app? (Odoo Learn — Consuming Components Using Barcodes)",
      fr: "De quelles manières les composants peuvent-ils être mis au rebut dans l'application « Code-barres » ? (Odoo Learn — Consommer des composants à l'aide de codes-barres)",
    },
    correct: {
      en: "Both of the above.",
      fr: "Les deux ci-dessus.",
    },
    distractors: [
      { en: "Click the gear icon > click ‘Scrap’ > select the product to be scrapped > click ‘Scrap’ again.", fr: "Cliquez sur l'icône d'engrenage > cliquez sur « Rebut » > sélectionnez le produit à mettre au rebut > cliquez à nouveau sur « Rebut »." },
      { en: "Scan the ‘Scrap’ command barcode.", fr: "Scannez le code-barres de la commande « Scrap »." },
      { en: "Neither of the above.", fr: "Ni l'un ni l'autre de ce qui précède." },
    ],
    explanation: {
      en: "Source Odoo Learn (Consuming Components Using Barcodes): Both of the above.",
      fr: "Source Odoo Learn (Consommation de composants à l'aide de codes-barres) : les deux ci-dessus.",
    },
  }),
];
