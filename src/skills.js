let variableAmountSkill = 0;
let variableAmountSkillExtra = 0;

const skillsSwordfighter = [
    { name: "Sharp Eye", src: "img/skills/skill-9.png", boostType: "multiplier", boostStat: "dexterity", boostAmount: 50, description: function() {return `Boosts Dexterity by ${variableAmountSkill}%.`;}},
    { name: "Covert Attack", src: "img/skills/skill-13.png", boostAmount: 65, description: function() {return `Reduces aggro generated from attacks by ${variableAmountSkill}%.`;}},
    { name: "Cypher Edge", src: "img/skills/skill-4.png", boostType: "multiplier", boostStat: "crit", boostAmount: 50, description: function() {return `Boosts Critical Rate by ${variableAmountSkill}%.`;}},
    { name: "Inspirit", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: ["boss", "unique"], boostAmount: 150, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when fighting a unique or boss monster.`;}},
];

const skillsZephyr = [
    { name: "Stormy Gale", src: "img/skills/skill-10.png", boostType: "multiplier", boostStat: "agility", boostAmount: 30, description: function() {return `Boosts Agility by ${variableAmountSkill}%.`;}},
    { name: "I'll Defend You", src: "img/skills/skill-28.png", boostAmount: 6, description: function() {return `${variableAmountSkill}% chance to prevent attacks on allies within a fixed radius.`;}},
    { name: "Split-Second Counter", src: "img/skills/skill-19.png", boostAmount: 200, description: function() {return `Deals ${variableAmountSkill}% of Attack damage when you evade an attack.`;}},
    { name: "Ether's Sanctuary", src: "img/skills/skill-8.png", boostType: "multiplier", boostStat: "ether", boostAmount: 30, description: function() {return `Boosts Ether Defense by ${variableAmountSkill}%`;}},
];

const skillsMedicGunner = [
    { name: "Medical Mind", src: "img/skills/skill-3.png"},
    { name: "Speedy Recovery", src: "img/skills/skill-26.png"},
    { name: "Ninja Healer", src: "img/skills/skill-13.png"},
    { name: "Eternal Formation", src: "img/skills/skill-21.png"},
];

const skillsTactician = [
    { name: "Ethereal Ability", src: "img/skills/skill-30.png"},
    { name: "Shieldrender", src: "img/skills/skill-6.png"},
    { name: "Eternal Curse", src: "img/skills/skill-21.png"},
    { name: "Inevitable Evitability", src: "img/skills/skill-10.png"},
];

const skillsHeavyGuard = [
    { name: "Defensive Soul", src: "img/skills/skill-7.png"},
    { name: "I'll Protect You", src: "img/skills/skill-5.png"},
    { name: "Aggravator", src: "img/skills/skill-13.png"},
    { name: "Tenacious Blocker", src: "img/skills/skill-5.png"},
];

const skillsOgre = [
    { name: "Insult to Injury", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: ["toppleEnemy"], boostAmount: 150},
    { name: "Fury Smash", src: "img/skills/skill-15.png"},
    { name: "Fighting Prowess", src: "img/skills/skill-29.png"},
    { name: "Dynamite Spirit", src: "img/skills/skill-11.png"},
];

const skillsFlashFencer = [
    { name: "First Move Wins", src: "img/skills/skill-3.png", boostType: "multiplierDamage", group: "1", flags: ["first30seconds"], boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% for the first 30 seconds of battle.`;}},
    { name: "Fighting Instinct", src: "img/skills/skill-32.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["usedTalents"], boostIncrement: 50, boostMax: 200, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when using a Talent Art (up to a maximum of 200%).`;}},
    { name: "Critical Strike", src: "img/skills/skill-4.png", boostType: "multiplierDamage", group: "critical", flags: ["critical"], boostAmount: 50, description: function() {return `Increases critical hit damage bonus by ${variableAmountSkill} percentage points.`;}},
    { name: "Capable Hands", src: "img/skills/skill-32.png", boostAmount: 100, description: function() {return `Fills Talent Art recharge gauge by ${variableAmountSkill}% at start of battle.`;}},
];

const skillsWarMedic = [
    { name: "Recovery Engine", src: "img/skills/skill-2.png"},
    { name: "Rescue License", src: "img/skills/skill-26.png"},
    { name: "Healing License", src: "img/skills/skill-17.png"},
    { name: "Antibody System", src: "img/skills/skill-24.png"},
];

const skillsGuardianCommander = [
    { name: "I'll Help", src: "img/skills/skill-13.png"},
    { name: "Soldier's Potential", src: "img/skills/skill-33.png"},
    { name: "Protector's Pride", src: "img/skills/skill-18.png"},
    { name: "Mind for Guarding", src: "img/skills/skill-7.png"},
];

const skillsThaumaturge = [
    { name: "Wheel of Rebirth", src: "img/skills/skill-2.png"},
    { name: "Qinggong", src: "img/skills/skill-10.png"},
    { name: "Ultimate Qigong", src: "img/skills/skill-34.png", boostType: "multiplierDamage", group: "defenseReductionPhysical", flags: ["none"], boostAmount: 50},
    { name: "Life-Saving Fists", src: "img/skills/skill-14.png"},
];

const skillsYumsmith = [
    { name: "Bangsplosion!", src: "img/skills/skill-22.png"},
    { name: "Sappy-Sappy Drain!", src: "img/skills/skill-44.png"},
    { name: "Slicey-Dicey!", src: "img/skills/skill-22.png"},
    { name: "Preppy-Preppy Link!", src: "img/skills/skill-35.png"},
];

const skillsFullMetalJaguar = [
    { name: "Sixth Sense", src: "img/skills/skill-38.png", boostAmount: 100, description: function() {return `Boosts accuracy against enemies performing Arts by ${variableAmountSkill}%.`;}},
    { name: "Positioning Pro", src: "img/skills/skill-1.png", description: function() {return `Increases the no. of positional Arts that can be set to the Arts Palette by 1.`;}},
    { name: "Shock Shot", src: "img/skills/skill-38.png", boostAmount: 100, description: function() {return `Boosts damage against enemies performing Arts by ${variableAmountSkill}%.`;}},
    { name: "Bullet Symphony", src: "img/skills/skill-37.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["hitsSuccessive"], boostIncrement: 20, boostMax: 255, description: function() {return `Each attack that hits boosts damage dealt by ${variableAmountSkill}% (max. 255%). Missing cancels the boost.`;}},
];

const skillsGray = [
    { name: "Sixth Sense", src: "img/skills/skill-38.png", boostAmount: 100, description: function() {return `Boosts accuracy against enemies performing Arts by ${variableAmountSkill}%.`;}},
    { name: "Precision Shot", src: "img/skills/skill-14.png", boostAmount: 150, description: function() {return `Boosts accuracy of auto-attacks by ${variableAmountSkill}%.`;}},
    { name: "Shock Shot", src: "img/skills/skill-38.png", boostAmount: 100, description: function() {return `Boosts damage against enemies performing Arts by ${variableAmountSkill}%.`;}},
    { name: "Bullet Symphony", src: "img/skills/skill-37.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["hitsSuccessive"], boostIncrement: 20, boostMax: 255, description: function() {return `Each attack that hits boosts damage dealt by ${variableAmountSkill}% (max. 255%). Missing cancels the boost.`;}},
];

const skillsStrategos = [
    { name: "Prowess Gambit", src: "img/skills/skill-11.png"},
    { name: "Sapping Gambit", src: "img/skills/skill-21.png"},
    { name: "Strengthening Gambit", src: "img/skills/skill-21.png"},
    { name: "Preemption Gambit", src: "img/skills/skill-23.png"},
];

const skillsStalker = [
    { name: "Swift Death", src: "img/skills/skill-11.png"},
    { name: "In Cold Blood", src: "img/skills/skill-25.png"},
    { name: "Evasion Expertise", src: "img/skills/skill-10.png"},
    { name: "Serene Heart", src: "img/skills/skill-13.png"},
];

const skillsLoneExile = [
    { name: "Goading Attack", src: "img/skills/skill-13.png"},
    { name: "Maniac", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: [undefined], levelThreshold: 99, boostAmount: 50},
    { name: "Returning the Favor", src: "img/skills/skill-36.png"},
    { name: "Natural Selection", src: "img/skills/skill-12.png"},
];

const skillsIncursor = [
    { name: "Adroit Blade", src: "img/skills/skill-11.png"},
    { name: "Floating Kill", src: "img/skills/skill-4.png"},
    { name: "Vigilance", src: "img/skills/skill-14.png"},
    { name: "Eye for Weak Points", src: "img/skills/skill-4.png"},
];

const skillsLostVanguard = [
    { name: "Come an' Get Me!", src: "img/skills/skill-13.png"},
    { name: "Now That's Tactics!", src: "img/skills/skill-1.png"},
    { name: "Never Again!", src: "img/skills/skill-42.png"},
    { name: "Stay Right There!", src: "img/skills/skill-16.png"},
];

const skillsSignifer = [
    { name: "Cheer Up, Everyone", src: "img/skills/skill-39.png"},
    { name: "I've Got Your Backs", src: "img/skills/skill-21.png"},
    { name: "All About Support", src: "img/skills/skill-1.png"},
    { name: "We Can Do Better", src: "img/skills/skill-2.png"},
];

const skillsFiona = [
    { name: "Cheer Up, Everyone", src: "img/skills/skill-39.png"},
    { name: "I've Got Your Backs", src: "img/skills/skill-21.png"},
    { name: "Brightest Star", src: "img/skills/skill-11.png"},
    { name: "We Can Do Better", src: "img/skills/skill-2.png"},
];

const skillsSoulhackerClass = [
    { name: "Soul Hack", src: "img/skills/skill-1.png"},
    { name: "Power Soul", src: "img/skills/skill-3.png"},
    { name: "None", src: "img/skills/skill-0.png"},
    { name: "None", src: "img/skills/skill-0.png"},
];

const skillsTriton = [
    { name: "Underworld Rage", src: "img/skills/skill-11.png"},
    { name: "Amazing Growth", src: "img/skills/skill-11.png"},
    { name: "Recharge Cheer", src: "img/skills/skill-40.png"},
    { name: "Magic Transmutation", src: "img/skills/skill-11.png"},
];

const skillsMartialArtist = [
    { name: "Storm and Stress", src: "img/skills/skill-11.png"},
    { name: "Flashing Punch", src: "img/skills/skill-14.png"},
    { name: "Feline Righting Reflex", src: "img/skills/skill-41.png"},
    { name: "Frenzied Combo", src: "img/skills/skill-18.png"},
];

const skillsTroubadour = [
    { name: "Endsong", src: "img/skills/skill-18.png"},
    { name: "Dance of Barrages", src: "img/skills/skill-40.png"},
    { name: "Dance of Life", src: "img/skills/skill-18.png"},
    { name: "Swiftsong", src: "img/skills/skill-10.png"},
];

const skillsSeraph = [
    { name: "Beast Mode", src: "img/skills/skill-1.png"},
    { name: "Got the Guts", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: [undefined], hpThresholdBelow: 85, boostAmount: 100},
    { name: "Greatest Warrior", src: "img/skills/skill-43.png"},
    { name: "Universal Annihilation", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: ["toppleEnemy", "launchEnemy"], boostAmount: 150},
];

const skillsMachineAssassin = [
    { name: "Chaos Chain", src: "img/skills/skill-11.png"},
    { name: "Phantom Strike", src: "img/skills/skill-6.png"},
    { name: "Cursed Edge", src: "img/skills/skill-11.png"},
    { name: "Anti-Erosion System", src: "img/skills/skill-44.png"},
];

const skillsLifesage = [
    { name: "Steadfast Feelings", src: "img/skills/skill-2.png"},
    { name: "Instant Regen+", src: "img/skills/skill-45.png"},
    { name: "Enhanced Cellular Stimulus", src: "img/skills/skill-46.png"},
    { name: "Abundant Oceans", src: "img/skills/skill-39.png"},
];

const skillsRoyalSummoner = [
    { name: "Elemental Boost", src: "img/skills/skill-20.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["elementalsDischarged"], boostIncrement: 40, boostMax: 400},
    { name: "Essence of Ether", src: "img/skills/skill-31.png"},
    { name: "Fortified Ether Guard", src: "img/skills/skill-8.png"},
    { name: "Here I Shall Stand", src: "img/skills/skill-20.png"},
];

const skillsNoponicChampion = [
    { name: "Tit For Tat", src: "img/skills/skill-18.png"},
    { name: "Nanomachine Repair", src: "img/skills/skill-45.png"},
    { name: "Velocity Gear", src: "img/skills/skill-10.png"},
    { name: "Overclock", src: "img/skills/skill-18.png"},
];

const skillsLapidarist = [
    { name: "Star Treatment", src: "img/skills/skill-45.png"},
    { name: "Beaming Edge", src: "img/skills/skill-4.png", boostAmount: 20, boostAmountExtra: 50, description: function() {return `Boosts all allies' Critical Rate by ${variableAmountSkill}% and critical hit damage by ${variableAmountSkillExtra} perc. points. (Does not stack.)`;}},
    { name: "Fascinator", src: "img/skills/skill-3.png"},
    { name: "Ring à la Mode", src: "img/skills/skill-1.png"},
];

const skillsGrandMarshal = [
    { name: "Right Back At You", src: "img/skills/skill-19.png", boostAmount: 200, description: function() {return `When nearby ally is attacked, deal ${variableAmountSkill}% of attack in damage to enemy.`;}},
    { name: "Natural Born Warrior", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Grants a large increase to damage dealt the more enemies target you (up to a maximum of 300%).`;}},
    { name: "Gentleman's Valor", src: "img/skills/skill-19.png", boostAmount: 20, description: function() {return `Grants Awakening when damage taken exceeds ${variableAmountSkill}% of max HP.`;}},
    { name: "Mechanical Rhythm", src: "img/skills/skill-10.png", boostAmount: 15, description: function() {return `${variableAmountSkill}% chance for own attack to become a guaranteed hit and to evade enemy attacks during it.`;}},
];

const skillsMasterDriver = [
    { name: "Raging Flame", src: "img/skills/skill-11.png", boostAmount: 8, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when landing a critical hit (up to a maximum of 150%).`;}},
    { name: "Lightspeed Blade", src: "img/skills/skill-4.png", boostAmount: 50, description: function() {return `On critical, ignore enemy defense. Also increases critical hit damage bonus by ${variableAmountSkill} percentage points.`;}},
    { name: "Heroic Spirit", src: "img/skills/skill-1.png", boostAmount: 150, boostAmountExtra: 30, description: function() {return `If an ally is down/has low HP, deal ${variableAmountSkill}% more damage and take ${variableAmountSkillExtra}% less damage.`;}},
    { name: "Flash and Flame", src: "img/skills/skill-4.png", boostType: "additive", boostStat: "crit", boostAmount: 20, boostTypeExtra: "multiplierDamage", groupExtra: "critical", flagsExtra: ["critical"], boostAmountExtra: 50, description: function() {return `Increases Critical Rate by ${variableAmountSkill} percentage points and critical hit damage by ${variableAmountSkillExtra} percentage points.`;}},
];

const skillsLuckySevenAttacker = [
    { name: "Cut In Half", src: "img/skills/skill-27.png"},
    { name: "Opening Stand", src: "img/skills/skill-18.png"},
    { name: "Realm of the Master", src: "img/skills/skill-4.png"},
    { name: "Silent Sword", src: "img/skills/skill-13.png"},
];

const skillsLuckySevenDefender = [
    { name: "Flash of Avoidance", src: "img/skills/skill-19.png"},
    { name: "I Will Take Over", src: "img/skills/skill-13.png"},
    { name: "Never Again", src: "img/skills/skill-10.png"},
    { name: "Unwavering Will", src: "img/skills/skill-33.png"},
];

const skillsLuckySevenHealer = [
    { name: "Encouragement", src: "img/skills/skill-26.png"},
    { name: "Extinguishing Bloodlust", src: "img/skills/skill-13.png"},
    { name: "Indomitable Will", src: "img/skills/skill-1.png"},
    { name: "Sword of Protection", src: "img/skills/skill-11.png"},
];

const skillsMaster = [
    { name: "None", src: "img/skills/skill-0.png"},
    { name: "Cypher Edge", src: "img/skills/skill-4.png", boostType: "multiplier", boostStat: "crit", boostAmount: 50, description: function() {return `Boosts Critical Rate by ${variableAmountSkill}%.`;}},
    { name: "Covert Attack", src: "img/skills/skill-13.png", boostAmount: 65, description: function() {return `Reduces aggro generated from attacks by ${variableAmountSkill}%.`;}},
    { name: "Split-Second Counter", src: "img/skills/skill-19.png", boostAmount: 200, description: function() {return `Deals ${variableAmountSkill}% of Attack damage when you evade an attack.`;}},
    { name: "Stormy Gale", src: "img/skills/skill-10.png", boostType: "multiplier", boostStat: "agility", boostAmount: 30, description: function() {return `Boosts Agility by ${variableAmountSkill}%.`;}},
    { name: "Ninja Healer", src: "img/skills/skill-13.png", boostAmount: 50, description: function() {return `Reduces aggro generated from healing Arts by ${variableAmountSkill}%.`;}},
    { name: "Eternal Formation", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Increases field effect duration by ${variableAmountSkill}%.`;}},
    { name: "Ethereal Ability", src: "img/skills/skill-30.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ether Arts by ${variableAmountSkill}%.`;}},
    { name: "Inevitable Evitability", src: "img/skills/skill-10.png", boostAmount: 10, description: function() {return `${variableAmountSkill}% chance to evade enemy attack.`;}},
    { name: "Defensive Soul", src: "img/skills/skill-7.png", boostAmount: 20, description: function() {return `Boosts Physical Defense by ${variableAmountSkill}%.`;}},
    { name: "Tenacious Blocker", src: "img/skills/skill-5.png", boostAmount: 50, description: function() {return `Boosts Block Rate by ${variableAmountSkill} percentage points when HP is at 30% or lower.`;}},
    { name: "Fighting Prowess", src: "img/skills/skill-29.png", boostAmount: 50, description: function() {return `Boosts damage dealt by physical Arts by ${variableAmountSkill}%.`;}},
    { name: "Dynamite Spirit", src: "img/skills/skill-11.png", boostAmount: 60, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when HP is at 90% or higher.`;}},
    { name: "Critical Strike", src: "img/skills/skill-4.png", boostType: "multiplierDamage", group: "critical", flags: ["critical"], boostAmount: 50, description: function() {return `Increases critical hit damage bonus by ${variableAmountSkill} percentage points.`;}},
    { name: "Capable Hands", src: "img/skills/skill-32.png", boostAmount: 100, description: function() {return `Fills Talent Art recharge gauge by ${variableAmountSkill}% at start of battle.`;}},
    { name: "Healing License", src: "img/skills/skill-17.png", boostAmount: 30, description: function() {return `Boosts amount of HP healed from using healing Arts by ${variableAmountSkill}%.`;}},
    { name: "Antibody System", src: "img/skills/skill-24.png", boostAmount: 50, description: function() {return `Shortens duration of debuffs on self by ${variableAmountSkill}%.`;}},
    { name: "Protector's Pride", src: "img/skills/skill-18.png", boostAmount: 50, description: function() {return `Boosts recharge speed by ${variableAmountSkill}% when non-Defenders are targeted.`;}},
    { name: "Mind for Guarding", src: "img/skills/skill-7.png", boostAmount: 20, description: function() {return `Increases damage reduction rate when blocking by ${variableAmountSkill} percentage points.`;}},
    { name: "Ultimate Qigong", src: "img/skills/skill-34.png", boostType: "multiplierDamage", group: "defenseReductionPhysical", flags: ["none"], boostAmount: 50, description: function() {return `When landing a hit, deals damage as though enemy's physical defense was ${variableAmountSkill}% lower.`;}},
    { name: "Life-Saving Fists", src: "img/skills/skill-14.png", description: function() {return `Heals self when auto-attack hits, to a maximum of ${variableAmountSkill}% of Healing Power.`;}},
    { name: "Sappy-Sappy Drain!", src: "img/skills/skill-44.png", boostAmount: 25, description: function() {return `Increases success rate of debuff effects by ${variableAmountSkill} percentage points.`;}},
    { name: "Slicey Dicey!", src: "img/skills/skill-22.png", boostAmount: 200, description: function() {return `Boosts field damage dealt by ${variableAmountSkill}%.`;}},
    { name: "Postioning Pro", src: "img/skills/skill-1.png", description: function() {return `Increases the no. of positional Arts that can be set to the Arts Palette by 1.`;}},
    { name: "Shock Shot", src: "img/skills/skill-38.png", boostAmount: 100, description: function() {return `Boosts damage against enemies performing Arts by ${variableAmountSkill}%.`;}},
    { name: "Strengthening Gambit", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Extends duration of buff effects issued by self by ${variableAmountSkill}%.`;}},
    { name: "Preemption Gambit", src: "img/skills/skill-23.png", boostAmount: 100, description: function() {return `${variableAmountSkill}% chance to grant all allies Attack Up on a preemptive attack.`;}},
    { name: "Evasion Expertise", src: "img/skills/skill-10.png", boostAmount: 50, description: function() {return `${variableAmountSkill}% chance to evade ranged attacks.`;}},
    { name: "Swift Death", src: "img/skills/skill-11.png", boostAmount: 70, description: function() {return `Deals ${variableAmountSkill}% more damage against enemies who are at 30% HP or less.`;}},
    { name: "Natural Selection", src: "img/skills/skill-12.png", boostAmount: 30, description: function() {return `Reduces damage taken by ${variableAmountSkill}% when HP is at 30% or lower.`;}},
    { name: "Maniac", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: [undefined], levelThreshold: 99, boostAmount: 50, description: function() {return `Boosts damage dealt when attacking higher-level enemies by ${variableAmountSkill}%.`;}},
    { name: "Vigilance", src: "img/skills/skill-14.png", boostAmount: 150, description: function() {return `Boosts Critical Rate of auto-attacks by ${variableAmountSkill}%.`;}},
    { name: "Eye for Weak Points", src: "img/skills/skill-4.png", boostAmount: 2, description: function() {return `Each successful attack boosts Critical Rate by ${variableAmountSkill}% of initial value (up to a maximum of 100%).`;}},
    { name: "Now That's Tactics!", src: "img/skills/skill-1.png", boostAmount: 10, description: function() {return `At start of Chain Attack, increases TP by ${variableAmountSkill}.`;}},
    { name: "Come an' Get Me!", src: "img/skills/skill-13.png", boostAmount: 200, description: function() {return `When blocking, deals ${variableAmountSkill}% of Attack damage to enemy, drawing aggro.`;}},
    { name: "All About Support", src: "img/skills/skill-1.png", description: function() {return `Increases the no. of Field Arts that can be set to the Arts Palette by 1.`;}},
    { name: "We Can Do Better", src: "img/skills/skill-2.png", boostAmount: 5, description: function() {return `Restores ${variableAmountSkill}% of HP when a buff is applied.`;}},
    { name: "Soul Hack", src: "img/skills/skill-1.png", description: function() {return `When defeating a unique monster, gain a Skill or Art.`;}},
    { name: "Feline Righting Reflex", src: "img/skills/skill-41.png", boostAmount: 100, description: function() {return `Ignore Blowdown and Launch by somersaulting. Also has ${variableAmountSkill}% chance to grant Attack Up.`;}},
    { name: "Frenzied Combo", src: "img/skills/skill-18.png", boostAmount: 30, description: function() {return `On critical hit, recharge Art used by ${variableAmountSkill}%.`;}},
    { name: "Dance of Barrages", src: "img/skills/skill-40.png", boostAmount: 12, description: function() {return `${variableAmountSkill}% chance to keep recharge when using Art.`;}},
    { name: "Swiftsong", src: "img/skills/skill-10.png", boostAmount: 20, description: function() {return `Boosts all allies' accuracy and evasion by ${variableAmountSkill}%. Does not stack.`;}},
    { name: "Greatest Warrior", src: "img/skills/skill-43.png", boostAmount: 35, description: function() {return `Boosts damage by ${variableAmountSkill}% for every enemy in battle (max. 200%).`;}},
    { name: "Universal Annihilation", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: ["toppleEnemy", "launchEnemy"], boostAmount: 150, description: function() {return `Boosts damage dealt to toppled and launched targets by ${variableAmountSkill}%.`;}},
    { name: "Cursed Edge", src: "img/skills/skill-11.png", boostAmount: 70, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when attacking a debuffed enemy.`;}},
    { name: "Anti-Erosion System", src: "img/skills/skill-44.png", boostAmount: 50, description: function() {return `Grants ${variableAmountSkill}% resistance to all debuffs.`;}},
    { name: "Enhanced Cellular Stimulus", src: "img/skills/skill-46.png", boostAmount: 50, boostAmountExtra: 200, description: function() {return `${variableAmountSkill}% chance on hit to deal ${variableAmountSkillExtra}% of Healing Power as defense-bypassing damage.`;}},
    { name: "Abundant Oceans", src: "img/skills/skill-39.png", boostAmount: 15, boostAmountExtra: 15, description: function() {return `Reduces damage to allies by ${variableAmountSkill}%, and boosts HP recovery by ${variableAmountSkillExtra}% (does not stack).`;}},
    { name: "Fortified Ether Guard", src: "img/skills/skill-8.png", boostAmount: 20, description: function() {return `Boosts Ether Defense by ${variableAmountSkill}%.`;}},
    { name: "Essence of Ether", src: "img/skills/skill-31.png", boostAmount: 30, boostAmountExtra: 15, description: function() {return `Boosts allies' damage by ${variableAmountSkill}% and reduces enemy Block Rate by ${variableAmountSkillExtra}% (does not stack).`;}},
    { name: "Nanomachine Repair", src: "img/skills/skill-45.png", boostAmount: 8, description: function() {return `Adds 25% chance to restore HP by ${variableAmountSkill}% when evading.`;}},
    { name: "Overclock", src: "img/skills/skill-18.png", boostAmount: 20, description: function() {return `Boosts recharge rate by ${variableAmountSkill}% each time the character is incapacitated (to a maximum of 25%).`;}},
    { name: "Ring à la Mode", src: "img/skills/skill-1.png", description: function() {return `Increases the maximum number of fields that can be set from 3 to 4. (Does not stack.)`;}},
    { name: "Beaming Edge", src: "img/skills/skill-4.png", boostAmount: 20, boostAmountExtra: 50, description: function() {return `Boosts all allies' Critical Rate by ${variableAmountSkill}% and critical hit damage by ${variableAmountSkillExtra} perc. points. (Does not stack.)`;}}
];

const skillsSoulhacker = [
    { name: "None", src: "img/skills/skill-0.png"},
    { name: "Acceleating Attacks", src: "img/skills/skill-11.png"},
    { name: "Accelerator Organ", src: "img/skills/skill-9.png"},
    { name: "Action Reaction", src: "img/skills/skill-18.png"},
    { name: "Air Body", src: "img/skills/skill-1.png"},
    { name: "Amazing Growth", src: "img/skills/skill-11.png"},
    { name: "Apothecary's Wisdom", src: "img/skills/skill-17.png"},
    { name: "Aquatic Warrior", src: "img/skills/skill-11.png"},
    { name: "Attack Heal", src: "img/skills/skill-14.png"},
    { name: "Attack Mastery", src: "img/skills/skill-11.png"},
    { name: "Awakilling", src: "img/skills/skill-26.png"},
    { name: "Battle Fever", src: "img/skills/skill-23.png"},
    { name: "Berserker Mindset", src: "img/skills/skill-11.png"},
    { name: "Blasting Stomp", src: "img/skills/skill-50.png"},
    { name: "Breath of an Era", src: "img/skills/skill-18.png"},
    { name: "Celestial Conqueror", src: "img/skills/skill-11.png"},
    { name: "Counter Puncher", src: "img/skills/skill-10.png"},
    { name: "Creeping Predator", src: "img/skills/skill-11.png"},
    { name: "Damage Share", src: "img/skills/skill-33.png"},
    { name: "Dangerous Claws", src: "img/skills/skill-4.png"},
    { name: "Debuff Counter", src: "img/skills/skill-21.png"},
    { name: "Deeply Tactical", src: "img/skills/skill-1.png"},
    { name: "Defense Mastery", src: "img/skills/skill-12.png"},
    { name: "Defense Time", src: "img/skills/skill-12.png"},
    { name: "Deflector Plate", src: "img/skills/skill-53.png"},
    { name: "Dodge Acceleration", src: "img/skills/skill-10.png"},
    { name: "Drain Guard", src: "img/skills/skill-18.png"},
    { name: "Dual-Horn Pressure", src: "img/skills/skill-13.png"},
    { name: "Eagle Rush", src: "img/skills/skill-14.png"},
    { name: "Emergency Turbo", src: "img/skills/skill-18.png"},
    { name: "Emperor of Violence", src: "img/skills/skill-3.png"},
    { name: "Energy Efficiency", src: "img/skills/skill-17.png"},
    { name: "Excessive Armor", src: "img/skills/skill-15.png"},
    { name: "Exoshell", src: "img/skills/skill-12.png"},
    { name: "Fiery Morale", src: "img/skills/skill-39.png"},
    { name: "Grace of the Land", src: "img/skills/skill-12.png"},
    { name: "Healing Mastery", src: "img/skills/skill-2.png"},
    { name: "Heavy Armor", src: "img/skills/skill-7.png"},
    { name: "Hot Soul", src: "img/skills/skill-33.png"},
    { name: "Instant Charge", src: "img/skills/skill-18.png"},
    { name: "Just a Moment", src: "img/skills/skill-2.png"},
    { name: "Large-Scale Shock", src: "img/skills/skill-22.png"},
    { name: "Magic Transmutation", src: "img/skills/skill-11.png"},
    { name: "Mana a Mano Evasion", src: "img/skills/skill-10.png"},
    { name: "Megashout", src: "img/skills/skill-24.png"},
    { name: "Mimic Technique", src: "img/skills/skill-13.png"},
    { name: "Monarch's Heart", src: "img/skills/skill-35.png"},
    { name: "Natural Guard", src: "img/skills/skill-5.png"},
    { name: "Needle Shell", src: "img/skills/skill-13.png"},
    { name: "Nimbleness Itself", src: "img/skills/skill-10.png"},
    { name: "Non-Stop Barrage", src: "img/skills/skill-15.png"},
    { name: "One with the Land", src: "img/skills/skill-18.png"},
    { name: "Physical Absorber", src: "img/skills/skill-5.png"},
    { name: "Positional Attacker", src: "img/skills/skill-1.png"},
    { name: "Power Pick-Me-Up", src: "img/skills/skill-11.png"},
    { name: "Queen of Mercy", src: "img/skills/skill-2.png"},
    { name: "Queenly Pride", src: "img/skills/skill-11.png"},
    { name: "Recharge Cheer", src: "img/skills/skill-40.png"},
    { name: "Reckless Attack", src: "img/skills/skill-11.png"},
    { name: "Reserve Life", src: "img/skills/skill-33.png"},
    { name: "Revenge Impetus", src: "img/skills/skill-26.png"},
    { name: "Royal Aide", src: "img/skills/skill-26.png"},
    { name: "Royal Charisma", src: "img/skills/skill-21.png"},
    { name: "Sacrificial Heal", src: "img/skills/skill-2.png"},
    { name: "Sandsmoke", src: "img/skills/skill-13.png"},
    { name: "Scattered Healing", src: "img/skills/skill-2.png"},
    { name: "Sense of Danger", src: "img/skills/skill-23.png"},
    { name: "Spiritual Absorber", src: "img/skills/skill-5.png"},
    { name: "Strength Support", src: "img/skills/skill-23.png"},
    { name: "Strike Shirker", src: "img/skills/skill-10.png"},
    { name: "Super Explosion", src: "img/skills/skill-27.png"},
    { name: "Supercharged", src: "img/skills/skill-11.png"},
    { name: "Surprise Attack", src: "img/skills/skill-11.png"},
    { name: "Systematic Defense", src: "img/skills/skill-18.png"},
    { name: "Tactical Eye", src: "img/skills/skill-11.png"},
    { name: "Terran Warrior", src: "img/skills/skill-11.png"},
    { name: "Ultranull Shield", src: "img/skills/skill-5.png"},
    { name: "Underworld Rage", src: "img/skills/skill-11.png"},
    { name: "Wild Tendencies", src: "img/skills/skill-44.png"},
    { name: "Wolf Spirit", src: "img/skills/skill-14.png"},
];