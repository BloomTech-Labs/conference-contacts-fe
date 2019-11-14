import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "./react-auth0-spa";
import PrivateRouteNarBar from "./Components/Utils/PrivateRouteNarBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './Components/Profile';
import PrivateRoute from "./Components/PrivateRoutes";
import ExternalApi from "./views/ExternalApi";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PrivateRouteNarBar />
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
      </header>
      <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
