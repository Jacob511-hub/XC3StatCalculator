let variableAmountGems = 0;
let variableAmountAccessories = 0;

const gems = [
    { name: "Tailwind", src: "img/equipment/gems/gem-blue.png", boostType: "additive", boostStat: "agility", boostAmount: 35},
    { name: "Steel Protection", src: "img/equipment/gems/gem-blue.png"},
    { name: "Ultimate Counter", src: "img/equipment/gems/gem-blue.png"},
    { name: "Brimming Spirit", src: "img/equipment/gems/gem-blue.png"},
    { name: "Perilous Presence", src: "img/equipment/gems/gem-blue.png"},
    { name: "Steelcleaver", src: "img/equipment/gems/gem-red.png", boostType: "additive", boostStat: "attack", boostAmount: 70},
    { name: "Accurate Grace", src: "img/equipment/gems/gem-red.png"},
    { name: "Analyze Weakness", src: "img/equipment/gems/gem-red.png", boostType: "multiplierDamage", group: "critical", flags: ["critical"], boostAmount: 70, description: function() {return `Increases critical hit damage bonus by ${variableAmountGems} percentage points.`;}},
    { name: "Swelling Scourge", src: "img/equipment/gems/gem-red.png"},
    { name: "Refined Incantation", src: "img/equipment/gems/gem-red.png"},
    { name: "Lifebearer", src: "img/equipment/gems/gem-green.png"},
    { name: "Soothing Breath", src: "img/equipment/gems/gem-green.png"},
    { name: "Lifesaving Expertise", src: "img/equipment/gems/gem-green.png"},
    { name: "Swelling Blessing", src: "img/equipment/gems/gem-green.png"},
    { name: "Refined Blessing", src: "img/equipment/gems/gem-green.png"},
    { name: "Ironclad", src: "img/equipment/gems/gem-yellow.png"},
    { name: "Steady Striker", src: "img/equipment/gems/gem-yellow.png"},
    { name: "Doublestrike", src: "img/equipment/gems/gem-yellow.png"},
    { name: "Empowered Combo", src: "img/equipment/gems/gem-yellow.png", boostType: "multiplierDamage", group: "3", flags: ["cancel"], boostAmount: 75},
    { name: "Disperse Bloodlust", src: "img/equipment/gems/gem-yellow.png"},
];

const gemRanks = [
    { name: "Rank I", src: "img/equipment/gems/gem-rank-i.png"},
    { name: "Rank II", src: "img/equipment/gems/gem-rank-ii.png"},
    { name: "Rank III", src: "img/equipment/gems/gem-rank-iii.png"},
    { name: "Rank IV", src: "img/equipment/gems/gem-rank-iv.png"},
    { name: "Rank V", src: "img/equipment/gems/gem-rank-v.png"},
    { name: "Rank VI", src: "img/equipment/gems/gem-rank-vi.png"},
    { name: "Rank VII", src: "img/equipment/gems/gem-rank-vii.png"},
    { name: "Rank VIII", src: "img/equipment/gems/gem-rank-viii.png"},
    { name: "Rank IX", src: "img/equipment/gems/gem-rank-ix.png"},
    { name: "Rank X", src: "img/equipment/gems/gem-rank-x.png"},
];

const accessories = [
    { name: "Titanium Temple Guard", src: "img/equipment/accessories/accessory-hat.png", boostType: "multiplier", boostStat: "hp", boostAmount: 32},
    { name: "Carbon Gloves", src: "img/equipment/accessories/accessory-gloves.png"},
    { name: "Titanium Support", src: "img/equipment/accessories/accessory-vest.png"},
    { name: "Solid Weak Guard", src: "img/equipment/accessories/accessory-shoes.png"},
    { name: "Ceramic Belt", src: "img/equipment/accessories/accessory-belt.png"},
    { name: "Memory Locket", src: "img/equipment/accessories/accessory-choker.png"},
    { name: "Shackle Ring", src: "img/equipment/accessories/accessory-jewelry.png"},
    { name: "Fraternal Badge", src: "img/equipment/accessories/accessory-medal.png"},
    { name: "Archsage's Flower Fan", src: "img/equipment/accessories/accessory-other.png", boostType: "multiplier x3", boostStat1: "hp", boostAmount1: 30, boostStat2: "attack", boostAmount2: 30, boostStat3: "healing", boostAmount3: 30},
    { name: "Saturni Rings", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplier", boostStat: "attack", boostAmount: 40, description: function() {return `Boosts Attack by ${variableAmountAccessories}%.`;}},
    { name: "Solis Rings", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplier", boostStat: "healing", boostAmount: 40},
    { name: "Iovis Rings", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplier", boostStat: "agility", boostAmount: 40},
    { name: "Mercurii Rings", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplier", boostStat: "crit", boostAmount: 60},
    { name: "Martis Rings", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplier", boostStat: "block", boostAmount: 60},
    { name: "Lunae Rings", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplierDamage", group: "1", flags: ["fusion"], boostAmount: 100},
    { name: "Veneris Rings", src: "img/equipment/accessories/accessory-jewelry.png"},
    { name: "Accomplished Necklace", src: "img/equipment/accessories/accessory-choker.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["enemiesNumber"], boostIncrement: 30, boostMax: 200},
    { name: "Scourwind Necklace", src: "img/equipment/accessories/accessory-choker.png", boostType: "multiplierDamage", group: "1", flags: [undefined], hpThresholdBelow: 30, boostAmount: 40},
    { name: "Lustrous Armring", src: "img/equipment/accessories/accessory-other.png", boostType: "multiplierDamage", group: "1", flags: [undefined], hpThresholdAbove: 90, boostAmount: 35},
    { name: "Accomplished Earring", src: "img/equipment/accessories/accessory-jewelry.png", boostType: "multiplierDamage", group: "defenseReductionPhysical", flags: ["none"], boostAmount: 35},
    { name: "Accomplished Hairpiece", src: "img/equipment/accessories/accessory-hat.png", boostType: "multiplierDamage", group: "defenseReductionEther", flags: ["none"], boostAmount: 35},
    { name: "Warped White Brooch", src: "img/equipment/accessories/accessory-other.png", boostType: "multiplierDamage", group: "defenseReductionPhysical", flags: ["none"], boostAmount: 30},
    { name: "Warped Black Brooch", src: "img/equipment/accessories/accessory-other.png", boostType: "multiplierDamage", group: "defenseReductionEther", flags: ["none"], boostAmount: 30},
];

const rarities = [
    { name: "Common", src: "img/equipment/accessories/accessory-common.png"},
    { name: "Rare", src: "img/equipment/accessories/accessory-rare.png"},
    { name: "Legendary", src: "img/equipment/accessories/accessory-legendary.png"},
]