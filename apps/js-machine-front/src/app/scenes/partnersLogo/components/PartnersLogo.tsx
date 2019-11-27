import React from 'react';
import '../styles/partnersLogo.css';
import '../styles/partnersLogoMedia.css';

export const PartnersLogo: React.FC = () => {
    return (
        <div className="partners-logo">
            <div className="partners-logo__img partners-logo__img_epam"/>
            <div className="partners-logo__img partners-logo__img_dev-by"/>
            <div className="partners-logo__img partners-logo__img_streamline"/>
        </div>
    );
};
