let MultiplierGroup1Sum;
let MultiplierGroup2Sum;
let MultiplierGroup3Sum;
let DamageReductionGroupSum;
let DefenseReductionPhysicalGroupSum;
let DefenseReductionEtherGroupSum;
let CriticalGroupSum;
let artMultiplierGroup1Sum;
let artMultiplierGroup2Sum;
let artMultiplierGroup3Sum;
let fusionBoostSum;
let fusionDamageMultiplier;

let characters = [
    "noahConfig",
    "mioConfig",
    "eunieConfig",
    "taionConfig",
    "lanzConfig",
    "senaConfig",
    "heroConfig",
];

const flags = {
    "none": true,
    "auto": false,
    "cancel": false,
    "critical": false,
    "enemyBlocked": false,
    "boss": false,
    "unique": false,
    "first30seconds": false,

    "attackUpPlayer": false,
    "awakeningPlayer": false,
    "awakeningEnemy": false,
    "criticalPlusPlayer": false,
    "powerChargePlayer": false,
    "attackDownPlayer": false,
    "reduceAll": false,

    "breakEnemy": false,
    "toppleEnemy": false,
    "dazeEnemy": false,
    "launchEnemy": false,
    "burstEnemy": false,
    "smashEnemy": false,

    "enemyTerrestrial": false,
    "enemyAquatic": false,
    "enemyAerial": false,
    "enemyKeves": false,
    "enemyAgnus": false,
    "enemyLostNumbers": false,
    "enemyMachines": false,
    "enemyMoebius": false,
};

function setFlag(flagName) {
    if (flags.hasOwnProperty(flagName)) {
        flags[flagName] = !flags[flagName];
        recalculate();
    }
}

function calculateIncremental(input, maxValue, increment) {
    const value = (input) * increment;
  
    if (value > maxValue) {
      return maxValue;
    }
  
    return value;
}

function fusionCheck(flag) {
    let fusionBoost = [];
    fusionDamageMultiplier = 1.5;
    const accessoryKeys = Object.keys(noahConfig.accessories);
    let obj = getConfig();

    if (flag === true) {
        for (let index = 0; index < accessoryKeys.length; index++) {
            let accessory = accessories.findIndex(accessory => accessory.name === obj.accessories[accessoryKeys[index]]);

            if (accessory === -1 || !("flags" in accessories[accessory]) || !(accessories[accessory].flags).includes("fusion")) {
                fusionBoost.push(0);
            }
            else if ((accessories[accessory].flags).includes("fusion")) {
                fusionBoost.push(accessories[accessory].boostAmount);
            }
        }
        fusionBoostSum = fusionBoost.reduce((acc, currentValue) => acc + currentValue, 0);
    }
    else if (flag === false) {
        fusionDamageMultiplier = 1;
        fusionBoostSum = 0;
    }
}

function artMultiplier(index) {
    let obj = getConfig();
    const artKeys = Object.keys(noahConfig.arts);
    let classArts = getArtsByClass(localStorage.getItem(currentCharacter));
    let masterArts = getMasterArtsByClass(localStorage.getItem(currentCharacter));
    const allArts = classArts.concat(masterArts, talentArts);

    let artMultiplierGroup1 = [];
    let artMultiplierGroup2 = [];
    let artMultiplierGroup3 = [];

    const artMultipliersMap = {
        "1": artMultiplierGroup1,
        "2": artMultiplierGroup2,
        "3": artMultiplierGroup3,
    }

    if (index === null || obj.arts[artKeys[index]] === null || obj.arts[artKeys[index]] === "None") {
        artMultiplierGroup1Sum = 0;
        artMultiplierGroup2Sum = 0;
        artMultiplierGroup3Sum = 0;
        return;
    }
    
    let art = allArts.findIndex(art => art.name === obj.arts[artKeys[index]]);
    if (art === -1) {
        return;
    }
    else if (allArts[art].boostType === "multiplierDamage") {
        const flagSet = allArts[art].flags.some(flag => flags[flag]);
        if (flagSet) {
            artMultipliersMap[allArts[art].group].push(allArts[art].boostAmount);
        }
    }
    artMultiplierGroup1Sum = artMultiplierGroup1.reduce((acc, currentValue) => acc + currentValue, 0);
    artMultiplierGroup2Sum = artMultiplierGroup2.reduce((acc, currentValue) => acc + currentValue, 0);
    artMultiplierGroup3Sum = artMultiplierGroup3.reduce((acc, currentValue) => acc + currentValue, 0);
}

function getDamageMultipliers() {
    let MultiplierGroup1 = [];
    let MultiplierGroup2 = [];
    let MultiplierGroup3 = [];
    let DamageReductionGroup = [];
    let DefenseReductionPhysicalGroup = [];
    let DefenseReductionEtherGroup = [];
    let CriticalGroup = [];

    const multipliersMap = {
        "1": MultiplierGroup1,
        "2": MultiplierGroup2,
        "3": MultiplierGroup3,
        "damageReduction": DamageReductionGroup,
        "defenseReductionPhysical": DefenseReductionPhysicalGroup,
        "defenseReductionEther": DefenseReductionEtherGroup,
        "critical": CriticalGroup,
    }

    const incrementalsMap = {
        "hitsSuccessive": document.getElementById('hits-successive').value,
        "enemiesNumber": document.getElementById('enemies-total').value,
        "crits": document.getElementById('crits-hit').value,
        "buffsApplied": document.getElementById('buffs-applied').value,
        "debuffsApplied": document.getElementById('debuffs-applied').value,
        "cancels": document.getElementById('cancels-total').value,
        "buffsAllies": 10, //PLACEHOLDER VALUE. User will be able to set a value that this will pull from
        "buffsUser": 10, //PLACEHOLDER VALUE. User will be able to set a value that this will pull from
        "usedTalents": document.getElementById('used-talents').value
    }

    let obj = getConfig();
    const gemKeys = Object.keys(noahConfig.gems);
    const accessoryKeys = Object.keys(noahConfig.accessories);
    const skillsMasterKeys = Object.keys(noahConfig.skills);
    const allSkills = currentSkills.concat(skillList);
    let skillsClassMaster = [];

    for (index = 0; index < 4; index++) {
        skillsClassMaster.push(currentSkills[index].name);
    }
    for (index = 0; index < 3; index++) {
        skillsClassMaster.push(obj.skills[skillsMasterKeys[index]]);
    }

    for (index = 0; index < gemKeys.length; index++) {
        let gem = gems.findIndex(gem => gem.name === obj.gems[gemKeys[index]]);
        if (gem === -1) {
            continue;
        }
        else if (gems[gem].boostType === "multiplierDamage") {
            const flagSet = gems[gem].flags.some(flag => flags[flag]);
            if (flagSet) {
                multipliersMap[gems[gem].group].push(gems[gem].boostAmount);
            }
        }
    }
    for (index = 0; index < accessoryKeys.length; index++) {
        let accessory = accessories.findIndex(accessory => accessory.name === obj.accessories[accessoryKeys[index]]);
        if (accessory === -1) {
            continue;
        }
        else if (accessories[accessory].boostType === "multiplierDamage") {
            const flagSet = accessories[accessory].flags.some(flag => flags[flag]);
            if (flagSet) {
                multipliersMap[accessories[accessory].group].push(accessories[accessory].boostAmount);
            }
        }
        else if (accessories[accessory].boostType === "multiplierDamageIncremental") {
            const input = incrementalsMap[accessories[accessory].flags];
            const value = calculateIncremental(input, accessories[accessory].boostMax, accessories[accessory].boostIncrement)
            multipliersMap[accessories[accessory].group].push(value);
        }
    }
    for (index = 0; index < skillsClassMaster.length; index++) {
        let skill = allSkills.findIndex(skill => skill.name === skillsClassMaster[index]);
        if (skill === -1) {
            continue;
        }
        else if (allSkills[skill].boostType === "multiplierDamage") {
            const flagSet = allSkills[skill].flags.some(flag => flags[flag]);
            if (flagSet) {
                multipliersMap[allSkills[skill].group].push(allSkills[skill].boostAmount);
            }
        }
        else if (allSkills[skill].boostType === "multiplierDamageIncremental") {
            const input = incrementalsMap[allSkills[skill].flags];
            const value = calculateIncremental(input, allSkills[skill].boostMax, allSkills[skill].boostIncrement)
            multipliersMap[allSkills[skill].group].push(value);
        }
    }
    for (index = 0; index < characters.length; index++) {
        let character = JSON.parse(localStorage.getItem(characters[index]));
        if (character.class === "Royal Summoner" || character.class === "Melia" || [character.skills.skill_1, character.skills.skill_2, character.skills.skill_3].includes("Essence of Ether")) {
            MultiplierGroup1.push(30)
            break;
        }
        else {
            continue;
        }
    }
    for (index = 0; index < buffs.length; index++) {
        if (buffs[index].boostType === "multiplierDamage") {
            const flagSet = buffs[index].flags.some(flag => flags[flag]);
            if (flagSet) {
                multipliersMap[buffs[index].group].push(buffs[index].boostAmount);
            }
        }
    }

    MultiplierGroup1Sum = MultiplierGroup1.reduce((acc, currentValue) => acc + currentValue, 0);
    MultiplierGroup2Sum = MultiplierGroup2.reduce((acc, currentValue) => acc + currentValue, 0);
    MultiplierGroup3Sum = MultiplierGroup3.reduce((acc, currentValue) => acc + currentValue, 0);
    DamageReductionGroupSum = DamageReductionGroup.reduce((acc, currentValue) => acc + currentValue, 0);
    DefenseReductionPhysicalGroupSum = DefenseReductionPhysicalGroup.reduce((acc, currentValue) => acc + currentValue, 0);
    DefenseReductionEtherGroupSum = DefenseReductionEtherGroup.reduce((acc, currentValue) => acc + currentValue, 0);

    if (flags["critical"]) {
        CriticalGroupSum = 25 + (CriticalGroup.reduce((acc, currentValue) => acc + currentValue, 0));
    }
    else {
        CriticalGroupSum = 0;
    }
}