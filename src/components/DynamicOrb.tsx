
import React, { useEffect, useRef } from 'react';

export const DynamicOrb = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const rotateX = (y / rect.height) * 20;
        const rotateY = (x / rect.width) * 20;
        
        orbRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const container = orbRef.current?.parentElement;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <div 
        ref={orbRef}
        className="relative w-72 h-72 transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Main gradient orb */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/80 via-pink-400/70 to-blue-500/80 backdrop-blur-sm"></div>
        
        {/* Inner concentric circles */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-purple-300/60 via-pink-300/50 to-blue-400/60 backdrop-blur-sm"></div>
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-blue-300/40 backdrop-blur-sm"></div>
        <div className="absolute inset-24 rounded-full bg-gradient-to-tr from-white/50 to-purple-100/40 backdrop-blur-sm"></div>
        
        {/* Outer rings */}
        <div className="absolute inset-2 rounded-full border border-purple-300/30 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-4 rounded-full border border-pink-300/25 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-pink-400/15 to-blue-500/20 blur-xl"></div>
      </div>
    </div>
  );
};
