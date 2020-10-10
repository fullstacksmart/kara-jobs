import React from 'react';
import {render, screen } from '@testing-library/react';

import GoogleLogin from './GoogleLogin';
describe('GoogleLogin', () => {
  it('renders GoogleLogin', () => {
    render(<GoogleLogin />);
    expect(screen.getByText('GoogleLogin works!')).not.toBe(null);
  })
})
