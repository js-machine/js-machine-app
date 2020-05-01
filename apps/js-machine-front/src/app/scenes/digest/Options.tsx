import React, { memo, useCallback } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { History } from 'history';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 'initial',
  },
  icon: {
    cursor: 'pointer',
    transform: 'scale(-1, 1)',
    fontSize: 36,
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
    <Grid className={clsx(classes.root, className)}
          container
          direction="column"
          alignItems="center"
          >
      <CloseIcon className={classes.icon} onClick={handleBackButton}/>
    </Grid>
  );
});
