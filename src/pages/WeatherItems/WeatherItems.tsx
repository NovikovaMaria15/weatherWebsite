import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import * as S from './WeatherItemsStyles';

export function WeatherItems({
  name,
  obj,
  temp,
  tempMax,
  tempMin,
  humidity,
  sea_level,
  speed,
  sunrise,
  sunset,
}: any) {
  return (
    <>
      <div> {obj} °</div>
      <div> {name}</div>
      <div> Температура {temp} °</div>
      <div> Максимальная температура {tempMax} °</div>
      <div> Минимальная температура {tempMin} °</div>
      <div> Влажность {humidity} %</div>
      <div> Давление воздуха {sea_level} гПа</div>
      <div> Скорость ветра {speed} км/ч</div>
      <div> Восход солнца {sunrise}</div>
      <div> Заход солнца {sunset}</div>
    </>
  );
}