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