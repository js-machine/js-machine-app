import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { useSnowflakes } from './hooks/useSnowflakes';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    backgroundColor: 'white',
  },
  snowing: {
    backgroundColor: '#F2E14C',
  },
}));

export const SnowSwitcher = memo(function SnowSwitcher() {
  const classes = useStyles();
  const { isSnowing, handleSnowSwitch } = useSnowflakes();

  return (
    <Fab
      className={clsx(classes.fab, { [classes.snowing]: isSnowing })}
      size="medium"
      onClick={handleSnowSwitch}
    >
      <AcUnitIcon />
    </Fab>
  );
});
