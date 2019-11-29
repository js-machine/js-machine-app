import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './styles/news.css';

import { NewsContainer } from './components/NewsContainer';
import { Digest } from '@js-machine-app/models';
import { getDigests } from '@js-machine-app/data-service';
import { Loader } from '../../components/Loader';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url('assets/news.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const News = () => {
  const [news, setNews] = useState<Digest[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getDigests()
      .then(setNews)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={sectionStyle}>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.news" />
        </div>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <NewsContainer newsData={news} />
        )}
      </div>
    </div>
  );
};
