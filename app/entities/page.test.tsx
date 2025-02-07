import { render, screen } from '@testing-library/react';

import Page from './page';

test('Page', () => {
  render(<Page />);
  expect(screen.getAllByRole('link', { name: /entity/i })).toBeDefined();
});
