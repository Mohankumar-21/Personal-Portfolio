
import React from 'react';

export const ConstellationParticles = () => {
  const stars = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {stars.map((star, i) => 
          stars.slice(i + 1).map((otherStar, j) => {
            const distance = Math.sqrt(
              Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
            );
            if (distance < 15) {
              return (
                <line
                  key={`line-${i}-${j}`}
                  x1={`${star.x}%`}
                  y1={`${star.y}%`}
                  x2={`${otherStar.x}%`}
                  y2={`${otherStar.y}%`}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              );
            }
            return null;
          })
        )}
      </svg>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-blue-400/60 shadow-lg"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(59, 130, 246, 0.4)`,
          }}
        />
      ))}
    </div>
  );
};
