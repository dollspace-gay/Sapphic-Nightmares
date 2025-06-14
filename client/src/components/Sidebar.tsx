import { Heart, Users, MapPin, Heart as HeartIcon } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { StoryHints } from '@/components/StoryHints';

export function Sidebar() {
  const { gameState } = useGame();

  const getRelationshipStatus = (affection: number) => {
    if (affection >= 80) return { status: 'Devoted', color: 'bg-pink-500' };
    if (affection >= 60) return { status: 'Smitten', color: 'bg-red-500' };
    if (affection >= 40) return { status: 'Interested', color: 'bg-orange-500' };
    if (affection >= 20) return { status: 'Curious', color: 'bg-yellow-500' };
    if (affection >= 0) return { status: 'Neutral', color: 'bg-gray-500' };
    return { status: 'Distant', color: 'bg-blue-500' };
  };

  return (
    <div className="lg:w-80 bg-gradient-to-b from-red-900/90 to-purple-900/90 backdrop-blur-sm border-r border-red-500/30">
      {/* Game Title */}
      <div className="p-6 border-b border-red-500/30">
        <h1 className="font-story text-2xl lg:text-3xl font-bold text-white text-shadow animate-fade-in">
          <Heart className="inline-block text-red-400 mr-2 h-6 w-6" />
          Crimson Embrace
        </h1>
        <p className="text-gray-300 text-sm mt-1 font-ui">Chapter 1: The Awakening</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Character Relationships */}
        <Card className="bg-black/40 border-red-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <Users className="w-4 h-4" />
              Relationships
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.values(gameState.characters).map((character) => {
              const { status, color } = getRelationshipStatus(character.affection);
              return (
                <div key={character.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${character.color}`} />
                      <span className="text-white text-sm font-medium">{character.name}</span>
                    </div>
                    <Badge variant="outline" className={`text-xs px-2 py-0.5 ${color} border-current`}>
                      {status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress 
                      value={character.affection} 
                      max={100}
                      className="h-1.5"
                      style={{ 
                        background: `linear-gradient(to right, ${character.color.replace('bg-', 'rgb(var(--')})))`
                      }}
                    />
                    <p className="text-xs text-gray-400">{character.status}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Player Stats */}
        <Card className="bg-black/40 border-red-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Your Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">Health:</span>
                <p className="text-white font-medium">{gameState.playerStats.health}</p>
              </div>
              <div>
                <span className="text-gray-400">Sanity:</span>
                <p className="text-white font-medium">{gameState.playerStats.sanity}</p>
              </div>
            </div>
            <div className="pt-1">
              <span className="text-gray-400 text-xs">Location:</span>
              <p className="text-white font-medium text-sm">{gameState.playerStats.location}</p>
            </div>
          </CardContent>
        </Card>

        {/* Adaptive Story Hints */}
        <StoryHints />
      </div>
    </div>
  );
}
