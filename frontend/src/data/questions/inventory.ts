import { complexQ } from "./helpers";

export const inventoryQuestions = [
  complexQ({
    id: "inv-001",
    module: "inventory",
    text: {
      en: "What is a warehouse location hierarchy in Odoo 19 Inventory?",
      fr: "Qu'est-ce qu'une hiérarchie d'emplacements dans Inventaire Odoo 19 ?",
    },
    correct: {
      en: "A tree structure of locations such as warehouse, zones, shelves, and bins reflecting physical storage layout",
      fr: "Une structure arborescente d'emplacements comme entrepôt, zones, étagères et casiers reflétant l'organisation physique du stockage",
    },
    distractors: [
      {
        en: "A nested product category tree that defines where each product family must be stored by default",
        fr: "Une arborescence de catégories produits imbriquées définissant où chaque famille produit doit être stockée par défaut",
      },
      {
        en: "The partner delivery address hierarchy used to route outbound shipments to customer zones",
        fr: "La hiérarchie des adresses de livraison partenaires utilisée pour router les expéditions sortantes vers les zones client",
      },
      {
        en: "The chart of accounts structure mapped one-to-one with stock valuation journals per warehouse",
        fr: "La structure du plan comptable mappée un pour un avec les journaux de valorisation stock par entrepôt",
      },
    ],
    explanation: {
      en: "Stock locations are organized as a parent-child tree under each warehouse to mirror real storage areas and enable precise tracking.",
      fr: "Les emplacements stock sont organisés en arborescence parent-enfant sous chaque entrepôt pour refléter les zones réelles et permettre un suivi précis.",
    },
  }),
  complexQ({
    id: "inv-002",
    module: "inventory",
    text: {
      en: "What is a stock move in Odoo 19 Inventory?",
      fr: "Qu'est-ce qu'un mouvement de stock dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "A record tracking product quantity transferred from a source location to a destination location",
      fr: "Un enregistrement suivant la quantité produit transférée d'un emplacement source vers un emplacement de destination",
    },
    distractors: [
      {
        en: "A customer invoice line that deducts delivered quantity from the sales order without warehouse impact",
        fr: "Une ligne de facture client qui déduit la quantité livrée de la commande sans impact entrepôt",
      },
      {
        en: "A manufacturing bill of materials component line consumed automatically at work order confirmation",
        fr: "Une ligne de composant de nomenclature consommée automatiquement à la confirmation de l'ordre de travail",
      },
      {
        en: "An accounting journal entry posted when validating a vendor bill for purchased storable products",
        fr: "Une écriture comptable comptabilisée lors de la validation d'une facture fournisseur pour des produits stockables achetés",
      },
    ],
    explanation: {
      en: "Stock moves are the core inventory transactions executed within pickings, receipts, deliveries, and internal transfers.",
      fr: "Les mouvements de stock sont les transactions inventaire exécutées dans les réceptions, livraisons, prélèvements et transferts internes.",
    },
  }),
  complexQ({
    id: "inv-003",
    module: "inventory",
    text: {
      en: "How do you validate a delivery order to ship products to a customer in Odoo 19?",
      fr: "Comment valider un bon de livraison pour expédier des produits au client dans Odoo 19 ?",
    },
    correct: {
      en: "Set the done quantities on the delivery order lines and click Validate to confirm shipment and deduct stock",
      fr: "Renseigner les quantités faites sur les lignes du bon de livraison et cliquer Valider pour confirmer l'expédition et déduire le stock",
    },
    distractors: [
      {
        en: "Confirm the sales order only; delivery orders auto-validate and post stock moves without warehouse processing",
        fr: "Confirmer uniquement la commande de vente ; les bons de livraison se valident automatiquement et comptabilisent les mouvements sans traitement entrepôt",
      },
      {
        en: "Post the customer invoice; invoicing triggers delivery validation and stock deduction in one step",
        fr: "Comptabiliser la facture client ; la facturation déclenche la validation de livraison et la déduction stock en une étape",
      },
      {
        en: "Create a purchase return; outbound customer shipments are processed as reverse receipts from vendors",
        fr: "Créer un retour achat ; les expéditions client sortantes sont traitées comme des réceptions inverses depuis les fournisseurs",
      },
    ],
    explanation: {
      en: "Validating the delivery order confirms picked quantities, updates on-hand stock, and can trigger downstream invoicing based on policy.",
      fr: "Valider le bon de livraison confirme les quantités prélevées, met à jour le stock disponible et peut déclencher la facturation selon la politique.",
    },
  }),
  complexQ({
    id: "inv-004",
    module: "inventory",
    text: {
      en: "What is an inventory adjustment used for in Odoo 19?",
      fr: "À quoi sert un ajustement d'inventaire dans Odoo 19 ?",
    },
    correct: {
      en: "Reconcile system on-hand quantities with a physical stock count by applying counted quantity corrections",
      fr: "Rapprocher les quantités système en stock avec un inventaire physique en appliquant les corrections de quantités comptées",
    },
    distractors: [
      {
        en: "Adjust the sales price list when product costs change after a vendor bill is posted",
        fr: "Ajuster la liste de prix de vente quand les coûts produit changent après comptabilisation d'une facture fournisseur",
      },
      {
        en: "Correct customer delivery addresses on confirmed sales orders before printing shipping labels",
        fr: "Corriger les adresses de livraison client sur les commandes confirmées avant l'impression des étiquettes d'expédition",
      },
      {
        en: "Revalue fixed assets when warehouse equipment is depreciated at year-end in accounting",
        fr: "Revaloriser les immobilisations quand le matériel entrepôt est amorti en fin d'exercice en comptabilité",
      },
    ],
    explanation: {
      en: "Inventory adjustments update quants when physical counts differ from system stock, with optional accounting impact depending on valuation.",
      fr: "Les ajustements d'inventaire mettent à jour les quants quand le comptage physique diffère du stock système, avec impact comptable selon la valorisation.",
    },
  }),
  complexQ({
    id: "inv-005",
    module: "inventory",
    text: {
      en: "When is lot or serial number tracking required in Odoo 19 Inventory?",
      fr: "Quand le suivi par lot ou numéro de série est-il requis dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "When traceability is needed for batches or unique units such as expiry dates, warranties, or product recalls",
      fr: "Quand la traçabilité est nécessaire pour des lots ou unités uniques : dates de péremption, garanties ou rappels produits",
    },
    distractors: [
      {
        en: "For all storable products by default; serial tracking is mandatory once a warehouse is configured",
        fr: "Pour tous les produits stockables par défaut ; le suivi série est obligatoire dès qu'un entrepôt est configuré",
      },
      {
        en: "Only for consumable products used in manufacturing; storable products rely on location tracking instead",
        fr: "Uniquement pour les produits consommables utilisés en fabrication ; les stockables s'appuient sur le suivi par emplacement",
      },
      {
        en: "When barcodes are printed on product labels; lot numbers replace internal reference codes automatically",
        fr: "Quand des codes-barres sont imprimés sur les étiquettes produit ; les numéros de lot remplacent automatiquement les références internes",
      },
    ],
    explanation: {
      en: "Lots group quantities with shared traceability data; serial numbers track individual items. Both are enabled per product when required.",
      fr: "Les lots regroupent des quantités avec des données de traçabilité communes ; les numéros de série suivent chaque unité. Les deux s'activent par produit si nécessaire.",
    },
  }),
  complexQ({
    id: "inv-006",
    module: "inventory",
    text: {
      en: "What is the difference between MTS and MTO routes in Odoo 19?",
      fr: "Quelle est la différence entre les routes MTS et MTO dans Odoo 19 ?",
    },
    correct: {
      en: "MTS fulfills demand from available stock; MTO triggers procurement when demand is confirmed and stock is insufficient",
      fr: "MTS satisfait la demande depuis le stock disponible ; MTO déclenche l'approvisionnement à la demande confirmée si le stock est insuffisant",
    },
    distractors: [
      {
        en: "MTS always creates purchase orders on sales confirmation; MTO waits for reordering rules to reach maximum stock",
        fr: "MTS crée toujours des commandes achat à la confirmation vente ; MTO attend que les règles de réapprovisionnement atteignent le stock maximum",
      },
      {
        en: "MTS applies to service products; MTO applies to storable products with standard cost valuation only",
        fr: "MTS s'applique aux produits service ; MTO s'applique aux produits stockables en coût standard uniquement",
      },
      {
        en: "MTS and MTO are accounting routes that control when COGS is posted on customer invoices",
        fr: "MTS et MTO sont des routes comptables contrôlant quand le COGS est comptabilisé sur les factures client",
      },
    ],
    explanation: {
      en: "Make to Stock uses warehouse on-hand quantity. Make to Order procures or manufactures per confirmed demand via pull rules.",
      fr: "Make to Stock utilise le stock en entrepôt. Make to Order approvisionne ou fabrique à la demande confirmée via les règles pull.",
    },
  }),
  complexQ({
    id: "inv-007",
    module: "inventory",
    text: {
      en: "How does the Barcode app support warehouse operations in Odoo 19?",
      fr: "Comment l'application Code-barres supporte-t-elle les opérations entrepôt dans Odoo 19 ?",
    },
    correct: {
      en: "Scan product and location barcodes to process receipts, picks, pack operations, and internal transfers on mobile devices",
      fr: "Scanner les codes-barres produits et emplacements pour traiter réceptions, prélèvements, colisage et transferts internes sur terminaux mobiles",
    },
    distractors: [
      {
        en: "Scan employee badges at warehouse entry to auto-create attendance records linked to picking performance",
        fr: "Scanner les badges employés à l'entrée entrepôt pour créer automatiquement des présences liées à la performance de prélèvement",
      },
      {
        en: "Generate product barcodes for the sales catalog; scanning at POS checkout updates warehouse stock levels",
        fr: "Générer des codes-barres produits pour le catalogue vente ; le scan à la caisse POS met à jour les niveaux de stock entrepôt",
      },
      {
        en: "Replace delivery order validation with barcode printing; physical labels confirm shipment without stock moves",
        fr: "Remplacer la validation des bons de livraison par l'impression code-barres ; les étiquettes physiques confirment l'expédition sans mouvements",
      },
    ],
    explanation: {
      en: "The Barcode app provides a mobile interface to validate warehouse operations step by step through scanning.",
      fr: "L'application Code-barres fournit une interface mobile pour valider les opérations entrepôt étape par étape via le scan.",
    },
  }),
  complexQ({
    id: "inv-008",
    module: "inventory",
    text: {
      en: "What is a reordering rule (minimum/maximum rule) in Odoo 19 Inventory?",
      fr: "Qu'est-ce qu'une règle de réapprovisionnement (min/max) dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "An automated rule that creates procurement documents when on-hand quantity falls below the configured minimum",
      fr: "Une règle automatique créant des documents d'approvisionnement quand la quantité disponible passe sous le minimum configuré",
    },
    distractors: [
      {
        en: "A sales pricelist tier that triggers discounts when order quantity exceeds the maximum threshold",
        fr: "Un palier de liste de prix déclenchant des remises quand la quantité commandée dépasse le seuil maximum",
      },
      {
        en: "A putaway rule that moves excess stock from picking zones back to bulk storage when above maximum",
        fr: "Une règle de rangement déplaçant l'excédent de stock des zones de prélèvement vers le stock bulk au-dessus du maximum",
      },
      {
        en: "A quality control frequency setting that blocks receipts until inspection counts reach the minimum sample",
        fr: "Un paramètre de fréquence contrôle qualité bloquant les réceptions tant que les comptages d'inspection n'atteignent pas l'échantillon minimum",
      },
    ],
    explanation: {
      en: "Reordering rules monitor stock levels per product and location, generating purchase or manufacturing requests to reach the maximum quantity.",
      fr: "Les règles de réapprovisionnement surveillent les niveaux par produit et emplacement, générant achats ou fabrications pour atteindre le maximum.",
    },
  }),
  complexQ({
    id: "inv-009",
    module: "inventory",
    text: {
      en: "How do you scrap damaged products in Odoo 19 Inventory?",
      fr: "Comment mettre au rebut des produits endommagés dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "Use the Scrap operation to move products from stock to a dedicated scrap location and remove them from available quantity",
      fr: "Utiliser l'opération Mise au rebut pour déplacer les produits vers un emplacement rebut et les retirer de la quantité disponible",
    },
    distractors: [
      {
        en: "Set on-hand quantity to zero with an inventory adjustment without using a scrap location or move",
        fr: "Mettre la quantité disponible à zéro via un ajustement d'inventaire sans utiliser d'emplacement rebut ni mouvement",
      },
      {
        en: "Create a customer credit note; scrapping is handled financially in accounting without inventory moves",
        fr: "Créer un avoir client ; la mise au rebut se gère financièrement en comptabilité sans mouvements inventaire",
      },
      {
        en: "Return damaged goods to the vendor with a purchase receipt reversal; scrap applies only to manufacturing waste",
        fr: "Retourner les marchandises endommagées au fournisseur avec une réception achat inversée ; le rebut ne s'applique qu'aux déchets de fabrication",
      },
    ],
    explanation: {
      en: "Scrap moves transfer unusable products to a scrap location, updating quants and optionally posting inventory valuation adjustments.",
      fr: "Les mouvements de rebut transfèrent les produits inutilisables vers un emplacement rebut, mettant à jour les quants et éventuellement la valorisation.",
    },
  }),
  complexQ({
    id: "inv-010",
    module: "inventory",
    text: {
      en: "What is an internal transfer in Odoo 19 Inventory?",
      fr: "Qu'est-ce qu'un transfert interne dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "Moving stock between internal locations within the same company without a customer sale or vendor purchase",
      fr: "Déplacer du stock entre emplacements internes au sein de la même société sans vente client ni achat fournisseur",
    },
    distractors: [
      {
        en: "Shipping goods to an external customer from the output location as part of a two-step delivery flow",
        fr: "Expédier des marchandises à un client externe depuis l'emplacement sortie dans un flux de livraison en deux étapes",
      },
      {
        en: "Receiving purchased goods from a vendor into the input location before quality inspection",
        fr: "Réceptionner des marchandises achetées d'un fournisseur dans l'emplacement entrée avant contrôle qualité",
      },
      {
        en: "Posting an inter-company journal entry to transfer inventory value between legal entities",
        fr: "Comptabiliser une écriture inter-sociétés pour transférer la valeur inventaire entre entités légales",
      },
    ],
    explanation: {
      en: "Internal transfers relocate products between warehouses, zones, or bins while stock remains within the company.",
      fr: "Les transferts internes déplacent des produits entre entrepôts, zones ou casiers tandis que le stock reste au sein de la société.",
    },
  }),
  complexQ({
    id: "inv-011",
    module: "inventory",
    text: {
      en: "What does reservation mean for a delivery order in Odoo 19?",
      fr: "Que signifie la réservation pour un bon de livraison dans Odoo 19 ?",
    },
    correct: {
      en: "Specific on-hand quantity is allocated to the outgoing move and no longer available for other demands",
      fr: "Une quantité disponible spécifique est allouée au mouvement sortant et n'est plus disponible pour d'autres demandes",
    },
    distractors: [
      {
        en: "The customer prepayment is received and the sales order is locked against further line modifications",
        fr: "Le prépaiement client est reçu et la commande est verrouillée contre toute modification de lignes",
      },
      {
        en: "The product BOM is confirmed in manufacturing before components can be picked for assembly orders",
        fr: "La nomenclature produit est confirmée en fabrication avant que les composants puissent être prélevés pour les ordres d'assemblage",
      },
      {
        en: "A purchase RFQ is sent to the vendor to guarantee supply before the delivery order is created",
        fr: "Une RFQ est envoyée au fournisseur pour garantir l'approvisionnement avant la création du bon de livraison",
      },
    ],
    explanation: {
      en: "Reservation links quants (and lots/serials when tracked) to delivery moves, preventing double allocation and overselling.",
      fr: "La réservation lie les quants (et lots/séries si suivis) aux mouvements de livraison, évitant la double allocation et la survente.",
    },
  }),
  complexQ({
    id: "inv-012",
    module: "inventory",
    text: {
      en: "How do Units of Measure (UoM) conversions work in Odoo 19 Inventory?",
      fr: "Comment fonctionnent les conversions d'unités de mesure en Odoo 19 Inventaire ?",
    },
    correct: {
      en: "Products can use different purchase, stock, and sales UoMs with defined conversion ratios between units",
      fr: "Les produits peuvent utiliser des UdM achat, stock et vente différentes avec des ratios de conversion définis entre unités",
    },
    distractors: [
      {
        en: "Each product must use a single UoM across purchase, stock, and sales; conversions happen only on invoices",
        fr: "Chaque produit doit utiliser une seule UdM pour achat, stock et vente ; les conversions se font uniquement sur les factures",
      },
      {
        en: "UoM conversions apply only to service products; storable products are always tracked in kilograms",
        fr: "Les conversions UdM s'appliquent uniquement aux produits service ; les stockables sont toujours suivis en kilogrammes",
      },
      {
        en: "Conversion factors are computed from the last vendor bill unit price rather than configured on the product",
        fr: "Les facteurs de conversion sont calculés depuis le prix unitaire de la dernière facture fournisseur plutôt que configurés sur le produit",
      },
    ],
    explanation: {
      en: "Odoo converts quantities automatically between UoMs using the ratios set on the product or UoM category.",
      fr: "Odoo convertit automatiquement les quantités entre UdM selon les ratios définis sur le produit ou la catégorie d'UdM.",
    },
  }),
  complexQ({
    id: "inv-013",
    module: "inventory",
    text: {
      en: "What is a cycle count in inventory management in Odoo 19?",
      fr: "Qu'est-ce qu'un comptage cyclique en gestion d'inventaire dans Odoo 19 ?",
    },
    correct: {
      en: "Regular partial physical counts of selected locations or products to maintain stock accuracy over time",
      fr: "Des inventaires physiques partiels réguliers d'emplacements ou produits sélectionnés pour maintenir la précision du stock dans le temps",
    },
    distractors: [
      {
        en: "A full warehouse shutdown count performed once per year replacing all daily inventory adjustments",
        fr: "Un inventaire annuel avec arrêt entrepôt remplaçant tous les ajustements d'inventaire quotidiens",
      },
      {
        en: "Rotating CRM lead assignment among sales teams to balance pipeline review workload each quarter",
        fr: "Une rotation d'assignation de pistes CRM entre équipes commerciales pour équilibrer la charge de revue pipeline chaque trimestre",
      },
      {
        en: "Automatic recount triggered by reordering rules when minimum stock is reached on fast-moving products",
        fr: "Un recomptage automatique déclenché par les règles de réapprovisionnement quand le stock minimum est atteint sur les produits à rotation rapide",
      },
    ],
    explanation: {
      en: "Cycle counting audits inventory subsets on a schedule, reducing discrepancies without waiting for a full annual count.",
      fr: "Le comptage cyclique audite des sous-ensembles de stock selon un planning, réduisant les écarts sans attendre un inventaire annuel complet.",
    },
  }),
  complexQ({
    id: "inv-014",
    module: "inventory",
    text: {
      en: "What are putaway rules used for in Odoo 19 Inventory?",
      fr: "À quoi servent les règles de rangement (putaway) dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "Automatically suggest or enforce destination storage locations when products are received into the warehouse",
      fr: "Suggérer ou imposer automatiquement les emplacements de destination quand les produits sont réceptionnés en entrepôt",
    },
    distractors: [
      {
        en: "Optimize outbound picking routes by sorting delivery order lines by customer priority and carrier cutoff",
        fr: "Optimiser les routes de prélèvement sortantes en triant les lignes de livraison par priorité client et cutoff transporteur",
      },
      {
        en: "Define vendor lead times and minimum order quantities on product supplier info records",
        fr: "Définir les délais fournisseur et quantités minimum de commande sur les fiches info fournisseur produit",
      },
      {
        en: "Set default sales packaging quantities on the product form for eCommerce checkout bundles",
        fr: "Définir les quantités d'emballage vente par défaut sur la fiche produit pour les bundles eCommerce",
      },
    ],
    explanation: {
      en: "Putaway rules direct incoming products from receipt areas to optimal storage locations based on product and warehouse configuration.",
      fr: "Les règles de rangement dirigent les produits entrants des zones de réception vers les emplacements optimaux selon produit et entrepôt.",
    },
  }),
  complexQ({
    id: "inv-015",
    module: "inventory",
    text: {
      en: "What is a multi-step reception flow (e.g., receive then store) in Odoo 19?",
      fr: "Qu'est-ce qu'un flux de réception multi-étapes (ex. réceptionner puis ranger) dans Odoo 19 ?",
    },
    correct: {
      en: "Incoming goods pass through intermediate locations such as input and quality before reaching final stock",
      fr: "Les marchandises entrantes passent par des emplacements intermédiaires comme entrée et qualité avant le stock final",
    },
    distractors: [
      {
        en: "All incoming goods cross-dock directly to the customer outbound dock without entering internal stock",
        fr: "Toutes les marchandises entrantes cross-dockent directement vers le quai sortant client sans entrer en stock interne",
      },
      {
        en: "Multi-step reception is mandatory for all warehouses; single-step receipt is removed in Odoo 19",
        fr: "La réception multi-étapes est obligatoire pour tous les entrepôts ; la réception en une étape est supprimée dans Odoo 19",
      },
      {
        en: "Quality control is always skipped in multi-step flows; goods move from input to stock in one validation",
        fr: "Le contrôle qualité est toujours ignoré dans les flux multi-étapes ; les marchandises passent de l'entrée au stock en une validation",
      },
    ],
    explanation: {
      en: "Warehouse incoming settings can define one, two, or three-step flows separating receipt, quality control, and internal storage.",
      fr: "Les paramètres entrant de l'entrepôt peuvent définir des flux en une, deux ou trois étapes séparant réception, contrôle qualité et stockage interne.",
    },
  }),
  complexQ({
    id: "inv-016",
    module: "inventory",
    text: {
      en: "What are storage categories in Odoo 19 Inventory?",
      fr: "Que sont les catégories de stockage dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "Capacity constraints on locations defining limits such as weight, volume, and compatible product attributes",
      fr: "Des contraintes de capacité sur les emplacements définissant limites de poids, volume et attributs produits compatibles",
    },
    distractors: [
      {
        en: "Customer loyalty tiers that determine which products appear in the portal reorder catalog",
        fr: "Des niveaux de fidélité client déterminant quels produits apparaissent dans le catalogue de réapprovisionnement portail",
      },
      {
        en: "Accounting asset classification groups used to depreciate warehouse shelving equipment",
        fr: "Des groupes de classification d'immobilisations comptables pour amortir le matériel de rayonnage entrepôt",
      },
      {
        en: "HR job grades assigned to warehouse workers for shift planning in the Planning app",
        fr: "Des grades de postes RH assignés aux opérateurs entrepôt pour la planification des équipes dans Planning",
      },
    ],
    explanation: {
      en: "Storage categories help putaway and removal strategies respect physical capacity and product compatibility on locations.",
      fr: "Les catégories de stockage aident les stratégies de rangement et de prélèvement à respecter capacité physique et compatibilité produit sur les emplacements.",
    },
  }),
  complexQ({
    id: "inv-017",
    module: "inventory",
    text: {
      en: "How does inventory valuation work for storable products in Odoo 19?",
      fr: "Comment fonctionne la valorisation stock pour les produits stockables dans Odoo 19 ?",
    },
    correct: {
      en: "Stock value is tracked using the configured costing method (FIFO, AVCO, or standard) with automatic stock accounting entries",
      fr: "La valeur stock est suivie via la méthode de coût configurée (FIFO, CUMP ou standard) avec écritures comptables stock automatiques",
    },
    distractors: [
      {
        en: "Valuation uses the sales pricelist price at delivery validation regardless of purchase or production cost",
        fr: "La valorisation utilise le prix de la liste de vente à la validation livraison quel que soit le coût achat ou production",
      },
      {
        en: "Storable products have no monetary value until invoiced; valuation occurs only on customer invoice posting",
        fr: "Les produits stockables n'ont pas de valeur monétaire avant facturation ; la valorisation intervient uniquement à la comptabilisation facture client",
      },
      {
        en: "Inventory value is estimated from CRM pipeline expected revenue on linked sales opportunities",
        fr: "La valeur inventaire est estimée depuis le revenu attendu du pipeline CRM sur les opportunités vente liées",
      },
    ],
    explanation: {
      en: "Automated inventory valuation posts journal entries when stock moves are validated, according to the product category costing method.",
      fr: "La valorisation automatique comptabilise des écritures à la validation des mouvements, selon la méthode de coût de la catégorie produit.",
    },
  }),
  complexQ({
    id: "inv-018",
    module: "inventory",
    text: {
      en: "What is a push rule in Odoo 19 logistics?",
      fr: "Qu'est-ce qu'une règle push en logistique Odoo 19 ?",
    },
    correct: {
      en: "A rule that automatically creates the next stock move when a product arrives at or leaves a source location step",
      fr: "Une règle créant automatiquement le mouvement suivant quand un produit arrive ou quitte une étape d'emplacement source",
    },
    distractors: [
      {
        en: "A pull rule triggered by sales demand that generates purchase orders when stock falls below minimum",
        fr: "Une règle pull déclenchée par la demande vente générant des commandes achat quand le stock passe sous le minimum",
      },
      {
        en: "An email automation that notifies warehouse staff when a delivery order is ready to pack",
        fr: "Une automatisation e-mail notifiant le personnel entrepôt quand un bon de livraison est prêt à coliser",
      },
      {
        en: "A reordering rule variant that pushes excess stock to inter-company transit locations on schedule",
        fr: "Une variante de règle de réapprovisionnement poussant l'excédent vers des emplacements transit inter-sociétés selon un planning",
      },
    ],
    explanation: {
      en: "Push rules chain warehouse steps—for example, moving goods from input to stock automatically after reception is validated.",
      fr: "Les règles push enchaînent les étapes entrepôt — par exemple déplacer de l'entrée vers le stock automatiquement après validation réception.",
    },
  }),
  complexQ({
    id: "inv-019",
    module: "inventory",
    text: {
      en: "What are package types and packages used for in Odoo 19 Inventory?",
      fr: "À quoi servent les types de colis et les colis dans Odoo 19 Inventaire ?",
    },
    correct: {
      en: "Group products into physical packages for shipping, barcode scanning, and traceability through warehouse operations",
      fr: "Regrouper des produits en colis physiques pour expédition, scan code-barres et traçabilité à travers les opérations entrepôt",
    },
    distractors: [
      {
        en: "Bundle sales order lines for eCommerce promotions; packages define discount tiers on the website catalog",
        fr: "Regrouper les lignes de commande pour promotions eCommerce ; les colis définissent les paliers de remise sur le catalogue site",
      },
      {
        en: "Define employee shift groupings in the Planning app for warehouse team rotation schedules",
        fr: "Définir les regroupements d'équipes Planning pour les plannings de rotation des équipes entrepôt",
      },
      {
        en: "Configure tax fiscal position bundles that apply combined VAT rates on multi-product delivery orders",
        fr: "Configurer des bundles de positions fiscales appliquant des taux TVA combinés sur les bons de livraison multi-produits",
      },
    ],
    explanation: {
      en: "Packages and package types track physical containers through pick, pack, and ship steps, supporting carrier integration and barcode workflows.",
      fr: "Les colis et types de colis suivent les conteneurs physiques à travers prélèvement, colisage et expédition, supportant transporteurs et code-barres.",
    },
  }),
  complexQ({
    id: "inv-020",
    module: "inventory",
    text: {
      en: "What is the Operations Types configuration in a warehouse in Odoo 19?",
      fr: "Qu'est-ce que la configuration des Types d'opérations dans un entrepôt en Odoo 19 ?",
    },
    correct: {
      en: "Defines how receipts, deliveries, picks, and internal moves behave including default locations, sequences, and barcode steps",
      fr: "Définit le comportement des réceptions, livraisons, prélèvements et transferts internes : emplacements par défaut, séquences et étapes code-barres",
    },
    distractors: [
      {
        en: "Sets customer credit limits and payment terms applied automatically when warehouse shipments are validated",
        fr: "Définit les limites de crédit client et conditions de paiement appliquées automatiquement à la validation des expéditions",
      },
      {
        en: "Configures payroll structures for warehouse workers based on picked quantity per operation shift",
        fr: "Configure les structures de paie pour les opérateurs entrepôt selon la quantité prélevée par équipe d'opération",
      },
      {
        en: "Defines product category trees that control which items can be stored in each warehouse building",
        fr: "Définit les arborescences de catégories produits contrôlant quels articles peuvent être stockés dans chaque bâtiment entrepôt",
      },
    ],
    explanation: {
      en: "Each operation type (Receipts, Delivery Orders, Internal Transfers, etc.) controls workflow settings for that warehouse process.",
      fr: "Chaque type d'opération (Réceptions, Livraisons, Transferts internes, etc.) contrôle les paramètres de workflow pour ce processus entrepôt.",
    },
  }),
];
