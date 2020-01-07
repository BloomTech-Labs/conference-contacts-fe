import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import NavBar from '../containers/navbar';
import Profile from './profile';
import ProfileEdit from './profile-edit';
import Home from './home';
import Contacts from './contacts'
import ScanQr from './scanqr';
import ReadQr from './readqr';
import Messages from './messages';
import Settings from './settings';

export default function Pages() {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Home path="/" />
        <Profile  path="profile" />
        <Profile path="profile" />
        <ProfileEdit path="profile/edit" />
        <Settings path="settings" />
        <Contacts path='contacts' />
        <Messages path='messages' />
        <ScanQr path="scanqr" />
        <ReadQr path="readqr" />
      </Router>
    </Fragment>
  );
}
