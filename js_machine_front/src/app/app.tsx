import React from 'react';
import './styles/app.css';
import { NavBar } from 'navBar/navBar';
import { Partners } from 'partnersLogo/partners';
import { Events } from 'communityEvents/communityEvents';
import { News } from 'news/news';
import { About } from 'about/about';
import { Main } from 'main/main';
import { Auth } from 'authorization/authorization';
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
