import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature temp-city col-5">
        <span> {Math.round(props.celsius)}</span>
        <span className="degree">
          ℃|
          <a href="/" onClick={convertToFahrenheit}>
            ℉
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature temp-city col-5 ">
        <span> {Math.round(fahrenheit)}</span>
        <span className="degree">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            ℃
          </a>
          | ℉{" "}
        </span>
      </div>
    );
  }
}
