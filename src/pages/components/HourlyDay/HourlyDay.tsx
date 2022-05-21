import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Weather } from '../../weekComponents/Weather/Weather';
import { WeatherDay } from '../../weekComponents/WeatherDay/WeatherDay';
import { WeatherItems } from '../WeatherItems/WeatherItems';
import { Current } from '../Current/Current';
import { WeatherHourlyDay } from '../WeatherHourlyDay/WeatherHourlyDay';

export function HourlyDay() {
  const dayHourly = useSelector((state: RootState) => state.weekWeather.hourly);

  const data = new Date().toLocaleString('default', {
    hour: '2-digit',
  });

  // eslint-disable-next-line array-callback-return
  const HourlyDayy = dayHourly.find((week: any) => {
    if (
      new Date(week.dt * 1000).toLocaleString('default', {
        hour: '2-digit',
      }) === data
    ) {
      return true;
    }
  });

  const Hourly = HourlyDayy;

  return (
    Hourly && (
      <WeatherHourlyDay
        date={new Date(Hourly.dt * 1000).toLocaleString('default', {
          hour: '2-digit',
          minute: '2-digit',
        })}
        temp={Math.round(Hourly.temp - 273)}
        src={`http://openweathermap.org/img/wn/${Hourly.weather[0].icon}@2x.png`}
        humidity={Hourly.humidity}
        seaLevel={Hourly.pressure}
        windGust={Hourly.wind_gust}
        speed={Hourly.wind_speed}
      />
    )
  );
}
