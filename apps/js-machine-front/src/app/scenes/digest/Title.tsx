import React, { memo } from 'react';
import { History } from 'history';
import { makeStyles } from '@material-ui/styles';
import { Grid, Fade } from '@material-ui/core';
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
  history: History,
  isLoading: boolean,
}

const SECOND = 1000;

export const Title = memo(({ text, history, isLoading }: Props) => {
  const classes = useStyles();

  return (
      <Grid className={classes.root} container justify="space-between">

         <Fade in={!isLoading} timeout={SECOND}>
            <div className={classes.title}>{text}</div>
         </Fade>

        <Options history={history}/>
      </Grid>
  );
});
