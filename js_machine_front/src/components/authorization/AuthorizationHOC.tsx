import React from 'react';

import { getStateForSignIn, getStateForSignUp } from 'services/authrizationService';

interface AuthorizationHOCProps {
    changeFlag: () => void;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

interface AuthorizationHOCState {
    flag: boolean;
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
                flag: false,
                signInStyle: '',
                signUpStyle: '',
                barStyle: '',
                barTitle: '',
                barBtn: '',
            };
        }

        changeFlag = () => {
            if (!this.state.flag) {
                this.setState(() => getStateForSignUp());
            } else {
                this.setState(() => getStateForSignIn());
            }
        }

        componentDidMount = () => {
            this.setState(() => getStateForSignIn());
        }

        render(): JSX.Element {
            const { flag, ...nextProps } = this.state;

            return <AuthComponent changeFlag={this.changeFlag} {...nextProps}/>;
        }
    };
};
