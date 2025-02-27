import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EditIconButton } from './EditIconButton';

describe('EditIconButton', () => {
  it('renders with accessibility label', () => {
    render(<EditIconButton onClick={() => {}} />);
    const button = screen.getByTitle(/edit/i);

    expect(button).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = render(<EditIconButton onClick={() => {}} />);
    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
  });
});
