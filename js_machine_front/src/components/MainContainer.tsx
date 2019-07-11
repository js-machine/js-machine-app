import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../styles/route.css';

// tslint:disable-next-line: typedef
export function MainContainer<P extends object>(MainComponent: React.ComponentType<P>, AboutComponent: React.ComponentType, NewsComponent: React.ComponentType, EventsComponent: React.ComponentType, PartnersComponent: React.ComponentType) {

  return class extends React.Component<P> {
    render(): JSX.Element {
        return (
          <div>
            <nav className="nav">
              <span className="nav__link"><NavLink exact={true} activeClassName="activeLink" to="/about">О НАС</NavLink></span>
              <span className="nav__link"><NavLink exact={true} activeClassName="activeLink" to="/news">НОВОСТИ</NavLink></span>
              <span className="nav__link"><NavLink exact={true} activeClassName="activeLink" to="/events">СОБЫТИЯ</NavLink></span>
              <span className="nav__link"><NavLink exact={true} activeClassName="activeLink" to="/partners">ПАРТНЕРЫ</NavLink></span>
            </nav>
            {/* <MainComponent {...this.props as P}/>
            <AboutComponent {...this.props as P}/>
            <NewsComponent {...this.props as P}/>
            <EventsComponent {...this.props as P}/>
            <PartnersComponent {...this.props as P}/> */}
            <Switch>
              <Route exact={true} path="/" component={MainComponent} />
              <Route exact={true} path="/about" component={AboutComponent} />
              <Route exact={true} path="/news" component={NewsComponent} />
              <Route exact={true} path="/events" component={EventsComponent} />
              <Route exact={true} path="/partners" component={PartnersComponent} />
              <Redirect to={'/'} />
            </Switch>
          </div>
      );
    }
  };
}
