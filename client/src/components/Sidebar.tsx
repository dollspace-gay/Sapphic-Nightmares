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
    <div className="lg:w-80 bg-gradient-to-b from-red-900/90 to-purple-900/90 backdrop-blur-sm border-r border-red-500/30">
      {/* Game Title */}
      <div className="p-6 border-b border-red-500/30">
        <h1 className="font-story text-2xl lg:text-3xl font-bold text-white text-shadow animate-fade-in">
          <Heart className="inline-block text-red-400 mr-2 h-6 w-6" />
          Crimson Embrace
        </h1>
        <p className="text-gray-300 text-sm mt-1 font-ui">Chapter 1: The Awakening</p>
      </div>
      
      {/* Character Status */}
      <div className="p-6 space-y-4">
        <h3 className="font-ui font-semibold text-lg text-white flex items-center">
          <Users className="text-red-400 mr-2 h-5 w-5" />
          Relationships
        </h3>
        
        <div className="space-y-3">
          {Object.values(gameState.characters).map((character) => (
            <div key={character.id} className="bg-gray-800/50 rounded-lg p-3 border border-red-500/20">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-story font-semibold text-white">{character.name}</span>
              </div>
              <Progress 
                value={character.affection} 
                className="w-full h-2 mb-1 bg-gray-700/70"
              />
              <span className="text-xs text-gray-300">{character.status}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Game Controls */}
      <div className="p-6 space-y-3 border-t border-red-500/30">
        <h3 className="font-ui font-semibold text-white flex items-center">
          <Settings className="text-red-400 mr-2 h-4 w-4" />
          Game Options
        </h3>
        
        <Button 
          onClick={onShowSaveModal}
          className="w-full bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-sm text-white"
          variant="outline"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Game
        </Button>
        
        <Button 
          onClick={onShowLoadModal}
          className="w-full bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-sm text-white"
          variant="outline"
        >
          <FolderOpen className="mr-2 h-4 w-4" />
          Load Game
        </Button>
        
        <Button 
          className="w-full bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-sm text-white"
          variant="outline"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
      
      {/* Current Stats */}
      <div className="p-6 border-t border-red-500/30">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="font-ui font-semibold text-sm text-white mb-3">Your Status</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-300">Health:</span>
              <span className="text-white">{gameState.playerStats.health}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Sanity:</span>
              <span className="text-white">{gameState.playerStats.sanity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Location:</span>
              <span className="text-white">{gameState.playerStats.location}</span>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-4 pt-4 border-t border-red-500/30">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" className="bg-gray-800/50 hover:bg-purple-600/50 border-red-500/20 text-xs text-white">
              <Backpack className="mr-1 h-3 w-3 text-red-400" />
              Inventory
            </Button>
            <Button size="sm" variant="outline" className="bg-gray-800/50 hover:bg-purple-600/50 border-red-500/20 text-xs text-white">
              <BookOpen className="mr-1 h-3 w-3 text-red-400" />
              Journal
            </Button>
            <Button size="sm" variant="outline" className="bg-gray-800/50 hover:bg-purple-600/50 border-red-500/20 text-xs text-white">
              <Clock className="mr-1 h-3 w-3 text-red-400" />
              Auto-Save: On
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
