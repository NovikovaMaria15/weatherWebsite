import React from 'react';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './EndPageStyles';

export function EndPage() {
  return (
    <S.HeaderWeather>
      <S.CenterAlignment>
        <S.Alignment>
          <S.HeaderName>Weather</S.HeaderName>
          <S.HeaderIcon>
            <WiDayCloudy />
          </S.HeaderIcon>
        </S.Alignment>
        <S.Year>© 2022</S.Year>
      </S.CenterAlignment>
    </S.HeaderWeather>
  );
}