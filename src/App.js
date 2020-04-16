import React, { useState, useEffect } from 'react';

// apollo imports
import { gql } from 'apollo-boost';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { CREATE_QRCODE } from './queries/index';

// auth0 imports
import { useAuth0 } from './react-auth0-spa';

// component imports
import MainRouter from './components/MainRouter/MainRouter';
//import Pages from './pages';
//import Landing from './pages/landing';

// react loading animation
//import BeatLoader from 'react-spinners/BeatLoader';

// App component Start
export default function App(props) {
  // access apollo client
  const client = useApolloClient();

  // access to useAuth0
  const { user } = useAuth0();

  //qrCode init, and CreateQRCode mutation | creates a qrCode if the user doesn't have one
  const [qrCode, setQRCode] = useState();
  const [trackUserCreation, setUserCreation] = useState(false);
  const [createQRCode] = useMutation(CREATE_QRCODE, {
    variables: { label: 'homepage' },
    onCompleted: qrcData => {
      localStorage.setItem('qrCode', qrcData.createQRCode.qrcode.id);
      return setQRCode(qrcData.createQRCode.qrcode.id);
    }
  });

  //function to create a qrCode
  const createQRCodeMutationHandler = async () => {
    // creates a qrCode if the user already has one
    if (localStorage.getItem('qrCode')) {
      const returningQRCode = localStorage.getItem('qrCode');
      return setQRCode(returningQRCode);
    } else {
      await createQRCode({ variables: { label: 'homepage' } });
    }
  };

  // make gql query
  const query = gql`
    query IsUserLoggedIn {
      isLoggedIn
    }
  `;

  // CALL query to get if user is logged in
  const data = client.readQuery({ query });

  // isLoggedIn set to True
  const isLoggedInStateHandler = () => {
    client.writeData({ data: { isLoggedIn: true } });
  };

  // CreateUser mutation, creates a user from auth0 user info
  const createUserMutationHandler = () => {
    client
      .mutate({
        mutation: gql`
          mutation CreateUser($user: CreateUserInput!) {
            createUser(data: $user) {
              success
            }
          }
        `,
        variables: {
          user: {
            name: user.name,
            picture: user.picture,
            email: user.email
          }
        }
      })
      .then(() => {
        // setusercreate
        setUserCreation(true);
        // creates qr code after user has been created
        createQRCodeMutationHandler();
      });
  };

  // run on page load and on user info change
  useEffect(() => {
    if (user) {
      isLoggedInStateHandler();

      createUserMutationHandler();
    }
  }, [user]);

  return(
    <MainRouter trackUserCreation={trackUserCreation} />
  );
  // if (data.isLoggedIn && trackUserCreation) {
  //   return <Pages />;
  // } else if (data.isLoggedIn && !trackUserCreation) {
  //   return (
  //     <div className="flex justify-center h-screen items-center">
  //       <BeatLoader size={35} loading={!trackUserCreation} color="#7B41FF" />
  //     </div>
  //   );
  // } else {
  //   return <Landing />;
  // }
  // return data.isLoggedIn ? <Pages qr={qrCode} /> : <Landing qr={qrCode} />;
}
