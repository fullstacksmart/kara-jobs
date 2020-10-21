import React from 'react';
import {render, screen } from '@testing-library/react';

import RadioInputHorizontal from './RadioInputHorizontal';
describe('RadioInputHorizontal', () => {
  it('renders RadioInputHorizontal', () => {
    render(<RadioInputHorizontal />);
    expect(screen.getByText('RadioInputHorizontal works!')).not.toBe(null);
  })
})
