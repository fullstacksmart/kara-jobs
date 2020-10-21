import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBox from './SearchBox';
describe('SearchBox', () => {
  it('renders SearchBox', () => {
    render(<SearchBox />);
    expect(screen.getByText('')).not.toBe(null);
  });
});
