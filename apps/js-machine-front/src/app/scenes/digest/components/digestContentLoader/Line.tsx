import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Word, WordSize } from './Word';
import { theme } from '@js-machine-app/front/theme';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: theme.spacing(0.5),
    flexFlow: 'wrap',
  },
});

interface Props {
    wordSizes: Array<WordSize>,
}

export const Line = memo(({wordSizes} : Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="flex-start">
        {wordSizes.map((size, i) => <Word key={i} size={size}/>)}
    </Grid>
  );
});
