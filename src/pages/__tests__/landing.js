import React from 'react';

import { renderApollo, cleanup } from '../../test-utils';
import { useAuth0 } from '../../react-auth0-spa';
import Landing from '../landing';

jest.mock('../../react-auth0-spa');

describe('Landing Page', () => {
  afterEach(cleanup);

  it('renders landing page', () => {
    useAuth0.mockImplementation(() => ({ loginWithRedirect: jest.fn() }));
    renderApollo(<Landing />);
  });
});
