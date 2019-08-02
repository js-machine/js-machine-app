import React, { memo } from 'react';
import Background from '../images/events.jpg';
import { AuthorizationHOC } from 'components/authorization/AuthorizationHOC';
import { AuthorizationSignIn } from 'components/authorization/AuthorizationSignIn';
import { AuthorizationSignUp } from 'components/authorization/AuthorizationSignUp';
import { AuthorizationBar } from 'components/authorization/AuthorizationBar';

import 'styles/authorization.css';

const sectionStyle = {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

interface AuthorizationProps {
    changeLoginOptions: () => void;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

const Authorization: React.FC<AuthorizationProps> = memo((props: AuthorizationProps) => {
    const { signInStyle, signUpStyle, ...authBarProps} = props;

    return (
        <div style={sectionStyle}>
            <div className="authorization">
                <div className="authorization__wrapper">
                    <AuthorizationSignIn signInStyle={signInStyle}/>
                    <AuthorizationBar {...authBarProps}/>
                    <AuthorizationSignUp signUpStyle={signUpStyle}/>
                </div>
            </div>
        </div>
    );
});

export const Auth = AuthorizationHOC(Authorization);
