import React from 'react';
import { NewsModel, DigestCycle } from '../models/news';
import { NewsPresentation } from './newsPresentation';
import '../styles/newsContainer.css';
import '../styles/newsContainerMedia.css';

export const NewsContainer: React.FC<NewsModel> = (props: NewsModel) => {
  return (
    <div className="news">
      {
        props.newsData.map((news: DigestCycle) =>
          news.visible &&
            <NewsPresentation
                key={news.id}  {...news} />)
      }
    </div>
  );
};
