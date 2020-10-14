import React from 'react';
import { render, screen } from '@testing-library/react';
import TalentSignUp0 from './TalentSignUp0';
import userEvent from '@testing-library/user-event';

it('renders labels', () => {
  render(<TalentSignUp0 />);
  expect(screen.getByTestId('firstName')).not.toBe(null);
  expect(screen.getByTestId('lastName')).not.toBe(null);
});

it('user can fill out form and post to DB on submit', () => {
  // const postToDB = jest.fn()
  render(<TalentSignUp0 />);
  userEvent.type(screen.getByTestId('firstName'), 'Max');
  userEvent.type(screen.getByTestId('lastName'), 'Mustermann');

  userEvent.click(screen.getByText(/weiter/i));
});
