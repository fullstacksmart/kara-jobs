import React from 'react';
import { render, screen } from '@testing-library/react';

import TalentRegistration from './TalentRegistration';
describe('TalentRegistration', () => {
  it('renders TalentRegistration', () => {
    render(<TalentRegistration />);
    expect(screen.getByText('TalentRegistration works!')).not.toBe(null);
  });
});
