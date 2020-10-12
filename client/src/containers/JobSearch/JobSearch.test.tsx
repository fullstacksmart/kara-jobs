import React from 'react';
import {render, screen } from '@testing-library/react';

import JobSearch from './JobSearch';
describe('JobSearch', () => {
  it('renders JobSearch', () => {
    render(<JobSearch />);
    expect(screen.getByText('JobSearch works!')).not.toBe(null);
  })
})
