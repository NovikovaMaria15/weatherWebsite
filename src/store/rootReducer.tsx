import { combineReducers } from '@reduxjs/toolkit';
import userWeatherSlise from './userWeather/userWeatherSlise';
import weekWeatherSlise from './weekWeather/weekWeatherSlise';

const rootReducer = combineReducers({
  userWeather: userWeatherSlise.reducer,
  weekWeather: weekWeatherSlise.reducer,
});

export default rootReducer;
