import { createSlice } from '@reduxjs/toolkit';
import { weekWeather } from './weekWeatherThunk';

const initialState: { daily: any; current: any } = {
  // forecastday: [],
  daily: [],
  current: [],
};

const weekWeatherSlise = createSlice({
  name: 'weekWeather',
  initialState,
  reducers: {},
  extraReducers: {
    [weekWeather.fulfilled.toString()]: (state, action) => {
      console.log('action', action);
      console.log('state', state);
      // eslint-disable-next-line no-param-reassign
      // state.data = action.payload.response;
      // state.forecastday = action.payload.response.forecast.forecastday;
      state.daily = action.payload.response.daily;
      state.current = action.payload.response.current;
    },
  },
});

export default weekWeatherSlise;
