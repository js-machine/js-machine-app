import React, { memo } from 'react';
import Background from '../images/partners.jpg';
import '../styles/partners.css';

import { PartnersLogo } from 'components/PartnersLogo';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '50% 20%',
};

export const Partners: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <div className="partners">
        <div className="partners__title">ПАРТНЕРЫ</div>
        <PartnersLogo/>
      </div>
    </div>
  );
});
