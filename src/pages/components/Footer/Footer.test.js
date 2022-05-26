import { render, screen } from '@testing-library/react';

import { Footer } from '../Footer/Footer';

describe('List component', () => {
  it('List renders', () => {
    render(<Footer />);
    expect(screen.getByText(/Weather/i)).toBeInTheDocument()
    expect(screen.getByText(/© 2022/i)).toBeInTheDocument()
  });
});
