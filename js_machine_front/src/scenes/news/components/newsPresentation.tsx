import React from 'react';
import { News } from '../models/news';

export const NewsPresentation: React.FC<News> = (props) => {
    const newsDate: number = new Date(props.date).getDate();
    const newsMonth: string = new Date(props.date).toLocaleString('ru', { month: 'short' }).toUpperCase();

    return (
        <div className="news__wrapper">
            <div className="news__read">
                <div className="news__read-content">ЧИТАТЬ ></div>
            </div>
            <div className="news__content">
                <div>
                    <p className="news__day">{newsDate} {newsMonth}</p>
                </div>
                <div>
                    <p className="news__title">{props.title}</p>
                </div>
                <div>
                    <p className="news__description">{props.description}</p>
                </div>
            </div>
        </div>
    );
};
