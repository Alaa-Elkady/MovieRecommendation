import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search ..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <a href="#" className="search-btn">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
};

export default SearchBar;
