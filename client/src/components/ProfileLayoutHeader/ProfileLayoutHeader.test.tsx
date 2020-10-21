import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfileLayoutHeader from './ProfileLayoutHeader';
describe('ProfileLayoutHeader', () => {
  it('renders ProfileLayoutHeader', () => {
    render(<ProfileLayoutHeader />);
    expect(screen.getByText('')).not.toBe(null);
  });
});
