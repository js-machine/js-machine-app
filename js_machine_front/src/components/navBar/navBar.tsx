import React from 'react';
import './styles/route.css';
import './styles/routeMedia.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { NavBarState } from './models/navBar';

export class NavBar extends React.PureComponent {
  public state: NavBarState = { isMenuOpened: false };

  handleMenu = () => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
  render(): JSX.Element {
    return (
      <div>
        <div className="logo-box">
          <NavLink
            exact={true}
            className="menu__nav-link menu__nav-link--logo"
            to="/"
          >
            JS MACHINE
          </NavLink>
        </div>

        <input
          id="menu__toggle"
          type="checkbox"
          checked={this.state.isMenuOpened}
          onChange={this.handleMenu}
        />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>
        <div className="menu">
          <NavLink
            exact={true}
            className="menu__nav-link"
            activeClassName="active-link"
            to="/about"
          >
            <FormattedMessage id="page.about" />
          </NavLink>
          <NavLink
            exact={true}
            className="menu__nav-link"
            activeClassName="active-link"
            to="/news"
          >
            <FormattedMessage id="page.news" />
          </NavLink>
          <NavLink
            exact={true}
            className="menu__nav-link"
            activeClassName="active-link"
            to="/events"
          >
            <FormattedMessage id="page.events" />
          </NavLink>
          <NavLink
            exact={true}
            className="menu__nav-link"
            activeClassName="active-link"
            to="/partners"
          >
            <FormattedMessage id="page.partners" />
          </NavLink>
          <NavLink
            exact={true}
            className="menu__nav-link"
            activeClassName="active-link"
            to="/authorization"
          >
            <FormattedMessage id="page.signIn" />
          </NavLink>
          <NavLink
            exact={true}
            className="menu__nav-link"
            activeClassName="active-link"
            to="/digestview"
          >
            <FormattedMessage id="page.digestview" />
          </NavLink>
        </div>
      </div>
    );
  }
}
