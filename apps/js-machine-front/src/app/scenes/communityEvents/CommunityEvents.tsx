import React, { useState, useEffect } from 'react';
import './styles/events.css';

import { Event } from '@js-machine-app/models';
import { getEvents } from '@js-machine-app/data-service';
import { Loader } from '../../components/Loader';
import { EventsContent } from './components/eventsContent';

import { FormattedMessage } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: `url('assets/events.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

export const Events = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getEvents()
      .then(setEvents)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.root}>
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
    </div>
  );
};
