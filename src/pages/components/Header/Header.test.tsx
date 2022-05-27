import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('List component', () => {
  it('List renders', () => {
    render(<Header />);
    expect(screen.getByText(/weather/i)).toBeInTheDocument();
  });
});
