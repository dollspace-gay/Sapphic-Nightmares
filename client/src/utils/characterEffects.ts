import { PlayerCharacter, Choice, PlayerTrait, PlayerFlaw, PlayerBoon } from '../types/game';

// Check if player has a specific trait, flaw, or boon
export function hasPlayerTrait(character: PlayerCharacter | undefined, traitId: string): boolean {
  return character?.traits?.some(trait => trait.id === traitId) || false;
}

export function hasPlayerFlaw(character: PlayerCharacter | undefined, flawId: string): boolean {
  return character?.flaws?.some(flaw => flaw.id === flawId) || false;
}

export function hasPlayerBoon(character: PlayerCharacter | undefined, boonId: string): boolean {
  return character?.boons?.some(boon => boon.id === boonId) || false;
}

// Apply character effects to choices
export function applyCharacterEffects(choices: Choice[], character: PlayerCharacter | undefined): Choice[] {
  if (!character) return choices;

  return choices.map(choice => {
    let modifiedChoice = { ...choice };
    
    // Apply trait effects
    modifiedChoice = applyTraitEffects(modifiedChoice, character);
    
    // Apply flaw effects
    modifiedChoice = applyFlawEffects(modifiedChoice, character);
    
    // Apply boon effects
    modifiedChoice = applyBoonEffects(modifiedChoice, character);
    
    return modifiedChoice;
  });
}

function applyTraitEffects(choice: Choice, character: PlayerCharacter): Choice {
  let modifiedChoice = { ...choice };
  
  // Athletic trait - bonus to physical actions
  if (hasPlayerTrait(character, 'athletic') && isPhysicalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Athletic bonus';
  }
  
  // Charismatic trait - bonus to social interactions
  if (hasPlayerTrait(character, 'charismatic') && isSocialChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Charismatic bonus';
  }
  
  // Empathetic trait - bonus to emotional connections
  if (hasPlayerTrait(character, 'empathetic') && isEmotionalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 4
    }));
    modifiedChoice.consequence += ' • Empathetic insight';
  }
  
  // Intelligent trait - bonus to analytical choices
  if (hasPlayerTrait(character, 'intelligent') && isAnalyticalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Brilliant deduction';
  }
  
  // Creative trait - bonus to artistic interactions
  if (hasPlayerTrait(character, 'creative') && isArtisticChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 5
    }));
    modifiedChoice.consequence += ' • Creative connection';
  }
  
  // Intimidating trait - bonus to assertive choices
  if (hasPlayerTrait(character, 'intimidating') && isAssertiveChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Intimidating presence';
  }
  
  // Reserved trait - bonus to observational choices
  if (hasPlayerTrait(character, 'shy') && isObservationalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Observant nature';
  }
  
  return modifiedChoice;
}

function applyFlawEffects(choice: Choice, character: PlayerCharacter): Choice {
  let modifiedChoice = { ...choice };
  
  // Hemophobia - penalty to blood-related scenes
  if (hasPlayerFlaw(character, 'bloodphobia') && isBloodRelatedChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: Math.max(0, effect.affectionChange - 3)
    }));
    modifiedChoice.consequence += ' • Hemophobia distress';
  }
  
  // Overly Trusting - bonus to trust choices but penalty to suspicious ones
  if (hasPlayerFlaw(character, 'trusting')) {
    if (isTrustingChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 2
      }));
      modifiedChoice.consequence += ' • Trusting nature';
    } else if (isSuspiciousChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange - 2)
      }));
      modifiedChoice.consequence += ' • Struggles with suspicion';
    }
  }
  
  // Reckless - bonus to bold choices, penalty to cautious ones
  if (hasPlayerFlaw(character, 'reckless')) {
    if (isRecklessChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 2
      }));
      modifiedChoice.consequence += ' • Reckless enthusiasm';
    } else if (isCautiousChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange - 1)
      }));
      modifiedChoice.consequence += ' • Restraint is difficult';
    }
  }
  
  // Dangerously Curious - bonus to investigative choices
  if (hasPlayerFlaw(character, 'curious') && isInvestigativeChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Irresistible curiosity';
  }
  
  return modifiedChoice;
}

function applyBoonEffects(choice: Choice, character: PlayerCharacter): Choice {
  let modifiedChoice = { ...choice };
  
  // Psychic Sensitivity - bonus to supernatural awareness
  if (hasPlayerBoon(character, 'psychic') && isSupernaturalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 4
    }));
    modifiedChoice.consequence += ' • Psychic insight';
  }
  
  // Mental Fortitude - bonus to resistance choices
  if (hasPlayerBoon(character, 'resistance') && isResistanceChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Mental resistance';
  }
  
  // Natural Charm - bonus to all social interactions
  if (hasPlayerBoon(character, 'charm') && isSocialChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Natural charm';
  }
  
  // Fearless - bonus to brave choices
  if (hasPlayerBoon(character, 'courage') && isBraveChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Fearless courage';
  }
  
  // Blood Sight - bonus to supernatural detection
  if (hasPlayerBoon(character, 'bloodsight') && isDetectionChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Blood sight reveals truth';
  }
  
  // Iron Will - bonus to determination choices
  if (hasPlayerBoon(character, 'willpower') && isDeterminationChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Iron will prevails';
  }
  
  return modifiedChoice;
}

// Helper functions to identify choice types
function isPhysicalChoice(choice: Choice): boolean {
  const physicalKeywords = ['fight', 'run', 'athletic', 'physical', 'strength', 'endurance', 'chase', 'escape'];
  return physicalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSocialChoice(choice: Choice): boolean {
  const socialKeywords = ['charm', 'persuade', 'talk', 'convince', 'social', 'conversation', 'diplomacy', 'negotiate'];
  return socialKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isEmotionalChoice(choice: Choice): boolean {
  const emotionalKeywords = ['feel', 'emotion', 'heart', 'love', 'comfort', 'empathy', 'understand', 'connect', 'vulnerable'];
  return emotionalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isAnalyticalChoice(choice: Choice): boolean {
  const analyticalKeywords = ['analyze', 'think', 'reason', 'logic', 'deduce', 'solve', 'question', 'investigate'];
  return analyticalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isArtisticChoice(choice: Choice): boolean {
  const artisticKeywords = ['art', 'music', 'create', 'beauty', 'aesthetic', 'compose', 'artistic', 'creative'];
  return artisticKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isAssertiveChoice(choice: Choice): boolean {
  const assertiveKeywords = ['demand', 'insist', 'firm', 'assertive', 'bold', 'confident', 'direct', 'command'];
  return assertiveKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isObservationalChoice(choice: Choice): boolean {
  const observationalKeywords = ['observe', 'watch', 'notice', 'silent', 'quiet', 'listen', 'wait', 'study'];
  return observationalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isBloodRelatedChoice(choice: Choice): boolean {
  const bloodKeywords = ['blood', 'bite', 'feed', 'vampire', 'fang', 'neck', 'vein', 'drain'];
  return bloodKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isTrustingChoice(choice: Choice): boolean {
  const trustKeywords = ['trust', 'believe', 'faith', 'accept', 'honest', 'open', 'vulnerable'];
  return trustKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSuspiciousChoice(choice: Choice): boolean {
  const suspiciousKeywords = ['suspect', 'doubt', 'cautious', 'wary', 'suspicious', 'distrust', 'question'];
  return suspiciousKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isRecklessChoice(choice: Choice): boolean {
  const recklessKeywords = ['bold', 'reckless', 'rush', 'immediate', 'without thinking', 'impulsive', 'dare'];
  return recklessKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isCautiousChoice(choice: Choice): boolean {
  const cautiousKeywords = ['careful', 'cautious', 'slow', 'think', 'consider', 'deliberate', 'wait'];
  return cautiousKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isInvestigativeChoice(choice: Choice): boolean {
  const investigativeKeywords = ['investigate', 'explore', 'discover', 'search', 'find out', 'learn', 'curious'];
  return investigativeKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSupernaturalChoice(choice: Choice): boolean {
  const supernaturalKeywords = ['supernatural', 'magic', 'vampire', 'angel', 'divine', 'mystical', 'otherworldly'];
  return supernaturalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isResistanceChoice(choice: Choice): boolean {
  const resistanceKeywords = ['resist', 'fight', 'oppose', 'refuse', 'reject', 'deny', 'stand against'];
  return resistanceKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isBraveChoice(choice: Choice): boolean {
  const braveKeywords = ['brave', 'courage', 'fearless', 'bold', 'face', 'confront', 'stand up'];
  return braveKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDetectionChoice(choice: Choice): boolean {
  const detectionKeywords = ['see', 'detect', 'sense', 'perceive', 'notice', 'observe', 'identify'];
  return detectionKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDeterminationChoice(choice: Choice): boolean {
  const determinationKeywords = ['determined', 'persist', 'will', 'resolve', 'steadfast', 'unwavering', 'committed'];
  return determinationKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

// Generate special choices based on character traits
export function generateTraitSpecificChoices(character: PlayerCharacter | undefined): Choice[] {
  if (!character) return [];
  
  const specialChoices: Choice[] = [];
  
  // Psychic Sensitivity - add supernatural insight choices
  if (hasPlayerBoon(character, 'psychic')) {
    specialChoices.push({
      id: 'psychic_insight',
      text: '[Psychic] Focus your supernatural senses to read the room\'s emotional atmosphere.',
      consequence: 'Psychic insight • Reveals hidden tensions and supernatural presences',
      effects: [],
      nextScene: 'psychic_revelation'
    });
  }
  
  // Blood Sight - add detection choices
  if (hasPlayerBoon(character, 'bloodsight')) {
    specialChoices.push({
      id: 'blood_sight_analysis',
      text: '[Blood Sight] Examine the supernatural nature of those present.',
      consequence: 'Blood sight • Reveals true supernatural nature and power levels',
      effects: [],
      nextScene: 'blood_sight_revelation'
    });
  }
  
  // Athletic trait - add physical option
  if (hasPlayerTrait(character, 'athletic')) {
    specialChoices.push({
      id: 'athletic_approach',
      text: '[Athletic] Use your physical prowess to demonstrate confidence.',
      consequence: 'Athletic demonstration • Shows physical capability',
      effects: [{ characterId: 'lilith', affectionChange: 8 }],
      nextScene: 'athletic_demonstration'
    });
  }
  
  // Creative trait - add artistic option
  if (hasPlayerTrait(character, 'creative')) {
    specialChoices.push({
      id: 'creative_perspective',
      text: '[Creative] Offer a unique artistic perspective on the situation.',
      consequence: 'Creative insight • Shows artistic soul and unique viewpoint',
      effects: [{ characterId: 'morgana', affectionChange: 10 }],
      nextScene: 'creative_insight'
    });
  }
  
  return specialChoices;
}