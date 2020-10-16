import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TextLink from './TextLink';
describe('TextLink', () => {
  it('renders TextLink', () => {
    render(
      <BrowserRouter>
        <TextLink text="test" to="#" />
      </BrowserRouter>,
    );
    //expect(screen.getByText('TextLink works!')).not.toBe(null);
  });
});
