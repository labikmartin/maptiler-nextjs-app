import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CreateEntityDialog } from './CreateEntityDialog';

describe('CreateEntityDialog', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    payload: undefined,
  };

  it('renders with correct title', () => {
    render(<CreateEntityDialog {...defaultProps} />);
    expect(screen.getByText(/create new entity/i)).toBeInTheDocument();
  });
});
