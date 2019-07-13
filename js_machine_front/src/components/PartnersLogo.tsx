import React from 'react';
import 'styles/partnersLogo.css';

import EpamLogo from 'images/epam-icon.png';
import DevByLogo from 'images/dev-by-icon.png';
import StreamLineLogo from 'images/streamline-icon.png';

const PartnersLogo: React.FC = () => {
    return (
        <div className="partners-logo">
            <img src={EpamLogo} className="partners-logo__img" alt="Epam logo"/>
            <img src={DevByLogo} className="partners-logo__img" alt="Dev.by logo"/>
            <img src={StreamLineLogo} className="partners-logo__img" alt="Streamline logo"/>
        </div>
    );
};

export default PartnersLogo;
