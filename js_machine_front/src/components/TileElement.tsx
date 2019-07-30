import React, { memo } from 'react';
import 'styles/tileElement.css';

interface Props {
  title: string;
  description: string;
}

export const TileElement: React.FC<Props> = memo((props: Props) => {
  return (
    <div className="tile-element">
      <div className="tile-element__title">{props.title}</div>
      <p className="tile-element__description">{props.description}</p>
    </div>
  );
});
