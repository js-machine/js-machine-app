import React, { memo } from 'react';
import '../styles/option.css';
import star from '../images/star.svg';
import share from '../images/share-option.svg';
import warning from '../images/warning.svg';

export const Option: React.FC = memo(() => {
  return (
    <div className="option">
      <img src={share} alt="share" className="option__img" />
      <img src={star} alt="start" className="option__img"  />
      <img src={warning} alt="warning" className="option__img" />
    </div>
  );
});
