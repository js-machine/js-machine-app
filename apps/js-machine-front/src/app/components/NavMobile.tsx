import React, { useState, useCallback, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useStores } from '@js-machine-app/front/stores';

const useStyles = makeStyles({
  drawerLink: {
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: '2rem',
  },
  drawer: {
    '&>div[tabindex="-1"]': {
      // color sshould be in theme
      backgroundColor: 'rgba(242, 225, 76, 0.90)',
    },
  },
  drawerList: {
    width: 250,
  },
});

export const NavMobile = memo(function NavMobile() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { routerStore } = useStores();

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const navigate = useCallback(
    (path: string) => () => {
      closeDrawer();
      routerStore.push(path);
    },
    [routerStore, closeDrawer],
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={openDrawer}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        onOpen={openDrawer}
        className={classes.drawer}
      >
        <List className={classes.drawerList}>
          <ListItem
            button
            className={classes.drawerLink}
            onClick={navigate('/about')}
          >
            <FormattedMessage id="page.about" />
          </ListItem>
          <ListItem
            button
            className={classes.drawerLink}
            onClick={navigate('/news')}
          >
            <FormattedMessage id="page.news" />
          </ListItem>
          <ListItem
            button
            className={classes.drawerLink}
            onClick={navigate('/events')}
          >
            <FormattedMessage id="page.events" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
});
