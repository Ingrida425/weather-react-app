import React, { useState } from "react";
import axios from "axios";
import RowSecond from "./RowSecond";
import "./RowSecond.css";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function weatherInfo(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="Search col-10">
          <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
              <form className="d-flex" id="search-form">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search city"
                  aria-label="Search"
                  id="city-input"
                />
                <button className="btn" type="submit" id="search-button">
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
      </div>
    );
  } else {
    let apiKey = `72ed8a85e3f275bf8313543794566f89`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(weatherInfo);

    return "Loading...";
  }
}
