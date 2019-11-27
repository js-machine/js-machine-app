import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import clsx from 'clsx';
import { Digest } from '@js-machine-app/models';
import { Action, Actions } from './Action';
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
  digest: Digest;
  actions: Actions;
}

export const DigestHeader = observer(({ digest, actions }: Props) => {
  const classes = useStyles();

  const formatedDate = useMemo(() => {
    const date = new Date(digest.date);
    const digestDate: number = date.getDate();
    const digestMonth: string = date
      .toLocaleString('en', { month: 'short' })
      .toUpperCase();
    const digestYear: number = date.getFullYear();

    return `${digestDate} ${digestMonth} ${digestYear}`;
  }, [digest]);

  return (
    <>
      <CardHeader
        avatar={
          <Avatar
            className={clsx(classes.avatar, {
              [classes.avatarUnvailable]: !digest.visible,
            })}
          />
        }
        action={<Action digest={digest} actions={actions} />}
        title={
          <Typography variant="h5" component="h2">
            {digest.title}
          </Typography>
        }
        subheader={formatedDate}
      />
    </>
  );
});

DigestHeader.displayName = 'DigestHeader';
