import React from 'react';
import PropTypes from 'prop-types';

function WeatherItem(props) {
  const name = props.data.city.name;

  return (
    <tr>
      <td>
        {name}
      </td>
    </tr>
  );
}

export default WeatherItem;
