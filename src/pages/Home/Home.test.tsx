import { render, screen } from '@testing-library/react';
import { renderWithRedux } from 'src/specHelper';
import { Home } from './Home';

describe('Redux', () => {
  it('checks 0', () => {
    const { getByText } = renderWithRedux(<Home />);
    expect(getByText('Найти прогноз')).toBeVisible();
    expect(screen.getByText(/найти прогноз/i)).toBeInTheDocument();
  });
});
