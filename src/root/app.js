import React, { Component } from 'react';
import SearchBar from '../features/searchBar/index';
import WeatherList from '../features/weatherList/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
