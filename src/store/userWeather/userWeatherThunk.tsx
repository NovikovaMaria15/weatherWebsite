import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userWeather = createAsyncThunk(
  'userWeather/city',
  // eslint-disable-next-line @typescript-eslint/require-await
  async ({ city }: { city?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ccd5856fcef61a049f819bbe02ae1cc`
      );
      return { city, response: response.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
