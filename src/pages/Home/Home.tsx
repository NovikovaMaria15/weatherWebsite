import React, {
  useState,
  useCallback,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { useAppDispatch, RootState } from '../../store/store';
import * as S from './HomeStyles';
import { userWeather } from '../../store/userWeather/userWeatherThunk';
import { weekWeather } from '../../store/weekWeather/weekWeatherThunk';
import { Header } from '../components/Header/Header';
import { WeekDay } from '../components/WeekDay/WeekDay';
import { EndPage } from '../components/EndPage/EndPage';
import { HourlyDay } from '../components/HourlyDay/HourlyDay';

export function Home() {
  const dispatch = useAppDispatch();
  const [city1, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const displayCity = useSelector((state: RootState) => state.userWeather.data);

  const anyCity = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(userWeather({ city: city1 }));
  }, [dispatch, city1]);

  const anyWeatherCity = useCallback(() => {
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
    anyWeatherCity();
  }, [anyCity, anyWeatherCity]);

  const handleKeyDown = useCallback(
    (event: any): any => {
      if (event.key === 'Enter') {
        withdraw();
      }
    },
    [withdraw]
  );

  return (
    <>
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
        {open && <WeekDay />}
        {open && <HourlyDay />}
      </S.Header1>
      <EndPage />
    </>
  );
}
