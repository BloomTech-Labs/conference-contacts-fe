import React from 'react';

//components
import BeatLoader from 'react-spinners/BeatLoader';
import Landing from '../../pages/landing';

const LoggedInRoute = ({component: Component, ...rest}) => {

    return(
        <>
            {/* Checks if user is logged in and a user created is true */}
            {(rest.data && !rest.trackUserCreation) &&
                // Shows Loading "spinner"
                <div className="flex justify-center h-screen items-center">
                    <BeatLoader size={35} loading={!rest.trackUserCreation} color="#7B41FF" />
                </div>
             }

            {/* If user loggedin/authenticated, will send to Component Route else redirects to Landing page. */}
            {(rest.data && rest.trackUserCreation)   
                ? <Component {...rest} /> 
                : <Landing />
            }
        </>
    )
}
export default LoggedInRoute;