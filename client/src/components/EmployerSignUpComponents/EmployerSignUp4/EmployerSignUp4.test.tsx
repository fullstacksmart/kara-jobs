import React from 'react';
import {render, screen } from '@testing-library/react';

import EmployerSignUp4 from './EmployerSignUp4';
describe('EmployerSignUp4', () => {
  it('renders EmployerSignUp4', () => {
    render(<EmployerSignUp4 />);
    expect(screen.getByText('EmployerSignUp4 works!')).not.toBe(null);
  })
})
