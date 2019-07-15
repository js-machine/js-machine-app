import React, { memo } from 'react';
import Background from 'images/main.jpg';
import 'styles/main.css';

import { SocialLinks } from 'components/SocialLinks';
import { RecentEvents } from 'components/RecentEvents';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const events = [
  {
    id: '0',
    date: '01/30/2019',
    title: 'MITCone 2019',
    description: 'Одна из самых масштабных конференций Могилева, спикеры из Минска, Гомеля, и других городов',
  },
  {
    id: '1',
    date: '07/23/2019',
    title: 'JS JUNGLE',
    description: 'Отпразнуем День JS разработчика вместе. Вопросы по JS/Front-End и It в целом. Победителям подарки!',
  },
  {
    id: '2',
    date: '10/15/2019',
    title: 'Городской пикник',
    description: 'Встреча могилевских IT-компаний на открытом воздухе в парке Подниколье',
  },
  {
    id: '3',
    date: '02/04/2019',
    title: 'The Rolling Scopes Conference',
    description: 'Интересные доклады, живое общение и конечно же призы!',
  },
];

export const Main: React.FC = memo(() => {
  return (
    <div style={sectionStyle}>
      <SocialLinks />
      <div className="main__events">
        <RecentEvents events={events} />
      </div>
    </div>
  );
});
