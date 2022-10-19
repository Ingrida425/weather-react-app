import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
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
