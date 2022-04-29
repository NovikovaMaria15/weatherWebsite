import React, {
  useState,
  useCallback,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../store/store';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './HomeStyles';
import { WeatherItems } from '../WeatherItems/WeatherItems';
import { userWeather } from '../../store/userWeather/userWeatherThunk';
import { weekWeather } from '../../store/weekWeather/weekWeatherThunk';
import { Header } from '../components/Header/Header';

export function Home() {
  const dispatch = useAppDispatch();
  const [city1, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const displayCity = useSelector((state: RootState) => state.userWeather.data);
  const displayMain = useSelector((state: RootState) => state.userWeather.main);
  const displaySys = useSelector((state: RootState) => state.userWeather.sys);
  const displayWind = useSelector((state: RootState) => state.userWeather.wind);
  const weekCurrent = useSelector(
    (state: RootState) => state.weekWeather.current
  );

  const anyCity = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(userWeather({ city: city1 }));
  }, [dispatch, city1]);

  const anyCity1 = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(weekWeather({ cityy: city1 }));
  }, [dispatch, city1]);

  console.log('weekCurrent', weekCurrent);

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

  const temperature = Math.round(displayMain.temp - 273);
  const temperatureMax = Math.round(displayMain.temp_max - 273);
  const temperatureMin = Math.round(displayMain.temp_min - 273);

  // console.log('displayCity', displayCity);
  // console.log('displayMain', displayMain);
  // console.log('displaySys', displaySys);
  // console.log('displaySys', displayWind);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const values = Object.values(weekCurrent);
  console.log('values', values);

  return (
    <>
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
        <S.SearchIcon>
          <IoSearch onClick={withdraw} />
        </S.SearchIcon>
      </S.Container>
      {open && (
        <WeatherItems
          obj={values[2]}
          name={displayCity.name}
          temp={temperature}
          tempMax={temperatureMax}
          tempMin={temperatureMin}
          humidity={displayMain.humidity}
          sea_level={displayMain.sea_level}
          speed={displayWind.speed}
          sunrise={sunrise_date}
          sunset={sunset_date}
        />
      )}
    </>
  );
}
