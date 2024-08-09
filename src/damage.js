function damage(damageRatio, attribute, weaponStability, range, inheritance) {
    if (damageRatio === undefined || damageRatio === 0) {
        return 0;
    }

    let statAttack = parseInt(currentStats[1].textContent);
    let classWeaponAttack = parseInt(classStats["weapon_stats"]["attack"]);

    let weaponAttack;
    if (inheritance === undefined || inheritance === null) {
        weaponAttack = parseInt(classStats["weapon_stats"]["attack"]);
    }
    else {
        let classSource = statsMap[inheritance]
        weaponAttack = parseInt(classSource["weapon_stats"]["attack"]);
    }
    
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

    uncapped_damage = ((statAttack - classWeaponAttack + weaponAttack) + Math.floor(weaponAttack * weaponStability))
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

function printDamage() {
    artMultiplier(null);
    fusionCheck(false);
    damagePrint[0].textContent = "Auto-Attack: " + damage(60, "physical", 0, 0.9) + " - " + damage(60, "physical", stability, 1.1, artClass[index]);

    for(let index = 0; index < 7; index++) {
        if (attribute[index] === "physical" || attribute[index] === "ether") {
            artMultiplier(index);
            fusionCheck(false);
            damagePrint[index + 1].textContent = (artNames[index].textContent + ": " + damage(ratio[index], attribute[index], 0, 0.9, artClass[index]) + " - " + damage(ratio[index], attribute[index], stability, 1.1, artClass[index]));
        }
        else if (attribute[index] === "heal") {
            damagePrint[index + 1].textContent = (artNames[index].textContent + ": " + heal(ratio[index], 0.00) + " - " + (heal(ratio[index], 0.04) + 2.0));
        }
        else if (attribute[index] === "buff" || attribute[index] === "field" || attribute[index] === undefined) {
            damagePrint[index + 1].textContent = (artNames[index].textContent + ": " + 0);
        }
    }
    for (let index = 0; index < 3; index++) {
        fusionCheck(true);
        let obj = getConfig();
        let masterArtMin = 0;
        let masterArtMax = 0;
        let classArtMin = 0;
        let classArtMax = 0;
        if (attribute[index] === "physical" || attribute[index] === "ether") {
            artMultiplier(index);
            masterArtMin = damage(ratio[index], attribute[index], 0, 0.9, obj.class);
            masterArtMax = damage(ratio[index], attribute[index], stability, 1.1, obj.class);
        }
        if (attribute[index + 3] === "physical" || attribute[index  + 3] === "ether") {
            artMultiplier(index);
            classArtMin = damage(ratio[index + 3], attribute[index + 3], 0, 0.9, obj.class);
            classArtMax = damage(ratio[index + 3], attribute[index + 3], stability, 1.1, obj.class);
        }
        damagePrint[index + 8].textContent = (artNames[index].textContent + " + " + artNames[index + 3].textContent + ": " + (masterArtMin + classArtMin) + " - " + (masterArtMax + classArtMax));
    }
}