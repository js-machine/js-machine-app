import React, { useCallback, KeyboardEvent, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import { SideList } from './SideList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStore } from '@js-machine-app/admin/store';
import { observer } from 'mobx-react-lite';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: theme.mixins.toolbar,
  toolbarMobile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.mixins.toolbar,
  },
}));

export const SideBar = observer(() => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const handleListClick = useCallback(
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      uiStore.toggleDrawer();
    },
    [uiStore],
  );

  return (
    <>
      <Hidden xsDown>
        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: uiStore.drawerOpen,
            [classes.drawerClose]: !uiStore.drawerOpen,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: uiStore.drawerOpen,
              [classes.drawerClose]: !uiStore.drawerOpen,
            }),
          }}
          variant="permanent"
          open={uiStore.drawerOpen}
        >
          <div className={classes.toolbar} />
          <SideList />
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <SwipeableDrawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: true,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: true,
            }),
          }}
          variant="temporary"
          open={uiStore.drawerOpen}
          onClose={uiStore.toggleDrawer}
          onOpen={uiStore.toggleDrawer}
        >
          <div className={classes.toolbarMobile}>
            <Typography variant="h6">JS Machine Admin</Typography>
          </div>
          <Divider />
          <SideList onClick={handleListClick} />
        </SwipeableDrawer>
      </Hidden>
    </>
  );
});

SideBar.displayName = 'SideBar';
