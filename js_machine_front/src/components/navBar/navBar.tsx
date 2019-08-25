import React from 'react';
import LogoSrc from './images/logo.png';
import './styles/route.css';
import './styles/routeMedia.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { NavBarState } from './models/navBar';

export class NavBar extends React.PureComponent {
  public state: NavBarState = { menuOpened: false };

  handleMenu = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  }
  render(): JSX.Element {
    return (
      <div>
        <div className="logo-box">
          <NavLink to="/">
            <img src={LogoSrc} className="logo-box__link" alt="logo" />
          </NavLink>
        </div>

        <input id="menu__toggle" type="checkbox" checked={this.state.menuOpened} onChange={this.handleMenu} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>

        <div className="menu">
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/about" onClick={this.handleMenu}>
            <FormattedMessage id="page.about" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/news" onClick={this.handleMenu}>
            <FormattedMessage id="page.news" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/events" onClick={this.handleMenu}>
            <FormattedMessage id="page.events" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/partners" onClick={this.handleMenu}>
            <FormattedMessage id="page.partners" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/authorization" onClick={this.handleMenu}>
            <FormattedMessage id="page.signIn" />
          </NavLink>
        </div>
      </div>
    );
  }
}
