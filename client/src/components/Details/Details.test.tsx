import React from 'react';
import { render } from '@testing-library/react';

import Details from './Details';
describe('Details', () => {
  it('renders Details', () => {
    render(<Details />);
    //expect(screen.getByText('Details works!')).not.toBe(null);
  });
});
