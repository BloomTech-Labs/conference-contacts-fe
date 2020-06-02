import React from 'react';
import {gql} from 'apollo-boost';
import { useApolloClient } from '@apollo/react-hooks';
import {Router} from '@reach/router';

//components
import LoggedInRoute from './LoggedInRoute';
import Pages from '../../pages';
import PublicProfile from '../PublicProfile/PublicProfile';


const MainRouter = ({trackUserCreation}) => {
    // make gql query
    const query = gql`
    query IsUserLoggedIn {
        isLoggedIn
    }`;

    // access apollo client
    const client = useApolloClient();

    // CALL query to get if user is logged in
    const data = client.readQuery({ query });
    
    return(
        <>
        <Router>
            {/* Private Route */}
            <LoggedInRoute path='/*' data={data.isLoggedIn}  trackUserCreation={trackUserCreation} component={Pages} /> 
            <PublicProfile path='/card/:id'/>
        </Router>
        </>
    );
}

export default MainRouter;