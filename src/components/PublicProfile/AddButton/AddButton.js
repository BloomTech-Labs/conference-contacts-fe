import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useNavigate } from '@reach/router';
import { useAuth0 } from '../../../react-auth0-spa.js';
import gql from 'graphql-tag';



const AddButton  = ({params}) => {
   //Auth0 instance for redirection
   const { loginWithRedirect } = useAuth0();

    //Reach Router Hook to navigate to different page
    const navigate = useNavigate();
    
    //ApolloCache Client
    const client = useApolloClient();
    
    //queries the Apollo client cache to see if user is logged in
    const {isLoggedIn} = client.readQuery({
        query: gql`
            query ReadLoggedIn {
                isLoggedIn @client
            }
        `
    });

    //Btn OnClickHandler
    const connectUser = async () => {
        

        //creates session storage with param id or profile id
        sessionStorage.setItem('isProfileId', params.id);

        //checks if user is logged in
        if(isLoggedIn){
            //navigates to home/dashboard page
            navigate('/');
        }else{
            //redirects to Auth0 Login/Registration page
            loginWithRedirect();
        }
        
    }

    console.log(client.cache.data);

    return(
        <div className="flex justify-center">
            {isLoggedIn &&
            <button className="mobile:w-2/3 rounded-full my-12 px-16 bg-purple-700 text-white w-2/5 py-1" onClick={connectUser}>Send Request</button> 
            }

            {!isLoggedIn && 
                <button className="mobile:w-2/3 rounded-full my-12 px-16 bg-purple-700 text-white w-2/5 py-1" onClick={connectUser}>Sign In/Join to Send Request</button>
            } 
        </div>
    )
}

export default AddButton;