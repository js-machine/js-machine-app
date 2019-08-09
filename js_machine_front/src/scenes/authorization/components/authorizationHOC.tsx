import React from 'react';

import { getStateForSignIn, getStateForSignUp } from 'scenes/authorization/services/authrizationService';

import { AuthorizationHOCProps, AuthorizationHOCState } from 'scenes/authorization/models/authorizationHOC';

export const AuthorizationHOC = (AuthComponent: React.FC<AuthorizationHOCProps>) => {
    return class AuthHOC extends React.PureComponent<AuthorizationHOCProps, AuthorizationHOCState> {
        constructor(props: AuthorizationHOCProps) {
            super(props);
            this.state = {
                isAuthorizitationVisible: true,
                signInStyle: 'sign-in__wrapper',
                signUpStyle: 'reset_width',
                barStyle: 'authorization-bar__wrapper_sign-in',
                barTitle: '',
                barBtn: '',
            };
        }

        private changeLoginOptions = () => {
            if (this.state.isAuthorizitationVisible) {
                this.setState(() => {
                    const signUpMocks = getStateForSignUp();
                    const signUpStyles = {
                        isAuthorizitationVisible: false,
                        signInStyle: 'reset_width',
                        signUpStyle: 'sign-up__wrapper',
                        barStyle: 'authorization-bar__wrapper_sign-up',
                    };
                    return {...signUpStyles, ...signUpMocks};
                });
            } else {
                this.setState(() => {
                    const signInMocks = getStateForSignIn();
                    const signInStyles = {
                        isAuthorizitationVisible: true,
                        signInStyle: 'sign-in__wrapper',
                        signUpStyle: 'reset_width',
                        barStyle: 'authorization-bar__wrapper_sign-in',
                    };
                    return {...signInStyles, ...signInMocks};
                });
            }
        }

        public componentDidMount = () => {
            this.setState(() => getStateForSignIn());
        }

        public render(): JSX.Element {
            const { isAuthorizitationVisible, ...nextProps } = this.state;

            return <AuthComponent changeLoginOptions={this.changeLoginOptions} {...nextProps}/>;
        }
    };
};
