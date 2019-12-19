import React, { useState, useCallback, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    color: '#f2e14c',
  },
}));

function TransitionUp<T>(props: T) {
  return <Slide {...props} direction="up" />;
}

export const UpdateNotification = memo(function UpdateNotification() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClick = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={TransitionUp}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<FormattedMessage id="update.message" />}
      action={[
        <Button
          key="undo"
          size="small"
          className={classes.button}
          onClick={handleClick}
        >
          <FormattedMessage id="update.action" />
        </Button>,
      ]}
    />
  );
});
