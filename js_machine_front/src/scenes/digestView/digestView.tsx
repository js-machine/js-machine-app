import React, { memo } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './styles/digestView.css';

import { LeftArrowButton } from './components/leftArrowButton';
import { DateAndView } from './components/dateAndView';
import { Option } from './components/option';
import { data } from './services/digestView';
import { DigestViewProps } from './models/digestView';

export const DigestView: React.FC<DigestViewProps> = memo((props: DigestViewProps) => {

  const benefits = data.benefits.map((el, idx) => {
    return <li key={idx}>{el}</li>;
  });

  const news = (
    <React.Fragment>
      <h2 className="digest-view__section">#Новости</h2>
      <h2 className="digest-view__header">{data.news.title}</h2>
      <p className="digest-view__para">{data.news.body} <a href={data.news.link}>тут</a>.</p>
    </React.Fragment>
  );

  const event = (
    <React.Fragment>
      <h2 className="digest-view__section">#События</h2>
      <h2 className="digest-view__header">{data.event.title}</h2>
      <p className="digest-view__para">{data.event.body}</p>
    </React.Fragment>
  );

  const greating = (
    <React.Fragment>
      <p>Всем доброе утро!</p>
      <p className="digest-view__para">Прошлое неделя подарила нам интересные статьи, обновления библиотек (куда
      без них), браузеров в всяких платформ. </p>
      <p className="digest-view__para"> Ну что же, берем в руку кружку, да-да, берем. Вязли? Отлично, потому что
        начинаем! </p>
    </React.Fragment>
  );

  return (
    <CSSTransition
      mountOnEnter={true}
      unmountOnExit={true}
      key={props.history.location.key}
      in={true}
      timeout={500}
      classNames={{
        enter: '',
        enterActive: 'digest-view-open',
        exit: '',
        exitActive: 'digest-view-closed',
      }}>
      <div className="digest-view">
        <div className="digest-view__left-side">
          <LeftArrowButton closeDigest={props.history.goBack} text={data.back} />
        </div>
        <Option />
        <div className="digest-view__right-side">
          <DateAndView views={data.view} />
          <h1>Digest Cycle #12</h1>
          {greating}
          {news}
          {event}
          <ul>{benefits}</ul>
          <p>За билетами <a href="localhost:3000">тут</a>.</p>
        </div>
      </div>
    </CSSTransition>
  );
});
