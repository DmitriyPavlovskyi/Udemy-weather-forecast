import React from 'react';
import PropTypes from 'prop-types';
import Chart from './chart';
import '../styles.css';

function WeatherItem(props) {
  const name = props.data.city.name;
  const temps = _.map(props.data.list.map(weather => weather.main.temp), (temp) => temp - 273);
  const pressures = props.data.list.map(weather => weather.main.pressure);
  const humidities = props.data.list.map(weather => weather.main.humidity);

  return (
    <tr>
      <th className="align-middle">{name}</th>
      <td className="chart-cell">
        <Chart data={temps} color="blue" units="C" />
      </td>
      <td className="chart-cell">
        <Chart data={pressures} color="orange" units="hPa" />
      </td>
      <td className="chart-cell">
        <Chart data={humidities} color="green" units="%" />
      </td>

    </tr>
  );
}

export default WeatherItem;
