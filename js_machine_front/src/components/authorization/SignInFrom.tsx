import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import 'styles/authForm.css';

export const SignInFrom: React.FC = memo(() => {
    return (
        <form className="auth-from">
            <div className="auth-form__title">
                <FormattedMessage id="authorization.signInFormTitle" />
            </div>
            <FormattedMessage id="authorization.signInFormEmail" >
                {(placeholder: string) => <input className="auth-form__input" type="email" placeholder={placeholder}/>}
            </FormattedMessage>
            <FormattedMessage id="authorization.signInFormPassword" >
                {(placeholder: string) => <input className="auth-form__input" type="password" placeholder={placeholder}/>}
            </FormattedMessage>
            <button className="auth-form__btn" type="submit">
                <FormattedMessage id="authorization.signInFormSubmit" />
            </button>
        </form >
    );
});
