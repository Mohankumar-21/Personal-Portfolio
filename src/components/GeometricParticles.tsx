
import React from 'react';

export const GeometricParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating triangles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`triangle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `geometricFloat ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <div 
            className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-cyan-400/40"
            style={{
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}
      
      {/* Hexagons */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`hex-${i}`}
          className="absolute w-4 h-4 bg-purple-400/30 rotate-45"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `geometricSpin ${6 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        />
      ))}
      
      {/* Squares */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`square-${i}`}
          className="absolute w-3 h-3 bg-emerald-400/25 border border-emerald-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `geometricDrift ${10 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};
