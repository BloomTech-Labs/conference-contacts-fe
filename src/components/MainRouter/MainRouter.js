import React from 'react';
import {Router} from '@reach/router';

//components
import PrivateRoute from './PrivateRoute';
import Pages from '../../pages';
import Landing from '../../pages/landing';


const MainRouter = () => {
    return(
        <>
        <Router>
            <PrivateRoute path='/'>
                <Pages path='/*' />
            </PrivateRoute>
            <Landing default/>
        </Router>
        </>
    );
}

export default MainRouter;