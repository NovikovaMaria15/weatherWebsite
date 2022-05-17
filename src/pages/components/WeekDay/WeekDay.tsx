import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Weather } from '../../weekComponents/Weather/Weather';
import { WeatherDay } from '../../weekComponents/WeatherDay/WeatherDay';
import { WeatherItems } from '../WeatherItems/WeatherItems';
import { Current } from '../Current/Current';
import * as S from './WeekDayStyles';

export function WeekDay() {
  // const [dayDay, alignmentDayDay] = useState(false);
  const [dayDayDay, setDayDayDay]: any[] = useState();
  const [color, setColor]: any[] = useState();

  const weekDaily = useSelector((state: RootState) => state.weekWeather.daily);

  const alignmentDay = useCallback(
    (dt: any) => {
      const WeekDayy = weekDaily.find((week: any) => {
        console.log('dt', dt);
        console.log('week.dt', week.dt);
        if (week.dt === dt) {
          return true;
        }
      });
      setDayDayDay(WeekDayy);
      console.log('WeekDayyyyyyyyy', WeekDayy);
      console.log('weekDaily', weekDaily);
    },
    [weekDaily]
  );

  console.log('weekDaily', weekDaily);
  console.log('dayDayDay', dayDayDay);

  return (
    <>
      <S.AlignmentIconsWeek>
        {weekDaily.map((weekDail: any) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            className="click"
            key={weekDail.dt}
            onClick={() => alignmentDay(weekDail.dt)}
          >
            <Weather
              tempDay={Math.round(weekDail.temp.day - 273)}
              weekdayDay={new Date(weekDail.dt * 1000).toLocaleString(
                'default',
                { weekday: 'long' }
              )}
              dtDay={new Date(weekDail.dt * 1000).toLocaleString('default', {
                month: 'long',
                day: 'numeric',
              })}
              textDay={weekDail.weather[0].description}
              iconDay={weekDail.weather[0].icon}
              src={`http://openweathermap.org/img/wn/${weekDail.weather[0].icon}@2x.png`}
            />
          </div>
        ))}
      </S.AlignmentIconsWeek>
      {dayDayDay && (
        <Current
          dayCurrent={new Date(dayDayDay.dt * 1000).toLocaleString('default', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        />
      )}
      {dayDayDay && (
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
      )}
    </>
  );
}
