import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const voipSupplementaryQuestions = [
  complexQ({
    id: "voip-001",
    module: "voip",
    text: {
      en: "What happens when you click the clock icon in the VoIP widget? (Odoo Learn — Sales Calls With VoIP)",
      fr: "Que se passe-t-il lorsque vous cliquez sur l'icône de l'horloge dans le widget VoIP ? (Odoo Learn — Appels de vente avec VoIP)",
    },
    correct: {
      en: "A pop-up appears where you can schedule activities",
      fr: "Une fenêtre contextuelle apparaît dans laquelle vous pouvez planifier des activités",
    },
    distractors: [
      { en: "A pop-up appears where you can snooze an activity", fr: "Une fenêtre contextuelle apparaît dans laquelle vous pouvez suspendre une activité" },
      { en: "A pop-up appears where you can see the customer’s information", fr: "Une fenêtre contextuelle apparaît où vous pouvez voir les informations du client" },
      { en: "A pop-up appears where you can choose to call a customer at a certain time", fr: "Une fenêtre contextuelle apparaît dans laquelle vous pouvez choisir d'appeler un client à une certaine heure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Calls With VoIP): A pop-up appears where you can schedule activities",
      fr: "Source Odoo Learn (appels commerciaux avec VoIP) : une fenêtre contextuelle apparaît dans laquelle vous pouvez planifier des activités",
    },
  }),
  complexQ({
    id: "voip-002",
    module: "voip",
    text: {
      en: "Which of the following ways is not a way to start a call with an opportunity? (Odoo Learn — Sales Calls With VoIP)",
      fr: "Parmi les méthodes suivantes, laquelle ne constitue pas une manière de démarrer un appel avec une opportunité ? (Odoo Learn — Appels de vente avec VoIP)",
    },
    correct: {
      en: "By clicking Start Auto-Dial, next to your avatar to begin automatically calling opportunities one after, the other",
      fr: "En cliquant sur Démarrer la numérotation automatique, à côté de votre avatar pour commencer à appeler automatiquement les opportunités les unes après les autres.",
    },
    distractors: [
      { en: "By clicking Call, next to Phone, on the opportunity", fr: "En cliquant sur Appeler, à côté de Téléphone, sur l'opportunité" },
      { en: "By clicking their phone number from a scheduled activity in the Chatter", fr: "En cliquant sur leur numéro de téléphone à partir d'une activité planifiée dans Chatter" },
      { en: "By opening your VoIP widget, and clicking their name under “Next Activities”", fr: "En ouvrant votre widget VoIP et en cliquant sur leur nom sous « Activités suivantes »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Calls With VoIP): By clicking Start Auto-Dial, next to your avatar to begin automatically calling opportunities one after, the other",
      fr: "Source Odoo Learn (appels de vente avec VoIP) : en cliquant sur Démarrer la numérotation automatique, à côté de votre avatar pour commencer à appeler automatiquement les opportunités les unes après les autres.",
    },
  }),
  complexQ({
    id: "voip-003",
    module: "voip",
    text: {
      en: "What happens when you click the customer icon in the VoIP widget? (Odoo Learn — Sales Calls With VoIP)",
      fr: "Que se passe-t-il lorsque vous cliquez sur l'icône client dans le widget VoIP ? (Odoo Learn — Appels de vente avec VoIP)",
    },
    correct: {
      en: "A pop-up appears where you can see the customer’s contact information",
      fr: "Une fenêtre contextuelle apparaît où vous pouvez voir les coordonnées du client",
    },
    distractors: [
      { en: "A pop-up appears where you can search the database contacts", fr: "Une fenêtre contextuelle apparaît dans laquelle vous pouvez rechercher les contacts de la base de données" },
      { en: "A pop-up appears where you can schedule activities", fr: "Une fenêtre contextuelle apparaît dans laquelle vous pouvez planifier des activités" },
      { en: "A pop-up appears where you can choose to call a customer at a certain time", fr: "Une fenêtre contextuelle apparaît dans laquelle vous pouvez choisir d'appeler un client à une certaine heure" },
    ],
    explanation: {
      en: "Source Odoo Learn (Sales Calls With VoIP): A pop-up appears where you can see the customer’s contact information",
      fr: "Source Odoo Learn (appels de vente avec VoIP) : une pop-up apparaît où vous pouvez voir les coordonnées du client",
    },
  }),
  complexQ({
    id: "voip-004",
    module: "voip",
    text: {
      en: "How can I schedule a call from the VoIP widget while I’m already on a call? (Odoo Learn — Working as a Support Agent)",
      fr: "Comment puis-je planifier un appel à partir du widget VoIP alors que je suis déjà en communication ? (Odoo Learn — Travailler en tant qu'agent de support)",
    },
    correct: {
      en: "Click the clock icon, then schedule a call activity",
      fr: "Cliquez sur l'icône de l'horloge, puis planifiez une activité d'appel",
    },
    distractors: [
      { en: "From the Next Activities tab in the VoIP widget", fr: "Depuis l'onglet Activités suivantes du widget VoIP" },
      { en: "I cannot schedule activities from the VoIP widget", fr: "Je ne parviens pas à planifier des activités à partir du widget VoIP" },
      { en: "Click the double arrow icon, then schedule a call activity", fr: "Cliquez sur l'icône à double flèche, puis planifiez une activité d'appel" },
    ],
    explanation: {
      en: "Source Odoo Learn (Working as a Support Agent): Click the clock icon, then schedule a call activity",
      fr: "Source Odoo Learn (Travailler en tant qu'agent de support) : Cliquez sur l'icône de l'horloge, puis planifiez une activité d'appel",
    },
  }),
  complexQ({
    id: "voip-005",
    module: "voip",
    text: {
      en: "How can you log in to a call queue? (Odoo Learn — Working as a Support Agent)",
      fr: "Comment se connecter à une file d’attente d’appels ? (Odoo Learn — Travailler en tant qu'agent de support)",
    },
    correct: {
      en: "By typing in the agent connection code in the VoIP widget.",
      fr: "En saisissant le code de connexion de l'agent dans le widget VoIP.",
    },
    distractors: [
      { en: "By clicking the green phone icon in the VoIP widget.", fr: "En cliquant sur l'icône de téléphone verte dans le widget VoIP." },
      { en: "By clicking the double arrow icon in the VoIP widget.", fr: "En cliquant sur l'icône à double flèche dans le widget VoIP." },
      { en: "By typing in the call queue number in the VoIP widget.", fr: "En saisissant le numéro de la file d'attente des appels dans le widget VoIP." },
    ],
    explanation: {
      en: "Source Odoo Learn (Working as a Support Agent): By typing in the agent connection code in the VoIP widget.",
      fr: "Source Odoo Learn (Travailler en tant qu'agent de support) : En tapant le code de connexion de l'agent dans le widget VoIP.",
    },
  }),
  complexQ({
    id: "voip-006",
    module: "voip",
    text: {
      en: "How do you transfer a call using the Odoo VoIP widget? (Odoo Learn — Working as a Support Agent)",
      fr: "Comment transférer un appel à l'aide du widget Odoo VoIP ? (Odoo Learn — Travailler en tant qu'agent de support)",
    },
    correct: {
      en: "In the VoIP Widget, click on the double arrow icon and type in the extension, then click transfer.",
      fr: "Dans le widget VoIP, cliquez sur l'icône à double flèche et saisissez l'extension, puis cliquez sur transférer.",
    },
    distractors: [
      { en: "In the VoIP Widget, click on the keyboard icon and type in the extension, then click transfer.", fr: "Dans le widget VoIP, cliquez sur l'icône du clavier et saisissez l'extension, puis cliquez sur transférer." },
      { en: "Transfers need to occur from the Axivox admin console.", fr: "Les transferts doivent s'effectuer depuis la console d'administration Axivox." },
      { en: "In the VoIP Widget, click on the keyboard icon and type in “*” and the extension, then press enter.", fr: "Dans le widget VoIP, cliquez sur l'icône du clavier et tapez « * » et l'extension, puis appuyez sur Entrée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Working as a Support Agent): In the VoIP Widget, click on the double arrow icon and type in the extension, then click transfer.",
      fr: "Source Odoo Learn (Travailler en tant qu'agent de support) : Dans le widget VoIP, cliquez sur l'icône à double flèche et saisissez l'extension, puis cliquez sur transférer.",
    },
  }),
  complexQ({
    id: "voip-007",
    module: "voip",
    text: {
      en: "Where can I find my SIP password? (Odoo Learn — Set Up Odoo VoIP with Axivox)",
      fr: "Où puis-je trouver mon mot de passe SIP ? (Odoo Learn — Configurer Odoo VoIP avec Axivox)",
    },
    correct: {
      en: "In the Axivox admin portal, under Users > Your User > SIP Identifiers > SIP Password",
      fr: "Dans le portail d'administration Axivox, sous Utilisateurs > Votre utilisateur > Identifiants SIP > Mot de passe SIP",
    },
    distractors: [
      { en: "In the Axivox admin portal, under Users > Your User > General > SIP Password", fr: "Dans le portail d'administration Axivox, sous Utilisateurs > Votre utilisateur > Général > Mot de passe SIP" },
      { en: "In Odoo, under Settings > Users > Manage Users > Preferences > SIP Password", fr: "Dans Odoo, sous Paramètres > Utilisateurs > Gérer les utilisateurs > Préférences > Mot de passe SIP" },
      { en: "In Odoo, under Settings > Users > Manage Users > Access Rights > SIP Password", fr: "Dans Odoo, sous Paramètres > Utilisateurs > Gérer les utilisateurs > Droits d'accès > Mot de passe SIP" },
    ],
    explanation: {
      en: "Source Odoo Learn (Set Up Odoo VoIP with Axivox): In the Axivox admin portal, under Users > Your User > SIP Identifiers > SIP Password",
      fr: "Source Odoo Learn (Configurer Odoo VoIP avec Axivox) : Dans le portail d'administration Axivox, sous Utilisateurs > Votre utilisateur > Identifiants SIP > Mot de passe SIP",
    },
  }),
  complexQ({
    id: "voip-008",
    module: "voip",
    text: {
      en: "What do I need besides an Odoo database to implement VoIP? (Odoo Learn — Set Up Odoo VoIP with Axivox)",
      fr: "De quoi ai-je besoin en plus d’une base de données Odoo pour mettre en œuvre la VoIP ? (Odoo Learn — Configurer Odoo VoIP avec Axivox)",
    },
    correct: {
      en: "A VoIP service provider",
      fr: "Un fournisseur de services VoIP",
    },
    distractors: [
      { en: "An email address", fr: "Une adresse email" },
      { en: "A phone that VoIP will be set up on", fr: "Un téléphone sur lequel la VoIP sera configurée" },
      { en: "A landline", fr: "Un téléphone fixe" },
    ],
    explanation: {
      en: "Source Odoo Learn (Set Up Odoo VoIP with Axivox): A VoIP service provider",
      fr: "Source Odoo Learn (Configurer Odoo VoIP avec Axivox) : Un fournisseur de services VoIP",
    },
  }),
  complexQ({
    id: "voip-009",
    module: "voip",
    text: {
      en: "Where do I need to configure my VoIP settings in Odoo before I can make or take a call? (Odoo Learn — Set Up Odoo VoIP with Axivox)",
      fr: "Où dois-je configurer mes paramètres VoIP dans Odoo avant de pouvoir passer ou prendre un appel ? (Odoo Learn — Configurer Odoo VoIP avec Axivox)",
    },
    correct: {
      en: "Under Settings > Manage Users > VoIP tab and under Settings > Integrations > VoIP",
      fr: "Sous Paramètres > Gérer les utilisateurs > onglet VoIP et sous Paramètres > Intégrations > VoIP",
    },
    distractors: [
      { en: "Under VoIP > Preferences and under Settings > Integrations > VoIP", fr: "Sous VoIP > Préférences et sous Paramètres > Intégrations > VoIP" },
      { en: "Under Settings > Manage Users > General tab and under VoIP > Accounts", fr: "Sous Paramètres > Gérer les utilisateurs > onglet Général et sous VoIP > Comptes" },
      { en: "There is only one place where the settings need to be configured for VoIP: under Settings > Manage Users > VoIP tab", fr: "Il n'y a qu'un seul endroit où les paramètres doivent être configurés pour la VoIP : sous Paramètres > Gérer les utilisateurs > onglet VoIP." },
    ],
    explanation: {
      en: "Source Odoo Learn (Set Up Odoo VoIP with Axivox): Under Settings > Manage Users > VoIP tab and under Settings > Integrations > VoIP",
      fr: "Source Odoo Learn (Configurer Odoo VoIP avec Axivox) : Sous Paramètres > Gérer les utilisateurs > onglet VoIP et sous Paramètres > Intégrations > VoIP",
    },
  }),
  complexQ({
    id: "voip-010",
    module: "voip",
    text: {
      en: "Which calls appear in the “Next Activities” tab in the VOIP widget? (Odoo Learn — Make, Receive, Transfer, and Forward Calls)",
      fr: "Quels appels apparaissent dans l'onglet « Activités suivantes » du widget VOIP ? (Odoo Learn — Passer, recevoir, transférer et transférer des appels)",
    },
    correct: {
      en: "Only calls that are past due or due today.",
      fr: "Uniquement les appels en souffrance ou à échéance aujourd'hui.",
    },
    distractors: [
      { en: "Every call is added to the widget.", fr: "Chaque appel est ajouté au widget." },
      { en: "Calls aren’t added to the widget automatically.", fr: "Les appels ne sont pas ajoutés automatiquement au widget." },
      { en: "Only calls that are scheduled for the future.", fr: "Uniquement les appels planifiés pour le futur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Make, Receive, Transfer, and Forward Calls): Only calls that are past due or due today.",
      fr: "Source Odoo Learn (passer, recevoir, transférer et transférer des appels) : uniquement les appels en souffrance ou à échéance aujourd'hui.",
    },
  }),
  complexQ({
    id: "voip-011",
    module: "voip",
    text: {
      en: "How do you transfer and forward calls from the Odoo VoIP widget? (Odoo Learn — Make, Receive, Transfer, and Forward Calls)",
      fr: "Comment transférer et transférer des appels depuis le widget Odoo VoIP ? (Odoo Learn — Passer, recevoir, transférer et transférer des appels)",
    },
    correct: {
      en: "Click on the icon with two arrows on the VoIP widget.",
      fr: "Cliquez sur l'icône avec deux flèches sur le widget VoIP.",
    },
    distractors: [
      { en: "Click on the Contacts list.", fr: "Cliquez sur la liste des contacts." },
      { en: "Click on the phone icon.", fr: "Cliquez sur l'icône du téléphone." },
      { en: "Click on the keyboard.", fr: "Cliquez sur le clavier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Make, Receive, Transfer, and Forward Calls): Click on the icon with two arrows on the VoIP widget.",
      fr: "Source Odoo Learn (Emettre, recevoir, transférer et transférer des appels) : Cliquez sur l'icône avec deux flèches sur le widget VoIP.",
    },
  }),
  complexQ({
    id: "voip-012",
    module: "voip",
    text: {
      en: "How do you make a call manually by inputting numbers in VoIP? (Odoo Learn — Make, Receive, Transfer, and Forward Calls)",
      fr: "Comment passer un appel manuellement en saisissant des numéros en VoIP ? (Odoo Learn — Passer, recevoir, transférer et transférer des appels)",
    },
    correct: {
      en: "To manually make a call, you can just click on the keyboard at the lower left of the VOIP widget, and manually key in the number.",
      fr: "Pour passer un appel manuellement, vous pouvez simplement cliquer sur le clavier en bas à gauche du widget VOIP et saisir manuellement le numéro.",
    },
    distractors: [
      { en: "To manually make a call, simply type the numbers into the Command Pallet using a forward slash “/”.", fr: "Pour passer un appel manuellement, tapez simplement les numéros dans la palette de commandes en utilisant une barre oblique « / »." },
      { en: "To manually make a call, use the voice recognition feature activated on the user’s keyboard.", fr: "Pour passer un appel manuellement, utilisez la fonction de reconnaissance vocale activée sur le clavier de l’utilisateur." },
      { en: "In the Axivox dashboard, go to the General Settings menu option and manually type the number into the keyboard.", fr: "Dans le tableau de bord Axivox, accédez à l'option de menu Paramètres généraux et saisissez manuellement le numéro sur le clavier." },
    ],
    explanation: {
      en: "Source Odoo Learn (Make, Receive, Transfer, and Forward Calls): To manually make a call, you can just click on the keyboard at the lower left of the VOIP widget, and manually key in the number.",
      fr: "Source Odoo Learn (passer, recevoir, transférer et transférer des appels) : Pour passer manuellement un appel, vous pouvez simplement cliquer sur le clavier en bas à gauche du widget VOIP et saisir manuellement le numéro.",
    },
  }),
  complexQ({
    id: "voip-013",
    module: "voip",
    text: {
      en: "Where can I listen to voicemails that a caller left for me? (Odoo Learn — Voicemails and Audio Messages)",
      fr: "Où puis-je écouter les messages vocaux qu'un appelant m'a laissé ? (Odoo Learn — Messages vocaux et messages audio)",
    },
    correct: {
      en: "In my email account",
      fr: "Dans mon compte de messagerie",
    },
    distractors: [
      { en: "In the ‘Voicemails’ tab in Axivox", fr: "Dans l'onglet « Messages vocaux » d'Axivox" },
      { en: "By dialing into my voicemail inbox in Odoo", fr: "En accédant à ma boîte vocale dans Odoo" },
      { en: "In the ‘Contacts’ app in my Odoo database", fr: "Dans l'application « Contacts » de ma base de données Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Voicemails and Audio Messages): In my email account",
      fr: "Source Odoo Learn (Messages vocaux et messages audio) : Dans mon compte de messagerie",
    },
  }),
  complexQ({
    id: "voip-014",
    module: "voip",
    text: {
      en: "In Axivox, what happens if I click “Record/Listen” under Audio messages? (Odoo Learn — Voicemails and Audio Messages)",
      fr: "Dans Axivox, que se passe-t-il si je clique sur « Enregistrer/Écouter » sous Messages audio ? (Odoo Learn — Messages vocaux et messages audio)",
    },
    correct: {
      en: "I can select an extension, call it, and record audio by picking up and speaking",
      fr: "Je peux sélectionner un poste, l'appeler et enregistrer du son en décrochant et en parlant",
    },
    distractors: [
      { en: "I can upload an MP3 file to use as an audio message", fr: "Je peux télécharger un fichier MP3 à utiliser comme message audio" },
      { en: "I can generate audio with text-to-speech", fr: "Je peux générer de l'audio avec la synthèse vocale" },
      { en: "I can record music for callers on hold", fr: "Je peux enregistrer de la musique pour les appelants en attente" },
    ],
    explanation: {
      en: "Source Odoo Learn (Voicemails and Audio Messages): I can select an extension, call it, and record audio by picking up and speaking",
      fr: "Source Odoo Learn (Messages vocaux et messages audio) : je peux sélectionner un poste, l'appeler et enregistrer de l'audio en décrochant et en parlant",
    },
  }),
  complexQ({
    id: "voip-015",
    module: "voip",
    text: {
      en: "Who can receive voicemails in Axivox? (Odoo Learn — Voicemails and Audio Messages)",
      fr: "Qui peut recevoir des messages vocaux dans Axivox ? (Odoo Learn — Messages vocaux et messages audio)",
    },
    correct: {
      en: "Any incoming number or extension configured in Axivox",
      fr: "Tout numéro entrant ou poste configuré dans Axivox",
    },
    distractors: [
      { en: "Only users set up in Axivox can get voicemails", fr: "Seuls les utilisateurs configurés dans Axivox peuvent recevoir des messages vocaux" },
      { en: "Voicemails are not handled in Axivox, they’re managed in Odoo", fr: "Les messages vocaux ne sont pas gérés dans Axivox, ils sont gérés dans Odoo" },
      { en: "Any user that has an extension", fr: "Tout utilisateur disposant d'un poste" },
    ],
    explanation: {
      en: "Source Odoo Learn (Voicemails and Audio Messages): Any incoming number or extension configured in Axivox",
      fr: "Source Odoo Learn (Messages vocaux et messages audio) : Tout numéro entrant ou poste configuré dans Axivox",
    },
  }),
  complexQ({
    id: "voip-016",
    module: "voip",
    text: {
      en: "What kind of technology does my VoIP tool need to have Odoo VoIP work on it? (Odoo Learn — Devices and Integrations)",
      fr: "De quel type de technologie mon outil VoIP a-t-il besoin pour que Odoo VoIP fonctionne dessus ? (Odoo Learn — Appareils et intégrations)",
    },
    correct: {
      en: "SIP (Session Initiation Protocol)",
      fr: "SIP (protocole d'initiation de session)",
    },
    distractors: [
      { en: "BYOD (Bring Your Own Device)", fr: "BYOD (apportez votre propre appareil)" },
      { en: "PBX (Private Branch Exchange)", fr: "PBX (autocommutateur privé)" },
      { en: "The Internet", fr: "Internet" },
    ],
    explanation: {
      en: "Source Odoo Learn (Devices and Integrations): SIP (Session Initiation Protocol)",
      fr: "Source Odoo Learn (Appareils et intégrations) : SIP (Session Initiation Protocol)",
    },
  }),
  complexQ({
    id: "voip-017",
    module: "voip",
    text: {
      en: "What devices can I use Odoo VoIP on? (Odoo Learn — Devices and Integrations)",
      fr: "Sur quels appareils puis-je utiliser Odoo VoIP ? (Odoo Learn — Appareils et intégrations)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Phones", fr: "Téléphones" },
      { en: "Web browsers", fr: "Navigateurs Web" },
      { en: "Tablets", fr: "Comprimés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Devices and Integrations): All of the above",
      fr: "Source Odoo Learn (Appareils et intégrations) : Tout ce qui précède",
    },
  }),
  complexQ({
    id: "voip-018",
    module: "voip",
    text: {
      en: "What are three ways I can make phone calls via VOIP on a mobile phone? (Odoo Learn — Devices and Integrations)",
      fr: "Quelles sont les trois façons de passer des appels téléphoniques via VOIP sur un téléphone mobile ? (Odoo Learn — Appareils et intégrations)",
    },
    correct: {
      en: "Odoo Mobile App, ZoiPer, Linphone",
      fr: "Application mobile Odoo, ZoiPer, Linphone",
    },
    distractors: [
      { en: "Odoo Mobile App, Linphone, QuickCall App", fr: "Application mobile Odoo, Linphone, application QuickCall" },
      { en: "ZoiPer, Linphone, QuickCall App", fr: "Application ZoiPer, Linphone, QuickCall" },
      { en: "Linphone, ZoiPer, Google Voice", fr: "Linphone, ZoiPer, Google Voice" },
    ],
    explanation: {
      en: "Source Odoo Learn (Devices and Integrations): Odoo Mobile App, ZoiPer, Linphone",
      fr: "Source Odoo Learn (Appareils et intégrations) : Application mobile Odoo, ZoiPer, Linphone",
    },
  }),
  complexQ({
    id: "voip-019",
    module: "voip",
    text: {
      en: "When setting up a new call queue in Axivox, how can you configure incoming calls to ring your agents in a sequence, one after the other, until one of them picks up? (Odoo Learn — Call Queues)",
      fr: "Lors de la configuration d'une nouvelle file d'attente d'appels dans Axivox, comment configurer les appels entrants pour qu'ils sonnent successivement auprès de vos agents, les uns après les autres, jusqu'à ce que l'un d'eux décroche ? (Odoo Learn — Files d'attente d'appels)",
    },
    correct: {
      en: "Under Strategy, choose “Call agents one after the other.”",
      fr: "Sous Stratégie, choisissez « Appeler les agents les uns après les autres ».",
    },
    distractors: [
      { en: "Under Strategy, choose “Call all available agents.”", fr: "Sous Stratégie, choisissez « Appeler tous les agents disponibles »." },
      { en: "Under Strategy, choose “Call a random agent.”", fr: "Sous Stratégie, choisissez « Appeler un agent aléatoire »." },
      { en: "Under Strategy, choose “Call the agent who hasn’t received the call for the longest time.”", fr: "Sous Stratégie, choisissez « Appeler l’agent qui n’a pas reçu l’appel depuis le plus longtemps »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Call Queues): Under Strategy, choose “Call agents one after the other.”",
      fr: "Source Odoo Learn (Files d'attente d'appels) : Sous Stratégie, choisissez « Appeler les agents les uns après les autres ».",
    },
  }),
  complexQ({
    id: "voip-020",
    module: "voip",
    text: {
      en: "Under “Add a queue,” what’s an internal extension? (Odoo Learn — Call Queues)",
      fr: "Sous « Ajouter une file d'attente », qu'est-ce qu'une extension interne ? (Odoo Learn — Files d'attente d'appels)",
    },
    correct: {
      en: "A number that callers in your network can use to call the queue line or transfer callers to the queue.",
      fr: "Numéro que les appelants de votre réseau peuvent utiliser pour appeler la file d'attente ou transférer les appelants vers la file d'attente.",
    },
    distractors: [
      { en: "A number that external callers can use to call the queue line.", fr: "Un numéro que les appelants externes peuvent utiliser pour appeler la file d'attente." },
      { en: "A number that agents can use to connect or sign in to the queue from the Odoo widget.", fr: "Un numéro que les agents peuvent utiliser pour se connecter ou se connecter à la file d'attente à partir du widget Odoo." },
      { en: "A number that callers in your network can use to join the queue as an agent.", fr: "Numéro que les appelants de votre réseau peuvent utiliser pour rejoindre la file d'attente en tant qu'agent." },
    ],
    explanation: {
      en: "Source Odoo Learn (Call Queues): A number that callers in your network can use to call the queue line or transfer callers to the queue.",
      fr: "Source Odoo Learn (files d'attente d'appels) : un numéro que les appelants de votre réseau peuvent utiliser pour appeler la ligne d'attente ou transférer les appelants vers la file d'attente.",
    },
  }),
  complexQ({
    id: "voip-021",
    module: "voip",
    text: {
      en: "What is the difference between Static and Dynamic Agents? (Odoo Learn — Call Queues)",
      fr: "Quelle est la différence entre les agents statiques et dynamiques ? (Odoo Learn — Files d'attente d'appels)",
    },
    correct: {
      en: "Static agents will always be added to the queue automatically, while Dynamic agents need to log in and out of the queue.",
      fr: "Les agents statiques seront toujours ajoutés automatiquement à la file d'attente, tandis que les agents dynamiques doivent se connecter et se déconnecter de la file d'attente.",
    },
    distractors: [
      { en: "Static agents cannot be changed, while Dynamic agents can be changed.", fr: "Les agents statiques ne peuvent pas être modifiés, tandis que les agents dynamiques peuvent être modifiés." },
      { en: "There is no difference between Static and Dynamic agents.", fr: "Il n'y a aucune différence entre les agents statiques et dynamiques." },
      { en: "Static agents have separate phone numbers, while Dynamic agents don’t have a phone number assigned to them.", fr: "Les agents statiques ont des numéros de téléphone distincts, tandis que les agents dynamiques ne se voient pas attribuer de numéro de téléphone." },
    ],
    explanation: {
      en: "Source Odoo Learn (Call Queues): Static agents will always be added to the queue automatically, while Dynamic agents need to log in and out of the queue.",
      fr: "Source Odoo Learn (files d'attente d'appels) : les agents statiques seront toujours ajoutés automatiquement à la file d'attente, tandis que les agents dynamiques doivent se connecter et se déconnecter de la file d'attente.",
    },
  }),
  complexQ({
    id: "voip-022",
    module: "voip",
    text: {
      en: "Where can you set up different Caller ID rules in Axivox, depending on location? (Odoo Learn — Dynamic Caller ID)",
      fr: "Où pouvez-vous configurer différentes règles d'identification de l'appelant dans Axivox, en fonction de l'emplacement ? (Odoo Learn — Identification dynamique de l'appelant)",
    },
    correct: {
      en: "Under Settings > Default outgoing number > Advanced options.",
      fr: "Sous Paramètres > Numéro sortant par défaut > Options avancées.",
    },
    distractors: [
      { en: "Under Settings > General settings > Default outgoing number.", fr: "Sous Paramètres > Paramètres généraux > Numéro sortant par défaut." },
      { en: "Under Users > General > Outgoing number.", fr: "Sous Utilisateurs > Général > Numéro sortant." },
      { en: "Under Users > Add a user > General > Outgoing number.", fr: "Sous Utilisateurs > Ajouter un utilisateur > Général > Numéro sortant." },
    ],
    explanation: {
      en: "Source Odoo Learn (Dynamic Caller ID): Under Settings > Default outgoing number > Advanced options.",
      fr: "Source Odoo Learn (ID de l'appelant dynamique) : Sous Paramètres > Numéro sortant par défaut > Options avancées.",
    },
  }),
  complexQ({
    id: "voip-023",
    module: "voip",
    text: {
      en: "If you add a new user, what’s their default outgoing number? (Odoo Learn — Dynamic Caller ID)",
      fr: "Si vous ajoutez un nouvel utilisateur, quel est son numéro sortant par défaut ? (Odoo Learn — Identification dynamique de l'appelant)",
    },
    correct: {
      en: "Their own number has been assigned to them.",
      fr: "Leur propre numéro leur a été attribué.",
    },
    distractors: [
      { en: "Your company’s primary (default) number.", fr: "Le numéro principal (par défaut) de votre entreprise." },
      { en: "A number local to their area.", fr: "Un numéro local dans leur région." },
      { en: "There is no default outgoing number.", fr: "Il n'y a pas de numéro sortant par défaut." },
    ],
    explanation: {
      en: "Source Odoo Learn (Dynamic Caller ID): Their own number has been assigned to them.",
      fr: "Source Odoo Learn (Dynamic Caller ID) : Leur propre numéro leur a été attribué.",
    },
  }),
  complexQ({
    id: "voip-024",
    module: "voip",
    text: {
      en: "What happens to outgoing calls when an employee uses the default/main company line as their Caller ID number? (Odoo Learn — Dynamic Caller ID)",
      fr: "Qu'arrive-t-il aux appels sortants lorsqu'un employé utilise la ligne par défaut/principale de l'entreprise comme numéro d'identification de l'appelant ? (Odoo Learn — Identification dynamique de l'appelant)",
    },
    correct: {
      en: "The default outgoing number will appear on the recipient's caller ID.",
      fr: "Le numéro sortant par défaut apparaîtra sur l'identification de l'appelant du destinataire.",
    },
    distractors: [
      { en: "The employee’s own number/extension will show up on the recipient's caller ID.", fr: "Le numéro/poste de l’employé apparaîtra sur l’identification de l’appelant du destinataire." },
      { en: "A number is chosen randomly from all the available phone numbers registered to users on the database.", fr: "Un numéro est choisi au hasard parmi tous les numéros de téléphone disponibles enregistrés pour les utilisateurs dans la base de données." },
      { en: "It isn’t possible to set a default outgoing number for the company.", fr: "Il n'est pas possible de définir un numéro sortant par défaut pour l'entreprise." },
    ],
    explanation: {
      en: "Source Odoo Learn (Dynamic Caller ID): The default outgoing number will appear on the recipient's caller ID.",
      fr: "Source Odoo Learn (ID de l'appelant dynamique) : le numéro sortant par défaut apparaîtra sur l'ID de l'appelant du destinataire.",
    },
  }),
  complexQ({
    id: "voip-025",
    module: "voip",
    text: {
      en: "When you’re adding a new conference line, what’s an internal extension? (Odoo Learn — Conference Calls)",
      fr: "Lorsque vous ajoutez une nouvelle ligne de conférence, qu’est-ce qu’une extension interne ? (Odoo Learn — Conférences téléphoniques)",
    },
    correct: {
      en: "A number that everyone in your network will use to dial into the conference quickly.",
      fr: "Un numéro que tous les membres de votre réseau utiliseront pour accéder rapidement à la conférence.",
    },
    distractors: [
      { en: "The extension of the administrator in charge of this conference call line.", fr: "Le poste de l'administrateur en charge de cette ligne de conférence téléphonique." },
      { en: "A number that everyone will use to enter the conference after they’ve dialed in.", fr: "Un numéro que tout le monde utilisera pour accéder à la conférence après s'être connecté." },
      { en: "A setting that lets participants use the conference line without the administrator present.", fr: "Un paramètre qui permet aux participants d'utiliser la ligne de conférence sans la présence de l'administrateur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Conference Calls): A number that everyone in your network will use to dial into the conference quickly.",
      fr: "Source Odoo Learn (conférence téléphonique) : un numéro que tous les membres de votre réseau utiliseront pour accéder rapidement à la conférence.",
    },
  }),
  complexQ({
    id: "voip-026",
    module: "voip",
    text: {
      en: "How can you link an existing number with a conference line in Axivox? (Odoo Learn — Conference Calls)",
      fr: "Comment relier un numéro existant à une ligne conférence dans Axivox ? (Odoo Learn — Conférences téléphoniques)",
    },
    correct: {
      en: "Under Incoming Numbers > Edit > Destination type > Conference.",
      fr: "Sous Numéros entrants > Modifier > Type de destination > Conférence.",
    },
    distractors: [
      { en: "Under Incoming Numbers > Edit > Destination type > Extension.", fr: "Sous Numéros entrants > Modifier > Type de destination > Poste." },
      { en: "Under conference > Add a conference > Administrator extension.", fr: "Sous conférence > Ajouter une conférence > Extension administrateur." },
      { en: "Under conference > Conference line > Invite.", fr: "Sous Conférence > Ligne de conférence > Inviter." },
    ],
    explanation: {
      en: "Source Odoo Learn (Conference Calls): Under Incoming Numbers > Edit > Destination type > Conference.",
      fr: "Source Odoo Learn (conférences téléphoniques) : sous Numéros entrants > Modifier > Type de destination > Conférence.",
    },
  }),
  complexQ({
    id: "voip-027",
    module: "voip",
    text: {
      en: "How do you manually invite someone to the conference in Axivox? (Odoo Learn — Conference Calls)",
      fr: "Comment inviter manuellement quelqu’un à la conférence dans Axivox ? (Odoo Learn — Conférences téléphoniques)",
    },
    correct: {
      en: "Go to the Axivox dashboard, click on ‘Invite’ under the ‘Conferences’ menu, and type in the person's phone number. Then click Invite.",
      fr: "Accédez au tableau de bord Axivox, cliquez sur « Inviter » dans le menu « Conférences » et saisissez le numéro de téléphone de la personne. Cliquez ensuite sur Inviter.",
    },
    distractors: [
      { en: "There is no way to invite someone to a conference in Axivox/Odoo manually.", fr: "Il n’existe aucun moyen d’inviter manuellement quelqu’un à une conférence dans Axivox/Odoo." },
      { en: "Go to Odoo and click on ‘Invite’ from the VoIP widget. Type in the user’s phone number and then click invite.", fr: "Allez sur Odoo et cliquez sur « Inviter » depuis le widget VoIP. Saisissez le numéro de téléphone de l’utilisateur, puis cliquez sur inviter." },
      { en: "Go to the Axivox dashboard, click on the ‘User’ menu, and click on ‘Invite.’ Type in the phone number of the person. Then click Invite.", fr: "Accédez au tableau de bord Axivox, cliquez sur le menu « Utilisateur », puis cliquez sur « Inviter ». Saisissez le numéro de téléphone de la personne. Cliquez ensuite sur Inviter." },
    ],
    explanation: {
      en: "Source Odoo Learn (Conference Calls): Go to the Axivox dashboard, click on ‘Invite’ under the ‘Conferences’ menu, and type in the person's phone number. Then click Invite.",
      fr: "Source Odoo Learn (Conférences téléphoniques) : Accédez au tableau de bord Axivox, cliquez sur « Inviter » dans le menu « Conférences » et saisissez le numéro de téléphone de la personne. Cliquez ensuite sur Inviter.",
    },
  }),
  complexQ({
    id: "voip-028",
    module: "voip",
    text: {
      en: "What destinations can you add if you choose the “Call” element in a dial plan? (Odoo Learn — Introduction to Dial Plans)",
      fr: "Quelles destinations pouvez-vous ajouter si vous choisissez l'élément « Appeler » dans un plan de numérotation ? (Odoo Learn — Introduction aux plans de numérotation)",
    },
    correct: {
      en: "A person’s extension and a group in the network.",
      fr: "Extension d’une personne et groupe du réseau.",
    },
    distractors: [
      { en: "A person’s extension and a conference.", fr: "Extension d’une personne et conférence." },
      { en: "A group and a queue.", fr: "Un groupe et une file d'attente." },
      { en: "A group and a voicemail.", fr: "Un groupe et une messagerie vocale." },
    ],
    explanation: {
      en: "Source Odoo Learn (Introduction to Dial Plans): A person’s extension and a group in the network.",
      fr: "Source Odoo Learn (Introduction aux plans de numérotation) : Le poste d'une personne et un groupe dans le réseau.",
    },
  }),
  complexQ({
    id: "voip-029",
    module: "voip",
    text: {
      en: "If you recorded an audio message with your store hours, how would you add this to your dial plan so that it plays first? (Odoo Learn — Introduction to Dial Plans)",
      fr: "Si vous enregistriez un message audio avec les heures d'ouverture de votre magasin, comment l'ajouteriez-vous à votre plan de numérotation afin qu'il soit diffusé en premier ? (Odoo Learn — Introduction aux plans de numérotation)",
    },
    correct: {
      en: "Add the “Play a file” element and select your store hours audio message.",
      fr: "Ajoutez l’élément « Lire un fichier » et sélectionnez le message audio des heures d’ouverture de votre magasin.",
    },
    distractors: [
      { en: "Add the “Menu” element and select your store hours audio message.", fr: "Ajoutez l’élément « Menu » et sélectionnez le message audio des heures d’ouverture de votre magasin." },
      { en: "Add the “Audio message” element and select your store hours audio message.", fr: "Ajoutez l’élément « Message audio » et sélectionnez le message audio des heures d’ouverture de votre magasin." },
      { en: "Add the “Voicemail” element and select your store hours audio message.", fr: "Ajoutez l'élément « Messagerie vocale » et sélectionnez le message audio des heures d'ouverture de votre magasin." },
    ],
    explanation: {
      en: "Source Odoo Learn (Introduction to Dial Plans): Add the “Play a file” element and select your store hours audio message.",
      fr: "Source Odoo Learn (Introduction aux plans de numérotation) : Ajoutez l'élément « Lire un fichier » et sélectionnez le message audio des heures d'ouverture de votre magasin.",
    },
  }),
  complexQ({
    id: "voip-030",
    module: "voip",
    text: {
      en: "What is essential to have in your dial plan flow? (Odoo Learn — Introduction to Dial Plans)",
      fr: "Qu'est-ce qu'il est essentiel d'avoir dans le flux de votre plan de numérotation ? (Odoo Learn — Introduction aux plans de numérotation)",
    },
    correct: {
      en: "Endpoints or circle-backs for every path.",
      fr: "Points finaux ou retours en arrière pour chaque chemin.",
    },
    distractors: [
      { en: "Phone numbers for every single user in the Dial Plan", fr: "Numéros de téléphone pour chaque utilisateur du plan de numérotation" },
      { en: "Voicemail endpoints only.", fr: "Points de terminaison de messagerie vocale uniquement." },
      { en: "A new menu for every path.", fr: "Un nouveau menu pour chaque chemin." },
    ],
    explanation: {
      en: "Source Odoo Learn (Introduction to Dial Plans): Endpoints or circle-backs for every path.",
      fr: "Source Odoo Learn (Introduction aux plans de numérotation) : points de terminaison ou retours en arrière pour chaque chemin.",
    },
  }),
  complexQ({
    id: "voip-031",
    module: "voip",
    text: {
      en: "What does the “timeout” mean on the Digital Receptionist element? (Odoo Learn — Advanced Dial Plans)",
      fr: "Que signifie le « timeout » sur l'élément Réceptionniste numérique ? (Odoo Learn — Plans de numérotation avancés)",
    },
    correct: {
      en: "The length of time the caller has to input their party’s extension before the call automatically ends.",
      fr: "Durée pendant laquelle l'appelant doit saisir le numéro de poste de son correspondant avant que l'appel ne se termine automatiquement.",
    },
    distractors: [
      { en: "The length of time until the caller is redirected to the menu.", fr: "La durée jusqu'à ce que l'appelant soit redirigé vers le menu." },
      { en: "The length of time until the digital receptionist automatically makes a selection for the caller.", fr: "Temps écoulé avant que le réceptionniste numérique fasse automatiquement une sélection pour l'appelant." },
      { en: "The length of time the caller has to input their party’s phone number.", fr: "Le temps dont dispose l’appelant pour saisir le numéro de téléphone de son interlocuteur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Advanced Dial Plans): The length of time the caller has to input their party’s extension before the call automatically ends.",
      fr: "Source Odoo Learn (plans de numérotation avancés) : durée pendant laquelle l'appelant doit saisir le numéro de poste de son correspondant avant que l'appel ne se termine automatiquement.",
    },
  }),
  complexQ({
    id: "voip-032",
    module: "voip",
    text: {
      en: "If you wanted to automatically direct calls to a voicemail on a certain day of the year, what element would you use? (Odoo Learn — Advanced Dial Plans)",
      fr: "Si vous vouliez diriger automatiquement les appels vers une messagerie vocale un certain jour de l’année, quel élément utiliseriez-vous ? (Odoo Learn — Plans de numérotation avancés)",
    },
    correct: {
      en: "Time condition.",
      fr: "Condition temporelle.",
    },
    distractors: [
      { en: "Dispatch.", fr: "Expédition." },
      { en: "Access list.", fr: "Liste d'accès." },
      { en: "Digital receptionist.", fr: "Réceptionniste numérique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Advanced Dial Plans): Time condition.",
      fr: "Source Odoo Learn (Plans de numérotation avancés) : Condition temporelle.",
    },
  }),
  complexQ({
    id: "voip-033",
    module: "voip",
    text: {
      en: "What is the difference between the Access List element and the Dispatch element? (Odoo Learn — Advanced Dial Plans)",
      fr: "Quelle est la différence entre l’élément Access List et l’élément Dispatch ? (Odoo Learn — Plans de numérotation avancés)",
    },
    correct: {
      en: "The Access List element will allow you to block certain numbers and give VIP priority to others, while the Dispatch element routes calls based on country code.",
      fr: "L'élément Liste d'accès vous permettra de bloquer certains numéros et de donner la priorité VIP à d'autres, tandis que l'élément Dispatch achemine les appels en fonction de l'indicatif du pays.",
    },
    distractors: [
      { en: "The Access List element and the Dispatch element are the same.", fr: "L’élément Access List et l’élément Dispatch sont identiques." },
      { en: "The Access List element will route calls based on country code, while the Dispatch element allows you to block certain numbers and give VIP priority to others.", fr: "L'élément Liste d'accès acheminera les appels en fonction de l'indicatif du pays, tandis que l'élément Répartition vous permet de bloquer certains numéros et de donner la priorité VIP à d'autres." },
      { en: "The Access List element allows you to block access for users to the Axivox admin console, while the Dispatch element controls all the access for incoming callers.", fr: "L'élément Access List vous permet de bloquer l'accès des utilisateurs à la console d'administration Axivox, tandis que l'élément Dispatch contrôle tous les accès des appelants entrants." },
    ],
    explanation: {
      en: "Source Odoo Learn (Advanced Dial Plans): The Access List element will allow you to block certain numbers and give VIP priority to others, while the Dispatch element routes calls based on country code.",
      fr: "Source Odoo Learn (Plans de numérotation avancés) : L'élément Liste d'accès vous permettra de bloquer certains numéros et de donner la priorité VIP à d'autres, tandis que l'élément Répartition achemine les appels en fonction de l'indicatif du pays.",
    },
  }),
  complexQ({
    id: "voip-034",
    module: "voip",
    text: {
      en: "What can I see under the ‘Incoming Numbers’ section in the Axivox admin portal? (Odoo Learn — Manage Odoo VoIP Users in Axivox)",
      fr: "Que puis-je voir dans la section « Numéros entrants » du portail d'administration Axivox ? (Odoo Learn — Gérer les utilisateurs Odoo VoIP dans Axivox)",
    },
    correct: {
      en: "All the numbers my company pays to use and their destinations",
      fr: "Tous les numéros payés par mon entreprise et leurs destinations",
    },
    distractors: [
      { en: "All the incoming calls for my company's main line", fr: "Tous les appels entrants sur la ligne principale de mon entreprise" },
      { en: "All the incoming and outgoing calls for my company numbers", fr: "Tous les appels entrants et sortants pour mes numéros d'entreprise" },
      { en: "All the users of my company", fr: "Tous les utilisateurs de mon entreprise" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Odoo VoIP Users in Axivox): All the numbers my company pays to use and their destinations",
      fr: "Source Odoo Learn (Gérer les utilisateurs Odoo VoIP dans Axivox) : Tous les numéros que mon entreprise paie pour utiliser et leurs destinations",
    },
  }),
  complexQ({
    id: "voip-035",
    module: "voip",
    text: {
      en: "How many people can a call be forwarded to if I get called and do not pick up? (Odoo Learn — Manage Odoo VoIP Users in Axivox)",
      fr: "À combien de personnes un appel peut-il être renvoyé si je suis appelé et que je ne réponds pas ? (Odoo Learn — Gérer les utilisateurs Odoo VoIP dans Axivox)",
    },
    correct: {
      en: "As many people as I want",
      fr: "Autant de personnes que je veux",
    },
    distractors: [
      { en: "Three people", fr: "Trois personnes" },
      { en: "It’s based on time, where I can forward the call for two minutes", fr: "C'est basé sur l'heure, où je peux transférer l'appel pendant deux minutes" },
      { en: "I can’t, so the caller will be on hold until I pick up", fr: "Je ne peux pas, donc l'appelant sera en attente jusqu'à ce que je décroche" },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Odoo VoIP Users in Axivox): As many people as I want",
      fr: "Source Odoo Learn (Gérer les utilisateurs Odoo VoIP dans Axivox) : Autant de personnes que je veux",
    },
  }),
  complexQ({
    id: "voip-036",
    module: "voip",
    text: {
      en: "What must be done after I save my settings when making changes to the Axivox admin console? (Odoo Learn — Manage Odoo VoIP Users in Axivox)",
      fr: "Que faut-il faire après avoir enregistré mes paramètres lors de modifications dans la console d'administration Axivox ? (Odoo Learn — Gérer les utilisateurs Odoo VoIP dans Axivox)",
    },
    correct: {
      en: "Click “Apply Changes” in the upper-right corner of the console",
      fr: "Cliquez sur « Appliquer les modifications » dans le coin supérieur droit de la console.",
    },
    distractors: [
      { en: "Log out and log back in to confirm my changes were made successfully", fr: "Déconnectez-vous et reconnectez-vous pour confirmer que mes modifications ont été effectuées avec succès" },
      { en: "Nothing but “Save” needs to be clicked when making changes to the settings", fr: "Il suffit de cliquer sur « Enregistrer » pour modifier les paramètres." },
      { en: "Changes are saved automatically to the Axivox admin console, so there is no need to click anything", fr: "Les modifications sont automatiquement enregistrées dans la console d'administration Axivox, vous n'avez donc pas besoin de cliquer sur quoi que ce soit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Manage Odoo VoIP Users in Axivox): Click “Apply Changes” in the upper-right corner of the console",
      fr: "Source Odoo Learn (Gérer les utilisateurs Odoo VoIP dans Axivox) : Cliquez sur « Appliquer les modifications » dans le coin supérieur droit de la console",
    },
  }),
];
