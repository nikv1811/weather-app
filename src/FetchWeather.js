import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = '145cca600feab550353bc835d328a488'


export const fetchWeather = async (query) => {
    const { data } = await axios.get(url, {
        params: {
            q: query,
            units: 'metric',
            lang: 'en',
            APPID: apiKey,
        }
    });

    return data;
}
