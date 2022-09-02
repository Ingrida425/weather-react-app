import React from "react";
import LastUpdated from "./LastUpdated";
import Conditions from "./Conditions";
import "./RowThird.css";

export default function RowThird() {
  return (
    <div className="RowThird row">
      <LastUpdated />
      <Conditions />
    </div>
  );
}
