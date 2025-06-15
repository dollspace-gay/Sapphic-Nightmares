import { Button } from '@/components/ui/button';
import { useGame } from '../contexts/GameContext';
import { Crosshair, Heart, Flame, Skull, Shield, Star, Eye, Zap, AlertTriangle, X } from 'lucide-react';
import { applyCharacterEffects, generateTraitSpecificChoices } from '../utils/characterEffects';

export function ChoicePanel() {
  const { currentScene, makeChoice, gameState } = useGame();
  
  if (!currentScene || !currentScene.choices.length) {
    return null;
  }
  
  // Apply character effects to choices and add trait-specific options
  const baseChoices = applyCharacterEffects(currentScene.choices, gameState.playerCharacter);
  const traitChoices = generateTraitSpecificChoices(gameState.playerCharacter);
  const allChoices = [...baseChoices, ...traitChoices];
  
  const getChoiceIcon = (choice: any) => {
    const { consequence, text, dangerLevel } = choice;
    
    // Dangerous choices get warning icons
    if (dangerLevel === 'lethal') return X;
    if (dangerLevel === 'high') return AlertTriangle;
    if (dangerLevel === 'medium') return Skull;
    
    // Special trait-based choices
    if (text.includes('[Psychic]')) return Eye;
    if (text.includes('[Blood Sight]')) return Eye;
    if (text.includes('[Athletic]')) return Zap;
    if (text.includes('[Creative]')) return Star;
    
    // Character effect bonuses
    if (consequence.includes('Charismatic bonus') || consequence.includes('Natural charm')) return Star;
    if (consequence.includes('Empathetic insight') || consequence.includes('Creative connection')) return Heart;
    if (consequence.includes('Athletic bonus') || consequence.includes('Intimidating presence')) return Zap;
    if (consequence.includes('Psychic insight') || consequence.includes('Blood sight')) return Eye;
    
    // Standard choices
    if (consequence.includes('trust') || consequence.includes('Honest')) return Heart;
    if (consequence.includes('attraction') || consequence.includes('Flirtatious')) return Flame;
    if (consequence.includes('risk') || consequence.includes('Bold')) return Skull;
    if (consequence.includes('safety') || consequence.includes('Cautious')) return Shield;
    return Heart;
  };

  const getChoiceStyles = (choice: any) => {
    const { dangerLevel } = choice;
    const isTraitChoice = choice.text.includes('[');
    
    let baseClasses = "group w-full text-left p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 active:scale-95";
    
    if (dangerLevel === 'lethal') {
      return baseClasses + " bg-gradient-to-r from-red-900 to-red-800 border-red-600 hover:border-red-400 text-white hover:shadow-red-500/50 hover:shadow-lg";
    } else if (dangerLevel === 'high') {
      return baseClasses + " bg-gradient-to-r from-orange-900 to-red-900 border-orange-600 hover:border-orange-400 text-white hover:shadow-orange-500/50 hover:shadow-lg";
    } else if (dangerLevel === 'medium') {
      return baseClasses + " bg-gradient-to-r from-yellow-900 to-orange-900 border-yellow-600 hover:border-yellow-400 text-white hover:shadow-yellow-500/50 hover:shadow-lg";
    } else if (isTraitChoice) {
      return baseClasses + " bg-gradient-to-r from-purple-900 to-purple-800 border-purple-600 hover:border-purple-400 text-white hover:shadow-purple-500/50 hover:shadow-lg";
    } else {
      return baseClasses + " bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-gray-400 text-white hover:shadow-white/20 hover:shadow-lg";
    }
  };
  
  return (
    <div className="bg-gradient-to-t from-red-900/90 to-purple-900/90 backdrop-blur-sm border-t border-red-500/30 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-ui font-semibold text-white mb-4 flex items-center">
          <Crosshair className="text-red-400 mr-2 h-5 w-5" />
          Choose your response:
        </h3>
        
        <div className="space-y-3">
          {allChoices.map((choice, index) => {
            const IconComponent = getChoiceIcon(choice);
            const isTraitChoice = choice.text.includes('[');
            
            return (
              <Button
                key={choice.id}
                onClick={() => makeChoice(choice)}
                className={getChoiceStyles(choice)}
                variant="outline"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:pulse-glow ${
                    choice.dangerLevel === 'lethal' ? 'bg-red-700' :
                    choice.dangerLevel === 'high' ? 'bg-orange-700' :
                    choice.dangerLevel === 'medium' ? 'bg-yellow-700' :
                    isTraitChoice ? 'bg-purple-600' : 'bg-gray-600'
                  }`}>
                    {choice.dangerLevel ? (
                      <IconComponent className="h-4 w-4 text-white" />
                    ) : (
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-story text-white leading-relaxed">
                      {choice.text}
                    </p>
                    <p className={`text-xs mt-2 font-ui ${
                      choice.dangerLevel === 'lethal' ? 'text-red-300' :
                      choice.dangerLevel === 'high' ? 'text-orange-300' :
                      choice.dangerLevel === 'medium' ? 'text-yellow-300' :
                      isTraitChoice ? 'text-purple-300' : 'text-gray-300'
                    }`}>
                      <IconComponent className={`inline-block mr-1 h-3 w-3 ${
                        choice.dangerLevel === 'lethal' ? 'text-red-400' :
                        choice.dangerLevel === 'high' ? 'text-orange-400' :
                        choice.dangerLevel === 'medium' ? 'text-yellow-400' :
                        isTraitChoice ? 'text-purple-400' : 'text-gray-400'
                      }`} />
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
