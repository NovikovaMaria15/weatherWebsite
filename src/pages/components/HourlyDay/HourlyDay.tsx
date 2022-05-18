import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Weather } from '../../weekComponents/Weather/Weather';
import { WeatherDay } from '../../weekComponents/WeatherDay/WeatherDay';
import { WeatherItems } from '../WeatherItems/WeatherItems';
import { Current } from '../Current/Current';
import * as S from './HourlyDay';

export function HourlyDay() {
  // const [dayDay, alignmentDayDay] = useState(false);
  const [dayDayDay, setDayDayDay]: any[] = useState();

  // const dayHourly = useSelector((state: RootState) => state.weekWeather.hourly);

  // const alignmentDay = useCallback(
  //   (dt: any) => {
  //     const HourlyDayy = dayHourly.find((week: any) => {
  //       if (week.dt === dt) {
  //         return true;
  //       }
  //     });
  //     setDayDayDay(HourlyDayy);
  //   },
  //   [HourlyDay]
  // );

  return (
    <>
      {' '}
      <div>p</div>
      {/* {dayDayDay && (
        <WeatherItems
          tempMax={Math.round(dayDayDay.temp.max - 273)}
          tempMin={Math.round(dayDayDay.temp.min - 273)}
          humidity={dayDayDay.humidity}
          sea_level={dayDayDay.pressure}
          speed={dayDayDay.wind_speed}
          sunrise={new Date(dayDayDay.sunrise * 1000).toLocaleString(
            'default',
            { hour: '2-digit', minute: '2-digit' }
          )}
          sunset={new Date(dayDayDay.sunset * 1000).toLocaleString('default', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        />
      )} */}
    </>
  );
}
