let currentCharacter = "noahConfig";
let classArts;
let masterArts;
let currentSkills;

document.addEventListener("DOMContentLoaded", () => {
    const portrait = document.getElementById("currentCharacter");
    const buttons = document.getElementsByClassName("icon");

    let characterConfigs = {
        "noahConfig": noahConfig,
        "mioConfig": mioConfig,
        "eunieConfig": eunieConfig,
        "taionConfig": taionConfig,
        "lanzConfig": lanzConfig,
        "senaConfig": senaConfig,
    };

    for (const key in characterConfigs) {
        if (characterConfigs.hasOwnProperty(key) && !localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(characterConfigs[key]));
        }
    }
    classArts = getArtsByClass(localStorage.getItem(currentCharacter));
    masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
    characterLoad(localStorage.getItem(currentCharacter));

    for (let index = 0; index < buttons.length; index++) {
        if (index >= portraitsImages.length){
           return;
        }
        buttons[index].addEventListener("click", () => {
           const portraitImg = portraitsImages[index].src
           portrait.src = portraitImg;
           const characters = Object.keys(characterConfigs);
           currentCharacter = characters[index];
           classArts = getArtsByClass(localStorage.getItem(currentCharacter));
           masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
           getSkillsByClass(localStorage.getItem(currentCharacter));
           characterLoad(localStorage.getItem(currentCharacter));
        })
    }
});

function getArtsByClass(characterStored) {
    const artsMap = {
        "Swordfighter": artsSwordfighter,
        "Zephyr": artsZephyr,
        "Medic Gunner": artsMedicGunner,
        "Tactician": artsTactician,
        "Heavy Guard": artsHeavyGuard,
        "Ogre": artsOgre,
        "Flash Fencer": artsFlashFencer,
        "War Medic": artsWarMedic,
        "Guardian Commander": artsGuardianCommander,
        "Thaumaturge": artsThaumaturge,
    };
    
    return artsMap[JSON.parse(characterStored).class];
}

function getMasterArtsByClass(characterStored) {
    const artsMap = {
        "Swordfighter": artsMasterAgnus,
        "Zephyr": artsMasterKeves,
        "Medic Gunner": artsMasterAgnus,
        "Tactician": artsMasterKeves,
        "Heavy Guard": artsMasterAgnus,
        "Ogre": artsMasterKeves,
        "Flash Fencer": artsMasterAgnus,
        "War Medic": artsMasterAgnus,
        "Guardian Commander": artsMasterAgnus,
        "Thaumaturge": artsMasterKeves,
    };
    
    return artsMap[JSON.parse(characterStored).class];
}

function getSkillsByClass(characterStored) {
    const skillsMap = {
        "Swordfighter": skillsSwordfighter,
        "Zephyr": skillsZephyr,
        "Medic Gunner": skillsMedicGunner,
        "Tactician": skillsTactician,
        "Heavy Guard": skillsHeavyGuard,
        "Ogre": skillsOgre,
        "Flash Fencer": skillsFlashFencer,
        "War Medic": skillsWarMedic,
        "Guardian Commander": skillsGuardianCommander,
        "Thaumaturge": skillsThaumaturge,
    };
    
    currentSkills = skillsMap[JSON.parse(characterStored).class];

    for (let index = 0; index < currentSkills.length; index++) {
        let slot = skills[index];
        const image = document.createElement("img");
        image.src = currentSkills[index].src;
        slot.removeChild(slot.firstChild);
        slot.appendChild(image);
        $(skills[index]).attr('title', currentSkills[index].name).tooltip('dispose').tooltip();
    };
}

function characterLoad(characterStored) {
    classLoad(JSON.parse(characterStored).class);

    skillLoad(4, JSON.parse(characterStored).skills.skill_1);
    skillLoad(5, JSON.parse(characterStored).skills.skill_2);
    skillLoad(6, JSON.parse(characterStored).skills.skill_3);

    artLoad(0, JSON.parse(characterStored).arts.art_master_1);
    artLoad(1, JSON.parse(characterStored).arts.art_master_2);
    artLoad(2, JSON.parse(characterStored).arts.art_master_3);
    artLoad(3, JSON.parse(characterStored).arts.art_class_1);
    artLoad(4, JSON.parse(characterStored).arts.art_class_2);
    artLoad(5, JSON.parse(characterStored).arts.art_class_3);
    artLoad(6, JSON.parse(characterStored).arts.art_talent);
}

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
                const key = "class";
                const value = menuList[index].name;
                obj = getConfig();
                modifyCharacter(key, value, obj, obj);
                getSkillsByClass(localStorage.getItem(currentCharacter));
                classButton.replaceChild(image, classButton.childNodes[0]);
                let className = document.getElementById("class-name");
                className.textContent = menuList[index].name;
                artChangeClassSwap();
                classMenu.style.display = "none";
            }
            else if (characterType === "hero") {
                const portraitImg = heroIcons[index].portraitSrc;
                portrait.src = portraitImg;
                const buttonImage = heroIcons[index].buttonSrc;
                heroButtonImg.src = buttonImage;
                portraitsImages[6].src = portraitImg;
                $('#buttonHero').attr('title', heroIcons[index].name).tooltip('dispose').tooltip();
                classMenu.style.display = "none";
            }
        })
    }
}

const skills = document.getElementsByClassName("skillSlot");
let skillSlot = 0;

for (let index = 0; index < 3; index++) {
    skills[index + 4].addEventListener("click", () => {
        skillSlot = index;
        skillsMenu();
     })
}

function skillsMenu() {
    clearMenu();
    populateMenuSkills();
    classMenu.style.display = "block";
}

function populateMenuSkills() {
    let parent = skills[skillSlot + 4];
    for (let index = 0; index < skillsMaster.length; index++) {
        let skip = false;
        for (let indexA = 0; indexA < 4; indexA++) {
            if (skillsMaster[index].name === currentSkills[indexA].name) {
                skip = true;
                break;
            }
        }
        if (skip) {
            continue;
        }
        const div = document.createElement("div");
        div.className = "modal-icon";
        const image = document.createElement("img");
        image.src = skillsMaster[index].src;

        div.appendChild(image);
        const element = document.getElementById("classList");
        element.appendChild(div);
        $(div).attr('title', skillsMaster[index].name).tooltip('dispose').tooltip();
        
        div.addEventListener("click", () => {
            $(parent).attr('title', skillsMaster[index].name).tooltip('dispose').tooltip();

            const skillKeys = Object.keys(noahConfig.skills);
            const key = skillKeys[skillSlot];
            const value = skillsMaster[index].name;
            let obj = getConfig();
            modifyCharacter(key, value, obj, obj.skills);
            
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
            parent.appendChild(image.cloneNode(true));
            classMenu.style.display = "none";
            })
    }
}

const arts = document.getElementsByClassName("artSlot");
const artNames = document.getElementsByClassName("info-text-arts");
const talentArt = document.getElementById("talentArtIcon");

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
    if (classArt < 3) {
        artList = masterArts;
    }
    else if (3 <= classArt && classArt < 6) {
        artList = classArts;
    }
    else if (classArt === 6) {
        if (currentCharacter === "noahConfig") {
            artList = talentArtsNoah.concat(talentArts);
        }
        else if (currentCharacter === "mioConfig") {
            artList = talentArtsMio.concat(talentArts);
        }
        else {
            artList = talentArts;
        }
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
            let obj = getConfig();
            const value = artList[index].name;
            const artKeys = Object.keys(obj.arts);
            const key = artKeys[classArt];
            for (let indexA = 0; indexA < artKeys.length; indexA++) {
                if (obj.arts[artKeys[indexA]] === artList[index].name && obj.arts[artKeys[indexA]] != "None") {
                    artLoad(indexA, obj.arts[artKeys[classArt]]);
                    modifyCharacter(artKeys[indexA], obj.arts[artKeys[classArt]], obj, obj.arts);
                }
            }
            artLoad(classArt, artList[index].name);
            modifyCharacter(key, value, obj, obj.arts);
            classMenu.style.display = "none";
        })
    }
}

function skillLoad(slotNumber, loadedSkillName) {
    let slot = skills[slotNumber];
    let loadedSkill;
    let item;

    if (loadedSkillName === null) {
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        const image = document.createElement("img");
        image.src = "img/skills/skill-0.png";
        slot.appendChild(image);
        $(slot).attr('title', "None").tooltip('dispose').tooltip();
        return;
    }
    else {
        item = skillsMaster.findIndex(item => item.name === loadedSkillName);
        loadedSkill = skillsMaster[item];
    }

    while (slot.firstChild) {
        slot.removeChild(slot.firstChild);
    }
    const image = document.createElement("img");
    image.src = loadedSkill.src;
    slot.appendChild(image);
    $(slot).attr('title', loadedSkill.name).tooltip('dispose').tooltip();
}

function artLoad(slotNumber, loadedArtName) {
    let slot = arts[slotNumber];
    let artName = artNames[slotNumber];
    let loadedArt;
    let item;
    let artList;

    if (slotNumber < 3){
        slot = arts[slotNumber];
        artList = masterArts;
    }
    else if (3 <= slotNumber && slotNumber < 6){
        slot = arts[slotNumber];
        artList = classArts;
    }
    else if (slotNumber === 6) {
        slot = talentArt;
        if (currentCharacter === "noahConfig") {
            artList = talentArtsNoah.concat(talentArts);
        }
        else if (currentCharacter === "mioConfig") {
            artList = talentArtsMio.concat(talentArts);
        }
        else {
            artList = talentArts;
        }
    }

    if (loadedArtName === null) {
        artName.textContent = "None";
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        let artImage = document.createElement("img");
        item = artList.findIndex(item => item.name === "None");
        loadedArt = artList[item];
        artImage.src = loadedArt.recharge;
        artImage.className = "art-features";
        slot.appendChild(artImage);
        return;
    }
    else {
        item = artList.findIndex(item => item.name === loadedArtName);
        loadedArt = artList[item];
    }

    while (slot.firstChild) {
        slot.removeChild(slot.firstChild);
    }

    let artImage = new Array(4);

    for (let indexA = 0; indexA < 4; indexA++) {
        artImage[indexA] = document.createElement("img");
        artImage[indexA].className = "art-features";
    }

    artImage[0].src = loadedArt.recharge;
    artImage[1].src = loadedArt.type;
    artImage[2].src = loadedArt.reaction;
    artImage[3].src = loadedArt.aoe;

    for (let indexA = 0; indexA < 4; indexA++) {
        slot.appendChild(artImage[indexA]);
    }
    
    artName.textContent = artList[item].name;
}

function classLoad(currentClass) {
    item = classIcons.findIndex(item => item.name === currentClass);
    const image = document.createElement("img");
    image.src = classIcons[item].src;
    getSkillsByClass(localStorage.getItem(currentCharacter));
    classButton.replaceChild(image, classButton.childNodes[0]);
    let className = document.getElementById("class-name");
    className.textContent = currentClass;
}

// This function is called when the character's Class is changed, updating the list of selectable Arts and wiping set Master Skills
function artChangeClassSwap() {
    classArts = getArtsByClass(localStorage.getItem(currentCharacter));
    masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
    const artKeys = Object.keys(noahConfig.arts);
    const skillKeys = Object.keys(noahConfig.skills);

    for (let index = 0; index < 3; index++) {
        const key = artKeys[index];
        const value = "None";
        let obj = getConfig();
        modifyCharacter(key, value, obj, obj.arts);
    }
    for (let index = 3; index < 6; index++) {
        const key = artKeys[index];
        const value = classArts[index-3].name;
        let obj = getConfig();
        modifyCharacter(key, value, obj, obj.arts);
    }
    for (let index = 0; index < 3; index++) {
        const key = skillKeys[index];
        const value = "None";
        let obj = getConfig();
        modifyCharacter(key, value, obj, obj.skills);
    }
    characterLoad(localStorage.getItem(currentCharacter));
}

function getConfig() {
    return JSON.parse(localStorage.getItem(currentCharacter));
}

function updateObject(event) {
    const{key, value, obj, objNest} = event.detail;
    objNest[key] = value;
    localStorage.setItem((currentCharacter), JSON.stringify(obj));
}

function modifyCharacter(key, value, obj, objNest) {
    const updateCharacter = new CustomEvent("updateCharacter", {
        detail: {key, value, obj, objNest}
    });
    document.dispatchEvent(updateCharacter);
}

document.addEventListener("updateCharacter", updateObject);