// src/components/LoadingScreen.jsx

import { useState, useEffect } from 'react';
import rmLogo from './RM white.png'; // Make sure this path is correct

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out, then call onLoaded after the animation
          setIsFadingOut(true);
          setTimeout(onLoaded, 500); // Should match the fade-out duration
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust timing for a ~3 second load

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <img src={rmLogo} alt="Loading Logo" className="loading-logo" />
        <p className="loading-text font-heading">
          LOADING SCHEMATICS...
        </p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-percent font-mono">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;