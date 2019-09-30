import React, { memo, useState } from 'react';
import './styles/route.css';
import './styles/routeMedia.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const NavBar = memo(() => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div>
      <div className="logo-box">
        <NavLink
          exact
          className="menu__nav-link menu__nav-link--logo"
          to="/"
        >
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
        <NavLink
          exact
          className="menu__nav-link"
          activeClassName="active-link"
          to="/partners"
        >
          <FormattedMessage id="page.partners" />
        </NavLink>
        <NavLink
          exact
          className="menu__nav-link"
          activeClassName="active-link"
          to="/authorization"
        >
          <FormattedMessage id="page.signIn" />
        </NavLink>
      </div>
    </div>
  );
});
