import React, { useState, useEffect } from 'react';
import '../styles/IntroScreen.css';

const IntroScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger text animation after a small delay
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    // Hide intro screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Notify parent component that intro is complete
      if (onComplete) {
        setTimeout(() => onComplete(), 500); // Wait for fade out animation
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="intro-content">
        <div className={`intro-text ${textVisible ? 'animate' : ''}`}>
          <h1 className="intro-name">RATHANA</h1>
          <h1 className="intro-name intro-lastname">SOKHA</h1>
          <div className="intro-line"></div>
          <p className="intro-subtitle">Full Stack Developer</p>
        </div>
        <div className="intro-loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
