import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";

const Single = ({ data }) => {
  const [mode, setMode] = useState("");
  const modeHandle = () => {
    mode === "" ? setMode("darkgray") : setMode("");
  };
  const { name } = useParams();
  return (
    <div className="singleAll">
      <div className={mode}>
        <button type="button" class="btn btn-secondary" onClick={modeHandle}>
          Dark Mode
        </button>
        <div className="single">
          {data
            .filter((country) => country.name === name)
            .map((country) => {
              const { flag, name, population, capital, region, index } =
                country;
              return (
                <div className="container">
                  <div className="row ">
                    <div className="col-12" key={index}>
                      <div></div>
                      <Link to="/">
                        <h2 className="backHome">Back Home</h2>
                      </Link>
                      <h2>{name}</h2>
                      <img className="singleFlag" src={flag} alt={name} />

                      <p>
                        <strong>Population:</strong>
                        {population}
                      </p>
                      <p>
                        <strong>Region:</strong>
                        {region}
                      </p>
                      <p>
                        <strong>Capital:</strong>
                        {capital}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Single;
