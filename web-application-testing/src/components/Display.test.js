import React from 'react';
import { render } from '@testing-library/react';
import { Display } from './Display';

test('Display test', () => {
  const { getByText } = render(<Display />);
  const strikesDisplayCheck = getByText(/strikes/i);
  const ballsDisplayCheck = getByText(/balls/i);

  expect(strikesDisplayCheck).toBeInTheDocument();
  expect(ballsDisplayCheck).toBeInTheDocument();
});