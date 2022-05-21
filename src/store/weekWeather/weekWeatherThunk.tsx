import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const weekWeather = createAsyncThunk(
  'weekWeather/city1',
  async ({ cityy }: { cityy?: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityy}&appid=4ccd5856fcef61a049f819bbe02ae1cc`
      );
      const getСoordinates = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&lang=ru&appid=4ccd5856fcef61a049f819bbe02ae1cc`
      );
      return { cityy, response: getСoordinates.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
