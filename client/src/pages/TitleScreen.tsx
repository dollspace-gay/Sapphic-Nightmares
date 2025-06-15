import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function TitleScreen() {
  const [, setLocation] = useLocation();

  const handleStartGame = () => {
    setLocation("/game");
  };

  const handleLoadGame = () => {
    setLocation("/game?load=true");
  };

  const handleDevMode = () => {
    setLocation("/dev");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/title-screen.png')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-8 max-w-2xl">
        {/* Game Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
            <span className="text-red-400">Eternal</span>{" "}
            <span className="text-purple-300">Hearts</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 drop-shadow-lg">
            A Ravencroft Romance
          </h2>
          <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
            Enter a world of immortal passion, ancient secrets, and choices that will determine your eternal fate
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="space-y-4 pt-8">
          <Button
            onClick={handleStartGame}
            className="w-full max-w-xs mx-auto block bg-red-700 hover:bg-red-600 text-white font-semibold py-4 text-lg border border-red-500 shadow-lg transition-all duration-300 hover:shadow-red-500/50"
          >
            Start New Game
          </Button>
          
          <Button
            onClick={handleLoadGame}
            variant="outline"
            className="w-full max-w-xs mx-auto block bg-purple-900/50 hover:bg-purple-800/70 text-purple-200 border-purple-400 font-semibold py-4 text-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/50"
          >
            Load Game
          </Button>
          
          <Button
            onClick={handleDevMode}
            variant="ghost"
            className="w-full max-w-xs mx-auto block text-gray-400 hover:text-white font-medium py-3 text-base transition-all duration-300"
          >
            Developer Mode
          </Button>
        </div>

        {/* Atmospheric Text */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            "In the shadows of Ravencroft Manor, love transcends mortality..."
          </p>
        </div>
      </div>
    </div>
  );
}