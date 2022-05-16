import React, {
  useState,
  useCallback,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../store/store';
import { IoSearch } from 'react-icons/io5';
import * as S from './HomeStyles';
import { WeatherItems } from '../components/WeatherItems/WeatherItems';
import { userWeather } from '../../store/userWeather/userWeatherThunk';
import { weekWeather } from '../../store/weekWeather/weekWeatherThunk';
import { Header } from '../components/Header/Header';
import { Weather } from '../components/Weather/Weather';
import { Current } from '../components/Current/Current';
import { WeatherDay } from '../components/WeatherDay/WeatherDay';

export function Home() {
  const dispatch = useAppDispatch();
  const [city1, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [dayDay, alignmentDayDay] = useState(false);
  const [dayDayDay, setDayDayDay]: any[] = useState();
  const displayCity = useSelector((state: RootState) => state.userWeather.data);
  const displayMain = useSelector((state: RootState) => state.userWeather.main);
  const displaySys = useSelector((state: RootState) => state.userWeather.sys);
  const displayWind = useSelector((state: RootState) => state.userWeather.wind);

  const weekDaily = useSelector((state: RootState) => state.weekWeather.daily);
  const currentDay = useSelector(
    (state: RootState) => state.weekWeather.current
  );

  // const day = useCallback(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //   dispatch(weekDaily);
  // }, [dispatch]);

  const anyCity = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(userWeather({ city: city1 }));
  }, [dispatch, city1]);

  const anyCity1 = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(weekWeather({ cityy: city1 }));
  }, [dispatch, city1]);

  const handleChangeCity: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value);
    },
    []
  );

  const withdraw = useCallback(() => {
    setOpen(true);
    anyCity();
    anyCity1();
  }, [anyCity, anyCity1]);

  const handleKeyDown = useCallback(
    (event: any): any => {
      if (event.key === 'Enter') {
        withdraw();
      }
    },
    [withdraw]
  );

  const alignmentDay = useCallback((dt: any) => {
    alignmentDayDay(true);
    const WeekDayy = weekDaily.find((week: any) => {
      if (week.dt === dt) {
        return true;
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setDayDayDay(WeekDayy);
    console.log('WeekDayyyyyyyyy', WeekDayy);
  }, []);

  // const alignmentDayDay = useCallback(() => {
  //   alignmentDay();
  // }, [withdraw]);

  // console.log('weekDaily', weekDaily);

  const sunset = displaySys.sunset;
  const date = new Date();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  date.setTime(sunset);
  const sunset_date = date.getHours() + ':' + date.getMinutes();

  const sunrise = displaySys.sunrise;
  const date1 = new Date();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  date1.setTime(sunrise);
  const sunrise_date = date1.getHours() + ':' + date1.getMinutes();

  const temperatureMax = Math.round(displayMain.temp_max - 273);
  const temperatureMin = Math.round(displayMain.temp_min - 273);

  // const anyyyyy = useCallback(() => {
  //   dispatch(weekDaily).then(() => {
  //     if (alignmentDay) {
  //       displayWind;
  //     }
  //   });
  // }, [dispatch]);

  console.log('weekDaily', weekDaily);

  // const dayy = weekDaily.find((weekDaily: any) => {
  //   weekDaily.humidity === 51;
  // });

  // const dayy = weekDaily.find((weekDaily: any) => weekDaily.humidity);

  // const dayy = weekDaily.find((weekDaily: any) => weekDaily.humidity);
  // const dayy = weekDaily.find(week: any) =>
  // { week.humidity };
  // return dayy;;

  // const dayy = weekDaily.find((weekDaily: any) => (
  //   <div>{weekDaily.humidity}</div>
  // ));
  // return dayy;

  const dayy = weekDaily.find((week: any) => {
    if (week.humidity) {
      return true;
    }
  });

  console.log('dayDay', dayDay);
  console.log('dayy', dayy);
  console.log('currentDay', currentDay);

  return (
    <S.Header1>
      <Header />
      <S.Photo
        alt="pop"
        src="https://vyborg.tv/wp-content/uploads/2022/03/pogoda-oblaka-800x445.jpg}"
      />
      <S.Location>
        <S.SearchTitle>Найти прогноз</S.SearchTitle>
      </S.Location>
      <S.Container>
        <S.InputHome
          type="text"
          name="text"
          value={city1}
          onChange={handleChangeCity}
          onKeyPress={handleKeyDown}
          placeholder="Введите название города"
        />
        <S.WeaherName>
          {open && <S.Weather>Погода в</S.Weather>}
          {displayCity.name}
        </S.WeaherName>
        <S.SearchIcon>
          <IoSearch onClick={withdraw} />
        </S.SearchIcon>
      </S.Container>
      <S.AlignmentIconsWeek>
        {weekDaily.map((weekDaily: any) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            className="click"
            key={weekDaily.dt}
            onClick={() => alignmentDay(weekDaily.dt)}
          >
            <Weather
              tempDay={Math.round(weekDaily.temp.day - 273)}
              weekdayDay={new Date(weekDaily.dt * 1000).toLocaleString(
                'default',
                { weekday: 'long' }
              )}
              dtDay={new Date(weekDaily.dt * 1000).toLocaleString('default', {
                month: 'long',
                day: 'numeric',
              })}
              textDay={weekDaily.weather[0].description}
              iconDay={weekDaily.weather[0].icon}
              src={`http://openweathermap.org/img/wn/${weekDaily.weather[0].icon}@2x.png`}
            />
          </div>
        ))}
      </S.AlignmentIconsWeek>
      {open && (
        <Current
          dayCurrent={new Date(currentDay.dt * 1000).toLocaleString('default', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        />
      )}
      {open && (
        <WeatherItems
          tempMax={temperatureMax}
          tempMin={temperatureMin}
          humidity={displayMain.humidity}
          sea_level={displayMain.sea_level}
          speed={displayWind.speed}
          sunrise={sunrise_date}
          sunset={sunset_date}
        />
      )}
      {dayDayDay && <WeatherDay dayy={dayDayDay.clouds} />}
    </S.Header1>
  );
}
