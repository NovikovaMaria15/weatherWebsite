import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const weekWeather = createAsyncThunk(
  'weekWeather/city1',
  async ({ cityy }: { cityy?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=79867831347943b8b23114121222904&q=${cityy}&days=7&aqi=no&alerts=no`
        // `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt={cnt}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      console.log('city', cityy);
      console.log('response', response);
      return { cityy, response: response.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
