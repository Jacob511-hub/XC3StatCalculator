const talentArts = [
    { name: "Overclock Buster", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 1050, attribute: "physical", boostType: "multiplierDamage", group: "1", flags: ["dazeEnemy"], boostAmount: 200, class: "Swordfighter"},
    { name: "Gemini Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Healing Ring", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field"},
    { name: "Tidal Wave", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 700, attribute: "ether"},
    { name: "Mad Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 0, attribute: "buff"},
    { name: "Pressure Drop", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Saber Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-blank.png", ratio: 525, attribute: "physical"},
    { name: "Technical Heal", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 250, attribute: "heal"},
    { name: "Deflector Field", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
    { name: "Demise Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Sword of Valor", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 1050, attribute: "physical"},
    { name: "Violent Streak", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 700, attribute: "ether"},
    { name: "Soulfire", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "ether"},
    { name: "Refreshing Rain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 700, attribute: "ether"},
    { name: "Blossom Dance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Supreme Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Thunder Steel", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 700, attribute: "ether"},
    { name: "Cry of Faith", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
    { name: "Final Countdown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 500, attribute: "physical"},
    { name: "Raging Force", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Glittering Melody", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
    { name: "Empyrean Salvo", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 700, attribute: "physical"},
    { name: "Viral Vector", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 700, attribute: "physical"},
    { name: "Divine Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 1050, attribute: "ether"},
    { name: "Element Genesis", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 1050, attribute: "physical"},
    { name: "Shining Refrain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 700, attribute: "physical"},
    { name: "Pride of Place", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 560, attribute: "ether"}
];

const talentArtsNoah = [
    { name: "Infinity Blade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 1000, attribute: "physical"},
    { name: "Unlimited Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"}
];

const talentArtsMio = [
    { name: "Dominion Flower", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 750, attribute: "ether"}
];

const artsSwordfighter = [
    { name: "Ground Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 440, attribute: "physical"},
    { name: "Sword Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png", ratio: 225, attribute: "physical"},
    { name: "Edge Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 180, attribute: "physical"},
    { name: "Air Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 425, attribute: "physical"},
    { name: "Shadow Eye", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
];

const artsZephyr = [
    { name: "Butterfly Blade", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 165, attribute: "physical"},
    { name: "Air Fang", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 250, attribute: "physical"},
    { name: "Wide Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 360, attribute: "physical"},
    { name: "Glow Ring", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "physical"},
    { name: "Speed Demon", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "stance"},
];

const artsMedicGunner = [
    { name: "Myopic Screen", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "ether"},
    { name: "Group Heal", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 225, attribute: "heal"},
    { name: "Power Ring", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field"},
    { name: "Ether Cannon", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 485, attribute: "ether"},
    { name: "Vortex", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 410, attribute: "ether"},
];

const artsTactician = [
    { name: "Overfall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 375, attribute: "ether"},
    { name: "Stormy Skies", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 245, attribute: "heal"},
    { name: "Hazy Figure", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field"},
    { name: "Avenging Eagle", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 310, attribute: "ether"},
    { name: "Dark Banner", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 165, attribute: "ether"},
];

const artsHeavyGuard = [
    { name: "Bull Rush", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "physical"},
    { name: "Crash Out", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 340, attribute: "physical"},
    { name: "Uppercut Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "physical"},
    { name: "Variable Turret", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "physical"},
    { name: "Solid Stance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
];

const artsOgre = [
    { name: "Big Impact", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png", ratio: 375, attribute: "physical"},
    { name: "Hammerhead", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 165, attribute: "physical"},
    { name: "Giant Swing", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "physical"},
    { name: "Cannonball", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "physical"},
    { name: "Maximum Voltage", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
];

const artsFlashFencer = [
    { name: "Cross Impact", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 180, attribute: "physical"},
    { name: "Null Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 275, attribute: "physical"},
    { name: "Hidden Thorn", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "physical"},
    { name: "Revolution Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 255, attribute: "physical"},
    { name: "Acceleration", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
];

const artsWarMedic = [
    { name: "Heal Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Multi Blast", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Advanced Cooldown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Cure Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Vital Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsGuardianCommander = [
    { name: "Noble Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shield Bash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Falcon Swoop", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Grand Protection", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Imperial Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsThaumaturge = [
    { name: "Rank Splitter", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Violent Flurry", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Divine Protection", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Leaping Current", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Spearpoint Thrust", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsYumsmith = [
    { name: "Extended Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Flashback", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Energy Grenade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Recharge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Determination", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsFullMetalJaguar = [
    { name: "Quickdraw", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 270, attribute: "ether", boostType: "multiplierDamage", group: "1", flags: ["positionFront"], boostAmount: 100},
    { name: "Dead Set", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff"},
    { name: "Fatal Barrage", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 340, attribute: "ether"},
    { name: "Superstorm", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "ether"},
    { name: "Demolition", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 440, attribute: "ether"},
];

const artsStrategos = [
    { name: "No Love Lost", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hornet", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Moondog", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Earth Bind", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Mirror Trap", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsStalker = [
    { name: "Landslide", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Staying Power", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Driving Arrow", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Rapid Shot", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Night Hunt", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLoneExile = [
    { name: "Demon Slayer", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Eye of the Storm", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Gale Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Soaring Tempest", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Jaws of Death", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsIncursor = [
    { name: "Reversal Edge", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glitter Stream", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sidewinder", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Aerial Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "physical"},
    { name: "Mystic Vision", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLostVanguard = [
    { name: "Shockwave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Mighty Beat", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Shield Wall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Electro Field", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Taunt Pulse", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsSignifer = [
    { name: "Resonant Flag", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Aureole", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Heal Harmony", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Illuminate", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Spirited Charge", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsSoulhackerA = [
    { name: "Aquaball", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Beast Howl", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Cavalry", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Desperate Charge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dig", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dino Flash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dino Storm", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Double Bite", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Double Slap", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Double Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dragon Gas", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Draining Vacuum", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dual Attack", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Fin of Fear", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Hard Dig", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Horn Dance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Life Plant", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Murder Knuckle", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Neck Slice", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Predation", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Psychowave", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Radiant Arts", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Raid Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Rhino Storm", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Snake Eyes", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Spider Web", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Spinning Bolt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Split Beam", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Tail Slap", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Thunderclap", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Toxic Gas", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Trout Hop", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Wild Wave", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsSoulhackerB = [
    { name: "None", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/reaction/art-blank.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Aquatic Missile", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Battle Pheromone", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Bomberhead", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Bubble Cloud", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Burrowing Rocket", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Butterfly Dust", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Cursed Cuisine", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dragon Decree", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Electric Skin", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Elimination Beam", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Ether Sphere", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Evasive Posture", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Gatling Peck", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hawk Shot", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Healing Rest", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Hydra Gas", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Hypno-Light", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Hypnotism", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Jet Stream", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "King's Bash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Last Fencer", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ministorm", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Piercing Laser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Pointy Stick", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Poison Spray", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Shark Shock", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Shell Guard", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sumo Press", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Transient Bond", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Trick Dart", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Vampire Bat", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Water Jet", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsMartialArtist = [
    { name: "Jackal Claw", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "physical"},
    { name: "Detonating Hit", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Impulse Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Destructive Charge", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Focus", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsTroubadour = [
    { name: "Autumn Rain", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Way Home", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ring o' Roses", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Twin Moons", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shadow Parade", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsSeraph = [
    { name: "Dragon's Snarl", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Crimson Lance", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Inferno Dance", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Flamelord", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 250, attribute: "physical", boostType: "multiplierDamage", group: "1", flags: ["positionFront"], boostAmount: 100},
    { name: "Leveling Fire", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMachineAssassin = [
    { name: "Tyrant Cross", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Fatal Bite", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Terror Onslaught", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Havoc Slayer", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Mega Crescent", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLifesage = [
    { name: "Saber Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Redemption", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Waterlily", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Hydro Blast", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Aqua Mind", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsRoyalSummoner = [
    { name: "Summon Element", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Elemental Discharge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shadow Stitch", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Starfall", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Power Effect", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsNoponicChampion = [
    { name: "Dual Flash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Refractive Edge", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Tri-Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Lustrous Spike", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dazzling Illusion", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLapidarist = [
    { name: "Blessed Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Rigid Slicer", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Prismatic Ring", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Golden Heart", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Vivid Carve", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLuckySevenAttacker = [
    { name: "Gravity Blow", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-gravity-blow.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 360, attribute: "ether"},
    { name: "Dimension Ripper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-dimension-ripper.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 680, attribute: "ether"},
    { name: "Tachyon Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-tachyon-slash-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 680, attribute: "ether"},
    { name: "Power Raiser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-power-raiser-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 0, attribute: "buff"},
    { name: "Night Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-night-breaker-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 800, attribute: "ether"},
    { name: "Harmonic Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-harmonic-wave-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 800, attribute: "ether"},
    { name: "Final Lucky Seven", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-final-lucky-seven.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 1750, attribute: "physical"},
];

const artsLuckySevenDefender = [
    { name: "Gravity Blow", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-gravity-blow.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 360, attribute: "ether"},
    { name: "Dimension Ripper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-dimension-ripper.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 680, attribute: "ether"},
    { name: "Tachyon Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-tachyon-slash-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 680, attribute: "ether"},
    { name: "Power Raiser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-power-raiser-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 0, attribute: "buff"},
    { name: "Night Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-night-breaker-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 800, attribute: "ether"},
    { name: "Harmonic Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-harmonic-wave-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 800, attribute: "ether"},
    { name: "Final Lucky Seven", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-final-lucky-seven.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 1750, attribute: "physical"},
];

const artsLuckySevenHealer = [
    { name: "Gravity Blow", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-gravity-blow.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 360, attribute: "ether"},
    { name: "Dimension Ripper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-dimension-ripper.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 680, attribute: "ether"},
    { name: "Tachyon Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-tachyon-slash-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 680, attribute: "ether"},
    { name: "Power Raiser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-power-raiser-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field"},
    { name: "Night Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-night-breaker-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 800, attribute: "ether"},
    { name: "Harmonic Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-harmonic-wave-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 800, attribute: "ether"},
    { name: "Final Lucky Seven", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-final-lucky-seven.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 1750, attribute: "physical"},
];

const artsMasterKeves = [
    { name: "None", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/reaction/art-blank.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ground Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 440, attribute: "physical", class: "Swordfighter"},
    { name: "Shadow Eye", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Swordfighter"},
    { name: "Myopic Screen", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "ether", class: "Medic Gunner"},
    { name: "Ether Cannon", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 485, attribute: "ether", class: "Medic Gunner"},
    { name: "Crash Out", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 340, attribute: "physical", class: "Heavy Guard"},
    { name: "Solid Stance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Heavy Guard"},
    { name: "Hidden Thorn", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "physical", class: "Flash Fencer"},
    { name: "Cross Impact", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 180, attribute: "physical", class: "Flash Fencer"},
    { name: "Multi Blast", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "ether", class: "War Medic"},
    { name: "Advanced Cooldown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field", class: "War Medic"},
    { name: "Noble Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Guardian Commander"},
    { name: "Shield Bash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "physical", class: "Guardian Commander"},
    { name: "Energy Grenade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 180, attribute: "ether", class: "Yumsmith"},
    { name: "Flashback", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png", ratio: 180, attribute: "physical", class: "Yumsmith"},
    { name: "Demolition", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 440, attribute: "ether", class: "Full Metal Jaguar"},
    { name: "Quickdraw", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 270, attribute: "ether", boostType: "multiplierDamage", group: "1", flags: ["positionFront"], boostAmount: 100, class: "Full Metal Jaguar"},
    { name: "Gale Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 340, attribute: "physical", class: "Lone Exile"},
    { name: "Soaring Tempest", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "physical", class: "Lone Exile"},
    { name: "Tyrant Cross", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 270, attribute: "physical", class: "Machine Assassin"},
    { name: "Fatal Bite", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "physical", class: "Machine Assassin"},
    { name: "Summon Element", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 180, attribute: "ether", class: "Royal Summoner"},
    { name: "Elemental Discharge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "ether", class: "Royal Summoner"},
    { name: "Rigid Slicer", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 180, attribute: "ether", class: "Lapidarist"},
    { name: "Vivid Carve", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "ether", class: "Lapidarist"}
];

const artsMasterAgnus = [
    { name: "None", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/reaction/art-blank.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Wide Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 360, attribute: "physical", class: "Zephyr"},
    { name: "Glow Ring", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "physical", class: "Zephyr"},
    { name: "Dark Banner", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 165, attribute: "ether", class: "Tactician"},
    { name: "Overfall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 375, attribute: "ether", class: "Tactician"},
    { name: "Giant Swing", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "physical", class: "Ogre"},
    { name: "Maximum Voltage", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Ogre"},
    { name: "Violent Flurry", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "physical", class: "Thaumaturge"},
    { name: "Spearpoint Thrust", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "physical", class: "Thaumaturge"},
    { name: "No Love Lost", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "ether", class: "Strategos"},
    { name: "Hornet", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "ether", class: "Strategos"},
    { name: "Staying Power", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field", class: "Stalker"},
    { name: "Night Hunt", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Stalker"},
    { name: "Aerial Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "physical", class: "Incursor"},
    { name: "Glitter Stream", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png", ratio: 250, attribute: "physical", class: "Incursor"},
    { name: "Shield Wall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Lone Exile"},
    { name: "Mighty Beat", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 250, attribute: "physical", class: "Lone Exile"},
    { name: "Aureole", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Signifer"},
    { name: "Resonant Flag", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Signifer"},
    { name: "Impulse Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 165, attribute: "physical", class: "Martial Artist"},
    { name: "Jackal Claw", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "physical", class: "Martial Artist"},
    { name: "Way Home", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "ether", class: "Troubadour"},
    { name: "Ring o' Roses", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png", ratio: 0, attribute: "field", class: "Troubadour"},
    { name: "Flamelord", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 250, attribute: "physical", boostType: "multiplierDamage", group: "1", flags: ["positionFront"], boostAmount: 100, class: "Seraph"},
    { name: "Crimson Lance", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png", ratio: 310, attribute: "physical", class: "Seraph"},
    { name: "Hydro Blast", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png", ratio: 400, attribute: "ether", class: "Lifesage"},
    { name: "Aqua Mind", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 0, attribute: "buff", class: "Lifesage"},
    { name: "Lustrous Spike", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 250, attribute: "physical", class: "Noponic Champion"},
    { name: "Tri-Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png", ratio: 165, attribute: "physical", class: "Noponic Champion"}
];

const artsEthel = [
    { name: "Cross Impact", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Swallowtail", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Silver Cyclone", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Acceleration", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Million Flash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Saber Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsValdi = [
    { name: "Heal Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 225, attribute: "heal"},
    { name: "Trick Shot", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 340, attribute: "ether"},
    { name: "Hyper Reload", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Cure Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png", ratio: 0, attribute: "buff"},
    { name: "Surprise Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png", ratio: 440, attribute: "physical", boostType: "multiplierDamage", group: "1", flags: ["enemyMachines"], boostAmount: 150},
    { name: "Technical Heal", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsZeon = [
    { name: "Shield Bash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Proud Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Celestial Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Noble Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Victory Shift", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Deflector Field", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsTeach = [
    { name: "Divine Protection", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Rank Splitter", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Furious Flash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Profound Strength", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "All-Slayer", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Demise Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsRikuManana = [
    { name: "Wok-a-Block", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Final Say", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Roasty-Toasty", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Ready-Steady", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hot Cuisine", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sharpest Tool", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsGray = [
    { name: "Demolition", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dead Set", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Vengeance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Showdown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Executioner", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Violent Streak", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsIsurd = [
    { name: "Gyreflow", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Razor Wind", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "No Love Lost", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Mirror Trap", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Moonshadow", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Soulfire", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsJuniper = [
    { name: "Downdraft", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Staying Power", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Liberation Arrow", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Night Hunt", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Landslide", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Refreshing Rain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsAshera = [
    { name: "Demon Slayer", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Inferno Wheel", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ascension Blade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Eye of the Storm", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Wind Sickle", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Blossom Dance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsAlexandria = [
    { name: "Sidewinder", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Etched Deep", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Luminous Illusion", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Reversal Edge", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Mirage Divide", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Supreme Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMonica = [
    { name: "Shockwave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Geo Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Taunt Pulse", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Bolt Flinger", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Lightning Strike", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Thunder Steel", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsFiona = [
    { name: "Resonant Flag", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Max Effort", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Unbreakable Heart", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Lightning Passion", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Illuminate", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Cry of Faith", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsTriton = [
    { name: "Captain Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Magnificent Fist", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Peril Punch", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Pirate Lariat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ultra Boost", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Final Countdown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsGhondor = [
    { name: "Detonating Hit", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hyper Dropkick", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Comet Punch", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Focus", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Rampaging Fists", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Raging Force", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMiyabi = [
    { name: "Empty Shell", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Snowdrift", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sweet Breeze", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Twin Moons", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shadow Parade", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glittering Melody", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsCammuravi = [
    { name: "Crimson Lance", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sturm und Drang", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Heavenly Spear", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Leveling Fire", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Searing Fury", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Empyrean Salvo", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsSegiri = [
    { name: "Fatal Bite", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Tyrant Cross", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Fury Reaper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Seventh Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hundred Shells", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Viral Vector", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsNia = [
    { name: "Saber Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Redemption", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Redeeming Bloom", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Last Hope", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Merciful Heart", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Divine Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMelia = [
    { name: "Summon Element", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Elemental Discharge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shadow Stitch", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Starlight Kick", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Power Effect", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Element Genesis", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsIno = [
    { name: "Starry Beat", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Afterglow", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Photon Storm", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dual Flash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dazzling Illusion", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shining Refrain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMasha = [
    { name: "Blessed Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Solid Silver", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Majestic Zone", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Platinum Shards", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Golden Heart", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Pride of Place", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"}
];

const artsShulk = [
    { name: "Stream Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Heavy Rush", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Slit Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Monado Rage", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Monado Armor", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Monado Buster", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsRex = [
    { name: "Anchor Shot", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Double Spinning Edge", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dual Blast", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Cross Blaze", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Rolling Smash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Infinity Blade", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsChain = [
    { name: "Brave Assault", class: "Swordfighter", character: "Noah", ratio: 1050, attribute: "physical"},
    { name: "Lightning Quick", class: "Zephyr", character: "Mio", ratio: 1050, attribute: "physical"},
    { name: "Pinion Primed", class: "Medic Gunner", character: "Eunie", ratio: 1050, attribute: "ether"},
    { name: "Art of Subjugation", class: "Tactician", character: "Taion", ratio: 1050, attribute: "ether"},
    { name: "Tyrant Wave", class: "Heavy Guard", character: "Lanz", ratio: 1050, attribute: "physical"},
    { name: "Bombshell Blitz", class: "Ogre", character: "Sena", ratio: 1050, attribute: "physical"},
    { name: "Wintry End", class: "Flash Fencer", character: "Ethel", ratio: 1050, attribute: "physical"},
    { name: "Bullet Hail", class: "War Medic", character: "Valdi", ratio: 1050, attribute: "ether"},
    { name: "Deflector Form", class: "Guardian Commander", character: "Zeon", ratio: 1050, attribute: "physical"},
    { name: "Dragon Unbound", class: "Thaumaturge", character: "Teach", ratio: 1050, attribute: "physical"},
    { name: "Noogie Storm", class: "Yumsmith", character: "Riku & Manana", ratio: 1050, attribute: "ether"},
    { name: "Ruthless Persecution", class: "Full Metal Jaguar", character: "Gray", ratio: 1050, attribute: "ether"},
    { name: "War of Attrition", class: "Strategos", character: "Isurd", ratio: 1050, attribute: "ether"},
    { name: "Radiant Cascade", class: "Stalker", character: "Juniper", ratio: 1050, attribute: "ether"},
    { name: "Saber Siege", class: "Lone Exile", character: "Ashera", ratio: 1050, attribute: "physical"},
    { name: "Whistling Blades", class: "Incursor", character: "Alexandria", ratio: 1050, attribute: "physical"},
    { name: "Lost Advent", class: "Lost Vanguard", character: "Monica", ratio: 1050, attribute: "physical"},
    { name: "Galactic Flight", class: "Signifer", character: "Fiona", ratio: 1050, attribute: "physical"},
    { name: "Barbarous Rage", class: "Soulhacker (Power)", character: "Triton", ratio: 1050, attribute: "physical"},
    { name: "Barbarous Rage", class: "Soulhacker (Strike)", ratio: 1050, attribute: "physical"},
    { name: "Barbarous Rage", class: "Soulhacker (Tough)", ratio: 1050, attribute: "physical"},
    { name: "Barbarous Rage", class: "Soulhacker (Dodge)", ratio: 1050, attribute: "physical"},
    { name: "Barbarous Rage", class: "Soulhacker (Heal)", ratio: 1050, attribute: "physical"},
    { name: "Barbarous Rage", class: "Soulhacker (Balanced)", ratio: 1050, attribute: "physical"},
    { name: "Avalanche Onslaught", class: "Martial Artist", character: "Ghondor", ratio: 1050, attribute: "physical"},
    { name: "Elegant Maelstrom", class: "Troubadour", character: "Miyabi", ratio: 1050, attribute: "ether"},
    { name: "The Indomitable", class: "Seraph", character: "Cammuravi", ratio: 1050, attribute: "physical"},
    { name: "Viscous Venom", class: "Machine Assassin", character: "Segiri", ratio: 1050, attribute: "physical"},
    { name: "Salvation's Ripple", class: "Lifesage", character: "Nia", ratio: 1050, attribute: "ether"},
    { name: "Ether Absolute", class: "Royal Summoner", character: "Melia", ratio: 1050, attribute: "ether"},
    { name: "Ino Unlimited", class: "Noponic Champion", character: "Ino", ratio: 1050, attribute: "physical"},
    { name: "Radiant Artificer", class: "Lapidarist", character: "Masha", ratio: 1050, attribute: "ether"},
    { name: "Liberation Edge", class: "Grand Marshal", character: "Shulk", ratio: 1050, attribute: "physical"},
    { name: "Deliverance Hew", class: "Master Driver", character: "Rex", ratio: 1050, attribute: "physical"},
];