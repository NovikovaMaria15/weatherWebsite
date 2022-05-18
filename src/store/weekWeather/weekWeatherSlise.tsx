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
      console.log('action', action);
      console.log('state', state);
      state.daily = action.payload.response.daily;
      state.hourly = action.payload.response.hourly;
    },
  },
});

export default weekWeatherSlise;
