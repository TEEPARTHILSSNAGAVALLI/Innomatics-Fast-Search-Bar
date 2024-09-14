import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      {/* Render Suggestions Dropdown */}
      {suggestions.length > 0 && showSuggestions && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
