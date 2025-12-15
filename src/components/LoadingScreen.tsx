import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-100 transition-opacity duration-500 pointer-events-none loading-screen">
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-400 animate-spin" />

        {/* Middle rotating ring (reverse) */}
        <div className="absolute inset-2 rounded-full border-3 border-transparent border-b-emerald-400 border-l-purple-400 animate-spin-reverse" />

        {/* Inner pulsing core */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse shadow-lg shadow-cyan-400/50" />

        {/* Center glow */}
        <div className="absolute inset-6 rounded-full bg-blue-500 blur-sm opacity-50" />
      </div>

      {/* Loading text with animation */}
      <div className="absolute bottom-20 flex flex-col items-center gap-4">
        <p className="text-cyan-400 text-lg font-semibold animate-pulse">
          Loading Experience...
        </p>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0.1s" }} />
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
