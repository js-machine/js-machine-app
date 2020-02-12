import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { useStores } from '@js-machine-app/front/stores';
import { observer } from 'mobx-react-lite';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

const useStyles = makeStyles(theme => ({
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    fontFamily: `'Machine', sans-serif`,
    fontSize: '1.25rem',
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  logo:{
    width: '250px',
  },
}));

const hiddenRoutes = ['digest'];

export const DynamicNavBar = observer(function DynamicNavBar() {
  const { routerStore } = useStores();

  if (new RegExp(hiddenRoutes.join('|')).test(routerStore.location.pathname)) {
    return null;
  }

  return <NavBar />;
});

const NavBar = memo(function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box className={classes.titleContainer}>
          <NavLink exact to="/" className={classes.title}>
            JS MACHINE
            {/* Christmas Logo */}
            {/* <img className={classes.logo} src={'assets/logo-ny.png'} alt="logo"/> */}
          </NavLink>
        </Box>
        <Hidden smDown>
          <NavDesktop />
        </Hidden>
        <Hidden mdUp>
          <NavMobile />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
});
