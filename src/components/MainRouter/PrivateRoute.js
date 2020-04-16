import React from 'react';
import { Redirect } from '@reach/router';
// auth0 imports

// react loading animation
import BeatLoader from 'react-spinners/BeatLoader';
import Landing from '../../pages/landing';



const PrivateRoute = ({component: Component, ...rest}) => {

    return(
        <>
            {(rest.data && !rest.trackUserCreation) &&
                <div className="flex justify-center h-screen items-center">
                    <BeatLoader size={35} loading={!rest.trackUserCreation} color="#7B41FF" />
                </div>
             }

            {(rest.data && rest.trackUserCreation)   
                ? <Component {...rest} /> 
                : <Landing />
            }
        </>
    )
}
export default PrivateRoute;