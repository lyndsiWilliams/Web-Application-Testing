import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('checks how many times "strike" is displayed in Dashboard', () => {
  const { getAllByText } = render(<Dashboard />);
  const strikeDashboardCheck = getAllByText(/strike/i);
  expect(strikeDashboardCheck).toHaveLength(2);
});