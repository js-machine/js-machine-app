import React, { memo } from 'react';
import Eye from 'images/DigestView/eye.svg';
import './DateAndView.css';

interface Props {
  views: number;
}

export const DateAndView: React.FC<Props> = memo((props: Props) => {
  return (
    <div className="DateAndView">
      <span className="DateAndView-Date">5 АВГ</span>
      <span><img src={Eye} alt="Eye" className="DateAndView-Img" /> {props.views}</span>
    </div>
  );
});
