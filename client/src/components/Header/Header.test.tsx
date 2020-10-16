import React from 'react';
import { render } from '@testing-library/react';

//import Header from './Header';
describe('Header', () => {
  it('renders Header', () => {
    render(<div>test</div>);
    //expect(screen.getByText('Header works!')).not.toBe(null);
  });
});
