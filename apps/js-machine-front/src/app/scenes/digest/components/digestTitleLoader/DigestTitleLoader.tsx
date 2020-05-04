import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { theme } from '@js-machine-app/front/theme';
import { Title } from './Title';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: theme.spacing(0, 6),
    marginBottom: theme.spacing(2),
    position: 'absolute',
    bottom: 0,
    animation: '$blink 1s linear infinite',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
    },
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

export const DigestTitleLoader = memo(({ isLoading }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        { isLoading && <Title/> }
    </Box>
  );
});
