import React from 'react';
import './App.css';
import { NavBar } from '_navBar/navBar';
import { Partners } from '_partnersLogo/partners';
import { Events } from '_events/events';
import { News } from '_news/news';
import { About } from '_about/about';
import { Main } from '_main/main';
import { Auth } from '_authorization/authorization';
import { Route, Redirect, Switch } from 'react-router';

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/news" component={News} />
        <Route exact={true} path="/events" component={Events} />
        <Route exact={true} path="/partners" component={Partners} />
        <Route exact={true} path="/authorization" component={Auth} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
};

export default App;
