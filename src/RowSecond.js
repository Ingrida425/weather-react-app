import React, { useState } from "react";
import axios from "axios";
import "./RowSecond.css";

export default function RowSecond(props) {
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
      date: "Wed 15:40",
    });
    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="RowSecond">
        <div className="row">
          <div className="col-1 clearfix float-left">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="cityIcon"
            />
          </div>
          <h1 className="col-6 cityName"> {weatherData.city}</h1>
          <div className="col-2 temp-city">
            {Math.round(weatherData.temperature)}{" "}
          </div>
          <div className="col-3">
            <strong className="degree">
              <a href="/" className="celsiusLink">
                ℃
              </a>
            </strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="lastUpdated">
              <li>Last updated: {weatherData.date} </li>
              <li>{weatherData.description} </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="conditions">
              <li>
                Real feel: <span>{Math.round(weatherData.realFeel)} </span> ℃
              </li>
              <li>
                Humidity: <span>{weatherData.humidity} </span> %
              </li>
              <li>
                Wind: <span>{Math.round(weatherData.wind)} </span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `72ed8a85e3f275bf8313543794566f89`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(weatherInfo);

    return "Loading...";
  }
}
