import * as ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './testing/reportWebVitals';
import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_CLIENT_APP_VERSION
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
