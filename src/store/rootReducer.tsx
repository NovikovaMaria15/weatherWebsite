import { combineReducers } from '@reduxjs/toolkit';
import userWeatherSlise from './userWeather/userWeatherSlise';

const rootReducer = combineReducers({
  userWeather: userWeatherSlise.reducer,
});

export default rootReducer;
