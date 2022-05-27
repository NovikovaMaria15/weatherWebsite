import { renderWithRedux } from 'src/specHelper';
import App from './App';

describe('Redux', () => {
  it('checks 0', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('test')).toBeVisible();
  });
});
