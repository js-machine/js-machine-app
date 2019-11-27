import React, { memo } from 'react';
import './styles/about.css';
import './styles/aboutMedia.css';
import { Tile } from './models/tile';
import { TileContent } from './components/tileContent';
import { FormattedMessage } from 'react-intl';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url('assets/about.jpg')`,
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
        'Комьюнити зародилось в конце 2017 года с целью обмена знаниями и общения на техтоках. В дальнейшем начали проводить митапы вместе с сообществом Rolling Scopes, JSDevDay и другие ивенты. На данный момент комьюнити активно ведёт ивентную деятельность, есть каналы связи в телеграме, вк, инстаграмм и гитхаб.',
    },
    {
      id: 1,
      title: 'Достижения',
      description:
        'Проведено  4 митапа\n' +
        'Рассказано более 30 техтоков\n' +
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
