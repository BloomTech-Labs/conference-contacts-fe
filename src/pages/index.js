import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import NavBar from '../containers/navbar';
import NavComponent from '../components/Nav/navComponent';
import Profile from './profile';
import ProfileEdit from './profile-edit';
import Home from './home';
import Contacts from './contacts';
import ScanQr from './scanqr';
import ReadQr from './readqr';
import Messages from './messages';
import Settings from './settings';

export default function Pages(props) {
  return (
    <Fragment>
      <NavBar inHeader={true} />
      <div className="bg-gray-200">
        <div className="container mx-auto flex w-screen h-full desktop:min-h-screen justify-between">
          <NavBar inHeader={false} qr={props.qr} />
          <Router className="w-full">
            <Home path="/" qr={props.qr} />
            <Profile path="profile" />
            <Profile path="profile" />
            <ProfileEdit path="profile/edit" />
            <Contacts path="contacts" />
            {/* <Messages path="messages" /> */}
            {/* <Settings path="settings" /> */}
            <ScanQr path="scanqr" />
            {/* <ReadQr path="readqr" /> */}
          </Router>
        </div>
      </div>
    </Fragment>
  );
}
