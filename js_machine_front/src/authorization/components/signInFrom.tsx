import React, { memo } from 'react';
import '../styles/authForm.css';

export const SignInFrom: React.FC = memo(() => {
    return (
        <form className="auth-from">
            <div className="auth-form__title">или используйте E-mail для регистрации:</div>
            <input className="auth-form__input" type="text" placeholder="E-mail" />
            <input className="auth-form__input" type="password" placeholder="Пароль" />
            <button className="auth-form__btn" type="submit">ВОЙТИ</button>
        </form>
    );
});
