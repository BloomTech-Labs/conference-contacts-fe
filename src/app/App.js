import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from '../Components/NavBar';
import Profile from '../Components/Profile';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
