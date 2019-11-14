import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "./react-auth0-spa";
import PrivateRouteNarBar from "./Components/Utils/PrivateRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './Components/Profile';
import PrivateRoute from "./Components/PrivateRoutes";
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
        <PrivateRoute path="/profile" component={Profile} />
      </header>
      <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
