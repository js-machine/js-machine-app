import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab, { FabProps } from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  dial: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  },
}));

export const Dial = memo(function Dial(props: FabProps) {
  const classes = useStyles();

  return (
    <Fab className={classes.dial} color="primary" {...props}>
      <AddIcon />
    </Fab>
  );
});
