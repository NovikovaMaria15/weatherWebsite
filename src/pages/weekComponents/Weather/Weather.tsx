import React, { PureComponent } from 'react';
import * as S from 'src/pages/components/WeatherItemsStyles';

export class Weather extends PureComponent<any, any> {
  render() {
    return (
      <S.Choose>
        <S.weekdayDay>{this.props.weekdayDay}</S.weekdayDay>
        <S.Indent>{this.props.dtDay}</S.Indent>
        <div>{this.props.tempDay}°</div>
        <S.Indent>{this.props.textDay}</S.Indent>
        <img src={this.props.src} alt="alt" />
        <div>{this.props.dayy}</div>
      </S.Choose>
    );
  }
}
