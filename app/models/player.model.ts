import { RacesEnum } from '../enums'

export interface Player {
    details: PlayerDetails;
    stats: PlayerStats;
    skills: PlayerSkills;
    inventory: PlayerInventory[];
}

export interface PlayerDetails {
    name: string,
    nickName: string,
    race: RacesEnum.NORSEMEN,
    height: string,
    weight: string,
    hairColor: string,
    eyesColor: string,
    physicalSpecial: string,
    class: string,
    classId: string,
    experience: 31751,
    level: 3,
}

export interface PlayerStats {
    strength: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
    agility: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
    stamina: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
    intellect: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
    intuition: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
    will: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
    beauty: {
        num: number,
        normal: number,
        race: number,
        total: number,
    },
}

export interface PlayerSkills {
    armor: {
        noArmor: {
            skillPoints: number,
        },
        leather: {
            skillPoints: number,
        },
        hardenedLeather: {
            skillPoints: number,
        },
        chainMail: {
            skillPoints: number,
        },
        plate: {
            skillPoints: number,
        },
    },
    weapons: {
        edge: {
            skillPoints: number,
        },
        blunt: {
            skillPoints: number,
        },
        twoHands: {
            skillPoints: number,
        },
        throw: {
            skillPoints: number,
        },
        projectile: {
            skillPoints: number,
        },
        dualWeapons: {
            skillPoints: number,
        },
        pole: {
            skillPoints: number,
        },
    },
    exterior: {
        climb: {
            skillPoints: number,
        },
        mount: {
            skillPoints: number,
        },
        swim: {
            skillPoints: number,
        },
        tracking: {
            skillPoints: number,
        },
    },
    survival: {
        ambush: {
            skillPoints: number,
        },
        hide: {
            skillPoints: number,
        },
        lockPick: {
            skillPoints: number,
        },
        trapDismantle: {
            skillPoints: number,
        },
    },
    magic: {
        readRunes: {
            skillPoints: number,
        },
        useObject: {
            skillPoints: number,
        },
        aimedSpell: {
            skillPoints: number,
        },
    },
    global: {
        sight: {
            skillPoints: number,
        },
        health: {
            skillPoints: number,
            pointValues: number[],
            sum: number,
        },
        mana: {
            skillPoints: number,
            pointValues: number[],
            sum: number,
        },
    },
    secondary: {
        blacksmith: {
            skillPoints: number,
        },
    },
}

export interface PlayerInventory {
    name: string;
    type: string;
    skill?: string[][];
    modifier?: number;
    description?: string;
    quantity?: number;
}
