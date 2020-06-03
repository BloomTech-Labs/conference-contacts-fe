import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import NavBar from '../containers/navbar';
import Profile from './App/profile';
import ProfileEdit from './App/profile-edit';
import Home from './App/home';
import Contacts from './App/contacts';
import ScanQr from './App/scanqr';

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
            <ProfileEdit path="profile/edit" />
            <Contacts path="contacts" />
          
            {/* <Settings path="settings" /> */}
            <ScanQr path="scanqr" />
          </Router>
        </div>
      </div>
    </Fragment>
  );
}
