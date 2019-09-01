import React, { memo } from 'react';
import Background from './images/about.jpg';
import './styles/about.css';
import './styles/aboutMedia.css';
import { Tile } from './models/tile';
import { TileContent } from './components/tileContent';
import { FormattedMessage } from 'react-intl';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const About: React.FC = memo(() => {
  const arrTiles: Tile[] = [
    {
      id: 0,
      title: 'История',
      description:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах.',
    },
    {
      id: 1,
      title: 'Достижения',
      description:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах.',
    },
    {
      id: 2,
      title: 'Команда',
      description:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах.',
    },
  ];
  return (
    <div style={sectionStyle}>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.about" />
        </div>
        <TileContent arrTiles={arrTiles} />
      </div>
    </div>
  );
});
