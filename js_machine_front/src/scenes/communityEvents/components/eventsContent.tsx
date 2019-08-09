import React, { memo } from 'react';
import { Event, EventProps } from '../models/events';
import '../styles/eventsContent.css';

export const EventsContent: React.FC<EventProps> = memo((props: EventProps) => {
    return (
        <div className="eventsContent">
            <div className="eventsContent__wrapper">
                {
                    props.eventsData.map((event: Event) => {
                        const eventDate: number = new Date(event.date).getDate();
                        const eventMonth: string = new Date(event.date).toLocaleString('ru', { month: 'short' }).toUpperCase();

                        return <div key={event.id} className="eventsContent__element">
                            <div className="eventsContent__date">
                                <p className="eventsContent__day">{eventDate}</p>
                                <span className="eventsContent__month">{eventMonth}</span>
                            </div>
                            <div className="eventsContent__info">
                                <p className="eventsContent__title">{event.title}</p>
                                <span className="eventsContent__description">{event.description}</span>
                            </div>
                        </div>;
                    })
                }
            </div>
        </div>
    );
});
