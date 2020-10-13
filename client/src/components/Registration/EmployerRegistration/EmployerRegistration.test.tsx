import React from 'react';
import { render, screen } from '@testing-library/react';

import EmployerRegistration from './EmployerRegistration';
describe('EmployerRegistration', () => {
  it('renders EmployerRegistration', () => {
    render(<EmployerRegistration />);
    expect(screen.getByText('EmployerRegistration works!')).not.toBe(null);
  })
})
