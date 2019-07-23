import React, { memo } from 'react';
import 'styles/partnersLogo.css';

export const PartnersLogo: React.FC = memo(() => {
    return (
        <div className="partners-logo">            
            <div className="partners-logo__img partners-logo__img_epam"></div>
            <div className="partners-logo__img partners-logo__img_dev-by"></div>
            <div className="partners-logo__img partners-logo__img_streamline"></div>
        </div>
    );
});
