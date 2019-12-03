import React from 'react';
import ReactGA from 'react-ga';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from '../components/NavBar';
import Profile from '../features/profile/Profile';
// import Users from '../components/Users';

function initizeAnalytics() {
  ReactGA.initialize('UA-152876258-1');
  ReactGA.pageview('/Homepage');
}

function App() {
  initizeAnalytics();
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
