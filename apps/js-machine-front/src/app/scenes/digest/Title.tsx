import React, { memo } from 'react';
import { History } from 'history';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Options } from './Options';
import { theme } from '@js-machine-app/front/theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: 'black',
    padding: theme.spacing(2, 6),
    boxSizing: 'border-box',
    fontFamily: 'Russo One',
    [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2, 2),
      },
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
        fontSize: 32,
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
      <Grid className={classes.root} container justify="space-between">
        <div className={classes.title}>{text}</div>
        <Options history={history}/>
      </Grid>
  );
});
