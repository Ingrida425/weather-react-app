import React, { useState } from "react";
import axios from "axios";
import LastUpdated from "./LastUpdated";
import "./RowSecond.css";

export default function RowSecond() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState("");
  function weatherInfo(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="RowSecond">
        <div className="row">
          <div className="col-1 clearfix float-left">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
              className="cityIcon"
            />
          </div>
          <h1 className="col-6 cityName"> Vilnius</h1>
          <div className="col-2 temp-city">{Math.round(temperature)} </div>
          <div className="col-3">
            <strong className="degree">
              <a href="/" className="celsiusLink">
                ℃
              </a>
            </strong>
          </div>
        </div>
        <div className="row">
          <LastUpdated />
          <div className="col-md-3">
            <ul className="conditions">
              <li>
                Real feel: <span id="real-feel">23</span> ℃
              </li>
              <li>
                Humidity: <span id="humidity">15</span> %
              </li>
              <li>
                Wind: <span id="wind">12</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `72ed8a85e3f275bf8313543794566f89`;
    let city = "Vilnius";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(weatherInfo);

    return "Loading...";
  }
}
