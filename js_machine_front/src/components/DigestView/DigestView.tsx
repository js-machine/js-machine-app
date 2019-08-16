import React, { memo } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './DigestView.css';

interface Props {
  isOpen: boolean;
  closeDigest: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DigestView: React.FC<Props> = memo((props: Props) => {
  const cssClasses = ['DigestView', props.isOpen ? 'DigestView-open' : 'DigestView-closed'];

  return (
    <CSSTransition timeout={300}>
       <div className={cssClasses.join(' ')}>
        <div className="left-side">
          <p><button onClick={props.closeDigest}>Close</button></p>
        </div>
        <div className="right-side">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima earum, eligendi iusto sed laborum minus, aliquid placeat ut fugit,
            eius possimus! Consectetur, delectus enim placeat non illum similique porro voluptatibus.</p>
        </div>
      </div>
    </CSSTransition>
  );
});

export default DigestView;
