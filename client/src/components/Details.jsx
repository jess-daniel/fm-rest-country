import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import themeContext from "../contexts/themeContext";
import searchContext from "../contexts/searchContext";

const Details = ({ details }) => {
  const { theme } = useContext(themeContext);
  const { setFilteredData } = useContext(searchContext);
  const history = useHistory();
  const popInt = new Intl.NumberFormat().format(details.population);
  const langLen = details.languages.length;
  const currencyLen = details.currencies.length;

  const goHome = (e) => {
    setFilteredData({});
    history.push("/");
  };

  return (
    <>
      <div
        className="flex flex-col items-center"
        id={theme ? "dark-secondary" : null}
      >
        <button
          className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg self-start"
          id={theme ? "dark-primary" : null}
          onClick={goHome}
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
          <div className="flex leading-8 text-left">
            <div className="flex flex-col px-5">
              <div>
                <h1 className=" text-xl font-bold">{details.name}</h1>
              </div>
              <p>Native Name: {details.nativeName}</p>
              <p>Population: {popInt}</p>
              <p>Region: {details.region}</p>
              <p>Subregion: {details.subregion}</p>
              <p>Capital: {details.capital}</p>
            </div>
            <div className="flex flex-col">
              <br />
              <p>Top Level Domain: {details.topLevelDomain}</p>
              <p>
                Currencies:{" "}
                {details.currencies.map((obj, i) =>
                  i === currencyLen - 1 ? (
                    <span key={obj.name}>{obj.name}</span>
                  ) : (
                    <span key={obj.name}>{obj.name}, </span>
                  )
                )}
              </p>

              <p>
                Languages:{" "}
                {details.languages.map((obj, i) =>
                  i === langLen - 1 ? (
                    <span key={obj.name}>{obj.name}</span>
                  ) : (
                    <span key={obj.name}>{obj.name}, </span>
                  )
                )}
              </p>
            </div>
          </div>
        </div>
        {/* TODO: add in border countries section */}
      </div>
    </>
  );
};

export default Details;
