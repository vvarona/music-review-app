import React from "react";
import styles from "../assets/styles/SearchBar.module.css"

export default function SearchBar(prop) {
  return (
    <form className={styles.container} onSubmit={prop.handleSubmit}>
      <label 
      className={styles.label}
      htmlFor="albumSearch">Search for an album</label>
      <input
        className={styles.input}
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
