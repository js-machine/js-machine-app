import React, { memo } from 'react';
import './LeftArrowButton.css';
import arrow from 'images/DigestView/left.svg';

interface Props {
  closeDigest: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export const LeftArrowButton: React.FC<Props> = memo((props: Props) => {
  return (
    <span className="LeftArrowButton" onClick={props.closeDigest}>
      <img src={arrow} alt="left-arrow" className="LeftArrowButton-arrow " />
      <span className="LeftArrowButton-text">{props.text}</span>
    </span>
  );
});
