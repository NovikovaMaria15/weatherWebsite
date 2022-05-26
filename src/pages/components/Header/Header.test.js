import { render, screen } from '@testing-library/react';

import { Header } from '../Header/Header';

describe('List component', () => {
  it('List renders', () => {
    render(<Header />);
    expect(screen.getByText(/Weather/i)).toBeInTheDocument()
  });
});
