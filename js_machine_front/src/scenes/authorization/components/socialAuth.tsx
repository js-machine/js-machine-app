import React, { useCallback } from 'react';
import '../styles/authSocial.css';
import '../styles/authSocialMedia.css';
import { useStore } from 'stores';

export const SocialAuth: React.FC = () => {
  const { authStore } = useStore();

  const handleGoogleClick = useCallback(() => {
    authStore.loginGmail();
  }, [authStore]);

  return (
    <div className="social-auth">
      <div
        className="social-auth__icon social-auth__icon_google-plus"
        onClick={handleGoogleClick}
      />
      <div className="social-auth__icon social-auth__icon_facebook" />
      <div className="social-auth__icon social-auth__icon_twitter" />
    </div>
  );
};
