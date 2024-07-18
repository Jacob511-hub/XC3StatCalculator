function damage() {
    uncapped_damage = (statAttack + rand(0.0, weaponAttack * weaponStability))
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
                  * aoeMultiplier
                  * backPreemptiveMultiplier
                  * weaknessMultiplier
                  * levelMultiplier
                  * difficultyMultiplier
                  * rand(0.9, 1.1)

return min(9999999, max(1, floor(uncapped_damage)));
}