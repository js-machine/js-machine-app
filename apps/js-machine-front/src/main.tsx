import React from 'react';
import ReactDOM from 'react-dom';

// Internationalization
import { RawIntlProvider } from 'react-intl';
import { intl } from './app/i18n/messages';

import './main.css';
import * as serviceWorker from './serviceWorker';
import { App } from './app/App';
import { UpdateNotification } from './app/components/UpdateNotification';

ReactDOM.render(
  <RawIntlProvider value={intl}>
    <App />
  </RawIntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: registration => {
    if (registration.waiting) {
      // update service worker
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });

      ReactDOM.render(
        <RawIntlProvider value={intl}>
          <UpdateNotification />
        </RawIntlProvider>,
        document.getElementById('jsm-snackbar'),
      );
    }
  },
});
