import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const weekWeather = createAsyncThunk(
  'weekWeather/city1',
  async ({ cityy }: { cityy?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // `http://api.weatherapi.com/v1/forecast.json?key=79867831347943b8b23114121222904&q=${cityy}&days=7&aqi=no&alerts=no`
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityy}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      const responsee = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
        // `https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
      );
      // console.log('city', cityy);
      console.log('responsee', responsee.data);
      return { cityy, response: responsee.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
// `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.lat}.99&lon=${response.data.lon}.9&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`
