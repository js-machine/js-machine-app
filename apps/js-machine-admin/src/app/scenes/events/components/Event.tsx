import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Event } from '@js-machine-app/models';
import { EventHeader } from './EventHeader'
// import { Actions } from './Action';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { EventBody } from './EventBody';

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 270,
  },
}));

interface Props {
  className?: string;
  event: Event;
}

export const EventCard = observer(function EventCard({
  className,
  event,
}: Props) {
  const classes = useStyles();

  return (
    <Card className={clsx(className, classes.card)}>
        <EventHeader event={event}/>
        <EventBody event={event}/>
        {/* <h3>{event.title}</h3>
        <h3>{event.date.toLocaleString()}</h3>
        <h3>{event.description}</h3>
        <h3>{event.link}</h3> */}
      {/* <DigestHeader digest={digest} actions={actions} />
      <DigestBody digest={digest} /> */}
    </Card>
  );
});