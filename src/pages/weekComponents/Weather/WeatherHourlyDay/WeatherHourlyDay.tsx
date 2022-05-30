import React, { PureComponent } from 'react';
import { WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';
import * as S from './WeatherHourlyDayStyles';

export class WeatherHourlyDay extends PureComponent<any, any> {
  render() {
    return (
      <>
        <S.Shell>
          <S.Now>
            Сейчас
            <S.NowTime>{this.props.date}</S.NowTime>
          </S.Now>
          <S.AlignmentIconsWeek>
            <S.Temp>{this.props.temp} ° </S.Temp>
            <img src={this.props.src} alt="alt" />
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
                  {this.props.humidity} %
                </S.AlignmentIconsWeek>
              </div>
              <S.Indent>
                <S.FontWeight>Атмосферное давление</S.FontWeight>
                <S.AlignmentIconsWeek>
                  <S.IconsSize>
                    <WiBarometer />
                  </S.IconsSize>
                  {this.props.seaLevel} гПа
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
                  {this.props.windGust} км/ч
                </S.AlignmentIconsWeek>
              </div>
              <S.Indent>
                <S.FontWeight>Скорость ветра</S.FontWeight>
                <S.AlignmentIconsWeek>
                  <S.IconsSize>
                    <WiStrongWind />
                  </S.IconsSize>
                  {this.props.speed} км/ч
                </S.AlignmentIconsWeek>
              </S.Indent>
            </S.Column>
          </S.AtmosphericData>
        </S.ShellCenter>
      </>
    );
  }
}
