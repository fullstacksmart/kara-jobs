import React from 'react';
import {render, screen } from '@testing-library/react';

import Login from './Login';
describe('Login', () => {
  it('renders Login', () => {
    render(<Login />);
    expect(screen.getByText('Login works!')).not.toBe(null);
  })
})
