import React, { memo } from 'react';
import './Option.css';
import star from 'images/DigestView/star.svg';
import share from 'images/DigestView/share-option.svg';
import warning from 'images/DigestView/warning.svg';

interface Props {
  someMethod: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Option: React.FC<Props> = memo((props: Props) => {
  return (
    <div className="Option">
      <img src={share} alt="share" className="Option-Img" onClick={props.someMethod} />
      <img src={star} alt="start" className="Option-Img" onClick={props.someMethod} />
      <img src={warning} alt="warning" className="Option-Img" onClick={props.someMethod} />
    </div>
  );
});
