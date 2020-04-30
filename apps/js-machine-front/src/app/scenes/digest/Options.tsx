import React, { memo } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    cursor: 'pointer',
    transform: 'scale(-1, 1)',
    fontSize: '36px'
  },
});

interface Props {
  className?: string;
}

export const Options = memo(({ className }: Props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <CloseIcon className={classes.icon} />
    </div>
  );
});
