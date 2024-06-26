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

document.addEventListener("DOMContentLoaded", () => {
    const portrait = document.getElementById("currentCharacter");
    const buttons = document.getElementsByClassName("icon");

    for (let index = 0; index < buttons.length; index++) {
        if (index >= portraitsImages.length){
           return;
        }
        buttons[index].addEventListener("click", () => {
           const portraitImg = portraitsImages[index].src
           portrait.src = portraitImg;
        })
    }
});

var frToggle = document.getElementById("fr-toggle-button");
const bg1 = 'url("img/bg.png")';
const bg2 = 'url("img/bg-fr.png")';
let currentBackgroundImage = bg1;

frToggle.onclick = function() {
    if (currentBackgroundImage === bg1) {
        document.body.style.backgroundImage = bg2;
        currentBackgroundImage = bg2;
    }
    else {
        document.body.style.backgroundImage = bg1;
        currentBackgroundImage = bg1;
    }
}

var classMenu = document.getElementById("classModal");
var classButton = document.getElementById("classButton");
var classSpan = document.getElementById("class-close");

classButton.onclick = function() {
    clearMenu();
    populateMenu();
    classMenu.style.display = "block";
}

classSpan.onclick = function() {
    classMenu.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === classMenu) {
        classMenu.style.display = "none";
    }
}

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

const heroIcons = [
    { name: "Ethel", src: "img/heroes/ethel-select.png" },
    { name: "Valdi", src: "img/heroes/valdi-select.png" },
    { name: "Zeon", src: "img/heroes/zeon-select.png" },
    { name: "Teach", src: "img/heroes/teach-select.png" },
    { name: "Riku & Manana", src: "img/heroes/riku-manana-select.png" },
    { name: "Gray", src: "img/heroes/gray-select.png" },
    { name: "Isurd", src: "img/heroes/isurd-select.png" },
    { name: "Juniper", src: "img/heroes/juniper-select.png" },
    { name: "Ashera", src: "img/heroes/ashera-select.png" },
    { name: "Alexandria", src: "img/heroes/alexandria-select.png" },
    { name: "Monica", src: "img/heroes/monica-select.png" },
    { name: "Fiona", src: "img/heroes/fiona-select.png" },
    { name: "Triton", src: "img/heroes/triton-select.png" },
    { name: "Ghondor", src: "img/heroes/ghondor-select.png" },
    { name: "Miyabi", src: "img/heroes/miyabi-select.png" },
    { name: "Cammuravi", src: "img/heroes/cammuravi-select.png" },
    { name: "Segiri", src: "img/heroes/segiri-select.png" },
    { name: "Nia", src: "img/heroes/nia-select.png" },
    { name: "Melia", src: "img/heroes/melia-select.png" },
    { name: "Ino", src: "img/heroes/ino-select.png" },
    { name: "Masha", src: "img/heroes/masha-select.png" },
    { name: "Shulk", src: "img/heroes/shulk-select.png" },
    { name: "Rex", src: "img/heroes/rex-select.png" }
];

const heroPortraits = [
    { name: "Ethel", src: "img/portraits/heroes/EthelPortrait.png" },
    { name: "Valdi", src: "img/portraits/heroes/ValdiPortrait.png" },
    { name: "Zeon", src: "img/portraits/heroes/ZeonPortrait.png" },
    { name: "Teach", src: "img/portraits/heroes/TeachPortrait.png" },
    { name: "Riku & Manana", src: "img/portraits/heroes/RikuMananaPortrait.png" },
    { name: "Gray", src: "img/portraits/heroes/GrayPortrait.png" },
    { name: "Isurd", src: "img/portraits/heroes/IsurdPortrait.png" },
    { name: "Juniper", src: "img/portraits/heroes/JuniperPortrait.png" },
    { name: "Ashera", src: "img/portraits/heroes/AsheraPortrait.png" },
    { name: "Alexandria", src: "img/portraits/heroes/AlexandriaPortrait.png" },
    { name: "Monica", src: "img/portraits/heroes/MonicaPortrait.png" },
    { name: "Fiona", src: "img/portraits/heroes/FionaPortrait.png" },
    { name: "Triton", src: "img/portraits/heroes/TritonPortrait.png" },
    { name: "Ghondor", src: "img/portraits/heroes/GhondorPortrait.png" },
    { name: "Miyabi", src: "img/portraits/heroes/MiyabiPortrait.png" },
    { name: "Cammuravi", src: "img/portraits/heroes/CammuraviPortrait.png" },
    { name: "Segiri", src: "img/portraits/heroes/SegiriPortrait.png" },
    { name: "Nia", src: "img/portraits/heroes/NiaPortrait.png" },
    { name: "Melia", src: "img/portraits/heroes/MeliaPortrait.png" },
    { name: "Ino", src: "img/portraits/heroes/InoPortrait.png" },
    { name: "Masha", src: "img/portraits/heroes/MashaPortrait.png" },
    { name: "Shulk", src: "img/portraits/heroes/ShulkPortrait.png" },
    { name: "Rex", src: "img/portraits/heroes/RexPortrait.png" }
];

const heroButtons = [
    { name: "Ethel", src: "img/party/heroes/EthelParty.png" },
    { name: "Valdi", src: "img/party/heroes/ValdiParty.png" },
    { name: "Zeon", src: "img/party/heroes/ZeonParty.png" },
    { name: "Teach", src: "img/party/heroes/TeachParty.png" },
    { name: "Riku & Manana", src: "img/party/heroes/RikuMananaParty.png" },
    { name: "Gray", src: "img/party/heroes/GrayParty.png" },
    { name: "Isurd", src: "img/party/heroes/IsurdParty.png" },
    { name: "Juniper", src: "img/party/heroes/JuniperParty.png" },
    { name: "Ashera", src: "img/party/heroes/AsheraParty.png" },
    { name: "Alexandria", src: "img/party/heroes/AlexandriaParty.png" },
    { name: "Monica", src: "img/party/heroes/MonicaParty.png" },
    { name: "Fiona", src: "img/party/heroes/FionaParty.png" },
    { name: "Triton", src: "img/party/heroes/TritonParty.png" },
    { name: "Ghondor", src: "img/party/heroes/GhondorParty.png" },
    { name: "Miyabi", src: "img/party/heroes/MiyabiParty.png" },
    { name: "Cammuravi", src: "img/party/heroes/CammuraviParty.png" },
    { name: "Segiri", src: "img/party/heroes/SegiriParty.png" },
    { name: "Nia", src: "img/party/heroes/NiaParty.png" },
    { name: "Melia", src: "img/party/heroes/MeliaParty.png" },
    { name: "Ino", src: "img/party/heroes/InoParty.png" },
    { name: "Masha", src: "img/party/heroes/MashaParty.png" },
    { name: "Shulk", src: "img/party/heroes/ShulkParty.png" },
    { name: "Rex", src: "img/party/heroes/RexParty.png" }
];

let menuList= classIcons;
populateMenu();
let characterType = document.getElementById("buttonNoah").getAttribute("data-character-type");

// This function swaps between the Class and Hero select menus
function menuSwap(character) {
    characterType = character.getAttribute("data-character-type");

    if (characterType === "party") {
        menuList= classIcons;
    }
    else if (characterType === "hero") {
        menuList= heroIcons;
    }
}

function clearMenu() {
    let parent = document.getElementById("classList");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const portrait = document.getElementById("currentCharacter");
const heroButtonImg = document.getElementById("buttonHeroImg");

function populateMenu() {
    for (let index = 0; index < menuList.length; index++) {
        const div = document.createElement("div");
        div.className = "modal-icon";
        const image = document.createElement("img");
        image.src = menuList[index].src;

        div.appendChild(image);
        const element = document.getElementById("classList");
        element.appendChild(div);
        div.addEventListener("click", () => {
            if (characterType === "party") {
                return;
            }
            else if (characterType === "hero") {
                const portraitImg = heroPortraits[index].src;
                portrait.src = portraitImg;
                const buttonImage = heroButtons[index].src;
                heroButtonImg.src = buttonImage;
                portraitsImages[6].src = portraitImg;
                $('#buttonHero').attr('title', heroButtons[index].name).tooltip('dispose').tooltip();
            }
        })
    }
}

const talentArts = [
    { name: "Overclock Buster", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Gemini Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Healing Ring", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Tidal Wave", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Mad Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Pressure Drop", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Saber Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Deflector Field", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Technical Heal", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Demise Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sword of Valor", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Refreshing Rain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Violent Streak", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Soulfire", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Blossom Dance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Supreme Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Thunder Steel", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Cry of Faith", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Final Countdown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Raging Force", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glittering Melody", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Empyrean Salvo", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Viral Vector", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Divine Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Element Genesis", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Shining Refrain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Pride of Place", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"}
];

const talentArtsNoah = [
    { name: "Infinity Blade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Unlimited Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"}
];

const talentArtsMio = [
    { name: "Dominion Flower", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-aoe-attack.png"}
];

const artsSwordfighter = [
    { name: "Ground Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Air Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Sword Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Edge Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shadow Eye", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const arts = document.getElementsByClassName("artSlot");
const artNames = document.getElementsByClassName("info-text-arts");
const talentArt = document.getElementById("talentArtIcon");

let artList = artsSwordfighter;
let classArt = 0;

for (let index = 0; index < arts.length; index++) {
    arts[index].addEventListener("click", () => {
        classArt = index;
        artsMenu();
     })
}

talentArt.addEventListener("click", () => {
    classArt = 6;
    artsMenu();
 })

function artsMenu() {
    clearMenu();
    populateMenuArts();
    classMenu.style.display = "block";
}

function populateMenuArts() {
    let artName = artNames[classArt];
    const artKeys = Object.keys(noahConfig.arts);
    const key = artKeys[classArt];
    if (classArt < 6) {
        artList = artsSwordfighter;
        parent = arts[classArt];
    }
    else if (classArt === 6) {
        artList = talentArts;
        parent = talentArt;
    }
    for (let index = 0; index < artList.length; index++) {
        const modalIcon = document.createElement("div");
        modalIcon.className = "modal-icon";
        const artSlot = document.createElement("div");
        artSlot.className = "artSlotModal";
        $(artSlot).attr('title', artList[index].name).tooltip('dispose').tooltip();

        let artImage = new Array(4);

        for (let indexA = 0; indexA < 4; indexA++) {
            artImage[indexA] = document.createElement("img");
            artImage[indexA].className = "art-features";
        }
        artImage[0].src = artList[index].recharge;
        artImage[1].src = artList[index].type;
        artImage[2].src = artList[index].reaction;
        artImage[3].src = artList[index].aoe;

        modalIcon.appendChild(artSlot);

        for (let indexA = 0; indexA < 4; indexA++) {
            artSlot.appendChild(artImage[indexA]);
        }
        const element = document.getElementById("classList");
        element.appendChild(modalIcon);

        modalIcon.addEventListener("click", () => {
            artName.textContent = artList[index].name;
            const value = artList[index].name;
            modifyCharacter(key, value);
            
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
            for (let indexA = 0; indexA < 4; indexA++) {
                parent.appendChild(artImage[indexA].cloneNode(true));
            }
            classMenu.style.display = "none";
        })
    }
}

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
window.onload = function setConfig() {
    if (!localStorage.getItem("noahConfig")) {
        localStorage.setItem("noahConfig", JSON.stringify(noahConfig));
    }
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_class_1);
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_class_2);
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_class_3);
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_master_1);
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_master_2);
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_master_3);
    console.log(JSON.parse(localStorage.getItem("noahConfig")).art_talent);
}

function getConfig() {
    return JSON.parse(localStorage.getItem("noahConfig"));
}

function updateObject(event) {
    const{key, value} = event.detail;
    let obj = getConfig();
    obj[key] = value;
    localStorage.setItem("noahConfig", JSON.stringify(obj));
}

function modifyCharacter(key, value) {
    const updateCharacter = new CustomEvent("updateCharacter", {
        detail: {key, value}
    });
    document.dispatchEvent(updateCharacter);
}

document.addEventListener("updateCharacter", updateObject);