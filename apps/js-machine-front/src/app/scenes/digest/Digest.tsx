import React, { memo, useEffect, useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { History } from 'history';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { BackButton } from './BackButton';
import { DateAndView } from './DateAndViews';
import { Markdown } from './Markdown';
import { Options } from './Options';
import { Theme } from '@material-ui/core/styles';
import { getDigestsById } from '@js-machine-app/data-service';
import { Loader } from '../../components/Loader';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    minHeight: '100%',
  },
  leftSide: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundImage: `url('assets/news.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      content: `" "`,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      zIndex: 0,
      backgroundColor: 'rgba(18,18,18,0.8)',
    },
  },
  rightSide: {
    padding: theme.spacing(6, 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  backButton: {
    position: 'fixed',
    top: theme.spacing(6),
    left: theme.spacing(6),
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
  },
  options: {
    position: 'fixed',
    top: 'calc(50% - 52px)',
    left: 'calc(25% - 32px)',
  },
}));

interface Props {
  history: History;
  match: { params: { id: string } };
}

export const Digest = memo(({ history, match }: Props) => {
  const classes = useStyles();
  const [markdown, setMarkdown] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getDigestsById(match.params.id)
      .then(response => response.content)
      .then(text => setMarkdown(text))
      .finally(() => setIsLoading(false));
  }, [match]);

  const handleBackButton = useCallback(
    () => {
      history.push('/news');
    },
    []
  )

  return (
    <Grid className={classes.root} container>
      <Hidden smDown>
        <Grid className={classes.leftSide} item md={3}>
          <BackButton className={classes.backButton} onClick={ handleBackButton }>
            <FormattedMessage id="digest.back" />
          </BackButton>
          <Options className={classes.options} />
        </Grid>
      </Hidden>
      <Grid className={classes.rightSide} item md={9}>
        <DateAndView views={25} />
        <Loader isLoading={isLoading} />
        <Markdown markdown={markdown} />
      </Grid>
    </Grid>
  );
});
