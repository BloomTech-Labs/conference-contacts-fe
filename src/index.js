import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from './react-auth0-spa';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import config from './auth_config.json';
import store from './app/store';
import './index.css';

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  );
};

const render = () => {
  const App = require('./app/App').default;

  ReactDOM.render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}
