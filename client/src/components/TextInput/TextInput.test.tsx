import React from 'react';
import { render, screen } from '@testing-library/react';

import TextInput from './TextInput';
describe('TextInput', () => {
  it('renders TextInput', () => {
    render(<TextInput />);
    expect(screen.getByText('TextInput works!')).not.toBe(null);
  })
})
