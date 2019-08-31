import React, { memo } from 'react';
import '../styles/leftArrowButton.css';
import arrow from '../images/left.svg';
import { LeftArrowButtonProps } from '../models/leftArrowButton';

export const LeftArrowButton: React.FC<LeftArrowButtonProps> = memo((props: LeftArrowButtonProps) => {
  return (
    <span className="left-arrow-button" onClick={props.closeDigest}>
      <img src={arrow} alt="left-arrow" className="left-arrow-button__arrow" />
      <span className="left-arrow-button__text">{props.text}</span>
    </span>
  );
});
