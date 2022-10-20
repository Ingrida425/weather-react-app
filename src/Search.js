import React, { useState } from "react";
import axios from "axios";
import RowSecond from "./RowSecond";
import DailyForecast from "./DailyForecast";
import "./RowSecond.css";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function weatherInfo(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    console.log(response.data);
  }
  function search() {
    let apiKey = `72ed8a85e3f275bf8313543794566f89`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(weatherInfo);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="Search col-12">
          <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
              <form
                className="d-flex row-cols-lg-auto align-items-center"
                id="search-form"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search city"
                  aria-label="Search"
                  id="city-input"
                  onChange={handleCityChange}
                />
                <button className="btn " type="submit" id="search-button">
                  Search
                </button>
                <button className="btn" type="button" id="current-button">
                  Current
                </button>
              </form>
            </div>
          </nav>
        </div>
        <RowSecond data={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
