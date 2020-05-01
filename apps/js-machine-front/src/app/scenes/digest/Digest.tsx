import React, { memo, useEffect, useState } from 'react';
import { History } from 'history';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Markdown } from './Markdown';
import { Theme } from '@material-ui/core/styles';
import { getDigestsById } from '@js-machine-app/data-service';
import { Title } from './Title';
import { DigestContentLoader } from '../../components/digestContentLoader/DigestContentLoader';
import { Container, Box } from '@material-ui/core';

interface BackgroundConfig {
  dotSize: number;
  dotColor: string;
  bgColor: string;
  dotSpace: number;
}

const bgConfig: BackgroundConfig = {
  dotColor: '#9d9d9d',
  dotSize: 2,
  dotSpace: 48,
  bgColor: 'white'
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: createDotBackground(bgConfig),
    backgroundSize: '48px 48px',
    padding: theme.spacing(16, 6),
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 4.5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  title: {
    position: 'sticky',
    top: 0,
    background: 'white',
    '-webkit-backdrop-filter': 'saturate(180%) blur(10px)',
    backdropFilter: 'saturate(180%) blur(5px)',
    backgroundColor: 'rgba(255,255,255,0.72)',
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  digest: {
    width: 768,
    height: '100%',
    background: 'white',
    padding: theme.spacing(6, 0),
    boxShadow: '0px 0px 2px 0px rgba(159, 159, 159, 0.46)',
    borderRadius: 8,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 0),
    },
  },
  content: {
    padding: theme.spacing(0, 6),
    maxWidth: 650,
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: theme.spacing(0, 2),
    },
  },
}));

const createDotBackground = (config: BackgroundConfig): string => {
  return `linear-gradient(90deg, ${config.bgColor} ${config.dotSpace - config.dotSize}px, transparent 1%) center,
  linear-gradient(${config.bgColor} ${config.dotSpace - config.dotSize}px, transparent 1%) center,
  ${config.dotColor}`;
}

interface Props {
  history: History;
  match: { params: { id: string } };
}

interface DigestContent {
  title: string,
  text: string,
}

export const Digest = memo(({history, match}: Props) => {
  const classes = useStyles();
  const emptyDigest: DigestContent = {
    title: '',
    text: ''
  };

  const [digest, setDigest] = useState<DigestContent>(emptyDigest);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getDigestsById(match.params.id)
      .then(response => ({
          title: response.title,
          text: response.content,
        }))
      .then(digest => setDigest(digest))
      .finally(() => setIsLoading(false));
  }, [match]);

  return (
    <Grid className={classes.root} container>
      <Container className={classes.digest}>

        <Box className={classes.title}>
          <Title text={digest.title} history={history}/>
        </Box>

        <Box className={classes.content}>
          <DigestContentLoader isLoading={isLoading}/>
          <Markdown isLoading={isLoading} markdown={digest.text} />
        </Box>

      </Container>
    </Grid>
  );
});
