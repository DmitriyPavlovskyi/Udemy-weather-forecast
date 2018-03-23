import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function WeatherItem(props) {
  const name = props.data.city.name;
  const temps = props.data.list.map(weather => weather.main.temp);

  return (
    <tr>
      <td>{name}</td>
      <td>
        <Sparklines height={150} width={300} data={temps}>
          <SparklinesLine color="blue"/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </td>

    </tr>
  );
}

export default WeatherItem;
