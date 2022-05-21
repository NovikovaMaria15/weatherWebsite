import { createSlice } from '@reduxjs/toolkit';
import { userWeather } from './userWeatherThunk';

const initialState: { data: any; main: any; sys: any; wind: any } = {
  data: {},
  main: {},
  sys: {},
  wind: {},
};

const userWeatherSlise = createSlice({
  name: 'userWeather',
  initialState,
  reducers: {},
  extraReducers: {
    [userWeather.fulfilled.toString()]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload.response;
      // eslint-disable-next-line no-param-reassign
      state.main = action.payload.response.main;
      // eslint-disable-next-line no-param-reassign
      state.sys = action.payload.response.sys;
      // eslint-disable-next-line no-param-reassign
      state.wind = action.payload.response.wind;
    },
  },
});

export default userWeatherSlise;
