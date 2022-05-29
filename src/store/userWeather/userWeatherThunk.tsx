import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userWeather = createAsyncThunk(
  'userWeather/city',
  // eslint-disable-next-line @typescript-eslint/require-await
  async ({ city }: { city?: string }, { rejectWithValue }) => {
    try {
      // const response = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ccd5856fcef61a049f819bbe02ae1cc`
      // );
      const response = {
        data: {
          coord: { lon: 37.6156, lat: 55.7522 },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          base: 'stations',
          main: {
            temp: 285.33,
            feels_like: 284.61,
            temp_min: 283.79,
            temp_max: 286.44,
            pressure: 1003,
            humidity: 77,
            sea_level: 1003,
            grnd_level: 986,
          },
          visibility: 10_000,
          wind: { speed: 4.56, deg: 251, gust: 9.47 },
          clouds: { all: 100 },
          dt: 1_653_754_470,
          sys: {
            type: 2,
            id: 47_754,
            country: 'RU',
            sunrise: 1_653_699_494,
            sunset: 1_653_760_541,
          },
          timezone: 10_800,
          id: 524_901,
          name: 'Moscow',
          cod: 200,
        },
      };
      return { city, response: response.data };
    } catch {
      return rejectWithValue(null);
    }
  }
);
