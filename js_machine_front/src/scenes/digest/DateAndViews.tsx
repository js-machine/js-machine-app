import React, { memo } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 24,
    marginRight: 4,
  },
});

interface Props {
  views: number;
}

export const DateAndView = memo(({ views }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>5 АВГ</span>
      <VisibilityIcon className={classes.icon} />
      <span>{views}</span>
    </div>
  );
});
