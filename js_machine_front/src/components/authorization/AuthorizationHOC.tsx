import React from 'react';

interface Props {
    changeFlag: () => void;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

interface MyState {
    flag: boolean;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

export const AuthorizationHOC = (AuthComponent: React.FC<Props>) => {
    return class AuthHOC extends React.PureComponent<Props, MyState> {
        constructor(props: Props) {
            super(props);
            this.state = {
                flag: false,
                signInStyle: 'sign-in__wrapper',
                signUpStyle: 'reset_width',
                barStyle: 'authorization-bar__wrapper_sign-in',
                barTitle: 'Добро пожаловать!',
                barBtn: 'РЕГИСТРАЦИЯ',
            };
        }

        changeFlag = () => {
            if (!this.state.flag) {
                this.setState(() => {
                    return {
                        flag: true,
                        signInStyle: 'reset_width',
                        signUpStyle: 'sign-up__wrapper',
                        barStyle: 'authorization-bar__wrapper_sign-up',
                        barTitle: 'С возвращением!',
                        barBtn: 'ВОЙТИ',
                    };
                });
            } else {
                this.setState(() => {
                    return {
                        flag: false,
                        signInStyle: 'sign-in__wrapper',
                        signUpStyle: 'reset_width',
                        barStyle: 'authorization-bar__wrapper_sign-in',
                        barTitle: 'Добро пожаловать!',
                        barBtn: 'РЕГИСТРАЦИЯ',
                    };
                });
            }
        }

        render(): JSX.Element {
            const { flag, ...nextProps } = this.state;

            return <AuthComponent changeFlag={this.changeFlag} {...nextProps}/>;
        }
    };
};
