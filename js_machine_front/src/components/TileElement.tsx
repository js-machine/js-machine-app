import React, { memo } from 'react';

interface Props {
  title: string;
  description: string;
}

export const TileElement: React.FC<Props> = memo((props: Props) => {
  return (
    <div className="container__article font-article">
      <div className="container__title font-title">{props.title}</div>
      {props.description}
    </div>
  );
});
