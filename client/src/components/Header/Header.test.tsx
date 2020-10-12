import React from 'react';
import {render, screen } from '@testing-library/react';

import Header from './Header';
describe('Header', () => {
  it('renders Header', () => {
    render(<Header />);
    expect(screen.getByText('Header works!')).not.toBe(null);
  })
})
