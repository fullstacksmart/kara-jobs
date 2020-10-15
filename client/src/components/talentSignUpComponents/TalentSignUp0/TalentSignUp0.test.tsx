import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TalentSignUp0 from './TalentSignUp0';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

it('renders labels', () => {
  render(<TalentSignUp0 />);
  expect(screen.getByTestId('firstName')).not.toBe(null);
  expect(screen.getByTestId('lastName')).not.toBe(null);
});

it('accesses sessionStorage', () => {
  expect(sessionStorage.getItem).toHaveBeenCalled;
});

it('user can fill out form and post to DB on submit', () => {
  sessionStorage.setItem(
    'talent',
    JSON.stringify({
      uid: '123',
      email: 'test@test.com',
      onboarding_page: 0,
    }),
  );
  render(
    <BrowserRouter>
      <TalentSignUp0 />
    </BrowserRouter>,
  );
  userEvent.type(screen.getByTestId('firstName'), 'Max');
  userEvent.type(screen.getByTestId('lastName'), 'Mustermann');

  fireEvent.blur(screen.getByTestId('firstName'));
  fireEvent.blur(screen.getByTestId('lastName'));

  userEvent.click(screen.getByText(/weiter/i));

  expect(JSON.parse(sessionStorage.__STORE__.talent).firstName).toBe('Max');
  expect(JSON.parse(sessionStorage.__STORE__.talent).lastName).toBe(
    'Mustermann',
  );
});
