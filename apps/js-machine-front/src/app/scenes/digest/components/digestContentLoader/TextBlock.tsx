import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Line } from './Line';
import { WordSize } from './Word';
import { wordSizeSets } from './wordSizeSets';
import { theme } from '@js-machine-app/front/theme';

const useStyles = makeStyles({
  root: {
    marginBottom: theme.spacing(4),
  },
  title: {
    minHeight: 16,
    width: 140,
    background: '#e1e1e1',
    borderRadius: 4,
    marginBottom: theme.spacing(4),
  },
});

const getRandomWordSet = (lines: Array<Array<WordSize>>) => lines[Math.floor(Math.random() * Math.floor(lines.length))];

export const TextBlock = memo(() => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <div className={classes.title}/>
        {Array.from({ length: 4 }, (_, i) => <Line key={i} wordSizes={getRandomWordSet(wordSizeSets)}/>)}
    </Box>
  );
});
