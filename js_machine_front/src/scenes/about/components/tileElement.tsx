import React, { memo } from 'react';
import '../styles/tileElement.css';
import '../styles/tileElementMedia.css';

import { PropsTileElement } from 'scenes/about/models/tileElement';

export const TileElement: React.FC<PropsTileElement> = memo((props: PropsTileElement) => {
  return (
    <div className="tile-element">
      <div className="tile-element__title">{props.title}</div>
      <p className="tile-element__description">{props.description}</p>
    </div>
  );
});
