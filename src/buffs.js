const buffs = [
    { name: "Attack Up", boostType: "multiplierDamage", group: "1", flags: ["attackUpPlayer"], boostAmount: 25},
    { name: "Awakening", boostType: "multiplierDamage", group: "1", flags: ["awakeningPlayer"], boostAmount: 50},
    { name: "Awakening", boostType: "multiplierDamage", group: "damageReduction", flags: ["awakeningEnemy"], boostAmount: 25},
    { name: "Critical Hit Plus", boostType: "multiplierDamage", group: "critical", flags: ["criticalPlusPlayer"], boostAmount: 50},
    { name: "Power Charge", boostType: "multiplierDamage", group: "2", flags: ["powerChargePlayer"], boostAmount: 50},
    { name: "Attack Down", boostType: "multiplierDamage", group: "1", flags: ["attackDownPlayer"], boostAmount: -25},
    { name: "Reduce All", boostType: "multiplierDamage", group: "damageReduction", flags: ["reduceAll"], boostAmount: -50},
]