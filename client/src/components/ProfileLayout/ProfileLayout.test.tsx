import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfileLayout from './ProfileLayout';
describe('ProfileLayout', () => {
  it('renders ProfileLayout', () => {
    render(<ProfileLayout nav="" main="" adds="" />);
    expect(screen.getByText('')).not.toBe(null);
  });
});
