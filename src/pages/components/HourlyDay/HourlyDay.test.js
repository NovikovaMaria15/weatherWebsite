import { configureStore } from '@reduxjs/toolkit';
import { getByRole, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../store/rootReducer';

import { HourlyDay } from '../HourlyDay/HourlyDay';

const useSelector = (
  component,
  { initialState, store = configureStore({reducer:rootReducer}, initialState)} = {}
) => {
  return {
    ...HourlyDay(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Redux", () => {
  it("checks 0", () => {
    const { getByRole } = useSelector(<HourlyDay />)
    expect(getByRole("heading")).toHaveTextContent("0");
  })
})
