import React, { memo } from 'react';
import Background from './images/news.jpg';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const News: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <div className="body"/>
    </div>
  );
});
