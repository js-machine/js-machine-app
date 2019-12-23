import React, { useMemo } from 'react';

import './firebase.conf';
import { theme } from './theme';
import { DynamicNavBar } from './components/NavBar';
import { Events } from './scenes/communityEvents/CommunityEvents';
import { News } from './scenes/news/News';
import { About } from './scenes/about/About';
import { Main } from './scenes/main/Main';
import { Digest } from './scenes/digest';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Authorization } from './scenes/authorization/Authorization';
import { Route, Redirect, Switch, Router } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { Snowflakes } from './components/Snowflakes';

import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import { syncHistoryWithStore } from 'mobx-react-router';
import { useStores } from './stores';

const browserHistory = createBrowserHistory();

export const App: React.FC = observer(() => {
  const { routerStore } = useStores();

  const history = useMemo(
    () => syncHistoryWithStore(browserHistory, routerStore),
    [routerStore],
  );

  return (
    <ThemeProvider theme={theme}>
        <Router history={history}>
        <Snowflakes/>
          <SnackbarProvider maxSnack={3}>
            <DynamicNavBar />
            <ErrorBoundary>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/news" component={News} />
                <Route exact path="/digest/:id" component={Digest} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/authorization" component={Authorization} />
                <Redirect to="/" />
              </Switch>
            </ErrorBoundary>
          </SnackbarProvider>
        </Router>
    </ThemeProvider>
  );
});
