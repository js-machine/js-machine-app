import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  snow: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

export function Snowflakes() {
  const classes = useStyles();

  return (
    <canvas
      id="snow"
      className={classes.snow}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
