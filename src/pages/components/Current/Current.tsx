import React, { PureComponent } from 'react';
import * as S from '../WeatherItemsStyles';

export class Current extends PureComponent<any, any> {
  render() {
    return <S.Today>{this.props.dayCurrent}</S.Today>;
  }
}
