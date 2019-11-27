import React from 'react';

import {
  getStateForSignIn,
  getStateForSignUp,
} from '../services/authrizationService';

import {
  AuthorizationHOCProps,
  AuthorizationHOCState,
} from '../models/authorizationHOC';

export const AuthorizationHOC = (
  AuthComponent: React.FC<AuthorizationHOCProps>,
) => {
  return class AuthHOC extends React.PureComponent<
    AuthorizationHOCProps,
    AuthorizationHOCState
  > {
    constructor(props: AuthorizationHOCProps) {
      super(props);
      this.state = {
        isAuthorizitationVisible: true,
        barTitle: '',
        barBtn: '',
      };
    }

    private changeLoginOptions = () => {
      if (this.state.isAuthorizitationVisible) {
        this.setState(() => {
          const signUpMocks = getStateForSignUp();
          return { ...signUpMocks, isAuthorizitationVisible: false };
        });
      } else {
        this.setState(() => {
          const signInMocks = getStateForSignIn();
          return { ...signInMocks, isAuthorizitationVisible: true };
        });
      }
    };

    public componentDidMount = () => {
      this.setState(() => getStateForSignIn());
    };

    public render(): JSX.Element {
      return (
        <AuthComponent
          changeLoginOptions={this.changeLoginOptions}
          {...this.state}
        />
      );
    }
  };
};
