import React, { memo } from 'react';
import LogoSrc from './images/logo.png';
import './styles/route.css';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = memo(() => {
  return (
    <div>
      <div className="logo-box">
        <NavLink to="/">
          <img src={LogoSrc} className="logo-box__link" alt="logo" />
        </NavLink>
      </div>

      <div className="menu">
        <NavLink exact={true} className="menu__nav-link"  activeClassName="active-link" to="/about">
          О НАС
        </NavLink>
        <NavLink exact={true} className="menu__nav-link"  activeClassName="active-link" to="/news">
          НОВОСТИ
        </NavLink>
        <NavLink exact={true} className="menu__nav-link"  activeClassName="active-link" to="/events">
          СОБЫТИЯ
        </NavLink>
        <NavLink exact={true} className="menu__nav-link"  activeClassName="active-link" to="/partners">
          ПАРТНЕРЫ
        </NavLink>
        <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/authorization">
          ВХОД
        </NavLink>
      </div>
    </div>
  );
});
