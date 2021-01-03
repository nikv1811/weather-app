import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import {Container} from 'reactstrap'
import { fetchWeather } from './FetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            // console.log(query);
            setWeather(data);
            console.log(data);
            setQuery('');
        }
    }

    return (
      <div className="col-sm-12 col-md-10 offset-md-1 my-5 text-center">
        <div className="card d-flex align-items-center" >
        <img className="card-img img-fluid height-auto" alt="" src="https://images.pexels.com/photos/2931915/pexels-photo-2931915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-img-overlay">
            <div className="m-7 card-header form-group">
            <input className="form-control" type="text" placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            </div>
            
            {weather.main && (
                <div className="card-body">
                    <h1 className="card-title">
                        <span>{weather.name} </span>
                        <sup>{weather.sys.country}</sup>
                    </h1>
                    <div className="display-4 card-text">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="card-text">
                        <p className="mb-2">feels like   {Math.round(weather.main.feels_like)}<sup>&deg;C</sup></p>
                        <p>max   {Math.round(weather.main.temp_min)}<sup>&deg;C</sup>   min   {Math.round(weather.main.temp_max)}<sup>&deg;C</sup></p>
                    </div>
                    <div className="card-text">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                        <p>Wind Speed - {weather.wind.speed} km</p>
                        {/* <p>Visiblity - {}</p> */}
                    </div>
                </div>
            )}
            {/* <h1>{weather.name}</h1> */}
        </div>
        </div>
        </div>
    );
}

export default App;