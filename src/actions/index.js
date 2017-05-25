const API_KEY = '74f204b599eb48687c44bd5b1b402dfd';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator
export function fetchWeather() {
    const url =`${ROOT_URL}&q=${city},us`;
    return {
        type: FETCH_WEATHER
    };

}