import { GameProvider, useGame } from '../contexts/GameContext';
import { GameInterface } from '../components/GameInterface';
import { CharacterCreation } from '../components/CharacterCreation';

function GameContent() {
  const { gameState } = useGame();
  
  if (!gameState.isCharacterCreated) {
    return <CharacterCreation />;
  }
  
  return <GameInterface />;
}

export default function Game() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}
