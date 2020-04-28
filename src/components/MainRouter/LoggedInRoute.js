import React from 'react';

//components
import BeatLoader from 'react-spinners/BeatLoader';
import Landing from '../../pages/landing';

const LoggedInRoute = ({ component: Component, ...rest }) => {
  // site loading logic, if checks are not passed it returns Landing, else it waits for User to load to return <Component />
  function ifstat() {
    if (rest.data) {
      if (!rest.trackUserCreation) {
        return (
          <div className="flex justify-center h-screen items-center">
            <BeatLoader size={35} loading={!rest.trackUserCreation} color="#7B41FF" />
          </div>
        );
      } else {
        return <Component {...rest} />;
      }
    } else {
      return <Landing />;
    }
  }

  return ifstat();
};
export default LoggedInRoute;
