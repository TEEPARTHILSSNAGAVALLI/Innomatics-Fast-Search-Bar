import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import data from "./data/API.json"; // Your JSON data

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // Prioritize countries that start with the search term
      const startsWithResults = data.filter(
        (country) =>
          country.country.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
          country.capital.toLowerCase().startsWith(searchTerm.toLowerCase()),
      );

      // Include countries that contain the search term but don’t start with it
      const includesResults = data.filter(
        (country) =>
          (country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.capital.toLowerCase().includes(searchTerm.toLowerCase())) &&
          !startsWithResults.includes(country),
      );

      const combinedResults = [...startsWithResults, ...includesResults];
      setFilteredResults(combinedResults);

      // Generate suggestions (prioritize startsWith results first)
      const suggestionList = combinedResults.map((result) => result.country);
      setSuggestions(suggestionList);
    } else {
      setFilteredResults([]);
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={suggestions}
      />
      <CountryList filteredResults={filteredResults} />
    </div>
  );
};

export default App;
