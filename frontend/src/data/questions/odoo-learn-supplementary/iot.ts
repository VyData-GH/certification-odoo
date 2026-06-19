import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const iotSupplementaryQuestions = [
  complexQ({
    id: "iot-001",
    module: "iot",
    text: {
      en: "Which device does NOT need an IoT Box to connect to Odoo? (Odoo Learn — IoT Box Basics | Odoo IoT)",
      fr: "Which device does NOT need an IoT Box to connect to Odoo? (Odoo Learn — IoT Box Basics | Odoo IoT)",
    },
    correct: {
      en: "A cash register.",
      fr: "A cash register.",
    },
    distractors: [
      { en: "A camera.", fr: "A camera." },
      { en: "A measurement tool.", fr: "A measurement tool." },
      { en: "A Mettler Toledo Ariva scale.", fr: "A Mettler Toledo Ariva scale." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box Basics | Odoo IoT): A cash register.",
      fr: "Source Odoo Learn (IoT Box Basics | Odoo IoT): A cash register.",
    },
  }),
  complexQ({
    id: "iot-002",
    module: "iot",
    text: {
      en: "What are the two options for connecting the IoT Box to the Odoo database? (Odoo Learn — IoT Box Basics | Odoo IoT)",
      fr: "What are the two options for connecting the IoT Box to the Odoo database? (Odoo Learn — IoT Box Basics | Odoo IoT)",
    },
    correct: {
      en: "Ethernet cable or WiFi.",
      fr: "Ethernet cable or WiFi.",
    },
    distractors: [
      { en: "USB cable or Bluetooth.", fr: "USB cable or Bluetooth." },
      { en: "SD card or WiFi.", fr: "SD card or WiFi." },
      { en: "HDMI cable or Bluetooth.", fr: "HDMI cable or Bluetooth." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box Basics | Odoo IoT): Ethernet cable or WiFi.",
      fr: "Source Odoo Learn (IoT Box Basics | Odoo IoT): Ethernet cable or WiFi.",
    },
  }),
  complexQ({
    id: "iot-003",
    module: "iot",
    text: {
      en: "What is necessary to use a physical IoT box with an Odoo database? (Odoo Learn — IoT Box Basics | Odoo IoT)",
      fr: "What is necessary to use a physical IoT box with an Odoo database? (Odoo Learn — IoT Box Basics | Odoo IoT)",
    },
    correct: {
      en: "A Subscription from Odoo for the IoT box.",
      fr: "A Subscription from Odoo for the IoT box.",
    },
    distractors: [
      { en: "The IoT box only works with Odoo SH or On-premise databases.", fr: "The IoT box only works with Odoo SH or On-premise databases." },
      { en: "Do nothing, the IoT box automatically works with the database.", fr: "Do nothing, the IoT box automatically works with the database." },
      { en: "Technical support needs to set up the IoT box on the database.", fr: "Technical support needs to set up the IoT box on the database." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box Basics | Odoo IoT): A Subscription from Odoo for the IoT box.",
      fr: "Source Odoo Learn (IoT Box Basics | Odoo IoT): A Subscription from Odoo for the IoT box.",
    },
  }),
  complexQ({
    id: "iot-004",
    module: "iot",
    text: {
      en: "When is the power plugged into the IoT box? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
      fr: "When is the power plugged into the IoT box? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
    },
    correct: {
      en: "The power should be the last item plugged in when setting up the IoT device.",
      fr: "The power should be the last item plugged in when setting up the IoT device.",
    },
    distractors: [
      { en: "Immediately, this is the first thing that should be plugged in.", fr: "Immediately, this is the first thing that should be plugged in." },
      { en: "It doesn’t matter what order to plug the items in.", fr: "It doesn’t matter what order to plug the items in." },
      { en: "First plug in the ethernet cable, then the power and then the rest of the items (USB and Display).", fr: "First plug in the ethernet cable, then the power and then the rest of the items (USB and Display)." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): The power should be the last item plugged in when setting up the IoT device.",
      fr: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): The power should be the last item plugged in when setting up the IoT device.",
    },
  }),
  complexQ({
    id: "iot-005",
    module: "iot",
    text: {
      en: "Which ports on the IoT box will the IoT devices plug into (if they are not connecting via Wifi/bluetooth)? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
      fr: "Which ports on the IoT box will the IoT devices plug into (if they are not connecting via Wifi/bluetooth)? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
    },
    correct: {
      en: "USB ports.",
      fr: "USB ports.",
    },
    distractors: [
      { en: "Ethernet port.", fr: "Ethernet port." },
      { en: "USB-C Power port.", fr: "USB-C Power port." },
      { en: "Either of the two Micro-HDMI ports.", fr: "Either of the two Micro-HDMI ports." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): USB ports.",
      fr: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): USB ports.",
    },
  }),
  complexQ({
    id: "iot-006",
    module: "iot",
    text: {
      en: "Where can the network or internet cable be plugged in, on the IoT box? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
      fr: "Where can the network or internet cable be plugged in, on the IoT box? (Odoo Learn — IoT Box: Advanced Configuration | Odoo IoT)",
    },
    correct: {
      en: "Ethernet port or RJ-45 port",
      fr: "Ethernet port or RJ-45 port",
    },
    distractors: [
      { en: "Micro-HDMI port", fr: "Micro-HDMI port" },
      { en: "USB-C Power port.", fr: "USB-C Power port." },
      { en: "There is no internet connection port on the IoT box.", fr: "There is no internet connection port on the IoT box." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): Ethernet port or RJ-45 port",
      fr: "Source Odoo Learn (IoT Box: Advanced Configuration | Odoo IoT): Ethernet port or RJ-45 port",
    },
  }),
  complexQ({
    id: "iot-007",
    module: "iot",
    text: {
      en: "How do you format the IoT Box with the Odoo image/software? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
      fr: "How do you format the IoT Box with the Odoo image/software? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
    },
    correct: {
      en: "Flash the SD card.",
      fr: "Flash the SD card.",
    },
    distractors: [
      { en: "Order a new SD card from Odoo.", fr: "Order a new SD card from Odoo." },
      { en: "Do nothing, Odoo automatically updates it for you.", fr: "Do nothing, Odoo automatically updates it for you." },
      { en: "Do nothing, the IoT Box image/software never needs to be updated.", fr: "Do nothing, the IoT Box image/software never needs to be updated." },
    ],
    explanation: {
      en: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Flash the SD card.",
      fr: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Flash the SD card.",
    },
  }),
  complexQ({
    id: "iot-008",
    module: "iot",
    text: {
      en: "What three simple steps should you follow in the Etcher software? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
      fr: "What three simple steps should you follow in the Etcher software? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
    },
    correct: {
      en: "Select the Image, Select the Drive, Flash",
      fr: "Select the Image, Select the Drive, Flash",
    },
    distractors: [
      { en: "Install the software, Select the Drive, Flash", fr: "Install the software, Select the Drive, Flash" },
      { en: "Select the Image, Reformat the Drive, Flash", fr: "Select the Image, Reformat the Drive, Flash" },
      { en: "Install the software, Reformat the Drive, Flash", fr: "Install the software, Reformat the Drive, Flash" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Select the Image, Select the Drive, Flash",
      fr: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Select the Image, Select the Drive, Flash",
    },
  }),
  complexQ({
    id: "iot-009",
    module: "iot",
    text: {
      en: "On a Raspberry Pi, what is the boot process after you’ve flashed the SDcard? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
      fr: "On a Raspberry Pi, what is the boot process after you’ve flashed the SDcard? (Odoo Learn — Flashing an Image onto the IoT | Odoo IoT)",
    },
    correct: {
      en: "Insert the SDcard, HDMI cable, mouse, keyboard, Power on the Raspberry Pi last.",
      fr: "Insert the SDcard, HDMI cable, mouse, keyboard, Power on the Raspberry Pi last.",
    },
    distractors: [
      { en: "Never remove any of the devices or the SD card from the device or it won’t power on.", fr: "Never remove any of the devices or the SD card from the device or it won’t power on." },
      { en: "It doesn’t matter the order that the devices are attached to the IoT device.", fr: "It doesn’t matter the order that the devices are attached to the IoT device." },
      { en: "Flashing the SD card isn’t possible on the IoT device, it needs to be sent back to Odoo.", fr: "Flashing the SD card isn’t possible on the IoT device, it needs to be sent back to Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Insert the SDcard, HDMI cable, mouse, keyboard, Power on the Raspberry Pi last.",
      fr: "Source Odoo Learn (Flashing an Image onto the IoT | Odoo IoT): Insert the SDcard, HDMI cable, mouse, keyboard, Power on the Raspberry Pi last.",
    },
  }),
  complexQ({
    id: "iot-010",
    module: "iot",
    text: {
      en: "Where do you get the pairing code from? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
      fr: "Where do you get the pairing code from? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
    },
    correct: {
      en: "The pairing code is on your IoT box and can be copied after booting the IoT box or by connecting a thermal printer and printing the information.",
      fr: "The pairing code is on your IoT box and can be copied after booting the IoT box or by connecting a thermal printer and printing the information.",
    },
    distractors: [
      { en: "The pairing code is given to you by your account manager when you make the change in your subscription.", fr: "The pairing code is given to you by your account manager when you make the change in your subscription." },
      { en: "The pairing code is inside the settings of the IoT module of your database.", fr: "The pairing code is inside the settings of the IoT module of your database." },
      { en: "The pairing code is like a password and must be created by the customer.", fr: "The pairing code is like a password and must be created by the customer." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The pairing code is on your IoT box and can be copied after booting the IoT box or by connecting a thermal printer and printing the information.",
      fr: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The pairing code is on your IoT box and can be copied after booting the IoT box or by connecting a thermal printer and printing the information.",
    },
  }),
  complexQ({
    id: "iot-011",
    module: "iot",
    text: {
      en: "Where do you input the pairing code? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
      fr: "Where do you input the pairing code? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
    },
    correct: {
      en: "The pairing code is inputted after clicking on ‘Connect’ in the IoT Module inside the Odoo database.",
      fr: "The pairing code is inputted after clicking on ‘Connect’ in the IoT Module inside the Odoo database.",
    },
    distractors: [
      { en: "The pairing code must be entered by the account manager onto the subscription.", fr: "The pairing code must be entered by the account manager onto the subscription." },
      { en: "The pairing code is entered on the IoT Box when you first boot the device.", fr: "The pairing code is entered on the IoT Box when you first boot the device." },
      { en: "The pairing code acts as an access code and can be used like a password to access the device if you lose the password for it.", fr: "The pairing code acts as an access code and can be used like a password to access the device if you lose the password for it." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The pairing code is inputted after clicking on ‘Connect’ in the IoT Module inside the Odoo database.",
      fr: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The pairing code is inputted after clicking on ‘Connect’ in the IoT Module inside the Odoo database.",
    },
  }),
  complexQ({
    id: "iot-012",
    module: "iot",
    text: {
      en: "What two things secure the IoT box network connection? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
      fr: "What two things secure the IoT box network connection? (Odoo Learn — IoT Box: Using Ethernet | Odoo IoT)",
    },
    correct: {
      en: "The HTTPS certificate issued by Odoo and a secured physical network connection.",
      fr: "The HTTPS certificate issued by Odoo and a secured physical network connection.",
    },
    distractors: [
      { en: "The HTTPS certificate issued by Odoo and turning on the secure switch on the IoT box.", fr: "The HTTPS certificate issued by Odoo and turning on the secure switch on the IoT box." },
      { en: "By turning on the secure switch on the IoT box and a secured network connection.", fr: "By turning on the secure switch on the IoT box and a secured network connection." },
      { en: "There is no need for a secured connection as the information isn’t (PII) Personally identifiable information that passes through it.", fr: "There is no need for a secured connection as the information isn’t (PII) Personally identifiable information that passes through it." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The HTTPS certificate issued by Odoo and a secured physical network connection.",
      fr: "Source Odoo Learn (IoT Box: Using Ethernet | Odoo IoT): The HTTPS certificate issued by Odoo and a secured physical network connection.",
    },
  }),
  complexQ({
    id: "iot-013",
    module: "iot",
    text: {
      en: "Where do you input the Token that’s copied from the Odoo database? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
      fr: "Where do you input the Token that’s copied from the Odoo database? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
    },
    correct: {
      en: "Paste it into the IoT console as the “Server Token”.",
      fr: "Paste it into the IoT console as the “Server Token”.",
    },
    distractors: [
      { en: "Input it on your computer as the Wi-Fi password.", fr: "Input it on your computer as the Wi-Fi password." },
      { en: "Paste it into a browser window and go to the link.", fr: "Paste it into a browser window and go to the link." },
      { en: "Paste the token into the IoT module of the database.", fr: "Paste the token into the IoT module of the database." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): Paste it into the IoT console as the “Server Token”.",
      fr: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): Paste it into the IoT console as the “Server Token”.",
    },
  }),
  complexQ({
    id: "iot-014",
    module: "iot",
    text: {
      en: "Where do you configure the Wi-Fi for the IoT box that is used to connect the IoT box permanently to the Network? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
      fr: "Where do you configure the Wi-Fi for the IoT box that is used to connect the IoT box permanently to the Network? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
    },
    correct: {
      en: "Wi-Fi can be configured in two different places for the IoT box: 1. When initially setting up the IoT box from another device, after entering the “Secure token” AND 2. Through remote access Console for the IoT box.",
      fr: "Wi-Fi can be configured in two different places for the IoT box: 1. When initially setting up the IoT box from another device, after entering the “Secure token” AND 2. Through remote access Console for the IoT box.",
    },
    distractors: [
      { en: "Wi-Fi is only configured through the IoT box itself.", fr: "Wi-Fi is only configured through the IoT box itself." },
      { en: "Wi-Fi is only configured through the remote access Console for the IoT box.", fr: "Wi-Fi is only configured through the remote access Console for the IoT box." },
      { en: "Wi-Fi is only configured when initially setting up the IoT box from another device, after entering the “Secure token”.", fr: "Wi-Fi is only configured when initially setting up the IoT box from another device, after entering the “Secure token”." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): Wi-Fi can be configured in two different places for the IoT box: 1. When initially setting up the IoT box from another device, after entering the “Secure token” AND 2. Through remote access Console for the IoT box.",
      fr: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): Wi-Fi can be configured in two different places for the IoT box: 1. When initially setting up the IoT box from another device, after entering the “Secure token” AND 2. Through remote access Console for the IoT box.",
    },
  }),
  complexQ({
    id: "iot-015",
    module: "iot",
    text: {
      en: "What is needed in order to receive a HTTPS certificate for the IoT box? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
      fr: "What is needed in order to receive a HTTPS certificate for the IoT box? (Odoo Learn — IoT Box: Wi-Fi | Odoo IoT)",
    },
    correct: {
      en: "A valid Odoo IoT subscription.",
      fr: "A valid Odoo IoT subscription.",
    },
    distractors: [
      { en: "The HTTPS certificate is issued automatically after plugging the IoT box into the wall.", fr: "The HTTPS certificate is issued automatically after plugging the IoT box into the wall." },
      { en: "The IoT box can only be secured via an encrypted WiFi connection.", fr: "The IoT box can only be secured via an encrypted WiFi connection." },
      { en: "Technical support needs to manually issue the HTTPS certificate.", fr: "Technical support needs to manually issue the HTTPS certificate." },
    ],
    explanation: {
      en: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): A valid Odoo IoT subscription.",
      fr: "Source Odoo Learn (IoT Box: Wi-Fi | Odoo IoT): A valid Odoo IoT subscription.",
    },
  }),
  complexQ({
    id: "iot-016",
    module: "iot",
    text: {
      en: "Where is the Token found that is used to activate the IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
      fr: "Where is the Token found that is used to activate the IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
    },
    correct: {
      en: "The Token is found in the IoT module after clicking on ‘Connect’.",
      fr: "The Token is found in the IoT module after clicking on ‘Connect’.",
    },
    distractors: [
      { en: "The Token is the password for the Odoo database.", fr: "The Token is the password for the Odoo database." },
      { en: "The Token is found in the Odoo software after it completes setup.", fr: "The Token is found in the Odoo software after it completes setup." },
      { en: "The Token is generated by the account manager and sent to the client.", fr: "The Token is generated by the account manager and sent to the client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Windows IoT | Odoo IoT): The Token is found in the IoT module after clicking on ‘Connect’.",
      fr: "Source Odoo Learn (Windows IoT | Odoo IoT): The Token is found in the IoT module after clicking on ‘Connect’.",
    },
  }),
  complexQ({
    id: "iot-017",
    module: "iot",
    text: {
      en: "What is the Windows Virtual IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
      fr: "What is the Windows Virtual IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
    },
    correct: {
      en: "It is a Windows based application that allows you to connect devices to a PC (to use in a database) just as you would with a physical IoT box.",
      fr: "It is a Windows based application that allows you to connect devices to a PC (to use in a database) just as you would with a physical IoT box.",
    },
    distractors: [
      { en: "It is the phrase used when you log into the IoT box remotely.", fr: "It is the phrase used when you log into the IoT box remotely." },
      { en: "It is a module that is installed on the DB.", fr: "It is a module that is installed on the DB." },
      { en: "It’s a windows based IoT box that can be ordered from Odoo.", fr: "It’s a windows based IoT box that can be ordered from Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Windows IoT | Odoo IoT): It is a Windows based application that allows you to connect devices to a PC (to use in a database) just as you would with a physical IoT box.",
      fr: "Source Odoo Learn (Windows IoT | Odoo IoT): It is a Windows based application that allows you to connect devices to a PC (to use in a database) just as you would with a physical IoT box.",
    },
  }),
  complexQ({
    id: "iot-018",
    module: "iot",
    text: {
      en: "What devices won’t connect with the Windows virtual IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
      fr: "What devices won’t connect with the Windows virtual IoT box? (Odoo Learn — Windows IoT | Odoo IoT)",
    },
    correct: {
      en: "MRP devices aren’t compatible, these are items such as cameras or measurement tools.",
      fr: "MRP devices aren’t compatible, these are items such as cameras or measurement tools.",
    },
    distractors: [
      { en: "Payment terminals.", fr: "Payment terminals." },
      { en: "Printers.", fr: "Printers." },
      { en: "All devices work with the Windows virtual IoT box.", fr: "All devices work with the Windows virtual IoT box." },
    ],
    explanation: {
      en: "Source Odoo Learn (Windows IoT | Odoo IoT): MRP devices aren’t compatible, these are items such as cameras or measurement tools.",
      fr: "Source Odoo Learn (Windows IoT | Odoo IoT): MRP devices aren’t compatible, these are items such as cameras or measurement tools.",
    },
  }),
  complexQ({
    id: "iot-019",
    module: "iot",
    text: {
      en: "What two places in the IoT Module will a device show up after connecting it to the IoT box? (Odoo Learn — Connecting a Device | Odoo IoT)",
      fr: "What two places in the IoT Module will a device show up after connecting it to the IoT box? (Odoo Learn — Connecting a Device | Odoo IoT)",
    },
    correct: {
      en: "The device will appear in the Devices menu as well as under the IoT box that is connected to the Database.",
      fr: "The device will appear in the Devices menu as well as under the IoT box that is connected to the Database.",
    },
    distractors: [
      { en: "The device will only appear under the Devices menu.", fr: "The device will only appear under the Devices menu." },
      { en: "The device will only appear under the IoT box that is connected to the database.", fr: "The device will only appear under the IoT box that is connected to the database." },
      { en: "The device will only appear in the individual application settings.", fr: "The device will only appear in the individual application settings." },
    ],
    explanation: {
      en: "Source Odoo Learn (Connecting a Device | Odoo IoT): The device will appear in the Devices menu as well as under the IoT box that is connected to the Database.",
      fr: "Source Odoo Learn (Connecting a Device | Odoo IoT): The device will appear in the Devices menu as well as under the IoT box that is connected to the Database.",
    },
  }),
  complexQ({
    id: "iot-020",
    module: "iot",
    text: {
      en: "can you add a new “action” to a device? (Odoo Learn — Connecting a Device | Odoo IoT)",
      fr: "can you add a new “action” to a device? (Odoo Learn — Connecting a Device | Odoo IoT)",
    },
    correct: {
      en: "A new action can be added to the device by going to the Devices menu, clicking on the device and selecting “Add a Line”.",
      fr: "A new action can be added to the device by going to the Devices menu, clicking on the device and selecting “Add a Line”.",
    },
    distractors: [
      { en: "New Actions are made through the Actions menu selection, under the Technical Menu, in the Settings App.", fr: "New Actions are made through the Actions menu selection, under the Technical Menu, in the Settings App." },
      { en: "A development is required to add an additional action to the device on your IoT box.", fr: "A development is required to add an additional action to the device on your IoT box." },
      { en: "In developer mode, access the Settings menu in the IoT Module and go to Actions.", fr: "In developer mode, access the Settings menu in the IoT Module and go to Actions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Connecting a Device | Odoo IoT): A new action can be added to the device by going to the Devices menu, clicking on the device and selecting “Add a Line”.",
      fr: "Source Odoo Learn (Connecting a Device | Odoo IoT): A new action can be added to the device by going to the Devices menu, clicking on the device and selecting “Add a Line”.",
    },
  }),
  complexQ({
    id: "iot-021",
    module: "iot",
    text: {
      en: "How many ways are there to reboot the IoT box? (Odoo Learn — Connecting a Device | Odoo IoT)",
      fr: "How many ways are there to reboot the IoT box? (Odoo Learn — Connecting a Device | Odoo IoT)",
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
      fr: "Source Odoo Learn (Connecting a Device | Odoo IoT): 2",
    },
  }),
];
