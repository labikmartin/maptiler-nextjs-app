import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ListCard } from './ListCard';

describe('ListCard', () => {
  it('renders correctly', () => {
    const title = 'Test Title';
    const description = 'Test Description';

    render(<ListCard children={description} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
