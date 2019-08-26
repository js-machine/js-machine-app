import React, { memo, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './DigestView.css';

import { LeftArrowButton } from './components/LeftArrowButton/LeftArrowButton';
import { DateAndView } from './components/DateAndView/DateAndView';
import { Option } from './components/Option/Option';

interface Props {
  isOpen: boolean;
  closeDigest: (event: React.MouseEvent<HTMLElement>) => void;
  pressHandler: (event: KeyboardEvent) => void;
}

export const DigestView: React.FC<Props> = memo((props: Props) => {

  useEffect(() => {
    return (
      window.addEventListener('keydown', props.pressHandler)
    );
  });

  return (
    <CSSTransition
      mountOnEnter={true}
      unmountOnExit={true}
      in={props.isOpen}
      timeout={500}
      classNames={{
        enter: '',
        enterActive: 'DigestView-open',
        exit: '',
        exitActive: 'DigestView-closed',
      }}>
      <div className="DigestView">
        <div className="left-side">
          <LeftArrowButton closeDigest={props.closeDigest} text="назад" />
        </div>
        <Option />
        <div className="right-side">
          <DateAndView views={25} />
          <h1>Digest Cycle #12</h1>
          <p>Всем доброе утро!</p>
          <p className="DigestView-Para">Прошлое неделя подарила нам интересные статьи, обновления библиотек (куда
            без них), браузеров в всяких платформ. </p>
          <p className="DigestView-Para"> Ну что же, берем в руку кружку, да-да, берем. Вязли? Отлично, потому что
              начинаем! </p>
          <h2 className="Section">#Новости</h2>
          <h2 className="DigestView-Header">В Firebox будет проведен эксперимент, связанный с DNS-over-HTTP</h2>
          <p className="DigestView-Para">Безопасность и удобство в перспективе. Что же из этого получится - не известно. А
          пока что читаем <a href="localhost:3000">тут</a>.</p>
          <h2 className="Section">#События</h2>
          <h2 className="DigestView-Header">The Rolling Scopes Conference (9-11 августа)</h2>
          <p className="DigestView-Para">Одна из крупнейших конференций, котарая пройдет в Минске уже в 5 раз и уже
          так скоро на этих выходных!</p>
          <ul>
            <li>3 дня по 3 потока</li>
            <li>Более 1000 участников</li>
            <li>50+ спикеров из 13 стран 1000 участников</li>
            <li>Воркшопы и панельныные экскурсии</li>
          </ul>
          <p>За билетами <a href="localhost:3000">тут</a>.</p>
        </div>
      </div>
    </CSSTransition>
  );
});
