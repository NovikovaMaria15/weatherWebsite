import { createSlice } from '@reduxjs/toolkit';
import { userWeather } from './userWeatherThunk';

const initialState = {
  data: [],
};

const userWeatherSlise = createSlice({
  name: 'userWeather',
  initialState,
  reducers: {},
  extraReducers: {
    [userWeather.fulfilled.toString()]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      // state.data = true;
      // eslint-disable-next-line no-param-reassign
      console.log('state', state);
    },
    [userWeather.rejected.toString()]: (state) => {
      // eslint-disable-next-line no-param-reassign
    },
  },
});

export default userWeatherSlise;
