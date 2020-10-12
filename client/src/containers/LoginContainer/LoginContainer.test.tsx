import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginContainer from './LoginContainer';
describe('LoginContainer', () => {
  it('renders LoginContainer', () => {
    render(<LoginContainer />);
    expect(screen.getByText('LoginContainer works!')).not.toBe(null);
  })
})
