export type BubbleColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple';

export interface Bubble {
  id: string;
  x: number;
  y: number;
  color: BubbleColor;
  popped: boolean;
}

export interface GameState {
  level: number;
  score: number;
  bubbles: Bubble[];
  shooterAngle: number;
  nextColor: BubbleColor;
  gameOver: boolean;
  won: boolean;
}

export interface LevelConfig {
  id: number;
  bubbleGrid: BubbleColor[][];
  targetScore: number;
}
