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
    { name: "Medical Mind", src: "img/skills/skill-3.png", boostAmount: 30, description: function() {return `Boosts amount of HP healed from using healing Arts by ${variableAmountSkill}%.`;}},
    { name: "Speedy Recovery", src: "img/skills/skill-26.png", boostAmount: 15, description: function() {return `Boosts speed of ally revival by 40% and raises Healing by ${variableAmountSkill}.`;}},
    { name: "Ninja Healer", src: "img/skills/skill-13.png", boostAmount: 50, description: function() {return `Reduces aggro generated from healing Arts by ${variableAmountSkill}%.`;}},
    { name: "Eternal Formation", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Increases field effect duration by ${variableAmountSkill}%.`;}},
];

const skillsTactician = [
    { name: "Ethereal Ability", src: "img/skills/skill-30.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ether Arts by ${variableAmountSkill}%.`;}},
    { name: "Shieldrender", src: "img/skills/skill-6.png", boostAmount: 100, description: function() {return `Adds ${variableAmountSkill}% chance for attack to be unblockable.`;}},
    { name: "Eternal Curse", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Extends duration timers of debuffs applied to enemies by ${variableAmountSkill}%.`;}},
    { name: "Inevitable Evitability", src: "img/skills/skill-10.png", boostAmount: 10, description: function() {return `${variableAmountSkill}% chance to evade enemy attack.`;}},
];

const skillsHeavyGuard = [
    { name: "Defensive Soul", src: "img/skills/skill-7.png", boostAmount: 20, description: function() {return `Boosts Physical Defense by ${variableAmountSkill}%.`;}},
    { name: "I'll Protect You", src: "img/skills/skill-5.png", boostAmount: 30, description: function() {return `Reduces damage taken by allies in a fixed radius by ${variableAmountSkill}%.`;}},
    { name: "Aggravator", src: "img/skills/skill-13.png", description: function() {return `Accrues Aggro every second.`;}},
    { name: "Tenacious Blocker", src: "img/skills/skill-5.png", boostAmount: 50, description: function() {return `Boosts Block Rate by ${variableAmountSkill} percentage points when HP is at 30% or lower.`;}},
];

const skillsOgre = [
    { name: "Insult to Injury", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: ["toppleEnemy"], boostAmount: 150, description: function() {return `Boosts damage dealt when attacking toppled enemies by ${variableAmountSkill}%.`;}},
    { name: "Fury Smash", src: "img/skills/skill-15.png", boostAmount: 45, description: function() {return `Increases reaction success rate by ${variableAmountSkill} percentage points`;}},
    { name: "Fighting Prowess", src: "img/skills/skill-29.png", boostAmount: 50, description: function() {return `Boosts damage dealt by physical Arts by ${variableAmountSkill}%.`;}},
    { name: "Dynamite Spirit", src: "img/skills/skill-11.png", boostAmount: 60, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when HP is at 90% or higher.`;}},
];

const skillsFlashFencer = [
    { name: "First Move Wins", src: "img/skills/skill-3.png", boostType: "multiplierDamage", group: "1", flags: [undefined], timeThreshold: 30, boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% for the first 30 seconds of battle.`;}},
    { name: "Fighting Instinct", src: "img/skills/skill-32.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["usedTalents"], boostIncrement: 50, boostMax: 200, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when using a Talent Art (up to a maximum of 200%).`;}},
    { name: "Critical Strike", src: "img/skills/skill-4.png", boostType: "multiplierDamage", group: "critical", flags: ["critical"], boostAmount: 50, description: function() {return `Increases critical hit damage bonus by ${variableAmountSkill} percentage points.`;}},
    { name: "Capable Hands", src: "img/skills/skill-32.png", boostAmount: 100, description: function() {return `Fills Talent Art recharge gauge by ${variableAmountSkill}% at start of battle.`;}},
];

const skillsWarMedic = [
    { name: "Recovery Engine", src: "img/skills/skill-2.png", boostAmount: 50, description: function() {return `Removing debuffs boosts own Healing Power by ${variableAmountSkill}% (up to a maximum of 150%).`;}},
    { name: "Rescue License", src: "img/skills/skill-26.png", boostAmount: 40, description: function() {return `Increases HP restored when reviving an ally by ${variableAmountSkill}%.`;}},
    { name: "Healing License", src: "img/skills/skill-17.png", boostAmount: 30, description: function() {return `Boosts amount of HP healed from using healing Arts by ${variableAmountSkill}%.`;}},
    { name: "Antibody System", src: "img/skills/skill-24.png", boostAmount: 50, description: function() {return `Shortens duration of debuffs on self by ${variableAmountSkill}%.`;}},
];

const skillsGuardianCommander = [
    { name: "I'll Help", src: "img/skills/skill-13.png", boostAmount: 20, description: function() {return `Take attacks for nearby allies with low HP. Damage taken is reduced by ${variableAmountSkill}%.`;}},
    { name: "Soldier's Potential", src: "img/skills/skill-33.png", boostAmount: 1.4, description: function() {return `When HP is at 30% or lower, restore ${variableAmountSkill}% HP each second.`;}},
    { name: "Protector's Pride", src: "img/skills/skill-18.png", boostAmount: 50, description: function() {return `Boosts recharge speed by ${variableAmountSkill}% when non-Defenders are targeted.`;}},
    { name: "Mind for Guarding", src: "img/skills/skill-7.png", boostAmount: 20, description: function() {return `Increases damage reduction rate when blocking by ${variableAmountSkill} percentage points.`;}},
];

const skillsThaumaturge = [
    { name: "Wheel of Rebirth", src: "img/skills/skill-2.png", boostAmount: 900, description: function() {return `Heals all allies using ${variableAmountSkill}% of Healing Power when executing a Burst.`;}},
    { name: "Qinggong", src: "img/skills/skill-10.png", boostAmount: 35, description: function() {return `Boosts evasion by ${variableAmountSkill}% while moving.`;}},
    { name: "Ultimate Qigong", src: "img/skills/skill-34.png", boostType: "multiplierDamage", group: "defenseReductionPhysical", flags: ["none"], boostAmount: 50, description: function() {return `When landing a hit, deals damage as though enemy's physical defense was ${variableAmountSkill}% lower.`;}},
    { name: "Life-Saving Fists", src: "img/skills/skill-14.png", boostAmount: 100, description: function() {return `Heals self when auto-attack hits, to a maximum of ${variableAmountSkill}% of Healing Power.`;}},
];

const skillsYumsmith = [
    { name: "Bangsplosion!", src: "img/skills/skill-22.png", boostAmount: 300, description: function() {return `Boosts field dissolution damage by ${variableAmountSkill}%.`;}},
    { name: "Sappy-Sappy Drain!", src: "img/skills/skill-44.png", boostAmount: 25, description: function() {return `Increases success rate of debuff effects by ${variableAmountSkill} percentage points.`;}},
    { name: "Slicey-Dicey!", src: "img/skills/skill-22.png", boostAmount: 200, description: function() {return `Boosts field damage dealt by ${variableAmountSkill}%.`;}},
    { name: "Preppy-Preppy Link!", src: "img/skills/skill-35.png", description: function() {return `Fills Chain Attack gauge slightly on Art execution.`;}},
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
    { name: "Prowess Gambit", src: "img/skills/skill-11.png", boostAmount: 30, description: function() {return `Buffing an ally boosts damage dealt by ${variableAmountSkill}% (up to a maximum of 200%).`;}},
    { name: "Sapping Gambit", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Extends duration timers of debuffs applied to enemies by ${variableAmountSkill}%.`;}},
    { name: "Strengthening Gambit", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Extends duration of buff effects issued by self by ${variableAmountSkill}%.`;}},
    { name: "Preemption Gambit", src: "img/skills/skill-23.png", boostAmount: 100, description: function() {return `${variableAmountSkill}% chance to grant all allies Attack Up on a preemptive attack.`;}},
];

const skillsStalker = [
    { name: "Swift Death", src: "img/skills/skill-11.png", boostAmount: 70, description: function() {return `Deals ${variableAmountSkill}% more damage against enemies who are at 30% HP or less.`;}},
    { name: "In Cold Blood", src: "img/skills/skill-25.png", boostAmount: 150, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when attacking an enemy suffering from Bleed.`;}},
    { name: "Evasion Expertise", src: "img/skills/skill-10.png", boostAmount: 50, description: function() {return `${variableAmountSkill}% chance to evade ranged attacks.`;}},
    { name: "Serene Heart", src: "img/skills/skill-13.png", boostAmount: 50, description: function() {return `Reduces aggro generated from attacks by ${variableAmountSkill}%.`;}},
];

const skillsLoneExile = [
    { name: "Goading Attack", src: "img/skills/skill-13.png", boostAmount: 60, description: function() {return `Boosts aggro generated from dealing damage by ${variableAmountSkill}%.`;}},
    { name: "Maniac", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: [undefined], levelThreshold: 99, boostAmount: 50, description: function() {return `Boosts damage dealt when attacking higher-level enemies by ${variableAmountSkill}%.`;}},
    { name: "Returning the Favor", src: "img/skills/skill-36.png", boostAmount: 250, description: function() {return `When nearby ally is attacked, deal ${variableAmountSkill}% of attack in damage to enemy.`;}},
    { name: "Natural Selection", src: "img/skills/skill-12.png", boostAmount: 30, description: function() {return `Reduces damage taken by ${variableAmountSkill}% when HP is at 30% or lower.`;}},
];

const skillsIncursor = [
    { name: "Adroit Blade", src: "img/skills/skill-11.png", boostAmount: 8, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when landing a critical hit (up to a maximum of 150%).`;}},
    { name: "Floating Kill", src: "img/skills/skill-4.png", boostAmount: 100, description: function() {return `Boosts Critical Rate by ${variableAmountSkill}% when attacking a launched enemy.`;}},
    { name: "Vigilance", src: "img/skills/skill-14.png", boostAmount: 150, description: function() {return `Boosts Critical Rate of auto-attacks by ${variableAmountSkill}%.`;}},
    { name: "Eye for Weak Points", src: "img/skills/skill-4.png", boostAmount: 2, description: function() {return `Each successful attack boosts Critical Rate by ${variableAmountSkill}% of initial value (up to a maximum of 100%).`;}},
];

const skillsLostVanguard = [
    { name: "Come an' Get Me!", src: "img/skills/skill-13.png", boostAmount: 200, description: function() {return `When blocking, deals ${variableAmountSkill}% of Attack damage to enemy, drawing aggro.`;}},
    { name: "Now That's Tactics!", src: "img/skills/skill-1.png", boostAmount: 10, description: function() {return `At start of Chain Attack, increases TP by ${variableAmountSkill}.`;}},
    { name: "Never Again!", src: "img/skills/skill-42.png", boostAmount: 20, description: function() {return `Grants ${variableAmountSkill}% chance to absorb attacks dealt to allies within range.`;}},
    { name: "Stay Right There!", src: "img/skills/skill-16.png", boostAmount: 20, description: function() {return `When taking damage, ${variableAmountSkill}% chance to inflict Knockback on assailant.`;}},
];

const skillsSignifer = [
    { name: "Cheer Up, Everyone", src: "img/skills/skill-39.png", boostAmount: 50, description: function() {return `Restores nearby allies' HP on Art execution. Amount healed is equal to ${variableAmountSkill}% of user's Healing.`;}},
    { name: "I've Got Your Backs", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Extends duration of buff effects issued by self by ${variableAmountSkill}%.`;}},
    { name: "All About Support", src: "img/skills/skill-1.png", description: function() {return `Increases the no. of Field Arts that can be set to the Arts Palette by 1.`;}},
    { name: "We Can Do Better", src: "img/skills/skill-2.png", boostAmount: 5, description: function() {return `Restores ${variableAmountSkill}% of HP when a buff is applied.`;}},
];

const skillsFiona = [
    { name: "Cheer Up, Everyone", src: "img/skills/skill-39.png", boostAmount: 60, description: function() {return `Restores nearby allies' HP on Art execution. Amount healed is equal to ${variableAmountSkill}% of user's Healing.`;}},
    { name: "I've Got Your Backs", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Extends duration of buff effects issued by self by ${variableAmountSkill}%.`;}},
    { name: "Brightest Star", src: "img/skills/skill-11.png", boostAmount: 60, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when HP is at 90% or higher.`;}},
    { name: "We Can Do Better", src: "img/skills/skill-2.png", boostAmount: 5, description: function() {return `Restores ${variableAmountSkill}% of HP when a buff is applied.`;}},
];

const skillsSoulhackerClass = [
    { name: "Soul Hack", src: "img/skills/skill-1.png", description: function() {return `When defeating a unique monster, gain a Skill or Art.`;}},
    { name: "Power Soul", src: "img/skills/skill-3.png", description: function() {return `Changes role to Attacker, giving high attack, but low accuracy.`;}},
    { name: "None", src: "img/skills/skill-0.png"},
    { name: "None", src: "img/skills/skill-0.png"},
];

const skillsTriton = [
    { name: "Underworld Rage", src: "img/skills/skill-11.png", boostAmount: 100, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% each time an ally is incapacitated (to a maximum of 200%).`;}},
    { name: "Amazing Growth", src: "img/skills/skill-11.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["timeElapsed"], boostIncrement: 0.5, boostMax: 60, description: function() {return `Boosts damage dealt based on the amount of battle time elapsed.`;}},
    { name: "Recharge Cheer", src: "img/skills/skill-40.png", boostAmount: 12, description: function() {return `${variableAmountSkill}% chance to keep recharge when using Art.`;}},
    { name: "Magic Transmutation", src: "img/skills/skill-11.png", boostAmount: 100, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when afflicted with a debuff.`;}},
];

const skillsMartialArtist = [
    { name: "Storm and Stress", src: "img/skills/skill-11.png", boostAmount: 20, description: function() {return `Each time you perform a cancel, boosts damage dealt by ${variableAmountSkill}% (to a maximum of 150%).`;}},
    { name: "Flashing Punch", src: "img/skills/skill-14.png", description: function() {return `Chained auto-attacks increase attack speed. Auto-attack interval is also shortened.`;}},
    { name: "Feline Righting Reflex", src: "img/skills/skill-41.png", boostAmount: 100, description: function() {return `Ignore Blowdown and Launch by somersaulting. Also has ${variableAmountSkill}% chance to grant Attack Up.`;}},
    { name: "Frenzied Combo", src: "img/skills/skill-18.png", boostAmount: 30, description: function() {return `On critical hit, recharge Art used by ${variableAmountSkill}%.`;}},
];

const skillsTroubadour = [
    { name: "Endsong", src: "img/skills/skill-18.png", boostAmount: 100, description: function() {return `Recharges all allies' Arts by ${variableAmountSkill}% when incapacitated.`;}},
    { name: "Dance of Barrages", src: "img/skills/skill-40.png", boostAmount: 12, description: function() {return `${variableAmountSkill}% chance to keep recharge when using Art.`;}},
    { name: "Dance of Life", src: "img/skills/skill-18.png", boostAmount: 100, description: function() {return `Own Arts gain ${variableAmountSkill}% recharge when an ally is incapacitated.`;}},
    { name: "Swiftsong", src: "img/skills/skill-10.png", boostAmount: 20, description: function() {return `Boosts all allies' accuracy and evasion by ${variableAmountSkill}%. Does not stack.`;}},
];

const skillsSeraph = [
    { name: "Beast Mode", src: "img/skills/skill-1.png", boostAmount: 25, description: function() {return `Grants Awakening when damage taken exceeds ${variableAmountSkill}% of max HP.`;}},
    { name: "Got the Guts", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: [undefined], hpThresholdBelow: 85, boostAmount: 100, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when HP is at 85% or lower.`;}},
    { name: "Greatest Warrior", src: "img/skills/skill-43.png", boostAmount: 35, description: function() {return `Boosts damage by ${variableAmountSkill}% for every enemy in battle (max. 200%).`;}},
    { name: "Universal Annihilation", src: "img/skills/skill-11.png", boostType: "multiplierDamage", group: "1", flags: ["toppleEnemy", "launchEnemy"], boostAmount: 150, description: function() {return `Boosts damage dealt to toppled and launched targets by ${variableAmountSkill}%.`;}},
];

const skillsMachineAssassin = [
    { name: "Chaos Chain", src: "img/skills/skill-11.png", boostAmount: 30, description: function() {return `Debuffing an enemy boosts damage dealt by ${variableAmountSkill}% (up to a maximum of 150%).`;}},
    { name: "Phantom Strike", src: "img/skills/skill-6.png", boostAmount: 100, description: function() {return `Adds ${variableAmountSkill}% chance for attack to be unblockable.`;}},
    { name: "Cursed Edge", src: "img/skills/skill-11.png", boostAmount: 70, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when attacking a debuffed enemy.`;}},
    { name: "Anti-Erosion System", src: "img/skills/skill-44.png", boostAmount: 50, description: function() {return `Grants ${variableAmountSkill}% resistance to all debuffs.`;}},
];

const skillsLifesage = [
    { name: "Steadfast Feelings", src: "img/skills/skill-2.png", boostAmount: 50, description: function() {return `Restores nearby allies' HP on Art execution. Amount healed is equal to ${variableAmountSkill}% of user's Healing.`;}},
    { name: "Instant Regen+", src: "img/skills/skill-45.png", boostAmount: 100, description: function() {return `25% chance to heal using ${variableAmountSkill}% of Healing Power upon taking damage.`;}},
    { name: "Enhanced Cellular Stimulus", src: "img/skills/skill-46.png", boostAmount: 200, boostAmountExtra: 50, description: function() {return `${variableAmountSkillExtra}% chance on hit to deal ${variableAmountSkill}% of Healing Power as defense-bypassing damage.`;}},
    { name: "Abundant Oceans", src: "img/skills/skill-39.png", boostAmount: 15, description: function() {return `Reduces damage to allies by ${variableAmountSkill}%, and boosts HP recovery by ${variableAmountSkill}% (does not stack).`;}},
];

const skillsRoyalSummoner = [
    { name: "Elemental Boost", src: "img/skills/skill-20.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["elementalsDischarged"], boostIncrement: 40, boostMax: 400, description: function() {return `Each elemental discharge boosts damage dealt by ${variableAmountSkill}% (up to a maximum of 400%).`;}},
    { name: "Essence of Ether", src: "img/skills/skill-31.png", boostAmount: 30, boostAmountExtra: 15, description: function() {return `Boosts allies' damage by ${variableAmountSkill}% and reduces enemy Block Rate by ${variableAmountSkillExtra}% (does not stack).`;}},
    { name: "Fortified Ether Guard", src: "img/skills/skill-8.png", boostAmount: 20, description: function() {return `Boosts Ether Defense by ${variableAmountSkill}%.`;}},
    { name: "Here I Shall Stand", src: "img/skills/skill-20.png", boostAmount: 100, boostAmountExtra: 50, description: function() {return `Boosts elemental damage by ${variableAmountSkill}% and elemental buff effects by ${variableAmountSkillExtra}%.`;}},
];

const skillsNoponicChampion = [
    { name: "Tit For Tat", src: "img/skills/skill-18.png", boostAmount: 20, description: function() {return `Whenever an ally in a fixed radius is attacked, boosts recharge of one Art at random by ${variableAmountSkill}%.`;}},
    { name: "Nanomachine Repair", src: "img/skills/skill-45.png", boostAmount: 8, description: function() {return `Adds 25% chance to restore HP by ${variableAmountSkill}% when evading.`;}},
    { name: "Velocity Gear", src: "img/skills/skill-10.png", boostAmount: 10, description: function() {return `All Arts except Talent Art gain ${variableAmountSkill}% recharge when evading.`;}},
    { name: "Overclock", src: "img/skills/skill-18.png", boostAmount: 20, description: function() {return `Boosts recharge rate by ${variableAmountSkill}% each time the character is incapacitated (to a maximum of 25%).`;}},
];

const skillsLapidarist = [
    { name: "Star Treatment", src: "img/skills/skill-45.png", boostAmount: 70, description: function() {return `On critical hit, heal nearby allies to max of ${variableAmountSkill}% of Healing Power.`;}},
    { name: "Beaming Edge", src: "img/skills/skill-4.png", boostAmount: 20, boostAmountExtra: 50, description: function() {return `Boosts all allies' Critical Rate by ${variableAmountSkill}% and critical hit damage by ${variableAmountSkillExtra} perc. points. (Does not stack.)`;}},
    { name: "Fascinator", src: "img/skills/skill-3.png", boostAmount: 70, description: function() {return `Boosts damage dealt when in range of a field effect by ${variableAmountSkill}%.`;}},
    { name: "Ring à la Mode", src: "img/skills/skill-1.png", description: function() {return `Increases the maximum number of fields that can be set from 3 to 4. (Does not stack.)	`;}},
];

const skillsGrandMarshal = [
    { name: "Right Back At You", src: "img/skills/skill-19.png", boostAmount: 200, description: function() {return `When nearby ally is attacked, deal ${variableAmountSkill}% of attack in damage to enemy.`;}},
    { name: "Natural Born Warrior", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Grants a large increase to damage dealt the more enemies target you (up to a maximum of 300%).`;}},
    { name: "Gentleman's Valor", src: "img/skills/skill-19.png", boostAmount: 20, description: function() {return `Grants Awakening when damage taken exceeds ${variableAmountSkill}% of max HP.`;}},
    { name: "Mechanical Rhythm", src: "img/skills/skill-10.png", boostAmount: 15, description: function() {return `${variableAmountSkill}% chance for own attack to become a guaranteed hit and to evade enemy attacks during it.`;}},
];

const skillsMasterDriver = [
    { name: "Raging Flame", src: "img/skills/skill-11.png", boostAmount: 8, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when landing a critical hit (up to a maximum of 150%).`;}},
    { name: "Lightspeed Blade", src: "img/skills/skill-4.png", boostType: "multiplierDamage", group: "critical", flags: ["critical"], boostAmount: 50, pierce: true, description: function() {return `On critical, ignore enemy defense. Also increases critical hit damage bonus by ${variableAmountSkill} percentage points.`;}},
    { name: "Heroic Spirit", src: "img/skills/skill-1.png", boostAmount: 150, boostAmountExtra: 30, description: function() {return `If an ally is down/has low HP, deal ${variableAmountSkill}% more damage and take ${variableAmountSkillExtra}% less damage.`;}},
    { name: "Flash and Flame", src: "img/skills/skill-4.png", boostType: "additive", boostStat: "crit", boostAmount: 20, boostTypeExtra: "multiplierDamage", groupExtra: "critical", flagsExtra: ["critical"], boostAmountExtra: 50, description: function() {return `Increases Critical Rate by ${variableAmountSkill} percentage points and critical hit damage by ${variableAmountSkillExtra} percentage points.`;}},
];

const skillsLuckySevenAttacker = [
    { name: "Cut In Half", src: "img/skills/skill-27.png", boostAmount: 5.91, description: function() {return `${variableAmountSkill}% chance to inflict Doom on hit. Does not apply to bosses and unique monsters.`;}},
    { name: "Opening Stand", src: "img/skills/skill-18.png", boostAmount: 20, description: function() {return `On critical hit, recharge Art used by ${variableAmountSkill}%.`;}},
    { name: "Realm of the Master", src: "img/skills/skill-4.png", boostAmount: 10, description: function() {return `Boosts damage dealt and Critical Rate by ${variableAmountSkill}% on critical hit`;}},
    { name: "Silent Sword", src: "img/skills/skill-13.png", boostAmount: 40, description: function() {return `Reduces aggro generated from attacks by ${variableAmountSkill}%.`;}},
];

const skillsLuckySevenDefender = [
    { name: "Flash of Avoidance", src: "img/skills/skill-19.png", boostAmount: 200, description: function() {return `Deals ${variableAmountSkill}% of Attack damage when you evade an attack.`;}},
    { name: "I Will Take Over", src: "img/skills/skill-13.png", boostAmount: 25, boostAmountExtra: 30, description: function() {return `Gains ${variableAmountSkill} aggro per second and increases attacking aggro generation by ${variableAmountSkillExtra}%.`;}},
    { name: "Never Again", src: "img/skills/skill-10.png", boostAmount: 2, description: function() {return `Boosts evasion by ${variableAmountSkill}% (up to a maximum of 50%) each time user takes damage.`;}},
    { name: "Unwavering Will", src: "img/skills/skill-33.png", boostAmount: 30, description: function() {return `Reduces damage taken by allies in a fixed radius by ${variableAmountSkill}%.`;}},
];

const skillsLuckySevenHealer = [
    { name: "Encouragement", src: "img/skills/skill-26.png", description: function() {return `When helping an incapacitated ally, revives them with the Invincible buff.`;}},
    { name: "Extinguishing Bloodlust", src: "img/skills/skill-13.png", boostAmount: 40, description: function() {return `Reduces aggro generated from attacks by ${variableAmountSkill}%.`;}},
    { name: "Indomitable Will", src: "img/skills/skill-1.png", boostAmount: 100, boostAmountExtra: 25, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% and reduces damage taken by ${variableAmountSkillExtra}% while an ally is incapacitated or their HP is at 30% or lower.`;}},
    { name: "Sword of Protection", src: "img/skills/skill-11.png", boostAmount: 10, description: function() {return `Healing an ally boosts damage dealt by ${variableAmountSkill}% (up to a maximum of 100%).`;}},
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
    { name: "Acceleating Attacks", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when using an Art right after a Quick Move maneuver.`;}},
    { name: "Accelerator Organ", src: "img/skills/skill-9.png", boostAmount: 15, description: function() {return `${variableAmountSkill}% chance for own attack to become a guaranteed hit and to evade enemy attacks during it.`;}},
    { name: "Action Reaction", src: "img/skills/skill-18.png", boostAmount: 50, description: function() {return `Boosts all Arts recharge by ${variableAmountSkill}% when hit by a combo reaction.`;}},
    { name: "Air Body", src: "img/skills/skill-1.png", boostAmount: 30, description: function() {return `Boosts Agility by ${variableAmountSkill}%.`;}},
    { name: "Amazing Growth", src: "img/skills/skill-11.png", boostType: "multiplierDamageIncremental", group: "1", flags: ["timeElapsed"], boostIncrement: 0.5, boostMax: 60, description: function() {return `Boosts damage dealt based on the amount of battle time elapsed.`;}},
    { name: "Apothecary's Wisdom", src: "img/skills/skill-17.png", boostAmount: 50, description: function() {return `Boosts amount of HP healed from using healing Arts by ${variableAmountSkill}%.`;}},
    { name: "Aquatic Warrior", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when in the water.`;}},
    { name: "Attack Heal", src: "img/skills/skill-14.png", boostAmount: 100, description: function() {return `Heals self when auto-attack hits, to a maximum of ${variableAmountSkill}% of Healing Power.`;}},
    { name: "Attack Mastery", src: "img/skills/skill-11.png", boostIncrement: 0.5, boostMax: 50, description: function() {return `Boosts damage dealt for each Soulhacker Art or Skill learned.`;}},
    { name: "Awakilling", src: "img/skills/skill-26.png", boostAmount: 100, boostAmountExtra: 30, description: function() {return `After own revival, deal ${variableAmountSkill}% more damage and take ${variableAmountSkillExtra}% less damage for a fixed time.`;}},
    { name: "Battle Fever", src: "img/skills/skill-23.png", boostAmount: 100, description: function() {return `${variableAmountSkill}% chance to grant Awakening and Critical Rate Up on enemy defeat.`;}},
    { name: "Berserker Mindset", src: "img/skills/skill-11.png", boostIncrement: 50, boostMax: 20, description: function() {return `Deal 50% more damage but take ${variableAmountSkill}% more damage.`;}},
    { name: "Blasting Stomp", src: "img/skills/skill-50.png", boostAmount: 150, description: function() {return `When activating Quick Move, deals ${variableAmountSkill}% of Attack as damage to any enemies within 5m.`;}},
    { name: "Breath of an Era", src: "img/skills/skill-18.png", boostAmount: 30, description: function() {return `Boosts recharge speed by ${variableAmountSkill}% when in the water.`;}},
    { name: "Celestial Conqueror", src: "img/skills/skill-11.png", boostAmount: 45, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when HP is at 100%.`;}},
    { name: "Counter Puncher", src: "img/skills/skill-10.png", boostAmount: 15, description: function() {return `Adds ${variableAmountSkill}% chance to grant Power Charge when evading.`;}},
    { name: "Creeping Predator", src: "img/skills/skill-11.png", boostAmount: 25, description: function() {return `Boosts damage dealt when attacking from behind by ${variableAmountSkill}%.`;}},
    { name: "Damage Share", src: "img/skills/skill-33.png", boostAmount: 15, description: function() {return `When low on HP, a random ally takes the damage you receive. The damage is boosted by ${variableAmountSkill}%.`;}},
    { name: "Dangerous Claws", src: "img/skills/skill-4.png", boostType: "additive", boostStat: "crit", boostAmount: 20, boostTypeExtra: "multiplierDamage", groupExtra: "critical", flagsExtra: ["critical"], boostAmountExtra: 50, description: function() {return `Increases Critical Rate by ${variableAmountSkill} percentage points and critical hit damage by ${variableAmountSkillExtra} percentage points.`;}},
    { name: "Debuff Counter", src: "img/skills/skill-21.png", boostAmount: 50, description: function() {return `Shortens duration of debuffs on self by ${variableAmountSkill}%.`;}},
    { name: "Deeply Tactical", src: "img/skills/skill-1.png", boostAmount: 10, description: function() {return `At start of Chain Attack, increases TP by ${variableAmountSkill}.`;}},
    { name: "Defense Mastery", src: "img/skills/skill-12.png", boostIncrement: 0.2, boostMax: 20, description: function() {return `Reduces damage taken for each Soulhacker Art or Skill learned.`;}},
    { name: "Defense Time", src: "img/skills/skill-12.png", boostAmount: 20, description: function() {return `Reduces damage taken by ${variableAmountSkill}% when recharge for all Arts is depleted.`;}},
    { name: "Deflector Plate", src: "img/skills/skill-53.png", boostAmount: 15, description: function() {return `When blocking, adds ${variableAmountSkill}% chance to reflect attack. (Absorbed attacks cannot be reflected.)`;}},
    { name: "Dodge Acceleration", src: "img/skills/skill-10.png", boostAmount: 15, description: function() {return `Adds ${variableAmountSkill}% chance to grant Fast Recharge when evading.`;}},
    { name: "Drain Guard", src: "img/skills/skill-18.png", boostAmount: 10, description: function() {return `On blocking, boosts recharge of one Art at random by ${variableAmountSkill}%.`;}},
    { name: "Dual-Horn Pressure", src: "img/skills/skill-13.png", description: function() {return `Accrues Aggro every second.`;}},
    { name: "Eagle Rush", src: "img/skills/skill-14.png", description: function() {return `Chained auto-attacks increase attack speed. Auto-attack interval is also shortened.`;}},
    { name: "Emergency Turbo", src: "img/skills/skill-18.png", boostAmount: 60, description: function() {return `Boosts healing Arts recharge speed by ${variableAmountSkill}% when an ally is at low HP.`;}},
    { name: "Emperor of Violence", src: "img/skills/skill-3.png", boostAmount: 20, description: function() {return `Boosts Attack by ${variableAmountSkill}%.`;}},
    { name: "Energy Efficiency", src: "img/skills/skill-17.png", boostAmount: 30, boostAmountExtra: 50, description: function() {return `Reduces healing Art effects by ${variableAmountSkill}% but makes recharge ${variableAmountSkillExtra}% faster.`;}},
    { name: "Excessive Armor", src: "img/skills/skill-15.png", boostAmount: 70, description: function() {return `Adds ${variableAmountSkill}% chance to block enemy combo reactions.`;}},
    { name: "Exoshell", src: "img/skills/skill-12.png", boostAmount: 10, description: function() {return `Reduces damage taken by ${variableAmountSkill}% per enemy defeated (max. 20%).`;}},
    { name: "Fiery Morale", src: "img/skills/skill-39.png", boostAmount: 75, description: function() {return `Heal ${variableAmountSkill}% of all allies' HP when defeating an enemy.`;}},
    { name: "Grace of the Land", src: "img/skills/skill-12.png", boostAmount: 30, description: function() {return `Reduces damage taken by allies in a fixed radius by ${variableAmountSkill}%.`;}},
    { name: "Healing Mastery", src: "img/skills/skill-2.png", boostIncrement: 0.5, boostMax: 50, description: function() {return `Boosts amount of HP healed for each Soulhacker Art or Skill learned.`;}},
    { name: "Heavy Armor", src: "img/skills/skill-7.png", boostAmount: 10, description: function() {return `Increases Physical Defense and Ether Defense by ${variableAmountSkill} percentage points.`;}},
    { name: "Hot Soul", src: "img/skills/skill-33.png", boostAmount: 70, description: function() {return `${variableAmountSkill}% chance to survive a KO with 1 HP and five seconds of invincibility (once per battle, does not stack).`;}},
    { name: "Instant Charge", src: "img/skills/skill-18.png", boostAmount: 100, description: function() {return `Own Arts gain ${variableAmountSkill}% recharge when an ally is incapacitated.`;}},
    { name: "Just a Moment", src: "img/skills/skill-2.png", boostAmount: 5, description: function() {return `Restores ${variableAmountSkill}% of HP when a buff is applied.`;}},
    { name: "Large-Scale Shock", src: "img/skills/skill-22.png", boostAmount: 100, description: function() {return `Extends area of effect of attack Arts which have one by ${variableAmountSkill}%.`;}},
    { name: "Magic Transmutation", src: "img/skills/skill-11.png", boostAmount: 100, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when afflicted with a debuff.`;}},
    { name: "Mana a Mano Evasion", src: "img/skills/skill-10.png", boostAmount: 15, description: function() {return `Boosts evasion rate by ${variableAmountSkill}% when attacked by targeted enemy.`;}},
    { name: "Megashout", src: "img/skills/skill-24.png", boostAmount: 100, description: function() {return `${variableAmountSkill}% chance to inflict Target Lock on enemies whenever an ally's HP becomes critical. Has cooldown.`;}},
    { name: "Mimic Technique", src: "img/skills/skill-13.png", boostAmount: 100, description: function() {return `Reduces aggro on self by ${variableAmountSkill}% when an ally is incapacitated.`;}},
    { name: "Monarch's Heart", src: "img/skills/skill-35.png", boostAmount: 30, description: function() {return `Boosts maximum HP by ${variableAmountSkill}%.`;}},
    { name: "Natural Guard", src: "img/skills/skill-5.png", boostAmount: 40, description: function() {return `Boosts Block Rate by ${variableAmountSkill}%.`;}},
    { name: "Needle Shell", src: "img/skills/skill-13.png", boostAmount: 200, description: function() {return `When blocking, deals ${variableAmountSkill}% of Attack damage to enemy, drawing aggro.`;}},
    { name: "Nimbleness Itself", src: "img/skills/skill-10.png", boostAmount: 30, description: function() {return `Boosts evasion by ${variableAmountSkill}% while Quick Move is active.`;}},
    { name: "Non-Stop Barrage", src: "img/skills/skill-15.png", boostAmount: 100, description: function() {return `Grants ${variableAmountSkill}% resistance to combos and reactions while Art is active.`;}},
    { name: "One with the Land", src: "img/skills/skill-18.png", boostAmount: 30, description: function() {return `Boosts recharge speed by ${variableAmountSkill}% when on land.`;}},
    { name: "Physical Absorber", src: "img/skills/skill-5.png", boostAmount: 25, description: function() {return `When blocking, adds ${variableAmountSkill}% chance to absorb a physical attack.`;}},
    { name: "Positional Attacker", src: "img/skills/skill-1.png", boostAmount: 2, description: function() {return `Increases the no. of positional Arts that can be set to the Arts Palette by ${variableAmountSkill}.`;}},
    { name: "Power Pick-Me-Up", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% after receiving no damage for a set time.`;}},
    { name: "Queen of Mercy", src: "img/skills/skill-2.png", boostAmount: 20, description: function() {return `Boosts Healing by ${variableAmountSkill}%.`;}},
    { name: "Queenly Pride", src: "img/skills/skill-11.png", boostIncrement: 25, boostMax: 300, description: function() {return `Grants a medium increase to damage dealt the more enemies target you (up to a maximum of 300%).`;}},
    { name: "Recharge Cheer", src: "img/skills/skill-40.png", boostAmount: 12, description: function() {return `${variableAmountSkill}% chance to keep recharge when using Art.`;}},
    { name: "Reckless Attack", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}%, but reduces max HP by half.`;}},
    { name: "Reserve Life", src: "img/skills/skill-33.png", boostAmount: 40, description: function() {return `Restores ${variableAmountSkill}% of HP when at low HP. Has cooldown.`;}},
    { name: "Revenge Impetus", src: "img/skills/skill-26.png", description: function() {return `Applies Target Lock to all enemies upon own revival. Has cooldown.`;}},
    { name: "Royal Aide", src: "img/skills/skill-26.png", description: function() {return `Boosts ally revival speed for each incapacitated ally`;}},
    { name: "Royal Charisma", src: "img/skills/skill-21.png", description: function() {return `Extends duration of Break, Topple, Launch, Daze whenever Art hits.`;}},
    { name: "Sacrificial Heal", src: "img/skills/skill-2.png", boostAmount: 100, description: function() {return `Heal ${variableAmountSkill}% of all allies' HP when incapacitated.`;}},
    { name: "Sandsmoke", src: "img/skills/skill-13.png", boostAmount: 4, description: function() {return `Reduce aggro toward self by ${variableAmountSkill}% when auto-attack hits.`;}},
    { name: "Scattered Healing", src: "img/skills/skill-2.png", boostAmount: 200, description: function() {return `25% chance to heal nearby allies upon taking damage, using ${variableAmountSkill}% of Healing Power.`;}},
    { name: "Sense of Danger", src: "img/skills/skill-23.png", boostAmount: 100, description: function() {return `${variableAmountSkill}% chance to grant 4 random buff(s) when an ally is incapacitated.`;}},
    { name: "Spiritual Absorber", src: "img/skills/skill-5.png", boostAmount: 25, description: function() {return `When blocking, adds ${variableAmountSkill}% chance to absorb an ether attack.`;}},
    { name: "Strength Support", src: "img/skills/skill-23.png", boostAmount: 35, description: function() {return `Boosts power of buff effects issued by self by ${variableAmountSkill}%.`;}},
    { name: "Strike Shirker", src: "img/skills/skill-10.png", boostAmount: 45, description: function() {return `Boosts evasion by ${variableAmountSkill}% while Art is active.`;}},
    { name: "Super Explosion", src: "img/skills/skill-27.png", boostAmount: 1600, description: function() {return `Deals ${variableAmountSkill}% of Attack in damage to nearby enemies when incapacitated.`;}},
    { name: "Supercharged", src: "img/skills/skill-11.png", boostAmount: 15, description: function() {return `Boosts damage dealt for each Art that's currently fully recharged`;}},
    { name: "Surprise Attack", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Boosts damage against enemies performing Arts by ${variableAmountSkill}%.`;}},
    { name: "Systematic Defense", src: "img/skills/skill-18.png", boostAmount: 60, description: function() {return `Boosts recharge speed by ${variableAmountSkill}% when non-Defenders are targeted.`;}},
    { name: "Tactical Eye", src: "img/skills/skill-11.png", boostIncrement: 15, boostMax: 200, description: function() {return `Boosts damage by ${variableAmountSkill}% for every enemy in battle (max. 200%).`;}},
    { name: "Terran Warrior", src: "img/skills/skill-11.png", boostAmount: 50, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% when on land.`;}},
    { name: "Ultranull Shield", src: "img/skills/skill-5.png", boostAmount: 5, description: function() {return `When blocking, adds ${variableAmountSkill}% chance to reduce damage to 0.`;}},
    { name: "Underworld Rage", src: "img/skills/skill-11.png", boostIncrement: 100, boostMax: 200, description: function() {return `Boosts damage dealt by ${variableAmountSkill}% each time an ally is incapacitated (to a maximum of 200%).`;}},
    { name: "Wild Tendencies", src: "img/skills/skill-44.png", boostAmount: 50, description: function() {return `Grants ${variableAmountSkill}% resistance to all debuffs.`;}},
    { name: "Wolf Spirit", src: "img/skills/skill-14.png", description: function() {return `Own auto-attack rate increases for each ally with the same role as self.`;}},
];