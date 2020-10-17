import React from 'react';
import { render, screen } from '@testing-library/react';

import EmployerSignUp5 from './EmployerSignUp5';
describe('EmployerSignUp5', () => {
  it('renders EmployerSignUp5', () => {
    render(<EmployerSignUp5 />);
    // expect(screen.getByText('EmployerSignUp5 works!')).not.toBe(null);
  });
});
