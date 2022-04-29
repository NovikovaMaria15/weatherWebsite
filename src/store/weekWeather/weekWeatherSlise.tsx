import { createSlice } from '@reduxjs/toolkit';
import { weekWeather } from './weekWeatherThunk';

const initialState: { current: any } = {
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
      state.current = action.payload.response.current;
    },
  },
});

export default weekWeatherSlise;
