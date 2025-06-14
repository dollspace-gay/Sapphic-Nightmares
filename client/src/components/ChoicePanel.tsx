import { Button } from '@/components/ui/button';
import { useGame } from '../contexts/GameContext';
import { Crosshair, Heart, Flame, Skull, Shield, Star, Eye, Zap } from 'lucide-react';
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
  
  const getChoiceIcon = (consequence: string, text: string) => {
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
  
  return (
    <div className="bg-gradient-to-t from-red-900/90 to-purple-900/90 backdrop-blur-sm border-t border-red-500/30 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-ui font-semibold text-white mb-4 flex items-center">
          <Crosshair className="text-red-400 mr-2 h-5 w-5" />
          Choose your response:
        </h3>
        
        <div className="space-y-3">
          {allChoices.map((choice, index) => {
            const IconComponent = getChoiceIcon(choice.consequence, choice.text);
            const isTraitChoice = choice.text.includes('[');
            
            return (
              <Button
                key={choice.id}
                onClick={() => makeChoice(choice)}
                className={`w-full text-left ${
                  isTraitChoice 
                    ? 'bg-purple-800/70 hover:bg-purple-600/50 border-purple-500/30' 
                    : 'bg-gray-800/70 hover:bg-red-600/50 border-red-500/30'
                } rounded-lg p-4 transition-all duration-300 choice-hover group h-auto`}
                variant="outline"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 ${
                    isTraitChoice ? 'bg-purple-600' : 'bg-red-600'
                  } rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:pulse-glow`}>
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-story text-white leading-relaxed">
                      {choice.text}
                    </p>
                    <p className={`text-xs mt-2 font-ui ${
                      isTraitChoice ? 'text-purple-300' : 'text-gray-300'
                    }`}>
                      <IconComponent className={`inline-block mr-1 h-3 w-3 ${
                        isTraitChoice ? 'text-purple-400' : 'text-red-400'
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
