import { createSlice } from '@reduxjs/toolkit';
import { weekWeather } from './weekWeatherThunk';

const initialState: { daily: any } = {
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
      state.daily = action.payload.response.daily;
    },
  },
});

export default weekWeatherSlise;
