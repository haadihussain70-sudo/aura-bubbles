import { Bubble, BubbleColor } from './types';

export const COLORS: BubbleColor[] = ['red', 'blue', 'green', 'yellow', 'purple'];

export const generateLevelGrid = (level: number): Bubble[] => {
  const rows = Math.min(5 + Math.floor(level / 2), 10);
  const cols = 8;
  const bubbles: Bubble[] = [];
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (Math.random() > 0.3) {
        bubbles.push({
          id: `${r}-${c}`,
          x: c * 50 + 25,
          y: r * 50 + 50,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          popped: false
        });
      }
    }
  }
  return bubbles;
};

export const checkMatches = (bubbles: Bubble[], targetBubble: Bubble): string[] => {
  // Simple BFS/DFS to find matching color clusters
  const matches: string[] = [];
  // ... implementation ...
  return matches;
};
