import React, { useState, useEffect } from 'react';
import './styles/events.css';

import { Loader } from 'components/loader/loader';
import { CommunityEventsWrapper } from './components/communityEventsWrapper';
import { EventsContent } from './components/eventsContent';
import { getRecentEvents } from './services/events.api';
import { Event } from './models/events';

import { FormattedMessage } from 'react-intl';

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getRecentEvents()
      .then(setEvents)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <CommunityEventsWrapper>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.events" />
        </div>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <EventsContent events={events} />
        )}
      </div>
    </CommunityEventsWrapper>
  );
};
