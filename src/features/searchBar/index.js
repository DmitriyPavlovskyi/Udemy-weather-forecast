// Container
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  static propTypes = {

  };

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-button">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };
}

export default SearchBar;
