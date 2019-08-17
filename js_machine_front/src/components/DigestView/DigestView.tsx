import React, { memo, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './DigestView.css';

import LeftArrowButton from './components/LeftArrowButton/LeftArrowButton';
import DateAndView from './components/DateAndView/DateAndView';

interface Props {
  isOpen: boolean;
  closeDigest: any;
  pressHandler: any;
}

const DigestView: React.FC<Props> = memo((props: Props) => {

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
        <div className="right-side">
          <DateAndView views={25} />
          <h1>Digest Cycle #12</h1>
          <p>Всем</p>
        </div>
      </div>
    </CSSTransition>
  );
});

export default DigestView;
