import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Providers } from '@/app/providers';

import { CreateEntityDialog } from './CreateEntityDialog';

describe('CreateEntityDialog', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    payload: undefined,
  };

  it('renders with correct title', () => {
    render(<CreateEntityDialog {...defaultProps} />, { wrapper: Providers });
    expect(screen.getByText(/create new entity/i)).toBeInTheDocument();
  });

  it('renders form with inputs', () => {
    render(<CreateEntityDialog {...defaultProps} />, { wrapper: Providers });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /status/i }),
    ).toBeInTheDocument();
  });
});
