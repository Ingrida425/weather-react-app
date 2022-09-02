import React from "react";
import "./RowSecond.css";

export default function RowSecond() {
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
        <div className="col-2 temp-city">25</div>
        <div className="col-3">
          <strong className="degree">
            <a href="/" className="celsiusLink">
              ℃
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
}
