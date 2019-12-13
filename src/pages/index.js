import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import NavBar from '../containers/navbar';
import Profile from './profile';
import Settings from './settings';
import Home from './home';
import Landing from './landing'

// const Home = () => <p>Home Page</p>;

export default function Pages() {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Home path="/" />
        <Profile  path="profile" />
        <Landing path="landing" />
        <Settings path="settings" />
      </Router>
    </Fragment>
  );
}
