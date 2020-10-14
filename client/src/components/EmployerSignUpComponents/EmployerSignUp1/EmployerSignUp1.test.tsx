import React from 'react';
import {render, screen } from '@testing-library/react';

import EmployerSignUp1 from './EmployerSignUp1';
describe('EmployerSignUp1', () => {
  it('renders EmployerSignUp1', () => {
    render(<EmployerSignUp1 />);
    expect(screen.getByText('EmployerSignUp1 works!')).not.toBe(null);
  })
})
