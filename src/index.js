// scroll bar
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';
import 'simplebar/src/simplebar.css';
//
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </HelmetProvider>,
  document.getElementById('root'),
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
