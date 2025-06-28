import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div className={`loading ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
