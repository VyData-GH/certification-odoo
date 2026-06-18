import { complexQ } from "./helpers";

export const mrpQuestions = [
  complexQ({
    id: "mrp-001",
    module: "mrp",
    text: {
      en: "What is a Bill of Materials (BOM) in Odoo 19 Manufacturing?",
      fr: "Qu'est-ce qu'une nomenclature (BOM) dans Fabrication Odoo 19 ?",
    },
    correct: {
      en: "A structured recipe listing components, quantities, and optional operations required to produce a finished product",
      fr: "Une recette structurée listant composants, quantités et opérations optionnelles nécessaires pour produire un produit fini",
    },
    distractors: [
      {
        en: "A vendor purchase agreement template used to auto-generate RFQs when component stock falls below minimum",
        fr: "Un modèle d'accord d'achat fournisseur générant automatiquement des demandes de prix quand le stock composant passe sous le minimum",
      },
      {
        en: "A sales pricelist rule defining tiered discounts when a configurable product variant is sold in bulk",
        fr: "Une règle de liste de prix vente définissant des remises par palier quand une variante configurable est vendue en volume",
      },
      {
        en: "An analytic budget line grouping planned manufacturing costs by project and fiscal period in Accounting",
        fr: "Une ligne de budget analytique regroupant les coûts de fabrication prévus par projet et période fiscale en Comptabilité",
      },
    ],
    explanation: {
      en: "The BOM is the core MRP document: it defines what to consume, how much, and which work center operations apply.",
      fr: "La nomenclature est le document central MRP : elle définit quoi consommer, en quelle quantité, et quelles opérations sur centres de travail s'appliquent.",
    },
  }),
  complexQ({
    id: "mrp-002",
    module: "mrp",
    text: {
      en: "How can a Manufacturing Order (MO) be created in Odoo 19?",
      fr: "Comment un ordre de fabrication (OF) peut-il être créé dans Odoo 19 ?",
    },
    correct: {
      en: "Manually from Manufacturing, or automatically from a confirmed sales order (MTO), reordering rule, or procurement",
      fr: "Manuellement depuis Fabrication, ou automatiquement depuis une commande confirmée (MTO), une règle de réapprovisionnement ou un approvisionnement",
    },
    distractors: [
      {
        en: "Only by validating a customer delivery order; manufacturing orders are never created from the Manufacturing app menu",
        fr: "Uniquement en validant un bon de livraison client ; les OF ne sont jamais créés depuis le menu Fabrication",
      },
      {
        en: "By posting a vendor bill for raw materials; the accounting entry automatically spawns a linked manufacturing order",
        fr: "En comptabilisant une facture fournisseur de matières premières ; l'écriture comptable génère automatiquement un OF lié",
      },
      {
        en: "Exclusively through the Point of Sale session close; retail sales trigger back-office MO creation overnight",
        fr: "Exclusivement à la clôture de session Point de Vente ; les ventes retail déclenchent la création d'OF back-office la nuit",
      },
    ],
    explanation: {
      en: "MOs can be created manually or triggered by routes (Manufacture, MTO) and replenishment rules when demand or stock thresholds require production.",
      fr: "Les OF peuvent être créés manuellement ou déclenchés par les routes (Fabriquer, MTO) et règles de réapprovisionnement selon la demande ou les seuils de stock.",
    },
  }),
  complexQ({
    id: "mrp-003",
    module: "mrp",
    text: {
      en: "What is a work center in Odoo 19 MRP?",
      fr: "Qu'est-ce qu'un centre de travail en MRP Odoo 19 ?",
    },
    correct: {
      en: "A production resource (machine or workstation) with capacity, costs, and time parameters for routing operations",
      fr: "Une ressource de production (machine ou poste) avec capacité, coûts et paramètres de temps pour router les opérations",
    },
    distractors: [
      {
        en: "A warehouse internal location where finished goods are stored after the delivery order is validated",
        fr: "Un emplacement interne d'entrepôt où les produits finis sont stockés après validation du bon de livraison",
      },
      {
        en: "An HR department node used to assign shop floor operators to payroll work entry types",
        fr: "Un nœud de département RH assignant les opérateurs d'atelier aux types d'entrées de travail paie",
      },
      {
        en: "A project task stage on the manufacturing kanban board tracking MO progress from draft to done",
        fr: "Une étape de tâche projet sur le kanban fabrication suivant la progression des OF de brouillon à terminé",
      },
    ],
    explanation: {
      en: "Work centers represent where BOM operations are executed; they carry default durations, costs, and capacity used in planning and costing.",
      fr: "Les centres de travail représentent où les opérations de nomenclature s'exécutent ; ils portent durées, coûts et capacité par défaut pour planning et coûts.",
    },
  }),
  complexQ({
    id: "mrp-004",
    module: "mrp",
    text: {
      en: "How is component consumption recorded when a Manufacturing Order is processed in Odoo 19?",
      fr: "Comment la consommation de composants est-elle enregistrée lors du traitement d'un OF dans Odoo 19 ?",
    },
    correct: {
      en: "Stock moves from the component location to production are generated and validated when the MO is confirmed or marked done",
      fr: "Des mouvements de stock de l'emplacement composant vers la production sont générés et validés à la confirmation ou clôture de l'OF",
    },
    distractors: [
      {
        en: "By creating manual journal entries on the expense account without any linked inventory stock move records",
        fr: "En créant des écritures comptables manuelles sur le compte de charges sans mouvements de stock inventaire liés",
      },
      {
        en: "By adjusting the BOM component quantities on the product template; consumption is never reflected in stock moves",
        fr: "En ajustant les quantités composants sur la fiche produit ; la consommation n'est jamais reflétée dans les mouvements de stock",
      },
      {
        en: "By validating a separate purchase receipt for each component line every time production starts on the shop floor",
        fr: "En validant une réception achat séparée pour chaque ligne composant à chaque démarrage de production en atelier",
      },
    ],
    explanation: {
      en: "The MO drives component consumption moves (source → production) and finished product moves (production → stock) upon completion.",
      fr: "L'OF pilote les mouvements de consommation composants (source → production) et produit fini (production → stock) à la clôture.",
    },
  }),
  complexQ({
    id: "mrp-005",
    module: "mrp",
    text: {
      en: "What do the 1-, 2-, and 3-step manufacturing warehouse configurations control in Odoo 19?",
      fr: "Que contrôlent les configurations entrepôt de fabrication en 1, 2 ou 3 étapes dans Odoo 19 ?",
    },
    correct: {
      en: "The logistics flow for supplying components to manufacturing (direct, via pick, or via pick and pre-production)",
      fr: "Le flux logistique d'approvisionnement des composants vers la fabrication (direct, via prélèvement, ou prélèvement et pré-production)",
    },
    distractors: [
      {
        en: "The number of quality control points mandatory on each BOM operation before the MO can be marked done",
        fr: "Le nombre de points de contrôle qualité obligatoires sur chaque opération de nomenclature avant clôture de l'OF",
      },
      {
        en: "How many subcontracting purchase orders are auto-created when a multi-level BOM is confirmed",
        fr: "Combien de bons de commande sous-traitance sont auto-créés quand une nomenclature multi-niveaux est confirmée",
      },
      {
        en: "The maximum batch size allowed per work center when splitting manufacturing orders by quantity",
        fr: "La taille de lot maximale autorisée par centre de travail lors de la scission d'ordres de fabrication par quantité",
      },
    ],
    explanation: {
      en: "Manufacturing steps define whether components move directly to production or through intermediate pick/pre-production locations before the MO.",
      fr: "Les étapes de fabrication définissent si les composants vont directement en production ou passent par des emplacements intermédiaires de prélèvement/pré-production.",
    },
  }),
  complexQ({
    id: "mrp-006",
    module: "mrp",
    text: {
      en: "How does Odoo 19 handle subcontracting in Manufacturing?",
      fr: "Comment Odoo 19 gère-t-il la sous-traitance en Fabrication ?",
    },
    correct: {
      en: "Via a Subcontracting route on the product, a subcontracting BOM, and resupply transfers sending components to the vendor",
      fr: "Via une route Sous-traitance sur le produit, une nomenclature sous-traitance, et des transferts de réapprovisionnement envoyant les composants au sous-traitant",
    },
    distractors: [
      {
        en: "By creating a standard purchase order only; components are never tracked when sent to an external manufacturer",
        fr: "En créant uniquement un bon de commande standard ; les composants ne sont jamais suivis lors de l'envoi à un fabricant externe",
      },
      {
        en: "By assigning a CRM opportunity to the vendor and converting it to a manufacturing order upon stage change",
        fr: "En assignant une opportunité CRM au fournisseur et en la convertissant en OF lors du changement d'étape",
      },
      {
        en: "By enabling the Dropship route on finished goods; subcontracting always ships directly from vendor to end customer",
        fr: "En activant la route Dropship sur les produits finis ; la sous-traitance expédie toujours directement du fournisseur au client final",
      },
    ],
    explanation: {
      en: "Subcontracting sends components to the subcontractor, tracks them in transit, and receives the finished product back via dedicated flows.",
      fr: "La sous-traitance envoie les composants au sous-traitant, les suit en transit, et réceptionne le produit fini via des flux dédiés.",
    },
  }),
  complexQ({
    id: "mrp-007",
    module: "mrp",
    text: {
      en: "What is the Production Planning view used for in Odoo 19 MRP?",
      fr: "À quoi sert la vue Planification de production en MRP Odoo 19 ?",
    },
    correct: {
      en: "Scheduling work orders and MOs on work centers over time based on capacity, dependencies, and deadlines",
      fr: "Planifier ordres de travail et OF sur les centres de travail dans le temps selon capacité, dépendances et échéances",
    },
    distractors: [
      {
        en: "Defining employee shift templates in HR Attendances linked to payroll work entry generation rules",
        fr: "Définir des modèles de postes employés dans Présences RH liés aux règles de génération d'entrées de travail paie",
      },
      {
        en: "Publishing the company production calendar on the website careers page for external job applicants",
        fr: "Publier le calendrier de production de l'entreprise sur la page carrières du site pour les candidats externes",
      },
      {
        en: "Configuring reordering rules min/max quantities per warehouse location for raw material procurement",
        fr: "Configurer les quantités min/max des règles de réapprovisionnement par emplacement entrepôt pour l'approvisionnement matières",
      },
    ],
    explanation: {
      en: "The planning Gantt organizes work orders across work centers, helping balance load and meet scheduled finish dates.",
      fr: "Le Gantt de planification organise les ordres de travail sur les centres de travail, aidant à équilibrer la charge et respecter les dates de fin.",
    },
  }),
  complexQ({
    id: "mrp-008",
    module: "mrp",
    text: {
      en: "How do you configure a storable product to be manufactured automatically when sold in Odoo 19?",
      fr: "Comment configurer un produit stockable à fabriquer automatiquement à la vente dans Odoo 19 ?",
    },
    correct: {
      en: "Enable the Manufacture route and optionally Make to Order on the product or its category",
      fr: "Activer la route Fabriquer et optionnellement Fabrication sur commande (MTO) sur le produit ou sa catégorie",
    },
    distractors: [
      {
        en: "Set the product invoicing policy to ordered quantities; sales confirmation always creates a manufacturing order regardless of routes",
        fr: "Définir la politique de facturation sur quantités commandées ; la confirmation vente crée toujours un OF indépendamment des routes",
      },
      {
        en: "Mark the product as a service type; storable products cannot trigger manufacturing from sales demand",
        fr: "Marquer le produit en type service ; les produits stockables ne peuvent pas déclencher la fabrication depuis la demande vente",
      },
      {
        en: "Create a kit BOM only; normal BOMs never integrate with sales order procurement rules",
        fr: "Créer uniquement une nomenclature kit ; les nomenclatures normales ne s'intègrent jamais aux règles d'approvisionnement des commandes",
      },
    ],
    explanation: {
      en: "The Manufacture route combined with MTO or replenishment rules triggers MO creation when sales or stock rules generate demand.",
      fr: "La route Fabriquer combinée au MTO ou aux règles de réapprovisionnement déclenche la création d'OF quand ventes ou règles stock génèrent la demande.",
    },
  }),
  complexQ({
    id: "mrp-009",
    module: "mrp",
    text: {
      en: "What is the key difference between a normal BOM and a Kit BOM in Odoo 19?",
      fr: "Quelle est la différence clé entre une nomenclature normale et une nomenclature kit dans Odoo 19 ?",
    },
    correct: {
      en: "A Kit BOM explodes component delivery on sales/delivery without creating a separate Manufacturing Order",
      fr: "Une nomenclature kit éclate la livraison des composants à la vente/livraison sans créer d'ordre de fabrication séparé",
    },
    distractors: [
      {
        en: "A Kit BOM always requires two work center operations whereas a normal BOM supports only one operation step",
        fr: "Une nomenclature kit exige toujours deux opérations centre de travail alors qu'une nomenclature normale n'en supporte qu'une",
      },
      {
        en: "A Kit BOM is reserved for subcontracted products; normal BOMs are used exclusively for in-house assembly",
        fr: "Une nomenclature kit est réservée aux produits sous-traités ; les nomenclatures normales servent exclusivement à l'assemblage interne",
      },
      {
        en: "A Kit BOM posts manufacturing variance entries to Accounting; a normal BOM never affects stock valuation",
        fr: "Une nomenclature kit comptabilise des écarts de fabrication en Comptabilité ; une nomenclature normale n'affecte jamais la valorisation stock",
      },
    ],
    explanation: {
      en: "Kit-type BOMs deliver components directly on the sales/delivery flow; normal BOMs generate a manufacturing order for production.",
      fr: "Les nomenclatures kit livrent les composants directement dans le flux vente/livraison ; les nomenclatures normales génèrent un OF de production.",
    },
  }),
  complexQ({
    id: "mrp-010",
    module: "mrp",
    text: {
      en: "What is an operation on a BOM in Odoo 19 Manufacturing?",
      fr: "Qu'est-ce qu'une opération sur une nomenclature en Fabrication Odoo 19 ?",
    },
    correct: {
      en: "A manufacturing step assigned to a work center with duration, worksheet, and optional quality control points",
      fr: "Une étape de fabrication assignée à un centre de travail avec durée, fiche de travail et points de contrôle qualité optionnels",
    },
    distractors: [
      {
        en: "A recurring maintenance request scheduled on equipment linked to the product category",
        fr: "Une demande de maintenance récurrente planifiée sur l'équipement lié à la catégorie produit",
      },
      {
        en: "A stock picking type sequence defining whether components are picked before or after MO confirmation",
        fr: "Une séquence de type de prélèvement stock définissant si les composants sont prélevés avant ou après confirmation de l'OF",
      },
      {
        en: "A sales order line discount tier applied when the finished product quantity exceeds a configured threshold",
        fr: "Un palier de remise sur ligne de commande vente appliqué quand la quantité produit fini dépasse un seuil configuré",
      },
    ],
    explanation: {
      en: "BOM operations define the sequence of work on work centers; each becomes a work order when the MO is confirmed.",
      fr: "Les opérations de nomenclature définissent la séquence de travail sur les centres de travail ; chacune devient un ordre de travail à la confirmation de l'OF.",
    },
  }),
  complexQ({
    id: "mrp-011",
    module: "mrp",
    text: {
      en: "How are by-products handled in Odoo 19 Manufacturing?",
      fr: "Comment les sous-produits sont-ils gérés en Fabrication Odoo 19 ?",
    },
    correct: {
      en: "Secondary outputs are defined on the BOM; completing the MO generates additional finished product moves for them",
      fr: "Les sorties secondaires sont définies sur la nomenclature ; clôturer l'OF génère des mouvements produit fini supplémentaires pour eux",
    },
    distractors: [
      {
        en: "By-products are tracked only in analytic accounts; no stock moves are created for secondary manufacturing outputs",
        fr: "Les sous-produits sont suivis uniquement en comptes analytiques ; aucun mouvement stock n'est créé pour les sorties secondaires",
      },
      {
        en: "Each by-product requires a separate MO; the parent order cannot produce main and secondary items together",
        fr: "Chaque sous-produit exige un OF séparé ; l'ordre parent ne peut pas produire article principal et secondaires ensemble",
      },
      {
        en: "By-products are configured on the product pricelist; manufacturing always ignores secondary output quantities",
        fr: "Les sous-produits se configurent sur la liste de prix produit ; la fabrication ignore toujours les quantités de sortie secondaire",
      },
    ],
    explanation: {
      en: "By-products on the BOM produce extra finished goods moves alongside the main product when the MO is completed.",
      fr: "Les sous-produits sur la nomenclature produisent des mouvements produit fini supplémentaires avec le produit principal à la clôture de l'OF.",
    },
  }),
  complexQ({
    id: "mrp-012",
    module: "mrp",
    text: {
      en: "What is the Shop Floor app used for in Odoo 19?",
      fr: "À quoi sert l'application Shop Floor (Atelier) dans Odoo 19 ?",
    },
    correct: {
      en: "A tablet-oriented interface for operators to start, pause, register production, and complete work orders on the floor",
      fr: "Une interface orientée tablette pour que les opérateurs démarrent, mettent en pause, enregistrent la production et terminent les ordres de travail en atelier",
    },
    distractors: [
      {
        en: "A warehouse barcode app for receiving vendor shipments and validating incoming quality checks at the dock",
        fr: "Une application code-barres entrepôt pour réceptionner les expéditions fournisseur et valider les contrôles qualité à quai",
      },
      {
        en: "An HR kiosk mode for employees to check in attendance and submit time off requests from the production line",
        fr: "Un mode kiosque RH pour que les employés pointent leur présence et soumettent des demandes de congés depuis la ligne de production",
      },
      {
        en: "A project timesheet grid where consultants log billable hours against manufacturing analytic accounts",
        fr: "Une grille feuilles de temps projet où les consultants saisissent des heures facturables sur des comptes analytiques fabrication",
      },
    ],
    explanation: {
      en: "Shop Floor connects operators directly to work orders, enabling real-time production tracking without navigating full backend forms.",
      fr: "Shop Floor connecte les opérateurs directement aux ordres de travail, permettant un suivi production en temps réel sans naviguer les fiches backend complètes.",
    },
  }),
  complexQ({
    id: "mrp-013",
    module: "mrp",
    text: {
      en: "How does Odoo 19 calculate the manufacturing lead time displayed on a product?",
      fr: "Comment Odoo 19 calcule-t-il le délai de fabrication affiché sur un produit ?",
    },
    correct: {
      en: "By summing BOM operation durations, work center delays, and component procurement lead times along the BOM structure",
      fr: "En additionnant durées d'opérations nomenclature, délais centres de travail et délais d'approvisionnement composants le long de la structure BOM",
    },
    distractors: [
      {
        en: "From the vendor pricelist delivery date on the finished product's default supplierinfo record only",
        fr: "Uniquement depuis la date de livraison de la liste de prix fournisseur sur l'enregistrement supplierinfo par défaut du produit fini",
      },
      {
        en: "From the sales order commitment date entered manually on each quotation line by the salesperson",
        fr: "Depuis la date d'engagement saisie manuellement sur chaque ligne de devis par le commercial",
      },
      {
        en: "From the employee seniority field on work center responsible users configured in HR settings",
        fr: "Depuis le champ ancienneté employé sur les utilisateurs responsables des centres de travail configurés dans les paramètres RH",
      },
    ],
    explanation: {
      en: "Manufacturing lead time aggregates operation times on the BOM, work center setup/cleanup, and longest component lead times.",
      fr: "Le délai de fabrication agrège les temps d'opération sur la nomenclature, préparation/nettoyage centres de travail, et les délais composants les plus longs.",
    },
  }),
  complexQ({
    id: "mrp-014",
    module: "mrp",
    text: {
      en: "What happens in inventory when a Manufacturing Order is marked as Done in Odoo 19?",
      fr: "Que se passe-t-il en inventaire quand un ordre de fabrication est marqué Terminé dans Odoo 19 ?",
    },
    correct: {
      en: "Component stock is consumed from source locations and finished (and by-) products are added to the destination stock",
      fr: "Le stock composants est consommé depuis les emplacements source et le(s) produit(s) fini(s) (et sous-produits) sont ajoutés au stock destination",
    },
    distractors: [
      {
        en: "Only work order timesheets are posted; inventory quantities remain unchanged until a separate inventory adjustment",
        fr: "Seules les feuilles de temps des ordres de travail sont comptabilisées ; les quantités inventaire restent inchangées jusqu'à un ajustement séparé",
      },
      {
        en: "A draft customer invoice is created automatically; stock moves wait until the invoice is posted",
        fr: "Une facture client brouillon est créée automatiquement ; les mouvements stock attendent la comptabilisation de la facture",
      },
      {
        en: "Components are returned to vendors via purchase returns; finished goods stay in the production location indefinitely",
        fr: "Les composants sont retournés aux fournisseurs via retours achat ; les produits finis restent indéfiniment en emplacement production",
      },
    ],
    explanation: {
      en: "Completing the MO validates consumption moves and production moves, updating on-hand quantities and stock valuation.",
      fr: "Clôturer l'OF valide les mouvements de consommation et de production, mettant à jour quantités disponibles et valorisation stock.",
    },
  }),
  complexQ({
    id: "mrp-015",
    module: "mrp",
    text: {
      en: "What is a phantom BOM in Odoo 19 Manufacturing?",
      fr: "Qu'est-ce qu'une nomenclature fantôme (phantom BOM) en Fabrication Odoo 19 ?",
    },
    correct: {
      en: "A BOM whose sub-assembly components are exploded into the parent MO without stocking the phantom product separately",
      fr: "Une nomenclature dont les composants du sous-ensemble sont éclatés dans l'OF parent sans stocker séparément le produit fantôme",
    },
    distractors: [
      {
        en: "An archived BOM kept for historical costing but blocked from use on any new manufacturing orders",
        fr: "Une nomenclature archivée conservée pour l'historique coûts mais bloquée pour tout nouvel ordre de fabrication",
      },
      {
        en: "A BOM type used exclusively for intangible service products billed on sales orders without stock impact",
        fr: "Un type de nomenclature réservé aux produits service intangibles facturés sur commandes sans impact stock",
      },
      {
        en: "A duplicate BOM automatically synced from the vendor catalog when confirming a subcontracting purchase order",
        fr: "Une nomenclature dupliquée synchronisée automatiquement depuis le catalogue fournisseur à la confirmation d'un bon sous-traitance",
      },
    ],
    explanation: {
      en: "Phantom BOMs flatten multi-level structures: the phantom item is not produced or stored; its components appear on the parent MO.",
      fr: "Les nomenclatures fantômes aplatissent les structures multi-niveaux : l'article fantôme n'est ni produit ni stocké ; ses composants apparaissent sur l'OF parent.",
    },
  }),
  complexQ({
    id: "mrp-016",
    module: "mrp",
    text: {
      en: "How can quality checks be integrated into the manufacturing process in Odoo 19?",
      fr: "Comment intégrer des contrôles qualité au processus de fabrication dans Odoo 19 ?",
    },
    correct: {
      en: "Configure quality control points on operations, products, or picking types to trigger checks during production",
      fr: "Configurer des points de contrôle qualité sur opérations, produits ou types de prélèvement pour déclencher des contrôles pendant la production",
    },
    distractors: [
      {
        en: "Quality is managed only on incoming vendor receipts; manufacturing operations cannot trigger control points",
        fr: "La qualité se gère uniquement sur réceptions fournisseur ; les opérations fabrication ne peuvent pas déclencher de points de contrôle",
      },
      {
        en: "Add a mandatory survey on the BOM worksheet; operators must complete it before the MO can be saved as draft",
        fr: "Ajouter un sondage obligatoire sur la fiche de travail nomenclature ; les opérateurs doivent le compléter avant de sauvegarder l'OF en brouillon",
      },
      {
        en: "Enable lot tracking on the product; serial numbers automatically replace formal quality inspection workflows",
        fr: "Activer le suivi par lot sur le produit ; les numéros de série remplacent automatiquement les workflows d'inspection qualité formels",
      },
    ],
    explanation: {
      en: "The Quality app defines control points that fire at operation start, end, or transfer steps, blocking progress until passed.",
      fr: "L'app Qualité définit des points de contrôle déclenchés au début/fin d'opération ou aux étapes de transfert, bloquant la progression tant qu'ils ne sont pas validés.",
    },
  }),
  complexQ({
    id: "mrp-017",
    module: "mrp",
    text: {
      en: "What is the purpose of an Unbuild order in Odoo 19 MRP?",
      fr: "À quoi sert un ordre de démontage (Unbuild) en MRP Odoo 19 ?",
    },
    correct: {
      en: "To disassemble a finished product back into its BOM components and return them to stock",
      fr: "Démonter un produit fini en ses composants nomenclature et les remettre en stock",
    },
    distractors: [
      {
        en: "To cancel a confirmed sales order and reverse all linked delivery pickings without touching inventory",
        fr: "Annuler une commande vente confirmée et inverser tous les prélèvements livraison liés sans toucher l'inventaire",
      },
      {
        en: "To archive obsolete BOM versions while keeping open manufacturing orders referencing the old structure",
        fr: "Archiver des versions nomenclature obsolètes tout en conservant des OF ouverts référençant l'ancienne structure",
      },
      {
        en: "To merge two manufacturing orders into one batch and redistribute work orders across work centers",
        fr: "Fusionner deux ordres de fabrication en un lot et redistribuer les ordres de travail sur les centres de travail",
      },
    ],
    explanation: {
      en: "Unbuild reverses production: finished goods are consumed and component quantities from the BOM are restored to stock.",
      fr: "Le démontage inverse la production : les produits finis sont consommés et les quantités composants de la nomenclature sont restaurées en stock.",
    },
  }),
  complexQ({
    id: "mrp-018",
    module: "mrp",
    text: {
      en: "Where do you configure whether a product is manufactured, purchased, or both in Odoo 19?",
      fr: "Où configure-t-on qu'un produit est fabriqué, acheté ou les deux dans Odoo 19 ?",
    },
    correct: {
      en: "On the product or category Inventory tab by selecting routes such as Manufacture, Buy, or MTO",
      fr: "Sur l'onglet Inventaire du produit ou de la catégorie en sélectionnant les routes Fabriquer, Acheter ou MTO",
    },
    distractors: [
      {
        en: "On the BOM form only; product routes are read-only and inherited automatically from the default vendor pricelist",
        fr: "Uniquement sur la fiche nomenclature ; les routes produit sont en lecture seule et héritées automatiquement de la liste de prix fournisseur par défaut",
      },
      {
        en: "In Payroll contract settings under the manufacturing work entry type assigned to shop floor employees",
        fr: "Dans les paramètres contrat Paie sous le type d'entrée de travail fabrication assigné aux employés d'atelier",
      },
      {
        en: "On the sales order template; procurement routes are locked per customer and cannot be set at product level",
        fr: "Sur le modèle de commande vente ; les routes d'approvisionnement sont verrouillées par client et ne peuvent pas être définies au niveau produit",
      },
    ],
    explanation: {
      en: "Product routes drive procurement logic: Buy creates purchase orders, Manufacture creates MOs, and MTO waits for confirmed demand.",
      fr: "Les routes produit pilotent la logique d'approvisionnement : Acheter crée des achats, Fabriquer crée des OF, et MTO attend une demande confirmée.",
    },
  }),
  complexQ({
    id: "mrp-019",
    module: "mrp",
    text: {
      en: "What is a work order in Odoo 19 Manufacturing?",
      fr: "Qu'est-ce qu'un ordre de travail (work order) en Fabrication Odoo 19 ?",
    },
    correct: {
      en: "An executable instance of a BOM operation on a manufacturing order, scheduled on a specific work center",
      fr: "Une instance exécutable d'une opération de nomenclature sur un OF, planifiée sur un centre de travail spécifique",
    },
    distractors: [
      {
        en: "An internal purchase requisition raised when component stock falls below the reordering rule minimum quantity",
        fr: "Une demande d'achat interne levée quand le stock composant passe sous la quantité minimum de la règle de réapprovisionnement",
      },
      {
        en: "A helpdesk ticket assigned to maintenance when a work center capacity exceeds its daily planned hours",
        fr: "Un ticket helpdesk assigné à la maintenance quand la capacité d'un centre de travail dépasse ses heures planifiées journalières",
      },
      {
        en: "A project milestone linked to a sales order delivery date for made-to-order configurable products",
        fr: "Un jalon projet lié à la date de livraison d'une commande pour des produits configurables sur commande",
      },
    ],
    explanation: {
      en: "When an MO is confirmed, each BOM operation generates a work order tracked for time, quantity produced, and shop floor status.",
      fr: "À la confirmation de l'OF, chaque opération de nomenclature génère un ordre de travail suivi pour temps, quantité produite et statut atelier.",
    },
  }),
  complexQ({
    id: "mrp-020",
    module: "mrp",
    text: {
      en: "How can Manufacturing Orders be split or merged in Odoo 19?",
      fr: "Comment peut-on scinder ou fusionner des ordres de fabrication dans Odoo 19 ?",
    },
    correct: {
      en: "Use the Split or Merge actions on MOs to divide quantities or combine compatible orders for the same product and BOM",
      fr: "Utiliser les actions Scinder ou Fusionner sur les OF pour diviser les quantités ou combiner des ordres compatibles pour le même produit et nomenclature",
    },
    distractors: [
      {
        en: "Duplicate the BOM and reconfirm the sales order; Odoo always creates a new MO per duplicate without manual split tools",
        fr: "Dupliquer la nomenclature et reconfirmer la commande ; Odoo crée toujours un nouvel OF par duplication sans outils de scission manuels",
      },
      {
        en: "Set the MO quantity to zero on the Operations tab and create separate MOs manually from the Replenishment dashboard for each batch",
        fr: "Mettre la quantité de l'OF à zéro sur l'onglet Opérations et créer manuellement des OF séparés depuis le tableau de bord Réapprovisionnement pour chaque lot",
      },
      {
        en: "Merge is done exclusively via data import; the Manufacturing app UI supports split only for draft subcontracting orders",
        fr: "La fusion se fait exclusivement par import de données ; l'interface Fabrication ne supporte la scission que pour les OF sous-traitance brouillon",
      },
    ],
    explanation: {
      en: "Odoo provides split (by quantity) and merge actions on MOs to adapt production batches without recreating demand from scratch.",
      fr: "Odoo propose des actions Scinder (par quantité) et Fusionner sur les OF pour adapter les lots de production sans recréer la demande depuis zéro.",
    },
  }),
  complexQ({
    id: "mrp-021",
    module: "mrp",
    text: {
      en: "Which setting must be enabled to add operations and work centers to a bill of materials?",
      fr: "Quel paramètre activer pour ajouter des opérations et centres de travail à une nomenclature ?",
    },
    correct: {
      en: "Work Orders",
      fr: "Ordres de travail",
    },
    distractors: [
      {
        en: "Manufacture route on the product category only",
        fr: "Route Fabriquer sur la catégorie produit uniquement",
      },
      {
        en: "Multiple routes on the warehouse configuration page",
        fr: "Routes multiples sur la page de configuration entrepôt",
      },
      {
        en: "Work center locations without enabling work orders",
        fr: "Emplacements de centres de travail sans activer les ordres de travail",
      },
    ],
    explanation: {
      en: "Work Orders unlock operations tab on BoMs and shop floor tracking per operation.",
      fr: "Les ordres de travail activent l'onglet Opérations sur les nomenclatures et le suivi atelier par opération.",
    },
  }),
  complexQ({
    id: "mrp-022",
    module: "mrp",
    text: {
      en: "For products with multiple bills of materials, which BoM is selected by default for new manufacturing orders?",
      fr: "Pour un produit avec plusieurs nomenclatures, laquelle est sélectionnée par défaut pour un nouvel OF ?",
    },
    correct: {
      en: "The BoM listed first on the product's Bill of Materials page",
      fr: "La nomenclature listée en premier sur la page Nomenclatures du produit",
    },
    distractors: [
      {
        en: "The BoM that was created first chronologically",
        fr: "La nomenclature créée en premier chronologiquement",
      },
      {
        en: "The most recently created BoM",
        fr: "La nomenclature créée le plus récemment",
      },
      {
        en: "No BoM is selected; the user must choose one on every MO",
        fr: "Aucune nomenclature n'est sélectionnée ; l'utilisateur doit en choisir une à chaque OF",
      },
    ],
    explanation: {
      en: "BoM sequence on the product form determines the default BoM used when Odoo creates manufacturing orders.",
      fr: "L'ordre des nomenclatures sur la fiche produit détermine la nomenclature par défaut lors de la création des OF.",
    },
  }),
  complexQ({
    id: "mrp-023",
    module: "mrp",
    text: {
      en: "Where can production files and diagrams be uploaded on a bill of materials in Odoo?",
      fr: "Où téléverser fichiers et schémas de production sur une nomenclature Odoo ?",
    },
    correct: {
      en: "The Instructions tab on the BoM",
      fr: "L'onglet Instructions de la nomenclature",
    },
    distractors: [
      {
        en: "The Worksheet tab on the work center form",
        fr: "L'onglet Feuille de travail sur la fiche centre de travail",
      },
      {
        en: "The Notes tab on the manufacturing order",
        fr: "L'onglet Notes sur l'ordre de fabrication",
      },
      {
        en: "The Miscellaneous tab on the product template",
        fr: "L'onglet Divers sur le modèle de produit",
      },
    ],
    explanation: {
      en: "BoM Instructions hold documents operators see on work orders and shop floor steps.",
      fr: "L'onglet Instructions de la nomenclature contient les documents visibles sur les ordres de travail et l'atelier.",
    },
  }),
  complexQ({
    id: "mrp-024",
    module: "mrp",
    text: {
      en: "How does Odoo link a specific bill of materials to a product variant?",
      fr: "Comment Odoo lie une nomenclature spécifique à une variante de produit ?",
    },
    correct: {
      en: "Using the Product Variant field on the BoM",
      fr: "Via le champ Variante de produit sur la nomenclature",
    },
    distractors: [
      {
        en: "Using the Product Attribute field on the sales order line",
        fr: "Via le champ Attribut produit sur la ligne de commande client",
      },
      {
        en: "Using the Manufacturing Route on the customer form",
        fr: "Via la route Fabrication sur la fiche client",
      },
      {
        en: "Using the Sales Order reference on the BoM header",
        fr: "Via la référence commande client sur l'en-tête de nomenclature",
      },
    ],
    explanation: {
      en: "Variant-specific BoMs restrict components and operations to the matching product variant.",
      fr: "Les nomenclatures par variante restreignent composants et opérations à la variante correspondante.",
    },
  }),
  complexQ({
    id: "mrp-025",
    module: "mrp",
    text: {
      en: "How many unique products can a single manufacturing order contain in Odoo?",
      fr: "Combien de produits distincts un seul ordre de fabrication peut-il contenir dans Odoo ?",
    },
    correct: {
      en: "One finished product",
      fr: "Un seul produit fini",
    },
    distractors: [
      {
        en: "Two products when using a kit BoM",
        fr: "Deux produits lors de l'utilisation d'une nomenclature kit",
      },
      {
        en: "Up to three products sharing the same work center",
        fr: "Jusqu'à trois produits partageant le même centre de travail",
      },
      {
        en: "Unlimited products as long as they share one BoM",
        fr: "Produits illimités tant qu'ils partagent une nomenclature",
      },
    ],
    explanation: {
      en: "Each MO produces one finished product (quantity can be >1); components are listed on the BoM, not as separate finished products.",
      fr: "Chaque OF fabrique un produit fini (quantité pouvant être >1) ; les composants sont sur la nomenclature, pas comme produits finis distincts.",
    },
  }),
  complexQ({
    id: "mrp-026",
    module: "mrp",
    text: {
      en: "How is the End date/time calculated on a manufacturing order?",
      fr: "Comment la date/heure de fin est-elle calculée sur un ordre de fabrication ?",
    },
    correct: {
      en: "Scheduled date plus the expected duration of all work orders",
      fr: "Date planifiée plus la durée prévue de tous les ordres de travail",
    },
    distractors: [
      {
        en: "Scheduled date plus a fixed 24-hour buffer",
        fr: "Date planifiée plus un délai fixe de 24 heures",
      },
      {
        en: "Scheduled date plus the real duration already logged on work orders",
        fr: "Date planifiée plus la durée réelle déjà saisie sur les ordres de travail",
      },
      {
        en: "There is no End field; only the scheduled start date is stored",
        fr: "Il n'y a pas de champ Fin ; seule la date de début planifiée est enregistrée",
      },
    ],
    explanation: {
      en: "MO end date planning sums expected operation durations from the BoM routing starting at the scheduled start.",
      fr: "La fin planifiée de l'OF additionne les durées prévues des opérations de la gamme à partir du début planifié.",
    },
  }),
  complexQ({
    id: "mrp-027",
    module: "mrp",
    text: {
      en: "Where do you configure one-step vs multi-step manufacturing in Odoo?",
      fr: "Où configurer la fabrication en une étape vs plusieurs étapes dans Odoo ?",
    },
    correct: {
      en: "Inventory → Warehouses → select warehouse → Manufacture section",
      fr: "Inventaire → Entrepôts → sélectionner l'entrepôt → section Fabrication",
    },
    distractors: [
      {
        en: "Manufacturing → Settings → Manufacturing Steps section",
        fr: "Fabrication → Paramètres → section Étapes de fabrication",
      },
      {
        en: "Shop Floor → Settings → Manufacturing Steps section",
        fr: "Atelier → Paramètres → section Étapes de fabrication",
      },
      {
        en: "It is not possible to change manufacturing steps after warehouse creation",
        fr: "Il est impossible de modifier les étapes de fabrication après création de l'entrepôt",
      },
    ],
    explanation: {
      en: "Warehouse manufacture settings define pick components / produce / store finished goods flows (1, 2, or 3 steps).",
      fr: "Les paramètres Fabrication de l'entrepôt définissent les flux prélèvement composants / production / stockage produit fini (1, 2 ou 3 étapes).",
    },
  }),
  complexQ({
    id: "mrp-028",
    module: "mrp",
    text: {
      en: "What happens when Replenish Scrapped Quantities is enabled and components are scrapped from an MO on Shop Floor?",
      fr: "Que se passe-t-il si Réapprovisionner quantités rebutées est activé et que des composants sont rebutés depuis l'atelier ?",
    },
    correct: {
      en: "A Pick Components transfer is automatically created to replace the scrapped components",
      fr: "Un transfert Prélèvement de composants est créé automatiquement pour remplacer les composants rebutés",
    },
    distractors: [
      {
        en: "A purchase order is created to buy replacement components from the vendor",
        fr: "Un bon de commande est créé pour racheter les composants chez le fournisseur",
      },
      {
        en: "The option only appears when adding components, not when scrapping",
        fr: "L'option n'apparaît qu'à l'ajout de composants, pas lors d'un rebut",
      },
      {
        en: "Scrapped quantities are replenished only after manually clicking Check Availability",
        fr: "Les quantités rebutées ne sont réapprovisionnées qu'après un clic manuel sur Vérifier la disponibilité",
      },
    ],
    explanation: {
      en: "Shop Floor can trigger internal component picks to restore MO component availability after scrap.",
      fr: "L'atelier peut déclencher des prélèvements internes pour rétablir la disponibilité des composants de l'OF après rebut.",
    },
  }),
  complexQ({
    id: "mrp-029",
    module: "mrp",
    text: {
      en: "When merging manufacturing orders in Odoo, what must all MOs being merged have in common?",
      fr: "Lors de la fusion d'ordres de fabrication, que doivent avoir en commun tous les OF fusionnés ?",
    },
    correct: {
      en: "The same finished product being produced",
      fr: "Le même produit fini à fabriquer",
    },
    distractors: [
      {
        en: "The same scheduled date and work center only",
        fr: "Uniquement la même date planifiée et le même centre de travail",
      },
      {
        en: "The same quantity to produce on each MO",
        fr: "La même quantité à produire sur chaque OF",
      },
      {
        en: "Nothing; any MOs can be merged regardless of product or BoM",
        fr: "Rien ; n'importe quels OF peuvent être fusionnés quel que soit le produit ou la nomenclature",
      },
    ],
    explanation: {
      en: "Merge combines MOs for the same product/BOM compatibility so production lines and components align.",
      fr: "La fusion regroupe des OF compatibles pour le même produit/nomenclature afin d'aligner composants et opérations.",
    },
  }),
  complexQ({
    id: "mrp-030",
    module: "mrp",
    text: {
      en: "Which statement about reordering rules in a manufacturing context is FALSE?",
      fr: "Quelle affirmation sur les règles de réapprovisionnement en contexte fabrication est FAUSSE ?",
    },
    correct: {
      en: "You cannot automatically create RFQs without enabling the MTO route",
      fr: "On ne peut pas créer automatiquement des demandes de prix sans activer la route MTO",
    },
    distractors: [
      {
        en: "You can configure 0,0 reordering rules by setting minimum and maximum quantities to 0",
        fr: "On peut configurer des règles 0,0 en mettant minimum et maximum à 0",
      },
      {
        en: "Products can have either the Buy or Manufacture route for replenishment",
        fr: "Les produits peuvent avoir la route Acheter ou Fabriquer pour le réapprovisionnement",
      },
      {
        en: "Vendors are set on the Purchase tab of the product form for buy routes",
        fr: "Les fournisseurs se définissent sur l'onglet Achats de la fiche produit pour les routes achat",
      },
    ],
    explanation: {
      en: "Auto reordering rules with the Buy route create RFQs without MTO; MTO is a separate replenishment strategy.",
      fr: "Les règles Auto avec la route Acheter créent des demandes de prix sans MTO ; le MTO est une stratégie distincte.",
    },
  }),
];
