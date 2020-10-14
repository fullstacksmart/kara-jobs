import React from 'react';
import { render, screen } from '@testing-library/react';
import TalentSignUp0 from './TalentSignUp0';

describe('renders page', () => {
  it('renders labels', () => {
    render(<TalentSignUp0 />);
    expect(screen.getByText('Vorname')).not.toBe(null);
    expect(screen.getByText('Nachname')).not.toBe(null);
  });
});
