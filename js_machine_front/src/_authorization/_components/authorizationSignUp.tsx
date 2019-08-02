import React, { memo } from 'react';
import { SignUpForm } from '_authorization/_components/signUpForm';
import { SocialAuth } from '_authorization/_components/socialAuth';

import '../_styles/authorizationSignUp.css';

interface SignUpProps {
    signUpStyle: string;
}

export const AuthorizationSignUp: React.FC<SignUpProps> = memo((props: SignUpProps) => {
    return (
        <div className="sign-up">
            <div className={`sign-up__wrapper ${props.signUpStyle}`}>
                <div className="sign-up__title">Создать аккаунт</div>
                <SocialAuth />
                <SignUpForm />
            </div>
        </div>
    );
});
