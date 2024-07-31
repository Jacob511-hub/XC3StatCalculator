let hpAdditivesSum;
let attackAdditivesSum;
let healingAdditivesSum;
let dexterityAdditivesSum;
let agilityAdditivesSum;
let critAdditivesSum;
let blockAdditivesSum;
let physicalAdditivesSum;
let etherAdditivesSum;

function getStatsAdditives() {
    let hpAdditives = [];
    let attackAdditives = [];
    let healingAdditives = [];
    let dexterityAdditives = [];
    let agilityAdditives = [];
    let critAdditives = [];
    let blockAdditives = [];
    let physicalAdditives = [];
    let etherAdditives = [];

    const additivesMap = {
        "hp": hpAdditives,
        "attack": attackAdditives,
        "healing": healingAdditives,
        "dexterity": dexterityAdditives,
        "agility": agilityAdditives,
        "crit": critAdditives,
        "block": blockAdditives,
        "physical": physicalAdditives,
        "ether": etherAdditives,
    }

    let obj = getConfig();
    const gemKeys = Object.keys(noahConfig.gems);

    for (index = 0; index < gemKeys.length; index++) {
        let gem = gems.findIndex(gem => gem.name === obj.gems[gemKeys[index]]);
        if (gem === -1) {
            continue;
        }
        else if (gems[gem].boostType === "additive") {
            additivesMap[gems[gem].boostStat].push(gems[gem].boostAmount);
        }
    }
    hpAdditivesSum = hpAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    attackAdditivesSum = attackAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    healingAdditivesSum = healingAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    dexterityAdditivesSum = dexterityAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    agilityAdditivesSum = agilityAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    critAdditivesSum = critAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    blockAdditivesSum = blockAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    physicalAdditivesSum = physicalAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
    etherAdditivesSum = etherAdditives.reduce((acc, currentValue) => acc + currentValue, 0);
}