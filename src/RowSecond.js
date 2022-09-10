import React from "react";

import FormatedDate from "./FormatedDate";
import "./RowSecond.css";

export default function RowSecond(props) {
  return (
    <div className="RowSecond">
      <div className="row">
        <div className="col-1 clearfix float-left">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="cityIcon"
          />
        </div>
        <h1 className="col-6 cityName"> {props.data.city}</h1>
        <div className="col-2 temp-city">
          {Math.round(props.data.temperature)}{" "}
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
