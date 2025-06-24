
import React from 'react';

export const SimpleParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Drifting particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `drift ${8 + Math.random() * 6}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute w-3 h-3 bg-emerald-400/30 rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `glow ${4 + Math.random() * 3}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)',
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-4 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `shoot ${10 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
            transform: 'rotate(45deg)',
          }}
        />
      ))}
      
      {/* Floating bubbles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-pink-300/20 bg-pink-100/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            animation: `bubble ${6 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
