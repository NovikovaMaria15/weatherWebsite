import React from 'react';
import { WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';
import * as S from './WeatherHourlyDayStyles';

export function WeatherHourlyDay({
  date,
  temp,
  src,
  humidity,
  seaLevel,
  windGust,
  speed,
}: any) {
  return (
    <>
      <S.Shell>
        <S.Now>
          Сейчас
          <S.NowTime>{date}</S.NowTime>
        </S.Now>
        <S.AlignmentIconsWeek>
          <S.Temp>{temp} ° </S.Temp>
          <img src={src} alt="alt" />
        </S.AlignmentIconsWeek>
      </S.Shell>
      <S.ShellCenter>
        <S.AtmosphericData>
          <S.Column>
            <div>
              <S.FontWeight>Влажность</S.FontWeight>
              <S.AlignmentIconsWeek>
                <S.IconsSize>
                  <WiHumidity />
                </S.IconsSize>
                {humidity} %
              </S.AlignmentIconsWeek>
            </div>
            <S.Indent>
              <S.FontWeight>Атмосферное давление</S.FontWeight>
              <S.AlignmentIconsWeek>
                <S.IconsSize>
                  <WiBarometer />
                </S.IconsSize>
                {seaLevel} гПа
              </S.AlignmentIconsWeek>
            </S.Indent>
          </S.Column>
          <S.Line />
          <S.Column>
            <div>
              <S.FontWeight>Порыв ветра</S.FontWeight>
              <S.AlignmentIconsWeek>
                <S.IconsSize>
                  <WiStrongWind />
                </S.IconsSize>
                {windGust} км/ч
              </S.AlignmentIconsWeek>
            </div>
            <S.Indent>
              <S.FontWeight>Скорость ветра</S.FontWeight>
              <S.AlignmentIconsWeek>
                <S.IconsSize>
                  <WiStrongWind />
                </S.IconsSize>
                {speed} км/ч
              </S.AlignmentIconsWeek>
            </S.Indent>
          </S.Column>
        </S.AtmosphericData>
      </S.ShellCenter>
    </>
  );
}
