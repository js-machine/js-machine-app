import React, { memo } from 'react';
import Eye from '../images/eye.svg';
import '../styles/dateAndView.css';
import { DateAndViewProps } from '../models/dateAndView';

export const DateAndView: React.FC<DateAndViewProps> = memo((props: DateAndViewProps) => {
  return (
    <div className="digestview__dateAndView">
      <span className="digestview__dateAndView-date">5 АВГ</span>
      <span><img src={Eye} alt="Eye" className="digestview__dateAndView-img" /> {props.views}</span>
    </div>
  );
});
