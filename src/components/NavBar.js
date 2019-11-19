import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/users">Users</NavLink>
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
