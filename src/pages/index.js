import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import NavBar from '../containers/navbar';
import Profile from './profile';
import ProfileEdit from './profile-edit';
// import Home from './home';
import ScanQr from './scanqr';
import ReadQr from './readqr';

export default function Pages() {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Profile path="/" />
        <Profile path="profile" />
        <ProfileEdit path="profile/edit" />
        <ScanQr path="scanqr" />
        <ReadQr path="readqr" />
      </Router>
    </Fragment>
  );
}
