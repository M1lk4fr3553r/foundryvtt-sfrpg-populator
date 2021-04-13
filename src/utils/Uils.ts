// NOTE:
// `stringContains()`, `fuzzyFindCompendiumAsync()`, `fuzzyFindItemAsync()`, `fuzzyFindSpellAsync()`, `parseSubtext()`
// forked from https://gitlab.com/TimToxopeus/sfrpg-statblock-parser/-/blob/develop/module/utils.js
export class Utils {

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    static shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    static stringContains(string, subString, bCaseSensitive = true) {
        if (bCaseSensitive) {
            return string.includes(subString);
        }
        return string.toLowerCase().includes(subString.toLowerCase());
    }

    /** Will try to find an entry in the specified compendium that matches all the terms, will return the first entry that does. */
    static async fuzzyFindCompendiumAsync(compendiumName, searchString) {
        if (!compendiumName) {
            Utils.log("No compendium name specified.");
            return null;
        }

        if (!searchString) {
            Utils.log("No search string specified.");
            return null;
        }

        let compendium = game.packs.find(element => element.metadata.name.includes(compendiumName));
        if (compendium == undefined) {
            Utils.log("Could not find compendium named " + compendiumName + ".");
            return null;
        }

        // Let the compendium load
        await compendium.getIndex();

        let rawString = this.parseSubtext(searchString)[0];
        let terms = rawString.toLowerCase().replace("(ex)","").replace("(su)","").replace("(sp)","").trim().replace(/[*,;()\[\]'"]/g,"").split(' ');

        let entryWeWant = null;
        for (let entry of compendium.index) {

            var rawEntryName = this.parseSubtext(entry.name)[0];

            // A translation module is active
            if(game.modules.get('babele')?.active) {
                for (let key in compendium.translations) {
                    let translation = compendium.translations[key];

                    if (translation.name == entry.name) {
                        rawEntryName = this.parseSubtext(translation.id)[0];
                        break;
                    }
                }
            }

            let entryName = rawEntryName.toLowerCase().replace("(ex)","").replace("(su)","").replace("(sp)","").trim();
            let entryTerms = entryName.replace(/[*,;()\[\]'"]/g,"").split(' ');

            if (terms.length !== entryTerms.length) {
                continue;
            }

            let bAllTermsPresent = true;
            for (let term of terms) {
                if (!entryTerms.includes(term)) {
                    bAllTermsPresent = false;
                    break;
                }
            }

            if (!bAllTermsPresent) {
                continue;
            }

            entryWeWant = compendium.getEntry(entry._id);
            break;
        }

        if (entryWeWant != undefined) {
            //PopulatorUtils.log("Item " + JSON.stringify(entryWeWant));
        } else {
            //PopulatorUtils.log("Item " + entryName + " not found.");
        }
        return entryWeWant;
    }

    static async fuzzyFindItemAsync(itemName) {
        itemName = itemName.toLowerCase();

        // Common substitutions
        itemName = itemName.replace("grenades", "grenade");
        if (itemName.endsWith("grenade 1")) {
            itemName = itemName.replace("grenade 1", "grenade i");
        } else if (itemName.endsWith("grenade 2")) {
            itemName = itemName.replace("grenade 2", "grenade ii");
        } else if (itemName.endsWith("grenade 3")) {
            itemName = itemName.replace("grenade 3", "grenade iii");
        } else if (itemName.endsWith("grenade 4")) {
            itemName = itemName.replace(" 4", "grenade iv");
        } else if (itemName.endsWith("grenade 5")) {
            itemName = itemName.replace("grenade 5", "grenade v");
        }

        itemName = itemName.replace("batteries", "battery");
        if (Utils.stringContains(itemName, "battery", false)) {
            if (!Utils.stringContains(itemName, "capacity", false)) {
                itemName += ", standard";
            }
        }
        return this.fuzzyFindCompendiumAsync("equipment", itemName);
    }

    static async fuzzyFindRaceAsync(raceName) {
        raceName = raceName.replace("/ ", "/");
        raceName = raceName.replace(" /", "/");
        return this.fuzzyFindCompendiumAsync("races", raceName);
    }

    static async fuzzyFindSpellAsync(spellName) {
        spellName = spellName.replace("/ ", "/");
        spellName = spellName.replace(" /", "/");
        return this.fuzzyFindCompendiumAsync("spells", spellName);
    }

    static parseSubtext = (value) => {
        let startSubtextIndex = value.indexOf('(');
        let endSubtextIndex = value.indexOf(')');
        if (startSubtextIndex > -1 && endSubtextIndex > startSubtextIndex) {
            let baseValue = value.substring(0, startSubtextIndex).trim();
            let subValue = value.substring(startSubtextIndex+1, endSubtextIndex).trim();
            return [baseValue, subValue];
        } else {
            return [value];
        }
    }

    static log(message) {
        console.log("POPULATOR | " + message);
    }
}