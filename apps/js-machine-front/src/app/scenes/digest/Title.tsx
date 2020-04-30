import React, { memo } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { Options } from './Options';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 48px',
    boxSizing: 'border-box'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
});

interface Props {
  className?: string;
}

export const Title = memo(({ className }: Props) => {
  const classes = useStyles();

  return (
      <Grid className={clsx(classes.root, className)}>
        <div className={classes.title}>Digest Cicle #22</div>
        <Options/>
      </Grid>

  );
});
