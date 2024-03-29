import axios from 'axios';

const API_KEY = '483a1a4135286cde4a0c3d2d8acaca8f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request:', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
