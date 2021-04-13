export class WeaponFactory {
    static makeUnarmedStrike() {
        return unarmedStrikeTemplate;
    }
    static makeNaturalWeapons() {
        return naturalWeaponsTemplate;
    }
}
// Templates
const unarmedStrikeTemplate = {
    "name": "Unarmed strike",
    "type": "weapon",
    "data": {
        "description": {
            "chat": "",
            "gmnotes": "",
            "short": "",
            "value": "<p>An unarmed strike can be dealt with any limb or appendage. Unarmed strikes deal nonlethal damage, and the damage from an unarmed strike is considered weapon damage for the purposes of effects that give you a bonus to weapon damage rolls.</p>",
            "unidentified": ""
        },
        "source": "CRB pg. 190",
        "type": "",
        "quantity": null,
        "bulk": "-",
        "price": 0,
        "level": 0,
        "attuned": false,
        "equipped": true,
        "equippable": false,
        "identified": true,
        "attributes": {
            "sturdy": false,
            "customBuilt": false,
            "size": "medium",
            "dex": {
                "mod": ""
            },
            "hp": {
                "value": 6,
                "max": ""
            },
            "hardness": {
                "value": ""
            },
            "ac": {
                "value": ""
            }
        },
        "activation": {
            "type": "action",
            "cost": 1,
            "condition": ""
        },
        "duration": {
            "value": "",
            "units": ""
        },
        "target": {
            "value": "",
            "type": ""
        },
        "area": {
            "value": null,
            "units": null,
            "shape": "",
            "effect": ""
        },
        "range": {
            "value": null,
            "units": "touch",
            "additional": "",
            "per": ""
        },
        "uses": {
            "value": 0,
            "max": 0,
            "per": ""
        },
        "isActive": null,
        "ability": "",
        "actionType": "mwak",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": {
            "parts": [],
            "effect": ""
        },
        "damage": {
            "parts": [
                [
                    "1d3",
                    "bludgeoning"
                ]
            ]
        },
        "formula": "",
        "save": {
            "type": "",
            "dc": "",
            "descriptor": "negate"
        },
        "descriptors": [],
        "capacity": {
            "value": 0,
            "max": 0
        },
        "usage": {
            "value": 0,
            "per": ""
        },
        "modifiers": [],
        "container": {
            "contents": [],
            "storage": [],
            "isOpen": true
        },
        "weaponType": "basicM",
        "weaponCategory": "",
        "special": "",
        "properties": {
            "one": false,
            "two": false,
            "amm": false,
            "aeon": false,
            "analog": false,
            "antibiological": false,
            "archaic": true,
            "aurora": false,
            "automatic": false,
            "blast": false,
            "block": false,
            "boost": false,
            "breach": false,
            "breakdown": false,
            "bright": false,
            "cluster": false,
            "conceal": false,
            "deconstruct": false,
            "deflect": false,
            "disarm": false,
            "double": false,
            "drainCharge": false,
            "echo": false,
            "entangle": false,
            "explode": false,
            "extinguish": false,
            "feint": false,
            "fiery": false,
            "firstArc": false,
            "flexibleLine": false,
            "force": false,
            "freeHands": false,
            "fueled": false,
            "grapple": false,
            "gravitation": false,
            "guided": false,
            "harrying": false,
            "holyWater": false,
            "hybrid": false,
            "ignite": false,
            "indirect": false,
            "injection": false,
            "integrated": false,
            "line": false,
            "living": false,
            "lockdown": false,
            "mind-affecting": false,
            "mine": false,
            "mire": false,
            "modal": false,
            "necrotic": false,
            "nonlethal": true,
            "operative": false,
            "penetrating": false,
            "polarize": false,
            "polymorphic": false,
            "powered": false,
            "professional": false,
            "punchGun": false,
            "qreload": false,
            "radioactive": false,
            "reach": false,
            "recall": false,
            "regrowth": false,
            "relic": false,
            "reposition": false,
            "shape": false,
            "shatter": false,
            "shells": false,
            "shield": false,
            "sniper": false,
            "stun": false,
            "subtle": false,
            "sunder": false,
            "swarm": false,
            "tail": false,
            "teleportive": false,
            "thought": false,
            "throttle": false,
            "thrown": false,
            "trip": false,
            "unbalancing": false,
            "underwater": false,
            "unwieldy": false,
            "variantBoost": false,
            "wideLine": false
        },
        "proficient": true,
        "abilityMods": {
            "parts": []
        }
    },
    "flags": {},
    "effects": []
};
const naturalWeaponsTemplate = {
    "name": "Unarmed strike (natural weapons)",
    "type": "weapon",
    "data": {
        "description": {
            "chat": "",
            "gmnotes": "",
            "short": "",
            "value": "<p>A special unarmed strike that deals lethal damage, doesn&rsquo;t count as archaic, and threatens squares. Gain a special version of the Weapon Specialization feat with this unarmed strike at 3rd level, allowing them to add 1&ndash;1/2 &times; their character level to their damage rolls for this unarmed strike (instead of just adding their character level, as usual).</p>",
            "unidentified": ""
        },
        "source": "CRB pg. 190",
        "type": "",
        "quantity": null,
        "bulk": "-",
        "price": 0,
        "level": 0,
        "attuned": false,
        "equipped": true,
        "equippable": false,
        "identified": true,
        "attributes": {
            "sturdy": false,
            "customBuilt": false,
            "size": "medium",
            "dex": {
                "mod": ""
            },
            "hp": {
                "value": 6,
                "max": ""
            },
            "hardness": {
                "value": ""
            },
            "ac": {
                "value": ""
            }
        },
        "activation": {
            "type": "action",
            "cost": 1,
            "condition": ""
        },
        "duration": {
            "value": "",
            "units": ""
        },
        "target": {
            "value": "",
            "type": ""
        },
        "area": {
            "value": null,
            "units": null,
            "shape": "",
            "effect": ""
        },
        "range": {
            "value": null,
            "units": "touch",
            "additional": "",
            "per": ""
        },
        "uses": {
            "value": 0,
            "max": 0,
            "per": ""
        },
        "isActive": null,
        "ability": "",
        "actionType": "mwak",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": {
            "parts": [],
            "effect": ""
        },
        "damage": {
            "parts": [
                [
                    "1d3",
                    "bludgeoning"
                ]
            ]
        },
        "formula": "",
        "save": {
            "type": "",
            "dc": "",
            "descriptor": "negate"
        },
        "descriptors": [],
        "capacity": {
            "value": 0,
            "max": 0
        },
        "usage": {
            "value": 0,
            "per": ""
        },
        "modifiers": [],
        "container": {
            "contents": [],
            "storage": [],
            "isOpen": true
        },
        "weaponType": "basicM",
        "weaponCategory": "",
        "special": "",
        "properties": {
            "one": false,
            "two": false,
            "amm": false,
            "aeon": false,
            "analog": false,
            "antibiological": false,
            "archaic": false,
            "aurora": false,
            "automatic": false,
            "blast": false,
            "block": false,
            "boost": false,
            "breach": false,
            "breakdown": false,
            "bright": false,
            "cluster": false,
            "conceal": false,
            "deconstruct": false,
            "deflect": false,
            "disarm": false,
            "double": false,
            "drainCharge": false,
            "echo": false,
            "entangle": false,
            "explode": false,
            "extinguish": false,
            "feint": false,
            "fiery": false,
            "firstArc": false,
            "flexibleLine": false,
            "force": false,
            "freeHands": false,
            "fueled": false,
            "grapple": false,
            "gravitation": false,
            "guided": false,
            "harrying": false,
            "holyWater": false,
            "hybrid": false,
            "ignite": false,
            "indirect": false,
            "injection": false,
            "integrated": false,
            "line": false,
            "living": false,
            "lockdown": false,
            "mind-affecting": false,
            "mine": false,
            "mire": false,
            "modal": false,
            "necrotic": false,
            "nonlethal": false,
            "operative": false,
            "penetrating": false,
            "polarize": false,
            "polymorphic": false,
            "powered": false,
            "professional": false,
            "punchGun": false,
            "qreload": false,
            "radioactive": false,
            "reach": false,
            "recall": false,
            "regrowth": false,
            "relic": false,
            "reposition": false,
            "shape": false,
            "shatter": false,
            "shells": false,
            "shield": false,
            "sniper": false,
            "stun": false,
            "subtle": false,
            "sunder": false,
            "swarm": false,
            "tail": false,
            "teleportive": false,
            "thought": false,
            "throttle": false,
            "thrown": false,
            "trip": false,
            "unbalancing": false,
            "underwater": false,
            "unwieldy": false,
            "variantBoost": false,
            "wideLine": false
        },
        "proficient": true,
        "abilityMods": {
            "parts": []
        }
    },
    "flags": {},
    "img": "icons/svg/mystery-man.svg",
    "effects": []
};
//# sourceMappingURL=WeaponFactory.js.map