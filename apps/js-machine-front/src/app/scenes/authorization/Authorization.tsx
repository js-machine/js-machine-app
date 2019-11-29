import React from 'react';
import './styles/authorization.css';
import './styles/authorizationMedia.css';

import {
  AuthorizationHOC,
  AuthorizationSignIn,
  AuthorizationSignUp,
  AuthorizationBar,
} from './';
import { AuthorizationProps } from './models/authorization';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url('assets/authorization.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const AuthorizationComponent: React.FC<AuthorizationProps> = (
  props: AuthorizationProps,
) => {
  const { isAuthorizitationVisible } = props;

  return (
    <div style={sectionStyle}>
      <div className="authorization">
        <div className="authorization__wrapper">
          <AuthorizationSignIn
            isAuthorizitationVisible={isAuthorizitationVisible}
          />
          <AuthorizationBar {...props} />
          <AuthorizationSignUp
            isAuthorizitationVisible={isAuthorizitationVisible}
          />
        </div>
      </div>
    </div>
  );
};

export const Authorization = AuthorizationHOC(AuthorizationComponent);
