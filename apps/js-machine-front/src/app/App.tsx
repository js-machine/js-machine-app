import React, { useMemo } from 'react';
import './App.css';

import './firebase.conf';
import { NavBar } from './components/NavBar';
// import { Partners } from './scenes/partnersLogo/Partners';
import { Events } from './scenes/communityEvents/CommunityEvents';
import { News } from './scenes/news/News';
import { About } from './scenes/about/About';
import { Main } from './scenes/main/Main';
import { Digest } from './scenes/digest';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Authorization } from './scenes/authorization/Authorization';
import { Route, Redirect, Switch, Router } from 'react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

// Internationalization
import { intl } from './i18n/messages';
import { RawIntlProvider } from 'react-intl';
import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import { syncHistoryWithStore } from 'mobx-react-router';
import { useStore } from './stores';

const theme = createMuiTheme();

const browserHistory = createBrowserHistory();

export const App: React.FC = observer(() => {
  const { routerStore } = useStore();

  const history = useMemo(
    () => syncHistoryWithStore(browserHistory, routerStore),
    [routerStore],
  );

  return (
    <ThemeProvider theme={theme}>
      <RawIntlProvider value={intl}>
        <Router history={history}>
          <SnackbarProvider maxSnack={3}>
            {/* {authStore.user !== undefined && ( */}
            <div className="app">
              <NavBar />
              <ErrorBoundary>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/news" component={News} />
                  <Route exact path="/events" component={Events} />
                  {/* <Route exact path="/partners" component={Partners} /> */}
                  <Route
                    exact
                    path="/authorization"
                    component={Authorization}
                  />
                  <Route exact path="/digest/:id" component={Digest} />
                  <Redirect to={'/'} />
                </Switch>
              </ErrorBoundary>
            </div>
            {/* )} */}
          </SnackbarProvider>
        </Router>
      </RawIntlProvider>
    </ThemeProvider>
  );
});
