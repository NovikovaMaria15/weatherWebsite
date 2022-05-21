import React from 'react';
import * as S from 'src/pages/components/WeatherItemsStyles';

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
      <S.Indent>{textDay}</S.Indent>
      <img src={src} alt="alt" />
      <div>{dayy}</div>
    </S.Choose>
  );
}
