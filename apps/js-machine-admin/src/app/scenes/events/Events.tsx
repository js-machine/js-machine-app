import React, { useEffect, useCallback } from 'react';
import { useEventStore } from '@js-machine-app/admin/services/event.store';
import { observer } from 'mobx-react-lite';
import { History } from 'history';
import { EventCard } from './components/Event'
import { Dial } from './components/Dial'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  event: {
    marginBottom: theme.spacing(2),
  },
}));

interface Props {
  history: History;
}

export const Events = observer(function Events({ history }: Props) {
  const classes = useStyles();
  const store = useEventStore();

  useEffect(() => {
      store.loadEvents();
  }, [store]);

  const handleFabClick = useCallback(() => {
    history.push('/new-event');
  }, [history]);

  return (
    <>
    <Dial onClick={handleFabClick}/>
    {store.events.map((event) => (
      <EventCard
        className={classes.event}
        key={event.id}
        event={event}
      />
    ))}
    </>
  );
});
