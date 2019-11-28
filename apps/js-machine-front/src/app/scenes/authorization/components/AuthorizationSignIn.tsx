import React from 'react';
import { SocialAuth } from './SocialAuth';
import { SignInFrom } from './SignInFrom';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignIn.css';
import '../styles/authorizationSignInMedia.css';

import { SignInProps } from '../models/authorizationSignIn';

export const AuthorizationSignIn: React.FC<SignInProps> = (
  props: SignInProps,
) => {
  const resetSignInWidth = props.isAuthorizitationVisible
    ? ''
    : 'reset_sign-in-width';
  return (
    <div className={`sign-in ${resetSignInWidth}`}>
      <div className={`sign-in__wrapper`}>
        <div className="sign-in__title">
          <FormattedMessage id="authorization.signIn" />
        </div>
        <SocialAuth />
        <SignInFrom />
      </div>
    </div>
  );
};
