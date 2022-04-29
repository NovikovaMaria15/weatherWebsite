import React from 'react';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './HeaderStyles';

export function Header() {
  return (
    <>
      <S.HeaderWeather>
        <S.HeaderName>Weather</S.HeaderName>
        <S.HeaderIcon>
          <WiDayCloudy />
        </S.HeaderIcon>
      </S.HeaderWeather>
    </>
  );
}
