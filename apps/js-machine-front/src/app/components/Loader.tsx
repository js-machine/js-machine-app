import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PacmanLoader from 'react-spinners/PacmanLoader';

const MAIN_YELLOW = '#F2E14C';

const useStyles = makeStyles({
  root: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',

    '& >div > div:nth-child(3)': {
      animationDelay: '0s',
    },
    '& >div > div:nth-child(4)': {
      animationDelay: '-0.25s',
    },
    '& >div > div:nth-child(5)': {
      animationDelay: '-0.5s',
    },
    '& >div > div:nth-child(6)': {
      animationDelay: '-0.75s',
    },
  },
});

interface Props {
  isLoading: boolean;
}

export const Loader = memo(({ isLoading }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PacmanLoader size={45} color={MAIN_YELLOW} loading={isLoading} />
    </Box>
  );
});
