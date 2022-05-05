import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './WeatherItemsStyles';

export function Weather({ chooseTemp, date, text }: any) {
  return (
    <>
      <S.M>
        <S.Alignment>
          <S.Choose>
            <S.Date>{date}</S.Date>
            <S.ChooseTemp>{chooseTemp} °</S.ChooseTemp>
            <S.Text>{text}</S.Text>
          </S.Choose>
        </S.Alignment>
      </S.M>
    </>
  );
}
