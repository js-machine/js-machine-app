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
                { (placeholder) => <input className="auth-form__input" type="email" placeholder={placeholder as string}/>}
            </FormattedMessage>
            <FormattedMessage id="authorization.signInFormPassword" >
                { (placeholder) => <input className="auth-form__input" type="password" placeholder={placeholder as string} />}
            </FormattedMessage>
            <button className="auth-form__btn" type="submit">
                <FormattedMessage id="authorization.signInFormSubmit" />
            </button>
        </form >
    );
});
