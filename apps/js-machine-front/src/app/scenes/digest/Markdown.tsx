import React, { memo, useMemo } from 'react';
import { makeStyles } from '@material-ui/styles';
import marked from 'marked';
import { theme } from '@js-machine-app/front/theme';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& h1': {
      color: 'rgba(0, 0, 0, 0.85)',
      fontSize: 36,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
      fontFamily: 'Arvo',
    },
    '& h2': {
      fontFamily: 'Russo One',
      margin: theme.spacing(4, 0),
      fontSize: 24,
      color: 'rgb(41, 41, 41)',
    },
    '& h3': {
      color: 'rgb(41, 41, 41)',
      marginTop: theme.spacing(4.5),
      marginBottom: theme.spacing(0),
      fontFamily: 'Russo One',
      fontSize: 20,
    },
    '& p': {
      lineHeight: '1.5em',
      fontSize: 18,
      marginTop: theme.spacing(1),
    },
    '& a': {
      color: '#2F5C7C'
    },
  },
});


interface Props {
  markdown?: string;
  isLoading: boolean;
}

const SECOND = 1000;

export const Markdown = memo(({ markdown, isLoading }: Props) => {
  const classes = useStyles();

  const formatedMarkdown = useMemo(
    () => (markdown ? marked(markdown.split('\\n').join('\u000A')) : ''),
    [markdown],
  );

  return (
    <Fade in={!isLoading} timeout={SECOND}>
      <article
        className={classes.root}
        dangerouslySetInnerHTML={{
          // https://stackoverflow.com/questions/48692039/how-to-use-n-in-a-javascript-string
          __html: formatedMarkdown,
        }}
      />
    </Fade>
  );
});
