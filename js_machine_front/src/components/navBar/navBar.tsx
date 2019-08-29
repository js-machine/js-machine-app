import React, { memo } from 'react';
import LogoSrc from './images/logo.png';
import './styles/route.css';
import './styles/routeMedia.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const NavBar: React.FC = memo(() => {
  return (
    <div>
      <div className="logo-box">
        <NavLink to="/">
          <img src={LogoSrc} className="logo-box__link" alt="logo" />
        </NavLink>
      </div>

      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span/>
      </label>

      <div className="menu">
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/about">
          <FormattedMessage id="page.about" />
        </NavLink>
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/news">
          <FormattedMessage id="page.news" />
        </NavLink>
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/events">
          <FormattedMessage id="page.events" />
        </NavLink>
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/partners">
          <FormattedMessage id="page.partners" />
        </NavLink>
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/authorization">
          <FormattedMessage id="page.signIn" />
        </NavLink>
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/digestview">
          <FormattedMessage id="page.digestview" />
        </NavLink>
      </div>
    </div>
  );
});
