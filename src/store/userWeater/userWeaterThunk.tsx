import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 const userWeater = createAsyncThunk(
  'userWeater/authorize',
  async ({ login, password }: any, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/authorize', {
        loginData: {
          login,
          password,
        },
      });
      return response.data.isLogin;
    } catch {
      return rejectWithValue(null);
    }
  },
);

// export const userWeater = createAsyncThunk(
//   'userWeater/city',
//   {
//   static gitWeater(city: string) {
//     return axios.get(
//       url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6cc3ee3472e4dcd0a11df732c0b2c29`)
//   }

export default userWeater;
