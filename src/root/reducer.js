import { combineReducers } from 'redux';
import WeatherReducer from '../features/searchBar/reducers';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
