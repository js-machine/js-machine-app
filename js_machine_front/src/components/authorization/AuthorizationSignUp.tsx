import React, { memo } from 'react';
import { SignUpForm } from 'components/authorization/SignUpForm';
import { SocialAuth } from 'components/authorization/SocialAuth';

import 'styles/authorizationSignUp.css';

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
