import React from 'react';
import './App.css';
import { NavBar } from 'components/Routes/NavBar';
import { Partners } from 'components/Partners';
import { Events } from 'components/Events';
import { News } from 'components/News';
import { About } from 'components/About';
import { Main } from 'components/Main';
import { Route, Redirect, Switch } from 'react-router';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/news" component={News} />
        <Route exact={true} path="/events" component={Events} />
        <Route exact={true} path="/partners" component={Partners} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
};

export default App;
