import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import { Axios } from "axios";

export default function DailyForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = `a2dda52dce059eb8a14e95aaa0db6ab7`;
  let longitude = -9.1;
  let latitude = 38.7;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  Axios.get(apiUrl).then(handleResponse);
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <WeatherIcon code="01d" size={40} />
          <div className="day"> Thu</div>

          <span className="temp-day-max">16°</span>
          <span className="temp-day-min">5°</span>
        </div>
      </div>
    </div>
  );
}
