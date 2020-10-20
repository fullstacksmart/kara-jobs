import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ButtonLink from './ButtonLink';
describe('ButtonLink', () => {
  it('renders ButtonLink', () => {
    render(
      <BrowserRouter>
        <ButtonLink to="#" />
      </BrowserRouter>,
    );
    //expect(screen.getByText('ButtonLink works!')).not.toBe(null);
  });
});
