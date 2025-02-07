import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { FormDialog } from './FormDialog';

describe('FormDialog', () => {
  const defaultProps = {
    open: true,
    title: 'Test Dialog',
    payload: undefined,
    onClose: vi.fn(),
    onConfirm: vi.fn(),
  };

  it('renders dialog with title, children and action buttons', () => {
    render(<FormDialog {...defaultProps}>Test content</FormDialog>);

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<FormDialog {...defaultProps}>Test content</FormDialog>);

    fireEvent.click(screen.getByText(/cancel/i));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
