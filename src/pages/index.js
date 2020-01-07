import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import NavBar from '../containers/navbar';
import Profile from './profile';
import ProfileEdit from './profile-edit';
import Home from './home';
import Contacts from './contacts'
import ScanQr from './scanqr';
import ReadQr from './readqr';

export default function Pages() {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Home path="/" />
        <Profile  path="profile" />
        <Profile path="profile" />
        <ProfileEdit path="profile/edit" />
        <Contacts path='contacts' />
        <ScanQr path="scanqr" />
        <ReadQr path="readqr" />
      </Router>
    </Fragment>
  );
}
