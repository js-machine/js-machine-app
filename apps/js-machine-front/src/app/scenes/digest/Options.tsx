import React, { memo } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import StarIcon from '@material-ui/icons/Star';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    width: 32,
    height: 104,
    color: '#000000',
    backgroundColor: '#f2e14c',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    cursor: 'pointer',
    transform: 'scale(-1, 1)',
  },
});

interface Props {
  className?: string;
}

export const Options = memo(({ className }: Props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <ReplyIcon className={classes.icon} />
      <StarIcon className={classes.icon} />
      <InfoIcon className={classes.icon} />
    </div>
  );
});
