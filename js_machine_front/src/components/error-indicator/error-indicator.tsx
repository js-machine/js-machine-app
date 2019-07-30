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
      <span className="error-indicator__title">УПС!</span>
      <span className="error-indicator__subtitle">что-то пошло не так</span>
      <span className="error-indicator__subtitle">(но мы уже отправили парня из поддержки починить это)</span>
    </div>
  </div>
  );
});

export default ErrorIndicator;
