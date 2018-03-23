import { FETCH_WEATHER } from '../constants';
import axios from 'axios';

const API_KEY = '81cefa0d33e2d5a358a469862785a4e6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  // payload returning promise in here
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
