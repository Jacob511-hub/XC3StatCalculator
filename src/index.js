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

var classMenu = document.getElementById("classModal");
var classButton = document.getElementById("classButton");
var classSpan = document.getElementById("class-close");

classButton.onclick = function() {
    classMenu.style.display = "block";
}

classSpan.onclick = function() {
    classMenu.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === classMenu) {
        classMenu.style.display = "none";
    }
    else if (event.target === artMenu) {
        artMenu.style.display = "none";
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
];

let list = classIcons;
populateMenu();
let characterType = document.getElementById("buttonNoah").getAttribute("data-character-type");

// This function swaps between the Class and Hero select menus
function menuSwap(character) {
    characterType = character.getAttribute("data-character-type");

    if (characterType === "party") {
        clearMenu()
        list = classIcons;
        populateMenu();
    }
    else if (characterType === "hero") {
        clearMenu()
        list = heroIcons;
        populateMenu();
    }
}

function clearMenu() {
    for (let index = 0; index < list.length; index++) {
        let parent = document.getElementById("classList");
        parent.removeChild(parent.firstChild);
    }
}

const portrait = document.getElementById("currentCharacter");
const heroButton = document.getElementById("buttonHero");

function populateMenu() {
    for (let index = 0; index < list.length; index++) {
        const div = document.createElement("div");
        div.className = "modal-icon";
        const image = document.createElement("img");
        image.src = list[index].src;

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
                heroButton.src = buttonImage;
                portraitsImages[6].src = portraitImg;
            }
        })
    }
}

var artMenu = document.getElementById("art-agnus-modal");
var artAgnusSpan = document.getElementById("art-agnus-close");
var artKevesSpan = document.getElementById("art-keves-close");

function openArtMenu(art) {
    let artType = art.getAttribute("data-art-type");

    if (artType === "agnus") {
        artMenu = document.getElementById("art-agnus-modal");
        artMenu.style.display = "block";
    }
    else if (artType === "keves") {
        artMenu = document.getElementById("art-keves-modal");
        artMenu.style.display = "block";
    }
}

artAgnusSpan.onclick = function() {
    artMenu.style.display = "none";
}

artKevesSpan.onclick = function() {
    artMenu.style.display = "none";
}