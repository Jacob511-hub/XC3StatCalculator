function damage(damageRatio, attribute, weaponStability, range) {
    if (damageRatio === undefined || damageRatio === 0) {
        return 0;
    }
    statAttack = parseInt(currentStats[1].textContent) + 22;
    weaponAttack = parseInt(classStats["weapon_stats"]["attack"]);
    powerMultiplier = (damageRatio) / 100;
    multiHitCorrection = 1 / (2);
    DamageReductionGroup = [0.00];
    let defenseMultiplierPhysical = 1 - (0.00 - (0.50 + 0.32));
    let defenseMultiplierEther = 1 - (0.00);
    let defenseMultiplier;
    if (attribute === "physical") {
        defenseMultiplier = defenseMultiplierPhysical;
    }
    else if (attribute === "ether") {
        defenseMultiplier = defenseMultiplierEther;
    }
    critMultiplier = 1.25 + 0.70 + 0.50 + 0.50 + (0.50 * (1 + 0.50 + 0.35));
    blockedMultiplier = 1;
    comboMultiplier = 1;
    shackleRingMultiplier = 1;
    fusionDamageMultiplier = 1;
    chainAttackMultiplier = 1;
    levelMultiplier = 1;
    difficultyMultiplier = 1;

    uncapped_damage = (statAttack + Math.floor(weaponAttack * weaponStability))
                  * powerMultiplier * multiHitCorrection
                  * (1 + MultiplierGroup1Sum)
                  * (1 + MultiplierGroup2Sum)
                  * (1 + MultiplierGroup3Sum)
                  * (1 - DamageReductionGroup.reduce((acc, currentValue) => acc + currentValue, 0))
                  * defenseMultiplier
                  * critMultiplier
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