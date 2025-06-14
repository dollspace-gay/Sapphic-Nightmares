import { Button } from '@/components/ui/button';
import { useGame } from '../contexts/GameContext';
import { Crosshair, Heart, Flame, Skull, Shield } from 'lucide-react';

export function ChoicePanel() {
  const { currentScene, makeChoice } = useGame();
  
  if (!currentScene || !currentScene.choices.length) {
    return null;
  }
  
  const getChoiceIcon = (consequence: string) => {
    if (consequence.includes('trust') || consequence.includes('Honest')) return Heart;
    if (consequence.includes('attraction') || consequence.includes('Flirtatious')) return Flame;
    if (consequence.includes('risk') || consequence.includes('Bold')) return Skull;
    if (consequence.includes('safety') || consequence.includes('Cautious')) return Shield;
    return Heart;
  };
  
  return (
    <div className="bg-gradient-to-t from-red-900/90 to-purple-900/90 backdrop-blur-sm border-t border-red-500/30 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-ui font-semibold text-white mb-4 flex items-center">
          <Crosshair className="text-red-400 mr-2 h-5 w-5" />
          Choose your response:
        </h3>
        
        <div className="space-y-3">
          {currentScene.choices.map((choice, index) => {
            const IconComponent = getChoiceIcon(choice.consequence);
            
            return (
              <Button
                key={choice.id}
                onClick={() => makeChoice(choice)}
                className="w-full text-left bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 rounded-lg p-4 transition-all duration-300 choice-hover group h-auto"
                variant="outline"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:pulse-glow">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-story text-white leading-relaxed">
                      {choice.text}
                    </p>
                    <p className="text-gray-300 text-xs mt-2 font-ui">
                      <IconComponent className="inline-block text-red-400 mr-1 h-3 w-3" />
                      {choice.consequence}
                    </p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
