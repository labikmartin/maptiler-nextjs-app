import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Providers } from '@/app/providers';

import { EditEntityDialog } from './EditEntityDialog';

describe('EditEntityDialog', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    payload: {
      defaultValues: {
        name: 'Test',
        status: 'NEW',
      },
      entityId: '1',
    },
  } as const;

  it('renders with correct title', () => {
    render(<EditEntityDialog {...defaultProps} />, { wrapper: Providers });
    expect(screen.getByText(/edit entity/i)).toBeInTheDocument();
  });

  it('renders form with inputs', () => {
    render(<EditEntityDialog {...defaultProps} />, { wrapper: Providers });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /status/i }),
    ).toBeInTheDocument();
  });
});
