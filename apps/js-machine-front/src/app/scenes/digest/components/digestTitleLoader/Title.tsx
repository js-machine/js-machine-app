import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minHeight: 36,
    width: 210,
    background: '#e1e1e1',
    borderRadius: 4,
  },
});

export const Title = memo(() => {
  const classes = useStyles();

  return <Box className={classes.root}/>;
});
