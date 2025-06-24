
import React from 'react';
import { Monitor, Code, Coffee, Zap, Wifi, Mouse } from 'lucide-react';

export const WorkingAnimation = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Desk */}
      <div className="absolute bottom-8 w-80 h-32 bg-gradient-to-b from-amber-600 to-amber-800 rounded-lg shadow-2xl">
        {/* Desk legs */}
        <div className="absolute -bottom-8 left-4 w-3 h-8 bg-amber-700 rounded-b"></div>
        <div className="absolute -bottom-8 right-4 w-3 h-8 bg-amber-700 rounded-b"></div>
      </div>

      {/* Person sitting */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        {/* Chair */}
        <div className="absolute -bottom-4 w-16 h-12 bg-gray-700 rounded-lg"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gray-600 rounded-b"></div>
        
        {/* Person body */}
        <div className="relative">
          {/* Torso */}
          <div className="w-8 h-12 bg-blue-600 rounded-t-full mx-auto"></div>
          
          {/* Head */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-200 rounded-full"></div>
          
          {/* Arms */}
          <div className="absolute top-2 -left-2 w-3 h-8 bg-blue-600 rounded transform rotate-12 origin-top"></div>
          <div className="absolute top-2 -right-2 w-3 h-8 bg-blue-600 rounded transform -rotate-12 origin-top"></div>
          
          {/* Hands on keyboard */}
          <div className="absolute top-8 -left-1 w-2 h-2 bg-amber-200 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-1 w-2 h-2 bg-amber-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Monitor */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-lg p-4 shadow-2xl">
        <div className="w-32 h-20 bg-gradient-to-br from-blue-900 to-purple-900 rounded border-2 border-gray-700 relative overflow-hidden">
          {/* Code lines animation */}
          <div className="absolute top-1 left-1 space-y-0.5">
            <div className="h-0.5 bg-green-400 rounded animate-pulse" style={{ width: '60%', animationDelay: '0s' }}></div>
            <div className="h-0.5 bg-blue-400 rounded animate-pulse" style={{ width: '80%', animationDelay: '0.5s' }}></div>
            <div className="h-0.5 bg-yellow-400 rounded animate-pulse" style={{ width: '45%', animationDelay: '1s' }}></div>
            <div className="h-0.5 bg-purple-400 rounded animate-pulse" style={{ width: '70%', animationDelay: '1.5s' }}></div>
            <div className="h-0.5 bg-pink-400 rounded animate-pulse" style={{ width: '55%', animationDelay: '2s' }}></div>
          </div>
          
          {/* Cursor blink */}
          <div 
            className="absolute w-0.5 h-2 bg-white animate-pulse"
            style={{ 
              top: '12px', 
              left: '35%',
              animationDuration: '1s'
            }}
          ></div>
        </div>
        
        {/* Monitor stand */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-800 rounded-b"></div>
      </div>

      {/* Keyboard */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded shadow-lg">
        <div className="grid grid-cols-8 gap-0.5 p-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-1 bg-gray-600 rounded-sm"
              style={{
                animation: i % 3 === 0 ? 'workingKeyPress 2s ease-in-out infinite' : 'none',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse */}
      <div className="absolute bottom-14 right-20 w-3 h-4 bg-gray-700 rounded-full shadow-md">
        <div className="w-1 h-1 bg-red-500 rounded-full mx-auto mt-1 animate-pulse"></div>
      </div>

      {/* Coffee cup */}
      <div className="absolute bottom-20 right-12 w-4 h-5 bg-amber-700 rounded-b-full shadow-lg">
        <div className="w-3 h-3 bg-amber-900 rounded-full mx-auto mt-0.5"></div>
        <div className="absolute -top-1 right-0 w-1 h-2 bg-amber-700 rounded-l"></div>
        {/* Steam */}
        <div className="absolute -top-2 left-1">
          <div className="w-0.5 h-2 bg-gray-300 rounded animate-pulse opacity-60" style={{ animationDelay: '0s' }}></div>
        </div>
        <div className="absolute -top-2 left-2">
          <div className="w-0.5 h-2 bg-gray-300 rounded animate-pulse opacity-60" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>

      {/* Floating productivity icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-8 right-8 text-blue-500"
          style={{ animation: 'workingFloat 3s ease-in-out infinite' }}
        >
          <Code size={20} />
        </div>
        
        <div 
          className="absolute top-16 left-8 text-green-500"
          style={{ animation: 'workingFloat 3s ease-in-out infinite', animationDelay: '1s' }}
        >
          <Wifi size={16} />
        </div>
        
        <div 
          className="absolute bottom-32 right-4 text-yellow-500"
          style={{ animation: 'workingFloat 3s ease-in-out infinite', animationDelay: '2s' }}
        >
          <Zap size={18} />
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full animate-pulse"></div>
    </div>
  );
};
