import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Main } from './Main';
import { About } from './About';
import { News } from './News';
import { Events } from './Events';
import { Partners } from './Partners';
import { memo } from 'react';

export const Routes: React.FC = memo(() => {

  return (
    <div>
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
});
