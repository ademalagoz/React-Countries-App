import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ countries, search }) => {
  return (
    <div className="row">
      {countries
        .filter((country) =>
          country.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((country) => {
          const { flag, name, population, capital, region, index } = country;
          return (
            <div className="col-md-3" key={index}>
              <div className="screen">
                <Link to={`/countries/${name}`}>
                  <img className="flag" src={flag} alt={name} />
                </Link>
                <h3>{name}</h3>
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
          );
        })}
    </div>
  );
};

export default Countries;
