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
          {(() => {
            const tiles = [];

            for (let i = 0; i < 3; i++) {
              tiles.push(
                <TileElement
                  description={props.arrTiles[i].description}
                  title={props.arrTiles[i].title}
                />,
              );
            }

            return tiles;
          })()}
        </div>
      </div>
    </div>
  );
});
