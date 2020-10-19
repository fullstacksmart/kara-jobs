import React from 'react';
import {render, screen } from '@testing-library/react';

import ProgressBar from './ProgressBar';
describe('ProgressBar', () => {
  it('renders ProgressBar', () => {
    render(<ProgressBar />);
    expect(screen.getByText('ProgressBar works!')).not.toBe(null);
  })
})
