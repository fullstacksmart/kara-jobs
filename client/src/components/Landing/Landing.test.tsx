import React from 'react';
import {render, screen } from '@testing-library/react';

import Landing from './Landing';
describe('Landing', () => {
  it('renders Landing', () => {
    render(<Landing />);
    expect(screen.getByText('Landing works!')).not.toBe(null);
  })
})
