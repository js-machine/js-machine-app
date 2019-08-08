import React, { memo } from 'react';
import Background from './images/authorization.jpg';
import { AuthorizationHOC } from 'scenes/authorization/components/authorizationHOC';
import { AuthorizationSignIn } from 'scenes/authorization/components/authorizationSignIn';
import { AuthorizationSignUp } from 'scenes/authorization/components/authorizationSignUp';
import { AuthorizationBar } from 'scenes/authorization/components/authorizationBar';

import { IAuthorizationProps } from 'scenes/authorization/models/IAuthorization';

import './styles/authorization.css';

const sectionStyle = {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const AuthorizationComponent: React.FC<IAuthorizationProps> = memo((props: IAuthorizationProps) => {
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

export const Authorization = AuthorizationHOC(AuthorizationComponent);
