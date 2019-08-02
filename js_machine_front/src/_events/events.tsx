import React, { memo } from 'react';
import Background from './_images/events.jpg';
import './_styles/events.css';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Events: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <div className="body" />
    </div>
  );
});
