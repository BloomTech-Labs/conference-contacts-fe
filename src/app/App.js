import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Users from '../components/Users';

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
        <Route path="/" exact render={() => <div>Home</div>} />
        {/* <Route path="/users" exact component={Users} /> */}
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
