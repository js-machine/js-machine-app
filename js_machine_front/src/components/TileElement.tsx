import React, { memo } from 'react';

interface Props {
  title: string;
  description: string;
}

export const TileElement: React.FC<Props> = memo((props: Props) => {
  return (
    <div className="container__article">
      <div className="container__title">{props.title}</div>
      <p className="container__description">{props.description}</p>
    </div>
  );
});
