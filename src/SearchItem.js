import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        role="search"
        placeholder="Search Items"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchItem;
