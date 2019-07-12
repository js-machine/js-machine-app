import React, { memo } from 'react';
import Background from '../images/main.jpg';
import '../styles/main.css';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Main: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
    </div>
  );
});
