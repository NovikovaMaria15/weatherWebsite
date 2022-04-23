import { createSlice } from '@reduxjs/toolkit';
import userWeater from './userWeaterThunk';

const initialState = {
  weather: {},
  isLoading: false,
};

const userWeaterSlise = createSlice({
  name: 'userWeater',
  initialState,
  reducers: {},
  extraReducers: {
    [userWeater.fulfilled.toString()]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    },
    [userWeater.rejected.toString()]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
    },
  },
});

export default userWeaterSlise;
