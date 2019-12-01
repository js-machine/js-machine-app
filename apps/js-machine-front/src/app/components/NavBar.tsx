import React, { useState } from 'react';
import './styles/route.css';
import './styles/routeMedia.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
// import { useStore } from '../stores';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';

// const useStyles = makeStyles(theme => ({
//   avatar: {
//     marginLeft: 60,
//   },
// }));

export const NavBar = observer(() => {
  // const classes = useStyles();
  // const { authStore } = useStore();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div>
      <div className="logo-box">
        <NavLink exact className="menu__nav-link menu__nav-link--logo" to="/">
          JS MACHINE
        </NavLink>
      </div>

      <input
        id="menu__toggle"
        type="checkbox"
        checked={isMenuOpened}
        onChange={() => setIsMenuOpened(!isMenuOpened)}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span />
      </label>
      <div className="menu" onClick={() => setIsMenuOpened(false)}>
        <NavLink
          exact
          className="menu__nav-link"
          activeClassName="active-link"
          to="/about"
        >
          <FormattedMessage id="page.about" />
        </NavLink>
        <NavLink
          exact
          className="menu__nav-link"
          activeClassName="active-link"
          to="/news"
        >
          <FormattedMessage id="page.news" />
        </NavLink>
        <NavLink
          exact
          className="menu__nav-link"
          activeClassName="active-link"
          to="/events"
        >
          <FormattedMessage id="page.events" />
        </NavLink>
        {/* <NavLink
          exact
          className="menu__nav-link"
          activeClassName="active-link"
          to="/partners"
        >
          <FormattedMessage id="page.partners" />
        </NavLink> */}
        {/* {authStore.user ? (
          authStore.user.photoURL ? (
            <Avatar className={classes.avatar} src={authStore.user.photoURL} />
          ) : (
            <Avatar className={classes.avatar}>US</Avatar>
          )
        ) : (
          <NavLink
            exact
            className="menu__nav-link"
            activeClassName="active-link"
            to="/authorization"
          >
            <FormattedMessage id="page.signIn" />
          </NavLink>
        )} */}
      </div>
    </div>
  );
});
