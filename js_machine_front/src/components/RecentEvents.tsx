import React from 'react';

import '../styles/recentEvents.css';

interface Post {
    id: string;
    date: string;
    title: string;
    description: string;
}

const RecentEvents: React.FC<any> = (props) => {
    return props.test.map((post: Post) => {
        const postDate: number = new Date(post.date).getDate();
        const postMonth: string = new Date(post.date).toLocaleString('ru', { month: 'short' });

        return <div key={post.id} className="recentEvents__post post">
            <div className="post__date">
                <p className="post__day">{postDate}</p>
                <span className="post__month">{postMonth}</span>
            </div>
            <div className="post__info">
                <p className="post__title">{post.title}</p>
                <span className="post__description">{post.description}</span>
            </div>
        </div>;

    });
};

export default RecentEvents;
