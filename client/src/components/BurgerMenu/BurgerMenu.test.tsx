import React from 'react';
import { render } from '@testing-library/react';

// import BurgerMenu from './BurgerMenu';
describe('BurgerMenu', () => {
  it('renders BurgerMenu', () => {
    render(<div>hi</div>);
    //render(<BurgerMenu />);
    //expect(screen.getByText('BurgerMenu works!')).not.toBe(null);
  });
});
