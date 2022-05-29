import { renderWithRedux } from 'src/specHelper';
import HourlyDay from './HourlyDay';

describe('Redux', () => {
  it('checks 0', () => {
    const { getByText } = renderWithRedux(<HourlyDay />);
    expect(getByText('test')).toBeVisible();
  });
});
