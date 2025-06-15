import { useState, useMemo } from 'react';
import { gameData } from '@/data/gameData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GameProvider } from '@/contexts/GameContext';
import { useLocation } from 'wouter';

interface TreeNode {
  id: string;
  title: string;
  text: string[];
  choices: Array<{
    id: string;
    text: string;
    consequence: string;
    nextScene?: string;
    effects: Array<{ characterId: string; affectionChange: number }>;
  }>;
  children: TreeNode[];
  level: number;
}

function StoryTreeDevContent() {
  const [selectedScene, setSelectedScene] = useState<any>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [location, navigate] = useLocation();

  // Build the story tree structure
  const storyTree = useMemo(() => {
    const allScenes = gameData.flatMap(chapter => chapter.scenes);
    const sceneMap = new Map(allScenes.map(scene => [scene.id, scene]));
    
    const buildTree = (sceneId: string, level: number = 0, visited: Set<string> = new Set()): TreeNode | null => {
      if (visited.has(sceneId) || level > 8) return null; // Prevent infinite loops and limit depth
      
      const scene = sceneMap.get(sceneId);
      if (!scene) return null;
      
      visited.add(sceneId);
      
      const children: TreeNode[] = [];
      for (const choice of scene.choices) {
        if (choice.nextScene) {
          const childNode = buildTree(choice.nextScene, level + 1, new Set(visited));
          if (childNode) {
            children.push(childNode);
          }
        }
      }
      
      return {
        id: scene.id,
        title: scene.title,
        text: scene.text,
        choices: scene.choices,
        children,
        level
      };
    };

    return buildTree('arrival');
  }, []);

  const toggleExpanded = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const jumpToScene = (sceneId: string) => {
    // For the developer tool, we'll navigate back to the game with a URL parameter
    // The main game can handle scene jumping through URL params or localStorage
    localStorage.setItem('devJumpToScene', sceneId);
    navigate('/');
  };

  const renderNode = (node: TreeNode): JSX.Element => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children.length > 0;
    
    return (
      <div key={node.id} className="ml-4" style={{ marginLeft: `${node.level * 20}px` }}>
        <div className="flex items-center gap-2 mb-2">
          {hasChildren && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleExpanded(node.id)}
              className="w-6 h-6 p-0"
            >
              {isExpanded ? '−' : '+'}
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedScene(node)}
            className="text-left"
          >
            {node.title}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => jumpToScene(node.id)}
            className="text-xs"
          >
            Jump Here
          </Button>
          <Badge variant="secondary" className="text-xs">
            {node.choices.length} choices
          </Badge>
        </div>
        
        {isExpanded && hasChildren && (
          <div className="border-l-2 border-muted ml-3 pl-2">
            {node.children.map(child => renderNode(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6 h-screen flex gap-6">
      {/* Story Tree Panel */}
      <div className="w-1/2 h-full">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl">Story Tree</CardTitle>
            <p className="text-sm text-muted-foreground">
              Click + to expand branches, scene names to view details, or "Jump Here" to test that path
            </p>
          </CardHeader>
          <CardContent className="h-full">
            <ScrollArea className="h-full">
              {storyTree && renderNode(storyTree)}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Scene Details Panel */}
      <div className="w-1/2 h-full">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl">Scene Details</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <ScrollArea className="h-full">
              {selectedScene ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{selectedScene.title}</h3>
                    <Badge variant="outline">ID: {selectedScene.id}</Badge>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Story Text:</h4>
                    <div className="space-y-2">
                      {selectedScene.text.map((paragraph: string, index: number) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Choices ({selectedScene.choices.length}):</h4>
                    <div className="space-y-3">
                      {selectedScene.choices.map((choice: any, index: number) => (
                        <Card key={choice.id} className="p-3">
                          <div className="space-y-2">
                            <p className="text-sm font-medium">{choice.text}</p>
                            <p className="text-xs text-blue-400">{choice.consequence}</p>
                            {choice.nextScene && (
                              <Badge variant="secondary" className="text-xs">
                                → {choice.nextScene}
                              </Badge>
                            )}
                            {choice.effects.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {choice.effects.map((effect: any, i: number) => (
                                  <Badge 
                                    key={i} 
                                    variant={effect.affectionChange > 0 ? "default" : "destructive"}
                                    className="text-xs"
                                  >
                                    {effect.characterId}: {effect.affectionChange > 0 ? '+' : ''}{effect.affectionChange}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Select a scene from the tree to view its details
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Wrap with GameProvider for compatibility but make it standalone
export default function StoryTreeDev() {
  return (
    <GameProvider>
      <StoryTreeDevContent />
    </GameProvider>
  );
}