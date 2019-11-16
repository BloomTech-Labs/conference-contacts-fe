import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <span>
        <NavLink to="/">Home</NavLink>&nbsp;
        <NavLink to="/profile">Profile</NavLink>
      </span>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      ) : (
        <>
          <button onClick={() => logout()}>Log out</button>
        </>
      )}
    </div>
  );
};

export default NavBar;
