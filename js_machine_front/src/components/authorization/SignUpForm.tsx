import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import 'styles/authForm.css';

export const SignUpForm: React.FC = memo(() => {
    return (
        <form className="auth-from">
            <div className="auth-form__title"><FormattedMessage id="authorization.signUpFormTitle" /></div>
            <FormattedMessage id="authorization.signUpFormLastName" >
                { placeholder => <input className="auth-form__input" type="text" placeholder={placeholder as string}/>}
            </FormattedMessage>
            <FormattedMessage id="authorization.signUpFormEmail" >
                { placeholder => <input className="auth-form__input" type="email" placeholder={placeholder as string}/>}
            </FormattedMessage>
            <FormattedMessage id="authorization.signUpFormFirstName" >
                { placeholder => <input className="auth-form__input" type="text" placeholder={placeholder as string}/>}
            </FormattedMessage>
            <FormattedMessage id="authorization.signUpFormPassword" >
                { placeholder => <input className="auth-form__input" type="text" placeholder={placeholder as string}/>}
            </FormattedMessage>
            <button className="auth-form__btn" type="submit">
                <FormattedMessage id="authorization.signUpFormSubmit" />
            </button>
        </form>
    );
});
