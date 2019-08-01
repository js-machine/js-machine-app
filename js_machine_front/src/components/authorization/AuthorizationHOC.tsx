import React from 'react';

import { getStateForSignIn, getStateForSignUp } from 'services/authrizationService';

interface AuthorizationHOCProps {
    changeLoginOptions: () => void;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

interface AuthorizationHOCState {
    isAuthorizitationVisible: boolean;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

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
                barBtn: ''
            };
        }

        changeLoginOptions = () => {
            if (this.state.isAuthorizitationVisible) {
                this.setState(() => {
                    let signUpMocks = getStateForSignUp();
                    let signUpStyles = {
                        isAuthorizitationVisible: false,
                        signInStyle: 'reset_width',
                        signUpStyle: 'sign-up__wrapper',
                        barStyle: 'authorization-bar__wrapper_sign-up'
                    };
                    return {...signUpStyles, ...signUpMocks};
                });
            } else {
                this.setState(() => {
                    let signInMocks = getStateForSignIn();
                    let signInStyles = {
                        isAuthorizitationVisible: true,
                        signInStyle: 'sign-in__wrapper',
                        signUpStyle: 'reset_width',
                        barStyle: 'authorization-bar__wrapper_sign-in'
                    };
                    return {...signInStyles, ...signInMocks};
                });
            }
        }

        componentDidMount = () => {
            this.setState(() => getStateForSignIn());
        }

        render(): JSX.Element {
            const { isAuthorizitationVisible, ...nextProps } = this.state;

            return <AuthComponent changeLoginOptions={this.changeLoginOptions} {...nextProps}/>;
        }
    };
};
