import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfileNav from './ProfileNav';
describe('ProfileNav', () => {
  it('renders ProfileNav', () => {
    render(<ProfileNav />);
    expect(screen.getByText('')).not.toBe(null);
  });
});
