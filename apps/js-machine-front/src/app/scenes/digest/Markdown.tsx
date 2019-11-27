import React, { memo, useMemo } from 'react';
import { makeStyles } from '@material-ui/styles';
import marked from 'marked';

const useStyles = makeStyles({
  root: {
    '& h1': {
      color: 'rgba(0, 0, 0, 0.85)',
      fontSize: 36,
      marginTop: 8,
      marginBottom: 40,
    },
    '& h3': {
      color: 'rgba(0, 0, 0, 0.3)',
      marginTop: 48,
      marginBottom: 12,
    },
    '& p': {
      color: 'rgba(0, 0, 0, 0.85)',
    },
    '& a': {
      textDecoration: 'none',
      color: '#f2e14c',
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
