import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundImage: `url('assets/error.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: `rgba(0,0,0,0.6)`,
  },
  toolbar: theme.mixins.toolbar,
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(6),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4),
    },
  },
  title: {
    color: '#F2E14C',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontSize: '6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
    },
  },
  subTitle: {
    color: theme.palette.primary.contrastText,
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
}));

interface Props {
  error: Error;
  componentStack: string;
}

export const ErrorBoundaryFallbackComponent = memo(
  function ErrorBoundaryFallbackComponent({ error, componentStack }: Props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div className={classes.toolbar} />
        <div className={classes.textContainer}>
          <span className={classes.title}>
            <FormattedMessage id="errorIndicator.title" />
          </span>
          <span className={classes.subTitle}>
            <FormattedMessage id="errorIndicator.subTitle" />
          </span>
          <span className={classes.subTitle}>
            <FormattedMessage id="errorIndicator.subTitle1" />
          </span>
        </div>
      </div>
    );
  },
);
