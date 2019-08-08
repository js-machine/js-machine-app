import React, { memo } from 'react';

import '../styles/recentEvents.css';

import { IEventProps, IEvent } from 'scenes/main/models/IRecentEvents';

export const RecentEvents: React.FC<IEventProps> = memo((props: IEventProps) => {
    return <>
        {
            props.events.map((event: IEvent) => {
                const eventDate: number = new Date(event.date).getDate();
                const eventMonth: string = new Date(event.date).toLocaleString('ru', { month: 'short' }).toUpperCase();

                return <div key={event.id} className="event">
                    <div className="event__date">
                        <p className="event__day">{eventDate}</p>
                        <span className="event__month">{eventMonth}</span>
                    </div>
                    <div className="event__info">
                        <p className="event__title">{event.title}</p>
                        <span className="event__description">{event.description}</span>
                    </div>
                </div>;
            })
        }
    </>;
});
