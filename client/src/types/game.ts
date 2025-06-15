export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  affection: number;
  trust: number;
  status: string;
  avatar: string;
  color: string;
}

export interface Choice {
  id: string;
  text: string;
  consequence: string;
  effects: {
    characterId: string;
    affectionChange: number;
    trustChange?: number;
  }[];
  playerStatEffects?: {
    healthChange?: number;
    sanityChange?: number;
  };
  nextScene?: string;
  requirements?: {
    characterId: string;
    minAffection?: number;
    minTrust?: number;
  }[];
  dangerLevel?: 'low' | 'medium' | 'high' | 'lethal';
  secretsProbed?: string[];
}

export interface Scene {
  id: string;
  title: string;
  text: string[];
  character?: Character;
  choices: Choice[];
  background?: string;
}

export interface Chapter {
  id: string;
  title: string;
  scenes: Scene[];
}

export interface PlayerTrait {
  id: string;
  name: string;
  description: string;
  category: 'physical' | 'social' | 'mental';
}

export interface PlayerFlaw {
  id: string;
  name: string;
  description: string;
  points: number;
}

export interface PlayerBoon {
  id: string;
  name: string;
  description: string;
  cost: number;
}

export interface PlayerCharacter {
  name: string;
  traits: PlayerTrait[];
  flaws: PlayerFlaw[];
  boons: PlayerBoon[];
  availablePoints: number;
}

export interface PlayerStats {
  health: number;
  sanity: number;
  location: string;
}

export interface ChoiceHistory {
  sceneId: string;
  choiceId: string;
  choiceText: string;
  consequence: string;
  timestamp: number;
  characterEffects: { characterId: string; affectionChange: number }[];
}

export interface GameState {
  currentChapter: number;
  currentScene: string;
  characters: Record<string, Character>;
  playerCharacter?: PlayerCharacter;
  playerStats: PlayerStats;
  inventory: string[];
  flags: Record<string, boolean>;
  completedScenes: string[];
  choiceHistory: ChoiceHistory[];
  isCharacterCreated: boolean;
}

export interface SaveSlot {
  id: number;
  name: string;
  gameData: GameState;
  timestamp: string;
}
