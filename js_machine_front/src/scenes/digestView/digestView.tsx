import React, { memo, useEffect } from 'react';
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
      <h2 className="digestview__section">#Новости</h2>
      <h2 className="digestview__right-side__header">{data.news.title}</h2>
      <p className="digestview-para">{data.news.body} <a href={data.news.link}>тут</a>.</p>
    </React.Fragment>
  );

  const event = (
    <React.Fragment>
      <h2 className="digestview__section">#События</h2>
      <h2 className="digestview__right-side__header">{data.event.title}</h2>
      <p className="digestview-para">{data.event.body}</p>
    </React.Fragment>
  );

  const greating = (
    <React.Fragment>
      <p>Всем доброе утро!</p>
      <p className="digestview-para">Прошлое неделя подарила нам интересные статьи, обновления библиотек (куда
      без них), браузеров в всяких платформ. </p>
      <p className="digestview-para"> Ну что же, берем в руку кружку, да-да, берем. Вязли? Отлично, потому что
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
        enterActive: 'digestview-open',
        exit: '',
        exitActive: 'digestview-closed',
      }}>
      <div className="digestview ">
        <div className="digestview__left-side">
          <LeftArrowButton closeDigest={props.history.goBack} text={data.back} />
        </div>
        <Option />
        <div className="digestview__right-side">
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
