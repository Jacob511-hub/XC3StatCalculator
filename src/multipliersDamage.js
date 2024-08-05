let MultiplierGroup1Sum;
let MultiplierGroup2Sum;
let MultiplierGroup3Sum;
let ReductionGroupSum;
let CriticalGroupSum;

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
    "auto": false,
    "fusion": false,
    "boss": false,
    "unique": false,
    "critical": false,

    "attackUpPlayer": false,
    "awakeningPlayer": false,
    "awakeningEnemy": false,
    "criticalPlusPlayer": false,
    "powerChargePlayer": false,
    "attackDownPlayer": false,
    "reduceAll": false,
};

function setFlag(flagName) {
    if (flags.hasOwnProperty(flagName)) {
        flags[flagName] = !flags[flagName];
        let obj = getConfig();
        calculateStats(obj);
        getDamageMultipliers();
        printDamage();
    }
}

function calculateIncremental(input, maxValue, increment) {
    const value = (input) * increment;
  
    if (value > maxValue) {
      return maxValue;
    }
  
    return value;
}

function getDamageMultipliers() {
    let MultiplierGroup1 = [];
    let MultiplierGroup2 = [];
    let MultiplierGroup3 = [];
    let ReductionGroup = [];
    let CriticalGroup = [];

    const multipliersMap = {
        "1": MultiplierGroup1,
        "2": MultiplierGroup2,
        "3": MultiplierGroup3,
        "reduction": ReductionGroup,
        "critical": CriticalGroup,
    }

    const incrementalsMap = {
        "hitsSuccessive": 10, //PLACEHOLDER VALUE. User will be able to set a value that this will pull from
        "enemiesNumber": 10 //PLACEHOLDER VALUE. User will be able to set a value that this will pull from
    }

    let obj = getConfig();
    const gemKeys = Object.keys(noahConfig.gems);
    const accessoryKeys = Object.keys(noahConfig.accessories);
    const skillsMasterKeys = Object.keys(noahConfig.skills);
    let skillsClassMaster = [];
    for (index = 0; index < 4; index++) {
        skillsClassMaster.push(currentSkills[index].name);
    }
    for (index = 0; index < 3; index++) {
        skillsClassMaster.push(obj.skills[skillsMasterKeys[index]]);
    }
    const allSkills = currentSkills.concat(skillList);

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
            const input = incrementalsMap[accessories[accessory].flag];
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
            const input = incrementalsMap[allSkills[skill].flag];
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
    ReductionGroupSum = ReductionGroup.reduce((acc, currentValue) => acc + currentValue, 0);

    if (flags["critical"]) {
        CriticalGroupSum = 25 + (CriticalGroup.reduce((acc, currentValue) => acc + currentValue, 0));
    }
    else {
        CriticalGroupSum = 0;
    }
}