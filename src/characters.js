 let noahConfig = {
    "class": "Swordfighter",
    "level": "99",
    "rank": "20",
    "skills": {
        "skill_1": null,
        "skill_2": null,
        "skill_3": null
    },
    "arts": {
        "art_master_1": null,
        "art_master_2": null,
        "art_master_3": null,
        "art_class_1": "Ground Beat",
        "art_class_2": "Air Slash",
        "art_class_3": "Shadow Eye",
        "art_talent": "Overclock Buster"
    },
    "gems": {
        "gem_1": null,
        "gem_1": null,
        "gem_1": null,
    },
    "accessories": {
        "accessory_1": null,
        "accessory_2": null,
        "accessory_3": null,
    }
}

let mioConfig = {
    "class": "Zephyr",
    "level": "99",
    "rank": "20",
    "skills": {
        "skill_1": null,
        "skill_2": null,
        "skill_3": null
    },
    "arts": {
        "art_master_1": null,
        "art_master_2": null,
        "art_master_3": null,
        "art_class_1": "Butterfly Blade",
        "art_class_2": "Air Fang",
        "art_class_3": "Wide Slash",
        "art_talent": "Gemini Strike"
    },
    "gems": {
        "gem_1": null,
        "gem_1": null,
        "gem_1": null,
    },
    "accessories": {
        "accessory_1": null,
        "accessory_2": null,
        "accessory_3": null,
    }
}

let eunieConfig = {
    "class": "Medic Gunner",
    "level": "99",
    "rank": "20",
    "skills": {
        "skill_1": null,
        "skill_2": null,
        "skill_3": null
    },
    "arts": {
        "art_master_1": null,
        "art_master_2": null,
        "art_master_3": null,
        "art_class_1": "Myopic Screen",
        "art_class_2": "Group Heal",
        "art_class_3": "Ether Cannon",
        "art_talent": "Healing Ring"
    },
    "gems": {
        "gem_1": null,
        "gem_1": null,
        "gem_1": null,
    },
    "accessories": {
        "accessory_1": null,
        "accessory_2": null,
        "accessory_3": null,
    }
}

let taionConfig = {
    "class": "Tactician",
    "level": "99",
    "rank": "20",
    "skills": {
        "skill_1": null,
        "skill_2": null,
        "skill_3": null
    },
    "arts": {
        "art_master_1": null,
        "art_master_2": null,
        "art_master_3": null,
        "art_class_1": "Dark Banner",
        "art_class_2": "Overfall",
        "art_class_3": "Stormy Skies",
        "art_talent": "Tidal Wave"
    },
    "gems": {
        "gem_1": null,
        "gem_1": null,
        "gem_1": null,
    },
    "accessories": {
        "accessory_1": null,
        "accessory_2": null,
        "accessory_3": null,
    }
}

let lanzConfig = {
    "class": "Heavy Guard",
    "level": "99",
    "rank": "20",
    "skills": {
        "skill_1": null,
        "skill_2": null,
        "skill_3": null
    },
    "arts": {
        "art_master_1": null,
        "art_master_2": null,
        "art_master_3": null,
        "art_class_1": "Bull Rush",
        "art_class_2": "Variable Turret",
        "art_class_3": "Crash Out",
        "art_talent": "Mad Taunt"
    },
    "gems": {
        "gem_1": null,
        "gem_1": null,
        "gem_1": null,
    },
    "accessories": {
        "accessory_1": null,
        "accessory_2": null,
        "accessory_3": null,
    }
}

let senaConfig = {
    "class": "Ogre",
    "level": "99",
    "rank": "20",
    "skills": {
        "skill_1": null,
        "skill_2": null,
        "skill_3": null
    },
    "arts": {
        "art_master_1": null,
        "art_master_2": null,
        "art_master_3": null,
        "art_class_1": "Big Impact",
        "art_class_2": "Hammerhead",
        "art_class_3": "Giant Swing",
        "art_talent": "Pressure Drop"
    },
    "gems": {
        "gem_1": null,
        "gem_1": null,
        "gem_1": null,
    },
    "accessories": {
        "accessory_1": null,
        "accessory_2": null,
        "accessory_3": null,
    }
}

const portraitsImages = [
    { name: "Noah", src: "img/portraits/NoahPortrait.png" },
    { name: "Mio", src: "img/portraits/MioPortrait.png" },
    { name: "Eunie", src: "img/portraits/EuniePortrait.png" },
    { name: "Taion", src: "img/portraits/TaionPortrait.png" },
    { name: "Lanz", src: "img/portraits/LanzPortrait.png" },
    { name: "Sena", src: "img/portraits/SenaPortrait.png" },
    { name: "Hero", src: "img/portraits/heroes/EthelPortrait.png" },
    { name: "Noah Ouroboros", src: "img/portraits/ouroboros/NoahOuroborosPortrait.png" },
    { name: "Mio Ouroboros", src: "img/portraits/ouroboros/MioOuroborosPortrait.png" },
    { name: "Eunie Ouroboros", src: "img/portraits/ouroboros/EunieOuroborosPortrait.png" },
    { name: "Taion Ouroboros", src: "img/portraits/ouroboros/TaionOuroborosPortrait.png" },
    { name: "Lanz Ouroboros", src: "img/portraits/ouroboros/LanzOuroborosPortrait.png" },
    { name: "Sena Ouroboros", src: "img/portraits/ouroboros/SenaOuroborosPortrait.png" }
 ];

 const heroIcons = [
    { name: "Ethel", src: "img/heroes/ethel-select.png", portraitSrc: "img/portraits/heroes/EthelPortrait.png", buttonSrc: "img/party/heroes/EthelParty.png" },
    { name: "Valdi", src: "img/heroes/valdi-select.png", portraitSrc: "img/portraits/heroes/ValdiPortrait.png", buttonSrc: "img/party/heroes/ValdiParty.png" },
    { name: "Zeon", src: "img/heroes/zeon-select.png", portraitSrc: "img/portraits/heroes/ZeonPortrait.png", buttonSrc: "img/party/heroes/ZeonParty.png" },
    { name: "Teach", src: "img/heroes/teach-select.png", portraitSrc: "img/portraits/heroes/TeachPortrait.png", buttonSrc: "img/party/heroes/TeachParty.png" },
    { name: "Riku & Manana", src: "img/heroes/riku-manana-select.png", portraitSrc: "img/portraits/heroes/RikuMananaPortrait.png", buttonSrc: "img/party/heroes/RikuMananaParty.png" },
    { name: "Gray", src: "img/heroes/gray-select.png", portraitSrc: "img/portraits/heroes/GrayPortrait.png", buttonSrc: "img/party/heroes/GrayParty.png" },
    { name: "Isurd", src: "img/heroes/isurd-select.png", portraitSrc: "img/portraits/heroes/IsurdPortrait.png", buttonSrc: "img/party/heroes/IsurdParty.png" },
    { name: "Juniper", src: "img/heroes/juniper-select.png", portraitSrc: "img/portraits/heroes/JuniperPortrait.png", buttonSrc: "img/party/heroes/JuniperParty.png" },
    { name: "Ashera", src: "img/heroes/ashera-select.png", portraitSrc: "img/portraits/heroes/AsheraPortrait.png", buttonSrc: "img/party/heroes/AsheraParty.png" },
    { name: "Alexandria", src: "img/heroes/alexandria-select.png", portraitSrc: "img/portraits/heroes/AlexandriaPortrait.png", buttonSrc: "img/party/heroes/AlexandriaParty.png" },
    { name: "Monica", src: "img/heroes/monica-select.png", portraitSrc: "img/portraits/heroes/MonicaPortrait.png", buttonSrc: "img/party/heroes/MonicaParty.png" },
    { name: "Fiona", src: "img/heroes/fiona-select.png", portraitSrc: "img/portraits/heroes/FionaPortrait.png", buttonSrc: "img/party/heroes/FionaParty.png" },
    { name: "Triton", src: "img/heroes/triton-select.png", portraitSrc: "img/portraits/heroes/TritonPortrait.png", buttonSrc: "img/party/heroes/TritonParty.png" },
    { name: "Ghondor", src: "img/heroes/ghondor-select.png", portraitSrc: "img/portraits/heroes/GhondorPortrait.png", buttonSrc: "img/party/heroes/GhondorParty.png" },
    { name: "Miyabi", src: "img/heroes/miyabi-select.png", portraitSrc: "img/portraits/heroes/MiyabiPortrait.png", buttonSrc: "img/party/heroes/MiyabiParty.png" },
    { name: "Cammuravi", src: "img/heroes/cammuravi-select.png", portraitSrc: "img/portraits/heroes/CammuraviPortrait.png", buttonSrc: "img/party/heroes/CammuraviParty.png" },
    { name: "Segiri", src: "img/heroes/segiri-select.png", portraitSrc: "img/portraits/heroes/SegiriPortrait.png", buttonSrc: "img/party/heroes/SegiriParty.png" },
    { name: "Nia", src: "img/heroes/nia-select.png", portraitSrc: "img/portraits/heroes/NiaPortrait.png", buttonSrc: "img/party/heroes/NiaParty.png" },
    { name: "Melia", src: "img/heroes/melia-select.png", portraitSrc: "img/portraits/heroes/MeliaPortrait.png", buttonSrc: "img/party/heroes/MeliaParty.png" },
    { name: "Ino", src: "img/heroes/ino-select.png", portraitSrc: "img/portraits/heroes/InoPortrait.png", buttonSrc: "img/party/heroes/InoParty.png" },
    { name: "Masha", src: "img/heroes/masha-select.png", portraitSrc: "img/portraits/heroes/MashaPortrait.png", buttonSrc: "img/party/heroes/MashaParty.png" },
    { name: "Shulk", src: "img/heroes/shulk-select.png", portraitSrc: "img/portraits/heroes/ShulkPortrait.png", buttonSrc: "img/party/heroes/ShulkParty.png" },
    { name: "Rex", src: "img/heroes/rex-select.png", portraitSrc: "img/portraits/heroes/RexPortrait.png", buttonSrc: "img/party/heroes/RexParty.png" }
];

const classIcons = [
    { name: "Swordfighter", src: "img/classes/Swordfighter.png" },
    { name: "Zephyr", src: "img/classes/Zephyr.png" },
    { name: "Medic Gunner", src: "img/classes/MedicGunner.png" },
    { name: "Tactician", src: "img/classes/Tactician.png" },
    { name: "Heavy Guard", src: "img/classes/HeavyGuard.png" },
    { name: "Ogre", src: "img/classes/Ogre.png" },
    { name: "Flash Fencer", src: "img/classes/FlashFencer.png" },
    { name: "War Medic", src: "img/classes/WarMedic.png" },
    { name: "Guardian Commander", src: "img/classes/GuardianCommander.png" },
    { name: "Thaumaturge", src: "img/classes/Thaumaturge.png" },
    { name: "Yumsmith", src: "img/classes/Yumsmith.png" },
    { name: "Full Metal Jaguar", src: "img/classes/FullMetalJaguar.png" },
    { name: "Strategos", src: "img/classes/Strategos.png" },
    { name: "Stalker", src: "img/classes/Stalker.png" },
    { name: "Lone Exile", src: "img/classes/LoneExile.png" },
    { name: "Incursor", src: "img/classes/Incursor.png" },
    { name: "Lost Vanguard", src: "img/classes/LostVanguard.png" },
    { name: "Signifer", src: "img/classes/Signifer.png" },
    { name: "Soulhacker", src: "img/classes/Soulhacker.png" },
    { name: "Martial Artist", src: "img/classes/MartialArtist.png" },
    { name: "Troubadour", src: "img/classes/Troubadour.png" },
    { name: "Seraph", src: "img/classes/Seraph.png" },
    { name: "Machine Assassin", src: "img/classes/MachineAssassin.png" },
    { name: "Lifesage", src: "img/classes/Lifesage.png" },
    { name: "Royal Summoner", src: "img/classes/RoyalSummoner.png" },
    { name: "Noponic Champion", src: "img/classes/NoponicChampion.png" },
    { name: "Lapidarist", src: "img/classes/Lapidarist.png" }
];