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
    "defenseUpPlayer": false,
    "accuracyUpPlayer": false,
    "evasionUpPlayer": false,
    "critRateUpPlayer": false,
    "criticalPlusPlayer": false,
    "powerChargePlayer": false,
    "armorVeilPlayer": false,
    "awakeningPlayer": false,

    "attackDownPlayer": false,

    "awakeningEnemy": false,

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

    "positionFront": false,
    "positionSide": false,
    "positionBack": false,
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

    let playerBuffsActive = [flags["attackUpPlayer"], flags["defenseUpPlayer"], flags["accuracyUpPlayer"], flags["evasionUpPlayer"], flags["critRateUpPlayer"], flags["criticalPlusPlayer"], flags["powerChargePlayer"], flags["armorVeilPlayer"], flags["awakeningPlayer"]];
    let playerBuffsActiveCount = playerBuffsActive.filter(Boolean).length;

    let artMultiplierGroup1 = [];
    let artMultiplierGroup2 = [];
    let artMultiplierGroup3 = [];

    const artMultipliersMap = {
        "1": artMultiplierGroup1,
        "2": artMultiplierGroup2,
        "3": artMultiplierGroup3,
    }

    const incrementalsMapArts = {
        "buffsUser": playerBuffsActiveCount,
        "soulHacks": document.getElementById('soul-hacks').value,
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
    else if (allArts[art].boostType === "multiplierDamageIncremental") {
        const input = incrementalsMapArts[allArts[art].flags];
        const value = calculateIncremental(input, allArts[art].boostMax, allArts[art].boostIncrement)
        artMultipliersMap[allArts[art].group].push(value);
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
  
    const buffPowerMap = {
        "attackUpPlayer": document.getElementById('buff-power-attackUpPlayer').value,
        "awakeningPlayer": document.getElementById('buff-power-awakeningPlayer').value,
        "awakeningEnemy": document.getElementById('buff-power-awakeningEnemy').value,
        "criticalPlusPlayer": document.getElementById('buff-power-criticalPlusPlayer').value,
        "powerChargePlayer": document.getElementById('buff-power-powerChargePlayer').value,
        "attackDownPlayer": document.getElementById('buff-power-attackDownPlayer').value,
        "reduceAll": document.getElementById('buff-power-reduceAll').value,
    }

    let playerBuffsActive = [flags["attackUpPlayer"], flags["defenseUpPlayer"], flags["accuracyUpPlayer"], flags["evasionUpPlayer"], flags["critRateUpPlayer"], flags["criticalPlusPlayer"], flags["powerChargePlayer"], flags["armorVeilPlayer"], flags["awakeningPlayer"]];
    let playerBuffsActiveCount = playerBuffsActive.filter(Boolean).length;

    const incrementalsMap = {
        "hitsSuccessive": document.getElementById('hits-successive').value,
        "enemiesNumber": document.getElementById('enemies-total').value,
        "crits": document.getElementById('crits-hit').value,
        "buffsApplied": document.getElementById('buffs-applied').value,
        "debuffsApplied": document.getElementById('debuffs-applied').value,
        "cancels": document.getElementById('cancels-total').value,
        "buffsAllies": 10, //PLACEHOLDER VALUE. User will be able to set a value that this will pull from
        "buffsUser": playerBuffsActiveCount,
        "usedTalents": document.getElementById('used-talents').value,
        "launchTime": document.getElementById('launch-time').value,
        "currentHpPlayer": document.getElementById('current-hp-player').value,
        "enemyLevel": document.getElementById('enemy-level').value,
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
            else if (accessories[accessory].hasOwnProperty("hpThresholdBelow")) {
                if (incrementalsMap["currentHpPlayer"] <= accessories[accessory].hpThresholdBelow) {
                    multipliersMap[accessories[accessory].group].push(accessories[accessory].boostAmount);
                }
            }
            else if (accessories[accessory].hasOwnProperty("hpThresholdAbove")) {
                if (incrementalsMap["currentHpPlayer"] >= accessories[accessory].hpThresholdAbove) {
                    multipliersMap[accessories[accessory].group].push(accessories[accessory].boostAmount);
                }
            }
            else if (accessories[accessory].hasOwnProperty("levelThreshold")) {
                if (incrementalsMap["enemyLevel"] > accessories[accessory].levelThreshold) {
                    multipliersMap[accessories[accessory].group].push(accessories[accessory].boostAmount);
                }
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
            else if (allSkills[skill].hasOwnProperty("hpThresholdBelow")) {
                if (incrementalsMap["currentHpPlayer"] <= allSkills[skill].hpThresholdBelow) {
                    multipliersMap[allSkills[skill].group].push(allSkills[skill].boostAmount);
                }
            }
            else if (allSkills[skill].hasOwnProperty("hpThresholdAbove")) {
                if (incrementalsMap["currentHpPlayer"] >= allSkills[skill].hpThresholdAbove) {
                    multipliersMap[allSkills[skill].group].push(allSkills[skill].boostAmount);
                }
            }
            else if (allSkills[skill].hasOwnProperty("levelThreshold")) {
                if (incrementalsMap["enemyLevel"] > allSkills[skill].levelThreshold) {
                    multipliersMap[allSkills[skill].group].push(allSkills[skill].boostAmount);
                }
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
            MultiplierGroup1.push(30);
            break;
        }
        else {
            continue;
        }
    }
    for (index = 0; index < characters.length; index++) {
        let character = JSON.parse(localStorage.getItem(characters[index]));
        if (character.class === "Lapidarist" || character.class === "Masha" || [character.skills.skill_1, character.skills.skill_2, character.skills.skill_3].includes("Beaming Edge")) {
            CriticalGroup.push(50);
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
                let buffPower = buffPowerMap[buffs[index].flags[0]];
                multipliersMap[buffs[index].group].push(Math.floor((buffs[index].boostAmount) * (buffPower/100)));
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