/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { GameCanvas } from './components/GameCanvas';
import { HUD } from './components/HUD';
import { GameState } from './types';
import { generateLevelGrid } from './lib/gameLogic';

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    score: 0,
    bubbles: [],
    shooterAngle: 0,
    nextColor: 'red',
    gameOver: false,
    won: false,
  });

  useEffect(() => {
    setGameState(prev => ({
      ...prev,
      bubbles: generateLevelGrid(prev.level)
    }));
  }, [gameState.level]);

  return (
    <div className="w-full h-screen bg-[#1a0b2e] flex flex-col items-center justify-center overflow-hidden font-sans select-none">
      <HUD score={gameState.score} level={gameState.level} />
      <div className="w-full max-w-md h-full relative p-8">
        <GameCanvas gameState={gameState} />
      </div>
      <div className="absolute bottom-8 flex gap-4">
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 to-yellow-400 flex items-center justify-center text-3xl shadow-lg shadow-orange-500/40 hover:scale-105 transition-transform">⚡</button>
      </div>
      {/* Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
}
