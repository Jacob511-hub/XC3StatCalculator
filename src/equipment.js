let variableAmountGems = 0;
let variableAmountAccessories = 0;
let variableAmountGemsExtra = 0;

const gems = [
    { name: "Tailwind", src: "img/equipment/gems/gem-blue.png", boostType: "additive", boostStat: "agility", boostAmount: 35, description: function() {return `Increases Agility by ${variableAmountGems}.`;}},
    { name: "Steel Protection", src: "img/equipment/gems/gem-blue.png", boostAmount: 30, description: function() {return `Increases Block Rate by ${variableAmountGems} percentage points.`;}},
    { name: "Ultimate Counter", src: "img/equipment/gems/gem-blue.png", boostAmount: 280, description: function() {return `Deal ${variableAmountGems}% of Attack damage when you take damage.`;}},
    { name: "Brimming Spirit", src: "img/equipment/gems/gem-blue.png", boostAmount: 45, description: function() {return `Boost aggro generated when using Arts by ${variableAmountGems}%.`;}},
    { name: "Perilous Presence", src: "img/equipment/gems/gem-blue.png", description: function() {return `Start each battle with aggro.`;}},
    { name: "Steelcleaver", src: "img/equipment/gems/gem-red.png", boostType: "additive", boostStat: "attack", boostAmount: 70, description: function() {return `Increases Attack by ${variableAmountGems}.`;}},
    { name: "Accurate Grace", src: "img/equipment/gems/gem-red.png", boostAmount: 45, description: function() {return `Increases Dexterity by ${variableAmountGems}.`;}},
    { name: "Analyze Weakness", src: "img/equipment/gems/gem-red.png", boostType: "multiplierDamage", group: "critical", flags: ["critical"], boostAmount: 70, description: function() {return `Increases critical hit damage bonus by ${variableAmountGems} percentage points.`;}},
    { name: "Swelling Scourge", src: "img/equipment/gems/gem-red.png", boostAmount: 50, description: function() {return `Boosts power of debuffs applied to enemies by ${variableAmountGems}%.`;}},
    { name: "Refined Incantation", src: "img/equipment/gems/gem-red.png", boostAmount: 50, description: function() {return `Extends duration timers of debuffs applied to enemies by ${variableAmountGems}%.`;}},
    { name: "Lifebearer", src: "img/equipment/gems/gem-green.png", boostAmount: 45, description: function() {return `Increases Healing by ${variableAmountGems}.`;}},
    { name: "Soothing Breath", src: "img/equipment/gems/gem-green.png", boostAmount: 15, boostAmountExtra: 45, description: function() {return `When helping an incapacitated ally, revives them with ${variableAmountGemsExtra}% more HP; also raises Healing by ${variableAmountGems}.`;}},
    { name: "Lifesaving Expertise", src: "img/equipment/gems/gem-green.png", boostAmount: 15, boostAmountExtra: 45, description: function() {return `Boosts speed of ally revival by ${variableAmountGemsExtra}% and raises Healing by ${variableAmountGems}.`;}},
    { name: "Swelling Blessing", src: "img/equipment/gems/gem-green.png", boostAmount: 50, description: function() {return `Boosts power of buff effects issued by self by ${variableAmountGems}%.`;}},
    { name: "Refined Blessing", src: "img/equipment/gems/gem-green.png", boostAmount: 50, description: function() {return `Extends duration of buff effects issued by self by ${variableAmountGems}%.`;}},
    { name: "Ironclad", src: "img/equipment/gems/gem-yellow.png", boostAmount: 1500, description: function() {return `Increases maximum HP by ${variableAmountGems}.`;}},
    { name: "Steady Striker", src: "img/equipment/gems/gem-yellow.png", boostAmount: 40, description: function() {return `Shortens auto-attack interval by ${variableAmountGems}%.`;}},
    { name: "Doublestrike", src: "img/equipment/gems/gem-yellow.png", boostAmount: 40, description: function() {return `Adds ${variableAmountGems}% chance to strike twice per auto-attack.`;}},
    { name: "Empowered Combo", src: "img/equipment/gems/gem-yellow.png", boostType: "multiplierDamage", group: "3", flags: ["cancel"], boostAmount: 75, description: function() {return `When canceling, boosts damage dealt by ${variableAmountGems}%.`;}},
    { name: "Disperse Bloodlust", src: "img/equipment/gems/gem-yellow.png", boostAmount: 45, description: function() {return `Reduces aggro generated when using Arts by ${variableAmountGems}%.`;}},
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