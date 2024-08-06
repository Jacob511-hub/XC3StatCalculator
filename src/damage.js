function damage(damageRatio, attribute, weaponStability, range) {
    if (damageRatio === undefined || damageRatio === 0) {
        return 0;
    }
    statAttack = parseInt(currentStats[1].textContent);
    weaponAttack = parseInt(classStats["weapon_stats"]["attack"]);
    powerMultiplier = (damageRatio)/100;
    multiHitCorrection = 1/(1);

    let defenseEnemyPhysical = document.getElementById('enemy-physical-defense').value;
    let defenseEnemyEther = document.getElementById('enemy-ether-defense').value;;
    let defenseMultiplierPhysical = defenseEnemyPhysical - DefenseReductionPhysicalGroupSum;
    let defenseMultiplierEther = defenseEnemyEther - DefenseReductionEtherGroupSum;
    let defenseMultiplier;
    if (attribute === "physical") {
        defenseMultiplier = defenseMultiplierPhysical;
    }
    else if (attribute === "ether") {
        defenseMultiplier = defenseMultiplierEther;
    }

    blockedMultiplier = 1;

    let comboMultiplier;
    if (flags["launchEnemy"]) {
        comboMultiplier = 1.25;
    }
    else {
        comboMultiplier = 1;
    }
    shackleRingMultiplier = 1;
    fusionDamageMultiplier = 1;
    chainAttackMultiplier = 1;
    levelMultiplier = 1;
    difficultyMultiplier = 1;

    uncapped_damage = (statAttack + Math.floor(weaponAttack * weaponStability))
                  * powerMultiplier * multiHitCorrection
                  * (1 + (MultiplierGroup1Sum)/100)
                  * (1 + (MultiplierGroup2Sum)/100)
                  * (1 + (MultiplierGroup3Sum)/100)
                  * (1 - (DamageReductionGroupSum)/100)
                  * (1 + (CriticalGroupSum)/100)
                  * (1 - (defenseMultiplier)/100)
                  * blockedMultiplier 
                  * comboMultiplier
                  * shackleRingMultiplier
                  * fusionDamageMultiplier
                  * chainAttackMultiplier
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
    damagePrint[0].textContent = "Auto-Attack: " + damage(60, "physical", 0, 0.9) + " - " + damage(60, "physical", stability, 1.1);

    for(index = 0; index < 7; index++) {
        if (attribute[index] === "physical" || attribute[index] === "ether") {
            damagePrint[index + 1].textContent = (artNames[index].textContent + ": " + damage(ratio[index], attribute[index], 0, 0.9) + " - " + damage(ratio[index], attribute[index], stability, 1.1));
        }
        else if (attribute[index] === "heal") {
            damagePrint[index + 1].textContent = (artNames[index].textContent + ": " + heal(ratio[index], 0.00) + " - " + (heal(ratio[index], 0.04) + 2.0));
        }
        else if (attribute[index] === "buff" || attribute[index] === "field" || attribute[index] === undefined) {
            damagePrint[index + 1].textContent = (artNames[index].textContent + ": " + 0);
        }
    }
}