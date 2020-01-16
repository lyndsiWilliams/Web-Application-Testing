import React from 'react';
import { render } from '@testing-library/react';
import { Display } from './Display';

test('checks that "strike" and "ball" are displayed in Display', () => {
  const { getByText } = render(<Display />);
  const strikesDisplayCheck = getByText(/strikes/i);
  const ballsDisplayCheck = getByText(/balls/i);

  expect(strikesDisplayCheck).toBeInTheDocument();
  expect(ballsDisplayCheck).toBeInTheDocument();
});