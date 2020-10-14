import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import themeContext from "../contexts/themeContext";

const Details = ({ details }) => {
  const { theme } = useContext(themeContext);
  const history = useHistory();
  const popInt = new Intl.NumberFormat().format(details.population);

  const langLen = details.languages.length;

  return (
    <>
      <div
        className="flex flex-col h-screen items-center"
        id={theme ? "dark-secondary" : null}
      >
        <button
          className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg self-start"
          id={theme ? "dark-primary" : null}
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
        <div className="flex justify-around w-full px-8 items-center">
          <div>
            <img
              style={{ width: "350px", height: "250px" }}
              src={details.flag}
              alt={`flag of ${details.name}`}
            />
          </div>
          <div className="flex leading-8">
            <div className="flex flex-col px-5">
              <div>
                <h1>{details.name}</h1>
              </div>
              <p>Native Name: {details.nativeName}</p>
              <p>Population: {popInt}</p>
              <p>Region: {details.region}</p>
              <p>Subregion: {details.subregion}</p>
              <p>Capital: {details.capital}</p>
            </div>
            <div className="flex flex-col">
              <p>Top Level Domain: {details.topLevelDomain}</p>
              <p>Currencies: {details.currencies.map((obj) => obj.name)}</p>

              <p>
                Languages:{" "}
                {details.languages.map((obj, i) =>
                  i === langLen - 1 ? (
                    <span>{obj.name}</span>
                  ) : (
                    <span>{obj.name}, </span>
                  )
                )}
              </p>

              <p>Subregion: {details.subregion}</p>
            </div>
          </div>
        </div>
        {/* TODO: add in border countries section */}
      </div>
    </>
  );
};

export default Details;
