import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import clsx from 'clsx';
import { Event } from '@js-machine-app/models';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: green[500],
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  avatarUnvailable: {
    backgroundColor: red[500],
  },
}));

interface Props {
  event: Event;
}

export const EventHeader = observer(function EventHeader({
  event,
}: Props) {
//   const classes = useStyles();

  const formatedDate = useMemo(() => {
    const date = new Date(event.date);
    const eventDate: number = date.getDate();
    const eventMonth: string = date
      .toLocaleString('en', { month: 'short' })
      .toUpperCase();
    const eventYear: number = date.getFullYear();

    return `${eventDate} ${eventMonth} ${eventYear}`;
  }, [event]);

  return (
    <>
      <CardHeader
        title={
          <Typography variant="h5" component="h2">
            {event.title}
          </Typography>
        }
        subheader={formatedDate}
      />
    </>
  );
});