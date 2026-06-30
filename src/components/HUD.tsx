import React from 'react';

interface HUDProps {
  score: number;
  level: number;
}

export const HUD: React.FC<HUDProps> = ({ score, level }) => {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg z-10">
      <div className="flex items-center gap-4">
        <div className="bg-pink-500 rounded-full px-6 py-2 shadow-lg shadow-pink-500/30">
          <span className="text-xs uppercase tracking-widest text-pink-100 font-bold block">Level</span>
          <span className="text-2xl text-white font-black leading-none">{level}</span>
        </div>
        <div className="bg-indigo-600 rounded-full px-6 py-2 shadow-lg shadow-indigo-500/30">
          <span className="text-xs uppercase tracking-widest text-indigo-100 font-bold block">Score</span>
          <span className="text-2xl text-white font-black leading-none">{score}</span>
        </div>
      </div>
    </div>
  );
};
