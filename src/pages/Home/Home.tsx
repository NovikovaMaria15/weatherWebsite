import React, {
  useState,
  useCallback,
  useEffect,
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

export function Home() {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');
  const Weather = useSelector((state: RootState) => state.userWeather.data);

  const handleChangeCity: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value);
    },
    []
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(userWeather({ city }));
  }, [dispatch, city]);

  return (
    <>
      <S.HeaderWeather>
        <S.HeaderName>Weather</S.HeaderName>
        <S.HeaderIcon>
          <WiDayCloudy />
        </S.HeaderIcon>
      </S.HeaderWeather>
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
          value={city}
          onChange={handleChangeCity}
          placeholder="Введите название города"
        />
        <S.SearchIcon>
          <IoSearch />
        </S.SearchIcon>
      </S.Container>
      {Weather.map((data: any) => (
        <WeatherItems key={data.id} city={data.city} />
      ))}
    </>
  );
}
