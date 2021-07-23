import * as ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './testing/reportWebVitals';
import * as Sentry from '@sentry/react';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://0d9405985950423baff935f57b1e8eab@o387782.ingest.sentry.io/5855191',
    release: process.env.REACT_APP_CLIENT_VERSION,
    tracesSampleRate: 1.0
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
