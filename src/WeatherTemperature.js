import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature col-2 temp-city">
      <span> {Math.round(props.celsius)}</span>
      <span className="degree">℃</span>
    </div>
  );
}
