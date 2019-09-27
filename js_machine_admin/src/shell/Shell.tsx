import React, { memo, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  toolbar: theme.mixins.toolbar,
}));

export const Shell = memo(({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <Box className={classes.root}>
      <TopBar onClick={handleDrawerOpen} />
      <SideBar open={open} toggleDrawer={handleDrawerOpen} />
      <Container className={classes.content} fixed>
        <div className={classes.toolbar} />
        {children}
      </Container>
    </Box>
  );
});

Shell.displayName = 'Shell';
