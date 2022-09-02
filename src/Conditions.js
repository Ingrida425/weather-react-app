import React from "react";
import "./Conditions.css";

export default function Contitions() {
  return (
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
  );
}
