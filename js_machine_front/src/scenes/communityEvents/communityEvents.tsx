import React, { useState, useEffect } from 'react';
import Background from './images/events.jpg';
import './styles/events.css';

import { EventsContent } from './components/eventsContent';
import { getRecentEvents } from './services/events.api';
import { Event } from './models/events';

import { FormattedMessage } from 'react-intl';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getRecentEvents().then(setEvents);
  }, []);

  return (
    <div style={sectionStyle}>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.events" />
        </div>
        <EventsContent events={events} />
      </div>
    </div>
  );
};
