import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './WeatherItemsStyles';

export function Current({ dayCurrent }: any) {
  return (
    <S.AdditionalData>
      <S.Today> Today, {dayCurrent}</S.Today>
    </S.AdditionalData>
  );
}
