import React, { memo } from 'react';
import '../styles/leftArrowButton.css';
import arrow from '../images/left.svg';
import { LeftArrowButtonProps } from '../models/leftArrowButton';

export const LeftArrowButton: React.FC<LeftArrowButtonProps> = memo((props: LeftArrowButtonProps) => {
  return (
    <span className="digestview__leftArrowButton" onClick={props.closeDigest}>
      <img src={arrow} alt="left-arrow" className="digestview__leftArrowButton-arrow" />
      <span className="digestview__leftArrowButton-text">{props.text}</span>
    </span>
  );
});
