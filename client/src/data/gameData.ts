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
        id: 'arrival',
        title: 'The Inheritance',
        text: [
          'The letter from the law firm still crumples in your trembling hand as you stand before the imposing gates of Ravencroft Manor. Your great-aunt Cordelia - a woman you\'d met only once as a child - has left you this sprawling estate in her will.',
          'The iron gates seem to part of their own accord as you approach, creaking open with the weight of centuries. The cobblestone path winds through overgrown gardens where roses bloom impossibly red in the moonlight.',
          'According to the letter, the manor comes with... tenants. Long-term residents who have "historical agreements" with the property. The lawyer had been frustratingly vague about the details, mentioning only that they are "nocturnal by nature" and "require certain accommodations."',
          'As you reach the massive oak doors, you notice they bear intricate carvings - symbols that seem to shift and dance when you\'re not looking directly at them. Your great-aunt\'s final note echoes in your mind: "The women of Ravencroft will test you, child. Be true to yourself, and you may find more than you ever imagined possible."'
        ],
        choices: [
          {
            id: 'knock_boldly',
            text: 'Knock firmly on the door. This is your property now, after all.',
            consequence: 'Confident approach • Shows ownership',
            effects: [],
            nextScene: 'first_meeting_confident'
          },
          {
            id: 'knock_politely',
            text: 'Knock gently and wait respectfully. You are their guest as much as they are yours.',
            consequence: 'Respectful approach • Shows diplomacy',
            effects: [],
            nextScene: 'first_meeting_polite'
          },
          {
            id: 'explore_grounds',
            text: 'Walk around the manor first to get a sense of the place.',
            consequence: 'Cautious approach • Gathers information',
            effects: [],
            nextScene: 'manor_exploration'
          }
        ]
      },
      {
        id: 'first_meeting_confident',
        title: 'An Unexpected Welcome',
        text: [
          'Your firm knock echoes through what sounds like a vast interior. After a moment, the door swings open to reveal a woman of breathtaking beauty, her crimson dress seeming to flow like liquid silk in the candlelight.',
          '"You must be Cordelia\'s great-niece," she says, her voice like velvet over steel. "I am Lilith Ravencroft. Welcome to your inheritance." There\'s something in the way she says "inheritance" that suggests it encompasses more than just property.',
          'Her dark eyes appraise you with interest. "Bold of you to announce yourself so... assertively. Cordelia had mentioned you might have her spirit." She steps aside, gesturing for you to enter. "Please, come in. We have much to discuss."',
          'As you cross the threshold, you feel a strange tingling sensation, as if you\'ve passed through some invisible barrier. The air inside carries scents of old roses, aged wine, and something indefinably ancient.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'ask_about_cordelia',
            text: '"You knew my great-aunt well? She never mentioned any of you in her letters."',
            consequence: 'Seeks family connection • Shows curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'cordelia_story'
          },
          {
            id: 'ask_about_arrangements',
            text: '"The lawyer mentioned \'historical arrangements.\' What exactly does that mean?"',
            consequence: 'Business-focused • Direct approach',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'arrangement_explanation'
          },
          {
            id: 'comment_on_manor',
            text: '"This place is incredible. It feels... alive somehow."',
            consequence: 'Appreciates atmosphere • Shows sensitivity',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'manor_secrets'
          }
        ]
      },
      {
        id: 'cordelia_story',
        title: 'Family Secrets',
        text: [
          'Lilith\'s expression softens with something that might be genuine fondness. "Cordelia was... unique among mortals. She understood our nature and chose to protect us rather than fear us."',
          'She leads you through a grand hallway lined with portraits of women spanning different eras. "Your great-aunt inherited this manor in 1962, much as you have now. But she chose to stay, to learn, to become part of something larger than herself."',
          '"We are vampires," Lilith says simply, watching your reaction carefully. "Ancient creatures who have found sanctuary here for over three centuries. Cordelia became our protector, our friend... and in some ways, our family."',
          'She pauses before a portrait of a woman who bears a striking resemblance to you. "She hoped you might choose to continue her legacy. But the choice, as it was for her, is entirely yours."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'accept_easily',
            text: '"Vampires? That... actually explains a lot about Aunt Cordelia. She always seemed to know secrets."',
            consequence: 'Takes revelation well • Shows adaptability',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'acceptance_path'
          },
          {
            id: 'need_proof',
            text: '"Vampires aren\'t real. If you\'re trying to scare me away from my inheritance..."',
            consequence: 'Skeptical • Requires evidence',
            effects: [{ characterId: 'lilith', affectionChange: 3 }],
            nextScene: 'proof_demanded'
          },
          {
            id: 'ask_about_choice',
            text: '"What kind of choice did Cordelia make? What are you asking of me?"',
            consequence: 'Practical questions • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'choice_explanation'
          }
        ]
      },
      {
        id: 'library',
        title: 'The Library of Secrets',
        text: [
          'Lilith leads you to a magnificent library, its towering shelves disappearing into shadow. Dust motes dance in the pale moonlight filtering through stained glass windows, each beam illuminating leather-bound tomes that seem to whisper secrets of centuries past.',
          '"This was Cordelia\'s favorite room," Lilith says softly. "She spent countless hours here, learning our history, our struggles, our hopes." She runs her finger along an ancient spine. "Knowledge is power, but it\'s also burden."',
          '"These books contain the true history of our kind - not the myths and legends humans tell, but our real stories. Stories of love that transcends mortality, of sacrifice, of the price of immortality."',
          'She turns to face you, her dark eyes holding depths of centuries. "Your great-aunt believed you had the strength to bear such knowledge. The question is... do you want to learn who we truly are?"'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'eager_to_learn',
            text: '"Yes, I want to understand. Cordelia left me this place for a reason."',
            consequence: 'Shows commitment to legacy • Opens knowledge path',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'knowledge_path'
          },
          {
            id: 'cautious_interest',
            text: '"I\'ll listen, but I need to know what I\'m getting into."',
            consequence: 'Cautious but open • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'gradual_revelation'
          },
          {
            id: 'focus_on_inheritance',
            text: '"First, I need to understand the practical aspects of living here."',
            consequence: 'Practical focus • Establishes boundaries',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'practical_arrangements'
          }
        ]
      },
      {
        id: 'knowledge_path',
        title: 'The Weight of Truth',
        text: [
          'Lilith nods with approval. "Cordelia chose well. You have her courage." She moves to one of the ancient tomes, running her fingers along its spine with reverence.',
          '"Our history is not one of monsters and victims, as human stories would have you believe. We are beings of passion, of deep connection, of love that transcends the mortal understanding of time."',
          'She pulls a leather-bound journal from the shelf. "This belonged to your great-aunt. Her observations, her journey of understanding our nature. She documented everything - our struggles, our joys, our eternal search for meaning."',
          'Opening the journal, you see Cordelia\'s familiar handwriting: "Day 127 - I begin to understand that immortality is not a curse, but a responsibility. To love deeply, to protect fiercely, to never forget what it means to be human while becoming something more."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'read_more',
            text: '"May I read more of her journal? I want to understand her journey."',
            consequence: 'Shows deep interest • Builds trust',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_journey'
          },
          {
            id: 'ask_about_love',
            text: '"Love that transcends mortality? What does that mean exactly?"',
            consequence: 'Focuses on emotional aspects • Romantic path',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'love_explanation'
          },
          {
            id: 'ask_about_others',
            text: '"You mentioned others live here. May I meet them?"',
            consequence: 'Shows interest in community • Opens social paths',
            effects: [{ characterId: 'morgana', affectionChange: 8 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'meet_the_coven'
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
        id: 'love_explanation',
        title: 'The Nature of Eternal Love',
        text: [
          'Lilith\'s eyes soften, and for a moment, the ancient creature before you seems almost vulnerable. "Love among our kind is... intense beyond mortal comprehension. When we love, it is with the weight of centuries, the promise of eternity."',
          'She moves closer, her voice dropping to barely above a whisper. "Your great-aunt understood this. She loved deeply, completely, but chose to remain mortal. It was a choice we respected, even as it meant watching her age while we remained unchanged."',
          '"But you..." Her hand hovers near your cheek, not quite touching. "There is something about you that calls to the eternal part of my nature. A recognition that goes beyond mere attraction."',
          'The weight of her words settles between you. This is no casual flirtation, but something far deeper and more significant than you had imagined possible.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'reciprocate_feeling',
            text: '"I feel it too. This connection... it\'s unlike anything I\'ve ever experienced."',
            consequence: 'Deepens bond • Major romance progression',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'deepening_bond'
          },
          {
            id: 'need_understanding',
            text: '"I want to understand more before I can respond to such feelings."',
            consequence: 'Thoughtful approach • Builds respect',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'patient_courtship'
          },
          {
            id: 'ask_about_cordelia',
            text: '"Did Cordelia ever regret staying mortal when she loved someone eternal?"',
            consequence: 'Seeks wisdom from past • Shows depth',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_choice_story'
          }
        ]
      }
    ]
  }
];

export const initialGameState = {
  currentChapter: 0,
  currentScene: 'arrival',
  characters: characters,
  playerCharacter: undefined,
  playerStats: {
    health: 'Healthy',
    sanity: 'Curious',
    location: 'Ravencroft Manor Gates'
  },
  inventory: [],
  flags: {},
  completedScenes: [],
  isCharacterCreated: false
};
