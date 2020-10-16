import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';
describe('TextInput', () => {
  it('renders TextInput', () => {
    render(<TextInput labelText="test" id="id" />);
    //expect(screen.getByText('TextInput works!')).not.toBe(null);
  });
});
