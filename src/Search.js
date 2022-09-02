import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search col-10">
      <nav className="navbar navbar-light bg-transparent">
        <div className="container-fluid">
          <form className="d-flex" id="search-form">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search city"
              aria-label="Search"
              id="city-input"
            />
            <button className="btn" type="submit" id="search-button">
              Search
            </button>
            <button className="btn" type="button" id="current-button">
              Current
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
