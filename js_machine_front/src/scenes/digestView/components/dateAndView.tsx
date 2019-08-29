import React, { memo } from 'react';
import Eye from '../images/eye.svg';
import '../styles/dateAndView.css';
import { DateAndViewProps } from '../models/dateAndView';

export const DateAndView: React.FC<DateAndViewProps> = memo((props: DateAndViewProps) => {
  return (
    <div className="dateAndView">
      <span className="dateAndView__date">5 АВГ</span>
      <span><img src={Eye} alt="Eye" className="dateAndView__img" /> {props.views}</span>
    </div>
  );
});
