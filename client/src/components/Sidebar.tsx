import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useGame } from '../contexts/GameContext';
import { Heart, Users, Save, FolderOpen, Settings, Backpack, BookOpen, Clock } from 'lucide-react';

interface SidebarProps {
  onShowSaveModal: () => void;
  onShowLoadModal: () => void;
}

export function Sidebar({ onShowSaveModal, onShowLoadModal }: SidebarProps) {
  const { gameState } = useGame();
  
  return (
    <div className="lg:w-80 bg-gradient-to-b from-vampire-red/90 to-gothic-purple/90 backdrop-blur-sm border-r border-blood-red/30">
      {/* Game Title */}
      <div className="p-6 border-b border-blood-red/30">
        <h1 className="font-story text-2xl lg:text-3xl font-bold text-parchment text-shadow animate-fade-in">
          <Heart className="inline-block text-blood-red mr-2 h-6 w-6" />
          Crimson Embrace
        </h1>
        <p className="text-moonlight/80 text-sm mt-1 font-ui">Chapter 1: The Awakening</p>
      </div>
      
      {/* Character Status */}
      <div className="p-6 space-y-4">
        <h3 className="font-ui font-semibold text-lg text-parchment flex items-center">
          <Users className="text-blood-red mr-2 h-5 w-5" />
          Relationships
        </h3>
        
        <div className="space-y-3">
          {Object.values(gameState.characters).map((character) => (
            <div key={character.id} className="bg-midnight/50 rounded-lg p-3 border border-blood-red/20">
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 ${character.color} rounded-full flex items-center justify-center mr-3`}>
                  <Heart className="h-4 w-4 text-parchment" />
                </div>
                <span className="font-story font-semibold text-parchment">{character.name}</span>
              </div>
              <Progress 
                value={character.affection} 
                className="w-full h-2 mb-1 bg-midnight/70"
              />
              <span className="text-xs text-moonlight/70">{character.status}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Game Controls */}
      <div className="p-6 space-y-3 border-t border-blood-red/30">
        <h3 className="font-ui font-semibold text-parchment flex items-center">
          <Settings className="text-blood-red mr-2 h-4 w-4" />
          Game Options
        </h3>
        
        <Button 
          onClick={onShowSaveModal}
          className="w-full bg-midnight/70 hover:bg-vampire-red/50 border border-blood-red/30 text-sm"
          variant="outline"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Game
        </Button>
        
        <Button 
          onClick={onShowLoadModal}
          className="w-full bg-midnight/70 hover:bg-vampire-red/50 border border-blood-red/30 text-sm"
          variant="outline"
        >
          <FolderOpen className="mr-2 h-4 w-4" />
          Load Game
        </Button>
        
        <Button 
          className="w-full bg-midnight/70 hover:bg-vampire-red/50 border border-blood-red/30 text-sm"
          variant="outline"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
      
      {/* Current Stats */}
      <div className="p-6 border-t border-blood-red/30">
        <div className="bg-midnight/50 rounded-lg p-4">
          <h4 className="font-ui font-semibold text-sm text-parchment mb-3">Your Status</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-moonlight/70">Health:</span>
              <span className="text-parchment">{gameState.playerStats.health}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-moonlight/70">Sanity:</span>
              <span className="text-parchment">{gameState.playerStats.sanity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-moonlight/70">Location:</span>
              <span className="text-parchment">{gameState.playerStats.location}</span>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-4 pt-4 border-t border-blood-red/30">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" className="bg-midnight/50 hover:bg-gothic-purple/50 border-blood-red/20 text-xs">
              <Backpack className="mr-1 h-3 w-3 text-blood-red" />
              Inventory
            </Button>
            <Button size="sm" variant="outline" className="bg-midnight/50 hover:bg-gothic-purple/50 border-blood-red/20 text-xs">
              <BookOpen className="mr-1 h-3 w-3 text-blood-red" />
              Journal
            </Button>
            <Button size="sm" variant="outline" className="bg-midnight/50 hover:bg-gothic-purple/50 border-blood-red/20 text-xs">
              <Clock className="mr-1 h-3 w-3 text-blood-red" />
              Auto-Save: On
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
