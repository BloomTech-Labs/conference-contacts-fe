import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from '../components/NavBar';
import Profile from '../features/profile/Profile';
import Settings from '../features/settings/Settings';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar className='sticky top-0' />
      </header>

      <Switch>
        <Route path="/" exact render={() => <div>Home</div>} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}

export default App;
