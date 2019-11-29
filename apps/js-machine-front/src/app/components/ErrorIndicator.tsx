import React, { memo } from 'react';

import './styles/error-indicator.css';

import { FormattedMessage } from 'react-intl';

const sectionStyle = {
  height: '100%',
  backgroundImage: `url('assets/error-indicator.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const ErrorIndicator: React.FC = memo(() => {
  return (
    <div className="error-indicator" style={sectionStyle}>
      <div className="error-indicator__text">
        <span className="error-indicator__title">
          <FormattedMessage id="homepage.title" />
        </span>
        <span className="error-indicator__subtitle">
          <FormattedMessage id="homepage.subTitle" />
        </span>
        <span className="error-indicator__subtitle">
          (<FormattedMessage id="homepage.subTitle1" />)
        </span>
      </div>
    </div>
  );
});

export { ErrorIndicator };
