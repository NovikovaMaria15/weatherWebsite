import React from 'react';
import * as S from '../WeatherItemsStyles';

export function Current({ dayCurrent }: any) {
  return (
    <>
      <S.Today> Сегодня, {dayCurrent}</S.Today>
    </>
  );
}
