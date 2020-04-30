import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const MAIN_YELLOW = '#F2E14C';

const useStyles = makeStyles({
  root: {
      marginBottom: '16px',
  },
  text: {
    minHeight: '16px',
    marginLeft: '4px',
    background: '#e1e1e1',
    borderRadius: '4px',
  },
  lg: {
    width: '150px',
  },
  sm: {
    width: '30px',
  },
  md: {
    width: '80px',
  },
});

interface Props {
    size: any;
}

export enum WordSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export const Word = memo(({size} : Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <div className={clsx(classes.text, (classes as any)[size])}/>
    </Box>
  );
});
