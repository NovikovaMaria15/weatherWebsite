import React from 'react';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './FooterStyles';

export function Footer() {
  return (
    <S.HeaderWeather>
      <S.Alignment>
        <S.HeaderName>Weather</S.HeaderName>
        <S.HeaderIcon>
          <WiDayCloudy />
        </S.HeaderIcon>
      </S.Alignment>
      <S.Year>© 2022</S.Year>
    </S.HeaderWeather>
  );
}
