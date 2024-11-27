import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button">
        <img
          src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
          alt="Search Icon"
        />
      </button>
    </div>
  );
};

export default SearchBar;
