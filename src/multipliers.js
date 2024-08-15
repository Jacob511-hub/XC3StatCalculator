let hpMultipliersSum;
let attackMultipliersSum;
let healingMultipliersSum;
let dexterityMultipliersSum;
let agilityMultipliersSum;
let critMultipliersSum;
let blockMultipliersSum;
let physicalMultipliersSum;
let etherMultipliersSum;

function getStatsMultipliers() {
    let hpMultipliers = [];
    let attackMultipliers = [];
    let healingMultipliers = [];
    let dexterityMultipliers = [];
    let agilityMultipliers = [];
    let critMultipliers = [];
    let blockMultipliers = [];
    let physicalMultipliers = [];
    let etherMultipliers = [];

    const multipliersMap = {
        "hp": hpMultipliers,
        "attack": attackMultipliers,
        "healing": healingMultipliers,
        "dexterity": dexterityMultipliers,
        "agility": agilityMultipliers,
        "crit": critMultipliers,
        "block": blockMultipliers,
        "physical": physicalMultipliers,
        "ether": etherMultipliers,
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
        else if (gems[gem].boostType === "multiplier") {
            multipliersMap[gems[gem].boostStat].push(gems[gem].boostAmount);
        }
    }
    for (index = 0; index < accessoryKeys.length; index++) {
        let accessory = accessories.findIndex(accessory => accessory.name === obj.accessories[accessoryKeys[index]]);
        if (accessory === -1) {
            continue;
        }
        else if (accessories[accessory].boostType === "multiplier") {
            multipliersMap[accessories[accessory].boostStat].push(accessories[accessory].boostAmount);
        }
        else if (accessories[accessory].boostType === "multiplier x3") {
            multipliersMap[accessories[accessory].boostStat1].push(accessories[accessory].boostAmount1);
            multipliersMap[accessories[accessory].boostStat2].push(accessories[accessory].boostAmount2);
            multipliersMap[accessories[accessory].boostStat3].push(accessories[accessory].boostAmount3);
        }
    }
    for (index = 0; index < skillsClassMaster.length; index++) {
        let skill = allSkills.findIndex(skill => skill.name === skillsClassMaster[index]);
        if (skill === -1) {
            continue;
        }
        else if (allSkills[skill].boostType === "multiplier") {
            multipliersMap[allSkills[skill].boostStat].push(allSkills[skill].boostAmount);
        }
    }
    
    hpMultipliersSum = hpMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    attackMultipliersSum = attackMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    healingMultipliersSum = healingMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    dexterityMultipliersSum = dexterityMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    agilityMultipliersSum = agilityMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    critMultipliersSum = critMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    blockMultipliersSum = blockMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    physicalMultipliersSum = physicalMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
    etherMultipliersSum = etherMultipliers.reduce((acc, currentValue) => acc + currentValue, 0);
}