import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './WeatherItemsStyles';

export function Weather({
  chooseTemp,
  date,
  text,
  tempDay,
  textDay,
  iconDay,
  dtDay,
  mainDay,
  src,
}: any) {
  return (
    <>
      <S.M>
        <S.Alignment>
          <S.Choose>
            <S.Date>{dtDay}</S.Date>
            <S.Date>{tempDay}°</S.Date>
            <S.Date>{mainDay}</S.Date>
            <S.Date>{textDay}</S.Date>
            <S.Date>{iconDay}</S.Date>
            <S.Date>{date}</S.Date>
            <img src={src} alt="alt" />
            <S.ChooseTemp>{chooseTemp}</S.ChooseTemp>
            <S.Text>{text}</S.Text>
          </S.Choose>
        </S.Alignment>
      </S.M>
    </>
  );
}
