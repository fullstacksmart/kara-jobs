import React from 'react';
import { render, screen } from '@testing-library/react';

import StyledLink from './StyledLink';
describe('StyledLink', () => {
  it('renders StyledLink', () => {
    render(<StyledLink />);
    expect(screen.getByText('')).not.toBe(null);
  });
});
