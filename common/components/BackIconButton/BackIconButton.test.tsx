import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BackIconButton } from './BackIconButton';

describe('BackIconButton', () => {
  it('renders with accessibility label', () => {
    render(<BackIconButton onClick={() => {}} />);
    const button = screen.getByTitle(/return|back/i);
    expect(button).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = render(<BackIconButton onClick={() => {}} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});
