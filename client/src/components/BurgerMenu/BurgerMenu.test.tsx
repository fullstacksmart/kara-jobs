import React from 'react';
import {render, screen } from '@testing-library/react';

import BurgerMenu from './BurgerMenu';
describe('BurgerMenu', () => {
  it('renders BurgerMenu', () => {
    render(<BurgerMenu />);
    expect(screen.getByText('BurgerMenu works!')).not.toBe(null);
  })
})
