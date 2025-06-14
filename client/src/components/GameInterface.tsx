import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { StoryPanel } from './StoryPanel';
import { ChoicePanel } from './ChoicePanel';
import { GameStateModal } from './GameStateModal';

export function GameInterface() {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-midnight">
      {/* Gothic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gothic-purple/20 to-vampire-red/30"></div>
      
      {/* Main Game Interface */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        <Sidebar 
          onShowSaveModal={() => setShowSaveModal(true)}
          onShowLoadModal={() => setShowLoadModal(true)}
        />
        
        <div className="flex-1 flex flex-col">
          <StoryPanel />
          <ChoicePanel />
        </div>
      </div>
      
      {/* Save Modal */}
      <GameStateModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        mode="save"
      />
      
      {/* Load Modal */}
      <GameStateModal
        isOpen={showLoadModal}
        onClose={() => setShowLoadModal(false)}
        mode="load"
      />
    </div>
  );
}
