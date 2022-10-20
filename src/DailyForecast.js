import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import Axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = `72ed8a85e3f275bf8313543794566f89`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
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
