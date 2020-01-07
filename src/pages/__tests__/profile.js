import React from 'react';

import { renderApollo, cleanup, waitForElement } from '../../test-utils';
import Profile from '../profile';
import { FETCH_USER_PROFILE } from '../../queries';

const mockUser = {
  __typename: 'User',
  id: 1,
  name: 'Jonny',
  picture: 'https://i.imgur.com/HOfXfTX.png',
  bio: 'I like looking behind me',
  birthdate: 'long ago',
  jobtitle: 'sausage fudge packer',
  gender: 'MALE',
  industry: 'HR',
  profile: [
    {
      __typename: 'ProfileField',
      id: 1,
      value: '',
      type: 'EMAIL',
      privacy: 'PRIVATE',
      preferredContact: true
    }
  ]
}

describe('Profile Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders profile page', async () => {
    const mocks = [
      {
        request: { query: FETCH_USER_PROFILE },
        result: { data: { user: mockUser } }
      }
    ];

    const { getByText } = renderApollo(<Profile />, { mocks });

    // if the profile renders, it will have the list of missions booked
    await waitForElement(() => getByText('Jonny'));
  });
});
