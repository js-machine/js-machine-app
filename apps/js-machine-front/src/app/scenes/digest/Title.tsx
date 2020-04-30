import React, { memo } from 'react';
import { History } from 'history';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Options } from './Options';
import { theme } from '@js-machine-app/front/theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 48px',
    boxSizing: 'border-box',
    fontFamily: 'Russo One',
    [theme.breakpoints.down('xs')]: {
        padding: '16px 16px',
      },
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
        fontSize: '32px',
      },
  },
});

interface Props {
  text: string;
  history: History
}

export const Title = memo(({ text, history }: Props) => {
  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <div className={classes.title}>{text}</div>
        <Options history={history}/>
      </Grid>
  );
});
