import React from 'react';
import {render, screen } from '@testing-library/react';

import EmployerSignUp2 from './EmployerSignUp2';
describe('EmployerSignUp2', () => {
  it('renders EmployerSignUp2', () => {
    render(<EmployerSignUp2 />);
    expect(screen.getByText('EmployerSignUp2 works!')).not.toBe(null);
  })
})
