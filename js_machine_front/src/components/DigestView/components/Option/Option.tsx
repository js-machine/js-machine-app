import React, { memo } from 'react';
import './Option.css';
import star from 'images/DigestView/star.svg';
import share from 'images/DigestView/share-option.svg';
import warning from 'images/DigestView/warning.svg';

export const Option: React.FC = memo(() => {
  return (
    <div className="Option">
      <img src={share} alt="share" className="Option-Img" />
      <img src={star} alt="start" className="Option-Img"  />
      <img src={warning} alt="warning" className="Option-Img" />
    </div>
  );
});
