import React from 'react';

// auth0 imports
import { useAuth0 } from '../../react-auth0-spa';

import Landing from '../../pages/landing';

const PrivateRoute = (props) => {
    
    // access to useAuth0
    const { isAuthenticated } = useAuth0();

    console.log(isAuthenticated);

    if(isAuthenticated){
        return props.children
    }else{
       return <Landing  path='/*' />
    }

}

export default PrivateRoute;