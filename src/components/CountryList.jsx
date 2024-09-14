import React from "react";
import "./CountryList.css"; // External CSS for styling

const CountryList = ({ filteredResults }) => {
  return (
    <div className="country-list">
      {filteredResults.length > 0 ? (
        filteredResults.map((item, index) => (
          <div key={index} className="country-card">
            <h3>{item.country}</h3>
            <p>
              <strong>Capital:</strong> {item.capital}
            </p>
            <p>
              <strong>Population:</strong> {item.population.toLocaleString()}
            </p>
            <p>
              <strong>Official Language:</strong> {item.official_language}
            </p>
            <p>
              <strong>Currency:</strong> {item.currency}
            </p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default CountryList;
