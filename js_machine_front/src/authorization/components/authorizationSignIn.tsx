import React, { memo } from 'react';
import { SocialAuth } from './socialAuth';
import { SignInFrom } from './signInFrom';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignIn.css';

interface SignInProps {
  signInStyle: string;
}

export const AuthorizationSignIn: React.FC<SignInProps> = memo(
  (props: SignInProps) => {
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
