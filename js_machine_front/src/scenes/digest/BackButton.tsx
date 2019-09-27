import React, { memo } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    fontSize: '1rem',
    color: '#ffffff',
  },
});

export const BackButton = memo(
  ({ children, className, ...props }: ButtonProps) => {
    const classes = useStyles();

    return (
      <Button
        className={clsx(classes.root, className)}
        variant="text"
        size="medium"
        {...props}
      >
        <NavigateBeforeIcon />
        {children}
      </Button>
    );
  },
);

BackButton.displayName = 'BackButton';
