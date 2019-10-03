import React, { useMemo } from 'react';
import './styles/app.css';
import 'firebase.conf';
import { NavBar } from 'components/navBar/navBar';
import { Partners } from 'scenes/partnersLogo/partners';
import { Events } from 'scenes/communityEvents/communityEvents';
import { News } from 'scenes/news/news';
import { About } from 'scenes/about/about';
import { Main } from 'scenes/main/main';
import { Digest } from 'scenes/digest';
import { ErrorBoundary } from 'components/navBar/error-boundary/error-boundary';
import { Authorization } from 'scenes/authorization/authorization';
import { Route, Redirect, Switch, Router } from 'react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

// Internationalization
import { messages } from 'i18n/messages';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { addLocaleData, IntlProvider } from 'react-intl';
import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import { syncHistoryWithStore } from 'mobx-react-router';
import { useStore } from 'stores';

addLocaleData([...en, ...ru]);

const locale = 'ru-RU';

const theme = createMuiTheme();

const browserHistory = createBrowserHistory();

const App: React.FC = observer(() => {
  const { authStore, routerStore } = useStore();

  const history = useMemo(
    () => syncHistoryWithStore(browserHistory, routerStore),
    [routerStore],
  );

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router history={history}>
          <SnackbarProvider maxSnack={3}>
            {authStore.user !== undefined && (
              <div className="app">
                <NavBar />
                <ErrorBoundary>
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/events" component={Events} />
                    <Route exact path="/partners" component={Partners} />
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
            )}
          </SnackbarProvider>
        </Router>
      </IntlProvider>
    </ThemeProvider>
  );
});

export default App;
