import React from 'react';
import { JSXElement } from '@babel/types';

import '../styles/recentEvents.css'

const sectionStyle = {
    width: '100%',
    position: 'absolute' as 'absolute',
    // padding: '0 50px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    bottom: '10vh',
};

const RecentEvents: React.FC<any> = (props) => {
    const content: JSXElement = props.test.map((post: any) => {
        let date: Date = new Date(post.date);
        console.log(date);

        return <div key={post.id} className='recentEvents__post post'>
            <div className='post__date'>
                <span>{post.date}</span>
                <span>{post.month}</span>
            </div>
            <div className='post__info'>
                <p className='post__title'>{post.title}</p>
                <span className='post__description'>{post.description}</span>
            </div>
        </div>
    });
    return (
        <div style={sectionStyle}>
            {content}
        </div>
    );
};

export default RecentEvents;