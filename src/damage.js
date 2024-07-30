function damage(damageRatio, attribute, weaponStability, range) {
    if (damageRatio === undefined || damageRatio === 0 || attribute === "buff" || attribute === "field") {
        return 0;
    }
    else if (attribute === "heal") {
        statHeal = parseInt(currentStats[2].textContent);
        powerMultiplier = (damageRatio) / 100;
        return Math.min(9999999, Math.max(1, Math.floor((statHeal * powerMultiplier * range))));
        // TODO: REQUIRES FURTHER RESEARCH AND TESTING
    }
    statAttack = parseInt(currentStats[1].textContent) + 22;
    weaponAttack = parseInt(classStats["weapon_stats"]["attack"]);
    powerMultiplier = (damageRatio) / 100;
    multiHitCorrection = 1 / (2);
    MultiplierGroup1 = [0.50, 0.30, (0.25 * (1 + 0.50 + 0.35))];
    MultiplierGroup2 = [0.75];
    MultiplierGroup3 = [0.00];
    DamageReductionGroup = [0.00];
    defenseMultiplier = 1 - (0.00 - (0.50 + 0.32))
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
                  * (1 + MultiplierGroup1.reduce((acc, currentValue) => acc + currentValue, 0))
                  * (1 + MultiplierGroup2.reduce((acc, currentValue) => acc + currentValue, 0))
                  * (1 + MultiplierGroup3.reduce((acc, currentValue) => acc + currentValue, 0))
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