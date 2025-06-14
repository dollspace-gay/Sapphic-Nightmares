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
            nextScene: 'manor_tour'
          }
        ]
      },
      {
        id: 'manor_tour',
        title: 'Halls of Shadows',
        text: [
          'Lilith nods with understanding, though you catch a flicker of disappointment in her eyes. "Of course. This is... overwhelming, I imagine." She steps back, giving you space to breathe.',
          'She gestures toward the towering doors of the library. "Perhaps a tour of the manor would help you understand what you\'ve stumbled into. There are others here you should meet."',
          'As you walk through corridors lined with ancient portraits whose eyes seem to follow your movement, Lilith speaks softly. "Ravencroft Manor has been home to our coven for over three centuries. We are... selective about our guests."',
          'You pass by a grand staircase when you hear the soft sound of piano music drifting from somewhere above. The melody is hauntingly beautiful, tinged with melancholy that seems to seep into your very soul.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'ask_about_music',
            text: '"That music... it\'s beautiful. Who\'s playing?"',
            consequence: 'Shows interest in other residents',
            effects: [{ characterId: 'morgana', affectionChange: 5 }],
            nextScene: 'meet_morgana'
          },
          {
            id: 'ask_about_coven',
            text: '"A coven? How many of you live here?"',
            consequence: 'Practical questions • Shows caution',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'coven_explanation'
          },
          {
            id: 'express_fear',
            text: '"I\'m scared. This all feels like a dream... or a nightmare."',
            consequence: 'Vulnerable honesty • May attract protection',
            effects: [{ characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'seraphina_appears'
          }
        ]
      },
      {
        id: 'meet_morgana',
        title: 'The Shadow Mystic',
        text: [
          'Lilith\'s lips curve into a knowing smile. "Ah, you have a good ear. That would be Morgana. She\'s... complicated." There\'s an edge to her voice that suggests a complex history.',
          'She leads you up the grand staircase, the music growing louder with each step. The melody weaves through minor keys like silk through shadows, speaking of loss and longing.',
          'You reach a set of ornate double doors, slightly ajar. Through the gap, you can see a figure seated at an antique grand piano, her dark hair cascading like a waterfall as she plays.',
          'Lilith pushes the door open softly. "Morgana, we have a guest." The music stops abruptly, and the woman at the piano turns. Her silver eyes seem to pierce straight through you, as if reading secrets you didn\'t know you had.'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'compliment_music',
            text: '"Your playing is extraordinary. That melody... it felt like it was speaking to my soul."',
            consequence: 'Artistic appreciation • Appeals to her nature',
            effects: [{ characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'morgana_interest'
          },
          {
            id: 'ask_about_song',
            text: '"What was that piece? I\'ve never heard anything like it."',
            consequence: 'Shows genuine curiosity',
            effects: [{ characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'morgana_composition'
          },
          {
            id: 'stay_silent',
            text: 'Remain silent and wait for her to speak first.',
            consequence: 'Respectful approach • Shows wisdom',
            effects: [{ characterId: 'morgana', affectionChange: 8 }],
            nextScene: 'morgana_observation'
          }
        ]
      },
      {
        id: 'seraphina_appears',
        title: 'Guardian Angel',
        text: [
          'Before Lilith can respond to your admission of fear, a gentle voice speaks from behind you both. "Fear is wisdom in the face of the unknown."',
          'You turn to see a woman descending the staircase like moonlight made manifest. Her platinum hair seems to glow with its own inner light, and when she moves, you could swear you catch glimpses of something shimmering behind her - like wings folded against her back.',
          'Lilith\'s expression grows complex. "Seraphina. I didn\'t expect you to..." She pauses, then continues more formally. "This is our guest. She\'s just learning about our world."',
          'Seraphina approaches with fluid grace, her pale blue eyes filled with warmth and something that might be recognition. "You\'re safe here," she says softly, and somehow you believe her completely. "I won\'t let any harm come to you."'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'ask_about_wings',
            text: '"I thought I saw... are you an angel?"',
            consequence: 'Direct question • Shows supernatural awareness',
            effects: [{ characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'seraphina_truth'
          },
          {
            id: 'thank_for_protection',
            text: '"Thank you. I... I feel like I can trust you."',
            consequence: 'Grateful response • Builds trust',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'seraphina_promise'
          },
          {
            id: 'question_safety',
            text: '"Safe from what exactly? What kind of danger am I in?"',
            consequence: 'Practical concerns • Shows intelligence',
            effects: [{ characterId: 'lilith', affectionChange: -3 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'danger_revealed'
          }
        ]
      },
      {
        id: 'transformation_begin',
        title: 'The Blood Kiss',
        text: [
          'Lilith\'s eyes blaze with passion and something darker. "Are you certain? Once this begins, there is no path back to mortality. You will become something... more."',
          'She traces her finger along your throat, and you feel your pulse quicken under her touch. "The transformation is not just physical. Your very essence will change. You will see the world through eyes that have witnessed centuries."',
          'Her fangs extend slightly, gleaming like pearls in the moonlight. "But you will also gain power beyond mortal imagination. Strength, speed, senses that can perceive the supernatural world hidden beneath the mundane."',
          'She leans closer, her lips brushing your ear. "Tell me once more. Are you ready to leave your human life behind forever?"'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'accept_transformation',
            text: '"Yes. I\'ve never been more certain of anything in my life."',
            consequence: 'Final commitment • Vampire transformation path',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'vampire_transformation'
          },
          {
            id: 'ask_alternatives',
            text: '"Is there no middle ground? A way to be part of your world without losing my humanity?"',
            consequence: 'Seeks compromise • Alternative path',
            effects: [{ characterId: 'lilith', affectionChange: 5 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'alternative_path'
          },
          {
            id: 'last_minute_hesitation',
            text: '"I... I need just a moment to think about this."',
            consequence: 'Hesitation • May disappoint Lilith',
            effects: [{ characterId: 'lilith', affectionChange: -10 }],
            nextScene: 'lilith_disappointment'
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
  playerCharacter: undefined,
  playerStats: {
    health: 'Healthy',
    sanity: 'Questioning Reality',
    location: 'Character Creation'
  },
  inventory: [],
  flags: {},
  completedScenes: [],
  isCharacterCreated: false
};
