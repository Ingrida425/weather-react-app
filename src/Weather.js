import React from "react";

import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function RowSecond(props) {
  return (
    <div className="RowSecond">
      <div className="row">
        <div className="col-1 clearfix float-left cityIcon">
          <WeatherIcon code={props.data.icon} size={54} />
        </div>
        <h1 className="cityName col-5"> {props.data.city}</h1>
        <div className="temp-city col-5">
          <span> {Math.round(props.data.temperature)}</span>
          <span className="degree">℃</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="lastUpdated">
            <li>
              Last updated:
              <FormatedDate date={props.data.date} />
            </li>
            <li>{props.data.description} </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="conditions">
            <li>
              Real feel: <span>{Math.round(props.data.realFeel)} </span> ℃
            </li>
            <li>
              Humidity: <span>{props.data.humidity} </span> %
            </li>
            <li>
              Wind: <span>{Math.round(props.data.wind)} </span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
