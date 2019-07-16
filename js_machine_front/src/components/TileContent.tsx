import React, { memo } from 'react';
import { TileElement } from './TileElement';
import { Tile } from 'model/Tile';

interface Props {
  arrTiles: Tile[];
}

export const TileContent: React.FC<Props> = memo((props: Props) => {
  return (
    <div className="content color">
      <div className="container">
        <div className="container_flex-container">
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
