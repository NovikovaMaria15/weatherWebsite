import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const weekWeather = createAsyncThunk(
  'weekWeather/city1',
  async ({ cityy }: { cityy?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityy}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      const responsee = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&lang=ru&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      console.log('responsee', responsee.data);
      return { cityy, response: responsee.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
