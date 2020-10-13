import React from 'react';
import { render, screen } from '@testing-library/react';

import Registration from './Registration';
describe('Registration', () => {
  it('renders Registration', () => {
    render(
      <Registration kind="employer" heading="Blitzschnell zu Deinem Profil" />,
    );
    expect(screen.getByText('Registration works!')).not.toBe(null);
  });
});
