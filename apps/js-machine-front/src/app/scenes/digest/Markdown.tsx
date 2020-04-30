import React, { memo, useMemo } from 'react';
import { makeStyles } from '@material-ui/styles';
import marked from 'marked';
import { theme } from '@js-machine-app/front/theme';

const useStyles = makeStyles({
  root: {
    minHeight: '1000px',
    '& h1': {
      color: 'rgba(0, 0, 0, 0.85)',
      fontSize: 36,
      marginTop: 8,
      marginBottom: 40,
      fontFamily: 'Arvo',
    },
    '& h2': {
      fontFamily: 'Russo One',
      margin: '32px 0',
      fontSize: '24px',
      color: 'rgb(41, 41, 41)',
    },
    '& h3': {
      color: 'rgb(41, 41, 41)',
      marginTop: 36,
      marginBottom: 0,
      fontFamily: 'Russo One',
      fontSize: '20px',
    },
    '& p': {
      lineHeight: '1.5em',
      fontSize: '18px',
      marginTop: '8px',
    },
    '& a': {
      color: '#2F5C7C'
    },
  },
});


interface Props {
  markdown?: string;
}

export const Markdown = memo(({ markdown }: Props) => {
  const classes = useStyles();

  const formatedMarkdown = useMemo(
    () => (markdown ? marked(markdown.split('\\n').join('\u000A')) : ''),
    [markdown],
  );

  return (
    <article
      className={classes.root}
      dangerouslySetInnerHTML={{
        // https://stackoverflow.com/questions/48692039/how-to-use-n-in-a-javascript-string
        __html: formatedMarkdown,
      }}
    />
  );
});
