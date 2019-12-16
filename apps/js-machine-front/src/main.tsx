import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import * as serviceWorker from './serviceWorker';
import { App } from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: registration => {
    if (registration.waiting) {
      // update service worker
      // user have to reload page to use new version
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
