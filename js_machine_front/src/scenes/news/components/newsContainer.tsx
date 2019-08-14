import React from 'react';
import { NewsModel, News } from '../models/news';
import { NewsPresentation } from './newsPresentation';
import '../styles/newsContainer.css';

export const EventsContainer: React.FC<NewsModel> = (props: NewsModel) => {
    return (
        <div className="news">
            {
                props.newsData.map((news: News) => <NewsPresentation key={news.id} id={news.id} description={news.description} date={news.date} title={news.title} />)
            }
        </div>
    );
}
