import React from 'react';
import {render, screen } from '@testing-library/react';

import Success from './Success';
describe('Success', () => {
  it('renders Success', () => {
    render(<Success />);
    expect(screen.getByText('Success works!')).not.toBe(null);
  })
})
