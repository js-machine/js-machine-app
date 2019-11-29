import React from 'react';
import '../styles/authorizationBar.css';
import '../styles/authorizationBarMedia.css';

import { AuthorizationBarProps } from '../models/authorizationBar';

export const AuthorizationBar: React.FC<AuthorizationBarProps> = (
  props: AuthorizationBarProps,
) => {
  const barStyle = props.isAuthorizitationVisible
    ? 'authorization-bar_sign-in'
    : 'authorization-bar_sign-up';
  return (
    <>
      <div className={`authorization-bar ${barStyle}`}>
        <div className={`authorization-bar__wrapper`}>
          <div className="authorization-bar__title">{props.barTitle}</div>
          <div>
            <button
              className="authorization-bar__btn"
              onClick={props.changeLoginOptions}
            >
              {props.barBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
