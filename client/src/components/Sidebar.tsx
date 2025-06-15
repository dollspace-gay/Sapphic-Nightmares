import { Heart, Users, MapPin, X, Shield, AlertTriangle } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { StoryHints } from '@/components/StoryHints';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const { gameState } = useGame();

  const getRelationshipStatus = (affection: number, trust: number) => {
    // Trust-based danger states override normal affection states
    if (trust <= 10) return { status: 'Hostile', color: 'bg-red-700', icon: AlertTriangle };
    if (trust <= 20) return { status: 'Deeply Suspicious', color: 'bg-red-600', icon: AlertTriangle };
    if (trust <= 30) return { status: 'Distrustful', color: 'bg-orange-600', icon: AlertTriangle };
    if (trust <= 40) return { status: 'Wary', color: 'bg-yellow-600', icon: Shield };
    
    // Normal affection-based states when trust is adequate
    if (affection >= 80) return { status: 'Deeply in Love', color: 'bg-pink-500', icon: Heart };
    if (affection >= 60) return { status: 'Smitten', color: 'bg-red-500', icon: Heart };
    if (affection >= 40) return { status: 'Interested', color: 'bg-orange-500', icon: Heart };
    if (affection >= 20) return { status: 'Curious', color: 'bg-yellow-500', icon: Heart };
    return { status: 'Neutral', color: 'bg-gray-500', icon: Users };
  };

  const getTrustColor = (trust: number) => {
    if (trust <= 10) return 'text-red-500';
    if (trust <= 20) return 'text-orange-500';
    if (trust <= 40) return 'text-yellow-500';
    if (trust <= 60) return 'text-blue-500';
    return 'text-green-500';
  };

  return (
    <div className="lg:w-80 w-80 bg-gradient-to-b from-red-900/90 to-purple-900/90 backdrop-blur-sm border-r border-red-500/30">
      {/* Game Title */}
      <div className="p-6 border-b border-red-500/30">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-story text-xl lg:text-2xl font-bold text-white text-shadow animate-fade-in">
            <Heart className="inline-block text-red-400 mr-2 h-5 w-5" />
            Crimson Embrace
          </h1>
          {onClose && (
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-300 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-gray-300 text-sm font-ui">Chapter 1: The Awakening</p>
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
              const { status, color, icon: StatusIcon } = getRelationshipStatus(character.affection, character.trust);
              return (
                <div key={character.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${character.color}`} />
                      <span className="text-white text-sm font-medium">{character.name}</span>
                    </div>
                    <Badge variant="outline" className={`text-xs px-2 py-0.5 ${color} border-current flex items-center gap-1`}>
                      <StatusIcon className="w-3 h-3" />
                      {status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Affection</span>
                      <span className="text-pink-400">{character.affection}/100</span>
                    </div>
                    <Progress 
                      value={character.affection} 
                      max={100}
                      className="h-1.5"
                      style={{ 
                        background: `linear-gradient(to right, ${character.color.replace('bg-', 'rgb(var(--')})))`
                      }}
                    />
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Trust</span>
                      <span className={getTrustColor(character.trust)}>{character.trust}/100</span>
                    </div>
                    <Progress 
                      value={character.trust} 
                      max={100}
                      className="h-1.5"
                    />
                    <p className="text-xs text-gray-400">{character.title}</p>
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
                <p className={`font-medium ${gameState.playerStats.health > 75 ? 'text-green-400' : 
                  gameState.playerStats.health > 50 ? 'text-yellow-400' : 
                  gameState.playerStats.health > 25 ? 'text-orange-400' : 'text-red-400'}`}>
                  {gameState.playerStats.health}/100
                </p>
              </div>
              <div>
                <span className="text-gray-400">Sanity:</span>
                <p className={`font-medium ${gameState.playerStats.sanity > 75 ? 'text-green-400' : 
                  gameState.playerStats.sanity > 50 ? 'text-yellow-400' : 
                  gameState.playerStats.sanity > 25 ? 'text-orange-400' : 'text-red-400'}`}>
                  {gameState.playerStats.sanity}/100
                </p>
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
