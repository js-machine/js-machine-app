import React, { memo } from 'react';
import Background from '../images/about.jpg';
import '../styles/about.css';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const About: React.FC = memo(() => {

  return (
    <div style={ sectionStyle }>
      <div className="body" />
    </div>
  );
});
