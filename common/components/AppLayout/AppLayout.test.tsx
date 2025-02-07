import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AppLayout } from './AppLayout';

describe('AppLayout', () => {
  it('renders children content', () => {
    render(<AppLayout>Test content</AppLayout>);

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders logo image', () => {
    render(<AppLayout />);

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<AppLayout />);

    expect(screen.getByText(/2025 MapTiler/i)).toBeInTheDocument();
  });

  it('has home page link in header', () => {
    render(<AppLayout />);

    const homeLink = screen.getByRole('link');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
