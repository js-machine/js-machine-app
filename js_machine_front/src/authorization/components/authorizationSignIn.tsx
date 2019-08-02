import React, { memo } from 'react';
import { SignInFrom } from 'authorization/components/signInFrom';
import { SocialAuth } from 'authorization/components/socialAuth';

import '../styles/authorizationSignIn.css';

interface SignInProps {
    signInStyle: string;
}

export const AuthorizationSignIn: React.FC<SignInProps> = memo((props: SignInProps) => {
    return (
        <div className="sign-in">
            <div className={`sign-in__wrapper ${props.signInStyle}`}>
                <div className="sign-in__title">Вход</div>
                <SocialAuth />
                <SignInFrom />
            </div>
        </div>
    );
});
