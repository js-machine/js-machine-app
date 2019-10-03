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
        'Проведено  4 митапа\n' +
        'Рассказано более 30 тектоков\n' +
        'Выиграно 1 хакатон\n' +
        'Создано 1 ифопанель\n' +
        'Посещено 5 конференций\n' +
        'Разыграно более 5 маек\n' +
        'Наклеено более 100 стикеров',
    },
    {
      id: 2,
      title: 'Команда',
      description:
        'Разумеется, каждый из нас разработчик, каждый из нас эксперт и будущий номинант на премию Тьюринга, но в тоже время мы такие же люди как, и вы! Мы любим видеоигры, пиццы, общение, холивары и фан, поэтому даже если ты не знаешь, как фильтровать массивы и чем отчличается "null" от "undefined" - это не значит что нам не по пути.',
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
