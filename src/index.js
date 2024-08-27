let currentCharacter = "noahConfig";
let classStats;
let classArts;
let masterArts;
let currentSkills;
let ratio = new Array(7);
let attribute = new Array(7);
let artClass = new Array(7); 
let stability;
let damagePrint = document.querySelectorAll("h1.damage-text");
let damagePrintBadge = document.querySelectorAll("span.badge-warning");

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
        "heroConfig": heroConfig,
    };

    for (const key in characterConfigs) {
        if (characterConfigs.hasOwnProperty(key) && !localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(characterConfigs[key]));
        }
    }
    getStatsByClass(localStorage.getItem(currentCharacter));
    classArts = getArtsByClass(localStorage.getItem(currentCharacter));
    masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
    let obj = getConfig();
    characterLoad(obj);
    printDamage();

    let currentHero = localStorage.getItem("heroConfig");
    const heroIndex = heroIcons.findIndex(obj => obj.name === JSON.parse(currentHero).class);
    const buttonImage = heroIcons[heroIndex].buttonSrc;
    heroButtonImg.src = buttonImage;
    $('#buttonHero').attr('title', heroIcons[heroIndex].name).tooltip('dispose').tooltip();

    for (let index = 0; index < buttons.length; index++) {
        if (index >= portraitsImages.length){
           return;
        }
        buttons[index].addEventListener("click", () => {
            const portraitImg = portraitsImages[index].src
            portrait.src = portraitImg;
            const characters = Object.keys(characterConfigs);
            currentCharacter = characters[index];
            obj = getConfig();
            getStatsByClass(localStorage.getItem(currentCharacter));
            classArts = getArtsByClass(localStorage.getItem(currentCharacter));
            masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
            getSkillsByClass(localStorage.getItem(currentCharacter));
            characterLoad(obj);
            //printDamage();
            let characterName = document.getElementById("character-name");
            characterName.textContent = portraitsImages[index].name;
            if (currentCharacter === "heroConfig") {
                characterName.textContent = heroIcons[heroIndex].name;
            }
        })
    }

    const tourSteps = [
        {
            target: '#characters',
            title: 'Characters',
            content: `<p>Switch the character you would like to customize here.</p> <img src="img/tour/tour-party.png" alt="Party Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#class',
            title: 'Class',
            content: `<p>Change the character's Class here. Changing the Class affects the Arts and Skills available to the character, as well as their base stats. Heroes can also be changed here.</p> <img src="img/tour/tour-classes.png" alt="Class Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#stats',
            title: 'Stats',
            content: `<p>The current character's stats are displayed here.</p> <img src="img/tour/tour-stats.png" alt="Stats Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#arts',
            title: 'Arts',
            content: `<p>The character's current Arts can be changed here. Different Arts have different Power Multipliers and secondary effects that may increase damage.</p> <img src="img/tour/tour-arts.png" alt="Arts Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#skills',
            title: 'Skills',
            content: `<p>The Skills of the character's current Class are visible here, as well has the ability to change their Master Skills, which may increase their stats or damage dealt.</p> <img src="img/tour/tour-skills.png" alt="Skills Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#gems',
            title: 'Gems',
            content: `<p>Gems can be equipped to the character here to increase their stats or damage dealt.</p> <img src="img/tour/tour-gems.png" alt="Gems Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#accessories',
            title: 'Accessories',
            content: `<p>Accessories can be equipped to the character here to increase their stats or damage dealt.</p> <img src="img/tour/tour-accessories.png" alt="Accessories Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#statuses',
            title: 'Statuses',
            content: `<p>Buffs, debuffs, and other effects that may affect damage dealt are controllable here.</p> <img src="img/tour/tour-statuses.png" alt="Statuses Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
        {
            target: '#damageNumbers',
            title: 'Damage',
            content: `<p>The damage dealt by the character's currently set Arts under the conditions set by the user are caclulated and displayed here.</p> <img src="img/tour/tour-damage.png" alt="Damage Tour Image" style="max-width:100%; border-radius: 15px;">`,
        },
    ];

    const tg = new tourguide.TourGuideClient({
        steps: tourSteps,
        showPrevButton: true,
    });

    let tourButton = document.getElementById("startTour");

    tourButton.addEventListener("click", () => {
        tg.start();
    })
});

const statsMap = {
    "Swordfighter": statsSwordfighter,
    "Zephyr": statsZephyr,
    "Medic Gunner": statsMedicGunner,
    "Tactician": statsTactician,
    "Heavy Guard": statsHeavyGuard,
    "Ogre": statsOgre,
    "Flash Fencer": statsFlashFencer,
    "War Medic": statsWarMedic,
    "Guardian Commander": statsGuardianCommander,
    "Thaumaturge": statsThaumaturge,
    "Yumsmith": statsYumsmith,
    "Full Metal Jaguar": statsFullMetalJaguar,
    "Strategos": statsStrategos,
    "Stalker": statsStalker,
    "Lone Exile": statsLoneExile,
    "Incursor": statsIncursor,
    "Lost Vanguard": statsLostVanguard,
    "Signifer": statsSignifer,
    "Soulhacker (Power)": statsSoulhackerPower,
    "Soulhacker (Strike)": statsSoulhackerStrike,
    "Soulhacker (Tough)": statsSoulhackerTough,
    "Soulhacker (Dodge)": statsSoulhackerDodge,
    "Soulhacker (Heal)": statsSoulhackerHeal,
    "Soulhacker (Balanced)": statsSoulhackerBalanced,
    "Martial Artist": statsMartialArtist,
    "Troubadour": statsTroubadour,
    "Seraph": statsSeraph,
    "Machine Assassin": statsMachineAssassin,
    "Lifesage": statsLifesage,
    "Royal Summoner": statsRoyalSummoner,
    "Noponic Champion": statsNoponicChampion,
    "Lapidarist": statsLapidarist,

    "Lucky Seven (Attacker)": statsLuckySevenAttacker,
    "Lucky Seven (Defender)": statsLuckySevenDefender,
    "Lucky Seven (Healer)": statsLuckySevenHealer,

    "Ethel": statsFlashFencer,
    "Valdi": statsWarMedic,
    "Zeon": statsGuardianCommander,
    "Teach": statsThaumaturge,
    "Riku & Manana": statsYumsmith,
    "Gray": statsFullMetalJaguar,
    "Isurd": statsStrategos,
    "Juniper": statsStalker,
    "Ashera": statsLoneExile,
    "Alexandria": statsIncursor,
    "Monica": statsLostVanguard,
    "Fiona": statsSignifer,
    "Triton": statsSoulhackerPower,
    "Ghondor": statsMartialArtist,
    "Miyabi": statsTroubadour,
    "Cammuravi": statsSeraph,
    "Segiri": statsMachineAssassin,
    "Nia": statsLifesage,
    "Melia": statsRoyalSummoner,
    "Ino": statsNoponicChampion,
    "Masha": statsLapidarist,
    "Shulk": statsGrandMarshal,
    "Rex": statsMasterDriver
};

function getStatsByClass(characterStored) {
    classStats = statsMap[JSON.parse(characterStored).class];
}

const currentStats = document.getElementsByClassName("stats-text");

const weaponsMap = {
    "Swordfighter": "Veiled+Sword",
    "Zephyr": "Dual+Moonblades",
    "Medic Gunner": "Gunrod",
    "Tactician": "Spell+Tags:+Mondo",
    "Heavy Guard": "Shieldblade",
    "Ogre": "Comet Mallet",
    "Flash Fencer": "Dual+Rapiers",
    "War Medic": "Relief+Rifle",
    "Guardian Commander": "Gutsy+Gladius",
    "Thaumaturge": "Martial+Linkstaff",
    "Yumsmith": "Variable+Arms",
    "Full Metal Jaguar": "Gun+Drones",
    "Strategos": "Disc+Launcher",
    "Stalker": "Luminescent+Bow",
    "Lone Exile": "Twinsaber",
    "Incursor": "Exponential+Edge",
    "Lost Vanguard": "Defense+Mace",
    "Signifer": "War+Standard",
    "Soulhacker (Power)": "Mimic+Knuckles",
    "Soulhacker (Strike)": "Mimic+Knuckles",
    "Soulhacker (Tough)": "Mimic+Knuckles",
    "Soulhacker (Dodge)": "Mimic+Knuckles",
    "Soulhacker (Heal)": "Mimic+Knuckles",
    "Soulhacker (Balanced)": "Mimic+Knuckles",
    "Martial Artist": "Turbo+Cestus",
    "Troubadour": "Silken+Ivy",
    "Seraph": "Heatshimmer+Spear",
    "Machine Assassin": "Doom+Axes",
    "Lifesage": "Anima+Sword",
    "Royal Summoner": "Elemental+Staff",
    "Noponic Champion": "Inosabers",
    "Lapidarist": "Dazzling+Rings",

    "Lucky Seven (Attacker)": "Lucky+Seven",
    "Lucky Seven (Defender)": "Lucky+Seven",
    "Lucky Seven (Healer)": "Lucky+Seven",

    "Ethel": "Dual+Rapiers",
    "Valdi": "Relief+Rifle",
    "Zeon": "Gutsy+Gladius",
    "Teach": "Martial+Linkstaff",
    "Riku & Manana": "Variable+Arms",
    "Gray": "Gun+Drones",
    "Isurd": "Disc+Launcher",
    "Juniper": "Luminescent+Bow",
    "Ashera": "Twinsaber",
    "Alexandria": "Exponential+Edge",
    "Monica": "Defense+Mace",
    "Fiona": "War+Standard",
    "Triton": "Mimic+Knuckles",
    "Ghondor": "Turbo+Cestus",
    "Miyabi": "Silken+Ivy",
    "Cammuravi": "Heatshimmer+Spear",
    "Segiri": "Doom+Axes",
    "Nia": "Anima+Sword",
    "Melia": "Elemental+Staff",
    "Ino": "Inosabers",
    "Masha": "Dazzling+Rings",
    "Shulk": "Monado+REX%2B",
    "Rex": "Firelight+Swords"
};

async function calculateStats(characterStored) {
    getStatsAdditives();
    getStatsMultipliers();

    let playerLevel = Number(document.getElementById('player-level').value);
    modifyCharacter("level", playerLevel, characterStored, characterStored);
    let interpolation = (playerLevel - 1)/98;
    
    let statsLevel1 = [];
    let statsLevel99 = [];
    let stats = ["hp1", "attack1", "healing_power1", "dexterity1", "agility1", "hp99", "attack99", "healing_power99", "dexterity99", "agility99"];

    for (let index = 0; index < 5; index++) {
        if (currentCharacter !== "heroConfig") {
            item = portraitsImages.findIndex(item => item.name === characterStored.name);
            statsLevel1[index] = portraitsImages[item][stats[index]];
            statsLevel99[index] = portraitsImages[item][stats[index + 5]];
        }
        else if (currentCharacter === "heroConfig") {
            item = heroIcons.findIndex(item => item.name === characterStored.class);
            statsLevel1[index] = heroIcons[item][stats[index]];
            statsLevel99[index] = heroIcons[item][stats[index + 5]];
        }

        let interpolatedValue = parseInt((1 - interpolation) * statsLevel1[index]) + parseInt((interpolation) * statsLevel99[index]);
        const statKeys = Object.keys(noahConfig.stats);
        const key = statKeys[index];
        modifyCharacter(key, interpolatedValue, characterStored, characterStored.stats);
    }

    await getWeaponStats(weaponsMap[characterStored.class], playerLevel);
    let weaponAttack;
    let weaponCrit;
    let weaponBlock;
    
    if (flags["weaponUpgrade"] === false) {
        weaponAttack = damageBase;
        weaponCrit = critRateBase;
        weaponBlock = blockRateBase
    }
    else if (flags["weaponUpgrade"] === true) {
        weaponAttack = damageUpgraded;
        weaponCrit = critRateUpgraded;
        weaponBlock = blockRateUpgraded;
    }

    let hp = Math.floor(Math.floor(characterStored.stats.hp * classStats["class_stats"]["hp"]) * (1 + (hpMultipliersSum / 100)) + hpAdditivesSum);
    let attack = Math.floor(Math.floor(characterStored.stats.attack * classStats["class_stats"]["attack"] + weaponAttack) * (1 + (attackMultipliersSum / 100)) + attackAdditivesSum);
    let healingPower = Math.floor(Math.floor(characterStored.stats.healing_power * classStats["class_stats"]["healing_power"]) * (1 + (healingMultipliersSum / 100)) + healingAdditivesSum);
    let dexterity = Math.floor(Math.floor(characterStored.stats.dexterity * classStats["class_stats"]["dexterity"]) * (1 + (dexterityMultipliersSum / 100)) + dexterityAdditivesSum);
    let agility = Math.floor(Math.floor(characterStored.stats.agility * classStats["class_stats"]["agility"]) * (1 + (agilityMultipliersSum / 100)) + agilityAdditivesSum);
    let critical = Math.floor(weaponCrit * (1 + (critMultipliersSum / 100))) + critAdditivesSum + "%";
    let block = Math.floor(weaponBlock * (1 + (blockMultipliersSum / 100))) + blockAdditivesSum + "%";
    let defensePhysical = Math.floor(classStats["class_stats"]["physical_defense"] * (1 + (physicalMultipliersSum / 100))) + physicalAdditivesSum + "%";
    let defenseEther = Math.floor(classStats["class_stats"]["ether_defense"] * (1 + (etherMultipliersSum / 100))) + etherAdditivesSum + "%";

    let newStats = [hp, attack, healingPower, dexterity, agility, critical, block, defensePhysical, defenseEther];

    for(index = 0; index < newStats.length; index++) {
        currentStats[index].textContent = newStats[index];
    }
}

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
        "Yumsmith": artsYumsmith,
        "Full Metal Jaguar": artsFullMetalJaguar,
        "Strategos": artsStrategos,
        "Stalker": artsStalker,
        "Lone Exile": artsLoneExile,
        "Incursor": artsIncursor,
        "Lost Vanguard": artsLostVanguard,
        "Signifer": artsSignifer,
        "Soulhacker (Power)": artsSoulhackerA,
        "Soulhacker (Strike)": artsSoulhackerA,
        "Soulhacker (Tough)": artsSoulhackerA,
        "Soulhacker (Dodge)": artsSoulhackerA,
        "Soulhacker (Heal)": artsSoulhackerA,
        "Soulhacker (Balanced)": artsSoulhackerA,
        "Martial Artist": artsMartialArtist,
        "Troubadour": artsTroubadour,
        "Seraph": artsSeraph,
        "Machine Assassin": artsMachineAssassin,
        "Lifesage": artsLifesage,
        "Royal Summoner": artsRoyalSummoner,
        "Noponic Champion": artsNoponicChampion,
        "Lapidarist": artsLapidarist,

        "Lucky Seven (Attacker)": artsLuckySevenAttacker,
        "Lucky Seven (Defender)": artsLuckySevenDefender,
        "Lucky Seven (Healer)": artsLuckySevenHealer,

        "Ethel": artsEthel,
        "Valdi": artsValdi,
        "Zeon": artsZeon,
        "Teach": artsTeach,
        "Riku & Manana": artsRikuManana,
        "Gray": artsGray,
        "Isurd": artsIsurd,
        "Juniper": artsJuniper,
        "Ashera": artsAshera,
        "Alexandria": artsAlexandria,
        "Monica": artsMonica,
        "Fiona": artsFiona,
        "Triton": artsTriton,
        "Ghondor": artsGhondor,
        "Miyabi": artsMiyabi,
        "Cammuravi": artsCammuravi,
        "Segiri": artsSegiri,
        "Nia": artsNia,
        "Melia": artsMelia,
        "Ino": artsIno,
        "Masha": artsMasha,
        "Shulk": artsShulk,
        "Rex": artsRex
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
        "Yumsmith": artsMasterAgnus,
        "Full Metal Jaguar": artsMasterAgnus,
        "Strategos": artsMasterKeves,
        "Stalker": artsMasterKeves,
        "Lone Exile": artsMasterAgnus,
        "Incursor": artsMasterKeves,
        "Lost Vanguard": artsMasterKeves,
        "Signifer": artsMasterKeves,
        "Soulhacker (Power)": artsSoulhackerB,
        "Soulhacker (Strike)": artsSoulhackerB,
        "Soulhacker (Tough)": artsSoulhackerB,
        "Soulhacker (Dodge)": artsSoulhackerB,
        "Soulhacker (Heal)": artsSoulhackerB,
        "Soulhacker (Balanced)": artsSoulhackerB,
        "Martial Artist": artsMasterKeves,
        "Troubadour": artsMasterKeves,
        "Seraph": artsMasterKeves,
        "Machine Assassin": artsMasterAgnus,
        "Lifesage": artsMasterKeves,
        "Royal Summoner": artsMasterAgnus,
        "Noponic Champion": artsMasterKeves,
        "Lapidarist": artsMasterAgnus,

        "Lucky Seven (Attacker)": artsLuckySevenAttacker,
        "Lucky Seven (Defender)": artsLuckySevenDefender,
        "Lucky Seven (Healer)": artsLuckySevenHealer,

        "Ethel": artsMasterAgnus,
        "Valdi": artsMasterAgnus,
        "Zeon": artsMasterAgnus,
        "Teach": artsMasterKeves,
        "Riku & Manana": artsMasterAgnus,
        "Gray": artsMasterAgnus,
        "Isurd": artsMasterKeves,
        "Juniper": artsMasterKeves,
        "Ashera": artsMasterAgnus,
        "Alexandria": artsMasterKeves,
        "Monica": artsMasterKeves,
        "Fiona": artsMasterKeves,
        "Triton": artsMasterAgnus,
        "Ghondor": artsMasterKeves,
        "Miyabi": artsMasterKeves,
        "Cammuravi": artsMasterKeves,
        "Segiri": artsMasterAgnus,
        "Nia": artsMasterKeves,
        "Melia": artsMasterAgnus,
        "Ino": artsMasterKeves,
        "Masha": artsMasterAgnus,
        "Shulk": artsMasterAgnus,
        "Rex": artsMasterKeves
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
        "Yumsmith": skillsYumsmith,
        "Full Metal Jaguar": skillsFullMetalJaguar,
        "Strategos": skillsStrategos,
        "Stalker": skillsStalker,
        "Lone Exile": skillsLoneExile,
        "Incursor": skillsIncursor,
        "Lost Vanguard": skillsLostVanguard,
        "Signifer": skillsSignifer,
        "Soulhacker (Power)": skillsSoulhackerClass,
        "Soulhacker (Strike)": skillsSoulhackerClass,
        "Soulhacker (Tough)": skillsSoulhackerClass,
        "Soulhacker (Dodge)": skillsSoulhackerClass,
        "Soulhacker (Heal)": skillsSoulhackerClass,
        "Soulhacker (Balanced)": skillsSoulhackerClass,
        "Martial Artist": skillsMartialArtist,
        "Troubadour": skillsTroubadour,
        "Seraph": skillsSeraph,
        "Machine Assassin": skillsMachineAssassin,
        "Lifesage": skillsLifesage,
        "Royal Summoner": skillsRoyalSummoner,
        "Noponic Champion": skillsNoponicChampion,
        "Lapidarist": skillsLapidarist,

        "Lucky Seven (Attacker)": skillsLuckySevenAttacker,
        "Lucky Seven (Defender)": skillsLuckySevenDefender,
        "Lucky Seven (Healer)": skillsLuckySevenHealer,

        "Ethel": skillsFlashFencer,
        "Valdi": skillsWarMedic,
        "Zeon": skillsGuardianCommander,
        "Teach": skillsThaumaturge,
        "Riku & Manana": skillsYumsmith,
        "Gray": skillsGray,
        "Isurd": skillsStrategos,
        "Juniper": skillsStalker,
        "Ashera": skillsLoneExile,
        "Alexandria": skillsIncursor,
        "Monica": skillsLostVanguard,
        "Fiona": skillsFiona,
        "Triton": skillsTriton,
        "Ghondor": skillsMartialArtist,
        "Miyabi": skillsTroubadour,
        "Cammuravi": skillsSeraph,
        "Segiri": skillsMachineAssassin,
        "Nia": skillsLifesage,
        "Melia": skillsRoyalSummoner,
        "Ino": skillsNoponicChampion,
        "Masha": skillsLapidarist,
        "Shulk": skillsGrandMarshal,
        "Rex": skillsMasterDriver
    };
    
    currentSkills = skillsMap[JSON.parse(characterStored).class];

    for (let index = 0; index < 4; index++) {
        let slot = skills[index];
        const image = document.createElement("img");
        image.src = currentSkills[index].src;
        slot.removeChild(slot.firstChild);
        slot.appendChild(image);
        let tooltipContent;
        if (typeof currentSkills[index].description === 'function') {
            variableAmountSkill = currentSkills[index].boostAmount;
            tooltipContent = `${currentSkills[index].name}<br>${currentSkills[index].description()}`;
        }
        else {
            tooltipContent = `${currentSkills[index].name}`;
        }
        $(skills[index]).attr('title', tooltipContent).tooltip('dispose').tooltip({html: true});

        if (currentSkills === skillsSoulhackerClass) {
            if (index > 1) {
                image.classList.add("faded-icon");
            }
        }
        skills[1].addEventListener("click", function() {
            if (currentSkills === skillsSoulhackerClass) {
                menuList = SoulhackerRoles;
                parent = document.getElementById("classList");
                clearMenu();
                populateMenu();
                classMenu = document.getElementById("classModal");
                classMenu.style.display = "block";
            }
        })
    };
}

function getClassRole(characterStored) {
    const roleMap = {
        "Swordfighter": "Attacker",
        "Zephyr": "Defender",
        "Medic Gunner": "Healer",
        "Tactician": "Healer",
        "Heavy Guard": "Defender",
        "Ogre": "Attacker",
        "Flash Fencer": "Attacker",
        "War Medic": "Healer",
        "Guardian Commander": "Defender",
        "Thaumaturge": "Healer",
        "Yumsmith": "Attacker",
        "Full Metal Jaguar": "Attacker",
        "Strategos": "Healer",
        "Stalker": "Attacker",
        "Lone Exile": "Defender",
        "Incursor": "Attacker",
        "Lost Vanguard": "Defender",
        "Signifer": "Healer",
        "Soulhacker (Power)": "Attacker",
        "Soulhacker (Strike)": "Attacker",
        "Soulhacker (Tough)": "Defender",
        "Soulhacker (Dodge)": "Defender",
        "Soulhacker (Heal)": "Healer",
        "Soulhacker (Balanced)": "Healer",
        "Martial Artist": "Attacker",
        "Troubadour": "Healer",
        "Seraph": "Attacker",
        "Machine Assassin": "Attacker",
        "Lifesage": "Healer",
        "Royal Summoner": "Attacker",
        "Noponic Champion": "Defender",
        "Lapidarist": "Healer",

        "Lucky Seven (Attacker)": "Attacker",
        "Lucky Seven (Defender)": "Defender",
        "Lucky Seven (Healer)": "Healer",

        "Ethel": "Attacker",
        "Valdi": "Attacker",
        "Zeon": "Defender",
        "Teach": "Healer",
        "Riku & Manana": "Attacker",
        "Gray": "Attacker",
        "Isurd": "Healer",
        "Juniper": "Attacker",
        "Ashera": "Defender",
        "Alexandria": "Attacker",
        "Monica": "Defender",
        "Fiona": "Healer",
        "Triton": "Attacker",
        "Ghondor": "Attacker",
        "Miyabi": "Healer",
        "Cammuravi": "Attacker",
        "Segiri": "Attacker",
        "Nia": "Healer",
        "Melia": "Attacker",
        "Ino": "Defender",
        "Masha": "Healer",
        "Shulk": "Defender",
        "Rex": "Attacker"
    };

    return roleMap[JSON.parse(characterStored).class];
};

function characterLoad(characterStored) {
    classLoad(characterStored.class);

    skillLoad(4, characterStored.skills.skill_1);
    skillLoad(5, characterStored.skills.skill_2);
    skillLoad(6, characterStored.skills.skill_3);

    artLoad(0, characterStored.arts.art_master_1);
    artLoad(1, characterStored.arts.art_master_2);
    artLoad(2, characterStored.arts.art_master_3);
    artLoad(3, characterStored.arts.art_class_1);
    artLoad(4, characterStored.arts.art_class_2);
    artLoad(5, characterStored.arts.art_class_3);
    artLoad(6, characterStored.arts.art_talent);

    gemLoad(0, characterStored.gems.gem_1, characterStored.ranks.gem_1);
    gemLoad(1, characterStored.gems.gem_2, characterStored.ranks.gem_2);
    gemLoad(2, characterStored.gems.gem_3, characterStored.ranks.gem_3);

    accessoryLoad(0, characterStored.accessories.accessory_1, characterStored.rarities.accessory_1);
    accessoryLoad(1, characterStored.accessories.accessory_2, characterStored.rarities.accessory_2);
    accessoryLoad(2, characterStored.accessories.accessory_3, characterStored.rarities.accessory_3);

    recalculate();
}

function recalculate() {
    let obj = getConfig();
    calculateStats(obj);
    getDamageMultipliers();
}

const calcButton = document.getElementById("calc-button");
calcButton.onclick = printDamage;

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

const buffIcons = document.getElementsByClassName("buffIcon");

for (let index = 0; index < buffIcons.length; index++) {
    if (buffIcons[index].classList.length === 1) {
        buffIcons[index].addEventListener("click", function() {
            const image = buffIcons[index].querySelector('img');
            image.classList.toggle('brighten');
            setFlag(buffIcons[index].id)
        })
    }
}

const reactionIcons = document.getElementsByClassName("reactionIcon");
const typeIcons = document.getElementsByClassName("typeIcon");
const positionIcons = document.getElementsByClassName("positionIcon");

function singleToggle(icons) {
    for (let index = 0; index < icons.length; index++) {
        icons[index].addEventListener("click", function() {
            const image = icons[index].querySelector('img');
            image.classList.toggle('brighten');
            setFlag(icons[index].id)
            
            for (let index2 = 0; index2 < icons.length; index2++) {
                const image2 = icons[index2].querySelector('img');
                if (image2 === image) {
                    continue;
                }
                else if (image2 !== image && flags[icons[index2].id]) {
                    image2.classList.remove('brighten');
                    setFlag(icons[index2].id)
                }
            }
        })
    }
}

singleToggle(reactionIcons);
singleToggle(typeIcons);
singleToggle(positionIcons);

let classMenu = document.getElementById("classModal");
let classButton = document.getElementById("classButton");
const classSpan = document.getElementsByClassName("close");
let parent = document.getElementById("classList");

classButton.onclick = function() {
    parent = document.getElementById("classList");
    menuSwap();
    clearMenu();
    populateMenu();
    classMenu = document.getElementById("classModal");
    classMenu.style.display = "block";
}

for (let index = 0; index < classSpan.length; index++) {
    classSpan[index].addEventListener("click", function() {
        classMenu.style.display = "none";
    })
}

window.onclick = function(event) {
    if (event.target === classMenu) {
        classMenu.style.display = "none";
    }
}

let menuList= classIcons;
let characterType = document.getElementById("buttonNoah").getAttribute("data-character-type");

// This function swaps between the Class and Hero select menus
function menuSwap() {
    if (currentCharacter === "heroConfig") {
        menuList= heroIcons;
    }
    else {
        menuList= classIcons;
    }
}

function clearMenu() {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const portrait = document.getElementById("currentCharacter");
const heroButtonImg = document.getElementById("buttonHeroImg");

function populateMenu() {
    for (let index = 0; index < menuList.length; index++) {
        const container = document.createElement("div");
        container.className = "horizontal-fields";
        container.classList.add("horizontal-fields-modal");
        const textContainer = document.createElement("div");
        textContainer.className = "name-description-container";

        const div = document.createElement("div");
        div.className = "modal-icon";
        const image = document.createElement("img");
        image.src = menuList[index].src;

        const name = document.createElement("h1");
        name.className = "info-text-3";
        name.textContent = menuList[index].name;

        const description = document.createElement("p");
        description.className = "info-text-arts-modal";
        if (typeof menuList[index].description === 'function') {
            description.textContent = menuList[index].description();
        }

        div.appendChild(image);
        container.appendChild(div);
        container.appendChild(textContainer);
        textContainer.appendChild(name);
        textContainer.appendChild(description);
        const element = document.getElementById("classList");
        element.appendChild(container);

        container.addEventListener("click", () => {
            const key = "class";
            const value = menuList[index].name;
            obj = getConfig();
            modifyCharacter(key, value, obj, obj);
            let className = document.getElementById("class-name");
            className.textContent = menuList[index].name;
            classSwap();

            if (characterType === "hero") {
                const portraitImg = heroIcons[index].portraitSrc;
                portrait.src = portraitImg;
                const buttonImage = heroIcons[index].buttonSrc;
                heroButtonImg.src = buttonImage;
                portraitsImages[6].src = portraitImg;
                $('#buttonHero').attr('title', heroIcons[index].name).tooltip('dispose').tooltip();
                let characterName = document.getElementById("character-name");
                characterName.textContent = heroIcons[index].name;
            }
            classMenu.style.display = "none";
        })
    }
}

const skills = document.getElementsByClassName("skillSlot");
let skillSlot = 0;

for (let index = 0; index < 3; index++) {
    skills[index + 4].addEventListener("click", function() {
        let obj = getConfig();
        if (currentCharacter === "heroConfig" || obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
            return;
        }
        skillSlot = index;
        skillsMenu();
    })
}

let skillList = skillsMaster;

function skillsMenu() {
    parent = document.getElementById("classList");
    clearMenu();
    populateMenuSkills();
    classMenu = document.getElementById("classModal");
    classMenu.style.display = "block";
}

function populateMenuSkills() {
    for (let index = 0; index < skillList.length; index++) {
        let skip = false;
        for (let indexA = 0; indexA < 4; indexA++) {
            if (skillList[index].name === currentSkills[indexA].name && currentSkills[indexA].name != "None") {
                skip = true;
                break;
            }
        }
        if (skip) {
            continue;
        }
        const container = document.createElement("div");
        container.className = "horizontal-fields";
        container.classList.add("horizontal-fields-modal");
        const textContainer = document.createElement("div");
        textContainer.className = "name-description-container";

        const div = document.createElement("div");
        div.className = "modal-icon";
        const image = document.createElement("img");
        image.src = skillList[index].src;

        const name = document.createElement("h1");
        name.className = "info-text-3";
        name.textContent = skillList[index].name;

        const description = document.createElement("p");
        description.className = "info-text-arts-modal";
        variableAmountSkill = skillList[index].boostAmount;
        if (typeof skillList[index].description === 'function') {
            description.textContent = skillList[index].description();
        }

        div.appendChild(image);
        container.appendChild(div);
        container.appendChild(textContainer);
        textContainer.appendChild(name);
        textContainer.appendChild(description);
        const element = document.getElementById("classList");
        element.appendChild(container);
        
        container.addEventListener("click", () => {
            const skillKeys = Object.keys(noahConfig.skills);
            const key = skillKeys[skillSlot];
            const value = skillList[index].name;
            let obj = getConfig();

            for (let indexA = 0; indexA < skillKeys.length; indexA++) {
                if (obj.skills[skillKeys[indexA]] === skillList[index].name && obj.skills[skillKeys[indexA]] != "None") {
                    modifyCharacter(skillKeys[indexA], obj.skills[skillKeys[skillSlot]], obj, obj.skills);
                }
            }

            modifyCharacter(key, value, obj, obj.skills);
            characterLoad(obj);
            classMenu.style.display = "none";
            })
    }
}

const arts = document.getElementsByClassName("artSlot");
const artNames = document.getElementsByClassName("info-text-arts");
const talentArt = document.getElementById("talentArtIcon");

let classArt = 0;

for (let index = 0; index < arts.length; index++) {
    arts[index].addEventListener("click", function() {
        let obj = getConfig();
        if (obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
            return;
        }
        classArt = index;
        artsMenu();
     })
}

talentArt.addEventListener("click", () => {
    let obj = getConfig();
    if (currentCharacter === "heroConfig" || (SoulhackerRoles.some(item => item.name === obj.class) && currentCharacter != "noahConfig" && currentCharacter != "mioConfig") || obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
        return;
    }
    classArt = 6;
    artsMenu();
 })

function artsMenu() {
    let obj = getConfig();
    if (classArt < 3) {
        if (currentCharacter === "heroConfig" || obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
            return;
        }
    }
    parent = document.getElementById("classList");
    clearMenu();
    populateMenuArts();
    classMenu = document.getElementById("classModal");
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
            let obj = getConfig();
            if (SoulhackerRoles.some(item => item.name === obj.class)) {
                artList = talentArtsNoah.concat(talentArts[18]);
            }
            else {
                artList = talentArtsNoah.concat(talentArts);
            }
        }
        else if (currentCharacter === "mioConfig") {
            let obj = getConfig();
            if (SoulhackerRoles.some(item => item.name === obj.class)) {
                artList = talentArtsMio.concat(talentArts[18]);
            }
            else {
                artList = talentArtsMio.concat(talentArts);
            }
        }
        else {
            artList = talentArts;
        }
    }
    for (let index = 0; index < artList.length; index++) {
        if (currentCharacter === "heroConfig" && index === 5) {
            continue;
        }
        const container = document.createElement("div");
        container.className = "horizontal-fields";
        container.classList.add("horizontal-fields-modal");
        const textContainer = document.createElement("div");
        textContainer.className = "name-description-container";

        const modalIcon = document.createElement("div");
        modalIcon.className = "modal-icon";
        const artSlot = document.createElement("div");
        artSlot.className = "artSlotModal";

        const name = document.createElement("h1");
        name.className = "info-text-arts-modal";
        name.textContent = artList[index].name;

        const ratio = document.createElement("p");
        ratio.className = "info-text-arts-modal";
        ratio.textContent = "Power Multiplier: " + artList[index].ratio + "%";
        ratio.style.textDecoration = "underline";
        
        const description = document.createElement("p");
        description.className = "info-text-arts-modal";
        variableAmountArt = artList[index].boostAmount;
        if (typeof artList[index].description === 'function') {
            description.textContent = artList[index].description();
        }

        let artImage = new Array(4);

        for (let indexA = 0; indexA < 4; indexA++) {
            artImage[indexA] = document.createElement("img");
            artImage[indexA].className = "art-features";
        }
        artImage[0].src = artList[index].recharge;
        artImage[1].src = artList[index].reaction;
        artImage[2].src = artList[index].aoe;
        artImage[3].src = artList[index].type;

        modalIcon.appendChild(artSlot);
        container.appendChild(modalIcon);
        textContainer.appendChild(name);
        textContainer.appendChild(ratio);
        textContainer.appendChild(description);
        container.appendChild(textContainer);

        for (let indexA = 0; indexA < 4; indexA++) {
            artSlot.appendChild(artImage[indexA]);
        }
        const element = document.getElementById("classList");
        element.appendChild(container);

        container.addEventListener("click", () => {
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
            modifyCharacter(key, value, obj, obj.arts);
            characterLoad(obj);
            classMenu.style.display = "none";
        })
    }
}

const gemButtons = document.getElementsByClassName("gem");
const gemText = document.getElementsByClassName("gem-text");
const gemRemove = document.getElementsByClassName("gem-remove");

let gemSelect = 0;

for (let index = 0; index < gemButtons.length; index++) {
    gemButtons[index].addEventListener("click", function() {
        if (currentCharacter === "heroConfig") {
            return;
        }
        parent = document.getElementById("gemList");
        clearMenu();
        gemSelect = index;
        classMenu = document.getElementById("gemsModal");
        populateMenuGems();
        classMenu.style.display = "block";
    })
    gemRemove[index].addEventListener("click", function() {
        if (currentCharacter === "heroConfig") {
            return;
        }
        const gemKeys = Object.keys(noahConfig.gems);
        let obj = getConfig();
        modifyCharacter(gemKeys[index], null, obj, obj.gems);
        characterLoad(obj);
    })
}

function populateMenuGems() {
    for (let index = 0; index < gems.length; index++) {
        let currentRank = 9;
        const modalIcon = document.createElement("div");
        modalIcon.className = "modal-icon";
        modalIcon.classList.add("modal-icon-gem");

        const gemContainer = document.createElement("div");
        gemContainer.className = "gem-features";
        gemContainer.classList.add("gem-features-shift");

        const gemType = document.createElement("img");
        gemType.src = gems[index].src;
        gemType.className = "gem-features";
        const gemRank = document.createElement("img");
        gemRank.src = gemRanks[currentRank].src;
        gemRank.className = "gem-features";

        const prev = document.createElement("span");
        prev.className = "icon-prev";
        const next = document.createElement("span");
        next.className = "icon-next";

        modalIcon.appendChild(gemContainer);
        gemContainer.appendChild(gemType);
        gemContainer.appendChild(gemRank);
        modalIcon.appendChild(prev);
        modalIcon.appendChild(next);

        const element = document.getElementById("gemList");
        element.appendChild(modalIcon);

        let tooltipContent;
        if (typeof gems[index].description === 'function') {
            variableAmountGems = gems[index].boostAmount;
            tooltipContent = `${gems[index].name}<br>${gems[index].description()}`;
        }
        else {
            tooltipContent = `${gems[index].name}`;
        }
        $(gemContainer).attr('title', tooltipContent).tooltip('dispose').tooltip({html: true});

        prev.addEventListener("click", () => {
            currentRank = currentRank - 1;
            if (currentRank < 0) {
                currentRank = 9;
            }
            gemRank.src = gemRanks[currentRank].src;
        })

        next.addEventListener("click", () => {
            currentRank = currentRank + 1;
            if (currentRank > 9) {
                currentRank = 0;
            }
            gemRank.src = gemRanks[currentRank].src;
        })

        gemContainer.addEventListener("click", () => {
            const gemKeys = Object.keys(noahConfig.gems);
            const rankKeys = Object.keys(noahConfig.ranks);
            const key1 = gemKeys[gemSelect];
            const key2 = rankKeys[gemSelect];
            const value1 = gems[index].name;
            const value2 = gemRanks[currentRank].name;
            let obj = getConfig();

            for (let indexA = 0; indexA < gemKeys.length; indexA++) {
                if (obj.gems[gemKeys[indexA]] === gems[index].name && obj.gems[gemKeys[indexA]] != "None") {
                    gemLoad(indexA, obj.gems[gemKeys[gemSelect]], obj.ranks[rankKeys[gemSelect]]);
                    modifyCharacter(gemKeys[indexA], obj.gems[gemKeys[gemSelect]], obj, obj.gems);
                }
            }

            modifyCharacter(key1, value1, obj, obj.gems);
            modifyCharacter(key2, value2, obj, obj.ranks);

            classMenu.style.display = "none";
            characterLoad(obj);
        })
    }
}

const accessoryButtons = document.getElementsByClassName("accessory");
const accessoryRemove = document.getElementsByClassName("accessory-remove");

let accessorySelect = 0;

for (let index = 0; index < accessoryButtons.length; index++) {
    accessoryButtons[index].addEventListener("click", function() {
        parent = document.getElementById("accessoryList");
        clearMenu();
        accessorySelect = index;
        classMenu = document.getElementById("accessoriesModal");
        populateMenuAccessories();
        classMenu.style.display = "block";
    })
    accessoryRemove[index].addEventListener("click", function() {
        accessoryLoad(index, null, null);
        const accessoryKeys = Object.keys(noahConfig.accessories);
        let obj = getConfig();
        modifyCharacter(accessoryKeys[index], null, obj, obj.accessories);
        characterLoad(obj);
    })
}

function populateMenuAccessories() {
    for (let index = 0; index < accessories.length; index++) {
        let currentRarity = 2;
        const modalIcon = document.createElement("div");
        modalIcon.className = "modal-icon";
        modalIcon.classList.add("modal-icon-accessory");

        const accessoryContainer = document.createElement("div");
        accessoryContainer.className = "accessory-features";
        accessoryContainer.classList.add("accessory-features-menu");

        const accessorySlot = document.createElement("img");
        accessorySlot.src = "img/equipment/accessories/accessory-slot.png";
        accessorySlot.className = "accessory-features";
        const accessoryRarity = document.createElement("img");
        accessoryRarity.src = "img/equipment/accessories/accessory-legendary.png";
        accessoryRarity.className = "accessory-features";
        const accessoryType = document.createElement("img");
        accessoryType.src = accessories[index].src;
        accessoryType.className = "accessory-features";
        const accessoryName = document.createElement("h1");
        accessoryName.textContent = accessories[index].name;
        accessoryName.className = "accessory-text";

        const prev = document.createElement("span");
        prev.className = "icon-prev";
        const next = document.createElement("span");
        next.className = "icon-next";

        modalIcon.appendChild(accessoryContainer);
        accessoryContainer.appendChild(accessorySlot);
        accessoryContainer.appendChild(accessoryRarity);
        accessoryContainer.appendChild(accessoryType);
        accessoryContainer.appendChild(accessoryName);
        modalIcon.appendChild(prev);
        modalIcon.appendChild(next);

        const element = document.getElementById("accessoryList");
        element.appendChild(modalIcon);

        let tooltipContent;
        if (typeof accessories[index].description === 'function') {
            variableAmountAccessories = accessories[index].boostAmount;
            tooltipContent = `${accessories[index].name}<br>${accessories[index].description()}`;
        }
        else {
            tooltipContent = `${accessories[index].name}`;
        }
        $(accessoryContainer).attr('title', tooltipContent).tooltip('dispose').tooltip({html: true});

        prev.addEventListener("click", () => {
            currentRarity = currentRarity - 1;

            if (currentRarity < 0) {
                currentRarity = 2;
            }
            accessoryRarity.src = rarities[currentRarity].src;
        })

        next.addEventListener("click", () => {
            currentRarity = currentRarity + 1;

            if (currentRarity > 2) {
                currentRarity = 0;
            }
            accessoryRarity.src = rarities[currentRarity].src;
        })

        accessoryContainer.addEventListener("click", () => {
            const accessoryKeys = Object.keys(noahConfig.accessories);
            const rarityKeys = Object.keys(noahConfig.rarities);
            const key1 = accessoryKeys[accessorySelect];
            const key2 = rarityKeys[accessorySelect];
            const value1 = accessories[index].name;
            const value2 = rarities[currentRarity].name;
            let obj = getConfig();

            for (let indexA = 0; indexA < accessoryKeys.length; indexA++) {
                if (obj.accessories[accessoryKeys[indexA]] === accessories[index].name && obj.accessories[accessoryKeys[indexA]] != "None") {
                    accessoryLoad(indexA, obj.accessories[accessoryKeys[accessorySelect]], obj.rarities[rarityKeys[accessorySelect]]);
                    modifyCharacter(accessoryKeys[indexA], obj.accessories[accessoryKeys[accessorySelect]], obj, obj.accessories);
                }
            }

            modifyCharacter(key1, value1, obj, obj.accessories);
            modifyCharacter(key2, value2, obj, obj.rarities);

            accessoryLoad(accessorySelect, obj.accessories[accessoryKeys[gemSelect]], obj.rarities[rarityKeys[gemSelect]]);

            classMenu.style.display = "none";
            characterLoad(obj);
        })
    }
}

function skillLoad(slotNumber, loadedSkillName) {
    let slot = skills[slotNumber];
    let loadedSkill;
    let item;
    let obj = getConfig();

    if (loadedSkillName === null || loadedSkillName === "None") {
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        const image = document.createElement("img");
        image.src = "img/skills/skill-0.png";
        if (currentCharacter === "heroConfig" || obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
            image.classList.add("faded-icon");
        }
        slot.appendChild(image);
        $(slot).attr('title', "None").tooltip('dispose').tooltip();
        return;
    }
    else {
        item = skillList.findIndex(item => item.name === loadedSkillName);
        loadedSkill = skillList[item];
    }

    while (slot.firstChild) {
        slot.removeChild(slot.firstChild);
    }
    const image = document.createElement("img");
    image.src = loadedSkill.src;
    slot.appendChild(image);
    let tooltipContent;
    if (typeof loadedSkill.description === 'function') {
        variableAmountSkill = loadedSkill.boostAmount;
        tooltipContent = `${loadedSkill.name}<br>${loadedSkill.description()}`;
    }
    else {
        tooltipContent = `${loadedSkill.name}`;
    }
    $(slot).attr('title', tooltipContent).tooltip('dispose').tooltip({html: true});
}

function artLoad(slotNumber, loadedArtName) {
    let slot = arts[slotNumber];
    let artName = artNames[slotNumber];
    let loadedArt;
    let item;
    let artList;
    let obj = getConfig();

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
            if (obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
                artList = classArts;
            }
            else {
                artList = talentArtsNoah.concat(talentArts);
            }
        }
        else if (currentCharacter === "mioConfig") {
            artList = talentArtsMio.concat(talentArts);
        }
        else if (currentCharacter === "heroConfig") {
            artList = classArts;
        }
        else {
            artList = talentArts;
        }
    }

    if (loadedArtName === null) {
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        artName.textContent = "None";
        let artImage = document.createElement("img");
        item = artList.findIndex(item => item.name === "None");
        loadedArt = artList[item];
        artImage.src = loadedArt.recharge;
        artImage.className = "art-features";
        if (currentCharacter === "heroConfig") {
            artImage.classList.add("faded-icon");
        }
        slot.appendChild(artImage);
        ratio[slotNumber] = undefined;
        attribute[slotNumber] = undefined;
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
    artImage[1].src = loadedArt.reaction;
    artImage[2].src = loadedArt.aoe;
    artImage[3].src = loadedArt.type;

    if (obj.class === "Lucky Seven (Attacker)" || obj.class === "Lucky Seven (Defender)" || obj.class === "Lucky Seven (Healer)") {
        artImage[3].classList.add("unlimited-sword-icons");
    }

    for (let indexA = 0; indexA < 4; indexA++) {
        slot.appendChild(artImage[indexA]);
    }

    if (artList[item].name === "Unlimited Sword") {
        artName.classList.add("unlimited-sword-text");
        artName.onclick = function() {
            const key = "class";
            const role = getClassRole(localStorage.getItem(currentCharacter));
            let value;
            if (role === "Attacker") {
                value = "Lucky Seven (Attacker)";
            }
            else if (role === "Defender") {
                value = "Lucky Seven (Defender)";
            }
            else if (role === "Healer") {
                value = "Lucky Seven (Healer)";
            }
            modifyCharacter(key, value, obj, obj);
            let className = document.getElementById("class-name");
            className.textContent = obj.class;
            classSwap();
        }
    }
    else {
        artName.classList.remove("unlimited-sword-text");
        artName.onclick = null;
    }

    ratio[slotNumber] = loadedArt.ratio;
    attribute[slotNumber] = loadedArt.attribute;
    artClass[slotNumber] = loadedArt.class;
    artName.textContent = loadedArt.name;
}

// Loads the details regarding the character's current class, including the class icon and class skills
function classLoad(currentClass) {
    let image;
    while (classButton.children[1]) {
        classButton.removeChild(classButton.children[1]);
    }
    if (currentCharacter === "heroConfig") {
        item = heroIcons.findIndex(item => item.name === currentClass);
        image = document.createElement("img");
        image.src = heroIcons[item].src;
        const portraitImg = heroIcons[item].portraitSrc;
        portrait.src = portraitImg;
        const buttonImage = heroIcons[item].buttonSrc;
        heroButtonImg.src = buttonImage;
        portraitsImages[6].src = portraitImg;
        getSkillsByClass(localStorage.getItem(currentCharacter));
        $('#buttonHero').attr('title', heroIcons[item].name).tooltip('dispose').tooltip();
        let characterName = document.getElementById("character-name");
        characterName.textContent = heroIcons[item].name;
    }
    else if (currentClass === "Lucky Seven (Attacker)" || currentClass === "Lucky Seven (Defender)" || currentClass === "Lucky Seven (Healer)") {
        item = luckySevenIcons.findIndex(item => item.name === currentClass);
        image = document.createElement("img");
        image.src = luckySevenIcons[item].src;
        getSkillsByClass(localStorage.getItem(currentCharacter));
        stability = luckySevenIcons[item].stability;
    }
    else if (SoulhackerRoles.some(obj => obj.name === currentClass)) {
        item = SoulhackerRoles.findIndex(item => item.name === currentClass);
        image = document.createElement("img");
        image.src = SoulhackerRoles[item].class;
        getSkillsByClass(localStorage.getItem(currentCharacter));
        skillList = skillsSoulhacker;

        let slot = skills[1];
        let imageSkill = document.createElement("img");
        imageSkill.src = SoulhackerRoles[item].src;
        slot.removeChild(slot.firstChild);
        slot.appendChild(imageSkill);
        $(skills[1]).attr('title', SoulhackerRoles[item].role).tooltip('dispose').tooltip();
        stability = SoulhackerRoles[item].stability;
    }
    else {
        item = classIcons.findIndex(item => item.name === currentClass);
        image = document.createElement("img");
        image.src = classIcons[item].src;
        getSkillsByClass(localStorage.getItem(currentCharacter));
        stability = classIcons[item].stability;
        skillList = skillsMaster;
    }
    image.className = "classSymbol";
    classButton.appendChild(image);
    let className = document.getElementById("class-name");
    className.textContent = currentClass;
    getStatsByClass(localStorage.getItem(currentCharacter));
}

function gemLoad(slotNumber, loadedGemType, loadedGemRank) {
    let slot = gemButtons[slotNumber];
    let loadedType;
    let loadedRank;
    let type;
    let rank;

    if (currentCharacter === "heroConfig") {
        gemRemove[slotNumber].classList.add("faded-icon");
    }
    else {
        gemRemove[slotNumber].classList.remove("faded-icon");
    }

    if (loadedGemType === null) {
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        const image = document.createElement("img");
        image.src = "img/equipment/gems/gemOutline.png";
        slot.appendChild(image);
        gemText[slotNumber].textContent = "None";
        return;
    }
    else {
        type = gems.findIndex(type => type.name === loadedGemType);
        loadedType = gems[type];
        rank = gemRanks.findIndex(rank => rank.name === loadedGemRank);
        loadedRank = gemRanks[rank];
    }

    while (slot.firstChild) {
        slot.removeChild(slot.firstChild);
    }
    const image1 = document.createElement("img");
    image1.src = loadedType.src;
    image1.className = "gem-features";
    const image2 = document.createElement("img");
    image2.src = loadedRank.src;
    image2.className = "gem-features";
    slot.appendChild(image1);
    slot.appendChild(image2);

    gemText[slotNumber].textContent = loadedType.name;
}

function accessoryLoad(slotNumber, loadedAccessoryType, loadedAccessoryRarity) {
    let slot = accessoryButtons[slotNumber];
    let loadedType;
    let loadedRarity;
    let type;
    let rarity;

    if (currentCharacter === "heroConfig") {
        gemRemove[slotNumber].classList.add("faded-icon");
    }
    else {
        gemRemove[slotNumber].classList.remove("faded-icon");
    }

    if (loadedAccessoryType === null) {
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        const image = document.createElement("img");
        image.src = "img/equipment/accessories/accessory-slot.png";
        slot.appendChild(image);
        return;
    }
    else {
        type = accessories.findIndex(type => type.name === loadedAccessoryType);
        loadedType = accessories[type];
        rarity = rarities.findIndex(rarity => rarity.name === loadedAccessoryRarity);
        loadedRarity = rarities[rarity];
    }

    while (slot.firstChild) {
        slot.removeChild(slot.firstChild);
    }
    const accessorySlot = document.createElement("img");
    accessorySlot.src = "img/equipment/accessories/accessory-slot.png";
    accessorySlot.className = "accessory-features";
    const image1 = document.createElement("img");
    image1.src = loadedType.src;
    image1.className = "accessory-features";
    const image2 = document.createElement("img");
    image2.src = loadedRarity.src;
    image2.className = "accessory-features";
    const name = document.createElement("h1");
    name.textContent = loadedType.name;
    name.className = "accessory-text";
    name.classList.add("accessory-text-2");

    slot.appendChild(accessorySlot);
    slot.appendChild(image2);
    slot.appendChild(image1);
    slot.appendChild(name);
}

// This function is called when the character's Class is changed, updating the list of selectable Arts and wiping set Master Skills
function classSwap() {
    let characterStored = localStorage.getItem(currentCharacter);
    classArts = getArtsByClass(localStorage.getItem(currentCharacter));
    masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
    const artKeys = Object.keys(noahConfig.arts);
    const skillKeys = Object.keys(noahConfig.skills);
    let obj = getConfig();

    if (currentCharacter === "heroConfig") {
        let valueArts = classArts[5].name;
        const keyArts = artKeys[6];
        modifyCharacter(keyArts, valueArts, obj, obj.arts);

        item = heroIcons.findIndex(item => item.name === obj.class);
        const gemKeys = Object.keys(heroConfig.gems);
        const gemsArray = ["gem_1", "gem_2", "gem_3"];

        for (let index = 0; index < gemKeys.length; index++) {
            const keyGems = gemKeys[index];
            let valueGems = heroIcons[item][gemsArray[index]];
            modifyCharacter(keyGems, valueGems, obj, obj.gems);
        }
        getStatsByClass(localStorage.getItem(currentCharacter));
    }
    else if (SoulhackerRoles.some(item => item.name === obj.class)) {
        let valueArts = talentArts[18].name;
        const keyArts = artKeys[6];
        modifyCharacter(keyArts, valueArts, obj, obj.arts);
    }
    else if (JSON.parse(characterStored).class === "Lucky Seven (Attacker)" || JSON.parse(characterStored).class === "Lucky Seven (Defender)" || JSON.parse(characterStored).class === "Lucky Seven (Healer)") {
        let valueArts = classArts[6].name;
        const keyArts = artKeys[6];
        modifyCharacter(keyArts, valueArts, obj, obj.arts);
    }
    else if (JSON.parse(characterStored).arts.art_talent === "Final Lucky Seven") {
        let valueArts = "Unlimited Sword";
        const keyArts = artKeys[6];
        modifyCharacter(keyArts, valueArts, obj, obj.arts);
    }

    for (let index = 0; index < 3; index++) {
        let value = "None";
        if (JSON.parse(characterStored).class === "Lucky Seven (Attacker)" || JSON.parse(characterStored).class === "Lucky Seven (Defender)" || JSON.parse(characterStored).class === "Lucky Seven (Healer)") {
            value = classArts[index + 3].name;
        }
        else if (currentCharacter === "heroConfig") {
            value = null;
        }
        const key = artKeys[index];
        modifyCharacter(key, value, obj, obj.arts);
    }
    for (let index = 3; index < 6; index++) {
        const key = artKeys[index];
        const value = classArts[index-3].name;
        modifyCharacter(key, value, obj, obj.arts);
    }
    for (let index = 0; index < 3; index++) {
        let value = "None";
        if (currentCharacter === "heroConfig") {
            value = null;
        }
        const key = skillKeys[index];
        modifyCharacter(key, value, obj, obj.skills);
    }
    characterLoad(obj);
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