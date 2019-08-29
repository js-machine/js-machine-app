import React, { memo } from 'react';
import '../styles/option.css';
import star from '../images/star.svg';
import share from '../images/share-option.svg';
import warning from '../images/warning.svg';

export const Option: React.FC = memo(() => {
  return (
    <div className="digestview__option">
      <img src={share} alt="share" className="digestview__option-img" />
      <img src={star} alt="start" className="digestview__option-img"  />
      <img src={warning} alt="warning" className="digestview__option-img" />
    </div>
  );
});
