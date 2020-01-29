import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { useStores } from '@js-machine-app/front/stores';
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(theme => ({
    navDesktop: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    withBackground: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
      marginLeft: theme.spacing(7),
    },
    firstLink: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
      marginLeft: 0,
    },
    activeNavLink: {
      // color should be in theme
      color: '#f2e14c',
    },
  }))
;

export const NavDesktop = observer(function NavDesktop() {
  const classes = useStyles();
  const {routerStore} = useStores();

  return (
    <div
      className={`${classes.navDesktop} ${routerStore.location.pathname === '/' ? classes.withBackground : ''}`}>
      <NavLink
        exact
        to="/about"
        className={classes.firstLink}
        activeClassName={classes.activeNavLink}
      >
        <FormattedMessage id="page.about" />
      </NavLink>
      <NavLink
        exact
        to="/news"
        className={classes.link}
        activeClassName={classes.activeNavLink}
      >
        <FormattedMessage id="page.news" />
      </NavLink>
      <NavLink
        exact
        to="/events"
        className={classes.link}
        activeClassName={classes.activeNavLink}
      >
        <FormattedMessage id="page.events" />
      </NavLink>
    </div>
  );
});
