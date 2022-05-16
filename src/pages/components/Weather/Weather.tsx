import React from 'react';
import * as S from '../WeatherItemsStyles';

export function Weather({
  tempDay,
  textDay,
  dtDay,
  src,
  weekdayDay,
  dayy,
}: any) {
  return (
    <S.Choose>
      <S.weekdayDay>{weekdayDay}</S.weekdayDay>
      <S.Indent>{dtDay}</S.Indent>
      <div>{tempDay}°</div>
      <div>{textDay}</div>
      <img src={src} alt="alt" />
      <div>{dayy}</div>
    </S.Choose>
  );
}
