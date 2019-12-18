import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import NavBar from '../containers/navbar';
import Profile from './profile';
import ProfileEdit from './profile-edit';
import Home from './home';
import Settings from './settings'

export default function Pages() {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Home path="/" />
        <Profile path="profile" />
        <ProfileEdit path="profile/edit" />
        <Settings path ="settings" />
      </Router>
    </Fragment>
  );
}
