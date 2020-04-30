import React, { memo, useCallback } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { History } from 'history';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
    transform: 'scale(-1, 1)',
    fontSize: '36px',
    color: 'rgb(41, 41, 41)',
  },
});

interface Props {
  history: History,
  className?: string;
}

export const Options = memo(({ className, history }: Props) => {
  const classes = useStyles();

  const handleBackButton = useCallback(
    () => {
      history.push('/news');
    },
    [history],
  );
  return (
    <div className={clsx(classes.root, className)}>
      <CloseIcon className={classes.icon} onClick={handleBackButton}/>
    </div>
  );
});
