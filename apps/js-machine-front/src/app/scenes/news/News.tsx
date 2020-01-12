import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import './styles/news.css';

import { NewsContainer } from './components/NewsContainer';
import { Loader } from '../../components/Loader';
import { useStores } from "@js-machine-app/front/stores";
import { observer } from "mobx-react-lite";

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url('assets/news.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const News = observer(() => {
  const {newsStore, uiStore} = useStores();

  useEffect(() => {
    newsStore.get(true);
  }, [newsStore]);

  return (
    <div style={sectionStyle}>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.news" />
        </div>
        {uiStore.isLoading ? (
          <Loader isLoading={uiStore.isLoading} />
        ) : (
          <NewsContainer newsData={newsStore.news} />
        )}
      </div>
    </div>
  );
});
