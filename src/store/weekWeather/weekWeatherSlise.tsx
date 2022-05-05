import { createSlice } from '@reduxjs/toolkit';
import { weekWeather } from './weekWeatherThunk';

const initialState: { daily: any } = {
  // forecastday: [],
  daily: [],
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
    },
  },
});

export default weekWeatherSlise;
