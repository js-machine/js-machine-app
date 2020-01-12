import React, { memo } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    height: '100%'
  }
});

export const MainTrailer = memo(() => {
  const classes = useStyles();

  return (
    <video className={classes.root} autoPlay muted loop id="myVideo">
      <source src="assets/main.mp4" type="video/mp4" />
    </video>
  );
});
