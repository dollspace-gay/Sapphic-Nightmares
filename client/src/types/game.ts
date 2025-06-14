export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  affection: number;
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
  }[];
  nextScene?: string;
  requirements?: {
    characterId: string;
    minAffection: number;
  }[];
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

export interface PlayerStats {
  health: string;
  sanity: string;
  location: string;
}

export interface GameState {
  currentChapter: number;
  currentScene: string;
  characters: Record<string, Character>;
  playerStats: PlayerStats;
  inventory: string[];
  flags: Record<string, boolean>;
  completedScenes: string[];
}

export interface SaveSlot {
  id: number;
  name: string;
  gameData: GameState;
  timestamp: string;
}
