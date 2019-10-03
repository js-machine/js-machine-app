import React from 'react';

import '../styles/recentEvents.css';
import '../styles/recentEventsMedia.css';

import { Event } from '../../communityEvents/models/events';

interface EventProps {
  events: Event[];
}

export const RecentEvents: React.FC<EventProps> = (props: EventProps) => {
  return <div className="event">
    {
      props.events.map((event: Event) => {
        const eventDate: number = new Date(event.date).getDate();
        const eventMonth: string = new Date(event.date).toLocaleString('ru', {month: 'short'}).toUpperCase();

        return <div key={event.id} className="event_wrapper">
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
  </div>;
};
