import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userWeater = createAsyncThunk(
  'userWeater/city',
  async ({ city }: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      return { city, response };
    } catch {
      return rejectWithValue(null);
    }
  }
);
