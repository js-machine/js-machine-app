import React, { memo } from 'react';
import LogoSrc from './images/logo.png';
import './styles/route.css';
import './styles/routeMedia.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export class NavBar extends React.PureComponent {
  public state = {menuIsOpened: false};

  handlingMenu = () => {
    if (this.state.menuIsOpened){
      this.setState({menuIsOpened: false});
    } else {
      this.setState({menuIsOpened : true});
    }
  }
  render() {
    return (
      <div>
        <div className="logo-box">
          <NavLink to="/">
            <img src={LogoSrc} className="logo-box__link" alt="logo" />
          </NavLink>
        </div>

        <input id="menu__toggle" type="checkbox" checked={this.state.menuIsOpened} onClick={this.handlingMenu}/>
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>

        <div className="menu">
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/about" onClick={this.handlingMenu}>
            <FormattedMessage id="page.about" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/news" onClick={this.handlingMenu}>
            <FormattedMessage id="page.news" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/events" onClick={this.handlingMenu}>
            <FormattedMessage id="page.events" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/partners" onClick={this.handlingMenu}>
            <FormattedMessage id="page.partners" />
          </NavLink>
          <NavLink exact={true} className="menu__nav-link" activeClassName="active-link" to="/authorization" onClick={this.handlingMenu}>
            <FormattedMessage id="page.signIn" />
          </NavLink>
        </div>
      </div>
    );
  }
};
