import React from 'react';
import { render, screen } from '@testing-library/react';

import EmployerSignUp3 from './EmployerSignUp3';
describe('EmployerSignUp3', () => {
  it('renders EmployerSignUp3', () => {
    render(<EmployerSignUp3 />);
    // expect(screen.getByText('EmployerSignUp3 works!')).not.toBe(null);
  });
});
