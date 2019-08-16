import React from 'react';
import { SocialAuth } from './socialAuth';
import { SignInFrom } from './signInFrom';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignIn.css';
import '../styles/authorizationSignInMedia.css';

import { SignInProps } from 'scenes/authorization/models/authorizationSignIn';

export const AuthorizationSignIn: React.FC<SignInProps> = memo(
  (props: SignInProps) => {
    return (
      <div className={`sign-in ${props.signInStyle}`}>
        <div className={`sign-in__wrapper`}>
          <div className="sign-in__title">
            <FormattedMessage id="authorization.signIn" />
          </div>
          <SocialAuth />
          <SignInFrom />
        </div>
        <SocialAuth />
        <SignInFrom />
      </div>
    </div>
  );
};
