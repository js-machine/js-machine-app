import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import './styles/news.css';

import { NewsContainer } from './components/NewsContainer';
import { Loader } from '../../components/Loader';
import { useStores } from "@js-machine-app/front/stores";
import { observer } from "mobx-react-lite";
import { useBackgroundImage } from '@js-machine-app/front/components/hooks/useBackgroundImage';

const sectionStyle = {
  height: '100vh'
};

export const News = observer(() => {
	const {newsStore, uiStore} = useStores();
	
	useBackgroundImage('assets/news.jpg');

  useEffect(() => {
    newsStore.get(true);
  }, [newsStore]);

  return (
    <div style={sectionStyle}>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.news" />
        </div>
        {uiStore.isPageLoading ? (
          <Loader isLoading={uiStore.isPageLoading} />
        ) : (
          <NewsContainer newsData={newsStore.news} />
        )}
      </div>
    </div>
  );
});
