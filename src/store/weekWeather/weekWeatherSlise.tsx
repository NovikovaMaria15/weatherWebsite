import { createSlice } from '@reduxjs/toolkit';
import { weekWeather } from './weekWeatherThunk';

const initialState: { daily: any; hourly: any } = {
  daily: [],
  hourly: [],
};

const weekWeatherSlise = createSlice({
  name: 'weekWeather',
  initialState,
  reducers: {},
  extraReducers: {
    [weekWeather.fulfilled.toString()]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.daily = action.payload.response.daily;
      // eslint-disable-next-line no-param-reassign
      state.hourly = action.payload.response.hourly;
    },
  },
});

export default weekWeatherSlise;
