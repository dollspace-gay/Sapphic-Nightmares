import { useGame } from '../contexts/GameContext';
import { Heart } from 'lucide-react';

export function StoryPanel() {
  const { currentScene } = useGame();
  
  if (!currentScene) {
    return (
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-midnight/60 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-blood-red/20">
            <p className="font-story text-lg text-parchment text-center">
              Loading story...
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Scene Header */}
        <div className="mb-8 animate-fade-in">
          <h2 className="font-story text-2xl lg:text-4xl font-bold text-parchment text-shadow mb-2">
            {currentScene.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blood-red to-vampire-red rounded-full"></div>
        </div>
        
        {/* Story Text */}
        <div className="bg-midnight/60 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-blood-red/20 mb-8 animate-slide-up">
          <div className="font-story text-lg lg:text-xl story-text text-parchment leading-relaxed">
            {currentScene.text.map((paragraph, index) => (
              <p key={index} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        {/* Character Portrait */}
        {currentScene.character && (
          <div className="mb-8 animate-fade-in">
            <div className="bg-gradient-to-br from-vampire-red/20 to-gothic-purple/20 rounded-xl p-6 border border-blood-red/30">
              <div className="flex items-start space-x-4">
                <div className={`w-20 h-20 ${currentScene.character.color} rounded-full flex items-center justify-center flex-shrink-0 pulse-glow`}>
                  <Heart className="h-8 w-8 text-parchment" />
                </div>
                <div className="flex-1">
                  <h3 className="font-story text-xl font-bold text-parchment mb-1">
                    {currentScene.character.name}
                  </h3>
                  <p className="text-moonlight/80 text-sm mb-2">
                    {currentScene.character.title}
                  </p>
                  <p className="text-parchment/90 text-sm font-ui">
                    <Heart className="inline-block text-blood-red mr-1 h-4 w-4" />
                    Currently: {currentScene.character.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
