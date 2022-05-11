import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userWeather = createAsyncThunk(
  'userWeather/city',
  async ({ city }: { city?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      return { city, response: response.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
