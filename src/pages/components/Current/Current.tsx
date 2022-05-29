import React, { Component } from 'react';
import * as S from '../WeatherItemsStyles';

export class Current extends Component<any, any>{
  constructor(props: any) {
    super(props);
  }

  render() {
    return <S.Today>{this.props.dayCurrent}</S.Today>;
  }
}
