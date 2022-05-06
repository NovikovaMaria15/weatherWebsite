import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './WeatherItemsStyles';

export function Weather({ tempDay, textDay, dtDay, src, weekdayDay }: any) {
  return (
    <>
      <S.M>
        <S.Alignment>
          <S.Choose>
            <S.weekdayDay>{weekdayDay}</S.weekdayDay>
            <S.Indent>{dtDay}</S.Indent>
            <div>{tempDay}°</div>
            <div>{textDay}</div>
            <img src={src} alt="alt" />
          </S.Choose>
        </S.Alignment>
      </S.M>
    </>
  );
}
