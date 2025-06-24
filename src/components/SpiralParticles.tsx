
import React from 'react';

export const SpiralParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Spiral particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={`spiral-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            animation: `spiral ${8 + i * 0.3}s linear infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      
      {/* Counter-spiral particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`counter-spiral-${i}`}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            animation: `counterSpiral ${6 + i * 0.2}s linear infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};
