import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { theme } from '@js-machine-app/front/theme';

const useStyles = makeStyles({
  root: {
      marginBottom: theme.spacing(2),
  },
  text: {
    minHeight: 16,
    marginLeft: 4,
    background: '#e1e1e1',
    borderRadius: 4,
  },
  lg: {
    width: 150,
  },
  sm: {
    width: 30,
  },
  md: {
    width: 80,
  },
});

interface Props {
    size: WordSize;
}

export enum WordSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export const Word = memo(({size}: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <div className={clsx(classes.text, classes[size])}/>
    </Box>
  );
});
