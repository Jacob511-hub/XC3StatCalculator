function damage(damageRatio, attribute, weaponStability, range) {
    if (damageRatio === undefined || damageRatio === 0) {
        return 0;
    }

    let weaponAttack;
    if (flags["weaponUpgrade"] === false) {
        weaponAttack = damageBase;
    }
    else if (flags["weaponUpgrade"] === true) {
        weaponAttack = damageUpgraded;
    }
    
    let obj = getConfig();
    let statAttack  = Math.floor(Math.floor(obj.stats.attack * classStats["class_stats"]["attack"] + weaponAttack) * (1 + (attackMultipliersSum / 100)) + attackAdditivesSum);
    
    powerMultiplier = (damageRatio)/100;
    multiHitCorrection = 1/(1);

    let defenseEnemyPhysical = document.getElementById('enemy-physical-defense').value;
    let defenseEnemyEther = document.getElementById('enemy-ether-defense').value;
    let defenseMultiplierPhysical = defenseEnemyPhysical - DefenseReductionPhysicalGroupSum;
    let defenseMultiplierEther = defenseEnemyEther - DefenseReductionEtherGroupSum;
    let defenseMultiplier;
    if (attribute === "physical") {
        defenseMultiplier = defenseMultiplierPhysical;
    }
    else if (attribute === "ether") {
        defenseMultiplier = defenseMultiplierEther;
    }

    let blockedMultiplier;
    if (flags["enemyBlocked"]) {
        blockedMultiplier = 0.50;
    }
    else {
        blockedMultiplier = 1;
    }

    let comboMultiplier;
    if (flags["launchEnemy"]) {
        comboMultiplier = 1.25;
    }
    else {
        comboMultiplier = 1;
    }

    shackleRingMultiplier = 1;

    let chainAttackMultiplier = document.getElementById('chain-attack-multiplier').value;
    levelMultiplier = 1;
    difficultyMultiplier = 1;

    uncapped_damage = (statAttack + Math.floor(weaponAttack * weaponStability))
                  * powerMultiplier * multiHitCorrection
                  * (1 + (MultiplierGroup1Sum + artMultiplierGroup1Sum + fusionBoostSum)/100)
                  * (1 + (MultiplierGroup2Sum + artMultiplierGroup2Sum)/100)
                  * (1 + (MultiplierGroup3Sum + artMultiplierGroup3Sum)/100)
                  * (1 - (DamageReductionGroupSum)/100)
                  * (1 + (CriticalGroupSum)/100)
                  * (1 - (defenseMultiplier)/100)
                  * blockedMultiplier 
                  * comboMultiplier
                  * shackleRingMultiplier
                  * fusionDamageMultiplier
                  * ((chainAttackMultiplier)/100)
                  * levelMultiplier
                  * difficultyMultiplier

    return Math.min(9999999, Math.max(1, Math.floor(uncapped_damage * range)));
}

function heal(healRatio, range) {
    statHeal = parseInt(currentStats[2].textContent);
    powerMultiplier = (healRatio) / 100;
    giveBonus = 0;
    receiveBonus = 0;
    critMultiplier = 1.10;
    shackleRingMultiplier = 1;
    fusionDamageMultiplier = 1;
    difficultyMultiplier = 1;

    uncapped_heal = statHeal * powerMultiplier
                * (1.0 + giveBonus + receiveBonus)
                * critMultiplier
                * shackleRingMultiplier
                * fusionDamageMultiplier
                * difficultyMultiplier
    
    return Math.min(9999999, Math.max(1, Math.floor((uncapped_heal + (uncapped_heal * range)))));
}

function smashDamage(damage, launchFrames) {
    let smashMultiplier = 1.5 + (launchFrames * 3 / 100);

    return Math.min(9999999, Math.max(1, Math.floor((damage * smashMultiplier))));
}

let damageBase;
let critRateBase;
let blockRateBase;
let damageUpgraded;
let critRateUpgraded;
let blockRateUpgraded;

async function getWeaponStats(currentWeapon, currentLevel) {
    if (currentWeapon === undefined || currentWeapon === null) {
        return;
    }
    const apiUrl = `https://xc3-weapon-stat-scraper.vercel.app/stats?weapon_name=${currentWeapon}&level=${currentLevel}`;

    await fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        damageBase = Number(data[0].damage_base);
        critRateBase = Number(parseFloat(data[0].crit_rate_base.replace('%', '')));
        blockRateBase = Number(parseFloat(data[0].block_rate_base.replace('%', '')));
        damageUpgraded = Number(data[0].damage_upgraded);
        critRateUpgraded = Number(parseFloat(data[0].crit_rate_upgraded.replace('%', '')));
        blockRateUpgraded = Number(parseFloat(data[0].block_rate_upgraded.replace('%', '')));
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

async function printDamage() {
    //TODO: ADD "CALCULATE" BUTTON, CALL THIS FUNCTION ONLY WHEN PRESSED, CHANGE ART NAMES IN SEPARATE FUNCTION
    artMultiplier(null);
    fusionCheck(false);
    let obj = getConfig();
    let playerLevel = Number(document.getElementById('player-level').value)
    await getWeaponStats(weaponsMap[obj.class], playerLevel);
    damagePrint[0].firstChild.textContent = "Auto-Attack: ";
    damagePrintBadge[0].textContent = (damage(60, "physical", 0, 0.9) + " - " + damage(60, "physical", stability, 1.1));

    for(let index = 0; index < 7; index++) {
        if (attribute[index] === "physical" || attribute[index] === "ether") {
            artMultiplier(index);
            fusionCheck(false);
            await getWeaponStats(weaponsMap[artClass[index]], playerLevel);
            damagePrint[index + 1].firstChild.textContent = (artNames[index].textContent + ": ");
            damagePrintBadge[index + 1].textContent = (damage(ratio[index], attribute[index], 0, 0.9) + " - " + damage(ratio[index], attribute[index], stability, 1.1));
        }
        else if (attribute[index] === "heal") {
            damagePrint[index + 1].firstChild.textContent = (artNames[index].textContent + ": ");
            damagePrintBadge[index + 1].textContent = (heal(ratio[index], 0.00) + " - " + (heal(ratio[index], 0.04) + 2.0));
        }
        else if (attribute[index] === "buff" || attribute[index] === "field" || attribute[index] === undefined) {
            damagePrint[index + 1].firstChild.textContent = (artNames[index].textContent + ": ");
            damagePrintBadge[index + 1].textContent = 0;
        }
    }
    for (let index = 0; index < 3; index++) {
        fusionCheck(true);
        await getWeaponStats(weaponsMap[obj.class], playerLevel);
        let masterArtMin = 0;
        let masterArtMax = 0;
        let classArtMin = 0;
        let classArtMax = 0;
        if (attribute[index] === "physical" || attribute[index] === "ether") {
            artMultiplier(index);
            masterArtMin = damage(ratio[index], attribute[index], 0, 0.9);
            masterArtMax = damage(ratio[index], attribute[index], stability, 1.1);

            const artKeys = Object.keys(noahConfig.arts);
            if (obj.arts[artKeys[index]] === "Quickdraw") {
                masterArtMin = masterArtMin * 2;
                masterArtMax = masterArtMax * 2;
            }
        }
        if (attribute[index + 3] === "physical" || attribute[index  + 3] === "ether") {
            artMultiplier(index);
            classArtMin = damage(ratio[index + 3], attribute[index + 3], 0, 0.9);
            classArtMax = damage(ratio[index + 3], attribute[index + 3], stability, 1.1);
        }
        damagePrint[index + 8].firstChild.textContent = (artNames[index].textContent + " + " + artNames[index + 3].textContent + ": ");
        damagePrintBadge[index + 8].textContent = ((masterArtMin + classArtMin) + " - " + (masterArtMax + classArtMax));
    }

    artMultiplier(null);
    fusionCheck(false);
    let indexChainArt = 0;
    if (currentCharacter === "heroConfig") {
        indexChainArt = artsChain.findIndex(indexChainArt => indexChainArt.character === obj.class);
    }
    else {
        indexChainArt = artsChain.findIndex(indexChainArt => indexChainArt.class === obj.class);
    }
    const chainArts = {
        "noahConfig": "Brave Assault: ",
        "mioConfig": "Lightning Quick: ",
        "eunieConfig": "Pinion Primed: ",
        "taionConfig": "Art of Subjugation: ",
        "lanzConfig": "Tyrant Wave: ",
        "senaConfig": "Bombshell Blitz: ",
        "heroConfig": artsChain[indexChainArt].name + ": ",
    };

    damagePrint[11].firstChild.textContent = chainArts[currentCharacter];
    damagePrintBadge[11].textContent = (damage(artsChain[indexChainArt].ratio, artsChain[indexChainArt].attribute, 0, 0.9) + " - " + damage(artsChain[indexChainArt].ratio, artsChain[indexChainArt].attribute, stability, 1.1));
}