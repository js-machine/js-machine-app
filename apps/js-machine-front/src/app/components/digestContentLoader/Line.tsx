import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Word, WordSize } from './Word';
import { theme } from '@js-machine-app/front/theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'start',
    marginBottom: theme.spacing(0.5),
    flexFlow: 'wrap'
  },
});

interface Props {
    wordSizes: Array<WordSize>,
}

export const Line = memo(({wordSizes} : Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        {wordSizes.map((size, i) => <Word key={i} size={size}/>)}
    </Box>
  );
});
