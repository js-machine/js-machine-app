import React, { memo } from 'react';
import FontAwesome from 'react-fontawesome';
import './LeftArrowButton.css';

interface Props {
  closeDigest: (event: React.MouseEvent<HTMLButtonElement>) => void,
  text: String
}

const LeftArrowButton: React.FC<Props> = memo((props: Props) => {
  return (
    <span className="LeftArrowButton" onClick={props.closeDigest}>
      <FontAwesome name="chevron-left" className="LeftArrowButton-arrow" />
      <span className="LeftArrowButton-text">{props.text}</span>
    </span>
  );
});

export default LeftArrowButton;
