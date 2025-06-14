import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { GameState, Choice, PlayerCharacter } from '../types/game';
import { initialGameState, gameData } from '../data/gameData';

interface GameContextType {
  gameState: GameState;
  currentScene: any;
  makeChoice: (choice: Choice) => void;
  createCharacter: (character: PlayerCharacter) => void;
  saveGame: (slotName: string) => void;
  loadGame: (gameState: GameState) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

type GameAction = 
  | { type: 'MAKE_CHOICE'; payload: Choice }
  | { type: 'CREATE_CHARACTER'; payload: PlayerCharacter }
  | { type: 'LOAD_GAME'; payload: GameState }
  | { type: 'RESET_GAME' }
  | { type: 'UPDATE_AFFECTION'; payload: { characterId: string; change: number } };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CREATE_CHARACTER':
      return {
        ...state,
        playerCharacter: action.payload,
        isCharacterCreated: true,
        currentScene: 'library',
        playerStats: {
          ...state.playerStats,
          location: 'Ravencroft Manor'
        }
      };
      
    case 'MAKE_CHOICE':
      const choice = action.payload;
      const newState = { ...state };
      
      // Apply character affection changes
      choice.effects.forEach(effect => {
        if (newState.characters[effect.characterId]) {
          newState.characters[effect.characterId].affection = Math.max(
            0, 
            Math.min(100, newState.characters[effect.characterId].affection + effect.affectionChange)
          );
          
          // Update character status based on affection level
          const affection = newState.characters[effect.characterId].affection;
          if (affection >= 80) {
            newState.characters[effect.characterId].status = 'Deeply in Love';
          } else if (affection >= 60) {
            newState.characters[effect.characterId].status = 'Smitten';
          } else if (affection >= 40) {
            newState.characters[effect.characterId].status = 'Interested';
          } else if (affection >= 20) {
            newState.characters[effect.characterId].status = 'Curious';
          } else {
            newState.characters[effect.characterId].status = 'Indifferent';
          }
        }
      });
      
      // Progress to next scene if specified
      if (choice.nextScene) {
        newState.currentScene = choice.nextScene;
        newState.completedScenes.push(state.currentScene);
      }
      
      return newState;
      
    case 'UPDATE_AFFECTION':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.characterId]: {
            ...state.characters[action.payload.characterId],
            affection: Math.max(
              0, 
              Math.min(100, state.characters[action.payload.characterId].affection + action.payload.change)
            )
          }
        }
      };
      
    case 'LOAD_GAME':
      return action.payload;
      
    case 'RESET_GAME':
      return initialGameState;
      
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
  
  // Auto-save functionality
  useEffect(() => {
    const autoSave = () => {
      localStorage.setItem('crimsonEmbrace_autoSave', JSON.stringify(gameState));
    };
    
    const interval = setInterval(autoSave, 30000); // Auto-save every 30 seconds
    return () => clearInterval(interval);
  }, [gameState]);
  
  // Load auto-save on mount
  useEffect(() => {
    const autoSaveData = localStorage.getItem('crimsonEmbrace_autoSave');
    if (autoSaveData) {
      try {
        const savedState = JSON.parse(autoSaveData);
        dispatch({ type: 'LOAD_GAME', payload: savedState });
      } catch (error) {
        console.error('Failed to load auto-save:', error);
      }
    }
  }, []);
  
  const getCurrentScene = () => {
    const chapter = gameData[gameState.currentChapter];
    return chapter?.scenes.find(scene => scene.id === gameState.currentScene);
  };
  
  const makeChoice = (choice: Choice) => {
    dispatch({ type: 'MAKE_CHOICE', payload: choice });
  };
  
  const createCharacter = (character: PlayerCharacter) => {
    dispatch({ type: 'CREATE_CHARACTER', payload: character });
  };
  
  const saveGame = (slotName: string) => {
    const saveData = {
      ...gameState,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(`crimsonEmbrace_save_${slotName}`, JSON.stringify(saveData));
  };
  
  const loadGame = (loadedGameState: GameState) => {
    dispatch({ type: 'LOAD_GAME', payload: loadedGameState });
  };
  
  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };
  
  return (
    <GameContext.Provider value={{
      gameState,
      currentScene: getCurrentScene(),
      makeChoice,
      saveGame,
      loadGame,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
