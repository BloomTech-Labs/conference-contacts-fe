import React from 'react';

import { render, cleanup } from '../../test-utils';
import NavLink from '../navlink';

describe('Nav Link', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    render(<NavLink to="/wow" />);
  });
});