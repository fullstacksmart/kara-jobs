import React from 'react';
import { render, screen } from '@testing-library/react';

import ButtonLink from './ButtonLink';
describe('ButtonLink', () => {
  it('renders ButtonLink', () => {
    render(<ButtonLink to="#" />);
    expect(screen.getByText('ButtonLink works!')).not.toBe(null);
  });
});
