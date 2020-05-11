import { RacesEnum, ObjectTypesEnum } from 'enums';
import { classes } from '../constants';
import { Player } from 'models/player.model';

export const characters: Player[] = [
  {
    id: 1,
    details: {
      name: 'Lothar Picco',
      nickName: 'Loti Picco',
      race: RacesEnum.NORSEMEN,
      height: '2 meters',
      weight: '110KG',
      hairColor: 'Red',
      eyesColor: 'Blue',
      physicalSpecial: 'Braided long beard with charms with runes',
      class: 'Viking',
      classId: classes.WARRIOR.classId,
      experience: 31751,
      level: 3
    },
    stats: {
      strength: {
        num: 102,
        normal: 35,
        race: 5,
        total: 40
      },
      agility: {
        num: 99,
        normal: 20,
        race: 0,
        total: 20
      },
      stamina: {
        num: 95,
        normal: 15,
        race: 5,
        total: 20
      },
      intellect: {
        num: 68,
        normal: 0,
        race: 0,
        total: 0
      },
      intuition: {
        num: 75,
        normal: 5,
        race: 0,
        total: 5
      },
      will: {
        num: 91,
        normal: 10,
        race: 0,
        total: 10
      },
      beauty: {
        num: 45,
        normal: 45,
        race: 0,
        total: 55
      }
    },
    skills: {
      armor: {
        noArmor: {
          skillPoints: 2
        },
        leather: {
          skillPoints: 1
        },
        hardenedLeather: {
          skillPoints: 0
        },
        chainMail: {
          skillPoints: 6
        },
        plate: {
          skillPoints: 1
        }
      },
      weapons: {
        edge: {
          skillPoints: 1
        },
        blunt: {
          skillPoints: 1
        },
        twoHands: {
          skillPoints: 0
        },
        throw: {
          skillPoints: 1
        },
        projectile: {
          skillPoints: 4
        },
        dualWeapons: {
          skillPoints: 8
        },
        pole: {
          skillPoints: 1
        }
      },
      exterior: {
        climb: {
          skillPoints: 2
        },
        mount: {
          skillPoints: 4
        },
        swim: {
          skillPoints: 4
        },
        tracking: {
          skillPoints: 1
        }
      },
      survival: {
        ambush: {
          skillPoints: 1
        },
        hide: {
          skillPoints: 4
        },
        lockPick: {
          skillPoints: 1
        },
        trapDismantle: {
          skillPoints: 1
        }
      },
      magic: {
        readRunes: {
          skillPoints: 1
        },
        useObject: {
          skillPoints: 1
        },
        aimedSpell: {
          skillPoints: 0
        }
      },
      global: {
        sight: {
          skillPoints: 6
        },
        health: {
          skillPoints: 13,
          pointValues: [5, 5, 6, 8, 8, 9, 7, 9, 9, 5, 3, 2, 2],
          sum: 78
        },
        mana: {
          skillPoints: 0,
          pointValues: [],
          sum: 0
        }
      },
      secondary: {
        blacksmith: {
          skillPoints: 7
        }
      }
    },
    inventory: [
      {
        name: 'regular chain mail',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['armor', 'chainMail']],
        modifier: 0
      },
      {
        name: 'enhanced arm guards',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['attack']],
        modifier: 0
      },
      {
        name: 'enhanced leg guards',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['armor']],
        modifier: 0
      },
      {
        name: 'throwing knives',
        quantity: 5,
        type: ObjectTypesEnum.WEAPON,
        skill: [['weapons', 'throw']],
        modifier: 0,
        description: 'personally crafted, shaped like raven feathers'
      },
      {
        name: 'winter vigil - magic axe',
        quantity: 1,
        type: ObjectTypesEnum.WEAPON,
        skill: [
          ['weapons', 'dualWeapons'],
          ['weapons', 'projectile']
        ],
        modifier: 10,
        description:
          'one handed axe: magic ability to eject axe`s head and then summon it back'
      },
      {
        name: 'regular sword',
        quantity: 1,
        type: ObjectTypesEnum.WEAPON,
        skill: [['weapons', 'dualWeapons']],
        modifier: 0,
        description: 'one handed sword'
      },
      {
        name: 'special knives belt',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'enables to grab and throw on the same round'
      },
      {
        name: 'enhanced body cover (embozo)',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['survival', 'hide']],
        modifier: 10
      },
      {
        name: 'Charms neck lace',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'Raven charm'
      },
      {
        name: 'magic anklet (tobillera)',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'enables the user to cast the "world traveler" magic'
      },
      {
        name: 'odyn',
        quantity: 1,
        type: ObjectTypesEnum.PET,
        description: 'Raven, bound to me on my trials'
      },
      {
        name: 'gold coins',
        quantity: 1,
        type: ObjectTypesEnum.CURRENCY,
        description: ''
      }
    ]
  },
  {
    id: 2,
    details: {
      name: 'Legolas Greenleaf',
      nickName: 'Lembas',
      race: RacesEnum.SINDAR_ELF,
      height: '1,82 meters',
      weight: '25KG',
      hairColor: 'Blonde',
      eyesColor: 'Blue',
      physicalSpecial: 'Braided long beard with charms with runes',
      class: 'Viking',
      classId: classes.RANGER.classId,
      experience: 0,
      level: 1
    },
    stats: {
      strength: {
        num: 102,
        normal: 35,
        race: 5,
        total: 40
      },
      agility: {
        num: 99,
        normal: 20,
        race: 0,
        total: 20
      },
      stamina: {
        num: 95,
        normal: 15,
        race: 5,
        total: 20
      },
      intellect: {
        num: 68,
        normal: 0,
        race: 0,
        total: 0
      },
      intuition: {
        num: 75,
        normal: 5,
        race: 0,
        total: 5
      },
      will: {
        num: 91,
        normal: 10,
        race: 0,
        total: 10
      },
      beauty: {
        num: 45,
        normal: 45,
        race: 0,
        total: 55
      }
    },
    skills: {
      armor: {
        noArmor: {
          skillPoints: 2
        },
        leather: {
          skillPoints: 1
        },
        hardenedLeather: {
          skillPoints: 0
        },
        chainMail: {
          skillPoints: 6
        },
        plate: {
          skillPoints: 1
        }
      },
      weapons: {
        edge: {
          skillPoints: 1
        },
        blunt: {
          skillPoints: 1
        },
        twoHands: {
          skillPoints: 0
        },
        throw: {
          skillPoints: 1
        },
        projectile: {
          skillPoints: 4
        },
        dualWeapons: {
          skillPoints: 8
        },
        pole: {
          skillPoints: 1
        }
      },
      exterior: {
        climb: {
          skillPoints: 2
        },
        mount: {
          skillPoints: 4
        },
        swim: {
          skillPoints: 4
        },
        tracking: {
          skillPoints: 1
        }
      },
      survival: {
        ambush: {
          skillPoints: 1
        },
        hide: {
          skillPoints: 4
        },
        lockPick: {
          skillPoints: 1
        },
        trapDismantle: {
          skillPoints: 1
        }
      },
      magic: {
        readRunes: {
          skillPoints: 1
        },
        useObject: {
          skillPoints: 1
        },
        aimedSpell: {
          skillPoints: 0
        }
      },
      global: {
        sight: {
          skillPoints: 6
        },
        health: {
          skillPoints: 13,
          pointValues: [5, 5, 6, 8, 8, 9, 7, 9, 9, 5, 3, 2, 2],
          sum: 78
        },
        mana: {
          skillPoints: 0,
          pointValues: [],
          sum: 0
        }
      },
      secondary: {
        blacksmith: {
          skillPoints: 7
        }
      }
    },
    inventory: []
  },
  {
    id: 3,
    details: {
      name: 'Boromir son of Denethor',
      nickName: 'Boromir',
      race: RacesEnum.MAN,
      height: '1.93 meters',
      weight: '85KG',
      hairColor: 'Dark',
      eyesColor: 'Grey',
      physicalSpecial: 'Braided long beard with charms with runes',
      class: 'Viking',
      classId: classes.WARRIOR.classId,
      experience: 0,
      level: 0
    },
    stats: {
      strength: {
        num: 102,
        normal: 35,
        race: 5,
        total: 40
      },
      agility: {
        num: 99,
        normal: 20,
        race: 0,
        total: 20
      },
      stamina: {
        num: 95,
        normal: 15,
        race: 5,
        total: 20
      },
      intellect: {
        num: 68,
        normal: 0,
        race: 0,
        total: 0
      },
      intuition: {
        num: 75,
        normal: 5,
        race: 0,
        total: 5
      },
      will: {
        num: 91,
        normal: 10,
        race: 0,
        total: 10
      },
      beauty: {
        num: 45,
        normal: 45,
        race: 0,
        total: 55
      }
    },
    skills: {
      armor: {
        noArmor: {
          skillPoints: 2
        },
        leather: {
          skillPoints: 1
        },
        hardenedLeather: {
          skillPoints: 0
        },
        chainMail: {
          skillPoints: 6
        },
        plate: {
          skillPoints: 1
        }
      },
      weapons: {
        edge: {
          skillPoints: 1
        },
        blunt: {
          skillPoints: 1
        },
        twoHands: {
          skillPoints: 0
        },
        throw: {
          skillPoints: 1
        },
        projectile: {
          skillPoints: 4
        },
        dualWeapons: {
          skillPoints: 8
        },
        pole: {
          skillPoints: 1
        }
      },
      exterior: {
        climb: {
          skillPoints: 2
        },
        mount: {
          skillPoints: 4
        },
        swim: {
          skillPoints: 4
        },
        tracking: {
          skillPoints: 1
        }
      },
      survival: {
        ambush: {
          skillPoints: 1
        },
        hide: {
          skillPoints: 4
        },
        lockPick: {
          skillPoints: 1
        },
        trapDismantle: {
          skillPoints: 1
        }
      },
      magic: {
        readRunes: {
          skillPoints: 1
        },
        useObject: {
          skillPoints: 1
        },
        aimedSpell: {
          skillPoints: 0
        }
      },
      global: {
        sight: {
          skillPoints: 6
        },
        health: {
          skillPoints: 13,
          pointValues: [5, 5, 6, 8, 8, 9, 7, 9, 9, 5, 3, 2, 2],
          sum: 78
        },
        mana: {
          skillPoints: 0,
          pointValues: [],
          sum: 0
        }
      },
      secondary: {
        blacksmith: {
          skillPoints: 7
        }
      }
    },
    inventory: [
      {
        name: 'regular chain mail',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['armor', 'chainMail']],
        modifier: 0
      },
      {
        name: 'enhanced arm guards',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['attack']],
        modifier: 0
      },
      {
        name: 'enhanced leg guards',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['armor']],
        modifier: 0
      },
      {
        name: 'throwing knives',
        quantity: 5,
        type: ObjectTypesEnum.WEAPON,
        skill: [['weapons', 'throw']],
        modifier: 0,
        description: 'personally crafted, shaped like raven feathers'
      },
      {
        name: 'winter vigil - magic axe',
        quantity: 1,
        type: ObjectTypesEnum.WEAPON,
        skill: [
          ['weapons', 'dualWeapons'],
          ['weapons', 'projectile']
        ],
        modifier: 10,
        description:
          'one handed axe: magic ability to eject axe`s head and then summon it back'
      },
      {
        name: 'regular sword',
        quantity: 1,
        type: ObjectTypesEnum.WEAPON,
        skill: [['weapons', 'dualWeapons']],
        modifier: 0,
        description: 'one handed sword'
      },
      {
        name: 'special knives belt',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'enables to grab and throw on the same round'
      },
      {
        name: 'enhanced body cover (embozo)',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['survival', 'hide']],
        modifier: 10
      },
      {
        name: 'Charms neck lace',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'Raven charm'
      },
      {
        name: 'magic anklet (tobillera)',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'enables the user to cast the "world traveler" magic'
      },
      {
        name: 'odyn',
        quantity: 1,
        type: ObjectTypesEnum.PET,
        description: 'Raven, bound to me on my trials'
      },
      {
        name: 'gold coins',
        quantity: 1,
        type: ObjectTypesEnum.CURRENCY,
        description: ''
      }
    ]
  },
  {
    id: 4,
    details: {
      name: 'Aragorn II',
      nickName: 'Estel',
      race: RacesEnum.DUNEDAIN,
      height: '1.85 meters',
      weight: '80KG',
      hairColor: 'Dark',
      eyesColor: 'Grey',
      physicalSpecial: 'Braided long beard with charms with runes',
      class: 'Viking',
      classId: classes.RANGER.classId,
      experience: 0,
      level: 0
    },
    stats: {
      strength: {
        num: 102,
        normal: 35,
        race: 5,
        total: 40
      },
      agility: {
        num: 99,
        normal: 20,
        race: 0,
        total: 20
      },
      stamina: {
        num: 95,
        normal: 15,
        race: 5,
        total: 20
      },
      intellect: {
        num: 68,
        normal: 0,
        race: 0,
        total: 0
      },
      intuition: {
        num: 75,
        normal: 5,
        race: 0,
        total: 5
      },
      will: {
        num: 91,
        normal: 10,
        race: 0,
        total: 10
      },
      beauty: {
        num: 45,
        normal: 45,
        race: 0,
        total: 55
      }
    },
    skills: {
      armor: {
        noArmor: {
          skillPoints: 2
        },
        leather: {
          skillPoints: 1
        },
        hardenedLeather: {
          skillPoints: 0
        },
        chainMail: {
          skillPoints: 6
        },
        plate: {
          skillPoints: 1
        }
      },
      weapons: {
        edge: {
          skillPoints: 1
        },
        blunt: {
          skillPoints: 1
        },
        twoHands: {
          skillPoints: 0
        },
        throw: {
          skillPoints: 1
        },
        projectile: {
          skillPoints: 4
        },
        dualWeapons: {
          skillPoints: 8
        },
        pole: {
          skillPoints: 1
        }
      },
      exterior: {
        climb: {
          skillPoints: 2
        },
        mount: {
          skillPoints: 4
        },
        swim: {
          skillPoints: 4
        },
        tracking: {
          skillPoints: 1
        }
      },
      survival: {
        ambush: {
          skillPoints: 1
        },
        hide: {
          skillPoints: 4
        },
        lockPick: {
          skillPoints: 1
        },
        trapDismantle: {
          skillPoints: 1
        }
      },
      magic: {
        readRunes: {
          skillPoints: 1
        },
        useObject: {
          skillPoints: 1
        },
        aimedSpell: {
          skillPoints: 0
        }
      },
      global: {
        sight: {
          skillPoints: 6
        },
        health: {
          skillPoints: 13,
          pointValues: [5, 5, 6, 8, 8, 9, 7, 9, 9, 5, 3, 2, 2],
          sum: 78
        },
        mana: {
          skillPoints: 0,
          pointValues: [],
          sum: 0
        }
      },
      secondary: {
        blacksmith: {
          skillPoints: 7
        }
      }
    },
    inventory: [
      {
        name: 'regular chain mail',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['armor', 'chainMail']],
        modifier: 0
      },
      {
        name: 'enhanced arm guards',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['attack']],
        modifier: 0
      },
      {
        name: 'enhanced leg guards',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['armor']],
        modifier: 0
      },
      {
        name: 'throwing knives',
        quantity: 5,
        type: ObjectTypesEnum.WEAPON,
        skill: [['weapons', 'throw']],
        modifier: 0,
        description: 'personally crafted, shaped like raven feathers'
      },
      {
        name: 'winter vigil - magic axe',
        quantity: 1,
        type: ObjectTypesEnum.WEAPON,
        skill: [
          ['weapons', 'dualWeapons'],
          ['weapons', 'projectile']
        ],
        modifier: 10,
        description:
          'one handed axe: magic ability to eject axe`s head and then summon it back'
      },
      {
        name: 'regular sword',
        quantity: 1,
        type: ObjectTypesEnum.WEAPON,
        skill: [['weapons', 'dualWeapons']],
        modifier: 0,
        description: 'one handed sword'
      },
      {
        name: 'special knives belt',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'enables to grab and throw on the same round'
      },
      {
        name: 'enhanced body cover (embozo)',
        type: ObjectTypesEnum.SKILL_ENHANCER,
        skill: [['survival', 'hide']],
        modifier: 10
      },
      {
        name: 'Charms neck lace',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'Raven charm'
      },
      {
        name: 'magic anklet (tobillera)',
        quantity: 1,
        type: ObjectTypesEnum.CUSTOM,
        description: 'enables the user to cast the "world traveler" magic'
      },
      {
        name: 'odyn',
        quantity: 1,
        type: ObjectTypesEnum.PET,
        description: 'Raven, bound to me on my trials'
      },
      {
        name: 'gold coins',
        quantity: 1,
        type: ObjectTypesEnum.CURRENCY,
        description: ''
      }
    ]
  }
];
