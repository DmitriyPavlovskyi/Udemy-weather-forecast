import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WeatherItem from './components/weatherItem';

class WeatherList extends Component {
  static propTypes = {

  };

  render() {
    const citiesList = this.props.weather.map((item) => {
      return <WeatherItem data={item} key={item.city.id}/>
    });

    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {citiesList}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
};

export default connect(mapStateToProps)(WeatherList);
