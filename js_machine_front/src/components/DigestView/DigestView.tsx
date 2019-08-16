import React, { memo } from 'react';
import './DigestView.css';

interface Props {
  isOpen: Boolean,
  closeDigest: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DigestView: React.FC<Props> = memo((props: Props) => {
  const cssClasses = ['DigestView', props.isOpen ? 'DigestView-open' : 'DigestView-closed']

  return (
    <div className={cssClasses.join(' ')}>
      <div className="left-side">
        <p><button onClick={props.closeDigest}>Close</button></p>
      </div>
      <div className="right-side">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima earum, eligendi iusto sed laborum minus, aliquid placeat ut fugit,
          eius possimus! Consectetur, delectus enim placeat non illum similique porro voluptatibus.</p>
      </div>
    </div>
  );
});

export default DigestView