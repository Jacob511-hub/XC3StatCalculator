function damage(damageRatio) {
    if (damageRatio === undefined) {
        return;
    }
    statAttack = parseInt(currentStats[1].textContent);
    weaponAttack = parseInt(classStats["weapon_stats"]["attack"]);
    weaponStability = 0.02;
    powerMultiplier = (damageRatio) / 100;
    multiHitCorrection = 1 / (1);
    MultiplierGroup1 = [0.00];
    MultiplierGroup2 = [0.00];
    MultiplierGroup3 = [0.00];
    DamageReductionGroup = [0.00];
    defenseMultiplier = 1 - (0.15 - 0)
    critMultiplier = 1.25;
    blockedMultiplier = 1;
    comboMultiplier = 1;
    shackleRingMultiplier = 1;
    fusionDamageMultiplier = 1;
    chainAttackMultiplier = 1;
    levelMultiplier = 1;
    difficultyMultiplier = 1;

    uncapped_damage = (statAttack + Math.floor(weaponAttack * (Math.floor(Math.random() * ((weaponStability * 100) + 1))) / 100))
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
                  * (((Math.floor(Math.random() * 21)) / 100) + 0.90)

    console.log(Math.min(9999999, Math.max(1, Math.floor(uncapped_damage))))
    return Math.min(9999999, Math.max(1, Math.floor(uncapped_damage)));
}