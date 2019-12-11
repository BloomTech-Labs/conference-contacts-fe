import React from 'react';

import { renderApollo, cleanup, waitForElement, act, fireEvent } from '../../test-utils';
import { InMemoryCache, gql } from 'apollo-boost';
import { useAuth0 } from '../../react-auth0-spa';
import { NAVBAR_PROFILE } from '../../queries';
import NavBar from '../navbar';

const mockUser = {
  __typename: 'User',
  id: 1,
  name: 'Jarvise',
  picture: 'https://vignette.wikia.nocookie.net/berserk/images/7/73/BTCG_Judeau.png'
};

jest.mock('../../react-auth0-spa');

describe('NavBar Container', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  useAuth0.mockImplementation(() => ({ logout: jest.fn() }));

  const mocks = [
    {
      request: { query: NAVBAR_PROFILE },
      result: { data: { user: mockUser } }
    }
  ];

  it('renders profile page', async () => {
    const { getByText } = renderApollo(<NavBar />, { mocks });

    // if the profile renders, it will have the list of missions booked
    await waitForElement(() => getByText(/Jarvise/i));
  });

  it('complete logout', async () => {
    const cache = new InMemoryCache();
    cache.writeData({ data: { isLoggedIn: true } });
    localStorage.setItem('token', 'testTokenValue');

    await act(async () => {
      const { getByTestId } = renderApollo(<NavBar />, { mocks, cache });
      fireEvent.click(await waitForElement(() => getByTestId('logout-button')));
    });

    // check to make sure the cache's contents have been updated
    const { isLoggedIn } = cache.readQuery({
      query: gql`
        query IsUserLoggedIn {
          isLoggedIn @client
        }
      `
    });

    expect(isLoggedIn).toBeFalsy();
    expect(localStorage.getItem('token')).toBeNull();
  });
});
