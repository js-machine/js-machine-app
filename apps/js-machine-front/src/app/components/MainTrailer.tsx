import React, { memo } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%,-50%)'
  },
});

export const MainTrailer = memo(() => {
  const classes = useStyles();

  return (
    <video className={classes.root} autoPlay muted loop id="myVideo">
      <source src="assets/main.mp4" type="video/mp4" />
    </video>
  );
});
