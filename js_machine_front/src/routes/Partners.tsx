import React, { memo } from 'react';
import Background from '../images/partners.jpg';
import '../styles/partners.css';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Partners: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <div className="body" />
    </div>
  );
});
