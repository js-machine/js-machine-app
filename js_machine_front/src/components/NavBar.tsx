import React, { memo } from 'react';
import '../styles/route.css';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = memo(() => {
  return (
    <nav className="nav">
      <span className="nav__link">
        <NavLink exact={true} activeClassName="activeLink" to="/about">
          О НАС
        </NavLink>
      </span>
      <span className="nav__link">
        <NavLink exact={true} activeClassName="activeLink" to="/news">
          НОВОСТИ
        </NavLink>
      </span>
      <span className="nav__link">
        <NavLink exact={true} activeClassName="activeLink" to="/events">
          СОБЫТИЯ
        </NavLink>
      </span>
      <span className="nav__link">
        <NavLink exact={true} activeClassName="activeLink" to="/partners">
          ПАРТНЕРЫ
        </NavLink>
      </span>
    </nav>
  );
});
