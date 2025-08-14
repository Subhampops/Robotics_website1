import React, { useEffect, useState } from 'react';
import { Cpu, Zap, Bot } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            <Bot className="w-12 h-12 text-cyan-400 animate-pulse" />
            <Cpu className="w-12 h-12 text-blue-400 animate-bounce" />
            <Zap className="w-12 h-12 text-teal-400 animate-pulse" />
          </div>
          <div className="w-64 h-2 bg-slate-700 rounded-full mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading Robotics Club</h2>
        <p className="text-cyan-300 text-lg">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;