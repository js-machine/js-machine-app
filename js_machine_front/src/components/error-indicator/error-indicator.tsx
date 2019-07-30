import React, { memo } from 'react';

import './error-indicator.css';
import icon from './error-indicator.svg';

const sectionStyle = {
  height: '100%',
  backgroundImage: `url(${icon})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const ErrorIndicator: React.FC = memo(() => {
  return (
  <div className="error-indicator"  style={sectionStyle}>
    <div className="error-indicator__text">
      <span className="error-indicator__title">BOOM!</span>
      <span className="error-indicator__subtitle">something has gone terribly wrong</span>
      <span className="error-indicator__subtitle">(but we already sent guy from support to fix it)</span>
    </div>
  </div>
  );
});

export default ErrorIndicator;
