import React, { memo } from 'react';
import { TileElement } from './tileElement';
import { Tile } from 'about/model/Tile';
import '../styles/tileContent.css';

interface Props {
  arrTiles: Tile[];
}

export const TileContent: React.FC<Props> = memo((props: Props) => {
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
