const talentArts = [
    { name: "Overclock Buster", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Gemini Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Healing Ring", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Tidal Wave", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Mad Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Pressure Drop", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Saber Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Technical Heal", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Deflector Field", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Demise Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Sword of Valor", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Violent Streak", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Soulfire", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Refreshing Rain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Blossom Dance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Supreme Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Thunder Steel", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Cry of Faith", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Final Countdown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Raging Force", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glittering Melody", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Empyrean Salvo", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Viral Vector", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Divine Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Element Genesis", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Shining Refrain", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Pride of Place", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"}
];

const talentArtsNoah = [
    { name: "Infinity Blade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Unlimited Sword", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"}
];

const talentArtsMio = [
    { name: "Dominion Flower", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-aoe-attack.png"}
];

const artsSwordfighter = [
    { name: "Ground Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Sword Strike", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Edge Thrust", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Air Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shadow Eye", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsZephyr = [
    { name: "Butterfly Blade", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Air Fang", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Wide Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glow Ring", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Speed Demon", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMedicGunner = [
    { name: "Myopic Screen", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Group Heal", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Power Ring", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Ether Cannon", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Vortex", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsTactician = [
    { name: "Overfall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Stormy Skies", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Hazy Figure", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Avenging Eagle", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dark Banner", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsHeavyGuard = [
    { name: "Bull Rush", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Crash Out", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Uppercut Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Variable Turret", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Solid Stance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsOgre = [
    { name: "Big Impact", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hammerhead", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Giant Swing", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Cannonball", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Maximum Voltage", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsFlashFencer = [
    { name: "Cross Impact", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Null Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Hidden Thorn", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Revolution Edge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Acceleration", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
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
    { name: "Quickdraw", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dead Set", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Fatal Barrage", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Superstorm", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Demolition", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
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
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLostVanguard = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsSignifer = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
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
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsTroubadour = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsSeraph = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsMachineAssassin = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLifesage = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsRoyalSummoner = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsNoponicChampion = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLapidarist = [
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "xxxxxxxxxx", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
];

const artsLuckySevenAttacker = [
    { name: "Gravity Blow", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-gravity-blow.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dimension Ripper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-dimension-ripper.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Tachyon Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-tachyon-slash-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Power Raiser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-power-raiser-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Night Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-night-breaker-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Harmonic Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-harmonic-wave-attacker.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Final Lucky Seven", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-final-lucky-seven.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsLuckySevenDefender = [
    { name: "Gravity Blow", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-gravity-blow.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dimension Ripper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-dimension-ripper.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Tachyon Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-tachyon-slash-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Power Raiser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-power-raiser-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Night Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-night-breaker-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Harmonic Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-harmonic-wave-defender.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Final Lucky Seven", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-final-lucky-seven.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsLuckySevenHealer = [
    { name: "Gravity Blow", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-gravity-blow.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Dimension Ripper", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-dimension-ripper.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Tachyon Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-tachyon-slash-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Power Raiser", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-power-raiser-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Night Breaker", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-night-breaker-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Harmonic Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-harmonic-wave-healer.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Final Lucky Seven", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-final-lucky-seven.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
];

const artsMasterKeves = [
    { name: "None", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/reaction/art-blank.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ground Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Shadow Eye", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Myopic Screen", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-daze.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ether Cannon", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Crash Out", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Solid Stance", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hidden Thorn", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Cross Impact", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Multi Blast", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Advanced Cooldown", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Noble Taunt", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shield Bash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Energy Grenade", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Flashback", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Demolition", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Quickdraw", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Gale Slash", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Soaring Tempest", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-launch.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Tyrant Cross", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Fatal Bite", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Summon Element", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Elemental Discharge", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Rigid Slicer", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Vivid Carve", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"}
];

const artsMasterAgnus = [
    { name: "None", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/reaction/art-blank.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Wide Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glow Ring", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Dark Banner", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Overfall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Giant Swing", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-knockback.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Maximum Voltage", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Violent Flurry", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Spearpoint Thrust", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "No Love Lost", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hornet", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Staying Power", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Night Hunt", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Aerial Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Glitter Stream", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Shield Wall", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-defend.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Mighty Beat", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-smash.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Aureole", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Resonant Flag", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Impulse Wave", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Jackal Claw", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Way Home", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-burst.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Ring o' Roses", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Flamelord", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Crimson Lance", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-topple.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hydro Blast", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blowdown.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Aqua Mind", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-buff.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Lustrous Spike", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Tri-Slash", recharge: "img/arts/recharge/art-agnus.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-break.png", aoe: "img/arts/aoe/art-blank.png"}
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
    { name: "Heal Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Trick Shot", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
    { name: "Hyper Reload", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-field.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-field.png"},
    { name: "Cure Bullet", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-heal.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-aoe-attack.png"},
    { name: "Surprise Beat", recharge: "img/arts/recharge/art-keves.png", type: "img/arts/type/art-attack.png", reaction: "img/arts/reaction/art-blank.png", aoe: "img/arts/aoe/art-blank.png"},
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