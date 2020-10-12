import React from 'react';
import { render, screen } from '@testing-library/react';

import Providers from './Providers';
describe('Providers', () => {
  it('renders Providers', () => {
    render(<Providers />);
    expect(screen.getByText('Providers works!')).not.toBe(null);
  });
});
