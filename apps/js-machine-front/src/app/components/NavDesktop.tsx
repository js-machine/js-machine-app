import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  activeNavLink: {
    // color should be in theme
    color: '#f2e14c',
  },
}));

export const NavDesktop = memo(function NavDesktop() {
  const classes = useStyles();

  return (
    <>
      <NavLink
        exact
        to="/about"
        className={classes.link}
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
    </>
  );
});
