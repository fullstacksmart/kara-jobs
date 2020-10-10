import React from 'react';
import {render, screen } from '@testing-library/react';

import Router from './Router';
describe('Router', () => {
  it('renders Router', () => {
    render(<Router />);
    expect(screen.getByText('Router works!')).not.toBe(null);
  })
})
