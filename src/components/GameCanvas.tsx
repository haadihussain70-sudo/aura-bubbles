import React, { useRef, useEffect } from 'react';
import { GameState } from '../types';

interface GameCanvasProps {
  gameState: GameState;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ gameState }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game loop logic would go here
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw bubbles
    gameState.bubbles.forEach(bubble => {
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, 20, 0, Math.PI * 2);
      ctx.fillStyle = bubble.color;
      ctx.fill();
      ctx.closePath();
    });
  }, [gameState]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full bg-white/5 border border-white/10 rounded-3xl touch-none"
      width={400}
      height={600}
    />
  );
};
