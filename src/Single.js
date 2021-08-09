import { useParams, Link } from "react-router-dom";

const Single = ({ data }) => {
  const { name } = useParams();
  return (
    <div className="single">
      {data
        .filter((country) => country.name === name)
        .map((country) => {
          const { flag, name, population, capital, region, index } = country;
          return (
            <div className="container">
              <div className="row ">
                <div className="col-12" key={index}>
                  <div></div>
                  <Link to="/">
                    <h2>Back Home</h2>
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
  );
};

export default Single;
