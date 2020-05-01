import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { TextBlock } from './TextBlock';

const useStyles = makeStyles({
  root: {
    width: '100%',
    animation: '$blink 1s linear infinite',
  },
  "@keyframes blink": {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.3,
    },
    '100%': {
      opacity: 1,
    },
  },
});

interface Props {
  isLoading: boolean;
}

const TEN_TEXT_BLOCKS = 10;

export const DigestContentLoader = memo(({ isLoading }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        { isLoading && Array.from({ length: TEN_TEXT_BLOCKS }, (_, i) => <TextBlock key={i}/>) }
    </Box>
  );
});
