import { GameProvider } from '../contexts/GameContext';
import { GameInterface } from '../components/GameInterface';

export default function Game() {
  return (
    <GameProvider>
      <GameInterface />
    </GameProvider>
  );
}
