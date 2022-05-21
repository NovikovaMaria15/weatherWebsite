import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import temperature from 'src/servises/tempConverter';
import { WeatherHourlyDay } from '../WeatherHourlyDay/WeatherHourlyDay';

export function HourlyDay() {
  const dayHourly = useSelector((state: RootState) => state.weekWeather.hourly);

  const data = new Date().toLocaleString('default', {
    hour: '2-digit',
  });

  // eslint-disable-next-line array-callback-return
  const hourly = dayHourly.find((week: any) => {
    if (
      new Date(week.dt * 1000).toLocaleString('default', {
        hour: '2-digit',
      }) === data
    ) {
      return true;
    }
  });

  return (
    hourly && (
      <WeatherHourlyDay
        date={new Date(hourly.dt * 1000).toLocaleString('default', {
          hour: '2-digit',
          minute: '2-digit',
        })}
        temp={temperature(hourly.temp)}
        src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`}
        humidity={hourly.humidity}
        seaLevel={hourly.pressure}
        windGust={hourly.wind_gust}
        speed={hourly.wind_speed}
      />
    )
  );
}
