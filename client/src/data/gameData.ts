import { Chapter, Character } from '../types/game';

export const characters: Record<string, Character> = {
  lilith: {
    id: 'lilith',
    name: 'Lilith Ravencroft',
    title: 'Ancient Vampire • Coven Leader',
    description: 'The enigmatic leader of the vampire coven, Lilith is both alluring and dangerous.',
    affection: 0,
    status: 'Neutral',
    avatar: 'vampire-fangs',
    color: 'bg-blood-red'
  },
  morgana: {
    id: 'morgana',
    name: 'Morgana Blackthorne',
    title: 'Shadow Mystic • Coven Elder',
    description: 'A mysterious vampire with deep knowledge of dark magic and ancient secrets.',
    affection: 0,
    status: 'Neutral',
    avatar: 'moon',
    color: 'bg-gothic-purple'
  },
  seraphina: {
    id: 'seraphina',
    name: 'Seraphina Vale',
    title: 'Fallen Angel • Protector',
    description: 'Once an angel, now caught between light and darkness, devoted to protecting you.',
    affection: 0,
    status: 'Neutral',
    avatar: 'star',
    color: 'bg-moonlight'
  },
  valentina: {
    id: 'valentina',
    name: 'Valentina Reyes',
    title: 'Passionate Revolutionary • Former Soldier',
    description: 'A fiery Spanish vampire with crimson curls and fierce amber eyes. Once fought in mortal wars, now battles for vampire rights and equality within the coven.',
    affection: 0,
    status: 'Challenging',
    avatar: 'sword',
    color: 'bg-sunset-orange'
  },
  celeste: {
    id: 'celeste',
    name: 'Celeste Dubois',
    title: 'Scholar Keeper • Ancient Librarian',
    description: 'A brilliant French vampire with steel-gray eyes behind wire-rimmed glasses. Keeper of the manor\'s vast supernatural library and forbidden knowledge.',
    affection: 0,
    status: 'Analytical',
    avatar: 'book',
    color: 'bg-deep-indigo'
  },
  raven: {
    id: 'raven',
    name: 'Raven Bjornsdottir',
    title: 'Wild Huntress • Guardian of Borders',
    description: 'A fierce Nordic vampire with braided platinum hair and ice-blue eyes. Prefers wilderness to civilization, hunts supernatural threats to the coven.',
    affection: 0,
    status: 'Wary',
    avatar: 'wolf',
    color: 'bg-frost-blue'
  },
  isadora: {
    id: 'isadora',
    name: 'Isadora Medici',
    title: 'Enchanting Socialite • Political Strategist',
    description: 'An Italian vampire with dark olive skin and emerald eyes. Master of social manipulation and political intrigue from her Renaissance court days.',
    affection: 0,
    status: 'Calculating',
    avatar: 'crown',
    color: 'bg-emerald-green'
  },
  luna: {
    id: 'luna',
    name: 'Luna Nightwhisper',
    title: 'Mystical Seer • Oracle of Futures',
    description: 'A mysterious vampire with silver-white hair and violet eyes that see beyond the veil. Practices ancient divination and prophetic magic.',
    affection: 0,
    status: 'Enigmatic',
    avatar: 'crystal-ball',
    color: 'bg-mystic-purple'
  },
  elena: {
    id: 'elena',
    name: 'Elena Volkov',
    title: 'Tormented Artist • Eternal Muse',
    description: 'A haunted Russian vampire with raven-black hair and pale gray eyes. Creates dark masterpieces while struggling with the weight of immortal memories.',
    affection: 0,
    status: 'Melancholic',
    avatar: 'paintbrush',
    color: 'bg-shadow-gray'
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
        id: 'first_meeting_polite',
        title: 'A Gracious Introduction',
        text: [
          'Your gentle knock carries a respectful rhythm. After a few moments, the door opens to reveal a woman whose beauty seems to belong to another era entirely. Her deep red dress flows like shadows, and her dark eyes hold depths that seem to span centuries.',
          '"How refreshing," she says with genuine pleasure, "a visitor who understands the value of courtesy." Her smile is warm, though there\'s something otherworldly about the way the candlelight plays across her features. "I am Lilith Ravencroft, and you must be dear Cordelia\'s great-niece."',
          'She steps back gracefully, extending her hand in invitation. "Your respectful approach speaks well of your character. Cordelia always said you were raised with proper manners." There\'s approval in her voice, and something else - perhaps relief.',
          'As you cross the threshold, you feel a subtle shift in the air, as if you\'ve entered a space where different rules apply. The interior is lit by candles and firelight, casting dancing shadows that seem almost alive.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'thank_for_welcome',
            text: '"Thank you for the warm welcome. I wasn\'t sure what to expect when I arrived."',
            consequence: 'Grateful and honest • Shows vulnerability',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'honest_uncertainty'
          },
          {
            id: 'ask_about_cordelia_relationship',
            text: '"You speak of my great-aunt with such fondness. Were you close friends?"',
            consequence: 'Personal interest • Shows care for family connections',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'cordelia_friendship'
          },
          {
            id: 'comment_on_atmosphere',
            text: '"This place has an extraordinary atmosphere. It feels like stepping into another world."',
            consequence: 'Observant appreciation • Shows sensitivity to supernatural',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'atmospheric_awareness'
          },
          {
            id: 'inquire_about_arrangements',
            text: '"The lawyer mentioned certain arrangements with the property. I hope my arrival won\'t disrupt your life here."',
            consequence: 'Considerate approach • Shows respect for existing residents',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'considerate_inquiry'
          }
        ]
      },
      {
        id: 'honest_uncertainty',
        title: 'Shared Vulnerability',
        text: [
          'Lilith\'s expression grows warmer at your honesty. "Uncertainty is natural when stepping into the unknown. Your great-aunt felt the same way when she first arrived here decades ago."',
          'She guides you toward a sitting room where a fire crackles in an ornate fireplace. "Cordelia left detailed instructions about how to... introduce you to our world. She wanted you to feel welcomed, not overwhelmed."',
          '"We are not ordinary tenants," Lilith continues carefully, watching your reaction. "This manor has served as a sanctuary for beings like myself for over three centuries. Cordelia understood our nature and chose to protect us."',
          'Her dark eyes search your face. "The question now is whether you, like her, can accept what lies beyond the boundaries of what most consider normal."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'express_openness',
            text: '"I\'ve always believed there was more to the world than what we see on the surface. I\'m willing to learn."',
            consequence: 'Open-minded • Shows readiness to accept supernatural',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'supernatural_revelation'
          },
          {
            id: 'ask_about_protection',
            text: '"What kind of protection? Are you in danger from something?"',
            consequence: 'Protective instinct • Shows concern for others',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'protection_discussion'
          },
          {
            id: 'request_gradual_explanation',
            text: '"I want to understand, but could you help me learn gradually? This is all quite overwhelming."',
            consequence: 'Honest about limits • Shows wisdom in pacing',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'gradual_revelation'
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
      },
      {
        id: 'meet_the_coven',
        title: 'The Gathering',
        text: [
          'Lilith guides you through the manor\'s elegant corridors to a warmly lit sitting room where two other women await. The atmosphere is welcoming yet charged with an otherworldly energy.',
          'The first woman sits at a grand piano, her fingers dancing across the keys in a melancholy melody. Her dark hair frames a face of ethereal beauty, and when she looks up, her silver eyes seem to see into your very soul. "This must be Cordelia\'s heir," she says, her voice like distant thunder.',
          'The second woman rises gracefully from a velvet armchair, her platinum hair catching the candlelight like spun moonbeams. There\'s something luminous about her presence, almost angelic. "Welcome," she says warmly. "I am Seraphina, and this is Morgana."',
          'Lilith settles beside you. "These are my... sisters, in a sense. We have shared this sanctuary for many decades, each bringing our own gifts and stories to this place your great-aunt protected."'
        ],
        choices: [
          {
            id: 'greet_formally',
            text: '"It\'s an honor to meet you both. Cordelia spoke of having special tenants, but she never mentioned how extraordinary you are."',
            consequence: 'Formal approach • Shows respect for all',
            effects: [{ characterId: 'morgana', affectionChange: 8 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'formal_introductions'
          },
          {
            id: 'focus_on_morgana',
            text: 'Turn to Morgana. "That melody... it\'s hauntingly beautiful. Did you compose it?"',
            consequence: 'Shows artistic interest • Appeals to Morgana',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 2 }],
            nextScene: 'morgana_focus'
          },
          {
            id: 'focus_on_seraphina',
            text: 'Address Seraphina. "There\'s something different about you... something that feels like peace."',
            consequence: 'Recognizes divine nature • Appeals to Seraphina',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 2 }],
            nextScene: 'seraphina_focus'
          },
          {
            id: 'ask_about_sanctuary',
            text: '"Lilith mentioned this place is a sanctuary. What does that mean for beings like yourselves?"',
            consequence: 'Practical question • Shows understanding',
            effects: [{ characterId: 'lilith', affectionChange: 8 }, { characterId: 'morgana', affectionChange: 5 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'sanctuary_explanation'
          }
        ]
      },
      {
        id: 'morgana_focus',
        title: 'The Composer\'s Heart',
        text: [
          'Morgana\'s fingers pause on the keys, and for the first time since you entered, she truly looks at you. Her silver eyes hold depths of ancient sorrow and flickering hope.',
          '"I did compose it," she says softly, her voice carrying the weight of centuries. "It\'s called \'Elegy for the Dawn\' - a piece about longing for something you can never have again." Her gaze grows distant. "I was a musician in life, before... this."',
          'She plays a few more notes, each one pure and crystalline. "Music is the only thing that remains unchanged by immortality. It speaks to the soul in ways that transcend the physical form."',
          'Seraphina watches the exchange with interest, while Lilith\'s expression is unreadable. You sense that Morgana rarely opens up to strangers, making this moment significant.'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'ask_about_past',
            text: '"What was your life like before? When you were mortal?"',
            consequence: 'Personal question • May deepen connection or cause pain',
            effects: [{ characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'morgana_past'
          },
          {
            id: 'request_performance',
            text: '"Would you play more? I\'d love to hear another piece."',
            consequence: 'Shows appreciation • Encourages artistic expression',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_performance'
          },
          {
            id: 'philosophical_response',
            text: '"Music as the language of the soul... I think Cordelia would have understood that sentiment."',
            consequence: 'Thoughtful response • Shows depth',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'philosophical_discussion'
          }
        ]
      },
      {
        id: 'seraphina_focus',
        title: 'Touched by Grace',
        text: [
          'Seraphina\'s smile brightens the entire room, and you feel a warmth that has nothing to do with the fireplace. "You have good instincts," she says, moving closer with fluid grace. "Most mortals sense something different but can\'t name what it is."',
          'As she approaches, you catch glimpses of something shimmering behind her - not quite visible, but definitely there. Wings, perhaps, folded against her back like captured starlight.',
          '"I was an angel once," she says simply, as if discussing the weather. "A guardian assigned to protect humanity from supernatural threats. But I... chose a different path." Her eyes find yours. "Love has a way of changing even the most absolute of beings."',
          'The revelation hangs in the air. Morgana\'s playing has stopped entirely, and even Lilith seems to pay closer attention to this conversation.'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'ask_about_fall',
            text: '"You fell from grace? What could make an angel abandon heaven?"',
            consequence: 'Direct question • May reveal painful truth',
            effects: [{ characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'seraphina_fall_story'
          },
          {
            id: 'offer_acceptance',
            text: '"Whatever path you chose, you seem to have found peace here. That\'s what matters."',
            consequence: 'Non-judgmental • Shows acceptance',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_gratitude'
          },
          {
            id: 'ask_about_protection',
            text: '"As a former guardian, do you still protect people? Is that why you\'re here?"',
            consequence: 'Focuses on purpose • Shows practical thinking',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'protection_discussion'
          }
        ]
      },
      {
        id: 'deepening_bond',
        title: 'Acknowledgment of Souls',
        text: [
          'Lilith\'s hand finally touches your cheek, cool but electric. "I have existed for over four centuries," she whispers, "and never have I felt such immediate recognition of a kindred spirit."',
          'The library around you seems to fade as she steps closer. "This is not mere attraction, though you are undeniably beautiful. This is something deeper - a calling of soul to soul across the divide between mortal and eternal."',
          'Her thumb traces your lower lip gently. "But I must warn you... to love one such as me is to accept a love that will outlast your mortal span unless..." She pauses, the unspoken possibility hanging between you.',
          'You feel the weight of this moment. This is more than romance - it\'s a declaration that could reshape your entire existence.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'accept_love_mortal',
            text: '"I don\'t need forever to love completely. Let me love you as I am, for as long as I have."',
            consequence: 'Chooses mortal love • Romantic but bittersweet path',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'mortal_love_path'
          },
          {
            id: 'ask_about_forever',
            text: '"Unless what? Is there a way... could we truly be together forever?"',
            consequence: 'Seeks eternity • Opens transformation discussion',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'eternity_discussion'
          },
          {
            id: 'need_time_to_process',
            text: '"This is overwhelming. I feel it too, but I need time to understand what this means."',
            consequence: 'Thoughtful pause • Preserves choice while acknowledging feelings',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'contemplation_time'
          }
        ]
      },
      {
        id: 'eternity_discussion',
        title: 'The Price of Forever',
        text: [
          'Lilith\'s eyes grow serious, ancient wisdom replacing the softness of moments before. "There is a way... but it is not a decision to be made lightly, nor quickly. The transformation into our kind requires perfect willingness, deep love, and extraordinary circumstances."',
          'She takes your hands in hers. "Your great-aunt had the opportunity, multiple times over her decades here. She chose to remain mortal, to love us as herself rather than become like us. It was a choice we honored, even as we watched time take its inevitable toll."',
          '"The transformation is not just physical death and rebirth. It is the fundamental changing of your very essence, your relationship with time, with mortality, with the human world you\'ve always known."',
          'Her grip tightens slightly. "And it can only be given by one who loves you completely, at the moment when your love is absolute and your choice is made with full knowledge of what you sacrifice and what you gain."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'want_to_learn_more',
            text: '"Tell me everything. I want to understand completely before making any choice."',
            consequence: 'Seeks full knowledge • Wise approach',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'transformation_education'
          },
          {
            id: 'focus_on_present',
            text: '"Let\'s focus on now. I want to know you, love you, understand you before thinking of forever."',
            consequence: 'Present-focused • Builds relationship foundation',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'present_focus_romance'
          },
          {
            id: 'ask_about_cordelia_choice',
            text: '"Why did Cordelia choose to stay mortal? Did she ever regret it?"',
            consequence: 'Learns from past • Seeks wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'cordelia_wisdom'
          }
        ]
      },
      {
        id: 'morgana_performance',
        title: 'Songs of the Eternal Night',
        text: [
          'Morgana\'s eyes light up with genuine pleasure - the first time you\'ve seen her smile. "It has been... too long since someone asked to hear my music simply for the joy of it."',
          'Her fingers return to the keys, and she begins a new piece. This one is different - not melancholy, but complex and layered, building from whispered notes to soaring crescendos that seem to paint pictures in the air.',
          '"This is \'Midnight\'s Embrace,\'" she says as she plays. "I composed it during my first century as a vampire, when I was learning that darkness could be beautiful rather than merely feared."',
          'The music fills the room with an otherworldly presence. Lilith and Seraphina listen with rapt attention, but their eyes are on you, watching your reaction to Morgana\'s most personal expression.'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'moved_to_tears',
            text: 'Let the tears flow freely. "That was... transcendent. I\'ve never felt music like that before."',
            consequence: 'Emotional vulnerability • Deeply touches Morgana',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_emotional_connection'
          },
          {
            id: 'artistic_appreciation',
            text: '"The way you layered the harmonies... it\'s like you\'re painting with sound. You\'re not just a musician, you\'re an artist."',
            consequence: 'Technical appreciation • Shows understanding of craft',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_artistic_bond'
          },
          {
            id: 'ask_to_learn',
            text: '"Could you... would you teach me? I\'d love to learn from someone with your skill."',
            consequence: 'Requests mentorship • Creates ongoing connection',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'morgana_teaching_path'
          }
        ]
      },
      {
        id: 'seraphina_gratitude',
        title: 'The Light of Acceptance',
        text: [
          'Seraphina\'s expression transforms with such profound gratitude that you feel blessed just witnessing it. "You have no idea how rare it is to meet someone who offers acceptance without judgment or fear."',
          'She sits beside you, and her presence is like being wrapped in warm sunlight. "Most mortals, when they learn what I am, either worship me or reject me. You simply... see me as I am."',
          '"I fell because I loved too deeply," she continues softly. "I was assigned to guard a village, and I fell in love with their joy, their struggles, their humanity. When Heaven commanded me to let them face their trials alone, I refused."',
          'Her wings become visible for a moment - magnificent, white-gold feathers that seem to hold their own light. "I chose love over duty, and I\'ve never regretted it, even when it cost me everything I thought I knew about myself."'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'admire_her_choice',
            text: '"That wasn\'t falling - that was rising to something higher. Love over duty is the most divine choice of all."',
            consequence: 'Philosophical validation • Deeply meaningful to Seraphina',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'seraphina_philosophical_bond'
          },
          {
            id: 'ask_about_love',
            text: '"The love you felt for that village... is that the same kind of love you\'re capable of feeling for an individual?"',
            consequence: 'Personal question • Opens romantic possibility',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'seraphina_love_capacity'
          },
          {
            id: 'offer_understanding',
            text: '"I think I understand why you\'re here now. You\'re still protecting people, just in a different way."',
            consequence: 'Shows insight • Recognizes her continued purpose',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_purpose_recognition'
          }
        ]
      },
      {
        id: 'transformation_education',
        title: 'The Ritual of Becoming',
        text: [
          'Lilith leads you to a section of the library filled with ancient texts bound in materials you don\'t recognize. "These contain the true knowledge of our transformation - not the crude myths of being bitten or attacked, but the sacred ritual it truly is."',
          'She opens a tome written in multiple languages, some of which seem to shift and change as you look at them. "Vampiric transformation is a covenant between souls. It requires three elements: perfect trust, absolute love, and willing sacrifice from both parties."',
          '"The one who transforms must willingly give up their mortal life, their human connections, their place in the world they\'ve known. The one who grants the transformation must share their very essence, weakening themselves to strengthen another."',
          'Her finger traces ancient symbols. "It is not immortality given lightly. Many who attempt it fail because they lack the depth of connection required. The bond must be strong enough to anchor the soul through death and rebirth."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'understand_sacrifice',
            text: '"I begin to understand why Cordelia chose mortality. The sacrifice required... it\'s not just about dying, is it?"',
            consequence: 'Grasps deeper meaning • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'sacrifice_understanding'
          },
          {
            id: 'ask_about_bond_strength',
            text: '"How do you know when the bond is strong enough? What does that feel like?"',
            consequence: 'Practical question • Seeks measurable understanding',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'bond_strength_explanation'
          },
          {
            id: 'express_interest',
            text: '"This is... intense. But I want to understand more. Would you help me learn what this kind of love feels like?"',
            consequence: 'Shows commitment to learning • Romantic progression',
            effects: [{ characterId: 'lilith', affectionChange: 28 }],
            nextScene: 'love_development_path'
          }
        ]
      },
      {
        id: 'present_focus_romance',
        title: 'Building Something Beautiful',
        text: [
          'Lilith\'s smile is radiant, transforming her ancient features with pure joy. "Yes," she breathes. "Yes, that is exactly what I hoped you would say. Too many mortals become fixated on the destination rather than cherishing the journey."',
          'She takes your hand, intertwining your fingers with hers. "Let me show you my world, one day at a time. Let me learn your thoughts, your dreams, your fears. Let us build something beautiful together, whether it lasts decades or centuries."',
          '"There is magic in the present moment," she continues, leading you toward a window that overlooks moonlit gardens. "In the way you look at me, in the questions you ask, in the courage you show by being here at all."',
          'The moon illuminates her profile, and you realize this is what happiness looks like on someone who has lived for centuries - rare, precious, and transformative in its purity.'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'romantic_declaration',
            text: '"I want to know everything about you. Your history, your dreams, what makes you laugh... I want to love all of it."',
            consequence: 'Romantic commitment • Deepens relationship',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'romance_deepening'
          },
          {
            id: 'ask_about_her_dreams',
            text: '"You\'ve had centuries to dream. What do you dream about now?"',
            consequence: 'Personal question • Shows deep interest',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'lilith_dreams_revealed'
          },
          {
            id: 'share_your_feelings',
            text: '"I\'ve never felt this way before. Like I\'ve been waiting my whole life for this moment, this person."',
            consequence: 'Vulnerable honesty • Mutual emotional connection',
            effects: [{ characterId: 'lilith', affectionChange: 28 }],
            nextScene: 'mutual_recognition'
          }
        ]
      },
      {
        id: 'sanctuary_explanation',
        title: 'Haven from the Storm',
        text: [
          'The three women exchange glances, a silent communication passing between them before Lilith speaks. "The world is not kind to those who exist outside its understanding," she begins.',
          'Seraphina continues, "Angels who fall, vampires who choose love over hunger, beings who don\'t fit the neat categories humans create - we all need somewhere to belong."',
          'Morgana\'s voice is soft but clear. "Ravencroft Manor exists between worlds. Protected by old magic, sanctified by genuine love, and maintained by those who understand that monsters are often just people who\'ve been hurt too deeply."',
          'Lilith concludes, "Your great-aunt didn\'t just give us shelter - she gave us family. The question now is whether you\'ll choose to continue that legacy or forge your own path."'
        ],
        choices: [
          {
            id: 'commit_to_legacy',
            text: '"I want to continue what Cordelia started. This place, this sanctuary - it\'s important work."',
            consequence: 'Commits to sanctuary • Gains respect from all',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 12 }, { characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'sanctuary_commitment'
          },
          {
            id: 'need_to_understand_more',
            text: '"I need to understand more about what that means. What would be expected of me?"',
            consequence: 'Practical approach • Shows responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 10 }, { characterId: 'morgana', affectionChange: 8 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'sanctuary_responsibilities'
          },
          {
            id: 'focus_on_relationships',
            text: '"Right now, I\'m more interested in getting to know each of you as individuals than making big decisions about the future."',
            consequence: 'Personal focus • Opens individual relationship paths',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'individual_connections'
          }
        ]
      },
      // Missing scenes that are referenced in choices
      {
        id: 'morgana_interest',
        title: 'The Artist\'s Recognition',
        text: [
          'Morgana\'s silver eyes widen slightly, and she stands from the piano bench with fluid grace. "You understand," she says simply, but there\'s wonder in her voice. "Most hear only notes and melody. You hear the soul speaking."',
          'She approaches you slowly, her dark hair cascading like liquid shadow. "That piece was born from a night when I realized that immortality meant watching every beautiful thing I\'d ever known fade away. Yet you heard not just the sorrow, but the beauty within it."',
          'Lilith watches this exchange with interest, while the air between you and Morgana seems charged with artistic understanding. "Few have ever truly comprehended my music on first hearing," Morgana continues. "Perhaps you are more than you appear."'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'share_artistic_soul',
            text: '"I\'ve always felt that art is the language of experiences too deep for words. Your music speaks to something in me I didn\'t know existed."',
            consequence: 'Deep artistic connection • Profound bond',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'artistic_souls_unite'
          },
          {
            id: 'ask_about_inspiration',
            text: '"What inspires you to create? How do you find beauty in eternal existence?"',
            consequence: 'Philosophical question • Shows depth',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_philosophy'
          },
          {
            id: 'request_collaboration',
            text: '"I\'d love to understand your creative process. Could we... create something together?"',
            consequence: 'Collaboration offer • Builds creative partnership',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'creative_partnership'
          }
        ]
      },
      {
        id: 'morgana_composition',
        title: 'Original Composition',
        text: [
          'Morgana\'s expression becomes contemplative. "It\'s an original piece - \'Echoes of What Was.\' I composed it fifty years ago when I was struggling with the weight of memory."',
          'She runs her fingers along the piano\'s edge. "When you live for centuries, you accumulate so many memories of people you\'ve loved and lost, places that no longer exist, moments of beauty that only live in your mind."',
          '"This piece attempts to capture that feeling - not quite nostalgia, not quite grief, but something uniquely vampiric. The longing for temporal connection when you yourself exist outside of time."',
          'Her words carry the weight of genuine vulnerability, and you sense she rarely shares such personal insights about her work.'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'understand_loneliness',
            text: '"That sounds profoundly lonely. How do you bear the weight of so much memory?"',
            consequence: 'Empathetic response • Shows emotional intelligence',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_loneliness'
          },
          {
            id: 'appreciate_beauty',
            text: '"But those memories are also treasures. Your music makes them live again, shares them with others."',
            consequence: 'Positive perspective • Helps her see beauty in pain',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_hope'
          },
          {
            id: 'ask_for_more_music',
            text: '"Would you play it again? I\'d like to listen more carefully, to really understand what you\'re expressing."',
            consequence: 'Shows deep interest • Validates her art',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_second_performance'
          }
        ]
      },
      {
        id: 'morgana_observation',
        title: 'The Silent Understanding',
        text: [
          'You remain quiet, sensing that Morgana is someone who values thoughtful silence over hasty words. She observes you for a long moment, her silver eyes seeming to read something in your demeanor.',
          '"Wisdom," she says finally, with what might be approval. "Too many people feel compelled to fill silence with meaningless chatter. You understand that some moments require contemplation."',
          'She returns to the piano, playing a few soft, experimental notes. "Lilith, your guest has an interesting quality. She listens not just with her ears, but with her entire being."',
          'Lilith smiles knowingly. "I thought you might appreciate that about her. She sees beyond the surface of things."'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'acknowledge_compliment',
            text: '"Thank you. I\'ve learned that the most profound communications often happen in the spaces between words."',
            consequence: 'Philosophical response • Shows depth',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'philosophical_connection'
          },
          {
            id: 'ask_about_silence',
            text: '"Do you find that immortality makes silence more precious? With eternity stretching ahead, perhaps quiet moments become more valuable."',
            consequence: 'Thoughtful question • Shows understanding of immortal perspective',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'silence_discussion'
          },
          {
            id: 'express_gratitude',
            text: '"I\'m honored that you would share your music with a stranger. Art is such a personal gift."',
            consequence: 'Grateful response • Shows appreciation for art',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'artistic_gratitude'
          }
        ]
      },
      {
        id: 'seraphina_truth',
        title: 'Angelic Revelation',
        text: [
          'Seraphina\'s smile is both sad and beautiful. "I was, once upon a time. A guardian angel, assigned to protect humanity from supernatural threats that would otherwise overwhelm them."',
          'As she speaks, the shimmer behind her becomes more visible - magnificent wings that seem to be made of condensed starlight and divine grace. "But I fell in love with the very beings I was meant to protect from a distance."',
          '"When Heaven commanded me to remain detached, to let humans face their trials without direct intervention, I... rebelled. Love, I discovered, is stronger than duty, more divine than obedience."',
          'Her wings fold closer to her body, but remain visible. "I chose to fall rather than abandon those I had grown to love. And in falling, I found my true purpose."'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'admire_sacrifice',
            text: '"You gave up paradise for love? That\'s not falling - that\'s the most divine act imaginable."',
            consequence: 'Validates her choice • Profound emotional impact',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'divine_validation'
          },
          {
            id: 'ask_about_consequences',
            text: '"What were the consequences of your choice? Do you ever regret it?"',
            consequence: 'Thoughtful question • Shows understanding of sacrifice',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'consequences_discussion'
          },
          {
            id: 'touch_her_wing',
            text: 'Gently reach out toward her wing. "May I? They\'re beautiful."',
            consequence: 'Intimate gesture • Shows acceptance and wonder',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'wing_touch_scene'
          }
        ]
      },
      {
        id: 'seraphina_promise',
        title: 'Guardian\'s Vow',
        text: [
          'Seraphina\'s expression grows solemn and deeply moved. "Your trust is a gift I will treasure," she says, her voice carrying the weight of divine promise. "I swear to you, by all that I am and all that I was, no harm will come to you while I draw breath."',
          'She extends her hand, and when you take it, you feel a warmth that seems to flow directly into your soul. "I have watched over mortals for millennia, but never has anyone placed their faith in me so completely, so immediately."',
          '"You remind me why I chose love over duty," she continues, her pale blue eyes shining. "Why I believed that connection and compassion were more sacred than celestial hierarchy."',
          'Around you, the very air seems to shimmer with protective energy, and you feel safer than you have in your entire life.'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'reciprocate_protection',
            text: '"And I promise to trust you completely. You have something pure about you that calls to my soul."',
            consequence: 'Mutual bond • Deep emotional connection',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }],
            nextScene: 'mutual_protection_bond'
          },
          {
            id: 'ask_about_purpose',
            text: '"You said you found your true purpose in falling. What is that purpose now?"',
            consequence: 'Philosophical question • Shows interest in her journey',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'purpose_revelation'
          },
          {
            id: 'express_wonder',
            text: '"I can feel the protection around me. It\'s like being wrapped in pure love and safety."',
            consequence: 'Acknowledges her power • Shows spiritual sensitivity',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'spiritual_connection'
          }
        ]
      },
      {
        id: 'danger_revealed',
        title: 'The Shadows Beyond',
        text: [
          'Seraphina and Lilith exchange a meaningful look before Seraphina speaks. "There are... others of our kind who do not share our philosophy about coexistence with mortals."',
          '"Ravencroft Manor exists as a sanctuary because your great-aunt established it with powerful protections," Lilith adds. "But those protections only extend so far, and there are those who would see our peaceful existence here as a threat to the old ways."',
          'Seraphina\'s expression grows grave. "Some vampires believe mortals are only good for feeding. Some angels see my choice to fall as an abomination that must be corrected. And there are darker things than either that hunt in the spaces between worlds."',
          '"Your inheritance of this place makes you a target," Lilith says quietly. "Not because of who you are, but because of what you represent - the continuation of Cordelia\'s legacy of protection and peace."'
        ],
        choices: [
          {
            id: 'accept_danger',
            text: '"I understand the risks. If Cordelia could face these dangers, so can I."',
            consequence: 'Brave acceptance • Shows courage and determination',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'courage_acknowledged'
          },
          {
            id: 'ask_for_training',
            text: '"Then teach me. Help me understand how to protect myself and this place."',
            consequence: 'Practical approach • Shows willingness to learn',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 22 }],
            nextScene: 'training_begins'
          },
          {
            id: 'fear_but_determined',
            text: '"I\'m terrified, but I won\'t run. This place meant something to Cordelia, and now it means something to me."',
            consequence: 'Honest vulnerability • Shows emotional strength',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'determined_despite_fear'
          }
        ]
      },
      // Additional missing scenes for complete story flow
      {
        id: 'coven_explanation',
        title: 'The Ancient Bond',
        text: [
          'Lilith pauses thoughtfully. "Three of us call this place home permanently. Myself, Morgana, and Seraphina. We are... an unusual coven, bound not by blood or maker, but by choice and circumstance."',
          '"Morgana was turned during the Renaissance - a brilliant composer whose music was too pure for mortal understanding. Seraphina... she chose to fall from grace rather than abandon those she had grown to love."',
          '"And I am the eldest, turned during the dark ages when survival meant learning to find beauty in shadow. We came together here because we shared a vision - that our eternal existence could be used for preservation rather than destruction."',
          'Her voice grows warmer. "Your great-aunt understood this. She helped us create something unprecedented - a sanctuary where supernatural beings could exist peacefully, contributing rather than consuming."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'ask_about_cordelia_role',
            text: '"What exactly was Cordelia\'s role in all this? How did a mortal woman become so important to immortal beings?"',
            consequence: 'Seeks understanding • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_legacy_revealed'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored to inherit such a meaningful legacy. I want to understand how I can continue what she started."',
            consequence: 'Accepts responsibility • Shows commitment',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'legacy_continuation'
          },
          {
            id: 'ask_about_others',
            text: '"Are there other places like this? Other covens trying to coexist peacefully?"',
            consequence: 'Broader perspective • Shows strategic thinking',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'wider_world_discussion'
          }
        ]
      },
      {
        id: 'formal_introductions',
        title: 'Proper Greetings',
        text: [
          'Your formal approach seems to please all three women. Morgana inclines her head gracefully. "Cordelia spoke of you often in her letters. She was very proud of your accomplishments in the mortal world."',
          'Seraphina moves closer, her presence radiating warmth and protection. "She also mentioned your open mind and kind heart. Qualities that are rare and precious in any world."',
          'Lilith watches the interaction with approval. "Your great-aunt chose well when she named you as her heir. This place requires someone who can respect the delicate balance we\'ve created here."',
          'The room feels charged with possibility, as if this moment is the beginning of something significant. You sense that your response here will set the tone for all future relationships.'
        ],
        choices: [
          {
            id: 'ask_about_letters',
            text: '"Cordelia wrote about me? What did she tell you?"',
            consequence: 'Personal curiosity • Shows interest in connection',
            effects: [{ characterId: 'lilith', affectionChange: 8 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'cordelia_letters'
          },
          {
            id: 'express_uncertainty',
            text: '"I hope I can live up to her example. This is all so new and overwhelming."',
            consequence: 'Honest vulnerability • Invites guidance',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 8 }],
            nextScene: 'reassurance_offered'
          },
          {
            id: 'ask_about_balance',
            text: '"What kind of balance? I want to understand what maintaining this sanctuary truly means."',
            consequence: 'Practical focus • Shows responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'sanctuary_responsibilities'
          }
        ]
      },
      {
        id: 'sanctuary_explanation',
        title: 'Haven of the Supernatural',
        text: [
          'The three women exchange meaningful glances before Lilith speaks. "A sanctuary, in our world, is more than just a safe place. It\'s a location where supernatural beings can exist without the constant threat of hunters, hostile covens, or celestial judgment."',
          'Seraphina adds, "The protections here are both mystical and practical. Cordelia worked with us to establish wards that hide our presence from those who would do us harm, while also preventing us from causing harm to innocents."',
          'Morgana\'s voice is soft but clear. "It means we can pursue beauty, creation, and connection rather than mere survival. We can grow and learn rather than simply endure."',
          'Lilith concludes, "But such places are rare and precious. They require constant maintenance, both magical and mundane. And they require a mortal anchor - someone who bridges our world and yours."'
        ],
        choices: [
          {
            id: 'accept_anchor_role',
            text: '"And now I\'m meant to be that anchor? I accept that responsibility."',
            consequence: 'Accepts destiny • Major story commitment',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'anchor_accepted'
          },
          {
            id: 'ask_about_dangers',
            text: '"What happens if the sanctuary fails? What are we protected from exactly?"',
            consequence: 'Seeks understanding of stakes • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'protection_details'
          },
          {
            id: 'ask_about_magic',
            text: '"How do the wards work? Is there magic I need to learn or maintain?"',
            consequence: 'Practical questions • Shows readiness to learn',
            effects: [{ characterId: 'morgana', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'magical_education'
          }
        ]
      },
      {
        id: 'transformation_begin',
        title: 'The Path to Eternity',
        text: [
          'Lilith\'s eyes blaze with an intensity that takes your breath away. "You would truly choose this path? Even knowing that there is no return, no reversal?"',
          'She takes your hands, her grip firm and cool. "The transformation is not something that can be rushed or taken lightly. It requires perfect trust, absolute love, and complete understanding of what you sacrifice and what you gain."',
          '"Your mortality, your human connections, your relationship with time itself - all of this will change forever. But you will gain strength, immortality, and a depth of experience beyond mortal comprehension."',
          'Her voice drops to a whisper. "Most importantly, you will gain the ability to love with the intensity of centuries, to protect what matters with supernatural power, and to create beauty that outlasts civilizations."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'reaffirm_choice',
            text: '"I understand the cost and I accept it willingly. I want to share eternity with you."',
            consequence: 'Complete commitment • Begins transformation arc',
            effects: [{ characterId: 'lilith', affectionChange: 35 }],
            nextScene: 'transformation_ritual_begins'
          },
          {
            id: 'need_more_time',
            text: '"I want this, but I need more time to fully understand what I\'m choosing. Can we wait until I\'m completely certain?"',
            consequence: 'Thoughtful caution • Delays but doesn\'t reject',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'transformation_delayed'
          },
          {
            id: 'ask_about_process',
            text: '"Tell me everything about the transformation process. I want to understand every detail before I commit."',
            consequence: 'Seeks complete knowledge • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'transformation_education_detailed'
          }
        ]
      },
      // Complete the remaining missing scenes
      {
        id: 'artistic_souls_unite',
        title: 'Kindred Spirits',
        text: [
          'Morgana\'s eyes light up with a joy you sense she rarely experiences. "Finally," she breathes, "someone who understands that creation is the closest thing to divine communion available to our kind."',
          'She moves to stand beside you, and you feel an electric connection of shared artistic passion. "I have composed for centuries, but always in isolation. The idea of sharing that creative fire with another soul..."',
          'Her hand hovers near yours. "Would you truly wish to explore that path with me? To dive deep into the wells of inspiration and see what we might create together?"',
          'The offer carries weight beyond mere collaboration - this is an invitation into the most sacred part of her immortal existence.'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'accept_creative_bond',
            text: '"Yes, absolutely. I want to explore every facet of creativity with you."',
            consequence: 'Deep artistic partnership • Major relationship progression',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'creative_communion'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored you would trust me with something so personal and sacred to you."',
            consequence: 'Respectful appreciation • Builds trust',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'honored_trust'
          },
          {
            id: 'ask_about_process',
            text: '"How do we begin? What does collaborative creation look like for an immortal artist?"',
            consequence: 'Practical interest • Shows commitment to learning',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'creative_process_explanation'
          }
        ]
      },
      {
        id: 'divine_validation',
        title: 'The Highest Love',
        text: [
          'Seraphina\'s entire being seems to radiate pure light as tears of joy stream down her face. "Never... in all my millennia of existence... has anyone seen my choice as divine rather than damning."',
          'She takes your hands, and you feel the warmth of starlight flowing between you. "Heaven taught me that love should be conditional, measured, controlled. But when I saw mortals love fiercely, completely, without reservation... I knew they understood something divine that angels had forgotten."',
          '"You see it too," she whispers in wonder. "That love without limits, compassion without judgment, protection without dominion - these are the truly sacred acts."',
          'Her wings spread wide, magnificent and glowing, as if your words have restored something fundamental to her nature.'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'embrace_her_truth',
            text: '"Your love is the most divine thing I\'ve ever witnessed. Thank you for choosing to fall."',
            consequence: 'Complete validation • Profound spiritual connection',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'ask_about_heaven',
            text: '"What was Heaven like before you understood the true nature of love?"',
            consequence: 'Deep philosophical question • Shows interest in her journey',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'heaven_memories'
          },
          {
            id: 'offer_comfort',
            text: 'Gently wipe her tears. "You don\'t have to carry that pain alone anymore."',
            consequence: 'Tender gesture • Offers emotional support',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'comfort_accepted'
          }
        ]
      },
      {
        id: 'courage_acknowledged',
        title: 'Worthy Heir',
        text: [
          'Both Lilith and Seraphina regard you with new respect. "Cordelia would be proud," Lilith says quietly. "She faced these same dangers with exactly that kind of determined courage."',
          'Seraphina nods approvingly. "True bravery isn\'t the absence of fear - it\'s choosing to stand firm despite that fear. You have the heart of a protector."',
          'Morgana, who has been quietly observing, speaks up. "Courage, yes. But also wisdom. You understand that some things are worth fighting for, worth risking everything to preserve."',
          'The three exchange meaningful looks. "Very well," Lilith decides. "If you truly wish to continue Cordelia\'s legacy, then we will teach you what you need to know."'
        ],
        choices: [
          {
            id: 'eager_to_learn',
            text: '"I\'m ready to learn everything. Where do we start?"',
            consequence: 'Enthusiastic commitment • Opens training paths',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'training_begins'
          },
          {
            id: 'ask_about_cordelia_struggles',
            text: '"What challenges did Cordelia face? I want to understand what I\'m truly inheriting."',
            consequence: 'Seeks wisdom from history • Shows thoughtfulness',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'cordelia_challenges'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for trusting me with this responsibility. I won\'t let you down."',
            consequence: 'Grateful acceptance • Builds trust',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'trust_established'
          }
        ]
      },
      {
        id: 'anchor_accepted',
        title: 'The Sacred Covenant',
        text: [
          'The three women exchange glances filled with relief and hope. "Then it is decided," Lilith says with formal gravity. "You accept the role of Anchor to Ravencroft Sanctuary."',
          'Seraphina steps forward, her wings becoming visible and spreading wide. "By my divine nature, I witness this covenant."',
          'Morgana rises from the piano, her silver eyes bright. "By my artistic soul, I witness this covenant."',
          'Lilith places her hand over her heart. "By my ancient blood, I witness this covenant. You are now bound to this place and to us, as we are bound to you."',
          'You feel something fundamental shift in the air around you - a sense of belonging, of purpose, of destiny fulfilled.'
        ],
        choices: [
          {
            id: 'embrace_destiny',
            text: '"I feel it - the connection, the responsibility. I\'m exactly where I\'m meant to be."',
            consequence: 'Complete acceptance • Unlocks full sanctuary powers',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'sanctuary_awakening'
          },
          {
            id: 'ask_about_powers',
            text: '"What does this mean for me? What abilities or responsibilities do I now have?"',
            consequence: 'Practical questions • Shows readiness to learn',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'anchor_powers_explained'
          },
          {
            id: 'solemn_vow',
            text: '"I swear to protect this sanctuary and everyone in it with my life."',
            consequence: 'Sacred oath • Deep commitment',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'sacred_vow_sealed'
          }
        ]
      },
      {
        id: 'training_begins',
        title: 'The First Lessons',
        text: [
          'Over the following days, your education in the supernatural world begins in earnest. Lilith teaches you about vampire politics and the delicate balance of power between different supernatural factions.',
          'Seraphina instructs you in protective wards and divine energy manipulation, showing you how to channel your mortal life force in ways that can shield both yourself and others.',
          'Morgana shares the deeper mysteries - how music and art can bind spirits, how creativity itself can be a form of magic, how beauty can be a weapon against darkness.',
          'You discover that being the Anchor gives you unique abilities: you can sense supernatural presences, strengthen the manor\'s protections, and even provide energy to your immortal companions when they need it most.'
        ],
        choices: [
          {
            id: 'focus_on_protection',
            text: 'Concentrate on learning protective magic and defensive strategies.',
            consequence: 'Guardian path • Builds defensive abilities',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'guardian_training'
          },
          {
            id: 'focus_on_diplomacy',
            text: 'Study supernatural politics and inter-faction relations.',
            consequence: 'Diplomat path • Builds knowledge and connections',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'diplomatic_training'
          },
          {
            id: 'focus_on_creativity',
            text: 'Dive deep into the mystical aspects of art and creation.',
            consequence: 'Artist path • Builds creative magical abilities',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'creative_magic_training'
          }
        ]
      },
      // Final batch of missing scenes
      {
        id: 'morgana_philosophy',
        title: 'The Eternal Creative Soul',
        text: [
          'Morgana settles beside the piano, her fingers absently playing soft, contemplative notes. "Inspiration... it changes when you have eternity to pursue it. At first, I thought immortality would mean endless creativity, infinite time to perfect my craft."',
          '"But I discovered something unexpected," she continues, her voice carrying centuries of experience. "Beauty becomes more precious when you understand how fleeting it truly is. Each perfect moment, each sublime melody, each connection with another soul - these become sacred because they exist in defiance of an indifferent universe."',
          'Her playing grows more complex, weaving melodies that seem to capture the very essence of longing. "I find inspiration in mortality itself - in the courage of mortals who create knowing their time is limited, in the intensity of love that burns bright precisely because it cannot last forever."',
          'She looks at you directly. "You inspire me because you represent both the beauty and the brevity that gives meaning to art."'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'philosophical_depth',
            text: '"So immortality taught you to value mortal perspective? That\'s beautifully paradoxical."',
            consequence: 'Deep understanding • Appreciates the irony',
            effects: [{ characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'paradox_appreciation'
          },
          {
            id: 'offer_collaboration',
            text: '"Then let me share my mortal perspective with your immortal artistry. What could we create together?"',
            consequence: 'Collaboration offer • Bridges mortal/immortal divide',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'creative_partnership'
          },
          {
            id: 'express_honor',
            text: '"Being your inspiration is the highest compliment I could receive from an artist of your caliber."',
            consequence: 'Gracious response • Shows humility',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'artistic_appreciation'
          }
        ]
      },
      {
        id: 'wing_touch_scene',
        title: 'Sacred Contact',
        text: [
          'Seraphina nods, extending one magnificent wing toward you. "Few mortals have ever touched an angel\'s wing. Even fewer have done so with such reverence."',
          'Your fingers make contact with the soft, luminous feathers, and immediately you feel a surge of warmth and peace unlike anything you\'ve ever experienced. The wing is simultaneously substantial and ethereal, like touching solidified starlight.',
          'Through the contact, you sense glimpses of her memories - soaring through celestial realms, standing guard over sleeping mortals, the moment she chose love over duty and felt her connection to Heaven strain and finally break.',
          '"You feel it, don\'t you?" she whispers. "The weight of divine purpose transformed into something more personal, more real." Her wing curves slightly, as if embracing your touch. "This is what love truly is - choosing connection over perfection."'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'understand_sacrifice',
            text: '"I can feel the magnitude of what you gave up, and the beauty of what you gained instead."',
            consequence: 'Deep empathy • Understands divine sacrifice',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'divine_understanding'
          },
          {
            id: 'marvel_at_beauty',
            text: '"Your wings are the most beautiful thing I\'ve ever seen. Thank you for trusting me with this."',
            consequence: 'Appreciation • Shows wonder and gratitude',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }],
            nextScene: 'beauty_acknowledged'
          },
          {
            id: 'ask_about_flight',
            text: '"Do you still fly? Do you miss the celestial realms?"',
            consequence: 'Curious question • Shows interest in her nature',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'flight_memories'
          }
        ]
      },
      {
        id: 'morgana_loneliness',
        title: 'The Weight of Memory',
        text: [
          'Morgana\'s expression grows distant and melancholy. "The loneliness... it\'s not what mortals imagine. It\'s not about being alone - it\'s about being the sole keeper of countless precious memories."',
          '"I remember the sound of rain on cobblestones in Prague, 1894. The laughter of a child I taught piano to in Vienna, 1847. The way candlelight looked in my lover\'s eyes in Rome, 1623." Her voice grows softer. "All of those people, all of those moments... they live only in my memory now."',
          'She plays a few haunting notes. "Sometimes I feel like a living museum, preserving beauty that would otherwise be lost forever. But museums are cold, solitary places."',
          'Her silver eyes find yours. "Until tonight, I had resigned myself to being the sole guardian of all that beautiful loss. But perhaps... perhaps some memories are meant to be shared."'
        ],
        character: characters.morgana,
        choices: [
          {
            id: 'offer_to_share_burden',
            text: '"Let me help you carry that weight. Share those memories with me - let them live in two hearts instead of one."',
            consequence: 'Generous offer • Willingness to share emotional burden',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'memory_sharing'
          },
          {
            id: 'create_new_memories',
            text: '"Then let\'s create new memories together. Beautiful moments that we can both treasure."',
            consequence: 'Forward-looking • Focus on creating rather than preserving',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'new_memory_creation'
          },
          {
            id: 'appreciate_preservation',
            text: '"You\'re not just a museum - you\'re a living testament to the power of beauty to transcend time."',
            consequence: 'Reframes perspective • Shows deep appreciation',
            effects: [{ characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'consequences_discussion',
        title: 'The Price of Love',
        text: [
          'Seraphina\'s expression grows thoughtful, tinged with both sadness and resolve. "The consequences were... severe. When an angel chooses to fall, it\'s not simply a matter of relocation. It\'s a fundamental transformation of your very essence."',
          '"I lost my direct connection to the Divine Source, my ability to exist in multiple planes simultaneously, my perfect certainty about the nature of good and evil." She touches her wings gently. "These wings, once instruments of celestial power, became symbols of my exile."',
          '"But more than that," she continues, her voice growing stronger, "I lost the community of my fellow angels, the perfect harmony of celestial existence, the comfort of absolute purpose and unquestioning faith."',
          'Her pale blue eyes meet yours. "And yet... I have never regretted it. Every loss pales beside what I gained - the ability to truly love, to choose compassion over duty, to be more than what I was created to be."'
        ],
        character: characters.seraphina,
        choices: [
          {
            id: 'admire_growth',
            text: '"You didn\'t lose yourself - you found yourself. You became more than heaven intended."',
            consequence: 'Celebrates personal growth • Validates transformation',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'offer_community',
            text: '"You lost one community but gained another. Here, with Lilith and Morgana... and now with me."',
            consequence: 'Offers belonging • Creates new connections',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'new_community'
          },
          {
            id: 'acknowledge_sacrifice',
            text: '"Such a profound sacrifice, made out of pure love. I\'m in awe of your courage."',
            consequence: 'Respectful acknowledgment • Shows understanding',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'courage_recognition'
          }
        ]
      },
      {
        id: 'cordelia_legacy_revealed',
        title: 'The Guardian\'s Tale',
        text: [
          'Lilith\'s expression becomes reverent as she speaks of your great-aunt. "Cordelia was extraordinary, even by the standards of remarkable mortals. She inherited this manor when she was barely twenty-five, much as you have now."',
          '"But unlike most mortals who discover the supernatural world, she didn\'t flee or try to destroy what she found. Instead, she saw possibility where others saw only danger." Lilith moves to an old portrait on the wall. "She proposed something unprecedented - a sanctuary where supernatural beings could exist peacefully, contributing to the world rather than merely surviving in it."',
          '"For sixty years, she served as our anchor to the mortal world, helping us navigate human society while protecting us from those who would hunt us. She facilitated peace treaties between hostile factions, provided safe passage for refugees from supernatural conflicts, and maintained the delicate balance that keeps this place hidden."',
          'Her voice grows warm with affection. "But more than that, she loved us - not as exotic curiosities or dangerous creatures to be managed, but as individuals deserving of friendship and respect. She was the first mortal to see us as more than our supernatural natures."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'honor_legacy',
            text: '"I want to continue her work, to be worthy of the trust she built and the love she shared."',
            consequence: 'Accepts legacy • Major commitment to sanctuary',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'legacy_acceptance'
          },
          {
            id: 'ask_about_love',
            text: '"Did she ever fall in love with any of you? How did she handle those feelings?"',
            consequence: 'Personal question • Seeks guidance on mortal/immortal love',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'cordelia_love_story'
          },
          {
            id: 'understand_challenges',
            text: '"What were the greatest challenges she faced? What almost broke the sanctuary?"',
            consequence: 'Strategic thinking • Prepares for future challenges',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'sanctuary_challenges'
          }
        ]
      },
      // Additional scenes for the polite introduction path
      {
        id: 'cordelia_friendship',
        title: 'A Bond Beyond Time',
        text: [
          'Lilith\'s eyes grow distant with memory, and for a moment, you see vulnerability beneath her composed exterior. "Close friends... yes, though that term hardly captures what Cordelia meant to us." She moves toward a portrait of your great-aunt.',
          '"When she first arrived at this manor, we expected her to flee in terror or attempt to have us destroyed. Instead, she brought us tea and asked if we needed anything." Lilith\'s voice carries amazement even after all these years.',
          '"Over six decades, she became our anchor to humanity, our protector, and in many ways, our family. She loved us not despite what we are, but because of who we chose to be with that nature."',
          'Her gaze returns to you. "The bond we shared transcended the typical boundaries between mortal and immortal. She saw past our supernatural nature to the individuals beneath, and we loved her fierce, kind heart in return."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'understand_bond',
            text: '"That sounds like a beautiful friendship. I can see why you miss her."',
            consequence: 'Empathetic response • Shows emotional intelligence',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'shared_grief'
          },
          {
            id: 'ask_about_others',
            text: '"You said \'us\' - are there others here I should meet?"',
            consequence: 'Practical interest • Shows readiness to meet the coven',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'meet_the_coven'
          },
          {
            id: 'express_hope',
            text: '"I hope I can honor that bond she created. I\'d like to understand what made your friendship so special."',
            consequence: 'Respectful aspiration • Shows desire to continue legacy',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'legacy_continuation'
          }
        ]
      },
      {
        id: 'atmospheric_awareness',
        title: 'Sensitivity to the Unseen',
        text: [
          'Lilith pauses, studying you with new interest. "Most mortals feel nothing when they enter our domain, or if they do, they dismiss it as imagination. You, however, have a rare sensitivity."',
          'She gestures to the candlelit interior where shadows seem to dance with purpose. "This manor exists partially outside normal reality. The barriers between worlds are thin here, maintained by ancient wards and newer protections."',
          '"Your ability to sense the atmospheric shift suggests you have the potential to understand our world far more easily than most." Her voice carries approval and something that might be excitement.',
          '"Cordelia had the same gift. It\'s part of what made her such an effective guardian and mediator between our realm and the mortal world."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'ask_about_gift',
            text: '"Is this sensitivity something I inherited? Can it be developed further?"',
            consequence: 'Seeks understanding • Shows interest in supernatural abilities',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'supernatural_potential'
          },
          {
            id: 'ask_about_wards',
            text: '"You mentioned wards and protections. What are you protecting this place from?"',
            consequence: 'Security-focused • Shows strategic thinking',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'protection_details'
          },
          {
            id: 'express_fascination',
            text: '"This is incredible. I\'ve always felt like there was more to the world than what most people see."',
            consequence: 'Wonder and openness • Shows natural acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'natural_acceptance'
          }
        ]
      },
      {
        id: 'considerate_inquiry',
        title: 'Gracious Concern',
        text: [
          'Lilith\'s expression brightens with genuine pleasure at your consideration. "How remarkably thoughtful. Cordelia raised you well, even from a distance." She seems almost moved by your courtesy.',
          '"Your arrival changes nothing we wish to preserve and everything we hope to restore," she says warmly. "We have lived here peacefully for decades under Cordelia\'s protection, but we have missed having a mortal anchor to help us navigate the changing world."',
          'She guides you into a beautifully appointed sitting room. "The arrangements your great-aunt established were mutually beneficial. We provided her with protection, knowledge, and companionship, while she offered us legitimacy, understanding, and connection to humanity."',
          '"What we hope is that you might choose to continue that partnership. But unlike legal contracts, this arrangement must be built on genuine care and willing participation from all parties."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'express_interest',
            text: '"I\'m very interested in learning more about this partnership. What would it involve?"',
            consequence: 'Genuine curiosity • Shows openness to commitment',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'partnership_explanation'
          },
          {
            id: 'ask_about_protection',
            text: '"You mentioned providing protection. What kind of dangers exist that I should be aware of?"',
            consequence: 'Practical concerns • Shows responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'danger_discussion'
          },
          {
            id: 'offer_provisional_agreement',
            text: '"I can\'t make any permanent commitments yet, but I\'d like to try continuing Cordelia\'s work, at least initially."',
            consequence: 'Cautious but willing • Shows thoughtful approach',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'provisional_agreement'
          }
        ]
      },
      {
        id: 'supernatural_revelation',
        title: 'The Truth Unveiled',
        text: [
          'Relief washes over Lilith\'s features at your open-minded response. "Your willingness to accept the unknown is a gift, one your great-aunt shared." She settles gracefully across from you.',
          '"We are vampires," she says simply, watching for your reaction. "Ancient beings who have found sanctuary in this place for over three centuries. Not the monsters of human folklore, but individuals who have learned to exist peacefully alongside mortality."',
          '"Cordelia discovered our nature within days of inheriting this manor, but instead of fleeing or seeking to destroy us, she chose to understand us. She became our protector, our friend, and the bridge between our world and yours."',
          'Her dark eyes hold yours steadily. "We hope you might choose a similar path, but we will not pressure or coerce you. The choice must be yours alone, made with full knowledge and genuine willingness."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'accept_with_wonder',
            text: '"Vampires... that explains so much about this place. I\'m amazed rather than afraid."',
            consequence: 'Wonder over fear • Shows supernatural acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'amazed_acceptance'
          },
          {
            id: 'ask_practical_questions',
            text: '"What does this mean for day-to-day life? How does coexistence actually work?"',
            consequence: 'Practical focus • Shows adaptability',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'practical_coexistence'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored that you\'re trusting me with this truth. I want to be worthy of that trust."',
            consequence: 'Grateful response • Shows respect for confidence',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'trust_acknowledged'
          }
        ]
      },
      {
        id: 'gradual_revelation',
        title: 'Gentle Understanding',
        text: [
          'Lilith nods approvingly. "Wisdom often lies in recognizing one\'s limits. Cordelia took nearly a month to fully accept and understand our nature. There is no shame in proceeding carefully."',
          'She settles into a chair across from you, her movements graceful and deliberately non-threatening. "Perhaps we should begin with the basics. This manor has been my home for over four centuries. I am... not entirely human, though I was once."',
          '"The others who live here share similar natures. We are beings who exist somewhat outside the normal flow of mortal time and society, but we have chosen to live peacefully, contributing to the world rather than taking from it."',
          'Her voice is patient, giving you time to process. "Your great-aunt helped us maintain that peaceful existence by serving as our connection to the human world. She was our anchor, our protector, and our dear friend."'
        ],
        character: characters.lilith,
        choices: [
          {
            id: 'ask_about_nature',
            text: '"When you say \'not entirely human,\' what do you mean exactly?"',
            consequence: 'Seeks clarification • Shows readiness for more truth',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'nature_explanation'
          },
          {
            id: 'focus_on_cordelia',
            text: '"Tell me more about Cordelia\'s role. What made her such a good protector and friend?"',
            consequence: 'Family focus • Shows interest in legacy',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'cordelia_role_detailed'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for being so patient with me. This is all quite extraordinary."',
            consequence: 'Appreciative response • Shows good manners',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      // Trait-specific special scenes

      {
        id: 'athletic_demonstration',
        title: 'Physical Confidence',
        text: [
          'Moving with the fluid grace of someone comfortable in their body, you demonstrate your athletic nature. Perhaps it\'s the way you carry yourself, balanced and alert, or how you navigate the manor\'s corridors with confident steps.',
          'Lilith notices immediately. "You move like someone who takes care of their body. That\'s wise, especially in our world where physical capability can mean the difference between life and death."',
          'She gestures toward a portrait of a woman in riding attire. "Your great-aunt was also athletic in her youth. She believed that a strong body housed a strong spirit, and both were necessary for the challenges she faced here."',
          'There\'s approval in her gaze as she continues. "Physical prowess will serve you well. There may come times when you need to run, fight, or simply endure more than most mortals could manage."'
        ],
        choices: [
          {
            id: 'ask_about_challenges',
            text: '"What kind of physical challenges might I face here?"',
            consequence: 'Practical preparation • Shows readiness for danger',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'physical_challenges_explained'
          },
          {
            id: 'offer_protection',
            text: '"I can handle myself, and I\'d be willing to help protect others if needed."',
            consequence: 'Protective offer • Shows courage and strength',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'protection_offered'
          },
          {
            id: 'connect_with_cordelia',
            text: '"I\'d like to hear more about Cordelia\'s experiences. We seem to share similar strengths."',
            consequence: 'Family connection • Shows interest in legacy',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'cordelia_physical_stories'
          }
        ]
      },
      {
        id: 'creative_insight',
        title: 'The Artist\'s Perspective',
        text: [
          'Your creative nature allows you to see beyond the surface of things, to perceive the artistic composition of the moment - the way candlelight creates dramatic shadows, how Lilith\'s pose echoes classical portraiture, the musical quality of her voice.',
          '"This place is like a living artwork," you observe. "Every detail seems deliberately chosen to create atmosphere and meaning. The architecture, the lighting, even the way you speak - it\'s all composed like a symphony."',
          'Lilith\'s eyes light up with genuine pleasure. "How perceptive. Yes, we have cultivated this place as more than mere shelter. It is our canvas, our stage, our sanctuary given form through centuries of artistic vision."',
          'She moves toward a ornate music box on a side table. "Your artistic soul recognizes what we\'ve created here. That suggests you might understand what we are in ways that purely practical minds cannot."'
        ],
        choices: [
          {
            id: 'appreciate_composition',
            text: '"I can see the love and care that went into every artistic choice. This isn\'t just a home - it\'s a masterpiece."',
            consequence: 'Artistic appreciation • Deep understanding of their vision',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'offer_contribution',
            text: '"I\'d love to contribute to this artistic vision. What role could creativity play in your community?"',
            consequence: 'Creative collaboration • Shows desire to contribute',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'creative_contribution'
          },
          {
            id: 'ask_about_morgana',
            text: '"I sense there\'s another artist here. Someone who works with music, perhaps?"',
            consequence: 'Artistic intuition • Shows sensitivity to creative energy',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_creative_connection'
          }
        ]
      },
      // Flaw-triggered scenes for ongoing character development
      {
        id: 'hemophobia_triggered',
        title: 'Blood and Fear',
        text: [
          'As the conversation turns to the supernatural nature of your hosts, the implications become clear - these are vampires, beings who sustain themselves on blood. The thought makes your stomach lurch with familiar dread.',
          'Your hemophobia has always been a challenge, but here, surrounded by creatures who embody everything your phobia represents, it becomes almost overwhelming. You struggle to maintain composure.',
          'Lilith notices your distress immediately. "You\'re pale," she observes with concern. "Are you feeling unwell? Perhaps this revelation is more shocking than I anticipated."',
          'The irony isn\'t lost on you - inheriting a manor full of vampires when the sight of blood makes you weak. But there\'s kindness in Lilith\'s voice, genuine concern rather than predatory interest.'
        ],
        choices: [
          {
            id: 'admit_hemophobia',
            text: '"I have hemophobia - the sight of blood terrifies me. I know it might seem strange, given the circumstances."',
            consequence: 'Honest vulnerability • May gain protection but shows weakness',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'hemophobia_accommodation'
          },
          {
            id: 'push_through_fear',
            text: 'Try to overcome your fear through sheer willpower.',
            consequence: 'Shows determination • Difficult but demonstrates courage',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'willpower_struggle'
          },
          {
            id: 'deflect_concern',
            text: '"I\'m fine, just processing a lot of new information."',
            consequence: 'Avoids showing weakness • Maintains composure but hides truth',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'hidden_struggle'
          }
        ]
      },
      {
        id: 'curiosity_compulsion',
        title: 'The Dangerous Question',
        text: [
          'Your dangerously curious nature gets the better of you. Despite every instinct warning you to proceed carefully, you find yourself asking the question you know you shouldn\'t: "What do you actually do for blood? How does feeding work for vampires like you?"',
          'The words are out before you can stop them, hanging in the air like a challenge. Lilith\'s expression grows complex - part amusement, part concern, part something darker.',
          '"Your curiosity could be either your greatest asset or your ultimate downfall," she says slowly. "That question... most mortals wouldn\'t dare ask it so directly, especially not upon first meeting."',
          'But there\'s respect in her voice too, acknowledgment of your boldness even as she recognizes its potential danger.'
        ],
        choices: [
          {
            id: 'apologize_for_boldness',
            text: '"I\'m sorry, that was too forward. My curiosity sometimes gets ahead of my common sense."',
            consequence: 'Shows self-awareness • Acknowledges mistake while maintaining curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'curiosity_acknowledged'
          },
          {
            id: 'defend_curiosity',
            text: '"If I\'m going to live here, I need to understand the reality of your existence."',
            consequence: 'Logical justification • Shows practical thinking behind curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'practical_curiosity'
          },
          {
            id: 'double_down',
            text: '"I can handle the truth, whatever it is. I\'d rather know than wonder."',
            consequence: 'Fearless pursuit of knowledge • Very bold but potentially dangerous',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'fearless_inquiry'
          }
        ]
      },
      // Follow-up scenes for trait-specific paths
      {
        id: 'psychic_acknowledged',
        title: 'Recognized Abilities',
        text: [
          '"I can sense supernatural presences," you admit to Lilith. "You\'re ancient and powerful, but there are others here too - someone who creates beauty from pain, and another who carries divine light touched by loss."',
          'Lilith\'s eyes widen with genuine surprise and respect. "Remarkable. Your psychic sensitivity is quite refined - most humans with such gifts can only sense general supernatural presence, not specific emotional signatures."',
          'She leans forward with interest. "Your great-aunt Cordelia possessed similar abilities, though hers manifested differently. It seems supernatural sensitivity runs in your bloodline."',
          'There\'s a new quality to her attention now - not just curiosity about your inheritance, but recognition of your potential value to their community.'
        ],
        choices: [
          {
            id: 'ask_about_cordelia_abilities',
            text: '"How did Cordelia\'s psychic abilities manifest? What could she do?"',
            consequence: 'Family legacy interest • Shows desire to understand heritage',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_psychic_legacy'
          },
          {
            id: 'offer_psychic_services',
            text: '"My abilities could be useful for protection or investigation. I\'d be happy to help."',
            consequence: 'Practical offer • Shows willingness to contribute unique skills',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'psychic_services_accepted'
          },
          {
            id: 'request_training',
            text: '"Could you teach me to develop these abilities further?"',
            consequence: 'Growth mindset • Shows desire for supernatural development',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'psychic_training_offered'
          }
        ]
      },
      {
        id: 'bond_recognition',
        title: 'Deeper Understanding',
        text: [
          '"The connections between you three are beautiful," you say, your blood sight still revealing the intricate web of loyalty and affection. "Like a family forged by choice rather than blood."',
          'For the first time since you arrived, Lilith\'s composed mask slips entirely. Her expression becomes vulnerable, touched by something deeper than surprise - perhaps gratitude for being truly seen.',
          '"Yes," she says softly. "We are... kindred spirits in the truest sense. Bound not by sire lines or clan obligations, but by choice, trust, and genuine care for one another\'s wellbeing."',
          'Your blood sight shows you the truth of her words - these bonds pulse with warmth, strengthened by centuries of shared experiences, mutual protection, and chosen family love.'
        ],
        choices: [
          {
            id: 'express_admiration',
            text: '"That\'s incredibly rare and precious. You\'ve built something beautiful together."',
            consequence: 'Validates their relationships • Shows deep appreciation',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'family_appreciation'
          },
          {
            id: 'ask_about_joining',
            text: '"Is there room in your family for someone new? Someone who could understand and value what you\'ve created?"',
            consequence: 'Direct interest in belonging • Bold but heartfelt request',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'family_consideration'
          },
          {
            id: 'promise_protection',
            text: '"I would never do anything to threaten the bonds between you. They\'re too precious."',
            consequence: 'Protective promise • Shows understanding of their value',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'bond_protection_vow'
          }
        ]
      },
      {
        id: 'creative_contribution',
        title: 'Artistic Collaboration',
        text: [
          '"I\'d love to contribute to this artistic vision," you say, your creative soul already spinning with possibilities. "What role could creativity play in your community?"',
          'Before Lilith can answer, a new voice drifts down from the upper floor - hauntingly beautiful, like silver bells touched with melancholy. Someone is playing piano, the melody complex and emotionally rich.',
          '"That," Lilith says with a warm smile, "would be Morgana. She\'s been waiting to meet you, actually. Your great-aunt spoke often of your artistic nature, and Morgana was quite excited about the possibility of a kindred creative spirit joining us."',
          'The music shifts, becoming more welcoming, as if the pianist has sensed the conversation below and is offering an invitation through melody.'
        ],
        choices: [
          {
            id: 'follow_the_music',
            text: '"Could I meet her? That music is incredibly beautiful."',
            consequence: 'Immediate artistic connection • Shows appreciation for Morgana\'s art',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_introduction'
          },
          {
            id: 'discuss_collaboration',
            text: '"I have ideas for artistic projects that could enhance the manor\'s atmosphere. Would she be interested in collaborating?"',
            consequence: 'Proactive creativity • Shows initiative and respect for her work',
            effects: [{ characterId: 'morgana', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'ask_about_cordelia_art',
            text: '"What kind of artistic contributions did Cordelia make? I\'d like to honor her legacy."',
            consequence: 'Legacy respect • Shows desire to continue family tradition',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'cordelia_artistic_legacy'
          }
        ]
      },
      {
        id: 'protection_offered',
        title: 'Strength Recognized',
        text: [
          '"I can handle myself, and I\'d be willing to help protect others if needed," you state with quiet confidence, your athletic bearing lending weight to the words.',
          'Lilith studies you with new interest. "Protection is... actually something we may need. While this manor is well-warded, there are always those who would threaten what we\'ve built here."',
          'She moves to the window, gazing out at the darkening grounds. "Your great-aunt served as both anchor and guardian. She had a talent for spotting threats and the physical capability to deal with them when necessary."',
          '"The question is whether you truly understand what protecting us might entail. It\'s not just about physical confrontation - it\'s about standing between those you care for and forces that would destroy them."'
        ],
        choices: [
          {
            id: 'accept_guardian_role',
            text: '"I understand the responsibility. I\'m ready to be both anchor and guardian, like Cordelia was."',
            consequence: 'Full commitment • Accepts complete responsibility for their safety',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'ask_about_threats',
            text: '"What kind of threats do you face? I need to understand what I\'d be protecting against."',
            consequence: 'Strategic thinking • Shows tactical preparation mindset',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'threat_assessment'
          },
          {
            id: 'gradual_commitment',
            text: '"I want to help, but I\'d like to learn more about your world before making such a significant commitment."',
            consequence: 'Cautious wisdom • Shows thoughtful approach to responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'gradual_integration'
          }
        ]
      },
      {
        id: 'hemophobia_accommodation',
        title: 'Understanding and Adaptation',
        text: [
          '"I have hemophobia," you admit, fighting against the shame you\'ve always felt about this limitation. "The sight of blood terrifies me. I know it might seem strange, given the circumstances."',
          'Rather than disappointment or amusement, Lilith\'s expression fills with understanding compassion. "Not strange at all. Fear is often our body\'s way of protecting us from trauma. And there are ways to work with such challenges."',
          'From the upper floor, you hear footsteps approaching - light, purposeful. "Seraphina," Lilith calls softly. "Your expertise may be needed."',
          'A figure appears at the top of the stairs - tall, graceful, with an aura of gentle strength that your supernatural senses recognize as divine, though tempered by earthly experience.'
        ],
        choices: [
          {
            id: 'meet_seraphina',
            text: 'Allow Seraphina to approach and introduce herself.',
            consequence: 'Openness to help • Shows willingness to accept support',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_healer_introduction'
          },
          {
            id: 'ask_about_accommodation',
            text: '"Are there ways to manage my phobia while still being useful here?"',
            consequence: 'Practical adaptation • Shows desire to contribute despite limitations',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'phobia_management_discussion'
          },
          {
            id: 'express_determination',
            text: '"I don\'t want my fear to limit what I can do for this community."',
            consequence: 'Determined growth • Shows commitment to overcoming challenges',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'fear_overcoming_support'
          }
        ]
      },
      // Chapter 2: The Community Revealed
      {
        id: 'coven_gathering',
        title: 'Meeting the Coven',
        text: [
          'The next evening, Lilith leads you to the manor\'s grand ballroom where elegant figures move like shadows through candlelight. "Tonight, you meet the others," she says with both warmth and warning in her voice.',
          'The room falls silent as you enter. Seven pairs of eyes turn toward you - each gaze carrying centuries of experience, secrets, and distinct personalities that immediately set them apart.',
          '"Sisters," Lilith announces, "meet our new anchor. She has proven herself worthy of consideration, but the choice of full acceptance lies with all of us."',
          'You sense the complex web of relationships here - alliances forged through shared struggles, rivalries born of conflicting philosophies, and deeper bonds that transcend simple friendship.'
        ],
        choices: [
          {
            id: 'confident_introduction',
            text: 'Introduce yourself with confidence, meeting each vampire\'s gaze directly.',
            consequence: 'Bold approach • Impresses some, challenges others',
            effects: [
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'raven', affectionChange: 12 },
              { characterId: 'isadora', affectionChange: -5 }
            ],
            nextScene: 'confident_first_impressions'
          },
          {
            id: 'respectful_approach',
            text: 'Approach respectfully, acknowledging their age and experience.',
            consequence: 'Diplomatic respect • Shows wisdom and humility',
            effects: [
              { characterId: 'celeste', affectionChange: 18 },
              { characterId: 'luna', affectionChange: 15 },
              { characterId: 'elena', affectionChange: 10 }
            ],
            nextScene: 'respectful_introduction'
          },
          {
            id: 'observe_dynamics',
            text: 'Stay quiet and observe the relationships between the vampires first.',
            consequence: 'Strategic observation • Learns valuable information',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'isadora', affectionChange: 12 }
            ],
            nextScene: 'coven_dynamics_revealed'
          }
        ]
      },
      {
        id: 'confident_first_impressions',
        title: 'Bold Introductions',
        text: [
          'You step forward with confident grace, meeting each vampire\'s gaze directly. "I\'m honored to meet you all. I may be new to your world, but I\'m not afraid of it."',
          'A vampire with fierce amber eyes and crimson curls steps forward first, a slight smile playing at her lips. "Valentina Reyes," she says with a Spanish accent thick as honey. "I appreciate directness. Too many mortals cower or grovel."',
          'From near the window, a tall woman with platinum braids nods approvingly. "Raven Bjornsdottir. Your aunt spoke of your spirit. I see she was not mistaken." Her ice-blue eyes seem to measure your worth.',
          'However, an elegant woman in emerald silk raises an eyebrow with calculated interest. "Isadora Medici. Confidence is... interesting in one so young. We shall see if it is wisdom or foolishness." Her tone carries subtle challenge.'
        ],
        choices: [
          {
            id: 'engage_valentina',
            text: 'Focus on Valentina, drawn to her passionate energy.',
            consequence: 'Revolutionary alliance • May conflict with traditionalists',
            effects: [{ characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'valentina_connection'
          },
          {
            id: 'respect_raven',
            text: 'Turn to Raven, showing interest in her warrior nature.',
            consequence: 'Warrior respect • Appeals to strength-based values',
            effects: [{ characterId: 'raven', affectionChange: 20 }],
            nextScene: 'raven_acknowledgment'
          },
          {
            id: 'challenge_isadora',
            text: 'Meet Isadora\'s challenge with diplomatic steel.',
            consequence: 'Political gameplay • Dangerous but potentially rewarding',
            effects: [{ characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'isadora_political_dance'
          }
        ]
      },
      {
        id: 'respectful_introduction',
        title: 'Wisdom in Humility',
        text: [
          '"I\'m deeply honored to be here," you say with genuine respect. "I know I have much to learn about your world, and I\'m grateful for the opportunity to do so among such experienced and wise individuals."',
          'A vampire with steel-gray eyes behind wire-rimmed glasses nods with approval. "Celeste Dubois," she introduces herself in a cultured French accent. "Wisdom begins with acknowledging what one does not know. Your great-aunt possessed this quality."',
          'Near a crystal ball that seems to swirl with its own inner mist, a figure with silver-white hair speaks softly: "Luna Nightwhisper. The future paths around you shimmer with possibility. Humility will serve you well in navigating them."',
          'From a corner where shadows seem deeper, a pale woman with haunted gray eyes offers a melancholic smile. "Elena Volkov. Your respect for our experience... it reminds me of better times." Her Russian accent carries old pain.'
        ],
        choices: [
          {
            id: 'seek_celeste_wisdom',
            text: 'Ask Celeste about the knowledge contained in the manor.',
            consequence: 'Scholarly pursuit • Opens paths to forbidden knowledge',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'celeste_library_offer'
          },
          {
            id: 'luna_future_inquiry',
            text: 'Inquire about Luna\'s prophetic abilities.',
            consequence: 'Mystical interest • May reveal dangerous futures',
            effects: [{ characterId: 'luna', affectionChange: 20 }],
            nextScene: 'luna_prophecy_glimpse'
          },
          {
            id: 'elena_empathy',
            text: 'Show empathy for Elena\'s obvious pain.',
            consequence: 'Emotional connection • May unlock tragic secrets',
            effects: [{ characterId: 'elena', affectionChange: 30 }],
            nextScene: 'elena_tragic_bond'
          }
        ]
      },
      {
        id: 'coven_dynamics_revealed',
        title: 'The Web of Relationships',
        text: [
          'You observe carefully, noting the subtle interactions between the vampires. The social dynamics are complex, layered with centuries of shared history.',
          'Valentina and Raven stand slightly apart from the others, their body language suggesting a friendship built on mutual respect for strength. They exchange a meaningful glance when Isadora speaks.',
          'Celeste and Luna seem to orbit each other with scholarly connection, occasionally whispering about mystical matters. Elena hovers on the periphery, beautiful but isolated.',
          'Isadora commands attention from the center, but you notice the slight tension when she looks toward Valentina - old philosophical differences, perhaps political rivalries about the coven\'s direction.'
        ],
        choices: [
          {
            id: 'ask_about_alliances',
            text: 'Diplomatically inquire about the different perspectives within the coven.',
            consequence: 'Political awareness • Shows understanding of complexity',
            effects: [
              { characterId: 'isadora', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 15 }
            ],
            nextScene: 'political_factions_explained'
          },
          {
            id: 'reach_out_to_elena',
            text: 'Approach Elena, sensing her isolation.',
            consequence: 'Compassionate outreach • May bridge social gaps',
            effects: [
              { characterId: 'elena', affectionChange: 25 },
              { characterId: 'seraphina', affectionChange: 10 }
            ],
            nextScene: 'elena_isolation_bridge'
          },
          {
            id: 'study_power_structure',
            text: 'Focus on understanding the power hierarchy.',
            consequence: 'Strategic analysis • Useful for future navigation',
            effects: [{ characterId: 'celeste', affectionChange: 18 }],
            nextScene: 'coven_hierarchy_revealed'
          }
        ]
      },
      {
        id: 'valentina_connection',
        title: 'The Revolutionary\'s Fire',
        text: [
          '"Your directness is refreshing," Valentina says, stepping closer with predatory grace. "Most newcomers either fear us or try to manipulate us. You do neither."',
          'Her amber eyes burn with passionate intensity. "I fought in three mortal wars before my turning, and I\'ve been fighting for vampire equality ever since. This coven... sometimes I think we\'ve grown too comfortable in our isolation."',
          'She glances meaningfully at Isadora. "Some believe in maintaining old hierarchies, working within existing power structures. I believe in tearing down systems that oppress us and building something better."',
          'You sense this is more than casual conversation - Valentina is gauging whether you might be an ally in whatever changes she\'s planning for the coven.'
        ],
        choices: [
          {
            id: 'support_revolution',
            text: '"Change often requires people willing to challenge the status quo. What needs to change here?"',
            consequence: 'Revolutionary alliance • May create enemies among traditionalists',
            effects: [
              { characterId: 'valentina', affectionChange: 35 },
              { characterId: 'isadora', affectionChange: -15 },
              { characterId: 'lilith', affectionChange: -5 }
            ],
            nextScene: 'revolutionary_recruitment'
          },
          {
            id: 'diplomatic_balance',
            text: '"Both tradition and change have their place. Perhaps there\'s a way to honor the past while building a better future?"',
            consequence: 'Diplomatic wisdom • Respects all perspectives',
            effects: [
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: 10 },
              { characterId: 'lilith', affectionChange: 20 }
            ],
            nextScene: 'diplomatic_bridge_building'
          },
          {
            id: 'ask_about_wars',
            text: '"You fought in mortal wars? What was that like for a vampire?"',
            consequence: 'Personal interest • Learns Valentina\'s tragic history',
            effects: [{ characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'valentina_war_stories'
          }
        ]
      },
      {
        id: 'celeste_library_offer',
        title: 'The Keeper of Knowledge',
        text: [
          'Celeste\'s eyes light up behind her wire-rimmed glasses. "Ah, a seeker of knowledge. How delightful. The Ravencroft library contains texts that most supernatural scholars would kill to access."',
          'She leads you toward massive oak doors carved with protective symbols. "Ancient grimoires, historical accounts of vampire society, prophecies that predate written language. Your great-aunt was particularly interested in the intersection of supernatural politics and mortal world events."',
          'Her voice drops to a conspiratorial whisper. "There are also... forbidden texts. Knowledge that some believe should remain buried. But I believe information should be available to those wise enough to handle it responsibly."',
          'You sense Celeste is offering more than just library access - she\'s potentially offering you entrance into dangerous secrets that could reshape your understanding of everything.'
        ],
        choices: [
          {
            id: 'request_forbidden_knowledge',
            text: '"I\'m interested in the forbidden texts. I believe knowledge itself isn\'t dangerous - only ignorance is."',
            consequence: 'Dangerous knowledge sought • May have severe consequences',
            effects: [
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'luna', affectionChange: -10 },
              { characterId: 'seraphina', affectionChange: -15 }
            ],
            nextScene: 'forbidden_knowledge_access'
          },
          {
            id: 'cordelia_research_focus',
            text: '"I\'d like to understand what Cordelia was researching. It might help me understand my role here."',
            consequence: 'Legacy investigation • Safe but potentially revealing',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'lilith', affectionChange: 15 }
            ],
            nextScene: 'cordelia_research_revealed'
          },
          {
            id: 'gradual_learning',
            text: '"I\'d appreciate starting with the basics and working my way up to more advanced knowledge."',
            consequence: 'Careful progression • Shows wisdom and patience',
            effects: [
              { characterId: 'celeste', affectionChange: 18 },
              { characterId: 'seraphina', affectionChange: 12 }
            ],
            nextScene: 'structured_education'
          }
        ]
      },
      {
        id: 'elena_tragic_bond',
        title: 'The Artist\'s Sorrow',
        text: [
          'Elena\'s pale gray eyes widen slightly at your empathy, as if she\'s forgotten what genuine compassion feels like. "You... see the pain. Most prefer to look away."',
          'She moves like a wraith toward a painting covered by a dark cloth. "I create to remember, and I create to forget. Both are equally futile when you have eternity stretching before you."',
          'With trembling hands, she reveals the painting - a masterpiece depicting a snowy Russian landscape with a burning manor in the distance. "My mortal family. Lost to revolutionaries while I was away, studying art in Paris. I returned to find... nothing."',
          'Her voice breaks slightly. "The others try to help, but how do you heal a wound that has had two centuries to fester? How do you find purpose when everyone you loved is dust?"'
        ],
        choices: [
          {
            id: 'offer_comfort',
            text: 'Gently place a comforting hand on her shoulder.',
            consequence: 'Physical comfort • Shows brave compassion despite supernatural nature',
            effects: [
              { characterId: 'elena', affectionChange: 40 },
              { characterId: 'seraphina', affectionChange: 15 }
            ],
            nextScene: 'elena_comfort_accepted'
          },
          {
            id: 'artistic_understanding',
            text: '"Art can be a bridge between past and future. Your pain creates beauty that helps others feel less alone."',
            consequence: 'Artistic empathy • Connects through creative understanding',
            effects: [
              { characterId: 'elena', affectionChange: 35 },
              { characterId: 'morgana', affectionChange: 20 }
            ],
            nextScene: 'artistic_soul_connection'
          },
          {
            id: 'purpose_perspective',
            text: '"Perhaps purpose isn\'t about replacing what\'s lost, but about honoring it by helping others avoid similar pain."',
            consequence: 'Philosophical insight • Offers new perspective on immortal existence',
            effects: [
              { characterId: 'elena', affectionChange: 30 },
              { characterId: 'valentina', affectionChange: 15 }
            ],
            nextScene: 'elena_purpose_reframing'
          }
        ]
      },
      // Rivalry and Alliance scenes
      {
        id: 'political_factions_explained',
        title: 'The Coven\'s Divisions',
        text: [
          'Isadora steps forward with practiced grace, clearly comfortable being the center of attention. "You\'ve observed well. Yes, we have... philosophical differences about the coven\'s future direction."',
          'She gestures elegantly toward Valentina. "Some believe in dramatic change, revolution, tearing down established order. They see oppression where I see opportunity for careful advancement."',
          'Valentina\'s eyes flash with contained fire. "And some mistake complacency for strategy. How long do we wait for gradual change while younger vampires suffer under old restrictions?"',
          'Celeste adjusts her glasses thoughtfully. "There\'s wisdom in both approaches. Perhaps our new anchor can offer a fresh perspective on this ancient debate."'
        ],
        choices: [
          {
            id: 'side_with_progression',
            text: '"Both of you want progress, just at different speeds. What if we found ways to implement careful changes that build toward larger transformation?"',
            consequence: 'Moderate position • May unite factions or satisfy none',
            effects: [
              { characterId: 'isadora', affectionChange: 15 },
              { characterId: 'valentina', affectionChange: 10 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            nextScene: 'moderate_coalition_building'
          },
          {
            id: 'question_restrictions',
            text: '"What specific restrictions are causing problems? Understanding the root issues might help find solutions."',
            consequence: 'Analytical approach • Focuses on problems rather than personalities',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'luna', affectionChange: 15 }
            ],
            nextScene: 'restriction_analysis'
          },
          {
            id: 'suggest_trial_period',
            text: '"What if we tested small changes first? Trial periods could prove concepts without major risk."',
            consequence: 'Practical compromise • Shows business-minded thinking',
            effects: [
              { characterId: 'isadora', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 18 }
            ],
            nextScene: 'pragmatic_testing_approach'
          }
        ]
      },
      // Corrected special ability scenes that return to door choices
      {
        id: 'psychic_door_insight',
        title: 'Supernatural Perception',
        text: [
          'You close your eyes and extend your psychic senses, feeling the supernatural currents that flow around the manor like invisible rivers of power.',
          'Immediately, you sense multiple presences within - ancient, powerful, and decidedly non-human. At least three distinct auras pulse with different energies: one dark and commanding, another touched by melancholy and creativity, and a third that feels like starlight dimmed by earthly experience.',
          'The manor itself radiates protective energy, wards woven into the very stones. This place is a fortress against supernatural threats, but also a sanctuary for those within.',
          'Armed with this knowledge, you approach the massive oak doors with greater understanding of what awaits you.'
        ],
        choices: [
          {
            id: 'knock_respectfully',
            text: 'Knock respectfully on the door.',
            consequence: 'Polite approach • Shows respect for the inhabitants',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'lilith_greeting'
          },
          {
            id: 'knock_boldly',
            text: 'Knock with confident authority.',
            consequence: 'Bold entrance • Demonstrates self-assurance',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'assertive_entrance'
          },
          {
            id: 'try_door_handle',
            text: 'Try the door handle to see if it\'s unlocked.',
            consequence: 'Practical approach • Tests boundaries',
            effects: [{ characterId: 'lilith', affectionChange: 3 }],
            nextScene: 'unlocked_discovery'
          }
        ]
      },
      {
        id: 'blood_sight_door_analysis',
        title: 'The True Nature Revealed',
        text: [
          'You focus your blood sight, a rare gift that allows you to perceive the supernatural nature of beings by observing their life force.',
          'Through the walls, you glimpse multiple supernatural signatures. The strongest burns with ancient crimson power - a vampire of immense age and authority. Another flickers with silver fire touched by artistic melancholy. A third glows with divine light, though dimmed as if something has fallen from grace.',
          'Most remarkably, you see threads of connection between them all - bonds forged not by blood but by choice, loyalty, and something deeper than simple alliance.',
          'With this supernatural intelligence gathered, you now understand the nature of those you\'re about to meet.'
        ],
        choices: [
          {
            id: 'knock_respectfully',
            text: 'Knock respectfully on the door.',
            consequence: 'Polite approach • Shows respect for the inhabitants',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'lilith_greeting'
          },
          {
            id: 'knock_boldly',
            text: 'Knock with confident authority.',
            consequence: 'Bold entrance • Demonstrates self-assurance',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'assertive_entrance'
          },
          {
            id: 'try_door_handle',
            text: 'Try the door handle to see if it\'s unlocked.',
            consequence: 'Practical approach • Tests boundaries',
            effects: [{ characterId: 'lilith', affectionChange: 3 }],
            nextScene: 'unlocked_discovery'
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
  choiceHistory: [],
  isCharacterCreated: false
};
