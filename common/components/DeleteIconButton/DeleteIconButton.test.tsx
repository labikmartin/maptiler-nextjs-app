import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DeleteIconButton } from './DeleteIconButton';

describe('DeleteIconButton', () => {
  it('renders with accessibility label', () => {
    render(<DeleteIconButton onClick={() => {}} />);
    const button = screen.getByTitle(/delete/i);
    expect(button).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = render(<DeleteIconButton onClick={() => {}} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});
