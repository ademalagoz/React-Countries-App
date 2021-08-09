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
        <div>
          <button onClick={modeHandle}>Mode</button>
        </div>
      </div>
      <div className="searchSelect">
        <input value={search} onChange={searchHandle} />
        <select onChange={selectHandle}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
      </div>
      <div className="container">
        <div className="row ">
          <Countries countries={countries} search={search} />
        </div>
      </div>
    </body>
  );
};

export default Home;
