import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { WeatherItems } from '../components/WeatherItems/WeatherItems';

export function Day() {
  const weekDaily = useSelector((state: RootState) => state.weekWeather.daily);
  console.log('weekDaily[0]', weekDaily[0]);
  return (
    <>
      <WeatherItems
        tempMax={Math.round(weekDaily[0].temp.max - 273)}
        tempMin={Math.round(weekDaily[0].temp.min - 273)}
        humidity={weekDaily[0].humidity}
      />
    </>
  );
}
