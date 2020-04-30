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
import { Title } from './Title';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: createDotBackgorund(2, '#fff', 36, '#000'),
    backgroundSize: '36px 36px',
    padding: '128px 48px',
    backgroundAttachment: 'fixed'
  },
  title: {
    position: 'sticky',
    top: '0',
    background: 'white',
    '-webkit-backdrop-filter': 'saturate(180%) blur(10px)',
    backdropFilter: 'saturate(180%) blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  digest: {
    margin: '0 auto',
    flexDirection: 'column',
    maxWidth: '768px',
    background: 'white',
    padding: '64px 0',
    boxShadow: '0px 0px 2px 0px rgba(159, 159, 159, 0.46)',
    borderRadius: '8px',
  },
}));

const createDotBackgorund = (dotSize: number, bgColor: string, dotSpace: number, dotColor: string): string => {
  return `linear-gradient(90deg, ${bgColor} ${dotSpace - dotSize}px, transparent 1%) center,
  linear-gradient(${bgColor} ${dotSpace - dotSize}px, transparent 1%) center,
  #9d9d9d`;
}

interface Props {
  history: History;
  match: { params: { id: string } };
}

export const Digest = memo(({history, match}: Props) => {
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
    [history],
  );
  console.log(markdown);
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.digest}>
        <Grid className={classes.title}>
          <Title></Title>
        </Grid>
        <br/>
        <Grid>
          <DateAndView views={25} />
          <Loader isLoading={isLoading} />
          <Markdown markdown={markdown} />
        </Grid>
      </Grid>
    </Grid>
  );
});
