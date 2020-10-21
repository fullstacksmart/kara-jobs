import React from 'react';
import { render, screen } from '@testing-library/react';

import Profile from './Profile';
describe('Profile', () => {
  it('renders Profile', () => {
    render(<Profile />);
    expect(screen.getByText('')).not.toBe(null);
  });
});
