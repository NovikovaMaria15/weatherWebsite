import { createSlice } from '@reduxjs/toolkit';
import { weekWeather } from './weekWeatherThunk';

const initialState: { daily: any; current: any } = {
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
      state.daily = action.payload.response.daily;
      state.current = action.payload.response.current;
    },
  },
});

export default weekWeatherSlise;
