
import React from 'react';

export const AuroraParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora waves */}
    
      
      {/* Floating aurora particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={`aurora-particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${8 + Math.random() * 12}px`,
            height: `${8 + Math.random() * 12}px`,
            background: `radial-gradient(circle, 
              rgba(${Math.random() > 0.5 ? '34, 197, 94' : '168, 85, 247'}, 0.6) 0%, 
              transparent 70%)`,
            animation: `auroraFloat ${6 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
