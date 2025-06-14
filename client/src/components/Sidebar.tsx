import { Heart } from 'lucide-react';

export function Sidebar() {
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
      
      {/* Story Progress */}
      <div className="p-6 space-y-4">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="font-ui font-semibold text-sm text-white mb-3">Story Progress</h4>
          <div className="text-xs text-gray-300">
            <p>You have entered the world of vampires, where ancient powers stir and forbidden romance awaits...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
