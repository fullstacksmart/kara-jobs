import React from 'react';
import { render, screen } from '@testing-library/react';

import TextLink from './TextLink';
describe('TextLink', () => {
  it('renders TextLink', () => {
    render(<TextLink />);
    expect(screen.getByText('TextLink works!')).not.toBe(null);
  })
})
