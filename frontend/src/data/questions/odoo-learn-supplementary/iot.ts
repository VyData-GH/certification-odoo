import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const iotSupplementaryQuestions = [
  complexQ({
    id: "iot-001",
    module: "iot",
    text: {
      en: "Which device does NOT need an IoT Box to connect to Odoo? (Odoo Learn — IoT Box Basics | Odoo IoT)",
      fr: "Quel appareil n’a PAS besoin d’une IoT Box pour se connecter à Odoo ? (Odoo Learn — Bases de la boîte IoT | Odoo IoT)",
    },
    correct: {
      en: "A cash register.",
      fr: "Une caisse enregistreuse.",
    },
    distractors: [
      { en: "A camera.", fr: "Un appareil photo." },
      { en: "A measurement tool.", fr: "Un outil de mesure." },
      { en: "A Mettler Toledo Ariva scale.", fr: "Une balance Mettler Toledo Ariva." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box Basics | Odoo IoT): A cash register.",
      fr: "Source Odoo Learn (IoT Box Basics | Odoo IoT) : Une caisse enregistreuse.",
    },
  }),
  complexQ({
    id: "iot-002",
    module: "iot",
    text: {
      en: "What are the two options for connecting the IoT Box to the Odoo database? (Odoo Learn — IoT Box Basics | Odoo IoT)",
      fr: "Quelles sont les deux options pour connecter la IoT Box à la base de données Odoo ? (Odoo Learn — Bases de la boîte IoT | Odoo IoT)",
    },
    correct: {
      en: "Ethernet cable or WiFi.",
      fr: "Câble Ethernet ou WiFi.",
    },
    distractors: [
      { en: "USB cable or Bluetooth.", fr: "Câble USB ou Bluetooth." },
      { en: "SD card or WiFi.", fr: "Carte SD ou WiFi." },
      { en: "HDMI cable or Bluetooth.", fr: "Câble HDMI ou Bluetooth." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box Basics | Odoo IoT): Ethernet cable or WiFi.",
      fr: "Source Odoo Learn (IoT Box Basics | Odoo IoT) : câble Ethernet ou WiFi.",
    },
  }),
  complexQ({
    id: "iot-003",
    module: "iot",
    text: {
      en: "What is necessary to use a physical IoT box with an Odoo database? (Odoo Learn — IoT Box Basics | Odoo IoT)",
      fr: "Que faut-il pour utiliser une box IoT physique avec une base de données Odoo ? (Odoo Learn — Bases de la boîte IoT | Odoo IoT)",
    },
    correct: {
      en: "A Subscription from Odoo for the IoT box.",
      fr: "Un abonnement Odoo pour la box IoT.",
    },
    distractors: [
      { en: "The IoT box only works with Odoo SH or On-premise databases.", fr: "La box IoT fonctionne uniquement avec les bases de données Odoo SH ou On-premise." },
      { en: "Do nothing, the IoT box automatically works with the database.", fr: "Ne faites rien, la box IoT fonctionne automatiquement avec la base de données." },
      { en: "Technical support needs to set up the IoT box on the database.", fr: "Le support technique doit configurer le boîtier IoT sur la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box Basics | Odoo IoT): A Subscription from Odoo for the IoT box.",
      fr: "Source Odoo Learn (IoT Box Basics | Odoo IoT) : Un abonnement d'Odoo pour la box IoT.",
    },
  }),
  complexQ({
    id: "iot-004",
    module: "iot",
    text: {
      en: "When is the power plugged into the IoT box? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
      fr: "Quand l’alimentation est-elle branchée sur le boîtier IoT ? (Odoo Learn — Boîte IoT : Configuration avancée | Odoo IoT)",
    },
    correct: {
      en: "The power should be the last item plugged in when setting up the IoT device.",
      fr: "L'alimentation doit être le dernier élément branché lors de la configuration de l'appareil IoT.",
    },
    distractors: [
      { en: "Immediately, this is the first thing that should be plugged in.", fr: "Immédiatement, c’est la première chose à brancher." },
      { en: "It doesn’t matter what order to plug the items in.", fr: "L’ordre dans lequel les éléments sont branchés n’a pas d’importance." },
      { en: "First plug in the ethernet cable, then the power and then the rest of the items (USB and Display).", fr: "Branchez d’abord le câble Ethernet, puis l’alimentation et enfin le reste des éléments (USB et écran)." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): The power should be the last item plugged in when setting up the IoT device.",
      fr: "Source Odoo Learn (IoT Box : Configuration avancée | Odoo IoT) : L'alimentation doit être le dernier élément branché lors de la configuration de l'appareil IoT.",
    },
  }),
  complexQ({
    id: "iot-005",
    module: "iot",
    text: {
      en: "Which ports on the IoT box will the IoT devices plug into (if they are not connecting via Wifi/bluetooth)? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
      fr: "À quels ports du boîtier IoT les appareils IoT se connecteront-ils (s'ils ne se connectent pas via Wifi/Bluetooth) ? (Odoo Learn — Boîte IoT : Configuration avancée | Odoo IoT)",
    },
    correct: {
      en: "USB ports.",
      fr: "Ports USB.",
    },
    distractors: [
      { en: "Ethernet port.", fr: "Port Ethernet." },
      { en: "USB-C Power port.", fr: "Port d'alimentation USB-C." },
      { en: "Either of the two Micro-HDMI ports.", fr: "L’un ou l’autre des deux ports Micro-HDMI." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): USB ports.",
      fr: "Source Odoo Learn (IoT Box : Configuration avancée | Odoo IoT) : ports USB.",
    },
  }),
  complexQ({
    id: "iot-006",
    module: "iot",
    text: {
      en: "Where can the network or internet cable be plugged in, on the IoT box? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
      fr: "Où peut-on brancher le câble réseau ou internet, sur la box IoT ? (Odoo Learn — Boîte IoT : Configuration avancée | Odoo IoT)",
    },
    correct: {
      en: "Ethernet port or RJ-45 port",
      fr: "Port Ethernet ou port RJ-45",
    },
    distractors: [
      { en: "Micro-HDMI port", fr: "Port micro-HDMI" },
      { en: "USB-C Power port.", fr: "Port d'alimentation USB-C." },
      { en: "There is no internet connection port on the IoT box.", fr: "Il n’y a pas de port de connexion internet sur la box IoT." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): Ethernet port or RJ-45 port",
      fr: "Source Odoo Learn (IoT Box : Configuration Avancée | Odoo IoT) : port Ethernet ou port RJ-45",
    },
  }),
  complexQ({
    id: "iot-007",
    module: "iot",
    text: {
      en: "How do you format the IoT Box with the Odoo image/software? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
      fr: "Comment formater l'IoT Box avec l'image/le logiciel Odoo ? (Odoo Learn — Flasher une image sur l'IoT | Odoo IoT)",
    },
    correct: {
      en: "Flash the SD card.",
      fr: "Flashez la carte SD.",
    },
    distractors: [
      { en: "Order a new SD card from Odoo.", fr: "Commandez une nouvelle carte SD chez Odoo." },
      { en: "Do nothing, Odoo automatically updates it for you.", fr: "Ne faites rien, Odoo le met automatiquement à jour pour vous." },
      { en: "Do nothing, the IoT Box image/software never needs to be updated.", fr: "Ne faites rien, l’image/le logiciel IoT Box n’a jamais besoin d’être mis à jour." },
    ],
    explanation: {
      en: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Flash the SD card.",
      fr: "Source Odoo Learn (Flasher une image sur l'IoT | Odoo IoT) : Flashez la carte SD.",
    },
  }),
  complexQ({
    id: "iot-008",
    module: "iot",
    text: {
      en: "What three simple steps should you follow in the Etcher software? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
      fr: "Quelles sont les trois étapes simples que vous devez suivre dans le logiciel Etcher ? (Odoo Learn — Flasher une image sur l'IoT | Odoo IoT)",
    },
    correct: {
      en: "Select the Image, Select the Drive, Flash",
      fr: "Sélectionnez l'image, sélectionnez le lecteur, Flash",
    },
    distractors: [
      { en: "Install the software, Select the Drive, Flash", fr: "Installez le logiciel, sélectionnez le lecteur, Flash" },
      { en: "Select the Image, Reformat the Drive, Flash", fr: "Sélectionnez l'image, reformatez le lecteur, Flash" },
      { en: "Install the software, Reformat the Drive, Flash", fr: "Installez le logiciel, reformatez le lecteur, Flash" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Select the Image, Select the Drive, Flash",
      fr: "Source Odoo Learn (Flasher une image sur l'IoT | Odoo IoT) : Sélectionnez l'image, Sélectionnez le lecteur, Flash",
    },
  }),
  complexQ({
    id: "iot-009",
    module: "iot",
    text: {
      en: "On a Raspberry Pi, what is the boot process after you’ve flashed the SDcard? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
      fr: "Sur un Raspberry Pi, quel est le processus de démarrage après avoir flashé la carte SD ? (Odoo Learn — Flasher une image sur l'IoT | Odoo IoT)",
    },
    correct: {
      en: "Insert the SDcard, HDMI cable, mouse, keyboard, Power on the Raspberry Pi last.",
      fr: "Insérez la carte SD, le câble HDMI, la souris, le clavier, allumez le Raspberry Pi en dernier.",
    },
    distractors: [
      { en: "Never remove any of the devices or the SD card from the device or it won’t power on.", fr: "Ne retirez jamais aucun appareil ou la carte SD de l'appareil, sinon il ne s'allumera pas." },
      { en: "It doesn’t matter the order that the devices are attached to the IoT device.", fr: "L’ordre dans lequel les appareils sont connectés à l’appareil IoT n’a pas d’importance." },
      { en: "Flashing the SD card isn’t possible on the IoT device, it needs to be sent back to Odoo.", fr: "Le flashage de la carte SD n'est pas possible sur l'appareil IoT, elle doit être renvoyée à Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Insert the SDcard, HDMI cable, mouse, keyboard, Power on the Raspberry Pi last.",
      fr: "Source Odoo Learn (Flasher une image sur l'IoT | Odoo IoT) : Insérez la carte SD, le câble HDMI, la souris, le clavier, Allumez le Raspberry Pi en dernier.",
    },
  }),
  complexQ({
    id: "iot-010",
    module: "iot",
    text: {
      en: "Where do you get the pairing code from? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
      fr: "D'où obtiens-tu le code d'appairage ? (Odoo Learn — Boîte IoT : Utiliser Ethernet | Odoo IoT)",
    },
    correct: {
      en: "The pairing code is on your IoT box and can be copied after booting the IoT box or by connecting a thermal printer and printing the information.",
      fr: "Le code d'appairage se trouve sur votre box IoT et peut être copié après le démarrage de la box IoT ou en connectant une imprimante thermique et en imprimant les informations.",
    },
    distractors: [
      { en: "The pairing code is given to you by your account manager when you make the change in your subscription.", fr: "Le code d'appairage vous est remis par votre gestionnaire de compte lors de la modification de votre abonnement." },
      { en: "The pairing code is inside the settings of the IoT module of your database.", fr: "Le code d'appairage se trouve dans les paramètres du module IoT de votre base de données." },
      { en: "The pairing code is like a password and must be created by the customer.", fr: "Le code d'appairage est comme un mot de passe et doit être créé par le client." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The pairing code is on your IoT box and can be copied after booting the IoT box or by connecting a thermal printer and printing the information.",
      fr: "Source Odoo Learn (IoT Box : Utilisation d'Ethernet | Odoo IoT) : Le code d'appairage se trouve sur votre box IoT et peut être copié après le démarrage de la box IoT ou en connectant une imprimante thermique et en imprimant les informations.",
    },
  }),
  complexQ({
    id: "iot-011",
    module: "iot",
    text: {
      en: "Where do you input the pairing code? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
      fr: "Où saisissez-vous le code d'appairage ? (Odoo Learn — Boîte IoT : Utiliser Ethernet | Odoo IoT)",
    },
    correct: {
      en: "The pairing code is inputted after clicking on ‘Connect’ in the IoT Module inside the Odoo database.",
      fr: "Le code d'appairage est saisi après avoir cliqué sur « Connecter » dans le module IoT de la base de données Odoo.",
    },
    distractors: [
      { en: "The pairing code must be entered by the account manager onto the subscription.", fr: "Le code d'appairage doit être renseigné par le gestionnaire de compte sur l'abonnement." },
      { en: "The pairing code is entered on the IoT Box when you first boot the device.", fr: "Le code d'appairage est saisi sur l'IoT Box lors du premier démarrage de l'appareil." },
      { en: "The pairing code acts as an access code and can be used like a password to access the device if you lose the password for it.", fr: "Le code d'appairage agit comme un code d'accès et peut être utilisé comme un mot de passe pour accéder à l'appareil si vous perdez le mot de passe correspondant." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The pairing code is inputted after clicking on ‘Connect’ in the IoT Module inside the Odoo database.",
      fr: "Source Odoo Learn (IoT Box : Utilisation d'Ethernet | Odoo IoT) : Le code d'appairage est saisi après avoir cliqué sur « Connecter » dans le module IoT de la base de données Odoo.",
    },
  }),
  complexQ({
    id: "iot-012",
    module: "iot",
    text: {
      en: "What two things secure the IoT box network connection? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
      fr: "Quelles sont les deux choses qui sécurisent la connexion réseau de la box IoT ? (Odoo Learn — Boîte IoT : Utiliser Ethernet | Odoo IoT)",
    },
    correct: {
      en: "The HTTPS certificate issued by Odoo and a secured physical network connection.",
      fr: "Le certificat HTTPS délivré par Odoo et une connexion réseau physique sécurisée.",
    },
    distractors: [
      { en: "The HTTPS certificate issued by Odoo and turning on the secure switch on the IoT box.", fr: "Le certificat HTTPS délivré par Odoo et activant le switch sécurisé sur la box IoT." },
      { en: "By turning on the secure switch on the IoT box and a secured network connection.", fr: "En activant l’interrupteur sécurisé de la box IoT et une connexion réseau sécurisée." },
      { en: "There is no need for a secured connection as the information isn’t (PII) Personally identifiable information that passes through it.", fr: "Il n’est pas nécessaire d’avoir une connexion sécurisée car les informations ne sont pas (PII) des informations personnellement identifiables qui y transitent." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The HTTPS certificate issued by Odoo and a secured physical network connection.",
      fr: "Source Odoo Learn (IoT Box : Utilisation d'Ethernet | Odoo IoT) : Le certificat HTTPS délivré par Odoo et une connexion réseau physique sécurisée.",
    },
  }),
  complexQ({
    id: "iot-013",
    module: "iot",
    text: {
      en: "Where do you input the Token that’s copied from the Odoo database? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
      fr: "Où saisissez-vous le jeton copié à partir de la base de données Odoo ? (Odoo Learn — Boîte IoT : Wi-Fi | Odoo IoT)",
    },
    correct: {
      en: "Paste it into the IoT console as the “Server Token”.",
      fr: "Collez-le dans la console IoT en tant que « Jeton de serveur ».",
    },
    distractors: [
      { en: "Input it on your computer as the Wi-Fi password.", fr: "Saisissez-le sur votre ordinateur comme mot de passe Wi-Fi." },
      { en: "Paste it into a browser window and go to the link.", fr: "Collez-le dans une fenêtre de navigateur et accédez au lien." },
      { en: "Paste the token into the IoT module of the database.", fr: "Collez le jeton dans le module IoT de la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): Paste it into the IoT console as the “Server Token”.",
      fr: "Source Odoo Learn (IoT Box : Wi-Fi | Odoo IoT) : Collez-le dans la console IoT en tant que « Jeton de serveur ».",
    },
  }),
  complexQ({
    id: "iot-014",
    module: "iot",
    text: {
      en: "Where do you configure the Wi-Fi for the IoT box that is used to connect the IoT box permanently to the Network? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
      fr: "Où configurer le Wi-Fi de la box IoT qui permet de connecter la box IoT en permanence au Réseau ? (Odoo Learn — Boîte IoT : Wi-Fi | Odoo IoT)",
    },
    correct: {
      en: "Wi-Fi can be configured in two different places for the IoT box: 1. When initially setting up the IoT box from another device, after entering the “Secure token” AND 2. Through remote access Console for the IoT box.",
      fr: "Le Wi-Fi peut être configuré à deux endroits différents pour la box IoT : 1. Lors de la configuration initiale de la box IoT à partir d'un autre appareil, après avoir saisi le « Jeton sécurisé » ET 2. Via la console d'accès à distance pour la box IoT.",
    },
    distractors: [
      { en: "Wi-Fi is only configured through the IoT box itself.", fr: "Le Wi-Fi n’est configuré que via le boîtier IoT lui-même." },
      { en: "Wi-Fi is only configured through the remote access Console for the IoT box.", fr: "Le Wi-Fi est configuré uniquement via la console d'accès à distance du boîtier IoT." },
      { en: "Wi-Fi is only configured when initially setting up the IoT box from another device, after entering the “Secure token”.", fr: "Le Wi-Fi n’est configuré que lors de la première configuration de la box IoT depuis un autre appareil, après avoir saisi le « Secure token »." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): Wi-Fi can be configured in two different places for the IoT box: 1. When initially setting up the IoT box from another device, after entering the “Secure token” AND 2. Through remote access Console for the IoT box.",
      fr: "Source Odoo Learn (IoT Box : Wi-Fi | Odoo IoT) : Le Wi-Fi peut être configuré à deux endroits différents pour la box IoT : 1. Lors de la configuration initiale de la box IoT à partir d'un autre appareil, après avoir saisi le « Jeton sécurisé » ET 2. Via la console d'accès à distance pour la box IoT.",
    },
  }),
  complexQ({
    id: "iot-015",
    module: "iot",
    text: {
      en: "What is needed in order to receive a HTTPS certificate for the IoT box? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
      fr: "Que faut-il pour recevoir un certificat HTTPS pour la box IoT ? (Odoo Learn — Boîte IoT : Wi-Fi | Odoo IoT)",
    },
    correct: {
      en: "A valid Odoo IoT subscription.",
      fr: "Un abonnement Odoo IoT valide.",
    },
    distractors: [
      { en: "The HTTPS certificate is issued automatically after plugging the IoT box into the wall.", fr: "Le certificat HTTPS est émis automatiquement après le branchement du boîtier IoT au mur." },
      { en: "The IoT box can only be secured via an encrypted WiFi connection.", fr: "La box IoT ne peut être sécurisée que via une connexion WiFi cryptée." },
      { en: "Technical support needs to manually issue the HTTPS certificate.", fr: "Le support technique doit émettre manuellement le certificat HTTPS." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): A valid Odoo IoT subscription.",
      fr: "Source Odoo Learn (IoT Box : Wi-Fi | Odoo IoT) : Un abonnement Odoo IoT valide.",
    },
  }),
  complexQ({
    id: "iot-016",
    module: "iot",
    text: {
      en: "Where is the Token found that is used to activate the IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
      fr: "Où trouve-t-on le Token qui sert à activer la box IoT ? (Odoo Learn — WindowsIoT | Odoo IoT)",
    },
    correct: {
      en: "The Token is found in the IoT module after clicking on ‘Connect’.",
      fr: "Le Token se trouve dans le module IoT après avoir cliqué sur « Connecter ».",
    },
    distractors: [
      { en: "The Token is the password for the Odoo database.", fr: "Le Token est le mot de passe de la base de données Odoo." },
      { en: "The Token is found in the Odoo software after it completes setup.", fr: "Le jeton se trouve dans le logiciel Odoo une fois la configuration terminée." },
      { en: "The Token is generated by the account manager and sent to the client.", fr: "Le Token est généré par le gestionnaire de compte et envoyé au client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Windows IoT | Odoo IoT): The Token is found in the IoT module after clicking on ‘Connect’.",
      fr: "Source Odoo Learn (Windows IoT | Odoo IoT) : Le Token se trouve dans le module IoT après avoir cliqué sur « Connecter ».",
    },
  }),
  complexQ({
    id: "iot-017",
    module: "iot",
    text: {
      en: "What is the Windows Virtual IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
      fr: "Qu’est-ce que le boîtier Windows Virtual IoT ? (Odoo Learn — WindowsIoT | Odoo IoT)",
    },
    correct: {
      en: "It is a Windows based application that allows you to connect devices to a PC (to use in a database) just as you would with a physical IoT box.",
      fr: "Il s'agit d'une application basée sur Windows qui vous permet de connecter des appareils à un PC (à utiliser dans une base de données) comme vous le feriez avec un boîtier IoT physique.",
    },
    distractors: [
      { en: "It is the phrase used when you log into the IoT box remotely.", fr: "C’est la phrase utilisée lorsque vous vous connectez à distance à la box IoT." },
      { en: "It is a module that is installed on the DB.", fr: "C'est un module qui est installé sur la base de données." },
      { en: "It’s a windows based IoT box that can be ordered from Odoo.", fr: "Il s’agit d’une boîte IoT basée sur Windows qui peut être commandée auprès d’Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Windows IoT | Odoo IoT): It is a Windows based application that allows you to connect devices to a PC (to use in a database) just as you would with a physical IoT box.",
      fr: "Source Odoo Learn (Windows IoT | Odoo IoT) : Il s'agit d'une application basée sur Windows qui vous permet de connecter des appareils à un PC (pour les utiliser dans une base de données) comme vous le feriez avec un boîtier IoT physique.",
    },
  }),
  complexQ({
    id: "iot-018",
    module: "iot",
    text: {
      en: "What devices won’t connect with the Windows virtual IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
      fr: "Quels appareils ne se connecteront pas au boîtier IoT virtuel Windows ? (Odoo Learn — WindowsIoT | Odoo IoT)",
    },
    correct: {
      en: "MRP devices aren’t compatible, these are items such as cameras or measurement tools.",
      fr: "Les appareils MRP ne sont pas compatibles, il s’agit d’éléments tels que des caméras ou des outils de mesure.",
    },
    distractors: [
      { en: "Payment terminals.", fr: "Terminaux de paiement." },
      { en: "Printers.", fr: "Imprimantes." },
      { en: "All devices work with the Windows virtual IoT box.", fr: "Tous les appareils fonctionnent avec la box IoT virtuelle Windows." },
    ],
    explanation: {
      en: "Source Odoo Learn (Windows IoT | Odoo IoT): MRP devices aren’t compatible, these are items such as cameras or measurement tools.",
      fr: "Source Odoo Learn (Windows IoT | Odoo IoT) : les appareils MRP ne sont pas compatibles, il s'agit d'éléments tels que des caméras ou des outils de mesure.",
    },
  }),
  complexQ({
    id: "iot-019",
    module: "iot",
    text: {
      en: "What two places in the IoT Module will a device show up after connecting it to the IoT box? (Odoo Learn — Connecting a Device | Odoo IoT)",
      fr: "À quels endroits du module IoT un appareil apparaîtra-t-il après l'avoir connecté au boîtier IoT ? (Odoo Learn — Connecter un appareil | Odoo IoT)",
    },
    correct: {
      en: "The device will appear in the Devices menu as well as under the IoT box that is connected to the Database.",
      fr: "L'appareil apparaîtra dans le menu Appareils ainsi que sous la box IoT connectée à la base de données.",
    },
    distractors: [
      { en: "The device will only appear under the Devices menu.", fr: "L'appareil apparaîtra uniquement dans le menu Appareils." },
      { en: "The device will only appear under the IoT box that is connected to the database.", fr: "L'appareil n'apparaîtra que sous le boîtier IoT connecté à la base de données." },
      { en: "The device will only appear in the individual application settings.", fr: "L'appareil n'apparaîtra que dans les paramètres de l'application individuelle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Connecting a Device | Odoo IoT): The device will appear in the Devices menu as well as under the IoT box that is connected to the Database.",
      fr: "Source Odoo Learn (Connexion d'un appareil | Odoo IoT) : L'appareil apparaîtra dans le menu Appareils ainsi que sous la case IoT qui est connectée à la Base de données.",
    },
  }),
  complexQ({
    id: "iot-020",
    module: "iot",
    text: {
      en: "can you add a new “action” to a device? (Odoo Learn — Connecting a Device | Odoo IoT)",
      fr: "pouvez-vous ajouter une nouvelle « action » à un appareil ? (Odoo Learn — Connecter un appareil | Odoo IoT)",
    },
    correct: {
      en: "A new action can be added to the device by going to the Devices menu, clicking on the device and selecting “Add a Line”.",
      fr: "Une nouvelle action peut être ajoutée à l'appareil en allant dans le menu Appareils, en cliquant sur l'appareil et en sélectionnant « Ajouter une ligne ».",
    },
    distractors: [
      { en: "New Actions are made through the Actions menu selection, under the Technical Menu, in the Settings App.", fr: "Les nouvelles actions sont effectuées via la sélection du menu Actions, sous le menu technique, dans l'application Paramètres." },
      { en: "A development is required to add an additional action to the device on your IoT box.", fr: "Un développement est nécessaire pour ajouter une action supplémentaire au dispositif sur votre box IoT." },
      { en: "In developer mode, access the Settings menu in the IoT Module and go to Actions.", fr: "En mode développeur, accédez au menu Paramètres du module IoT et accédez à Actions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Connecting a Device | Odoo IoT): A new action can be added to the device by going to the Devices menu, clicking on the device and selecting “Add a Line”.",
      fr: "Source Odoo Learn (Connexion d'un appareil | Odoo IoT) : Une nouvelle action peut être ajoutée à l'appareil en allant dans le menu Appareils, en cliquant sur l'appareil et en sélectionnant « Ajouter une ligne ».",
    },
  }),
  complexQ({
    id: "iot-021",
    module: "iot",
    text: {
      en: "How many ways are there to reboot the IoT box? (Odoo Learn — Connecting a Device | Odoo IoT)",
      fr: "De combien de façons existe-t-il pour redémarrer la box IoT ? (Odoo Learn — Connecter un appareil | Odoo IoT)",
    },
    correct: {
      en: "2",
      fr: "2",
    },
    distractors: [
      { en: "1", fr: "1" },
      { en: "3", fr: "3" },
      { en: "4", fr: "4" },
    ],
    explanation: {
      en: "Source Odoo Learn (Connecting a Device | Odoo IoT): 2",
      fr: "Source Odoo Learn (Connexion d'un appareil | Odoo IoT) : 2",
    },
  }),
];
