import React from 'react';
import { render, cleanup } from '../../testing-utils.js';
import Loading from '../NavBar';
describe('Loading', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it('renders without error', () => {
    render(<Loading />);
  });
});