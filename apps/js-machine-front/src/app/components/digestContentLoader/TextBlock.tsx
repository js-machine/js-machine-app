import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Line } from './Line';
import { WordSize } from './Word';
import { wordSizeSets } from './wordSizeSets';

const useStyles = makeStyles({
  root: {
    marginBottom: '32px',
  },
  title: {
    minHeight: '16px',
    width: '140px',
    background: '#e1e1e1',
    borderRadius: '4px',
    marginBottom: '32px',
  }
});


export const TextBlock = memo(() => {
  const classes = useStyles();
  const getRandomWordSet = (lines: Array<Array<WordSize>>) => lines[Math.floor(Math.random() * Math.floor(lines.length))];

  return (
    <Box className={classes.root}>
        <div className={classes.title}/>
        {Array.from({ length: 4 }, (_, i) => <Line key={i} wordSizes={getRandomWordSet(wordSizeSets)}/>)}
    </Box>
  );
});
