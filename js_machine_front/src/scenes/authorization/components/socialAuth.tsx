import React from 'react';
import '../styles/authSocial.css';

export const SocialAuth: React.FC = () => {
    return (
        <div className="social-auth">
            <div className="social-auth__icon social-auth__icon_google-plus" />
            <div className="social-auth__icon social-auth__icon_facebook" />
            <div className="social-auth__icon social-auth__icon_twitter" />
        </div>
    );
};
