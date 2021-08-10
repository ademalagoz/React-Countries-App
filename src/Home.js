import React, { useState } from "react";
import Countries from "./Countries";

const Home = ({ data }) => {
  const [countries, setCountries] = useState(data);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("");

  const searchHandle = (e) => {
    let searchInput = e.target.value;
    setSearch(searchInput);
  };

  const selectHandle = (e) => {
    const index = e.target.value;
    const filteredRegion = data.filter((country) => country.region === index);
    index !== "All" ? setCountries(filteredRegion) : setCountries(data);
  };

  const modeHandle = () => {
    mode === "" ? setMode("darkgray") : setMode("");
  };
  return (
    <body className={mode}>
      <div className="navbar">
        <h2>Where in the world?</h2>
        <button type="button" class="btn btn-secondary" onClick={modeHandle}>
          Dark Mode
        </button>
      </div>

      <div className="searchSelect">
        <form className="form-inline">
          <input
            value={search}
            onChange={searchHandle}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for a country"
            aria-label="Search"
          />
        </form>
        <select
          onChange={selectHandle}
          className="form-control"
          style={{ width: "200px" }}
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
      </div>
      <Countries countries={countries} search={search} />
    </body>
  );
};

export default Home;
