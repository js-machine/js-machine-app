import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { useStores } from '@js-machine-app/front/stores';
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

const useStyles = makeStyles(({spacing, palette}) => ({
    navDesktop: {
      padding: `${spacing(1)}px ${spacing(2)}px`,
    },
    withBackground: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    link: {
      textDecoration: 'none',
      color: palette.primary.contrastText,
      fontWeight: 'bold',
      marginLeft: spacing(7),
    },
    firstLink: {
      textDecoration: 'none',
      color: palette.primary.contrastText,
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
      className={clsx(classes.navDesktop, {
        [classes.withBackground]: routerStore.location.pathname === '/',
      })}>
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
      <NavLink
        exact
        to="/calendar"
        className={classes.link}
        activeClassName={classes.activeNavLink}
      >
        <FormattedMessage id="page.calendar" />
      </NavLink>
    </div>
  );
});
