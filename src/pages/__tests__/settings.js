import React from 'react';

import { renderApollo, cleanup, waitForElement } from '../../test-utils';
import Settings from '../settings';
import { FETCH_USER_PROFILE } from '../../queries/index';

const mockUser = {
  __typename: 'User',
  id: 1,
  name: 'Tasha Salad',
  picture: 'https://www.out.com/sites/out.com/files/2018/04/13/image3_copy_2.jpg',
  bio: 'A salad is not a meal. It is a style.',
  birthdate: 'Lunch',
  jobtitle: 'Nutrition Specialist',
  gender: 'NONBINARY',
  industry: 'Food & Service ;)',
  profile: [
    {
      __typename: 'ProfileField',
      id: 1,
      value: 'tasha.salad@lifesum.com',
      type: 'EMAIL',
      privacy: 'PUBLIC',
      preferredContact: true
    }
  ]
};

describe('Settings Page', () => {
  afterEach(cleanup);

  it('renders settings', async () => {
    const mocks = [
      {
        request: { query: FETCH_USER_PROFILE },
        result: { data: { user: mockUser } }
      }
    ];

    window.cloudinary = { createUploadWidget: jest.fn() };

    const { getByDisplayValue } = await renderApollo(<Settings />, { mocks });

    await waitForElement(() => getByDisplayValue('Tasha Salad'));
  });
});
