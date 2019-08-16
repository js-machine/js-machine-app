import React, { memo } from 'react';
import { SocialAuth } from './socialAuth';
import { SignUpForm } from './signUpForm';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignUp.css';
import '../styles/authorizationSignUpMedia.css';

import { SignUpProps } from 'scenes/authorization/models/authorizationSignUp';

export const AuthorizationSignUp: React.FC<SignUpProps> = memo(
  (props: SignUpProps) => {
    return (
      <div className={`sign-up ${props.signUpStyle}`}>
        <div className="sign-up__wrapper">
          <div className="sign-up__title">
            <FormattedMessage id="authorization.signUp" />
          </div>
          <SocialAuth />
          <SignUpForm />
        </div>
      </div>
    );
  },
);
