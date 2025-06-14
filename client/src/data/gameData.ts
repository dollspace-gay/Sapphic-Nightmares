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
