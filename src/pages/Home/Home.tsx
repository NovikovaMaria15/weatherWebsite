import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './HomeStyles';
import { RootState } from '../../store/store';

export function Home() {
  const [city, setCity] = useState('');
  const city1 = useSelector((state: RootState) => state);

  const handleChangeCity = useCallback(() => {
    setCity('');
  }, []);

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
          name="radio"
          value={city}
          onChange={handleChangeCity}
        />
        <S.SearchIcon>
          <IoSearch />
        </S.SearchIcon>
        {/* {city1} */}
      </S.Container>
    </>
  );
}
