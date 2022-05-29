import { Component } from 'react';
import { connect } from 'react-redux';
import temperature from 'src/servises/tempConverter';
import { WeatherHourlyDay } from 'src/pages/weekComponents/Weather/WeatherHourlyDay/WeatherHourlyDay';

class HourlyDay extends Component<any, any> {
  getCurrentDayWeather() {
    const data = new Date().toLocaleString('default', {
      hour: '2-digit',
    });
    return this.props.weekWeather.find((week: any) => {
      if (
        new Date(week.dt * 1000).toLocaleString('default', {
          hour: '2-digit',
        }) === data
      ) {
        return true;
      }
      return false;
    });
  }

  render() {
    const hourly = this.getCurrentDayWeather();

    return (
      hourly && (
        <WeatherHourlyDay
          date={new Date(hourly.dt * 1000).toLocaleString('default', {
            hour: '2-digit',
            minute: '2-digit',
          })}
          temp={temperature(hourly.temp)}
          src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`}
          humidity={hourly.humidity}
          seaLevel={hourly.pressure}
          windGust={hourly.wind_gust}
          speed={hourly.wind_speed}
        />
      )
    );
  }
}

const mapStateToProps = (state: any) => ({
  weekWeather: state.weekWeather.hourly,
});

export default connect(mapStateToProps, null)(HourlyDay);
