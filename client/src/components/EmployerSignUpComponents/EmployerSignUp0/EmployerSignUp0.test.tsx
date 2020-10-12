import React from 'react';
import {render, screen } from '@testing-library/react';

import EmployerSignUp0 from './EmployerSignUp0';
describe('EmployerSignUp0', () => {
  it('renders EmployerSignUp0', () => {
    render(<EmployerSignUp0 />);
    expect(screen.getByText('EmployerSignUp0 works!')).not.toBe(null);
  })
})
