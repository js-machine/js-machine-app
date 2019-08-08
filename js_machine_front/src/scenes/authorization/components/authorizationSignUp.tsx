import React, { memo } from 'react';
import { SocialAuth } from './socialAuth';
import { SignUpForm } from './signUpForm';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignUp.css';

import { ISignUpProps } from 'scenes/authorization/models/IAuthorizationSignUp';

export const AuthorizationSignUp: React.FC<ISignUpProps> = memo(
  (props: ISignUpProps) => {
    return (
      <div className="sign-up">
        <div className={`sign-up__wrapper ${props.signUpStyle}`}>
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
