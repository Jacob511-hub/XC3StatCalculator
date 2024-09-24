# Xenoblade Chronicles 3 Stats & Damage Calculator

This is a calculator to help you experiment with team building in Xenoblade Chronicles 3 with ease.

**TRY IT OUT HERE: [GitHub Pages](https://jacob511-hub.github.io/XC3StatCalculator/)**

## Description

- This is a webpage designed to allow players of Xenoblade Chronicles 3 to simulate party compositions and battle conditions to produce the stat values and damage numbers that would be produced by the game under the same circumstances without needing to invest the time and resources in-game themselves to test different setups.
- Users can customize almost everything the game allows them to, including Classes, Skills, Arts, gems, accessories, and more for each character.
- This is in order to assist players in understanding various mechanics and allow for ease of experimentation for finding what will produce better results while minimizing the time and resource investments that would otherwise be necessary for the user to determine the same results in-game.
- **THIS WEBPAGE CONTAINS SPOILERS PERTAINING TO CLASSES, HEROES, ARTS, AND OTHER MECHANICS THAT ARE OBTAINED IN XENOBLADE CHRONICLES 3 AND XENOBLADE CHRONICLES 3: FUTURE REDEEMED. USER DISCRETION IS ADVISED FOR THOSE WHO HAVE NOT COMPLETED XENOBLADE CHRONICLES 3 AND XENOBLADE CHRONICLES 3: FUTURE REDEEMED.**

![ProjectPhoto1](https://github.com/user-attachments/assets/e53d7f2c-53cd-4116-8ced-10db232382ab)

## Usage

### Character:
- Select one of the characters at the top of the page to begin customizing that character.
- (Ouroboros forms and Future Redeemed characters are not yet implemented).
- Changes made to each character are saved individually and do not overwrite or affect each other.
- Changes made are saved to the user's browser and are retained after refreshing the page.

### Class:
- The selected character's Class can be changed, affecting their stats, Skills, Class Arts, and available Master Arts.
- Changing the current Hero functions identically.
- (Class Ranks cannot be be changed at this time and all classes are locked to Rank 20).
- The current Class's weapon can be upgraded (including weapons that cannot normally be upgraded. Weapon upgrades are applied to all weapons used by the character's current Arts).

![ProjectPhoto2](https://github.com/user-attachments/assets/2ce05924-5301-4d3b-9a6f-ede9a5aa243f)

### Skills:
- The character's current Class Skills can be viewed for their effects and conditions.
Class Skills cannot be changed without changing the Class.
- Three slots for Master Skills can be used to equip the character with any combination of up to three Master Skills (The same Master Skill cannot be equipped more than once).
- The Soulhacker Class can have its second Class Skill changed.
- Heroes cannot equip Master Skills.
- The "?" button next to the Skills shows a list of all currently equipped Skills and their descriptions.

### Arts:
- The current character can equip three Class Arts, a Talent Art, and up to three Master Arts.
- Class Arts can be selected from the Class's list of Arts.
- Master Arts can be selected from a list of available Arts depending on the Class being used.
- The same Art cannot be equipped more than once.
- Heroes cannot change their Talent Art and cannot set any Master Arts.

### Equipment:
- The character can equip up to three gems and up to three accessories to modify their stats and/or damage multipliers.
- The same gem cannot be equipped more than once.
- The same accessory cannot be equipped more than once.
- Heroes can change accessories, but not gems.
- (Effects of different ranks/rarities not currently implemented).

### Conditions:
- Conditions that can affect the character's damage during battle are listed in a menu and grouped into various categories.
- Character and Enemy buffs and debuffs can be toggled and have their strength increased to reflect the effects of equipment such as Swelling Blessing.
- Other conditions such as the character's position, the enemy's type, and the enemy's defenses can also be set.
- Checks and incremental values that act as the trigger for the effects of different Skills and accessories, such as if the attack was a critical hit, if it was blocked, the character's current remaining HP, or how many enemies are present, can also be modified.
- The character's level can also be set from 1 to 99, affecting their stats.

![ProjectPhoto4](https://github.com/user-attachments/assets/2d983e54-db1f-4635-819e-afeb6117f7ce)

### Damage:
- The damage of the character's Auto-Attacks, Master Arts, Class Arts, Talent Art, Fusion Arts, and Chain Art are calculated and displayed.
- Damage is recalculated when the user presses the green "Calculate" button or when changing characters. Changes in damage will not be reflected until damage is recalculated.

### Other:
- A button is provided within the webpage itself that guides the user through these functionalities with visual aids and highlighting the areas where the user can find them.

## Source Code

- Source code can be found on [GitHub](https://github.com/Jacob511-hub/XC3StatCalculator)

## Installation and Usage

To download a local copy of the code to view and edit, you can clone the repository using Git.

**1. Clone the repository**
```
https://github.com/Jacob511-hub/XC3StatCalculator.git
```
**2. Navigate to the folder**
```
cd XC3StatCalculator
```
**3. Open index.html**

This will let you view the current state of the page in your web browser (Chrome recommended).
- For macOS/Linux:
```
open index.html
```
- For Windows:
```
start index.html
```
Or alternatively, navigate to the folder where it was saved and open index.html from there.

## Credits

- Thank you to [Sameer Ahmed](https://github.com/sameer-ahmd) for helping me with various technical aspects and guiding me through certain parts that had been causing trouble.
- Credit to both the [Xeno Series Wiki](https://www.xenoserieswiki.org/) and [Xenoblade Wiki](https://xenoblade.fandom.com/) for having information regarding the stats, numbers, and formulas used in the calculations performed by this page.
- Credit also goes to sainisoham27 for creating the [Google Drive Folder](https://drive.google.com/drive/folders/1skV2Fnt5EBIUW3B_wsDmE-bJhDgXqd9Y) containing assets taken from Xenoblade Chronicles 3 that are used in this page.
