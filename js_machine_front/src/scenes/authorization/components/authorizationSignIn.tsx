import React, { memo } from 'react';
import { SocialAuth } from './socialAuth';
import { SignInFrom } from './signInFrom';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignIn.css';

import { ISignInProps } from 'scenes/authorization/models/IAuthorizationSignIn';

export const AuthorizationSignIn: React.FC<ISignInProps> = memo(
  (props: ISignInProps) => {
    return (
      <div className="sign-in">
        <div className={`sign-in__wrapper ${props.signInStyle}`}>
          <div className="sign-in__title">
            <FormattedMessage id="authorization.signIn" />
          </div>
          <SocialAuth />
          <SignInFrom />
        </div>
      </div>
    );
  },
);
