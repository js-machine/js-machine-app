import React from 'react';
import { Digest } from '@js-machine-app/models';
import { NewsPresentation } from './newsPresentation';
import '../styles/newsContainer.css';
import '../styles/newsContainerMedia.css';

interface Props {
  newsData: Digest[];
}

export const NewsContainer = ({ newsData }: Props) => {
  return (
    <div className="news">
      {newsData.map(
        (news: Digest) =>
          news.visible && <NewsPresentation key={news.id} {...news} />,
      )}
    </div>
  );
};
