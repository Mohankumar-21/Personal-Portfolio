
import React from 'react';

export const RippleParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ripple effects */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`ripple-${i}`}
          className="absolute rounded-full border-2 border-cyan-400/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animation: `ripple ${4 + Math.random() * 3}s ease-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Center ripples */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`center-ripple-${i}`}
          className="absolute rounded-full border border-purple-400/40"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `centerRipple ${6 + i}s ease-out infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}
    </div>
  );
};
