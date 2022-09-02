import React from "react";
import "./RowFourth.css";
import ForecastWeekdays from "./ForecastWeekdays";

export default function RowFourth() {
  return (
    <div className="RowFourth">
      <div className="container" id="forecast">
        <div className="row">
          <ForecastWeekdays />
        </div>
      </div>
    </div>
  );
}
