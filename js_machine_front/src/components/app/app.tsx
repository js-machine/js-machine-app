import React from 'react';
import './styles/app.css';
import { NavBar } from 'components/navBar/navBar';
import { Partners } from 'scenes/partnersLogo/partners';
import { Events } from 'scenes/communityEvents/communityEvents';
import { News } from 'scenes/news/news';
import { About } from 'scenes/about/about';
import { Main } from 'scenes/main/main';
import { Digest } from 'scenes/digest';
import { ErrorBoundary } from 'components/navBar/error-boundary/error-boundary';
import { Authorization } from 'scenes/authorization/authorization';
import { Route, Redirect, Switch } from 'react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Internationalization
import { messages } from 'i18n/messages';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { addLocaleData, IntlProvider } from 'react-intl';

addLocaleData([...en, ...ru]);

const locale = 'ru-RU';

const theme = createMuiTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="app">
          <NavBar />
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
              <Route exact path="/news" component={News} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/partners" component={Partners} />
              <Route exact path="/authorization" component={Authorization} />
              <Route exact path="/digest" component={Digest} />
              <Redirect to={'/'} />
            </Switch>
          </ErrorBoundary>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
