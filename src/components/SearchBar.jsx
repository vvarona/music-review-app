import React from "react";

export default function SearchBar(prop) {
  return (
    <form onSubmit={prop.handleSubmit}>
      <label htmlFor="albumSearch">Search for an album</label>
      <input
        type="text"
        name="albumSearch"
        id="albumSearch"
        placeholder="Search for an artist"
        onChange={prop.handleChange}
        value={prop.searchValue}
      />
    </form>
  );
}
