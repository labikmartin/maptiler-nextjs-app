import { render, screen } from '@testing-library/react';

import { Providers } from '@/app/providers';

import EntitiesPage from './page';

test('EntitiesPage', async () => {
  render(<EntitiesPage />, { wrapper: Providers });
  expect(
    await screen.findByRole('button', { name: /create new entity/i }),
  ).toBeDefined();
});
