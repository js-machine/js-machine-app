import React, { memo } from 'react';
import '../styles/tileElement.css';

import { IPropsTileElement } from 'scenes/about/models/ITileElement'

export const TileElement: React.FC<IPropsTileElement> = memo((props: IPropsTileElement) => {
  return (
    <div className="tile-element">
      <div className="tile-element__title">{props.title}</div>
      <p className="tile-element__description">{props.description}</p>
    </div>
  );
});
