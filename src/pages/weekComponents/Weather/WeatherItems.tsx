import React, { PureComponent } from 'react';
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
} from 'react-icons/wi';
import { VscArrowSmallUp, VscArrowSmallDown } from 'react-icons/vsc';
import * as S from '../../components/WeatherItemsStyles';

export class WeatherItems extends PureComponent<any, any> {
  render() {
    return (
      <S.AdditionalData>
        <S.Stacking>
          <S.AligningEachOther>
            <S.ThinOutline> Максимальная температура </S.ThinOutline>
            <S.TextAndIcons>
              <S.IconsSize>
                <VscArrowSmallUp />
              </S.IconsSize>
              {this.props.tempMax} °
            </S.TextAndIcons>
          </S.AligningEachOther>
          <S.AligningEachOther>
            <S.ThinOutline>Минимальная температура </S.ThinOutline>
            <S.TextAndIcons>
              <S.IconsSize>
                <VscArrowSmallDown />
              </S.IconsSize>
              {this.props.tempMin} °
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
              {this.props.humidity} %
            </S.TextAndIcons>
          </S.AligningEachOther>
          <S.AligningEachOther>
            <S.ThinOutline>Атмосферное давление </S.ThinOutline>
            <S.TextAndIcons>
              <S.IconsSize>
                <WiBarometer />
              </S.IconsSize>
              {this.props.seaLevel} гПа
            </S.TextAndIcons>
          </S.AligningEachOther>
          <S.AligningEachOther>
            <S.ThinOutline>Скорость ветра </S.ThinOutline>
            <S.TextAndIcons>
              <S.IconsSize>
                <WiStrongWind />
              </S.IconsSize>
              {this.props.speed} км/ч
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
              {this.props.sunrise}
            </S.TextAndIcons>
          </S.AligningEachOther>
          <S.AligningEachOther>
            <S.ThinOutline>Закат </S.ThinOutline>
            <S.TextAndIcons>
              <S.IconsSize>
                <WiSunset />
              </S.IconsSize>
              {this.props.sunset}
            </S.TextAndIcons>
          </S.AligningEachOther>
        </S.Stacking>
      </S.AdditionalData>
    );
  }
}
