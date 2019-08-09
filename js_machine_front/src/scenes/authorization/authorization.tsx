import React, { memo } from 'react';
import Background from './images/authorization.jpg';
import './styles/authorization.css';

import { AuthorizationHOC, AuthorizationSignIn, AuthorizationSignUp, AuthorizationBar} from './';
import { AuthorizationProps } from 'scenes/authorization/models/authorization';

const sectionStyle = {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const AuthorizationComponent: React.FC<AuthorizationProps> = memo((props: AuthorizationProps) => {
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
