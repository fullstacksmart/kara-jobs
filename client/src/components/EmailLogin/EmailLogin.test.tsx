import React from 'react';
import {render, screen } from '@testing-library/react';

import EmailLogin from './EmailLogin';
describe('EmailLogin', () => {
  it('renders EmailLogin', () => {
    render(<EmailLogin />);
    expect(screen.getByText('EmailLogin works!')).not.toBe(null);
  })
})
