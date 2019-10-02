import React, { useEffect, useState } from 'react';
import Background from './images/news.jpg';
import { FormattedMessage } from 'react-intl';
import './styles/news.css';

import { NewsContainer } from './components/newsContainer';
import { DigestCycle } from './models/news';
import { getDigests } from './services/news.api';
import { Loader } from 'components/loader/loader';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const News = () => {
  const [news, setNews] = useState<DigestCycle[]>([]);
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
        {
          isLoading ?
            <Loader isLoading={isLoading} />
            : <NewsContainer newsData={news} />
        }
      </div>
    </div>
  );
};
