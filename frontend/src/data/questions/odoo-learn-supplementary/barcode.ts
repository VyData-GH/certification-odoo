import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const barcodeSupplementaryQuestions = [
  complexQ({
    id: "bcd-001",
    module: "barcode",
    text: {
      en: "If I have a 1D/Linear barcode scanner, which type of barcode would I NOT be able to scan? (Odoo Learn — Barcode Basics)",
      fr: "If I have a 1D/Linear barcode scanner, which type of barcode would I NOT be able to scan? (Odoo Learn — Barcode Basics)",
    },
    correct: {
      en: "QR",
      fr: "QR",
    },
    distractors: [
      { en: "GS1-128", fr: "GS1-128" },
      { en: "EAN", fr: "EAN" },
      { en: "UPC", fr: "UPC" },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Basics): QR",
      fr: "Source Odoo Learn (Barcode Basics): QR",
    },
  }),
  complexQ({
    id: "bcd-002",
    module: "barcode",
    text: {
      en: "I am looking for an inexpensive device and my tablet does not have a USB port. What kind of barcode scanner should I get? (Odoo Learn — Barcode Basics)",
      fr: "I am looking for an inexpensive device and my tablet does not have a USB port. What kind of barcode scanner should I get? (Odoo Learn — Barcode Basics)",
    },
    correct: {
      en: "Bluetooth Scanner",
      fr: "Bluetooth Scanner",
    },
    distractors: [
      { en: "USB Scanner", fr: "USB Scanner" },
      { en: "Mobile Computer Scanner", fr: "Mobile Computer Scanner" },
      { en: "RFID Scanner", fr: "RFID Scanner" },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Basics): Bluetooth Scanner",
      fr: "Source Odoo Learn (Barcode Basics): Bluetooth Scanner",
    },
  }),
  complexQ({
    id: "bcd-003",
    module: "barcode",
    text: {
      en: "What happens if I scan a product barcode in the search of an app that uses products BESIDES the Barcode app? (Odoo Learn — Barcode Basics)",
      fr: "What happens if I scan a product barcode in the search of an app that uses products BESIDES the Barcode app? (Odoo Learn — Barcode Basics)",
    },
    correct: {
      en: "Odoo will filter the search results to ones that match the barcode.",
      fr: "Odoo will filter the search results to ones that match the barcode.",
    },
    distractors: [
      { en: "Nothing. Only Barcode can process barcodes.", fr: "Nothing. Only Barcode can process barcodes." },
      { en: "Odoo will automatically switch to opening the Barcode app", fr: "Odoo will automatically switch to opening the Barcode app" },
      { en: "Odoo will create a new product and input the barcode.", fr: "Odoo will create a new product and input the barcode." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Basics): Odoo will filter the search results to ones that match the barcode.",
      fr: "Source Odoo Learn (Barcode Basics): Odoo will filter the search results to ones that match the barcode.",
    },
  }),
  complexQ({
    id: "bcd-004",
    module: "barcode",
    text: {
      en: "What do I need in order to print barcodes for locations in my warehouse? (Odoo Learn — Printing Barcodes)",
      fr: "What do I need in order to print barcodes for locations in my warehouse? (Odoo Learn — Printing Barcodes)",
    },
    correct: {
      en: "To enable the “Storage Locations” feature.",
      fr: "To enable the “Storage Locations” feature.",
    },
    distractors: [
      { en: "A 2D-compatible barcode scanner.", fr: "A 2D-compatible barcode scanner." },
      { en: "To enable both “Storage Locations” and “Packages”.", fr: "To enable both “Storage Locations” and “Packages”." },
      { en: "Nothing. Location barcodes are always available.", fr: "Nothing. Location barcodes are always available." },
    ],
    explanation: {
      en: "Source Odoo Learn (Printing Barcodes): To enable the “Storage Locations” feature.",
      fr: "Source Odoo Learn (Printing Barcodes): To enable the “Storage Locations” feature.",
    },
  }),
  complexQ({
    id: "bcd-005",
    module: "barcode",
    text: {
      en: "How can I print barcodes for all my products at once? (Odoo Learn — Printing Barcodes)",
      fr: "How can I print barcodes for all my products at once? (Odoo Learn — Printing Barcodes)",
    },
    correct: {
      en: "Select all the products I want to print from the Products view of the Inventory app.",
      fr: "Select all the products I want to print from the Products view of the Inventory app.",
    },
    distractors: [
      { en: "You can only print barcodes for products one at a time.", fr: "You can only print barcodes for products one at a time." },
      { en: "Enable the “Print All Barcodes” settings.", fr: "Enable the “Print All Barcodes” settings." },
      { en: "I can only print barcodes associated with an operation, like a receipt or delivery.", fr: "I can only print barcodes associated with an operation, like a receipt or delivery." },
    ],
    explanation: {
      en: "Source Odoo Learn (Printing Barcodes): Select all the products I want to print from the Products view of the Inventory app.",
      fr: "Source Odoo Learn (Printing Barcodes): Select all the products I want to print from the Products view of the Inventory app.",
    },
  }),
  complexQ({
    id: "bcd-006",
    module: "barcode",
    text: {
      en: "What happens if I choose the ZPL format when I print my barcodes but don’t have a ZPL-compatible printer connected? (Odoo Learn — Printing Barcodes)",
      fr: "What happens if I choose the ZPL format when I print my barcodes but don’t have a ZPL-compatible printer connected? (Odoo Learn — Printing Barcodes)",
    },
    correct: {
      en: "It will download as a .txt file containing ZPL which can be edited to change the appearance of the labels.",
      fr: "It will download as a .txt file containing ZPL which can be edited to change the appearance of the labels.",
    },
    distractors: [
      { en: "Nothing. Printing will be suspended until a compatible printer is connected.", fr: "Nothing. Printing will be suspended until a compatible printer is connected." },
      { en: "It will automatically print on any printer.", fr: "It will automatically print on any printer." },
      { en: "It will download as a .txt file that is unreadable by humans.", fr: "It will download as a .txt file that is unreadable by humans." },
    ],
    explanation: {
      en: "Source Odoo Learn (Printing Barcodes): It will download as a .txt file containing ZPL which can be edited to change the appearance of the labels.",
      fr: "Source Odoo Learn (Printing Barcodes): It will download as a .txt file containing ZPL which can be edited to change the appearance of the labels.",
    },
  }),
  complexQ({
    id: "bcd-007",
    module: "barcode",
    text: {
      en: "How can I get Odoo to automatically search a database for barcodes when I scan an unrecognized product with a GS1 barcode? (Odoo Learn — Barcode Commands and Operations)",
      fr: "How can I get Odoo to automatically search a database for barcodes when I scan an unrecognized product with a GS1 barcode? (Odoo Learn — Barcode Commands and Operations)",
    },
    correct: {
      en: "Enable “Stock Barcode Database” in Inventory settings.",
      fr: "Enable “Stock Barcode Database” in Inventory settings.",
    },
    distractors: [
      { en: "Scan a product, then copy and paste the barcode into barcodelookup.com.", fr: "Scan a product, then copy and paste the barcode into barcodelookup.com." },
      { en: "Enable “Storage Locations” in Inventory settings.", fr: "Enable “Storage Locations” in Inventory settings." },
      { en: "Make a transfer to a virtual “Barcode Lookup” location.", fr: "Make a transfer to a virtual “Barcode Lookup” location." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Commands and Operations): Enable “Stock Barcode Database” in Inventory settings.",
      fr: "Source Odoo Learn (Barcode Commands and Operations): Enable “Stock Barcode Database” in Inventory settings.",
    },
  }),
  complexQ({
    id: "bcd-008",
    module: "barcode",
    text: {
      en: "Which of these is a way I can start a transfer in Barcode? (Odoo Learn — Barcode Commands and Operations)",
      fr: "Which of these is a way I can start a transfer in Barcode? (Odoo Learn — Barcode Commands and Operations)",
    },
    correct: {
      en: "Both A and B.",
      fr: "Both A and B.",
    },
    distractors: [
      { en: "Scan a location barcode.", fr: "Scan a location barcode." },
      { en: "Scan the “Internal Transfer (WHINT)” operation type barcode.", fr: "Scan the “Internal Transfer (WHINT)” operation type barcode." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Commands and Operations): Both A and B.",
      fr: "Source Odoo Learn (Barcode Commands and Operations): Both A and B.",
    },
  }),
  complexQ({
    id: "bcd-009",
    module: "barcode",
    text: {
      en: "How can I initiate a return using Barcode? (Odoo Learn — Barcode Commands and Operations)",
      fr: "How can I initiate a return using Barcode? (Odoo Learn — Barcode Commands and Operations)",
    },
    correct: {
      en: "Scan the barcode for a completed order and scan the RETURN command barcode.",
      fr: "Scan the barcode for a completed order and scan the RETURN command barcode.",
    },
    distractors: [
      { en: "Use the “Returns” operation type.", fr: "Use the “Returns” operation type." },
      { en: "Scan the product and then scan the warehouse location it should be returned to", fr: "Scan the product and then scan the warehouse location it should be returned to" },
      { en: "This can only be done by printing a Return order from the Inventory app.", fr: "This can only be done by printing a Return order from the Inventory app." },
    ],
    explanation: {
      en: "Source Odoo Learn (Barcode Commands and Operations): Scan the barcode for a completed order and scan the RETURN command barcode.",
      fr: "Source Odoo Learn (Barcode Commands and Operations): Scan the barcode for a completed order and scan the RETURN command barcode.",
    },
  }),
  complexQ({
    id: "bcd-010",
    module: "barcode",
    text: {
      en: "How can I add barcodes to all my products in my database? I would rather not open the products' Form Views individually. (Odoo Learn — Scanning Products in a PoS)",
      fr: "How can I add barcodes to all my products in my database? I would rather not open the products' Form Views individually. (Odoo Learn — Scanning Products in a PoS)",
    },
    correct: {
      en: "In Inventory / Configuration / Settings, click on \"Configure Product Barcodes\" then add the barcodes in the right column.",
      fr: "In Inventory / Configuration / Settings, click on \"Configure Product Barcodes\" then add the barcodes in the right column.",
    },
    distractors: [
      { en: "In Inventory -> Configuration -> Settings -> Barcode Management, synchronize your products list with an online distributor's database.", fr: "In Inventory -> Configuration -> Settings -> Barcode Management, synchronize your products list with an online distributor's database." },
      { en: "In Barcode / Configuration, open the \"Add Barcodes\" menu, then scan a barcode and select the related product in the right column.", fr: "In Barcode / Configuration, open the \"Add Barcodes\" menu, then scan a barcode and select the related product in the right column." },
      { en: "In Barcode / Configuration, open the \"Add Barcodes\" menu, then import the .xml file generated by the products' producers.", fr: "In Barcode / Configuration, open the \"Add Barcodes\" menu, then import the .xml file generated by the products' producers." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Products in a PoS): In Inventory / Configuration / Settings, click on \"Configure Product Barcodes\" then add the barcodes in the right column.",
      fr: "Source Odoo Learn (Scanning Products in a PoS): In Inventory / Configuration / Settings, click on \"Configure Product Barcodes\" then add the barcodes in the right column.",
    },
  }),
  complexQ({
    id: "bcd-011",
    module: "barcode",
    text: {
      en: "What option do I need to enable to scan products in my Point of Sales? (Odoo Learn — Scanning Products in a PoS)",
      fr: "What option do I need to enable to scan products in my Point of Sales? (Odoo Learn — Scanning Products in a PoS)",
    },
    correct: {
      en: "There is nothing to enable to scan your products.",
      fr: "There is nothing to enable to scan your products.",
    },
    distractors: [
      { en: "In Point of Sales / Configuration / Settings, enable \"Barcode\" then save.", fr: "In Point of Sales / Configuration / Settings, enable \"Barcode\" then save." },
      { en: "In Inventory / Configuration / Settings, enable \"Products Barcodes\" then save.", fr: "In Inventory / Configuration / Settings, enable \"Products Barcodes\" then save." },
      { en: "In Inventory / Configuration / Settings, enable \"Barcode Scanner\" then save.", fr: "In Inventory / Configuration / Settings, enable \"Barcode Scanner\" then save." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Products in a PoS): There is nothing to enable to scan your products.",
      fr: "Source Odoo Learn (Scanning Products in a PoS): There is nothing to enable to scan your products.",
    },
  }),
  complexQ({
    id: "bcd-012",
    module: "barcode",
    text: {
      en: "What kind of characters can barcodes be made up of? (Odoo Learn — Scanning Receipts and Deliveries)",
      fr: "What kind of characters can barcodes be made up of? (Odoo Learn — Scanning Receipts and Deliveries)",
    },
    correct: {
      en: "Numbers and letters",
      fr: "Numbers and letters",
    },
    distractors: [
      { en: "Only numbers", fr: "Only numbers" },
      { en: "Only letters", fr: "Only letters" },
      { en: "Numbers, letters, and special characters", fr: "Numbers, letters, and special characters" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Receipts and Deliveries): Numbers and letters",
      fr: "Source Odoo Learn (Scanning Receipts and Deliveries): Numbers and letters",
    },
  }),
  complexQ({
    id: "bcd-013",
    module: "barcode",
    text: {
      en: "On a receipt, if the vendor does not attach barcodes to the shipment for you, how can you print a list of barcodes for the order’s expected products? (Odoo Learn — Scanning Receipts and Deliveries)",
      fr: "On a receipt, if the vendor does not attach barcodes to the shipment for you, how can you print a list of barcodes for the order’s expected products? (Odoo Learn — Scanning Receipts and Deliveries)",
    },
    correct: {
      en: "Tap the gear icon in the top right of the receipt, and tap ‘Print Barcodes’",
      fr: "Tap the gear icon in the top right of the receipt, and tap ‘Print Barcodes’",
    },
    distractors: [
      { en: "Select the transfer, go to ‘File,’ and select ‘Print’", fr: "Select the transfer, go to ‘File,’ and select ‘Print’" },
      { en: "Select the transfer, and go to ‘Print’ in the menu bar, then select ‘Picking Operations’", fr: "Select the transfer, and go to ‘Print’ in the menu bar, then select ‘Picking Operations’" },
      { en: "Select the transfer, tap ‘Action’ > ‘Print,’ then select ‘Picking Operations’", fr: "Select the transfer, tap ‘Action’ > ‘Print,’ then select ‘Picking Operations’" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Receipts and Deliveries): Tap the gear icon in the top right of the receipt, and tap ‘Print Barcodes’",
      fr: "Source Odoo Learn (Scanning Receipts and Deliveries): Tap the gear icon in the top right of the receipt, and tap ‘Print Barcodes’",
    },
  }),
  complexQ({
    id: "bcd-014",
    module: "barcode",
    text: {
      en: "In Odoo, what types of records can barcodes be added to: (Odoo Learn — Scanning Receipts and Deliveries)",
      fr: "In Odoo, what types of records can barcodes be added to: (Odoo Learn — Scanning Receipts and Deliveries)",
    },
    correct: {
      en: "Products, Operation Types, Packagings, Locations, and Package Types",
      fr: "Products, Operation Types, Packagings, Locations, and Package Types",
    },
    distractors: [
      { en: "Only products", fr: "Only products" },
      { en: "Product categories, Products, and Variants", fr: "Product categories, Products, and Variants" },
      { en: "Products, Packagings, Putaway rules, and Recording rules", fr: "Products, Packagings, Putaway rules, and Recording rules" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Receipts and Deliveries): Products, Operation Types, Packagings, Locations, and Package Types",
      fr: "Source Odoo Learn (Scanning Receipts and Deliveries): Products, Operation Types, Packagings, Locations, and Package Types",
    },
  }),
  complexQ({
    id: "bcd-015",
    module: "barcode",
    text: {
      en: "What do I need to configure to do internal transfers of my products with a barcode scanner? (Odoo Learn — Scanning Inventory Adjustments and Internal Transfers)",
      fr: "What do I need to configure to do internal transfers of my products with a barcode scanner? (Odoo Learn — Scanning Inventory Adjustments and Internal Transfers)",
    },
    correct: {
      en: "Enable \"Storage Locations\" in Inventory / Configuration / Settings and add barcodes to the different Locations in the Inventory app.",
      fr: "Enable \"Storage Locations\" in Inventory / Configuration / Settings and add barcodes to the different Locations in the Inventory app.",
    },
    distractors: [
      { en: "Add barcodes to the different Locations in the Inventory app.", fr: "Add barcodes to the different Locations in the Inventory app." },
      { en: "Enable the Warp Drive, Mr. Sulu", fr: "Enable the Warp Drive, Mr. Sulu" },
      { en: "Enable \"Inventory Moves\" in the Barcode app and add barcodes to the different Locations in the Inventory app.", fr: "Enable \"Inventory Moves\" in the Barcode app and add barcodes to the different Locations in the Inventory app." },
    ],
    explanation: {
      en: "Source Odoo Learn (Scanning Inventory Adjustments and Internal Transfers): Enable \"Storage Locations\" in Inventory / Configuration / Settings and add barcodes to the different Locations in the Inventory app.",
      fr: "Source Odoo Learn (Scanning Inventory Adjustments and Internal Transfers): Enable \"Storage Locations\" in Inventory / Configuration / Settings and add barcodes to the different Locations in the Inventory app.",
    },
  }),
  complexQ({
    id: "bcd-016",
    module: "barcode",
    text: {
      en: "Which of the following is NOT a required setting to show reserved lots/serial numbers in the Barcode app? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
      fr: "Which of the following is NOT a required setting to show reserved lots/serial numbers in the Barcode app? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
    },
    correct: {
      en: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Multi-Step Routes’",
      fr: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Multi-Step Routes’",
    },
    distractors: [
      { en: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Barcode Scanner’", fr: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Barcode Scanner’" },
      { en: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Lots & Serial Numbers’", fr: "‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Lots & Serial Numbers’" },
      { en: "‘Inventory’ app > ‘Configuration’ > ‘Operations Types’ > ‘Delivery Orders’ > ‘Barcode App’ > ‘Show reserved/lots/SN’", fr: "‘Inventory’ app > ‘Configuration’ > ‘Operations Types’ > ‘Delivery Orders’ > ‘Barcode App’ > ‘Show reserved/lots/SN’" },
    ],
    explanation: {
      en: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): ‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Multi-Step Routes’",
      fr: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): ‘Inventory’ app > ‘Configuration’ > ‘Settings’ > ‘Multi-Step Routes’",
    },
  }),
  complexQ({
    id: "bcd-017",
    module: "barcode",
    text: {
      en: "How many times does a product barcode need to be scanned to add multiples of a reserved product to an order? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
      fr: "How many times does a product barcode need to be scanned to add multiples of a reserved product to an order? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
    },
    correct: {
      en: "Both B & C",
      fr: "B et C",
    },
    distractors: [
      { en: "Once per order; Odoo will automatically add all reserved multiples of a product after one is scanned", fr: "Once per order; Odoo will automatically add all reserved multiples of a product after one is scanned" },
      { en: "Once per item that should be added to the order", fr: "Once per item that should be added to the order" },
      { en: "The barcode doesn’t have to be scanned; each item can be added manually", fr: "The barcode doesn’t have to be scanned; each item can be added manually" },
    ],
    explanation: {
      en: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): Both B & C",
      fr: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): Both B & C",
    },
  }),
  complexQ({
    id: "bcd-018",
    module: "barcode",
    text: {
      en: "When reserved lots/serial numbers are turned on in the Barcode app, what happens if I try to scan an item that is not reserved for the order? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
      fr: "When reserved lots/serial numbers are turned on in the Barcode app, what happens if I try to scan an item that is not reserved for the order? (Odoo Learn — Picking with Reserved Lots & Serial Numbers)",
    },
    correct: {
      en: "The item will still get added to the order, but will be highlighted in red",
      fr: "The item will still get added to the order, but will be highlighted in red",
    },
    distractors: [
      { en: "The item will be highlighted in red, but will not get added to the order", fr: "The item will be highlighted in red, but will not get added to the order" },
      { en: "Nothing; the item will not get added to the order at all", fr: "Nothing; the item will not get added to the order at all" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): The item will still get added to the order, but will be highlighted in red",
      fr: "Source Odoo Learn (Picking with Reserved Lots & Serial Numbers): The item will still get added to the order, but will be highlighted in red",
    },
  }),
  complexQ({
    id: "bcd-019",
    module: "barcode",
    text: {
      en: "True or False: ‘Package Types’ appears as a field on the product form. (Odoo Learn — Scan Barcodes on Product Packaging)",
      fr: "True or False: ‘Package Types’ appears as a field on the product form. (Odoo Learn — Scan Barcodes on Product Packaging)",
    },
    correct: {
      en: "True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Package Types’",
      fr: "True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Package Types’",
    },
    distractors: [
      { en: "True - it appears on the product form automatically", fr: "True - it appears on the product form automatically" },
      { en: "True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Product Packagings’", fr: "True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Product Packagings’" },
      { en: "False - ‘Package Types’ only appears on the purchase or sales order form", fr: "False - ‘Package Types’ only appears on the purchase or sales order form" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scan Barcodes on Product Packaging): True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Package Types’",
      fr: "Source Odoo Learn (Scan Barcodes on Product Packaging): True - but it only appears on the product form after it’s enabled in ‘Inventory’ app > ‘Configuration’ > ‘Package Types’",
    },
  }),
  complexQ({
    id: "bcd-020",
    module: "barcode",
    text: {
      en: "After they’re configured on a product form, during which operations are packaging types automatically reflected? (Odoo Learn — Scan Barcodes on Product Packaging)",
      fr: "After they’re configured on a product form, during which operations are packaging types automatically reflected? (Odoo Learn — Scan Barcodes on Product Packaging)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Purchase orders", fr: "Bons de commande" },
      { en: "Sales orders", fr: "Sales orders" },
      { en: "Inventory transfers", fr: "Inventory transfers" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scan Barcodes on Product Packaging): All of the above",
      fr: "Source Odoo Learn (Scan Barcodes on Product Packaging): All of the above",
    },
  }),
  complexQ({
    id: "bcd-021",
    module: "barcode",
    text: {
      en: "From which of the following Odoo apps can you create  manufacturing order? (Odoo Learn — Process and Cancel MOs Using Barcodes)",
      fr: "From which of the following Odoo apps can you create  manufacturing order? (Odoo Learn — Process and Cancel MOs Using Barcodes)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "The ‘Barcode’ app", fr: "The ‘Barcode’ app" },
      { en: "The ‘Sales’ app", fr: "The ‘Sales’ app" },
      { en: "The ‘Manufacturing’ app", fr: "The ‘Manufacturing’ app" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): All of the above",
      fr: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): All of the above",
    },
  }),
  complexQ({
    id: "bcd-022",
    module: "barcode",
    text: {
      en: "How can you open a manufacturing order in the ‘Barcode’ app? (Odoo Learn — Process and Cancel MOs Using Barcodes)",
      fr: "How can you open a manufacturing order in the ‘Barcode’ app? (Odoo Learn — Process and Cancel MOs Using Barcodes)",
    },
    correct: {
      en: "None of the above",
      fr: "Aucune des réponses ci-dessus",
    },
    distractors: [
      { en: "‘Barcode’ app > ‘Manufacturing’ card > ‘ MOs button", fr: "‘Barcode’ app > ‘Manufacturing’ card > ‘ MOs button" },
      { en: "‘Barcode’ app > ‘Operations’ card > Scan the barcode", fr: "‘Barcode’ app > ‘Operations’ card > Scan the barcode" },
      { en: "A and B", fr: "A et B" },
    ],
    explanation: {
      en: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): None of the above",
      fr: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): None of the above",
    },
  }),
  complexQ({
    id: "bcd-023",
    module: "barcode",
    text: {
      en: "True or false: Manufacturing orders can be cancelled in the ‘Barcode’ app. (Odoo Learn — Process and Cancel MOs Using Barcodes)",
      fr: "True or false: Manufacturing orders can be cancelled in the ‘Barcode’ app. (Odoo Learn — Process and Cancel MOs Using Barcodes)",
    },
    correct: {
      en: "True; any order can be cancelled once the MO is open by clicking the gear icon.",
      fr: "True; any order can be cancelled once the MO is open by clicking the gear icon.",
    },
    distractors: [
      { en: "True, but only if the products in the MO are untracked.", fr: "True, but only if the products in the MO are untracked." },
      { en: "True, but only if the customer’s purchase has already been refunded.", fr: "True, but only if the customer’s purchase has already been refunded." },
      { en: "False; MOs have to be cancelled in the ‘Manufacturing’ app.", fr: "False; MOs have to be cancelled in the ‘Manufacturing’ app." },
    ],
    explanation: {
      en: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): True; any order can be cancelled once the MO is open by clicking the gear icon.",
      fr: "Source Odoo Learn (Process and Cancel MOs Using Barcodes): True; any order can be cancelled once the MO is open by clicking the gear icon.",
    },
  }),
  complexQ({
    id: "bcd-024",
    module: "barcode",
    text: {
      en: "Which of the following is NOT a way to register the consumption of a finished good's components in the 'Barcode' app? (Odoo Learn — Consuming Components Using Barcodes)",
      fr: "Which of the following is NOT a way to register the consumption of a finished good's components in the 'Barcode' app? (Odoo Learn — Consuming Components Using Barcodes)",
    },
    correct: {
      en: "Consume all components at once by scanning any of the components’ barcodes.",
      fr: "Consume all components at once by scanning any of the components’ barcodes.",
    },
    distractors: [
      { en: "Consume all components at once by scanning the finished product’s barcode.", fr: "Consume all components at once by scanning the finished product’s barcode." },
      { en: "Consume components one-by-one, by clicking the pencil icon next to a component.", fr: "Consume components one-by-one, by clicking the pencil icon next to a component." },
      { en: "Consume components one-by-one, by clicking the ‘+1’ button next to a component.", fr: "Consume components one-by-one, by clicking the ‘+1’ button next to a component." },
    ],
    explanation: {
      en: "Source Odoo Learn (Consuming Components Using Barcodes): Consume all components at once by scanning any of the components’ barcodes.",
      fr: "Source Odoo Learn (Consuming Components Using Barcodes): Consume all components at once by scanning any of the components’ barcodes.",
    },
  }),
  complexQ({
    id: "bcd-025",
    module: "barcode",
    text: {
      en: "True or false: Untracked inventory cannot be scanned in the ‘Barcode’ app. (Odoo Learn — Consuming Components Using Barcodes)",
      fr: "True or false: Untracked inventory cannot be scanned in the ‘Barcode’ app. (Odoo Learn — Consuming Components Using Barcodes)",
    },
    correct: {
      en: "False",
      fr: "False",
    },
    distractors: [
      { en: "True - untracked inventory cannot be scanned because Odoo won’t have any lot or serial number barcodes to pull from.", fr: "True - untracked inventory cannot be scanned because Odoo won’t have any lot or serial number barcodes to pull from." },
      { en: "Somewhat true - the components cannot be scanned if they are  untracked, but the finished product can be scanned.", fr: "Somewhat true - the components cannot be scanned if they are  untracked, but the finished product can be scanned." },
      { en: "Somewhat true - the finished product cannot be scanned if it is untracked, but the components can be scanned.", fr: "Somewhat true - the finished product cannot be scanned if it is untracked, but the components can be scanned." },
    ],
    explanation: {
      en: "Source Odoo Learn (Consuming Components Using Barcodes): False",
      fr: "Source Odoo Learn (Consuming Components Using Barcodes): False",
    },
  }),
  complexQ({
    id: "bcd-026",
    module: "barcode",
    text: {
      en: "Which of the following ways can components be scrapped in the ‘Barcode’ app? (Odoo Learn — Consuming Components Using Barcodes)",
      fr: "Which of the following ways can components be scrapped in the ‘Barcode’ app? (Odoo Learn — Consuming Components Using Barcodes)",
    },
    correct: {
      en: "Both of the above.",
      fr: "Both of the above.",
    },
    distractors: [
      { en: "Click the gear icon > click ‘Scrap’ > select the product to be scrapped > click ‘Scrap’ again.", fr: "Click the gear icon > click ‘Scrap’ > select the product to be scrapped > click ‘Scrap’ again." },
      { en: "Scan the ‘Scrap’ command barcode.", fr: "Scan the ‘Scrap’ command barcode." },
      { en: "Neither of the above.", fr: "Neither of the above." },
    ],
    explanation: {
      en: "Source Odoo Learn (Consuming Components Using Barcodes): Both of the above.",
      fr: "Source Odoo Learn (Consuming Components Using Barcodes): Both of the above.",
    },
  }),
];
