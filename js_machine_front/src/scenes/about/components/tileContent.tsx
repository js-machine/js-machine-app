import React, { memo } from 'react';
import { TileElement } from './tileElement';
import { Tile } from 'scenes/about/models/Tile';
import { IPropsTileContent } from 'scenes/about/models/ITileContent';
import '../styles/tileContent.css';

export const TileContent: React.FC<IPropsTileContent> = memo((props: IPropsTileContent) => {
  return (
    <div className="tile-content color">
      <div className="tile-content__container">
        <div className="tile-content__container_flex-container">
          {props.arrTiles.map((item: Tile) => (
            <TileElement
              key={item.id}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
