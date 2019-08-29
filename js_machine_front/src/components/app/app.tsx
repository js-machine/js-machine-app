import React from 'react';
import './styles/app.css';
import { NavBar } from 'components/navBar/navBar';
import { Partners } from 'scenes/partnersLogo/partners';
import { Events } from 'scenes/communityEvents/communityEvents';
import { News } from 'scenes/news/news';
import { About } from 'scenes/about/about';
import { Main } from 'scenes/main/main';
import { DigestView } from 'scenes/digestView/digestView';
import { ErrorBoundary } from 'components/navBar/error-boundary/error-boundary';
import { Authorization } from 'scenes/authorization/authorization';
import { Route, Redirect, Switch } from 'react-router';

// Internationalization
import { messages } from 'i18n/messages';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { addLocaleData, IntlProvider } from 'react-intl';

addLocaleData([...en, ...ru]);

const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  'en-US';

const App: React.FC = () => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="app">
        <NavBar />
        <ErrorBoundary>
          <Switch>
            <Route exact={true} path="/" component={Main} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/news" component={News} />
            <Route exact={true} path="/events" component={Events} />
            <Route exact={true} path="/partners" component={Partners} />
            <Route exact={true} path="/authorization" component={Authorization} />
            <Route exact={true} path="/digestview" component={DigestView} />
            <Redirect to={'/'} />
          </Switch>
        </ErrorBoundary>
      </div>
    </IntlProvider>
  );
};

export default App;
