import { Chapter, Character } from '../types/game';

export const characters: Record<string, Character> = {
  lilith: {
    id: 'lilith',
    name: 'Lilith Ravencroft',
    title: 'Ancient Vampire • Coven Leader',
    description: 'The enigmatic leader of the vampire coven, Lilith is both alluring and dangerous.',
    affection: 35,
    status: 'Intrigued',
    avatar: 'vampire-fangs',
    color: 'bg-blood-red'
  },
  morgana: {
    id: 'morgana',
    name: 'Morgana Blackthorne',
    title: 'Shadow Mystic • Coven Elder',
    description: 'A mysterious vampire with deep knowledge of dark magic and ancient secrets.',
    affection: 15,
    status: 'Suspicious',
    avatar: 'moon',
    color: 'bg-gothic-purple'
  },
  seraphina: {
    id: 'seraphina',
    name: 'Seraphina Vale',
    title: 'Fallen Angel • Protector',
    description: 'Once an angel, now caught between light and darkness, devoted to protecting you.',
    affection: 60,
    status: 'Protective',
    avatar: 'star',
    color: 'bg-moonlight'
  }
};

export const gameData: Chapter[] = [
  {
    id: 'chapter1',
    title: 'The Awakening',
    scenes: [
      {
        id: 'library',
        title: 'The Library of Secrets',
        text: [
          'The ancient library stretches before you, its towering shelves disappearing into shadow. Dust motes dance in the pale moonlight filtering through stained glass windows, each beam illuminating leather-bound tomes that seem to whisper secrets of centuries past.',
          '"You shouldn\'t be here alone," a velvet voice purrs from behind you. You turn to find Lilith emerging from between the stacks, her crimson dress flowing like liquid shadow. Her pale skin seems to glow in the moonlight, and her dark eyes hold depths that both terrify and enthrall you.',
          '"The books here... they remember things. Dark things. Beautiful things. They might corrupt an innocent mind like yours." She steps closer, and you catch the scent of roses and something metallic beneath. "Tell me, little mortal, what brings you to seek forbidden knowledge?"',
          'Her question hangs in the air like incense, heavy with implication. You feel your heart racing - whether from fear or something else entirely, you\'re not certain.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'honest',
            text: '"I\'m searching for answers about what happened to me. About why I can suddenly see things that others can\'t."',
            consequence: 'Honest approach • May increase trust',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'library_honest'
          },
          {
            id: 'flirtatious',
            text: '"Maybe I came here because I was drawn to you. There\'s something about this place... about you... that calls to me."',
            consequence: 'Flirtatious approach • May increase attraction',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'library_flirt'
          },
          {
            id: 'bold',
            text: '"I\'m not afraid of corruption. Sometimes the most beautiful truths are found in the darkest places."',
            consequence: 'Bold approach • High risk, high reward',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'library_bold'
          },
          {
            id: 'cautious',
            text: '"Perhaps you\'re right. I should go." Step back cautiously toward the door.',
            consequence: 'Cautious approach • May preserve safety',
            effects: [{ characterId: 'lilith', affectionChange: -5 }],
            nextScene: 'library_exit'
          }
        ]
      },
      {
        id: 'library_honest',
        title: 'A Moment of Truth',
        text: [
          'Lilith\'s expression softens slightly, and you catch a glimpse of something almost vulnerable in her ancient eyes.',
          '"Ah," she breathes, moving closer until you can feel the cool air that surrounds her. "The Sight has awakened in you. How... interesting." Her fingers trace the air near your cheek, not quite touching. "Tell me, sweet mortal, what do you see when you look at me?"',
          'The question sends a shiver down your spine. When you look at her now, you see more than just her beauty - you see the predator beneath, the centuries of power and darkness, but also something lonely and desperate for connection.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'see_truth',
            text: '"I see a predator... but also someone who\'s been alone for far too long."',
            consequence: 'Perceptive • Deepens connection',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'first_kiss'
          },
          {
            id: 'see_beauty',
            text: '"I see the most beautiful and terrifying creature I\'ve ever encountered."',
            consequence: 'Romantic • Shows attraction',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'first_kiss'
          },
          {
            id: 'see_danger',
            text: '"I see danger. But I also see someone I want to understand."',
            consequence: 'Cautious but curious • Maintains intrigue',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'tour_manor'
          }
        ]
      },
      {
        id: 'first_kiss',
        title: 'Crimson Embrace',
        text: [
          'Lilith\'s eyes widen with surprise and something deeper - a hunger that goes beyond the physical. "Few have seen me so clearly," she whispers, her voice thick with emotion.',
          'She steps even closer, her hand finally making contact with your cheek. Her skin is marble-cold but somehow comforting. "You are either very brave or very foolish, little mortal. Perhaps both."',
          'Time seems to stop as she leans in, her lips brushing against yours in a kiss that tastes of wine and secrets. When she pulls away, her eyes are bright with an inner fire.',
          '"Welcome to my world," she breathes against your lips. "There will be no going back now."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'embrace_darkness',
            text: '"I don\'t want to go back. Show me everything."',
            consequence: 'Fully commits • Major story progression',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'transformation_begin'
          },
          {
            id: 'need_time',
            text: '"This is all happening so fast. I need time to understand what this means."',
            consequence: 'Measured response • Preserves agency',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'tour_manor'
          }
        ]
      }
    ]
  }
];

export const initialGameState = {
  currentChapter: 0,
  currentScene: 'library',
  characters: characters,
  playerStats: {
    health: 'Healthy',
    sanity: 'Questioning Reality',
    location: 'Ravencroft Manor'
  },
  inventory: [],
  flags: {},
  completedScenes: []
};
