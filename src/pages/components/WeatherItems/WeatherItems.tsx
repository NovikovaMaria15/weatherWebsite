import React from 'react';
import { VscArrowSmallUp, VscArrowSmallDown } from 'react-icons/vsc';
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
} from 'react-icons/wi';
import * as S from '../WeatherItemsStyles';

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
      <S.Stacking>
        <S.AligningEachOther>
          <S.ThinOutline> Максимальная температура </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <VscArrowSmallUp />
            </S.IconsSize>
            {tempMax} °
          </S.TextAndIcons>
        </S.AligningEachOther>
        <S.AligningEachOther>
          <S.ThinOutline>Минимальная температура </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <VscArrowSmallDown />
            </S.IconsSize>
            {tempMin} °
          </S.TextAndIcons>
        </S.AligningEachOther>
      </S.Stacking>
      <S.Line />
      <S.Stacking>
        <S.AligningEachOther>
          <S.ThinOutline> Влажность </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <WiHumidity />
            </S.IconsSize>
            {humidity} %
          </S.TextAndIcons>
        </S.AligningEachOther>
        <S.AligningEachOther>
          <S.ThinOutline>Атмосферное давление </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <WiBarometer />
            </S.IconsSize>
            {sea_level} гПа
          </S.TextAndIcons>
        </S.AligningEachOther>
        <S.AligningEachOther>
          <S.ThinOutline>Скорость ветра </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <WiStrongWind />
            </S.IconsSize>
            {speed} км/ч
          </S.TextAndIcons>
        </S.AligningEachOther>
      </S.Stacking>
      <S.Line />
      <S.Stacking>
        <S.AligningEachOther>
          <S.ThinOutline>Восход </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <WiSunrise />
            </S.IconsSize>
            {sunrise}
          </S.TextAndIcons>
        </S.AligningEachOther>
        <S.AligningEachOther>
          <S.ThinOutline>Закат </S.ThinOutline>
          <S.TextAndIcons>
            <S.IconsSize>
              <WiSunset />
            </S.IconsSize>
            {sunset}
          </S.TextAndIcons>
        </S.AligningEachOther>
      </S.Stacking>
    </S.AdditionalData>
  );
}
