import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './WeatherItemsStyles';

export function WeatherItems({
  tempMax,
  tempMin,
  humidity,
  sea_level,
  speed,
  sunrise,
  sunset,
}: any) {
  return (
    <S.AdditionalData>
      <div> Maximum temperature {tempMax} °</div>
      <div> Minimum temperature {tempMin} °</div>
      <div> Humidity {humidity} %</div>
      <div> Air pressure {sea_level} hPa</div>
      <div> Wind speed {speed} km/h</div>
      <div> Sunrise {sunrise}</div>
      <div> Sunset {sunset}</div>
    </S.AdditionalData>
  );
}
