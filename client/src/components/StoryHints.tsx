import { useGame } from '@/contexts/GameContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Heart, AlertTriangle, Info } from 'lucide-react';

interface HintData {
  type: 'relationship' | 'story' | 'warning' | 'opportunity';
  title: string;
  description: string;
  character?: string;
  priority: 'low' | 'medium' | 'high';
}

export function StoryHints() {
  const { gameState, currentScene } = useGame();

  const generateHints = (): HintData[] => {
    const hints: HintData[] = [];
    
    // Check character relationship levels and provide hints
    Object.values(gameState.characters).forEach(character => {
      if (character.affection >= 80) {
        hints.push({
          type: 'relationship',
          title: 'Deep Connection',
          description: `Your bond with ${character.name} has grown incredibly strong. Major story paths may be opening.`,
          character: character.id,
          priority: 'high'
        });
      } else if (character.affection >= 60) {
        hints.push({
          type: 'relationship',
          title: 'Growing Bond',
          description: `${character.name} is developing strong feelings. Continue showing interest to deepen this relationship.`,
          character: character.id,
          priority: 'medium'
        });
      } else if (character.affection <= 20 && character.affection > 0) {
        hints.push({
          type: 'warning',
          title: 'Strained Relationship',
          description: `Your relationship with ${character.name} seems distant. Consider choices that align with their values.`,
          character: character.id,
          priority: 'medium'
        });
      }
    });

    // Scene-specific hints based on current location
    if (currentScene?.choices) {
      const hasRomanticChoice = currentScene.choices.some((choice: any) => 
        choice.consequence.toLowerCase().includes('romantic') || 
        choice.consequence.toLowerCase().includes('attraction')
      );
      
      const hasRiskyChoice = currentScene.choices.some((choice: any) =>
        choice.consequence.toLowerCase().includes('risk') ||
        choice.consequence.toLowerCase().includes('danger') ||
        choice.effects.some((effect: any) => effect.affectionChange < -5)
      );

      if (hasRomanticChoice) {
        hints.push({
          type: 'opportunity',
          title: 'Romantic Moment',
          description: 'This scene offers opportunities to express romantic interest. Consider your feelings carefully.',
          priority: 'medium'
        });
      }

      if (hasRiskyChoice) {
        hints.push({
          type: 'warning',
          title: 'Careful Consideration',
          description: 'Some choices here may significantly impact your relationships. Think about long-term consequences.',
          priority: 'high'
        });
      }
    }

    // Character-specific storyline hints
    if (gameState.characters.lilith.affection >= 50) {
      hints.push({
        type: 'story',
        title: 'Vampire Lore',
        description: 'Lilith may be willing to share deeper secrets about vampire nature and transformation.',
        character: 'lilith',
        priority: 'medium'
      });
    }

    if (gameState.characters.morgana.affection >= 40) {
      hints.push({
        type: 'opportunity',
        title: 'Artistic Connection',
        description: 'Morgana appreciates those who understand her music. Show interest in her artistic expression.',
        character: 'morgana',
        priority: 'low'
      });
    }

    if (gameState.characters.seraphina.affection >= 45) {
      hints.push({
        type: 'story',
        title: 'Divine Mysteries',
        description: 'Seraphina may reveal more about her angelic past and the choices that led her here.',
        character: 'seraphina',
        priority: 'medium'
      });
    }

    // Transformation readiness hints
    const totalAffection = Object.values(gameState.characters).reduce((sum, char) => sum + char.affection, 0);
    const maxAffection = Math.max(...Object.values(gameState.characters).map(char => char.affection));
    
    if (maxAffection >= 90 && totalAffection >= 200) {
      hints.push({
        type: 'opportunity',
        title: 'Deepest Bonds',
        description: 'Your connections have reached extraordinary depths. Profound choices may become available.',
        priority: 'high'
      });
    }

    // Player choice pattern analysis
    const completedScenes = gameState.completedScenes;
    if (completedScenes.length >= 5) {
      const recentChoices = completedScenes.slice(-3);
      // This could be expanded to analyze choice patterns and provide personalized advice
      hints.push({
        type: 'story',
        title: 'Your Journey',
        description: 'Your choices are shaping a unique path through this story. Trust your instincts.',
        priority: 'low'
      });
    }

    // Sort by priority and limit to most relevant hints
    return hints
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      })
      .slice(0, 4); // Show max 4 hints to avoid overwhelming
  };

  const hints = generateHints();
  
  if (hints.length === 0) {
    return null;
  }

  const getHintIcon = (type: HintData['type']) => {
    switch (type) {
      case 'relationship':
        return <Heart className="w-4 h-4" />;
      case 'story':
        return <Info className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'opportunity':
        return <Lightbulb className="w-4 h-4" />;
    }
  };

  const getHintColor = (type: HintData['type']) => {
    switch (type) {
      case 'relationship':
        return 'bg-rose-500/20 text-rose-200 border-rose-500/30';
      case 'story':
        return 'bg-blue-500/20 text-blue-200 border-blue-500/30';
      case 'warning':
        return 'bg-amber-500/20 text-amber-200 border-amber-500/30';
      case 'opportunity':
        return 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30';
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
        <Lightbulb className="w-4 h-4" />
        Story Insights
      </h3>
      <div className="space-y-2">
        {hints.map((hint, index) => (
          <Card 
            key={index} 
            className={`border transition-all duration-200 hover:border-opacity-60 ${getHintColor(hint.type)}`}
          >
            <CardContent className="p-3">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  {getHintIcon(hint.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xs font-medium truncate">{hint.title}</h4>
                    {hint.character && (
                      <Badge variant="outline" className="text-xs px-1 py-0">
                        {gameState.characters[hint.character]?.name}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {hint.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}