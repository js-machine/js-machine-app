import React from 'react';
import './App.css';
import { NavBar } from 'components/NavBar';
import { Partners } from 'routes/Partners';
import { Events } from 'routes/Events';
import { News } from 'routes/News';
import { About } from 'routes/About';
import { Main } from 'routes/Main';
import Authorization from 'routes/Authorization';
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
        <Route exact={true} path="/authorization" component={Authorization} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
};

export default App;
